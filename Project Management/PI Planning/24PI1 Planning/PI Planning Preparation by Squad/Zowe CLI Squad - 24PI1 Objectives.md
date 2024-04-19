# Zowe CLI Squad - 24PI1 - (2024/01/23 - 2024/04/22)

## V3 Preparation
Implement planned changes for V3 and continue to publish pre-release versions to npm.
- [ ] [v3: Remove V1 profile functionality in vNext (retaining the ability to convert from V1 to V2 configs) #1703](https://github.com/zowe/zowe-cli/issues/1703)
- [ ] [Document v3 team config changes #1801](https://github.com/zowe/zowe-cli/issues/1801)
- [ ] [v3: Remove validation of RECFM and return z/OSMF error #1699](https://github.com/zowe/zowe-cli/issues/1699)
- [ ] [zowe --show-inputs-only always reporting zowe version as v1 #1689](https://github.com/zowe/zowe-cli/issues/1689) - Consider functionality in V3

## Config Usability
Continue to improve team config robustness and flexibility.
- [ ] [zowe auth login apiml creates a V1 profile #2005](https://github.com/zowe/zowe-cli/issues/2005)
- [ ] [When accessing services via APIML, allow users to specify an instance ID #1858](https://github.com/zowe/zowe-cli/issues/1858)
- [ ] [Dynamic config gathering  #1899](https://github.com/zowe/zowe-cli/issues/1899)
- [ ] [Add --name-only as an alias for --root in zowe config list command #1797](https://github.com/zowe/zowe-cli/issues/1797)
- [ ] [Stretch] [User not prompted for keyPassphrase if in secure array of ssh profile #1770](https://github.com/zowe/zowe-cli/issues/1770)

## Extension Support
Ensure that extenders have access to the tools they need to interact with team config and secure credential storage.
- [ ] [Notify extenders when changes to the vault have been made #1987](https://github.com/zowe/zowe-cli/issues/1987)
- [ ] [Enable extenders to record their use of profiles #1964](https://github.com/zowe/zowe-cli/issues/1964)
- [ ] [Regenerating schema after plugin install may not include all profile types #1882](https://github.com/zowe/zowe-cli/issues/1882)

## High Priority and Upvoted Defects and Enhancements
Continue to responsibly address backlog items according to perceived priority and community interest.
- [ ] [Support the message transmission/reception API for TSO. #1566](https://github.com/zowe/zowe-cli/issues/1566)
- [ ] [Stretch] [Fix overrides.CredentialManager:false inconsistencies #1469](https://github.com/zowe/zowe-cli/issues/1469)
- [ ] [Stretch] [v3: Enhance RestClient to support a key-value object of query parameters #1872](https://github.com/zowe/zowe-cli/issues/1872)

## SDK Conformance and LTS status
Work with the Onboarding Squad and the IntelliJ Explorer Squad to develop Zowe client SDK conformance criteria and ensure that the Node.JS and Python Zowe Client SDKs achieve conformance.
- [ ] [Zowe SDK - Develop and publish sample Node.js SDK #1675](https://github.com/zowe/zowe-cli/issues/1675)

## OpenSSF Best Practices Badge
Support the ongoing Zowe OpenSSF Best Practices audit process.
- [ ] [Zowe CII Badge items for Zowe CLI #1352](https://github.com/zowe/zowe-cli/issues/1352)
- [ ] [OpenSSF Best Practices: Publish software architecture description #1760](https://github.com/zowe/zowe-cli/issues/1760)
- [ ] [OpenSSF Best Practices: Determine and publish Zowe CLI security requirements #1761](https://github.com/zowe/zowe-cli/issues/1761)
- [ ] [OpenSSF Best Practices: Assemble a security assurance case #1762](https://github.com/zowe/zowe-cli/issues/1762)
  - Update shared Zowe spreadsheet with the latest information on the Zowe CLI project

#### Helpful links for OpenSSF Best Practices Badge criteria:
- Passing: https://bestpractices.coreinfrastructure.org/en/criteria/0
- Silver: https://bestpractices.coreinfrastructure.org/en/criteria/1
- Gold: https://bestpractices.coreinfrastructure.org/en/criteria/2

# Zowe CLI / Zowe SDK Roadmap

## Ensure that Zowe VS Code Extensions can Share Access to zowe.schema.json with Zowe CLI
- _What problem are you solving?_
  - Zowe CLI overwrites team config profile entries contributed by Zowe Explorer extensions, preventing those extensions from being able to properly access profiles from a user's team config.
- _What are you doing to solve it?_
  - Schema profile additions will be synchronized in such a way that both VS Code extensions and Zowe CLI plug-ins can contribute to a schema without removing the profiles contributed by the other.
- _When do you plan to start the work?_
  - **CY23Q4**
- _When do you plan to deliver the solution?_
  - **CY24Q1** 

## Gold OpenSSF Best Practices Badge (Formerly CII Best Practices Badge)
- _What problem are you solving?_
  - The Zowe Project has not earned the gold OpenSSF Best Practices Badge, a requirement from LF/OMP that ensures the Open Source project satisfies FLOSS (Free/Libre & Open Source Software) [Best Practices criteria](https://bestpractices.coreinfrastructure.org/en/criteria)
- _What are you doing to solve it?_
  - Review requirements and take necessary actions to satisfy them for the gold badge level 
- _When do you plan to start the work?_
  - **CY22Q3**
- _When do you plan to deliver the solution?_
  - **CY24Q1** Achieve Passing Badge
  - **CY24Q4** Achieve Silver Badge
  - **CY25Q4** Achieve Gold Badge

## SDK Conformance and LTS Status
- _What problem are you solving?_
  - Mainframe developers are interested in extending the existing SDKs in order to create applications for their services
- _What are you doing to solve it?_
  - Solidify the SDK Conformance guidelines for:
    - New Services (like CICS SDK)
    - New Programming languages (like Kotlin SDK)
  - Prepare the SDKs technically and logistically for conformance
  - Determine if existing SDKs are conformant and communicate conformance gaps for prioritization
  - Release the Zowe Client Node.js SDK as LTS
- _When do you plan to start the work?_
  - **CY23Q2**
- _When do you plan to deliver the solution?_
  - **CY23Q4** (delayed until CY24Q2)
