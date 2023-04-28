# Zowe Web UI - 23PI2 - (May 2023 to July 2023)

# In-squad tasks 📈

## Improve documentation and up & running experience
**Priority**: 1

**Description**: Identify and continue working w/ Doc squad, customers, and community members on which sections of the Doc need to be added/reorganized to improve the up & running experience, increase organization of security configuration, and decrease customer confusion overall by finding common pain points. Thank you to Joe W, Joe D, Sean and others who I'm forgetting for leading the investigation effort there

**Status**: Work has begun on improving the state of our Doc. A few changes have already been made to update the example-zowe.yaml to make it as relevant as possible, while adding more comments. The security configuration section explaining keyring configurations has gotten better. Overall, there is still lots of work to do and the team will keep a close eye to monitor on-going and new community or internal sources of confusion. Future changes aimed at simplifying may be also code-driven

## Switch tn3270-ng2 app to use OMP's tsterm [#869](https://github.com/zowe/zlux/issues/869)
**Priority**: 2

**Description**: OMP's tsterm library is a fork of the Zowe library used within the tn3270-ng2 app. This fork promises improved ease of maintenance and may make the terminal app easier to enhance down the road, so switching to it is strategic for long-term health.

**Status**: Work is 95% completed for this and is expected to be done for this PI. Congratulations to Martin and others for their great work there!

## Assist the Doc team with release, pipeline, and website issues
**Priority**: 3

**Description**: Continuing Sean's research or exploring new opportunities into decreasing memory consumption for the Doc build like updating/refactoring Docasaurus, or changing to a different platform, or doing something new etc. Provide some engineering depth to fix quick issues or begin work on implementing larger scoped decisions. This may need granted permissions from John Mertic(?) to review Doc build. (https://app.netlify.com/sites/zowe-docs-master/deploys)

**Status**: As mentioned, Sean provided some great initial research on next steps on decreasing the Doc website pipeline woes and Leanid followed up with them on this. Last PI, Leanid also helped to fix the Algolia search integration with the Doc website which has made the search functional again and thank you to Fernando for later helping maintain this. 

# Stretch 📊

## Shortcut and folder support for Desktop [#821](https://github.com/zowe/zlux/issues/821)

**Description**: Turn prototype into code ready for release. In previously created prototype, app2app actions of the Desktop could be enhanced to be used as a shortcut, and both shortcuts and apps could be organized into folder groups. By organizing this way, folder groups can be created to pave the way towards future z/OSMF embedding in the Desktop

**Status**: Prototype is out there but the code will need lots of refactoring, review, and bug fixes.

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

So, we can reduce bugs, simplify troubleshooting and make our code easier to understand by outsiders by refactoring the app-server startup to be based upon the zowe YAML solely and use 'defaults.yaml' as a way to set our complex defaults.

## OpenSSF Best Practices Badge research [#934](https://github.com/zowe/zlux/issues/934)

**Description**: This covers items required for Gold status from within our squad. The investigation effort needs to be done to determine how far we have left to go

**Status**: Not begun

## Document desktop messages [#733](https://github.com/zowe/zlux/issues/733)

**Description**: Every ZWED I, E, or W error code to be documented with a description and suggested action within the documentation website.

**Status**: Overall about 7/10 of the messages have been documented so far during the last PIs.

# Help wanted ❕

Zowe is tackling big problems with a small number of very talented people. Help us investigate Doc site issues and help propose solutions or help implement them & submit Doc-related feedback and installation feedback to improve the content of Doc itself. If you're a customer, diagnose and put into writing your pain points and help us improve our written content, our Zowe configuration, or propose new suggestions

# Roadmap (out of date partially)

![image](https://user-images.githubusercontent.com/30730276/211323335-869e2818-d913-4a64-9cf3-6f099fd31624.png)

# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-dev slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom.us/j/97568592079 where we give weekly standup, demos, and discussion

# Icebox 🧊

## Web browser app enhancements [#880](https://github.com/zowe/zlux/issues/880)

Utilize the shortcuts enhancement to save websites as if they were apps, to allow easier onboarding of non-native websites into zowe.
Some websites need a proxy, such as the APIML or the web browser's builtin proxy. We will work on the backlog of web browser app proxy bugs to broaden compatibility.

## DB Browser app [#870](https://github.com/zowe/zlux/issues/870)

We want to create an app that is plugable for allowing users to access different types of SQL databases and execute simple queries on them to display the output in tables. 
But currently nobody has volunteered to do the work.

There are currently 2 repositories covering a "db browser" app https://github.com/zowe/?q=db-browser&type=all&language=&sort=
They are structured so that you can have plugins for different DB endpoints, like db2, mysql, postgres, whatever is different enough that it needs a distinct plugin to handle its communication.

But apart from that, it's very basic and pretty old right now.
