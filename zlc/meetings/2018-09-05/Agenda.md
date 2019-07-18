__2018-08-22__

ZLC Members  
[X] Matt Hogstrom  
[X] Bruce Armstrong  
[X] Jean-Philipe  
[X] Sean Grady  
[X] Mark Ackert  
[X] Jean-Louis  (on vacation)  

Observers  
[X] Joe Winchester  
[X] Tim Brooks  
[X] Alvin Tan  
[X] Nick K.  
[X] John Mertic  
[X] Robert Penny

# Items for this week
## Waffle and Zowe - Boards.
Mark demoed this prior to vacation.  An issue came up that people cannot add issues unless they have write access to a repository.  One fix is to allow people actively angaged in the project write access to the ZLC repo until Waffle is updated / enhanced.  Using Git Issues is one way but its kind of a choke point since Waffle is not Git.

  Action:  Discuss adding limited people write access to zlc repo until Waffle is enhanced.
  Owner: Mark Ackert
  Date: TBD
  Add limited users to ZLC

## Discuss open source needs  - Discussion  
 Currently users cannot checkout and build Zowe in their own environment.  This is because some of the dependencies are non EPL-2.0.  Two dependencies are WebSphere Liberty and the other is ZSS.  As a community, what action do we want to take to get the community to an independent answer by first GA.
  Action: Define 
  Owner: Armstrong
  Date: (Update 2 weeks)
  Bruce is working this with other OMs and JDA context so he needs a week or two to outline options.  Bruce will include dev resources as needed
  Default function included in Zowe is dependent on non-EPL 2.0 code.
  Dependencies on other software:
  Node
  ZSS
  Liberty
  SpringBoot
  ESM - Mark working to resolve before GA ... binaries on tut.projectgiza.org
  

## Discuss runtime environments - Discussion  
 Currently Zowe includes Tomcat, Jetty and Liberty for z/OS.  Open Liberty is an option.  To limit packaging size and consistency in deployment it would be ideal to select a consistent set of technology.  
  Action:
  Owner: Armstrong
  Date: (Update 2 weeks)
  Bruce is working this with other OMs and JDA context so he needs a week or two to outline options.  Bruce will include dev resources as needed  
  
## Review Git Issues https://github.com/zowe/zlc/issues

# Actions from last meeting
## The need to set up a commit process with identified approvers.  T
As part of squad formation, teams need to document their review and comimit process for new people to have a sense of how the team operates.  Ideally, the process will be consistent across the teams although there may be slight variations based on team dynamics and code base.  
  Action:  Sean to document overall process and guidelines for teams.
  Owner:  Sean Grady
  Date:  08/29/2018
  Allow teams to create their own branch.  Master would be managed by a small set of core contrinutors and is updated through pull reqeusts.  Initial membership based on people who did most commits in prior giza foundation work.  Add the top two comitters.  If there is a third that can be added based on affiliation for now that would be ideal.  Teams to decide.  Sean Grady to document.
https://github.com/zowe/zlc/issues/14
Suggested to create teams that are general and sub-teams to control


# Parking Lot - Move up if active discussion is needed.
## Metrics of the community (Git Issue #3) - Tim Brooks  (Deferred)  
Examine ways to measure community health.  Tim Brooks suggested an open source tool called Grimoire.  
  Action:  Deferred.
  Owner:  Brooks
  Date:  not defined
    Suggested to look at Grimoire labs

## Do we want to help developers produce a common look-and-feel (Deferred)  
What is the plan for user interface guidelines for Zowe.  Do we provide a common library of widgets with guidance?  This will become more of an issue as App developers begin experimenting.
  Action: Deferred, no new date
  Owner: Sean Grady
  Date:
Do we want to provide reusable implementations of commonly needed features (such as grids, error dialogs, popup windows)
The above mentioned contributions are currently setup to include build output so developers can use the libraries without having to build. The drawback is that copyright/licensing information was being embedded in the build output, and we need to decide what is required for pre-built items from that perspective, then implement any required changes.

