# Zowe - Secure Software Development (ZSSD) Lifecycle Policy (LP)

>Table of contents
> 
- [Introduction](#introduction) 
- [Produce Well-Secured Software (PW\)](#pw-produce-well-secured-software)
- [Respond to Vulnerabilities (RV\)](#rv-respond-to-vulnerabilities)

##Introduction
This document contains the Zowe Secure Software Development Lifecycle Policy (ZSSD-LP).

The Zowe ZSSD-LP defines requirements that Organization contributing to Zowe must satisfy in order to be compliant with Zowe SDLC security principles and vision.

This policy is as much as possible SDLC model neutral. In consequence, it does not require from contributors to use any specific SDLC model and related technics, processes or flows.

The requirements defined herein are grouped into two main categories further divided into several sub-categories each.

This categorization reflects the secure development practices grouping as defined by NIST [Secure Software Development Framework (SSDF)](https://csrc.nist.gov/Projects/ssdf).

For easier identification and linking, the categories and sub topics are assigned IDs unique in the Zowe namespace.  

The structure of the document is similar to the other Zowe Security Policy document [Zowe Secure Software Development at organizational level](../Zowe-SSDP-Organization/Policy.md).

>Common definitions:
> 
>Some requirements are strictly mandatory, while some others might not be enforceable in all cases and should be perceived as strong recommendations.   
>
>*Note: Should we state next to each requirement if it is mandatory or not and under what conditions?*
> 
>*Note: Where is the right place to state what evidence is required to prove fulfilment of mandatory requirements?*
>
>Basic principles for classifying a requirement as mandatory:
>
>* Not applying it would expose the SW to a significant security risk
>* There are ways to validate that the requirement was fulfilled
>* TODO: OTHER?
>
>As the requirements are hierarchically structured, classifying a sub-category requirement as mandatory, implies that the parent category is mandatory as well, while some category' sub items may remain optional. 
>
>Should a higher level category be marked as mandatory, but all sub-items are optional, then it is up to the organization to implement measure to fulfill the requirement and state method how this can be validated.

## ZSSD-LP Requirements 

### C. Produce Well-Secured Software (#ZSSD-LP:PW  &emsp;#SSFD:PW Produce Well-Secured Software)
Produce Well-Secured Software with minimal security vulnerabilities in its releases.

#### C1. Requirements to Mitigate security Risk (#ZSSD-LP:PW-RMR &emsp;#SSDF:PW.1.1 Design Software to Meet Security Requirements and Mitigate Security Risks)
- C1.1 Risk, Threat, Attack modelling (#ZSSD-LP:PW-RMR-RTA #SSFD:PW.1.1)

Use forms of risk modeling, such as threat modeling, attack modeling, or attack surface mapping, to help assess the security risk for the software.

- C1.2 security Requirements, Risks and Design decisions (#ZSSD-LP:PW-RMR-RRD #SSFD:PW.1.2) 
 
Document the software’s security requirements, risks, and design decisions.

- C1.3 Standardized security Features (#ZSSD-LP:PW-RMR-SSF #SSFD:PW.1.3) 

Where appropriate, build in support for using standardized security features and services (e.g., integrating with existing log management, identity management, access control, and vulnerability management systems\) instead of creating proprietary implementations of security features and services.

#### C2. Review Software Design (#ZSSD-LP:PW-RSD &emsp;#SSDF:PW2 Review the Software Design to Verify Compliance with Security Requirements and Risk Information)

- C2.1 Design Review Process (#ZSSD-LP:PW-RSD-DRP #SSFD:PW.2.1) 

Have either 1\) a qualified person (or people\) who were not involved with the design or 2\) adequate automated processes instantiated in the toolchain (or both\) review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.

#### C3. Reuse Well-Secured Software (#ZSSD-LP:PW-RWS &emsp;#SSDF:PW.4 Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality)

- C3.1 Acquire Well-Secured software Components (#ZSSD-LP:PW-RWS-AWC #SSDF:PW.4.1) 
 
Acquire well-secured software components (e.g., software libraries, modules, middleware, frameworks\) from commercial, open-source, and other third-party developers for use by the organization’s software.

- C3.2 Create Well-Secured software Components (#ZSSD-LP:PW-RWS-CWC #SSDF:PW.4.2) 
 
Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.

- C3.3 Components Requirements Compliance (#ZSSD-LP:PW-RWS-CRC #SSDF:PW.4.4) 

Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.

- C3.4 Verify Components Integrity (#ZSSD-LP:PW-RWS-VCI #SSDF:PW.4.5) 
 
Verify the integrity and check the provenance of all in-house and third-party software components before reusing them for the organization’s own software.

#### C4. Secure Coding Practices (#ZSSD-LP:PW-SCP &emsp;#SSDF:PW.5 Create Source Code by Adhering to Secure Coding Practices)

- C4.1 development Language and Environment Specific practices (#ZSSD-LP:PW-SCP-LES #SSDF:PW.5.1) 
 
Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.

#### C5. Integrated Development Environment (#ZSSD-LP:IDE &emsp;#SSDF:PW.6 Configure the Integrated Development Environment, Compilation, Interpreter, and Build Processes to Improve Executable Security)
 
- C5.1 Compiler Interpreter and Build tools (#ZSSD-LP:PW-IDE-CIB #SSDF:PW.6.1)
 
Use compiler, interpreter, and build tools that offer features to improve executable security
 
- C5.2 Configure Build Tools (#ZSSD-LP:PW-IDE-CBT #SSDF:PW.6.2)

Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.

#### C6. Analyze Human-readable Code (#ZSSD-LP:AHC &emsp;#SSDF:PW.7 Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements)

- C6.1 Code Review Decision (#ZSSD-LP:PW-AHC-CRD #SSDF:PW.7.1) 

Determine whether code review (a person looks directly at the code to find issues\) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person\) should be used, as defined by the organization.

- C6.2 Code Review Implementation (#ZSSD-LP:PW-AHC-CRI #SSDF:PW.7.2) 

Perform the code review and/or code analysis based on the organization’s secure coding standards, and document and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

#### C7. Test Executable Code (#ZSSD-LP:TEC &emsp;#SSDF:PW.8 Test Executable Code to Identify Vulnerabilities and Verify Compliance withSecurity Requirements)

- C7.1 Code Testing Decisions (#ZSSD-LP:PW-TEC-CTD #SSDF:PW.8.1) 

Determine if executable code testing should be performed to identify and eliminate classes of vulnerabilities not covered by previous reviews, analysis, or testing, and if so, which types should be used.

- C7.2 Code Testing Implementation (#ZSSD-LP:PW-TEC-CTI #SSDF:PW.8.2) 
 
Design the tests, perform the testing, and document the results, including documenting and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

#### C8. Secure Settings by Default (#ZSSD-LP:SSD &emsp;#SSDF:PW.9 Configure Software to Have Secure Settings by Default)

- C8.1 Secure Baseline Configuration (#ZSSD-LP:PW-SSD-SBD #SSDF:PW.9.1) 

Define a secure baseline by determining how to configure each setting that has an effect on security so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.

- C8.2 Implement Default Settings (#ZSSD-LP:PW-SSD-IDS #SSDF:PW.9.2) 
 
Implement the default settings (or groups of default settings, if applicable\), and document each setting for software administrators.


### D. Respond to Vulnerabilities (#ZSSD-LP:RV &emsp;#SSDF:RV Respond to Vulnerabilities) 
#### D1. Identify and Confirm Vulnerabilities (#ZSSD-LP:ICV &emsp;#SSDF:RV.1 Identify and Confirm Vulnerabilities on an Ongoing Basis)

- D1.1 Potential Vulnerability sources Monitoring (#ZSSD-LP:RV-ICV-PVM #SSDF:RV.1.1)

Gather information from purchasers, consumers, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.

- D1.2 Code Review and Tests (#ZSSD-LP:RV-ICV-CRT #SSDF:RV.1.2) 
 
Review, analyze, and/or test the software’s code to identify or confirm the presence of previously undetected vulnerabilities.
 
- D1.3 Vulnerabilities Disclosure and Remediation policy (#ZSSD-LP:RV-ICV-VDR #SSDF:RV.1.3) 
 
Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.


#### D2. Assess, prioritize and Remediate Vulnerabilities (#ZSSD-LP:ARV &emsp;#SSDF:RV.2 Assess, Prioritize, and Remediate Vulnerabilities)

- D2.1 Analyse Each Vulnerability (#ZSSD-LP:RV-ARV-AEV #SSDF:RV.2.1) 
 
Analyze each vulnerability to gather sufficient information to plan its remediation.

- D2.2 Develop and Implement vulnerability Remediation plan (#ZSSD-LP:RV-ARV-DRI #SSDF:RV.2.2) 

Develop and implement a remediation plan for each vulnerability.
 

#### D3. Vulnerabilities Root Cause Analysis (#ZSSD-LP:VRA &emsp;#SSDF:RV.3 Analyze Vulnerabilities to Identify Their Root Causes. Help reduce the frequency of vulnerabilities in the future.)
- D3.1 Root Cause Analysis (#ZSSD-LP:RV-VRA-RCA #SSDF:RV.3.1) 
 
Analyze all identified vulnerabilities to determine the root cause of each vulnerability.
 
- D3.2 Root Cause Patterns identification (#ZSSD-LP:RV-VRA-RCP #SSDF:RV.3.2) 
 
Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently.
 
- D3.3 Fix Similar Vulnerabilities (#ZSSD-LP:RV-VRA-FSV #SSDF:RV.3.3) 
 
Review the software for similar vulnerabilities, and proactively fix them rather than waiting for external reports.
 
- D3.4 Review Development lifecycle Process (#ZSSD-LP:RV-VRA-RDP #SSDF:RV.3.4)  

Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of\) the root cause recurring in updates to the software or in new software that is created.

>##Notes, TODOs
>
>* Some items look really rather as recommended practices instead of policy requirements
>  * Create requirement to group such practices into a sound requirement
>  * Map M:N between ZSSD and SSDF and others
>* Flag which requirements are mandatory
>* Automated tests to prove some policy requirements fulfilment

[// intentionally commented out]: <> (* ### Reporting Security Issues)
[// intentionally commented out]: <> (* Please direct all security issues to zowe-security@lists.openmainframeproject.org. A member of the security group will reply to acknowledge receipt of the vulnerability and coordinate remediation with the affected squad.)

[// intentionally commented out]: <> ( PUT-COMMENTED-OUT-TEXT-HERE )
