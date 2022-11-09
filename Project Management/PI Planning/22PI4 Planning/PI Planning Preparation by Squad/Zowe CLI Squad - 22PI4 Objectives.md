# Zowe CLI Squad - 22PI4 - (2022/10/25 - 2023/01/23)

## CLI: Finalize the Jobs & Files Enhancements (carryover)
As a Zowe CLI user, I want to perform more complex (jobs & files) tasks to reduce the amount of scripting and make interactive commands more efficient.
#### CLI Squad Plan:
We will finalize the prioritized items in our [Jobs & Files Enhancements Milestone](https://github.com/zowe/zowe-cli/milestone/65).
- [Extend zowe files copy data-set command to allow for copying across LPARs / z/OSMF instances](https://github.com/zowe/zowe-cli/issues/1098)
- [STRETCH] [zowe files edit data-set](https://github.com/zowe/zowe-cli/issues/1097)

## CLI: Complete the CII Badge Requirements
This is a shared goal across all Zowe active squads. The goal is to achieve the Passing level of conformance and make progress towards the Silver badge. For more information, see: [zowe/community#1273](https://github.com/zowe/community/issues/1279).
#### CLI Squad Plan:
We will continue to research, size, and implement the CII Badge requirements for Passing and Silver levels.
</br>**Note**: We plan to make progress towards the Silver badge.
</br>**Note**: Plugins for Zowe CLI will get their own CII badge in future PIs
</br>**Considerations**:
- Coverage (statement 80%)
- Security training (LFX courses)
- Static code analysis
- ~~Monorepo restructure~~
- ~~External contributors (Gold: unassociated contributors)~~

#### Epics
Zowe CII Badge items for Zowe CLI. [zowe/zowe-cli#1352](https://github.com/zowe/zowe-cli/issues/1352)

## CLI: In Memory Credential Management (architecture review only)
As a Zowe CLI user, I need an alternative to manage credentials securely that support internal company policies without the Secure-Credential-Store plugin.
#### CLI Squad Plan:
We will finalize our design and have it reviewed by Zowe Architects.

## CLI: Cleanup the CLI and Imperative Backlogs
As a Zowe CLI user, I want a backlog where I can find relevant information about future enhancements I can expect, and where I can provide feedback as I find opportunities for improvement.
#### CLI Squad Plan:
We will continue to review the CLI and Imperative backlog to keep all issues current and relevant, while closing unplanned enhancement requests.

## CLI: Finalize the migration from Jenkins to GitHub Actions (carryover)
This is a shared goal across all Zowe active squads. The goal is to move away from Jenkins and adopt GitHub Workflows for all of our pipelines
#### CLI Squad Plan:
We will complete the migration of the remaining CLI-related projects.
- ~~Core CLI~~
- Plugins (IMS, MQ, CICS, DB2-v1, SCS-v1, FTP-v1)
- [STRETCH] Other: Perf-timing, zos-make, zowe-tasks

## CLI: Address upvoted issues
As a Zowe CLI user, I want my upvoted request to be addressed in a timely manner.
#### CLI Squad Plan:
We will review the most popular (via [upvotes](https://github.com/zowe/zowe-cli/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc)) github repo entries and, where applicable, prioritize them for delivery


## CLI: Zowe Chat Consulting
As a Zowe Chat developer, I want the CLI squad to be available throughout the quarter for consulting purposes
#### CLI Squad Plan:
We will reserve some capacity to respond to any feedback or questions the Chat squad may have

## [Stretch] CLI: Provide a Dockerfile for Zowe CLI
**Note**: Missing Documentation and Systems Squad work (OWASP + License scan...)

## [Stretch] SDK: Enhance the Python SDK (carryover)
As a Python developer, I want the Python SDK to fully support Zowe V2 Team Configuration files.
#### CLI Squad Plan:
We will continue to review and deliver contributions to achieve feature parity with the Node.js SDK in terms of Zowe V2 profile support.

## [Stretch] CLI: Generate and/or use PATs through APIML
**Note**: Previously requested by Zowe consumers which may provide timely feedback

## [Stretch] CLI: Participate in the Zowe App Store
**Note**: Possible dependency on the Web UI Squad (App Store implementation)


# Zowe CLI / Zowe SDK Roadmap

## Complex z/OS Jobs and z/OS Files commands

- _What problem are you solving?_
  - Customers are looking for CLI commands that perform more complex (jobs & files) tasks to reduce scripting and make interactive CLI commands more efficient
- _What are you doing to solve it?_
  - Introduce several new CLI commands capable of performing multiple tasks in a single command
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY22Q4**

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
