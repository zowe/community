# Zowe CLI Squad - 24PI3 - (2024/07/23 - 2024/10/21)

## V2.18.0
- [Remove deprecated methods in V2](https://github.com/zowe/zowe-cli/issues/2191)
- [User not prompted for keyPassphrase if in secure array of ssh profile](https://github.com/zowe/zowe-cli/issues/1770)
- [Support updating properties for typeless profiles in ProfileInfo API](https://github.com/zowe/zowe-cli/issues/2196)

## V3.0.0
- [Support logging in to multiple APIML instances per config file](https://github.com/zowe/zowe-cli/issues/1705) (Using a 'nested profiles' approach)
- [Provide way to identify versions of Zowe CLI included in published Zowe releases](https://github.com/zowe/zowe-cli/issues/2097)
- [Document v3 team config changes](https://github.com/zowe/zowe-cli/issues/1801)

### V3.0.0 Stretch items
- [Migrate the TSO issueTsoCommand SDK to use the newer APIs (in z/OS 2.4)](https://github.com/zowe/zowe-cli/issues/2144)
- [Fix `overrides.CredentialManager:false` inconsistencies](https://github.com/zowe/zowe-cli/issues/1469)
- [Support the message transmission/reception API for TSO.](https://github.com/zowe/zowe-cli/issues/1566)
- [Deprecation of Commands Requires Replacement Command](https://github.com/zowe/zowe-cli/issues/2041)
- [`zowe plugins validate` returns always RC=0](https://github.com/zowe/zowe-cli/issues/1299)
- [Fix yargs parsing string arguments as numbers](https://github.com/zowe/zowe-cli/issues/1881)

## Repo maintenance
These items require updates to documentation in GitHub.
- [Update contribution guidelines to include policy on new dependencies](https://github.com/zowe/zowe-cli/issues/62)
- [Outdated doc about Zowe release timeline](https://github.com/zowe/zowe-cli/issues/712)

## SDK Conformance and LTS status
Finalize Zowe Client SDK conformance criteria and ensure that the Zowe Client Node.js SDK fulfills the criteria.
- [Zowe SDK - Update SDK conformance documentation](https://github.com/zowe/zowe-cli/issues/1676)
- [**_Stretch_**] [Zowe SDK - Develop and publish sample Node.js SDK](https://github.com/zowe/zowe-cli/issues/1675)

# Zowe CLI / Zowe SDK Roadmap

## Support connections to multiple APIML gateways for consumers of the ProfileInfo API
- What problem are you solving?
  - Zowe Explorer (or other extensions using the ProfileInfo API) cannot access services behind multiple Zowe API ML gateways when using a team config.
- What are you doing to solve it?
  - Add functionality to the ProfileInfo API in Imperative to enable Zowe Explorer to allow users to specify multiple APIML connections using nested profiles in their team configs.
- When do you plan to start the work?
  - **CY24Q2**
- When do you plan to deliver the solution?
  - **CY24Q2** (delayed until CY24Q3)

## SDK Conformance and LTS Status
- What problem are you solving?
  - Mainframe developers are interested in extending the existing SDKs in order to create applications for their services
- What are you doing to solve it?
  - Solidify the SDK Conformance guidelines for:
    - New Services (like CICS SDK)
    - New Programming languages (like Kotlin SDK)
  - Prepare the SDKs technically and logistically for conformance
  - Determine if existing SDKs are conformant and communicate conformance gaps for prioritization
  - Release the Zowe Client Node.js SDK as LTS
- When do you plan to start the work?
  - **CY23Q2**
- When do you plan to deliver the solution?
  - **CY23Q4** (delayed until CY24Q4)

## Gold OpenSSF Best Practices Badge (Formerly CII Best Practices Badge)
- What problem are you solving?
  - The Zowe Project has not earned the gold OpenSSF Best Practices Badge, a requirement from LF/OMP that ensures the Open-Source project satisfies FLOSS (Free/Libre & Open-Source Software) [Best Practices criteria](https://bestpractices.coreinfrastructure.org/en/criteria)
- What are you doing to solve it?
  - Review requirements and take necessary actions to satisfy them for the gold badge level 
- When do you plan to start the work?
  - **CY22Q3**
- When do you plan to deliver the solution?
  - **CY24Q1** Achieve Passing Badge (delayed until CY24Q2)
  - **CY24Q4** Achieve Silver Badge
  - **CY25Q4** Achieve Gold Badge

## (Completed) Searching
- What problem are you solving?
  - Users are not able to easily locate a data set, member, or spool file that contains information that they are looking for.
- What are you doing to solve it?
  - Give users the ability to search data sets, PDS members, or spool files for a given string, returning a list of files that contain the string and line numbers for each occurrence of the string in the file.
- When do you plan to start the work?
  - **CY24Q1**
- When do you plan to deliver the solution?
  - **CY24Q2**
 
## (Completed) Zowe client software event notification system
- What problem are you solving?
  - The Zowe client software (Zowe CLI, Zowe Client SDKs, Zowe Explorer for VS Code, and Zowe Explorer for IntelliJ) have no way of knowing what actions the user has taken in other Zowe Client software (e.g., if the user changes a password in Zowe CLI, Zowe Explorer for VS Code will not know to reload the credentials from disk).
- What are you doing to solve it?
  - Implement a system for sharing event notifications (such as a user updating a password) that can be shared by all Zowe Client software regardless of programming language or runtime environment.
- When do you plan to start the work?
  - **CY24Q1**
- When do you plan to deliver the solution?
  - **CY24Q2**
