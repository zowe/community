# Zowe Explorer Squad - 21PI1 Objectives (January 2021 to May 2021)

## Overview

Carryover features:
* Conformance Criteria Development
* Continue to improve profile experience
* Provide a consistent user experience for refresh and reload in tree

New features:
* Publish a beta version of Zowe Explorer that supports the team configuration file for easier onboarding and access for developers
* Improve experience when issuing commands
* Prioritized user requests

## Development of Zowe Explorer extenders conformance criteria

* 837 [Continue work on extensibility API and conformance rules](https://github.com/zowe/vscode-extension-for-zowe/issues/837)
  * 837.3 API governance for Zowe committers (explore automation: e.g. search for the string “zosmf”, perhaps via ESLint) 
  * 837.4 Continue working on the extensibility API and conformance rules for extenders
  * 438 [Code formatting and linting](https://github.com/zowe/vscode-extension-for-zowe/issues/438)

* Ensure consistency for extenders
  * MVS for FTP Package [Issue 1027](https://github.com/zowe/vscode-extension-for-zowe/issues/1027)
  * Test automation for FTP package (unit test by refactoring zosmf test to test both, e2e that reuses current zosmf tests (optional)) [Issue 1028](https://github.com/zowe/vscode-extension-for-zowe/issues/1028)

Additional issues identified:
* 1161 [Secure Credentials support for Extenders](https://github.com/zowe/vscode-extension-for-zowe/issues/1161)
* 1163 [Zowe Explorer does not activate when there are issues with profiles or settings](https://github.com/zowe/vscode-extension-for-zowe/issues/1163)  
  
## Beta version of Zowe Explorer that supports the configuration file
* Research and introduce a beta version of Zowe Explorer that includes support for the team/project configuration file
  * Research the current functionality available in Imperative @next version [JSON Config in next](https://github.com/zowe/imperative/pull/452)
  * Work with CLI squad to ensure SDK provides rounded profile information
  * Work with UX to plan future iterations as well as to conduct validation studies

Additional issues identified:
* 1166 [Research: How can Zowe Explorer handle context (projects/folders) in VS Code](https://github.com/zowe/vscode-extension-for-zowe/issues/1166)
* 1165 [Research: Configuration file in @next of Imperative](https://github.com/zowe/vscode-extension-for-zowe/issues/1165)

## Continue to improve the profile experience
* Issues associated to general consistency and UX
  * 1126 [Multiple "validating" messages](https://github.com/zowe/vscode-extension-for-zowe/issues/1126)
  * 1123 [Create a new profile text](https://github.com/zowe/vscode-extension-for-zowe/issues/1123)
  * 1125 [Hide unusable profile context menu options](https://github.com/zowe/vscode-extension-for-zowe/issues/1125)
  * 1127 [Reject Unauthorized value defaults back to true](https://github.com/zowe/vscode-extension-for-zowe/issues/1127)
  * 1015 [Zowe Explorer Fails to Load Old Profiles After Setting Zowe Security: Credential Key](https://github.com/zowe/vscode-extension-for-zowe/issues/1015)
    * This will follow from the work done on activation, issue [1163](https://github.com/zowe/vscode-extension-for-zowe/issues/1163) identified above under the extenders conformance feature
## Provide a consistent experience when refreshing and reloading items in the tree
* Research from 20PI4 helped identify the following issues to address (in order of priority)
  * 754 [Requests sent to z/OS when tree item is closed](https://github.com/zowe/vscode-extension-for-zowe/issues/754)
  * 650 [USS tree collapses after folder rename](https://github.com/zowe/vscode-extension-for-zowe/issues/650)
  * 769 [Refresh USS file list under directory](https://github.com/zowe/vscode-extension-for-zowe/issues/769)
  * 1079 [When using Toggle Binary/Text command, only refresh parent node](https://github.com/zowe/vscode-extension-for-zowe/issues/1079)
  * 752 [Refresh required for profile created in Zowe CLI to be available in ZE](https://github.com/zowe/vscode-extension-for-zowe/issues/752)
  * 843 [Refresh DS after Migrate/Recall DS](https://github.com/zowe/vscode-extension-for-zowe/issues/843)
  * 1021 [Refresh button not working (for favorites)](https://github.com/zowe/vscode-extension-for-zowe/issues/1021)
  * 578 [Call refresh on Jobs view when a job is deleted](https://github.com/zowe/vscode-extension-for-zowe/issues/578)

## Improve experience when issuing commands
* 809 [Issue TSO Command is not available on Zowe Explorer anymore](https://github.com/zowe/vscode-extension-for-zowe/issues/809)
* 875 [Clarify the Issue Command (e.g. Issue MVS Command)](https://github.com/zowe/vscode-extension-for-zowe/issues/875)  

New issues identified:
* 1162 [Research: Handling of TSO commands](https://github.com/zowe/vscode-extension-for-zowe/issues/1162)

## Prioritized Feature Requests
* 998 [Confirmation before submitting a job](https://github.com/zowe/vscode-extension-for-zowe/issues/998)
## Dependencies
We've identified the following dependencies for the upcoming PI:
* CLI Squad: Their improvements to the SDK will help us to utilize the SDK in order to get the profile information we need from the configuration.json to allow developers to get to work in Zowe Explorer (beta version)
* Several topics need to be researched in greater detail prior to any implementation
 