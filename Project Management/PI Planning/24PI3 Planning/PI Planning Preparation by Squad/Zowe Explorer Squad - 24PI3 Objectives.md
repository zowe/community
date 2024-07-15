# Zowe Explorer Squad - 24PI3 - (2024/07/23 - 2024/10/21)

### Continue preparing for v3 GA with continued pre-release availability, wrapping up all breaking changes by end of PI.

- [Support Certificate Authentication #2621](https://github.com/zowe/vscode-extension-for-zowe/issues/2621) - (24Q1 rollover)
- [Provide Client Side z/OSMF Certificate Support Zowe Explorer #2373](https://github.com/zowe/vscode-extension-for-zowe/issues/2373) - (24Q1 rollover)
- [next: Remove deprecated methods #2238](https://github.com/zowe/zowe-explorer-vscode/issues/2238) - **Breaking change**
- [[vNext] DS Templates setting to be accessible and usable via workspace settings #2345](https://github.com/zowe/zowe-explorer-vscode/issues/2345) - **Breaking change**
- [Double check scopes of settings for correctness #2303](https://github.com/zowe/zowe-explorer-vscode/issues/2303) - **Breaking change**
- [Update ZE to use imperative's APIs for updating imperative.json  #2622](https://github.com/zowe/zowe-explorer-vscode/issues/2622)
- [Notify extenders when changes to the vault have been made #2546](https://github.com/zowe/zowe-explorer-vscode/issues/2546)
- [Add integration tests using vscode-extension-tester #2322](https://github.com/zowe/zowe-explorer-vscode/issues/2322)
- [Support logging in to multiple APIML instances per config file #2264](https://github.com/zowe/vscode-extension-for-zowe/issues/2264) - *stretch* (24Q1 rollover)
- [Design and Implement a user friendly UI for setting up and editing config profiles #2265](https://github.com/zowe/zowe-explorer-vscode/issues/2265) - *stretch*
- [Tabular display option for Jobs tree #2258](https://github.com/zowe/zowe-explorer-vscode/issues/2258) - *stretch*
- [Full text search across all the members, like ISPF SrchFor utility does #449](https://github.com/zowe/zowe-explorer-vscode/issues/449) - *stretch*

###  Please users and extenders with continuous development of enhancements for upcoming v2.x releases.

- [Cannot switch from basic auth. to token-based auth. #2590](https://github.com/zowe/vscode-extension-for-zowe/issues/2590) - *in progress* (24Q1 rollover)
- [Investigate support for mutli-root workspaces for documentation purposes #2386](https://github.com/zowe/zowe-explorer-vscode/issues/2386)
- [Add link to log file #2271](https://github.com/zowe/zowe-explorer-vscode/issues/2271) - stretch*
- [Improve experience for using API ML sessions in Zowe Explorer #2252](https://github.com/zowe/zowe-explorer-vscode/issues/2252) - *stretch*: [Support logging in to multiple APIML instances per config file #2264](https://github.com/zowe/zowe-explorer-vscode/issues/2264)

### Reduce Zowe Explorer reported bug count by 20% by the end of the PI. (82 total bugs in repo as of 4/8/2024)

- [ZOWE JOB Data does not refresh #2561](https://github.com/zowe/vscode-extension-for-zowe/issues/2561) - (24Q1 rollover)
- [ZE affecting multi select with VSC 1.87 #2798](https://github.com/zowe/zowe-explorer-vscode/issues/2798) 
- [File keeps trying to be saved if not enough permissions #2627](https://github.com/zowe/zowe-explorer-vscode/issues/2627) 
- [Repeated attempt to save member despite S913 #2406](https://github.com/zowe/zowe-explorer-vscode/issues/2406) 
- [trying to create a new zosmf profile i now get "Error running command zowe.ds.addSession" #2800](https://github.com/zowe/zowe-explorer-vscode/issues/2800)
- [Issue with credentials not being up to date accross views #2465](https://github.com/zowe/zowe-explorer-vscode/issues/2465)  
- [FTP profiles throw error after new credentials entered after 401 #2337](https://github.com/zowe/zowe-explorer-vscode/issues/2337)  
- [ZE's Delete keybindings broken with VSC 1.88 #2825](https://github.com/zowe/zowe-explorer-vscode/issues/2825)
- [Zowe Explorer: Log in/out to/from Authentication Service Keyboard Shortcuts not working #2294](https://github.com/zowe/zowe-explorer-vscode/issues/2294)
- [USS delete quick key broken #2796](https://github.com/zowe/zowe-explorer-vscode/issues/2796)
- [copy/paste keybinding not working correctly in USS tree view #2823](https://github.com/zowe/zowe-explorer-vscode/issues/2823)
- [Error when user clicks on favorited job #2618](https://github.com/zowe/zowe-explorer-vscode/issues/2618) - *stretch*
- [Unexpected behavior in TSO Commands #2528](https://github.com/zowe/zowe-explorer-vscode/issues/2528) - *stretch*
- [[zFTP] Data connection encryption field issue when updating a profile #1865](https://github.com/zowe/zowe-explorer-vscode/issues/1865) - *stretch*

### CICS Related Issues (STRETCH)
- [When a 401 response is received let the user know their credentials are invalid cics-for-zowe-client#61](https://github.com/zowe/cics-for-zowe-client/issues/61) - *stretch*
- [Errors are not user-friendly cics-for-zowe-client#118](https://github.com/zowe/cics-for-zowe-client/issues/118) - *stretch*

## Roadmap

### [Add more functionality to the Jobs tree view](https://github.com/zowe/vscode-extension-for-zowe/issues/1597)

**COMPLETED**

- *What problem are you solving?*
  - Users would like a comparable experience working with JES files, Zowe Explorer doesn't have a lot of functionality in that tree compared to others.
- *What are you doing to solve it?*
  - Add more functionality to jobs in the tree, ie. local sorting, filtering, and more.
- *When do you plan to start the work?*
  - 23Q1
- *When do you plan to deliver the solution?*
  - 24Q1

### Enable client certificate authentication in Zowe Explorer

- *What problem are you solving?*
  - Users are unable to configure Zowe Explorer to authenticate to z/OSMF and the Zowe API Mediation Layer using client certificates.
- *What are you doing to solve it?
  - Provide a UI that allows users to select certificate files and use those certificates for authentication to z/OSMF or the APIML.
- *When do you plan to start the work?*
  - 24Q1
- *When do you plan to deliver the solution?*
  - 24Q2

### Allow users to access Zowe Explorer treeview resources in an interactive way

- *What problem are you solving?*
  - Users and extenders want to be able to see more information than the current treeviews can provide.
- *What are you doing to solve it?
  - Provide a way to view Zowe Explorer resources that provides more information, possibly as a table with sortable columns providing information about each resource, for example.
- *When do you plan to start the work?*
  - 24Q2
- *When do you plan to deliver the solution?*
  - 24Q3

### Searching within data sets and jobs

- *What problem are you solving?*
  - Users that are accustomed to using Search-For in ISPF cannot search for a string in data sets or job spool files using Zowe Explorer.
- *What are you doing to solve it?
  - Give users the ability to search for a string in a filtered list of data sets and jobs, returning a list of data sets or jobs that contain the search term.
- *When do you plan to start the work?*
  - 24Q2
- *When do you plan to deliver the solution?*
  - 24Q3

### [Improve experience for using API ML sessions in Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2252)

- *What problem are you solving?*
  - Many users of Zowe Explorer aren't familiar with or are unaware of authentication methods supported by Zowe Explorer, like token authentication, SSO, & MFA. 
- *What are you doing to solve it?
  - For users of the API ML with SSO and MFA, there are enhancements we could make to provide a more first-class experience.
- *When do you plan to start the work?*
  - 23Q3
- *When do you plan to deliver the solution?*
  - 24Q2

### [Zowe Explorer v3 GA](https://github.com/zowe/zowe-explorer-vscode/milestone/119)

- *What problem are you solving?*
  -  We have a great deal of items to complete for the v3 GA date and we don't want to miss anything important.
- *What are you doing to solve it?
  - Prepare a plan for dependency & engine updates, enhancements, migration tactics, and other items needed for our v3 GA release.
- *When do you plan to start the work?*
  - The work has been in progress since 23Q1
- *When do you plan to deliver the solution?*
  - 24Q3


