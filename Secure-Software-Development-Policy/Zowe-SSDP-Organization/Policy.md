# Zowe Secure Software Development (Z-SSD) - Organization Policy (OP) 

This document defines Zowe Secure Software Development Policy at Zowe organizational level.
This security policy comprises requirements that an organization (Squad/Team) contributing to Zowe must fulfil in order to conform
to Zowe security vision and principles(#TODO: Link). The fulfilment of these requirements [#CHOOSE-ONE: needs to/should be/must be/is] measurable and provable.

The requirements defined herein are grouped into two main categories further divided into several sub-categories each. 
This categorization reflects the secure development practices grouping as defined by NIST [Secure Software Development Framework (SSDF)](https://csrc.nist.gov/Projects/ssdf).
NIST SSDF recommended practices IDs are mapped to the Zowe SSDP (sub)categories where applicable.  
Additionally, two other SSD frameworks are referenced in order to provide contributors and SW consumers with   

<span style="display: none">
    #TODO@PZA: Provide reference IDs coding legend:
| Category      | Zowe          | SSDF  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
</span>

<span style="display: none">
The Secure Software Development Framework (SSDF) defines and recommends a core set of high-level secure software development practices, that can be integrated into each SDLC implementation.
It is structured in such a way to provide an interface between software producers (e.g.,commercial-off-the-shelf [COTS] product vendors, 
government-off-the-shelf [GOTS] software developers, custom software developers) on one side and software purchasers and consumers, 
both federal agencies and other organization on the other side. Therefore, it is desirable and beneficial for Zowe to map security the SLDC requirements to that Framework. 
Herein we use the SSDF as a meta framework by mapping the high-level practices to security policy requirements applicable to the individual development SDLC phases.
</span>

For easier identification and linking, the categories and sub topics are assigned with IDs unique in the Zowe namespace.  
The structure corresponds the to Secure Software Development at organizational level.

**Note: For our Secure SDLC Policy please visit [Zowe Secure Software Development Lifecycle Policy](../Zowe-SSDP-SDLC/Policy.md).

- [Prepare the organization (PO)](#po-prepare-the-organization)
- [Protect the Software (PS)](#ps-protect-the-software)

<span style="display: none">
    #TODO@PZA: Discuss if all categories, subcategories and their structure reflect our needs. Maybe some should be skipped, moved etc.
</span>

# Z-SSD-OP Requirements

## A. Prepare the organization (PO) / (SSFD:PO) Prepare the organization

*Note: PO.1 sub-category is skipped because describes the actual process of defining this policy framework: Policy, Processes and Guidelines. 
Keywords/artifacts: Requirements, Policies, Processes, Best practices, development infrastructures: components, endpoints, etc.
Additionally, it requires: Maintaining the requirements over time, Documenting them, Communicating them to 3rd party SW components providers  

### A1. Roles and Responsibilities (PO-RR) / (SSDF:PO.2) Implement Roles and Responsibilities: 
- A1.1:ZSSD-OP:PO-RR-CAR (Create and Alter Roles) / (SSDF:PO.2.1): 

Create new roles and alter responsibilities for existing roles as needed to encompass all parts of the SSDF. Periodically review and maintain the defined roles and responsibilities, updating them as needed

- A1.2:ZSSD-OP:PO-RR-RBT (Role Based Training) / (SSDF:PO.2.2):

Provide role-based training for all personnel with responsibilities that contribute to secure development. Periodically review personnel proficiency and role-based training, and update the training asneeded.

- A1.3:ZSSD-OP:PO-RR-UMC (Upper Management Commitment) / (SSDF:PO.2.3): 

Obtain upper management commitment to secure development, and convey that commitment to all with SSDF-related roles and responsibilities.

### A2. Supporting Toolchains (ST) / (SSFD:PO.3) Implement Supporting Toolchains
- A2.1:ZSSD-OP:PO-ST-TCI (Toolchain Components Integration) / (SSDF:PO.3.1): 
 
Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other

- A2.2:ZSSD-OP:PO-ST-DMT (Deploy and Maintain Tools) / (SSDF:PO.3.2):

Follow recommended security practices deploying and maintaining tools and toolchains

- A2.3:ZSSD-OP:PO-ST-GEA (Generate Evidence and Artifacts) / (SSDF:PO.3.3): 
 
Configure tools to generate evidence and artifacts of their support of secure software development practices as defined by the organization.

### A3. Security Criteria (SC) / (SSFD:PO.4) Define and Use Criteria for Software Security Checks
- A3.1:ZSSD-OP:PO-SC-SSC (Software Security Checks) / (SSDF:PO.4.1): 
 
Define criteria for software security checks and track throughout the SDLC.

- A3.2:ZSSD-OP:PO-SC-SNI (Safeguard the Necessary Information) / (SSDF:PO.4.2): 

Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.

### A4. Secure Environments (SE) / (SSFD:PO.5) Implement and Maintain Secure Environments for Software Development
- A4.1:ZSSD-OP:PO-SE-SPE (Separate and Protect the Environments) / (SSDF:PO.5.1): 
 
Separate and protect each environment involved in software development.

- A4.2:ZSSD-OP:PO-SE-HDE (Harden Development Endpoints) / (SSDF:PO.5.2): 

Secure and harden development endpoints (i.e., endpoints for software designers, developers, testers, builders, etc.\) to perform development-related tasks using a risk-based approach.
    
## B. Protect the Software (PS) / (PS): Protect the Software 

### B1. Protect All Code (PAC) / (SSDF:????) Protect All Forms of Code from Unauthorized Access and Tampering
- B1.1:ZSSD-OP:PS-PAC-SAC (Store All Code) / (SSDF:PS.1.1): 
 
Store all forms of code, including source code and executable code, based on the principle of least privilege so that only authorized personnel, tools,services, etc. have the necessary forms of access.

### B2: Software Release Integrity (SRI) / (SSDF:????) Provide a Mechanism for Verifying Software Release Integrity
- B2.1:ZSSD-OP:PS-SRI-IIA (Integrity Information Availability) / (SSDF:PS.2.1): 
 
Make integrity verification information available to software purchasers and consumers.
  
### B3: Protect Software Releases (PSR) / (SSDF:????) Archive and Protect Each Software Release
- B3.1:ZSSD-OP:PS-PSR-ANF (Archive Necessary Files) / (SSDF:PS.3.1): 
 
Securely archive the necessary files and other data (e.g., integrity verification information, provenance data) to be retained for each software release.

- B3.2:ZSSD-OP:PS-PSR-MPD (Maintain Provenance Data) / (SSDF:PS.3.2): 
 
Collect, maintain, and share provenance data for all components and other dependencies of each software release (e.g., in a software bill of materials[SBOM]).

[// intentionally commented out]: <> ( PUT-COMMENTED-OUT-TEXT-HERE )
