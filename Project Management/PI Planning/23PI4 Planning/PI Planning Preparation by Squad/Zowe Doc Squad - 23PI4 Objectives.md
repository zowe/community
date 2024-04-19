# Zowe Doc Squad - 23PI4 PI Plan
(October 2023 - January 2024)

## Completion of improvements to server-side installation documentation 

23PI3 focused on four objectives to improve server-side installation:  
* Creation of Role-Based Zowe Prereq Articles
* Consolidation and Summarization of Security Requirements to one article: Address Security Requirements
* Creation of a detailed Zowe installation overview article
* Creation of scenario-based articles by installation method: Document four linear, co-located installations scenarios by method

Tasks to complete these objectives:

* Incorporate SME feedback of reorganized/refactored installation and configuration doc.  
* Draft an article 'Troubleshooting installation and configuration' with links to common solution procedures. Add links in the installation articles to this Troubleshooting guide.
* Investigate and draft content for z/OSMF security checklist.
* Add real-world examples to the various installation procedures. (Many of these examples can be provided with links to existing video content)
* For each installation method, add results of individual steps.
  (Criteria defined in Issue [#2963](https://github.com/zowe/docs-site/issues/2963)).

## Document tips on server install verification ([#2092](https://github.com/zowe/docs-site/issues/3092))

Provide directions of what to look for in output logs and in the browser to determine what server configuration is correct and operational. Specifically, this relates to the `zwe init` command group and subcommands (several of which require security admin permissions to run properly).

## Document the upgrade path between minor versions ([#2714](https://github.com/zowe/docs-site/issues/2714))

Users occasionally run into problems when upgrading the zowe versions. Prepare a page which would explain how you migrate from lower to higher versions, with one page per major version.
  
## V3 prep work (target release date: March 28, 2024)

- Continue to develop and execute a doc strategy for Zowe V3 content
  - Review content with squads, SMEs to determine scope of needed changes for V3 documentation
  - Draft V3 documentation where needed

## Consumer Awareness Section(s)
Determine how best to communicate important changes (deprecations, eliminations or new introductions) to the Zowe technology that may have an impact on Zowe Consumers (and Extenders). This may be in the form of a general section that links to embedded alerts near the related / applicable technical documentation or something else.

## Zen wizard doc
Provide ad-hoc technical writing assistance to web UI squad to begin developing content about the Zen wizard.

## Create Scenario-Based Article to Customize API ML ([#2967](https://github.com/zowe/docs-site/issues/2967))
Restructure the Advanced server-side configuration for API Mediation Layer to organize these config options by component. Articles should establish when and why the config is executed, and by which role (sys prog / security admin, etc.)

## CII Badge standards

- Write and/or edit content in Zowe CLI and Zowe Explorer documentation that has been flagged for enhancement in order to meet  CII Badge standards.

## Doc repo issues
- Continue to work on addressing and closing Doc repo issues

## Videos and blogs

Goal: Educate users through engaging content format - videos.

* Create a video for a new certificate configuration (ICSF) process. [#3207](https://github.com/zowe/docs-site/issues/3207)
* Publish a blog for the configuration process (ICSF). [#3208](https://github.com/zowe/docs-site/issues/3208)
* Investigate the redesign of medium.com/zowe to be more component-based. [#3209](https://github.com/zowe/docs-site/issues/3209)

* ## Dependencies

- Dependency on API ML squad and other contributors to assist with the Customize API ML section
- Dependency on SMEs, squads to help review needed content upgrades for Zowe V3
- Dependency on Zowe CLI, Zowe Explorer squads to update documentation for CII Badge standards.
* Dependency on demo video input contributors.
* Dependency on the developers who are involved with the legacy issues in doc site repository.




  
