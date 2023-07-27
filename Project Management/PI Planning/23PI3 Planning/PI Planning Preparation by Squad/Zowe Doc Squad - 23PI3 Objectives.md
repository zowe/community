# Zowe Doc Squad - 23PI3 (August 2023 October 2023)

## Improve server-side installation documentation based on user feedback

- Create scenario-based articles by installation method:
  Document four linear, co-located installations scenarios by method:
    * Install Zowe via z/OSMF (from PSWI & SMP/E Workflow)
    * Install Zowe via SMP/E
    * Install Zowe via Convenience Build
    * Install Zowe via Container 
    
    (Criteria defined in Issue [#2960](https://github.com/zowe/docs-site/issues/2960))

- Create a detailed Zowe installation overview article.
  Elements in this overview to include:
    * End-to-end install/config flow diagram
    * Roles & Responsibilities
    * Zowe Key Terms & Concepts: Zowe runtime, Zowe Application Framework, Zowe API Mediation Layer, Z Secure Services (ZSS), Zowe Cross Memory Server
    * Technology Needs: YAML, node.js, USS background details
    * Install Methods Explained

    (Criteria defined in Issue [#2961](https://github.com/zowe/docs-site/issues/2961)).

- Create Role-Based Zowe Prereq Articles   
  Under a parent topic entitled 'Prepare for Installation' (formerly 'System requirements') define the specifc role(s) responsible behind these child topics:
    * Address z/OS Requirements
    * Address Security Requirements
    * Address USS Requirements
    * Address node.js Requirements
    * Address Storage Requirements
    * Address Network Requirements

  This enhancement request comes directly from user feedback received during the Spring 2023 Zowe Server Installation Study. (Criteria defined in Issue [#2962](https://github.com/zowe/docs-site/issues/2962)).

- Consolidate and Summarize Security Requirements to one article: Address Security Requirements.
    * List ALL security needs. For ex: user IDs, classes, resource setup, certs, keyrings, STC, USS permissions, passtickets, MFA, user IDs. 
    * Note which security reqs that the admin can address before and/or during the installation.
    * Include diagram showing the full security ecosystem + touch points.
    * Include links to verify that configuration is complete. Include expected output. 

   (Criteria defined in Issue [#2963](https://github.com/zowe/docs-site/issues/2963)). 

## Completion and validation of certificate configuration documentation

Articles in the User Guide section include:
  * Configuring Certificates 
  * Certificate configuration scenarios 
  * Generating and Importing Certificates
  * Advanced/Enterprise Certificate Configuration
  * Using Certificates

Also additions to the getting-started section:
  * Zowe Certificates Overview
  * High Availability 
  * Zowe User Authentication
  * Zowe Security Overview

  **Tasks:**
  * Perform a review of [Zowe secure setup and configuration](https://docs.zowe.org/stable/getting-started/zowe-secure-setup/).
  * Draft a chapter for Security Configuration in the user-guide section. 
  * Include validation steps where possible.
  * Draft an article 'Troubleshooting installation and configuration' with links to 

  * Begin to explore creation of a migration guide (from v1 to v2)

## Consumer Awareness Section(s)
Objective: Determine how best to communicate important changes (deprecations, eliminations or new introductions) to the Zowe technology that may have an impact on Zowe Consumers (and Extenders). This may be in the form of a general section that links to embedded alerts near the related / applicable technical documentation or something else.

## Zowe Issue Triaging/Handling Guide (stretch)

* Develop the Issue Triaging/Handling Guide to help contributors understand the criteria and process for triaging and assigning issues across repos. ([TSC Issue](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/issues.md#issues))
 
 ## CII Badge standards

- Identify areas in Zowe CLI and Zowe Explorer documentation that need changes in order to meet  CII Badge standards.

- Develop documentation strategy to make needed modifications.

## Zowe CLI authentication mechanisms

- Document order for authentication mechanisms used in Zowe CLI.

## Videos

Goal: Educate users through engaging content format - videos.

Create scenario-based demo videos for Zowe certificate configuration.

Create scenario-based demo videos for Zowe security configuration.

Create demo videos for Zowe extensions. 

## Dependency

* Dependency on API ML squad and other contributors to finish the improvement in install and config documentation on doc site.

* Dependency on demo video input contributors.

* Dependency on the developers who are involved with the legacy issues in doc site repository.
