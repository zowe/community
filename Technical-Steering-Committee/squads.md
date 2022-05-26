# Squads

A squad is a group of people contributing and participating in the Zowe project. Such a group owns one or more modules. Every squad needs to have a representative in TSC and participate in relevant working groups. 

## Squad maturity
Squad's maturity is determined by its lifecycle stage. This section outlines the maturity levels associated with the corresponding lifecycle stages and the possible transitions between them.

For the duration of their existence, the Zowe squads always have an associated lifecycle stage.
The current stage of the squads is reflected in the [List of current squads section](#current-squads).
Initially, the squad applies/makes proposal for a preferred stage (incubator, active, etc.).
The TSC reaches out to the ZAC for guidance about the new squad.
ZAC provides timely guidance on whether the squad should be accepted and at what initial stage.
The TSC then votes on accepting the squad's project and with which stage based on the squads preference and ZAC guidance.
The resolution could be either:
- reject the proposal
- fully accept the proposal
- partially accept the proposal, offering lower initial stage than requested

Squads in all stages have access to all resources listed at [https://openmainframeproject.org/projects](https://openmainframeproject.org/projects) but if there is contention, more mature squads will generally have priority.

## Squad lifecycle stages / Maturity levels

- **Proposal** - Idea presented to the TSC and ZAC based on the process outlined in [Proposal Process](#proposal-acceptance-process)
- **Incubator** - Squad accepted to the incubator stage. The squad is provisionally part of the Zowe project but doesn't have voting rights including the committers of the squad  
- **Active** - Demonstrated sustainability and sufficient maturity. The squad has regular meetings, there is a TSC representative from the squad and the squad committers can vote on Zowe wide topics.
- **Emeritus** - No new development is expected to be done by the squad. The squad is disbanded and the TSC representative leaves the TSC. The created artifacts are retained under Zowe. 

### Proposal Stage

Zowe is looking for squads that will follow [Zowe principles](principles.md) and that will help us improve the experience of working with the Mainframe. 

- Vendor neutral solution
- Improving sustainability of the platform

The proposal requirements are based on the [CNCF Project Proposal Process v1.1](https://github.com/CNCF/toc/blob/40abe6f81c2b46842a87d6c47cf4190f0d8c1856/process/project_proposals.adoc).

#### Requirements

Squad must be proposed via a Community issue to [GitHub](https://github.com/zowe/community/issues) via Squad Proposal template. 
Squads proposals submitted to the Zowe must provide the information requested in the [Proposal](../.github/ISSUE_TEMPLATE/proposal.md).

#### Proposal Acceptance Process

* Squads are required to schedule and present their proposal at a Zowe-wide meeting such as TSC, ZAC or architecture. You can check the meeting schedules in the [Zowe Development Calendar].(https://lists.openmainframeproject.org/g/zowe-dev/calendar). The #zowe-tsc or #zowe-dev slack channels are good places to ask. 
* Squads get accepted via majority vote of the TSC.

The newly formed squad:
* Is bound by the Code of Conduct as outlined in the TSC charter.
* Agrees to transfer any relevant trademarks to Zowe and to assist in filing for any relevant unregistered ones. This assignment will be reversed if the project does not remain in the Zowe, as described below. Note that no patent or copyright assignment is necessary because the [Eclipse Public License 2.0 (EPL-2.0)](https://spdx.org/licenses/EPL-2.0.html) provides sufficient protections for other developers and users.
* Starts at the agreed stage

### Incubation Stage

Every year after accepting a squad, it's current stage will be voted again by the TSC. 
A majority vote is required to renew or elevate the squad's stage from Incubation to Active stage for another year. 
If there is not a majority, the squad's stage can't be renewed or elevated. 
If there are too many squads in incubation stage, the TSC will group the renewals.

In the case of an Incubation Stage squad that is not renewed with Zowe, the trademark will be returned to the project maintainers or an organization they designate.

The squads are expected to move from the Incubation to Active stage within at most two years. 
If agreed with TSC they can stay in the Incubation stage longer when needed. 
TSC will consult ZAC for guidance on whether the incubation should be longer.  

### Active Stage

Active stage squad represents a mature squad working within the Zowe project and which is actively collaborating with the other squads. 
Squads can remain in the active stage indefinitely. 

In order to move to the active stage, following requirements must be met and demonstrated by the squad. The squad must:
 * Have committers from at least two organizations.
 * Follow best practices outlined by TSC in the [Zowe best practices](https://github.com/zowe/community/tree/master/Technical-Steering-Committee/best-practices).
 * Have a designated TSC representative. 
 * Provide updated Governance and Committers files where applicable. The current committers and contributors are listed in the GitHub as outlined in the TSC [Contributing guidelines](contributing.md)

### Emeritus Stage

Over the time the squad's relevance for the open source project can be diminished. 
Nonetheless, having a home for artifacts no longer actively being developed by any squad is crucial for long-term sustainability and asset management. 

Squads only can enter the Emeritus Stage by either:

* On request from the squad itself, requiring a 2/3rd votes of all active squad committers
* By a majority vote of the TSC if there has been insufficient activity in the squad over the course of 6 months or if the squad doesn't follow the best practices despite the reminders from the TSC.

When in the Emeritus Stage, the squad's code repository administration is transferred to a designated individual from Zowe. 
No new features or bug fixes will be addressed, unless it is deemed a security issue. 
Open Mainframe Project and Zowe will hold all assets in perpetuity.

For squads in the emeritus stage and the associated artifacts and code Zowe doesn't guarantee build and test environments. 
If someone wants to support such artifacts, it's up to them to solve this issue.

A squad can move back to Active Stage following the guidelines for a project being accepted at the Active Stage above.

## Current squads

In this list we outline the current squads and their level of maturity. 

### Proposal

This list contains squads currently known to be in a proposal process. 

### Incubator

This list contains squads currently known to be in an incubator stage

- ZEEBRA
- Wizard Workflow
- Zowe Mobile (Zowe on the go)
- Intellij Plugin
- Zowe Chat
- zOS Squad

### Active

This list contains squads currently known to be in an active stage

- API Mediation Layer
- CLI
- Documentation
- Zowe Explorers
- Onboarding
- Systems
- Web UI

### Emeritus

This list contains squads currently known to be in emeritus stage 
