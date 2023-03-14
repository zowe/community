# Zowe Explorer Squad - 23PI1 - (2022/10/25 - 2023/01/23)

## Improve Zowe Explorer User Experience

### Users would like to see Zowe Explorer supported in multiple different environments.

- [ ] [Add support for Kubernetes Secrets in Che](https://github.com/zowe/vscode-extension-for-zowe/issues/1963)
- [ ] [STRETCH] [Investigate support for Zowe Explorer in Codespaces](https://github.com/zowe/vscode-extension-for-zowe/issues/1854)
- [ ] [Deferred] [Enable ZE and ZFTP to be used on vscode.dev](https://github.com/zowe/vscode-extension-for-zowe/issues/1798)

### Users would like better Logging from Zowe Explorer to help troubleshoot issues.

- [ ] [Bug: Issue with log file path when using VSC Dev Host](https://github.com/zowe/vscode-extension-for-zowe/issues/1926)
- [ ] [Create a set of Rules for developers for use of different levels and how to handle customer information in the logs.](https://github.com/zowe/vscode-extension-for-zowe/issues/1962)
- [ ] [Zowe Explorer User Setting for log level.](https://github.com/zowe/vscode-extension-for-zowe/issues/1961)
- [ ] [Zowe Explorer Output View logging](https://github.com/zowe/vscode-extension-for-zowe/issues/1918)

### Increase Zowe Explorer stability and error handling

- [ ] [Allow users to easily open team config to address errors from readFromDisk()](https://github.com/zowe/vscode-extension-for-zowe/issues/1986)
- [ ] [Loading project in theia/che environment config not recognized until reload](https://github.com/zowe/vscode-extension-for-zowe/issues/1984)
- [ ] [Minimize the activate() function to have less chance of failure](https://github.com/zowe/vscode-extension-for-zowe/issues/1985)

## High Priority items and technical debt 

- [ ] [Can’t connect nor addSession onZowe](https://github.com/zowe/vscode-extension-for-zowe/issues/2019)
- [ ] [Open solution for default file allocations settings](https://github.com/zowe/vscode-extension-for-zowe/issues/1425)
- [ ] [Edge case regarding standardization of settings](https://github.com/zowe/vscode-extension-for-zowe/issues/1520)
- [ ] [Add a security scanning tool to the build pipeline (e.g. CodeQL)](https://github.com/zowe/vscode-extension-for-zowe/issues/1256)
- [ ] [Data corruption happens during update or modification operation](https://github.com/zowe/vscode-extension-for-zowe/issues/1948)
- [ ] [JOBS section refresh & multiple tabs](https://github.com/zowe/vscode-extension-for-zowe/issues/1952)
- [ ] [Update eslint rules for errors](https://github.com/zowe/vscode-extension-for-zowe/issues/2068)
- [ ] [Clean-up rediscovered code smells/duplication warnings](https://github.com/zowe/vscode-extension-for-zowe/issues/2063)
- [ ] [STRETCH] [Zowe profiles in Zowe Explorer should allow and use value of specification for --console-name to be used when issuing commands](https://github.com/zowe/vscode-extension-for-zowe/issues/1667)

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

Users would like more tree view actions in Zowe Explorer to have multi-select functionality.
-	This work has already begun, but is a large amount of work to do across all 3 tree views within Zowe Explorer.
- Plan to fully complete epic items by end of 1st quarter 2023.

## [Zowe Explorer Supported Environments](https://github.com/zowe/vscode-extension-for-zowe/issues/1862)

Users are submitting issues about Zowe Explorer not working in different environments.
We plan to consider other environments requested by users, this will require research and depending on the research we will decide if support is feasible.  
- Research will begin in the 4th quarter PI of 2022.
- Decisions made to continue the work will happen in the 1st quarter PI of 2023.

## [Updating GUI to use other types of notifications vs all pop ups](https://github.com/zowe/vscode-extension-for-zowe/issues/1517)

Users would like to see less pop up notifications from Zowe Explorer to lessen the distractions that they cause in VS Code.
-	Plan to fully complete epic items by end of 1st quarter of 2023.

## [Improve logging and potential output view to better support end users](https://github.com/zowe/vscode-extension-for-zowe/issues/1024)

Users would like better Logging from Zowe Explorer to help troubleshoot issues.
- We plan to start this work in the 4th quarter PI of 2022 with developer documentation in our wiki on best practices and plan to add a log setting and write the logs to a newly created Zowe Explorer Output view in addition to the log file so users don’t have to leave the VS Code space to see logging.
- Plan to fully complete epic items by end of 2nd quarter of 2023.

## [Enhancements to Extensibility APIs](https://github.com/zowe/vscode-extension-for-zowe/issues/1791)

Extenders would like more robust Extensibility APIs to adopt for their VS Code Zowe Explorer extensions.
We have a long list of requested extensibility APIs for extenders. 
- Plan to fully complete epic items by end of 3rd quarter of 2023.
