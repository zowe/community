# Zowe Systems Squad  - 24PI4 - (2024/10/22 - 2025/02/03)

The primary goals for the system squad this PI continue - maintaining release operations, responding to high priority issues, and making tactical improvements to systems and automation where time allows.

## Infrastructure
- [Open Mainframe - track mainframe environment](https://github.com/zowe/zowe-install-packaging/issues/3241)
    * Goal: Staying in touch with OMP progress
- [Marist Mainframe - 3.1 Upgrade](https://github.com/zowe/zowe-install-packaging/issues/3810)
    * Upgrade will be complete by early November.

## Release and CICD
- Test Framework and Coverage Improvements
  - (Rollover) [Test Framework: ZWE Integration](https://github.com/zowe/zowe-install-packaging/issues/3922)
    - (Completed by above)[Testing default variables / envs](https://github.com/zowe/zowe-install-packaging/issues/3406)
    - (Completed by above)[Testing: Merged Zowe YAMLs](https://github.com/zowe/zowe-install-packaging/issues/3407)
  - [Testing Minor Version Upgrades](https://github.com/zowe/zowe-install-packaging/issues/3315)
- HOLDDATA
  - (Rollover) [Process: How to add ++HOLD data to Zowe PTFs](https://github.com/zowe/zowe-install-packaging/issues/3854)
  - **Stretch** [Add SMP/e HOLDDATA automation](https://github.com/zowe/zowe-install-packaging/issues/3119)

## Install / Configuration
- Continue research on standalone component installation and configuration options.

## Adjacent work tracked in other squads

### Installation / Configuration
- `zwe init` JCL refactor

## Issue Triage
- Continue reviewing issues in the backlog and prioritizing them.

### Dependencies, Risks
- No dependencies on other teams this PI. 
- No newly identified risks.

## In need of capacity
- [Release automation should open license PR on docs-site](https://github.com/zowe/zowe-install-packaging/issues/716)
- [Define optional binaryDependencies](https://github.com/zowe/zowe-install-packaging/issues/2940)
- [Fine-grained release logic](https://github.com/zowe/zowe-install-packaging/issues/3285)

## Roadmap Items

### Remove Node.JS Dependency from Zowe z/OS Configuration
- What problem are you solving? 
  * Zowe installation and configuration scripts pre-req a Node.JS installation which may not be available in some user environments and could negatively impact their installation and configuration experience.
- What are you doing to solve it?
  * Replacing usage of Node.JS with no pre-req alternatives.
- When do you plan to start the work? 
  * In Progress
- When do you plan to deliver the solution? 
  * CY24Q4-CY25Q1
