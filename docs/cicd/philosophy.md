---
sidebar_label: Philosophy
sidebar_position: 2
---

# Philosophy

The EIDP platform provides a set of best practices and guidelines for setting up CI/CD pipelines.
The goal is to provide a consistent, reliable and secure way to deploy your applications.
This guide provides the philosophy behind the EIDP CI/CD components and pipelines.
Understanding this philosophy will help you to make the best use of them.
Furthermore, it is important to understand that these are guidelines and best practices, and not hard rules.
However, you are encouraged to follow them as they follow the industry best practices to ensure a high-quality software development process.

## Key principles

The EIDP CI/CD components and pipelines are built upon a few principles, that are outlined below.

### Automation

Automation serves as the cornerstone of our approach, where we strive to eliminate manual processes wherever possible.
By automating repetitive tasks, code deployments, testing procedures, and infrastructure provisioning, we significantly reduce the likelihood of human error while dramatically increasing the efficiency and speed of your development cycles.
This automation extends from the earliest stages of development through to production deployment, ensuring consistency and reliability at every step.

### Consistency

Consistency across pipelines for all teams and projects using them form another critical pillar of our philosophy.
We establish standardized processes, tooling, and methodologies that create a unified experience regardless of the specific project or team involved.
This consistency not only reduces the learning curve for developers moving between projects but also ensures predictable outcomes and simplifies maintenance and troubleshooting across your entire software ecosystem.

### Security

Security integration represents a paramount aspect of our CI/CD approach, where security considerations are woven into every stage of the CI/CD components rather than being treated as an afterthought.
We provide comprehensive security checks, vulnerability scans, compliance validations, and access controls throughout our pipelines, ensuring that security standards are maintained from initial code commit through to production deployment.

### Quality

Delivering high-quality software is a fundamental objective of our CI/CD philosophy.
For example, catching issues early in the development lifecycle is crucial to maintaining high-quality software.
The components and pipelines are designed to incorporate quality checks at multiple stages, including code reviews, automated testing, and continuous monitoring.
The components and pipelines themselves are also treated as code, meaning they are versioned, tested, and reviewed just like your application code.
This approach ensures that your pipelines remain reliable and effective over time.

## Development process

The standard pipelines provided by EIDP are most effective with the following development workflow in mind:

![Development Workflow](/img/cicd/development-workflow.svg)

The above process in essence describes the [trunk-based development](https://trunkbaseddevelopment.com/) pattern.

The flow starts with **creating a branch**, then **committing** one or multiple times to this branch when the required changes are made.
**Pushing to the remote** and creating a (draft) Pull Request or Merge Request should be done when you want to run all automated checks for your branch, usually when you are done or almost done with your changes.
This will trigger a build in the CI system that runs all automated build and verification steps for your project.
When the pipeline is green, you can **mark the Pull Request ready for review** to indicate that you want to merge your changes into the default branch.
Before being able to merge a pull request to the main branch, it first needs to be **reviewed**.
In the review step, the reviewer will validate whether the given Pull Request can be merged into the main branch.
When the reviewer finishes the review and accepts the changes, they will **approve** the Pull Request.
Once all checks automated checks have passed and there is an approval, the Pull Request can be **merged into the default branch**.
This should trigger the CI/CD pipeline of the main branch.

The CI/CD components and pipelines are designed to support a modern development process that includes:

- **Feature branches**: Developers work on feature branches that are merged into the main branch after
- **Code reviews**: All changes are reviewed by at least one other developer before being merged into the main branch.
- **Automated tests**: Automated tests are run on every commit to ensure that the code is working as expected.
- **Continuous integration**: The main branch is continuously integrated and tested to ensure that it is always in a deployable state.
- **Ephemeral environments**: For every feature branch, an ephemeral environment is created to allow for testing and validation of the changes in a production-like environment.
- **Continuous deployment**: Changes that pass all tests and checks are automatically deployed to the
- **Environment promotion**: Changes are promoted through different environments (e.g., development, testing, staging, production) to ensure that they are tested in a production-like environment before being deployed to production.
- **Monitoring and feedback**: The CI/CD process includes monitoring and feedback mechanisms to ensure that any issues are quickly identified and resolved.
- **Security and compliance**: Security and compliance checks are integrated into the CI/CD process to ensure that the software meets all relevant security and compliance requirements.

## Pipelines

The pictures below give a high-level view on the different steps in the CI/CD pipelines provided by EIDP.
We distinguish two different pipeline types:

- **Application pipeline**: The pipeline for anything that is deployed to a server (as a container) and that humans or computers can interact with through an API.
- **Library / component pipeline**: The pipeline for something that is itself a building block integrated into other libraries, components or applications.

:::info
    The images below describe the pipelines fairly abstract.
    This means that not all depicted steps will be executed in a sequential fashion in an actual CI/CD pipeline.
    Some of the steps might be handled by specific tools and are therefore not explicitly built into the pipeline.
    A concrete example is application deployment: the actual deployment might be handled by the GitOps tool used for deploying applications.
:::

### Application pipeline

The image below shows the high-level overview for a CI/CD pipeline for an application.
Next to building, testing and validating the application, it also includes the application deployment.

![Application pipeline](/img/cicd/build-pipelines-application.svg)

#### (Feature) branch

The responsibility of the (feature) branch pipeline is to verify if the changes on that branch are following the set standards and do not introduce regressions, vulnerabilities or lower the overall quality of the application.
The branch build helps the Continuous Integration process to prevent incompatible changes being merged to the main branch as the main branch is the branch that must always be in a releasable state.

#### Main (or another releasable branch)

Apart from the steps also executed on the feature branch, the main branch pipeline is connected to the test environment and is the first place where all changes are coming together or integrated and can be tested together.
This means that every push to the main branch is automatically deployed to the test environment.
The version built on the main pipeline is essentially a release candidate or nightly build.
For Docker containers we are tagging the image with the commit SHA, so we can always trace back which version is running in the test environment.
For other artifacts that require a valid semantic version (like Helm charts), a next release candidate version is automatically created based on the last released version.

#### Release

The release build for an application will not simply re-execute the same steps as on the main branch pipeline.
Instead of rebuilding images and other artifacts, it will reuse the artifacts that were already built for the main branch pipeline.
These images and artifacts are already tested on the test environment, so we are sure that they work.
The pipeline will essentially retag the Docker image and/or other artifacts with a version that follows the semantic versioning pattern.
The version is taken from the git tag that triggered the release pipeline.

### Library / component pipeline

The image below shows the pipelines for a library or component, which is essentially a building block that can be included in other libraries or an application.

![Library / component pipeline](/img/cicd/build-pipelines-library-component.svg)

#### (Feature) branch

The responsibility of the (feature) branch pipeline is to verify if the changes in that branch are following the set standards and do not introduce regressions.
The branch build aids the Continuous Integration process to prevent incompatible changes being merged to the main branch.

#### Main (or another releasable branch)

Apart from the steps also executed on the feature branch, the main branch pipeline will also deploy the artifact to a central repository, so it can be used by others for further validation and testing.
This version is essentially a release candidate or nightly build.

#### Release

The release build for a library will again run the same verifications as the main branch.
The difference is that it will now be deployed to a release repository with a version that follows the semantic versioning pattern.
After the release pipeline has run, the released artifact will be available in a central repository from which it can be downloaded and used by others.
As an example, in case of a Python library, a release could push the released library to pypi.org or an internal Pypi repository.
