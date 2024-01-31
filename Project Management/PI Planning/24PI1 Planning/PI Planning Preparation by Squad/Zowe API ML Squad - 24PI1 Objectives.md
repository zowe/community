# Zowe API ML Squad - 24PI1 - (2024/01/23 - 2024/04/22)
(January 2024 to April 2024)

## Cleanup for V3

Cleanup for version 3

**API ML Squad Plan:**

- [Archive Jobs API](https://github.com/zowe/jobs/issues/246) (Remove from Pax, Update documentation)
- [Archive Datasets API](https://github.com/zowe/data-sets/issues/310) (Remove from PAX, Update Documentation)
- [Archive Metrics Service](https://github.com/zowe/api-layer/issues/3292) (Remove from PAX, Update Documentation)
- [Remove JWT Autoconfiguration support](https://github.com/zowe/api-layer/issues/3090)
- [Move to the ibmzosmf](https://github.com/zowe/api-layer/issues/3295)

## V3 Build Spring Cloud Gateway as a replacement for the current Gateway #2029

Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. 

The intention is for Spring Cloud Gateway to be available with 3.0 and to become default during the V3 release stream for those coming to later versions, once we have enough testing to prove it handles everything at least to the same level. 

Impact on other Zowe components: POSSIBLE

**API ML Squad Plan:**

[Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)
- [Protect endpoints with SAF, Security Admin, To limit access to the information  #3165](https://github.com/zowe/api-layer/issues/3165)
- [Provide the list of available services, Michelle, To simplify the CLI configuration #3109](https://github.com/zowe/api-layer/issues/3109)
- [SCG supports AT-TLS, Tyler, To unify configuration with other z/OS products #3282](https://github.com/zowe/api-layer/issues/3282)
- [SCG properly routes websockets, Michelle, To limit communication for long running connection #3088](https://github.com/zowe/api-layer/issues/3088)
- [Clean up the current API Gateway, API ML Engineer, To serve only as authentication service #3110](https://github.com/zowe/api-layer/issues/3110)
- [SCG provides health information, Tyler and Michelle, To integrate into automation #3111](https://github.com/zowe/api-layer/issues/3111)
- [Validate SCG provides all the previous functionality, API ML Developer, To prove we can move #3112](https://github.com/zowe/api-layer/issues/3112)
- [Authentication endpoint remain accessible through Gateway, Michelle, To Limit Change between versions
#3291](https://github.com/zowe/api-layer/issues/3291)
- [Limit access to internal service, API ML Engineer, To be able to evolve them as needed #3294](https://github.com/zowe/api-layer/issues/3294)

## {Stretch} Improve logging for the API ML #1796

Zowe will enhance the support experience of Zowe with the aim to reduce the number of support cases opened. Where cases are opened this objective will reduce time taken to identify defects' root causes and more quickly address configuration problems.  

- if there is no issue, we should log only that the services started, ideally including a point when the whole Zowe is started and works properly. 
- if there are issues that limit the functionality but don't break things, we need to log them as warnings in a way that's actionable by the users.  
- if there are issues preventing Zowe from working, these will be logged as errors with easy to find error codes and actionable text.  
- Logs created for debugging should go to files instead of the spool so that the diagnostics pax contains them.  
- Debugging logs should contain, by default, the details of the TLS communication.

Impact on other Zowe components: NONE

**API ML Squad plan:**  

[Improve logging relate to the API ML #3283](https://github.com/zowe/api-layer/issues/3283)
- [Log Errors and Stop, Tyler, To limit resource consumption #3284](https://github.com/zowe/api-layer/issues/3284)
- [Warn when something is wrong, Tyler, Update Configuration #3285](https://github.com/zowe/api-layer/issues/3285)
- [Log only successful startup, Tyler, Validate Zowe is Up #3286](https://github.com/zowe/api-layer/issues/3286)
- [Improve debug logs and sharing of them, Support Provider, To help understand and replicate #3287](https://github.com/zowe/api-layer/issues/3287)

# Bugs to be fixed

- [High Priority Bugs](https://github.com/zowe/api-layer/issues?q=is%3Aopen+is%3Aissue+label%3Abug+label%3A%22Priority%3A+High%22)

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
  - 24PI2

### Multiple services within infrastructure

- What problem are you solving?
  - It's unclear how do you handle services on different lpars that are lpar specific as well as how do you handle the different maturity level of service instances e.g. dev, qa, prod in sysplex
- What are you doing to solve it?
  - Change the implementation to clearly distinguish between the concept of lpar and maturity and simplify what clients can do to use that fact
- When do you plan to start the work?
  - 24PI2
- When do you plan to deliver the solution?
  - 24PI2

### Improve testing

- What problem are you solving?
  - The problems related to fault tolerance are found in the user's systems.
- What are you doing to solve it?
  - Improve the test suite to contain more tests on how zowe behaves in different fault scenarios and then fixing the issues.
- When do you plan to start the work?
  - 24PI2
- When do you plan to deliver the solution?
  - 24PI3

### SMF Records creation

- What problem are you solving?
  - Missing SMF records for some types of authentication events
- What are you doing to solve it?
  - Create SMF records for each authentication with API ML JWT or PAT with details such as timestamp, mainframe identity, and form of the provided authentication(JWT, PAT,...)
- When do you plan to start the work?
  - 24PI3
- When do you plan to deliver the solution?
  - 24PI3

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
  - 24PI4
- When do you plan to deliver the solution?
  - 24PI4


