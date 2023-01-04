# Zowe API ML Squad - 22PI4 Objectives (Oct 2022 to Jan 2023)

## Identity Federation #2481

* [Identity Federation #2481](https://github.com/zowe/api-layer/issues/2481)

As a Mainframe user, I want to be able to be correctly routed to the relevant sysplex based on the type of request and also get the information about the existing and available Sysplexes. 

## API Portal

* [API Portal #2586](https://github.com/zowe/api-layer/issues/2586)

As a system programmer or application developer, I want to have one easy place to see all the APIs available within the company with great examples of how to use them. I want to see even the APIs I don't have installed in the systems yet.

As a system administrator I want to be able to run the API Catalog properly off-platform in a distributed environment such as cloud platform and I want to be able to use our company branding on the portal so it's usage feels natural for the engineers within the company.

As a system programmer or application developer I want to be able to explore the APIs and get better idea on what I may ask for even for the APIs that aren't installed yet.

## Build Spring Cloud Gateway as a replacement for the current Gateway #2029

* [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)  
Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The authentication functionality itself would remain for now the responsibility of the current API Gateway. The intention is for the SCG to eventually fully replace the existing gateway some point in the future (not in this PI!).  

In this PI we intend to create new service based on SCG and deploy it alongside the existing Gateway. 

API ML Squad Plan:  
- [Move AT-TLS processing to the Spring Cloud Gateway #2038](https://github.com/zowe/api-layer/issues/2038)  
- [Circuit Breaker in the SCG #2040](https://github.com/zowe/api-layer/issues/2040)
- [Retry request on another instance of service if service has multiple instances. #2041](https://github.com/zowe/api-layer/issues/2041)  
- [Handle CORS on behalf of the southbound services #2042](https://github.com/zowe/api-layer/issues/2042)
- [Support remapping of the x509 authentication #2044](https://github.com/zowe/api-layer/issues/2044)
- [Support remapping to the SAF token #2045](https://github.com/zowe/api-layer/issues/2045)
- [Support remapping to passtickets #2046](https://github.com/zowe/api-layer/issues/2046)
- [Support Bypassing the authentication #2047](https://github.com/zowe/api-layer/issues/2047)  

## Golden CII Badge

The goal is shared across the whole Zowe and it represents requirements from the Open Mainframe Project. 

* [Get Golden CII Badge](https://github.com/zowe/community/issues/1279)

API ML Squad Plan:

- [Increase coverage of branches to 80% #2488](https://github.com/zowe/api-layer/issues/2488)  
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

### API Portal 

- What problem are you solving?
  - The customers want to have easy access to the available APIs and easily find what they need. This includes their own internal APIs. 
- What are you doing to solve it? 
  - Update API Catalog, simplify deployment and support wider amount of ways to show the information about APIs
- When do you plan to start the work? 
  - 22PI4
- When do you plan to deliver the solution? 
  - 23PI2

### Enable API ML to validate Conformance

- What problem are you solving?
  - The users, extenders and Zowe can't verify the claims in the conformance program
- What are you doing to solve it? 
  - Provide endpoint to verify for running and onboarded service whether it fulfils conformance criteria
- When do you plan to start the work? 
  - 22PI2
- When do you plan to deliver the solution? 
  - 23PI2

### Seamless upgrade to API ML

- What problem are you solving?
  - The update od Zowe and especially API ML can break the extensions of the API ML and break the configuration
- What are you doing to solve it? 
  - Provide customers with alternative path that does the upgrade
- When do you plan to start the work? 
  - 23PI1
- When do you plan to deliver the solution? 
  - 23PI1

### True Dynamic Discovery

- What problem are you solving?
  - The current discovery service is just a registry where someone needs to register the services. 
- What are you doing to solve it? 
  - Explore the available services and landscape and discover all the services that can be onboarded to the API ML. 
- When do you plan to start the work? 
  - 23PI2
- When do you plan to deliver the solution? 
  - 23PI3

### Report API ML State to MF System Programmer

- What problem are you solving?
  - The System Programmers can't automate the reaction to API ML going down
- What are you doing to solve it? 
  - Publish properly the messages about the start and stop of the API ML
- When do you plan to start the work? 
  - 23PI3
- When do you plan to deliver the solution? 
  - 23PI3

### Supportability of Zowe

- What problem are you solving?
  - Getting the information to support properly the Zowe is complicated and unfriendly
- What are you doing to solve it? 
  - Update the tools, configuration and documentation to simplify the work. 
- When do you plan to start the work? 
  - 23PI4
- When do you plan to deliver the solution? 
  - 23PI4