## Zowe CLI And APIML Discussions on Open Channels  - C
Zowe CLI and APIML are still pending open source contribution. Legal has approved discussinos on open channels for these products, so long as discussion remains within the domain of donated code. Any issues?  
  Action: Discuss on open channels 
  Owner:  
  Date:  

## What's our approach for deploying build artifacts? - (Deferred)  
Right now we use an artifactory server that is private access, and OMP has a SonarQube repository we could transition towards. What about build deliverables that go to NPM repositories - should we be publishing to the public npm registry (https://registry.npmjs.org/), or a public Maven repository? Any issues publishing to these open channels?  
  Action:  
  Owner:  CI/CD Squad (Mike Maliska)
  Date:  
  
## Planned Donation of VSCode Plugin to Zowe  - (Deferred)  
CA has a plugin for VSCode that allows for exploration of datasets interactively within Visual Studio, using brighside as its engine. We would like to donate this to Zowe / Open Source and publish this to the VSCode Marketplace with Zowe branding. What are the next steps / evaluations for this?  
  Action:  Ackert to get code scanned and allow ZLC members to review code and community
  Owner:  Ackert
  Date:  09/30/2018

## Repository tagging so the project has a consistent tagging / mix of EBCDIC / ASCII  - (Deferred)  
Files are sometimes in ASCII and other times in EBCDIC.  Tagging is not consistent across the repo.  How best to solve this usability issue?  Mandating use of one code page is probably not reasonable.  How about tagging files so they can be autoconverted by the Unix Shell?  
  Action:  
  Owner:  Sean / Jordan
  Date:  

## Extended Community Contribution Guideline Discussions - (Deferred)  
Proposal - "Community" repository containing guidelines for behavior and general best practices. Sub-directories for guidelines specific to language, and contribution guidelines per-repository for project-specific guidelines.  
  Action:  
  Owner:  
  Date:  


# Completed Items from Last meeting - will be removed going forward
## z/OSMF "lite"  T
There has been various discussions about lowering the bar for dependency on z/OSMF until th install issues are resolved.  The community needs to agree on an approach and agree if we want to form a squad to address this issue in lieu of other priorities  
  Action: Joe to advertise the effort and seek interested parties to create z/OSMF "Lite'  
  Owner:  Joe Winchester / Sean / Hogstrom  
  Date:  After Meeting
  
## API Mediation layer  - Complete
A lot of interest in the API mediation layer at Share.  Some community members indicated it was for Zowe use while some customers asked if it could be used for business scale applications.  We need to use consistent goals and capabilities to reduce confusion and set expectations.  
  Action:  Deferred for e-mail discussion
  Owner:  Hogstrom / Ackert
  Date:  
  Update:
  2018-08-29 Matt and Jean-Paul discussed this while at OSS.  His opinion was that mediation in Zowe was focused on an abstraction for Zowe and not intended as a replacement for commercial options.   Are there any objections to this explantion?

## Best approach for others to add agenda items / discussion for upcoming ZLC Meetings.  - Complete
Need to write this down so all community members know how to engage.  Sean Grady proposed Issues.  Shall we move forward twith this approach for now?  
  Action:  Git Issues
  Owner: Hogstrom  
  Date:  

## Access to z/OS instances for those who don't have Z (Git Issue #4) - ydjainopensource  D
This has come up multiple times since Share.  We need to form a plan across the conmitters and hosting org (OMP) on how we bring z/OS to more people.  Current options are ZDT, zOSAAS, Mastering the Mainframe and zTrial.  No option currently fits the needs.  
  Action:  Deferred, e-mail discussion on mailing list / Slack
  Owner:  Mertic / Ackert
  Date:  
  Status: Ongoing, there is some discussion with VCU to host instances for the OMP but that conversation is ongoing.
  IBM created a z-Trial instance for Zowe.  Link from Jax ?

## Automation of the Developer Certificate of Origin flag on commits (-s) - Complete  
What about GPG signing?  Not needed at this time given security around Git.  Recommendation that all members use 2FA
Are the above two considered larger impediments to contribution?  
  Action:  DCO needed for commits
  Owner:  none
  Date:  
  Update:  All commits require DCO.  We did discuss GPG signing of code and recommendation to developers is to use 2FA for security and trust members to manage their credentials.
