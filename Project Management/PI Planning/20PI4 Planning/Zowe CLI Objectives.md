# Zowe CLI Squad - 20PI4 Objectives (October 2020 to January 2021)

* Validate Zowe CLI on Node v14. Node v14 becomes LTS on 10/27.
* Project based CLI profiles. Implement design determined in https://github.com/zowe/zowe-cli/issues/749 to allow for a single profile that stores information commonly needed for core + plug-ins. The goal is to allow for users to more easily store profiles in source control, share profiles with others, and update profile settings.
* Address growing number of community enhancement requests
  * https://github.com/zowe/zowe-cli/issues/808
  * https://github.com/zowe/zowe-cli/issues/797
  * https://github.com/zowe/zowe-cli/issues/789
  * https://github.com/zowe/zowe-cli/issues/773
  * https://github.com/zowe/zowe-cli/issues/771
  * https://github.com/zowe/zowe-cli/issues/810
  * https://github.com/zowe/zowe-cli/issues/539
* Ensure documentation ensures successful installation of the Zowe CLI in environments with proxies. Provide guidance on installing from public NPM via proxy but also suggest installing from the local package hosted on zowe.org as an alternative. Also, address issue with using CLI to access mainframe environment over http proxy: https://github.com/zowe/zowe-cli/issues/498
* Ensure Zowe CLI functions properly in a CodeReady Workspace. Open question: would IBM be able to provide a CodeReady Workspace to the community that the squad could leverage to validate Zowe CLI (possible Zowe Explorer in the future?)
* Allow for recently run commands to be easily recalled. Recalling commands today tends to be difficult especially when switching terminals and mistyping commands is common.
