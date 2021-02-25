# Zowe Web UI Squad - 21PI1 Objectives (February 2021 to May 2021)

# 1. Session Expiration Customization [#434](https://github.com/zowe/zlux/issues/434)
Vendor request: per-group customization of zss cookie expiration for using longer-lived sessions of the Desktop
The customer wants to have kiosks for showing content on the Desktop, such that they want sessions that are very long. However, this should not impact normal users as for security they should continue to have sessions that are of reasonable length.  
ZSS must be customizable in an easy and secure way, but the Desktop must also respect and respond accordingly to the session length information presented.

## Deliverable
Per-group, per-user, and default specification of ZSS session length through a file within INSTANCE_DIR.

# 2. HA/FT State Migration [#542](https://github.com/zowe/zlux/issues/542)
Servers from the webui squad must be enhanced to move their state data out of the servers and into the caching service now available due to the last PI.

* Construct or enhance server storage APIs so that plugins can easily become HA-compatible
    * For ZSS and app-server
* Transfer any state from JES/MVS/USS explorers and their jobs & datasets API servers

## Deliverable
Servers which are able to have state which persists between crashes by putting and getting the data from the caching service. After implementation, users should not notice behavioral changes when servers recover from a crash.

## Risk
Need an answer for Docker, such as that the caching service will be used in an in-memory mode, or that the servers will fall-back to internal storage when the caching service is not found.

# 3. HA/FT Launcher [#590](https://github.com/zowe/zlux/issues/590)
Using the [manifest specification](https://github.com/zowe/zowe-install-packaging/issues/1477) servers must provide scripts for lifecycle management and declare them in manifest files such that a Zowe tool "Zowe Launcher" can orchestrate the lifecycles of components and possibly their redundant copies for HA/FT.

This launcher should start requested components on STC startup, and stop components on Job cancelation, but by using signals such that the way in which the components are stopped is cross-platform and granular.

The launcher must monitor each started component to see if it stops before being requested to stop, such as a crash, and attempt to restart the server within user-defined limits of retry counts within a window of time to prevent looping.

The launcher should be designed with linux & z/os compatibility in mind, such that HA/FT for containers can be accomplished in the future. However, there may be z/os-specific features such as WTOR so that z/os users can be informed of when zowe servers have all started up successfully.

## Deliverable
A tool for managing highly-available servers by having multiple copies of Zowe components running, monitoring their status for crashes, and managing their lifecycle via component-provided scripts

## Dependency
People working on the launcher will need to cooperate with webui, apiml, system squads in order to ensure each component is working successfully with the launcher.

# 4. Editor Dataset Write support [#498](https://github.com/zowe/zlux/issues/498)
Add ability to write datasets in the Desktop Editor by first adding a ZSS API which locks and unlocks datasets to ensure that writing to the datasets is safe and respectful of users of other editors such as ISPF or the Explorer.

This work was started in the previous PI, where a prototype was developed. In ths PI, we will be solving any bugs that arise, making automated tests to prove the locking works sufficiently even with contention, and adding a lock query API such that admins can see the status of locks in case some issue did arise about a lock that was held on a file that was needed.

## Deliverable
The ability to write to (non-vsam) datasets within the Desktop Editor, automated testing to prove its behavior, and an API to query the status of locks held by ZSS and which user owns that lock

# 5. Per-server containers (road to kubernetes) [#542](https://github.com/zowe/zlux/issues/542)
As an alternative to the tech preview Docker image "server-bundle" made in the last PI, new Docker images will be made for each server of the webui squad (app-server, jes explorer, uss explorer, mvs explorer) which follow best practices for use with kubernetes and openshift, while still maintaining a high degree of doc & feature compatibility with zowe features found on z/os (as is also a goal of "server-bundle")

The goal of these images will be to use with kubernetes or openshift, and will eventually be made HA/FT ready.
This work will be started in the PI, but may not be complete.
We're breaking the work down by component.

The epics to track are:
https://github.com/zowe/zlux/issues/586
https://github.com/zowe/zlux/issues/587

## Deliverable
4 Docker images for the 4 servers of the webui squad (app-server, jes explorer, uss explorer, mvs explorer) which can be downloaded as alternatives to the current Docker tech preview.

## Dependency
Orchestrating Zowe with kubernetes or openshift is not completely possible without participation from other squads that want to include their components too. APIML components, potentially client components like CLI/Explorer. An item for a future PI?


# Stretch items
The Web UI squad has more ideas than can be fit in the PI with certainty. All of these ideas are listed within our [github issue page](github.com/zowe/zlux/issues) and several that we do not think will otherwise be started within this PI have the tag *Help Wanted*. Please find us in the #zowe-dev slack if you wish to become involved!

The following are items that we expect and desire to accomplish, time-permitting:
* Publishing swagger documents from the app-server to the api-catalog [#422](https://github.com/zowe/zlux/issues/422)
* Continued improvement of the Desktop Editor, such as hoverhelp [#537](https://github.com/zowe/zlux/issues/537) and icons for more state representation [#574](https://github.com/zowe/zlux/issues/574)
* Continued improvement to the JES explorer for more app2app communication, log standardization, use of persistent storage, displaying number of jobs, and more
* More documentation, in particular about the subject of app2app communication and with more sample code about it [#581](https://github.com/zowe/zlux/issues/581)
* Enhancing the JES explorer to view targeted and relevant info about a job, as opposed to just raw output

## Meeting
Please join us at https://zoom.us/j/99494243697 to learn more

