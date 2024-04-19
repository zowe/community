# Zowe IntelliJ Squad - 23PI4 - (October 2023 - January 2024)

## Zowe Explorer plug-in for IntelliJ IDEA

### Zowe Explorer plug-in for IntelliJ IDEA - preparing to become a core component (v2 version of the plug-in)
- _What problem are you solving?_
    - The plug-in is already in a LTS state, the squad is already a GA squad, so it is the time to become a core component in the Zowe v3 release
- _What are you doing to solve it?_
    - Meet the requirements for the plug-in to become a core component, define the breaking changes, move to Zowe Client Kotlin SDK GA version 
- _When do you plan to start the work?_
    - **22Q4**
- _When do you plan to deliver the solution?_
    - **24Q1**
 
### Zowe Explorer plug-in for IntelliJ IDEA v1.1.1, v1.1.2 and v1.1.3 releases
- _What problem are you solving?_
    - After the next minor version of the plug-in is released, there are some new bugs arose
- _What are you doing to solve it?_
    - Together with some old ones, fix new bugs after v1.1.0 release
- _When do you plan to start the work?_
    - **23Q3**
- _When do you plan to deliver the solution?_
    - **23Q3 - 23Q4**
 
### Feature to use API ML in Zowe Explorer plug-in for IntelliJ IDEA
- _What problem are you solving?_
    - We've discovered some ways to work with the API ML, but the plug-in is missing some structure to work with it
- _What are you doing to solve it?_
    - Investigate, how to introduce possibility to work with a mainframe using API Mediation Layer
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

## Zowe Client Kotlin SDK

### Zowe Client Kotlins SDK release v0.5.0 - propose as the GA solution
- _What problem are you solving?_
    - The SDK needs to move to the GA stage with all the essentials ready to be used as the stable features
- _What are you doing to solve it?_
    - Prepare the final structure of the SDK, introduce the only correct way to use the SDK
- _When do you plan to start the work?_
    - **23Q3**
- _When do you plan to deliver the solution?_
    - **23Q4**

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

### Introduce LSP support since IntelliJ IDEA v2023.2
- _What problem are you solving?_
    - Starting from IntelliJ IDEA v2023.2, JetBrains team announced that there will be LSP support. We need to start using it in the plug-in instead of our own ANTLR/PSI logics in the code highlighting plug-ins
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
    - **23Q4**
 
### Increase code coverage up to 60%
- _What problem are you solving?_
    - The codebase of the plug-in is instantly growing, as well as the code coverage of it. The unit tests that cover our code should be increased before being in the GA stage
- _What are you doing to solve it?_
    - Increase code coverage on the existing functions up to at least 60%
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **23Q4**

## Zowe CICS plug-in for IntelliJ IDEA

### CICS Plugin MVP - continue to develop basic interactions
- _What problem are you solving?_
    - As an IntelliJ Platform user, I want to have access to CICS resources and to be able to work with them through the IntelliJ IDEA IDEs
- _What are you doing to solve it?_
    - Set up the environment to work with CICS, implement the new plugin as an extension to the Zowe Explorer plug-in for IntelliJ IDEA, implement a connection to the CICS through CMCI API
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **24Q1**

## UI plug-in for Jenkins in IntelliJ IDEA IDEs

### The v0.1.0 release of the plug-in
- _What problem are you solving?_
    - As IntelliJ and Jenkins user, I want to have a user interface inside IntelliJ IDEs to be able to work with Jenkins through the IntelliJ IDE, that supports mainframe-specific functions
- _What are you doing to solve it?_
    - Implement the basic design of the user interface to interact with Jenkins, implement interaction with pipelines
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **24Q3**

## COBOL language support in IntelliJ IDEA

### COBOL plug-in MVP
- _What problem are you solving?_
    - There is no COBOL language support plug-in in IntelliJ yet
- _What are you doing to solve it?_
    - Design and implement an MVP of the plugin
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **24Q2**
