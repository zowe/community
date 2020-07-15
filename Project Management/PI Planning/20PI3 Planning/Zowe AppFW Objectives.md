# Zowe App Framework 20PI3 Objectives (June 2020 to September 2020)

## High Availability for App Server [#446](https://github.com/zowe/zlux/issues/446)

I need to be able to use REST APIs and Zowe websites even in the event that one of the backing servers crashes, so that I can use Zowe in a high available situation.

Concerns: App server has state (plugins can bring in their own state, app server has caches for performance)... this state makes HA solutions like Sysplex Distributor not enough to accomplish HA.
Therefore, we likely need to implement a leader-and-follower solution so that only 1 server is used at a time, to avoid issues of state synchronization errors.

Plan: Use APIML for redundant servers to discover each other, and then have these servers communicate with each other to synchronize state. Have only 1 server accessible to the users at a time, with the other servers being updated via a connection to that primary server.

- Find performance baseline for RAFT implementation [#463](https://github.com/zowe/zlux/issues/463)
- Document use of HA for App server [#464](https://github.com/zowe/zlux/issues/464)
- Cross-squad discussion about preferred HA setup [#465](https://github.com/zowe/zlux/issues/465)
- Add configuration options to use HA in mainline [#466](https://github.com/zowe/zlux/issues/466)


## High Availability for ZSS [#447](https://github.com/zowe/zlux/issues/447)

 need to be able to use REST APIs and Zowe websites even in the event that one of the backing servers crashes, so that I can use Zowe in a high available situation.

Concerns:

ZSS has state (plugins can bring in their own state)... this state makes HA solutions like Sysplex Distributor not enough to accomplish HA.
Therefore, we likely need to implement a leader-and-follower solution so that only 1 server is used at a time, to avoid issues of state synchronization errors.

ZSS needs to be made into a eureka client (also needs to be an HTTP client)

ZSS needs to be a websocket client

Plan: Use APIML for redundant servers to discover each other, and then have these servers communicate with each other to synchronize state. Have only 1 server accessible to the users at a time, with the other servers being updated via a connection to that primary server.

- Make ZSS a Eureka client (auto-register to apiml) [#467](https://github.com/zowe/zlux/issues/467)
- Create websocket client code for zss [#468](https://github.com/zowe/zlux/issues/468)
- Implement leader election from RAFT [#469](https://github.com/zowe/zlux/issues/469)
- Implement stat sync of RAFT [#470](https://github.com/zowe/zlux/issues/470)
- Find performance baseline for ZSS HA [#471](https://github.com/zowe/zlux/issues/471)


## High Availability for Explorer Servers [#448](https://github.com/zowe/zlux/issues/448)

I need to be able to use REST APIs and Zowe websites even in the event that one of the backing servers crashes, so that I can use Zowe in a high available situation.

Concerns:

If Sysplex Distributor doesn't "Just work" for API servers, what to do next?
Moving explorer UI server code to app server could sacrifice load balancing solutions for HA
Dependencies:

We should follow APIML squad to learn progress about HA, OR architecture calls?
Plan:

Move explorer UI server code into app server plugin, such that app server HA is inherited
Create static definition file to tell APIML to continue to host UI code at old URLs, for backwards compatibility
Test Sysplex Distributor with Java API servers to see if HA "just works"

## Improved Package Management for Apps [#449](https://github.com/zowe/zlux/issues/449)

Administrators have one tool to see, manage, upgrade, and install apps in each Zowe instance.
This needs to work in Docker and z/OS, so we need to start with core technologies that work on both linux & z/os.
The extended capabilities will be wrapping these core features.

Define a zowe tool package management API
Install: should to best of ability know dependencies
Pre-install-check (dry-run): do dependency checks, configuration checks, prior to doing any FS modifications
Upgrade
Uninstall
Manage: audit... what do you have and where is it located?
Searching seems out of scope
Make first version of metadata system for dependency management
Version
Name
OS: MUST it run on z/os, or can it run in docker too?
State on whether or not a package is a Component (in need of its own start.sh, validate.sh, etc)
Implement the API (let's try conda)
----- Plan to get up to step 3 ----
Make a unix tool to get reports from the API
----- Stretch to get up to step 4 ----
Figure out how to get that data in sync with SMPE... does this require that SMPE is the installer that invokes #1,#2
An idea of a unified tool that may handle both package management and instance management may look like:
zowe plugin install --instanceId=5 --pluginLocation=/a/b/c
zowe instance start --instanceId=5

We can expect that the metadata will need to be visible to programs like SMPE, PSI, so we need to plan for wrapping our technology in them at some point.
Install process: PSI -> SMPE -> Conda -> actual zowe files
Query utility: TN3270 (rexx, bpxbatch, ???) -> shell script -> ???

Concerns:

How to satisfy SMPE
How to satisfy USS
We need feedback from SMPE & 3270 veterans as to what their ideal user experience is here
How to elegantly and formally handle installs that need datasets, including vsam

- Draft set of end-user features to implement [#472](https://github.com/zowe/zlux/issues/472)
- Document feature overlap satisfied by existing package managers [#473](https://github.com/zowe/zlux/issues/473)
- Create scripts for features not covered by package managers [#474](https://github.com/zowe/zlux/issues/474)
- Discuss building options with package manager owners [#475](https://github.com/zowe/zlux/issues/475)
- Create end user tool that drives scripts, package manager [#476](https://github.com/zowe/zlux/issues/476)
- Document concepts and use of tool [#477](https://github.com/zowe/zlux/issues/477)

## Beta download of Zowe in Docker [#793](https://github.com/zowe/zowe-install-packaging/issues/793)

With (among other things) the introduction of z/OS Container Extensions customers have started asking about running bits of Zowe under zCX, or off platform in containers.
I think there are 2 potential drivers here:

Simplicity - rather than having to do SMPE install of the Java/Node microservices and mange HA environments, if we could install and lifecycle these via docker containers and something like kubernetes & helm to make it easier to get set up and simpler for us and customers to manage. This could also make development easier and attract new third parties as a result.
Pricing - currently node is not ziip eligible, but zCX is, so allowing customers to run in zCX, or off platform would remove another hurdle for adoption of the zowe server.
@VitekVlcek-Broadcom has started some work under https://github.com/zowe/zowe-dockerfiles/blob/master/dockerfiles/zowe-1.5.0/README.md, but we'll probably need to break it down more and extend it going forward.

Plan:

- [SPIKE] Research Kubernetes, Helm, and Docker Swam to see how they can be used [#452](https://github.com/zowe/zlux/issues/452)
- Integrate Docker within the current RC pipeline [#453](https://github.com/zowe/zlux/issues/453)
- Ensure AT-TLS for ZSS is working properly [#454](https://github.com/zowe/zlux/issues/454)
- [SPIKE] Further research for docker use [#456](https://github.com/zowe/zlux/issues/456)
- Create Mock Server of ZSS that the Docker image could connect to if ZSS is unavailable [#457](https://github.com/zowe/zlux/issues/457)
- Release beta on the Zowe website for feedback [#458](https://github.com/zowe/zlux/issues/458)

## Improved lifecycle scripting [#1440](https://github.com/zowe/zowe-install-packaging/issues/1440)

Hills:
**As a z/OS System Programmer I can manage extensions to Zowe in a reliable, repeatable and consistent manner across conformant offerings, through download, install, configure into an existing Zowe instance, auditability of which extensions are active, upgrade, uninstall

As a z/OS conformant extension I can package my offering in a way that z/OS system programmers can download and install/extend/configure their existing Zowe instances in a consistent way.**

Notes:
There are a number of issues with the current version of Zowe that make it quite coupled and not very flexible. This will cause challenges going forward when thinking about HA, hybridisation/containerisation of Zowe and adoption by extenders.

[Extending Zowe Lifecycle.pptx](https://github.com/zowe/zowe-install-packaging/files/4787461/Extending.Zowe.Lifecycle.pptx)

Plan:

- [SPIKE] Research benefit of YML vs JSON vs ENV for Zowe instance config [#455](https://github.com/zowe/zlux/issues/455)
- [SPIKE] Research component package layout [#459](https://github.com/zowe/zlux/issues/459)
- Improve Zowe core component install [#460](https://github.com/zowe/zlux/issues/460)
- Define universal naming conventions and IDs [#461](https://github.com/zowe/zlux/issues/461)
- Create new script for installing components [#462](https://github.com/zowe/zlux/issues/462)

