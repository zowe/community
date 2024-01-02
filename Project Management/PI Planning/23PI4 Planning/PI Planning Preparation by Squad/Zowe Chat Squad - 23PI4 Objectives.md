# Zowe Chat Squad - 23PI4 

No updates to report for this PI





-- Please ignore the below plan pending further refinement --

## Capabilities
### Incident Model and Event-Driven Notifications
- [Merge in event notification client, and provide documentation explaining how event producers can use the event notification capability](https://github.com/zowe/zowe-chat/issues/128)
  * Discuss eventing requirements and capabilities with the Zowe community.
### Inline help support 
- [Add `help` command group](https://github.com/zowe/zowe-chat/issues/135)

### Query z/OS Knowledge Base
- [Query knowledge base error code for z/OS](https://github.com/zowe/zowe-chat/issues/14)
### Improve Existing Features
- operation workflow
- other actions for job 

## Extensibility
### Expand Plugin Extensibility 
- [Build out documentation and suggested best practices for writing Zowe Chat Plugins, and create a sample project](https://github.com/zowe/zowe-chat/issues/73)
  * The best practices and documentation should serve as a precuursor to conformance criteria later.
- Add support for new requirements
  * [custom authentication providers within plugins](https://github.com/zowe/zowe-chat/issues/132)
## Quality Enhancements, Technical Debt
### Automation 
- [automation: CI/CD pipeline setup & automation testing](https://github.com/zowe/zowe-chat/issues/12)
- [automation: system tests]()
- [automation: persistent zowe chat environments]()

### Golden CII Badge & OpenSSF
- [Analysis of current badging level and gaps]()
- [OpenSSF Scorecard Investigation]()

## Documentation, Outreachs

### Documentation enhancement
- [Administration guide](https://github.com/zowe/zowe-chat/issues/71)
- [Extending guide](https://github.com/zowe/zowe-chat/issues/73)

### Intro to Zowe Chat blog series
- [Blog Series](https://github.com/zowe/zowe-chat/issues/137)

## Depedencies, Risks

- No dependencies identified on other squads
- No major risks identified as of kickoff 


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
