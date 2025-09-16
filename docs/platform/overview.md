---
sidebar_label: Overview
---


# EIDP Platform Overview

EIDP delivers a complete *developer platform* for running your applications. This developer platform provides and automates the common infrastructure needs for your product. We take care of running your apps, so you can focus on delivering products, features, and code.

This document provides an introduction and overview of how our services work.

## Running apps in the workload cluster

When you deploy an app or product to EIDP, you do this to a *workload cluster*. The workload cluster is an environment that provides compute resources to run your app, as well as opinionated, golden-path resources that apps and products commonly need. We recommend running each of your apps and products in its own workload cluster.

TODO: diagram showing workload cluster and shared facilities

The workload cluster provides the following resources:

* **Load balancing**: making your product or app accessible to the world.
* **Compute**: run any workload that you can package as a container image.
* **Database**: store relational data in a PostgreSQL database.
* **Storage**: store data on block storage or S3-compatible object storage.
* **Logs and metrics**: automatically collect logs and metrics for your apps.

For each of your apps and products, you can run multiple workload environments for development, testing, and production needs.

TODO: diagram showing multiple DTAP workload clusters

## Common facilities for workloads - the infrastructure cluster

When working with various workloads, typically there are a few support processes that you'd like to have shared across workloads. These include viewing logs and metrics in a single place, storing and releasing container images for workloads, and sharing authentication information across environments. These facilities are provided in an *infrastructure cluster*.

* **Viewing logs and metrics**: logs and metrics for all workloads are viewable in a single place.
* **Container storage**: release and fetch container images from a single location.
* **Shared authentication**: authenticate to internal services using a single set of credentials per user.

TODO: diagram showing infrastructure cluster providing shared services for workloads

## Developing and releasing - the management cluster

EIDP integrates with your existing code and CI/CD platform. We provide standardized, reusable actions and scripts to release new versions of your apps to the EIDP platform. Your CI/CD systems connect with a *management cluster*, which manages the apps running in your workload cluster.

At the moment, EIDP supports GitHub Actions. Support for other CI/CD systems is planned.
