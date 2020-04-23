__2018-08-22__

ZLC Members  
[X] Matt Hogstrom  
[X] Bruce Armstrong  
[X] Jean-Philipe  
[X] Sean Grady  
[X] Mark Ackert  
[ ] Jean-Louis  (on vacation)  

Observers  
[X] Joe Winchester  
[X] Tim Brooks  
[ ] Alvin Tan  
[X] Nick K.  
[X] John Mertic  
  
# z/OSMF "lite"  T
There has been various discussions about lowering the bar for dependency on z/OSMF until th install issues are resolved.  The community needs to agree on an approach and agree if we want to form a squad to address this issue in lieu of other priorities  
  Action: Joe to advertise the effort and seek interested parties to create z/OSMF "Lite'  
  Owner:  Joe Winchester / Sean / Hogstrom  
  Date:  After Meeting

# The need to set up a commit process with identified approvers.  T
As part of squad formation, teams need to document their review and comimit process for new people to have a sense of how the team operates.  Ideally, the process will be consistent across the teams although there may be slight variations based on team dynamics and code base.  
  Action:  Sean to document overall process and guidelines for teams.
  Owner:  Sean Grady
  Date:  08/29/2018
  Allow teams to create their own branch.  Master would be managed by a small set of core contrinutors and is updated through pull reqeusts.  Initial membership based on people who did most commits in prior giza foundation work.  Add the top two comitters.  If there is a third that can be added based on affiliation for now that would be ideal.  Teams to decide.  Sean Grady to document.
  
# API Mediation layer  D
A lot of interest in the API mediation layer at Share.  Some community members indicated it was for Zowe use while some customers asked if it could be used for business scale applications.  We need to use consistent goals and capabilities to reduce confusion and set expectations.  
  Action:  Deferred for e-mail discussion
  Owner:  Hogstrom / Ackert
  Date:  
  How do we decide this versus the squad formation?  Squad self determination versus community statement is important to ensure creative innovation. 

# Access to z/OS instances for those who don't have Z (Git Issue #4) - ydjainopensource  D
This has come up multiple times since Share.  We need to form a plan across the conmitters and hosting org (OMP) on how we bring z/OS to more people.  Current options are ZDT, zOSAAS, Mastering the Mainframe and zTrial.  No option currently fits the needs.  
  Action:  Deferred, e-mail discussion on mailing list / Slack
  Owner:  Mertic / Ackert
  Date:  

# Metrics of the community (Git Issue #3) - Tim Brooks  (Deferred)  
Examine ways to measure community health.  Tim Brooks suggested an open source tool called Grimoire.  
  Action:  Deferred.  Suggested to look at Grimoire labs
  Owner:  Brooks
  Date:  not defined
  
# Do we want to help developers produce a common look-and-feel (Deferred)  
What is the plan for user interface guidelines for Zowe.  Do we provide a common library of widgets with guidance?  This will become more of an issue as App developers begin experimenting.
  Action: Deferred, no new date
  Owner: Sean Grady
  Date:
Do we want to provide reusable implementations of commonly needed features (such as grids, error dialogs, popup windows)
The above mentioned contributions are currently setup to include build output so developers can use the libraries without having to build. The drawback is that copyright/licensing information was being embedded in the build output, and we need to decide what is required for pre-built items from that perspective, then implement any required changes.

# Waffle and Zowe - Boards.  (Deferred)  
Socialize a possible integration between Waffle and Rally for CA teams. Any dissenting opinions allowing it?  
  Action:  Mark to demo initial setup for 
  Owner: Mark Ackert
  Date: 08/23/2018 - 1100ET   

# Zowe CLI And APIML Discussions on Open Channels  - C
Zowe CLI and APIML are still pending open source contribution. Legal has approved discussinos on open channels for these products, so long as discussion remains within the domain of donated code. Any issues?  
  Action: Discuss on open channels 
  Owner:  
  Date:  

# Best approach for others to add agenda items / discussion for upcoming ZLC Meetings.  - Complete
Need to write this down so all community members know how to engage.  Sean Grady proposed Issues.  Shall we move forward twith this approach for now?  
  Action:  Git Issues
  Owner: Hogstrom  
  Date:  

# What's our approach for deploying build artifacts? - (Deferred)  
Right now we use an artifactory server that is private access, and OMP has a SonarQube repository we could transition towards. What about build deliverables that go to NPM repositories - should we be publishing to the public npm registry (https://registry.npmjs.org/), or a public Maven repository? Any issues publishing to these open channels?  
  Action:  
  Owner:  CI/CD Squad (Mike Maliska)
  Date:  

# Automation of the Developer Certificate of Origin flag on commits (-s) - (Deferred)  
Brief refresh - why don't we use a CLA?  - __Complete__
What about GPG signing?  Not needed at this time given security around Git.  Recommendation that all members use 2FA
Are the above two considered larger impediments to contribution?  
  Action:  Setup a session on GPG Key signing for release activities.
  Owner:  Hogstrom (how to sign) ... is it needed for commit (Sean / Hogstrom)
  Date:  End of September
  
# Planned Donation of VSCode Plugin to Zowe  - (Deferred)  
CA has a plugin for VSCode that allows for exploration of datasets interactively within Visual Studio, using brighside as its engine. We would like to donate this to Zowe / Open Source and publish this to the VSCode Marketplace with Zowe branding. What are the next steps / evaluations for this?  
  Action:  Ackert to get code scanned and allow ZLC members to review code and community
  Owner:  Ackert
  Date:  09/30/2018

# Repository tagging so the project has a consistent tagging / mix of EBCDIC / ASCII  - (Deferred)  
Files are sometimes in ASCII and other times in EBCDIC.  Tagging is not consistent across the repo.  How best to solve this usability issue?  Mandating use of one code page is probably not reasonable.  How about tagging files so they can be autoconverted by the Unix Shell?  
  Action:  
  Owner:  Sean / Jordan
  Date:  

# Extended Community Contribution Guideline Discussions - (Deferred)  
Proposal - "Community" repository containing guidelines for behavior and general best practices. Sub-directories for guidelines specific to language, and contribution guidelines per-repository for project-specific guidelines.  
  Action:  
  Owner:  
  Date:  

# Discuss runtime environments - (Deferred)  
 Currently Zowe includes Tomcat, Jetty and Liberty for z/OS.  Open Liberty is an option.  To limit packaging size and consistency in deployment it would be ideal to select a consistent set of technology.  
  Action:
  Owner: Armstrong
  Date: (Update 2 weeks)
  Bruce is working this with other OMs and JDA context so he needs a week or two to outline options.  Bruce will include dev resources as needed  
  
# Share was a successful Launch - (Complete)  
Over-all, the launch at Share was very well received and we are seeing activity across multiple venues.  Customers are downloading and installing (and opening Git Issues), ISVs have been joinging the community Slack and e-mail lists and there is an elevated level of interest in Zowe.  Well done everyone.  
  Action:  
  Owner:  
  Date:  
