# Criteria and our fullfilment

The goal of this document is to cover where we as Zowe are with respect to our projects that are at least GA. The criteria are based on the information in [OpenSSF Best Practices](https://www.bestpractices.dev/pt-BR/criteria)

## Passing Badge

### Criteria

#### Basics

##### Basic project website content

- The project website MUST succinctly describe what the software does (what problem does it solve?). [description_good]
- The project website MUST provide information on how to: obtain, provide feedback (as bug reports or enhancements), and contribute to the software. [interact]
- The information on how to contribute MUST explain the contribution process (e.g., are pull requests used?) {Met URL} [contribution]
- The information on how to contribute SHOULD include the requirements for acceptable contributions (e.g., a reference to any required coding standard). {Met URL} [contribution_requirements]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| description_good | [zowe.org](https://zowe.org) | [API ML](https://www.zowe.org/#api-mediation-layer-intro) | [CLI](https://www.zowe.org/#zowe-cli-intro) | [Intellij Plugin](https://www.zowe.org/#zowe-intellij-plugin-intro) | [Node.js Client SDK](https://www.zowe.org/#zowe-node.js-client-sdk-intro) | [Zowe Application Framework](https://www.zowe.org/#zowe-application-framework-intro) | [Zowe Explorer](https://www.zowe.org/#zowe-explorer-intro) | [ZSS](https://www.zowe.org/#zss-intro) |
| interact | [Contribute](https://www.zowe.org/contribute) | [Obtain](https://docs.zowe.org/stable/user-guide/install-zos), [Provide feedback](https://github.com/zowe/api-layer/issues), [Contribute](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/getting-started/cli-getting-started), [Provide Feedback](https://github.com/zowe/zowe-cli/issues), [Contribute](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/user-guide/intellij-install), [Provide feedback](https://github.com/zowe/zowe-explorer-intellij/issues), [Contribute](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/CONTRIBUTING.md) |  | [Obtain](https://docs.zowe.org/stable/user-guide/install-zos), [Provide Feedback](https://github.com/zowe/zlux/issues), [Contribute](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/user-guide/ze-install#installing-zowe-explorer), [Provide Feedback](https://github.com/zowe/vscode-extension-for-zowe/issues), [Contribute](https://github.com/zowe/vscode-extension-for-zowe/blob/main/CONTRIBUTING.md) | [Obtain](https://docs.zowe.org/stable/user-guide/install-zos), [Provide Feedback](https://github.com/zowe/zss/issues), [Contribute](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md) |
| contribution | N/A | [How to Contribute](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md#pull-requests) | [How to Contribute](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#contributing-to-core-functionality) | [How to Contribute](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/CONTRIBUTING.md#steps-to-contribute) | | [How to Contribute](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md#ways-to-contribute) | [How to Contribute](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md) | [How to Contribute](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md#ways-to-contribute) |  
| contribution_requirements | N/A | [Coding Standard](https://github.com/zowe/api-layer/blob/v2.x.x/CONTRIBUTING.md#file-naming-guidelines) | [Coding Standard](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/CONTRIBUTING.md#coding-standards) |  | [Coding Standard](https://github.com/zowe/zlux/blob/v1.x/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zowe-cli/blob/master/CONTRIBUTING.md#code-guidelines) | [Coding Standard](https://github.com/zowe/zss/blob/v2.x/staging/CONTRIBUTING.md#code-guidelines) |

##### FLOSS license

- The software produced by the project MUST be released as FLOSS. [floss_license]
- It is SUGGESTED that any required license(s) for the software produced by the project be approved by the Open Source Initiative (OSI). [floss_license_osi]
- The project MUST post the license(s) of its results in a standard location in their source repository. {Met URL} [license_location]-

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| floss_license | [EPL 2.0 or APL, point 7 of charter](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/charter.md) | [License](https://github.com/zowe/api-layer/blob/v2.x.x/LICENSE) | [License](https://github.com/zowe/zowe-cli/blob/master/LICENSE) | [License](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/LICENSE) |  | [License](https://github.com/zowe/zlux/blob/v1.x/master/LICENSE) | [License](https://github.com/zowe/vscode-extension-for-zowe/blob/main/LICENSE) | [License](https://github.com/zowe/zss/blob/v2.x/staging/LICENSE) |
| floss_license_osi | [EPL 2.0 or APL, point 7 of charter](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/charter.md) | N/A | N/A | N/A | N/A | N/A | N/A | N/A |
| license_location | N/A | [License](https://github.com/zowe/api-layer/blob/v2.x.x/LICENSE) | [License](https://github.com/zowe/zowe-cli/blob/master/LICENSE) | [License](https://github.com/zowe/zowe-explorer-intellij/blob/release/v1.0.3-221/LICENSE) |  | [License](https://github.com/zowe/zlux/blob/v1.x/master/LICENSE) | [License](https://github.com/zowe/vscode-extension-for-zowe/blob/main/LICENSE) | [License](https://github.com/zowe/zss/blob/v2.x/staging/LICENSE) |
 

##### Documentation

- The project MUST provide basic documentation for the software produced by the project. {N/A justification} [documentation_basics]
- The project MUST provide reference documentation that describes the external interface (both input and output) of the software produced by the project. {N/A justification} [documentation_interface]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| documentation_basics | [Documentation](https://docs.zowe.org/) | [Documentation](https://docs.zowe.org/stable/user-guide/api-mediation/using-api-mediation-layer/) | [Documentation](https://docs.zowe.org/stable/user-guide/cli-using-usingcli) | [Documentation](https://docs.zowe.org/stable/user-guide/intellij-using) | [Documentation](https://docs.zowe.org/stable/typedoc/index.html) | [Documentation](https://docs.zowe.org/stable/user-guide/mvd-using) | [Documentation](https://docs.zowe.org/stable/user-guide/ze-usage) | [Documentation](https://docs.zowe.org/stable/getting-started/zowe-architecture/#zss) |
| documentation_interface | N/A | [API Gateway](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/zowe/docs-site/docs-staging/api_definitions/gateway.json) | [Reference Doc](https://docs.zowe.org/stable/web_help/index.html) | | [Reference Doc](https://docs.zowe.org/stable/typedoc/index.html) | [Zlux Plugins](https://petstore.swagger.io/?url=https://raw.githubusercontent.com/zowe/docs-site/docs-staging/api_definitions/zlux-plugin.json) | | |

##### Other

- The project sites (website, repository, and download URLs) MUST support HTTPS using TLS. [sites_https]
- The project MUST have one or more mechanisms for discussion (including proposed changes and issues) that are searchable, allow messages and topics to be addressed by URL, enable new people to participate in some of the discussions, and do not require client-side installation of proprietary software. [discussion]
- The project SHOULD provide documentation in English and be able to accept bug reports and comments about code in English. [english]
- The project MUST be maintained. [maintained]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| sites_https | [Website](https://zowe.org) | [Repository](https://github.com/zowe/api-layer.git), [Download](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.11.0/) | [Repository](https://github.com/zowe/zowe-cli.git), [Download](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/cli/zowe-cli-package/2.11.0/) | [Repository](https://github.com/zowe/zowe-explorer-intellij.git) | | [Repository](https://github.com/zowe/zlux.git), [Download](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.11.0/) | [Repository](https://github.com/zowe/vscode-extension-for-zowe.git) | [Repository](https://github.com/zowe/zss.git), [Download](https://zowe.jfrog.io/zowe/list/libs-release-local/org/zowe/2.11.0/) |
| discussion | [GitHub](https://github.com/zowe) | [GitHub](https://github.com/zowe/api-layer) | [GitHub](https://github.com/zowe/zowe-cli) | [GitHub](https://github.com/zowe/zowe-explorer-intellij) | | [GitHub](https://github.com/zowe/zlux) | [GitHub](https://github.com/zowe/vscode-extension-for-zowe) | [GitHub](https://github.com/zowe/zss) |
| english | [GitHub](https://github.com/zowe) | [GitHub](https://github.com/zowe/api-layer) | [GitHub](https://github.com/zowe/zowe-cli) | [GitHub](https://github.com/zowe/zowe-explorer-intellij) | | [GitHub](https://github.com/zowe/zlux) | [GitHub](https://github.com/zowe/vscode-extension-for-zowe) | [GitHub](https://github.com/zowe/zss) |
| maintained | TSC, ZAC | API Mediation Layer Squad | CLI Squad | Intellij Squad | CLI Squad | Web UI Squad | Explorer Squad | zOS Squad |

#### Change Control

##### Public version-controlled source repository

- The project MUST have a version-controlled source repository that is publicly readable and has a URL. [repo_public]
- The project's source repository MUST track what changes were made, who made the changes, and when the changes were made. [repo_track]
- To enable collaborative review, the project's source repository MUST include interim versions for review between releases; it MUST NOT include only final releases. [repo_interim]
- It is SUGGESTED that common distributed version control software be used (e.g., git) for the project's source repository. [repo_distributed]

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| repo_public | | | | | | | | |
| repo_track | | | | | | | | |
| repo_interim | | | | | | | | |
| repo_distributed | | | | | | | | |

## Silver Badge

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| | | | | | | | | |

## Gold Badge

| Name of the criteria | Zowe | API Mediation Layer | CLI | Intellij Plugin | Node.js Client SDK | Zowe Application Framework | Zowe Explorer | Zowe System Services (ZSS) |
|----------------------|------|---------------------|-----|-----------------|--------------------|----------------------------|---------------|----------------------------|
| | | | | | | | | |
