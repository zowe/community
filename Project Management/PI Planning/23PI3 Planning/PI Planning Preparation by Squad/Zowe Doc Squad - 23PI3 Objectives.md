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

   (Criteria defined in Issue [#2963](https://github.com/zowe/docs-site/issues/2963)). 

## Completion and validation of certificate configuration documentation

Articles include:
  * Zowe Security Overview
  * Determining your certificate configuration use case
  * Certificate configuration scenarios
  * Generating and Importing Certificates
  * Advanced/Enterprise Certificate Configuration
  * Using Certificates

## Zowe Issue Triaging/Handling Guide

* Develop the Issue Triaging/Handling Guide to help contributors understand the criteria and process for triaging and assigning issues across repos. ([TSC Issue](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/issues.md#issues))
 
## Videos

Goal: Educate users through engaging content format - videos. 
Create scenario-based demo videos for Zowe certificate configuration. 

## Zowe CLI

