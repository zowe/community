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

## Improve logging for the API ML #1796

Zowe will enhance the support experience of Zowe with the aim to reduce the number of support cases opened. Where cases are opened this objective will reduce time taken to identify defects' root causes and more quickly address configuration problems.  

In the default setup, if there is no issue, we should log only that the services started, ideally including a point when the whole Zowe is started and works properly. 
In the default setup, if there are issues that limit the functionality but don't break things, we need to log them as warnings in a way that's actionable by the users. In the default setup, if there are issues preventing Zowe from working, these will be logged as errors with easy to find error codes and actionable text.  
Logs created for debugging should go to files instead of the spool so that the diagnostics pax contains them.  
Debugging logs should contain, by default, the details of the TLS communication. 

**Problems to solve:**

- With current tooling, it's difficult for Zowe users to understand what's wrong and resolve the problem themselves without needing external help
- For L1 support it's difficult to retrieve the information about the system from the user

**API ML Squad plan:**  

- [Easier debugging of swagger doc rendering](https://github.com/zowe/api-layer/issues/2315)  
- [Do not log the full stracktrace for common errors #2614](https://github.com/zowe/api-layer/issues/2614)  
- [Log meaningful messages when debugging API ML #2892](https://github.com/zowe/api-layer/issues/2892)  


## {Stretch} Better Observability of onboarded services via Open Telemetry

We want to explore the option of introducing the Open Telemetry into the Zowe API Mediation Layer. As a part of the overall
Observability approach we are also considering to deprecate and then archive the metrics service.  

[(SPIKE) Support for Open Telemetry #2865](https://github.com/zowe/api-layer/issues/2865)

## Zowe / api-layer backlog management

- [The certificate management documentation depends on V1 tooling unavailable in V2 #2823](https://github.com/zowe/api-layer/issues/2823)
- [Confusing documentation for security configuration of OIDC and x509 features #2873](https://github.com/zowe/api-layer/issues/2873)
- [ZSS may not accept JWT #2878](https://github.com/zowe/api-layer/issues/2878)
- [Network error from API Catalog on system with Java 11 #2677](https://github.com/zowe/api-layer/issues/2677)

## Roadmap

### API Catalog UI enhancements and templating

- What problem are you solving?
  - Adopters want to have easy access to the available APIs and easily find what they need. This includes their own internal APIs.
- What are you doing to solve it?
  - Update API Catalog, simplify deployment and support wider amount of ways to show the information about APIs
- When do you plan to start the work?
  - 22PI4
- When do you plan to deliver the solution?
  - 23PI3

### Improve Fault tolerance testing

- What problem are you solving?
  - The problems related to fault tolerance are found in the user's systems.
- What are you doing to solve it?
  - Improve the test suite to contain more tests on how zowe behaves in different fault scenarios and then fixing the issues.
- When do you plan to start the work?
  - 23PI3
- When do you plan to deliver the solution?
  - 24PI1

### Improve Logging for the API ML

- What problem are you solving?
  - Currently it's difficult for Users to self-analyze and fix the configuration of Zowe
- What are you doing to solve it?
  - Provide good quality logs with meaningful and actionable information
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
  - 24PI1

### Improve Onboarding of Internal APIs

- What problem are you solving?
  - The users need to be able to easily onboard their own custom internal infrastructure APIs
- What are you doing to solve it?
  - Update wizard in the API Catalog, Add more functionality for the administrator about onboarded services.
- When do you plan to start the work?
  - 24PI1
- When do you plan to deliver the solution?
  - 24PI2

### Multi-Tenancy API ML Deployments

- What problem are you solving?
  - Authenticating Zowe users across Sysplex and security domains 
- What are you doing to solve it?
  - Route users to the relevant sysplex based on the type of request and retrieve data on existing and available Sysplexes
- When do you plan to start the work?
  - 23PI3
- When do you plan to deliver the solution?
  - 23PI3

### SMF Records creation

- What problem are you solving?
  - Missing SMF records for some types of authentication events
- What are you doing to solve it?
  - Create SMF records for each authentication with API ML JWT or PAT with details such as timestamp, mainframe identity, and form of the provided authentication(JWT, PAT,...)
- When do you plan to start the work?
  - 23PI4
- When do you plan to deliver the solution?
  - 23PI4

### Build Spring Cloud Gateway proxy as a replacement for the current Gateway

- What problem are you solving?
  - Current Netflix ZUUL gateway is no longer actively developed
- What are you doing to solve it?
  - Deliver a new gateway built upon the Spring Cloud Gateway
- When do you plan to start the work?
  - 23PI1
- When do you plan to deliver the solution?
  - 24PI1
