# Zowe Explorer Squad - 20PI4 Objectives (October 2020 to January 2021)

## Development of Zowe Explorer extenders conformance criteria (continued)

* Continue work on extensibility API and conformance rules (Issue 837)[https://github.com/zowe/vscode-extension-for-zowe/issues/837]
  * Refactor api code (profile loading, secure creds init, remove UI code) 837.2   
  * API governance for Zowe committers (explore automation: e.g. search for the string “zosmf”, perhaps via ESLint) 837.3    
  * Continue working on the extensibility API and conformance rules for extenders 837.4 
  * Code formatting and linting #438
* Ensure consistency for extenders
  * MVS for FTP Package (Issue 1027)[https://github.com/zowe/vscode-extension-for-zowe/issues/1027]
  * Test automation for FTP package (unit test by refactoring zosmf test to test both, e2e that reuses current zosmf tests (optional)) (Issue 1028)[https://github.com/zowe/vscode-extension-for-zowe/issues/1028]

## Continue to improve the profile experience

* Refactor Profiles.ts (Issue 1000)[https://github.com/zowe/vscode-extension-for-zowe/issues/1000]
  * Empty fields in profiles (user and password) bug
* Base path editing-- new fields in z/OSMF schema should be covered (base path, encoding, response timeout) (Issue 989)[https://github.com/zowe/vscode-extension-for-zowe/issues/989]
* Profile manager development (Issue 423)[https://github.com/zowe/vscode-extension-for-zowe/issues/423]
* Profile type annotations (Issue 1025)[https://github.com/zowe/vscode-extension-for-zowe/issues/1025]
* First profile not created as default (affecting CLI and Theia users)

## Provide users with enhanced experience working with data sets and members

* Filter partitioned data sets by pattern (Issue 868)[https://github.com/zowe/vscode-extension-for-zowe/issues/868]
* Allow for multiple selection and deletion of jobs, members etc. (Issue 224)[https://github.com/zowe/vscode-extension-for-zowe/issues/224]
* Creation of data sets with ability to set the parameters

## Fix prioritized issues related to USS files

* Finish USS renaming (Issue 757)[https://github.com/zowe/vscode-extension-for-zowe/pull/971]
* USS favorited search creates extra profile node (Issue 1029)[https://github.com/zowe/vscode-extension-for-zowe/issues/1029]

## Address UX-related issues from recent development

* Empty favorites folders (Issue 1026)[https://github.com/zowe/vscode-extension-for-zowe/issues/1026]
* Improve logging and introduce output view to better support end users (Issue 1024)[https://github.com/zowe/vscode-extension-for-zowe/issues/1024]
