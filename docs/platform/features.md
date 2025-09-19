---
sidebar_label: Features & Components
sidebar_position: 2
---

# Features & Components

As explained in [the platform overview](./overview), EIDP provides a complete developer platform.
This page summarizes the features and components of this platform.

## EIDP accounts

EIDP customers can set up accounts for one or multiple products they launch on EIDP. EIDP accounts are
logically segregated from one another at the account level, and have their own billing details and overview. Customers can create multiple accounts for separate logical collections of apps and products.

## Infrastructure

EIDP's infrastructure provides the following resources, based on open source components.

| **Resource** | **Details** | **Technology** |
|--------------|-------------|--------------|
| **Compute orchestration** | Run workloads in EIDP instances based on OCI container images | Kubernetes |
| **Database** | Persistent data storage for applications | PostgreSQL |
| **Load balancing** | Serve your app or product safely | Kong |
| **Object storage** | Store data in objects and buckets | OpenStack |
| **Orchestration policy** | Enforce security and operational policies for workloads | Gatekeeper |
| **Backups** | Backups for database and disk storage | Velero |
| **Container registry** | Privately store the container images and OCI artifacts that run your product | Harbor |
| **Monitoring & Observability** | Keep tabs on product deployments, performance, uptime & errors | Grafana |
| **Audit logging** | Safely collect logs in an immutable separate location | Prometheus |
| **Release management** | Release new infrastructure straight from your CI pipelines | Flux CD |
| **CI pipelines** | Test and release from your code platform | EIDP provided |
| **Deployment templates** | Quickly spin up additional apps and infrastructure | EIDP provided |
| **Secrets management** (planned) | Securely manage secrets used to run and deploy your app | OpenBao |

## Security Operations

The EIDP stack provides with secure defaults out of the box, helping you deliver quickly without compromising security. The following defaults are provided:

* Least-privilege segregated network policies between namespaces.
* Mandatory image provenance attestations.
* Automated SBOM generation & vulnerability scanning.
* Continuous configuration drift detection through our GitOps model.

For more details, see [Security](./security).
