__2019-05-15__

**ZLC Members**   
[ ] Matt Hogstrom  - unavailable   
[X] Bruce Armstrong   
[X] Jean-Philipe   
[X] Sean Grady   
[X] Mark Ackert   
[X] Jean-Louis

**Participants**
[X] Nick Kocsis   
[X] Alvin Tan   
[X] Nolan Rogers   
[X] Tim Brooks   
[X] Steve Horsman   
[X] Rose Sakach   
  
## Recording can be found here:  
https://zoom.us/recording/share/JQpQA-2gVWvVygJELUg6eSpTx8rFJ0BgA7jV9lNQo5uwIumekTziMw?startTime=1557925287000


[Review updated process documents and make corrections this week](https://github.com/zowe/zlc/tree/20190418-process-updates)

Action for all ZLC members to have the conversation in the issue.  Review to continue at the ZLC next week.

5/15 comments:
- not sure what exactly have changed , can’t really comment on it 
- John added a number of changes 
- one major change on ZLC composition – 6 members , elected for 2 years, 3 elected max annually, election month of June or July (see: https://github.com/zowe/zlc/blob/20190418-process-updates/process/structure.md)
Common understanding is we should identify which 3 individuals should be up for renewal this year and vote for those 3, that also implies these 3 would only be in the ZLC for 1 year since this is the first year of Zowe and we started with 6, perhaps one from each company but we should make sure everyone is OK with that (reminder that these 3 up for renewal can be re-elected again)
- F2F meeting in early Aug would be a good time to organize this vote
- wordings  seem to indicate that the ZLC members should be a committer of the a Zowe sub project

- zlc members must be code committer??
- 3 outgoing after only 1 year?
- who's voting? Current process dictates only committers are able to vote, i.e. mostly folks from our own orgs, not many committers outside at the moment
- Matt is the de facto “ZLC lead” , is this position up for voting?  This is the “project maintainer” role, voted b y ZLC members

Actions:
-	Clarify that ZLC members do not necessarily have to be code committers as per current description in the Composition section
-	Clarify if everyone is OK with identifying 3 ZLC members to be up for renewal, possibly only after serving for 1 term unless re-elected
-	Need to kick off the Election process now if we plan to have the vote at the Aug F2F
-	Confirm if project maintainer role (i.e. the ZLC Lead) currently held by Matt is up for election as well , proposal is for the ZLC to vote for the maintainer after the new ZLC members are voted in this year
-	Propose to have all ZLC members in attendance next week to vote on the above clarifications

Second change is on the release approval procedure
-	https://github.com/zowe/zlc/blob/20190418-process-updates/process/release.md
-	See last paragraph of the “Release Approval Procedure” section
-	Confusion around whether all releases regardless of the changes will require a vote , or other if there are new enhancements (e.g. 1.2.0 vs 1.2.1)
-	We should think about CI/CD where small incremental enhancements are expected
-	Current Major-Minor-Patch approach seems more “waterfall-ish” than CI/CD
-	We should agree that we will always have small incremental features in every releases
-	One observation is that we don’t currently know what to expect going into a milestone whether we will have enhancements and/or bug fixes 
-	One way of handling a CI/CD scheme is to disable all new functions by default
-	Should we be thinking and moving towards a more CI/CD scheme?
-	We are somewhere in the middle, not sure if the mainframe community has necessarily fully transitioned embrace full CI/CD?
-	2 well known approaches – LTSR vs disabling new functions by default in a CI/CD scheme
-	Do we need a longer Release Candidate cycle?  Currently its only a few days, prefer to have external adopters picking up RC candidates, try and give us feedback before we decide if it should be released 
-	Release checklist and shut down process need to be clarified but they shouldn’t be bounded by what each of the 3 companies needs to do but rather at the repository level, moving fwd , we expect to have more than the 3 companies on this project
-	Also be aware that there is the on-going Enterprise Package (SMP/e) work going on , the versioning of the PTFs might have an impact on the versioning scheme as well
-	Branching strategy discussion, Zowe is made up of multiple components that could be following a different versioning scheme than the Zowe package itself; the enterprise package could also follow a different versioning scheme as well
-	At this point, we are not sure yet how the pax file would map to the SMP/e package versioning
-	Suggestion is to have all ZLC members to close on the open questions and issues (), stay with current process for now, ZLC will vote on all releases, plan to incorporate the proposal from the enterprise packaging work

  
[Turn on "Require two-factor authentication for everyone in the Zowe organization." #96](https://github.com/zowe/zlc/issues/96)  
Action: ZLC members to review 2FA and discuss in issue.  
Question, do we have a means to verify this audit requirement?

-	We need to understand what type of 2FA this is
-	How intrusive is this?  vs benefits 
-	GitHub’s 2FA is limiting
-	Is this even necessary?
-	John has been doing some auditing (e.g. missing meeting minutes, DCOs)
-	Action: we need John to help us understand this requirement, help recommend which app we should be using 

  
[Address missing DCO signoffs #95](https://github.com/zowe/zlc/issues/95)  
@jmertic to send out missing DCOs.   
Is this completed?

-	John is following up on that
-	This process has to be turned on now, everyone will be prompted to complete the DCO process
-	Clunky, system don’t work very well, any tooling to improve the process?
-	The best tool we are aware of is thru “GitHub serverside checking“ but its only available for GitHub enterprise, not public GitHub
-	Any best practices from other LF/OMP projects on this?

  
[Zowe "vNext" release validation agenda #92](https://github.com/zowe/zlc/issues/92)  
Updates @MarkAckert ?  
  
-	Mark has a PR out, linked to 92
-	Proposal is similar to Node.js that has an LTS version and a current version
-	LTS – fixes, current – latest features and changes
-	LTS will be selected by default, users have the options to select one or the other
-	The other work is to support additional versions of Zowe and the doc site
-	We need TPSR attributions and BOMs, plus any other license agreement 
-	Do we know if we are going to have a beta or a tech preview for Zowe vNext ?  Yes -the CLI would like to have a 2.x alpha , we might consider this for the SMP/e changes but we need to decide if the SMP/e work will stay on 1.x or move to 2.x
-	1.x is already an LTS , when 2.x goes live, it would be in alpha , beta , and when 3.x comes along, both 2.x and 1.x would effectively become LTS
-	Do we know how long will 1.x be supported , do we know today?  No, need community discussion
-	At this point in the project, we want to be able to support all of the releases until we get a cadence that identifies the different types of releases 
-	We don’t want to change the version number too quickly, we know of a set of breaking changes that are being planned, we need to coordinate that and do them all at once by the agreed upon date
-	Should we plan to discuss the theme for our 2.x release at the F2F in Aug as well?
-	Tim will follow up offline to add some of these topics to the agenda for the f2f  
  
  
[Zowe- Automated New Feature Notifier #91](https://github.com/zowe/zlc/issues/91)  
  
[Common Logging Format for Zowe Services #90](https://github.com/zowe/zlc/issues/90)  
@Winchester can you move tis to the architecture repo ?

[Post-1.0.0 Versioning & Release updates #72](https://github.com/zowe/zlc/issues/72)
  
[Zowe Conformance Program in progress onboarding #52](https://github.com/zowe/zlc/issues/52)
  
[Zowe - Automated License Scanning to do](https://github.com/zowe/zlc/issues/42)  
  
[Process - Project Planning (PI Planning](https://github.com/zowe/zlc/issues/40)  

### Discussion


### Actions  

### Post 1.0 Activities  

### Closed Issues
