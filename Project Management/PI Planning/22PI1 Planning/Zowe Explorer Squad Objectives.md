# Zowe Explorer Squad - 22PI1 Objectives


## Conformance Criteria Technical Implementation

* [Publish and support an official Extensibility API with conformance rules #837](https://github.com/zowe/vscode-extension-for-zowe/issues/837)  
Create a well-defined and documented extensibility conformance rules for extenders.

ZE Squad Plan:  
- [Centralized error handling - Updates](https://github.com/zowe/vscode-extension-for-zowe/issues/388)
  - Include the Error Handling API in the Zowe Explorer codebase
  - Update the Error Handling API to accept buttons
- Respond to Extender Feedback on our [V2 Conformance Criteria ](https://github.com/zowe/vscode-extension-for-zowe/discussions/1534)

  
## Support the Team Configuration file in Zowe Explorer

* [Support for configuration file that Zowe CLI @next provides #1181](https://github.com/zowe/vscode-extension-for-zowe/issues/1181)  
Continue the development work for the team configuration file in Zowe Explorer

ZE Squad Plan:  
- [Allow users to update securely stored values using the Zowe team config](https://github.com/zowe/vscode-extension-for-zowe/issues/1646)
- [Allow users to update expired credentials](https://github.com/zowe/vscode-extension-for-zowe/issues/1647)
- (Squad-Discussion) [Managing the team configuration file](https://github.com/zowe/vscode-extension-for-zowe/discussions/1535)
- [Allow users to use their APIML instance to initialize a team configuration file](https://github.com/zowe/vscode-extension-for-zowe/issues/1536)
- [Enable login and logout using team config](https://github.com/zowe/vscode-extension-for-zowe/issues/1541)
- [Update global config when a new extender registers with Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe/issues/1642)

## Additional V2 Considerations
* Ensure documentation is validated from a fresh install and migration perspective
* Define and effectively communicate how multiple major releases (V1 & V2) will be managed on the marketplace
* [Update dependencies & documentation regarding minimum VS Code version requirement](https://github.com/zowe/vscode-extension-for-zowe/issues/1527)

## Prioritized Feature Requests and High Impact Issues

- [Issue TSO & MVS Commands Polish Work](https://github.com/zowe/vscode-extension-for-zowe/issues/1297)
- [Standardize the dialog boxes and progress bar](https://github.com/zowe/vscode-extension-for-zowe/issues/1537)
- [STRETCH] [Pagination of Search Results in the dataset tree view](https://github.com/zowe/vscode-extension-for-zowe/issues/479)
- [STRETCH] [Multi-selection support for all applicable functionalities](https://github.com/zowe/vscode-extension-for-zowe/issues/1286)
- [STRETCH] [Relative path for Zowe-Temp-Folder-Location](https://github.com/zowe/vscode-extension-for-zowe/issues/1053)
- [STRETCH] [Change Password through z/OSMF Auth API](https://github.com/zowe/vscode-extension-for-zowe/issues/1538)
  
# FTP VSCode Extension Objectives

- Add the FTP VSCode Extension to [zowe.org](https://www.zowe.org/) alongside Zowe Explorer similar to how the FTP Plug-in is mentioned alongside Zowe CLI. 
- Provide a link to the FTP VSCode Extension in the marketplace on [zowe.org/download](https://www.zowe.org/download.html)
- Mention the FTP VSCode Extension in Zowe Docs similar to how the Zowe Explorer CICS Extension is documented [here](https://docs.zowe.org/stable/user-guide/ze-cics).

# CICS VSCode Extension Objectives

- Add the CICS VSCode Extension to [zowe.org](https://www.zowe.org/) alongside Zowe Explorer similar to how the CICS Plug-in is mentioned alongside Zowe CLI. 
- Provide a link to the CICS VSCode Extension in the marketplace on [zowe.org/download](https://www.zowe.org/download.html)
- [Support the Team Configuration File for Zowe vNext](https://github.com/zowe/vscode-extension-for-cics/issues/122)
- (Squad-Discussion) [Include CICS in Zowe Explorer Mono Repo](https://github.com/zowe/vscode-extension-for-zowe/discussions/1540)
- [Theia Check for WebView compatibility](https://github.com/zowe/vscode-extension-for-cics/issues/64)
- [Create a test pipeline](https://github.com/zowe/vscode-extension-for-cics/issues/4)
- [STRETCH] Work with [OMP Cobol Training Course](https://github.com/openmainframeproject/cobol-programming-course).
  - Update the course to add the VSCode CICS plugin
  - Install CICS in the zCOBOL system
- [STRETCH] [Provide an API for other VS Code extension to access tree items and contribute implementations](https://github.com/zowe/vscode-extension-for-cics/issues/101).
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


### Confidence Vote Avg:
