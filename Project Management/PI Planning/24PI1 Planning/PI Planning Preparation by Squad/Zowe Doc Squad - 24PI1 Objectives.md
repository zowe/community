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

This objective relates to issue [#3164](https://github.com/zowe/docs-site/issues/3164) in the docs-site repo.
This is the final recommendation described in objectives the Zowe Server Install Study ([#2960](https://github.com/zowe/docs-site/issues/2960)) that remains to be addressed.

PR [#3345](https://github.com/zowe/docs-site/pull/3345) that relates to this section under review.

## Continue to prepare Zowe Docs for Zowe v3 

Address the restructuring, additions, and deprecations that apply to Zowe v3.

This relates to objective [#2970](https://github.com/zowe/docs-site/issues/2970) in the docs-site repo. 

Status: We have reviewed content with squads and SMEs to determine the scope of needed changes for V3 documentation. Some work is underway.

## Assist with Zen wizard doc

Provide ad-hoc technical writing assistance to web UI squad to begin developing content about the Zen wizard.

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
   
## Create content for Breaking Changes section under the new What's New tab

Draft content that will assist users with understanding breaking changes between v2 and v3.

## Videos

Goal: Educate users through videos.

* Create scenario-based demo videos for Zowe certificate configuration.

* Create scenario-based demo videos for Zowe security configuration.

* Create demo videos for Zowe extensions. 

## Dependencies

* Dependency on API ML squad to assist with API ML Use/Extending section restructuring  

* Dependency on demo video input contributors.

* Dependency on SMEs for collaboration with v3 readiness.

* Collaboration with Web UI on Zen Wizard doc.
