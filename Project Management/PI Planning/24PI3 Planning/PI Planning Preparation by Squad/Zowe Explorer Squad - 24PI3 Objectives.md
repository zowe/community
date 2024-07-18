# Zowe Explorer Squad - 24PI3 - (2024/07/23 - 2024/10/21)

[Zowe Explorer Github Roadmap](https://github.com/orgs/zowe/projects/15/views/9)

## Upcoming Release Plans 

### 2.18.0 Release

- [File keeps trying to be saved if not enough permissions #2627](https://github.com/zowe/zowe-explorer-vscode/issues/2627) 
- [Repeated attempt to save member despite S913 #2406](https://github.com/zowe/zowe-explorer-vscode/issues/2406)
- [FTP profiles throw error after new credentials entered after 401 #2337](https://github.com/zowe/zowe-explorer-vscode/issues/2337)  
- [Contribute z/OS console panel #2925](https://github.com/zowe/zowe-explorer-vscode/pull/2925)
- [Unexpected behavior in TSO Commands #2528](https://github.com/zowe/zowe-explorer-vscode/issues/2528)
- [Bearer token associated with PDS member opening is always the original even after new one is aquired #3001](https://github.com/zowe/zowe-explorer-vscode/issues/3001)
- [Support VS Code proxy settings #3010](https://github.com/zowe/zowe-explorer-vscode/issues/3010)

### 3.0.0 GA Release

- [Investigate support for mutli-root workspaces for documentation purposes #2386](https://github.com/zowe/zowe-explorer-vscode/issues/2386)
- [Strange behavior when running SSH command if credentials are not yet stored #2762](https://github.com/zowe/zowe-explorer-vscode/issues/2762)
- [Support globs/wildcard patterns in resource URIs #2939](https://github.com/zowe/zowe-explorer-vscode/issues/2939)
- [Review inconsistent capitalization across translation strings #2935](https://github.com/zowe/zowe-explorer-vscode/issues/2935)
- [Remote lookup functionality for URIs that do not yet exist #2938](https://github.com/zowe/zowe-explorer-vscode/issues/2938)
- [Remove zFTP pop up on startup #2862](https://github.com/zowe/zowe-explorer-vscode/issues/2862)
- [v3 - Should handle SSH profile credentials vs throw error #2901](https://github.com/zowe/zowe-explorer-vscode/issues/2901)
- [Warn users that v1 profiles are going away soon #2763](https://github.com/zowe/zowe-explorer-vscode/issues/2763)
- [issue updating credentials in v3 pre-release #3007](https://github.com/zowe/zowe-explorer-vscode/issues/3007)
- [Updating credentials empties all tree views in the Activity Bar #2906](https://github.com/zowe/zowe-explorer-vscode/issues/2906)
- [V3: Migrate away from @zowe/cli to @zowe/*-for-zowe-sdk packages #2719](https://github.com/zowe/zowe-explorer-vscode/issues/2719) - complete
- [Support logging in to multiple APIML instances per config file #2264](https://github.com/zowe/zowe-explorer-vscode/issues/2264)
- [Localize strings in webviews #2983](https://github.com/zowe/zowe-explorer-vscode/issues/2983)



## Roadmap

### [Zowe Explorer v3 GA](https://github.com/zowe/zowe-explorer-vscode/milestone/119)

- *What problem are you solving?*
  -  We have a great deal of items to complete for the v3 GA date and we don't want to miss anything important.
- *What are you doing to solve it?
  - Prepare a plan for dependency & engine updates, enhancements, migration tactics, and other items needed for our v3 GA release.
- *When do you plan to start the work?*
  - The work has been in progress since 23Q1
- *When do you plan to deliver the solution?*
  - 24Q3
 
### [Improve experience for using API ML sessions in Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2252)

- *What problem are you solving?*
  - Many users of Zowe Explorer aren't familiar with or are unaware of authentication methods supported by Zowe Explorer, like token authentication, SSO, & MFA. 
- *What are you doing to solve it?
  - For users of the API ML with SSO and MFA, there are enhancements we could make to provide a more first-class experience.
- *When do you plan to start the work?*
  - 23Q2
- *When do you plan to deliver the solution?*
  - 24Q3
 
### Allow users to access Zowe Explorer treeview resources in an interactive way

- *What problem are you solving?*
  - Users and extenders want to be able to see more information than the current treeviews can provide.
- *What are you doing to solve it?
  - Provide a way to view Zowe Explorer resources that provides more information, possibly as a table with sortable columns providing information about each resource, for example.
- *When do you plan to start the work?*
  - 24Q2
- *When do you plan to deliver the solution?*
  - 24Q4

### Enable client certificate authentication in Zowe Explorer

- *What problem are you solving?*
  - Users are unable to configure Zowe Explorer to authenticate to z/OSMF and the Zowe API Mediation Layer using client certificates.
- *What are you doing to solve it?
  - Provide a UI that allows users to select certificate files and use those certificates for authentication to z/OSMF or the APIML.
- *When do you plan to start the work?*
  - 24Q2
- *When do you plan to deliver the solution?*
  - 24Q4

### Searching within data sets and jobs

- *What problem are you solving?*
  - Users that are accustomed to using Search-For in ISPF cannot search for a string in data sets or job spool files using Zowe Explorer.
- *What are you doing to solve it?
  - Give users the ability to search for a string in a filtered list of data sets and jobs, returning a list of data sets or jobs that contain the search term.
- *When do you plan to start the work?*
  - 24Q4
- *When do you plan to deliver the solution?*
  - 25Q2
