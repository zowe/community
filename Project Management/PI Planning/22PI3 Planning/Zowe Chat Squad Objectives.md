# Zowe Chat Squad - 22PI3 Objectives (August 2022 to October 2022)

## PI Goal

Our goal this quarter is to deliver a Zowe ChatBot Technical Preview by the end of 22PI3 with a strong foundation for future expansion of features and capabilities. We want to use the technical preview to gather quality end-user feedback, which we'll use to define and prioritize Zowe ChatBot's future work. We have split this PIs development work into two parts: enablement spikes and capability / feature development.

<br />  

### Enablement Spikes 

This section represents cross-cutting or foundational aspects of the technology that require a large one-time effort to be implemented, which are expected to shift into definition of done criteria for future work items.

<br />  
  
#### Documentation Spike

The [Documentation Spike](https://github.com/zowe/zowe-chat/issues/19) covers the minimum documentation requirements for technical preview readiness. This includes the following:

- [Installation and Configuration Guide](https://github.com/zowe/zowe-chat/issues/70)
- [Administration Guide](https://github.com/zowe/zowe-chat/issues/71)
- [User Documentation](https://github.com/zowe/zowe-chat/issues/17)
- [Stretch: Extender Documentation](https://github.com/zowe/zowe-chat/issues/73)

#### Automation Spike

The [Automation / Pipelines Spike](https://github.com/zowe/zowe-chat/issues/12) covers the first set of builds which allow to build, test, and deploy Zowe ChatBot, and sets up basic quality gates. 

- [Project build and testing with npm scripts, gulp](https://github.com/zowe/zowe-chat/issues/42)
- [Build and Test Pipeline](https://github.com/zowe/zowe-chat/issues/43)
- [Stretch: Deployment Pipline](https://github.com/zowe/zowe-chat/issues/74)
- [Stretch: Quality Gates](https://github.com/zowe/zowe-chat/issues/41)

#### Install Experience - Spike

The [Installation Research](https://github.com/zowe/zowe-chat/issues/62) spike will drive the requirements for a later issue on install and configuration. This issue will collect information on platforms (server, chat client) for installation, any respective platform idiosyncrasies, and their respective security requirements.

<br />

### Feature Development
<br />

#### Research Items

The [Technical Preview Research Epic](https://github.com/zowe/zowe-chat/issues/75) covers all of the the research items we must complete to finish implementation for the technical preview.

- [Research - Command Syntax, Parsing, and Logic](https://github.com/zowe/zowe-chat/issues/76)
  * The first technical preview of the Zowe ChatBot will support users entering commands in Zowe CLI based format. The Zowe CLI SDK does not support command parsing, so we would like to evaluate our options for defining command structure in Zowe ChatBot. In the future, we may support different commands from Zowe CLI.
- [Research - Supporting a subset of commands](https://github.com/zowe/zowe-chat/issues/77)
- [Stretch: Research - Inline Help using Zowe CLI Node.JS SDK](https://github.com/zowe/zowe-chat/issues/78)
- [Stretch: Research - Event-driven notifications](https://github.com/zowe/zowe-chat/issues/79)
  * This research item's output will probably be implemented some time after the first technical preview.

#### Security Implementation

- [Authentication and Authorization Support using Passtickets](https://github.com/zowe/zowe-chat/issues/18) is in progress from last PI.
  * Initial Implementation:
    - Configuration via Files
    - Not using Zowe APIML login or Zowe ZSS /passticket API (yet)

#### Jobs Commands

The [Jobs Commands Epic](https://github.com/zowe/zowe-chat/10) covers all the jobs functionality we are planning for the technical preview.

- [View Job Output](https://github.com/zowe/zowe-chat/81)
- [List Jobs](https://github.com/zowe/zowe-chat/80)
- [Stretch: Submit / Re-Submit Jobs](https://github.com/zowe/zowe-chat/22)
- [Stretch: Stop Jobs](https://github.com/zowe/zowe-chat/22)
- [Stretch: Delete Job Output](https://github.com/zowe/zowe-chat/82)


#### Datasets Commands

The [Dataset Commands Epic](https://github.com/zowe/zowe-chat/16) covers all the dataset functionality we are planning for the technical preview.

- [List Datasets](https://github.com/zowe/zowe-chat/83)
- [List USS Files](https://github.com/zowe/zowe-chat/84)
- [Stretch: Create Dataset](https://github.com/zowe/zowe-chat/85)

#### Knowledge Base Commands

The [Knowledge Base Commands Epic](https://github.com/zowe/zowe-chat/14) covers all the knowledge base functionality we are planning for the technical preview. This is a new suite of functionality we would like to donate to Zowe CLI directly, not just as a plugin. We plan to bring this up with the team during the PI! This functionality lets users to take an error code they may see as part of a response to a given command, and query the z/OS Knowledge Center (public domain) for information on the error. This can be valuable when using the CLI interactively, and can be a contextual action within Zowe Chat. 

- [Stretch: Knowldege Base API Implementation](https://github.com/zowe/zowe-chat/86)
- [Stretch: Knowledge Base Command Structure / CLI Integration](https://github.com/zowe/zowe-chat/87)

#### z/OS Commands

The [z/OS Console Commands Epic](https://github.com/zowe/zowe-chat/15)  covers all the z/OS functionality we are planning for the technical preview.

- [Stretch: Issue Console Command and Collect Response](https://github.com/zowe/zowe-chat/88)

### User Engagement

- [Present design mockups to users]()
  * Upcoming SHARE feedback

- [Zowe Quarterly Webinar]()
  * We'd like to sync with the onboarding squad on what content we can provide for the webinar


## Dependencies

- Zowe CLI Squad 
  * We will have questions related to SDK functionality since we're using this to implement our first set of commands.
  * Questions about command handling and parsing, seeing if we canuse any existing technology.
  * Donating z/OS Knowledge Center functionality to the CLI SDK / CLI Core
- Zowe Systems Squad and Infrastructure
  * Help define automation
  * Ongoing initiatives for infrastructure pieces like public MS Teams environment. We have workarounds.
- Documentation Squad
  * Large documentation spike this PI
- Onboarding Squad
  * Webinar delivery

## Risks

- Some of the research results may result in a larger than expected stories, and there is high overall story volume this PI
  * Impact for both of the above: stretch items may not make it into the technical preview.



## Roadmap Items

### Extensibility
- What problem are you solving? 
  * Let users extend Zowe Chat with custom commands and services.
- What are you doing to solve it? 
  * Create a Zowe Chat Extension Guide, Sample Extension, and Conformance Program
- When do you plan to start the work? 
  * CY22Q4
- When do you plan to deliver the solution? 
  * CY22Q4

### Golden CII Badge Conformance
- What problem are you solving? 
  * Certifying release quality for Zowe Chat by adhering to best practices
- What are you doing to solve it? 
  * Investigating and implementing Golden CII badge requirements
- When do you plan to start the work? 
  * CY23Q1
- When do you plan to deliver the solution? 
  * CY23Q2

### Event-driven Notifications
- What problem are you solving? 
  * Allow Zowe Chat to push events to chat clients, such as a system alert.
- What are you doing to solve it? 
  * Building server-side capability for receiving push events and a common model for describing them.
- When do you plan to start the work? 
  * CY22Q4
- When do you plan to deliver the solution? 
  * CY23Q1

### Zowe APIML Integration
- What problem are you solving? 
  * Allow Zowe chat to leverage existing capabilities in Zowe APIML to enhance the overall value-prop of Zowe.
- What are you doing to solve it? 
  * Building an APIML Authn/Authz option and making Zowe chat a conformant APIML Web Service.
- When do you plan to start the work? 
  * CY23Q2
- When do you plan to deliver the solution? 
  * CY23Q3

### Zowe Web Desktop Integration
- What problem are you solving? 
  * Zowe Chat has a (small) web interface. Let users access it from within Zowe Desktop, so they can stay within Zowe services.
- What are you doing to solve it? 
  * Make Zowe Chat a conformant App Framework plugin, or build a thin conformant plugin for Chat. 
- When do you plan to start the work? 
  * CY23Q2
- When do you plan to deliver the solution? 
  * CY23Q3

### Containerized Distribution (x86, x390x)
- What problem are you solving? 
  * Zowe Chat may not need to run on bare metal MF once APIML authorization is complete. Containers can make install easier and more flexible in this case. 
- What are you doing to solve it? 
  * Building a containerized deployment, following Zowe's existing model w/ Kustomize.
- When do you plan to start the work? 
  * CY23Q3
- When do you plan to deliver the solution? 
  * CY23Q4

### Build a Demo Environment
- What problem are you solving? 
  * We would like to target the OMP's existing Slack user base for feedback on Zowe Chat.
- What are you doing to solve it? 
  * Create a "production-like" deployment of Zowe Chat which runs in OMP Slack, and is backed by open infrastructure. Preferably OMP.
- When do you plan to start the work? 
  * CY22Q4
- When do you plan to deliver the solution? 
  * CY23Q1 
