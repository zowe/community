# Zowe API ML & Security Squad - 20PI2 Objectives (March 2020 to June 2020)

## Enhancements to API ML Catalog service

* [Add the "Try it out" and "Authorize" Swagger UI functionality into the API Catalog](https://github.com/zowe/api-layer/issues/258)
Improve the API ML Catalog experience for our users, as they look into REST API services they can use for their new application, by enabling them to try out a REST API directly inside the Catalog, eliminating the need to use an external tool such as Postman.
* [Extend the API Catalog to support refresh of static REST API service definitions directly from the UI](https://github.com/zowe/api-layer/issues/57)
Enable the refresh of statically on-boarded service definitions in the API ML directly from the UI to improve the troubleshooting experience for users when integrating with API ML using static definitions.

## API ML support for SAF KEYRINGS

* [Ensure the API ML functions as expected when provided with a keyring instead of keystore](https://github.com/zowe/zowe-install-packaging/pull/1177)
Enhance the API ML to support SAF KEYRINGS, enabling it to store private keys and trusted certificates for all applications running on z/OS in RACF, Top Secret, ACF2, so that it's possible to upgrade from a zFS filesystem KEYSTORE configuration and have a more secure implementation.

## ZAAS client library development completion followed by ownership transfer to API ML squad 

* Provide Java library for the ZAAS to call ZAAS REST API from any Java 8 application
* Provide Spring library for ZAAS that can be used from any Spring Boot 2.x application such as SDK sample and integrates with Spring Security
* Handover to API ML Squad

## Improvements to our CI/CD automation 

* Research how to move API ML build and test automation to a single Zowe community pipeline

## Community Nurture 

* Bring more contributors to the API ML from the open community
* [Continue addressing LTS related issues in Github](https://github.com/zowe/api-layer/issues?q=is%3Aissue+is%3Aopen+label%3ALTSR)

