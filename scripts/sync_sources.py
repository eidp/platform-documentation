#!/usr/bin/env python3
"""
Sync Ragpi Sources from GitHub

This script automatically manages ragpi sources by:
1. Discovering repositories in a GitHub organization with a specific topic
2. Creating/updating sources for README files and GitHub issues
3. Adding a sitemap source for documentation
4. Deleting sources that no longer match criteria
"""

import os
import sys
import re
import time
from typing import Any
from dataclasses import dataclass, field

import requests


@dataclass
class SyncSummary:
    """Track operations performed during sync."""

    repos_discovered: int = 0
    sources_created: list[str] = field(default_factory=list)
    sources_updated: list[str] = field(default_factory=list)
    sources_deleted: list[str] = field(default_factory=list)
    sources_skipped: list[str] = field(default_factory=list)

    def print_summary(self):
        """Print formatted summary of operations."""
        print("\n" + "=" * 60)
        print("SYNC SUMMARY")
        print("=" * 60)
        print(f"Repositories discovered: {self.repos_discovered}")
        print(f"Sources created: {len(self.sources_created)}")
        print(f"Sources updated: {len(self.sources_updated)}")
        print(f"Sources deleted: {len(self.sources_deleted)}")
        print(f"Sources skipped: {len(self.sources_skipped)}")

        if self.sources_created:
            print("\nCreated:")
            for name in self.sources_created:
                print(f"  ✓ {name}")

        if self.sources_updated:
            print("\nUpdated:")
            for name in self.sources_updated:
                print(f"  ↻ {name}")

        if self.sources_deleted:
            print("\nDeleted:")
            for name in self.sources_deleted:
                print(f"  ✗ {name}")

        if self.sources_skipped:
            print("\nSkipped (errors):")
            for name in self.sources_skipped:
                print(f"  ⚠ {name}")

        print("=" * 60)


class GitHubClient:
    """Client for GitHub API operations."""

    def __init__(self, token: str):
        self.token = token
        self.headers = {
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "X-GitHub-Api-Version": "2022-11-28",
        }

    def search_repositories(self, org: str, topic: str) -> list[dict[str, Any]]:
        """Search for repositories by organization and topic (public only)."""
        url = "https://api.github.com/search/repositories"
        params = {"q": f"topic:{topic} org:{org} is:public", "per_page": 100}

        repos = []
        while url:
            print(f"Fetching repositories from GitHub API...")
            response = requests.get(url, headers=self.headers, params=params)
            response.raise_for_status()

            data = response.json()
            repos.extend(data["items"])
            print(f"Found {len(data['items'])} repositories (total: {len(repos)})")

            # Check for next page in Link header
            url = None
            if "Link" in response.headers:
                links = self._parse_link_header(response.headers["Link"])
                url = links.get("next")
            params = None  # Clear params for subsequent requests (URL has them)

        return repos

    def get_default_branch(self, owner: str, repo: str) -> str:
        """Get the default branch of a repository."""
        url = f"https://api.github.com/repos/{owner}/{repo}"
        response = requests.get(url, headers=self.headers)
        response.raise_for_status()
        return response.json()["default_branch"]

    def get_repository_tree(
        self, owner: str, repo: str, branch: str
    ) -> list[dict[str, Any]]:
        """Get repository file tree recursively."""
        url = f"https://api.github.com/repos/{owner}/{repo}/git/trees/{branch}"
        params = {"recursive": "1"}

        response = requests.get(url, headers=self.headers, params=params)
        response.raise_for_status()

        return response.json().get("tree", [])

    def find_readme_subdirs(self, owner: str, repo: str) -> list[str]:
        """Find all subdirectories containing README files."""
        print(f"  Analyzing {owner}/{repo} for READMEs...")

        # Get default branch
        default_branch = self.get_default_branch(owner, repo)

        # Get tree
        tree = self.get_repository_tree(owner, repo, default_branch)

        # Find README files
        subdirs = set()
        readme_pattern = re.compile(r"(^|/)readme(\.md)?$", re.IGNORECASE)

        for item in tree:
            if item["type"] == "blob":
                path = item["path"]
                # Check if this is a README file
                if readme_pattern.search(path):
                    # Extract directory (exclude root)
                    dir_path = os.path.dirname(path)
                    if dir_path:  # Not root
                        subdirs.add(dir_path)

        result = sorted(subdirs)
        print(f"    Found {len(result)} subdirectories with READMEs")
        return result

    @staticmethod
    def _parse_link_header(header: str) -> dict[str, str]:
        """Parse GitHub Link header for pagination."""
        links = {}
        for link in header.split(", "):
            parts = link.split("; ")
            if len(parts) == 2:
                url = parts[0].strip("<>")
                rel = parts[1].replace('rel="', "").replace('"', "")
                links[rel] = url
        return links


