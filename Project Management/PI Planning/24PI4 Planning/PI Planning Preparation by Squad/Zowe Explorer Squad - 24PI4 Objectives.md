# Zowe Explorer Squad - 24PI4 - (2024/10/22 - 2025/02/03)

[Zowe Explorer Github Roadmap](https://github.com/orgs/zowe/projects/15/views/9)

## Upcoming Release Plans 

### 2.18.1 Release

- [ZE's Delete keybindings broken with VSC 1.88 #2825](https://github.com/zowe/zowe-explorer-vscode/issues/2825)
- [FTP profiles throw error after new credentials entered after 401 #2337](https://github.com/zowe/zowe-explorer-vscode/issues/2337)
- [Repeated attempt to save member despite S913 #2406](https://github.com/zowe/zowe-explorer-vscode/issues/2406)
- [File keeps trying to be saved if not enough permissions #2627](https://github.com/zowe/zowe-explorer-vscode/issues/2627)
- [[v2] fix(profiles): Pass homeDir, projectDir when creating ProfileInfo instance #3170](https://github.com/zowe/zowe-explorer-vscode/pull/3170)

### 3.0.2 Release

- [Localize strings in webviews #2983](https://github.com/zowe/zowe-explorer-vscode/issues/2983)
- [Element with id No jobs found is already registered #3201](https://github.com/zowe/zowe-explorer-vscode/issues/3201)
- [V3 doesn't prompt for credentials when opening file in editor #3197](https://github.com/zowe/zowe-explorer-vscode/issues/3197)
- [Team conf file creation will add global_base if base already included in config #3141](https://github.com/zowe/zowe-explorer-vscode/issues/3141)
- [Token related operations may cause invalid profiles when multiple layers are involved #3011](https://github.com/zowe/zowe-explorer-vscode/issues/3011)

### 3.1.0 Release

- [Support the Delete Profile option for team config files #3037](https://github.com/zowe/zowe-explorer-vscode/issues/3037)
- [Review inconsistent capitalization across translation strings #2935](https://github.com/zowe/zowe-explorer-vscode/issues/2935)
- [Support globs/wildcard patterns in resource URIs #2939](https://github.com/zowe/zowe-explorer-vscode/issues/2939)
- [Investigate support for mutli-root workspaces for documentation purposes #2386](https://github.com/zowe/zowe-explorer-vscode/issues/2386)
- [Support VS Code proxy settings #3010](https://github.com/zowe/zowe-explorer-vscode/issues/3010)
- [Add support for integrated terminals (MVS, SSH, TSO) #3071](https://github.com/zowe/zowe-explorer-vscode/issues/3071)
- [Full text search across all the members, like ISPF SrchFor utility does #449](https://github.com/zowe/zowe-explorer-vscode/issues/449)
- [Provide Client Side z/OSMF Certificate Support Zowe Explorer #2373](https://github.com/zowe/zowe-explorer-vscode/issues/2373)
- [characters transformed in the result of JOBS #1941](https://github.com/zowe/zowe-explorer-vscode/issues/1941)
- [[z/OSMF profiles] Data Set and USS list API calls do not pass responseTimeout #3225](https://github.com/zowe/zowe-explorer-vscode/issues/3225)
- [Handle PDS members with invalid name errors in V3 #3047](https://github.com/zowe/zowe-explorer-vscode/issues/3047)
- [Filtering large datasets doesn't return expected results #2978](https://github.com/zowe/zowe-explorer-vscode/issues/2978)



## Roadmap
 
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
