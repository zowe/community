# Zowe IntelliJ Squad - 23PI1 - (2023/01/24 - 2023/04/24)

## IntelliJ: Plugin v1 as an LTS

The latest version of IntelliJ (2022.3) uses Java 17, that makes the plugin v0.3 incompatible with this version of
IntelliJ. Along with the new version of the plugin, it is supposed to start an LTS and support for the IntelliJ IDEs
2022.3 and later.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q1)

Introduce the new version of the plugin, fix incompatibility
issue ([#108](https://github.com/zowe/zowe-explorer-intellij/issues/108)), become LTS

## IntelliJ: Reveal Kotlin SDK

As a part of Zowe community, I want the Zowe Client Kotlin SDK to be available publicly as the binary to be able to use
it as a Maven or Gradle dependency.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q1)

Publish the Kotlin SDK to Artifactory.

## IntelliJ: API ML usage

As a Zowe Explorer IntelliJ user, I want to be able to make a connection to a mainframe using API ML and use the plugin
with this kind of connection.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q1)

Set up the environment to work with API ML, implement a connection through the API ML, implement a tree view of
datasets, USS files and JES jobs.

## IntelliJ: CICS Plugin - basic interactions + tree for CICS resources

As an IntelliJ Platform user, I want to have access to CICS resources and to be able to work with them through the
IntelliJ.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q1)

Set up the environment to work with CICS, implement the new plugin as an extension to the Zowe Explorer IntelliJ,
implement a connection to the CICS through CMCI API, implement tree view of the CICS resources.

## IntelliJ: Jenkins Plugin v1.2

As IntelliJ and Jenkins user, I want to have at least basic declarative syntax implemented to work with a mainframe.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q1)

Define the functions to be implemented in the Jenkins Plugin v1.2, implement the functions.

## IntelliJ: Jenkins Plugin UI in IntelliJ

As IntelliJ and Jenkins user, I want to have a user interface inside IntelliJ IDEs to be able to work with Jenkins
through the IntelliJ IDE, that supports mainframe-specific functions.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q2)

Implement the basic design of the user interface to interact with Jenkins, implement interaction with pipelines.

## IntelliJ: JCL Highlight v0.1.0

As an IntelliJ Platform user, I want to have a basic JCL Highlight right inside IntelliJ IDEs.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q1)

Finish the JCL Highlight plugin MVP, implement the plugin as the extension of the Zowe Explorer IntelliJ.

## IntelliJ: Code coverage increase to normal values (at least 50-60)

As a Zowe Explorer IntelliJ developer, I want my code to be covered with autotests at least for 50% to avoid bugs in the
existing code and in the code to be written.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q2)

Cover the code with autotests for at least 50% coverage.

## IntelliJ: GitHub issues - refine old ones, estimate/investigate current ones

As a Zowe Explorer IntelliJ user, I want the issues to be triaged and addressed in case they are stale to avoid
duplications and improve users support.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q1)

Review, triage and refine the existing GitHub issues.

## IntelliJ: Conformance items finishing up and becoming GA squad

As a part of Zowe, I want my squad to be in the GA state to become a valuable part of the Zowe community.

#### IntelliJ Squad Plan: (estimate: 23Q1 - 23Q1)

Finalize the conformance items, prepare the evidence of readiness for the GA state.

# Zowe IntelliJ Squad Roadmap

## Zowe Explorer IntelliJ v1

- _What problem are you solving?_
    - There is no LTS version of the Zowe Explorer Intellij yet. It is supposed to set v1 as the LTS release.
- _What are you doing to solve it?_
    - Implement new features, such as TSO CLI, encoding support, etc.
- _When do you plan to start the work?_
    - **22Q2**
- _When do you plan to deliver the solution?_
    - **23Q1**

## JCL Highlight MVP

- _What problem are you solving?_
    - There is no JCL Highlight in IntelliJ yet. It will introduce the new plugin.
- _What are you doing to solve it?_
    - Implement an MVP of the plugin
- _When do you plan to start the work?_
    - **22Q2**
- _When do you plan to deliver the solution?_
    - **23Q1**

## CICS plugin MVP

- _What problem are you solving?_
    - There is no UI for CICS resources and interactions with them using IntelliJ platform.
- _What are you doing to solve it?_
    - Implement an MVP of the plugin
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **23Q2**

## Jenkins IntelliJ UI plugin MVP

- _What problem are you solving?_
    - There is no proper UI to work with Jenkins through the IntelliJ with mainframe-specific functions.
- _What are you doing to solve it?_
    - Implement an MVP of the plugin
- _When do you plan to start the work?_
    - **23Q1**
- _When do you plan to deliver the solution?_
    - **23Q2**

## Zowe Client Kotlin SDK

- _What problem are you solving?_
    - There is no Zowe Client Kotlin SDK
- _What are you doing to solve it?_
    - Release publicly the first binary of the Kotlin SDK
- _When do you plan to start the work?_
    - **22Q2**
- _When do you plan to deliver the solution?_
    - **23Q1**
