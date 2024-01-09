# Zowe Doc Squad - 24PI1 - (2024/01/23 - 2024/04/22)

## Reorganize Using section for API Mediation Layer

This objective relates to Issue [#3269](https://github.com/zowe/docs-site/issues/3269) in the docs-stie repo.

The proposed structure of this section based on use cases:

* Single Sign On 
	* JWT Token 
	* Client Certificates 
	* Personal Access Tokens (Includes the specifically PAT related APIs)	
* MFA
* Routing
	* Routing requests to Rest APIs  
	* Websocket APIs
	* GraphQL APIs 
	* Multi-tenancy routing 
* Learn more about APIs
	* Service Information
	* Try it out + Code Snippets
* Administration of APIs
	* Static refresh
	* Onboarding via Wizard
* Caching Service

## Continue to suppliment the section for Troubleshooting Installation and Configuration 

## Restucture Extending section for API Mediation Layer (_possible stretch_)

This objective relates to Issue [#3270](https://github.com/zowe/docs-site/issues/3270) in the docs-stie repo.

Proposed structure:

* Onboard service to the API ML
	* Java
		* Spring
		* Micronaut
		* No Framework (Plain Java)
		* Shared Config Properties
	* Node.js
	* Python
	* Statically without code changes (Not Recommended)
* SSO Integration for service
	* JWT Token
		* ZAAS Client
	* SAF IDT Token
	* x509
	* Passtickets (Not recommended)
* Extend API ML
	* Example: New SAF IDT Provider

## CII Badge standards

- Identify areas in Zowe CLI and Zowe Explorer documentation that need changes in order to meet  CII Badge standards.

- Develop documentation strategy to make needed modifications.
  
## Zowe Issue Triaging/Handling Guide (stretch)

* Develop the Issue Triaging/Handling Guide to help contributors understand the criteria and process for triaging and assigning issues across repos. ([TSC Issue](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/issues.md#issues)) 

## Videos

Goal: Educate users through videos.

* Create scenario-based demo videos for Zowe certificate configuration.

* Create scenario-based demo videos for Zowe security configuration.

* Create demo videos for Zowe extensions. 

## Dependency

* Dependency on API ML squad and other contributors to finish the improvement in install and config documentation on doc site.

* Dependency on demo video input contributors.

* Dependency on the developers who are involved with the legacy issues in doc site repository.
