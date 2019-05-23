# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------

Current
-------

Zowe 1.x (April 30, 2019 - May 28, 2019)
- Sprint 1 (April 30, 2019 - May 13, 2019)
  - Playback Preparation/Backlog Grooming/Sprint Goals (May 9, 2019 - May 13, 2019)
  - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (May 13, 2019)
  - Sprint Planning (n+1) (May 14, 2019 - May 17, 2019)
- Sprint 2 (May 14, 2019 - May 27, 2019)
  - Playback Preparation/Backlog Grooming/Sprint Goals (May 23, 2019 - May 27, 2019)
  - Code Complete/RC Candidate Build/Start Testing (May 24, 2019 - May 28, 2019)
  - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (May 27, 2019)
  - Sprint Planning (n+1) (May 28, 2019 - May 31, 2019)
- 1.x GA (May 28, 2019)

Next
----
Zowe 1.x (May 28, 2019 - June 25, 2019)
- Sprint 1 (May 28, 2019 - June 10, 2019)
   - Playback Preparation/Backlog Grooming/Sprint Goals (June 6, 2019 - June 10, 2019)
   - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (June 10, 2019)
   - Sprint Planning (n+1) (June 11, 2019 - June 14, 2019)
- Sprint 2 (June 11, 2019 - June 24, 2019)
   - Playback Preparation/Backlog Grooming/Sprint Goals (June 20, 2019 - June 24, 2019)
   - Code Complete/RC Candidate Build/Start Testing (June 21, 2019 - June 25, 2019)
   - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (June 24, 2019)
   - Sprint Planning (n+1) (June 25, 2019 - June 28, 2019)
- 1.x GA (June 25, 2019)


Agenda Items
------------
1. Start Recording
2. ZLC Updates
3. Current Release and Build Status (Jack/Mark)
4. Plan:
    - Update Playback Agenda (https://ibm.ent.box.com/notes/284332824321)
    - Discuss the plan to ship release
5. Squad Status:
    - Installation (Joe)
    - Onboarding (JoeW/TimB)
    - Core/Web/Editor (JPL/Reet/Nolan)
      - fixed a bug so the Editor will notify users if it cannot open a file/dataset
      - fixed a bug where ZSS consumed ~50% of CPU during file download
      - testing once a job is submitted we want to see it in the JES eplorer
      - working on three more Editor stories 
      - & more, Full Link to 1.3.0 for Web UI: https://app.zenhub.com/workspaces/zlux-core-5ca217c7d74bd07972cb77db/board?milestones=1.3.0%232019-05-24&filterLogic=any&repos=144600433,144599826,144600302,144600062,144599767,144599701,144600372
    - Core/CLI (Mike B/Kyle)
    - API Mediation Layer & Security (Petr G/Radek K/Petr P)
      - Added Swagger documentation for the authentication endpoints 
      - Updated documentation on: 
        - API ML debugging
        - developing Java REST APIs with Spring Boot  
      - Close to complete the: 
        - SSO JWT secret related story
        - Service still displayed as UP and API doc available in the catalog even if stopped defect
      - Work in progress on the high CPU consumption of discovery service and gateway defect
    - Foundation (CI/CD) (Mark/Nick)
    - Documentation (Brandon/Ashley/Jim/Jason/Alyson)


6. Legal Requirements
    - None

7. Community Backlog
    - TBD
8. Roundtable
    - None

Action Items
------------
- None
