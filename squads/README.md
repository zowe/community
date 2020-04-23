# Squads

Here are a number of documents that talks about squads, lifecycles, categories, and other details on how they work.

- Squad [lifecycle](lifecycle.md) and [categories](categories.md)
- [Checklist for new squads](new-squad-checklist.md)
- [Guidelines and best practices for squads](guidelines.md)

# Current Zowe Squad matrix

<table>
<tr>
  <th></th>
  <th>Core</th>
  <th>Extended</th>
  <th>Development Tooling</th>
</tr>
<tr>
  <th>Active</th>
  <td style="vertical-align: top;">
App Framework

- App server
- Desktop
- Core apps:
  - [MVS Explorer](https://github.com/zowe/explorer-mvs)
  - [USS Explorer](https://github.com/zowe/explorer-uss)
  - [JES Explorer](https://github.com/zowe/explorer-jes)
  - [3270 Terminal Emulator](https://github.com/zowe/tn3270-ng2)
  - [VT Terminal Emulator](https://github.com/zowe/vt-ng2)
- File editor

[API Mediation Layer](https://github.com/zowe/api-layer)

- Gateway
- Catalog
- Discovery Service
- ZAAS authentication, authorization microservice

API (Services that provide APIs to z/os data for extenders):

- MVS/USS Explorer API
- JES Explorer API
- ZSS ( Zowe Secure Services ) and x-mem server

Zowe z/OS component installer:

- Convenience build install and configure
- SMP/e build install
- Containerized Zowe

CLI

- [SCS](https://github.com/zowe/zowe-cli-scs-plugin)

[Zowe Explorer](https://github.com/zowe/vscode-extension-for-zowe)

- VS Code marketplace
- Offline Downloadable plugin
- Extensible Framework

  </td>
  <td style="vertical-align: top;">

[CLI](https://github.com/zowe/zowe-cli)
- [CICS (CMCI)](https://github.com/zowe/zowe-cli-cics-plugin)
- [Db2](https://github.com/zowe/zowe-cli-db2-plugin)
- [MQ](https://github.com/zowe/zowe-cli-mq-plugin)
- [IMS](https://github.com/zowe/zowe-cli-ims-plugin)
- [FTP](https://github.com/zowe/zowe-cli-ftp-plugin)
  </td>
  <td style="vertical-align: top;">
  </td>
</tr>
<tr>
  <th>Incubation</th>
  <td>
[Mobile](https://github.com/zowe/zowe-on-the-go)
  </td>
  <td>

API:
- [IMS Operations](https://github.com/zowe/ims-operations-api)

AppFW:
- [Jupyter App](https://github.com/zowe/jupyter-app)
- [DB Browser App](https://github.com/zowe/db-browser)
- [DB2 Library for DB Browser App](https://github.com/zowe/db-browser-db2)
  </td>
  <td>

Client SDK for NodeJS
[Client SDK for Python](https://github.com/zowe/zowe-client-python-sdk)
API SDK: In development by the APIML squad
AppFW: May need to create a coherent “sdk”. Composed of: Sample apps, zlux-build?
CLI plugin starter
C code: ZSS based on zowe-common-c libraries, may be their own SDK.
  </td>
</tr>
<tr>
  <th>Emeritus</th>
  <td>
  </td>
  <td>
  </td>
  <td>
  </td>
</tr>
</table>


# All other Zowe repos

## Operations Repos

https://github.com/zowe/ci-management
https://github.com/zowe/community
https://github.com/zowe/docs-site
https://github.com/zowe/zowe.github.io
https://github.com/zowe/zlc

## Code Repos

TODO: Move into chart above

https://github.com/zowe/apiml-legacy-samples
https://github.com/zowe/cpu_usage_sample
https://github.com/zowe/data-sets
https://github.com/zowe/explorer-api-common
https://github.com/zowe/explorer-fvt-utilities
https://github.com/zowe/explorer-ui-server
https://github.com/zowe/file-transfer-app
https://github.com/zowe/imperative
https://github.com/zowe/intern-devOps
https://github.com/zowe/intern-zosExplorer
https://github.com/zowe/jenkins-library
https://github.com/zowe/jenkins-library-fvt-gradle
https://github.com/zowe/jenkins-library-fvt-nodejs
https://github.com/zowe/jenkins-slave-images
https://github.com/zowe/jobs
https://github.com/zowe/Onboarding-scripts
https://github.com/zowe/orion-editor-component
https://github.com/zowe/perf-timing
https://github.com/zowe/sample-angular-app
https://github.com/zowe/sample-iframe-app
https://github.com/zowe/sample-node-api
https://github.com/zowe/sample-react-app
https://github.com/zowe/sample-spring-boot-api-service
https://github.com/zowe/sample-trial-app
https://github.com/zowe/spring-boot-jzos-sample
https://github.com/zowe/vtl-cli
https://github.com/zowe/webui-scenarios
https://github.com/zowe/workshop-starter-app
https://github.com/zowe/workshop-user-browser-app
https://github.com/zowe/zlux
https://github.com/zowe/zlux-app-manager
https://github.com/zowe/zlux-app-server
https://github.com/zowe/zlux-build
https://github.com/zowe/zlux-charts
https://github.com/zowe/zlux-editor
https://github.com/zowe/zlux-file-explorer
https://github.com/zowe/zlux-file-properties
https://github.com/zowe/zlux-grid
https://github.com/zowe/zlux-platform
https://github.com/zowe/zlux-server-framework
https://github.com/zowe/zlux-shared
https://github.com/zowe/zlux-widgets
https://github.com/zowe/zlux-workflow
https://github.com/zowe/zos-subsystems
https://github.com/zowe/zosmf-auth
https://github.com/zowe/zowe-cli-profile-migration
https://github.com/zowe/zowe-cli-sample-plugin
https://github.com/zowe/zowe-cli-sample-scripts
https://github.com/zowe/zowe-cli-standalone-package
https://github.com/zowe/zowe-cli-tasks-plugin
https://github.com/zowe/zowe-cli-version-controller
https://github.com/zowe/zowe-cli-zos-make-plugin
https://github.com/zowe/zowe-common-c
https://github.com/zowe/zowe-dependency-scan-pipeline
https://github.com/zowe/zowe-dockerfiles
https://github.com/zowe/zowe-install-packaging
https://github.com/zowe/zowe-install-test
https://github.com/zowe/zss
https://github.com/zowe/zss-auth
https://github.com/zowe/ztrial-sample-cli-plugin
