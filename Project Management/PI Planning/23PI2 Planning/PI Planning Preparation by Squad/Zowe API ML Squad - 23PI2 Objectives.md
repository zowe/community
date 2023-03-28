# Zowe API ML Squad - 23PI1 Objectives (Jan 2023 to Apr 2023)

## API Developer Portal



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
