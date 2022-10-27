# Zowe Systems Squad - 22PI4 - (2022/10/25 - 2023/01/23)

The primary goals for the system squad this PI continue as before - maintaining release operations, responding to high priority issues, and making tactical improvements to automation where time allows.

## CI/CD and Release Automation Improvements
- [Add internal documentation for making changes which impact datasets or dataset members](https://github.com/zowe/zowe-install-packaging/issues/3124)
- [PR Labels allow triggering longer-running builds](https://github.com/zowe/zowe-install-packaging/issues/3123)

## Infrastructure
- [Infrastructure support for ChatOps](https://github.com/zowe/zowe-chat/issues/1)
- wash.zowe.org Jenkins decommissioning
- [Open Mainframe - new mainframe environment]()

## Issue Triage
- [Evaluate Issue Management](https://github.com/zowe/zowe-install-packaging/issues/3126)
- Start reviewing issues in the backlog and prioritizing them.

## On the backlog (not in plan)
- [Release automation should open license PR on docs-site](https://github.com/zowe/zowe-install-packaging/issues/716)
- [Add SMP/e HOLDDATA automation](https://github.com/zowe/zowe-install-packaging/issues/3119)
- [Define optional binaryDependencies](https://github.com/zowe/zowe-install-packaging/issues/2940)
- [Java 11 Testing Support](https://github.com/zowe/zowe-install-packaging/issues/2975)


### Dependencies, Risks
- No dependencies on other teams this PI. The configmgr component is the most active area of zowe-install-packaging and continues to be driven by the z/OS Squad.
- No newly identified risks - business as usual interruptions (responding to a security release, helping with RCs/releases).



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