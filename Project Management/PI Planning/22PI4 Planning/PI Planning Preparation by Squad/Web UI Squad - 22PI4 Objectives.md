# Zowe Web UI - 22PI4 - (2022/10/25 - 2023/01/23)

## In-squad tasks

### Server extension package registry [#449](https://github.com/zowe/zlux/issues/449)
**Priority**: 1

**Description**: Release the code within https://github.com/zowe/zowe-install-packaging/pull/2980 either initially with npm as the backing store or even by completing the conda support so that both are available. This code needs a registry to be useful, so optional content on artifactory will be re-packaged as npm/conda modules and hosted on jfrog npm/conda registry as a starting point for people to begin to leverage this feature.

**Status**: npm support functional, conda support incomplete. Neither have registries, and which extensions should be put into a registry has not been investigated yet. However, much of these tasks are simple to accomplish. Perhaps the biggest task will be education & documentation.

### Document app-server and desktop messages [#732](https://github.com/zowe/zlux/issues/732) [#733](https://github.com/zowe/zlux/issues/733)
**Priority**: 2

**Description**: Every ZWED I, E, or W error code to be documented with a description and suggested action within the documentation website.
Subtasks:
* [app-server](https://github.com/zowe/zlux/issues/732)
* [desktop](https://github.com/zowe/zlux/issues/733)

**Status**: Overall about 2/5 of the messages have been documented so far during the last PI.


### Shortcut and folder support for Desktop [#821](https://github.com/zowe/zlux/issues/821)
**Priority**: 3

**Description**: Turn prototype into code ready for release. In previously created prototype, app2app actions of the Desktop could be recorded as a shortcut, and both shortcuts and apps could be organized into folders

**Status**: Nearly complete, just needs code cleanup and bug fixes.

### Enhance github issue system
**Priority**: 4

**Description**: Between the TSC and the VSC Explorer and CLI groups we learned that there are requirements and suggestions around github labels and how to automate the status of tickets relative to the labels. We need to go through the backlog to clean it up by assigning relevant labels and pruning old tickets.

**Status**: Not yet started

## Stretch tasks


### Switch tn3270-ng2 app to use OMP's tsterm [#869](https://github.com/zowe/zlux/issues/869)
**Priority**: 5

**Description**: OMP's tsterm library is a fork of the Zowe library used within the tn3270-ng2 app. This fork promises improved ease of maintenance and may make the terminal app easier to enhance down the road, so switching to it is strategic for long-term health.


### Server setup wizard research
**Priority**: 6

**Description**: Last year, ZAC was shown a UI wizard that helps you to install & configure Zowe server components. v2 simplification and schemas should be used to make such a UI more powerful and lower maintenance.

We aim to research and share info with the group that started the project, and as the web UI squad has plenty of UI developers, perhaps we can help there too.
This year, our squad made a prototype of getting schema linting within a monaco editor, so we'd like to start by donating that in an electron context to fit into the overall wizard.
**Status**: Not started

# Roadmap

Our roadmap details are here https://app.zenhub.com/workspaces/web-ui-squad-60549e46bd10bf00115d1f69/roadmap?invite=true
![web ui squad Roadmap 2022-10-27](https://user-images.githubusercontent.com/30730276/198327017-24660649-94af-4b79-a18d-3a14e11724b4.svg)


# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.
