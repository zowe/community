# Zowe Web UI - 23PI1 - (2022/10/25 - 2023/01/23)

# In-squad tasks

## Shortcut and folder support for Desktop [#821](https://github.com/zowe/zlux/issues/821)
**Priority**: 1

**Description**: Turn prototype into code ready for release. In previously created prototype, app2app actions of the Desktop could be recorded as a shortcut, and both shortcuts and apps could be organized into folders

**Status**: Nearly complete, just needs code cleanup and bug fixes.

## Switch tn3270-ng2 app to use OMP's tsterm [#869](https://github.com/zowe/zlux/issues/869)
**Priority**: 2

**Description**: OMP's tsterm library is a fork of the Zowe library used within the tn3270-ng2 app. This fork promises improved ease of maintenance and may make the terminal app easier to enhance down the road, so switching to it is strategic for long-term health.

## Document desktop messages [#733](https://github.com/zowe/zlux/issues/733)
**Priority**: 3

**Description**: Every ZWED I, E, or W error code to be documented with a description and suggested action within the documentation website.

**Status**: Overall about 7/10 of the messages have been documented so far during the last PIs.


# Stretch

## Migrate app-server to use defaults.yaml [#914](https://github.com/zowe/zlux/issues/914)

Currently, app-server determines its config via:

    zowe.yaml which the user actually edited
    env vars
    cli args
    convert-env.sh which sets things via sensing conditions on the env vars
    zluxArgs.js hardcoded defaults

in particular, convert-env.sh has a lot of weird and complicated conditions with plenty of backward compatibility.
zss had similarly complexity and has been reduced to just

    zowe.yaml
    defaults.yaml packaged within zss (https://github.com/zowe/zss/blob/v2.x/staging/defaults.yaml)

So, we can reduce bugs, simplify troubleshooting and make our code easier to understand by outsiders by refactoring the app-server startup to be based upon thezowe YAML solely and use 'defaults.yaml' as a way to set our complex defaults.


## Web browser app enhancements [#880](https://github.com/zowe/zlux/issues/880)

Utilize the shortcuts enhancement to save websites as if they were apps, to allow easier onboarding of non-native websites into zowe.
Some websites need a proxy, such as the APIML or the web browser's builtin proxy. We will work on the backlog of web browser app proxy bugs to broaden compatibility.

# Help wanted

## DB Browser app [#870](https://github.com/zowe/zlux/issues/870)

We want to create an app that is plugable for allowing users to access different types of SQL databases and execute simple queries on them to display the output in tables. 
But currently nobody has volunteered to do the work.

There are currently 2 repositories covering a "db browser" app https://github.com/zowe/?q=db-browser&type=all&language=&sort=
They are structured so that you can have plugins for different DB endpoints, like db2, mysql, postgres, whatever is different enough that it needs a distinct plugin to handle its communication.

But apart from that, it's very basic and pretty old right now.


# Roadmap

![image](https://user-images.githubusercontent.com/30730276/211323335-869e2818-d913-4a64-9cf3-6f099fd31624.png)



# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/99494243697 where we give weekly standup, demos, and discussions.
