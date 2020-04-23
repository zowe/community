# ZLC Agenda - 08-01 - Interlock with OMP actions
### Attendance

<ins>**ZLC Members**</ins>

- [X] Bruce Armstrong

- [X] Jean Louis

- [ ] Jean-Paul 

- [X] Mark Ackert

- [X] Matt Hogstrom

- [X] Joe Devlin

- [ ] Sean Grady



<ins>**Interested Parties**</ins>

- [X] Alvin Tan

- [X] Jax Shawley

- [X] John Mertic

- [X] Nick Kocsis

- [X] Tim Brooks



## Add your items here for tomorrow's meeting.  



### Agreements from last week's meeting

Communication - encourage people to use Slack for interaction.  Votes and project decisions need to be communicated by e-mail.  Preferably to [zowe-dev@lists.openmainframeproject.org](mailto:zowe-dev@lists.openmainframeproject.org)







### Completed Items this week

New members added to /zowe organization (see list below)

Documentation Team created



### Discussion Items

* Discuss Sharing of information from Box to Git - https://github.com/zowe/

   * ZLC Minutes https://github.com/zowe/zlc/minutes

   * Creating https://github.com/zlc-private  Will be accessible only by ZLC members.  Confidential information like credentials for Zoom, or other sensitive information can be stored here.

      * Wiki Git

* Slack Communication - openmainframproject.slack.com

* Moving people from the gizafoundation to zowe.  Applied the following criteria.  Users with commits in the last 30-days (not counting joining the foundation).  The assumption is that others required read-only access to the private repo which everyone will have in the new repo.

