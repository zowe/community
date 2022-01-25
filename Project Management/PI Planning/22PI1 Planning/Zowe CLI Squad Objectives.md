# Zowe CLI Squad - 22PI1 Objectives

## V2 LTS MVP
See our Zowe vNext Backlogs in [Zowe CLI](https://github.com/zowe/zowe-cli/milestone/57) & [Imperative](https://github.com/zowe/imperative/milestone/57)
* [Out of the box experience - documentation validated from both a fresh install/config and migration from v1 LTS perspective](https://github.com/zowe/zowe-cli/issues/1184)
* [Validate `@zowe/cli@next` installation works on z/OS USS and zLinux](https://github.com/zowe/zowe-cli/issues/1091)
* [Zowe V1 to V2 Plug-in Profile Migration](https://github.com/zowe/zowe-cli/issues/1288)
* [CLI fails to install when there is invalid config JSON](https://github.com/zowe/zowe-cli/issues/1198)

Nice to have:
* [Daemon mode - must enable requests from different windows to be interleaved](https://github.com/zowe/zowe-cli/issues/1178)
* [Daemon Mode - Test/fix changing current directory when multiple requests come in simultaneously](https://github.com/zowe/zowe-cli/issues/1180)
* [Add Intellisense to secure array in zowe.config.json](https://github.com/zowe/zowe-cli/issues/1187)
* [zowe config init - prompt for host](https://github.com/zowe/zowe-cli/issues/1219)
* [Daemon mode should respect changes to ZOWE_CLI_HOME and ZOWE_APP_LOG_LEVEL env vars](https://github.com/zowe/zowe-cli/issues/1215)


## Prioritized Jobs & Files Enhancements
See our [Prioritized Jobs & Files Enhancements Milestone](https://github.com/zowe/zowe-cli/milestone/65) in Zowe CLI.
Contribute Broadcom zos-extended-files & zos-extended-jobs commands to core Zowe CLI V2 LTS
* [zowe files view data-set](https://github.com/zowe/zowe-cli/issues/1096)
* [zowe files view uss-file](https://github.com/zowe/zowe-cli/issues/1283)
* [View all spool content of a particular job](https://github.com/zowe/zowe-cli/issues/946)
* [Add example to zowe zos-jobs submit stdin](https://github.com/zowe/zowe-cli/issues/1284)
* [zowe jobs delete old-jobs command](https://github.com/zowe/zowe-cli/issues/1285)
* [zowe files download data-sets-matching](https://github.com/zowe/zowe-cli/issues/1287)
* [zowe jobs submit uss-file](https://github.com/zowe/zowe-cli/issues/1286)

Stretch
* [Extend zowe files copy data-set command to allow for copying across LPARs / z/OSMF instances](https://github.com/zowe/zowe-cli/issues/1098)
* [zowe files edit data-set](https://github.com/zowe/zowe-cli/issues/1097)
* [zowe cli compare command](https://github.com/zowe/zowe-cli/issues/1095)
* [Add `dir-from-uss` option to `zowe files download`](https://github.com/zowe/zowe-cli/issues/1038)

## Zowe CLI In-Memory Credential Management (stretch)
The Zowe CLI Secure Credential Store feature is troublesome to install in select environments. With daemon mode, it is possible to store credentials in-memory rather than in a secure credential store on disk. The resulting UX is that users need to enter their credentials each time the daemon is started.
