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

TODO: Move following out of the policies to a separate reference file
```
#OP - Organization Policy
#LP - SDLC Policy

#KEEP - Keep in the policy 
#DISCARD - remove from the policy
#RE-DEFINE

#MANIFESTOs
#POLICY
#BEST-PRACTICE
#GUIDELINE
#PROCESS
#STANDARD

#MANDATORY - mandatory requirement. Implies it is measureable and enforceable.
#OPTIONAL - the requirement is not mandatory. 
#PROCESS - reference to process which helps to meet the requirement 
#PRACTICE - rather a recommended good practice than a requirement
#GUIDELINE-ABC - reference to a guideline which helps to meet given requirement 

#MEASURABLE - it is possible to validate that the requiorement was met
#ENFORCEABLE - Zowe (TSC) has the right and the power to enforce fulfilment of the given requirement 
#DOCUMENTED - the requirement fulfilment must be documented in detail on the project/produt pages 
#EVIDENCE - evidence about how was a requirement was met is required to be published and be public

#TOO-BROAD - definition is too general. Rework it or the requirement is hard to measure and enforce 
#TOO-DETAILED - definition is too dtailed to the extend that it could be confusing or misleading 
#NOT-APPLICABLE - Not suitable for this policy. Consider cases when it might be applicable.
#HARD-TO-PROVE - Good wish but can't be measured (the oposite to #MEASURABLE) 
```

>Common definitions:
> 1. Contributors' types and policy applicability\
> There are basically two kinds of Zowe contributors.
> - individuals contributing to one or multiple Zowe sub-projects/components
> - squads owning a component
> They not only differ by size and ownership of the components, but consequently have different responsibilities
> and should be required to maintain different level of compliance with the policies.
> On the top of the responsibility chain is always Zowe represented by the TSC and Security Workgroup.
> The question then is how to structure the policy statements so to assign them to corresponding entity (individual, squad, Zowe governance body)
>
> 2 . Policy statements\
>Some requirements are strictly mandatory, while some others might not be enforceable in all cases and should be perceived as strong recommendations.   
>
>* Note: Should we state next to each requirement if it is mandatory or not and under what conditions?
>* Note: Where is the right place to state what evidence is required to prove fulfilment of mandatory requirements?
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

## Requirements (#ID: ZSSD-LP) 

### C. Produce Well-Secured Software (#ID: ZSSD-LP:PW)

```#REF: SSFD:PW Produce Well-Secured Software```\
```#MANIFESTO```

Produce Well-Secured Software with minimal security vulnerabilities in its releases.

#### C1. Requirements to Mitigate security Risk (#ID: ZSSD-LP:PW-RMR)

```#REF: SSDF:PW.1.1 Design Software to Meet Security Requirements and Mitigate Security Risks```\


