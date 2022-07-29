# Zowe Web UI - 22PI2 Objectives (August 2022 to October 2022)

### Shortcut and folder support for Desktop [#821](https://github.com/zowe/zlux/issues/821)
**Priority**: 1

**Description**: Turn prototype into code ready for release. In previously created prototype, app2app actions of the Desktop could be recorded as a shortcut, and both shortcuts and apps could be organized into folders

**Status**: Nearly complete from v1, but needs to be migrated to v2 and then needs code cleanup and bug fixes.

### Document app-server and desktop messges [#732](https://github.com/zowe/zlux/issues/732) [#733](https://github.com/zowe/zlux/issues/733)
**Priority**: 2

**Description**: Every ZWED I, E, or W error code to be documented with a description and suggested action within the documentation website.

**Status**: [Approximately 100/500 messages](https://github.com/zowe/docs-site/blob/feature/v2/appserver-messageids/docs/troubleshoot/app-framework/appserver-error-codes.md) have been explained, estimate that if we do 100 per sprint we'll be done in this PI.
Subtasks:
* [app-server](https://github.com/zowe/zlux/issues/732)
* [desktop](https://github.com/zowe/zlux/issues/733)


### Golden CII Badge Analysis [#840](https://github.com/zowe/zlux/issues/840)
**Priority**: 3

**Description**: [Get Golden CII Badge](https://github.com/zowe/community/issues/1279) [#840](https://github.com/zowe/zlux/issues/840)
This is a goal shared across all the Zowe active squads. In the context of this PI the goal is to understand what needs to be done in order to achieve the conformance. 
t

### Web browser app enhancements [#880](https://github.com/zowe/zlux/issues/880)
**Priority**: 4

**Description**: Utilize the shortcuts enhancement to save websites as if they were apps, to allow easier onboarding of non-native websites into zowe.
Some websites need a proxy, such as the APIML or the web browser's builtin proxy. We will work on the backlog of web browser app proxy bugs to broaden compatibility.

## Stretch Items

### Editor: Download option for datasets [#534](https://github.com/zowe/zlux/issues/534)
**Priority**: 5

Description: Add a Right-click -> download option for datasets. This can utilize ZSS apis where available, but in the absence of ZSS abilities, it should be ok to use the explorer service apis when they are found to exist in the environment.

### DB Browser app release [#870](https://github.com/zowe/zlux/issues/870)
**Priority**: 6

**Description**: There are currently 2 repositories covering a "db browser" app https://github.com/zowe/?q=db-browser&type=all&language=&sort=
They are structured so that you can have plugins for different DB endpoints, like db2, mysql, postgres, whatever is different enough that it needs a distinct plugin to handle its communication. But it hasnt been updated to work in v2, and lacks UX polish and features. By making it work in v2 and adding features that are end-user valuable, we believe this is something we should get in front of users soon.


## Ongoing background tasks



### V2 fixes and user assistance [community](https://github.com/zowe/community/labels/V2) [zlux](https://github.com/zowe/zlux/labels/V2) [zowe-install-packaging](https://github.com/zowe/zowe-install-packaging/labels/v2)
**Description**: Including ensuring containers are working as intended. Resolve as many v2 bug tickets as possible from 'zlux', 'community', and 'zowe-install-packaging' with bug tag. Engage with known extenders to explain v2 and answer questions, troubleshoot, and gather feedback for improvement now or over time.


### Server setup wizard research
**Description**: Last year, ZAC was shown a UI wizard that helps you to install & configure Zowe server components. v2 simplification and schemas should be used to make such a UI more powerful and lower maintenance.

We aim to research and share info with the group that started the project, and as the web UI squad has plenty of UI developers, perhaps we can help there too.

### z/OS Squad maturity
**Description**: Web UI squad members will continue to work to get z/OS squad the maturity items they need to succeed, such as helping them get all sorts of github assets like PR templates and contributing guides, to helping enhance existing automation.


# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.
