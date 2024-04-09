# Squads

A squad is a group of people contributing and participating in the Zowe project. Such a group owns one or more [projects](projects.md). Every squad is required to have a representative on the Technical Steering Committee (TSC), and participate in relevant working groups. 

## Squad maturity
A squad's maturity is determined by its lifecycle stage. This section outlines the maturity levels associated with the corresponding lifecycle stages and the possible transitions between stages.

Beginning from each Zowe squad's inception, the squad has an associated lifecycle stage.
The current stage of a squad is reflected in the [List of current squads section](#current-squads).
Initially, a squad applies/makes a proposal for a preferred stage as described later in this document (incubator, active, etc.).
The TSC requests guidance from the Zowe Advocacy Council (ZAC) to form a new squad.
ZAC susequently provides timely guidance on whether the squad should be accepted, and the initial stage of the squad.
The TSC then votes on accepting the squad's project and squad stage based on the squads preference and ZAC guidance.
The resolution should have one of the following outcomes:
- To reject the proposal
- To fully accept the proposal
- To partially accept the proposal, but assign a lower initial stage than that requested by squad representatives

All squads, independent of their stages, have access to all resources listed at [https://openmainframeproject.org/projects](https://openmainframeproject.org/projects). If accessibility to resources becomes an issue, more mature squads will generally have priority.

## Squad lifecycle stages / Maturity levels
The following list presents the stages used by the TSC to define a squad's maturity:

- **Proposal**  
The idea for the squad will br presented to the TSC and ZAC based on the process outlined in [Proposal Process](#proposal-acceptance-process).
- **Incubator**  
The squad has been accepted to the incubator stage. The squad is provisionally part of the Zowe project but does not have voting rights. This includes squad committers.  
- **Active**  
 The squad has demonstrated sustainability and sufficient maturity. The squad has regular meetings, there is a TSC representative from the squad, and the squad committers can vote on Zowe-wide topics.
- **Emeritus**  
 No new development is expected to be performed by the squad. The squad is disbanded, and the TSC representative leaves the TSC. The created artifacts are retained under Zowe. 

### Proposal Stage

Zowe is looking for squads that will follow [Zowe principles](principles.md), and that will help to improve the experience of working with mainframe. Guiding principles for squad inception during the proposal stage include the following: 

- Vendor neutral solution
- Improve the sustainability of the platform

Proposal requirements are based on the [CNCF Project Proposal Process v1.1](https://github.com/CNCF/toc/blob/40abe6f81c2b46842a87d6c47cf4190f0d8c1856/process/project_proposals.adoc).

#### Requirements

A squad must be proposed in the form of a Community issue to [GitHub](https://github.com/zowe/community/issues) and use the Squad Proposal template. 
Squad proposals submitted to the Zowe TSC must provide information requested in the [Proposal](../.github/ISSUE_TEMPLATE/proposal.md).

#### Proposal Acceptance Process

1. Squads are required to schedule and present their proposals at a Zowe-wide meeting such as TSC, ZAC, or architecture. You can check the meeting schedules in the [Zowe Development Calendar](https://lists.openmainframeproject.org/g/zowe-dev/calendar). The #zowe-tsc or #zowe-dev slack channels are good places to ask. 
2. Squad acceptance is determined by a majority vote of the TSC.

Requirements of a newly formed squad include the following:
* The squad is bound by the Code of Conduct as outlined in the TSC charter.
* The squad agrees to transfer any relevant trademarks to Zowe, and to assist in filing any relevant unregistered trademarks. This assignment will be reversed if the project does not remain in Zowe, as described later in this document.   
**Note:** No patent or copyright assignment is necessary because the [Eclipse Public License 2.0 (EPL-2.0)](https://spdx.org/licenses/EPL-2.0.html) provides sufficient protections for other developers and users.
* The squad starts at the agreed stage.

### Incubation Stage

Every year after a squad is accepted, a vote is taken by the TSC to determine the squad's stage. 
A majority vote is required to renew or elevate the squad's stage from **Incubation** to **Active** for another year. 
If there is not a majority, the squad's stage cannot be renewed or elevated. 
If there are too many squads in the incubation stage, the TSC will group the renewals.

In the case that a squad in the **Incubation** stage is not renewed with Zowe, the trademark will be returned to the project maintainers or a designated organization.

Squads are expected to move from the **Incubation** to the **Active** stage within two years. 
If agreed with TSC, a squad can stay in the **Incubation** stage longer if necessary. 
TSC will consult ZAC for guidance on whether incubation should be extended.  

### Active Stage

**Active** stage status indicates that squad is currently working within the Zowe project, and is actively collaborating with the other squads. 
Squads can remain in the **Active** stage indefinitely. 

In order to move to **Active** stage status, the following requirements must be met and demonstrated by the squad:
 * The squad is required to have committers from at least two organizations.
 * The squad is following best practices outlined by TSC in the [Zowe best practices](https://github.com/zowe/community/tree/master/Technical-Steering-Committee/best-practices).
 * The squad has a designated TSC representative. 
 * The squad provides updated Governance and Committers files where applicable. Current committers and contributors are to be listed in GitHub as outlined in the TSC [Contributing guidelines](contributing.md).

### Emeritus Stage

Over time, squad relevance within the open source project may diminish. 
Storing artifacts no longer actively being developed by a squad, however, is essential for long-term sustainability and asset management. 

At least one of the following criteria must be satisfied for squads to apply for **Emeritus** Stage:

* A request for **Emeritus** stage status must be made on behalf of the squad itself, requiring a 2/3rd vote of all active squad committers.
* A majority vote by the TSC if there has been insufficient activity in the squad over the course of 6 months, or if the squad does not follow the best practices despite the reminders from the TSC.

When a squad is assigned **Emeritus** Stage, the squad's code repository administration is transferred to a designated individual from Zowe. 
No new features or bug fixes will be addressed, unless it is deemed a security issue. 
The Open Mainframe Project and Zowe will hold all assets in perpetuity.

For squads with **Emeritus** stage status, Zowe does not guarantee build and test environments pertaining to associated artifacts and code.  
For interested parties who would like to provide support of such artifacts, it is up to these interested parties themselves to provide this support. 

A squad can move back to **Active** stage if the activities of the squad meet the aforementioned crieteria for **Active** stage status as previously in this document.

## Current squads

This section lists all current Zowe squads and their level of maturity. 

### Proposal

Squads currently in the proposal process include the following:

- TBD

### Incubator

Squads currently in an incubator stage include the following:

- Zowe Chat
 
### Active

Squads currently in the Active stage include the following:

- API Mediation Layer
- CLI
- Documentation
- Intellij Idea
- Onboarding
- Systems
- Web UI
- zOS
- Zowe Explorers

### Emeritus

Squads currently in the Emeritus stage include the following: 
- TBD
