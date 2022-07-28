# Zowe API ML Squad - 22PI3 Objectives (August 2022 to October 2022)

## Objectives

### Personal Access Tokens #2257

* [Personal Access Tokens](https://github.com/zowe/api-layer/issues/2257)

As a modern developer I want to be able to use tokens with limited access and limited but extended expiration within my automation scenarios. 

API ML Squad Plan:
- [https://github.com/zowe/api-layer/issues/2444](https://github.com/zowe/api-layer/issues/2444)

#### Use Case

As a modern developer I inherited CICD pipeline for build and deployment of one of our business aplications. The previously responsible engineer left for another project. To make sure that the code in pipeline have access to the application the developer stored credentials inbuild server. I don't want to store my credentials for the pipeline to run as if the credentials leak there is risk that they will be misused by someone also for other services I have access to. I don't have my own personal certificate issues so I can't depend on the client certificate or I would have to go through quite lengthy procedure to obtain one and also if it's stolen it will give access to the attacker to mny places. What I want is a way to authenticate that I won't have to change frequently but which will limit access only to the services necessary for this pipeline. 

### Identity Federation

* [Identity Federation #2481](https://github.com/zowe/api-layer/issues/2481)

As a Mainframe user, I want to log in just once to a corporate-wide IAM solution like Okta, Ping Identity, or KeyCloak and still be recognized by the Mainframe security under my Mainframe identity (to which my Mainframe access rights are bound).

As a Mainframe user, I want to be able to access all the Mainframe services protected by SAF and to which I'm entitled, in the same way as the non-mainframe services protected by the central IAM, using only my network (aka distributed) identity. Additionally, I want API ML to validate that the client application I'm using to access the mainframe resources is authorized for such access.

### Build Spring Cloud Gateway as a replacement for the current Gateway #2029

* [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)  
Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The authentication functionality itself would remain for now the responsibility of the current API Gateway. The intention is for the SCG to eventually fully replace the existing gateway some point in the future (not in this PI!).  

In this PI we intend to create new service based on SCG and deploy it alongside the existing Gateway. 

API ML Squad Plan:  
- [Package, configure and deploye SCG alongside API Gateway. #2037](https://github.com/zowe/api-layer/issues/2037)  

### API Rate Limiting {SPIKE} 

* [API Rate Limiting #2371](https://github.com/zowe/api-layer/issues/2371)

The Gateway service needs to provide the protection to the southbound services aimed at drainage of their resources by limiting the amount of requests coming to the specific request. 

## Bugs

- [Build information missing in manifest.yaml #2382](https://github.com/zowe/api-layer/issues/2382)
- [Certificates without client attribute doesn't work for the API ML #2337](https://github.com/zowe/api-layer/issues/2337)
- [Response code should be 302 instead of 200 when Location header in response #2423](https://github.com/zowe/api-layer/issues/2423)
- [`verifyCertificates: NONSTRICT` doesn't disable hostname verification #2261](https://github.com/zowe/api-layer/issues/2261)
- [Incorrect URL navigation after login #2287](https://github.com/zowe/api-layer/issues/2287)

## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/22PI3)

## Roadmap

### Seamless upgrade to API ML

- What problem are you solving?
  - The update od Zowe and especially API ML can break the extensions of the API ML and break the configuration
- What are you doing to solve it? 
  - Provide customers with alternative path that does the upgrade
- When do you plan to start the work? 
  - 22PI4
- When do you plan to deliver the solution? 
  - 22PI4

### API Documentation - Search and Try It Out Improvements

- What problem are you solving?
  - The user has a hard time understanding and finding the rigth API within the enterprise to use. 
- What are you doing to solve it? 
  - Improving the search and try it out experience
- When do you plan to start the work? 
  - 22PI4
- When do you plan to deliver the solution? 
  - 22PI4

### Report API ML State to MF System Programmer

- What problem are you solving?
  - The System Programmers can't automate the reaction to API ML going down
- What are you doing to solve it? 
  - Publish properly the messages about the start and stop of the API ML
- When do you plan to start the work? 
  - 22PI4
- When do you plan to deliver the solution? 
  - 22PI4

### Enable API ML to validate Conformance

- What problem are you solving?
  - The users, extenders and Zowe can't verify the claims in the conformance program
- What are you doing to solve it? 
  - Provide endpoint to verify for running and onboarded service whether it fulfils conformance criteria
- When do you plan to start the work? 
  - 22PI2
- When do you plan to deliver the solution? 
  - 22PI4

### Build Spring CLoud Gateway

- What problem are you solving?
  - The Zuul gateway component is not supported anymore
- What are you doing to solve it? 
  - Implement new Gateway based on the supported technologies
- When do you plan to start the work? 
  - 22PI2
- When do you plan to deliver the solution? 
  - 22PI4

### True Dynamic Discovery

- What problem are you solving?
  - The current discovery service is just a registry where someone needs to register the services. 
- What are you doing to solve it? 
  - Explore the available services and landscape and discover all the services that can be onboarded to the API ML. 
- When do you plan to start the work? 
  - 23PI1
- When do you plan to deliver the solution? 
  - 23PI1

### Supportability of Zowe

- What problem are you solving?
  - Getting the information to support properly the Zowe is complicated and unfriendly
- What are you doing to solve it? 
  - Update the tools, configuration and documentation to simplify the work. 
- When do you plan to start the work? 
  - 23PI1
- When do you plan to deliver the solution? 
  - 23PI1