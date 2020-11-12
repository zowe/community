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
5. Squad Status:
    - Onboarding (JoeW/Rose)
    - Core/Web/Editor (JPL/Nolan/James)
      - Make ztop a zowe component
      - Add key support for java server in ztop
      - Enhance new single app mode to not have window header UI on first app
    - API Mediation Layer & Security (Elliot)  
      - Released v1 of API versioning in Catalog to 1.17 and captured enhancements for v2 (targeting 1.18)
      - Started VSAM implementation for the caching API
      - Completing RACF and TSS testing for Client Certs (ACF2 testing opened as issue against install-packaging)
    - Performance & High Availability (HA) (Jack)
      - Discussion on converting instance.env to YAML format. We are close to have final proposal.
      - Continue testing on adding manifest and re-packaging explorer APIs.
      - Continue testing on setup z/OSMF HA.
    - Documentation (Brandon/Ashley/Alex/Andrew)
      - v1.17 [Release notes draft](https://github.com/zowe/docs-site/blob/docs-staging/docs/getting-started/summaryofchanges.md#version-1170-lts-november-2020) ready for review. 
      - Update z/OSMF workflow doc, Zowe upgrade doc
      - Investigate Zowe doc table of contents to provide better navigation and structure
      - Continue work on contribution doc
      - Discussion on doc homepage redesign. Will create persona-based roadmap (matching Ilya's design) and component-based roadmap on doc site. 

6. Legal Requirements
    - None

7. Community Backlog
    - TBD
8. Roundtable
    - None

Action Items
------------
- None
