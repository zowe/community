# Zowe Project Squad Lifecycle

This lifecycle document is maintained by the Zowe TSC ("TSC"), and its purpose is to:

* Describe the requirements for establishing a new squad;
* Provide a clear process for the contribution of new code to Zowe; and
* Set milestones and requirements for different stages of squad development once accepted into Zowe.

Zowe may adopt or amend this document by a vote of its TSC.

# Lifecycle Stages

This document provides for three lifecycle stages for contributed projects:

* Incubation;
* Active; and
* Emeritus

All squads must meet the Incubation stage requirements and following a successful Graduation Review, progress to Adopted. It is possible that some squads may be approved as Incubation and pass a Graduation Review at the same time to advance directly to Active. A squad that does not pass a Graduation Review remains at the Incubation stage unless the TSC votes to transition the project to Emeritus status.  Alternatively, the TSC or the squads may vote to exit the lifecycle under specific terms for transfer of trademarks and other key assets.

## Incubation Stage Requirements

To be accepted to the Incubation Stage, a squad must complete the proposal process.

Every 12 months, each Incubation Stage squad will come to a vote with the TSC. A supermajority vote (2/3rds of voting members) is required to renew a squad at Incubation Stage for another 12 months or move it to Active Stage. If there is not a supermajority for any of these options, the squad is not renewed.

In the case of an Incubation Stage squad that is not renewed with Zowe, the trademark will be returned to the project maintainers or an organization they designate.

Upon acceptance into Zowe, new Squads must complete the [new squad checklist](new-squad-checklist.md) to ensure they move smoothly through the graduation process.

## Graduation to Active Stage

To be advance to an Active stage, a project must meet the Incubation stage requirements plus:

* Have committers from at least two organizations and a substantial ongoing flow of commits and merged contributions, authored by a healthy number of diverse contributors.
* Have achieved and maintained a [Core Infrastructure Initiative Best Practices Badge](https://bestpractices.coreinfrastructure.org/) ( note that this badge must be achieved on the sqaud itself )
* Explicitly define a sub-project governance and committer process. This preferably is laid out in a GOVERNANCE.md file and references an COMMITTERS.* file showing the current and emeritus committers. A recommended governance process is defined at example_governance.md
* Have known project adopters and a public list of project adopters for at least the primary repo (e.g., ADOPTERS.md or logos on the project website).
* Fulfill any requirements for the delivery mechanism of the sub-project, including:
  * Hosting of the squad and code within the within the [Zowe Github organization](https://github.com/zowe).
  * Integration into the CI/CD pipeline
  * Documentation as part of the Zowe Docs
* Receive a supermajority vote ( 2/3rds of voting members ) from the ZLC to move to Active Stage.

Squads start at the Active Stage if they can demonstrate sufficient maturity. Squads can remain in an Incubation Stage indefinitely, but they are normally expected to move to Active Stage within two years.

## Emeritus Stage

Squads like products have lifecycles, and often in open source the relevance for the work of a squad over time can dimenish. Nonetheless, having a home for the squad's assets no longer recieving active development is crucial for long-term sustainability and asset management.

Squads only can enter the Emeritus Stage by either:

* On request from the project itself, requiring a supermajority votes of all active project committers
* By a supermajority vote of the TAC if there has been insufficent activity in the project over the course of 6 months.

When in the Emeritus Stage, the squad's code repository adminstration is transfered to a designated individual by the TSC. No new features or bug fixes will be addressed, unless it is deemed a security issue. Open Mainframe Project will hold all assets in perpetuity.

A project can move back to Active Stage following the guidelines for a project being accepted at the Active Stage above.

# Squad Benefits Associated with Each Lifecycle Stage

Incubation stage squads are eligible to receive the following benefits:

* Neutral hosting of the project’s community and any key assets (e.g. trademark, domain, etc.)
* Assistance from the TSC to facilitate collaboration with other squads.
* Public communication announcing the inclusion of the squad.
* Right to refer to the project as a Zowe Incubation Squad, and an opportunity to participate in events and other collaborative activities sponsored by Zowe and Open Mainframe Project.
* Subject to applicable trademark usage guidelines, to display Zowe's logo on the squad code repository.

Active stage projects are eligible to receive the following benefits in addition to those for Incubation stage squads:

* Right to refer to the project as a Zowe Active Squad, and receive highest priority for participating in events and other collaborative activities sponsored by Zowe and Open Mainframe Project.
* Public communication announcing the graduation of the project.

## Archive Stage

* Archive stage projects will constitute “Technical Projects” under the ASWF charter and may receive support as determined by the Governing Board.

# Annual Review

The TAC may undertake periodic reviews of all projects (i.e., annual). Such review will include an assessment as to whether each Incubation stage project is making adequate progress towards the Graduation stage. Any Adopted project may be moved to Archive stage by affirmative vote of the TAC.
