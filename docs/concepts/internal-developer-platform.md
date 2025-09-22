---
sidebar_label: What is an IDP?
sidebar_position: 1
---

# What is an Internal Developer Platform?

An Internal Developer Platform (IDP) is a curated collection of tools, services, and infrastructure that enables
development teams to efficiently build, deploy, and manage software applications.
It provides standardized, self-service capabilities that abstract away infrastructure complexity while maintaining
flexibility for developers.

## Core Purpose

IDPs address a fundamental challenge in modern software development: the growing complexity of infrastructure and
operational requirements.
As organizations scale, development teams often spend significant time managing infrastructure rather than delivering
business value.
An IDP solves this by providing:

* **Self-service infrastructure**: developers can provision resources without waiting for operations teams.
* **Standardized workflows**: consistent processes for building, testing, and deploying applications.
* **Abstraction of complexity**: hiding infrastructure details while maintaining necessary control.
* **Golden paths**: opinionated, best-practice workflows that guide developers toward success.

## Key Components

A well-designed Internal Developer Platform typically includes:

| **Component**                            | **Purpose**                                                   | **Examples**                      |
|------------------------------------------|---------------------------------------------------------------|-----------------------------------|
| **Application Configuration Management** | Define and manage application settings across environments    | Helm, Kustomize                   |
| **Infrastructure Orchestration**         | Provision and manage underlying compute, network, and storage | Kubernetes, Terraform             |
| **Environment Management**               | Manage development, staging, and production environments      | GitOps tools, namespace isolation |
| **Deployment Management**                | Automate application releases and rollbacks                   | Flux CD, ArgoCD                   |
| **Observability**                        | Monitor application health, logs, and metrics                 | Prometheus, Grafana               |
| **Security & Compliance**                | Enforce policies and manage secrets                           | OPA, Vault                        |

## Benefits for Organizations

### Improved Developer Experience

Developers focus on writing code rather than wrestling with infrastructure.
Self-service capabilities reduce dependencies on operations teams, accelerating development cycles.

### Increased Efficiency

Standardized workflows reduce duplication of effort.
Teams leverage shared components and best practices rather than reinventing solutions.

### Enhanced Reliability

Consistent deployment processes reduce human error.
Built-in observability and security controls improve overall system reliability.

### Scalability

Platform teams can support many more development teams by providing self-service capabilities rather than handling
individual requests.

## IDP vs Traditional Approaches

Traditional infrastructure management often involves:

* Inconsistent tooling across teams
* Bottlenecks waiting for operations support
* Duplicated effort solving common problems

An IDP transforms this by:

* Providing consistent tooling and workflows
* Enabling self-service capabilities
* Centralizing solutions to common challenges

## How EIDP Implements IDP Principles

EIDP embodies these IDP principles by providing:

* **Managed platform services**: we handle the platform complexity so you can focus on your applications
* **European sovereignty**: all infrastructure runs in EU data centers with European ownership
* **Golden paths**: standardized CI/CD pipelines and deployment patterns
* **Self-service capabilities**: provision environments and resources through automated workflows
* **Built-in operational excellence**: monitoring, security, and compliance features included by default

See our [platform overview](../platform/overview) for detailed information about EIDP's specific implementation of these
IDP concepts.
