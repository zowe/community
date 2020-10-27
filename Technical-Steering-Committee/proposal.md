# Zowe Technical Steering Committee Proposal

 - [Background](#background)
 - [Role](#role)
 - [Composition](#composition)
 - [Operations and Processes](#operations-and-processes)
   - [Chairperson and Secretary](#chairperson-and-secretary)
   - [Meetings](#meetings)
   - [Voting](#voting)
 - [FAQs](#faqs)

The Zowe project is hosted by the Open Mainframe Project and part of the Linux Foundation which operates transparently, openly, collaboratively and ethically.  

This proposal is to form a Zowe Technical Steering Committee (TSC) to oversee, govern, and improve the infrastructure, execution, and customer experience related to development, testing, packaging, delivery, and cross-squad technology overlap areas.  

## Background

When Zowe was first created different technology from different codebase combined and was stewarded by individual squads who oversaw each component.  Each squad was responsible for tracking and planning the backlog of items for their component.

As Zowe has grown, coordination between squads has grown, resulting in a common installer for z/OS components, and more recently features such as Sign Sign On (SSO), MultiFactor Authentication (MFA) and client-side certificates have required technical and delivery coordination between the different components. These capabilities have enhanced Zowe’s value to the community.  It is anticipated this vector of integration will continue in the future with high availability (HA), containerization, improved security and other cross component features.  

The coordination and synchronization of the moving parts of Zowe is becoming more central to successful delivery of features and for this reason the Zowe Leadership Committee (ZLC) taking leadership guidance from other successful Linux Foundation projects is proposing the creation a Technical Steering Committee (TSC).

## Role

The TSC will oversee the technical direction of the Zowe project. Responsibilities include, but are not limited to

- Setting the release schedule, release quality standards, and approving releases.
- Maintaining the overall project governance and processes.
- Coordinating the use of project infrastructure, include code repositories, issue tracking, CI/CD environments, and communication tools.
- Establish a Code of Conduct inline with the Open Mainframe Project and Linux Foundation standards.
- Maintaining the list of committers.
- Establish and maintain the overall development processes, including any coding, testing, security, and best practice standards for squads to operate within.
- Faciliate cross-squad interactions, including cross-squad efficiencies, technical debt, test coverage, release efficiency.
- Establish and maintain a lifecycle for Zowe squads, serving as a mentor to newly established squads.
- Encourage participation and mentorship in wider community events such as hackathons or mentorships.
- Appointing representatives to work with other open source or open standards communities as needed.

## Composition

The TSC is intended to be a representation of Zowe Committers, as well as other architects, subject matter experts, and members of the extended Zowe community. While any of these individuals may participate in the TSC, there will be a defined group of TSC voting members that will vote on actions of the TSC within the roles of the TSC outlined above.

The initial voting members of the TSC will consist of representatives from the Zowe Leadership Committee (ZLC) as well as the current lead or representative from each squad, as defined below. Where the squad lead is also one of the ZLC representative this position should be filled by another squad SME.  The list of TSC voting members is held in [TSCMEMBERS.csv](./TSCMEMBERS.csv)

The TSC voting members will have no more than one-half (50%) of voting members affiliated with the same employer. In the case where a TSC voting member has an employment change which violates this requirement, the TSC voting member should be replaced by the body in which their status is provided.  

The TSC voting members may adjust the makeup of the TSC voting members after the initial year with approval of the current Zowe Committers. It is expected that any makeup changes would look to align with the growing technical community structure to ensure equitable representation. Any TSC voting member elections will be facilated by the Open Mainframe Project staff to ensure vendor-neutrality. 

TSC voting members are expected to regularly participate in TSC meetings and other activities. TSC voting members may voluntarily resign at any time, in which case the squad through which the voting member was elected will be responsible for providing a new voting member. In the exceptional situation where the TSC determines a voting member is acting in a manner detrimental to the Open Mainframe Project or Zowe project, the other TSC voting members will consult with Open Mainframe Project staff to determine a course of action.

## Operations and Processes

It is expected that the TSC will establish it's general operations and policies, clearly defined in the [GOVERNANCE.md](../GOVERNANCE.md), but in general the TSC will do the following.

### Chairperson and Secretary

The TSC will elect a chairperson which will have the responsibilities and duties of...

- Organizing and conducting meetings, and coordinating responses to any voting issues.  
- Be the primary representative of the Zowe project to the Open Mainframe Project Techincal Advisory Counsel (TAC) on technical issues.  
  - The ZLC chairperson remains the primary representation of business, marketing, community and non-technical issues the Zowe project to the Open Mainframe Project.
- Be the primary spokesperson for the Zowe project.

The TSC chairperson may choose from time-to-time to delegate these duties to other TSC voting members if they are unable to fulfill these duties, or if they deem another SME is more appropriate.

The TSC will also appoint a secretary, or chose to have a rotating secretary duty, to record meeting notes, manage actions from meetings and distribute meeting notes to the larger community. 

### Meetings

The TSC will hold a regular cadence of meetings, with the specific day/time/duration to be decided upon by TSC voting members and communicated publicly. TSC meeting agendas will be socialized 1 day prior to the meeting, and any one will be able to add meeting agenda items using the mechanism determined by the TSC voting members. It is encouraged to use tools that enable participation by the community ( such as Slack, GitHub Issues, or mailing lists ). It is generally advised that the TSC maintain a consistent cadence of meetings, and advise the community if meeting times change. TSC meetings by default are open to anyone to participate, but the TSC may hold closed sessions that include Open Mainframe Project staff on an exception basis to discuss sensitive issues such as security vulnerabilities or community conflicts.

All TSC meetings will have recorded notes, and may chose to record the meeting.

### Voting

All general topics and direction will be discussed openly. 

While the Project aims to operate as a [consensus based community](http://en.wikipedia.org/wiki/Consensus-seeking_decision-making), if any TSC decision requires a vote to move the Project forward, the TSC voting members will vote on a one vote per voting member basis. Quorum for TSC meetings is at least fifty percent ( 50% ) of TSC voting members. TSC decisions may be by electronic vote in a method that will be transparent and that can be preserved, such as mailing lists or Github issues. The TSC may choose to have the Open Mainframe Project staff oversee votes to ensure vendor-neutrality. 

In the event a vote cannot be resolved by the TSC, any TSC voting member may refer the matter to the Open Mainframe Project staff and/or Open Mainframe Project TAC for assistance in reaching a resolution.

## FAQs

### What will be the role of the ZLC after the TSC is formed?

Many of the aforementioned duties and roles of the ZLC will be shifted to the TSC as a part of this proposal. This brings Zowe more inline with other Open Mainframe Project and Linux Foundation projects, with technical community representative leadership. At the present time there are no definitive plans for changes to the ZLC, though this will be re-evaluated as the TSC begins operations.