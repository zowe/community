# Zowe Technical Steering Committee Proposal

- [Background](#backgroud)
- [Manifesto](#manifesto)
- [Makup](#makeup)
- [Voting](#voting)
- [Responsibilities](#responsibilities)

This proposal is to form a Zowe Technical Steering Committee (TSC) to oversee, govern, and improve the infrastructure, execution, and customer experience related to development, testing, packaging, delivery, and cross-squad technology overlap areas.  

## Background

When Zowe was first created different technology from different codebase combined and was stewarded by individual squads who oversaw each component.  Each squad was responsible for tracking and planning the backlog of items for their component.

As Zowe has grown, coordination between squads has grown, resulting in a common installer for z/OS components, and more recently features such as Sign Sign On (SSO), MultiFactor Authentication (MFA) and client-side certificates have required technical and delivery coordination between the different components. These capabilities have enhanced Zowe’s value to the community.  It is anticipated this vector of integration will continue in the future with high availability (HA), containerization, improved security and other cross component features.  

The coordination and synchronization of the moving parts of Zowe is becoming more central to successful delivery of features and for this reason the Zowe Leadership Committee (ZLC) taking leadership guidance from other successful Linux Foundation projects is proposing the creation a Technical Steering Committee (TSC).

## Manifesto

The TSC will oversee the technical direction of the Zowe project.

Responsibilities includes, but are not limited to:

 - Operating in a manner that is open and transparent.  Recordings of meetings will be kept, and vote counting will be done through e-mail or github issues for audit purposes.  
- Encourage diversity across the Zowe squads and in all aspects of Zowe including but not limited to technology, documentation, and engagement.  
- Foster consensus for themes recommended by a clear majority of Zowe consumers, or the Zowe Leadership Committee (ZLC), or cross Squad initiatives 
- Coordinating technical direction of cross-squad efforts while also encouraging the various squads/sub-projects to drive innovation – especially in the areas of integration.  
- Overseeing an architecture forum to explore new ideas for Zowe such as new capabilities or technologies for implementation leading to incubation projects that in turn may lead to new Zowe core components.  
- Have technical and architectural oversight for all the Zowe components. The TSC may delegate decisions to individual squads that are responsible for the components, but the TSC may overrule individual squads’ decisions regarding content and release cadence.  (See voting bullet for additional detail.) 

## Makeup

The TSC will be made up of voting members, as well as other architects, subject matter experts, and members of the extended Zowe community.  The makeup of TSC meetings will vary depending on the agenda and topics being discussed so elements of the TSC are fluid.  

The TSC has a core group of voting members who are resonsible for actioning and recording votes on issues regarding Zowe releses, Zowe priorities for cross squad work items, and topics surrounding technical direction.  

At the formation of the TSC the voting members include the three technical members of the Zowe Leadership Committee (ZLC)
    - Joe Winchester
    - Sean Grady
    - Mark Ackert
The TSO also includes one member from each of the Zowe squads.  Initially this role is given to be the current squad lead, however each squad may decide to nominate anyone else who is a current squad member.  Where the squad lead is also one of the ZLC technical voting members this position should be filled by another squad SME.
    - TBD - (Zowe App Framework/Desktop squad)
    - Mike Bauer (Zowe CLI Squad)
    - Fernando Rijo Cedeno (Zowe Explorer squad)
    - Elliot Jalley (Zowe API Squad)
    - Steven Horsman (Zowe Systems - CI/CD squad)
    - Nan nan Li (Zowe documentation squad)
    - TBD (Zowe onboarers squad)

If a TSC voting member is unable to participate in a vote or feels that they are not expert enough in the subject area to cast a vote on a topic, they may delegate that vote to another community member or subject matter expert.

TSC voting members serve for an initial term of one year.  During that year a squad may ask the TSC to have their voting member replaced which will be voted on by the other current TSC voting members and a valid reason should be provided.

The makeup of the TSC for year two will be decided by the current TSC year one voting members.  This is to allow any growing pains, improvements, or deficiencies to be addressed.  Hence succession is not written into this proposal.  There are no terms limits for being a TSC voting member but after one year any current TSC voting members wishing to serve for another year must be selected in a way that is open and transparent to anyone in the Zowe community so their is no favor or incumbent privilege.   

The TSC will determine the frequency and content of its meetings and how it operates through media such as slack or mailing lists.  

The TSC is responsible for recording any votes and their results in a format is is available for everyone to see, such as e-mail threads or github issues.  

TSC meetings must be open to everyone in the community to attend, with the exception of security vulnerabilities in the Zowe product where it is deemed that these are discussed between subject matter experts to resolve without revealing any attack vectors in Zowe that a bad actor may exploit against Zowe installations.  

## Voting

The TSC voting members wil be responsible for 

- Voting on technical matters relating to the code base that affects Zowe components and squads, whether that is in the current codebase or anticipated to be a technical issue that will have a future effect on other components.
- Voting should be unanimous by the members of the TSC and if there are any dissenting votes to a decision, a process of vetting by the TSC is to take place on the reason for the negative vote and a revote be held after the dissenting voting reasons have been presented
- Following one round of voting where a unanimous decision could not be reached the second vote may pass by super majority (for this purpose a super majority is 75%) 
- If super majority cannot be reached the topic being discussed cannot be voted on again in its current form, and the dissenting voters must propose an alternative that may then go to vote.
- If consensus cannot be reached this must be brought to the attention of the TSC.
- At any point anyone on the TSC, whether a voting member or not, can ask for a review of the decision by the ZLC.
- In the case of a disagreement the ZLC voting members have overall decisions responsibility per the ZLC voting rules.  This is meant to be used in exception circumstances and it is hoped and encouraged that the TSC is able to function as an open, transparent, and welcoming place for cross squad actions and coordinated initiatives to be launched and executed from.  

## Responsibilities

The TSC detailed responsibilities will include:

- Negotiate and gain consensus of the priority of cross squad activities with squads (squads retain in-squad backlog prioritization) 
- Set the release cadence for Zowe releases within a program increment.  
- Approve Zowe releases in accordance with defined criteria 
- Advise the ZLC when the Zowe version number needs to be incremented. The timing and execution of this is the responsibility of the Zowe Leadership Committee (ZLC) voting members.  
- Improving efficiencies across the teams and – where possible – load balancing of skills and resources to avoid duplication of effort, and to fill any identified resource gaps to help Zowe meet delivery dates as an integrated team.  This may involve the TSC working with squad leads to help plan sprint backlogs so that as well as new features being worked on, technical debt such as CICD pipeline efficiency and resiliency, documentation deficiencies, test coverage, are addressed.  
- Improve and propagate best-practices across the squads, incubator projects, and Zowe extensions, sourcing ideas from development teams and individuals from inside and outside the Zowe community.  This may involve calling in subject matter experts from the mainframe, the open source, and the wider technical community to be guest presenters at TSC meetings.  
- Oversee GitHub repository policies and administration for the Zowe community to ensure best practices and adherence to OMP policies. The GitHub administration is to follow the rules of any accreditation badges the Zowe community achieves. 
- Establish minimum cross squad policy for the development, build, test, and documentation process for Zowe – this to include acceptance criteria for new source code 
- Encouraging participation and mentorship in wider community events such as hackathons, OMP internships, and providing technical direction to encourage growth of incubator projects
- Appointing representatives to work with other open source or open standards communities as needed.  This includes growing relationship between Zowe and other OMP and Linux Foundation projects.
