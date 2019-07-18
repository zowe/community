*Adapted from Open Mainframe Project Top Level Project Graduation Criteria at https://github.com/openmainframeproject/tsc/blob/master/process/project_stages.md*

# Zowe sub-project Graduation Criteria

Every Zowe sub-project has an associated maturity level. Proposed Zowe projects should state their preferred maturity level. When a ZLC vote is held on a proposed sub-project entering Zowe, votes may either be for the project to enter as an Incubation or Active Stage sub-project, or not to enter at this time. A two-thirds supermajority is required for a sub-project to be accepted. If there is not a supermajority of votes to enter as a Active Stage sub-project, then any Active Stage votes are recounted as votes to enter as an Incubation Stage sub-project. If there is not a supermajority of votes to enter as an Incubation Stage sub-project, the project is rejected. This voting process is called fallback voting.

Projects of all maturities have access to all resources listed at [https://openmainframeproject.org/projects](https://openmainframeproject.org/projects) but if there is contention, more mature projects will generally have priority.

## Incubation Stage

To be accepted to the Incubation Stage, a sub-project must complete the [proposal process](proposal_process.md).

Every 12 months, each Incubation Stage sub-project will come to a vote with the ZLC. A supermajority vote is required to renew a sub-project at Incubation Stage for another 12 months or move it to active stage. If there is not a supermajority for any of these options, the sub-project is not renewed.

In the case of an Incubation Stage sub-project that is not renewed with Zowe, the trademark will be returned to the project maintainers or an organization they designate.

## Active Stage

To graduate from Incubation Stage, or for a new sub-project to join as an Active Stage project, a sub-project must complete the [proposal process](proposal_process.md) plus:

* Have committers from at least two organizations.
* Have achieved and maintained a Core Infrastructure Initiative https://bestpractices.coreinfrastructure.org/[Best Practices Badge].
* Explicitly define a sub-project governance and committer process. This preferably is laid out in a GOVERNANCE.md file and references an OWNERS.md file showing the current and emeritus committers. A recommended governance process is defined at [example_governance.md](example_governance.md)
* Have a public list of project adopters for at least the primary repo (e.g., ADOPTERS.md or logos on the project website).
* Receive a supermajority vote from the ZLC to move to accepted stage.

Sub-projects start at the Active Stage if they can demonstrate sufficient maturity. Sub-projects can remain in an Incubation Stage indefinitely, but they are normally expected to move to Active Stage within two years.

## Emeritus Stage

Sub-projects like products have lifecycles, and often in open source the relevance for a given sub-project over time can dimenish. Nonetheless, having a home for sub-projects no longer recieving active development is crucial for long-term sustainability and asset management.

Sub-projects only can enter the Emeritus Stage by either:

* On request from the sub-project itself, requiring a supermajority votes of all active sub-project committers
* By a supermajority vote of the ZLC if there has been insufficent activity in the sub-project over the course of 6 months.

When in the Emeritus Stage, the sub-project's code repository adminstration is transfered to a designated individual by the ZLC. No new features or bug fixes will be addressed, unless it is deemed a security issue. Open Mainframe Project and Zowe will hold all assets in perpetuity.

A sub-project can move back to Active Stage following the guidelines for a project being accepted at the Active Stage above.
