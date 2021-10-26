# Zowe Explorer Squad - 21PI4 Objectives (Oct 2021 to January 2022)


## Conformance Criteria Technical Implementation

* [Publish and support an official Extensibility API with conformance rules #837](https://github.com/zowe/vscode-extension-for-zowe/issues/837)  
Create a well-defined and documented extensibility conformance rules for extenders.

ZE Squad Plan:  
- [Centralized error handling - Updates](https://github.com/zowe/vscode-extension-for-zowe/issues/388)
  - Include the Error Handling API in the Zowe Explorer codebase
  - Update the Error Handling API to accept buttons
- [Login/Logout capability for extenders](https://github.com/zowe/vscode-extension-for-zowe/issues/1255)
- (Squad-Discussion) [V2 Conformance Criteria ](https://github.com/zowe/vscode-extension-for-zowe/discussions/1534)

  
## Support the Team Configuration file in Zowe Explorer

* [Support for configuration file that Zowe CLI @next provides #1181](https://github.com/zowe/vscode-extension-for-zowe/issues/1181)  
Continue the development work for the team configuration file in Zowe Explorer

ZE Squad Plan:  
- [Allow Extenders to access the team configuration file](https://github.com/zowe/vscode-extension-for-zowe/issues/1528)
- [Research refresh options after creation and update of config file](https://github.com/zowe/vscode-extension-for-zowe/issues/1514)
- (Squad-Discussion) [Managing the team configuration file](https://github.com/zowe/vscode-extension-for-zowe/discussions/1535)
- [STRETCH] [Implement the zowe config auto-init](https://github.com/zowe/vscode-extension-for-zowe/issues/1536)
- [STRETCH] [Enable the usage of tokens](https://github.com/zowe/vscode-extension-for-zowe/issues/1541)

## Prioritized Feature Requests and High Impact Issues

- [Issue TSO & MVS Commands Polish Work](https://github.com/zowe/vscode-extension-for-zowe/issues/1297)
- [Multi-selection support for all applicable functionalities](https://github.com/zowe/vscode-extension-for-zowe/issues/1286)
- [Relative path for Zowe-Temp-Folder-Location](https://github.com/zowe/vscode-extension-for-zowe/issues/1053)
- [Standardize the dialog boxes and progress bar](https://github.com/zowe/vscode-extension-for-zowe/issues/1537)
- [Remove Linked Profiles Feature](https://github.com/zowe/vscode-extension-for-zowe/issues/1280)
- [Add FTP and CICS VSC ext in the zowe technical preview page](https://github.com/zowe/vscode-extension-for-zowe/issues/1546)
- [Add FTP extension in the Zowe doc site](https://github.com/zowe/vscode-extension-for-zowe/issues/1562)
- [STRETCH] [Change Password through z/OSMF Auth API](https://github.com/zowe/vscode-extension-for-zowe/issues/1538)
  
# FTP VSCode Extension Objectives
- [Test automation for FTP package](https://github.com/zowe/vscode-extension-for-zowe/issues/1028)

# CICS VSCode Extension Objectives

- (Squad-Discussion) [Include CICS in Zowe Explorer Mono Repo](https://github.com/zowe/vscode-extension-for-zowe/discussions/1540)
- [Theia Check for WebView compatibility](https://github.com/zowe/vscode-extension-for-cics/issues/64)
- Work with [OMP Cobol Training Course](https://github.com/openmainframeproject/cobol-programming-course).
  - Update the course to add the VSCode CICS plugin
  - Install CICS in the zCOBOL system
- [Get a Zowe conformance badge](https://github.com/zowe/vscode-extension-for-cics/issues/105)
- [Include documentation on Zowe docs site](https://github.com/zowe/vscode-extension-for-cics/issues/106)
- [Provide an API for other VS Code extension to access tree items and contribute implementations](https://github.com/zowe/vscode-extension-for-cics/issues/101).
- [Create a test pipeline](https://github.com/zowe/vscode-extension-for-cics/issues/4)
- [STRETCH] [Investigate vNext for Zowe Explorer and Team Configuration support](https://github.com/zowe/vscode-extension-for-cics/issues/107)
- [STRETCH] [Investigate favourites](https://github.com/zowe/vscode-extension-for-cics/issues/92)
- [STRETCH] Categorise attributes into different sections like the CICS Explorer and make it more user-friendly
  - Include 'help' tab that gives more information about attributes.
- [STRETCH] Support CICS 'Web Services'
  - Web Service
  - TCP/IP Service
  - URI Maps
  - Note: May need to enhance CICS CLI capabilities for these additional resources

## Risks
- Less capacity for this PI

## Dependencies
- Zowe Explorer Squad (CICS extension)
- Zowe CLI Team
- Zowe Onboarding Team

### Confidence Vote Avg: 4, 3, 4, 4, 4, 4, 3, 4, 4 = 3.78