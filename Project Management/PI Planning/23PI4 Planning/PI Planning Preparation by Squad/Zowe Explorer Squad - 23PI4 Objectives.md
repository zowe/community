# Zowe Explorer Squad - 23PI4 - (2023/10/31 - 2024/01/22)

## Zowe Explorer

### v3 Release work

- [ ] [Add UI for managing local storage history data for USS/DS/Jobs](https://github.com/zowe/vscode-extension-for-zowe/issues/2488)
- [ ] [Minimize the activate() function to have less chance of failure](https://github.com/zowe/vscode-extension-for-zowe/issues/1985)
- [ ] [STRETCH] [Group common method into Singleton classes](https://github.com/zowe/vscode-extension-for-zowe/issues/2109)
- [ ] [STRETCH] [Use vscode.FileSystemProvider for content downloaded from mainframe](https://github.com/zowe/vscode-extension-for-zowe/issues/2207)
- [ ] [STRETCH] [Forward all extra properties to the SDK calls](https://github.com/zowe/vscode-extension-for-zowe/issues/2399)

### Added functionality to JOBS tree view

- [ ] [Display confirmation dialog when submitting JCL from the command palette](https://github.com/zowe/vscode-extension-for-zowe/issues/2061)
- [ ] [Add z/OS System Name (SMFID) tp Zpwe Explorer Jobs view](https://github.com/zowe/vscode-extension-for-zowe/issues/2308)
- [ ] [distinguish the different JES QUEUEs](https://github.com/zowe/vscode-extension-for-zowe/issues/2255)
- [ ] [Tabular display option for Jobs tree](https://github.com/zowe/vscode-extension-for-zowe/issues/2258)

### Improve Error handling

- [ ] [Error when tokenValue is missing and tokenType is API ML's](https://github.com/zowe/vscode-extension-for-zowe/issues/1759)
- [ ] [Loading project in theia/che environment in case of errors blocking ZE from being activated](https://github.com/zowe/vscode-extension-for-zowe/issues/1984)
- [ ] [Unable to activate the extender extension in case of errors blocking Zowe Explorer from being activated](https://github.com/zowe/vscode-extension-for-zowe/issues/1908)
- [ ] [Zowe Explorer fails to open a USS directory](https://github.com/zowe/vscode-extension-for-zowe/issues/1447)
- [ ] [Cannot retrieve Favorite datasets with *](https://github.com/zowe/vscode-extension-for-zowe/issues/1402)

### High Priority work

- [ ] [Provide Client Side z/OSMF Certificate Support Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2373)
- [ ] [Zowe Explorer causes a lot of rg.exe processes in the background](https://github.com/zowe/vscode-extension-for-zowe/issues/2463)
- [ ] [Remote-SSH: Unable to load profiles on Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2430)
- [ ] [Sorting of PDS member list based on ISPF stats](https://github.com/zowe/vscode-extension-for-zowe/issues/2420)
- [ ] [Add ability to download/view/upload Datasets/Members/USS files in non-standard codepage](https://github.com/zowe/vscode-extension-for-zowe/issues/2435)
- [ ] [zowe profiles create zosmf-profile allow specification of --console-name](https://github.com/zowe/vscode-extension-for-zowe/issues/1667)
- [ ] [Allow Zowe Explorer to check VS Code marketplace to install current credential manager](https://github.com/zowe/vscode-extension-for-zowe/issues/2381)
- [ ] [STRETCH] [Consider adding integration tests using vscode-extension-tester](https://github.com/zowe/vscode-extension-for-zowe/issues/2322)
- [ ] [STRETCH] [Update clipboard-related calls to use a Theia-compatible option](https://github.com/zowe/vscode-extension-for-zowe/issues/2219)

### [STRETCH] Improve UX for token based authentication

- [ ] [STRETCH] [Support logging in to multiple APIML instances per config file](https://github.com/zowe/vscode-extension-for-zowe/issues/2264)
- [ ] [STRETCH] [Prevent users from storing wrong credential type for session](https://github.com/zowe/vscode-extension-for-zowe/issues/2263)
- [ ] [STRETCH] [Search operation does not prompt for login for APIML profile](https://github.com/zowe/vscode-extension-for-zowe/issues/2259)
- [ ] [STRETCH] [Expand session does not prompt for login for APIML profile](https://github.com/zowe/vscode-extension-for-zowe/issues/2261)

### Golden CII Badge

- [ ] [Address missing Passing level MUSTs](https://github.com/zowe/vscode-extension-for-zowe/issues/2400)
- [ ] Investigate Silver level

##### Helpful links for CII Badge criteria

- Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
- Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
- Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

## CICS

- [ ] Complete move to [cics-for-zowe-client repository](https://github.com/zowe/cics-for-zowe-client) with CLI plugin and be publish ready

## Roadmap

### COMPLETE [v3 Pre-Release availability](https://github.com/zowe/vscode-extension-for-zowe/issues/2070)

- *What problem are you solving?*
  - Extenders will need to be aware of breaking changes in the upcoming major release of 3.0.0.
- *What are you doing to solve it?*
  - Publish a pre-release of v3 with documentation of breaking changes so Extenders will be able to begin their adoption early.
- *When do you plan to start the work?*
  - Work has already begun from pre-planning in the 2nd half of last year and implementation began at the beginning of this year.
- *When do you plan to deliver the solution?*
  - 23Q3

### [Add more functionality to the Jobs tree view](https://github.com/zowe/vscode-extension-for-zowe/issues/1597)

- *What problem are you solving?*
  - Users would like a comparable experience working with JES files, Zowe Explorer doesn't have a lot of functionality in that tree compared to others.
- *What are you doing to solve it?*
  - Add more functionality to jobs in the tree, ie. local sorting, filtering, and more.
- *When do you plan to start the work?*
  - 23Q1
- *When do you plan to deliver the solution?*
  - 23Q4

### [Improve error handling](https://github.com/zowe/vscode-extension-for-zowe/issues/1982)

- *What problem are you solving?*
  - Users would like error messages returned to be relevant to the error encountered and describe the issue clearly.
- *What are you doing to solve it?*
  - Make sure all errors are being handled appropriately and make sure the error message returned is helpful and understandable to the user.
- *When do you plan to start the work?*
  - 23Q1
- *When do you plan to deliver the solution?*
  - 23Q4

### [Improve experience for using API ML sessions in Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2252)

- *What problem are you solving?*
  - Many users of Zowe Explorer aren't familiar with or are unaware of authentication methods supported by Zowe Explorer, like token authentication, SSO, & MFA. 
- *What are you doing to solve it?
  - For users of the API ML with SSO and MFA, there are enhancements we could make to provide a more first-class experience.
- *When do you plan to start the work?*
  - 23Q3
- *When do you plan to deliver the solution?*
  - 24Q1
 
### [Zowe Explorer v3 GA]()

- *What problem are you solving?*
  -  We have a great deal of items to complete for the v3 GA date and we don't want to miss anything important.
- *What are you doing to solve it?
  - Prepare a plan for dependency & engine updates, enhancements, migration tactics, and other items needed for our v3 GA release.
- *When do you plan to start the work?*
  - The work has been in progress since 23Q1
- *When do you plan to deliver the solution?*
  - 24Q1
