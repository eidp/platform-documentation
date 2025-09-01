---
sidebar_label: Infrastructure
---

# Infrastructure

The EIDP infrastructure layer supplies secure, elastic, and observable execution environments for your workloads while
enforcing compliance and sovereignty requirements.

## Core Components (Per Instance Unless Noted)

| Component              | Scope                       | Purpose                                | Notes                                                     |
| ---------------------- | --------------------------- | -------------------------------------- | --------------------------------------------------------- |
| Control Plane Services | Shared (logically isolated) | APIs, policy evaluation, orchestration | Network + data isolation boundaries enforced              |
| Kubernetes Clusters    | Per Environment Tier        | Run containerized workloads            | Multi‑AZ, CIS benchmark hardened                          |
| Container Registry     | Per Instance                | Store & scan images                    | Vulnerability + provenance scanning on push               |
| Secret Vault           | Per Instance                | Store static & dynamic secrets         | KMS‑backed, envelope encryption                           |
| Managed Data Services  | Optional Per Workload       | Common data needs (Postgres, etc)      | Provisioned through our app/service provisioning template |
| Observability Stack    | Per Instance                | Metrics, logs, traces, dashboards      | Aggregated & retention tiered                             |

## Regions & Data Residency

All resources are deployed exclusively within EU regions in data centers that are fully owned by European companies.

## Network Topology

- Private subnets for cluster worker nodes.
- Public ingress via controlled layer 7 gateway (rate limiting + TLS 1.3).
- Network Policies restrict east‑west traffic; only explicitly allowed namespace/service pairs communicate (optional).

## Storage & Encryption

| Data Type          | Encryption                  | Rotation         | Additional Controls          |
| ------------------ | --------------------------- | ---------------- | ---------------------------- |
| Secrets            | KMS + envelope              | Automatic        | Access logged & alerting     |
| Persistent Volumes | Provider encryption at rest | Provider managed | Snapshots + integrity checks |
| Images             | Registry encryption at rest | Provider managed | Immutable tags (policy)      |
| Backups            | Encrypted binary blobs      | Provider managed | Redundant multi‑AZ           |

## Scalability & Auto Management

- Horizontal cluster node autoscaling by workload demand.
- Vertical pod recommendations surfaced (no auto apply by default).
- Idle resources downsized during off‑peak windows (opt‑in).

## High Availability

- Control plane: stateless services with >2 replicas & rolling upgrades.
- Data plane: multi‑AZ nodes, pod anti‑affinity for critical deployments.
- Automated failover & health probes integrated with deployment strategies.

## Backups & Disaster Recovery

| Artifact                    | Frequency    | Retention    | Restore Target           |
| --------------------------- | ------------ | ------------ | ------------------------ |
| Kubernetes etcd (cluster)   | Daily        | 30 days      | Cluster control recovery |
| Persistent Volume Snapshots | Daily        | 14–30 days   | Data restore             |
| Databases (managed)         | Configurable | Configurable | Point-in-time recovery   |
| Registry Metadata           | Continuous   | 30 days      | Image metadata integrity |

## Compliance Controls

Mapped to GDPR, ISO 27001, SOC 2 (selected). Control mapping matrix available on request.
