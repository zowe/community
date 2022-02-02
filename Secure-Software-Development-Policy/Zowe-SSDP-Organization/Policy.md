# Zowe Secure Software Development (Z-SSD) - Organization Policy (OP) 

This document contains the Zowe Secure Software Development Policy at organizational level.
The organizational policy is intended to set up and govern the secure best practices for the environment in which the requirements set by the [Secure SDLC policy](../Zowe-SSDP-SDLC/Policy.md) can be fulfilled.
Sometimes requirements from OP and DP can interfere or be complementary. Such relations are not tracked in the documents, but should be obvious (TODO: Should we track internal relations between requirements from OP and DP).

The security policy comprises requirements that an organization (Squad/Team) contributing to Zowe must fulfil in order to conform to Zowe security vision and principles(#TODO: Link).
Example of such requirements are: creating security roles, acquiring upper management support, Protecting the code etc.
The fulfilment of these requirements [#CHOOSE-ONE: needs to/should be/must be/is] measurable and provable, i.e. the contributors must provide evidence that corresponding measure have been performed and documented in a public space.

The requirements defined herein are grouped into two main categories further divided into several sub-categories each. 
The main categorization reflects the secure development practices grouping as defined by NIST [Secure Software Development Framework (SSDF)](https://csrc.nist.gov/Projects/ssdf).
NIST SSDF recommended practices IDs are those directly mapped to the Zowe SSDP (sub)categories and items.

Additionally, Open SSF Best practices badges requirements are referenced where applicable.

For easier identification and linking, the categories and sub topics are assigned IDs unique in the Zowe namespace.

These mappings are maintained to help the Zowe contributors be transparent about what level of security development practices was achieved 
and to be able to easily answer requests from Zowe adopters about compliance with the respective best practices frameworks.   

<span style="display: none">
The Secure Software Development Framework (SSDF) defines and recommends a core set of high-level secure software development practices, that can be integrated into each SDLC implementation.
It is structured in such a way to provide an interface between software producers (e.g.,commercial-off-the-shelf [COTS] product vendors, 
government-off-the-shelf [GOTS] software developers, custom software developers) on one side and software purchasers and consumers, 
both federal agencies and other organization on the other side. Therefore, it is desirable and beneficial for Zowe to map security the SLDC requirements to that Framework. 
Herein we use the SSDF as a meta framework by mapping the high-level practices to security policy requirements applicable to the individual development SDLC phases.
</span>


<span style="display: none">
The structure corresponds the to Secure Software Development at organizational level.
</span>

>***Note: For our Secure SDLC Policy please visit [Zowe Secure Software Development Lifecycle Policy](../Zowe-SSDP-SDLC/Policy.md).***

- [Prepare the organization (PO)](#po-prepare-the-organization)
- [Protect the Software (PS)](#ps-protect-the-software)

<span style="display: none">
    #TODO@PZA: Discuss if all categories, subcategories and their structure reflect our needs. Maybe some should be skipped, moved etc.
</span>

# Z-SSD-OP Requirements

## A. Prepare the organization (PO) / (SSFD:PO) Prepare the organization

>***Note: PO.1 sub-category is skipped because it describes the actual process of defining this policy framework: Policy, Processes and Guidelines. 
Keywords/artifacts: Requirements, Policies, Processes, Best practices, development infrastructures: components, endpoints, etc.
Additionally, it requires: Maintaining the requirements over time, Documenting them, Communicating them to 3rd party SW components providers.***

### A1. Roles and Responsibilities (#ZSSD-OP:PO-RR &emsp;#SSDF:PO.2 Implement Roles and Responsibilities)

- A1.1 Create Roles and Alter responsibilities (#ZSSD-OP:PO-RR-CRA &emsp;#SSDF:PO.2.1)  

Create new roles and alter responsibilities for existing roles as needed to encompass all parts of the SSDF. Periodically review and maintain the defined roles and responsibilities, updating them as needed

- A1.2 Role Based Training (#ZSSD-OP:PO-RR-RBT &emsp;#SSDF:PO.2.2)

Provide role-based training for all personnel with responsibilities that contribute to secure development. Periodically review personnel proficiency and role-based training, and update the training asneeded.

- A1.3 Upper Management Commitment (#ZSSD-OP:PO-RR-UMC #SSDF:PO.2.3)

Obtain upper management commitment to secure development, and convey that commitment to all with SSDF-related roles and responsibilities.

### A2. Supporting Toolchains (#ZSSD-OP:PO-ST &emsp;#SSFD:PO.3 Implement Supporting Toolchains)
- A2.1 Toolchain Components Integration (#ZSSD-OP:PO-ST-TCI &emsp;#SSDF:PO.3.1) 
 
Specify which tools or tool types must or should be included in each toolchain to mitigate identified risks, as well as how the toolchain components are to be integrated with each other

- A2.2:Deploy and Maintain Tools (#ZSSD-OP:PO-ST-DMT &emsp;#SSDF:PO.3.2)

Follow recommended security practices deploying and maintaining tools and toolchains

- A2.3 Generate Evidence and Artifacts (#ZSSD-OP:PO-ST-GEA &emsp;#SSDF:PO.3.3) 
 
Configure tools to generate evidence and artifacts of their support of secure software development practices as defined by the organization.

### A3. Security Criteria (#ZSSD-OP:PO-SC &emsp;#SSFD:PO.4 Define and Use Criteria for Software Security Checks) 
- A3.1 Software Security Checks (#ZSSD-OP:PO-SC-SSC &emsp;#SSDF:PO.4.1)
 
Define criteria for software security checks and track throughout the SDLC.

- A3.2 Safeguard the Necessary Information (#ZSSD-OP:PO-SC-SNI &emsp;#SSDF:PO.4.2): 

Implement processes, mechanisms, etc. to gather and safeguard the necessary information in support of the criteria.

### A4. Secure Environments (#ZSSD-OP:PO-SE &emps;SSFD:PO.5 Implement and Maintain Secure Environments for Software Development)
- A4.1 Separate and Protect the Environments (#ZSSD-OP:PO-SE-SPE &emsp;#SSDF:PO.5.1): 
 
Separate and protect each environment involved in software development.

- A4.2 Harden Development Endpoints (#ZSSD-OP:PO-SE-HDE &emsp;#SSDF:PO.5.2) 

Secure and harden development endpoints (i.e., endpoints for software designers, developers, testers, builders, etc.\) to perform development-related tasks using a risk-based approach.
    
## B. Protect the Software (#ZSSD-OP:PS &emsp;#SSFD:PS Protect the Software) 

### B1. Protect All Code (#ZSSD-OP:PS-PAC &emsp;SSDF:PS.1 Protect All Forms of Code from Unauthorized Access and Tampering)
- B1.1 Store All Code (#ZSSD-OP:PS-PAC-SAC &emsp;#SSDF:PS.1.1) 
 
Store all forms of code, including source code and executable code, based on the principle of least privilege so that only authorized personnel, tools,services, etc. have the necessary forms of access.

### B2. Software Release Integrity (#ZSSD-OP:SRI &emsp;#SSDF:PS.2 Provide a Mechanism for Verifying Software Release Integrity)
- B2.1 Integrity Information Availability (#ZSSD-OP:PS-SRI-IIA &emsp;#SSDF:PS.2.1) 
 
Make integrity verification information available to software purchasers and consumers.
  
### B3. Protect Software Releases (#ZSSD-OP:PSR  &emsp;#SSDF:PS3 Archive and Protect Each Software Release)
- B3.1 Archive Necessary Files (#ZSSD-OP:PS-PSR-ANF &emsp;#SSDF:PS.3.1) 
 
Securely archive the necessary files and other data (e.g., integrity verification information, provenance data) to be retained for each software release.

- B3.2 Maintain Provenance Data (#ZSSD-OP:PS-PSR-MPD &emsp;SSDF:PS.3.2) 
 
Collect, maintain, and share provenance data for all components and other dependencies of each software release (e.g., in a software bill of materials[SBOM]).

[// intentionally commented out]: <> ( PUT-COMMENTED-OUT-TEXT-HERE )


#Notes, TODOs
* Consider organizations size - some just can't afford all the overhead and need to simplify. How then we maintain compliancy?
* Flag which requirements are mandatory
* Some items look as recommended practices rather than as policy requirements
    * Option: Group such practices into a sound requirement
* Map M:N between ZSSD and SSDF and others
* Automated tests to prove some policy requirements fulfilment
* Should we should prescribe requirements fulfillment report format - see current reports 
