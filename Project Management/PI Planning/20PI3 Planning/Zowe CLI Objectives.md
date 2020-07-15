# Zowe CLI Squad - 20PI3 Objectives (June 2020 to September 2020)

## Zowe SDKs
Zowe consumers can begin building apps and/or custom automation within hours by readily finding and leveraging Zowe SDKs, API documentation, and samples

* Zowe Docs site is updated to contain using, developing for, and overview sections for the Zowe SDK. Zowe Docs site will host/link to SDK doc [zowe/docs-site#1286](https://github.com/zowe/docs-site/issues/1286)
* Example API usage doc will be included in each package's README [zowe/zowe-cli#751](https://github.com/zowe/zowe-cli/issues/751) [zowe/zowe-client-python-sdk#10](https://github.com/zowe/zowe-client-python-sdk/issues/10)
* Example use cases of leveraging the SDKs in scripts/pipelines/apps are provided [zowe/zowe-cli#752](https://github.com/zowe/zowe-cli/issues/752) [zowe/zowe-client-python-sdk#11](https://github.com/zowe/zowe-client-python-sdk/issues/11)
* The following packages will be published to public npm (naming to be confirmed): [zowe/zowe-cli#750](https://github.com/zowe/zowe-cli/issues/750)
    - `@zowe/zos-console-for-zowe-sdk`
    - `@zowe/zos-files-for-zowe-sdk`
    - `@zowe/zos-jobs-for-zowe-sdk`
    - `@zowe/zosmf-for-zowe-sdk`
    - `@zowe/zos-tso-for-zowe-sdk`
    - `@zowe/zos-uss-for-zowe-sdk`
    - `@zowe/provisioning-for-zowe-sdk`
    - `@zowe/workflows-for-zowe-sdk`
* The following packages will be published to the Python index (naming to be confirmed): [zowe/zowe-client-python-sdk#9](https://github.com/zowe/zowe-client-python-sdk/issues/9)
    - `zowe.console-for-zowe-sdk`
    - `zowe.files-for-zowe-sdk`
    - `zowe.jobs-for-zowe-sdk`
    - `zowe.tso-for-zowe-sdk`
    - `zowe.zosmf-for-zowe-sdk`
* The Zowe SDKs will be mentioned on Zowe.org [zowe/docs-site#1287](https://github.com/zowe/docs-site/issues/1287)

## Core Zowe CLI
Zowe CLI users can store all connection details and command option preferences in a single profile allowing for quick initial configuration and reduced effort when updating properties.
* Research and design the enhancement to store all profile options in a single base profile [zowe/zowe-cli#749](https://github.com/zowe/zowe-cli/issues/749)
* (Stretch) Implement the enhancement
