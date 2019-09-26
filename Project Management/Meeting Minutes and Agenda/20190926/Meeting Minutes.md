# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------

Current
-------

Zowe 1.5.0 (August 20, 2019 - September 17, 2019)
- Sprint 1 (August 20, 2019 - September 2, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (September 2, 2019)
- Sprint 2 (September 3, 2019 - September 16, 2019
- Code Complete/RC Candidate Build/Start Testing (September 13, 2019 - September 17, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (September 16, 2019)
- 1.5.0 GA (Current target September 27, 2019)

Next
----

Zowe 1.6.0 (September 17, 2019 - October 15, 2019)
- Sprint 1 (September 17, 2019 - September 30, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (September 30, 2019)
- Sprint 2 (October 1, 2019 - October 14, 2019)
- Code Complete/RC Candidate Build/Start Testing (October 11, 2019 - October 15, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (October 14, 2019)
- 1.6.0 GA (October 15, 2019)

Agenda Items
------------
1. Start Recording
2. ZLC Updates
3. Current Release and Build Status (Jack/Mark)
4. Plan:
    - Discuss closure plan for v1.5.0
5. Squad Status:
    - Installation (Joe)
    - Onboarding (JoeW/TimB)
    - Core/Web/Editor (JPL/Nolan)
        - Testing for 1.5.0, still looking good for a friday vote
        - Working on RBAC app visibility
    - Core/CLI (Mike B/Kyle)
      - (In Progress) Issue #476 - Publish @latest CLI bundle and associated documentation
      - CICS plugin for Zowe CLI efforts
      - (In Review) Issue #53 - Define a CICS URIMAP
      - Progressing toward Zowe VS Code Extension 1.0 - 1,567 unique installs!
      - (In Progress) Issue #93 - Job Tree - Refresh Icon Tooltip
      - (In Progress) Issue #182 - Support "copy path" in USS explorer
      - (In Progress) Issue #226 - Allow VS Code Extension Settings of Connection Information (remove strict dependency on Zowe CLI profiles)
      - (In Progress) Issue #248 - If job node is deleted, also remove favorite
    - API Mediation Layer & Security (Petr G/Radek K/Petr P)
      - WIP:
        - Create infrastructure for log messages #391
        - New Eureka metadata definition and consumption #380
    - Foundation (CI/CD) (Mark/Jack/Nick)
      - Working on new repo https://github.com/zowe/zowe-dockerfiles, basing some broad structure on https://github.com/eclipse/che-dockerfiles. Testing out performance degradation based on image size so we can decide on a single common image or multiple ones.
      - SonarCloud was also setup for CLI/API-ML and will be POC’ing imperative soon.
      - Nightly build has been changed to also promote/test SMP/e package


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
