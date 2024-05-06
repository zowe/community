# Zowe API ML Squad - 24PI2 - (2024/04/29 - 2024/07/22)
(April 2024 to July 2024)

## V3 Build Spring Cloud Gateway as a replacement for the current Gateway #2029

Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The intention is for the SCG to fully replace the existing gateway with the release of V3.  

Impact on other Zowe components: POSSIBLE

API ML Squad Plan:  
[Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)

## Roadmap

### Build Spring Cloud Gateway proxy as a replacement for the current Gateway

- What problem are you solving?
  - Current Netflix ZUUL gateway is no longer actively developed
- What are you doing to solve it?
  - Deliver a new gateway built upon the Spring Cloud Gateway
- When do you plan to start the work?
  - 23PI1
- When do you plan to deliver the solution?
  - 24PI2

### Improve Logging for the API ML

- What problem are you solving?
  - Currently it's difficult for Users to self-analyze and fix the configuration of Zowe
- What are you doing to solve it?
  - Provide good quality logs with meaningful and actionable information
- When do you plan to start the work?
  - 23PI2
- When do you plan to deliver the solution?
  - 25PI2

### Report API ML State to the Programmer

- What problem are you solving?
  - The users want to automate behavior on the startup of API ML. 
- What are you doing to solve it?
  - Provide correct WTO message when the API ML is actually started. 
- When do you plan to start the work?
  - 24PI4
- When do you plan to deliver the solution?
  - 24PI4

### Observability for API ML

- What problem are you solving?
  - The customers need to integrate the mainframe APIs into their wider observability effort.
- What are you doing to solve it?
  - Implementing the integration of the API ML traffic data with popular solutions such as Splunk or ELK stack
- When do you plan to start the work?
  - 25PI1
- When do you plan to deliver the solution?
  - 25PI2
