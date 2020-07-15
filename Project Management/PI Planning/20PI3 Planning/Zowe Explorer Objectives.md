# Zowe Explorer Squad - 20PI3 Objectives (June 2020 to September 2020)

## Zowe Explorer Conformance Guidelines

* **[ZE#837](https://github.com/zowe/vscode-extension-for-zowe/issues/837)**: Publish and support an official Extensibility API with conformance rule:
  - Setup the Zowe Explorer repository for ease of maintenance of the NPM package (e.g. code refactoring and tool selection)
  - Refine the scope of APIs to be exported and implement high priority fixes/enhancements. (multiple issues)
  - Extract API code into its own NPM package for extenders to include.
  - Define API governance for Zowe Explorer contributors (CONTRIBUTING.md).
  - **Stretch**: Define Conformance rules for extenders.
    - Back-end Service: z/OS MF, FTP, RSE, ...
    - Front-end Functionality (e.g. combination of features provided by z/OS MF)

## Support SSO for API ML in Zowe Explorer

* **[ZE#901](https://github.com/zowe/vscode-extension-for-zowe/issues/901)**: Leverage the Zowe CLI security enhancements.
  - Enable Zowe Explorer for read base profiles/tokens authorized in CLI ([ZE#912](https://github.com/zowe/vscode-extension-for-zowe/issues/912))
  - **Stretch**: Implement new workflow for creating base profiles ([ZE#913](https://github.com/zowe/vscode-extension-for-zowe/issues/913))

## User Experience Enhancements

* **[ZE#902](https://github.com/zowe/vscode-extension-for-zowe/issues/902)**: Feedback from COBOL Learning Program and others
  - Support More Flexibility in Search/Filter ([ZE#867](https://github.com/zowe/vscode-extension-for-zowe/issues/867))
  - Context menu enhancements with existing buttons (multiple issues)

* **[ZE#823](https://github.com/zowe/vscode-extension-for-zowe/issues/823)**: z/OS Unix
  - Renaming files/folders (multiple issues)
  - Handle symbolic links. ([ZE#750](https://github.com/zowe/vscode-extension-for-zowe/issues/750))

* **[ZE#903](https://github.com/zowe/vscode-extension-for-zowe/issues/903)**: Datasets
  - Implement the "like" data set capability available from z/OS MF API ([ZE#904](https://github.com/zowe/vscode-extension-for-zowe/issues/904))
  - **Stretch**: Allow searching for members
  - **Stretch**: Make it easier to edit datasets and files with num mode on

## Technical Debt
  - Developer Milestone: [ZE#developer](https://github.com/zowe/vscode-extension-for-zowe/milestone/33)

***General Note***: All issues contained in the above Epics and not mentioned in this document are considered stretch goals for the PI.