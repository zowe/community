# Zowe CLI Squad - 20PI4 Objectives (October 2020 to January 2021)

* Validate Zowe CLI on Node v14. Node v14 becomes LTS on 10/27.
* Project based CLI profiles. Implement design determined in https://github.com/zowe/zowe-cli/issues/749 to allow for a single profile that stores information commonly needed for core + plug-ins. The goal is to allow for users to more easily store profiles in source control, share profiles with others, and update profile settings.
* Ensure documentation ensures successful installation of the Zowe CLI in environments with proxies. Provide guidance on installing from public NPM via proxy but also suggest installing from the local package hosted on zowe.org as an alternative. Also, address issue with using CLI to access mainframe environment over http proxy: https://github.com/zowe/zowe-cli/issues/498
* Address growing number of community enhancement requests
  * https://github.com/zowe/zowe-cli/issues/771
  * https://github.com/zowe/zowe-cli/issues/808
  * https://github.com/zowe/zowe-cli/issues/797
  * https://github.com/zowe/zowe-cli/issues/789
  * https://github.com/zowe/zowe-cli/issues/773
  * https://github.com/zowe/zowe-cli/issues/810
  * https://github.com/zowe/zowe-cli/issues/539
* (Stretch) Daemon mode PoC published (https://github.com/zowe/zowe-cli/pull/825) to @next validation distribution of zowe-cli on public npm. Associated executables published to GitHub. Promotion on slack/medium to gain community validation. The goal is to improve Zowe CLI performance for all commands. Local command operations like help should take less than one second to run.
