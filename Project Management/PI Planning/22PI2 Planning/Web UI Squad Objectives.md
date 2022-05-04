# Zowe Web UI - 22PI2 Objectives (2022/04/26 - 2022/07/25)

## In-squad tasks

### V2.1, 2.2 enhancements: Schema validation, [parmlib support](https://github.com/zowe/zlux/issues/777), [speedup](https://github.com/zowe/zowe-install-packaging/issues/2825)
**Priority**: 1
**Status**: In the last PI we discussed making a utility that can read schema files, and also read config file(s). One or more files, parmlib or unix files.
That utility exists now and works well. https://zowe.jfrog.io/zowe/libs-snapshot-local/org/zowe/configmgr/0.3.0-feature_build-deps/
And every squad helped to make schema files that we would use with it.
What did not make 2.0 release was to enhance the zowe server infrastructure code to drive all config loading & validation through this tool.
We're hard at work on that enhancement right now, so we estimate it fits into the 2.1 release.

**Squad to work with**: System squad. This work was somewhere in between System squad, zOS squad, and webUI squad. At this point the work is really systems squad code but we're all assisting so I'm writing it here for visibility.

### Shortcut and folder support for Desktop
**Priority**: 2
**Description**: Turn prototype into code ready for release. In previously created prototype, app2app actions of the Desktop could be recorded as a shortcut, and both shortcuts and apps could be organized into folders
**Status**: Nearly complete, just needs code cleanup and bug fixes.


### V2 fixes and user assistance [community](https://github.com/zowe/community/labels/V2) [zlux](https://github.com/zowe/zlux/labels/V2) [zowe-install-packaging](https://github.com/zowe/zowe-install-packaging/labels/v2)
**Priority**: 3
**Description**: Including ensuring containers are working as intended. Resolve as many v2 bug tickets as possible from 'zlux', 'community', and 'zowe-install-packaging' with bug tag. Engage with known extenders to explain v2 and answer questions, troubleshoot, and gather feedback for improvement now or over time.
**Status**: Ongoing as-needed.

### Server setup wizard research
**Priority**: 4
**Description**: Last year, ZAC was shown a UI wizard that helps you to install & configure Zowe server components. v2 simplification and schemas should be used to make such a UI more powerful and lower maintenance.
We aim to research and share info with the group that started the project, and as the web UI squad has plenty of UI developers, perhaps we can help there too.
**Status**: First meeting pending

### z/OS Squad maturity
**Priority**: 5
**Description**: Web UI squad members will continue to work to get z/OS squad the maturity items they need to succeed, such as helping them get all sorts of github assets like PR templates and contributing guides, to helping enhance existing automation.
**Status**: Ongoing

### Document app-server and desktop messges [#732](https://github.com/zowe/zlux/issues/732) [#733](https://github.com/zowe/zlux/issues/733)
**Priority**: 6
**Description**: Every ZWED I, E, or W error code to be documented with a description and suggested action within the documentation website.
Subtasks:
* [app-server](https://github.com/zowe/zlux/issues/732)
* [desktop](https://github.com/zowe/zlux/issues/733)

**Status**: ZSS messages completed last PI, but others not started. There are a few hundred messages to describe.

## Golden CII Badge Analysis
**Priority**: 7
**Description**: [Get Golden CII Badge](https://github.com/zowe/community/issues/1279)
This is a goal shared across all the Zowe active squads. In the context of this PI the goal is to understand what needs to be done in order to achieve the conformance. 


## Stretch tasks

### Dataset creation API and Desktop UI
**Description**: Add an API to ZSS which allows a user to create a dataset when the client provides defaults or fully specified dataset parameters. Make a panel in the file tree component used by the Desktop Editor and open for use by others which would present a dialogue for setting those parameters or using the defaults. Immediate end user result would be the ability to create datasets from the Desktop Editor.
**Status**: More than halfway done. An API PR exists, a UI PR exists, but there are some remaining dataset size parameters which have not yet been added to the API.

# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.
