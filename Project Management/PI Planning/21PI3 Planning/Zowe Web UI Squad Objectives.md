# Zowe Web UI Squad - 21PI3 Objectives (July 2021 to October 2021)
## Containerization [#793](https://github.com/zowe/zowe-install-packaging/issues/793)
Goal: zowe.org contains an app-server container download which works with kubernetes and extensions that are components with their own containers. The solution will have documentation on how to use it including how to migrate from an existing z/OS install and how to use it with APIML and/or ZSS running on z/OS.

Status: App-server container exists, but may need to be enhanced to fit the goals of the system squad work.

Subtasks:
* Make 3 images for all 3 web explorers [#587](https://github.com/zowe/zlux/issues/587)
* Tasks from the system squad epic [#793](https://github.com/zowe/zowe-install-packaging/issues/793) including:
  * Create a conformance guide for extensions that have containers [#2220](https://github.com/zowe/zowe-install-packaging/issues/2220)
  * Improve app-server component image [#2242](https://github.com/zowe/zowe-install-packaging/issues/2242)
  * Create documentation [#2250](https://github.com/zowe/zowe-install-packaging/issues/2250)
    * Document how to migrate from z/OS to containers
  * Satisfy legal requirements of dependencies [#2252](https://github.com/zowe/zowe-install-packaging/issues/2252)
  - Objective: zowe.org download/install instructions for running Zowe on Kubernetes.
- app asset import into app-server container automation
- examples of how to have components that contain both in-app-server and standalone content to be shipped in containers
- guidelines that let people guarantee that their component will be compatible with a zowe container and that the component itself is distributed as a container image.

Note: This is an MVP, but there are more tasks in the system squad epic to make the solution better over time, including whether or not all server components (minus ZSS) will be ready at the end of the PI.

## Optimistic Locking [#654](https://github.com/zowe/zlux/issues/654)
Goal: Enable the Desktop Editor to write datasets by enhancing ZSS with a dataset locking API that does optimistic locking

Status: Major progress made on pessimistic locking in past PIs, including a general purpose ZSS plugin enhancement, but had enough technical challenges that by comparison optimistic locking will be simpler to implement and have a better UX, so for now we are skipping pessimistic locking implementation in favor of optimistic.

Subtasks:
  * Review pessimistic locking work to detail what is reusable for optimistic implementation, and what technical issues we saw that must be avoided in optimistic implementation.
  * Make PoC of getting a hash of the contents of a dataset or member
  * Build API which will send hash on read and will demand hash on write, and will refuse to write if hash does not match current system hash, unless forced
  * Enhance editor to store hash for write and react to rejected write by prompting user about what to do
  * Research and possibly implement diff viewer to allow revision of edit when write fails due to system changes
  * Update automated tests to verify the optimistic locking prevents corrupted datasets and does not leave behind locks or other finite system resources upon a ZSS crash
  

## ZIS Plugin Install Improvement[#656](https://github.com/zowe/zlux/issues/656)
Problems:
* Installation currently done by script not in instance directory (same problem for component install)
* Installer requires several arguments, could be reduced by using attributes to be recorded in instance
* Install not done by component installer
* Install not formalized in conformance program, should be by way of component manifest
* ZIS finds plugins within same dataset as itself, but dataset is recreated during upgrade... plugins get lost.

Proposal:
* Record ZIS attributes in instance by storing the attributes in /tmp during install-time, and writing them to instance at instance creation time
* Put ZIS plugin installer, and/or component installer into instance
* Formalize manifest properties for ZIS plugins
* Provide a secondary dataset exclusively for plugins, that does not get erased on upgrade.
* Update conformance program to ensure smooth ZIS plugin usage

Status: Nearly complete. ZIS parameter recording automation and plugin dataset creation work was attempted but did not work with SMPE, so must be revised to handle both PAX and SMPE cases.

## Filtered documentation [#1767](https://github.com/zowe/docs-site/issues/1767)
Problem: Our documentation contains sections a user never needs to read, because it includes instructions for all possible environments but some are mutually exclusive, so a user only needs to read instructions that are relevant to their environnment and what components they want to use.

Proposal: If the user could select from a list what type of environment they have, what components they want to use, what optional features they are interested in, and what they want to do today (install, configure, troubleshoot etc) then the documentation can be filtered to their specific needs, reducing the documentation they see to only what is relevant to them.

Subtasks:
  * Research doing conditional div hiding by a property (tag) set within a markdown file of the doc
  * Create react component which guides the user to select tags that the site would use to filter the doc
  * Determine what filtered docs should look like: missing, or just greyed out?
  * Create place on site that shows what currently selected filters are, and allow them to be toggled off
  * By topic, tag each paragraph, table, code example with tags such as ESMs, prerequisites, Zowe component, optional feature, and type of task

Dependencies: Collaborate with the Doc squad to better understand how the doc website software works, and collaborate with them to tag each documentation section according to filter topics.

# Stretch
Below are tasks we would like to do, but may not finish in this PI.

## STC-only permissions accomodation
Problem: Some end-users report requirements for the ZWESVSTC user to not belong to any group that TSO users are in. This conflicts with how Zowe instances work under USS. Users may take matters into their own hands by reassigning USS permissions to the STC user, only to later complicate config & component installation due to nothing but STC and root being able to access files.

Proposal: Use ACL as a way to grant particular users access to instance without using groups. Ship a sample JCL to make ACL assignment easy and understandable.

Status: Investigating end-user needs and comfort with proposals

Depedencies: Collaborate with the systems squad to properly cover all zowe-install-packaging permissions management with ACL


## Zowe V2 [List](https://github.com/zowe/community/issues/924#issuecomment-811950045)
Goal: Begin work on items determined to be needed for Zowe V2. 

Status: Accepting proposals of changes to make. Very soon we will prioritize and begin work.

Note: This is in stretch because the list is too large to complete in one PI, but work will begin in this PI and not everything on the list even needs to be in V2.

## Passticket support in ZSS [#683](https://github.com/zowe/zlux/issues/683)
Goal: Add a ZSS API that allows for getting a passticket provided you have already authenticated with ZSS (either directly or via APIML SSO). This must be usable by APIML such that APIML can use this as a replacement for APIML-provided passtickets

Status: Research not yet begun. Subject matter experts please reach out to us so we can more quickly learn the ways we can implement this.

Also note:
* High availability: We've yet to see it work 100% in testing environments, so bug fixes may be needed this PI if we identify issues and solutions.
* IP explorer: Wasn't able to run in the tech preview container due to encoding, and does not appear upon upgrade. These are small issues to be fixed next release.
* REST Compression: [#657](https://github.com/zowe/zlux/issues/657) was put on hold due to a ZSS-specific solution not being as useful as a solution at the APIML level that everyone can benefit from.

# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.


