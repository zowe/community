# Zowe Explorer Squad - 23PI1 - (2022/10/25 - 2023/01/23)

## Improve Zowe Explorer User Experience

### Users would like to see Zowe Explorer supported in multiple different environments.

- [ ] [Add support for Kubernetes Secrets in Che](https://github.com/zowe/vscode-extension-for-zowe/issues/1963)
- [ ] [STRETCH] [Investigate support for Zowe Explorer in Codespaces](https://github.com/zowe/vscode-extension-for-zowe/issues/1854)
- [ ] [Deferred] [Enable ZE and ZFTP to be used on vscode.dev](https://github.com/zowe/vscode-extension-for-zowe/issues/1798)

### Users would like better Logging from Zowe Explorer to help troubleshoot issues.

- [ ] [Bug: Issue with log file path when using VSC Dev Host](https://github.com/zowe/vscode-extension-for-zowe/issues/1926)
- [ ] [Zowe Explorer User Setting for log level.](https://github.com/zowe/vscode-extension-for-zowe/issues/1961)
- [ ] [Zowe Explorer Output View logging](https://github.com/zowe/vscode-extension-for-zowe/issues/1918)
- [ ] [STRETCH] [Create a set of Rules for developers for use of different levels and how to handle customer information in the logs.](https://github.com/zowe/vscode-extension-for-zowe/issues/1962)

### Increase Zowe Explorer stability and error handling

- [ ] [Allow users to easily open team config to address errors from readFromDisk()](https://github.com/zowe/vscode-extension-for-zowe/issues/1986)
- [ ] [Minimize the activate() function to have less chance of failure](https://github.com/zowe/vscode-extension-for-zowe/issues/1985)
- [ ] [STRETCH] [Loading project in theia/che environment config not recognized until reload](https://github.com/zowe/vscode-extension-for-zowe/issues/1984)

## High Priority items and technical debt 

- [ ] [Can’t connect nor addSession onZowe](https://github.com/zowe/vscode-extension-for-zowe/issues/2019)
- [ ] [Can't connect to mainframe in Theia](https://github.com/zowe/vscode-extension-for-zowe/issues/2095)
- [ ] [Error not displayed in popup message for saving](https://github.com/zowe/vscode-extension-for-zowe/issues/2099)
- [ ] [Open solution for default file allocations settings](https://github.com/zowe/vscode-extension-for-zowe/issues/1425)
- [ ] [Edge case regarding standardization of settings](https://github.com/zowe/vscode-extension-for-zowe/issues/1520)
- [ ] [Add a security scanning tool to the build pipeline (e.g. CodeQL)](https://github.com/zowe/vscode-extension-for-zowe/issues/1256)
- [ ] [Data corruption happens during update or modification operation](https://github.com/zowe/vscode-extension-for-zowe/issues/1948)
- [ ] [JOBS section refresh & multiple tabs](https://github.com/zowe/vscode-extension-for-zowe/issues/1952)
- [ ] [Update eslint rules for errors](https://github.com/zowe/vscode-extension-for-zowe/issues/2068)
- [ ] [Clean-up rediscovered code smells/duplication warnings](https://github.com/zowe/vscode-extension-for-zowe/issues/2063)
- [ ] [Zowe profiles in Zowe Explorer should allow and use value of specification for --console-name to be used when issuing commands](https://github.com/zowe/vscode-extension-for-zowe/issues/1667)

## Golden CII Badge

- [ ] [Increase coverage of project to 90% statement coverage](https://github.com/zowe/vscode-extension-for-zowe/issues/1946)
- [ ] [Increase coverage of project to 80% branch coverage](https://github.com/zowe/vscode-extension-for-zowe/issues/1965)
- [ ] [Make sure internal and external documentation meet the CII Badge standard.](https://github.com/zowe/vscode-extension-for-zowe/issues/1966)

### Helpful links for CII Badge criteria:
Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

# CICS VS Code extension

- [ ] [Support for Web Application development](https://github.com/zowe/vscode-extension-for-cics/issues/273)
- [ ] [Navigate from CICS region to the CEEMSG log](https://github.com/zowe/vscode-extension-for-cics/issues/178)
- [ ] [Navigation from CICS view to DATA SETS view](https://github.com/zowe/vscode-extension-for-cics/issues/250)
- [ ] [STRETCH] [Integrate yarn into the CICS extension](https://github.com/zowe/vscode-extension-for-zowe/discussions/1540)
- [ ] [STRETCH] [Ability to execute a CICS trasaction](https://github.com/zowe/vscode-extension-for-cics/issues/205)
- [ ] [STRETCH] [Update the OMP Cobol Training course to add the VS Code CICS plugin](https://github.com/zowe/vscode-extension-for-cics/issues/189)
   - _Update the course to add the VSCode CICS plugin_
   - _Install CICS in the zCOBOL system_

# Roadmap

## [Multi-selection support for all applicable functionalities](https://github.com/zowe/vscode-extension-for-zowe/issues/1286)
- *What problem are you solving?*
  - Users would like more tree view actions in Zowe Explorer to have multi-select functionality.
- *What are you doing to solve it?
  - Bringing in more multi-select capabilities for Zowe Explorer tree views.
- *When do you plan to start the work?*
  - 22Q3
- *When do you plan to deliver the solution?*
  - 23Q1

## [Zowe Explorer Supported Environments](https://github.com/zowe/vscode-extension-for-zowe/issues/1862)

- *What problem are you solving?*
  - Users are submitting issues about Zowe Explorer not working in different environments.
- *What are you doing to solve it?
  - We plan to consider other environments requested by users, this will require research and depending on the research we will decide if support is feasible.
- *When do you plan to start the work?*
  - 22Q4
- *When do you plan to deliver the solution?*
  - 23Q1

## [Updating GUI to use other types of notifications vs all pop ups](https://github.com/zowe/vscode-extension-for-zowe/issues/1517)

- *What problem are you solving?*
  - Users would like to see less pop up notifications from Zowe Explorer to lessen the distractions that they cause in VS Code.
- *What are you doing to solve it?
  - Assess the types of notifications in place and decide how to proceed.
  - Implement the decided plan of action.
- *When do you plan to start the work?*
  - 22Q3
- *When do you plan to deliver the solution?*
  - 23Q2

## [Improve logging and potential output view to better support end users](https://github.com/zowe/vscode-extension-for-zowe/issues/1024)

- *What problem are you solving?*
  - Users would like better Logging from Zowe Explorer to help troubleshoot issues.
- *What are you doing to solve it?
  - We plan to creat a VS Code setting for log level
  - Using the setting we plan to output the appropriate logs to a VS Code Output view.
- *When do you plan to start the work?*
  - 22Q4
- *When do you plan to deliver the solution?*
  - 23Q2

## [Enhancements to Extensibility APIs](https://github.com/zowe/vscode-extension-for-zowe/issues/1791)

- *What problem are you solving?*
  - Extenders would like more robust Extensibility APIs to adopt for their VS Code Zowe Explorer extensions.
- *What are you doing to solve it?*
  - We will assess the long list of requested extensibility APIs for extenders and decide on which to complete and the precedence of them.
  - Implement the decided list of extensibility APIs in the order of precedence.
- *When do you plan to start the work?*
  - 23Q2
- *When do you plan to deliver the solution?*
  - 23Q3 
