# Zowe Explorer Squad - 22PI4 - (2022/10/25 - 2023/01/23)

## Respond to feedback from the community as V2 LTS is adopted
As Zowe V2 LTS is adopted, we are actively responding to incoming questions on Slack as users transition. In addition to installation, we are helping the community adopt best practices such as team configuration.

## Assist extenders meet V2 LTS conformance standards
As extenders seek V2 LTS conformance, we are actively responding to incoming questions on Slack to ensure our broader suite of extensions work very well together.

## Issues
For a more detailed list of the issues there were deferred, please see [Zowe Explorer #1717](https://github.com/zowe/vscode-extension-for-zowe/issues/1717)

### Bug Fixes
- [ ] Refresh required after Login operation [ZE#1750](https://github.com/zowe/vscode-extension-for-zowe/issues/1750)
- [ ] Requests are issued to z/OS when a tree item is being closed [ZE#754](https://github.com/zowe/vscode-extension-for-zowe/issues/754)
- [ ] Quick-key Delete not working in USS tree [ZE#1510](https://github.com/zowe/vscode-extension-for-zowe/issues/1510)
- [ ] Log4js disrupts Zowe Explorer's initialization process in Eclipse Che [ZE#1692](https://github.com/zowe/vscode-extension-for-zowe/issues/1692)
- [ ] Handle profile creation/update for ZE extender profiles requiring credentials when the user leaves them blank [ZE#1619](https://github.com/zowe/vscode-extension-for-zowe/issues/1619)
- [ ] Missing or wrong schema files can prevent ZE or extenders of ProfilesCache from initializing [ZE#1781](https://github.com/zowe/vscode-extension-for-zowe/issues/1781)
- [ ] [STRETCH] Issues with USS files having "same name", but different case [ZE#1484](https://github.com/zowe/vscode-extension-for-zowe/issues1484)
- [x] Saving file gets FTP error and deletes file on mainframe side [ZE-FTP#1707](https://github.com/zowe/vscode-extension-for-zowe/issues/1707)
- [ ] FTP Extension - Numerous FTP tasks started on the host [ZE-FTP#1196](https://github.com/zowe/vscode-extension-for-zowe/issues/1196)

### Enhancements
- [ ] Issue UNIX Command Capability [ZE#1326](https://github.com/zowe/vscode-extension-for-zowe/issues/1236)
- [ ] Ability to Organize Datasets into projects [ZE#1568](https://github.com/zowe/vscode-extension-for-zowe/issues/1568)
- [ ] [STRETCH] Standardize the dialog boxes and progress bar [ZE#1537](https://github.com/zowe/vscode-extension-for-zowe/issues/1537)
- [ ] [STRETCH] Relative path for Zowe-Temp-Folder-Location [ZE#1053](https://github.com/zowe/vscode-extension-for-zowe/issues/1053)
- [ ] [STRETCH] Issue TSO & MVS Commands Polish Work [ZE#1297](https://github.com/zowe/vscode-extension-for-zowe/issues/1297)
- [ ] [STRETCH] Research possible integration with Zowe ChatBot [ZE#1782](https://github.com/zowe/vscode-extension-for-zowe/issues/1782)
- [ ] Add more resource types [ZE-CICS#191](https://github.com/zowe/vscode-extension-for-cics/issues/191)
  - Web Service
  - TCP/IP Service
  - URI Maps
  - Library
  - Note: May need to enhance CICS CLI capabilities for these additional resources
- [ ] [STRETCH] Update the OMP Cobol Training Course course to add the VSCode CICS plugin [ZE-CICS#189](https://github.com/zowe/vscode-extension-for-cics/issues/189)
  - Update the course to add the VSCode CICS plugin
  - Install CICS in the zCOBOL system
- [ ] [STRETCH] Categorise attributes into different sections to make it more user-friendly [ZE-CICS#190](https://github.com/zowe/vscode-extension-for-cics/issues/190)
  - Include 'help' tab that gives more information about attributes.
- [ ] [DEFERRED] Update global config when a new extender registers with Zowe Explorer [ZE#1642](https://github.com/zowe/vscode-extension-for-zowe/issues/1642)
  - Dependency: Architecture/Design discussion between Zowe Client Components (CLI, VSCEs, IntelliJ, ...)

### Technical Debt
- [ ] Make Zowe a verified publisher on VS Code Marketplace [ZE#1570](https://github.com/zowe/vscode-extension-for-zowe/issues/1570)
  - Dependency: Help needed to get DNS
- [ ] `zowe-explorer-api` distributes src folder [ZE#1482](https://github.com/zowe/vscode-extension-for-zowe/issues/1482)
- [ ] [STRETCH] Zowe CII Badge items for Zowe Explorer [ZE#1705](https://github.com/zowe/vscode-extension-for-zowe/issues/1705)
- [ ] Test the CICS extension on Eclipse Che [ZE-CICS#64](https://github.com/zowe/vscode-extension-for-cics/issues/64)

### Upvoted issues
Continue to review, prioritize, and implement highly upvoted issues in our repository for [Zowe Explorer, Zowe Explorer for FTP](https://github.com/zowe/vscode-extension-for-zowe/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc) and [Zowe Explorer for CICS](https://github.com/zowe/vscode-extension-for-cics/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc)
