# Zowe Chat Squad - 22PI4 - (2022/10/25 - 2023/01/23)

The key focus areas for the Chat Squad this PI are supporting Technical Preview 1 and responding to user feedback, hardening the code, and starting on the path to GA (est. Late 23Q1 or early 23Q2).

## Technical Preview V1 release (Priority 1)
- [Deliver technical preview 1 on 2022/10/31](https://github.com/zowe/zowe-chat/issues/133)
- [Blog Series](https://github.com/zowe/zowe-chat/issues/137)

## User Feedback (Priority 1)
- [Interactive Design Mockups](https://github.com/zowe/zowe-chat/issues/93)
- [Hands-on Trials](https://github.com/zowe/zowe-chat/issues/36)

## Expand Plugin Extensibility (Priority 1)
- [Build out documentation and suggested best practices for writing Zowe Chat Plugins, and create a sample project](https://github.com/zowe/zowe-chat/issues/73)
  * The best practices and documentation should serve as a precuursor to conformance criteria later.
- Add support for new requirements
  * [custom authentication providers within plugins](https://github.com/zowe/zowe-chat/issues/132)

## Incident/alert/event support (Priority 1)
- [Merge in event notification client, and provide documentation explaining how event producers can use the event notification capability](https://github.com/zowe/zowe-chat/issues/128)
  * Discuss eventing requirements and capabilities with the Zowe community.

## Security enhancement (Priority 1)
- Authentication enhancement
- Authorization support

## Inline help support (Priority 1)
- [Add `help` command group](https://github.com/zowe/zowe-chat/issues/135)

## Address Technical Debt (Priority 1)
- Burn down techncial debt established in TP1, with the primary focus on expanded test suites and coverage.
- coding style & coding guideline update
- [infrastructure setup](https://github.com/zowe/zowe-chat/issues/1)
- [automation: CI/CD pipeline setup & automation testing](https://github.com/zowe/zowe-chat/issues/12)

## Features enhancement (Priority 2)
- [Query knowledge base error code for z/OS](https://github.com/zowe/zowe-chat/issues/14)
- operation workflow
- other actions for job 

## Documentation enhancement (Priority 2)
- [Administration guide](https://github.com/zowe/zowe-chat/issues/71)
- [Extending guide](https://github.com/zowe/zowe-chat/issues/73)


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
