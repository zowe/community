# Zowe Web UI - 24PI4 - (2024/10/22 - 2025/02/03)

# In-squad tasks

## AT-TLS Documentation [#1024](https://github.com/zowe/zlux/issues/1024)
**Priority**: 1

**Description**: With the implementation of AT-TLS in #989 it's time to revisit existing AT-TLS documentation such as ongoing efforts zowe/docs-site#3897 it would be good to consolidate APIML and AppFw AT-TLS documentation into one document, as much as possible anyway.
This document may benefit from architecture diagrams to show what network flows go with what AT-TLS rules.

## Change "Vsam init" step of Install Wizard into "Caching service init" step [#261](https://github.com/zowe/zen/issues/261)
**Priority**: 2

**Description**: "zwe init vsam" is not needed in a default configuration of zowe v3, because the caching-service uses infinispan by default.
vsam is still allowed, but is deprecated and not recommended as it is just inferior and more trouble.

since the purpose of the vsam page is about setup of storage for the caching service, this page could be changed to focus on general caching service setup, such as covering infinispan configuration if infinispan is chosen, or vsam setup of vsam is chosen.

# Stretch

## Install wizard configmgr file handling [#221](https://github.com/zowe/zen/issues/221)

**Description**: Configmgr supports having multiple yaml files and that they can be in parmlib or unix.
But, the zwe init steps that the install wizard uses doesnt use configmgr, limiting this approach.
When zwe can handle it, the install wizard should likewise handle loading multiple yamls, and saving the zowe yaml configuration to one or more parmlib/files.

How would we visualize multiple yamls? With tabs! Make the editor have a tab interface with a plus button to add a new one, and a filename that allows them to put to unix or parmlib.
There could even be an option somewhere (last tab? different page? button?) which will merge all the yaml files together so the user can view/preview what zowe would actually use at runtime.

the install wizard could even handle configmgr template resolution preview.
Much of the logic for doing so is already in JS code, here https://github.com/zowe/zlux-server-framework/blob/v2.x/staging/utils/yamlConfig.ts


## Install Wizard zOSMF (or Zowe CLI) upload option [#223](https://github.com/zowe/zen/issues/223)

**Description**: Uploading content via FTP can be slow. Since users of the install wizard are prompted to use zosmf at some point, if we prompted earlier, we could use that as a file transfer mechanism.

## Install Wizard Advanced Certificate setup, list, and validate page [#67](https://github.com/zowe/zen/issues/67)

**Description**: Resolve common setup confusion about certificates by using tools like curl, keytool, and TSO commands to list keystore contents and check certificate properties to avoid issues like users not typing in the correct content into the YAML, or choosing certificates which do not meet zowe's requirements.


# How to get involved
### Other tasks
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zlux/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Roadmap

The roadmap can be seen here https://github.com/orgs/zowe/projects/18/views/4

### Contact us
Please find us in the #zowe-appfw slack if you wish to become involved!

Join us every Friday at 9am EST on Zoom at https://zoom-lfx.platform.linuxfoundation.org/meeting/91461158520?password=998640fb-aa58-4b8a-93bf-696daa52eac4 where we give weekly standup, demos, and discussions.
