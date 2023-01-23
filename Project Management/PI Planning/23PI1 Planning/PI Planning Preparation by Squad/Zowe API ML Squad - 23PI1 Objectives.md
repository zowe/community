# Zowe API ML Squad - 23PI1 Objectives (Jan 2023 to Apr 2023)

## Identity Federation #2481

* [Identity Federation #2481](https://github.com/zowe/api-layer/issues/2481)

As a Mainframe user, I want to be able to be correctly routed to the relevant sysplex based on the type of request and also get the information about the existing and available Sysplexes. I also want to be able to synchronize users between distributed Identity providers and ESMs. As a last step I want to make sure that all the authentication related events are properly auditable. 

Plan:
- [Multi-tenancy APIML Deployments #2651](https://github.com/zowe/api-layer/issues/2651)
- [User profiles federation #2652](https://github.com/zowe/api-layer/issues/2652)
- [Register API service to multiple clusters #2425](https://github.com/zowe/api-layer/issues/2425)
- [SPIKE: Central API ML clustering #2666](https://github.com/zowe/api-layer/issues/2666)
- [apimlAuthenticationToken is overwritten when user works on multiple zowe instances #2636](https://github.com/zowe/api-layer/issues/2636)
- [As a System Programmer, I want to be able to sync distributed users from file to the ESM for TSS #2761](https://github.com/zowe/api-layer/issues/2761)
- [As a System Programmer, I want to be able to sync distributed users from file to the ESM for ACF2 #2760](https://github.com/zowe/api-layer/issues/2760)
- [Publish the Zowe CLI Plugin #2762](https://github.com/zowe/api-layer/issues/2762)

## As a System Administrator, I need to know about every authentication attempt #2533

If the user is being authenticated against SAF or zOSMF such an attempt is being recorded as the SMF record. This serves for auditing purposes. There are situations when API ML is validating user authentication by API ML issued JWT. This information is currently not recorded in SMF.

As a system administrator, I would like to know about every authentication attempt and I would like to see it in a single place. API ML needs to create SMF record for each authentication with API ML JWT or PAT with details such as timestamp, mainframe identity, and form of the provided authentication(JWT, PAT,...).

- [Issue the SMF record when invalid token is provided, turned on by default #2765](https://github.com/zowe/api-layer/issues/2765)
- [Issue the SMF record when valid token is provided, turned off by default #2764](https://github.com/zowe/api-layer/issues/2764)
- [Issue the SMF record when Zowe token is created while mapping certificates #2763](https://github.com/zowe/api-layer/issues/2763)

## Build Spring Cloud Gateway as a replacement for the current Gateway #2029

* [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)  
Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The authentication functionality itself would remain for now the responsibility of the current API Gateway. The intention is for the SCG to eventually fully replace the existing gateway some point in the future as part of the V3.  

API ML Squad Plan:  
- [Move AT-TLS processing to the Spring Cloud Gateway #2038](https://github.com/zowe/api-layer/issues/2038)  
- [Support remapping of the x509 authentication #2044](https://github.com/zowe/api-layer/issues/2044)
- [Support remapping to the SAF token #2045](https://github.com/zowe/api-layer/issues/2045)

## Golden CII Badge

The goal is shared across the whole Zowe and it represents requirements from the Open Mainframe Project. 

* [Get Golden CII Badge](https://github.com/zowe/community/issues/1279)

API ML Squad Plan:

- [Increase coverage of statements to 90% #2487](https://github.com/zowe/api-layer/issues/2487)  
- [SPIKE: Verify the C code in the common-java is properly analysed #2486](https://github.com/zowe/api-layer/issues/2486)  
- [Increasing number of WARN logs #2429](https://github.com/zowe/api-layer/issues/2429)  

## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/22PI1)

## Roadmap

### Identity Federation 

- What problem are you solving?
  - The customers want to integrate their already existing distributed SSO with the Mainframe SSO. 
- What are you doing to solve it? 
  - Providing support for the OIDC protocol. 
- When do you plan to start the work? 
  - 22PI3
- When do you plan to deliver the solution? 
  - 23PI1

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