class RagpiClient:
    """Client for Ragpi API operations."""

    def __init__(self, host: str, api_key: str):
        self.host = host.rstrip("/")
        self.api_key = api_key
        self.headers = {
            "X-API-Key": api_key,
            "Content-Type": "application/json",
        }

    def list_sources(self) -> list[dict[str, Any]]:
        """List all sources."""
        url = f"{self.host}/sources"
        response = requests.get(url, headers=self.headers)
        response.raise_for_status()
        return response.json()

    def get_source(self, name: str) -> dict[str, Any] | None:
        """Get a specific source. Returns None if not found."""
        url = f"{self.host}/sources/{name}"
        response = requests.get(url, headers=self.headers)

        if response.status_code == 404:
            return None

        response.raise_for_status()
        return response.json()

    def create_source(
        self, name: str, description: str, connector: dict[str, Any]
    ) -> dict[str, Any]:
        """Create a new source."""
        url = f"{self.host}/sources"
        payload = {"name": name, "description": description, "connector": connector}

        response = requests.post(url, headers=self.headers, json=payload)
        response.raise_for_status()
        return response.json()

    def update_source(
        self, name: str, description: str, connector: dict[str, Any]
    ) -> dict[str, Any]:
        """Update an existing source."""
        url = f"{self.host}/sources/{name}"
        payload = {"sync": True, "description": description, "connector": connector}

        response = requests.put(url, headers=self.headers, json=payload)
        response.raise_for_status()
        return response.json()

    def delete_source(self, name: str):
        """Delete a source."""
        url = f"{self.host}/sources/{name}"
        response = requests.delete(url, headers=self.headers)
        response.raise_for_status()

    def ensure_source(
        self, name: str, description: str, connector: dict[str, Any]
    ) -> str:
        """
        Create or update a source, always triggering sync.
        Returns: 'created' or 'updated'
        """
        existing = self.get_source(name)

        if existing is None:
            print(f"  Creating source: {name}")
            self.create_source(name, description, connector)
            return "created"

        # Always update to trigger sync, even if config unchanged
        print(f"  Updating source: {name}")
        self.update_source(name, description, connector)
        return "updated"


def sanitize_source_name(name: str) -> str:
    """Sanitize a name to comply with ragpi naming requirements."""
    # Replace invalid characters with hyphens
    sanitized = re.sub(r"[^a-zA-Z0-9_-]", "-", name)

    # Ensure starts and ends with alphanumeric
    sanitized = re.sub(r"^[^a-zA-Z0-9]+", "", sanitized)
    sanitized = re.sub(r"[^a-zA-Z0-9]+$", "", sanitized)

    # Collapse multiple hyphens/underscores
    sanitized = re.sub(r"[-_]+", "-", sanitized)

    return sanitized


def sync_github_readme_source(
    github: GitHubClient,
    ragpi: RagpiClient,
    org: str,
    repo_name: str,
    summary: SyncSummary,
):
    """Sync a github_readme source for a repository."""
    source_name = sanitize_source_name(f"{org}-{repo_name}-readme")
    description = f"Auto-managed: README files from {org}/{repo_name}"

    # Find subdirectories with READMEs
    try:
        sub_dirs = github.find_readme_subdirs(org, repo_name)
    except Exception as e:
        print(f"  ⚠ Error finding READMEs in {org}/{repo_name}: {e}")
        raise

    connector = {
        "type": "github_readme",
        "repo_owner": org,
        "repo_name": repo_name,
        "include_root": True,
        "sub_dirs": sub_dirs if sub_dirs else None,
        "ref": None,
    }

    result = ragpi.ensure_source(source_name, description, connector)

    if result == "created":
        summary.sources_created.append(source_name)
    else:
        summary.sources_updated.append(source_name)

    # Rate limiting: wait between operations
    time.sleep(10)


def sync_github_issues_source(
    ragpi: RagpiClient, org: str, repo_name: str, summary: SyncSummary
):
    """Sync a github_issues source for a repository."""
    source_name = sanitize_source_name(f"{org}-{repo_name}-issues")
    description = f"Auto-managed: Issues from {org}/{repo_name}"

    connector = {
        "type": "github_issues",
        "repo_owner": org,
        "repo_name": repo_name,
        "state": "all",
        "include_labels": None,
        "exclude_labels": None,
        "issue_age_limit": None,
    }

    result = ragpi.ensure_source(source_name, description, connector)

    if result == "created":
        summary.sources_created.append(source_name)
    else:
        summary.sources_updated.append(source_name)

    # Rate limiting: wait between operations
    time.sleep(10)


def sync_sitemap_source(
    ragpi: RagpiClient, sitemap_url: str, summary: SyncSummary
):
    """Sync the sitemap source."""
    try:
        # Extract domain for naming and root URL for include pattern
        domain_match = re.search(r"(https?://[^/]+)", sitemap_url)
        if not domain_match:
            raise ValueError(f"Invalid sitemap URL: {sitemap_url}")

        root_url = domain_match.group(1)
        domain_name = re.search(r"https?://([^/]+)", sitemap_url).group(1).replace(".", "-")
        source_name = sanitize_source_name(f"{domain_name}")
        description = f"Auto-managed: Documentation from {sitemap_url}"

        connector = {
            "type": "sitemap",
            "sitemap_url": sitemap_url,
            "include_pattern": f"{root_url}/*",
            "exclude_pattern": None,
        }

        print(f"  Syncing sitemap source: {source_name}")
        result = ragpi.ensure_source(source_name, description, connector)

        if result == "created":
            summary.sources_created.append(source_name)
        else:
            summary.sources_updated.append(source_name)

        # Rate limiting: wait between operations
        time.sleep(10)
    except Exception as e:
        print(f"  ⚠ Error syncing sitemap {sitemap_url}: {e}")
        summary.sources_skipped.append(sitemap_url)
        # Don't re-raise - just log and continue


