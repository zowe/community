# Maturity

This document outlines what levels of maturity are to be found within the Zowe project and the ways to transition between the different stages

# Squads

- Proposal - Idea presented to the TSC and ZLC based on the process outlined in [Proposal Process](#Proposal process)
- Incubator - Sub project accepted to the incubator stage. The component could either look for being accepted into a specific squad or to form a new squad within Zowe. Here we are concerned mainly around the components that aim to create a new squad. 
- Active - Demonstrated sustainability and sufficient maturity. The squad has regular meetings and there is TSC representative from the squad. 
- Emeritus - No new development is expected to be done by the squad. The squad is disbanded and the TSC representative leaves the TSC. The created code is retained under Zowe. 

## Stages

Every Zowe sub-project has an associated maturity level. Proposed Zowe projects should state their preferred maturity level. When a ZLC vote is held on a proposed sub-project entering Zowe, votes may either be for the project to enter as an Incubation or Active Stage sub-project, or not to enter at this time. A two-thirds supermajority is required for a sub-project to be accepted. If there is not a supermajority of votes to enter as a Active Stage sub-project, then any Active Stage votes are recounted as votes to enter as an Incubation Stage sub-project. If there is not a supermajority of votes to enter as an Incubation Stage sub-project, the project is rejected. This voting process is called fallback voting.

Projects of all maturities have access to all resources listed at [https://openmainframeproject.org/projects](https://openmainframeproject.org/projects) but if there is contention, more mature projects will generally have priority.

### Proposal Stage

The proposal requirements are based on the [CNCF Project Proposal Process v1.1](https://github.com/CNCF/toc/blob/40abe6f81c2b46842a87d6c47cf4190f0d8c1856/process/project_proposals.adoc).

#### Requirements

Projects must be proposed via a Community issue to [https://github.com/zowe/community/issues](GitHub) with the "enhancement" label. Project proposals submitted to the Zowe must provide the following information to the best of your ability:

* Name of project (must be unique within Zowe)
* Project description (what it does, why it is valuable, origin and history)
* Statement on alignment with Zowe mission
* Sponsor from Zowe (sponsor helps mentor projects) - ZLC or TSC member
* License and contribution guidelines (Zowe project requires code contributions to Zowe are to be made under the [Eclipse Public License 2.0 (EPL-2.0)](https://spdx.org/licenses/EPL-2.0.html) and all non-code contributions are to be made under the [Creative Commons Attribution 4.0 International license (CC-BY-4.0)](https://spdx.org/licenses/CC-BY-4.0.html) unless otherwise approved by the Open Mainframe Project Governing Board, having each committer agree to the [DCO](https://developercertificate.org/)
* Review the [Zowe License and Copyright Guidence](https://github.com/zowe/zlc/blob/master/process/LicenseAndCopyrightGuidance.md)
* Source control (GitHub by default)
* External dependencies (including licenses)
* Initial committers (how long working on project)
* Infrastructure requests (CI / OMP Cluster)
* Communication channels (Slack, irc, mailing lists)
* Issue tracker (GitHub by default)
* Preferred maturity level (see Zowe Graduation Criteria below)

### Project Acceptance Process

* Projects are required to schedule and present their proposal at a Zowe-wide meeting such as TSC, ZLC or architecture. You can check the meeting schedules in the [Zowe Development Calendar].(https://lists.openmainframeproject.org/g/zowe-dev/calendar)
* Projects get accepted via majority vote of the ZLC as well as majority of TSC.
* All projects must adopt the Code of Conduct as outlined in the TSC charter.
* All projects agree to transfer any relevant trademarks to Zowe and to assist in filing for any relevant unregistered ones. This assignment will be reversed if the project does not remain in the Zowe, as described below. Note that no patent or copyright assignment is necessary because the [Eclipse Public License 2.0 (EPL-2.0)](https://spdx.org/licenses/EPL-2.0.html) provides sufficient protections for other developers and users.
* All projects start at the [Incubation stage](#Incubation Stage) by default unless the ZLC approves otherwise.

### Incubation Stage

To be accepted to the Incubation Stage, a squad must complete the [proposal process](#Proposal Stage).

Every 12 months, each Incubation Stage squads will come to a vote with the ZLC and TSC. A majority vote of both bodies is required to renew a squad at Incubation Stage for another 12 months or move it to active stage. If there is not a majority in both bodies for any of these options, the squad is not renewed.

In the case of an Incubation Stage squad that is not renewed with Zowe, the trademark will be returned to the project maintainers or an organization they designate.

### Active Stage

To graduate from Incubation Stage, or for a new squad to join as an Active Stage squad, a squad must complete the [proposal process](#Proposal Stage) plus:

* Have committers from at least two organizations.
* Have achieved and maintained a Core Infrastructure Initiative https://bestpractices.coreinfrastructure.org/[Best Practices Badge].
* Follow the TSC agreed Best practices.
* Have a designated TSC representative. Provide updated Governance and Committers files where applicable. The current committers and contributors are in the GitHub as outlined in the TSC [Contributing guidelines](Contributing.md)
* Receive a majority vote from the ZLC and TSC to move to accepted stage.

Squads start at the Active Stage if they can demonstrate sufficient maturity. Squads can remain in an Incubation Stage indefinitely, but they are normally expected to move to Active Stage within two years.

### Emeritus Stage

Squads like products have lifecycles, and often in open source the relevance for a given squad over time can diminish. Nonetheless, having a home for squads no longer receiving active development is crucial for long-term sustainability and asset management.

Squads only can enter the Emeritus Stage by either:

* On request from the squad itself, requiring a supermajority votes of all active sub-project committers
* By a majority vote of the ZLC and TSC if there has been insufficent activity in the sub-project over the course of 6 months.

When in the Emeritus Stage, the squad's code repository administration is transferred to a designated individual by the Zowe. No new features or bug fixes will be addressed, unless it is deemed a security issue. Open Mainframe Project and Zowe will hold all assets in perpetuity.

A squad can move back to Active Stage following the guidelines for a project being accepted at the Active Stage above.

# Components

- Technical Preview - Ready to be used, but usually not fully developed or with pieces remaining to be done or some other limitations. Potentially limited support. 
- MVP (Minimum Viable Product) - Ready to be used in production with more limited feature set than what is expected later on. Supported at least for the current Active release cycle
- GA (Generally Available) - Fully done feature or component. Everything should be properly documented and working as expected. The engineering standards are followed and the component is expected to be supported at least untill the end of maintenance of the current cycle.
- LTS (Long Term Support) - Expected to be supported at least until the end of the Maintenance of this and one future release. (Giving minimum of 4.5 years)