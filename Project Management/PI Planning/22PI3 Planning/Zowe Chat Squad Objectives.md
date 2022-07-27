# Zowe Chat Squad - 22PI3 Objectives (August 2022 to October 2022)

## PI Goal

Our goal this quarter is to deliver a Zowe ChatBot Technical Preview by the end of 22PI3 with a strong foundation for future expansion of features and capabilities. We want to use the technical preview to gather quality end-user feedback, which we'll use to define and prioritize Zowe ChatBot's future work. We have split this PIs development work into two parts: foundation spikes and capability / feature development.

<br />  

### Foundational Work 

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
- [Deployment Pipline](https://github.com/zowe/zowe-chat/issues/74)
- [Quality Gates](https://github.com/zowe/zowe-chat/issues/41)

#### Install Experience - Spike

The [Installation Research](https://github.com/zowe/zowe-chat/issues/62) spike will drive the requirements for a later issue on install and configuration. This issue will collect information on platforms (server, chat client) for installation, any respective platform idiosyncrasies, and their respective security requirements.

<br />

### Feature Development
<br />

#### Research Items

The [Technical Preview Research Epic](https://github.com/zowe/zowe-chat/issues/75) covers all of the the research items we must complete to finish implementation for the technical preview.

- [Research - Command Parsing](https://github.com/zowe/zowe-chat/issues/76)
  * The first technical preview of the Zowe ChatBot will support users entering commands in Zowe CLI based format. We would like to find a way to leverage existing Zowe CLI code to support this while using the Zowe CLI Node.JS SDK to execute the commands. 

- [Research - Supporting a subset of commands](https://github.com/zowe/zowe-chat/issues/77)

- [Research - Inline Help using Zowe CLI Node.JS SDK](https://github.com/zowe/zowe-chat/issues/78)

- [Research - Event-driven notifications](https://github.com/zowe/zowe-chat/issues/79)
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
- [Submit / Re-Submit Jobs](https://github.com/zowe/zowe-chat/22)
- [Stop Jobs](https://github.com/zowe/zowe-chat/22)
- [Delete Job Output](https://github.com/zowe/zowe-chat/82)


#### Datasets Commands

The [Dataset Commands Epic](https://github.com/zowe/zowe-chat/16) covers all the dataset functionality we are planning for the technical preview.

- [List Datasets](https://github.com/zowe/zowe-chat/83)
- [List USS Files](https://github.com/zowe/zowe-chat/84)
- [Create Dataset](https://github.com/zowe/zowe-chat/85)

#### Knowledge Base Commands

The [Knowledge Base Commands Epic](https://github.com/zowe/zowe-chat/14) covers all the knowledge base functionality we are planning for the technical preview. This is a new suite of functionality we would like to donate to Zowe CLI directly, not just as a plugin. We plan to bring this up with the team during the PI! This functionality lets users to take an error code they may see as part of a response to a given command, and query the z/OS Knowledge Center (public domain) for information on the error. This can be valuable when using the CLI interactively, and can be a contextual action within Zowe Chat. 

- [Knowldege Base API Implementation](https://github.com/zowe/zowe-chat/86)
- [Knowledge Base Command Structure / CLI Integration](https://github.com/zowe/zowe-chat/87)

#### z/OS Commands

The [z/OS Commands Epic](https://github.com/zowe/zowe-chat/15)  covers all the z/OS functionality we are planning for the technical preview.

- [Issue Command and Collect Response](https://github.com/zowe/zowe-chat/88)


### User Engagement

- [Present design mockups to users]()

- [Zowe Quarterly Webinar]()
  * We'd like to sync with the onboarding squad on what content we can provide.


## Not in Scope

- Internationalization and Localization
- [API Reference Documentation](https://github.com/zowe/zowe-chat/issues/72)

### Extender engagement

- Sample extender module

### User Engagement

- Hands-on ChatBot Trials
  - Investigate a test/demo environment we can have users register for to try out the bot
  - Idea: links / model from OMP COBOL Learning Course?

## Dependencies

- 

## Risks