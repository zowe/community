# Zowe API ML Squad - 23PI4 Objectives  
(October 2023 to January 2024)

## Spring Boot 3 & Java 17 Support

Ensure we support Java 17 in the API ML and support Spring Boot 3 on the API ML for Zowe V3.

Impact on other Zowe components: POSSIBLE

API ML Squad Plan:
- [Spring Boot 3 and Java 17](https://github.com/zowe/api-layer/issues/3113) 
- [As modern sysprog, i want to have confidence that API ML will run on my Java17 system.](https://github.com/zowe/api-layer/issues/2891)
- [Upgrade Spring Boot to 3.1 (Zowe V3)](https://github.com/zowe/api-layer/issues/2959)
- [As an extender I want to have Spring enabler supporting Version 3 of Spring](https://github.com/zowe/api-layer/issues/3114)

## V3 Build Spring Cloud Gateway as a replacement for the current Gateway #2029

Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The intention is for the SCG to fully replace the existing gateway with the release of V3.  

Impact on other Zowe components: POSSIBLE

API ML Squad Plan:  
- [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)
- [As Modern SW Engineer I want to get information about the services available in system to simplify the CLI configuration](https://github.com/zowe/api-layer/issues/3109)
- [As a Software Engineer on the API ML team I want the previous API Gateway to serve as authentication service.](https://github.com/zowe/api-layer/issues/3110)
- [As Modern sysprog or Modern SW engineer I want to get information about the health of the API Mediation Layer from the SCG](https://github.com/zowe/api-layer/issues/3111)
- [As a Software Engineer on the API ML team I want to verify the functionality of the API Gateway remains.](https://github.com/zowe/api-layer/issues/3112)
- [As a Modern Sysprog I want to secure communication with Spring Cloud Gateway using AT-TLS which is z/OS standard](https://github.com/zowe/api-layer/issues/2038)

## Engineering Excellence

- [Spike: Separate npm build from gradle](https://github.com/zowe/api-layer/issues/3049) 
- [Spike: Integrate the Certificate mapping and Identity mapping into the common-java-c](https://github.com/zowe/api-layer/issues/2918) 
- [Spike: how to know whether API ML is meeting non-functional requirements(NFR)](https://github.com/zowe/api-layer/issues/2288) 
- [Update start script testing](https://github.com/zowe/api-layer/issues/2130) 

## Defects

- [ZaaS client error message incorrectly translated](https://github.com/zowe/api-layer/issues/3038)
- [Fix 401 responses](https://github.com/zowe/api-layer/issues/3007)
- [Internal server port](https://github.com/zowe/api-layer/issues/2968)
- [JWK endpoint returns XML](https://github.com/zowe/api-layer/issues/2962) 
- [Invalid log message and response on missing credentials](https://github.com/zowe/api-layer/issues/2902) 
- [Exception when z/OSMF API documentation is not available](https://github.com/zowe/api-layer/issues/2837) 
- [All APIML services freeze during startup when unable to access a private key from a key ring](https://github.com/zowe/api-layer/issues/2822) 
- [With AT-TLS mode enabled, api-catalog-services and discovery-service fail startup](https://github.com/zowe/api-layer/issues/2795)  
- [Zowe v2 conformance](https://github.com/zowe/api-layer/issues/2794) 
- [Zowe installation with AT-TLS mode enabled does not properly setup the native library](https://github.com/zowe/api-layer/issues/2792) 
- [Renewal via enabler ignore health of application](https://github.com/zowe/api-layer/issues/1401) 


# Stretch

## Improve logging for the API ML #1796

Zowe will enhance the support experience of Zowe with the aim to reduce the number of support cases opened. Where cases are opened this objective will reduce time taken to identify defects' root causes and more quickly address configuration problems.  

- if there is no issue, we should log only that the services started, ideally including a point when the whole Zowe is started and works properly. 
- if there are issues that limit the functionality but don't break things, we need to log them as warnings in a way that's actionable by the users.  
- if there are issues preventing Zowe from working, these will be logged as errors with easy to find error codes and actionable text.  
- Logs created for debugging should go to files instead of the spool so that the diagnostics pax contains them.  
- Debugging logs should contain, by default, the details of the TLS communication.

Impact on other Zowe components: NONE

**API ML Squad plan:**  

[Improve Logging. #1181](https://github.com/zowe/api-layer/issues/1181) 
- [Validation of certificate between DS#2913](https://github.com/zowe/api-layer/issues/2913)  
- [Improve logging about Keyring / keystore #2971](https://github.com/zowe/api-layer/issues/2971)
- [Improve logging about eureka communication #2973](https://github.com/zowe/api-layer/issues/2973)

## Roadmap

### V3 Support SpringBoot 3.1

- What problem are you solving?
  - Zowe V3 must be on a Spring Boot baseline of 3.1 to be in support.  
- What are you doing to solve it?
  - The objective is to upgrade SpringBoot to at least 3.1.x version for Zowe V3.
- When do you plan to start the work?
  - 23PI4
- When do you plan to deliver the solution?
  - 23PI4

### V3 Support Java 17

- What problem are you solving?
  - API ML depends heavily on the spring framework. Spring 6 drops support for java versions prior to 17. 
- What are you doing to solve it?
  - API ML should reflect this and be able to compile and run on java 17. The objective for the API ML is to use java 17 in the toolchain and produce artifacts that run on this runtime.
- When do you plan to start the work?
  - 23PI4
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
  - 24PI1

### Build Spring Cloud Gateway proxy as a replacement for the current Gateway

- What problem are you solving?
  - Current Netflix ZUUL gateway is no longer actively developed
- What are you doing to solve it?
  - Deliver a new gateway built upon the Spring Cloud Gateway
- When do you plan to start the work?
  - 23PI1
- When do you plan to deliver the solution?
  - 24PI2

### Improve Fault tolerance testing

- What problem are you solving?
  - The problems related to fault tolerance are found in the user's systems.
- What are you doing to solve it?
  - Improve the test suite to contain more tests on how zowe behaves in different fault scenarios and then fixing the issues.
- When do you plan to start the work?
  - 24PI1
- When do you plan to deliver the solution?
  - 24PI2

### SMF Records creation

- What problem are you solving?
  - Missing SMF records for some types of authentication events
- What are you doing to solve it?
  - Create SMF records for each authentication with API ML JWT or PAT with details such as timestamp, mainframe identity, and form of the provided authentication(JWT, PAT,...)
- When do you plan to start the work?
  - 24PI2
- When do you plan to deliver the solution?
  - 24PI2

### Observability for API ML

- What problem are you solving?
  - The customers need to integrate the mainframe APIs into their wider observability effort.
- What are you doing to solve it?
  - Implementing the integration of the API ML traffic data with popular solutions such as Splunk or ELK stack
- When do you plan to start the work?
  - 23PI3
- When do you plan to deliver the solution?
  - 24PI4

### Improve Onboarding of Internal APIs

- What problem are you solving?
  - The users need to be able to easily onboard their own custom internal infrastructure APIs
- What are you doing to solve it?
  - Update wizard in the API Catalog, Add more functionality for the administrator about onboarded services.
- When do you plan to start the work?
  - 24PI3
- When do you plan to deliver the solution?
  - 24PI4


