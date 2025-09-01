---
id: index
sidebar_label: Overview
slug: /
---

# EIDP Platform Documentation

Welcome to the documentation for the European Internal Developer Platform (EIDP). This site helps customer development teams onboard quickly, ship reliably, and leverage the platform's secure, sovereign, and scalable capabilities. Each customer is provisioned their own isolated instance (tenant) of the platform.

## What is EIDP?

EIDP is an Internal Developer Platform delivered as a managed service. It provides an opinionated yet flexible layer of self‑service tooling, infrastructure abstractions, and guardrails so product teams can focus on delivering business value instead of undifferentiated platform plumbing.

Key pillars:

- Self‑service: standardized golden paths for environments, CI/CD, runtime, and observability.
- Security & Compliance: baked‑in controls meeting EU regulations and GDPR requirements.
- Sovereignty: all data & workloads confined to EU data centers with transparent governance.
- Scalability: cloud‑native, elastic infrastructure with automated capacity management.

## Documentation Map

| Area       | Purpose                                                                   |
| ---------- | ------------------------------------------------------------------------- |
| Platform   | Concepts & capabilities (features, architecture, infra, security)         |
| Guides     | Task‑based walkthroughs (getting started, first deploy, tenant isolation) |
| Operations | Day‑2 usage: environments, CI/CD, monitoring & logging                    |

## Multi‑Tenant Model

Every customer has an isolated control plane and runtime boundary. No runtime resources (clusters, registries, object storage buckets) are shared across tenants.
Identity, audit, network ingress, and encryption domains are isolated to enforce hard multi‑tenancy while still enabling rapid upgrades.

## Need Help?

[//]: # (TODO: What shall we do, Discord maybe? or some other form of 'community' support?)
