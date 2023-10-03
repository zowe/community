# Zowe Doc Squad - 23PI4 Pre-PI Plan
(October 2023 January 2024)

## Completion of improvements to server-side installation documentation 

23PI3 focused on four objectives to improve server-side installation:  
* Creation of Role-Based Zowe Prereq Articles
* Consolidation and Summarization of Security Requirements to one article: Address Security Requirements
* Creation of a detailed Zowe installation overview article
* Creation of scenario-based articles by installation method: Document four linear, co-located installations scenarios by method

Tasks to complete these objectives:

* Complete draft of article Address Security Requirements
    * Include diagram showing the full security ecosystem + touch points. 
* Draft an article 'Troubleshooting installation and configuration' with links to common solution procedures. Add links in the installation ariticles to this Troubleshooting guide.
* Add real-world examples to the various installation procedures
* For each installation method, add outcome of individual steps.
  (Criteria defined in Issue [#2963](https://github.com/zowe/docs-site/issues/2963)).

## Reorganize Configuration topics:

* Configuring Zowe z/OS Components
* Configuring certificates
* Configuring High Availability 

* Reorganize the sidebar to follow the full sequence to configure z/OS Components (and include links to next steps in the configuration process):
  (Create parent articles for the 2 options to initalize Zowe z/OS runtime. Ensure consistent article naming from the installation checklist to the article that outlines the procedure.)
  
  **Configure z/OS Componenents Sequence**
  1. Use one of the following options to initialize Zowe z/OS runtime.
    * Option 1: Initialize Zowe maunally using zwe init command group
    * Option 2: Configure Zowe with z/OSMF workflows
  2. Configure the z/OS system for Zowe
  3. Grant users permission to access z/OSMF
  4. Install and configure the Zowe cross memory server (ZWESISTC) 
  
## V3 prep work (target release date: March 28, 2024)

- Continue to develop and execute a doc strategy for Zowe V3 content
  - Assign specific content to individual writers to shepherd through the V2-V3 upgrade process
  - Review content with squads, SMEs to determine scope of needed changes for V3 documentation
  - Begin V3 documentation

## Consumer Awareness Section(s)
Objective: Determine how best to communicate important changes (deprecations, eliminations or new introductions) to the Zowe technology that may have an impact on Zowe Consumers (and Extenders). This may be in the form of a general section that links to embedded alerts near the related / applicable technical documentation or something else.

## CII Badge standards

- Write and/or edit content in Zowe CLI documentation that has been flagged for enhancement in order to meet  CII Badge standards.
- Write and/or edit content in Zowe Explorer documentation that has been flagged for enhancement in order to meet  CII Badge standards.

## Doc repo issues
- Continue to work on addressing and closing Doc repo issues

## Stretch Objectives

### Zowe issue triaging/handling guide (stretch)
- Develop the Issue Triaging/Handling Guide to help contributors understand the criteria and process for triaging and assigning issues across repos. ([TSC Issue](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/issues.md#issues))

### Validation of certificate configuration documentation (stretch)

  **Tasks:**
  * Perform a review of [Zowe secure setup and configuration](https://docs.zowe.org/stable/getting-started/zowe-secure-setup/).
  * Draft a chapter for Security Configuration in the user-guide section. 
  * Include validation steps where possible.

## Dependencies

- Dependency on SMEs, squads to help review needed content upgrades for Zowe V3
- Dependency on Zowe CLI, Zowe Explorer squads to update documentation for CII Badge standards.


## Videos

Goal: Educate users through engaging content format - videos.

Create scenario-based demo videos for Zowe certificate configuration.

Create scenario-based demo videos for Zowe security configuration.

Create demo videos for Zowe extensions. 

## Dependency

* Dependency on API ML squad and other contributors to finish the improvement in install and config documentation on doc site.

* Dependency on demo video input contributors.

* Dependency on the developers who are involved with the legacy issues in doc site repository.

## 23PI3 Accomplishments

- Created Role-Based Zowe Prereq Articles   
  Under a parent topic entitled 'Prepare for Installation' (formerly 'System requirements') define the specifc role(s) responsible behind these child topics:
    * Address z/OS Requirements
    * Address Security Requirements
    * Address USS Requirements
    * Address node.js Requirements
    * Address Storage Requirements
    * Address Network Requirements
    * Address Browser Requirements

  This enhancement request comes directly from user feedback received during the Spring 2023 Zowe Server Installation Study. (Criteria defined in Issue [#2962](https://github.com/zowe/docs-site/issues/2962)).

- Improved server-side installation documentation based on user feedback

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


  
