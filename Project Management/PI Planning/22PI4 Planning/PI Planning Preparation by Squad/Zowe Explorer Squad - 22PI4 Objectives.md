# Zowe Explorer Squad - 22PI4 - (2022/10/25 - 2023/01/23)

## Respond to feedback from the community as V2 LTS is adopted
As Zowe V2 LTS is adopted, we are actively responding to incoming questions on Slack as users transition. In addition to installation, we are helping the community adopt best practices such as team configuration.

## Assist extenders meet V2 LTS conformance standards
As extenders seek V2 LTS conformance, we are actively responding to incoming questions on Slack to ensure our broader suite of extensions work very well together.

## Improve Zowe Explorer User Experience

### Users would like to see Zowe Explorer supported in multiple different environments.

- [ ] [Enable ZE and ZFTP to be used on vscode.dev](https://github.com/zowe/vscode-extension-for-zowe/issues/1798)
- [ ] [Bug: Zowe Explorer silent refresh and quick keys not working in Che](https://github.com/zowe/vscode-extension-for-zowe/issues/1807)
- [ ] [Investigate support for Kubernetes Secrets in Che](https://github.com/zowe/vscode-extension-for-zowe/issues/1963)
- [ ] [ STRETCH] [Investigate support for Zowe Explorer in Codespaces](https://github.com/zowe/vscode-extension-for-zowe/issues/1854)

### Users would like more tree view actions in Zowe Explorer to have multi-select functionality.

- [ ] [Copy/Paste USS files](https://github.com/zowe/vscode-extension-for-zowe/issues/1549)
- [ ] [Data Sets](https://github.com/zowe/vscode-extension-for-zowe/issues/1550)
- [ ] [Hide/Delete session](https://github.com/zowe/vscode-extension-for-zowe/issues/1555)
- [ ] [ STRETCH] [Downloading Spool files](https://github.com/zowe/vscode-extension-for-zowe/issues/1551)

### Users would like better Logging from Zowe Explorer to help troubleshoot issues.

- [ ] [Bug: Issue with log file path when using VSC Dev Host](https://github.com/zowe/vscode-extension-for-zowe/issues/1926)
- [ ] [Create a set of Rules for developers for use of different levels and how to handle customer information in the logs.](https://github.com/zowe/vscode-extension-for-zowe/issues/1962)
- [ ] [ STRETCH] [Zowe Explorer User Setting for log level.](https://github.com/zowe/vscode-extension-for-zowe/issues/1961)
- [ ] [STRETCH][Zowe Explorer Output View logging](https://github.com/zowe/vscode-extension-for-zowe/issues/1918)

### Users would like to see less pop up notifications from Zowe Explorer to lessen the distractions that they cause in VS Code.

- [ ] Reassess the proposal table for items that are pop up notifications to notify the user in a different way, ie. a progress bar or status bar notification. Then break items down into smaller more manageable tasks.
- [ ] [STRETCH][Refactor UI/UX code to stand alone and be reusable across the Zowe Explorer codebase.](https://github.com/zowe/vscode-extension-for-zowe/issues/1967)
### Increase Zowe Explorer stability and error handling

- [ ] [Allow users to easily open team config to address errors from readFromDisk()](https://github.com/zowe/vscode-extension-for-zowe/issues/1986)
- [ ] [Loading project in theia/che environment config not recognized until reload](https://github.com/zowe/vscode-extension-for-zowe/issues/1984)
- [ ] [STRETCH] [Minimize the activate() function to have less chance of failure](https://github.com/zowe/vscode-extension-for-zowe/issues/1985)

## High Priority items and technical debt 

- [ ] [Create all/needed .zowe subfolders, eg ~/.zowe/settings subfolder with file to be independent from Zowe CLI install.](https://github.com/zowe/vscode-extension-for-zowe/issues/1850)
- [ ] [Support building ZE with Node 18](https://github.com/zowe/vscode-extension-for-zowe/issues/1987)
- [ ] [Allow filtering of Jobs by status](https://github.com/zowe/vscode-extension-for-zowe/issues/1925)
- [ ] [Bug: Issues with data sets and members that have special characters in the name.](https://github.com/zowe/vscode-extension-for-zowe/issues/1849)
- [ ] [STRETCH] [Zowe profiles in Zowe Explorer should allow and use value of specification for --console-name to be used when issuing commands](https://github.com/zowe/vscode-extension-for-zowe/issues/1667)
- [ ] [STRETCH] [Deletion of Job should not condense the session](https://github.com/zowe/vscode-extension-for-zowe/issues/1676)

## Golden CII Badge

- [ ] [Increase coverage of project to 90% statement coverage](https://github.com/zowe/vscode-extension-for-zowe/issues/1946)
- [ ] [Increase coverage of project to 80% branch coverage](https://github.com/zowe/vscode-extension-for-zowe/issues/1965)
- [ ] [Make sure internal and external documentation meet the CII Badge standard.](https://github.com/zowe/vscode-extension-for-zowe/issues/1966)

### Helpful links for CII Badge criteria:
Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

## Upvoted issues
Continue to review, prioritize, and implement highly upvoted issues in our repository for [Zowe Explorer, Zowe Explorer for FTP](https://github.com/zowe/vscode-extension-for-zowe/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc) and [Zowe Explorer for CICS](https://github.com/zowe/vscode-extension-for-cics/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc)

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
- This work has already begun, but is a large amount of work to do across all 3 tree views within Zowe Explorer.
- Plan to fully complete epic items by end of 1st quarter 2023.

## [Zowe Explorer Supported Environments](https://github.com/zowe/vscode-extension-for-zowe/issues/1862)

Users are submitting issues about Zowe Explorer not working in different environments.
We plan to consider other environments requested by users, this will require research and depending on the research we will decide if support is feasible.  
- Research will begin in the 4th quarter PI of 2022.
- Decisions made to continue the work will happen in the 1st quarter PI of 2023.

## [Updating GUI to use other types of notifications vs all pop ups](https://github.com/zowe/vscode-extension-for-zowe/issues/1517)

Users would like to see less pop up notifications from Zowe Explorer to lessen the distractions that they cause in VS Code.
- Plan to fully complete epic items by end of 1st quarter of 2023.

## [Improve logging and potential output view to better support end users](https://github.com/zowe/vscode-extension-for-zowe/issues/1024)

Users would like better Logging from Zowe Explorer to help troubleshoot issues.
- We plan to start this work in the 4th quarter PI of 2022 with developer documentation in our wiki on best practices and plan to add a log setting and write the logs to a newly created Zowe Explorer Output view in addition to the log file so users don’t have to leave the VS Code space to see logging.
- Plan to fully complete epic items by end of 2nd quarter of 2023.

## [Enhancements to Extensibility APIs](https://github.com/zowe/vscode-extension-for-zowe/issues/1791)

Extenders would like more robust Extensibility APIs to adopt for their VS Code Zowe Explorer extensions.
We have a long list of requested extensibility APIs for extenders. 
- Plan to fully complete epic items by end of 3rd quarter of 2023.
