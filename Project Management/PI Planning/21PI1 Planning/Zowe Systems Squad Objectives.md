# Zowe System Squad - 21PI1 Objectives

## 1. High Availability

**Dependencies**

We continuously requires support from other squads on HA topic:

- Verify and improve Caching Service when it requires
- Migrate Desktop to use Caching Service
- Implement Zowe Launcher
- Documentation

### a). Enable HA with Zowe deployed in Sysplex

- [Provide YAML format configuration in addition to existing environment variables defined in instance.env](https://github.com/zowe/zowe-install-packaging/issues/1793)
- [Separate internal/external communication and provide option to use different certificates](https://github.com/zowe/zowe-install-packaging/issues/1762)
- [Integrate Zowe Launcher into Zowe start script](https://github.com/zowe/zowe-install-packaging/issues/1716)
- [Change Zowe configuration flow to automatically configure ARM policy for Zowe Launcher](https://github.com/zowe/zowe-install-packaging/issues/1694)

### b). Verify Zowe High Availability Solution

- [Create basic test cases](https://github.com/zowe/zowe-install-packaging/issues/1476) -- stretch goal, rely on open infrastructure

**Risks**

- Lack of Open Infrastructure of Sysplex, we may not be able to automate testing HA deployment on Sysplex. Mitigation is fallback to manual in-house testing.

### c). Document how to deploy Zowe with HA enablement

- [Verify and document z/OSMF HA](https://github.com/zowe/zowe-install-packaging/issues/1863)
- [Document how to configure Sysplex to work with Zowe HA](https://github.com/zowe/zowe-install-packaging/issues/1864)

## 2. Performance Test

**Dependencies**

We continuously requires support from other squads on Performance Test topic

- Provide suggestions on component level test suites
- Setup performance test pipelines internally for test suites we cannot run in open infrastructure
- Troubleshoot performance regressions identified

### a). Finish implementation and setup component level test suites, provide continuous performance test report.

- [Create dedicated performance test suite for APIML](https://github.com/zowe/zowe-install-packaging/issues/645)
- [Create dedicated performance test suite for Desktop](https://github.com/zowe/zowe-install-packaging/issues/643)
- [Create performance test suite to compare API performance with different methods](https://github.com/zowe/zowe-install-packaging/issues/633)

### b). Improve performance test tool set

- [Investigate methodology to measure performance of application/zowe startup time](https://github.com/zowe/zowe-install-packaging/issues/1587) -- stretch goal
- [Provide options for test cases to store more context and save in test report](https://github.com/zowe/zowe-dependency-scan-pipeline/issues/36)
- [Provide option to define how many requests sent to the server instead of test duration](https://github.com/zowe/zowe-dependency-scan-pipeline/issues/34)
- [Create Zowe Performance Plugin or client side GUI tool](https://github.com/zowe/zowe-install-packaging/issues/636) -- stretch goal

## 3. CI/CD

### a). Investigate Jenkins alternatives

- [Investigate various CI/CD tools vs current Jenkins](https://github.com/zowe/zowe-install-packaging/issues/1868)
