---
sidebar_label: Architecture
---

# Architecture

EIDP uses a layered, cloud‑native architecture optimized for instance isolation, scalability, and operability.

An instance typically serves one customer and includes multiple environments (dev, test, stage, prod).
Each environment maps to an isolated Kubernetes cluster.

## High-Level Layers

1. Access & Identity: SSO (OIDC/SAML) integration, RBAC authorization, audit trail enrichment.
2. Control Plane: API gateway, GraphQL/REST services, policy engine (OPA).
3. Orchestration: Kubernetes clusters (per environment tier) + controllers (GitOps, Deployment strategies, Certificate
   management, Secrets sync) + cluster infra services (Resource recommendations, backups).
4. Data Plane: Workload namespaces, persistent volumes, managed data services (PostgreSQL).
5. Observability: Dashboards (Grafana), Metrics (Prometheus), Logs (Loki), Tracing, Alerting rules
   engine.
6. Shared Services (Per instance): Container registry, ArgoCD, Grafana, Prometheus, Loki

## Multi-Environment Model

Typical environments: development, testing, staging, production. Each environment maps to an isolated Kubernetes
cluster. Promotion flows enforce policy gates (security scans, tests, approvals).

## Deployment Flow

1. Code pushed → CI pipeline builds, tests, scans.
2. Signed image pushed to per-instance registry.
3. SBOM + provenance attestations stored.
4. GitOps or API drive desired state into cluster.
5. Controller applies rollout strategy (Rolling/Canary/Blue-Green).
6. Observability hooks measure health & SLO conformance.

## Scalability

- Horizontal scaling via Kubernetes HPA.
- Control plane services are stateless and autoscaled.
- Background jobs processed through a distributed queue.

## Resilience Patterns

- Pod disruption budgets & graceful shutdown.
- Multi-AZ clusters.
- Automated backups & restore playbooks (see Operations > Environments).
