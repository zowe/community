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


## Build Spring Cloud Gateway as a replacement for the current Gateway #2029 

* [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)  
Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The authentication functionality itself would remain for now the responsibility of the current API Gateway. The intention is for the SCG to eventually fully replace the existing gateway some point in the future (not in this PI!).  

API ML Squad Plan:  
[Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)    


## Caching API - Infinispan to production Zowe - On-platform  

* Release Infinispan as a solution to be used by the Caching API as an alternative on-Z storage option to VSAM. 

API ML Squad Plan:  
[Tweak the infinispan storage #1982](https://github.com/zowe/api-layer/issues/1982)    


## Zowe API ML Metrics dashboard MVP to Zowe 1.26 (MENTEE)

* [Metrics Dashboard for ML Services #820](https://github.com/zowe/api-layer/issues/820)
Allow Tyler, the Zowe API ML administator, to track the health and performance of the API ML.
An initial Metrics Service to include basic monitoring information, relying heavily on pre-configuration given by Netflix Hystrix and Turbine.

API ML Squad Plan:
[Get Metrics Service ready for tech preview release #1834](https://github.com/zowe/api-layer/issues/1834)   


## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/22PI1)
