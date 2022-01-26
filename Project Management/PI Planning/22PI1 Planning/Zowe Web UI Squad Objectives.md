# Zowe Web UI - 22PI1 Objectives (February 2022 to May 2022)

## In-squad tasks

### V2 fixes, extender and user assistance
**Priority**: 1 

**Description**: Resolve as many v2 bug tickets as possible from 'zlux', 'community', and 'zowe-install-packaging' with bug tag. Engage with known extenders to explain v2 and answer questions, troubleshoot, and gather feedback for improvement now or over time.

**Status**: Ongoing. Web ui components are mostly working already, so by the end of the PI it is likely all major bugs will be resolved and extenders will be equipped with the right info to succeed.


### Document app-server, desktop, and zss messages [#367](https://github.com/zowe/zss/issues/367) [#732](https://github.com/zowe/zlux/issues/732) [#733](https://github.com/zowe/zlux/issues/733)
**Priority**: 5

**Description**: Every ZWED and ZWES I, E, or W error code to be documented with a description and suggested action within the documentation website.
Subtasks:
* [zss](https://github.com/zowe/zss/issues/367)
* [app-server](https://github.com/zowe/zlux/issues/732)
* [desktop](https://github.com/zowe/zlux/issues/733)

**Status**: Not started. There are a few hundred messages to describe.


### Update containers for V2
**Priority**: 6

**Description**: Adjust app-server, jes-explorer, mvs-explorer, uss-explorer, ip-explorer containers to run with v2 code. Collaborate with systems squad on resolving container-specific configuration changes from v1 to v2, and collaborate with documentation squad to update container specific documentation

**Status**: Initial review started to learn what doesn't work and needs to be fixed.


### Dataset creation API and Desktop UI
**Priority**: 7

**Description**: Add an API to ZSS which allows a user to create a dataset when the client provides defaults or fully specified dataset parameters. Make a panel in the file tree component used by the Desktop Editor and open for use by others which would present a dialogue for setting those parameters or using the defaults. Immediate end user result would be the ability to create datasets from the Desktop Editor.

**Status**: More than halfway done. An API PR exists, a UI PR exists, but there are some remaining dataset size parameters which have not yet been added to the API.


### JES Submit API
**Priority**: 8

**Description**: Add an API to ZSS which allows a user to submit JCL as a job.

**Status**: Nearly complete from last PI.


## Cross-squad tasks

### V2 Parmlib and multi-config support
**Priority**: 2

**Squad to work with**: System

**Description**: Mainframe configuration is typically done via PARMLIB datasets, and change management software likely assumes this. Zowe does not support this method of configuration today, making zowe seem foreign to the platform and harder to manage. This problem can be solved by building a way to support both existing config files and PARMLIB by having some mapping between the key-value system of PARMLIB and the nested attribute system of zowe.yaml, and then continuing to have the server infrastructure startup code provide environment variables to servers which are the processed output of the configuration files.

**Status**: Recently started


### V2 Server Schema
**Priority**: 3

**Squad to work with**: System

**Description**: Zowe configuration and zowe extension configuration has nothing that states what config options exist and what the valid parameters for them are. There is no good way to quickly validate zowe config for accuracy, nor is there an easy way to document new parameters or construct a UI around valid options and inputs. Utilizing json-schema in Zowe can solve this problem. json-schema is a flexible way to state configuration options and their valid parameters which is compatible with anything json-like, such as yaml. By having a schema for zowe's config and requiring components to have their own schemas, all of zowe config can be tracked and validated and documented.

**Status**: Recently started


### V2 Documentation
**Priority**: 4

**Squad to work with**: Documentation

**Description**: Create or revise 'getting started', 'user-guide', 'extending', and 'troubleshooting' sections of documentation to fully explain how to use v2 servers.

**Status**: Recently started but there is much to do.


### Documentation: Glossary of Zowe terms
**Priority**: 9

**Squad to work with**: Documentation

**Description**: Create a page in documentation that briefly explains Zowe-specific terms so that readers of the documentation will better understand the documentation. If possible also create links to other authorities for understanding non-Zowe terms that are found in Zowe documentation, such as z/OS terms.

**Status**: Ongoing from last PI.


### Documentation: Tags for filtering [#1767](https://github.com/zowe/docs-site/issues/1767)
**Priority**: 10

**Squad to work with**: Documentation

**Description**:

**Status**: Ongoing


### Stretch tasks

### Shortcut and folder support for Desktop
**Description**:

**Status**: Nearly complete


### Prototype app store via package manager
**Description**:

**Status**: Not started


# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.
