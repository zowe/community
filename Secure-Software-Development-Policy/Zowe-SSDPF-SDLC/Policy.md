# Zowe Secure Software Development - SDLC Policy

This SSD Policy defines requirements  
that Organization contributing to Zowe must fulfil inorder to be compliant with Zowe security principles and vision.

The requirements defined herein are grouped into two main categories further divided into several sub-categories each.
This categorization reflects the secure development practices grouping as defined by NIST [Secure Software Development Framework (SSDF)](https://csrc.nist.gov/Projects/ssdf).
For easier identification and linking, the categories and sub topics are assigned with IDs unique in the Zowe namespace.  
The structure corresponds the to Secure Software Development at organizational level.

- [Produce Well-Secured Software (PW\)](#pw-produce-well-secured-software)
- [Respond to Vulnerabilities (RV\)](#rv-respond-to-vulnerabilities)

## A. Produce Well-Secured Software (PW) / (SSFD:PW) Produce Well-Secured Software
Produce Well-Secured Software with minimal security vulnerabilities in its releases.

### A1. Requirements to Mitigate security Risk (PW-RMR) / (SSDF:PW.1.1) Design Software to Meet Security Requirements and Mitigate Security Risks
- Z-SSD-OP:A1.1.PO-RR-CAR / PW.1.1

Use forms of risk modeling, such as threat modeling, attack modeling, or attack surface mapping, to help assess the security risk for the software.

- Z-SSD-OP:A1.1.PO-RR-CAR / PW.1.2: 
 
Document the software’s security requirements, risks, and design decisions.

- PW.1.3: 

Where appropriate, build in support for using standardized security features and services (e.g., integrating with existing log management, identity management, access control, and vulnerability management systems\) instead of creating proprietary implementations of security features and services.

### A2. Review Software Design (PW-RSD) / (SSDF:PW2) Review the Software Design to Verify Compliance with Security Requirements and Risk Information

- PW.2.1: 

Have either 1\) a qualified person (or people\) who were not involved with the design or 2\) adequate automated processes instantiated in the toolchain (or both\) review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.

### A3. Reuse Well-Secured Software (PW-RWS) / (SSDF:PW.4) Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality

- PW.4.1: 
 
Acquire well-secured software components (e.g., software libraries, modules, middleware, frameworks\) from commercial, open-source, and other third-party developers for use by the organization’s software.

- PW.4.2: 
 
Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.

- PW.4.4: 

Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.

- PW.4.5: 
 
Verify the integrity and check the provenance of all in-house and third-party software components before reusing them for the organization’s own software.


### A4. Secure Coding Practices (SCP) / (SSDF:PW.5) Create Source Code by Adhering to Secure Coding Practices

- PW.5.1: 
 
Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.

### A5. Integrated Development Environment (IDE) / (SSDF:PW.6) Configure the Integrated Development Environment, Compilation, Interpreter, and Build Processes to Improve Executable Security
 
- PW.6.1: 
 
Use compiler, interpreter, and build tools that offer features to improve executable security
 
- PW.6.2: 

Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.

### A6. Analyze Human-readable Code (AHC) / (SSDF:PW.7) Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements

- PW.7.1: 

Determine whether code review (a person looks directly at the code to find issues\) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person\) should be used, as defined by the organization.

- PW.7.2: 

Perform the code review and/or code analysis based on the organization’s secure coding standards, and document and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

### A7. Test Executable Code (TEC) / (SSDF:PW.8) Test Executable Code to Identify Vulnerabilities and Verify Compliance withSecurity Requirements

- PW.8.1: 

Determine if executable code testing should be performed to identify and eliminate classes of vulnerabilities not covered by previous reviews, analysis, or testing, and if so, which types should be used.

- PW.8.2: 
 
Design the tests, perform the testing, and document the results, including documenting and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

### A8. Secure Settings by Default (SSD) / (SSDF:PW.9) Configure Software to Have Secure Settings by Default

- PW.9.1: 

Define a secure baseline by determining how to configure each setting that has an effect on security so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.

- PW.9.2: 
 
Implement the default settings (or groups of default settings, if applicable\), and document each setting for software administrators.

## B. Respond to Vulnerabilities (RV) / (SSDF:RV) Respond to Vulnerabilities 
### B1. Identify and Confirm Vulnerabilities (ICV) / (SSDF:RV.1:) Identify and Confirm Vulnerabilities on an Ongoing Basis

- RV.1.1:

Gather information from purchasers, consumers, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.

- RV.1.2: 
 
Review, analyze, and/or test the software’s code to identify or confirm the presence of previously undetected vulnerabilities.
 
- RV.1.3: 
 
Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.

### B2. Assess, prioritize and Remediate Vulnerabilities (ARV) / (SSDF:RV.2) Assess, Prioritize, and Remediate Vulnerabilities

- RV.2.1: 
 
Analyze each vulnerability to gather sufficient information to plan its remediation.

- RV.2.2: 

Develop and implement a remediation plan for each vulnerability.
 

### B3. Vulnerabilities Root Cause Analysis (VRA) / (SSDF:RV.3) Analyze Vulnerabilities to Identify Their Root Causes. Help reduce the frequency of vulnerabilities in the future.
- RV.3.1: 
 
Analyze all identified vulnerabilities to determine the root cause of each vulnerability.
 
- RV.3.2: 
 
Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently.
 
- RV.3.3: 
 
Review the software for similar vulnerabilities, and proactively fix them rather than waiting for external reports.
 
- RV.3.4: 
 
Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of\) the root cause recurring in updates to the software or in new software that is created.


[// intentionally commented out]: <> (* ### Reporting Security Issues)
[// intentionally commented out]: <> (* Please direct all security issues to zowe-security@lists.openmainframeproject.org. A member of the security group will reply to acknowledge receipt of the vulnerability and coordinate remediation with the affected squad.)
