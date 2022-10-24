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
- Monorepo restructure
- External contributors (Gold: unassociated contributors)

#### Epics (TODO)

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
- Core CLI
- Plugins (IMS, MQ, CICS)
- [STRETCH] Other: Perf-timing, zos-make, zowe-tasks

## CLI: Address upvoted issues
As a Zowe CLI user, I want my upvoted request to be addressed in a timely manner.
#### CLI Squad Plan:
We will review, prioritize, and implement [highly upvoted](https://github.com/zowe/zowe-cli/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc) issues in our repository
#### Epics (TODO)

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
