# Zowe Secure Software Development Policy Framework

This document describes a framework used to abstract a meta definition of the Zowe Secure Development Policy/ies.

### Goals:
- Keep it simple and extensible as much as possible
- Must be complete, i.e contributors could refer it and not need to define their own (but could extend ot if they need)
- Maintain reference to external requirements for approval of compliance and conformity


The directory structure of the framework is as follows:
```
- Secure-Software-Development-Policy
  - Zowe-SSDP-Organization
    - Best-Practices
    - Guidelines
    - Processes
    - Best-Practices
    - Policy.md
  - Zowe-SSDP-SDLC
    - Best-Practices
    - Guidelines
    - Processes
    - Best-Practices
    - Policy.md
  - Manifesto.md
```

The contents of the framework include:
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

``` 
Note:
The two policies above are titled "Meta-Policy", because they serve as a container to collect all the requirements for a given area of governance (eg. Organization, SDLC, etc).
Such meta policy can/should be split into smaller interrelated policies targeting specific security topics, which need to be governed/published separately.
Such target, publishable policies need to be distilled from a Meta Policy. while keeping track to the original statements for easier maintenance and assessment of policy fulfilment.
```

Currently, the requirements included in the two policies described above are based on NIST SSDF (Secure Software Development Framework).
A mapping between Zowe Secure Software Development policies' items requirements is maintained in the policy meta definitions  
in separate documents to simplify policy governance and help customers
audit suitability and provability of Zowe security.


- Best practices and guidelines for typical use cases.
  Please see [best practices](./Best-Practices/best-practices.md) and [guidelines](./Guidelines/guidelines.md). Some guidelines are mandatory and in such cases this is explicitly declared in the corresponding documents. Some guidelines are optional. In such cases the tools and implementation technics described provide only a recommendation and the choice of instruments is
  left to the contributing organization/squad/team.


- Definition of processes used to achieve the policy requirements fulfilment

  To help contributors to fulfil the requirements, Zowe could provide sample
processes corresponding to individual policies. The processes definitions related to a specific policy should be placed 
under the corresponding "Processes" sub-folder.



- A reference to industry standards and regulatory requirements is provided where relevant.

<span style="display: none">#TODO@PZA: Provide links to the BPs, Guidelines and other related documents.</span>



### Open questions:
- Do all components must fulfill same security requirements? If not, how we decide (or who is in charge to decide) the level of security.
- To what extent the contributors are responsible for defining their policy framework extensions to the main Zowe one? 
- How to maintain transparency and evidence for our customers that regulatory and other requirements were actually met
  - badges 
  - logs
  - issues 
- 
