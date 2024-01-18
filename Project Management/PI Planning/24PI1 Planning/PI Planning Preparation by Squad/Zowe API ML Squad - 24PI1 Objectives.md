# Zowe API ML Squad - 24PI1 - (2024/01/23 - 2024/04/22)
(January 2024 to April 2024)

## V3 Build Spring Cloud Gateway as a replacement for the current Gateway #2029

Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The intention is for the SCG to fully replace the existing gateway with the release of V3.  

Impact on other Zowe components: POSSIBLE

API ML Squad Plan:  
[Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)

## Improve logging for the API ML #1796

Zowe will enhance the support experience of Zowe with the aim to reduce the number of support cases opened. Where cases are opened this objective will reduce time taken to identify defects' root causes and more quickly address configuration problems.  

- if there is no issue, we should log only that the services started, ideally including a point when the whole Zowe is started and works properly. 
- if there are issues that limit the functionality but don't break things, we need to log them as warnings in a way that's actionable by the users.  
- if there are issues preventing Zowe from working, these will be logged as errors with easy to find error codes and actionable text.  
- Logs created for debugging should go to files instead of the spool so that the diagnostics pax contains them.  
- Debugging logs should contain, by default, the details of the TLS communication.

Impact on other Zowe components: NONE

**API ML Squad plan:**  

[Unify and differentiate logging between platforms. #1181](https://github.com/zowe/api-layer/issues/1181) 
- [Validation of certificate between DS#2913](https://github.com/zowe/api-layer/issues/2913)  
- [Fix log message about change password](https://github.com/zowe/api-layer/issues/2912)  
- [Log meaningful messages when debugging API ML #2892](https://github.com/zowe/api-layer/issues/2892)
- [Improve logging about Keyring / keystore #2971](https://github.com/zowe/api-layer/issues/2971)
- [Improve logging about eureka communication #2973](https://github.com/zowe/api-layer/issues/2973)
- [All APIML services freeze during startup when unable to access a private key from a key ring](https://github.com/zowe/api-layer/issues/2822)       
- [The missleading warning message in Gateway](https://github.com/zowe/api-layer/issues/2824)

# Stretch

## Multiple services within infrastructure #3129

Zowe will improve the experience for users that have many instances of one service with different purposes. 

**Use Case**
- As a service provider, I have an infrastructure that contains different customers running different services in different versions, and I want to have a meaningful view of the APIs in the Catalog.
- As a larger z/OS user, I have multiple instances of the service that is intended for different purposes e.g. dev, test and production on the same set of the LPARs e.g. using the same Zowe
- As a larger z/OS user, I have services that are specific for specific LPARs e.g. Sysview running on specific LPAR and I need to access the specific LPAR

Impact on other Zowe components: CLI, VS Code Explorer, Intellij Explorer

[Multiple services/instances of one product within infrastructure ](https://github.com/zowe/api-layer/issues/3129)

# Roadmap

### Build Spring Cloud Gateway proxy as a replacement for the current Gateway

- What problem are you solving?
  - Current Netflix ZUUL gateway is no longer actively developed
- What are you doing to solve it?
  - Deliver a new gateway built upon the Spring Cloud Gateway
- When do you plan to start the work?
  - 23PI1
- When do you plan to deliver the solution?
  - 24PI1

### Improve Logging for the API ML

- What problem are you solving?
  - Currently it's difficult for Users to self-analyze and fix the configuration of Zowe
- What are you doing to solve it?
  - Provide good quality logs with meaningful and actionable information
- When do you plan to start the work?
  - 24PI1
- When do you plan to deliver the solution?
  - 24PI1

### Improve testing

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
  - 24PI3

### Improve Onboarding of Internal APIs

- What problem are you solving?
  - The users need to be able to easily onboard their own custom internal infrastructure APIs
- What are you doing to solve it?
  - Update wizard in the API Catalog, Add more functionality for the administrator about onboarded services.
- When do you plan to start the work?
  - 24PI3
- When do you plan to deliver the solution?
  - 24PI3


