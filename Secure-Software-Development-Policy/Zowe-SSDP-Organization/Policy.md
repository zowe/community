# Zowe Secure Software Development (Z-SSD) - Organization Policy (OP) 

>Table of contents:
>
>- [Introduction](#introduction)
>- [Prepare the organization (PO)](#po-prepare-the-organization)
>- [Protect the Software (PS)](#ps-protect-the-software)


##Introduction
This document contains the Zowe Secure Software Development Organizational Policy (ZSSD-OP).

The organizational policy is intended to set up requirements and govern the secure best practices for the environment (organizational level) in which the requirements set by the [Secure SDLC policy](../Zowe-SSDP-SDLC/Policy.md) can be fulfilled.

Sometimes requirements from OP and DP can interfere or be complementary. Duplications will not be resolved for completeness and clarity of the respective policy.  

The security policy comprises requirements that any organization that contributes to Zowe should fulfil in order to conform to Zowe security vision and principles(#TODO: Link).

When the contributor is a single person, the responsibility for conformance with the secure development policy is delegated to the squad owning the respective Zowe component/s.

Every squad must emit at least one Zowe Security Workgroup member. SUch a members should guarantee fulfilment of the SDP requirementns. 

Example of requirements are: creating security roles, acquiring upper management support, Protecting the code etc.

The fulfilment of these requirements [#CHOOSE-ONE: needs to/should be/must be/is] measurable and provable, i.e. the contributors must provide evidence that corresponding measure have been performed and documented in a public space.

The requirements defined herein are grouped into two main categories further divided into several sub-categories each. 

>***Note: For our Secure SDLC Policy please visit [Zowe Secure Software Development Lifecycle Policy](../Zowe-SSDP-SDLC/Policy.md).***

<span style="display: none">
    #TODO: Discuss if all categories, subcategories and their structure reflect our needs. Maybe some should be skipped, moved etc.
</span>

## Requirements (#ID: Z-SSD-OP)

### A. Prepare the organization (#ID: ZSSD-OP:PO)

>***Note: PO.1 sub-category is skipped because it describes the actual process of defining this policy framework: Policy, Processes and Guidelines. 
Keywords/artifacts: Requirements, Policies, Processes, Best practices, development infrastructures: components, endpoints, etc.
Additionally, it requires: Maintaining the requirements over time, Documenting them, Communicating them to 3rd party SW components providers.***

```#REF: SSFD:PO Prepare the organization```

#### A1. Roles and Responsibilities (#ID: ZSSD-OP:PO-RR)
```#REF: SSDF:PO.2 Implement Roles and Responsibilities```
```#DISCARD```

TODO: Consider skipping this in full as it probably makes no sense to require individual contributors to get commitment and roles and trainings.

- A1.1 Create Roles and Alter responsibilities (#ID: ZSSD-OP:PO-RR-CRA) 

Create new roles and alter responsibilities for existing roles as needed to encompass all parts of the SSDF. 
Periodically review and maintain the defined roles and responsibilities, updating them as needed\

```#REF: SSDF:PO.2.1```

- A1.2 Role Based Training (#ID: ZSSD-OP:PO-RR-RBT)
  
Provide role-based training for all personnel with responsibilities that contribute to secure development. 
Periodically review personnel proficiency and role-based training, and update the training as needed.

```#REF: SSDF:PO.2.2, SSF-A.1.1-B, SSF-A.1.2-B```\
```#NOT-APPLICABLE```

- A1.3 Upper Management Commitment (#ID: ZSSD-OP:PO-RR-UMC)

Obtain upper management commitment to secure development, and convey that commitment to all with SSDF related roles and responsibilities.

```#REF: SSDF:PO.2.3```\
```#NOT-APPLICABLE for individuals and small organizations.```\
```#HARD-TO-PROVE```

#### A2. Supporting Toolchains (#ID: ZSSD-OP:PO-ST)
```#REF: SSFD:PO.3 Implement Supporting Toolchains```\
```#KEEP #RE-DEFINE```

- A2.1 Toolchain Components Integration (#ID: ZSSD-OP:PO-ST-TCI)
```#REF: SSDF:PO.3.1```
```#KEEP```

Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other

```TODO: The organization/contributors developing Zowe component, should either reuse the tools maintained by Zowe or shall use own tools adequate to the once provided by Zowe and providing consistent results to satisfy security criteria defined in both ZSSD policies.```     

- A2.2:Deploy and Maintain Tools (#ID: ZSSD-OP:PO-ST-DMT)\
```#REF: SSDF:PO.3.2```
```#KEEP```

Follow recommended security practices deploying and maintaining tools and toolchains.

```TODO: consider removing or mergin with the previous one or be flexible enough to have an option for different kinds of contributors :individual, squad, company with own tool chains?```

- A2.3 Generate Evidence and Artifacts (#ID: ZSSD-OP:PO-ST-GEA)\
```#REF: SSDF:PO.3.3```\
```#KEEP```

Configure tools to generate evidence and artifacts of their support of secure software development practices as defined by Zowe.

#### A3. Security Criteria (#ID: ZSSD-OP:PO-SC) 
```#REF:  SSFD:PO.4 Define and Use Criteria for Software Security Checks)```\
```#KEEP```

Provide some kind of automatic validation for the Zowe Secure Development criteria - validate during pipeline execution.

```#Q: Should we require projects to provide own checks for the criteria they declare?```\
```How to ensure, enforce?```\
```Code level security checks.```\
```Dependency level security checks.```\
```SonarCloud is already used and has some security checks.```\

```TODO: Rephrase - maintain some criteria at Zowe level, while allowing projects to have additional specific criteria.```

- A3.1 Software Security Checks (#ID: ZSSD-OP:PO-SC-SSC)
```#REF: SSDF:PO.4.1```
```#KEEP```  

Define criteria for software security checks and track them throughout the SDLC.

- A3.2 Safeguard the Necessary Information (#ID: ZSSD-OP:PO-SC-SNI):
``` #REF: SSDF:PO.4.2```\
```#KEEP```
```#TOO-BROAD```

Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.

#### A4. Secure Environments (#ID: ZSSD-OP:PO-SE)
```#REF: SSFD:PO.5 Implement and Maintain Secure Environments for Software Development```

- A4.1 Separate and Protect the Environments (#ID: ZSSD-OP:PO-SE-SPE):\
```#REF: SSDF:PO.5.1```

Separate and protect each environment involved in software development.

```#Q: What is Dev and Test in the Zowe understanding? Are the pipelines on separate environments?```\  
```#Q: Do we have a Prod at all?```\
```#Q Do we mix environments in any sense?```s


- A4.2 Harden Development Endpoints (#ID: ZSSD-OP:PO-SE-HDE)\
```#REF: SSDF:PO.5.2```

Secure and harden development endpoints (i.e., endpoints for software designers, developers, testers, builders, etc.\) to perform development-related tasks using a risk-based approach.

```#Q: Can we require and enforce that? From organizations like IBM, BC and Rocket probably yes, but individuals and smaller teams may just not have resources or the will for that.```  


### B. Protect the Software (#ID: ZSSD-OP:PS)
```#REF: SSFD:PS Protect the Software```

#### B1. Protect All Code (#ID: ZSSD-OP:PS-PAC)

```#REF: SSDF:PS.1 Protect All Forms of Code from Unauthorized Access and Tampering```

- B1.1 Store All Code (#ID: ZSSD-OP:PS-PAC-SAC)

Store all forms of code, including source code and executable code, based on the principle of least privilege so that only authorized personnel, tools,services, etc. have the necessary forms of access.

```#REF: #SSDF:PS.1.1```

#### B2. Software Release Integrity (#ID: ZSSD-OP:SRI)

```#REF: SSDF:PS.2 Provide a Mechanism for Verifying Software Release Integrity```

- B2.1 Integrity Information Availability (#ID: ZSSD-OP:PS-SRI-IIA)

Make integrity verification information available to software purchasers and consumers.

```#REF: SSDF:PS.2.1```

#### B3. Protect Software Releases (#ID: ZSSD-OP:PSR)

```#REF: SSDF:PS3 Archive and Protect Each Software Release```

- B3.1 Archive Necessary Files (#ID: ZSSD-OP:PS-PSR-ANF)

Securely archive the necessary files and other data (e.g., integrity verification information, provenance data) to be retained for each software release.

```#REF: SSDF:PS.3.1```

- B3.2 Maintain Provenance Data (#ID: ZSSD-OP:PS-PSR-MPD)

Collect, maintain, and share provenance data for all components and other dependencies of each software release (e.g., in a software bill of materials[SBOM]).

```#REF: SSDF:PS.3.2```

[// intentionally commented out]: <> ( PUT-COMMENTED-OUT-TEXT-HERE )

>##Notes, TODOs
>
> Consider the contributors level of autonomy to submit code depending on their contribution type.
> There is difference between independent single developer and squad backed by a community member (company) 
> Also it depends on contribution form - a PR (early validation), or a full product version - available aa part of a Zowe release.
> In the later case it may happen that the code wil not pass TSC validation and this also may lead to frustration and tensions.
> Maybe we should distinguish policies for:
>     - Individual contributors to existing components
>     - Zowe members owning components
>     - Incubator projects not released yet as Zowe component 
  
>* Consider organizations size - individuals and smaller teams just can't afford the overhead. How then we maintain the compliancy?
>* Flag which requirements are mandatory
>* Some items look as recommended practices rather than as policy requirements
>    * Option: Group such practices into a sound requirement
>* Map M:N between ZSSD and SSDF and others
>* Automated tests to prove some policy requirements fulfilment
>* Should we prescribe requirements fulfillment report format - see current reports 
