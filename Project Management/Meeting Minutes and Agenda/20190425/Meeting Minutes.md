# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------
Zowe 1.1.x (April 2, 2019 -	April 30, 2019)
- Sprint 1 (April 2, 2019	- April 15, 2019)
  - Playback Preparation/Backlog Grooming/Sprint Goals (April 11, 2019 - April 15, 2019)
  - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (April 15, 2019)
  - Sprint Planning (n+1) (April 16, 2019 - April 19, 2019)
- Sprint 2 (April 16, 2019 - April 29, 2019)
  - Playback Preparation/Backlog Grooming/Sprint Goals (April 25, 2019 - April 29, 2019)
  - Code Complete/RC Candidate Build/Start Testing (April 26, 2019 - April 30, 2019)
  - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (April 29, 2019)
  - Sprint Planning (n+1) (April 30, 2019	- May 3, 2019)
- 1.1.x GA (April 30, 2019)


Agenda Items
------------
1. Start Recording
2. ZLC Updates (meeting cancelled)
3. Current Release and Build Status (Jack/Mark)
    - TLS needs to be fixed ASAP lest we delay the release.
       - There were two issues.  1 was API Catalog was switching back to TLS 1.0, not keeping 1.2.  2 was issues with the River build system.  1 is fixed.  2 should be fixed by end of week.  Jack and Mark are OK with this.  GA may need to be pushed a day or two.
    - Should the release be 1.1.1 or 1.2?  1.2
4. Plan:
    - 
    -
    -
5. Squad Status:
    - Installation
      - PlayForward for Installation had good feedback.  Planning this week.  Two hills for next release: SMPE installer, and launch multiple configs from the same runtime.
    - Onboarding (JoeW/TimB)
      - Tim is pushing for conformance.
    - Core/Web/Editor (JPL/Reet/Nolan)
      - Still Testing on java services for zlux
      - Made a PR Working on preventing code editor from loading all files at once
      - Reviewing the setup the API mediation layer for development with Zowe
      - The Adding "mode=base64" option to unixfile API story will most likely spill to next sprint
    - Core/CLI  (Mike B/Kyle)
      - VSCode Extension is being enhanced to handle USS File and z/OS Jobs interaction.
      - Conformance requirements
      - Automate bumping versions in the CLI (Major/Minor/Patch)
    - API Mediation Layer & Security (Petr G/Radek K/Petr P)
      - Fixed and merged: 
        - Catalog uses TLS 1.0 instead 1.2 on MF defect  
        - TransformService defects
      - Move security endpoints from API catalog to API gateway PR is ready for merge             
    - Foundation (CI/CD) (Mark/Steve/Mike/Nick)
      - We are now allowed to publish under NPM registry with @Zowe tag.
    - Documentation (Brandon/Ashley/Jim/Jason/Alyson)
      - Create a pull request for Ashley (Nan Nan Li) if you need


6. Legal Requirements
    - None

7. Community Backlog
    - TBD
8. Roundtable
    - None
9. Parking Lots
  - When you have a breaking change, how and where do you validate it?
    - No one aside from CLI has a breaking change toward 2.0
    - Consider a beta/"forward dev" version to download on the site, separate from the stable version
    - Could use @Latest, once we're published on NPM
    - We don't want people to accidentally consume breaking changes and be confused why it broke
  - Existing webservers want to be onboarded southbound of the API Gateway.  Right now there's only one programming pattern that works.  To be successful, we have to be able to onboard existing products without them needing to make modifications.  Filters in Netflix would have to filter through the architects, which currently only support a few prefixes.  We don't want to use anything beyond those prefixes.  Everything that comes from the southbound edge we want to transform in a custom way from HTML and JavaScript.  Petr G, Jack J & a few more to discuss.

Action Items
------------
    - Consider a beta/"forward dev" version to download on the site, separate from the stable version (Mark A)
    - There is a discussion to be had around Conformance and new plugins. (Joe W/Conformance Call)
    - Petr G & Jack J to discuss filtering and transformation in API ML.

- None


Recording
-------------------------
