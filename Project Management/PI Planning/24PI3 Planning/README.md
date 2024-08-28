# Release Planning 2.18

When: Tuesday, July 23, 2024 9:00 AM to 11:30 AM

| Time          | What             | 
|---------------|------------------|
| 9:00 - 9:10   | TSC Update       |
| 9:10 - 9:30   | ZAC Update       |
| 9:30 - 10:30  | 2.17 System Demo |
| 10:30 - 11:30 | 2.18 Plans       |

## Opening Presentations<br>

[TSC Opening]()<br>
[ZAC Opening]()<br>

## System Demo

| Squad               | Time         | Description                                                                                                                                                                          |
|---------------------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| API Mediation Layer | 9:30 - 9:40  | Request Connection Timeout, Optional protection of health endpoint, PAT Documentation, ATTLS - ICSF Improvements, Timeout and buffer size for Websockets, Improved protocol handling |
| Zowe Explorer       | 9:40 - 9:45  | Ability to switch between basic authentication and token-based authentication |
| Zowe CLI            | 9:45 - 9:55  | Ability to submit local files and stdin as jobs using different codepages. Ability to download job spool using different codepages. Quick slide on other features/bugfixes included in this release. |
| Multiple Squads | | AT-TLS standardization - Fixes for AT-TLS compatibility, And simplification of enabling via new property “zowe.network.server.tls.attls” see: https://docs.zowe.org/stable/user-guide/at-tls-configuration |
| zOS Squad | | z/OS startup performance improvement - Reduction in shell processes used at startup, Reduction of shell wrappers at runtime, And move plugin schema validation to install time, not runtime. See https://github.com/zowe/zowe-install-packaging/pull/3812 and https://github.com/zowe/launcher/issues/109 |
| zOS Squad | | Server “defaults.yaml” for better upgrade process - Enables users to take upgrade properties without needing to edit own zowe.yaml, see https://github.com/zowe/zowe-install-packaging/blob/v2.17.0/files/defaults.yaml |
| zOS Squad | | JCL Samples for server installation - Alternative to “zwe” and workflow install options, see https://github.com/zowe/zowe-install-packaging/tree/v2.17.0/files/SZWESAMP and https://github.com/zowe/zowe-install-packaging/blob/feature/v3/jcl/INSTALLATION.md#configuration-by-jcl |
| WebUI Squad | | Zowe server install wizard technical preview Alternative to “zwe”, workflow, and JCL install options. |





## 2.18 Plans (6 to 7 minutes per squad)

### Operational Squads

- [Documentation](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20Doc%20Squad%20-%2024PI3%20Objectives.md)
- [Onboarding](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20Onboarding%20Squad%20-%2024PI3%20Objectives.md)
- [Systems](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20Systems%20Squad%20-%2024PI3%20Objectives.md)

### Client Side Squads

- [CLI](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20CLI%20Squad%20-%2024PI3%20Objectives.md)
- [Explorer](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20Explorer%20Squad%20-%2024PI3%20Objectives.md)
- [IntelliJ](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20IntelliJ%20Squad%20-%2024PI3%20Objectives.md)

### Server Side Squads

- [WebUI](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Web%20UI%20Squad%20-%2024PI3%20Objectives.md)
- [zOS](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20ZOS%20Squad%20-%2024PI3%20Objectives.md)
- [API Mediation Layer](https://github.com/zowe/community/blob/master/Project%20Management/PI%20Planning/24PI3%20Planning/PI%20Planning%20Preparation%20by%20Squad/Zowe%20API%20ML%20Squad%20-%2024PI3%20Objectives.md)
