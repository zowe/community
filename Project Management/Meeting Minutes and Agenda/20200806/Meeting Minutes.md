# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------
[Schedule and Sprint Cadence](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/20PI3%20Planning/Zowe%20PI%20%26%20Sprint%20Cadence.md)


Agenda Items
------------
1. Start Recording
2. ZLC Updates
3. Current Release and Build Status (Steve)
4. Plan
     - Discuss 1.14.0 Release.
5. Squad Status:
    - Onboarding (JoeW/Taylor/Rose)
    - Core/Web/Editor (JPL/Nolan/James)
      - Create autoconvert script for ebcdic plugins
      - Trigger de/registration process on install/uninstall event
      - Automatically Call install-app.sh for External Docker Plugins
    - API Mediation Layer & Security (Elliot/Michal S/Petr P)  
         - The API ML Integration and End2End tests passed against RC1; RC2 testing in progress
         - Started issue 'Support that APIML can be started without z/OSMF #472'
         - Began work on a design proposal for x.509 'x509: Design composite APIML & SAF authentication #759'
    - Performance & High Availability (HA) (Jack)
      - First update, this bullet shows some works we done in the previous few weeks:
        * Performance Test Client Framework tool had first drop in early July.
        * Zowe Metrics Server had first drop in January
        * We started to collect performance test scenarios from other squads (Melissa)
        * We have 2 versions of High Availability draft shared with the team, and continue work on pending solution decisions.
      - Recently
        * Melissa had consolidate performance test requirement from APIML/WebUI, and also got feedbacks from Explorer API/UIs. Will continue work on that to finalize.
        * We have a new architecture view of High Availability which better explains our ideas.
        * We finalized first solution regarding stateful component. The solution suggests new Caching API.
        * Working with team to understand various aspect of failover solution.
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
