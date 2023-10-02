# Zowe CLI Squad - 23PI3 - (2023/07/25 - 2023/10/23)

## V3 Pre-release
Implement planned changes for V3 and publish a pre-release version to npm.
- [ ] [v3: Prepare vNext branch of the zowe-cli repository #1702](https://github.com/zowe/zowe-cli/issues/1702)
- [ ] [v3: Migrate the @zowe/imperative package to the zowe-cli monorepo #1695](https://github.com/zowe/zowe-cli/issues/1695)
- [ ] [v3: deprecate the getDataSet utility and move it (in v3) to the @zowe/zos-files-for-zowe-sdk package #1696](https://github.com/zowe/zowe-cli/issues/1696)
- [ ] [v3: Remove V1 profile functionality in vNext (retaining the ability to convert from V1 to V2 configs) #1703](https://github.com/zowe/zowe-cli/issues/1703)
- [ ] [v3: Remove deprecated constants, options, and methods #1694](https://github.com/zowe/zowe-cli/issues/1694)
- [ ] [v3: Remove "bright" command  #1792](https://github.com/zowe/zowe-cli/issues/1792)
- [ ] [Standardize use of capitalization and punctuation in command descriptions #1756](https://github.com/zowe/zowe-cli/issues/1756)
- [ ] [Support logging in to multiple APIML instances per config file #1705](https://github.com/zowe/zowe-cli/issues/1705)
- [ ] [Stretch] [v3: Consistent --editor option across CLI commands that can open editor imperative#992](https://github.com/zowe/imperative/issues/992)

## SDK Conformance and LTS status
Work with the Onboarding Squad and the IntelliJ Explorer Squad to develop Zowe client SDK conformance criteria and ensure that the Node.JS and Python Zowe Client SDKs achieve conformance.
- [ ] [Zowe SDK - Update SDK conformance documentation #1676](https://github.com/zowe/zowe-cli/issues/1676)
- [ ] [Zowe SDK - Develop and publish sample Node.js SDK #1675](https://github.com/zowe/zowe-cli/issues/1675)

## Address Items in the CLI and Imperative Backlogs
Take action in accordance with Community Guidelines to support Zowe CLI users and extenders, resolve defects, and implement beneficial enhancements suggested by members of the Zowe community.

CLI Squad Plan:
#### *Enhancements*
- [ ] None planned

#### *Bugs*
- [ ] [Stretch] [Regression-7.4.1 : download data-set-matching option -d does not preserve upper case](https://github.com/zowe/zowe-cli/issues/1722)
- [ ] [Stretch] [zowe auth login examples are incorrect](https://github.com/zowe/imperative/issues/998)
- [ ] [Stretch] [Add instructions to enable prompting for any option](https://github.com/zowe/zowe-cli/issues/1741)
- [ ] [Stretch] [zowe plugins list registry qualification](https://github.com/zowe/zowe-cli/issues/63)

## OpenSSF Best Practices Badge
This work may carry across 23PI3 and 23PI4:
- [ ] [Zowe CII Badge items for Zowe CLI](https://github.com/zowe/zowe-cli/issues/1352)
- [ ] [OpenSSF Best Practices: Publish software architecture description](https://github.com/zowe/zowe-cli/issues/1760)
- [ ] [OpenSSF Best Practices: Determine and publish Zowe CLI security requirements](https://github.com/zowe/zowe-cli/issues/1761)
- [ ] [OpenSSF Best Practices: Assemble a security assurance case case](https://github.com/zowe/zowe-cli/issues/1762)
- [ ] - Update shared Zowe spreadsheet with the latest information on the Zowe CLI project

#### Helpful links for OpenSSF Best Practices Badge criteria:
- Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
- Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
- Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

# Zowe CLI / Zowe SDK Roadmap

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

## (Carry-over) Gold OpenSSF Best Practices Badge (Formerly CII Best Practices Badge)
- _What problem are you solving?_
  - The Zowe Project has not earned the gold OpenSSF Best Practices Badge, a requirement from LF/OMP that ensures the Open Source project satisfies FLOSS (Free/Libre & Open Source Software) [Best Practices criteria](https://bestpractices.coreinfrastructure.org/en/criteria)
- _What are you doing to solve it?_
  - Review requirements and take necessary actions to satisfy them for the gold badge level
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY22Q4** (delayed until **TBD**)

## (Done) Keytar Replacement
- _What problem are you solving?_
  - Mainframe customers demand trustworthy storage of secure values in Zowe CLI. With the sunset of the Atom organization (who supplied the Keytar package) and removal of Keytar from VS Code in the August 2023 release, we would require an actively maintained alternative for secure credential storage.
- _What are you doing to solve it?_
  - Implement a suitable replacement to the Keytar package with minimal impact to our end users
- _When do you plan to start the work?_
  - **CY23Q1**
- _When do you plan to deliver the solution?_
  - **CY23Q3** 

## (Done) Zowe Client Mentorship Opportunity: Enhancing the Python SDK
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
- Zowe CLI on Unix System Services (USS)
