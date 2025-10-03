# Ragpi Source Sync Script

This directory contains automation scripts for managing Ragpi sources.

## sync_sources.py

Automatically syncs Ragpi sources from GitHub repositories and sitemaps.

### Features

- **Repository Discovery**: Finds GitHub repositories by organization and topic tag
- **README Sources**: Creates sources for README files, including subdirectories
- **Issue Sources**: Creates sources for GitHub issues
- **Sitemap Sources**: Adds documentation sites via sitemap
- **Automatic Cleanup**: Deletes sources that no longer match criteria
- **Idempotent**: Safe to run repeatedly - only updates when needed

### Environment Variables

Required:
- `GITHUB_TOKEN`: GitHub personal access token for API access
- `RAGPI_API_KEY`: API key for Ragpi instance
- `RAGPI_HOST`: Base URL of Ragpi instance (e.g., `https://api.ragpi.io`)

Optional:
- `GITHUB_ORG`: Organization to scan (default: `eidp`)
- `GITHUB_TOPIC`: Topic filter (default: `actions`)
- `SITEMAP_URL`: Documentation sitemap URL (default: `https://docs.eidp.com/sitemap.xml`)

### Usage

#### Local Testing

```bash
export GITHUB_TOKEN="your_github_token"
export RAGPI_API_KEY="your_ragpi_api_key"
export RAGPI_HOST="https://your-ragpi-instance.com"
export GITHUB_ORG="eidp"
export GITHUB_TOPIC="actions"

python scripts/sync_sources.py
```

#### GitHub Actions

The script runs automatically via the `sync-sources.yml` workflow:

- **Schedule**: Daily at midnight UTC
- **Manual**: Via workflow_dispatch in GitHub Actions UI

Configure these secrets in your GitHub repository settings:
- `RAGPI_API_KEY`
- `RAGPI_HOST`

The `GITHUB_TOKEN` is automatically provided by GitHub Actions.

### Source Naming

Sources are named using the pattern: `{org}-{repo}-{type}`

Examples:
- `eidp-my-repo-readme` - README files
- `eidp-my-repo-issues` - GitHub issues
- `docs-eidp-com` - Sitemap

### Source Management

All sources created by this script have descriptions starting with "Auto-managed:".
This allows the script to identify and clean up stale sources automatically.

**Important**: Do not manually edit sources with "Auto-managed:" descriptions, as they will be overwritten or deleted by the script.

### Error Handling

The script will exit with a non-zero status code if any errors occur:
- Missing or invalid credentials
- GitHub API rate limits exceeded
- Ragpi API errors
- Repository access issues

This ensures that GitHub Actions workflows fail visibly when there are problems.

### Output

The script provides detailed output including:
- Repositories discovered
- Sources created/updated/deleted
- Summary statistics
- Error messages with full context
