# Zowe API ML Squad - 23PI3 Objectives  
(August 2023 to October 2023)


## API ML in multi-domain / multi-tenant deployments #2651

As a Mainframe user, I want to be able to be correctly routed to the relevant sysplex based on the type of request and also get the information about the existing and available Sysplexes. I also want to be able to synchronize users between distributed Identity providers and ESMs.

API ML Squad Plan:  
[Identity Federation #2481](https://github.com/zowe/api-layer/issues/2481)  
[Multi-tenancy APIML Deployments #2651](https://github.com/zowe/api-layer/issues/2651) 
- [Register API service to multiple different API ML clusters](https://github.com/zowe/api-layer/issues/2425)  
- [API ML validates distributed access tokens](https://github.com/zowe/api-layer/issues/2658)
- [Central API ML registry](https://github.com/zowe/api-layer/issues/2883)
- [Central API ML GW routing](https://github.com/zowe/api-layer/issues/2884)
- [Authentication with Certificate from header](https://github.com/zowe/api-layer/issues/2885)
- [Central GW services endpoint](https://github.com/zowe/api-layer/issues/2886) 


## V3 Build Spring Cloud Gateway as a replacement for the current Gateway #2029

Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The intention is for the SCG to fully replace the existing gateway with the release of V3.  

API ML Squad Plan:  
[Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)
- [Move AT-TLS processing to the Spring Cloud Gateway #2038](https://github.com/zowe/api-layer/issues/2038)  
- [Replace deprecated RestTemplate #2410](https://github.com/zowe/api-layer/issues/2410)
- [Support remapping to the SAF token #2045](https://github.com/zowe/api-layer/issues/2045)
- [Migrate the Apache HttpClient from version 4.5. to recent 5.1. #2394](https://github.com/zowe/api-layer/issues/2394) 


## Improve logging for the API ML #1796

Zowe will enhance the support experience of Zowe with the aim to reduce the number of support cases opened. Where cases are opened this objective will reduce time taken to identify defects' root causes and more quickly address configuration problems.  

- if there is no issue, we should log only that the services started, ideally including a point when the whole Zowe is started and works properly. 
- if there are issues that limit the functionality but don't break things, we need to log them as warnings in a way that's actionable by the users.  
- if there are issues preventing Zowe from working, these will be logged as errors with easy to find error codes and actionable text.  
- Logs created for debugging should go to files instead of the spool so that the diagnostics pax contains them.  
- Debugging logs should contain, by default, the details of the TLS communication. 

**API ML Squad plan:**  

[Unify and differentiate logging between platforms. #1181](https://github.com/zowe/api-layer/issues/1181) 
- [Validation of certificate between DS#2913](https://github.com/zowe/api-layer/issues/2913)  
- [Fix log message about change password](https://github.com/zowe/api-layer/issues/2912)  
- [Log meaningful messages when debugging API ML #2892](https://github.com/zowe/api-layer/issues/2892)
- [Improve logging about Keyring / keystore #2971](https://github.com/zowe/api-layer/issues/2971)
- [Improve logging about eureka communication #2973](https://github.com/zowe/api-layer/issues/2973)
- [All APIML services freeze during startup when unable to access a private key from a key ring](https://github.com/zowe/api-layer/issues/2822)       
- [The missleading warning message in Gateway](https://github.com/zowe/api-layer/issues/2824)  


## V3 Support Java 17

API ML depends heavily on the spring framework. Spring 6 drops support for java versions prior to 17. API ML should reflect this and be able to compile and run on java 17. The objective for the API ML is to use java 17 in the toolchain and produce artifacts that run on this runtime.

[Support java 17 #2891](https://github.com/zowe/api-layer/issues/2891)


## V3 Support SpringBoot 3.1

Zowe V3 must be on a Spring Boot baseline of 3.1 to be in support. The objective is to upgrade SpringBoot to at least 3.1.x version for Zowe V3.  

- [Upgrade Spring Boot to 3.1 (Zowe V3) #2959](https://github.com/zowe/api-layer/issues/2959)
- [Migrate to new Spring Boot configuration format#2380](https://github.com/zowe/api-layer/issues/2380)
- [Improve Spring configuration #2942](https://github.com/zowe/api-layer/issues/2942)


## Zowe / api-layer backlog management
- [Incorrect log ID formatting? #2694](https://github.com/zowe/api-layer/issues/2694)
- [Serve different certificates on single port #2964](https://github.com/zowe/api-layer/issues/2964)
- [Invalid Zosmf static definition in discovery service #2889](https://github.com/zowe/api-layer/issues/2889)
- [Zowe v2 conformance #2794](https://github.com/zowe/api-layer/issues/2794)


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
