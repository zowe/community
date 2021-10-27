# Zowe API ML & Security Squad - 21PI4 Objectives (November 2021 to February 2022)


## {v2} Enhancements to support move to v2 #1510

* [V2 release #1510](https://github.com/zowe/api-layer/issues/1510)  
Combination of breaking and non-breaking enhancements and bug fixes for Version 2 of Zowe.

API ML Squad Plan:  
[Remove the old path pattern from supported #1770](https://github.com/zowe/api-layer/issues/1770)  
[SPIKE: Remove instance.env parameters in favour of spring env vars (manifest.yaml) #1583](https://github.com/zowe/api-layer/issues/1583)  
[Distinguish between sdk and core services in manifest #1498) #1583](https://github.com/zowe/api-layer/issues/1498)  
[Document and verify the installation of extensions to the API Mediation Layer #1067](https://github.com/zowe/api-layer/issues/1067)  
[Refactor security remapping #1051](https://github.com/zowe/api-layer/issues/1051)  
Improve API versioning to eliminate issues when parsing the ApiInfo in API Catalog  
Conformance criteria updated


## Mainframe password change via v2 API Catalog, without the need to switch context #1531

* [Mainframe password change via API Catalog #1531](https://github.com/zowe/api-layer/issues/1531)  

The v2 API Catalog will:  
- execute a change password flow in the UI when appropriate  
- refresh a soon-to-expire token when appropriate  

API ML Squad Plan:  
Design and validate proposed Catalog changes (with UX assistance)  
Implement validated changes into v2 Catalog (Material UI framework)    


## v2 API Catalog to adopt Material UI framework #1169

* [Replace Mineral-UI in API Catalog with a suitable design system #1169](https://github.com/zowe/api-layer/issues/1169)  
v2 API Catalog has migrated off Mineral UI onto Material UI.  

Replace the Mineral UI framework with Material to attain the following benefits:    
- Top-notch support / Active development / Big community   
- Universally respected and recognized framework  
- Enables customized branding  
- Vendor Agnostic  

API ML Squad Plan:  
[SPIKE: replace mineral UI components with material #1842](https://github.com/zowe/api-layer/issues/1842)  
[Consolidate metrics service and api catalog code #1495](https://github.com/zowe/api-layer/issues/1495)  
[Improve style check for js/jsx files #1497](https://github.com/zowe/api-layer/issues/1497)  
[Make the e2e tests run on stable environment #1187](https://github.com/zowe/api-layer/issues/1187)  


## {SPIKE} Migrate API ML Gateway from Spring Cloud Zuul to Spring Cloud Gateway (SCG) (STRETCH)

* Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). The goal is to explore building a new gateway service on top of the SCG technology that will provide only basic functionality at the beginning. It will live next to the existing gateway and will replace it at some point in the future.  

API ML Squad Plan:  
Spike that will provide insight towards:    
- context behind the motivation to move away from Netflix Zuul  
- overview of alternative options to Zuul  
- key milestones of migration pathway to SCG with a highlight of breaking changes (if any)  
- role of ZAAS client after migration  


## Caching API - POC of Infinispan - On-platform (STRETCH)

* Validate whether Infinispan can be used by the Caching API as an alternative on-Z storage option to VSAM. 

API ML Squad Plan:  
A PoC that verifies if the Infinispan option is viable. Also, some performance comparison with VSAM.


## Zowe API ML Metrics dashboard MVP to Zowe 1.26 (STRETCH)

* [Metrics Dashboard for ML Services #820](https://github.com/zowe/api-layer/issues/820)  
Allow Tyler, the Zowe API ML administator, to track the health and performance of the API ML.
An initial Metrics Service to include basic monitoring information, relying heavily on pre-configuration given by Netflix Hystrix and Turbine.

API ML Squad Plan:  
[Get Metrics Service ready for tech preview release #1834](https://github.com/zowe/api-layer/issues/1834)   


## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/21PI4)
