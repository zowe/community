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
2. TSC Updates (Jakub)
     - Schedule changes
     - Community ZenHub board - https://app.zenhub.com/workspaces/community-5c93e02fa70b456d35b8f0ed/board?repos=155383451,145870120,162463317,143049506,144619729,152270012,300586575,150100207,176523400,141316148,144599701,144600062,151615191,151624320,168378275,144592776,144595426,166097436
3. Current Release and Build Status (Tom/Jack)
4. Plan
     - Discuss Zowe v1.20.0
5. Squad Status:
    - Onboarding (Rose)
     - We are considering changing our weekly meeting start time to 12:00 ET and
     - We are progressing on Dynamic Statistics Gathering and (3) The Zowe.ORG web page changes are close to being finalized for implementation.

    - Core/Web/Editor (Nolan/James/Lenny)
      - Making app server & zsshave components manifest file
      - Adding C library for reading YAML
      - Allow current working directory to be configurable for App server
    - API Mediation Layer & Security (Elliot)
    - CLI (MikeB)
    - Performance & High Availability (HA) (Jack)
      - Investigate and fix several issues related to the changes on configuring and starting Zowe
        * chmod warnings showing in STDERR job log
        * reconfiguration is required after workspace folder is deleted
        * excessive log showing in zowe-configure-instance step
        * environment prepared in component configure step is not reserved for start step
      - z/OSMF HA documentation (wiki pages) are ready
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
