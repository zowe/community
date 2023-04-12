# Zowe Systems Squad - 23PI1 - (2023/01/24 - 2023/04/24)

The primary goals for the system squad this PI continue as before - maintaining release operations, responding to high priority issues, and making tactical improvements to automation where time allows.

## Infrastructure
- [Open Mainframe - new mainframe environment](https://github.com/zowe/zowe-install-packaging/issues/3241)
    * April 6 OMP TAC Plan Review
    * No info on 
- [Marist Mainframe - Verify z15 transfer]()
- [Marist Mainframe - Verify z/OS 2.5 and 3.1]()
    * If available

## Onboarding
- [Prepare systems squad onnboarding materials](https://github.com/zowe/zowe-install-packaging/issues/3234)
  * [zwe command overview](https://github.com/zowe/zowe-install-packaging/issues/3249)
  * [zwe shell scripts design](https://github.com/zowe/zowe-install-packaging/issues/3250)
  * [zowe-install-packaging-tools](https://github.com/zowe/zowe-install-packaging/issues/3253)
  * [shared pipeline libraries, zowe-actions](https://github.com/zowe/zowe-install-packaging/issues/3255)
  * [build,packaging, and distribution relationships - PAX/SMP/PSWI](https://github.com/zowe/zowe-install-packaging/issues/3256)
  * [zowe containerization](https://github.com/zowe/zowe-install-packaging/issues/3257)
  * [secret and account management](https://github.com/zowe/zowe-install-packaging/issues/3258)

## Release and CICD
- [Review Release Process](https://github.com/zowe/community/issues/1862)
- [Java 11 Test Cases](https://github.com/zowe/zowe-install-packaging/issues/3329)
- [Artifactory API Key Deprecation](https://github.com/zowe/zowe-install-packaging/issues/3229)
- [Adding PR Labels to manage z/OS Builds](https://github.com/zowe/zowe-install-packaging/issues/3123)

## Issue Triage
- Continue reviewing issues in the backlog and prioritizing them.

### Dependencies, Risks
- No dependencies on other teams this PI. 
- No newly identified risks - business as usual interruptions (responding to a security release, helping with RCs/releases).


## Roadmap Items

### Expand Build and Test Infrastructure
- What problem are you solving? 
  * Configure additional MF infrastructure to support demos, labs, and test requirements.
- What are you doing to solve it?
  * Working with OMP to define and validate systems.
- When do you plan to start the work? 
  * CY23Q1
- When do you plan to deliver the solution? 
  * CY23Q4  (Pushed back 1Q)
  
### Use sigstore to sign artifacts
- What problem are you solving? 
  * Aligning with newer industry standards for digitally signing and validating produced artifacts
- What are you doing to solve it?
  * Evaluating how to shift our digitially signed artifacts from opengpg to sigstore, and implementing the change
- When do you plan to start the work? 
  * CY23Q2
- When do you plan to deliver the solution? 
  * CY23Q4 (Pushed back 1Q - capacity)