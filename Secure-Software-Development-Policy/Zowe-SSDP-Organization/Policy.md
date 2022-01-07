# Zowe Secure Software Development - Organization Policy 

This document defines Zowe Secure Software Development Policy at organizational level.
This security policy states the requirements that an Organization/Squad/Team contributing to Zowe must fulfil in order to conform
to Zowe security vision and principles. The fulfilment of these requirements [#CHOOSE-ONE: needs to/should be/must be/is] measurable and provable. 

The requirements defined herein are grouped into two main categories further divided into several sub-categories each. 
This categorization reflects the secure development practices grouping as defined by NIST [Secure Software Development Framework (SSDF)](https://csrc.nist.gov/Projects/ssdf).
For easier identification and linking, the categories and sub topics are assigned with IDs unique in the Zowe namespace.  
The structure corresponds the to Secure Software Development at organizational level.

**Note: For our Secure SDLC Policy please visit [Zowe Secure Software Development Lifecycle Policy](../Zowe-SSDPF-SDLC/Policy.md).

- [Prepare the organization (PO)](#prepare-the-organization)

- [Protect the Software (PS)](#protect-the-software)

[// intentionally commented out]: <> (* - [Produce Well-Secured Software (PW\)](#produce-well-secured-software\))

[// intentionally commented out]: <> (* - [Respond to Vulnerabilities (RV\)](#respond-to-vulnerabilities\))

<span style="display: none">#TODO@PZA: Discuss if all categories, subcategories and their structure reflect our needs. Maybe some should be skipped, moved etc.</span>

## PO: Prepare the organization

### PO.2: Implement Roles and Responsibilities:
- PO.2.1: Create new roles and alter responsibilities for existing roles as needed to encompass all parts of the SSDF. Periodically review and maintain the defined roles and responsibilities, updating them as needed
- PO.2.2: Provide role-based training for all personnel with responsibilities that contribute to secure development. Periodically review personnel proficiency and role-based training, and update the training asneeded.
- PO.2.3: Obtain upper management commitment to secure development, and convey that commitment to all with SSDF-related roles and responsibilities.

### PO.3: Implement Supporting Toolchains
- PO.3.1: Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other
- PO.3.2: Follow recommended security practices deploying and maintaining tools and toolchains
- PO.3.3: Configure tools to generate evidence and artifacts of their support of secure software development practices as defined by the organization.

### PO.4: Define and Use Criteria for Software Security Checks
- PO.4.1: Define criteria for software security checks and track throughout the SDLC.
- PO.4.2: Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.

### PO.5: Implement and Maintain Secure Environments for Software Development
- PO.5.1: Separate and protect each environment involved in software development.
- PO.5.2: Secure and harden development endpoints (i.e., endpoints for software designers, developers, testers, builders, etc.\) to perform development-related tasks using a risk-based approach.
    
## PS: Protect the Software

### PS.1: Protect All Forms of Code from Unauthorized Access and Tampering
- PS.1.1: Store all forms of code, including source code and executable code, based on the principle of least privilege so that only authorized personnel, tools,services, etc. have the necessary forms of access.

### PS.2: Provide a Mechanism for Verifying Software Release Integrity
  - PS.2.1: Make integrity verification information available to software purchasers and consumers.
  
### PS.3: Archive and Protect Each Software Release
  - PS.3.1: Securely archive the necessary files and other data (e.g., integrity verification information, provenance data) to be retained for each software release.

  - PS.3.2: Collect, maintain, and share provenance data for all components and other dependencies of each software release (e.g., in a software bill of materials[SBOM]).

[// intentionally commented out]: <> (* ## PW: Produce Well-Secured Software with minimal security vulnerabilities in its releases.)
[// intentionally commented out]: <> (* ### PW.1: Design Software to Meet Security Requirements and Mitigate Security Risks)
[// intentionally commented out]: <> (* - PW.1.1: Use forms of risk modeling, such as threat modeling, attack modeling, or attack surface mapping, to help assess the security risk for the software.)
[// intentionally commented out]: <> (* - PW.1.2: Document the software’s security requirements, risks, and design decisions.)
[// intentionally commented out]: <> (* - PW.1.3: Where appropriate, build in support for using standardized security features and services (e.g., integrating with existing log management, identity management, access control, and vulnerability management systems\) instead of creating proprietary implementations of security features and services.)

[// intentionally commented out]: <> (* ### PW.2: Review the Software Design to Verify Compliance with Security Requirements and Risk Information)
[// intentionally commented out]: <> (* - PW.2.1: Have either 1\) a qualified person (or people\) who were not involved with the design or 2\) adequate automated processes instantiated in the toolchain (or both\) review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.)

[// intentionally commented out]: <> (* ### PW.4: Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality)
[// intentionally commented out]: <> (* - PW.4.1: Acquire well-secured software components (e.g., software libraries, modules, middleware, frameworks\) from commercial, open-source, and other third-party developers for use by the organization’s software.)
[// intentionally commented out]: <> (* - PW.4.2: Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.)
[// intentionally commented out]: <> (* - PW.4.4: Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.)
[// intentionally commented out]: <> (* - PW.4.5: Verify the integrity and check the provenance of all in-house and third-party software components before reusing them for the organization’s own software.)

[// intentionally commented out]: <> (* ### PW.5: Create Source Code by Adhering to Secure Coding Practices)
[// intentionally commented out]: <> (* - PW.5.1: Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.)

[// intentionally commented out]: <> (* ### PW.6: Configure the Integrated Development Environment, Compilation, Interpreter, and Build Processes to Improve Executable Security)
[// intentionally commented out]: <> (* - PW.6.1: Use compiler, interpreter, and build tools that offer features to improve executable security)
[// intentionally commented out]: <> (* - PW.6.2: Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.)

[// intentionally commented out]: <> (* ### PW.7: Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements)
[// intentionally commented out]: <> (* - PW.7.1: Determine whether code review (a person looks directly at the code to find issues\) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person\) should be used, as defined by the organization.)
[// intentionally commented out]: <> (* - PW.7.2: Perform the code review and/or code analysis based on the organization’s secure coding standards, and document and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.)

[// intentionally commented out]: <> (* ### PW.8: Test Executable Code to Identify Vulnerabilities and Verify Compliance withSecurity Requirements)
[// intentionally commented out]: <> (* - PW.8.1: Determine if executable code testing should be performed to identify and eliminate classes of vulnerabilities not covered by previous reviews, analysis, or testing, and if so, which types should be used.)
[// intentionally commented out]: <> (* - PW.8.2: Design the tests, perform the testing, and document the results, including documenting and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.)

[// intentionally commented out]: <> (* ### PW.9: Configure Software to Have Secure Settings by Default)
[// intentionally commented out]: <> (* - PW.9.1: Define a secure baseline by determining how to configure each setting that has an effect on security so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.)
[// intentionally commented out]: <> (* - PW.9.2: Implement the default settings (or groups of default settings, if applicable\), and document each setting for software administrators.)

[// intentionally commented out]: <> (* ## Respond to Vulnerabilities (RV)
[// intentionally commented out]: <> (* ### RV.1: Identify and Confirm Vulnerabilities on an Ongoing Basis)
[// intentionally commented out]: <> (* - RV.1.1: Gather information from purchasers, consumers, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.)
[// intentionally commented out]: <> (* - RV.1.2: Review, analyze, and/or test the software’s code to identify or confirm the presence of previously undetected vulnerabilities.)
[// intentionally commented out]: <> (* - RV.1.3: Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.)

[// intentionally commented out]: <> (* ### RV.2: Assess, Prioritize, and Remediate Vulnerabilities)
[// intentionally commented out]: <> (* - RV.2.1: Analyze each vulnerability to gather sufficient information to plan its remediation.)  
[// intentionally commented out]: <> (* - RV.2.2: Develop and implement a remediation plan for each vulnerability.)

[// intentionally commented out]: <> (* ### RV.3: Analyze Vulnerabilities to Identify Their Root Causes. Help reduce the frequency of vulnerabilities in the future.)
[// intentionally commented out]: <> (* - RV.3.1: Analyze all identified vulnerabilities to determine the root cause of each vulnerability.)
[// intentionally commented out]: <> (* - RV.3.2: Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently.)
[// intentionally commented out]: <> (* - RV.3.3: Review the software for similar vulnerabilities, and proactively fix them rather than waiting for external reports.)
[// intentionally commented out]: <> (* - RV.3.4: Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of\) the root cause recurring in updates to the software or in new software that is created.)