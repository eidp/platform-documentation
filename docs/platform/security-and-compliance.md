---
sidebar_label: Security & Compliance
---

# Security & Compliance

Security is integrated by design across the EIDP stack, mapped to European regulatory expectations (GDPR) and industry
standards (ISO 27001, SOC 2). This page summarizes controls you interact with as an instance.

## Shared Responsibility Model

| Layer                  | Platform Responsibility                     | Customer Responsibility                |
| ---------------------- | ------------------------------------------- | -------------------------------------- |
| Physical / Data Center | Provider selection, certifications          | N/A                                    |
| Network & Perimeter    | Ingress security, WAF, DDoS mitigation      | App layer hardening                    |
| Control Plane          | Secure SDLC, patching, policy engine        | API key hygiene, RBAC config           |
| Runtime / Cluster      | Node hardening, patch cadence, CIS baseline | App vulnerabilities, resource requests |
| Data Storage           | Encryption at rest, backup & DR             | Data classification, retention choices |
| Secrets                | Encryption, rotation workflows              | Appropriate scoping & least privilege  |
| Observability          | Secure log pipeline, retention config       | PII redaction in app logs              |

## Identity & Access Management

- SSO via OIDC/SAML integration to customer IdP.
- RBAC: team scopes with roles (Admin, Developer, ReadOnly).
- API access tokens: short‑lived, refresh via CLI, revocable.

## Supply Chain Security

| Stage  | Control                                                               |
| ------ | --------------------------------------------------------------------- |
| Build  | Isolated build runners, dependency caching with checksum verification |
| Scan   | SCA + container image vulnerability scan (policy gates)               |
| Sign   | Image signing + provenance attestation (SLSA level target)            |
| Deploy | Policy engine validates signature + allowed base images (optional)    |

## Data Protection

- Encryption in transit (TLS 1.3) enforced.
- At-rest encryption for volumes, object storage, registry layers, backups.
- Optional customer-managed keys (CMK) roadmap.

## Logging & Audit

- Immutable append-only audit log: auth events, role changes, deployments, secret operations.
- Export or forward via webhook / SIEM integration (planned).

## Compliance Artifacts

Available via support portal:

- GDPR Data Processing Agreement (DPA).
- Subprocessor list (EU‑based only).
- Penetration test executive summaries.
- Security whitepaper.

## Incident Response

- 24/7 on-call platform SRE & Security rotation.
- Target detection to notification SLA: 30 minutes (High severity).
- Post‑incident report delivery: within 5 business days.

## Instance Hardening Checklist

1. Enforce SSO only (disable local accounts if any created for bootstrap).
2. Define RBAC roles minimally; remove unused.
3. Classify data & apply retention policies.
4. Set log export filters (remove potential PII early).
5. Rotate administrative API tokens every 90 days or less.

## Reporting Issues

Security issues: contact <security@eidp.com> (PGP key in portal). Public bounty program (private early access) roadmap.
