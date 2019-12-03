# API & Security Squad - 20PI1 Objectives (December 2019 to February 2020)

## Allow services to use encoded special characters in service URIs
* [Modify Gateway’s Spring Security firewall to conditionally support special characters in a service URIs](https://github.com/zowe/api-layer/issues/434)
* [Implement support in Gateway’s Tomcat for special characters in a service URIs](https://github.com/zowe/api-layer/issues/435)
* [Modify onboarding enablers to conditionally allow special characters in a service URIs](https://github.com/zowe/api-layer/issues/436)

## Implement API ML changes that will simplify installation and supportability of the upcoming LTS release.
* [Change package and config properties prefixes to org.zowe.apiml prefix](https://github.com/zowe/api-layer/issues/52)
* [z/OSMF JWT token utilization](https://github.com/zowe/api-layer/issues/433)
* [Import z/OSMF public certificate without need to access to z/OSMF keyring](https://github.com/zowe/api-layer/issues/224)

<!---
* [Add Endpoint to show Zowe version](https://github.com/zowe/api-layer/issues/345)
* [Enable "Try it out" and "Authorize" buttons in API Catalog](https://github.com/zowe/api-layer/issues/258)
* [Refresh static APIs functionality API Catalog UI](https://github.com/zowe/api-layer/issues/57)
* [Add CORS Headers Support for Login Endpoint](https://github.com/zowe/api-layer/issues/384)
-->

## Enhancements to API ML on-boarding processes
* [New Eureka metadata definition and consumption](https://github.com/zowe/api-layer/issues/380)
* [Clean up configuration for plain Java enabler](https://github.com/zowe/api-layer/issues/381)
* [Use Java enabler as a base for Spring Boot enablers](https://github.com/zowe/api-layer/issues/382)
* [Modify Catalog and Gateway to support new enabler versions](https://github.com/zowe/api-layer/issues/383)

## Improved Logging - Eliminate Reoccurring Messages
* [Suppress interaction messaging between API ML components during START UP](https://github.com/zowe/api-layer/issues/371)
* [Stop repetitive service status log messages](https://github.com/zowe/api-layer/issues/372)

## Advance the integration of Zowe Desktop with API Mediation Layer
* [Integrate zLUX with Zowe SSO for authentication](https://github.com/zowe/api-layer/issues/55)
* [Add zLUX into API Catalog](https://github.com/zowe/api-layer/issues/21)
* [Improve Zowe installation script to automatically integrate zLUX into APIML](https://github.com/zowe/api-layer/issues/19)
