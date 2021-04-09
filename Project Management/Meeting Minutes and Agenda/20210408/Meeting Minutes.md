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
2. TSC Updates (Jakub)
3. Current Release and Build Status (Tom/Jack)
4. Plan
     - Discuss the next PI Planning Agenda
5. Squad Status:
    - Onboarding (Rose)
    - Core/Web/Editor (Nolan/James/Lenny)
      - Implement RBAC in ZSS for HA
      - Fixed ZSS dataset api causing memory corruption when RECFM=FB
      - Change zss static apiml registration to use manifest template
    - API Mediation Layer & Security (Elliot)  
      - Added Redis (off zsolution) to our caching service related tests  
      - Updated x509 authentication to function in an HA configuration   
    - CLI (MikeB)
      - Completed implementation of combined config API
      - Zowe CLI - JCL Symbolic Substitution Support
    - Explorer (Jelly)
    - Systems
      - CI/CD (Tom)
        * Research on enabling parallel testing
        * Started work on IP Explorer pipeline
        * Investigate issues around enabling VERIFY_CERTIFICATES and using external certificates before enabling new test case (Jack)
        * Improved node/java validation and ZWESECUR jcl
        * Deprecated APIML_PREFER_IP_ADDRESS and ZOWE_CACHING_SERVICE_START
      - Performance & HA (Jack)
        * Added option to generate component-level certificates
        * Added YAML config support on gateway internal connector
        * Continue integration test with HA
    - Documentation (Michael Aimino)
      -

6. Legal Requirements
    - None
7. Community Backlog
    - TBD
8. Roundtable
    - None

Action Items
------------
- None
