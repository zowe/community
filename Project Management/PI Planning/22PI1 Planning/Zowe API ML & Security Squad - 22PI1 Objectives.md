# Zowe API ML & Security Squad - 22PI1 Objectives (February 2022 to May 2022)


## {v2} Enhancements to support move to v2 #1510

* [V2 release #1510](https://github.com/zowe/api-layer/issues/1510)  
Continued validation and bug fixing for Version 2 of Zowe.

API ML Squad Plan:  
[Service ID prefix change impact on Zowe v1 to v2 compatibility #1999](https://github.com/zowe/api-layer/issues/1999)  
[Allow to define port offset instead arbitrary port number #2486](https://github.com/zowe/zowe-install-packaging/issues/2486)  
[Migrate playbooks and installation/sanity test for v2 #2462](https://github.com/zowe/zowe-install-packaging/issues/2462)  
[Investigate automatically generating reference documentation #2460](https://github.com/zowe/zowe-install-packaging/issues/2460)  
[v1~v2 end-user migrate tool #2453](https://github.com/zowe/zowe-install-packaging/issues/2453)     
[Certificate section confusion #2565](https://github.com/zowe/zowe-install-packaging/issues/2565)    


## Enhanced support for client certificate authentication in Zowe API ML #1750

* [Enhanced support for client certificate authentication in Zowe API ML](https://github.com/zowe/api-layer/issues/1750)  
Add support for using client certificate to make API calls directly to service endpoints (aka mTLS). This would enable users to securely make direct API calls from third party products to a service endpoint using certificate authentication. This would unlock use cases for Services who were unable to leverage third party products due to their lack of support for token authentication.      

API ML Squad Plan:  
[SPIKE: client certificate authentication for all REST endpoints #2028](https://github.com/zowe/api-layer/issues/2028)        


## Caching API - Infinispan to production Zowe - On-platform  

* Release Infinispan as a solution to be used by the Caching API as an alternative on-Z storage option to VSAM. 

API ML Squad Plan:  
[Tweak the infinispan storage #1982](https://github.com/zowe/api-layer/issues/1982)  


## Build Spring Cloud Gateway as a replacement for the current Gateway #2029 {STRETCH}

* [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)  
Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The authentication functionality itself would remain for now the responsibility of the current API Gateway. The intention is for the SCG to eventually fully replace the existing gateway some point in the future (not in this PI!).  

API ML Squad Plan:  
[Secure communication between SCG and API ML #2036](https://github.com/zowe/api-layer/issues/2036)  
[Package, configure and deploye SCG alongside API Gateway. #2037](https://github.com/zowe/api-layer/issues/2037)  
[Move AT-TLS processing to the Spring Cloud Gateway #2038](https://github.com/zowe/api-layer/issues/2038)  
[Integrate discovery service knowledge of services with newly created SCG #2039](https://github.com/zowe/api-layer/issues/2039)  
[Circuit Breaker in the SCG #2040](https://github.com/zowe/api-layer/issues/2040)  
[Retry request on another instance of service if service has multiple instances. #2041](https://github.com/zowe/api-layer/issues/2041)  
[Handle CORS on behalf of the southbound services #2042](https://github.com/zowe/api-layer/issues/2042)  
[Correctly Load Balance between multiple instances of service #2043](https://github.com/zowe/api-layer/issues/2043)


## Zowe API ML MENTEE projects

* [Integrate System data to the Metrics Service #1945](https://github.com/zowe/api-layer/issues/1945)  
The objective is to display system metrics. So, retrieve the information about the system the services are running on and visualize them. In order to do so the visualization part will also be enhanced.  

* [Move zOS specific code to the zOS library #1341](https://github.com/zowe/api-layer/issues/1341)  
The code that interacts directly with the zOS is distributed across the whole monorepo for the API Mediation Layer. The classes are instantiated via the ReflectionUtils that verify whether the jZos classes are available on the system at the moment. This brings unnecessary indirection and also some problems.   
The objective is twofold. First part is to create a new mock-zos library within the api-layer monorepo and create the mock functionality that can be used to verify happy as well as unhappy paths in non zOS environment. The second part of the goal is to move the logic into the library.  
When both of the goals are achieved we should be able to remove the ReflectionUtils and simplify the internal logic for the parts depending on zOS.    

* [Enhancement Suggestions for Onboarding Wizard #1879](https://github.com/zowe/api-layer/issues/1879)  
Community sourced suggestions to improve on v1 of the Onboarding wizard in the API Catalog.  


## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/22PI1)