* Site Plan [https://ibm.box.com/s/xcxk3b2s4vf5ymi8y0by3nvctesfjk8t](https://ibm.box.com/s/xcxk3b2s4vf5ymi8y0by3nvctesfjk8t)

   * Group to review

* Proposed Documentation site created based on https://pages.github.io.  [https://zowe.github.io/docs-site/](https://zowe.github.io/docs-site/)  Source is here: [https://github.com/zowe/docs-site](https://github.com/zowe/docs-site)

   * Group to review

* Presentation of Zowe to the TSC on Thursday - **John** , please confirm its every second Thursday  

   * Agenda for all TSC meetings at [https://github.com/openmainframeproject/tsc/blob/master/README.md#agenda-for-next-meeting](https://github.com/openmainframeproject/tsc/blob/master/README.md#agenda-for-next-meeting)

   * TSC meetings are open to entire community!

* Suggest creation of a **release-management** repo for Alvin, Nick and others that are coordinating releases and activities.  Ok to create

* Move of repositories - Process needs to be documented.  @Sean had taken this action but is on vacation.  Volunteers ? Joe to talk to Sean - goal is to have source moved by Wed 8/8

* Repository move - Giza -> zowe by 8/14.  Outstanding issue of pipeline transition to zowe.  

   * z/OS instance for OMP

   * Proprietary License resolution

   * Build pipeline to be based on EPL 2.0 or compatible licenses

   * Open Beta-Build out by 8/14

   * IBM will assess moving Atlas repos to zowe this week.

* Zowe CLI

   * Zowe CLI Command name (Currently "bright")

      * Proposal: We want to ensure inter-operability of scripts for users of brightside as well as Zowe CLI, without extra steps to setup aliasing in shell / prompt. Therefore, the command name should stay consistent. 

      * 8/14 timeframe discussion; December release timeline discussion

   * Zowe CLI Install Commands (Currently "npm set @brightside:registry https://bintray.com/ca/brightside")

      * Proposal: Zowe CLI should have it's own deliverable installed to an NPM Repository separate from CA's distribution of brightside. Timeline TBD. The bundle we ship for Zowe should use the Zowe CLI artifact distributions as their basis, rather than Brightside artifacts.

      * 8/14 vs December timeline - Bruce and Mark to talk to Sujay

   * Related note - where do we publish all of our binaries for consumption before they are packaged into PAX format? Public NPM + Maven repositories?

* API Mediation in Open Beta

   * Intent to deliver this as it's currently in the PAX, however, it is not yet being leveraged by zLux/Atlas. 

   * Samples and extender documentation do exist (working on getting these ready for 8/14)

   * Any issue with releasing Open Beta with API Mediation in this state?



**New Users created**

Adam Battenberg - abattenberg

Christopher Wright - AHumanFromCA

[Alexander Mikhailov](https://github.com/AlexanderMikhailovAtRocket) - AlexanderMikhailovAtRocket

Alex Derbas - [alexderbas](https://github.com/alexderbas)

[alvin-tan](https://github.com/alvin-tan) alvin-tan

[barnstoneh](https://github.com/barnstoneh) - Affiliation: Rocket

[BrandonJenkins14](https://github.com/BrandonJenkins14)

[chentingcathy](https://github.com/chentingcathy)

[Michael Colavita](https://github.com/colavitam) - colavitam

[Colin Stone](https://github.com/Colin-Stone) - Colin-Stone

[cZikos](https://github.com/cZikos)

[daveking999](https://github.com/daveking999)

[Denis Glebov](https://github.com/DenisGlebov)

[Leanid Astrakou](https://github.com/DivergentEuropeans) - DivergentEuropeans

[Dan Kelosky](https://github.com/dkelosky) - dkelosky - Affiliation: CA

[Chris Boehm](https://github.com/dogboydog) - dogboydog - Affiliation: CA

[dprizentsov](https://github.com/dprizentsov) - Affiliation: CA

[eamondawes](https://github.com/eamondawes) - Affiliation: Rocket

[EvgenyPavluk](https://github.com/EvgenyPavluk) - Affiliation: Rocket

[Fyodor Kovin](https://github.com/fkovinAtRocket) - Affiliation: Rocket

[Gene Johnston](https://github.com/gejohnston) gejohnston - Affiliation: CA

[giza-jenkins](https://github.com/giza-jenkins) - Affiliation: IBM

[Jack \(T.\) Jia](https://github.com/jackjia-ibm) - jackjia-ibm - Affiliation: IBM





**Skipped**

[Pam Alugupalli](https://github.com/alupa01) - alupa01 (only 2 commits in February)

[Angelique](https://github.com/Anisa9514) - Anisa9514 (No activity)

[aprashant1](https://github.com/aprashant1) - (No Activity)

[archanaAtRocket](https://github.com/archanaAtRocket) - (No Activity) Affiliation: Rocket

[ariknny](https://github.com/ariknny) - (No Activity) Affiliation: Rocket

[Bemeverett71](https://github.com/Bemeverett71) - (No Activity)

benro02 - Bob Bennet (No Activity)

[Bimal Kumar Jha](https://github.com/bimalkjha) - bimalkjha  (No Activity)

[BillieJean](https://github.com/bjsimmons606) - bjsimmons606 (No Activity)

[bscheid](https://github.com/bscheid) - BJ Scheid (No Activity) Affiliation: IBM

[caBecky](https://github.com/caBecky) - (No Activity) Affiliation: CA

[Charles Winston](https://github.com/charlesrwinston) - charlesrwinston (No Activity)

[charlottedeiss](https://github.com/charlottedeiss) - (No Activity)

[Chris Canal](https://github.com/chriscanal) - chriscanal (No Activity) Affiliation: Rocket

[Colin Maxfield](https://github.com/colingm) - colingm (No Activity) Affiliation: IBM

[dankox](https://github.com/dankox) - (No Activity)

dhirajbhatt - (No Activity)

[dingmin0313](https://github.com/dingmin0313) - (No Activity) Affiliation: IBM

[dmitrynikolaev](https://github.com/dmitrynikolaev) - (No Activity)

[Douglas K Healy](https://github.com/douglaskhealy) - douglaskhealy - (No Activity)

[Laura B Branton](https://github.com/dunla01) - dunla01 - (No Activity)

[Felicia Fong](https://github.com/f-fong) - f-fong - (No Activity)

[John Fishbourne](https://github.com/fisjo04) - (No Activity) Affiliation: CA

[gmackinnon](https://github.com/gmackinnon) - (No Activity) Affiliation: CA

[HannaSivazhalezava](https://github.com/HannaSivazhalezava) - (No Activity) Affiliation: Rocket

[Irek Fakhrutdinov](https://github.com/ifakhrutdinov) - ifakhrutdinov - Affiliation: Rocket



















=========  OLD Stuff Below, harvest and bring above the line.  Matt cleaning up this afternoon =========

Purpose of ZLC

* **What we do**

* Protect the OMP and Zowe project in terms of reputation, IP clearance and promote the brand

* Deliver updates to the TSC and Board on Releases, community and activities (TSC meeting calendar - John (13:00 Thursday)

* Work with non-technical aspects of the project like marketing, branding, etc.

* Vote new committers based on community recommendations / feedback (e-mail discussion)

* Votes on source release - Define release management process defined - Alvin

* **What we can do**

* Release management and planning (although Matt's preference is to drive that through Dev and Community

* **Community Roles**

* Release Manager

* ZLC retirement process 



TSC Voting member - Chair of ZLC



### Priority | ### Action  | ### Description | ### Comments
--- | --- | --- | ---
High  | Creation of OMP Github  | * Decide which source to copy to the OMP's Github from the consortium's github with appropriate EPL 2.0 licensing* Since binary code should not be copied over, how will we handle it ? | Need github location and appropriate linkage with marketing web page to allow download. E-mail to John from all ZLC members with github ID and e-mail
High  | Establish mailing list subscription process and needed distribution lists.  | - Public needs easy to use email subscription process for staying formed, contributing, etc. - Zowe squads need public  process for communication. - Zowe leadership needs private process for communication. - Also need ability to archive and search emailsNeed to add moderators | In search of best practices for email (or other) process: possible distribution lists: * dev@ - release coordination open to everyone (start with dev@ and expand if needed)* zlc-private@ - zlc only communication ok* zlc@ - zlc public communication ok* user@ - consumers of Zowe ok@Sean - use Slack or e-mail, not both@Jean - e-mail better for traveling@Bruce - Slack first, e-mail second+ Can Slack send a channel digest each day ?Voting done by e-mailSlack for general discourse - No objections
High for committers and leadership Medium for pubic (email instead) Establishment of slack channels Slack channels per squad, leadership, public news sharingQuestion of role of Slack vs email  Slack will be community comms.Users can self registerSlack administration - John / TimMedium Definition of Webex (or similar) live meeting tool   Zoom is tool of choiceAssumption is live meetings are rare but important since will involve world wide participants.   - Question on how to record live meetings, make recordings, archive and document proceedings? Meetings should be placed in a folder called minutes.  Each sub-folder should have a date yyyy-mm-dd-meetingTopic Use Zoom for meetings.HighNew Squad FormationsZLC to establish when we shift to the community model and establish any cross-squad standardsScrum masters schedule the kick-off?Project Owners manage the backlog and act as the ZLC liaisons?Medium Squad "roadmaps" (backlogs of dev activity) Need a way for public to see planned items for development - waffle.io? Low (for now) OMP build pipelineNeed z/OS system(s) and dev pipeline for building of Zowe Current consortium build process still work in progress before ready to turn over to OMP HighPath to convert to EPL 2.0 is unclearProcess to handle non-EPL compatible Tim Brooks working to resolve |  |  |
 |  |  |
 |  |  |
 |  |  |
 |  |  |
 |  |  |
 |  |  |
1. Proposed launch content 

   1. Documentation - how to info 

   1. Command line foundation source (aka code name Imperative) 

   1. Web User Interface (code name zLux) 

   1. z/OS REST APIs extensions (code name Atlas) 

   1. API Mediation layer 

1. zowe.org domain name already reserved  

1. Additional considerations 

   1. ZLC Operation and Governance 

   1. FAQs (fairly dynamic)

   1. Newsfeed - Build updates, delivery train, etc.  (dynamic technical content) 

   1. Coding guidelines (mostly static but a community activity, not an OMP activity

   1. Mailing lists (mostly static) 

   1. Issue tracking

   1. Joining the community

   1. Sponsorship

   1. Thanks

   1. Bylaws

   1. Committer criteria

   1. License Information

   1. Documentation for the project

   1. Related projects and activities

   1. About us Page

   1. Releases

   1. Release Versioning

   1. Security Information 
