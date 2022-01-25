# Zowe API ML & Security Squad - 22PI1 Objectives (February 2022 to May 2022)


## {v2} Enhancements to support move to v2 #1510

* [V2 release #1510](https://github.com/zowe/api-layer/issues/1510)
Continued validation and bug fixing for Version 2 of Zowe.

API ML Squad Plan:
[Remove the old path pattern from supported #1770](https://github.com/zowe/api-layer/issues/1770)
[SPIKE: Remove instance.env parameters in favour of spring env vars (manifest.yaml) #1583](https://github.com/zowe/api-layer/issues/1583)
[Distinguish between sdk and core services in manifest #1498) #1583](https://github.com/zowe/api-layer/issues/1498)
[Document and verify the installation of extensions to the API Mediation Layer #1067](https://github.com/zowe/api-layer/issues/1067)
[Refactor security remapping #1051](https://github.com/zowe/api-layer/issues/1051)
Improve API versioning to eliminate issues when parsing the ApiInfo in API Catalog
Conformance criteria updated


## Enhanced support for client certificate authentication in Zowe API ML #1750

* [Enhanced support for client certificate authentication in Zowe API ML](https://github.com/zowe/api-layer/issues/1750)
Add support for using client certificate to make API calls directly to service endpoints aka mTLS. This would enable users to securely make direct API calls from third party products to a service endpoint using certificate authentication.    

API ML Squad Plan:
tbd      


## {SPIKE} Migrate API ML Gateway from Spring Cloud Zuul to Spring Cloud Gateway (SCG)  

* Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). The goal is to explore building a new gateway service on top of the SCG technology that will provide only basic functionality at the beginning. It will live next to the existing gateway and will replace it at some point in the future.  

API ML Squad Plan:
Spike that will provide insight towards:    
- key milestones of migration pathway to SCG with a highlight of breaking changes (if any)  
- role of ZAAS client after migration  


## Caching API - Infinispan to production Zowe - On-platform  

* Release Infinispan as a solution to be used by the Caching API as an alternative on-Z storage option to VSAM. 

API ML Squad Plan:
tbd  


## Zowe API ML Metrics dashboard MVP to Zowe 1.26 (MENTEE)

* [Metrics Dashboard for ML Services #820](https://github.com/zowe/api-layer/issues/820)
Allow Tyler, the Zowe API ML administator, to track the health and performance of the API ML.
An initial Metrics Service to include basic monitoring information, relying heavily on pre-configuration given by Netflix Hystrix and Turbine.

API ML Squad Plan:
[Get Metrics Service ready for tech preview release #1834](https://github.com/zowe/api-layer/issues/1834)   


## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/22PI1)
