# Zowe Secure Software Development - SDLC Policy

This SSD Policy defines requirements  
that Organization contributing to Zowe must fulfil inorder to be compliant with Zowe security principles and vision.

- [Zowe Community](#zowe-community)
  - [Communication Channels](#communication-channels)
    - [Slack](#slack)
    - [Mailing Lists](#mailing-lists)
    - [Community Forums](#community-forums)
  - [Contribute](#contribute)
    - [Submit an issue](#submit-an-issue)
      - [Pull Request Guidelines](#pull-request-guidelines)
    - [Reporting Security Issues](#reporting-security-issues)


## Communication Channels


## PW: Produce Well-Secured Software with minimal security vulnerabilities in its releases.
### PW.1: Design Software to Meet Security Requirements and Mitigate Security Risks
- PW.1.1: Use forms of risk modeling, such as threat modeling, attack modeling, or attack surface mapping, to help assess the security risk for the software.
- PW.1.2: Document the software’s security requirements, risks, and design decisions.
- PW.1.3: Where appropriate, build in support for using standardized security features and services (e.g., integrating with existing log management, identity management, access control, and vulnerability management systems\) instead of creating proprietary implementations of security features and services.

### PW.2: Review the Software Design to Verify Compliance with Security Requirements and Risk Information
- PW.2.1: Have either 1\) a qualified person (or people\) who were not involved with the design or 2\) adequate automated processes instantiated in the toolchain (or both\) review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.

### PW.4: Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality
- PW.4.1: Acquire well-secured software components (e.g., software libraries, modules, middleware, frameworks\) from commercial, open-source, and other third-party developers for use by the organization’s software.
- PW.4.2: Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.
- PW.4.4: Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.
- PW.4.5: Verify the integrity and check the provenance of all in-house and third-party software components before reusing them for the organization’s own software.

### PW.5: Create Source Code by Adhering to Secure Coding Practices
- PW.5.1: Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.

### PW.6: Configure the Integrated Development Environment, Compilation, Interpreter, and Build Processes to Improve Executable Security
- PW.6.1: Use compiler, interpreter, and build tools that offer features to improve executable security
- PW.6.2: Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.

### PW.7: Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements
- PW.7.1: Determine whether code review (a person looks directly at the code to find issues\) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person\) should be used, as defined by the organization.
- PW.7.2: Perform the code review and/or code analysis based on the organization’s secure coding standards, and document and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

### PW.8: Test Executable Code to Identify Vulnerabilities and Verify Compliance withSecurity Requirements
- PW.8.1: Determine if executable code testing should be performed to identify and eliminate classes of vulnerabilities not covered by previous reviews, analysis, or testing, and if so, which types should be used.
- PW.8.2: Design the tests, perform the testing, and document the results, including documenting and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

### PW.9: Configure Software to Have Secure Settings by Default
- PW.9.1: Define a secure baseline by determining how to configure each setting that has an effect on security so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.
- PW.9.2: Implement the default settings (or groups of default settings, if applicable\), and document each setting for software administrators.

## Respond to Vulnerabilities (RV)
### RV.1: Identify and Confirm Vulnerabilities on an Ongoing Basis
- RV.1.1: Gather information from purchasers, consumers, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.
- RV.1.2: Review, analyze, and/or test the software’s code to identify or confirm the presence of previously undetected vulnerabilities.
- RV.1.3: Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.

### RV.2: Assess, Prioritize, and Remediate Vulnerabilities
- RV.2.1: Analyze each vulnerability to gather sufficient information to plan its remediation.
- RV.2.2: Develop and implement a remediation plan for each vulnerability.

### RV.3: Analyze Vulnerabilities to Identify Their Root Causes. Help reduce the frequency of vulnerabilities in the future.
- RV.3.1: Analyze all identified vulnerabilities to determine the root cause of each vulnerability.
- RV.3.2: Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently.
- RV.3.3: Review the software for similar vulnerabilities, and proactively fix them rather than waiting for external reports.
- RV.3.4: Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of\) the root cause recurring in updates to the software or in new software that is created.



### Submit an issue

You can submit an issue (Bug or Feature) on Zowe in general at https://github.com/zowe/community/issues/new/choose. If you have an issue that is specific to a squad or specific repository, feel free to submit an issue against a specific repo.

#### Pull Request Guidelines

Pull requests cannot be merged without the approval of at least one maintainer, who will be looking for the pull request to meet requirements as follows:

* The code in the pull request must adhere to the [general Code Style Guidelines](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/best-practices/coding-style.md) and those for the squads.
* The code must compile/transpile (where applicable) and pass a smoke test such that the code is not known to break the current state of Zowe.
* The pull request must describe the purpose and implementation to the extent that the maintainer understands what is being accomplished. Some pull requests need less details than others depending on novelty.
* The pull request must state how to test this change, if applicable, such that the maintainer or a QA team can check correctness. The explanation may simply be to run included test code.
* If a pull request depends upon a pull request from the same / another repository that is pending, this must be stated such that maintainers know in which order to merge open pull requests.

### Reporting Security Issues

Please direct all security issues to zowe-security@lists.openmainframeproject.org. A member of the security group will reply to acknowledge receipt of the vulnerability and coordinate remediation with the affected squad.
