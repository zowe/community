# Zowe API ML & Security Squad - 20PI4 Objectives (October 2020 to January 2021)


## x.509 client certificate authentication support for API Mediation Layer
(in support of SECURITY theme)

* [X.509 client certificate authentication support for API Mediation Layer #704](https://github.com/zowe/api-layer/issues/704)
Zowe API ML can validate client certificates by using ESM to map the certificate with the user mainframe identity and issue a JWT

API ML Squad Plan:  
Sprint 1 - x509: Support the Client certificate authentication workflow through the ZSS #827

## High-availability support implementation
(in support of RESILIENCE theme)

* [API ML Squad Issue: Support for high availability / sysplex distributor in API Mediation Layer #705](https://github.com/zowe/api-layer/issues/705)
The usage of Dynamic Virtual IP Address (DVIPA) will ensure that if an instance of Gateway and/or Discovery fails on one system (LPAR1), the other system (LPAR2) continues to provide service functionality through a sysplex distributor.

API ML Squad Plan:  
Sprints 2-5 #857 through #863

**Dependency**
WebUI Squad and Zowe Launcher for [API ML Squad Issue: HA: Componentize start script per APIML service #862](https://github.com/zowe/api-layer/issues/862)

**Risk**
Lack of VSAM knowledge for [API ML Squad Issue: HA: Caching API: Vsam implementation #863](https://github.com/zowe/api-layer/issues/863) mitigated by assistance of Nayer from System Squad

## API versioning support reflected in the Zowe API ML Catalog
(in support of ADOPTION theme)

* [API versioning support reflected in the Zowe API ML Catalog #844](https://github.com/zowe/api-layer/issues/844)
API Catalog displays the major API versions of a service. The API ML gateway now offers the ability to use multiple versions of an API at the same time. This objective will see this reflected in the Catalog so that it displays the major API versions of a service. The recommended version from the service owner is shown by default.

API ML Squad Plan:  
Sprint 2

## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/20PI4)

## Zowe API ML Metrics dashboard (STRETCH)

* [Metrics Dashboard for ML Services #820](https://github.com/zowe/api-layer/issues/820)
Allow Tyler, the Zowe API ML administator, to track the health and performance of the API ML. 
A Minimum Viable Product that displays HTTP request information, such as traffic load, number of requests, request rate, error rate, etc. for each endpoint; displays system information such as CPU usage, memory usage, etc. for the core API ML services (Discovery, Gateway, and API Catalog); enables custom integrations for system information collection; make metrics collection optional based on startup configuration.

API ML Squad Plan:  
Sprint 3-6

## API ML as a standalone component (STRETCH)
* [Zowe API ML as a standalone component #856](https://github.com/zowe/api-layer/issues/856)
Improve adoption by allowing the post-install configuration and deployment of the API ML as a standalone component (from the current smpe package).

**Dependency**
WebUI Squad and Zowe Launcher

API ML Squad Plan:  
Sprint 5-6

