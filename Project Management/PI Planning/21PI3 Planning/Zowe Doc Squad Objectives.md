# Zowe Docs Squad - 21PI3 Objectives (July 2021 to October 2021)

### 1. Installation content improvement (Epic [#1624](https://github.com/zowe/docs-site/issues/1624)) 

**Goal:** 

Provide enriched, lightweight, and customized installation documentation to shorten the time of installing Zowe z/OS components.

**Tasks:**
- Address issues in the Zowe SMP/E doc [#1637](https://github.com/zowe/docs-site/issues/1637)
- Add detail for users not familiar with curl [#1622](https://github.com/zowe/docs-site/issues/1622) 
- Add instructions for how to check whether USS storage is full and also how to extend it [#1621](https://github.com/zowe/docs-site/issues/1621)
- Add more checklists and diagrams to guide users [#1619](https://github.com/zowe/docs-site/issues/1619)
- Produce short videos of Zowe z/OS components installation [#38](https://github.com/zowe/docs-site/issues/38)
- Personalize the Zowe installation doc to allow users to filter documentation based on their install scenarios [#1767](https://github.com/zowe/docs-site/issues/1767) 
  - Work with webUI squad to understand the filters and the method to tag topics
  - Tag topics according to the filters such as ESMs, prerequisites, Zowe component, optional feature, and type of task
  - Conduct usability test to gather user feedback

**Dependencies:** 
- Collaborate with the WebUI squad to build the filtering functionality into the doc framework

### 2. Refactor documentation (Epic [#1529](https://github.com/zowe/docs-site/issues/1529))

**Goal:** 

Refactor the installation and extending sections so that it's easier to understand the flow and navigate topics. 

**Tasks:**
- z/OS server upgrade page refactoring [#1635](https://github.com/zowe/docs-site/issues/1635)
- Refactor extending doc about APIML and App Framework
- Add Installation and Extending Doc for Zowe CLI @next Version [#1778](https://github.com/zowe/docs-site/issues/1778) 


### 3. Comprehensive and accessible Zowe API documentation [#1645](https://github.com/zowe/docs-site/issues/1645)

**Goal:** 

As a developer extending and contributing to Zowe, I would like a summary of each of the API functions without looking up the implementation of the function on GitHub. 

**Tasks:**
- Conduct more research to understand users' blocker and needs in consuming the current API information
- Work with squads to consolidate all Zowe API doc information (location, format, and so on) 
- Check against the published Swagger API doc to identify the ones that are only hosted in GitHub repos. Research the possibility of adding those APIs in the same manner. 
- Provide a single entry point on the doc site to access all Zowe API docs

**Dependencies:** 

Work with API ML Squad, Explorers squad, Web UI squad, CLI squad to gather the API doc information. 


### 4. Documentation accessibility [#1643](https://github.com/zowe/docs-site/issues/1643) 

**Goal:** 

Ensure that the documentation is accessible to people with disabilities. 

**Tasks:**

- Consolidate documentation accessibility guidelines and make them part of the Zowe doc style guide (in progress)
- Investigate accessibility tools for documentation in Markdown format
- Audit Zowe docs to address accessibility issues


