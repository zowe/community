# Zowe Web UI - 23PI3

# In-squad tasks

## ZEN [#16](https://github.com/zowe/zen/issues/16)
**Priority**: 1

**Description**: The webUI squad will be contributing to the upcoming Zowe server install wizard project ZEN, and has identified several tasks to be done within https://github.com/zowe/zen/issues and in particular hope to accomplish https://github.com/zowe/zen/issues/16 within the first PI, or at least first release.

## Angular/Webpack upgrades [#975](https://github.com/zowe/zlux/issues/975)
**Priority**: 2

**Description**: In preparation for Zowe v3, library upgrades should be done to keep within the maintenance window of important libraries that we use that we cannot otherwise change mid-release. In particular, Angular and webpack are such libraries and newer versions exist than we currently use. We will work on upgrading them as much as possible.


# Stretch

## Zowe global network configuration https://github.com/zowe/community/issues/1879 https://github.com/zowe/community/issues/1875
**Priority**: 3

**Description**: Simplify steps required to do networking tasks desired in Zowe server config, by having global configs that apply to all the servers

**Status**: Schema identified, templates being written to take advantage of existing server features. Later, individual servers enhancements may be required.

## Dependency tracking [#3167](https://github.com/zowe/zowe-install-packaging/issues/3167)
**Priority**: 4

**Description**: As part of making the zowe install experience better, we notice that many servers resort to retry loops at startup due to dependencies on other servers and no good way of waiting for a dependency to be ready. Similarly, servers that have sensitivity to certain versions of java or node have no way to declare that either. For v3, we want a way to state these dependencies in each component manifest so that zwe can assist in ensuring dependencies are met and starting servers in the right order and timing.

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
