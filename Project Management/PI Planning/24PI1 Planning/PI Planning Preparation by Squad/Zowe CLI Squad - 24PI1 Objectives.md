# Zowe CLI Squad - 23PI4 (2023/10/31 - 2023/01/22)

## Zowe Keytar Replacement
Keytar will be removed from VS Code in the August 2023 release. The Zowe CLI squad will work with the Zowe Explorer squad to implement a replacement for keytar in the imperative and Zowe CLI projects.
- [x] Bring keytar-rs into the Zowe CLI/imperative repository
- [ ] Integrate keytar-rs into Zowe CLI and imperative, removing references to the Atom keytar package
- [ ] Expose APIs/SDK methods to enable use of keytar-rs by extenders and Zowe Explorer
- [ ] Update documentation to ensure that extenders know what changes (if any) they might need to make in their Zowe CLI plugins

## V3 Pre-release
Implement planned changes in preparation for the pre-release version of Zowe CLI V3.
- [ ] [v3: Prepare vNext branch of the zowe-cli repository](https://github.com/zowe/zowe-cli/issues/1702)
- [ ] [v3: Migrate the @zowe/imperative package to the zowe-cli monorepo](https://github.com/zowe/zowe-cli/issues/1695)
- [ ] [v3: Remove V1 profile functionality in vNext](https://github.com/zowe/zowe-cli/issues/1703)
- [ ] [v3: Remove deprecated constants, options, and methods](https://github.com/zowe/zowe-cli/issues/1694)
- [ ] [Stretch] [v3: Consistent --editor option across CLI commands that can open editor](https://github.com/zowe/imperative/issues/992)

## Address Items in the CLI and Imperative Backlogs
Take action in accordance with Community Guidelines to support Zowe CLI users and extenders, resolve defects, and implement beneficial enhancements suggested by members of the Zowe community.

CLI Squad Plan:
#### *Enhancements*
- [ ] [Support logging in to multiple APIML instances per config file](https://github.com/zowe/zowe-cli/issues/1705)

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
- [ ] [OpenSSF Best Practices: Provide signatures for Zowe.org downloads](https://github.com/zowe/zowe-cli/issues/1763)
  - Update shared Zowe spreadsheet with the latest information on the Zowe CLI project

#### Helpful links for OpenSSF Best Practices Badge criteria:
- Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
- Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
- Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

# Zowe CLI / Zowe SDK Roadmap

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
  - Mainframe customers demand trustworthy storage of secure values in Zowe CLI. With the sunset of the Atom organization (who supplied the Keytar package) and removal of Keytar from VS Code in the August 2023 release, we would require an actively maintained alternative for secure credential storage.
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
