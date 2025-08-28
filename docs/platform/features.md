---
sidebar_label: Features
---

# Platform Features

This page provides a capability‑oriented overview of the EIDP platform. Each feature has a short description, primary
user value, and key security / compliance notes.

## Summary

| Feature                         | Description                                                 | Primary Value                | Notes                       |
|---------------------------------|-------------------------------------------------------------|------------------------------|-----------------------------|
| Instance Isolation              | Dedicated control & runtime boundary per customer           | Hard multi‑tenancy           | Separate encryption keys    |
| Runtime Orchestration           | Managed Kubernetes clusters (per env tier)                  | Elastic scaling & resilience | CIS‑hardened base images    |
| Container Registry              | Private, per‑instance registry                              | Secure image storage         | Vulnerability scans on push |
| Template Catalog (planned)      | Curated, opinionated app/service templates                  | Fast bootstrap               | Policy enforced scaffolding |
| CI Pipelines                    | Pre‑built pipelines & components for build/test/scan/deploy | Reduced setup toil           | Supply‑chain security gates |
| Secrets Management (planned)    | Encrypted secrets + dynamic credentials                     | Secure config distribution   | KMS + rotation policies     |
| Observability Stack             | Metrics, logs, traces unified                               | Faster MTTR                  | Default SLO dashboards      |
| Deployment Strategies (planned) | Rolling, Blue/Green, Canary                                 | Reduced risk releases        | Automated rollback          |
| Policy Engine                   | Rule based governance                                       | Guardrails & compliance      | Shift‑left enforcement      |
| Role Based Access Control       | Fine‑grained, instance‑scoped authZ                         | Principle of least privilege | SSO integration             |
| Audit Logging                   | Immutable event trail                                       | Forensics & compliance       | Tamper‑evident storage      |
| Cost & Usage Insights (planned) | Resource & spend reports                                    | Optimization & forecasting   | Daily aggregation           |

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

