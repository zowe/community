# Zowe Systems Squad - 21PI4 Objectives (October 2021 to January 2022)

## Zowe 2.x Preparation

* [Start building 'v2' branch](https://github.com/zowe/zowe-install-packaging/issues/2262)
  - Start building 'v2' Zowe and designing the release process for both v1 + v2 
  - v1 and v2 release cycle proposals this PI 
* [Zowe v2 Changes](https://github.com/zowe/zowe-install-packaging/issues/2136)
  - Prepare for support of App/Plugin stores
  - (Add some key features from list)
  - May stretch into 22PI1 and the v2 release deadline
  - Confirm any new or changed conformance criteria related to packaging
* [Review usage of z/OS System resources]()
  - Post v2 builds, look at DASD in particular

## Install and Configuration 

* [Zowe PSWI]()
  - Complete move of PSWI automated workflow to TSS/ACF systems.
  - Configuration Workflow
    * Update configuration workflow scripts
    * Update documentation
  - Target GA 1.26.0 (zowe.github.io)

## Containerization

* [Epic - Containerise Zowe](https://github.com/zowe/zowe-install-packaging/issues/793)
  - [Complete Community Automated Testing]()
  - [Provide samples for extenders]()
  - Stretch / Only if needed: [Build and release offline images](). Need user feedback on this requirement to prioritize it.
  - Goal: Create a recommendation in dev/test for a fast, easy-to-configure containerized deployment of Zowe.
    - TBD: [Helm Charts](). Need user feedback or customer studies to prioritize.
    - TBD: [docker-compose support]().  Need user feedback or customer studies to prioritize.

##### Dependency: Squad attention if we discover any issues during implementation

## Pipelines and Systems

### CI/CD 

* [Github Action Migrations](https://github.com/zowe/zowe-install-packaging/issues/1868)
  - Migrate zowe-install-packaging 
  - Migrate zlux pipelines (Web UI Squad drives, we can assist)
  - Some small jobs left on Jenkins for a future PI (performance test, dependency scan).

##### Dependency: Web UI Squad to help migrate pipelines

### z/OS Infrastructure

* [Move RACF to 2.4]()
  * Shifting builds from zzow01 to zzow04 (RACF 2.4)

* [z/OS Sysplex Setup](https://github.com/zowe/zowe-install-packaging/issues/1397)
  - Validation: Run HA tests against Sysplex
  - Comment: didn't plan capacity to assist Marist with any major issues


