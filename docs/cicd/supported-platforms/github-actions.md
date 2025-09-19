---
sidebar_label: GitHub Actions
sidebar_position: 2
---

# GitHub Actions

EIDP provides standardized GitHub Actions and reusable workflows that can be used to build CI/CD pipelines. These actions enforce security, quality, and compliance while remaining extensible for team-specific needs.

## Available Actions

We have developed several GitHub Actions to facilitate common tasks in CI/CD pipelines. The actions can be found in separate repositories within our GitHub organization.
The actions are logically grouped by their functionality, such as: Terraform, Kubernetes, Security, and common actions.

The following repositories provide GitHub Actions:

- [Common Actions](https://github.com/eidp/actions-common): Common actions workflow actions for general tasks. These actions are not specific to any technology or platform.
- [Docker Actions](https://github.com/eidp/actions-docker): Actions for building, pushing and promoting Docker images.
- [Helm Actions](https://github.com/eidp/actions-helm): Actions for publishing and promoting Helm charts and releases.
- [Semantic versioning Actions](https://github.com/eidp/actions-semver): Actions for generating and managing semantic versions.
- [Terraform Actions](https://github.com/eidp/actions-terraform): Actions for managing Terraform resources.

A full list of repositories containing GitHub actions can be found in our GitHub organization: [EIDP GitHub Actions](https://github.com/orgs/eidp/repositories?q=github-actions)

Each repository contains a README that contains a list of actions, their usage instructions and examples.

## Reusable Workflows

Some of the action repositories also contain reusable workflows that can be included in your own GitHub Actions workflows.
These reusable workflows provide entire workflows that provide the golden path for more complex tasks, such as an entire pipeline for a Python application.
Under the hood, these reusable workflows use the individual actions to perform their tasks.
The reusable workflows are less flexible and more opinionated than using the individual actions, but they provide a quick way to get started with a best-practice pipeline.

The following repositories provide reusable workflows:

- [Common Actions](https://github.com/eidp/actions-common): Common workflows for general tasks, like running Renovate.
- [Terraform Actions](https://github.com/eidp/actions-terraform): Reusable workflows for managing Terraform resources.
