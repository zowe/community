# Criteria and our fullfilment

The goal of this document is to cover where we as Zowe are with respect to our projects that are at least GA. The criteria are based on the information in [OpenSSF Best Practices](https://www.bestpractices.dev/pt-BR/criteria)

## Passing Badge

### Basics

#### Basic project website content

- The project website MUST succinctly describe what the software does (what problem does it solve?). [description_good]
- The project website MUST provide information on how to: obtain, provide feedback (as bug reports or enhancements), and contribute to the software. [interact]
- The information on how to contribute MUST explain the contribution process (e.g., are pull requests used?) {Met URL} [contribution]
- The information on how to contribute SHOULD include the requirements for acceptable contributions (e.g., a reference to any required coding standard). {Met URL} [contribution_requirements]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| description_good | [zowe.org](https://zowe.org) | [API ML](https://www.zowe.org/#api-mediation-layer-intro) | [CLI](https://www.zowe.org/#zowe-cli-intro) | [Intellij Plugin](https://www.zowe.org/#zowe-intellij-plugin-intro) | [Node.js Client SDK](https://www.zowe.org/#zowe-node.js-client-sdk-intro) | [Zowe Application Framework](https://www.zowe.org/#zowe-application-framework-intro) | [Zowe Explorer](https://www.zowe.org/#zowe-explorer-intro) | [ZSS](https://www.zowe.org/#zss-intro) |
| interact | [Contribute](https://www.zowe.org/contribute) | [Obtain](https://docs.zowe.org/stable/user-guide/install-zos), [Provide feedback](https://github.com/zowe/api-layer/issues), [Contribute](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/getting-started/cli-getting-started), [Provide Feedback](https://github.com/zowe/zowe-cli/issues), [Contribute](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/user-guide/intellij-install), [Provide feedback](https://github.com/zowe/zowe-explorer-intellij/issues), [Contribute](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/CONTRIBUTING.md) | [Obtain](https://www.npmjs.com/package/@zowe/imperative), [Provide Feedback](https://github.com/zowe/zowe-cli/issues), [Contribute](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/user-guide/install-zos), [Provide Feedback](https://github.com/zowe/zlux/issues), [Contribute](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/user-guide/ze-install#installing-zowe-explorer), [Provide Feedback](https://github.com/zowe/vscode-extension-for-zowe/issues), [Contribute](https://github.com/zowe/vscode-extension-for-zowe/blob/main/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/user-guide/install-zos), [Provide Feedback](https://github.com/zowe/zss/issues), [Contribute](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md) |
| contribution | N/A | [How to Contribute](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md#pull-requests) | [How to Contribute](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#contributing-to-core-functionality) | [How to Contribute](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/CONTRIBUTING.md#steps-to-contribute) | [How to Contribute](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#contributing-to-core-functionality) | [How to Contribute](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md#ways-to-contribute) | [How to Contribute](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md) | [How to Contribute](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md#ways-to-contribute) |  
| contribution_requirements | N/A | [Coding Standard](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md#file-naming-guidelines) | [Coding Standard](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/CONTRIBUTING.md#coding-standards) | [Coding Standard](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md#code-guidelines) |

#### FLOSS license

- The software produced by the project MUST be released as FLOSS. [floss_license]
- It is SUGGESTED that any required license(s) for the software produced by the project be approved by the Open Source Initiative (OSI). [floss_license_osi]
- The project MUST post the license(s) of its results in a standard location in their source repository. {Met URL} [license_location]-

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| floss_license | [EPL 2.0 or APL, point 7 of charter](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/charter.md) | [License](https://github.com/zowe/api-layer/blob/v2.x.x/LICENSE) | [License](https://github.com/zowe/zowe-cli/blob/master/LICENSE) | [License](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/LICENSE) | [License](https://github.com/zowe/zowe-cli/blob/master/LICENSE) | [License](https://github.com/zowe/zlux/blob/v1.x/master/LICENSE) | [License](https://github.com/zowe/vscode-extension-for-zowe/blob/main/LICENSE) | [License](https://github.com/zowe/zss/blob/v2.x/staging/LICENSE) |
| floss_license_osi | [EPL 2.0 or APL, point 7 of charter](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/charter.md) | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| license_location | N/A | [License](https://github.com/zowe/api-layer/blob/v2.x.x/LICENSE) | [License](https://github.com/zowe/zowe-cli/blob/master/LICENSE) | [License](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/LICENSE) | [License](https://github.com/zowe/zowe-cli/blob/master/LICENSE) | [License](https://github.com/zowe/zlux/blob/v1.x/master/LICENSE) | [License](https://github.com/zowe/vscode-extension-for-zowe/blob/main/LICENSE) | [License](https://github.com/zowe/zss/blob/v2.x/staging/LICENSE) |
 

#### Documentation

- The project MUST provide basic documentation for the software produced by the project. {N/A justification} [documentation_basics]
- The project MUST provide reference documentation that describes the external interface (both input and output) of the software produced by the project. {N/A justification} [documentation_interface]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| documentation_basics | [Documentation](https://docs.zowe.org/) | [Documentation](https://docs.zowe.org/stable/user-guide/api-mediation/using-api-mediation-layer/) | [Documentation](https://docs.zowe.org/stable/user-guide/cli-using-usingcli) | [Documentation](https://docs.zowe.org/stable/user-guide/intellij-using) | [Documentation](https://docs.zowe.org/stable/typedoc/index.html) | [Documentation](https://docs.zowe.org/stable/user-guide/mvd-using) | [Documentation](https://docs.zowe.org/stable/user-guide/ze-usage) | [Documentation](https://docs.zowe.org/stable/getting-started/zowe-architecture/#zss) |
| documentation_interface | N/A | [API Gateway](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/zowe/docs-site/docs-staging/api_definitions/gateway.json) | [Reference Doc](https://docs.zowe.org/stable/web_help/index.html) | [UI](https://docs.zowe.org/stable/user-guide/intellij-using) | [Reference Doc](https://docs.zowe.org/stable/typedoc/index.html) | [Zlux Plugins](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/zowe/docs-site/docs-staging/api_definitions/zlux-plugin.json), [App Framework](https://github.com/zowe/zlux-app-server/tree/v2.x/staging/doc/swagger ) | [UI](https://docs.zowe.org/stable/user-guide/ze-use-cases) | [ZSS](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/zowe/docs-site/docs-staging/api_definitions/swagger-zss.json) |

#### Other

- The project sites (website, repository, and download URLs) MUST support HTTPS using TLS. [sites_https]
- The project MUST have one or more mechanisms for discussion (including proposed changes and issues) that are searchable, allow messages and topics to be addressed by URL, enable new people to participate in some of the discussions, and do not require client-side installation of proprietary software. [discussion]
- The project SHOULD provide documentation in English and be able to accept bug reports and comments about code in English. [english]
- The project MUST be maintained. [maintained]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| sites_https | [Website](https://zowe.org) | [Repository](https://github.com/zowe/api-layer.git), [Download](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.11.0/) | [Repository](https://github.com/zowe/zowe-cli.git), [Download](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/cli/zowe-cli-package/2.11.0/) | [Repository](https://github.com/zowe/zowe-explorer-intellij.git) | [Repository](https://github.com/zowe/zowe-cli.git) | [Repository](https://github.com/zowe/zlux.git), [Download](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.11.0/) | [Repository](https://github.com/zowe/vscode-extension-for-zowe.git) | [Repository](https://github.com/zowe/zss.git), [Download](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.11.0/) |
| discussion | [GitHub](https://github.com/zowe) | [GitHub](https://github.com/zowe/api-layer) | [GitHub](https://github.com/zowe/zowe-cli) | [GitHub](https://github.com/zowe/zowe-explorer-intellij) | [GitHub](https://github.com/zowe/zowe-cli) | [GitHub](https://github.com/zowe/zlux) | [GitHub](https://github.com/zowe/vscode-extension-for-zowe) | [GitHub](https://github.com/zowe/zss) |
| english | [GitHub](https://github.com/zowe) | [GitHub](https://github.com/zowe/api-layer) | [GitHub](https://github.com/zowe/zowe-cli) | [GitHub](https://github.com/zowe/zowe-explorer-intellij) | [GitHub](https://github.com/zowe/zowe-cli) | [GitHub](https://github.com/zowe/zlux) | [GitHub](https://github.com/zowe/vscode-extension-for-zowe) | [GitHub](https://github.com/zowe/zss) |
| maintained | [TSC](https://github.com/orgs/zowe/teams/tsc), [ZAC](https://github.com/orgs/zowe/teams/zlc) | [API Mediation Layer Squad](https://github.com/orgs/zowe/teams/api-mediation-committers) | [CLI Squad](https://github.com/orgs/zowe/teams/cli/teams) | [Intellij Squad](https://github.com/orgs/zowe/teams/intellij-committers) | [CLI Squad](https://github.com/orgs/zowe/teams/cli/teams) | [Web UI Squad](https://github.com/orgs/zowe/teams/web-ui-squad-contributors) | [Explorer Squad](https://github.com/orgs/zowe/teams/zowe-explorer-committers) | [zOS Squad](https://github.com/orgs/zowe/teams/zos-interface-contributors/members) |

### Change Control

#### Public version-controlled source repository

- The project MUST have a version-controlled source repository that is publicly readable and has a URL. [repo_public]
- The project's source repository MUST track what changes were made, who made the changes, and when the changes were made. [repo_track]
- To enable collaborative review, the project's source repository MUST include interim versions for review between releases; it MUST NOT include only final releases. [repo_interim]
- It is SUGGESTED that common distributed version control software be used (e.g., git) for the project's source repository. [repo_distributed]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| repo_public | [GitHub](https://github.com/zowe) | [GitHub](https://github.com/zowe/api-layer) | [GitHub](https://github.com/zowe/zowe-cli) | [GitHub](https://github.com/zowe/zowe-explorer-intellij)| [GitHub](https://github.com/zowe/zowe-cli) | [GitHub](https://github.com/zowe/zlux) | [GitHub](https://github.com/zowe/vscode-extension-for-zowe) | [GitHub](https://github.com/zowe/zss) |
| repo_track | N/A | [Commits](https://github.com/zowe/api-layer/commits) | [Commits](https://github.com/zowe/zowe-cli/commits) | [Commits](https://github.com/zowe/zowe-explorer-intellij/commits)| [Commits](https://github.com/zowe/zowe-cli/commits) | [Commits](https://github.com/zowe/zlux/commits) | [Commits](https://github.com/zowe/vscode-extension-for-zowe/commits) | [Commits](https://github.com/zowe/zss/commits) |
| repo_interim | N/A | [Pull Requests](https://github.com/zowe/api-layer/pulls) | [Pull Requests](https://github.com/zowe/zowe-cli/pulls) | [Pull Requests](https://github.com/zowe/zowe-explorer-intellij/pulls)| [Pull Requests](https://github.com/zowe/zowe-cli/pulls) | [Pull Requests](https://github.com/zowe/zlux/pulls) | [Pull Requests](https://github.com/zowe/vscode-extension-for-zowe/pulls) | [Pull Requests](https://github.com/zowe/zss/pulls) |
| repo_distributed | [Git](https://github.com/zowe) | [Git](https://github.com/zowe/api-layer) | [Git](https://github.com/zowe/zowe-cli) | [Git](https://github.com/zowe/zowe-explorer-intellij)| [Git](https://github.com/zowe/zowe-cli) | [Git](https://github.com/zowe/zlux) | [Git](https://github.com/zowe/vscode-extension-for-zowe) | [Git](https://github.com/zowe/zss) |

#### Unique version numbering

- The project results MUST have a unique version identifier for each release intended to be used by users. [version_unique]
- It is SUGGESTED that the Semantic Versioning (SemVer) or Calendar Versioning (CalVer) version numbering format be used for releases. It is SUGGESTED that those who use CalVer include a micro level value. [version_semver]
- It is SUGGESTED that projects identify each release within their version control system. For example, it is SUGGESTED that those using git identify each release using git tags. [version_tags]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| version_unique | [Unique Versions](https://www.zowe.org/download) | [Unique Versions](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/apiml/apiml-common-lib-package/) | [Unique Versions](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/cli/zowe-cli-package/) | [Unique Versions](https://github.com/zowe/zowe-explorer-intellij/releases) | [Unique Versions](https://www.npmjs.com/package/@zowe/secrets-for-zowe-sdk?activeTab=versions) | [Unique Versions](https://github.com/zowe/zlux-app-manager/releases) | [Unique Versions](https://github.com/zowe/vscode-extension-for-zowe/releases) | [Unique Versions](https://github.com/zowe/zss/releases) |
| version_semver | [Semantic Versioning](https://www.zowe.org/download) | [Semantic Versions](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/apiml/apiml-common-lib-package/) | [Semantic Versions](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/cli/zowe-cli-package/) | [Semantic Versions](https://github.com/zowe/zowe-explorer-intellij/releases) | [Semantic Versions](https://www.npmjs.com/package/@zowe/secrets-for-zowe-sdk?activeTab=versions) | [Semantic Versions](https://github.com/zowe/zlux-app-manager/releases) | [Semantic Versions](https://github.com/zowe/vscode-extension-for-zowe/releases) | [Semantic Versions](https://github.com/zowe/zss/releases) |
| version_tags | [Tags](https://github.com/zowe/zowe-install-packaging/tags) | [Tags](https://github.com/zowe/api-layer/tags) | [Tags](https://github.com/zowe/zowe-cli/tags) | [Tags](https://github.com/zowe/zowe-explorer-intellij/tags) | [Tags](https://github.com/zowe/zowe-cli/tags) | [Tags](https://github.com/zowe/zlux-app-manager/tags) | [Tags](https://github.com/zowe/vscode-extension-for-zowe/tags) | [Tags](https://github.com/zowe/zss/tags) |

#### Release notes

- The project MUST provide, in each release, release notes that are a human-readable summary of major changes in that release to help users determine if they should upgrade and what the upgrade impact will be. The release notes MUST NOT be the raw output of a version control log (e.g., the "git log" command results are not release notes). Projects whose results are not intended for reuse in multiple locations (such as the software for a single website or service) AND employ continuous delivery MAY select "N/A". {N/A justification} {Met URL} [release_notes]
- The release notes MUST identify every publicly known run-time vulnerability fixed in this release that already had a CVE assignment or similar when the release was created. This criterion may be marked as not applicable (N/A) if users typically cannot practically update the software themselves (e.g., as is often true for kernel updates). This criterion applies only to the project results, not to its dependencies. If there are no release notes or there have been no publicly known vulnerabilities, choose N/A. {N/A justification} [release_notes_vulns]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| release_notes | [Release Notes](https://docs.zowe.org/stable/getting-started/release-notes/v2_11_0) | [Release Notes](https://github.com/zowe/api-layer/blob/v2.x.x/CHANGELOG.md) | [Release Notes](https://docs.zowe.org/stable/getting-started/release-notes/v2_11_0#zowe-cli) | [Release Notes](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.1.0-221/CHANGELOG.md) | [Release Notes](https://docs.zowe.org/stable/getting-started/release-notes/v2_11_0#zowe-cli-imperative-framework) | [Release Notes](https://docs.zowe.org/stable/getting-started/release-notes/v2_11_0#zowe-application-framework) | [Release Notes](https://docs.zowe.org/stable/getting-started/release-notes/v2_9_0#zowe-explorer) | [Release Notes](https://github.com/zowe/zss/blob/v2.x/staging/CHANGELOG.md) |
| release_notes_vulns | [Vulnerabilities Fixed](https://docs.zowe.org/stable/getting-started/release-notes/v2_11_0#vulnerabilities-fixed) | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

### Reporting

#### Bug-reporting process

- The project MUST provide a process for users to submit bug reports (e.g., using an issue tracker or a mailing list). {Met URL} [report_process]
- The project SHOULD use an issue tracker for tracking individual issues. [report_tracker]
- The project MUST acknowledge a majority of bug reports submitted in the last 2-12 months (inclusive); the response need not include a fix. [report_responses]
- The project SHOULD respond to a majority (>50%) of enhancement requests in the last 2-12 months (inclusive). [enhancement_responses]
- The project MUST have a publicly available archive for reports and responses for later searching. {Met URL} [report_archive]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| report_process | N/A | [Issue tracker](https://github.com/zowe/api-layer/issues) | [Issue tracker](https://github.com/zowe/zowe-cli/issues) | [Issue tracker](https://github.com/zowe/zowe-explorer-intellij/issues) | [Issue tracker](https://github.com/zowe/zowe-cli/issues) | [Issue tracker](https://github.com/zowe/zlux/issues) | [Issue tracker](https://github.com/zowe/vscode-extension-for-zowe/issues) | [Issue tracker](https://github.com/zowe/zss/issues) |
| report_tracker | N/A | [Issue tracker](https://github.com/zowe/api-layer/issues) | [Issue tracker](https://github.com/zowe/zowe-cli/issues) | [Issue tracker](https://github.com/zowe/zowe-explorer-intellij/issues) | [Issue tracker](https://github.com/zowe/zowe-cli/issues)  | [Issue tracker](https://github.com/zowe/zlux/issues) | [Issue tracker](https://github.com/zowe/vscode-extension-for-zowe/issues) | [Issue tracker](https://github.com/zowe/zss/issues) |
| report_responses | [LFX Analytics#Efficiency](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-api-layer](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zowe-cli](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zowe-explorer-intellij](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zowe-cli](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zlux](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-vscode-extension-for-zowe](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zss](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) |
| enhancement_responses | [LFX Analytics#Efficiency](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-api-layer](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zowe-cli](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zowe-explorer-intellij](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zowe-cli](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zlux](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-vscode-extension-for-zowe](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) | [LFX Analytics#Efficiency-zss](https://insights-v2.lfx.linuxfoundation.org/zowe/code-velocity/issue-request-pipeline) |
| report_archive | [Overall project](https://github.com/zowe) | [Issue tracker](https://github.com/zowe/api-layer/issues) | [Issue tracker](https://github.com/zowe/zowe-cli/issues) | [Issue tracker](https://github.com/zowe/zowe-explorer-intellij/issues) | [Issue tracker](https://github.com/zowe/zowe-cli/issues) | [Issue tracker](https://github.com/zowe/zlux/issues) | [Issue tracker](https://github.com/zowe/vscode-extension-for-zowe/issues) | [Issue tracker](https://github.com/zowe/zss/issues) |

#### Vulnerability report process

- The project MUST publish the process for reporting vulnerabilities on the project site. {Met URL} [vulnerability_report_process]
- If private vulnerability reports are supported, the project MUST include how to send the information in a way that is kept private. {N/A allowed} {Met URL} [vulnerability_report_private]
- The project's initial response time for any vulnerability report received in the last 6 months MUST be less than or equal to 14 days. {N/A allowed} [vulnerability_report_response]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| vulnerability_report_process | [Reporting process and policy](https://www.zowe.org/security#security-issues-identification) | [Report vulnerability](https://github.com/zowe/api-layer/security/advisories/new) | [Report vulnerability](https://github.com/zowe/zowe-cli/security/policy) | [Report vulnerability](https://github.com/zowe/zowe-explorer-intellij/security/policy) | [Report vulnerability](https://github.com/zowe/zowe-cli/security/policy) | [Report vulnerability](https://github.com/zowe/zlux/security/policy) | [Report vulnerability](https://github.com/zowe/vscode-extension-for-zowe/security/policy) | [Report vulnerability](https://github.com/zowe/zss/security/advisories/new) |
| vulnerability_report_private | [Reporting process and policy](https://www.zowe.org/security#security-issues-identification) | [Report vulnerability](https://github.com/zowe/api-layer/security/advisories/new) | [Report vulnerability](https://github.com/zowe/zowe-cli/security/policy) | [Report vulnerability](https://github.com/zowe/zowe-explorer-intellij/security/policy) | [Report vulnerability](https://github.com/zowe/zowe-cli/security/policy) | [Report vulnerability](https://github.com/zowe/zlux/security/policy) | [Report vulnerability](https://github.com/zowe/vscode-extension-for-zowe/security/policy) | [Report vulnerability](https://github.com/zowe/zss/security/advisories/new) |
| vulnerability_report_response |  | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

### Quality

#### Working build system

- If the software produced by the project requires building for use, the project MUST provide a working build system that can automatically rebuild the software from source code. {N/A allowed} [build]
- It is SUGGESTED that common tools be used for building the software. {N/A allowed} [build_common_tools]
- The project SHOULD be buildable using only FLOSS tools. {N/A allowed} [build_floss_tools]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| build | [Github Actions](https://github.com/zowe/zowe-install-packaging/tree/v2.x/staging/.github/workflows) | [Github Actions](https://github.com/zowe/api-layer/tree/v2.x.x/.github/workflows) | [Github actions](https://github.com/zowe/zowe-cli/tree/master/.github/workflows) | [Github actions](https://github.com/zowe/zowe-explorer-intellij/tree/release/v1.1.0-221/.github/workflows) | [Github actions](https://github.com/zowe/zowe-cli/tree/master/.github/workflows) | [Github Actions](https://github.com/zowe/zlux-app-manager/actions/workflows/build-core.yml) | [Github Actions](https://github.com/zowe/vscode-extension-for-zowe/tree/main/.github/workflows) | [ZSS](https://github.com/zowe/zss/tree/v2.x/staging/.github/workflows) |
| build_common_tools | N/A | [Gradle](https://github.com/zowe/api-layer/blob/v2.x.x/build.gradle) | [NPM](https://github.com/zowe/zowe-cli/blob/master/package.json) | [Gradle](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.1.0-221/build.gradle.kts) | [NPM](https://github.com/zowe/zowe-cli/blob/master/package.json) | [NPM](https://github.com/zowe/zlux-server-framework/blob/7a99f12eef265b741252f2e903474f2ddeeb5c9e/package.json) | [NPM](https://github.com/zowe/vscode-extension-for-zowe/blob/main/package.json) | [Shell](https://github.com/zowe/zss/blob/v2.x/staging/build/build.sh) |
| build_floss_tools | N/A | [Gradle](https://github.com/zowe/api-layer/blob/v2.x.x/build.gradle) | [NPM](https://github.com/zowe/zowe-cli/blob/master/package.json) | [Gradle](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.1.0-221/build.gradle.kts) | [NPM](https://github.com/zowe/zowe-cli/blob/master/package.json) | [NPM](https://github.com/zowe/zlux-server-framework/blob/7a99f12eef265b741252f2e903474f2ddeeb5c9e/package.json) | [NPM](https://github.com/zowe/vscode-extension-for-zowe/blob/main/package.json) | [Shell](https://github.com/zowe/zss/blob/v2.x/staging/build/build.sh) |

#### Automated test suite

- The project MUST use at least one automated test suite that is publicly released as FLOSS (this test suite may be maintained as a separate FLOSS project). The project MUST clearly show or document how to run the test suite(s) (e.g., via a continuous integration (CI) script or via documentation in files such as BUILD.md, README.md, or CONTRIBUTING.md). [test]
- A test suite SHOULD be invocable in a standard way for that language. [test_invocation]
- It is SUGGESTED that the test suite cover most (or ideally all) the code branches, input fields, and functionality. [test_most]
- It is SUGGESTED that the project implement continuous integration (where new or changed code is frequently integrated into a central code repository and automated tests are run on the result). [test_continuous_integration]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| test | [System Tests](https://github.com/zowe/zowe-install-packaging/tree/v2.x/staging/tests) | [Integration Tests](https://github.com/zowe/api-layer/tree/v2.x.x/integration-tests), [Unit Tests for Gateway](https://github.com/zowe/api-layer/tree/v2.x.x/gateway-service/src/test), [Unit Tests for Discovery Service](https://github.com/zowe/api-layer/tree/v2.x.x/discovery-service/src/test), [Unit Tests for API Catalog](https://github.com/zowe/api-layer/tree/v2.x.x/api-catalog-services/src/test), [Unit Tests for Caching Services](https://github.com/zowe/api-layer/tree/v2.x.x/caching-service/src/test) | [Tests](https://github.com/zowe/zowe-cli/tree/master/__tests__) | [Unit Tests](https://github.com/zowe/zowe-explorer-intellij/tree/release/v1.1.0-221/src/test/kotlin/org/zowe/explorer), [UI Tests](https://github.com/zowe/zowe-explorer-intellij/tree/release/v1.1.0-221/src/uiTest) | [Tests](https://github.com/zowe/zowe-cli/tree/master/__tests__) | [Tests for Zlux Server Framework](https://github.com/zowe/zlux-server-framework/tree/7a99f12eef265b741252f2e903474f2ddeeb5c9e/test) | [Explorer](https://github.com/zowe/vscode-extension-for-zowe/tree/main/packages/zowe-explorer/__tests__), [Explorer for FTP](https://github.com/zowe/vscode-extension-for-zowe/tree/main/packages/zowe-explorer-ftp-extension/__tests__/__unit__), [Explorer API](https://github.com/zowe/vscode-extension-for-zowe/tree/main/packages/zowe-explorer-api/__tests__/__unit__) | [Limited Test Suite](https://github.com/zowe/zss/tree/v2.x/staging/tests) |
| test_invocation | [NPM](https://github.com/zowe/zowe-install-packaging/tree/v2.x/staging/tests/sanity) | [Gradle](https://github.com/zowe/api-layer/blob/v2.x.x/build.gradle) | [NPM](https://github.com/zowe/zowe-cli/blob/master/package.json) | [Gradle](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.1.0-221/build.gradle.kts) | [NPM](https://github.com/zowe/zowe-cli/blob/master/package.json) | N/A | [NPM, Yarn](https://github.com/zowe/vscode-extension-for-zowe/blob/main/package.json) | N/A |
| test_most | N/A | [SonarCloud](https://sonarcloud.io/summary/overall?id=zowe_api-layer) | [SonarCloud](https://sonarcloud.io/summary/overall?id=zowe_zowe-cli) | [NPM](https://github.com/zowe/zlux-server-framework/blob/v2.x/staging/package.json) | [SonarCloud](https://sonarcloud.io/project/overview?id=zowe_imperative) | N/A | [CodeCov](https://app.codecov.io/gh/zowe/vscode-extension-for-zowe) | N/A |
| test_continuous_integration | [Github Actions](https://github.com/zowe/zowe-install-packaging/actions/workflows/cicd-test.yml) | [Github Actions](https://github.com/zowe/api-layer/actions/workflows/ci-tests.yml) | [Github Actions](https://github.com/zowe/zowe-cli/actions/workflows/zowe-cli.yml) | [Github Actions](https://github.com/zowe/zowe-explorer-intellij/actions/workflows/build-deploy.yml) | [Github Actions](https://github.com/zowe/zowe-cli/actions/workflows/zowe-cli.yml) | N/A | [Github Actions](https://github.com/zowe/vscode-extension-for-zowe/actions/workflows/zowe-explorer-ci.yml) | N/A |

#### New functionality testing

- The project MUST have a general policy (formal or not) that as major new functionality is added to the software produced by the project, tests of that functionality should be added to an automated test suite. [test_policy]
- The project MUST have evidence that the test_policy for adding tests has been adhered to in the most recent major changes to the software produced by the project. [tests_are_added]
- It is SUGGESTED that this policy on adding tests (see test_policy) be documented in the instructions for change proposals. [tests_documented_added]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| test_policy | | [Testing Guidelines](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md#testing-guidelines) | [Testing Guidelines](https://github.com/zowe/zowe-cli/blob/master/docs/TESTING.md) | [Code Coverage](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.1.0-221/CONTRIBUTING.md#general) | [Testing Guidelines](https://github.com/zowe/zowe-cli/blob/master/docs/TESTING.md) | [Code reviews](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md#code-reviews) | [Testing Guidelines](https://github.com/zowe/zowe-cli/blob/master/docs/TESTING.md) | [Code reviews](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md#code-reviews) |
| tests_are_added | N/A | [New Code Tests](https://sonarcloud.io/summary/new_code?id=zowe_api-layer) | [Sonarcloud](https://sonarcloud.io/summary/new_code?id=zowe_zowe-cli) | [Sonarcloud](https://sonarcloud.io/summary/new_code?id=zowe_zowe-explorer-intellij) | [Sonarcloud](https://sonarcloud.io/summary/new_code??id=zowe_imperative) | | [Sonarcloud](https://sonarcloud.io/summary/new_code?id=zowe_vscode-extension-for-zowe) | |
| tests_documented_added | N/A | [Testing Guidelines](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md#testing-guidelines) | [Testing Guidelines](https://github.com/zowe/zowe-cli/blob/master/docs/TESTING.md) | [Code Coverage](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.1.0-221/CONTRIBUTING.md#general) | [Testing Guidelines](https://github.com/zowe/zowe-cli/blob/master/docs/TESTING.md) | [Code reviews](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md#code-reviews) | [Testing Guidelines](https://github.com/zowe/zowe-cli/blob/master/docs/TESTING.md) | [Code reviews](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md#code-reviews) |

#### Warning flags

- The project MUST enable one or more compiler warning flags, a "safe" language mode, or use a separate "linter" tool to look for code quality errors or common simple mistakes, if there is at least one FLOSS tool that can implement this criterion in the selected language. {N/A allowed} [warnings]
- The project MUST address warnings. {N/A allowed} [warnings_fixed]
- It is SUGGESTED that projects be maximally strict with warnings in the software produced by the project, where practical. {N/A allowed} [warnings_strict]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| warnings | N/A | [SonarCloud](https://sonarcloud.io/project/overview?id=zowe_api-layer) | [SonarCloud](https://sonarcloud.io/project/overview?id=zowe_zowe-cli) | [SonarCloud](https://sonarcloud.io/project/overview?id=zowe_zowe-explorer-intellij) | [SonarCloud](https://sonarcloud.io/project/overview?id=zowe_imperative) | [MVS Explorer](https://sonarcloud.io/project/overview?id=zowe_explorer-mvs), [USS Explorer](https://sonarcloud.io/project/overview?id=zowe_explorer-uss), [JES Explorer](https://sonarcloud.io/project/overview?id=zowe_explorer-jes) | [SonarCloud](https://sonarcloud.io/project/overview?id=zowe_vscode-extension-for-zowe) | |
| warnings_fixed | N/A | [SonarCloud](https://sonarcloud.io/activity/overview?id=zowe_api-layer) | [SonarCloud](https://sonarcloud.io/activity/overview?id=zowe_zowe-cli) | [SonarCloud](https://sonarcloud.io/activity/overview?id=zowe_zowe-explorer-intellij) | [SonarCloud](https://sonarcloud.io/activity/overview?id=zowe_imperative) | [MVS Explorer](https://sonarcloud.io/activity/overview?id=zowe_explorer-mvs), [USS Explorer](https://sonarcloud.io/activity/overview?id=zowe_explorer-uss), [JES Explorer](https://sonarcloud.io/activity/overview?id=zowe_explorer-jes) | [SonarCloud](https://sonarcloud.io/activity/overview?id=zowe_vscode-extension-for-zowe) | |
| warnings_strict | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

### Security

#### Secure development knowledge

- The project MUST have at least one primary developer who knows how to design secure software. (See ‘details’ for the exact requirements.) [know_secure_design]
- At least one of the project's primary developers MUST know of common kinds of errors that lead to vulnerabilities in this kind of software, as well as at least one method to counter or mitigate each of them. [know_common_errors]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| know_secure_design | [Jakub Balhar](https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/c7229cff-92bb-4041-8169-67a99454e09c-jakub-balhar-f3dc15d8-e112-408c-80fb-fb411bd4d39d-certificate.pdf) | [Andrej Chemlo](https://www.credly.com/badges/64f8fa30-e0b7-4a37-a0cd-45e18499de4e) | [Eugene Johnston](https://www.credly.com/badges/6f243b7f-571c-41f0-8f65-fdc7ff7fc7cd) | | [Eugene Johnston](https://www.credly.com/badges/6f243b7f-571c-41f0-8f65-fdc7ff7fc7cd) | [Sergei Kurnevich](https://www.credly.com/badges/6476e9c3-3222-42e5-b1e4-f2a12d131d90) | [Andrew Harn](https://www.credly.com/badges/9a6db764-8238-4667-bd72-3beecc634f16) | [Pablo Carle](https://www.credly.com/badges/13928f97-430f-4ae7-9642-81ee603d46b6) |
| know_common_errors | [Jakub Balhar](https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/c7229cff-92bb-4041-8169-67a99454e09c-jakub-balhar-f3dc15d8-e112-408c-80fb-fb411bd4d39d-certificate.pdf) | [Andrej Chemlo](https://www.credly.com/badges/64f8fa30-e0b7-4a37-a0cd-45e18499de4e) | [Eugene Johnston](https://www.credly.com/badges/6f243b7f-571c-41f0-8f65-fdc7ff7fc7cd) | | [Sergei Kurnevich](https://www.credly.com/badges/6476e9c3-3222-42e5-b1e4-f2a12d131d90) | [Eugene Johnston](https://www.credly.com/badges/6f243b7f-571c-41f0-8f65-fdc7ff7fc7cd) | [Andrew Harn](https://www.credly.com/badges/9a6db764-8238-4667-bd72-3beecc634f16) | [Pablo Carle](https://www.credly.com/badges/13928f97-430f-4ae7-9642-81ee603d46b6) |

#### Use basic good cryptographic practices

- The software produced by the project MUST use, by default, only cryptographic protocols and algorithms that are publicly published and reviewed by experts (if cryptographic protocols and algorithms are used). {N/A allowed} [crypto_published]
- If the software produced by the project is an application or library, and its primary purpose is not to implement cryptography, then it SHOULD only call on software specifically designed to implement cryptographic functions; it SHOULD NOT re-implement its own. {N/A allowed} [crypto_call]
- All functionality in the software produced by the project that depends on cryptography MUST be implementable using FLOSS. {N/A allowed} [crypto_floss]
- The security mechanisms within the software produced by the project MUST use default keylengths that at least meet the NIST minimum requirements through the year 2030 (as stated in 2012). It MUST be possible to configure the software so that smaller keylengths are completely disabled. {N/A allowed} [crypto_keylength]
- The default security mechanisms within the software produced by the project MUST NOT depend on broken cryptographic algorithms (e.g., MD4, MD5, single DES, RC4, Dual_EC_DRBG), or use cipher modes that are inappropriate to the context, unless they are necessary to implement an interoperable protocol (where the protocol implemented is the most recent version of that standard broadly supported by the network ecosystem, that ecosystem requires the use of such an algorithm or mode, and that ecosystem does not offer any more secure alternative). The documentation MUST describe any relevant security risks and any known mitigations if these broken algorithms or modes are necessary for an interoperable protocol. {N/A allowed} [crypto_working]
- The default security mechanisms within the software produced by the project SHOULD NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH). {N/A allowed} [crypto_weaknesses]
- The security mechanisms within the software produced by the project SHOULD implement perfect forward secrecy for key agreement protocols so a session key derived from a set of long-term keys cannot be compromised if one of the long-term keys is compromised in the future. {N/A allowed} [crypto_pfs]
- If the software produced by the project causes the storing of passwords for authentication of external users, the passwords MUST be stored as iterated hashes with a per-user salt by using a key stretching (iterated) algorithm (e.g., Argon2id, Bcrypt, Scrypt, or PBKDF2). See also OWASP Password Storage Cheat Sheet). {N/A allowed} [crypto_password_storage]
- The security mechanisms within the software produced by the project MUST generate all cryptographic keys and nonces using a cryptographically secure random number generator, and MUST NOT do so using generators that are cryptographically insecure. {N/A allowed} [crypto_random]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| crypto_published | N/A | N/A | N/A | N/A | Within the context of the Secrets for Zowe SDK (keytar replacement), we simply interact via standard APIs with the Windows credential manager, MacOS keychain, and libsecret on Linux/BSD systems. Zowe CLI and the Secrets SDK do not do anything cryptographically. | N/A | N/A | N/A |
| crypto_call | N/A | N/A | N/A | N/A | Zowe CLI and the Secrets SDK do not re-implement any cryptographic functions. | N/A | N/A | N/A |
| crypto_floss | N/A | N/A | N/A | N/A | Zowe CLI does not rely on proprietary/closed source cryptographic functions. | N/A | N/A | N/A |
| crypto_keylength | N/A |  | According to https://www.npmjs.com/package/ssh2, the package we use for handling ssh comms, indicates that the default list of ciphers does not include CBC ciphers. We do not override the defaults, so I think we are fine. | | | | | |
| crypto_working |  N/A | N/A | N/A | N/A | | N/A | N/A | N/A |
| crypto_weaknesses |  N/A | N/A | N/A | N/A | | N/A | N/A | N/A |
| crypto_pfs |  N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| crypto_password_storage | N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| crypto_random |  N/A | N/A | N/A | N/A | N/A | N/A | N/A | N/A |

#### Secured delivery against man-in-the-middle (MITM) attacks

- The project MUST use a delivery mechanism that counters MITM attacks. Using https or ssh+scp is acceptable. [delivery_mitm]
- A cryptographic hash (e.g., a sha1sum) MUST NOT be retrieved over http and used without checking for a cryptographic signature. [delivery_unsigned]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| delivery_mitm | [HTTPS](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/2.12.0/) | [HTTPS](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/2.12.0/) | [HTTPS](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/2.12.0/)| [HTTPS](https://plugins.jetbrains.com/plugin/18688-zowe-explorer) | [HTTPS](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/2.12.0/) | [HTTPS](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/2.12.0/) | [HTTPS](https://github.com/zowe/vscode-extension-for-zowe/releases/tag/v2.12.2) | [HTTPS](https://zowe.jfrog.io/artifactory/libs-release/org/zowe/2.12.0/) |
| delivery_usigned | [SHA 512](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.12.0/) | [SHA 512](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.12.0/) | [SHA 512](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.12.0/) | | [SHA 512](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.12.0/) | [SHA 512](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.12.0/) | | [SHA 512](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.12.0/) |

#### Publicly known vulnerabilities fixed

This is talking about the vulnerabilities in the software and exploitable vulnerabilities in the dependencies. The non exploitable vulnerabilities among dependencies doesn't apply. 

- There MUST be no unpatched vulnerabilities of medium or higher severity that have been publicly known for more than 60 days. [vulnerabilities_fixed_60_days]
- Projects SHOULD fix all critical vulnerabilities rapidly after they are reported. [vulnerabilities_critical_fixed]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| vulnerabilities_fixed_60_days | [Policy](https://www.zowe.org/security#analysis-and-assessment) | [Removed CVEs](https://docs.zowe.org/stable/getting-started/release-notes/v2_12_0#vulnerabilities-fixed) | [Removed CVEs](https://docs.zowe.org/stable/getting-started/release-notes/v2_12_0#vulnerabilities-fixed) | [Removed CVEs](https://docs.zowe.org/stable/getting-started/release-notes/v2_12_0#vulnerabilities-fixed) | [Removed CVEs](https://docs.zowe.org/stable/getting-started/release-notes/v2_12_0#vulnerabilities-fixed) | [Removed CVEs](https://docs.zowe.org/stable/getting-started/release-notes/v2_12_0#vulnerabilities-fixed) | [Removed CVEs](https://docs.zowe.org/stable/getting-started/release-notes/v2_12_0#vulnerabilities-fixed) | [Removed CVEs](https://docs.zowe.org/stable/getting-started/release-notes/v2_12_0#vulnerabilities-fixed) |
| vulnerabilities_critical_fixed | [Policy](https://www.zowe.org/security#analysis-and-assessment) | None exploitable by now, only critical in dependencies that we weren't vulnerable to | None exploitable by now, only critical in dependencies that we weren't vulnerable to | None exploitable by now, only critical in dependencies that we weren't vulnerable to | None exploitable by now, only critical in dependencies that we weren't vulnerable to | None exploitable by now, only critical in dependencies that we weren't vulnerable to | None exploitable by now, only critical in dependencies that we weren't vulnerable to | None exploitable by now, only critical in dependencies that we weren't vulnerable to |

#### Other security issues

- The public repositories MUST NOT leak a valid private credential (e.g., a working password or private key) that is intended to limit public access. [no_leaked_credentials]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| no_leaked_credentials | N/A | [Secret Scanning](https://github.com/zowe/api-layer/security/secret-scanning) | [Secret Scanning](https://github.com/zowe/zowe-cli/security/secret-scanning) | [Secret Scanning](https://github.com/zowe/zowe-explorer-intellij/security/secret-scanning) | [Secret Scanning](https://github.com/zowe/zowe-cli/security/secret-scanning) | [Secret Scanning](https://github.com/zowe/zlux/security/secret-scanning) | [Secret Scanning](https://github.com/zowe/vscode-extension-for-zowe/security/secret-scanning) | [Secret Scanning](https://github.com/zowe/zss/security/secret-scanning) |

### Analysis

#### Static code analysis

- At least one static code analysis tool (beyond compiler warnings and "safe" language modes) MUST be applied to any proposed major production release of the software before its release, if there is at least one FLOSS tool that implements this criterion in the selected language. {N/A justification} {Met justification} [static_analysis]
- It is SUGGESTED that at least one of the static analysis tools used for the static_analysis criterion include rules or approaches to look for common vulnerabilities in the analyzed language or environment. {N/A allowed} [static_analysis_common_vulnerabilities]
- All medium and higher severity exploitable vulnerabilities discovered with static code analysis MUST be fixed in a timely way after they are confirmed. {N/A allowed} [static_analysis_fixed]
- It is SUGGESTED that static source code analysis occur on every commit or at least daily. {N/A allowed} [static_analysis_often]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| static_analysis | N/A | [Sonarcloud](https://sonarcloud.io/summary/overall?id=zowe_api-layer) | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_zowe-cli) | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_zowe-explorer-intellij) | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_imperative) | [AppScan for V2](https://github.com/zowe/security-reports/blob/master/AppScan/v2/Static/zowe-web-scan_assessment.pdf) | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_vscode-extension-for-zowe) | [AppScan for V2](https://github.com/zowe/security-reports/blob/master/AppScan/v2/Static/zowe-web-scan_assessment.pdf) |
| static_analysis_common_vulnerabilities | N/A | [Sonarcloud](https://sonarcloud.io/summary/overall?id=zowe_api-layer) | [Sonarcloud](https://sonarcloud.io/project/overview??id=zowe_zowe-cli) | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_zowe-explorer-intellij) | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_imperative) | [AppScan for V2](https://github.com/zowe/security-reports/blob/master/AppScan/v2/Static/zowe-web-scan_assessment.pdf) | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_vscode-extension-for-zowe) | [AppScan for V2](https://github.com/zowe/security-reports/blob/master/AppScan/v2/Static/zowe-web-scan_assessment.pdf) |
| static_analysis_fixed | N/A | [Waiting](https://github.com/zowe/api-layer/issues/3209), [Need to be Fixed](https://sonarcloud.io/project/issues?resolved=false&types=BUG&id=zowe_api-layer) | [Need to be Fixed](https://sonarcloud.io/project/issues?resolved=false&types=BUG&sinceLeakPeriod=true&id=zowe_zowe-cli) | [Done](https://sonarcloud.io/project/issues?resolved=false&types=BUG&id=zowe_zowe-explorer-intellij) | [Need to be fixed](https://sonarcloud.io/project/issues?resolved=false&types=BUG&id=zowe_imperative) | No issue found | [Need to be fixed](https://sonarcloud.io/project/issues?impactSeverities=HIGH%2CMEDIUM&resolved=false&types=BUG&id=zowe_vscode-extension-for-zowe) | No issue found |
| static_analysis_often | N/A | [Sonarcloud](https://sonarcloud.io/summary/overall?id=zowe_api-layer) | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_zowe-cli) | N/A | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_imperative) | N/A | [Sonarcloud](https://sonarcloud.io/project/overview?id=zowe_vscode-extension-for-zowe) | N/A |

#### Dynamic code analysis

- It is SUGGESTED that at least one dynamic analysis tool be applied to any proposed major production release of the software before its release. [dynamic_analysis]
- It is SUGGESTED that if the software produced by the project includes software written using a memory-unsafe language (e.g., C or C++), then at least one dynamic tool (e.g., a fuzzer or web application scanner) be routinely used in combination with a mechanism to detect memory safety problems such as buffer overwrites. If the project does not produce software written in a memory-unsafe language, choose "not applicable" (N/A). {N/A allowed} [dynamic_analysis_unsafe]
- It is SUGGESTED that the project use a configuration for at least some dynamic analysis (such as testing or fuzzing) which enables many assertions. In many cases these assertions should not be enabled in production builds. [dynamic_analysis_enable_assertions]
- All medium and higher severity exploitable vulnerabilities discovered with dynamic code analysis MUST be fixed in a timely way after they are confirmed. {N/A allowed} [dynamic_analysis_fixed]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| dynamic_analysis | [AppScan for V2](https://github.com/zowe/security-reports/blob/master/AppScan/v2/Dynamic/zowe-web-scan_assessment.pdf) | [AppScan for V2](https://github.com/zowe/security-reports/blob/master/AppScan/v2/Dynamic/zowe-web-scan_assessment.pdf) | No | N/A | No | [AppScan for V2](https://github.com/zowe/security-reports/blob/master/AppScan/v2/Dynamic/zowe-web-scan_assessment.pdf) | No | [AppScan for V2](https://github.com/zowe/security-reports/blob/master/AppScan/v2/Dynamic/zowe-web-scan_assessment.pdf)  |
| dynamic_analysis_unsafe | No | No | No | N/A | No | N/A | N/A | No |
| dynamic_analysis_enable_assertions | No | No | No | No | No | No | No | No |
| dynamic_analysis_fixed | Yes | Yes | No | No | No | Yes | No | Yes |

## Silver Badge

### Basics

#### Basic project website content

- The information on how to contribute MUST include the requirements for acceptable contributions (e.g., a reference to any required coding standard). {Met URL} [contribution_requirements]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| contribution_requirements | N/A | [Coding Standard](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md#file-naming-guidelines) | [Coding Standard](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/CONTRIBUTING.md#coding-standards) | [Coding Standard](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md#code-guidelines) |

#### Project oversight

- The project SHOULD have a legal mechanism where all developers of non-trivial amounts of project software assert that they are legally authorized to make these contributions. The most common and easily-implemented approach for doing this is by using a Developer Certificate of Origin (DCO), where users add "signed-off-by" in their commits and the project links to the DCO website. However, this MAY be implemented as a Contributor License Agreement (CLA), or other legal mechanism. {Met URL} [dco]
- The project MUST clearly define and document its project governance model (the way it makes decisions, including key roles). {Met URL} [governance]
- The project MUST adopt a code of conduct and post it in a standard location. {Met URL} [code_of_conduct]
- The project MUST clearly define and publicly document the key roles in the project and their responsibilities, including any tasks those roles must perform. It MUST be clear who has which role(s), though this might not be documented in the same way. {Met URL} [roles_responsibilities]
- The project MUST be able to continue with minimal interruption if any one person dies, is incapacitated, or is otherwise unable or unwilling to continue support of the project. In particular, the project MUST be able to create and close issues, accept proposed changes, and release versions of software, within a week of confirmation of the loss of support from any one individual. This MAY be done by ensuring someone else has any necessary keys, passwords, and legal rights to continue the project. Individuals who run a FLOSS project MAY do this by providing keys in a lockbox and a will providing any needed legal rights (e.g., for DNS names). {Met URL} [access_continuity]
- The project SHOULD have a "bus factor" of 2 or more. {Met URL} [bus_factor]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| dco | | | | | | | | |
| governance | | | | | | | | |
| code_of_conduct | | | | | | | | |
| roles_responsibilities | | | | | | | | |
| access_continuity | | | | | | | | |
| bus_factor | | | | | | | | |

#### Documentation

- The project MUST have a documented roadmap that describes what the project intends to do and not do for at least the next year. {Met URL} [documentation_roadmap]
- The project MUST include documentation of the architecture (aka high-level design) of the software produced by the project. If the project does not produce software, select "not applicable" (N/A). {N/A justification} {Met URL} [documentation_architecture]
- The project MUST document what the user can and cannot expect in terms of security from the software produced by the project (its "security requirements"). {N/A allowed} {Met URL} [documentation_security]
- The project MUST provide a "quick start" guide for new users to help them quickly do something with the software. {N/A justification} {Met URL} [documentation_quick_start]
- The project MUST make an effort to keep the documentation consistent with the current version of the project results (including software produced by the project). Any known documentation defects making it inconsistent MUST be fixed. If the documentation is generally current, but erroneously includes some older information that is no longer true, just treat that as a defect, then track and fix as usual. {N/A justification} {Met justification} [documentation_current]
- The project repository front page and/or website MUST identify and hyperlink to any achievements, including this best practices badge, within 48 hours of public recognition that the achievement has been attained. {Met URL} [documentation_achievements]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| documentation_roadmap | | | | | | | | |
| documentation_architecture | | | | | | | | |
| documentation_security | | | | | | | | |
| documentation_quick_start | | | | | | | | |
| documentation_current | | | | | | | | |
| documentation_achievements | | | | | | | | |

#### Accessibility and internationalization

- The project (both project sites and project results) SHOULD follow accessibility best practices so that persons with disabilities can still participate in the project and use the project results where it is reasonable to do so. {N/A justification} {Met justification} [accessibility_best_practices]
- The software produced by the project SHOULD be internationalized to enable easy localization for the target audience's culture, region, or language. If internationalization (i18n) does not apply (e.g., the software doesn't generate text intended for end-users and doesn't sort human-readable text), select "not applicable" (N/A). {N/A justification} {Met justification} [internationalization]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| accessibility_best_practices | | | | | | | | |
| internationalization | | | | | | | | |

#### Other

- If the project sites (website, repository, and download URLs) store passwords for authentication of external users, the passwords MUST be stored as iterated hashes with a per-user salt by using a key stretching (iterated) algorithm (e.g., Argon2id, Bcrypt, Scrypt, or PBKDF2). If the project sites do not store passwords for this purpose, select "not applicable" (N/A). {N/A justification} {Met justification} [sites_password_security]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| sites_password_security | | | | | | | | |

### Change Control

#### Previous versions

- The project MUST maintain the most often used older versions of the product or provide an upgrade path to newer versions. If the upgrade path is difficult, the project MUST document how to perform the upgrade (e.g., the interfaces that have changed and detailed suggested steps to help upgrade). {N/A justification} {Met justification} [maintenance_or_update]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| maintenance_or_update | | | | | | | | |

### Reporting

#### Bug-reporting process

- The project MUST use an issue tracker for tracking individual issues. {N/A justification} {Met justification} [report_tracker]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| report_tracker | | | | | | | | |

#### Vulnerability report process

- The project MUST give credit to the reporter(s) of all vulnerability reports resolved in the last 12 months, except for the reporter(s) who request anonymity. If there have been no vulnerabilities resolved in the last 12 months, select "not applicable" (N/A). {N/A justification} {Met URL} [vulnerability_report_credit]
- The project MUST have a documented process for responding to vulnerability reports. {Met URL} [vulnerability_response_process]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| vulnerability_report_credit | | | | | | | | |
| vulnerability_response_process | | | | | | | | |

### Quality

#### Coding standards

- The project MUST identify the specific coding style guides for the primary languages it uses, and require that contributions generally comply with it. {N/A justification} {Met URL} [coding_standards]
- The project MUST automatically enforce its selected coding style(s) if there is at least one FLOSS tool that can do so in the selected language(s). {N/A justification} {Met justification} [coding_standards_enforced]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| coding_standards | | | | | | | | |
| coding_standards_enforced | | | | | | | | |

#### Working build system

- Build systems for native binaries MUST honor the relevant compiler and linker (environment) variables passed in to them (e.g., CC, CFLAGS, CXX, CXXFLAGS, and LDFLAGS) and pass them to compiler and linker invocations. A build system MAY extend them with additional flags; it MUST NOT simply replace provided values with its own. If no native binaries are being generated, select "not applicable" (N/A). {N/A justification} {Met justification} [build_standard_variables]
- The build and installation system SHOULD preserve debugging information if they are requested in the relevant flags (e.g., "install -s" is not used). If there is no build or installation system (e.g., typical JavaScript libraries), select "not applicable" (N/A). {N/A justification} {Met justification} [build_preserve_debug]
- The build system for the software produced by the project MUST NOT recursively build subdirectories if there are cross-dependencies in the subdirectories. If there is no build or installation system (e.g., typical JavaScript libraries), select "not applicable" (N/A). {N/A justification} {Met justification} [build_non_recursive]
- The project MUST be able to repeat the process of generating information from source files and get exactly the same bit-for-bit result. If no building occurs (e.g., scripting languages where the source code is used directly instead of being compiled), select "not applicable" (N/A). {N/A justification} {Met justification} [build_repeatable]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| build_standard_variables | | | | | | | | |
| build_preserve_debug | | | | | | | | |
| build_non_recursive | | | | | | | | |
| build_repeatable | | | | | | | | |

#### Installation system

- The project MUST provide a way to easily install and uninstall the software produced by the project using a commonly-used convention. {N/A justification} {Met justification} [installation_common]
- The installation system for end-users MUST honor standard conventions for selecting the location where built artifacts are written to at installation time. For example, if it installs files on a POSIX system it MUST honor the DESTDIR environment variable. If there is no installation system or no standard convention, select "not applicable" (N/A). {N/A justification} {Met justification} [installation_standard_variables]
- The project MUST provide a way for potential developers to quickly install all the project results and support environment necessary to make changes, including the tests and test environment. This MUST be performed with a commonly-used convention. {N/A justification} {Met justification} [installation_development_quick]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| installation_common | | | | | | | | |
| installation_standard_variables | | | | | | | | |
| installation_development_quick | | | | | | | | |

#### Externally-maintained components

- The project MUST list external dependencies in a computer-processable way. {N/A justification} {Met URL} [external_dependencies]
- Projects MUST monitor or periodically check their external dependencies (including convenience copies) to detect known vulnerabilities, and fix exploitable vulnerabilities or verify them as unexploitable. {N/A justification} {Met justification} [dependency_monitoring]
- The project MUST either:
  - make it easy to identify and update reused externally-maintained components; or
  - use the standard components provided by the system or programming language.
  Then, if a vulnerability is found in a reused component, it will be easy to update that component. {N/A justification} {Met justification} [updateable_reused_components]
- The project SHOULD avoid using deprecated or obsolete functions and APIs where FLOSS alternatives are available in the set of technology it uses (its "technology stack") and to a supermajority of the users the project supports (so that users have ready access to the alternative). {N/A justification} {Met justification} [interfaces_current]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| external_dependencies | | | | | | | | |
| dependency_monitoring | | | | | | | | |
| updateable_reused_components | | | | | | | | |
| interfaces_current | | | | | | | | |

#### Automated test suite

- An automated test suite MUST be applied on each check-in to a shared repository for at least one branch. This test suite MUST produce a report on test success or failure. {Met justification} [automated_integration_testing]
- The project MUST add regression tests to an automated test suite for at least 50% of the bugs fixed within the last six months. {N/A justification} {Met justification} [regression_tests_added50]
- The project MUST have FLOSS automated test suite(s) that provide at least 80% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language. {N/A justification} {Met justification} [test_statement_coverage80]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| automated_integration_testing | | | | | | | | |
| regression_tests_added50 | | | | | | | | |
| test_statement_coverage80 | | | | | | | | |

#### New functionality testing

- The project MUST have a formal written policy that as major new functionality is added, tests for the new functionality MUST be added to an automated test suite. {N/A justification} {Met justification} [test_policy_mandated]
- The project MUST include, in its documented instructions for change proposals, the policy that tests are to be added for major new functionality. {N/A justification} {Met justification} [tests_documented_added]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| test_policy_mandated | | | | | | | | |
| tests_documented_added | | | | | | | | |

#### Warning flags

- Projects MUST be maximally strict with warnings in the software produced by the project, where practical. {N/A justification} {Met justification} [warnings_strict]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| warnings_strict | | | | | | | | |

### Security

#### Secure development knowledge

- The project MUST implement secure design principles (from "know_secure_design"), where applicable. If the project is not producing software, select "not applicable" (N/A). {N/A justification} {Met justification} [implement_secure_design]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| implement_secure_design | | | | | | | | |

#### Use basic good cryptographic practices

- The default security mechanisms within the software produced by the project MUST NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH). {N/A allowed} {Met justification} [crypto_weaknesses]
- The project SHOULD support multiple cryptographic algorithms, so users can quickly switch if one is broken. Common symmetric key algorithms include AES, Twofish, and Serpent. Common cryptographic hash algorithm alternatives include SHA-2 (including SHA-224, SHA-256, SHA-384 AND SHA-512) and SHA-3. {N/A allowed} {Met justification} [crypto_algorithm_agility]
- The project MUST support storing authentication credentials (such as passwords and dynamic tokens) and private cryptographic keys in files that are separate from other information (such as configuration files, databases, and logs), and permit users to update and replace them without code recompilation. If the project never processes authentication credentials and private cryptographic keys, select "not applicable" (N/A). {N/A allowed} {Met justification} [crypto_credential_agility]
- The software produced by the project SHOULD support secure protocols for all of its network communications, such as SSHv2 or later, TLS1.2 or later (HTTPS), IPsec, SFTP, and SNMPv3. Insecure protocols such as FTP, HTTP, telnet, SSLv3 or earlier, and SSHv1 SHOULD be disabled by default, and only enabled if the user specifically configures it. If the software produced by the project does not support network communications, select "not applicable" (N/A). {N/A allowed} {Met justification} [crypto_used_network]
- The software produced by the project SHOULD, if it supports or uses TLS, support at least TLS version 1.2. Note that the predecessor of TLS was called SSL. If the software does not use TLS, select "not applicable" (N/A). {N/A allowed} {Met justification} [crypto_tls12]
- The software produced by the project MUST, if it supports TLS, perform TLS certificate verification by default when using TLS, including on subresources. If the software does not use TLS, select "not applicable" (N/A). {N/A allowed} {Met justification} [crypto_certificate_verification]
- The software produced by the project MUST, if it supports TLS, perform certificate verification before sending HTTP headers with private information (such as secure cookies). If the software does not use TLS, select "not applicable" (N/A). {N/A allowed} {Met justification} [crypto_verification_private]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| crypto_weaknesses | | | | | | | | |
| crypto_algorithm_agility | | | | | | | | |
| crypto_credential_agility | | | | | | | | |
| crypto_used_network | | | | | | | | |
| crypto_tls12 | | | | | | | | |
| crypto_certificate_verification | | | | | | | | |
| crypto_verification_private | | | | | | | | |

#### Secure release

- The project MUST cryptographically sign releases of the project results intended for widespread use, and there MUST be a documented process explaining to users how they can obtain the public signing keys and verify the signature(s).The private key for these signature(s) MUST NOT be on site(s) used to directly distribute the software to the public. If releases are not intended for widespread use, select "not applicable" (N/A). {N/A justification} {Met justification} [signed_releases]
- It is SUGGESTED that in the version control system, each important version tag (a tag that is part of a major release, minor release, or fixes publicly noted vulnerabilities) be cryptographically signed and verifiable as described in signed_releases. {Met justification} [version_tags_signed]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| signed_releases | | | | | | | | |
| version_tags_signed | | | | | | | | |

#### Other security issues

- The project results MUST check all inputs from potentially untrusted sources to ensure they are valid (an *allowlist*), and reject invalid inputs, if there are any restrictions on the data at all. {N/A justification} {Met justification} [input_validation]
- Hardening mechanisms SHOULD be used in the software produced by the project so that software defects are less likely to result in security vulnerabilities. {N/A justification} {Met justification} [hardening]
- The project MUST provide an assurance case that justifies why its security requirements are met. The assurance case MUST include: a description of the threat model, clear identification of trust boundaries, an argument that secure design principles have been applied, and an argument that common implementation security weaknesses have been countered. {Met URL} [assurance_case]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| input_validation | | | | | | | | |
| hardening | | | | | | | | |
| assurance_case | | | | | | | | |

### Analysis

#### Static code analysis

- The project MUST use at least one static analysis tool with rules or approaches to look for common vulnerabilities in the analyzed language or environment, if there is at least one FLOSS tool that can implement this criterion in the selected language. {N/A justification} {Met justification} [static_analysis_common_vulnerabilities]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| static_analysis_common_vulnerabilities | | | | | | | | |

#### Dynamic code analysis

- If the software produced by the project includes software written using a memory-unsafe language (e.g., C or C++), then at least one dynamic tool (e.g., a fuzzer or web application scanner) MUST be routinely used in combination with a mechanism to detect memory safety problems such as buffer overwrites. If the project does not produce software written in a memory-unsafe language, choose "not applicable" (N/A). {N/A justification} {Met justification} [dynamic_analysis_unsafe]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| dynamic_analysis_unsafe | | | | | | | | |
