# Zowe Event Management - 24PI1 - (2024/01/23 - 2024/04/22)

The primary goal for an Event Management Squad this PI is establishment and technical preview enablement; tasks like building a backlog, determining who may be able to contribute, and bringing workgroup POCs towards a technical preview state as soon as reasonable. Therefore, the technical work items presented in this PI Plan are modest, and the longer term roadmap will be more effective at understanding the longer vision for the future of Event Management.

## Technical Preview 1

End-to-end Zowe Event Management solving a simple use case - end-of-job notifications for users of Zowe Explorer for VSCode. Limited feature set within Zowe Event Management. 

### Project Setup
- [Migrate Workgroup POC Code to a new Monorepo]()

### Kafka Z Distribution
- [Kafka PAX Automation - Build]()
- [Kafka PAX Automation - Test]()

### Install and configuration
- [Kafka Configuration Basic Documentation]()

### Kafka End-of-job Producer
- [Zowe Kafka Client Library - Java]()

### Kafka SAF Module
- [Kafka SAF Authentication Module  - JZOS]()

## Roadmap Items

### Technical Preview 1 (Epic)
- What problem are you solving? 
  * <To be filled out>
- What are you doing to solve it?
  * <To be filled out>
- When do you plan to start the work? 
  * 24Q1
- When do you plan to deliver the solution? 
  * 24Q3

#### Kafka Installable on z/OS, z/Linux
- What problem are you solving? 
  * For customers to try our technical preview, they must have the option of deploying the full stack on Z.
- What are you doing to solve it?
  * Creating a Kafka PAX and TGZ usable on z/OS and z/Linux, respectively.

#### Kafka Install Guide, Configuration Scripts for z/OS
- What problem are you solving? 
  * Kafka can be complicated to configure, especially for those new to the software.
- What are you doing to solve it?
  * Creating tailored documentation and tooling which simplify the configuration experience. 

#### Kafka SAF Authentication Support
- What problem are you solving? 
  * Kafka's default identity manager is flat files on disk, or 3p OIDC integrations.
- What are you doing to solve it?
  * Creating a module extended Kafka APIs which supports SAF as identity provider.

#### Zowe + Kafka End-of-job Producer
- What problem are you solving? 
  * Client-side UI driven apps (Zowe Explorer, IntelliJ) cannot receive end-of-job notifications from MF.
  * For users to try out our technical preview, we should have a use case that benefits them.
- What are you doing to solve it?
  * Creating an end-of-job producer using Kafka client libraries.

#### Zowe Explorer Experimental Event Mgmt Support
- What problem are you solving? 
  * Zowe Explorer should support displaying end-of-job events if Zowe Event Management is available.
- What are you doing to solve it?
  * Creating an optional, opt-in integration in Zowe Explorer for displaying end-of-job events. Existing UX unchanged.


## Future Backlog

### Kafka Z Distribution
- [Kafka zLinux Automation - Build]()
- [Kafka zLinux Automation - Test]()

### Install and Configuration
- [Kafka Configuration Guided Tool]()

### Kafka End-of-Job Producer
- [Kafka Java Producer Shell - z/OS]()
- [End-of-job Event Stream]()

### Kafka SAF Module
- [Kafka SAF Authorization Module - JZOS]()
- [Kafka SAF Authorization Module - APIML]()
- [Kafka SAF Authentication Module - APIML]()

### Zowe Explorer
- [Zowe Explorer for VSCode - End-of-job Client]()