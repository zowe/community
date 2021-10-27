# Zowe Web UI Squad - 21PI4 Objectives (November 2021 to February 2022)

## Zowe V2 [List](https://github.com/zowe/community/issues/924#issuecomment-811950045)
Goal: Finish work on items in the list in order to have v2 for the app-server, web explorers, zss, zis, and the desktop.

Subtasks:
* [app-server](https://github.com/zowe/zlux/issues/730)
* [web explorers](https://github.com/zowe/zlux/issues/731)
* [zss](https://github.com/zowe/zss/issues/366)

Status: As seen in the list, we're about half done and anticipating completion in February.

## SSO without PKCS11 storage [#365](https://github.com/zowe/zss/issues/365)
Problem: PKCS11 storage is currently used in SSO to hold token trust info that ZSS needs to read in order to verify an APIML SSO token. However, APIML generates tokens using a keystore or keyring instead of PKCS11.

Goal: If ZSS can contact APIML on startup to learn the info needed to later trust an apiml token, then ZSS will no longer need the PKCS11 storage, which will simplify installation and reduce issues.

Status: APIML API complete, ZSS API nearly complete. Documentation cleanup not yet begun.

## Github action migration
Goal: Move zlux-core, zlux-plugins, and zss actions from jenkins logic into github actions.

Status: Not started

## Documentation of error codes [#367](https://github.com/zowe/zss/issues/367) [#732](https://github.com/zowe/zlux/issues/732) [#733](https://github.com/zowe/zlux/issues/733)
Goal: Write an explanation and suggested user action for each message in ZSS, app-server and desktop that has message IDs associated. This will allow documentation searches and chat bots to more easily find an explanation for an issue encountered.

Subtasks:
* [zss](https://github.com/zowe/zss/issues/367)
* [app-server](https://github.com/zowe/zlux/issues/732)
* [desktop](https://github.com/zowe/zlux/issues/733)

Status: Not started


# Cross-squad assistance
Below are tasks we believe to be important but are not primarily owned by this squad. We will assist when possible, potentially with higher priority than in-squad goals.

## Documentation filtering
Ask: We believe that the filtering code written in the web UI squad last PI can be used by others this PI, but requires that each section of the documentation have relevant tags that are best known by the related squads. We are willing to add tags to web UI portions of documentation such as server install, containers, and app framework extending and troubleshooting.

## Containers
Goal: Container proposals post-MVP included items such as helm chart, adding any missing but desired containers, increased automation and increased testing. We don't know how much of these tasks require web UI squad assistance, but are willing to help in some way.


# Cross-squad asks
Below are tasks we believe either requires activity from multiple squads including us, or is a task that we need from another squad before we can complete a goal of our own.

## Security review
Goal: Relevant squads to act upon the results of a penetration test where a few low-severity items were noted. To be discussed in the security group.

## Documentation task sheets
Problem: Some users read our documentation all of our documentation word-for-word just to install Zowe. This is very time consuming and not necessary.

Idea: It would be better if there was a summary, set of quick steps, or otherwise distilled version of documentation so that users who don't want to learn & understand, but just want to get Zowe quickly installed, will have all the info necessary without extra text.

Proposal: Certain sections of documentation will start with a task sheet, which will list simple descriptions of what operations need to be done and by who. This will contain the same info as found in the related sections of documentation but reformatted to contain just the essential tasks to be done.

## Documentation terms glossary
Problem: Some users don't know USS and non-z/OS terminology, while others do but don't know as much z/OS terminology. This poses a challenge when reading our documentation if a user can't quickly understand the actions they need to take, the choices that they have, and the purpose of what they are doing.

Goal: Create a glossary of all tech terms such that users can quickly determine the meaning of any term in our documentation.


# Stretch
Below are tasks we would like to do, but may not finish in this PI.

* Finalize and release hackathon work
* More out of the box app2app actions such as
    * Launching from JES Explorer to other apps
    * Launching from other apps to the Editor
    * Fixing a bug on certain iframe apps where app2app doesnt work on first open
* VSCode in the Desktop via projects like Theia or VSCode for the Web
* Enhanced terminal UIs
* Diagnostic and automation scripts for server support assistance

# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.


