# Zowe Systems Squad - 21PI2 Objectives (May 2021 to July 2021)

Final Plan Notes:
- We will work the "Install without z/OSMF" story this PI
- We will work on z/OS 2.4 testing, if the system is available
- We will _not_ work on Sysplex Automated testing this PI.

## High Availability 

### Enable Zowe HA in Sysplex Configuration

* [Continued - HA Documentation](https://github.com/zowe/docs-site/issues/1086)

### Test Cases for Zowe HA Solution

* [Continued - Manual test cases](https://github.com/zowe/zowe-install-packaging/issues/1476)

##### Dependency: Squads fixing bugs we uncover with tests

## CI/CD and Systems

### Pipeline and Distributed Infra
  
* [Continued - IP Explorer Pipeline](https://github.com/zowe/zowe-install-packaging/issues/1928)
    - Adding test stage
* [Continued - Parallel Testing](https://github.com/zowe/zowe-install-packaging/issues/1751)
    - Depends on: Github Actions Investigation
* [Github Action Research](https://github.com/zowe/zowe-install-packaging/issues/1868)
* [Integrate License Automation for Release](https://github.com/zowe/zowe-install-packaging/issues/1053)

### z/OS Infrastructure

* Improve health check on Marist servers: JES spool usage, volume usage, etc
    - [Monitoring](https://github.com/zowe/zowe-install-packaging/issues/1486)
    - [Spool](https://github.com/zowe/zowe-install-packaging/issues/2042)
* [Enable v2.4 Tests - RACF](https://github.com/zowe/zowe-install-packaging/issues/1397)


## Install and Configuration 

* [Zowe PSI Support](https://github.com/zowe/zowe-install-packaging/issues/1174)
* [Certificate setup improvement](https://github.com/zowe/zowe-install-packaging/issues/2088)
    - [Improvements on ZWEKRING](https://github.com/zowe/zowe-install-packaging/issues/2089)
    - [Issues related to zowe-setup-certificates detectExternalRootCA step](https://github.com/zowe/zowe-install-packaging/issues/2120)
* [Allow installation without zOSMF](https://github.com/zowe/zowe-install-packaging/issues/1976)
* [Epic - New installation test with Ansible playbook](https://github.com/zowe/zowe-install-packaging/issues/1196)
    - [Create installation test cases to test verification and installation of sample applications](https://github.com/zowe/zowe-install-packaging/issues/2067)
    - [Modify Zowe docs to include new ansible extensions installation scripts](https://github.com/zowe/zowe-install-packaging/issues/2068)


## Zowe on Kubernetes 

POC, Research, Design Phase

* [Build Kubernetes Infrastructure for the Community](https://github.com/zowe/zowe-install-packaging/issues/2132)
* [Research Zowe on Kubernetes](https://github.com/zowe/zowe-install-packaging/issues/2133)
    - POC, Container Definitions, Kubernetes Definitions
    - Requires input from squads as we design / progress

## Not in plan

* [Setup Virtual Sysplex on Marist and enable automated testing](https://github.com/zowe/zowe-install-packaging/issues/1479)
* [Automated test cases](https://github.com/zowe/zowe-install-packaging/issues/1476)

#### Risks

* Marist capacity. Impacts: Open HA automation. Mitigation: manual HA tests can be run on ISV-internal systems.