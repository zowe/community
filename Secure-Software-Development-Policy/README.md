# Zowe Secure Software Development Policy Framework

This document describes a framework used to model a meta definition of the Zowe Secure Development Policy/ies.

The policies described bellow are titled "Meta-Policy", because they serve as a container to collect all the requirements for a given area of governance (eg. Organization, SDLC, etc).
Such meta policy can/should be split into smaller interrelated policies targeting specific security topics, which need to be governed/published separately (e.g. Security issues disclosure etc.).
Such target, publishable policies need to be distilled from a Meta Policy. while keeping the relation to the original statements for easier maintenance and assessment of policy fulfilment.

```
### Goals:
- Keep it simple and extensible as much as possible
- Must be complete, i.e contributors could refer it and not need to define their own (but could extend ot if they need)
- Maintain reference to external requirements for approval of compliance and conformity
```

![Secure Software Development Policy Framework]("./img/SecurityPolicyFramework.png")

###Common definitions:
> 1. Contributors' types and policy applicability\
> There are basically three types of Zowe contributors.
>- Zowe as an entity represented by ZAC and TSC 
>- Zowe squads owning component/s
>- Individual contributors (persons or organizations) contributing to one or multiple Zowe components/projects\
> 
 > They not only differ by size and ownership of the components, but consequently have different responsibilities
 > and should be required to maintain different level of compliance with the policies.
 > On the top of the responsibility chain is always Zowe represented by the TSC and Security Workgroup.
 > The question then is how to structure the policy statements so to assign them to corresponding entity (individual, squad, Zowe governance body)\
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
>* ```#TODO: OTHER?```
>
>As the requirements are hierarchically structured, classifying a sub-category requirement as mandatory, implies that the parent category is mandatory as well, while some category' sub items may remain optional.\
>Should a higher level category be marked as mandatory, but all sub-items are optional, then it is up to the organization to implement measure to fulfill the requirement and state method how this can be validated.\
> 
> 3. The directory structure of the framework is as follows:\
>- Secure-Software-Development-Policy
>  - Zowe-SSDP-Organization
>     - Best-Practices
>     - Guidelines
>     - Processes
>     - Best-Practices
>     - Policy.md
>  - Zowe-SSDP-SDLC
>    - Best-Practices
>    - Guidelines
>    - Processes
>    - Best-Practices
>    - Policy.md
>  - Manifesto.md
>
>Further the Best-Practices, Guidelines and Processes may contain multiple sub-folders to separate different aspects or stags of the modelled policies. 

The contents of the framework structure include:
- A [Manifesto](./Manifesto.md) file, which provides a top level security vision and aims(#TODO@PZA: Link to Manifesto).

- A set of meta policy definitions providing requirements that must be satisfied in order to fulfil the Manifesto vision and aims.\
Currently, a set of two meta policies is provided to govern two major aspects of the software development:\

    - Organization Policy (Zowe Secure Software Development - Organization Policy, abbreviated ZSSD-OP)\
  is a meta policy defining requirements to be satisfied by the organization. We should distinguish following organizations participating in Zowe development and delivery:
```
        - Zowe represented by ZAC and TSC
        - Squads responsible for development of individual components (#Q: Does support organizations belong here too?)
        - Contributors
```
  - (TODO: Move this one level deeper in hte MD) SDLC Policy (Zowe Secure Software Development - Lifecycle Policy, abbreviated ZSSD-LP)\
  , is a meta policy defining requirements related to individual SDLC stages. 

The requirements included in the two policies described above are based on NIST SSDF (Secure Software Development Framework). 
and the main categorization of the policy requirements reflects the secure development practices grouping as defined by NIST [Secure Software Development Framework (SSDF)](https://csrc.nist.gov/Projects/ssdf).

The NIST Secure Software Development Framework (SSDF) defines and recommends a core set of high-level secure software development practices, that can be integrated into each SDLC implementation.
It is structured in such a way to provide an interface between software producers (e.g.,commercial-off-the-shelf [COTS] product vendors,
government-off-the-shelf [GOTS] software developers, custom software developers) on one side and software purchasers and consumers,
both federal agencies and other organization on the other side. Therefore, it is desirable and beneficial for Zowe to map security the SLDC requirements to that Framework.
Herein we use the SSDF as a meta framework by mapping the high-level practices to security policy requirements applicable to the individual development SDLC phases.

A mapping between Zowe Secure Software Development policies' items requirements is maintained in the policy meta definitions in separate documents to simplify policy governance and help customers
audit suitability and provability of Zowe security. NIST SSDF recommended practices IDs are those directly mapped to the Zowe SSDP (sub)categories and items.

For easier identification and linking, the categories and sub topics are assigned IDs unique in the Zowe namespace.

```#TODO:``` 
Additionally, Open SSF Best practices badges requirements are referenced where applicable.

These mappings are maintained to help the Zowe contributors be transparent about what level of security development practices was achieved
and to be able to easily answer requests from Zowe adopters about compliance with the respective best practices frameworks.

- Best practices and guidelines for typical use cases.
  Please see [best practices](./Best-Practices/best-practices.md) and [guidelines](./Guidelines/guidelines.md). Some guidelines are mandatory and in such cases this is explicitly declared in the corresponding documents. Some guidelines are optional. In such cases the tools and implementation technics described provide only a recommendation and the choice of instruments is
  left to the contributing organization/squad/team.

- Definition of processes used to achieve the policy requirements fulfilment.s

To help contributors to fulfil the requirements, Zowe could provide sample
processes corresponding to individual policies. The processes definitions related to a specific policy should be placed 
under the corresponding "Processes" sub-folder.


- A reference to industry standards and regulatory requirements is provided where relevant.

<span style="display: none">#TODO@PZA: Provide links to the BPs, Guidelines and other related documents.</span>


### Hashtags explanation

```
#OP - Organization Policy
#LP - SDLC Policy

#KEEP - Keep in the policy 
#DISCARD - remove from the policy
#RE-DEFINE

#MANIFESTO - rather belongs to Manifesto 
#POLICY  - Certainly a Policy Requirement
#BEST-PRACTICE - Sounds more like a Best-Practice rather than a requirement
#GUIDELINE - A guideline based on Best-Practices
#PROCESS - Full process to implement a requirement
#STANDARD - Standard reference

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

### Open questions:
>- Do all components must fulfill same security requirements? If not, how we decide (or who is in charge to decide) the level of security.
>- To what extent the contributors are responsible for defining their policy framework extensions to the main Zowe one? 
>- How to maintain transparency and evidence for our customers that regulatory and other requirements were actually met
>  - badges 
>  - logs
>  - issues 
>- Should a higher level category be marked as mandatory, but all sub-items are optional, then it is up to the organization to implement measure to fulfill the requirement and state method how this can be validated.

