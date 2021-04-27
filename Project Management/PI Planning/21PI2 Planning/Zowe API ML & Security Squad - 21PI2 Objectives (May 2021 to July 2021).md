# Zowe API ML & Security Squad - 21PI2 Objectives (May 2021 to July 2021)


## High-availability support implementation
(in support of RESILIENCE theme)

* [API ML Squad Issue: Support for high availability / sysplex distributor in API Mediation Layer #705](https://github.com/zowe/api-layer/issues/705)  
Complete Caching API including implementing another persistent solution beyond VSAM and validate high availability for the API ML.

API ML Squad Plan:  
[Discovery service configuration key inconsistency #1358](https://github.com/zowe/api-layer/issues/1358)  
[Spike: Deploy API ML in HA setup in external environment #1360](https://github.com/zowe/api-layer/issues/1360)  
[Integrate the HA setup in our Integration Testing procedure #1361](https://github.com/zowe/api-layer/issues/1361)  
[Properly handle redis reconnect error #1363](https://github.com/zowe/api-layer/issues/1363)  


## Improve testing for the API Mediation Layer both on & off platform  
(in support of SECURITY theme)  


* [Improve testing for the API Mediation Layer both on & off platform #1341](https://github.com/zowe/api-layer/issues/1341)  
Increase confidence in the API ML by improving: build stability, developer experience, reliability of codebase  

API ML Squad Plan:  
[Enhance Integration test suite #1313](https://github.com/zowe/api-layer/issues/1313)  
[Enhance our higher order test suites #1332](https://github.com/zowe/api-layer/issues/1332)  
[Tests for platform dependent code #1333](https://github.com/zowe/api-layer/issues/1333)  
[Flaky test ApiCatalogEndpointIntegrationTest #1342](https://github.com/zowe/api-layer/issues/1342)  
[move e2e tests on stable environment #1187](https://github.com/zowe/api-layer/issues/1187)  


## Implement and Release AT-TLS aware Zowe API ML
(in support of SECURITY theme)

* [API ML AT-TLS aware implementation #1345](https://github.com/zowe/api-layer/issues/1345)  
Our objective is to integrate with the z/OS native AT-TLS component to better fulfill TLS security requirements coming from users. Following the research undertaken in 21PI1, this objective will see the implementation and release.  

API ML Squad Plan:  
[Possibility to switch between AT-TLS and application TLS #1346](https://github.com/zowe/api-layer/issues/1346)  
[AT_TLS aware Gateway #1347](https://github.com/zowe/api-layer/issues/1347)  
[AT-TLS aware Discovery service #1348](https://github.com/zowe/api-layer/issues/1348)  
[AT-TLS aware caching service #1349](https://github.com/zowe/api-layer/issues/1349)   

Risk:  
We need to verify that the Marist environment can support AT-TLS tests. We will need support from Marist admins to do this. We know that this can be time-consuming and so this Issue could take multiple iterations to complete. This risk is mitigated from a paralell effort to test on internal environments.

## Metrics for Zowe API ML 

* [Metrics Dashboard for ML Services #820](https://github.com/zowe/api-layer/issues/820)  
Onboard intern(s) so they can get started building the Metrics service in 21PI3.  

API ML Squad Plan:  
[Create Metrics Service #1098](https://github.com/zowe/api-layer/issues/1098)  

## Support Mainframe Password change  

* [Support Mainframe Password change #1377](https://github.com/zowe/api-layer/issues/1377)  
Facilitation and support for mainframe password changes originating from clients. Password change facility that can scale regardless of the security provider in place (z/OSMF, SAF Direct, etc).  

API ML Squad Plan:  
[Add possibility to change passwords via SAF #815](https://github.com/zowe/api-layer/issues/815)  

## Sticky sessions for Zowe API ML services 

Route user requests such that future requests from that user are routed to the same service instance as the original request.  

API ML Squad Plan:  
tbd

## Zowe API ML to adopt and surface ESM's consolidated SAF Identity tokens 

* [Zowe API ML to adopt and surface ESM's consolidated SAF Identity tokens #1390](https://github.com/zowe/api-layer/issues/1390)  
Tyler / Zach is now enabled to open access to Zowe Conformant APIs via Zowe API ML using SAF Identity JWTs that are issued, validated, and managed directly by z/OS (ESM SAF).  

API ML Squad Plan:  
tbd


## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/21PI2)
