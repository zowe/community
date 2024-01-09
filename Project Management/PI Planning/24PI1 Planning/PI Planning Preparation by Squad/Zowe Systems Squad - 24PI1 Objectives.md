# Zowe Systems Squad - 24PI1 - (2024/01/23 - 2024/04/22)

The primary goals for the system squad this PI continue - maintaining release operations, responding to high priority issues, and making tactical improvements where time allows.

We have contributors continuing this PI for Zen and zwe install/config updates.

## Infrastructure
- [Open Mainframe - track mainframe environment](https://github.com/zowe/zowe-install-packaging/issues/3241)
    * No news to share 

## Supply Chain Security for Zowe v3.0
- Refactor license, notice, sbom tooling on ORT

## Installation / Configuration
- Continue work on `zwe` install/config improvements and updates
  * Remove Node.JS dependency and focus on improving configmgr mode
    * Address issues uncovered and improve test coverage
  * Focus: configmgr mode
    * Work should be synced w/ z/OS Squad.

## Community Onboarding
- [Continue systems squad onboarding materials](https://github.com/zowe/zowe-install-packaging/issues/3234)

## Release and CICD
- No work planned

## Zen
- See App Framework Squad

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
  * CY24??  (External dependency)
  
### Use sigstore to sign artifacts
- What problem are you solving? 
  * Aligning with newer industry standards for digitally signing and validating produced artifacts
- What are you doing to solve it?
  * Evaluating how to shift our digitially signed artifacts from opengpg to sigstore, and implementing the change
- When do you plan to start the work? 
  * CY23Q4
- When do you plan to deliver the solution? 
  * CY24Q1 (Pushed back 1Q - capacity)
