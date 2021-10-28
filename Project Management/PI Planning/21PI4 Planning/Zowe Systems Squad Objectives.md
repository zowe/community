# Zowe Systems Squad - 21PI4 Objectives (October 2021 to January 2022)

## Zowe 2.x Preparation

* [Start building 'v2' branch](https://github.com/zowe/zowe-install-packaging/issues/2262)
  - Start building 'v2' Zowe and designing the release process for both v1 + v2 
  - v1 and v2 release cycle proposals this PI 
* [Zowe v2 Changes](https://github.com/zowe/zowe-install-packaging/issues/2435)
  - Prepare for support of App/Plugin stores
  - (Add some key features from list)
  - May stretch into 22PI1 and the v2 release deadline
  - Confirm any new or changed conformance criteria related to packaging
* [Review usage of z/OS System resources](https://github.com/zowe/zowe-install-packaging/issues/2434)
  - Post v2 builds, look at DASD in particular

## Install and Configuration 

* [Zowe PSWI]()
  - Complete move of PSWI automated workflow to TSS/ACF systems.
  - [Configuration Workflow](https://github.com/zowe/zowe-install-packaging/issues/2136)
    * Update configuration workflow scripts
    * Update documentation
  - Target GA 1.26.0 (zowe.github.io)

## Containerization

* [Epic - Containerise Zowe](https://github.com/zowe/zowe-install-packaging/issues/793)
  - [Complete Community Automated Testing](https://github.com/zowe/zowe-install-packaging/issues/2251)
  - [Provide samples for extenders](https://github.com/zowe/zowe-install-packaging/issues/2426)
  - Stretch / Only if needed: [Build and release offline images](https://github.com/zowe/zowe-install-packaging/issues/2427). Need user feedback on this requirement to prioritize it.
  - Goal: Create a recommendation in dev/test for a fast, easy-to-configure containerized deployment of Zowe.
    - TBD: [Helm Charts](https://github.com/zowe/zowe-install-packaging/issues/2247). Need user feedback or customer studies to prioritize.
    - TBD: [docker-compose support](https://github.com/zowe/zowe-install-packaging/issues/2249).  Need user feedback or customer studies to prioritize.

##### Dependency: Squad attention if we discover any issues during implementation

## CI/CD 

* [Epic - Github Action Migrations](https://github.com/zowe/zowe-install-packaging/issues/2267)
  - [Migrate zowe-install-packaging](https://github.com/zowe/zowe-install-packaging/issues/2268)
  - [Migrate zlux pipelines](https://github.com/zowe/zlux/issues/746) (Web UI Squad drives, we can assist)
  - [Some small jobs left on Jenkins for a future PI (performance test, dependency scan)](https://github.com/zowe/zowe-install-packaging/issues/2270)

##### Dependency: Web UI Squad to help migrate pipelines

## z/OS Infrastructure

* [Epic - Move RACF to 2.4](https://github.com/zowe/zowe-install-packaging/issues/1397)
  * Shifting builds from zzow01 to zzow04 (RACF 2.4)
  * [configure DB2 for testing on v2.4 image](https://github.com/zowe/zowe-install-packaging/issues/2432)

* [z/OS Sysplex Setup](https://github.com/zowe/zowe-install-packaging/issues/1479)
  - Validation: Run HA tests against Sysplex
  - Comment: didn't plan capacity to assist Marist with any major issues


