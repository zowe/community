# Zowe Explorer Squad - 23PI2 - (2023/04/25 - 2023/07/24)

## Zowe Explorer VS Code extension

### v3 Pre-Release early availability

- [ ] [Remove v1 profile support](https://github.com/zowe/vscode-extension-for-zowe/issues/2072)
- [ ] [ZE & ZFTP ext: Change `activationEvents` to `onStartupFinished`](https://github.com/zowe/vscode-extension-for-zowe/issues/1910)
- [ ] [Group common methods into Singleton classes](https://github.com/zowe/vscode-extension-for-zowe/issues/2109)
- [ ] [Minimize the activate() function to have less chance of failure](https://github.com/zowe/vscode-extension-for-zowe/issues/1985)
- [ ] [Add `madge` to CI to track circular dependencies](https://github.com/zowe/vscode-extension-for-zowe/issues/2148)
- [ ] [Stretch] [Defer gathering attributes when listing datasets](https://github.com/zowe/vscode-extension-for-zowe/issues/2078)
- [ ] [Stretch] [Respond to TSO Prompts interactively](https://github.com/zowe/vscode-extension-for-zowe/issues/2077)

### High Priority items and technical debt 

##### *Enhancements*

- [ ] [Add support for custom credential manager extensions](https://github.com/zowe/vscode-extension-for-zowe/issues/2212)
- [ ] [Allow --console-name option for issuing commands](https://github.com/zowe/vscode-extension-for-zowe/issues/1667)
- [ ] [Migrate persistent data from user settings to local storage](https://github.com/zowe/vscode-extension-for-zowe/issues/2208)
- [ ] [Open solution for default file allocation settings](https://github.com/zowe/vscode-extension-for-zowe/issues/1425)
- [ ] [Provide support for changing file tags within Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2113)
- [ ] [Investigation] [Improve experience for using API ML sessions in Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/2252)
- [ ] [Stretch] [Use `vscode.FileSystemProvider` for content downloaded from mainframe](https://github.com/zowe/vscode-extension-for-zowe/issues/2207)

##### *Bugs*

- [ ] [Zowe Explorer's log folder location incorrect](https://github.com/zowe/vscode-extension-for-zowe/issues/1926)
- [ ] [submitting JCL using command palette option returns error](https://github.com/zowe/vscode-extension-for-zowe/issues/1625)
- [ ] [Incorrect type in user settings for zowe.settings.version](https://github.com/zowe/vscode-extension-for-zowe/issues/2166)
- [ ] [Profile's file watcher not working in browser based environments](https://github.com/zowe/vscode-extension-for-zowe/issues/2211)
- [ ] [Clicking "Disable validation for profile" is broken](https://github.com/zowe/vscode-extension-for-zowe/issues/1897)
- [ ] [Unable to toggle between Zowe Explorer and 3270](https://github.com/zowe/vscode-extension-for-zowe/issues/2251)

##### *Tech Debt*

- [ ] [fix cases of misuse of `path.join`](https://github.com/zowe/vscode-extension-for-zowe/issues/2172)
- [ ] [Replace Webpack 4 with newer bundler](https://github.com/zowe/vscode-extension-for-zowe/issues/2214)
- [ ] [Replace Gulp 4 with new solution](https://github.com/zowe/vscode-extension-for-zowe/issues/2253)
- [ ] [Stretch] [Integration test improvements](https://github.com/zowe/vscode-extension-for-zowe/issues/2103)
- [ ] [Stretch] [Clean up code smells/duplication warnings](https://github.com/zowe/vscode-extension-for-zowe/issues/2063)

### Golden CII Badge

- [ ] [Make sure internal and external documentation meet the CII Badge standard.](https://github.com/zowe/vscode-extension-for-zowe/issues/1966)

#### Helpful links for CII Badge criteria:
Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

## CICS VS Code extension

- [ ] [Error: Failed to initialize Credential Manager](https://github.com/zowe/vscode-extension-for-cics/issues/324)

## Roadmap

### [v3 Pre-Release availability](https://github.com/zowe/vscode-extension-for-zowe/issues/2070)

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
  - 23Q3
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

## Roadmap items completed by end of 23PI1

### [Zowe Explorer Supported Environments](https://github.com/zowe/vscode-extension-for-zowe/issues/1862)

- *What problem are you solving?*
  - Users are submitting issues about Zowe Explorer not working in different environments.
- *What are you doing to solve it?
  - We plan to consider other environments requested by users, this will require research and depending on the research we will decide if support is feasible.
- *When do you plan to start the work?*
  - 22Q4
- *When do you plan to deliver the solution?*
  - 23Q1

### [Updating GUI to use other types of notifications vs all pop ups](https://github.com/zowe/vscode-extension-for-zowe/issues/1517)

- *What problem are you solving?*
  - Users would like to see less pop up notifications from Zowe Explorer to lessen the distractions that they cause in VS Code.
- *What are you doing to solve it?
  - Assess the types of notifications in place and decide how to proceed.
  - Implement the decided plan of action.
- *When do you plan to start the work?*
  - 22Q3
- *When do you plan to deliver the solution?*
  - 23Q2

### [Improve logging and potential output view to better support end users](https://github.com/zowe/vscode-extension-for-zowe/issues/1024)

- *What problem are you solving?*
  - Users would like better Logging from Zowe Explorer to help troubleshoot issues.
- *What are you doing to solve it?
  - We plan to creat a VS Code setting for log level
  - Using the setting we plan to output the appropriate logs to a VS Code Output view.
- *When do you plan to start the work?*
  - 22Q4
- *When do you plan to deliver the solution?*
  - 23Q2

### [Enhancements to Extensibility APIs](https://github.com/zowe/vscode-extension-for-zowe/issues/1791)

- *What problem are you solving?*
  - Extenders would like more robust Extensibility APIs to adopt for their VS Code Zowe Explorer extensions.
- *What are you doing to solve it?*
  - We will assess the long list of requested extensibility APIs for extenders and decide on which to complete and the precedence of them.
  - Implement the decided list of extensibility APIs in the order of precedence.
- *When do you plan to start the work?*
  - 23Q2
- *When do you plan to deliver the solution?*
  - 23Q3 
