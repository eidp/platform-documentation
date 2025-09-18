---
sidebar_label: Security
---

# Security

Security is a key pillar of the EIDP stack. This document lays out how we help you achieve security for the applications
you run on EIDP, at a technological and process level.
At EIDP, we integrate security by design and work for compliance and regulatory expectations set by ISO27001, SOC2,
GDPR, and DORA.

## Shared Responsibility

You run your own applications and code on the EIDP stack, which means you and EIDP have shared responsibility for the
overall security of your product.

| Layer                  | EIDP Responsibility                            | Customer Responsibility                 |
|------------------------|------------------------------------------------|-----------------------------------------|
| Physical / Data Center | Selecting and monitoring data center partners  | N/A                                     |
| Network & Perimeter    | Ingress security, WAF, DDoS mitigation         | App layer hardening                     |
| Control Plane          | Secure SDLC, patching, policy engine           | API key hygiene, RBAC config            |
| Runtime / Cluster      | Node hardening, patch cadence, CIS baseline    | App vulnerabilities, resource requests  |
| Data Storage           | Encryption at rest, backup & disaster recovery | Data classification, retention choices  |
| Secrets                | Encryption, rotation workflows                 | Appropriate scoping & least privilege   |
| Observability          | Secure log pipeline, retention config          | Redacting sensitive information in logs |

## Data Isolation & Protection

Each customer instance is isolated in the following ways:

| Resource | Isolation                                                                                                                              |
|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| Compute  | All customer instances run on separate virtual machines                                                                                |
| Network  | Network policies and firewalling ensure that cross-instance and cross-cluster communication is impossible or limited to what is needed |
| Storage  | Buckets and block devices are logically segregated                                                                                     |
| Backups  | Backups are encrypted with customer unique keys                                                                                        |

Additionally, the EIDP platform enforces the use of TLS 1.3 for incoming connections.

## Security Platform

The following features of EIDP's platform help secure your apps and services.

### Identity & Access Management

EIDP permits customers to extend their own identity provider (IDP) into their EIDP instances through SAML or OIDC.
Within instances, customers can choose role-based access models for accessing EIDP platform services such as logs,
backups, and databases.

### Supply Chain Security

The EIDP platform has built-in support for solving common supply chain security issues during development.

| Stage  | Control                                                               |
|--------|-----------------------------------------------------------------------|
| Build  | Isolated build runners, dependency caching with checksum verification |
| Scan   | SCA + container image vulnerability scan (policy gates)               |
| Sign   | Image signing + provenance attestation (SLSA level target)            |
| Deploy | Policy engine validates signature + allowed base images (optional)    |

### Logging & Audit

Apps deployed in EIDP workload clusters automatically log to a separate, append-only logging instance. These logs
include application logs as well as information about deployments, role usage, and working with sensitive credentials.
This data can be exported to other sources such as webhook collectors or SIEMs.

## Process & Policy

### Compliance

The following artifacts are available to customers in the support portal:

* GDPR Data Processing Agreement (DPA)
* Subprocessor list
  * EIDP only uses subprocessors owned and operated in Europe
* Penetration test executive summaries

EIDP organizes internal processes around ISO27001, SOC2, and DORA standards and hopes to demonstrate compliance to these
soon.

### Reporting Issues

For security issues, please contact [security@eidp.com](mailto:security@eidp.com).
