# Zowe Systems Squad - 21PI4 Objectives (October 2021 to January 2022)

## Containerization

* [Epic - Containerise Zowe](https://github.com/zowe/zowe-install-packaging/issues/793) highlights:
  - [Build and release offline images]()
  - [Helm Charts]()
  - [Complete Community Automated Testing]()
  - Stretch: [docker-compose support]()
  - Stretch: [Convert Node.JS Tooling to Golang to reduce image size]()

##### Dependency: Squad attention if we discover any issues during implementation

## Install and Configuration 

* [Zowe PSI Automation]()
  - Complete integration of PSI into automated workflow
  - Move PSI to TSS/ACF systems?
* [Zowe v2 Support](https://github.com/zowe/zowe-install-packaging/issues/2136)
  - Prepare for support of App/Plugin stores
  - Confirm any new or changed conformance criteria related to packaging

## Pipelines and Systems

### CI/CD 

* [Github Action Migrations](https://github.com/zowe/zowe-install-packaging/issues/1868)
  - Migrate zowe-install-packaging
  - Migrate zlux pipelines

##### Dependency: Web UI Squad to help migrate pipelines

### z/OS Infrastructure

* [z/OS Sysplex Setup](https://github.com/zowe/zowe-install-packaging/issues/1397)
  - Validation: Run HA tests against Sysplex

### Zowe 2.x Preparation

* [Start building 'v2' branch](https://github.com/zowe/zowe-install-packaging/issues/2262)
  - Start building 'v2' branch
* [Review usage of z/OS System resources]()
  - Post v2 builds, look at DASD in particular