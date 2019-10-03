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
- 1.5.0 GA (Current target October 2, 2019)

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
    - Discuss next release date
    - Access to z/OS 2.4 Systems and testing
5. Squad Status:
    - Installation (Joe)
    - Onboarding (JoeW/TimB)
    - Core/Web/Editor (JPL/Nolan)
        - Working towards componentisation for explorer apps
        - Adding Deletion Option into Right Click Menu in the Editor
        - Working on RBAC App visibility and iFrame support 
        - Researching a zowe app repo using conda
    - Core/CLI (Mike B/Kyle)
        - Core CLI efforts
            - (In Progress) Issue #476 - Publish @latest CLI bundle and associated documentation... awaiting ZLC approval
        - CICS plugin for Zowe CLI efforts
            - (Complete) Issue #53 - Define a CICS URIMAP
            - (Next) Issue #56 - Add options to define URIMap command
            - (Future - Help Wanted) Issue #52 - Delete a CICS URIMap
            - (Future - Help Wanted) Issue #48 - Install a CICS URIMap
        - Progressing toward Visual Studio Code Extension for Zowe 1.0 - 1,666 unique installs!
            - (In Progress) Issue #182 - Support "copy path" in USS explorer
            - (In Progress) Issue #210 - Persistence of added profiles
            - (In Progress) Issue #226 - Allow VS Code Extension Settings of Connection Information (remove strict dependency on Zowe CLI profiles)
            - Visual Studio Code Extension for Zowe version 0.25.0 released! This resolved six issues required for 1.0 MVP. See the milestone issues at https://github.com/zowe/vscode-extension-for-zowe/milestone/12.
    - API Mediation Layer & Security (Petr G/Radek K/Petr P)
      - Done:
        - Create infrastructure for log messages #391
      - WIP:        
        - External option to control the amount of log information #395              
        - Clean up Discovery Service logging #368      
        - New Eureka metadata definition and consumption #380    
    - Foundation (CI/CD) (Mark/Jack/Nick)
      - added few new features to the jenkins library
      - migrated zowe-promote-publish to zowe-install-packaging and will archive the repo soon
      - try to understand the requirement of PTF build
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
