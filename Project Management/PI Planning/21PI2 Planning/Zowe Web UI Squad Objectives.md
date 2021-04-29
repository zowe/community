# Zowe Web UI Squad - 21PI2 Objectives (May 2021 to July 2021)


## High-availability support implementation [#590](https://github.com/zowe/zlux/issues/590) [#542](https://github.com/zowe/zlux/issues/542)
Goal: Make a high availability solution for Zowe such that ZSS, App-server, web explorers, extender components and other parts of Zowe from other squads can have redundancy that tolerates crashes without downtime

Status: Ongoing, remaining work is...
* Enhance Zowe Launcher to read new yaml configuration and component manifests to know how to start/stop/restart components, and how to detect restart loops through user-configurable timeouts
* Enhance sample app(s) to prove state persistence in caching service works as intended
* Merge in existing state persistence solutions to app-server and zss after tests pass

## GA Docker from tech preview [#1128](https://github.com/zowe/community/issues/1128)
Goal: Exit tech preview status on existing Docker server bundle so that more users can take advantage of it

Status: Nearly complete. Must finish solutions to end-user feedback, such as...
* Image signing
* Documentation about how to migrate to and from docker & all-z/os
* Minor improvements to start script to simplify & present latest & greatest zowe config options
* Anything else TSC believes is needed


## Standalone App-server & Web Explorer Docker Images [#542](https://github.com/zowe/zlux/issues/542)
Goal: Begin effort to have docker images that contain only 1 zowe component each, which will be most beneficial when used in orchestration technology like Kubernetes and for purposes like high availability or horizontal scale. APIML images will be needed too, but may require cross-squad collaboration.

Subtasks:
* Make an image containing only app-server https://github.com/zowe/zlux/issues/586
* Make 3 images for all 3 web explorers https://github.com/zowe/zlux/issues/587
* Create any scripting glue code to adapt existing zowe config & process management structures to be compatible with kubernetes & docker compose
* Document how to use this solution, which has different install & configure steps from the other docker server bundle
* Document how to migrate between this, the other docker, and all-z/os

Note: A complete solution may not exist in this PI due to cross-squad nature and need to get the documentation and usability correct.

## Pessimistic Locking [#498](https://github.com/zowe/zlux/issues/498)
Goal: Enable the Desktop Editor to write datasets by enhancing ZSS with a dataset locking API that does pessimistic locking

Status: Major progress made within the last PI, including a general purpose ZSS plugin enhancement, but some technical challenges that would cause bugs remain.

## ZIS Plugin Install Improvement
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

Status: Not started

## Improve ZSS Test Coverage [#571](https://github.com/zowe/zlux/issues/571)
Goal: Keep testbed effective by adding more automated tests for ZSS APIs since recent API additions & enhancements have some harder to test issues like testing against timing & contention

Status: Not started

## app-server & app CICD improvements
Goal: Have build logic that is easier to track changes on, easier to use, and remains automated by PR opening

Status: In progress, tasks remain such as...
* Migrate plugin building job to a Jenkinsfile
* Fix how zlux-core gets built during a PR opening
* Add zss plugin building
* Document resulting jobs and how to use them

## Ship IP Explorer [#618](https://github.com/zowe/zlux/issues/618)
Goal: Have the IP Explorer on the Desktop in a default install and usable by all known environments (Test with all ESMs, Docker), by shipping it as part of the collection of Zowe server code and apps

Status: In progress, tasks remain such as...
* Build automation
* Test automation
* Documentation
* Publicity like a blog or a video


## App2App Improvements [#490](https://github.com/zowe/zlux/issues/490) [#581](https://github.com/zowe/zlux/issues/581)
Goal: Leverage Desktop App2App capability by adding more uses of it in Desktop

v2Status: Investigation in progress, which apps should interact with others and how?

# Stretch
Below are tasks we would like to do, but may not finish in this PI.

## Contributing Guidelines [#630](https://github.com/zowe/zlux/issues/630)
Goal: Have contributation guidelines that cover subjects such as...
* How to interact with our squad
* How to make a good pull request, and help your code get merged easily
* Code guidelines, such as naming conventions, folder conventions, syntax conventions
* Codebase principles, such as how to go about adding libraries, and what makes for a good API
* Build & Test guidelines, such as where to find them and how to run them

Status: In progress, evaluated other squad's guidelines and integrating our own.

## STC-only permissions accomodation
Problem: Some end-users report requirements for the ZWESVSTC user to not belong to any group that TSO users are in. This conflicts with how Zowe instances work under USS. Users may take matters into their own hands by reassigning USS permissions to the STC user, only to later complicate config & component installation due to nothing but STC and root being able to access files.

Proposal: Use ACL as a way to grant particular users access to instance without using groups. Ship a sample JCL to make ACL assignment easy and understandable.

Status: Investigating end-user needs and comfort with proposals

## Optimistic Locking
Goal: Enable the Desktop Editor to write datasets with less lock time and network chatter between Desktop and ZSS by developing an optimistic lock-type alternative to the pessimistic locking above

Status: Not started

Note: Last modification needs to be tracked for success, but when not known by system metadata, hashing may be needed. If a dataset is large, hashing is expensive if an action like delete or read was to be performed. Is there a performance compromise that can be made?


## Zowe V2 [List](https://github.com/zowe/community/issues/924#issuecomment-811950045)
Goal: Begin work on items determined to be needed for Zowe V2, if V2 timeline requires work to be started in this PI

Status: Not started

# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.
