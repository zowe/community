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
- [Secure communication between SCG and API ML #2036](https://github.com/zowe/api-layer/issues/2036)  
- [Package, configure and deploye SCG alongside API Gateway. #2037](https://github.com/zowe/api-layer/issues/2037)  

### API Rate Limiting {SPIKE} 

* [API Rate Limiting #2371](https://github.com/zowe/api-layer/issues/2371)

The Gateway service needs to provide the protection to the southbound services aimed at drainage of their resources by limiting the amount of requests coming to the specific request. 

## Issues

- [Register API service to multiple different API ML instances #2425](https://github.com/zowe/api-layer/issues/2425)
- [Support for multiple ports for the onboarded service #2478](https://github.com/zowe/api-layer/issues/2478)
- [Support passticket generation in the API header to support IMS Operations API v2 Conformance #2305](https://github.com/zowe/api-layer/issues/2305)

## Bugs

- [Build information missing in manifest.yaml #2382](https://github.com/zowe/api-layer/issues/2382)
- [Certificates without client attribute doesn't work for the API ML #2337](https://github.com/zowe/api-layer/issues/2337)
- [Response code should be 302 instead of 200 when Location header in response #2423](https://github.com/zowe/api-layer/issues/2423)
- [`verifyCertificates: NONSTRICT` doesn't disable hostname verification #2261](https://github.com/zowe/api-layer/issues/2261)
- [Incorrect URL navigation after login #2287](https://github.com/zowe/api-layer/issues/2287)

## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/22PI3)
