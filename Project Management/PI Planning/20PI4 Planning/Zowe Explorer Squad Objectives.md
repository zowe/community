# Zowe Explorer Squad - 20PI4 Objectives (October 2020 to January 2021)

## Overview
Overriding theme: Spring Cleaning (**Conformance Criteria Development**)
* Separation of concerns in the code
  * Profiles.ts refactoring (**Profiles Experience Improvements**)
* Revisiting the workflows
  * Activation (people are failing with invalid profiles, settings)
  * Rename
  * Refresh (**Refresh/Reload DS, USS, Jobs consistency**)
* **Improved experience searching and working with data sets and members**
* **Creation of data sets with the ability to set the parameters**

----------

## Development of Zowe Explorer extenders conformance criteria (continued)

* Continue work on extensibility API and conformance rules [Issue 837](https://github.com/zowe/vscode-extension-for-zowe/issues/837)
  * Refactor api code (profile loading, secure creds init, remove UI code) 837.2   
  * API governance for Zowe committers (explore automation: e.g. search for the string “zosmf”, perhaps via ESLint) 837.3    
  * Continue working on the extensibility API and conformance rules for extenders 837.4
  * Code formatting and linting [Issue 438](https://github.com/zowe/vscode-extension-for-zowe/issues/438)
* Ensure consistency for extenders
  * MVS for FTP Package [Issue 1027](https://github.com/zowe/vscode-extension-for-zowe/issues/1027)
  * Test automation for FTP package (unit test by refactoring zosmf test to test both, e2e that reuses current zosmf tests (optional)) [Issue 1028](https://github.com/zowe/vscode-extension-for-zowe/issues/1028)

## Continue to improve the profile experience

* Refactor Profiles.ts [Issue 1000](https://github.com/zowe/vscode-extension-for-zowe/issues/1000)
     * _December Update_ More issues opened connected to this:
         * 1096 [Profile Inactive Error](https://github.com/zowe/vscode-extension-for-zowe/issues/1096)
         * 1095 [Enhance Optional Profiles](https://github.com/zowe/vscode-extension-for-zowe/issues/1095)
         * 1067 [Error on Logger, prevents usage of plugin](https://github.com/zowe/vscode-extension-for-zowe/issues/1067)
         * 1047 [Error encountered while activating and initializing logger (solved by removing base profile)](https://github.com/zowe/vscode-extension-for-zowe/issues/1047)
         * 1015 [Zowe Explorer Fails to Load Old Profiles After Setting Zowe Security: Credential Key](https://github.com/zowe/vscode-extension-for-zowe/issues/1015)
* Base path editing-- new fields in z/OSMF schema should be covered (base path, encoding, response timeout) [Issue 989](https://github.com/zowe/vscode-extension-for-zowe/issues/989)
* Profile manager development [Issue 423](https://github.com/zowe/vscode-extension-for-zowe/issues/423)
* Profile type annotations [Issue 1025](https://github.com/zowe/vscode-extension-for-zowe/issues/1025)
* First profile not created as default (affecting CLI and Theia users)

## Ensure that users enjoy a consistent experience when refreshing and reloading items in the tree

* Analyze the generic class and the other types of refreshes
* Fix and implement a solution that ensures the same experience for MVS, USS, JES
    * _December update_ Lauren has analysis here: [Research refresh functionality](https://github.com/zowe/vscode-extension-for-zowe/issues/1048)
    * _Issues to address (in terms of value)_
         * 754 [Requests sent to z/OS when tree item is closed](https://github.com/zowe/vscode-extension-for-zowe/issues/754)
         * 650 [USS tree collapses after folder rename](https://github.com/zowe/vscode-extension-for-zowe/issues/650)
         * 769 [Refresh USS file list under directory](https://github.com/zowe/vscode-extension-for-zowe/issues/769)
         * 1079 [When using Toggle Binary/Text command, only refresh parent node](https://github.com/zowe/vscode-extension-for-zowe/issues/1079)
         * 752 [Refresh required for profile created in Zowe CLI to be available in ZE](https://github.com/zowe/vscode-extension-for-zowe/issues/752)
         * 843 [Refresh DS after Migrate/Recall DS](https://github.com/zowe/vscode-extension-for-zowe/issues/843)
         * 1021 [Refresh button not working (for favorites)](https://github.com/zowe/vscode-extension-for-zowe/issues/1021)
         * 578 [Call refresh on Jobs view when a job is deleted](https://github.com/zowe/vscode-extension-for-zowe/issues/578)


## Provide users with enhanced experience working with data sets and members

* Filter partitioned data sets by pattern [Issue 868](https://github.com/zowe/vscode-extension-for-zowe/issues/868)
    * _December update_ PR ready and approved [PDS Member Filter Search](https://github.com/zowe/vscode-extension-for-zowe/pull/1072)
* Allow for multiple selection and deletion of jobs, members etc. [Issue 224](https://github.com/zowe/vscode-extension-for-zowe/issues/224)
    * _December update_ Richelle working on a POC of multiple select behavior for Zowe Explorer and Jobs
## Creation of data sets with ability to set the parameters

* Ability to create a data set and edit the attributes [Issue 1031](https://github.com/zowe/vscode-extension-for-zowe/issues/1031)
    * _December update_ PR open and ready for review [Enable editing of DS attributes on allocation](https://github.com/zowe/vscode-extension-for-zowe/pull/1092)

------------------------

## Stretch/Pushed to following PIs

**Fix prioritized issues related to USS files**

* Finish USS renaming [Issue 757](https://github.com/zowe/vscode-extension-for-zowe/pull/971)
* USS favorited search creates extra profile node [Issue 1029](https://github.com/zowe/vscode-extension-for-zowe/issues/1029)

**Address UX-related issues from recent development**

* Empty favorites folders [Issue 1026](https://github.com/zowe/vscode-extension-for-zowe/issues/1026)
* Improve logging and introduce output view to better support end users [Issue 1024](https://github.com/zowe/vscode-extension-for-zowe/issues/1024)
