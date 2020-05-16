# Zowe Community

This guide will help you navigate the Zowe community, and learn more on how to contribute and provide feedback.

- [Zowe Sub-projects](#zowe-sub-projects)
    - [Active](#active)
       - [Zowe API Mediation Layer](#zowe-api-mediation-layer)
       - [Zowe CLI](#zowe-cli)
       - [Zowe Application Framework](#zowe-application-framework)
       - [Zowe Explorer](#zowe-explorer)
    - [Incubation](#incubation)
       - [Zowe Mobile](#zowe-mobile)
       - [Zowe Client SDK](zowe-client-sdk)
- [Zowe Squads](#zowe-squads)
    - [Zowe Sub-Project Squads](#zowe-sub-project-squads)
       - [Zowe API Squad](#zowe-api-squad)
       - [Zowe CLI Squad](#zowe-cli-squad)
       - [Zowe Application Framework Squad](#zowe-application-framework-squad)
       - [Zowe Explorer Squad](#zowe-explorer-1)
    - [Zowe Operations Squads](#zowe-operations-squads)
       - [Documentation Squad](#documentation-squad)
       - [Onboarding Squad](#onboarding-squad)
       - [Zowe CI/CD Squad](#zowe-cicd-squad)
- [Communication Channels](#communication-channels)
    - [Slack](#slack)
    - [Mailing Lists](#mailing-lists)
    - [Community Forums](#community-forums)
- [Contribute](#contribute)
    - [Submit an issue](#submit-an-issue)
      - [Pull Request Guidelines](#pull-request-guidelines)
    - [Reporting Security Issues](#reporting-security-issues)

## Zowe Sub-projects

The Zowe community consists of several sub-projects that focus on specific areas of the codebase. Like any open source project, each sub-projects has it's own governance structure and release process that aligns with the primary framework guidelines.

Zowe sub-projects have a 3-stage lifecycle of incubation, active and emeritus as described [here](https://github.com/zowe/zlc/blob/master/process/stages.md).

### Active

#### Zowe API Mediation Layer

Gateway that acts as a reverse proxy for z/OS services, together with a catalog of REST APIs and a dynamic discovery capability. This project includes provides core services for working with MVS Data Sets, JES, as well as working with z/OSMF REST APIs and a framework for Single Sign On (SSO).

* https://github.com/zowe/api-layer - A gateway that acts as a reverse proxy for z/OS services, together with a catalog of REST APIs and a dynamic discovery capability. Base Zowe provides core services for working with MVS Data Sets, JES, and z/OSMF REST APIs.
* https://github.com/zowe/explorer-api-common - Common explorer API components.
* https://github.com/zowe/data-sets - The Spring Boot based data set APIs.
* https://github.com/zowe/jobs - The Spring Boot based Jobs APIs.

#### Zowe CLI

Command-line interface that lets you interact with the mainframe remotely and use common tools such as Integrated Development Environments (IDEs), shell commands, bash scripts, and build tools for mainframe development. It provides a set of utilities and services for application developers that want to become efficient in supporting and building z/OS applications quickly. The CLI provides a core set of commands for working with data sets, USS, JES, as well as issuing TSO and console commands.

* https://github.com/zowe/zowe-cli - A command-line interface that lets users interact with z/OS remotely. Create an issue here for anything related to Zowe CLI.
* https://github.com/zowe/zowe-cli-cics-plugin - A plug-in for Zowe CLI that lets you interact with IBM CICS.
* https://github.com/zowe/zowe-cli-db2-plugin - A plug-in for Zowe CLI that lets you interact with IBM Db2.
* https://github.com/zowe/zowe-cli-sample-plugin - A sample plug-in for Zowe CLI. Includes tutorials for extenders who want to contribute to the Zowe CLI project or build plug-ins.
* https://github.com/zowe/imperative - The Imperative CLI Framework on which Zowe CLI is built. Use the framework when contributing to Zowe CLI or developing CLI plug-ins.

#### Zowe Application Framework

Web-based user interface (UI) that provides a virtual desktop containing a number of apps allowing access to z/OS functions through the Zowe API Mediation layer. This project includes includes apps such as a 3270 terminal and a VT Terminal, as well as an editor and explorers for working with JES, MVS Data Sets and Unix System Services.

* https://github.com/zowe/zlux - The top-level superproject for zLUX. zLUX includes the Zowe Desktop framework in addition to several built-in apps and an example server implementation.
* https://github.com/zowe/zlux-app-manager - zLUX Framework components for management of zLUX Apps. Used for window managers or web layouts.
* https://github.com/zowe/zlux-editor - A simple editor in a browser.
* https://github.com/zowe/zlux-app-server - A collection of build, deploy, and run scripts & configuration files for running a simple zLUX server.
* https://github.com/zowe/zlux-server-framework - Contains essential zLUX proxy server components including SSO and service catalogs.
* https://github.com/zowe/explorer-jes - The JES Explorer application in the Zowe Web UI.
* https://github.com/zowe/explorer-mvs - The MVS Explorer application in the Zowe Web UI.
* https://github.com/zowe/explorer-uss - The USS Explorer application in the Zowe Web UI.
* https://github.com/zowe/explorer-ui-server - A simple HTTPS server to serve Zowe Desktop Explorer plug-ins.
* https://github.com/zowe/zlux-file-explorer

#### Zowe Explorer

Zowe Explorer is a common extension for VSCode and hosted IDE's like Theia, Eclipse Che etc. Zowe Explorer shares connection profiles with the Zowe CLI.

* https://github.com/zowe/vscode-extension-for-zowe - The Zowe Explorer Extension for VS Code. Create an issue here for anything related to Zowe Explorer.

In addition to VS Code, the extension will work with browser-based editors such as [Theia](https://github.com/zowe/vscode-extension-for-zowe/blob/master/docs/README-Theia.md).

### Incubation

#### Zowe Mobile

Zowe Mobile is a mobile-oriented visualization layer for services integrated with Zowe.

* https://github.com/zowe/zowe-on-the-go - The Zowe Mobile Application lets you interact with your Zowe services integrated with the Zowe API Mediation Layer.

#### Zowe Client SDK

Zowe Client SDK is a set of programming libraries targeting specific languages to offer a better programming experience for developers who wish to integrate Zowe base and conformant services into their application. The Zowe Client SDKs offer consistent and language-specific access to REST APIs on z/OS that are integrated with the Zowe API Mediation Layer. Developers will be able to import the appropriate language Zowe Client SDK into their project and avoid the complexities of coding to REST APIs directly.

The Zowe Client SDK incubation sub-project is currently developing SDKs for Node.JS and Python.

* https://github.com/zowe/zowe-client-python-sdk - The Zowe Client Python SDK offers a python library for programmatic access to z/OS services integrated with Zowe.

## Zowe Squads

Zowe has a number of squads to maintain and grow the sub-projects as well as support the common operational functions across the subprojects. Refer to the [Communication Channels](#communication-channels) to get involved.

### Zowe Sub-Project Squads

#### Zowe API Squad

The primary goals of the squad include (but are not limited to) the following:

* Maintain and grow the Zowe API Mediation layer Sub-project
* Deliver Zowe API Mediation Layer as part of Zowe Core
* Maintain conformance criteria for APIs integrating with Zowe
* Develop and deliver a Zowe Authentication and Authorization micro-service to enable consistent SSO & MFA across API services integrating with Zowe
* Work with other squads in Zowe to ensure tighter integration, code re-use while keeping in mind the overall end to end user experience

Squad committers are documented [here](https://github.com/zowe/community/blob/master/COMMITTERS.md#zowe-api-squad).

#### Zowe CLI Squad

The primary goals of the squad include (but are not limited to) the following:

* Maintain and grow the Zowe CLI Sub-project
* Deliver Zowe CLI as part of Zowe Core
* Deliver Zowe CLI Secure Credential Store plugin as part of Zowe Core
* Deliver Zowe CLI plugins as part of Zowe Extended
* Maintain conformance criteria for CLI plugins integrating with Zowe
* Evaluate and grow the Zowe Client SDK incubation sub-project
* Work with other squads in Zowe to ensure tighter integration, code re-use while keeping in mind the overall end to end user experience

Squad committers are documented [here](https://github.com/zowe/community/blob/master/COMMITTERS.md#zowe-cli-squad).

#### Zowe Application Framework Squad

The primary goals of the squad include (but are not limited to) the following:

* Maintain and grow the Zowe Application Framework Sub-project
* Deliver Zowe Web Desktop as part of Zowe Core
* Deliver Zowe Web Desktop core apps as part of Zowe Core
* Deliver Zowe Secure Services Server as part of Zowe Core
* Maintain conformance criteria for Zowe Web Desktop plugins integrating with Zowe
* Evaluate and grow the Zowe Mobile incubation sub-project
* Work with other squads in Zowe to ensure tighter integration, code re-use while keeping in mind the overall end to end user experience

Squad committers are documented [here](https://github.com/zowe/community/blob/master/COMMITTERS.md#zowe-app-framework-squad).

#### Zowe Explorer Squad

The primary goals of the squad include (but are not limited to) the following:

* Maintain and grow the Zowe Explorer Sub-project
* Deliver Zowe Explorer as part of Zowe Core including an offline package delivered on Zowe.org similar to the offline package for Zowe CLI and on the Microsoft Visual Studio Code marketplace.
* Formalize extensions to Zowe Explorer by means of well documented extension points and, if applicable, also define conformance rules
* Work with other squads in Zowe to ensure tighter integration, code re-use while keeping in mind the overall end to end user experience

Squad committers are documented [here](https://github.com/zowe/community/blob/master/COMMITTERS.md#zowe-explorer-squad).

### Zowe Operations Squads

#### Documentation Squad

Maintains the Zowe documentation.

* https://github.com/zowe/docs-site - Zowe documentation

#### Onboarding Squad

Spends time in the various community communication channels helping users and those looking to build on top of Zowe.

* https://github.com/zowe/zowe-install-packaging - Packaging repository for the Zowe install scripts and files, managed by the CUPIDS effort

#### Zowe CI/CD Squad

Maintains the Zowe installation tools and integration of Zowe components.

* https://github.com/zowe/zowe-install-test - Perform Zowe installation and run smoke/integration tests.
* https://github.com/zowe/zowe-promote-publish - Promote and publish Zowe build.
* https://github.com/zowe/ci-management - Management repository for Jenkins CI
* https://github.com/zowe/jenkins-library - Jenkins pipeline library
* https://github.com/zowe/release-management - Material and activities related to release management

## Communication Channels

All community activities are scheduled on the [Zowe Community calendar](https://lists.openmainframeproject.org/g/zowe-dev/calendar). All meetings are an open invitation for any community member to join.

You can also engage fellow community members through these channels

### Slack

The Zowe community uses Slack as the primary means of interacting to facilitate active collaboration through the following channels.

Register an account with Slack at https://slack.openmainframeproject.org

* #zowe-user - This channel is for users to ask questions, look for help and interact with each other.
* #zowe-dev - Zowe development discussions.
* #zowe-ux - Zowe user experience discussions.
* #zowe-doc - Discuss or ask questions about the documentation.
* #zowe-onboarding - Develop the material and supporting activities for onboarding developers and users.
* #zowe-zlc - Ask questions or discuss topics with the [Zowe Leadership Committee](https://github.com/zowe/zlc).

Sub-project specific channels:

* #zowe-api - Ask questions about the API Mediation Layer, propose new ideas, or interact with the squad.
* #zowe-cli - Ask questions about Zowe CLI, propose new ideas, and interact with the Zowe CLI community.
* #zowe-core - Expand upon the base technologies being contributed to the project.
* #zowe-explorer - Ask questions about Zowe Explorer for VS Code, propose new ideas, and interact with the Zowe Explorer community.
* #zowe-python-client-sdk - Ask questions about the Zowe Python Client SDK (incubation) and get involved.
* #zowe-mobile - Ask questions about Zowe Mobile (incubation) and get involved.

Operations channels:

* #zowe-build - Discuss and review build related Issues.
* #zowe-cicd - Discuss pipeline related topics.

### Mailing Lists

* Zowe-dev@lists.openmainframeproject.org - Developers and contributors discussion.
* Zowe-user@lists.openmainframeproject.org - User discussion and to provide feedback and submit inquiries.
* Zowe-ZLC@lists.openmainframeproject.org - Discussion on topics related to project governance or anything else for the ZLC.

### Community Forums

Look for discussion on Zowe topics on the [Open Mainframe Project Community Forums](https://community.openmainframeproject.org/c/zowe).

## Contribute

All code in Zowe aligns with the establshed [licensing and copyright notice guidelines](https://github.com/zowe/zlc/blob/master/process/LicenseAndCopyrightGuidance.md)

### Submit an issue

You can submit an issue (Bug or Feature) on Zowe in general at https://github.com/zowe/community/issues/new/choose. If you have an issue that is specific to a sub-project or community team, feel free to submit an issue against a specific repo.

#### Pull Request Guidelines

Pull requests cannot be merged without the approval of at least one maintainer, who will be looking for the pull request to meet requirements as follows:

* The code in the pull request must adhere to the [general Code Style Guidelines](https://github.com/zowe/zlc/blob/master/process/CODING_STYLE.md) and those for the sub-project.
* The code must compile/transpile (where applicable) and pass a smoke test such that the code is not known to break the current state of Zowe.
* The pull request must describe the purpose and implementation to the extent that the maintainer understands what is being accomplished. Some pull requests need less details than others depending on novelty.
* The pull request must state how to test this change, if applicable, such that the maintainer or a QA team can check correctness. The explanation may simply be to run included test code.
* If a pull request depends upon a pull request from the same / another repository that is pending, this must be stated such that maintainers know in which order to merge open pull requests.

### Reporting Security Issues

Please direct all security issues to zowe-security@lists.openmainframeproject.org. A member of the security team will reply to acknowledge receipt of the vulnerability and coordinate remediation with the affected project.
