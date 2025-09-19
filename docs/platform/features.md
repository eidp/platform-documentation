---
sidebar_label: Features
sidebar_position: 2
---

# Platform Features

This page provides a capability‑oriented overview of the EIDP platform.

## Summary

| Feature                         | Description                                                 | Category                     |
| ------------------------------- | ----------------------------------------------------------- |------------------------------|
| Instance Isolation              | Dedicated control & runtime boundary per customer           | Environment management       |
| Runtime Orchestration           | Managed Kubernetes clusters (per env tier)                  | Infrastructure orchestration |
| Container Registry              | Private, per‑instance registry                              | Infrastructure orchestration |
| Template Catalog (planned)      | Curated, opinionated app/service templates                  | Deployment management        |
| CI Pipelines                    | Pre‑built pipelines & components for build/test/scan/deploy | Deployment management        |
| Secrets Management (planned)    | Encrypted secrets + dynamic credentials                     | Configuration management     |
| Observability Stack             | Metrics, logs, traces unified                               | Infrastructure orchestration |
| Deployment Strategies (planned) | Rolling, Blue/Green, Canary                                 | Deployment management        |
| Policy Engine                   | Rule based governance                                       | Infrastructure orchestration |
| Role Based Access Control       | Fine‑grained, instance‑scoped authZ                         | Role based access control    |
| Audit Logging                   | Immutable event trail                                       | Infrastructure orchestration |
| Cost & Usage Insights (planned) | Resource & spend reports                                    | Environment management       |

## Self‑Service Workflows

The platform is designed for developer autonomy and minimal operational friction.
Developers are empowered to manage their own workloads across environments.
No ticketing or ops handoffs required for day‑to‑day tasks.

## Golden Paths

Golden paths encode best practices into reusable templates and pipelines (e.g., 12‑factor microservice,
scheduled job). They accelerate delivery while maintaining standards for security, observability, and operations.

## Security & Compliance Highlights

- Default network policies between namespaces (optional).
- Mandatory image provenance attestations.
- Automated SBOM generation & vulnerability scanning.
- Continuous configuration drift detection through our GitOps model.

For more details, see [Security](./security.md).
