# Zowe API ML & Security Squad - 21PI1 Objectives (February 2021 to May 2021)


## x.509 client certificate authentication support for API Mediation Layer
(in support of SECURITY theme)

* [X.509 client certificate authentication support for API Mediation Layer #704](https://github.com/zowe/api-layer/issues/704)  
Complete automated tests for ACF2 and TSS on Marist to move out of technical preview (released with 1.19). To do so we need to complete the required security set-up on Marist by translating RACF commands to ACF2 and TSS so they can be applied by Marist admins.

API ML Squad Plan:  
[SSO setup for ACF2 and TSS #952](https://github.com/zowe/api-layer/issues/952)  

**Dependency**  
System Squad  
[Authentication with client certificates on TSS. #1778](https://github.com/zowe/zowe-install-packaging/issues/1778)  
[Authentication with client certificates on ACF2. #1778](https://github.com/zowe/zowe-install-packaging/issues/1779)  

## High-availability support implementation
(in support of RESILIENCE theme)

* [API ML Squad Issue: Support for high availability / sysplex distributor in API Mediation Layer #705](https://github.com/zowe/api-layer/issues/705)  
Complete Caching API including implementing another persistent solution beyond VSAM and validate high availability for the API ML.

API ML Squad Plan:  
[HA: Gateway Session affinity](https://github.com/zowe/api-layer/issues/855)  
In case of stateful services, that cannot use caching api, Gateway should support session affinity.  
[HA: Validate Apiml & zOSMF HA/sysplex](https://github.com/zowe/api-layer/issues/858)  
Identification of necessary setup on TSS sysplex and manual test of HA solution to prove good functionality. This includes zOSMF HA setup as well.  
[HA: Distinguish Internal/External service accessibility](https://github.com/zowe/api-layer/issues/861)  
Some form of restriction for service accessibility is needed. This will serve the purpose of isolating the caching api from outside, since all services onboarded in Discovery are public now.  
[HA: ACF2 sysplex verification](https://github.com/zowe/api-layer/issues/864)  
Identification of necessary setup on ACF2 sysplex and manual test of HA solution to prove good functionality. This includes zOSMF HA setup as well.  
[HA: Caching API: Authenticate via certificates](https://github.com/zowe/api-layer/issues/891)  
The Caching Service at the moment accepts the JWT token issued by the API ML. The authentication provided by this token needs to be used to limit access to subset of key/value pairs. The API ML needs to properly translate the client certificates issued to the internal services to the user information used by the service.  
[HA: Select another persistent solution for Caching](https://github.com/zowe/api-layer/issues/980)  
Active MQ may be a valid option for persistent backend storage. The aim is to verify on the POC level whether this claim is valid. I want to verify that we can use the embedded Active MQ as a persistent solution in HA scenario.  
[HA: Caching service: Logging for production instance](https://github.com/zowe/api-layer/issues/1000)  
Set up production logs conforming to zowe log structure.  
[HA: Caching API - POC of selected alternative persistent solution #1128](https://github.com/zowe/api-layer/issues/1128)  
Verify on the POC level whether the selected alternative to VSAM chosen via Issue 980 can be used as a persistent solution in HA scenario.  

## AT-TLS aware Zowe API ML
(in support of SECURITY theme)

* [AT-TLS aware Zowe API ML #845](https://github.com/zowe/api-layer/issues/845)  
Integrate with the z/OS native AT-TLS component to better fulfill TLS security requirements coming from users.

## Zowe API ML Metrics dashboard MVP

* [Metrics Dashboard for ML Services #820](https://github.com/zowe/api-layer/issues/820)  
Allow Tyler, the Zowe API ML administator, to track the health and performance of the API ML.
An initial Metrics Service to include basic monitoring information, relying heavily on pre-configuration given by Netflix Hystrix and Turbine.

API ML Squad Plan:  
[Create a new optional "Metrics Service" that is linked in the Gateway's homepage](https://github.com/zowe/api-layer/issues/1098)  
[Retrieve HTTP metrics for each endpoint in each APIML service (core and onboarded) using Netflix Hystrix](https://github.com/zowe/api-layer/issues/867)  
[Aggregate Hystrix data using Neftlix Turbine](https://github.com/zowe/api-layer/issues/868)  
[Display HTTP metrics using the pre-built Hystrix and Turbine dashboards](https://github.com/zowe/api-layer/issues/868)    
[Create proof-of-concept system metrics collection using a specific system metrics collection service. Collect system metrics for the core APIML services, broken down on a per-service basis.](https://github.com/zowe/api-layer/issues/1101)  
[Require standard Gateway authentication to access new endpoints (includes "Metrics Service" endpoints as well as Hystrix and Turbine endpoints)](https://github.com/zowe/api-layer/issues/1101)    
[Run sanity tests for the "Metrics Service" on marist](https://github.com/zowe/api-layer/issues/1114)  
(From UX proposal) [A high level overview of the metrics dashboard with a quick written FAQ/tutorial](https://github.com/zowe/api-layer/issues/1045)  
(From UX proposal) [A prominent link to the appropriate Github location prompting users to give feedback/comment on desired metrics-related features. Alternatively/additionally, a link to a survey to get richer and lower friction feedback from users.](https://github.com/zowe/api-layer/issues/1100)  
(Stretch goal) [Display system metrics using a pre-built UI integration](https://github.com/zowe/api-layer/issues/872)  
(Stretch goal) Allow static configuration to enable/disable specific routes for metrics collection  

## Improve the API ML testing capability against different security configurations  
(in support of SECURITY theme)  

Test against all the key versions of zOSMF that actually change the authentication behavior and explore Ansible scripts that would allow the Squad to quickly deploy different configurations of the API ML thereby driving faster resolution of issues.  

API ML Squad Plan:  
[Improve the options for setup of the API Mediation Layer in different configurations #1119](https://github.com/zowe/api-layer/issues/1119)  
[Improve the mock of the zOSMF service #1120](https://github.com/zowe/api-layer/issues/1120)  
[zOSMF compatibility and verification #1122](https://github.com/zowe/api-layer/issues/1122)  
[Identify security sensitive Pull Requests #1123](https://github.com/zowe/api-layer/issues/1123)  

## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/21PI1)
