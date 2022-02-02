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

### Hashtags explanation
```
#MANDATORY - mandatory requirement. Implies it is measureable and enforceable.
#OPTIONAL - the requirement is not mandatory. 
#MEASURABLE - it is possible to validate that the requiorement was met
#ENFORCEABLE - Zowe has the right and power to enforce fulfilment of the gicen requirement 
#DOCUMENT-IT - must be documented in detail on the project/produt pages 
#EVIDENCE - evidence about how was a requirement met is required to be published and public
#TOO-BROAD - definition is too broa/general. in consequence the requirement is hard to measure and enforce 
#TOO-DETAILED - definition is too dtailed to the extend that it could be confusing or misleading 
#PRACTICE - rather a good practice than requirement
#PROCESS - reference to process which helps to meet the requirement 
#GUIDELINE-ABC - reference to a guideline which helps to meet given requirement 
```

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

### C. Produce Well-Secured Software (#ZSSD-LP:PW  #SSFD:PW Produce Well-Secured Software)
Produce Well-Secured Software with minimal security vulnerabilities in its releases.

#### C1. Requirements to Mitigate security Risk (#ZSSD-LP:PW-RMR #SSDF:PW.1.1 Design Software to Meet Security Requirements and Mitigate Security Risks)
- C1.1 Risk, Threat, Attack modelling (#ZSSD-LP:PW-RMR-RTA #SSFD:PW.1.1)

>Use forms of risk modeling, such as threat modeling, attack modeling, or attack surface mapping, to help assess the security risk for the software.

- C1.2 security Requirements, Risks and Design decisions (#ZSSD-LP:PW-RMR-RRD #SSFD:PW.1.2) 
 
>Document the software’s security requirements, risks, and design decisions.

- C1.3 Standardized security Features (#ZSSD-LP:PW-RMR-SSF #SSFD:PW.1.3) 

>Where appropriate, build in support for using standardized security features and services (e.g., integrating with existing log management, identity management, access control, and vulnerability management systems\) instead of creating proprietary implementations of security features and services.

#### C2. Review Software Design (#ZSSD-LP:PW-RSD #SSDF:PW2 Review the Software Design to Verify Compliance with Security Requirements and Risk Information)

- C2.1 Design Review Process (#ZSSD-LP:PW-RSD-DRP #SSFD:PW.2.1) 

>Have either 1\) a qualified person (or people\) who were not involved with the design or 2\) adequate automated processes instantiated in the toolchain (or both\) review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.

#### C3. Reuse Well-Secured Software (#ZSSD-LP:PW-RWS #SSDF:PW.4 Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality)

- C3.1 Acquire Well-Secured software Components (#ZSSD-LP:PW-RWS-AWC #SSDF:PW.4.1) 
 
>Acquire well-secured software components (e.g., software libraries, modules, middleware, frameworks\) from commercial, open-source, and other third-party developers for use by the organization’s software.

- C3.2 Create Well-Secured software Components (#ZSSD-LP:PW-RWS-CWC #SSDF:PW.4.2) 
 
>Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.

- C3.3 Components Requirements Compliance (#ZSSD-LP:PW-RWS-CRC #SSDF:PW.4.4) 

>Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.

- C3.4 Verify Components Integrity (#ZSSD-LP:PW-RWS-VCI #SSDF:PW.4.5) 
 
>Verify the integrity and check the provenance of all in-house and third-party software components before reusing them for the organization’s own software.

#### C4. Secure Coding Practices #ZSSD-LP:PW-SCP 
```#SSDF:PW.5 Create Source Code by Adhering to Secure Coding Practices```

- C4.1 development Language and Environment Specific practices (#ZSSD-LP:PW-SCP-LES #SSDF:PW.5.1) 
 
>Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.

- C4.2 Use basic good cryptographic practices
```#OpenSSF-BP:SSF-A.2 Use basic good cryptographic practices```
-  
#### C5. Integrated Development Environment (#ZSSD-LP:IDE #SSDF:PW.6 Configure the Integrated Development Environment, Compilation, Interpreter, and Build Processes to Improve Executable Security)
 
- C5.1 Compiler Interpreter and Build tools (#ZSSD-LP:PW-IDE-CIB #SSDF:PW.6.1)

>Use compiler, interpreter, and build tools that offer features to improve executable security

```#too-general #not-measurable```
 
- C5.2 Configure Build Tools (#ZSSD-LP:PW-IDE-CBT #SSDF:PW.6.2)

>Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.

#### C6. Analyze Human-readable Code (#ZSSD-LP:AHC #SSDF:PW.7 Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements)

- C6.1 Code Review Decision (#ZSSD-LP:PW-AHC-CRD #SSDF:PW.7.1) 

>Determine whether code review (a person looks directly at the code to find issues\) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person\) should be used, as defined by the organization.

- C6.2 Code Review Implementation (#ZSSD-LP:PW-AHC-CRI #SSDF:PW.7.2) 

>Perform the code review and/or code analysis based on the organization’s secure coding standards, and document and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

#### C7. Test Executable Code (#ZSSD-LP:TEC #SSDF:PW.8 Test Executable Code to Identify Vulnerabilities and Verify Compliance withSecurity Requirements)

- C7.1 Code Testing Decisions (#ZSSD-LP:PW-TEC-CTD #SSDF:PW.8.1) 

>Determine if executable code testing should be performed to identify and eliminate classes of vulnerabilities not covered by previous reviews, analysis, or testing, and if so, which types should be used.

- C7.2 Code Testing Implementation (#ZSSD-LP:PW-TEC-CTI #SSDF:PW.8.2) 
 
>Design the tests, perform the testing, and document the results, including documenting and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

#### C8. Secure Settings by Default (#ZSSD-LP:SSD #SSDF:PW.9 Configure Software to Have Secure Settings by Default)

- C8.1 Secure Baseline Configuration (#ZSSD-LP:PW-SSD-SBD #SSDF:PW.9.1) 

>Define a secure baseline by determining how to configure each setting that has an effect on security so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.

- C8.2 Implement Default Settings (#ZSSD-LP:PW-SSD-IDS #SSDF:PW.9.2) 
 
>Implement the default settings (or groups of default settings, if applicable\), and document each setting for software administrators.

#### C9 Use Basic good Cryptographic Practices #ZSSD-LP:PW-TEC-BCP
- SSF-A.2.1-B The software produced by the project MUST use, by default, only cryptographic protocols and algorithms that are publicly published and reviewed by experts (if cryptographic protocols and algorithms are used). {N/A allowed} [crypto_published]
- SSF-A.2.2-B If the software produced by the project is an application or library, and its primary purpose is not to implement cryptography, then it SHOULD only call on software specifically designed to implement cryptographic functions; it SHOULD NOT re-implement its own. {N/A allowed} [crypto_call]
- SSF-A.2.3-B All functionality in the software produced by the project that depends on cryptography MUST be implementable using FLOSS. {N/A allowed} [crypto_floss]
- SSF-A.2.4-B The security mechanisms within the software produced by the project MUST use default key lengths that at least meet the NIST minimum requirements through the year 2030 (as stated in 2012). It MUST be possible to configure the software so that smaller keylengths are completely disabled. {N/A allowed} [crypto_keylength]
- SSF-A.2.5-B The default security mechanisms within the software produced by the project MUST NOT depend on broken cryptographic algorithms (e.g., MD4, MD5, single DES, RC4, Dual_EC_DRBG), or use cipher modes that are inappropriate to the context, unless they are necessary to implement an interoperable protocol (where the protocol implemented is the most recent version of that standard broadly supported by the network ecosystem, that ecosystem requires the use of such an algorithm or mode, and that ecosystem does not offer any more secure alternative). The documentation MUST describe any relevant security risks and any known mitigations if these broken algorithms or modes are necessary for an interoperable protocol. {N/A allowed} [crypto_working]
- SSF-A.2.6-B The default security mechanisms within the software produced by the project SHOULD NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH). {N/A allowed} [crypto_weaknesses]
- SSF-A.2.7-B The security mechanisms within the software produced by the project SHOULD implement perfect forward secrecy for key agreement protocols so a session key derived from a set of long-term keys cannot be compromised if one of the long-term keys is compromised in the future. {N/A allowed} [crypto_pfs]
- SSF-A.2.8-B If the software produced by the project causes the storing of passwords for authentication of external users, the passwords MUST be stored as iterated hashes with a per-user salt by using a key stretching (iterated) algorithm (e.g., Argon2id, Bcrypt, Scrypt, or PBKDF2). See also OWASP Password Storage Cheat Sheet). {N/A allowed} [crypto_password_storage]
- SSF-A.2.9-B The security mechanisms within the software produced by the project MUST generate all cryptographic keys and nonces using a cryptographically secure random number generator, and MUST NOT do so using generators that are cryptographically insecure. {N/A allowed} [crypto_random]
- SSF-A.2.10-B The default security mechanisms within the software produced by the project MUST NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH).
- SSF-A.2.11-B The project SHOULD support multiple cryptographic algorithms, so users can quickly switch if one is broken. Common symmetric key algorithms include AES, Twofish, and Serpent. Common cryptographic hash algorithm alternatives include SHA-2 (including SHA-224, SHA-256, SHA-384 AND SHA-512) and SHA-
- SSF-A.2.12-B The project MUST support storing authentication credentials (such as passwords and dynamic tokens) and private cryptographic keys in files that are separate from other information (such as configuration files, databases, and logs), and permit users to update and replace them without code recompilation. If the project never processes authentication credentials and private cryptographic keys, select "not applicable"
- SSF-A.2.13-B The software produced by the project SHOULD support secure protocols for all of its network communications, such as SSHv2 or later, TLS1.2 or later (HTTPS), IPsec, SFTP, and SNMPv3. Insecure protocols such as FTP, HTTP, telnet, SSLv3 or earlier, and SSHv1 SHOULD be disabled by default, and only enabled if the user specifically configures it. If the software produced by the project does not support network communications, select "not applicable" (N/A).
- SSF-A.2.14-B The software produced by the project SHOULD, if it supports or uses TLS, support at least TLS version 1.2. Note that the predecessor of TLS was called SSL. If the software does not use TLS, select "not applicable" (N/A).
- SSF-A.2.15-B The software produced by the project MUST, if it supports TLS, perform TLS certificate verification by default when using TLS, including on subresources. If the software does not use TLS, select "not applicable" (N/A).
- SSF-A.2.16-B The software produced by the project MUST, if it supports TLS, perform certificate verification before sending HTTP headers with private information (such as secure cookies). If the software does not use TLS, select "not applicable"
- SSF-A.2.17-B The software produced by the project MUST support secure protocols for all of its network communications, such as SSHv2 or later, TLS1.2 or later (HTTPS), IPsec, SFTP, and SNMPv3. Insecure protocols such as FTP, HTTP, telnet, SSLv3 or earlier, and SSHv1 MUST be disabled by default, and only enabled if the user specifically configures it. If the software produced by the project does not support network communications, select "not applicable" (N/A).
- SSF-A.2.18-B The software produced by the project MUST, if it supports or uses TLS, support at least TLS version 1.2. Note that the predecessor of TLS was called SSL. If the software does not use TLS, select "not applicable" (N/A).

### D. Respond to Vulnerabilities (#ZSSD-LP:RV #SSDF:RV Respond to Vulnerabilities) 
#### D1. Identify and Confirm Vulnerabilities (#ZSSD-LP:ICV #SSDF:RV.1 Identify and Confirm Vulnerabilities on an Ongoing Basis)

- D1.1 Potential Vulnerability sources Monitoring (#ZSSD-LP:RV-ICV-PVM #SSDF:RV.1.1)

>Gather information from purchasers, consumers, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.

- D1.2 Code Review and Tests (#ZSSD-LP:RV-ICV-CRT #SSDF:RV.1.2) 
 
>Review, analyze, and/or test the software’s code to identify or confirm the presence of previously undetected vulnerabilities.
 
- D1.3 Vulnerabilities Disclosure and Remediation policy (#ZSSD-LP:RV-ICV-VDR #SSDF:RV.1.3) 
 
>Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.


#### D2. Assess, prioritize and Remediate Vulnerabilities (#ZSSD-LP:ARV #SSDF:RV.2 Assess, Prioritize, and Remediate Vulnerabilities)

- D2.1 Analyse Each Vulnerability (#ZSSD-LP:RV-ARV-AEV #SSDF:RV.2.1) 
 
>Analyze each vulnerability to gather sufficient information to plan its remediation.

- D2.2 Develop and Implement vulnerability Remediation plan (#ZSSD-LP:RV-ARV-DRI #SSDF:RV.2.2) 

>Develop and implement a remediation plan for each vulnerability.
 

#### D3. Vulnerabilities Root Cause Analysis (#ZSSD-LP:VRA #SSDF:RV.3 Analyze Vulnerabilities to Identify Their Root Causes. Help reduce the frequency of vulnerabilities in the future.)
- D3.1 Root Cause Analysis (#ZSSD-LP:RV-VRA-RCA #SSDF:RV.3.1) 
 
>Analyze all identified vulnerabilities to determine the root cause of each vulnerability.
 
- D3.2 Root Cause Patterns identification (#ZSSD-LP:RV-VRA-RCP #SSDF:RV.3.2) 
 
>Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently.
 
- D3.3 Fix Similar Vulnerabilities (#ZSSD-LP:RV-VRA-FSV #SSDF:RV.3.3) 
 
>Review the software for similar vulnerabilities, and proactively fix them rather than waiting for external reports.
 
- D3.4 Review Development lifecycle Process (#ZSSD-LP:RV-VRA-RDP #SSDF:RV.3.4)  

>Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of) the root cause recurring in updates to the software or in new software that is created.

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
