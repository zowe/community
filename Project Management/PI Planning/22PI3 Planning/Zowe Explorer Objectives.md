# Zowe Explorer Squad - 22PI3 Objectives

## Respond to feedback from the community as V2 LTS is adopted
As Zowe V2 LTS is adopted, we are actively responding to incoming questions on Slack as users transition. In addition to installation, we are helping the community adopt best practices such as team configuration.

## Assist extenders meet V2 LTS conformance standards
As extenders seek V2 LTS conformance, we are actively responding to incoming questions on Slack to ensure our broader suite of extensions work very well together.

## Issues
For a more detailed list of the issues there were deferred, please see [Zowe Explorer #1833](https://github.com/zowe/vscode-extension-for-zowe/issues/1833)


### BugFixes

- Zowe Explorer:
  - [ ] [Fails to load nested gloal config when project config has secure base profile](https://github.com/zowe/vscode-extension-for-zowe/issues/1846)
  - [ ] [ZE API registerCustomProfileType not recognizing EnvVar](https://github.com/zowe/vscode-extension-for-zowe/issues/1825)
  - [ ] [ZE silent refresh and quick keys doesn't work in Che](https://github.com/zowe/vscode-extension-for-zowe/issues/1807)
  - [ ] [Check Credentials info update failed for Submit Job](https://github.com/zowe/vscode-extension-for-zowe/issues/1858)
  - [ ] [Refresh Job doesn't update status](https://github.com/zowe/vscode-extension-for-zowe/issues/1857)
  - [ ] [ZE (logout): Icon changes to an icon that correct, global shows project level](https://github.com/zowe/vscode-extension-for-zowe/issues/1839)
  - [ ] [Project profiles loaded when no workspace folder open](https://github.com/zowe/vscode-extension-for-zowe/issues/1802)
  - [ ] [team-profiles: ZOWE_CLI_HOME not considered if there is a workspace/folder open](https://github.com/zowe/vscode-extension-for-zowe/issues/1747)
  - [ ] [Custom secure properties not loaded](https://github.com/zowe/vscode-extension-for-zowe/issues/1663)
  - [ ] [STRETCH] [Control of member names](https://github.com/zowe/vscode-extension-for-zowe/issues/1849)
  - [ ] [STRETCH] [Unable to delete v1 profiles](https://github.com/zowe/vscode-extension-for-zowe/issues/1814) Dependency on Imperative updates

- FTP:

  n/a

- CICS:

  n/a

### Enhancements

- Zowe Explorer:
  - [ ] [Display PROCSTEP in the Jobs tree view](https://github.com/zowe/vscode-extension-for-zowe/issues/1832)
  - [ ] [zowe profiles create zosmf-profile allow specifications of --console-name](https://github.com/zowe/vscode-extension-for-zowe/issues/1667)
 
  Research oriented this PI:
  - [ ] [STRETCH] Epic: [Enhancements to Extensibility APIS](https://github.com/zowe/vscode-extension-for-zowe/issues/1791)
  - [ ] [STRETCH] Epic: [Improve logging and potential output view to better support end users](https://github.com/zowe/vscode-extension-for-zowe/issues/1024)
  - [ ] [STRETCH] Epic: [Supported Environments](https://github.com/zowe/vscode-extension-for-zowe/issues/1862)

- FTP:
  - [ ] [Expect saving dataset/file serially to avoid conflict error in short time with multiple times saving](https://github.com/zowe/vscode-extension-for-zowe/issues/1868)
  - [ ] [Add management of codepages conversion](https://github.com/zowe/zowe-cli-ftp-plugin/issues/83)

- CICS:
  - [ ] [Support CICS Web Applications](https://github.com/zowe/vscode-extension-for-cics/issues/273)
  - [ ] [Navigate from CICS region to the CEEMSG log](https://github.com/zowe/vscode-extension-for-cics/issues/178)
  - [ ] [Provide the ability to view Library datasets (in external to CICS view)](https://github.com/zowe/vscode-extension-for-cics/issues/250)
  - [ ] [STRETCH] [Ability to execute a CICS trasaction](https://github.com/zowe/vscode-extension-for-cics/issues/205)
  - [ ] [STRETCH] [Update the OMP Cobol Training course to add the VS Code CICS plugin](https://github.com/zowe/vscode-extension-for-cics/issues/189)


### Technical Debt

- Zowe Explorer:
  - [ ] [Rename the default repo branch from master to main](https://github.com/zowe/vscode-extension-for-zowe/issues/1869)
  - [ ] [doc(ze-v1): Document 'How to stay on Zowe Explorer v1'](https://github.com/zowe/vscode-extension-for-zowe/issues/1796) 
  - [ ] [Refactor instances of CliProfileManager to use ProfileInfo when available](https://github.com/zowe/vscode-extension-for-zowe/issues/1851)
  - [ ] [Create all .zowe subfolders needed (eg ~/.zowe/settings)](https://github.com/zowe/vscode-extension-for-zowe/issues/1850)
  - [ ] [STRETCH] [ZE (imperative-import): Use the imperative instance provided by the CLI package](https://github.com/zowe/vscode-extension-for-zowe/issues/1843)
  - [ ] [STRETCH] [VS Code zowe extension: job delete closes Jobs list](https://github.com/zowe/vscode-extension-for-zowe/issues/1676)

- FTP:

n/a

- CICS: 

n/a


### Upvoted issues
Continue to review, prioritize, and implement highly upvoted issues in our repository for [Zowe Explorer, Zowe Explorer for FTP](https://github.com/zowe/vscode-extension-for-zowe/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc) and [Zowe Explorer for CICS](https://github.com/zowe/vscode-extension-for-cics/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc)
