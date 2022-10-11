# Zowe API ML Squad - 22PI4 Objectives (Oct 2022 to Jan 2023)

## Identity Federation #2481

* [Identity Federation #2481](https://github.com/zowe/api-layer/issues/2481)

As a Mainframe user, I want to log in just once to a corporate-wide IAM solution like Okta, Ping Identity, or KeyCloak and still be recognized by the Mainframe security under my Mainframe identity (to which my Mainframe access rights are bound).

As a Mainframe user, I want to be able to access all the Mainframe services protected by SAF and to which I'm entitled, in the same way as the non-mainframe services protected by the central IAM, using only my network (aka distributed) identity. Additionally, I want API ML to validate that the client application I'm using to access the mainframe resources is authorized for such access.

- [Package and publish BPXSMF as java API #2583](https://github.com/zowe/api-layer/issues/2583)
- [Use SMF Java API in Gateway to write a record #2584](https://github.com/zowe/api-layer/issues/2584)
- [SMF records cleanup #2585](https://github.com/zowe/api-layer/issues/2585)

## Build Spring Cloud Gateway as a replacement for the current Gateway #2029

* [Build Spring Cloud Gateway as a replacement for the current Gateway #2029](https://github.com/zowe/api-layer/issues/2029)  
Spring Cloud Zuul is in maintenance mode and not actively developed anymore. Spring Cloud has moved away from the Netflix Zuul OSS and will deprecate it at some point. The official replacement in the Spring Cloud ecosystem is the Spring Cloud Gateway (SCG). On completion of this Epic, the SCG application that will start properly and be able to take responsibility for the current API Gateway with respect to routing and authentication. The authentication functionality itself would remain for now the responsibility of the current API Gateway. The intention is for the SCG to eventually fully replace the existing gateway some point in the future (not in this PI!).  

In this PI we intend to create new service based on SCG and deploy it alongside the existing Gateway. 

API ML Squad Plan:  
- [Move AT-TLS processing to the Spring Cloud Gateway #2038](https://github.com/zowe/api-layer/issues/2038)  
- [Circuit Breaker in the SCG #2040](https://github.com/zowe/api-layer/issues/2040)
- [Retry request on another instance of service if service has multiple instances. #2041](https://github.com/zowe/api-layer/issues/2041)  
- [Handle CORS on behalf of the southbound services #2042](https://github.com/zowe/api-layer/issues/2042)
- [Support remapping of the x509 authentication #2044](https://github.com/zowe/api-layer/issues/2044)
- [Support remapping to the SAF token #2045](https://github.com/zowe/api-layer/issues/2045)
- [Support remapping to passtickets #2046](https://github.com/zowe/api-layer/issues/2046)
- [Support Bypassing the authentication #2047](https://github.com/zowe/api-layer/issues/2047)  


## Golden CII Badge

The goal is shared across the whole Zowe and it represents requirements from the Open Mainframe Project. 

* [Get Golden CII Badge](https://github.com/zowe/community/issues/1279)

API ML Squad Plan:

- [Increase coverage of branches to 80% #2488](https://github.com/zowe/api-layer/issues/2488)  
- [Increase coverage of statements to 90% #2487](https://github.com/zowe/api-layer/issues/2487)  
- [SPIKE: Verify the C code in the common-java is properly analysed #2486](https://github.com/zowe/api-layer/issues/2486)  
- [Increasing number of WARN logs #2429](https://github.com/zowe/api-layer/issues/2429)  

## Zowe / api-layer backlog management

* [Focus on priority / high impact issues in Github](https://github.com/zowe/api-layer/labels/22PI1)
