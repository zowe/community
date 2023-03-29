# Zowe API ML Squad - 23PI1 Objectives (Jan 2023 to Apr 2023)

## API Developer Portal

As a Tyler, I want to customize the Catalog to adopt my company's branding guidelines, so that the Catalog fits more seamlessly into my company's web assets.

**API ML Squad Plan:**

- [I want to easily style the Catalog in different color scheme](https://github.com/zowe/api-layer/issues/2802)
- [I want to be able to search through the APIs](https://github.com/zowe/api-layer/issues/2803)
- [I want to see all APIs in sidebar with the possibility to see also their endpoints](https://github.com/zowe/api-layer/issues/2804)
- [Update Container for API Catalog Deployment](https://github.com/zowe/api-layer/issues/2766)

## Supportability of Zowe

Zowe need to provide a set of features to enhance the support experience of Zowe, reduce the number of support cases, reducing MTTR of identifying defects' root causes and configuration problems.

**Problems to solve:**

- The issue we are seeing is that with the current tooling, it's difficult for the Zowe users to understand what's wrong and resolve the problem themselves without needing external help.
- For the L1 support it's difficult to retrieve the information about the system from the user.

**API ML Squad plan:**

- [Easier debugging of swagger doc rendering](https://github.com/zowe/api-layer/issues/2315)
- [Have a message written to the MVS console when all of the Zowe components have successfully started ](https://github.com/zowe/zowe-install-packaging/issues/1248)
- [Do not log the full stracktrace for common errors](https://github.com/zowe/api-layer/issues/2614)
- [Allow Zowe Launcher writes to system log WTOR](https://github.com/zowe/launcher/issues/5)
- [Unify and differentiate logging between platforms. ](https://github.com/zowe/api-layer/issues/1181)
- [Improve configuration of the components](https://github.com/zowe/api-layer/issues/2296)
- [Easier debugging of swagger doc rendering](https://github.com/zowe/api-layer/issues/2315)
- [Incorrect log ID formatting?](https://github.com/zowe/api-layer/issues/2694)
- [The missleading warning message in Gateway](https://github.com/zowe/api-layer/issues/2824)
- [Improve the documentation for z/OSMF configuration](https://github.com/zowe/api-layer/issues/2826)
- [Report API ML state to the MF System Programmer](https://github.com/zowe/api-layer/issues/1633)
- [Add the unit tests to the Launcher](https://github.com/zowe/launcher/issues/77)
- [Clarifications for "Zowe API Mediation Layer Security" page](https://github.com/zowe/docs-site/issues/2023)
- [More details on Keystore and Truststore generations from external CA CERT is needed](https://github.com/zowe/docs-site/issues/1440)

**Bug Fixes**

- [Gateway landing page not reflecting the correct Authentication service state](https://github.com/zowe/api-layer/issues/1562)
- [Zowe log may contain ZWEAD400E error message even when everything works as expected](https://github.com/zowe/api-layer/issues/2836)
- [Enhance messages in case of authentication failure with z/OSMF](https://github.com/zowe/api-layer/issues/2748)

## Improve Fault Tolerance Testing

The goal of this feature is preventative. It is to prevent High and Critical Severity events from happening in the customers' infrastructure by proactively identifying potential risk areas and by creating tests, ideally automated to guarantee or at least understand and limit the situations where the performance of the Zowe downgrades with impact on the users of testing.

**Problems to solve:**

- Zowe API Mediation Layer needs to have at least 99.99% availability even in an adverse environment\
- Prevent downgrading of the functionality in typical risky scenarios such as one LPAR is down

**The target audience:**

- System Reliability Engineers. E.g. in our case Sysadmins.

**Missing Functionality:**

- What happens in case of incorrect and/or expired certificates?
- What happens with hundreds of concurrent users?
- How does the system fail under load?
- What happens when one of the multiple LPARs with Zowe fails?
- We need to let the user know when one of the instances in HA mode fails
- We need to reach approximately 8.76h a year downtime or up to 10 minutes downtime a week

**API ML Squad plan:**

- [Improve testing for the API Mediation Layer both on & off platform](https://github.com/zowe/api-layer/issues/1341)
- [Enhance Integration test suite](https://github.com/zowe/api-layer/issues/1313)
- [Enhance our smoke test suite](https://github.com/zowe/api-layer/issues/1332)
- [Update start script testing](https://github.com/zowe/api-layer/issues/2130)
- [Allow increasing memory](https://github.com/zowe/api-layer/issues/2559)
- [Parameter to update max amount of simultaneous connections allowed with Websockets](https://github.com/zowe/api-layer/issues/2635)

**Bug Fixes**

- [Network error from API Catalog on system with Java 11](https://github.com/zowe/api-layer/issues/2677)

## {Stretch} Observability

We want to explore the option of introducing the Open Telemetry into the Zowe API Mediation Layer. As a part of the overall
Observability approach we also intend to deprecate and then archive the metrics service

## Build Spring Cloud Gateway as a replacement for the current Gateway #2029

* [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)  
  Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The authentication functionality itself would remain for now the responsibility of the current API Gateway. The intention is for the SCG to eventually fully replace the existing gateway some point in the future as part of the V3.

API ML Squad Plan:
- [Move AT-TLS processing to the Spring Cloud Gateway #2038](https://github.com/zowe/api-layer/issues/2038)
- [Support remapping to the SAF token #2045](https://github.com/zowe/api-layer/issues/2045)

## Golden CII Badge

The goal is shared across the whole Zowe and it represents requirements from the Open Mainframe Project.

* [Get Golden CII Badge](https://github.com/zowe/community/issues/1279)

API ML Squad Plan:

- [SPIKE: Verify the C code in the common-java is properly analysed #2486](https://github.com/zowe/api-layer/issues/2486)

## Zowe / api-layer backlog management

- [Websocket connection fails when using DC UI on Chrome and Edge #2622](https://github.com/zowe/api-layer/issues/2622)

## Roadmap

### API Developer Portal

- What problem are you solving?
  - The customers want to have easy access to the available APIs and easily find what they need. This includes their own internal APIs.
- What are you doing to solve it?
  - Update API Catalog, simplify deployment and support wider amount of ways to show the information about APIs
- When do you plan to start the work?
  - 22PI4
- When do you plan to deliver the solution?
  - 23PI2

### Improve Fault tolerance testing

- What problem are you solving?
  - The problems related to fault tolerance are found in the user's systems.
- What are you doing to solve it?
  - Improve the test suite to contain more tests on how zowe behaves in different fault scenarios and then fixing the issues.
- When do you plan to start the work?
  - 23PI2
- When do you plan to deliver the solution?
  - 23PI3

### Simplify Support of Zowe

- What problem are you solving?
  - Currently it's difficult for Users to self-analyze and fix the configuration of Zowe
- What are you doing to solve it?
  - We need to improve the tooling and documentation for the users to be able to self-diagnose issues with Zowe
- When do you plan to start the work?
  - 23PI2
- When do you plan to deliver the solution?
  - 23PI3

### Observability for API ML

- What problem are you solving?
  - The customers need to integrate the mainframe APIs into their wider observability effort.
- What are you doing to solve it?
  - Implementing the integration of the API ML traffic data with popular solutions such as Splunk or ELK stack
- When do you plan to start the work?
  - 23PI2
- When do you plan to deliver the solution?
  - 23PI3

### Improve Onboarding of Internal APIs

- What problem are you solving?
  - The users need to be able to easily onboard their own custom internal infrastructure APIs
- What are you doing to solve it?
  - Update wizard in the API Catalog, Add more functionality for the administrator about onboarded services.
- When do you plan to start the work?
  - 23PI3
- When do you plan to deliver the solution?
  - 23PI3

### Enable API ML to validate Conformance

- What problem are you solving?
  - The users, extenders and Zowe can't verify the claims in the conformance program
- What are you doing to solve it?
  - Provide endpoint to verify for running and onboarded service whether it fulfils conformance criteria
- When do you plan to start the work?
  - 22PI2
- When do you plan to deliver the solution?
  - 23PI3

### Seamless upgrade to API ML

- What problem are you solving?
  - The update od Zowe and especially API ML can break the extensions of the API ML and break the configuration
- What are you doing to solve it?
  - Provide customers with alternative path that does the upgrade
- When do you plan to start the work?
  - 23PI3
- When do you plan to deliver the solution?
  - 23PI3

### True Dynamic Discovery

- What problem are you solving?
  - The current discovery service is just a registry where someone needs to register the services.
- What are you doing to solve it?
  - Explore the available services and landscape and discover all the services that can be onboarded to the API ML.
- When do you plan to start the work?
  - 24PI1
- When do you plan to deliver the solution?
  - 24PI1
