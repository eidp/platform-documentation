---
sidebar_label: GitHub Actions
---

# GitHub Actions

EIDP provides standardized GitHub Actions and reusable workflows that can be used to build CI/CD pipelines. These actions enforce security, quality, and compliance while remaining extensible for team-specific needs.

## Available Actions

We have developed several GitHub Actions to facilitate common tasks in CI/CD pipelines. The actions can be found in separate repositories within our GitHub organization.
The actions are logically grouped by their functionality, such as: Terraform, Kubernetes, Security, and common actions.

A full list of repositories containing GitHub actions can be found in our GitHub organization: [EIDP GitHub Actions](https://github.com/orgs/eidp/repositories?q=github-actions)

Each repository contains a README that contains a list of actions, their usage instructions and examples.

## Reusable Workflows

Some of the action repositories also contain reusable workflows that can be included in your own GitHub Actions workflows.
These reusable workflows provide entire workflows that provide the golden path for more complex tasks, such as an entire pipeline for a Python application.
Under the hood, these reusable workflows use the individual actions to perform their tasks.
The reusable workflows are less flexible and more opinionated than using the individual actions, but they provide a quick way to get started with a best-practice pipeline.

A full list of our reusable workflows can be found in our Actions workflows repository: [EIDP GitHub Actions Workflows](https://github.com/eidp/actions-workflows)
