# Zowe Systems Squad - 23PI4 (2023/10/31 - 2023/01/22)

The primary goals for the system squad this PI continue - maintaining release operations, responding to high priority issues, and making tactical improvements where time allows.

Work related to Zen and the `zwe` Node.JS dependency removal will be tracked in other squads. 

## Infrastructure
- [Open Mainframe - track mainframe environment](https://github.com/zowe/zowe-install-packaging/issues/3241)
    * No news to share
- [Marist Mainframe - Verify z/OS 2.5](https://github.com/zowe/zowe-install-packaging/issues/3396)
    * Starting soon / in progress

## Onboarding
- [Complete systems squad onboarding materials](https://github.com/zowe/zowe-install-packaging/issues/3234)
  * Complete rollover from 23PI3

## Release and CICD
- [Complete v3 Branching and Builds](https://github.com/zowe/zowe-install-packaging/issues/3482)
  * Work starting in PI3, continuing PI4
- [Review Test Cases](https://github.com/zowe/zowe-install-packaging/issues/3519)
## Zen
- Note: Track work in web ui squad

## Installation / Configuration
- Continue work on `zwe` install/config improvements and updates. [Tracking Issue](https://github.com/zowe/zowe-install-packaging/issues/3543#issuecomment-1742777242)
  * Remove Node.JS dependency and focus on improving configmgr mode
  * Remaining zowe-install-packaging-tools to be converted: `fconv`, `curl`, `jq`.

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
