# Zowe Technical Steering Committee Charter

The Open Mainframe Project zowe.org is part of the Linux Foundation which operates transparently, openly, collaboratively and ethically.  

- [Background](#backgroud)
- [Manifesto](#manifesto)
- [Makup](#makeup)
  - [Voting Members](#voting-members)
  - [Operation](#operation)
- [Voting Member Responsibilities](#voting-member-responsibilities)

This proposal is to form a Zowe Technical Steering Committee (TSC) to oversee, govern, and improve the infrastructure, execution, and customer experience related to development, testing, packaging, delivery, and cross-squad technology overlap areas.  

## Background

When Zowe was first created different technology from different codebase combined and was stewarded by individual squads who oversaw each component.  Each squad was responsible for tracking and planning the backlog of items for their component.

As Zowe has grown, coordination between squads has grown, resulting in a common installer for z/OS components, and more recently features such as Sign Sign On (SSO), MultiFactor Authentication (MFA) and client-side certificates have required technical and delivery coordination between the different components. These capabilities have enhanced Zowe’s value to the community.  It is anticipated this vector of integration will continue in the future with high availability (HA), containerization, improved security and other cross component features.  

The coordination and synchronization of the moving parts of Zowe is becoming more central to successful delivery of features and for this reason the Zowe Leadership Committee (ZLC) taking leadership guidance from other successful Linux Foundation projects is proposing the creation a Technical Steering Committee (TSC).

## Manifesto

The TSC will oversee the technical direction of the Zowe project.

Responsibilities include, but are not limited to

- Setting release dates.
- Release quality standards.
- Technical direction.
- Project governance and process (including this policy).
- GitHub repository hosting.
- Conduct guidelines.
- Maintaining the list of committers.
- Development process and any coding standards.
- Approving releases.
- Advising the ZLC when the Zowe version number needs to be incremented
- Improve cross squad efficiencies and load balancing of squad resource
- Test cover and release reliability
- Balance squads between technical debt versus new content delivery
- Improve and propogate best-practices
- Encourage and mentor incubator projects
- Encourage participation and mentorship in wider community events such as hackathons or OMP internships
- Appointing representatives to work with other open source or open standards communities as needed

## Makeup

The TSC will be made up of voting members, as well as other architects, subject matter experts, and members of the extended Zowe community.  The makeup of TSC meetings will vary depending on the agenda and topics being discussed so elements of the TSC are fluid.  

The TSC has a core group of voting members who are resonsible for actioning and recording votes on issues regarding Zowe releses, Zowe priorities for cross squad work items, and topics surrounding technical direction.  

### Voting Members

At the formation of the TSC the voting members include the three technical members of the Zowe Leadership Committee (ZLC)
- Joe Winchester
- Sean Grady
- Mark Ackert

The TSO also includes one member from each of the Zowe squads.  Initially this role is given to be the current squad lead, however each squad may decide to nominate anyone else who is a current squad member.  Where the squad lead is also one of the ZLC technical voting members this position should be filled by another squad SME.
- TBD - (Zowe App Framework/Desktop squad)
- Mike Bauer (Zowe CLI Squad)
- Fernando Rijo Cedeno (Zowe Explorer squad)
- Elliot Jalley (Zowe API Squad)
- TBD (Zowe Systems - CI/CD squad)
- Brandon Jenkins (Zowe documentation squad)
- TBD (Zowe onboarding squad)

If a TSC voting member is unable to participate in a vote or feels that they are not expert enough in the subject area to cast a vote on a topic, they may delegate that vote to another community member or subject matter expert.

TSC voting members serve for an initial term of one year.  During that year a squad may ask the TSC to have their voting member replaced which will be voted on by the other current TSC voting members and a valid reason should be provided.

The makeup of the TSC for year two will be decided by the current TSC year one voting members.  This is to allow any growing pains, improvements, or deficiencies to be addressed.  Hence succession is not written into this proposal.  There are no terms limits for being a TSC voting member but after one year any current TSC voting members wishing to serve for another year must be selected in a way that is open and transparent to anyone in the Zowe community so their is no favor or incumbent privilege.   

To be a successful TSC it is desired that no more than one-third of the TSC members may be affiliated with the same employer.  However for the first year of the TSC because of the relative age and diversity of the Zowe community this is relaxed so that no more than one-half of the TSC members may be affiliated with the same employer.  This criteria may be changed for the second year of the TSC and will be voted on by the ZLC.  

### Operation

The TSC will elect a chair person (who does not need to be a TSC voting member) who will be responsible for organizing and conducting meetings, and coordinating responses to any voting issues.  The TSC will determine the frequency and content of its meetings and how it operates through media such as slack or mailing lists.  It is encouraged to use tools that enable participation by the community.

The TSC is responsible for recording any votes and their results in a format is is available for everyone to see, such as e-mail threads or github issues.  

TSC meetings must be open to everyone in the community to attend, with the exception of security vulnerabilities in the Zowe product where it is deemed that these are discussed between subject matter experts to resolve without revealing any attack vectors in Zowe that a bad actor may exploit against Zowe installations. 

TSC members are expected to regularly participate in TSC activities.  A TSC voting member by voluntarily resign in which case the squad through which the voting member was elected will be responsible for providing a new voting member.  TSC members are expected to regularly participate in TSC activities and if amy member feels that they are unable to fulfill their responsibilities, or if the remaining TSC voting members feel that a voting member is not fulfilling their responsibilities, the TSC and the member are encouraged to resolve the issue in a respectful way that honors privacy and sensitivity of everyone.  Dispute resolution should be brought to the ZLC.  

## Voting member responsibilities

The TSC voting members wil be responsible for 

- Voting on technical matters relating to the code base that affects Zowe components and squads, whether that is in the current codebase or anticipated to be a technical issue that will have a future effect on other components.
- Voting should be unanimous by the members of the TSC and if there are any dissenting votes to a decision, a process of vetting by the TSC is to take place on the reason for the negative vote and a revote be held after the dissenting voting reasons have been presented
- Following one round of voting where a unanimous decision could not be reached the second vote may pass by super majority (for this purpose a super majority is 75%) 
- If super majority cannot be reached the topic being discussed cannot be voted on again in its current form, and the dissenting voters must propose an alternative that may then go to vote.
- If consensus cannot be reached this must be brought to the attention of the TSC.
- At any point anyone on the TSC, whether a voting member or not, can ask for a review of the decision by the ZLC.
- In the case of a disagreement the ZLC voting members have overall decisions responsibility per the ZLC voting rules.  This is meant to be used in exception circumstances and it is hoped and encouraged that the TSC is able to function as an open, transparent, and welcoming place for cross squad actions and coordinated initiatives to be launched and executed from.  
- Notwithstanding the above, the TSC should always follow a consensus seeking decision making model and always favor open source goals and community collaboration versus any vendor specific direction, whether for or against, see [Consensus Seeking](http://en.wikipedia.org/wiki/Consensus-seeking_decision-making).
