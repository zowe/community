# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------

Current
-------
Zowe 1.7.0 (October 15, 2019 - November 12, 2019)
- Sprint 1 (October 15, 2019 - October 28, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (October 28, 2019)
- Sprint 2 (October 29, 2019 - November 11, 2019)
- Code Complete/RC Candidate Build/Start Testing (November 8, 2019 - November 12, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (November 11, 2019)
- 1.7.0 GA (November 12, 2019)

Next
----
Zowe 1.8.0 (November 12, 2019 - December 10, 2019)
- Sprint 1 (November 12, 2019 - November 25, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (November 25, 2019)
- Sprint 2 (November 26, 2019 - December 9, 2019)
- Code Complete/RC Candidate Build/Start Testing (December 6, 2019 - December 10, 2019)
- Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (December 9, 2019)
- 1.8.0 GA (December 10, 2019)

Agenda Items
------------
1. Start Recording
2. ZLC Updates
3. Current Release and Build Status (Jack/Mark)
    - There was a fix applied to v1.7.0-RC1.
    - v1.7.0-RC2 should be already available for testing.
    - Target on Friday to finish verification and send vote request to ZLC. Hopefully can announce before end of week.
    - Jack will be on vacation from Nov 14th - 21st. Mark will be helping on the final announcement of v1.7.0.
4. Plan
5. Squad Status:
    - Installation (Joe)
    - Onboarding (JoeW/TimB)
    - Core/Web/Editor (JPL/Nolan)
        - Testing 
            -Dataset API to allow deletion of PDS/E members
            -Exporers: when editing JCL to not lose content when tabbing
        - Working on
            -Bug: fixing alert when session is about to expire
            -Adding features to sample iFrame app
       - To do
            -Explorers: Use desktop notifications when running as a zlux app            
    - Core/CLI (Mike B/Kyle)
    - API Mediation Layer & Security (Petr G/Radek K/Petr P)
      - Completed
        - Clean up API Catalog logs originating in API ML dependencies    
      - Close to completion
        - Clean up API Catalog logs originating in API ML code base
        - Clean up configuration for plain Java onboarding enabler
      - WIP
        - OpenAPI 3.0 support         
    - Foundation (CI/CD) (Mark/Jack/Nick)
        - We have made progress on successfully run docs-site build on LF Jenkins. Some failures on LF Jenkins production had been resolved.
        - DockerPipeline support was added (Doc: https://www.zowe.org/jenkins-library/jenkins_shared_library/pipelines/docker/DockerPipeline.html, Example pipeline https://github.com/zowe/zowe-dockerfiles/blob/users/jack/pipeline/Jenkinsfile.zowe-dev)
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
