# Zowe CLI Squad - 23PI1 - (2023/01/24 - 2023/04/24)

## CLI: Keytar replacement
Mainframe customers demand trustworthy storage of secure values in Zowe CLI. With the sunset of the Atom organization who supplied the Keytar package, we would require an alternative for secure credential storage.
#### CLI Squad Plan:
Implement a suitable replacement to the Keytar package with minimal impact to our end users

## CLI: Zowe CLI on Unix System Services
Mainframe customers like to experiment with Zowe w/o requiring desktop software (i.e. SYSPROGS want to run CLI commands on z/OS) as part of their experimentation or enterprise use with Zowe CLI
#### CLI Squad Plan:
Certify and document how to use of Zowe CLI on z/OS (USS)
  - Requires Daemon testing (USS executable) / zLinux daemon works
  - May require in-memory (or other?) credential management

## CLI: Cleanup the CLI and Imperative Backlogs
As a Zowe CLI user, I want a backlog where I can find relevant information about future enhancements I can expect, and where I can provide feedback as I find opportunities for improvement.
#### CLI Squad Plan:
We will continue to review the CLI and Imperative backlog to keep all issues current and relevant, while closing unplanned enhancement requests.

## CLI: Address upvoted issues
As a Zowe CLI user, I want my upvoted request to be addressed in a timely manner.
#### CLI Squad Plan:
Continue to review, prioritize, and implement:
  - Bugs: Severity High (and above)
  - Enhancements: Priority High (and above)
  - [Highly upvoted issues](https://github.com/zowe/zowe-cli/issues?q=is%3Aissue+is%3Aopen+sort%3Areactions-%2B1-desc)

## CLI: (STRETCH) Finalize the Jobs & Files Enhancements (deprioritized in favor of Keytar replacement efforts) 
As a Zowe CLI user, I want to perform more complex (jobs & files) tasks to reduce the amount of scripting and make interactive commands more efficient.
#### CLI Squad Plan:
Finalize the complex z/OS Jobs and z/OS Files commands (milestone)
  - CLI#1098  Extend zowe files copy data-set command to allow for copying across LPARs / z/OSMF instances enhancement
  - CLI#1097 Zowe Files Edit Data-Set and USS Files

## CLI: (STRETCH) Complete the CII Badge Requirements
This is a shared goal across all Zowe active squads. The goal is to achieve the Passing level of conformance and make progress towards the Silver badge. For more information, see: [zowe/community#1273](https://github.com/zowe/community/issues/1279).
#### CLI Squad Plan:
We will continue to work towrads the Gold CII badge requirements listed below:
  - Coverage (Statement 90%)

More information:
- Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
- Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
- Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

# Zowe CLI / Zowe SDK Roadmap

## (New) Keytar Replacement

- _What problem are you solving?_
  - Mainframe customers demand trustworthy storage of secure values in Zowe CLI. With the sunset of the Atom organization who supplied the Keytar package, we would require an alternative for secure credential storage.
- _What are you doing to solve it?_
  - Implement a suitable replacement to the Keytar package with minimal impact to our end users.
- _When do you plan to start the work?_
  - **CY23Q1**
- _When do you plan to deliver the solution?_
  - **CY23Q3** 

## (New) SDK Conformance

- _What problem are you solving?_
  - Mainframe developers are interested in extending the existing SDKs in order to create applications for their services.
- _What are you doing to solve it?_
Solidify the SDK Conformance guidelines for:
  - New Services (like CICS SDK)
  - New Programming languages (like Ruby SDK)
- _When do you plan to start the work?_
  - **CY23Q2**
- _When do you plan to deliver the solution?_
  - **CY23Q4** 

## (To be Started) Zowe CLI on Unix System Services (USS)

- _What problem are you solving?_
  - Mainframe customers like to experiment with Zowe w/o requiring desktop software (i.e. SYSPROGS want to run CLI commands on z/OS) as part of their experimentation or enterprise use with Zowe CLI
- _What are you doing to solve it?_
  - Certify and document how to use of Zowe CLI on z/OS (USS)
  - Would require in-memory (or other?) credential management otherwise credentials are in plain-text
- _When do you plan to start the work?_
  - **CY23Q1**
- _When do you plan to deliver the solution?_
  - **CY23Q4** (updated from **CY23Q2**)


## (Delayed) Complex z/OS Jobs and z/OS Files commands 

- _What problem are you solving?_
  - Customers are looking for CLI commands that perform more complex (jobs & files) tasks to reduce scripting and make interactive CLI commands more efficient
- _What are you doing to solve it?_
  - Introduce several new CLI commands capable of performing multiple tasks in a single command
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY22Q4** (delayed until **CY23Q1**)

## (Delayed) Golden CII Badge

- _What problem are you solving?_
  - The Zowe Project has not earned the golden CII Badge / a requirement from LF/OMP that ensures the Open Source project satisfies FLOSS (Free/Libre & &Open Source Software) [Best Practices criteria](https://bestpractices.coreinfrastructure.org/en/criteria)
- _What are you doing to solve it?_
  - Review requirements and take necessary actions to satisfy them for the gold badge level.
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY22Q4** (delayed until **CY23Q1**)

## (Completed) Zowe Client SDK: Python

- _What problem are you solving?_
  - Consumers of the SDK have requested enhancements to one of the languages (Python)
- _What are you doing to solve it?_
  - Further enhance the Python Zowe Client SDK to meet consumer needs.
- _When do you plan to start the work?_
  - **CY22Q2**
- _When do you plan to deliver the solution?_
  - **CY22Q4**

## (Carried over) Zowe App Store Participation

- _What problem are you solving?_
  - Zowe Consumers can’t quickly/easily (see what’s available) locate & install ALL of the available Zowe CLI conformant plug-ins AND the supported Zowe Client SDKs
- _What are you doing to solve it?_
  - Participating in the Zowe App Store
- _When do you plan to start the work?_
  - `CLI`: **CY22Q3**
  - `SDK`: **CY23Q4**
- _When do you plan to deliver the solution?_
  - `CLI`: **CY23Q4**
  - `SDK`: **CY24??**

## (Postponed) In-memory Credential Management & Identity Tokens

- _What problem are you solving?_
  - Some customers are not able to install the SCS for their credentials management OR prefer alternatives for credential management in support of internal policies
- _What are you doing to solve it?_
  - Provide customers with an alternative that securely (prompts for and) stores all secure properties w/o requiring the SCS.
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY23Q1** (postponed until Zowe V3)

## (Postponed) Zowe CLI Containerization

- _What problem are you solving?_
  - Customers want to invoke CLI commands in automation/orchestration tools like Jenkins w/o having to install all of the pre-requisite technology on their desktop or server and do not have the knowledge to configure a docker file from scratch. OR Simply, it’s too difficult to create Zowe CLI-enabled Jenkins pipelines (the script is easy, but the rest of the work isn’t)
- _What are you doing to solve it?_
  - Provide a dockerfile image [that includes the configured prerequisite technology which can be customized for images and used for pipelines.
  - Requires Daemon testing (USS executable) / zLinux daemon works
  - Would require in-memory (or other?) credential management otherwise credentials are in plain-text
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY23Q1** (Postponed indefinitely)