def delete_stale_sources(
    ragpi: RagpiClient, expected_sources: set[str], summary: SyncSummary
):
    """Delete sources that are auto-managed but no longer expected."""
    print("\nChecking for stale sources...")

    all_sources = ragpi.list_sources()
    managed_sources = [
        s for s in all_sources if s.get("description", "").startswith("Auto-managed:")
    ]

    for source in managed_sources:
        source_name = source["name"]
        if source_name not in expected_sources:
            print(f"  Deleting stale source: {source_name}")
            try:
                ragpi.delete_source(source_name)
                summary.sources_deleted.append(source_name)
            except Exception as e:
                print(f"  ⚠ Error deleting {source_name}: {e}")
                raise


def main():
    """Main execution function."""
    print("Starting Ragpi source sync...\n")

    # Load environment variables
    github_token = os.getenv("GITHUB_TOKEN")
    ragpi_api_key = os.getenv("RAGPI_API_KEY")
    ragpi_host = os.getenv("RAGPI_HOST")
    github_org = os.getenv("GITHUB_ORG", "eidp")
    github_topic = os.getenv("GITHUB_TOPIC", "actions")
    sitemap_urls_str = os.getenv("SITEMAP_URLS", "https://docs.eidp.com/sitemap.xml")
    sitemap_urls = [url.strip() for url in sitemap_urls_str.split(",") if url.strip()]

    # Validate required variables
    missing = []
    if not github_token:
        missing.append("GITHUB_TOKEN")
    if not ragpi_api_key:
        missing.append("RAGPI_API_KEY")
    if not ragpi_host:
        missing.append("RAGPI_HOST")

    if missing:
        print(f"ERROR: Missing required environment variables: {', '.join(missing)}")
        sys.exit(1)

    print(f"Configuration:")
    print(f"  GitHub Org: {github_org}")
    print(f"  GitHub Topic: {github_topic}")
    print(f"  Ragpi Host: {ragpi_host}")
    print(f"  Sitemap URLs: {', '.join(sitemap_urls)}")
    print()

    # Initialize clients
    github = GitHubClient(github_token)
    ragpi = RagpiClient(ragpi_host, ragpi_api_key)
    summary = SyncSummary()

    try:
        # Discover repositories
        repos = github.search_repositories(github_org, github_topic)
        summary.repos_discovered = len(repos)
        print(f"\nDiscovered {len(repos)} repositories with topic '{github_topic}'")

        # Track expected sources for cleanup
        expected_sources = set()

        # Sync sources for each repository
        for repo in repos:
            repo_name = repo["name"]
            print(f"\nProcessing repository: {repo_name}")

            # GitHub README source
            readme_source_name = sanitize_source_name(f"{github_org}-{repo_name}-readme")
            expected_sources.add(readme_source_name)
            sync_github_readme_source(github, ragpi, github_org, repo_name, summary)

            # GitHub Issues source
            issues_source_name = sanitize_source_name(f"{github_org}-{repo_name}-issues")
            expected_sources.add(issues_source_name)
            sync_github_issues_source(ragpi, github_org, repo_name, summary)

        # Sync sitemap sources
        if sitemap_urls:
            print(f"\nSyncing {len(sitemap_urls)} sitemap source(s)...")
            for sitemap_url in sitemap_urls:
                print(f"\n  Processing sitemap: {sitemap_url}")
                domain = re.search(r"https?://([^/]+)", sitemap_url)
                domain_name = domain.group(1).replace(".", "-") if domain else "docs"
                sitemap_source_name = sanitize_source_name(f"{domain_name}")
                expected_sources.add(sitemap_source_name)
                sync_sitemap_source(ragpi, sitemap_url, summary)
        else:
            print("\nNo sitemap URLs provided, skipping sitemap sync")

        # Delete stale sources
        delete_stale_sources(ragpi, expected_sources, summary)

        # Print summary
        summary.print_summary()

        print("\n✅ Sync completed successfully!")

    except requests.exceptions.RequestException as e:
        print(f"\n❌ HTTP Error: {e}")
        if hasattr(e, "response") and e.response is not None:
            print(f"Response status: {e.response.status_code}")
            print(f"Response body: {e.response.text}")
        sys.exit(1)
    except Exception as e:
        print(f"\n❌ Error: {e}")
        import traceback

        traceback.print_exc()
        sys.exit(1)


if __name__ == "__main__":
    main()
