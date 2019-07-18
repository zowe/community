# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------

Current
-------

Zowe 1.4.0 (June 25, 2019	- July 23, 2019)
- Sprint 1 (June 25, 2019	- July 8, 2019)
  - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (July 8, 2019)
- Sprint 2 (July 9, 2019 - July 22, 2019)
	- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (July 22, 2019)
- 1.4.0 GA (July 23, 2019)


Agenda Items
------------
1. Start Recording
2. ZLC Updates
3. Current Release and Build Status (Jack/Mark)
4. Plan:
    - System Demo
    - Security Testing
    - Discuss RC Candidate
5. Squad Status:
    - Installation (Joe)
    - Onboarding (JoeW/TimB)
    - Core/Web/Editor (JPL/Reet/Nolan)
    	- Working on Login failure message less technical #178
    	- Testing Top Secret Support #167 #172
    	- Testing Code Editor doesn't save state of editor tabs #177
    - Core/CLI (Mike B/Kyle)
        - Initial effort started on publishing @latest bundle for CLI to Zowe.org and updating documentation
        - Imperative efforts
            - (In Review) Issue #248 - zowe --help-web on Linux does not return until browser is closed
            - (In Review) Issue #249 - zowe --help-web says it launches browser when in ssh terminal
            - (In Review) Issue #253 - zowe --help-web on Linux launches help in text editor not browser
            - (In Progress) Issue #238 - Add --help-web as global option to launch web help in context
        - Core CLI efforts
            - (In Review) Issue #53 - ZosFiles should allow additional values for the DSnType option
            - (In Review) Issue #487 - Include more options for dsntype
    	- Progressing toward Zowe VSCode Extension 1.0 - 1,064 unique installs, 4,588 downloads!
            - (In Review) Issue #34 - Create a validation build for the VSCode extension
            - (In Review) Issue #112 - Cannot open a data-set via the alias
            - (In Progress) Issue #98 - Overhaul VSCode testing process
            - (In Progress) Issue #6 - System tests require matching profile to be created in .zowe folder
            - (In Progress) Issue #5 - Tests and mocks are compiled with the build
    - API Mediation Layer & Security (Petr G/Radek K/Petr P)
    	- Working on last story related to the Spring authentication client
    	  - Adding tests
    	  - Publishing the client to Zowe artifactory
    	  - Writing documentation 
        - Enhancing HTTPs related documentation for Spring enabler
        - Working on defect "Zowe API Discovery task is taking more CPU" #329     
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
