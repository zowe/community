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
     - Discuss the next PI Planning
     - Discuss v2.0 items. There is a git issue https://github.com/zowe/community/issues/924 together with a wiki https://github.com/zowe/community/wiki/Zowe-release---moving-to-a-new-major-version to collect people's thoughts and ideas about incrementing the Zowe major version number.
       - CLI "wants"
         - [Simplified Config](https://medium.com/zowe/zowe-cli-getting-started-made-easy-f53d769c678e) (currently in validation)
         - [Daemon Mode](https://medium.com/zowe/zowe-cli-daemon-mode-29c0dc29c22f) (performance improvement - currently in validation)
         - Conformance Program Update
         - Zowe Explorer to make use of simplified config
         - Automatic client configuration for API Mediation Layer Users
         - Node & Python SDKs could become LTS on Zowe.org
         - Adjust JSON configuration to better communicate what type of authentication to perform for specific services (creds direct to service, API ML with token, etc.)
5. Squad Status:
    - Onboarding (Rose)
    - Core/Web/Editor (Nolan/James/Lenny)
      - Move groovy build content into jenkinsfile in zlux-build
      - Initialize App server cookie secret based on shared environment objects
      - Create Docker image that includes source code
    - API Mediation Layer & Security (Elliot)  
      - Redis/Hostbridge for off-z > target to finish by end of PI  
      - AT-TLS > contributing library to kick start PoC  
      - Identified 1st draft of Objectives for next PI
      - Identified set of v2 ideas for API ML here https://github.com/zowe/community/issues/924   
    - CLI (MikeB)
      - [Implement combined config API](https://github.com/zowe/zowe-cli/issues/912)
    - Systems
      - CI/CD (Tom)
        * Enabled commenting of zowe build/test status for pull request
        * Investigate issues around enabling VERIFY_CERTIFICATES and using external certificates before enabling new test case (Jack)
      - Performance & HA (Jack)
        * Solved the double address spaces issue
        * Created integration build with YAML configuration plus launcher
        * Continue validating integration build on Sysplex
    - Documentation (Michael Aimino)
      - Published doc for v1.20.0
      - Completed [zowe.org design updates](https://deploy-preview-108--condescending-dubinsky-4645a9.netlify.app/download.html) and addressed all feedback. Waiting for TSC to vote for publish this week. 
      - Identifying objectives for next PI
      - Working on Zowe docs UI revamp. (See the [Prototype](https://covalentbond.github.io/zowe-docs/getting-started/doc7))
      - Working on PRs [#1618](https://github.com/zowe/docs-site/pull/1618), [#1592](https://github.com/zowe/docs-site/pull/1592)

6. Legal Requirements
    - None
7. Community Backlog
    - TBD
8. Roundtable
    - None

Action Items
------------
- None
