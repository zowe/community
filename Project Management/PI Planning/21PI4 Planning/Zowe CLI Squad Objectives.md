# Zowe CLI Squad - 21PI4 Objectives (Nov 2021 to Feb 2022)

## V2 LTS MVP
* [Zowe CLI Security Improvement for secure fields that are not username/password/token](https://github.com/zowe/zowe-cli/issues/1106)
* [User field in SSH profile should be secure](https://github.com/zowe/zowe-cli/issues/682)
* [Zowe CLI vNext should be secure by default for v1 profiles](https://github.com/zowe/zowe-cli/issues/1128)
* [Upgrade migration utility to help users migrate to and adopt best practices of next major release](https://github.com/zowe/zowe-cli/issues/896)
* Zowe CLI Default Daemon Mode - allow for daemon mode to be leveraged out-of-the-box vs needing to retrieve a separate binary and configure it for use.
Draft PR of initial work (does not yet include delivering the binary within the CLI package) - https://github.com/zowe/zowe-cli/pull/1114
* Out of the box experience - documentation validated from both a fresh install/config and migration from v1 LTS perspective

## Beyond MVP Considerations (Strech/Roadmap)
* Work in Progress - Add Ecosystem (Zowe CLI conformant plug-in) web-help to Zowe.org ([zowe/zowe-cli #1080](https://github.com/zowe/zowe-cli/issues/1080))
* Zowe CLI Installation and use in multi-tenant environments - this would include work to install plug-ins in a system directory instead of alongside profiles in a user 
directory as well as ensuring daemon mode behaves as expected and securely in such an environment. ([zowe/zowe-cli #1076](https://github.com/zowe/zowe-cli/issues/1076))
* Zowe CLI in-memory credential management while daemon mode is in use - overcome the challenge of secure credential store being troublesome to install in select environments.
([zowe/imperative #661](https://github.com/zowe/zowe-cli/imperative/661))
* Zowe CLI Usability - Implement interactive selection capability in daemon mode for jobs/files groups to list jobs/dataset members and subsequently view spool dds / dataset members
Draft of initial work (does not yet include specific improvements to the jobs/files groups) - https://github.com/zowe/zowe-cli/pull/963 

## Highly upvoted issues
* [Extend zowe files copy data-set command to allow for copying across LPARs / z/OSMF instances](https://github.com/zowe/zowe-cli/issues/1098)
* [Add API ML SSO capability to Zowe SSH command](https://github.com/zowe/zowe-cli/issues/1030) - consider updating API ML to be a proxy for SSH
* [401 when logout with expired token](https://github.com/zowe/zowe-cli/issues/1041)
* [Support the IBM z/OSMF header that allows record (support for VB binary)](https://github.com/zowe/zowe-cli/issues/539)
* [Feature Request: Zowe Generate.](https://github.com/zowe/zowe-cli/issues/725)
* [IZosFilesResponse in SDK Refers to Commands](https://github.com/zowe/zowe-cli/issues/865)
* [Improve user friendlyness error for listing members in a data set](https://github.com/zowe/zowe-cli/issues/935)
* [zowe files edit data-set](https://github.com/zowe/zowe-cli/issues/1097)
* [zowe cli compare command](https://github.com/zowe/zowe-cli/issues/1095)
* [Add dir-from-uss option to zowe files download](https://github.com/zowe/zowe-cli/issues/1038)

## Dependencies
  * We will have a dependency on the onboarding squad for posting v2 conformance updates including a best practice to contribute CLI web-help to Zowe.

## Risks
  * TBD
