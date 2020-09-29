# Zowe System Squad - 20PI4 Objectives (October 2020 to January 2021)

## Performance Test

### Enhance Test Coverage

[Epic: Zowe Performance Test - Stage 2 - Enhance Test Coverage (2020PI4)](https://github.com/zowe/zowe-install-packaging/issues/1683).

- Finalize primary and component-level test suites __(Continue items from PI3)__
  * [Create primary performance test suite](https://github.com/zowe/zowe-install-packaging/issues/630)
  * [Create dedicated performance test suite for APIML](https://github.com/zowe/zowe-install-packaging/issues/645)
  * [Create dedicated performance test suite for Explorer APIs](https://github.com/zowe/zowe-install-packaging/issues/644)
  * [Create dedicated performance test suite for Desktop](https://github.com/zowe/zowe-install-packaging/issues/643) 
- [Create dummy server for APIML testing](https://github.com/zowe/zowe-install-packaging/issues/1684)
Run Metrics Server off-zOS (https://github.com/zowe/zowe-install-packaging/issues/1686)
- [Add ability to test performance of multiple endpoints in parallel](https://github.com/zowe/zowe-install-packaging/issues/1685)
- [Validate test report with other methods](https://github.com/zowe/zowe-install-packaging/issues/1695)

### Client Performance Tool

[Performance Hill 2 - Client Performance Tool](https://github.com/zowe/zowe-install-packaging/issues/1465).

- [CPU Time Aggregation on SMF30 Records](https://github.com/zowe/zowe-install-packaging/issues/1466) __(Continue item from PI3)__

## High Availability

[Epic: High Availability](https://github.com/zowe/zowe-install-packaging/issues/1467).

### Caching API

- [Create Caching API with VSAM support](https://github.com/zowe/api-layer/issues/863)
- [Change gateway to utilize Caching API and convert them to be stateless](https://github.com/zowe/zowe-install-packaging/issues/1699)

### Zowe Launcher (Stage 1)

- [Implement and integrate Zowe Launcher](https://github.com/zowe/zowe-install-packaging/issues/1544)
- [Create supporting pipeline to build and publish Zowe Launcher](https://github.com/zowe/zowe-install-packaging/issues/1691).

### Preparing Zowe and Components for HA

- [Break down apiml package into 3 individual components](https://github.com/zowe/api-layer/issues/862)
- [Define manifest file for Zowe packages to simplify Zowe Launcher configurations](https://github.com/zowe/zowe-install-packaging/issues/1692)
- [Add new configuration entries in instance.env to support multiple instances of components](https://github.com/zowe/zowe-install-packaging/issues/1693)
- [Automatically configure ARM policy for Zowe Launcher](https://github.com/zowe/zowe-install-packaging/issues/1694)

### Starting Zowe in Sysplex

- [Verify and document z/OSMF on Sysplex configuration (shared SAF user registry)](https://github.com/zowe/zowe-install-packaging/issues/1474)
- Document how to configure [port sharing](https://github.com/zowe/api-layer/issues/857) and [D-DIVPA](https://github.com/zowe/zowe-install-packaging/issues/1687) for API Gateway
- [Verify and document requirement on shared USS file system, and shared VSAM data set](https://github.com/zowe/zowe-install-packaging/issues/1688)
- [Test and implement ARM policy](https://github.com/zowe/zowe-install-packaging/issues/1629)
- [Verify how CLI works with Sysplex](https://github.com/zowe/zowe-install-packaging/issues/1475)

### Certificate Configuration Improvement

- [Add flexibility to define certificate for internal and external usage](https://github.com/zowe/zowe-install-packaging/issues/1700)
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

### Pipeline improvements

Fix reporting of false positives in nightlys

### More dashboarding of component, build and test status?

Been talked about, but need to get the requirements from the squads/stakeholders

### Monitoring of infrastructure - internal (cloud) and external (marist)

- Discussed on a call - already set up more monitoring in IBM Cloud, can't track performance
- Looking at using Zabbix but Jack has pointed out potential performance issues to keep an eye out for

### Stand up more subsystems on Marist

- CICS/IMS/MQ/DB2 to allow Zowe CLI extension packages to be tested

### Improve coverage of tests and resiliency of Zowe pipeline

- working with other squads as this is not just CI/CD responsibility.
