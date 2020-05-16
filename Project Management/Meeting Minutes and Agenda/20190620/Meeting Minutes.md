# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------

Current
-------

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


Next
----

Zowe 1.5.0 (June 25, 2019	- July 23, 2019)
- Sprint 1 (June 25, 2019	- July 8, 2019)
  - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (July 8, 2019)
- Sprint 2 (July 9, 2019 - July 22, 2019)
	- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (July 22, 2019)
1.5.0 GA (July 23, 2019)



Agenda Items
------------
1. Start Recording
2. ZLC Updates
3. Current Release and Build Status (Jack/Mark)
4. Plan:
    - Discuss the schedule
    - PI Planning
5. Squad Status:
    - Installation (Joe)
    - Onboarding (JoeW/TimB)
    - Core/Web/Editor (JPL/Reet/Nolan)
    	- Finished a font bug for non latin chars. Also, Finished updating the repos with package lock files.	
    	- Testing Java sidecar services that zlux recognizes.                                                                                   - LINK for ZenHub: https://app.zenhub.com/workspaces/zlux-core-5ca217c7d74bd07972cb77db/board?milestones=1.4.0%232019-06-21&filterLogic=any&repos=144600433,144599826,144600302,144600062,144599767,144599701,144600372
    - Core/CLI (Mike B/Kyle)
    - API Mediation Layer & Security (Petr G/Radek K/Petr P)
      - Competed: 
        - Add JWT signature algorithm and secret to the configuration options (#198)
        - Make Desktop UI available through APIML  (#242)
        - Integrate zLUX with API ML (#8)
        - Custom Logback layout (#360)
      - In progress:
        - Spring authentication security client (#323)      
        - Integrate zLUX with Zowe SSO for authentication (#55) 
        - Change default Max-Age for cookies to 0 (#290)
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
