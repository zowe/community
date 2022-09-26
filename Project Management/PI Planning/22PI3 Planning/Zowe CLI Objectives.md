# Zowe CLI Squad - 22PI3 Objectives

## Respond to feedback from the community as V2 LTS is adopted

As Zowe V2 LTS is adopted, we are actively responding to incoming questions on Slack as users transition. In addition to installation, we are helping the community adopt best practices such as team configuration. We will also add some samples leveraging team configuration to https://github.com/zowe/zowe-cli-sample-scripts.

## Assist extenders meet V2 LTS conformance standards

As extenders seek V2 LTS conformance, we are actively responding to incoming questions on Slack to ensure our broader suite of plug-ins work very well together.

## Prioritized Jobs & Files Enhancements

See our [Prioritized Jobs & Files Enhancements Milestone](https://github.com/zowe/zowe-cli/milestone/65) in Zowe CLI.

* [Extend zowe files copy data-set command to allow for copying across LPARs / z/OSMF instances](https://github.com/zowe/zowe-cli/issues/1098)

* [zowe files edit data-set](https://github.com/zowe/zowe-cli/issues/1097)

* [zowe cli compare command](https://github.com/zowe/zowe-cli/issues/1095)

* [Add `dir-from-uss` option to `zowe files download`](https://github.com/zowe/zowe-cli/issues/1038)

## Zowe CLI In-Memory Credential Management

Our goal is to complete the research and design this PI. Implementation to happen in a future PI.

## Upvoted Issues

Review, prioritize, and implement highly upvoted issues in our repository

https://github.com/zowe/zowe-cli/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc

## Golden CII Badge Analysis

[Golden CII Badge](https://github.com/zowe/community/issues/1279)

This is a goal shared across all the Zowe active squads. In the context of this PI, the goal is to understand what needs to be done in order to achieve the conformance.

## Generate and use personal access tokens through APIML

## Migrate use of Jenkins pipelines to Github Actions

## Reserve consulting time to assist Chat team with CLI SDK


# Zowe CLI / Zowe SDK Roadmap

## Complex z/OS Jobs and z/OS Files commands

- _What problem are you solving?_
  - Customers are looking for CLI commands that perform more complex (jobs & files) tasks to reduce scripting and make interactive CLI commands more efficient
- _What are you doing to solve it?_
  - Introduce several new CLI commands capable of performing multiple tasks in a single command
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY22Q3**

## Golden CII Badge

- _What problem are you solving?_
  - The Zowe Project has not earned the golden CII Badge / a requirement from LF/OMP that ensures the Open Source project satisfies FLOSS (Free/Libre & &Open Source Software) [Best Practices criteria](https://bestpractices.coreinfrastructure.org/en/criteria)
- _What are you doing to solve it?_
  - Review requirements and take necessary actions to satisfy them for the gold badge level.
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY22Q4**

## In-memory Credential Management & Identity Tokens

- _What problem are you solving?_
  - Some customers are not able to install the SCS for their credentials management OR prefer alternatives for credential management in support of internal policies
- _What are you doing to solve it?_
  - Provide customers with an alternative that securely (prompts for and) stores all secure properties w/o requiring the SCS.
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY23Q1**

## Zowe Client SDK: Python

- _What problem are you solving?_
  - Consumers of the SDK have requested enhancements to one of the languages (Python)
- _What are you doing to solve it?_
  - Further enhance the Python Zowe Client SDK to meet consumer needs.
- _When do you plan to start the work?_
  - **CY22Q2**
- _When do you plan to deliver the solution?_
  - **CY22Q4**

## Zowe CLI on Unix System Services (USS)

- _What problem are you solving?_
  - Mainframe customers like to experiment with Zowe w/o requiring desktop software (i.e. SYSPROGS want to run CLI commands on z/OS) as part of their experimentation or enterprise use with Zowe CLI
- _What are you doing to solve it?_
  - Certify and document how to use of Zowe CLI on z/OS (USS)
  - Requires Daemon testing (USS executable) / zLinux daemon works
  - Would require in-memory (or other?) credential management otherwise credentials are in plain-text
- _When do you plan to start the work?_
  - **CY23Q1**
- _When do you plan to deliver the solution?_
  - **CY23Q2**

## Zowe CLI Containerization

- _What problem are you solving?_
  - Customers want to invoke CLI commands in automation/orchestration tools like Jenkins w/o having to install all of the pre-requisite technology on their desktop or server and do not have the knowledge to configure a docker file from scratch. OR Simply, it’s too difficult to create Zowe CLI-enabled Jenkins pipelines (the script is easy, but the rest of the work isn’t)
- _What are you doing to solve it?_
  - Provide a dockerfile image [that includes the configured prerequisite technology which can be customized for images and used for pipelines.
  - Requires Daemon testing (USS executable) / zLinux daemon works
  - Would require in-memory (or other?) credential management otherwise credentials are in plain-text
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY23Q1**

## Zowe App Store Participation

- _What problem are you solving?_
  - Zowe Consumers can’t quickly/easily (see what’s available) locate & install ALL of the available Zowe CLI conformant plug-ins AND the supported Zowe Client SDKs
- _What are you doing to solve it?_
  - Participating in the Zowe App Store
- _When do you plan to start the work?_
  - `CLI`: **CY22Q3**
  - `SDK`: **CY23Q4**
- _When do you plan to deliver the solution?_
  - `CLI`: **CY23Q4**
  - `SDK`: **CY24??**
