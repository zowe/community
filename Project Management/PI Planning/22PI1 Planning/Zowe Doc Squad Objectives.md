# Zowe Doc Squad - 22PI1 Objectives (February 2022 to April 2022)

### Epic: [Zowe v2 documentation](https://github.com/zowe/docs-site/issues/1826) 

Goal: Create and publish V2 release documentation. Help V1 users and extenders understand V2 changes and migrate smoothly. Allow V2 users to get started successfully. 

Plan: Create a detailed V2 doc plan (topics, doc change owners, timeline, freeze date, review and GA dates) and make the V2 doc collaboration process clear. 

Tasks:

- Redesign the Get started section. 
  - Educate V1 users all the changes (what's new in V2)
  - Provide clear path for V1 users (migration path per component)
  - Provide V2 related FAQs
  - Quick start with V2
  - Consolidate and publish educational resources about V2 (videos, blogs, etc.)

  > Dependency: 
  > - Onboarding squad (for education resources and FAQs)
  > - Component squads - APIML, webUI, CLI, Explorer + Systems squad (for migration paths)

- Document new z/OS component installation process
  - [Installing Zowe from convenience build](https://github.com/zowe/docs-site/issues/1987)
  - [Rewrite for v2 Installing Zowe SMP/E build](https://github.com/zowe/docs-site/issues/1988)
  - [Rewrite for v2 Installing Zowe SMP/E with z/OSMF workflow](https://github.com/zowe/docs-site/issues/1989)
  - [Rewrite for v2 Configuring Certificates](https://github.com/zowe/docs-site/issues/1990)
  - [Rewrite the Cross Memory Service (ZIS) install and config chapters for v2](https://github.com/zowe/docs-site/issues/1991)
  - [Remove "Creating and configuring Zowe instance directory" as this isn't relevant in v2](https://github.com/zowe/docs-site/issues/1992)
  - [Rewrite "Installing and starting the Zowe started task ZWESVSTC"](https://github.com/zowe/docs-site/issues/1993)
  - [Rewrite "Configure Zowe with z/OSMF workflows" to v2](https://github.com/zowe/docs-site/issues/1994)
  - [Rewrite "Verifying Zowe installation on z/OS"](https://github.com/zowe/docs-site/issues/1995)
  - [Rewrite "Stopping the Zowe server components started task"](https://github.com/zowe/docs-site/issues/1996)
  - [Rewrite "Upgrading the z/OS System for Zowe"](https://github.com/zowe/docs-site/issues/1997)
  - [Rewrite "Uninstalling Zowe from z/OS" for v2](https://github.com/zowe/docs-site/issues/1998)
  - [Rework "Installation Roadmap" for v2](https://github.com/zowe/docs-site/issues/1999)
  - [Rework "Planning the installation" for v2](https://github.com/zowe/docs-site/issues/2000)
  
  > Dependency: Systems squad, Joe Winchester

- Document new features in V2 
  - How to use, extend, troubleshoot
  - Any changes with CLI reference, API reference, messages

  > Dependency: Component squads

- Clear V1 only information
  - Audit V2 documentation to identify any reference to V1 only config or feature

- Publish V2 documentation
  - Add a `v2.0 LTS preview` option in the version picker before GA
  - Add a `v2.0 LTS` option in the release drop-down list (paralell to V1 releases) when GA

### Content enhancements

Goal: Improve the documentation to provide better experience and help users find what they need more efficiently. 

- Implement the doc filtering feature to allow users to browse documentation based on need 
   - Status: PoC ready, needs implementation
   - Scope: Installation topics

- Create a glossary of terms so that new users can understand the Zowe fundamentals 
   - Status: in progress
   - Scope: Get started and Setup sections in 22PI1

- webUI specific: More error codes for ZSS, app-server and desktop

   > Dependency: webUI squad

- Consolidate Zowe API documentation and publish them in Zowe docs so users can more easily find and learn about them [#1645](https://github.com/zowe/docs-site/issues/1645)

  - Understand from component squads whether they have any API information, where they are located, how to read them before installation 
  - Create a Zowe API overview and direct users to the API docs
  - Provide an easy-to-find entry point to API overview on the doc site

  > Dependency: Component squads

### Videos

Goal: Educate users through more engaging content format - videos. 

- Update the Zowe overview video on zowe.org to eensure that it is up-to-date. (Owner: Sam)
- Finalize the Zowe demo video management guidelines. (Owner: Ashley)
- Top secret and ACF2 videos for certificates (Owner: Joe) 

### Content audit

Address content audit findings conducted in 21PI4 (style, experience, architecture, quality, etc.) 

- Scope: Get started and Setup sections in 22PI1

### High-impact GitHub issues

Continue to address high-impact GitHub issues:

- [Zowe Must Remain Vendor-Neutral #1963](https://github.com/zowe/docs-site/issues/1963)
- Prioritize installation-related [issues](https://github.com/zowe/docs-site/issues?q=is%3Aopen+is%3Aissue+label%3A%22area%3A+zos-install-upgrade%22)
