# Zowe Web UI - 23PI3 - (2023/07/25 - 2023/10/23)

# In-squad tasks

## ZEN [#16](https://github.com/zowe/zen/issues/16)
**Priority**: 1

**Description**: The webUI squad will be contributing to the upcoming Zowe server install wizard project ZEN, and has identified several tasks to be done within https://github.com/zowe/zen/issues and in particular hope to accomplish https://github.com/zowe/zen/issues/16 within the first PI, or at least first release.

**Status**: Major progress already. Technologies underpinning the UI have been developed; there is now a system that links the zowe yaml to each pages prompts, allows for import/export, and a system for handling SMPE and uploading your own zowe version. Infrastructure for building windows, mac and linux binaries is done, automated, and content available on artifactory. Testing and linting automation also exists. Remaining work is to view JCL before submitting, allow export of that, and to map each "zwe init" command to its own to-be-created step of the wizard, backed by the already-made utilities of generating a page from zowe yaml & schema content.

## Angular/Webpack upgrades [#975](https://github.com/zowe/zlux/issues/975)
**Priority**: 2

**Description**: In preparation for Zowe v3, library upgrades should be done to keep within the maintenance window of important libraries that we use that we cannot otherwise change mid-release. In particular, Angular and webpack are such libraries and newer versions exist than we currently use. We will work on upgrading them as much as possible.

**Status**: Webpack upgrades going well, moving to webpack 5 is no problem and shouldn't be disruptive. Angular currently under investigation.

## Zowe server setup JCL overhaul [#3633](https://github.com/zowe/zowe-install-packaging/issues/3633) [#3634](https://github.com/zowe/zowe-install-packaging/issues/3634)
**Priority**: 3

**Description**: Users who scale out software on z/OS have been requesting that we be more JCL-centric in our approach to installation. Most of "zwe init" already results in jobs, but some of the JCL does not rest in a SAMPLIB. Not all of the "zwe init" commands show the JCL that was issued, nor have a proper "dry-run" mode. By making the JCL visible at rest, visible as output of zwe, and even overhauled to utilize rexx-configmgr for input validation, we believe these users will be successful with scale out and happy with the changes. 


# Stretch

## Zowe global network configuration https://github.com/zowe/community/issues/1879 https://github.com/zowe/community/issues/1875
**Priority**: 4

**Description**: Simplify steps required to do networking tasks desired in Zowe server config, by having global configs that apply to all the servers

**Status**: Schema identified, templates being written to take advantage of existing server features. Later, individual servers enhancements may be required.


## Switch tn3270-ng2 app to use OMP's tsterm [#869](https://github.com/zowe/zlux/issues/869)
**Priority**: 5

**Description**: OMP's tsterm library is a fork of the Zowe library used within the tn3270-ng2 app. This fork promises improved ease of maintenance and may make the terminal app easier to enhance down the road, so switching to it is strategic for long-term health.

**Status**: Testing phase, PRs of the app using tsterm already exist and basic functionality is working.


# Help wanted

## DB Browser app [#870](https://github.com/zowe/zlux/issues/870)

We want to create an app that is plugable for allowing users to access different types of SQL databases and execute simple queries on them to display the output in tables. 
But currently nobody has volunteered to do the work.

There are currently 2 repositories covering a "db browser" app https://github.com/zowe/?q=db-browser&type=all&language=&sort=
They are structured so that you can have plugins for different DB endpoints, like db2, mysql, postgres, whatever is different enough that it needs a distinct plugin to handle its communication.

But apart from that, it's very basic and pretty old right now.


# Roadmap

<img width="1704" alt="image" src="https://github.com/zowe/community/assets/30730276/4979964c-d07f-4975-b3d6-65e6dd621819">



# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.
