---
sidebar_label: Features & components
sidebar_position: 2
keywords:
  - features
  - components
  - overview
---

# Features & components

As explained in [the platform overview](./overview), EIDP provides a complete developer platform.
This page summarises the features and components of this platform.

## EIDP instances

As EIDP customer, you can set up one or multiple instances of our platform.
On a single instance you can run as many applications or products as you want.
EIDP instances are logically segregated from one another at the instance level, and have their own billing details and overview.
You can create multiple instances for separate logical collections of apps and products.
However, each instance is a separate platform, and does not share any resources with other instances.
This means that there is quite some overhead in setting up a new instance.
Hence, we recommend to only set up a new instance when you have a clear reason to do so, such as:

* Separate billing or organisational reasons.
* Separate data residency or compliance requirements.
* Separate network connectivity requirements.
* Separate security or operational requirements.

## Infrastructure

EIDP's infrastructure provides the following resources, based on open source components.

| **Resource** | **Details** | **Technology** |
|--------------|-------------|--------------|
| **Compute orchestration** | Run workloads in EIDP instances based on OCI container images | Kubernetes |
| **Database** | Store persistent data for apps in one or multiple database clusters | PostgreSQL |
| **Load balancing** | Serve your app or product safely | Kong |
| **Object storage** | Store data in objects and buckets | OpenStack |
| **Orchestration policy** | Enforce security and operational policies for workloads | Gatekeeper |
| **Backups** | Backups for database and disk storage | Velero |
| **Container registry** | Privately store the container images and OCI artifacts that run your product | Harbor |
| **Monitoring & Observability** | Keep tabs on product deployments, performance, uptime & errors | Grafana / Loki |
| **Logging & Metrics** | Safely collect logs in an immutable separate location | Prometheus |
| **Continuous delivery** | Release new infrastructure straight from your CI pipelines | Flux CD |
| **CI pipelines** | Test and release from your code platform | EIDP provided |
| **Deployment templates** | Quickly spin up additional apps and infrastructure | EIDP provided |
| **Secrets management** (planned) | Securely manage secrets used to run and deploy your app | OpenBao |

## Security operations

The EIDP stack provides secure defaults out of the box, helping you build and run your applications quickly without compromising security.
The following defaults are provided:

* Least-privilege segregated network policies between namespaces by default.
* Mandatory image provenance attestations.
* Automated SBOM generation & vulnerability scanning.
* Continuous configuration drift detection through our GitOps model.

For more details, see [Security](./security).
