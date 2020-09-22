# Zowe API ML & Security Squad - 20PI3 Objectives (June 2020 to September 2020)


## x.509 client certificate authentication support for API Mediation Layer
(in support of SECURITY theme)

* [X.509 client certificate authentication support for API Mediation Layer #704](https://github.com/zowe/api-layer/issues/704)
Zowe API ML can validate client certificates by using ESM to map the certificate with the user mainframe identity and issue a JWT

API ML Squad Plan:  
Sprint 2 - (SPIKE) design composite APIML & SAF authentication  
Sprint 3 - (SPIKE) SAF certificate validation research  
Sprint 4 - (SPIKE) Research reloading KS/KR at runtime  
Sprint 5 - zOSMF Implementation  
Sprint 6 - SAF Implementation  

## Remove the dependency of Zowe API ML on z/OSMF for authentication and use SAF to obtain the JWT
(in support of SECURITY theme)

* [Support that APIML can be started without z/OSMF #472](https://github.com/zowe/api-layer/issues/472)
Instead of a call to z/OSMF, Zowe API ML will use SAF APIs to verify credentials. This will be implemented as an additional provider, the z/OSMF authentication provider will remain the default.

API ML Squad Plan:  
Sprint 3 - #472 - Implementation

## Zowe / api-layer backlog management

* [Focus on high priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/20PI3)


## Dependencies & Support for other Squads - 20PI3 Objectives (June 2020 to September 2020)


## Support System Squad Zowe Performance Testing Infrastructure and Pipelines Objective

* Performance Test Infrastructure and Pipelines. The Zowe community is able to generate release to release performance reports and make them available in the open community.

* Zowe End Users will be able to run a client application which helps them estimate their cost of running and Zowe, and fine-tune their Zowe performance based on estimated workload.

API ML Squad Plan:  
Sprint 1 - #1464 - Performance test suite requirements for components. APIML and ZAF.  
Sprint 6 - #645 - Performance test suite (test cases) for APIML.

## Support System Squad Research and PoC for high availability / sysplex distributor in API Mediation Layer
(in support of RESILIENCE theme)

* [System Squad Epic: High Availability #1467](https://github.com/zowe/zowe-install-packaging/issues/1467)
High Availability Research and POCs. We will formulate a definition of what High Availability means for Zowe, propose a design to reach High Availability, and begin a proof of concept effort for HA.

* [API ML Squad Issue: Support for high availability / sysplex distributor in API Mediation Layer #705](https://github.com/zowe/api-layer/issues/705)
The usage of Dynamic Virtual IP Address (DVIPA) will ensure that if an instance of Gateway and/or Discovery fails on one system (LPAR1), the other system (LPAR2) continues to provide service functionality through a sysplex distributor.

API ML Squad Plan:  
Sprint 1 - #1468 - Research user expectations (All Squads)  
Sprint 3 - #1470 - Research APIML HA