- C1.1 Apply Risk, Threat and Attack modelling (#ID: ZSSD-LP:PW-RMR-RTA)

```#REF:  SSFD:PW.1.1```\
````#POLICY````

>Use forms of risk modeling, such as threat modeling, attack modeling, or attack surface mapping, to help assess the security risk for the software.

- C1.2 Security Requirements, Risks and Design decisions (#ID: ZSSD-LP:PW-RMR-RRD) 

```#REF: SSFD:PW.1.2```
```#POLICY #OP```
 
>Document the software’s security requirements, risks, and design decisions.

``` #Q: This is related to the OP requirement that each contributor would have a member in the Zowe Security Workgroup. How this applies to individuals?```  

- C1.3 Standardized security Features (#ID: ZSSD-LP:PW-RMR-SSF)

```#REF: SSFD:PW.1.3```

>Where appropriate, build in support for using standardized security features and services (e.g., integrating with existing log management, identity management, access control, and vulnerability management systems\) instead of creating proprietary implementations of security features and services.

#### C2. Review Software Design (#ID: ZSSD-LP:PW-RSD)

```#REF: SSDF:PW2 - Review the Software Design to Verify Compliance with Security Requirements and Risk Information```

- C2.1 Design Review Process (#ID: ZSSD-LP:PW-RSD-DRP) 

>Have either 1\) a qualified person (or people\) who were not involved with the design or 2\) adequate automated processes instantiated in the toolchain (or both\) review the software design to confirm and enforce that it meets all of the security requirements and satisfactorily addresses the identified risk information.

```#REF: SSFD:PW.2.1```

#### C3. Reuse Well-Secured Software (#ID: ZSSD-LP:PW-RWS)

```#REF: SSDF:PW.4 - Reuse Existing, Well-Secured Software When Feasible Instead of Duplicating Functionality```

- C3.1 Acquire Well-Secured software Components (#ID: ZSSD-LP:PW-RWS-AWC) 
 
>Acquire well-secured software components (e.g., software libraries, modules, middleware, frameworks\) from commercial, open-source, and other third-party developers for use by the organization’s software.

```#REF:  SSDF:PW.4.1```

- C3.2 Create Well-Secured software Components (#ID: ZSSD-LP:PW-RWS-CWC) 
 
>Create and maintain well-secured software components in-house following SDLC processes to meet common internal software development needs that cannot be better met by third-party software components.

```#REF: SSDF:PW.4.2```

- C3.3 Components Requirements Compliance (#ID: ZSSD-LP:PW-RWS-CRC) 

>Verify that acquired commercial, open-source, and all other third-party software components comply with the requirements, as defined by the organization, throughout their life cycles.

```#REF:  SSDF:PW.4.4```

- C3.4 Verify Components Integrity (#ID: ZSSD-LP:PW-RWS-VCI) 
 
>Verify the integrity and check the provenance of all in-house and third-party software components before reusing them for the organization’s own software.

```#REF: SSDF:PW.4.5```

#### C4. Secure Coding Practices (#ID: ZSSD-LP:PW-SCP) 

```#REF: #SSDF:PW.5 - Create Source Code by Adhering to Secure Coding Practices```

- C4.1 development Language and Environment Specific practices (#ID: ZSSD-LP:PW-SCP-LES) 

>Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization’s requirements.

```#REF:  SSDF:PW.5.1```

#### C5. Integrated Development Environment (#ID: ZSSD-LP:PW-IDE)
```#REF: SSDF:PW.6 - Configure the Integrated Development Environment, Compilation, Interpreter, and Build Processes to Improve Executable Security```
 
- C5.1 Compiler Interpreter and Build tools (#ID: ZSSD-LP:PW-IDE-CIB)

>Use compiler, interpreter, and build tools that offer features to improve executable security

```#REF: SSDF:PW.6.1```\
```#TOO-BROAD #NOT-MEASURABLE```
 
- C5.2 Configure Build Tools (#ID: ZSSD-LP:PW-IDE-CBT)

>Determine which compiler, interpreter, and build tool features should be used and how each should be configured, then implement and use the approved configurations.

```#REF:  SSDF:PW.6.2```

#### C6. Analyze Human-readable Code (#ID: ZSSD-LP:PW-AHC)

```#REF: SSDF:PW.7 - Review and/or Analyze Human-Readable Code to Identify Vulnerabilities and Verify Compliance with Security Requirements```

- C6.1 Code Review Decision (#ID: ZSSD-LP:PW-AHC-CRD) 

>Determine whether code review (a person looks directly at the code to find issues\) and/or code analysis (tools are used to find issues in code, either in a fully automated way or in conjunction with a person\) should be used, as defined by the organization.

```#REF: SSDF:PW.7.1```

- C6.2 Code Review Implementation (#ID: ZSSD-LP:PW-AHC-CRI) 

>Perform the code review and/or code analysis based on the organization’s secure coding standards, and document and triage all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

```#REF: SSDF:PW.7.2```

#### C7. Test Executable Code (#ID: ZSSD-LP:PW-TEC)

```#REF: #SSDF:PW.8 Test Executable Code to Identify Vulnerabilities and Verify Compliance withSecurity Requirements```

- C7.1 Code Testing Decisions (#ID: ZSSD-LP:PW-TEC-CTD) 

>Determine if executable code testing should be performed to identify and eliminate classes of vulnerabilities not covered by previous reviews, analysis, or testing, and if so, which types should be used.

```#REF: SSDF:PW.8.1```

- C7.2 Code Testing Implementation (#ID: ZSSD-LP:PW-TEC-CTI) 
 
>Design the tests, perform the testing, and document the results, including documenting and triaging all discovered issues and recommended remediations in the development team’s workflow or issue tracking system.

```#REF:  SSDF:PW.8.2```

#### C8. Secure Settings by Default (#ID: ZSSD-LP:PW-SSD)

```#REF: SSDF:PW.9 - Configure Software to Have Secure Settings by Default```

- C8.1 Secure Baseline Configuration (#ID: ZSSD-LP:PW-SSD-SBD) 

>Define a secure baseline by determining how to configure each setting that has an effect on security so that the default settings are secure and do not weaken the security functions provided by the platform, network infrastructure, or services.

```#REF:  SSDF:PW.9.1```

- C8.2 Implement Default Settings (#ID: ZSSD-LP:PW-SSD-IDS) 
 
>Implement the default settings (or groups of default settings, if applicable\), and document each setting for software administrators.

```#REF:  #SSDF:PW.9.2```

#### C9 Use Basic good Cryptographic Practices (#ID: ZSSD-LP:PW-BCP)
```#REF: NO-SSDF topic```

```#REF: OpenSSF-BP:SSF-A.2 - Use basic good cryptographic practices...```

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

### D. Respond to Vulnerabilities (#ID: ZSSD-LP:RV)

```#REF: SSDF:RV - Respond to Vulnerabilities```

#### D1. Identify and Confirm Vulnerabilities (#ID: ZSSD-LP:RV-ICV)

```#REF: SSDF:RV.1 - Identify and Confirm Vulnerabilities on an Ongoing Basis```

- D1.1 Potential Vulnerability sources Monitoring (#ID: ZSSD-LP:RV-ICV-PVM)

>Gather information from purchasers, consumers, and public sources on potential vulnerabilities in the software and third-party components that the software uses, and investigate all credible reports.

```#REF: SSDF:RV.1.1```

- D1.2 Code Review and Tests (#ID: ZSSD-LP:RV-ICV-CRT) 
 
>Review, analyze, and/or test the software’s code to identify or confirm the presence of previously undetected vulnerabilities.
 
```#REF: SSDF:RV.1.2```

- D1.3 Vulnerabilities Disclosure and Remediation policy (#ID: ZSSD-LP:RV-ICV-VDR) 
 
>Have a policy that addresses vulnerability disclosure and remediation, and implement the roles, responsibilities, and processes needed to support that policy.

```#REF:  SSDF:RV.1.3```

#### D2. Assess, prioritize and Remediate Vulnerabilities (#ID: ZSSD-LP:RV-ARV)

```#REF: SSDF:RV.2 - Assess, Prioritize, and Remediate Vulnerabilities```\
```#REF: SSF-A.4.1-B - There MUST be no unpatched vulnerabilities of medium or higher severity that have been publicly known for more than 60 days. [vulnerabilities_fixed_60_days]```\
```#REF: SSF-A.4.2-B - Projects SHOULD fix all critical vulnerabilities rapidly after they are reported. [vulnerabilities_critical_fixed]```

- D2.1 Analyse Each Vulnerability (#ID: ZSSD-LP:RV-ARV-AEV) 
 
>Analyze each vulnerability to gather sufficient information to plan its remediation.

```#REF:  SSDF:RV.2.1```

- D2.2 Develop and Implement vulnerability Remediation plan (#ID: ZSSD-LP:RV-ARV-DRI) 

>Develop and implement a remediation plan for each vulnerability.
 
```#REF:  SSDF:RV.2.2```

#### D3. Vulnerabilities Root Cause Analysis (#ID: ZSSD-LP:RV-VRA)

```#REF:  SSDF:RV.3 - Analyze Vulnerabilities to Identify Their Root Causes. Help reduce the frequency of vulnerabilities in the future.```

- D3.1 Root Cause Analysis (#ID: ZSSD-LP:RV-VRA-RCA) 
 
>Analyze all identified vulnerabilities to determine the root cause of each vulnerability.
 
```#REF: SSDF:RV.3.1```

- D3.2 Root Cause Patterns identification (#ID: ZSSD-LP:RV-VRA-RCP) 
 
>Analyze the root causes over time to identify patterns, such as a particular secure coding practice not being followed consistently.

```#REF:  SSDF:RV.3.2``` 

- D3.3 Fix Similar Vulnerabilities (#ID: ZSSD-LP:RV-VRA-FSV) 
 
>Review the software for similar vulnerabilities, and proactively fix them rather than waiting for external reports.
 
```#REF:  SSDF:RV.3.3```

- D3.4 Review Development lifecycle Process (#ID: ZSSD-LP:RV-VRA-RDP)  

>Review the SDLC process, and update it if appropriate to prevent (or reduce the likelihood of) the root cause recurring in updates to the software or in new software that is created.

```#REF:  SSDF:RV.3.4```

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
