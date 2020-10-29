# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------
[Schedule and Sprint Cadence](https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md)

Meeting Recordings for Architecture Call and System Demos
-----------------
https://github.com/zowe/community/tree/master/Project%20Management

Agenda Items
------------
1. Start Recording
2. ZLC Updates
3. Current Release and Build Status (Steve)
4. Plan
     - Discuss Zowe v1.17.0
     - Discuss Proposed [21PI1 Schedule](https://ibm.ent.box.com/file/735204735301)
5. Squad Status:
    - Onboarding (JoeW/Rose)
    - Core/Web/Editor (JPL/Nolan/James)
      - Fixing sorting on Ztop
      - Adding right click button column Ztop
      - Adding a settings menu Ztop
    - API Mediation Layer & Security (Elliot)  
    - Performance & High Availability (HA) (Jack)
      - Finalized package manifest format related to HA. Had detail discussion on other part of manifest. This may clear some blockers we have on Zowe Launcher implementation.
      - Built Caching API first version which supports storing state data in memory. (APIML)
      - PR of creating VSAM data set is almost ready for review.
      - Added new instance.env variable ZWE_DISCOVERY_SERVICES_LIST. (Steve)
      - Designed detail plan for separating internal/external certificate for communication. (APIML).
      - Continue working on verifying z/OSMF HA deployment. (Nayer)
      - Built and published performance test metrics server docker image.
      - Enhance the performance test client framework to support testing multiple URLs in parallel.
    - Documentation (Brandon/Ashley/Jim/Jason)

6. Legal Requirements
    - None

7. Community Backlog
    - TBD
8. Roundtable
    - None

Action Items
------------
- None
