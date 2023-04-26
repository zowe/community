# Zowe API ML Squad - 23PI2 Objectives (May 2023 to July 2023)

## {CONTINUED} Identity Federation #2481

As a Mainframe user, I want to be able to be correctly routed to the relevant sysplex based on the type of request and also get the information about the existing and available Sysplexes. I also want to be able to synchronize users between distributed Identity providers and ESMs.

Plan:
- [Identity Federation #2481](https://github.com/zowe/api-layer/issues/2481)
- [Multi-tenancy APIML Deployments #2651](https://github.com/zowe/api-layer/issues/2651)


## {CONTINUED} SMF Records creation #2533

If the user is being authenticated against SAF or zOSMF such an attempt is being recorded as the SMF record. This serves for auditing purposes. There are situations when API ML is validating user authentication by API ML issued JWT. This information is currently not recorded in SMF.

As a system administrator, I would like to know about every authentication attempt and I would like to see it in a single place. API ML needs to create SMF record for each authentication with API ML JWT or PAT with details such as timestamp, mainframe identity, and form of the provided authentication(JWT, PAT,...).

- [Issue the SMF record when invalid token is provided, turned on by default #2765](https://github.com/zowe/api-layer/issues/2765)
- [Issue the SMF record when valid token is provided, turned off by default #2764](https://github.com/zowe/api-layer/issues/2764)
- [Issue the SMF record when Zowe token is created while mapping certificates #2763](https://github.com/zowe/api-layer/issues/2763)

## z/OS V3R1 (3.1) Toleration Support for the API ML on TSS and ACF2 #2881

As a system administrator I want to be able to run the API ML on z/OS 3.1 with the confidence that it will continue to function as expected.    
- Regression Test the API ML on the forthcoming z/OS V3R1 operating system to verify it continues to function properly.  

**API ML Squad Plan:**  
- [z/OS V3R1 (3.1) Toleration Support for the API ML on TSS and ACF2 #2881](https://github.com/zowe/api-layer/issues/2881)

## API Catalog UI enhancements and templating #2586

As a system administrator I want to be able to run the API Catalog properly off-platform in a distributed environment such as cloud platform and I want to be able to use our company branding on the portal so it's usage feels natural for the engineers within the company.    
- API Catalog supports templating so that it can be branded and themed according to user preferences  

As a system programmer or application developer, I want to have one easy place to see all the APIs available within the company with great examples of how to use them. 
- API Catalog contains UI enhancements

**API ML Squad Plan:**

- [API Developer Portal #2586](https://github.com/zowe/api-layer/issues/2586)

## Supportability of Zowe #1796

Zowe will enhance the support experience of Zowe with the aim to reduce the number of support cases opened. Where cases are opened this objective will reduce time taken to identify defects' root causes and more quickly address configuration problems.

**Problems to solve:**

- With current tooling, it's difficult for Zowe users to understand what's wrong and resolve the problem themselves without needing external help
- For L1 support it's difficult to retrieve the information about the system from the user

**API ML Squad plan:**  

- [Report API ML state to the MF System Programmer #1633](https://github.com/zowe/api-layer/issues/1633)
- [{Spike} Explore the zwe diagnostics tool #2882](https://github.com/zowe/api-layer/issues/2882)

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

## {Stretch} Better Observability of onboarded services via Open Telemetry

We want to explore the option of introducing the Open Telemetry into the Zowe API Mediation Layer. As a part of the overall
Observability approach we are also considering to deprecate and then archive the metrics service.

## Zowe / api-layer backlog management

- [Zowe log may contain ZWEAD400E error message even when everything works as expected #2836](https://github.com/zowe/api-layer/issues/2836)
- [Zowe installation with AT-TLS mode enabled does not properly setup the native library #2792](https://github.com/zowe/api-layer/issues/2792)
- [With AT-TLS mode enabled, api-catalog-services and discovery-service fail startup #2795](https://github.com/zowe/api-layer/issues/2795)
- [All APIML services freeze during startup when unable to access a private key from a key ring #2822](https://github.com/zowe/api-layer/issues/2822)
- [The certificate management documentation depends on V1 tooling unavailable in V2 #2823](https://github.com/zowe/api-layer/issues/2823)
- [Confusing documentation for security configuration of OIDC and x509 features #2873](https://github.com/zowe/api-layer/issues/2873)
- [ZSS may not accept JWT #2878](https://github.com/zowe/api-layer/issues/2878)
- [Network error from API Catalog on system with Java 11 #2677](https://github.com/zowe/api-layer/issues/2677)

## Roadmap

### API Developer Portal

- What problem are you solving?
  - Adopters want to have easy access to the available APIs and easily find what they need. This includes their own internal APIs.
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
  - 23PI3
- When do you plan to deliver the solution?
  - 23PI4

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
  - 23PI4
- When do you plan to deliver the solution?
  - 23PI4

### Enable API ML to validate Conformance

- What problem are you solving?
  - The users, extenders and Zowe can't verify the claims in the conformance program
- What are you doing to solve it?
  - Provide endpoint to verify for running and onboarded service whether it fulfils conformance criteria
- When do you plan to start the work?
  - 24PI1
- When do you plan to deliver the solution?
  - 24PI1

### Seamless upgrade to API ML

- What problem are you solving?
  - The update od Zowe and especially API ML can break the extensions of the API ML and break the configuration
- What are you doing to solve it?
  - Provide customers with alternative path that does the upgrade
- When do you plan to start the work?
  - 24PI1
- When do you plan to deliver the solution?
  - 24PI1

### True Dynamic Discovery

- What problem are you solving?
  - The current discovery service is just a registry where someone needs to register the services.
- What are you doing to solve it?
  - Explore the available services and landscape and discover all the services that can be onboarded to the API ML.
- When do you plan to start the work?
  - 24PI1
- When do you plan to deliver the solution?
  - 24PI1
