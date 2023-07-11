# Zowe IntelliJ Squad - 23PI2 - (2023/08/01 - 2023/10/23)

## Zowe Explorer plug-in for IntelliJ IDEA

### Zowe Explorer plug-in for IntelliJ IDEA v1.1.0 release
- _What problem are you solving?_
    - There are a plenty of features to introduce in the new minor version of the plug-in:
        - Virtual files synchronization process rework
        - “whoami” command before a connection is created
        - Change password feature (z/OS 2.5 and later)
        - “Edit” option instead of “Rename” for dataset and USS masks
        - “Duplicate” option for a dataset member
        - Dataset presets
        - Defaults for a dataset allocation dialog window
        - Hint after a connection is created
        - Dataset organization options clarification
        - Doubleclick for connection and working sets in Settings
        - “No items found” for dataset and USS masks
        - Full logging coverage
        - Code coverage with tests increase
- _What are you doing to solve it?_
    - Prepare, test and release the new version of the plug-in
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **23Q3**
 
### Zowe Explorer plug-in for IntelliJ IDEA v1.1.1 and v1.1.2 release
- _What problem are you solving?_
    - After the next minor version of the plug-in is released, we are expecting some new bugs to arise
- _What are you doing to solve it?_
    - Together with some old ones, fix new bugs after v1.1.0 release
- _When do you plan to start the work?_
    - **23Q3**
- _When do you plan to deliver the solution?_
    - **23Q3 - 23Q4**
 
### Feature to use API ML in Zowe Explorer plug-in for IntelliJ IDEA
- _What problem are you solving?_
    - We've discovered some ways to work with the API ML, but we don't have prepared structure to work with it in our plug-in
- _What are you doing to solve it?_
    - Investigate, how to introduce possibility to work with a mainframe using API ML
- _When do you plan to start the work?_
    - **22Q4**
- _When do you plan to deliver the solution?_
    - **23Q4**

### Code coverage increase to normal values (at least 50-60)
- _What problem are you solving?_
    - As a Zowe Explorer plug-in for IntelliJ IDEA developer, I want my code to be covered with autotests at least for 50% to avoid bugs in the existing code and in the code to be written
- _What are you doing to solve it?_
    - Cover the code with autotests for at least 50% coverage
- _When do you plan to start the work?_
    - **22Q3**
- _When do you plan to deliver the solution?_
    - **23Q4**

### Team Config v3 support?
- _What problem are you solving?_
    - With the Zowe v3 release, there will be introduced the new version of the team config
- _What are you doing to solve it?_
    - Implement support for the new version of team config
- _When do you plan to start the work?_
    - **23Q3**
- _When do you plan to deliver the solution?_
    - **23Q3 - 23Q4**

## Zowe JCL plug-in for IntelliJ IDEA

### Zowe JCL plug-in for IntelliJ IDEA release v0.2.0
- _What problem are you solving?_
    - There are some features to be implemented in v0.2.0 of the plug-in:
        - Live templates
        - JES2/JES3 statements
        - Code autocompletion
- _What are you doing to solve it?_
    - Prepare, test and release the new minor version of the plug-in
- _When do you plan to start the work?_
    - **23Q2**
- _When do you plan to deliver the solution?_
    - **23Q4**

### Migration to LSP since IntelliJ IDEA v2023.2
- _What problem are you solving?_
    - Starting from IntelliJ IDEA v2023.2, JetBrains team announced that there will be LSP support. We need to switch up to the LSP instead of defining our own ANTLR/PSI logics in the code highlighting plug-ins
- _What are you doing to solve it?_
    - Investigate and implement a new version of the Zowe JCL plug-in for IntelliJ IDEA with LSP support
- _When do you plan to start the work?_
    - **23Q3**
- _When do you plan to deliver the solution?_
    - **24Q1**

## Zowe zDevOps plug-in for Jenkins

### Zowe zDevOps plug-in for Jenkins release v0.2.0
- _What problem are you solving?_
    - There are some new features as classic freestyle jobs, new declarative steps, etc. to be implemented and released in the new version of the Zowe zDevOps plug-in for Jenkins
- _What are you doing to solve it?_
    - Release the v0.2.0 of the Zowe zDevOps plug-in for Jenkins
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **23Q3**

## Zowe CICS plug-in for IntelliJ IDEA

### CICS Plugin MVP - basic interactions + tree for CICS resources
- _What problem are you solving?_
    - As an IntelliJ Platform user, I want to have access to CICS resources and to be able to work with them through the
IntelliJ IDEA IDEs
- _What are you doing to solve it?_
    - Set up the environment to work with CICS, implement the new plugin as an extension to the Zowe Explorer plug-in for IntelliJ IDEA, implement a connection to the CICS through CMCI API, implement tree view of the CICS resources
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **23Q4**

## UI plug-in for Jenkins in IntelliJ IDEA IDEs

### The v0.1.0 release of the plug-in
- _What problem are you solving?_
    - As IntelliJ and Jenkins user, I want to have a user interface inside IntelliJ IDEs to be able to work with Jenkins through the IntelliJ IDE, that supports mainframe-specific functions
- _What are you doing to solve it?_
    - Implement the basic design of the user interface to interact with Jenkins, implement interaction with pipelines
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **24Q1**

## COBOL language support in IntelliJ IDEA
### COBOL plug-in MVP
- _What problem are you solving?_
    - There is no COBOL language support plug-in in IntelliJ yet
- _What are you doing to solve it?_
    - Design and implement an MVP of the plugin
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **23Q4**
