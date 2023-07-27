# Zowe Explorer Squad - 23PI3 - (2023/08/01 - 2023/10/23)

## Prepare Zowe Explorer extenders for upcoming v3 breaking changes and new features with v3 pre-releases and documentation.

### v3 Pre-Release early availability

- v3 pre-release UX cleanup [#2360](https://github.com/zowe/vscode-extension-for-zowe/issues/2360)
- Write v3 pre-release blog with updates to users and extenders about breaking changes
- Decide our Big WOWs for v3 per our [discussion](https://github.com/zowe/vscode-extension-for-zowe/discussions/2391#discussioncomment-6552494)
- Issue UNIX command capability [#1326](https://github.com/zowe/vscode-extension-for-zowe/issues/1326)
- [STRETCH] Group common methods into Singleton classes [#2109](https://github.com/zowe/vscode-extension-for-zowe/issues/2109)
- [STRETCH] Minimize the activate() function to have less chance of failure [#1985](https://github.com/zowe/vscode-extension-for-zowe/issues/1985)

## Delight users with added functionality to the Jobs tree view, improved error handling, and by improvinging the user experience in regards to authenticating with the API Mediation Layer within the timeframe laid out in the Zowe Explorer roadmap.

### Add more functionality to the Jobs tree view

- Sort Jobs in Jobs tree [#2257](https://github.com/zowe/vscode-extension-for-zowe/issues/2257)
- Local filtering of JOBS tree [#2256](https://github.com/zowe/vscode-extension-for-zowe/issues/2256)
- sort jobs by timestamp [#1685](https://github.com/zowe/vscode-extension-for-zowe/issues/1685)
- Job Class not accurately reflected in Zowe Explorer [#1951](https://github.com/zowe/vscode-extension-for-zowe/issues/1951)
 
### Improve error handling

- submitting JCL using command palette and following link causes "cannot set property 'dirty' of undefined" error [#1625](https://github.com/zowe/vscode-extension-for-zowe/issues/1625)

### Improve experience for using API ML sessions in Zowe Explorer

- [STRETCH] Expand session does not prompt for login for APIML profile [#2261](https://github.com/zowe/vscode-extension-for-zowe/issues/2261)
- [STRETCH] Search operation does not prompt for login for APIML profile [#2259](https://github.com/zowe/vscode-extension-for-zowe/issues/2259)

## Address known and incoming high priority issues, interests, and technical debt.

### Zowe Explorer VS Code extension

#### Keytar shim in VSC removal in Aug release

- Keytar Migration Plan [#2348](https://github.com/zowe/vscode-extension-for-zowe/issues/2348)
- Write blog with updates to users and extenders about new credential manager

#### High Priority bugs 

- Zowe explorer writes logs into the wrong folder [#1926](https://github.com/zowe/vscode-extension-for-zowe/issues/1926)
- Update clipboard-related calls to use a Theia-compatible option [#2219](https://github.com/zowe/vscode-extension-for-zowe/issues/2219)
- VSC Compare function, not working with Favorites from Zowe Explorer [#2335](https://github.com/zowe/vscode-extension-for-zowe/issues/2335)

#### Enhancements
 
- Add properties view for files in USS [#2254](https://github.com/zowe/vscode-extension-for-zowe/issues/2254)
- [Stretch] Forward all extra properties to the SDK calls [#2399](https://github.com/zowe/vscode-extension-for-zowe/issues/2399)
- [Stretch] zowe profiles create zosmf-profile allow specification of --console-name [#1667](https://github.com/zowe/vscode-extension-for-zowe/issues/1667)
- [Stretch] Use vscode.FileSystemProvider for content downloaded from mainframe [#2207](https://github.com/zowe/vscode-extension-for-zowe/issues/2207)

### zFTP VS Code extension

- Frequently unable to create a new PDS member using the FTP Plugin in VSCode [#2350](https://github.com/zowe/vscode-extension-for-zowe/issues/2350)
  
### CICS VS Code extension

- V2: Failed to initialize Credential manager vscode-extension-for-cics [#324](https://github.com/zowe/vscode-extension-for-cics/issues/324)
- Complete move to [cics-for-zowe-client repository](https://github.com/zowe/cics-for-zowe-client) with CICS CLI plugin to be publish ready.

### Kubernetes Credential Manager Plugin

- Allow Zowe Explorer to install K8s credential manager via user acceptance [#2381](https://github.com/zowe/vscode-extension-for-zowe/issues/2381)
- Update repository README with installation instructions and use cases [#19](https://github.com/zowe/zowe-cli-secrets-for-kubernetes/issues/19)

### Golden CII Badge

- Make sure internal and external documentation meet the CII Badge standard.
- Determine what is left and complete the requirements of Passing level of CII badge [#2400](https://github.com/zowe/vscode-extension-for-zowe/issues/2400)
  
Helpful links for CII Badge criteria:
[Passing](https://bestpractices.coreinfrastructure.org/en/criteria/0), 
[Silver](https://bestpractices.coreinfrastructure.org/en/criteria/1), 
[Gold](https://bestpractices.coreinfrastructure.org/en/criteria/2)

# Roadmap

## [v3 Pre-Release availability](https://github.com/zowe/vscode-extension-for-zowe/issues/2070)

- *What problem are you solving?*
  - Extenders will need to be aware of breaking changes in the upcoming major release of 3.0.0.
- *What are you doing to solve it?*
  - Publish a pre-release of v3 with documentation of breaking changes so Extenders will be able to begin their adoption early.
- *When do you plan to start the work?*
  - Work has already begun from pre-planning in 22Q2 and implementation began in 23Q1.
- *When do you plan to deliver the solution?*
  - 23Q3 

## [Add more functionality to the Jobs tree view](https://github.com/zowe/vscode-extension-for-zowe/issues/1597)

- *What problem are you solving?*
  - Users would like a comparable experience working with JES files, Zowe Explorer doesn't have a lot of functionality in that tree compared to others.
- *What are you doing to solve it?*
  - Add more functionality to jobs in the tree, ie. local sorting, filtering, and more.
- *When do you plan to start the work?*
  - 23Q1
- *When do you plan to deliver the solution?*
  - 23Q4

## [Improve error handling](https://github.com/zowe/vscode-extension-for-zowe/issues/1982)

- *What problem are you solving?*
  - Users would like error messages returned to be relevant to the error encountered and describe the issue clearly.
- *What are you doing to solve it?*
  - Make sure all errors are being handled appropriately and make sure the error message returned is helpful and understandable to the user.
- *When do you plan to start the work?*
  - 23Q1
- *When do you plan to deliver the solution?*
  - 23Q4

## [Improve experience for using API ML sessions in Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2252)

- *What problem are you solving?*
  - Many users of Zowe Explorer aren't familiar with or are unaware of authentication methods supported by Zowe Explorer, like token authentication, SSO, & MFA. 
- *What are you doing to solve it?
  - For users of the API ML with SSO and MFA, there are enhancements we could make to provide a more first-class experience.
- *When do you plan to start the work?*
  - 23Q3
- *When do you plan to deliver the solution?*
  - 24Q1
