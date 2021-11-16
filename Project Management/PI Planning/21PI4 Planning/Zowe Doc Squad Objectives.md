# Zowe Docs Squad - 21PI4 Objectives (November 2021 to February 2022)

### 1. Support for Zowe v2 documentation

- Zowe.org updates as needed
- [Zowe documentation changes to support the v2 release](https://github.com/zowe/docs-site/issues/1826) 
   - documentation for v2 features
   - migration path

### 2. Improve installation documentation (Epic [#1624](https://github.com/zowe/docs-site/issues/1624))  

- [Separate keyring/keystore instructions [#1818]](https://github.com/zowe/docs-site/issues/1818)
- [Add more checklists and diagrams to guide users [#1619]](https://github.com/zowe/docs-site/issues/1619)
- [zos server upgrade page refactoring [#1635]](https://github.com/zowe/docs-site/issues/1635)
- [Consolidate all Install instructions in one place (#1585)](https://github.com/zowe/docs-site/issues/1585)
- [Improve Installing Zowe SMP/E doc](https://github.com/zowe/docs-site/issues/1637)

### 3. Implement the doc filtering feature

- Work in progress: [POC for docs filtering feature #1816](https://github.com/zowe/docs-site/pull/1816)
- [Gather a list of tags that apply to each component [#1847]](https://github.com/zowe/docs-site/issues/1847) 
   - Spike: Research and clarify the tags that are needed (component tags, download type tags, security manager tags, etc.)
- [Tag documentation, refactor some chapters for the filtering to work [#1767]](https://github.com/zowe/docs-site/issues/1767) 
   - Define the MVP for the filtering feature for PI4 
   - Allow filtering of component documentation
  
### 4. Other doc enhancements

- [Glossary of terms, key concepts that are linked to in doc so that people can understand the meaning of certain doc points](https://github.com/zowe/docs-site/issues/1319) 
- Task sheets in-doc to reduce need to read paragraphs before taking action
  - Spike: Clarify the scope, whether this is for all components, topics that need task sheets
  - If there are existing task sheets, ensure that the style is consistent.
  - Focus on server side tasks in PI4  (**Dependency:** WebUI squad) 
- webUI specific: More error codes for ZSS, app-server and desktop 
  - **Dependency:** WebUI squad 
- Add documentation for new plug-ins and incubator projects (ZEBRA, VSCode CICS extension, etc.)
  - **Dependency:** Incubator squad, Explorer squad 

### 5. Consolidate Zowe API documentation [#1645](https://github.com/zowe/docs-site/issues/1645)

- Work with squads to consolidate all Zowe API doc information (location, format, and so on) 
- Check against the published Swagger API doc to identify the ones that are only hosted in GitHub repos. Research the possibility of adding those APIs in the same manner. 
- Provide an easy to find entry point on the doc site to access all Zowe API docs

### 6. Stretch items

- [Produce short videos of Zowe z/OS components installation - for specific steps/tasks [#38]](https://github.com/zowe/docs-site/issues/38)
  - Evaluate the steps that will unlikely change, comprise a list 
  - Start with steps that are considered "stable" (unlikely to change)

  **Dependency:** Joe, webUI squad (for ZSS/Desktop specific configurations), APIML squad (for APIML specific configurations) 

- Revisit the Zowe overview video 
  - Ensure the Zowe overview video on zowe.org is up-to-date
  - Explore component videos that focus on more technical details 

- Define video management strategy
  - Assess the effort and whether each component has video requirements
  - Investigate the location for storing short demo videos and the process of maintaining them
