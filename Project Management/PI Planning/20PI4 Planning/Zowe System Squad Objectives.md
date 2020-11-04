# Zowe System Squad - 20PI4 Objectives (October 2020 to January 2021)

## Performance Test (Continued)

* Continue creating a Performance Test Suite for Zowe. Complete the test framework implementation, and start expanding tests into components as time allows.
    * Stretch: A "Component" test suite; work will continue into next PI.
    * Dependency: Information from other squads

## High Availability Implementation, Part 1

* Begin the implementation of high availability for Zowe, continuing to act as centralized area for cross-squad implementation and any remaining design research. This PI, implementation will include:
    * Caching API layer backed by VSAM 
    * A Zowe Launcher to handle console commands
    * A new packaging and manifest format for components
    * ARM support
    * Basic Sysplex configuration testing, including port sharing and DVIPA
    * Certificate configuration improvements

- Dependencies:
  * Known dependencies with other teams planned. 

- Risks:
  * Some runway included in this PI
      * Mitigation: Research is front-loaded within the PI, and runway is not completely unknown - rounding out details.

The exhaustive list of stories is below.

## Automation and Infrastructure Improvements

* Infrastructure improvements
    * Work with the Marist team to bring up additional subsystems on open infrastructure
    * Work on IBM Infrastructure and Marist infrastructure to install additional performance monitoring
        * Future: insights, policies, alerts built
* Automation improvements
    * Research current state of "Zowe integration" tests - take stock of what's missing, discuss and create plan to address it
        * Work may be pushed into next PI
    * Work with TSC to setup contribution criteria to "zowe-install-packaging", in part based on results of the research
    * Work with HA, create new automation to support Zowe plugin installation based on the new component packaging and manifest format. 
    

---- 

## Performance Test

### Enhance Test Coverage

[Epic: Zowe Performance Test - Stage 2 - Enhance Test Coverage (2020PI4)](https://github.com/zowe/zowe-install-packaging/issues/1683).

- Finalize primary and component-level test suites _(Continue item from PI3)_
  * [Create primary performance test suite](https://github.com/zowe/zowe-install-packaging/issues/630)
  * [Create dedicated performance test suite for APIML](https://github.com/zowe/zowe-install-packaging/issues/645)
  * [Create dedicated performance test suite for Explorer APIs](https://github.com/zowe/zowe-install-packaging/issues/644)
  * [Create dedicated performance test suite for Desktop](https://github.com/zowe/zowe-install-packaging/issues/643) 
- [Create dummy server for APIML testing](https://github.com/zowe/zowe-install-packaging/issues/1684)
Run Metrics Server off-zOS (https://github.com/zowe/zowe-install-packaging/issues/1686)
- [Add ability to test performance of multiple endpoints in parallel](https://github.com/zowe/zowe-install-packaging/issues/1685)
- [Validate test report with other methods](https://github.com/zowe/zowe-install-packaging/issues/1695)

## High Availability

[Epic: High Availability](https://github.com/zowe/zowe-install-packaging/issues/1467). Work items we think are out of scope for this PI can be found at https://ibm.ent.box.com/notes/712188174702.

### Caching API

- [Create Caching API with VSAM support](https://github.com/zowe/api-layer/issues/863)
- [Change desktop to utilize Caching API and make it stateless](https://github.com/zowe/zowe-install-packaging/issues/1699)

### Zowe Launcher (Stage 1)

- [Implement and integrate Zowe Launcher](https://github.com/zowe/zowe-install-packaging/issues/1544)
- [Create supporting pipeline to build and publish Zowe Launcher](https://github.com/zowe/zowe-install-packaging/issues/1691).

### Preparing Zowe and Components for HA

- [Break down apiml package into 3 individual components](https://github.com/zowe/api-layer/issues/862)
- [Define manifest file for Zowe packages to simplify Zowe Launcher configurations](https://github.com/zowe/zowe-install-packaging/issues/1692)
- [Add new configuration entries in instance.env to support multiple instances of components](https://github.com/zowe/zowe-install-packaging/issues/1693)
- [Automatically configure ARM policy for Zowe Launcher](https://github.com/zowe/zowe-install-packaging/issues/1694)
- [Improve lifecycle start.sh to properly trap termination signals and kill child processes](https://github.com/zowe/zowe-install-packaging/issues/1702)
- [Change ZSS to be registered under API Discovery Service](https://github.com/zowe/zlux/issues/467)
  * Desktop will communicate with ZSS through Gateway, not directly, to support distributed deployment.

### Starting Zowe in Sysplex

- [Verify and document z/OSMF on Sysplex configuration (shared SAF user registry)](https://github.com/zowe/zowe-install-packaging/issues/1474)
- Document how to configure [port sharing](https://github.com/zowe/api-layer/issues/857) and [D-DIVPA](https://github.com/zowe/zowe-install-packaging/issues/1687) for API Gateway
- [Verify and document requirement on shared USS file system, and shared VSAM data set](https://github.com/zowe/zowe-install-packaging/issues/1688)
- [Test and implement ARM policy](https://github.com/zowe/zowe-install-packaging/issues/1629)
- [Validate Apiml & zOSMF HA/sysplex](https://github.com/zowe/api-layer/issues/858)
- [Verify how CLI works with Sysplex](https://github.com/zowe/zowe-install-packaging/issues/1475)

### Certificate Configuration Improvement

- [Add flexibility to define certificate for internal and external usage](https://github.com/zowe/api-layer/issues/859)
- [Allow to define multiple domains / IPs as Subject Alternative Name (SAN) when storing certificate(s) in Keyring](https://github.com/zowe/zowe-install-packaging/issues/1653)

## CI/CD

### Extension Installation

[Create plugin installation test based on Ansible playbook](https://github.com/zowe/zowe-install-packaging/issues/1199):

- Create new Ansible playbook to install plugin.
- Create new installation test case which will install and verify plugin.
- The test case should call the Ansible playbook to perform plugin installation and validate with the method defined by the plugin.

### Automated testing catch-up

- Decide on and complete what testing we require for keyrings and uss certificates (eg better TSS and ACF2 support for keyrings, more certificate scenarios like importing external certificates)
- zlux and apiml component testing into open source (this should be dependent on those squads)
- Support ACF2 and TSS with the Zowe security set up
- Workflow testing?


### More dashboarding of component, build and test status?

- Been talked about in the past, but need to get the requirements from the squads/stakeholders

### Monitoring of infrastructure - internal (cloud) and external (marist)

- Discussed on a call - already set up more monitoring in IBM Cloud, can't track performance
- Looking at using Zabbix but Jack has pointed out potential performance issues to keep an eye out for

### Stand up more subsystems on Marist

- CICS/IMS/MQ/DB2 to allow Zowe CLI extension packages to be tested

### Improve coverage of tests and resiliency of Zowe pipeline

- working with other squads as this is not just CI/CD responsibility.
