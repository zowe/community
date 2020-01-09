# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------

Current Release
---------------
Zowe 1.8.0 (November 12, 2019 - December 17, 2019)
- Sprint 1 (November 12, 2019 - November 25, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (November 25, 2019)
- Sprint 2 (November 26, 2019 - December 16, 2019)
- Code Complete/RC Candidate Build/Start Testing (December 6, 2019 - December 10, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (December 9, 2019)
- 1.8.0 GA (~~December 17, 2019~~) Date not yet determined.

Next Release(s)
---------------
Zowe 1.9.0 (December 17, 2019 - January 14, 2020)
- Sprint 1 (December 10, 2019 - December 23, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (December 23, 2019)
- Sprint 2 (December 24, 2019 - January 6, 2020)
- Code Complete/RC Candidate Build/Start Testing (January 3, 2020 - January 7, 2020)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (January 6, 2020)
- 1.9.0 GA (January 14, 2020)

Zowe 1.10.0 (January 14 2020 - February 11, 2020)
- Sprint 1 (January 7, 2020 - January 20, 2020)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (January 20, 2020)
- Sprint 2 (January 21, 2020 - February 3, 2020)
- Code Complete/RC Candidate Build/Start Testing (January 31, 2020 - February 4, 2020)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (February 3, 2020)
- 1.10.0 GA (February 11 2020)


Agenda Items
------------
1. Start Recording
2. ZLC Updates
3. Current Release and Build Status (Jack/Mark)
4. Plan
     - Discuss the v1.8.0 Release
     - Discuss System Demo
5. Squad Status:
    - Installation (Joe/Rose)
    - Onboarding (JoeW/Taylor)
    - Core/Web/Editor (JPL/Nolan/James)
          -The latest status of Zowe 1.8.0 is that Steven was encountering some problems with the explorers and Jason is writing        documantation.
    - Core/CLI (Mike B/Kyle)
        - Zowe Explorer VS Code Extension - 2,881 unique installs!
            - 1.1 released- Changlog: https://marketplace.visualstudio.com/items/Zowe.vscode-extension-for-zowe/changelog. 
            - 1.2 target milestone (Feb 3) - https://github.com/zowe/vscode-extension-for-zowe/milestone/20
            - We need your help! Prioritized backlog - https://github.com/zowe/vscode-extension-for-zowe/milestone/3. Simply pick an issue of interest, assign yourself, and select a target milestone for completion (current options are 1.2 (Feb 3), or 1.3 (Mar 2))
        - Zowe CLI
            - Contributing Conformant CA Secure Credential Store Plug-in for Zowe CLI to Zowe Active Development and Zowe LTS line
            - Distributing Zowe CLI LTS line for first Zowe LTS release. Current understanding is that Zowe LTS release will be 1.10... so plan is to tag these packages as `@zowe-v1-lts`. If this is going to change to the first Zowe LTS release being 2.0 (which I support) we need to tag these packages as `@zowe-v2-lts`.
            - Updating conformance criteria for LTS release
    - API Mediation Layer & Security (Petr G/Michal S/Petr P)
      - Done
        - Upgraded Discovery Service's Eureka library to the latest version (transiently also Tomcat to 9.0 and Spring Boot to 2.1)      
      - In progress:
        - Research for conditional special characters support in API ML services
        - Implementation of new Spring V1 and V2 onboarding enablers              
    - Foundation (CI/CD) (Mark/Jack/Nick)
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
