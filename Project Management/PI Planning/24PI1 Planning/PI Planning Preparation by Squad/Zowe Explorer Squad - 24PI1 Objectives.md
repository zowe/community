## Zowe Explorer Squad - 24PI1 - (2024/01/30 - 2024/04/22)

### V3 GA readiness

#### Technical Debt

- [Add profiles convert to team config capability  #2284](https://github.com/zowe/vscode-extension-for-zowe/issues/2284)
- [Replace Webpack 4 with newer bundler #2214](https://github.com/zowe/vscode-extension-for-zowe/issues/2214)
- [Group common methods into Singleton classes #2109](https://github.com/zowe/vscode-extension-for-zowe/issues/2109)
- [Use vscode.FileSystemProvider for content downloaded from mainframe #2207](https://github.com/zowe/vscode-extension-for-zowe/issues/2207)
- [Remove code related to Theia support  #2647](https://github.com/zowe/vscode-extension-for-zowe/issues/2647) - stretch
- ~[Replace Gulp 4 with new solution #2253](https://github.com/zowe/vscode-extension-for-zowe/issues/2253)~ completed

#### Authentication

- [Support Certificate Authentication #2621](https://github.com/zowe/vscode-extension-for-zowe/issues/2621)
- [Provide Client Side z/OSMF Certificate Support Zowe Explorer #2373](https://github.com/zowe/vscode-extension-for-zowe/issues/2373)
- [Support logging in to multiple APIML instances per config file #2264](https://github.com/zowe/vscode-extension-for-zowe/issues/2264)  - stretch

#### Extenders

- [Add custom schemas provided by extenders to the schema.json file #2508](https://github.com/zowe/vscode-extension-for-zowe/issues/2508)
- ~[Schema parameter not really optional #2575](https://github.com/zowe/vscode-extension-for-zowe/issues/2575)~ completed

#### UI

- [Forward all extra properties to the SDK calls #2399](https://github.com/zowe/vscode-extension-for-zowe/issues/2399)
- [distinguish the different JES QUEUEs #2255](https://github.com/zowe/vscode-extension-for-zowe/issues/2255)
- [sort jobs by timestamp #1685](https://github.com/zowe/vscode-extension-for-zowe/issues/1685)
- [zowe profiles create zosmf-profile allow specification of --console-name  #1667](https://github.com/zowe/vscode-extension-for-zowe/issues/1667) - stretch
- [Allow sorting of PDS members by date created #2565](https://github.com/zowe/vscode-extension-for-zowe/issues/2565) - stretch

### V2 maintenance readiness 

#### High Priority Fixes

- FTP profile upload issue [zftp: Members aren't saved, message "Saving data set..." but nothing happens and never ends. #2499](https://github.com/zowe/vscode-extension-for-zowe/issues/2499)
- [Remote-SSH: Unable to load profiles on Zowe Explorer #2430](https://github.com/zowe/vscode-extension-for-zowe/issues/2430)
- [Pull from Mainframe is adding extra characters to each record/line #2169](https://github.com/zowe/vscode-extension-for-zowe/issues/2169)
- [Zowe Explorer causes a lot of rg.exe processes in the background #2463](https://github.com/zowe/vscode-extension-for-zowe/issues/2463)
- [When the default profile has apiml token authentication, other profiles inaccessible #2111](https://github.com/zowe/vscode-extension-for-zowe/issues/2111)
- ~[Update clipboard-related calls to use a Theia-compatible option #2219](https://github.com/zowe/vscode-extension-for-zowe/issues/2219)~ - Closed as not planned

#### Authentication

- [Cannot switch from basic auth. to token-based auth. #2590](https://github.com/zowe/vscode-extension-for-zowe/issues/2590)
- ["Log out of authentication service" and "zowe auth logout apiml" Not working #2544](https://github.com/zowe/vscode-extension-for-zowe/issues/2544)

#### Jobs Tree

- [ZOWE JOB Data does not refresh #2561](https://github.com/zowe/vscode-extension-for-zowe/issues/2561)
- ~[Recent search JOB filter does not work #2562](https://github.com/zowe/vscode-extension-for-zowe/issues/2562)~ completed

#### Extenders

- [Zowe Explorer API Profile Cache caching #2395](https://github.com/zowe/vscode-extension-for-zowe/issues/2395)

#### DS Allocation 

- ~[blksz to 0 after an Allocate Like #2610](https://github.com/zowe/vscode-extension-for-zowe/issues/2610)~ completed: solution delivered by the CLI team

### Blogging

- K8s Credential Manager
- Zowe Explorer v3

## Roadmap

### [Improve error handling](https://github.com/zowe/vscode-extension-for-zowe/issues/1982)

*COMPLETE*

- *What problem are you solving?*
  - Users would like error messages returned to be relevant to the error encountered and describe the issue clearly.
- *What are you doing to solve it?*
  - Make sure all errors are being handled appropriately and make sure the error message returned is helpful and understandable to the user.
- *When do you plan to start the work?*
  - 23Q1
- *When do you plan to deliver the solution?*
  - 23Q4

### [Zowe Explorer v3 GA]()

- *What problem are you solving?*
  -  We have a great deal of items to complete for the v3 GA date and we don't want to miss anything important.
- *What are you doing to solve it?
  - Prepare a plan for dependency & engine updates, enhancements, migration tactics, and other items needed for our v3 GA release.
- *When do you plan to start the work?*
  - The work has been in progress since 23Q1
- *When do you plan to deliver the solution?*
  - 24Q1

### [Add more functionality to the Jobs tree view](https://github.com/zowe/vscode-extension-for-zowe/issues/1597)

- *What problem are you solving?*
  - Users would like a comparable experience working with JES files, Zowe Explorer doesn't have a lot of functionality in that tree compared to others.
- *What are you doing to solve it?*
  - Add more functionality to jobs in the tree, ie. local sorting, filtering, and more.
- *When do you plan to start the work?*
  - 23Q1
- *When do you plan to deliver the solution?*
  - 24Q1

### [Improve experience for using API ML sessions in Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2252)

- *What problem are you solving?*
  - Many users of Zowe Explorer aren't familiar with or are unaware of authentication methods supported by Zowe Explorer, like token authentication, SSO, & MFA. 
- *What are you doing to solve it?
  - For users of the API ML with SSO and MFA, there are enhancements we could make to provide a more first-class experience.
- *When do you plan to start the work?*
  - 23Q3
- *When do you plan to deliver the solution?*
  - 24Q2



