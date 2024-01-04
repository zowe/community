# Zowe Systems Squad - 24PI1 - (2024/01/23 - 2024/04/22)

The primary goals for the system squad this PI continue - maintaining release operations, responding to high priority issues, and making tactical improvements where time allows.

We have contributors continuing this PI for Zen and zwe install/config updates.

## Infrastructure
- [Open Mainframe - track mainframe environment](https://github.com/zowe/zowe-install-packaging/issues/3241)
    * No news to share 
- [Marist Mainframe - Verify z/OS 2.5 and 3.1](https://github.com/zowe/zowe-install-packaging/issues/3396)
    * Timeline is expected to be within this PI, exact dates are not set.

## Onboarding
- [Complete systems squad onboarding materials](https://github.com/zowe/zowe-install-packaging/issues/3234)
  * Complete rollover from 23PI2
    * [zwe command overview](https://github.com/zowe/zowe-install-packaging/issues/3249)
    * [zwe shell scripts design](https://github.com/zowe/zowe-install-packaging/issues/3250)
    * [zowe-install-packaging-tools](https://github.com/zowe/zowe-install-packaging/issues/3253)
    * [shared pipeline libraries, zowe-actions](https://github.com/zowe/zowe-install-packaging/issues/3255)
    * [build,packaging, and distribution relationships - PAX/SMP/PSWI](https://github.com/zowe/zowe-install-packaging/issues/3256)
    * [zowe containerization](https://github.com/zowe/zowe-install-packaging/issues/3257)
    * [secret and account management](https://github.com/zowe/zowe-install-packaging/issues/3258)

## Release and CICD
- [Artifactory API Key Deprecation](https://github.com/zowe/zowe-install-packaging/issues/3229)
- [Review Test Cases](https://github.com/zowe/zowe-install-packaging/issues/3519)
  * Follow-up from TSC call on test 
## Zen
- 1.0 Milestone
  * [Support certificate configuration]()
  * [Full YAML Editing Mode]()
  * [Validate security definitions]()

## Installation / Configuration
- Continue work on `zwe` install/config improvements and updates
  * Remove Node.JS dependency and focus on improving configmgr mode
    * Address issues uncovered and improve test coverage
  * Focus: configmgr mode
    * Work should be synced w/ z/OS Squad.

## Supply Chain Security v3.0
- Begin research on improvements we can make to supply-chain security

## Issue Triage
- Continue reviewing issues in the backlog and prioritizing them.

### Dependencies, Risks
- No dependencies on other teams this PI. 
- No newly identified risks - business as usual interruptions (responding to a security release, helping with RCs/releases).

## In need of capacity
- [Adding PR Labels to manage z/OS Builds](https://github.com/zowe/zowe-install-packaging/issues/3123)
- [Release automation should open license PR on docs-site](https://github.com/zowe/zowe-install-packaging/issues/716)
- [Add SMP/e HOLDDATA automation](https://github.com/zowe/zowe-install-packaging/issues/3119)
- [Define optional binaryDependencies](https://github.com/zowe/zowe-install-packaging/issues/2940)
- [Remove server-bundle from 2.x](https://github.com/zowe/zowe-install-packaging/issues/3473)
- [Split release logic](https://github.com/zowe/zowe-install-packaging/issues/3285)

## Roadmap Items

### Expand Build and Test Infrastructure
- What problem are you solving? 
  * Configure additional MF infrastructure to support demos, labs, and test requirements.
- What are you doing to solve it?
  * Working with OMP to define and validate systems.
- When do you plan to start the work? 
  * ASAP
- When do you plan to deliver the solution? 
  * CY23Q4  (External dependency)
  
### Use sigstore to sign artifacts
- What problem are you solving? 
  * Aligning with newer industry standards for digitally signing and validating produced artifacts
- What are you doing to solve it?
  * Evaluating how to shift our digitially signed artifacts from opengpg to sigstore, and implementing the change
- When do you plan to start the work? 
  * CY23Q2
- When do you plan to deliver the solution? 
  * CY23Q4 (Pushed back 1Q - capacity)
