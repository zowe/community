# Zowe Web UI - 22PI4 - (2022/10/25 - 2023/01/23)

## In-squad tasks

### Server extension package registry
**Priority**: 1

**Description**: Release the code within https://github.com/zowe/zowe-install-packaging/pull/2980 either initially with npm as the backing store or even by completing the conda support so that both are available. This code needs a registry to be useful, so optional content on artifactory will be re-packaged as npm/conda modules and hosted on jfrog npm/conda registry as a starting point for people to begin to leverage this feature.

**Status**: npm support functional, conda support incomplete. Neither have registries, and which extensions should be put into a registry has not been investigated yet. However, much of these tasks are simple to accomplish. Perhaps the biggest task will be education & documentation.

### Document app-server and desktop messges [#732](https://github.com/zowe/zlux/issues/732) [#733](https://github.com/zowe/zlux/issues/733)
**Priority**: 2

**Description**: Every ZWED I, E, or W error code to be documented with a description and suggested action within the documentation website.
Subtasks:
* [app-server](https://github.com/zowe/zlux/issues/732)
* [desktop](https://github.com/zowe/zlux/issues/733)

**Status**: Overall about 2/5 of the messages have been documented so far during the last PI.


### Shortcut and folder support for Desktop
**Priority**: 3

**Description**: Turn prototype into code ready for release. In previously created prototype, app2app actions of the Desktop could be recorded as a shortcut, and both shortcuts and apps could be organized into folders

**Status**: Nearly complete, just needs code cleanup and bug fixes.


## Stretch tasks


### Switch tn3270-ng2 app to use OMP's tsterm
**Priority**: 4

**Description**: OMP's tsterm library is a fork of the Zowe library used within the tn3270-ng2 app. This fork promises improved ease of maintenance and may make the terminal app easier to enhance down the road, so switching to it is strategic for long-term health.


### Server setup wizard research
**Priority**: 5

**Description**: Last year, ZAC was shown a UI wizard that helps you to install & configure Zowe server components. v2 simplification and schemas should be used to make such a UI more powerful and lower maintenance.

We aim to research and share info with the group that started the project, and as the web UI squad has plenty of UI developers, perhaps we can help there too.
**Status**: First meeting pending


# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.
