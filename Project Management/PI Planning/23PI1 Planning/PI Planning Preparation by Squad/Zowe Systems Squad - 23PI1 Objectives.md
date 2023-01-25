# Zowe Systems Squad - 23PI1 - (2023/01/24 - 2023/04/24)

The primary goals for the system squad this PI continue as before - maintaining release operations, responding to high priority issues, and making tactical improvements to automation where time allows.

## Infrastructure
- [Node v18 Installation](https://github.com/zowe/zowe-install-packaging/issues/3130)
    * Covers installing Node 18 and updating our test matrix to use node 18, and forwarding any issues found to squads 
- [Java 11 Installation](https://github.com/zowe/zowe-install-packaging/issues/2975)
- [Verify - wash.zowe.org Jenkins decommissioning can proceed](https://github.com/zowe/zowe-install-packaging/issues/3233)
- [Open Mainframe - new mainframe environment](https://github.com/zowe/zowe-install-packaging/issues/3241)
    * No new information yet - 1/6/23

## Onboarding
- [Prepare systems squad onnboarding materials](https://github.com/zowe/zowe-install-packaging/issues/3234)
  * [Zowe-Install-Packaging Structure, README Review](https://github.com/zowe/zowe-install-packaging/issues/3245)
  * [Release Process and Activities](https://github.com/zowe/zowe-install-packaging/issues/3246)
  * [Infrastructure Management, Debugging](https://github.com/zowe/zowe-install-packaging/issues/3247)
  * [Pipelines Development and Debugging](https://github.com/zowe/zowe-install-packaging/issues/3248)
  * [zwe config manager mode](https://github.com/zowe/zowe-install-packaging/issues/3251)
  * [zwe bridge between shell and config manager](https://github.com/zowe/zowe-install-packaging/issues/3252)
  * [zowe launcher](https://github.com/zowe/zowe-install-packaging/issues/3254)

## Issue Triage
- Continue reviewing issues in the backlog and prioritizing them.

### Dependencies, Risks
- No dependencies on other teams this PI. 
- No newly identified risks - business as usual interruptions (responding to a security release, helping with RCs/releases).




### Not in plan

### CI/CD and Release Automation Improvements
- [Release automation should open license PR on docs-site](https://github.com/zowe/zowe-install-packaging/issues/716)
- [Add SMP/e HOLDDATA automation](https://github.com/zowe/zowe-install-packaging/issues/3119)
- [Define optional binaryDependencies](https://github.com/zowe/zowe-install-packaging/issues/2940)
- [Add internal documentation for making changes which impact datasets or dataset members](https://github.com/zowe/zowe-install-packaging/issues/3124)
- [PR Labels allow triggering longer-running builds](https://github.com/zowe/zowe-install-packaging/issues/3123)






## Roadmap Items

### Improvements to Release Automation
- What problem are you solving? 
  * Addressing some gaps in our release automation.
- What are you doing to solve it?
  * Expanding our current suite of release automation.
- When do you plan to start the work? 
  * CY22Q4
- When do you plan to deliver the solution? 
  * CY23Q1

### Expand Build and Test Infrastructure
- What problem are you solving? 
  * Configure additional MF infrastructure to support demos, labs, and test requirements.
- What are you doing to solve it?
  * Working with OMP to define and validate systems.
- When do you plan to start the work? 
  * CY23Q1
- When do you plan to deliver the solution? 
  * CY23Q3
  
### Use sigstore to sign artifacts
- What problem are you solving? 
  * Aligning with newer industry standards for digitally signing and validating produced artifacts
- What are you doing to solve it?
  * Evaluating how to shift our digitially signed artifacts from opengpg to sigstore, and implementing the change
- When do you plan to start the work? 
  * CY23Q2
- When do you plan to deliver the solution? 
  * CY23Q3