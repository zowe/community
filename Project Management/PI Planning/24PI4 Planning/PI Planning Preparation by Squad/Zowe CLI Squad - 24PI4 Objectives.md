# Zowe CLI Squad - 24PI4 - (2024/10/22 - 2025/02/03)

## V3.0.0 (Released)
- New format for error messages to improve clarity
- V1 profile support removed
- Removed record format validation when issuing `zowe files create` commands
- Introduced searching for strings in both data sets and jobs
- Moved log files into a single directory
- Added Zowe release version output for `--version`

### V3.1.0
- [Migrate the TSO issueTsoCommand SDK to use the newer APIs (in z/OS 2.4)](https://github.com/zowe/zowe-cli/issues/2144)
- [Support the message transmission/reception API for TSO.](https://github.com/zowe/zowe-cli/issues/1566)
- [Add SDK method to determine if a JWT is expired](https://github.com/zowe/zowe-cli/pull/2298)
- [Add `encoding` support to `zowe files search ds` command](https://github.com/zowe/zowe-cli/issues/2161)
- [Change password SDK](https://github.com/zowe/zowe-cli/issues/1185)
- [Add `--ignore-not-found` option for deleting data sets and files](https://github.com/zowe/zowe-cli/issues/866)
- [fix: Binary spool files corrupted by the newline normalization](https://github.com/zowe/zowe-cli/issues/2282)
- [fix: DS list API may return invalid response when data sets archived with CA Disk](https://github.com/zowe/zowe-cli/issues/2285)
- [fix: Imperative package should not have top-level import of Secrets SDK](https://github.com/zowe/zowe-cli/issues/2276)

## SDK Conformance and LTS status
Finalize Zowe Client SDK conformance criteria and ensure that the Zowe Client Node.js SDK fulfills the criteria.
- [Zowe SDK - Update SDK conformance documentation](https://github.com/zowe/zowe-cli/issues/1676)
- [Zowe SDK - Develop and publish sample Node.js SDK](https://github.com/zowe/zowe-cli/issues/1675)

# Zowe CLI / Zowe SDK Roadmap

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
