# Zowe Doc Squad - 24PI1 - (2024/01/23 - 2024/04/22)

## Continue to prepare Zowe Docs for Zowe v3 

Address the restructuring, additions, and deprecations that apply to Zowe v3.

This relates to objectives [#3371](https://github.com/zowe/docs-site/issues/3371) and  [#2970](https://github.com/zowe/docs-site/issues/2970) in the docs-site repo. 

Status: We have reviewed content with squads and SMEs to determine the scope of needed changes for V3 documentation. Articles have been labeled according to their readiness and writers are working with their respective squads to apply changes as needed.

## Continue to suppliment the section for Troubleshooting Installation and Configuration 

This objective relates to issue [#3164](https://github.com/zowe/docs-site/issues/3164) in the docs-site repo.
This is the final recommendation described in objectives the Zowe Server Install Study ([#2960](https://github.com/zowe/docs-site/issues/2960)) that remains to be addressed.

PR [#3345](https://github.com/zowe/docs-site/pull/3345) that relates to this section under review.

## Assist with Zen wizard doc 

This relates to issue [#3396](https://github.com/zowe/docs-site/issues/3396)

Continue with the development of the Overview and Prerequisites sections. Provide ad-hoc technical writing assistance to web UI squad to begin developing content about the Zen wizard.

## Reorganize Using section for API Mediation Layer

This objective relates to issue [#3269](https://github.com/zowe/docs-site/issues/3269) in the docs-stie repo.

The proposed structure of this section based on use cases:

* **Single Sign On** (_Completed and published_)
	* JWT Token 
	* Client Certificates 
	* Personal Access Tokens (Includes the specifically PAT related APIs)	
* **MFA**
* **Routing** (_In progress_)
	* Routing requests to Rest APIs  
	* Websocket APIs
	* GraphQL APIs 
	* Multi-tenancy routing 
* **Learn more about APIs**
	* Service Information
	* Try it out + Code Snippets
* **Administration of APIs**
	* Static refresh
	* Onboarding via Wizard
* **Caching Service**

## Restucture Extending section for API Mediation Layer (_possible stretch_)

This objective relates to Issue [#3270](https://github.com/zowe/docs-site/issues/3270) in the docs-stie repo.

Proposed structure:

* **Onboard service to the API ML**
	* Java
		* Spring
		* Micronaut
		* No Framework (Plain Java)
		* Shared Config Properties
	* Node.js
	* Python
	* Statically without code changes (Not Recommended)
* **SSO Integration for service**
	* JWT Token
		* ZAAS Client
	* SAF IDT Token
	* x509
	* Passtickets (Not recommended)
* **Extend API ML**
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
