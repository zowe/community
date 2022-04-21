# Zowe API ML Squad - 22PI2 Objectives (May 2022 to Aust 2022)

## API Documentation - Snippets, Automation and Improvements #2208

* [API Documentation - Snippets, Automation and Improvements](https://github.com/zowe/api-layer/issues/2208)

As a modern developer I depend on API documentation in my daily work. I would like to be able to effectively search through onboarded APIs and I want to be able to directly grab code that will work within my application to integrate with the APIs.

API ML Squad Plan:
- [API Coding Samples / Snippets to facilitate programmatic use of APIs](https://github.com/zowe/api-layer/issues/2082)
- [As a modern programmer I want to easily find the APIs relevant to my work](https://github.com/zowe/api-layer/issues/2253 )
- [Spike: As a modern programmer I want to verify the usage of the specific endpoint before using it in my implementation](https://github.com/zowe/api-layer/issues/2256)
- [Spike: As a modern programmer I want to be aware of the endpoints that are deprecated and as such I shouldn't be using them](https://github.com/zowe/api-layer/issues/2255)

### Use Case

I (as a modern developer) was assigned to the modernization task that focuses on automating the build, test, and deployment process of one of our business applications. The application is running in the zOS environment and consists of the combination of batch jobs written in COBOL, rest APIs written in Java, and application code integrating with the system in C and HLASM. The problem for me is that I don't have much experience with the APIs available in zOS and my colleagues are busy and so I don't want to bother them with every little question. I want a way to find answers easily myself. 

**Steps necessary to finish the work:**
1) Within the dev environment I need to retrieve the code to be built from one of the VCS systems in use within the enterprise. The code will then need to be compiled on the zOS platform and packaged and uploaded as a version to one of the artifactories that the enterprise operates. 
2) I need to deploy the packaged code to the validation environment afterwards and run the integration and end 2 end test suite against the running instances and if all these tests pass, I am allowed to deploy the application in the production environment. 
3) To deploy in the production environment I need to get the final version of the code into the environment and install the new version. There can be a requirement to do this only within a specific time frame if we don't have an approach for zero-downtime deployments. If there is such an approach then I need to integrate it with the tooling that handles the deployment process e.g. via red/black or blue/green deployment strategies.

**Note:**

It's possible that manual approval will be needed to actually deploy the version to the production environment.

## Personal Access Tokens #2257

* [Personal Access Tokens](https://github.com/zowe/api-layer/issues/2257)

As a modern developer I want to be able to use tokens with limited access and limited but extended expiration within my automation scenarios. 

API ML Squad Plan:
- [As a modern developer I want to revoke existing token](https://github.com/zowe/api-layer/issues/2306)
- [As a modern developer or system integrator, I want to be able to create a token valid only for specific services for a limited amount of time.](https://github.com/zowe/api-layer/issues/2276)
- [As a modern developer or system integrator I want to be able to limit scope of the personal access token](https://github.com/zowe/api-layer/issues/2277)
- [As a modern developer or system integrator I want to select the expiration time on the token](https://github.com/zowe/api-layer/issues/2278)
- [As a modern developer or system integrator, I want to be able to revoke existing tokens.](https://github.com/zowe/api-layer/issues/2279)
- [As an administrator, I want to revoke all tokens applicable to specific service](https://github.com/zowe/api-layer/issues/2280)

### Use Case

As a modern developer I inherited CICD pipeline for build and deployment of one of our business aplications. The previously responsible engineer left for another project. To make sure that the code in pipeline have access to the application the developer stored credentials inbuild server. I don't want to store my credentials for the pipeline to run as if the credentials leak there is risk that they will be misused by someone also for other services I have access to. I don't have my own personal certificate issues so I can't depend on the client certificate or I would have to go through quite lengthy procedure to obtain one and also if it's stolen it will give access to the attacker to mny places. What I want is a way to authenticate that I won't have to change frequently but which will limit access only to the services necessary for this pipeline. 

## Upgrade the major versions of dependencies #2211

* [Upgrade the major versions of dependencies #2211](https://github.com/zowe/api-layer/issues/2211)

As an API ML developer I want to upgrade to the supported versions of the dependencies and platforms used within the API ML to prevent unnecessary risks coming from older versions. 

The key platform dependencies got major upgrades. To make sure we properly support the new versions we need to update the dependencies and test the compatibility. This applies to multiple tools such as Node (v14 related upgrades), Java (Java 11 is availale on platform), Gradle (V7 is supported). On top of that we need to replace a few libraries that aren't developed anymore such as SpringFox for the Open API documentation processing.

API ML Squad Plan:
- [Upgrade SpringBoot to 2.5](https://github.com/zowe/api-layer/issues/1972)
- [Node 14 related upgrades](https://github.com/zowe/api-layer/issues/2030)
- [Replace SpringFox with another solution](https://github.com/zowe/api-layer/issues/1971)
- [Upgrade Gradle to V7](https://github.com/zowe/api-layer/issues/1973)
- [API ML should support Java 11 even for building](https://github.com/zowe/api-layer/issues/1294)
- [Deprecated RestTemplate](https://github.com/zowe/api-layer/issues/1981)
- [Remove deprecated classes from v2](https://github.com/zowe/api-layer/issues/2171)

## Build Spring Cloud Gateway as a replacement for the current Gateway #2029 {STRETCH}

* [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)  

Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The authentication functionality itself would remain for now the responsibility of the current API Gateway. The intention is for the SCG to eventually fully replace the existing gateway some point in the future (not in this PI!).  

In this PI we intend to create new service based on SCG and deploy it alongside the existing Gateway. 

API ML Squad Plan:  
- [Secure communication between SCG and API ML #2036](https://github.com/zowe/api-layer/issues/2036)  
- [Package, configure and deploye SCG alongside API Gateway. #2037](https://github.com/zowe/api-layer/issues/2037)  

## Golden CII Badge Analysis {STRETCH}

* [Get Golden CII Badge](https://github.com/zowe/community/issues/1279)

This is a goal shared across all the Zowe active squads. In the context of this PI the goal is to understand what needs to be done in order to achieve the conformance. 

API ML Squad Plan:
- [Spike: Analyze Golden CII Badge](https://github.com/zowe/api-layer/issues/2309)

## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/22PI1)
