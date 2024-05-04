# Zowe CLI Squad - 24PI2 - (2024/04/23 - 2024/07/22)

## V3 Preparation
Implement planned changes for V3 and continue to publish pre-release versions to npm.
- [ ] [Message Zowe Daemon in use #1451](https://github.com/zowe/zowe-cli/issues/1451)
- [ ] [Consolidate the Zowe client log files into the same directory #2116](https://github.com/zowe/zowe-cli/issues/2116)
- [ ] [V3: Mark non-consumer Zowe CLI SDK APIs as @internal #2083](https://github.com/zowe/zowe-cli/issues/2083)
- [ ] [Provide way to identify versions of Zowe CLI included in published Zowe releases #2097](https://github.com/zowe/zowe-cli/issues/2097)
- [ ] [Search for a string in members of a PDS #2095](https://github.com/zowe/zowe-cli/issues/2095)
- [x] [Display a reason why the CLI prompts for host, port, etc #2115](https://github.com/zowe/zowe-cli/issues/2115)
- [ ] [Document v3 team config changes #1801](https://github.com/zowe/zowe-cli/issues/1801)

## Repo maintenance
These items require updates to documentation in GitHub.
- [ ] [**_Stretch_**] [Update contribution guidelines to include policy on new dependencies #62](https://github.com/zowe/zowe-cli/issues/62)
- [ ] [**_Stretch_**] [Outdated doc about Zowe release timeline #712](https://github.com/zowe/zowe-cli/issues/712)

## Other:
- [x] [`findJobByID` does not return `spoolFiles` zowe-cli-ftp-plugin#156](https://github.com/zowe/zowe-cli-ftp-plugin/issues/156 )
- [ ] [Remove deprecated/unstable Utils functions #1947](https://github.com/zowe/zowe-cli/issues/1947)
- [ ] [**_Stretch_**] [ADA sec. 508 Accessiblity Issue — Color Contrast Issue in Profiles List #1948](https://github.com/zowe/zowe-cli/issues/1948)
- [ ] [**_Stretch_**] [`zowe plugins list` registry qualification  #63](https://github.com/zowe/zowe-cli/issues/63)


## Config Usability
Continue to improve team config robustness and flexibility.
- [ ] [Support logging in to multiple APIML instances per config file #1705](https://github.com/zowe/zowe-cli/issues/1705)
- [ ] [**_Stretch_**] [User not prompted for keyPassphrase if in secure array of ssh profile #1770](https://github.com/zowe/zowe-cli/issues/1770)
- [ ] [**_Stretch_**] [Zowe requires password when using SSH key for SSH command  #1034](https://github.com/zowe/zowe-cli/issues/1034)

## Extension Support
Ensure that extenders have access to the tools they need to interact with team config and secure credential storage.
- [ ] [Regenerating schema after plugin install may not include all profile types #1882](https://github.com/zowe/zowe-cli/issues/1882)
- [ ] [Notify extenders when changes to the vault have been made #1987](https://github.com/zowe/zowe-cli/issues/1987)

## High Priority and Upvoted Defects and Enhancements
Continue to responsibly address backlog items according to perceived priority and community interest.
- [ ] [Breaking Change in User/Password/Token Order of Precedence  #2109](https://github.com/zowe/zowe-cli/issues/2109)
- [ ] [**_Stretch_**] [Support the message transmission/reception API for TSO. #1566](https://github.com/zowe/zowe-cli/issues/1566)
- [ ] [**_Stretch_**] [Fix `overrides.CredentialManager:false` inconsistencies #1469](https://github.com/zowe/zowe-cli/issues/1469)

## SDK Conformance and LTS status
Finalize Zowe Client SDK conformance criteria and ensure that the Zowe Client Node.js SDK fulfills the criteria.
- [ ] [Zowe SDK - Update SDK conformance documentation #1676](https://github.com/zowe/zowe-cli/issues/1676)
- [ ] [**_Stretch_**] [Zowe SDK - Develop and publish sample Node.js SDK #1675](https://github.com/zowe/zowe-cli/issues/1675)

## Stretch Issues - Added 4/19/2024
- [ ] [Function to validate that credential manager will load successfully after ProfilesInfo constructor called #2111](https://github.com/zowe/zowe-cli/issues/2111)
- [ ] [Deprecation of Commands Requires Replacement Command #2041](https://github.com/zowe/zowe-cli/issues/2041)
- [ ] [How to make sure that a file is deleted with one command? #866](https://github.com/zowe/zowe-cli/issues/866)
- [ ] [`zowe plugins validate` returns always RC=0 #1299](https://github.com/zowe/zowe-cli/issues/1299)
- [ ] [Fix yargs parsing string arguments as numbers #1881](https://github.com/zowe/zowe-cli/issues/1881)

# Zowe CLI / Zowe SDK Roadmap

## Support connections to multiple APIML gateways through profile linking
- What problem are you solving?
  - Users cannot use team config to access services behind multiple APIML gateways.
- What are you doing to solve it?
  - Allow users to optionally specify explicit profile links in team configs - initially to link a service profile to a base (APIML) profile, so that Zowe CLI and Zowe Explorer can identify which APIML connection to use for a given service profile.
- When do you plan to start the work?
  - **CY24Q2**
- When do you plan to deliver the solution?
  - **CY24Q2**

## Searching
- What problem are you solving?
  - Users are not able to easily locate a data set, member, or spool file that contains information that they are looking for.
- What are you doing to solve it?
  - Give users the ability to search data sets, PDS members, or spool files for a given string, returning a list of files that contain the string and line numbers for each occurrence of the string in the file.
- When do you plan to start the work?
  - **CY24Q1**
- When do you plan to deliver the solution?
  - **CY24Q2**

## Zowe client software event notification system
- What problem are you solving?
  - The Zowe client software (Zowe CLI, Zowe Client SDKs, Zowe Explorer for VS Code, and Zowe Explorer for IntelliJ) have no way of knowing what actions the user has taken in other Zowe Client software (e.g., if the user changes a password in Zowe CLI, Zowe Explorer for VS Code will not know to reload the credentials from disk).
- What are you doing to solve it?
  - Implement a system for sharing event notifications (such as a user updating a password) that can be shared by all Zowe Client software regardless of programming language or runtime environment.
- When do you plan to start the work?
  - **CY24Q1**
- When do you plan to deliver the solution?
  - **CY24Q2**

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
  - **CY23Q4** (delayed until CY24Q2)

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

## (Completed) Ensure that Zowe VS Code Extensions can Share Access to zowe.schema.json with Zowe CLI
- What problem are you solving?
  - Zowe CLI overwrites team config profile entries contributed by Zowe Explorer extensions, preventing those extensions from being able to properly access profiles from a user's team config.
- What are you doing to solve it?
  - Schema profile additions will be synchronized in such a way that both VS Code extensions and Zowe CLI plug-ins can contribute to a schema without removing the profiles contributed by the other.
- When do you plan to start the work?
  - **CY23Q4**
- When do you plan to deliver the solution?
  - **CY24Q1** 
