# Zowe Explorer Squad - 21PI3 Objectives (July 2021 to October 2021)


## Zowe Explorer V1 Conformance Criteria Technical Implementation

* [Publish and support an official Extensibility API with conformance rules #837](https://github.com/zowe/vscode-extension-for-zowe/issues/837)  
Create a well-defined and documented extensibility conformance rules for extenders.

ZE Squad Plan:  
- [Extend ProfilesCache to deal with other Profile types](https://github.com/zowe/vscode-extension-for-zowe/issues/1387)
- [Make the profilesCache available to extenders](https://github.com/zowe/vscode-extension-for-zowe/issues/1281)
  - Open PR [Load Profiles from ProfilesCache using Zowe Explorer APIs](https://github.com/zowe/vscode-extension-for-zowe/pull/1390)
- [Document code samples that supports the Zowe Explorer Conformance Criteria](https://github.com/zowe/vscode-extension-for-zowe/issues/672)
- [Standardize Zowe Explorer configuration property names to make them consistent with VS Code's format](https://github.com/zowe/vscode-extension-for-zowe/issues/1263)
- [Stretch] [Centralized error handling - Technical Implementation](https://github.com/zowe/vscode-extension-for-zowe/issues/388)

## Zowe Explorer V1 Conformance Criteria Validation

* [V1 Conformance Criteria Validation #1285](https://github.com/zowe/vscode-extension-for-zowe/issues/1285)  
Validate the conformance criteria checklist with the community.

ZE Squad Plan:  
- [Announce the upcoming breaking changes to extenders](https://github.com/zowe/vscode-extension-for-zowe/issues/1405)
- Meet with Zowe On-boarding team and review the [conformance criteria list](https://github.com/zowe/vscode-extension-for-zowe/blob/master/docs/README-Conformance.md)
- Meet with community to validate and inform them about the v1 conformance checklist.
- Meet with Linux foundation and validate the conformance criteria

  
## Support the Team Configuration file in Zowe Explorer

* [Support for configuration file that Zowe CLI @next provides #1181](https://github.com/zowe/vscode-extension-for-zowe/issues/1181)  
Continue the development work for the team configuration file in Zowe Explorer

ZE Squad Plan:  
- [Address issues opened related to the validation of the `@next` version](https://github.com/zowe/vscode-extension-for-zowe/issues/1406)
- [Extend the ProfilesCache class for the team config](https://github.com/zowe/vscode-extension-for-zowe/issues/1409)
- [Implement `zowe config init` to generate a configuration file #1289](https://github.com/zowe/vscode-extension-for-zowe/issues/1289)
- [Stretch] [Implement `zowe config secure` to store credentials #1288](https://github.com/zowe/vscode-extension-for-zowe/issues/1288)

## Prioritized Feature Requests and High Impact Issues

- [Issue TSO & MVS Commands Polish Work](https://github.com/zowe/vscode-extension-for-zowe/issues/1297)
- [Multi-selection support for the dataset tree - Copy PDS and Members](https://github.com/zowe/vscode-extension-for-zowe/issues/1286)
- [Deployment pipeline not posting release on GitHub](https://github.com/zowe/vscode-extension-for-zowe/issues/1186)
- [Relative path for Zowe-Temp-Folder-Location](https://github.com/zowe/vscode-extension-for-zowe/issues/1053)
- [Update Profile should not try to validate](https://github.com/zowe/vscode-extension-for-zowe/issues/1305)
- [Stretch][Create a bot (and readme update) that describes up-voting to those who open issues](https://github.com/zowe/vscode-extension-for-zowe/issues/1169)
  
# FTP VSCode Extension Objectives
- [Add profile functionalities](https://github.com/zowe/vscode-extension-for-zowe/issues/1284)
- [Test automation for FTP package](https://github.com/zowe/vscode-extension-for-zowe/issues/1028)

# CICS VSCode Extension Objectives

- [Use Zowe Explorer ProfilesCache API to get CICS profiles](https://github.com/zowe/vscode-extension-for-cics/issues/63)
  - [Related to Zowe Explorer PR#1390 Provide profiles cache to extenders](https://github.com/zowe/vscode-extension-for-zowe/pull/1390)
- [Prevent profiles leaking into Zosmf dropdown list](https://github.com/zowe/vscode-extension-for-cics/issues/51)
- [Extension to appear properly in the extensions tab](https://github.com/zowe/vscode-extension-for-cics/issues/61)
- [Filter text should support wildcards](https://github.com/zowe/vscode-extension-for-cics/issues/57)
- [Theia Check for WebView compatibility](https://github.com/zowe/vscode-extension-for-cics/issues/64)
- Work with OMP Cobol Training Course. 
  - Update the course to add the VSCode CICS plugin
  - Install CICS in the zCOBOL system
- [Stretch] Publish the CICS plugin to VSCode Marketplace.