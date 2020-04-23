__2018-11-21__

**ZLC Members**  
[X] Matt Hogstrom
[X] Bruce Armstrong  
[X] Jean-Philipe  
[ ] Sean Grady  
[X] Mark Ackert  
[X] Jean-Louis  
  
**Participants**  
[X] Joe Winchester
[X] Tim Brooks  
[X] Alvin Tan  
[X] Nick Kocsis  
[ ] John Mertic  - vacation
[ ] Kyle Woodworth  
[ ] Michael Supak  
[ ] Petr Plajanik  
[ ] Robert Penny  
[ ] John Davies  
[ ] Rob Scott  
[ ] Jordan Cain  
[ ] Jax Shawley  
[X] Simone Gregg
[X] Kimberly Andersson
  
## Recording can be found here:  
The meeting was not recorded.  Minutes below reflect the context of the meeting.

## Issues to be discussed on 11-21-2018

### Vote on these to move forward and close
Clarify Zowe release 1.0 date to officially be Tuesday January 22, 2019.  Reasons for the move are to allow time for better integration, improved security features, better external positioning post 2018 which has low visibility due to the holidays.

Two issues outstanding issues:  
* The new license is intended for the Rocket WebSite.  Rocket intends to allow Zowe to incorporate the ZSS without granting redistribution rights to downstream consumers.

Jean-Louis: Other consumers cannot currently build on top of Zowe because of this limitation.  Rocket is actively open sourcing the ZSS and are optimistic that they will have code in December but cannot guarantee that date.  Jean-Louis believes that we should defer the date until we have the ZSS.  
Action: JP to update the ZLC on Rocket's activities and outlook for an open source ZSS.

* Zowe does not have a way to distribute ZSS based on current license.
JP indicated it was the intent to allow OMP / Zowe to distribute ZSS but that the project would need to include a LICNESE file that outlined restrictions and pointed consumers to Rocket's website.

**Actions**  
Both updates are being looked at for 12/5/2018 from JP.

@Tbr00sky needs to confirm what the impacts would be for 1.0 and does the OMP have redistribution permissoin of ZSS ?  What new LICENSE / doc needs to be included.  
  
Alvin, what is the default expectation and support scenarios.  

Three issues, support, redistribution and source code availability

Customers are expecting API compliance, support, etc.  The ZLC and sub-projects need to stress backwards compatibility.  

Jean-Louis indicated that Brightside is not a CA Trademark.  All to review the current use of Brightside to see if there are any issues.  

The next build (0.9.4).  Nick, it is targetted for the 12/5.  

### Discuss
Review https://github.com/zowe/zlc/blob/release-guidance/process/ReleaseProcess.md and verify this meets the release expectations by the ZLC.  Pleae provide discussion notes in this Agenda for reference.

[Remove dependencies on non-EPL 2.0 Code bases in progress](https://github.com/zowe/zlc/issues/17)  
CA - all proprietary dependencies removed   
IBM - Explorer   

[EPL-2.0 Component for ZSS enhancement to do](https://github.com/zowe/zlc/issues/26)  
This is the current proposal for ZSS, still under discussion.  
  For ZSS, Rocket will host ZSS on their website with Rocket terms and conditions  
  Zowe would not ship the ZSS component and would need to go to Rocket  
  There are no redistribution rights for downstream consumers  
  Perpetual free use with no support  
  
[Review @brightside usages for GA to do](https://github.com/zowe/zlc/issues/28) 
  1. CA followed up and does not own a trademark on the term 'brightside'. 
  2. Does the lack of a trademark change the ZLC's long term view of the usage of the term 'brightside' ?

### Updates    
[Achieve CII Best Practices badge in progress](https://github.com/zowe/zlc/issues/38)  
Mark getting the other projects to integrate with SonarQube for all requirements  

[Investigate Code Analysis Tools in progress](https://github.com/zowe/zlc/issues/46)  
  
[Zowe Docker Hub in progress](https://github.com/zowe/zlc/issues/45)  
Leave open until Docker images are in nexus  
  
["Built on Zowe" Website section](https://github.com/zowe/zlc/issues/41)  
Targetted for the 0.9.4 release  
  
[Zowe GA 1.0.0 Goals](https://github.com/zowe/zlc/issues/37)  
 - Added Tim Brooks and asked him to update this issue with the 1.0 items that have been discussed.  
 - Proposal to release 1.0 in January (last Tuesday) to allow more time for integration, performance and testing.  
  
[Agenda update for 09-05 zLC meeting](https://github.com/zowe/zlc/issues/18)  
Close  

[Zowe Conformance Program](https://github.com/zowe/zlc/issues/52)  -   
Meeting held on 2018/11/26 to discuss conformance.  @Tbr00sky drafting initial set of capability.
  
[Review @brightside usages for GA to do](https://github.com/zowe/zlc/issues/28) - Update from John on progress  
  1.  Mandate if the work needs to be completed  
  2.  If (1) passes vote, then declare a timeframe for completion. 1.0.0 or can it be pushed after 1.0.0?  
  3.  CA Technologies still owns the trademark on Brightside.  
  Next step: John to engage LF legal and then work with contributoer legal departments to get consensus.  Update at next ZLC 12-3-2018  
  
### Actions  
 
### Post 1.0 Activities  
[Process - Project Planning (PI Planning)](https://github.com/zowe/zlc/issues/40)  
[Open Source Development Metrics](https://github.com/zowe/zlc/issues/3)  
