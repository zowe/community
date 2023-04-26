# Zowe CLI Squad - 23PI2 - (2023/4/25 - 2023/07/24)

## Complex z/OS Jobs and z/OS Files commands 
Enable Zowe CLI users to perform more complex (jobs & files) tasks with single commands.

CLI Squad Plan:
- [ ] [Extend zowe files copy data-set command to allow for copying across LPARs / z/OSMF instances](https://github.com/zowe/zowe-cli/issues/1098)
- [ ] [zowe files edit data-set & zowe files edit uss-file](https://github.com/zowe/zowe-cli/issues/1097)

## Zowe SDKs (Node.js and Python)
Improve the experience for developers using and extending the Zowe Node.js and Python SDKs.

CLI Squad Plan:
- [ ] [Zowe SDK - Develop and publish sample Python SDK](https://github.com/zowe/zowe-cli/issues/1674)
- [ ] [Zowe SDK - Develop and publish sample Node.js SDK](https://github.com/zowe/zowe-cli/issues/1675)
- [ ] [Stretch] [Zowe SDK - Update SDK conformance documentation](https://github.com/zowe/zowe-cli/issues/1676)

### *[Stretch] Python SDK Enhancements*
- [ ] [Add support for Zowe v2 team configuration zowe-client-python-sdk](https://github.com/zowe/zowe-client-python-sdk/issues/148)

## Address Items in the CLI and Imperative Backlogs
Take action in accordance with Community Guidelines to support Zowe CLI users and extenders, resolve defects, and implement beneficial enhancements suggested by members of the Zowe community.

CLI Squad Plan:
#### *Enhancements*
- [ ] [Confirm / document combined config API use by extenders](https://github.com/zowe/zowe-cli/issues/913)
- [ ] [Improve user friendlyness error for listing members in a data set](https://github.com/zowe/zowe-cli/issues/935)
- [ ] [Research Secure Storage for Zowe CLI on USS](https://github.com/zowe/zowe-cli/issues/1673)
- [ ] [Add life-cycle hooks to the sample plug-in zowe-cli-sample-plugin](https://github.com/zowe/zowe-cli-sample-plugin/issues/84)
- [ ] [ProfileInfo: Add support for any properties specified in zowe.config.json](https://github.com/zowe/imperative/issues/899)
- [ ] [Stretch] [Add cause property to ImperativeError](https://github.com/zowe/imperative/issues/945)
- [ ] [Stretch] [Update Schema Architecture/Design](https://github.com/zowe/imperative/discussions/828)
- [ ] [Stretch] [Introduce enhancements supporting the ZE FTP Copy feature](https://github.com/zowe/zowe-cli-ftp-plugin/pull/131)

#### *Bugs*
- [ ] [IssueTso.issueTsoCommand incomplete response / data loss](https://github.com/zowe/zowe-cli/issues/690)
- [ ] [Invalid block size is used by zowe files create data-set-sequential](https://github.com/zowe/zowe-cli/issues/1439)
- [ ] [zowe files create ds always assume secondary space of 1 ](https://github.com/zowe/zowe-cli/issues/1595)
- [ ] [Stretch] [Progress bar not working in zowe deamon mode for some terminal types](https://github.com/zowe/imperative/issues/908)

#### *[Stretch] Community Upvoted*
- [ ] [Provide a way to perform zowe plugin verify plugin-name or equivalent to assure the provenance of installed software](https://github.com/zowe/zowe-cli/issues/1326)
- [ ] [CLI ZOS-FILES command should support GDGs](https://github.com/zowe/zowe-cli/issues/969)
- [ ] [Zowe requires password when using SSH key for SSH command](https://github.com/zowe/zowe-cli/issues/1034)
- [ ] [Fix overrides.CredentialManager:false inconsistencies](https://github.com/zowe/zowe-cli/issues/1469)
- [ ] [Unexpected command error when using SSH](https://github.com/zowe/zowe-cli/issues/1031)
- [ ] [Support the message transmission/reception API for TSO.](https://github.com/zowe/zowe-cli/issues/1566)
- [ ] [How to make sure that a file is deleted with one command?](https://github.com/zowe/zowe-cli/issues/866)
- [ ] [401 when logout with expired token](https://github.com/zowe/zowe-cli/issues/1041)
- [ ] [zowe plugins validate returns always RC=0](https://github.com/zowe/zowe-cli/issues/1299)
- [ ] [Documenting return values](https://github.com/zowe/zowe-cli/issues/1386)
- [ ] [Allow Daemon Colorize Setting](https://github.com/zowe/zowe-cli/issues/1379)
- [ ] [IZosFilesResponse in SDK Refers to Commands](https://github.com/zowe/zowe-cli/issues/865)

## OpenSSF Best Practices Badge
- [ ] [Zowe CII Badge items for Zowe CLI](https://github.com/zowe/zowe-cli/issues/1352)
  - Update shared Zowe spreadsheet with the latest information on the Zowe CLI project

#### Helpful links for OpenSSF Best Practices Badge criteria:
- Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
- Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
- Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

## [Stretch] Preparation for V3
- To be determined during PI planning based on capacity

# Zowe CLI / Zowe SDK Roadmap

## (Carry-over) Complex z/OS Jobs and z/OS Files commands 
- _What problem are you solving?_
  - Customers are looking for CLI commands that perform more complex (jobs & files) tasks to reduce scripting and make interactive CLI commands more efficient
- _What are you doing to solve it?_
  - Introduce several new CLI commands capable of performing multiple tasks in a single command
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY22Q4** (delayed until **CY23Q2**)

## (Carry-over) Gold OpenSSF Best Practices Badge (Formerly CII Best Practices Badge)
- _What problem are you solving?_
  - The Zowe Project has not earned the gold OpenSSF Best Practices Badge, a requirement from LF/OMP that ensures the Open Source project satisfies FLOSS (Free/Libre & Open Source Software) [Best Practices criteria](https://bestpractices.coreinfrastructure.org/en/criteria)
- _What are you doing to solve it?_
  - Review requirements and take necessary actions to satisfy them for the gold badge level
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY22Q4** (delayed until **CY23Q3**)

## (Carry-over) Keytar Replacement
- _What problem are you solving?_
  - Mainframe customers demand trustworthy storage of secure values in Zowe CLI. With the sunset of the Atom organization who supplied the Keytar package, we would require an actively maintained alternative for secure credential storage
- _What are you doing to solve it?_
  - Implement a suitable replacement to the Keytar package with minimal impact to our end users
- _When do you plan to start the work?_
  - **CY23Q1**
- _When do you plan to deliver the solution?_
  - **CY23Q3** 

## (Carry-over) Zowe CLI on Unix System Services (USS)
- _What problem are you solving?_
  - Mainframe customers like to experiment with Zowe without requiring desktop software (i.e. SYSPROGS want to run CLI commands on z/OS) as part of their experimentation or enterprise use with Zowe CLI
- _What are you doing to solve it?_
  - Certify and document how to use Zowe CLI on z/OS (USS)
  - Implement secure credential management, otherwise credentials are in plain-text
- _When do you plan to start the work?_
  - **CY23Q1**
- _When do you plan to deliver the solution?_
  - **CY23Q4**

## SDK Conformance and LTS Status
- _What problem are you solving?_
  - Mainframe developers are interested in extending the existing SDKs in order to create applications for their services
- _What are you doing to solve it?_
  - Solidify the SDK Conformance guidelines for:
    - New Services (like CICS SDK)
    - New Programming languages (like Kotlin SDK)
  - Prepare the SDKs technically and logistically for conformance
  - Apply for (and achieve) conformance for existing SDKs
  - Release the SDKs as LTS
- _When do you plan to start the work?_
  - **CY23Q2**
- _When do you plan to deliver the solution?_
  - **CY23Q4** 

## (Stretch) Zowe Client Mentorship Opportunity: Enhancing the Python SDK
- _What problem are you solving?_
  - Consumers of the Python SDK are requesting enhancements, including support for Zowe V2 team configuration files
- _What are you doing to solve it?_
  - Leverage the mentorship program to deliver enhancements to the existing SDK
- _When do you plan to start the work?_
  - **CY23Q2**
- _When do you plan to deliver the solution?_
  - **CY23Q4**

## Postponed Objectives
For more details, please see the [2023 PI1 Planning Objectives](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/23PI1%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20CLI%20Squad%20-%2023PI1%20Objectives.md)
- Zowe App Store Participation
- In-memory Credential Management & Identity Tokens
- Zowe CLI Containerization
