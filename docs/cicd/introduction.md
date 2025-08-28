---
sidebar_label: Introduction
---

# CI/CD Pipelines

EIDP provides standardized pipelines and components that enforce security, quality, and compliance while remaining
extensible for team-specific needs.

## Pipeline Stages (Default Golden Path)

| Order | Stage              | Purpose                                      | Failure Effect                 |
|-------|--------------------|----------------------------------------------|--------------------------------|
| 1     | Prepare            | Restore cache, detect language stack         | Blocks subsequent stages       |
| 2     | Build              | Compile/package container image & Helm chart | Stops pipeline                 |
| 3     | Test               | Unit + integration tests                     | Failing tests halt promotion   |
| 4     | Scan               | SCA, image vuln, secrets, IaC policies       | Severity threshold blocks      |
| 5     | Sign & Attest      | Image signing + SBOM/provenance              | Unsigned images not deployable |
| 6     | Deploy (dev)       | Apply manifests / GitOps sync                | Deployment not created         |
| 7     | Post-Deploy Checks | Health, metrics SLO, canary steps            | Rollback / abort promote       |

## Supported CI/CD Systems

Currently, EIDP only provides templates for [GitHub Actions](https://docs.github.com/en/actions) but others are planned (e.g. GitLab CI).
