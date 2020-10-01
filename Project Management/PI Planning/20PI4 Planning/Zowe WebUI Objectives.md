# Zowe Web UI Squad - 20PI4 Objectives (October 20 to January 2021)

# 1. Docker for servers: Linux & zLinux containers go live
In PI3:
* Containers were successfully built for Linux and zLinux
* Containers for Linux are now automated in the pipeline each release.
* Various config options (external/internal certs, plugins, instance files) tested and documented
* Marist access to zLinux granted
* Install & config documentation drafted

We're about ready to consider the server docker image a "beta", in that we want feedback to improve the experience.
Therefore, in this PI we will launch the beta on zowe.org and dockerhub, and if feedback is positive Docker may end up as a first-class option by the end of PI4.
We will also automate zLinux builds, and begin to explore zCX.

## Deliverable
* Official zowe server components installer for docker linux & zlinux on zowe.org
* Documentation to cover how & why to use the docker options
* Prototype of zCX container

## Dependency
None currently but the systems and documentation squads may wish to review and discuss

## Risk
* Access to zCX may limit progress on it
* Adoption may vary by linux availability and comfort. More outreach, education, documentation may be needed.

# 2. Initial HA/FT for all Zowe server components
Community has narrowed down possibilities for HA/FT to a few achievable tasks
* Create a TCP-based caching service for components to store state
    * VSAM-based storage a likely first implementation
* Enhance any servers with state to utilize caching service
    * In WebUI Squad, app-server & zss have state. NodeJS library convenience may lead to app-server implementation first.
* Launcher service needed for starting, monitoring, and restarting components upon failure
    * WebUI Squad contributing the Zowe launcher or zLauncher as a simple & server-agnostic monitor and invoker of component scripts
    * Launcher to continue to be enhanced to meet needs of HA/FT task
* Package caching service and launcher into release
* Document how HA/FT works, guarantees and limitations, configuration and prerequisites

## Deliverable
HA/FT that is usable to improve uptime on at least 1 LPAR, if not the entire sysplex.
Desire to achieve HA/FT in the Docker context, but focus to solve 1 z/OS LPAR first.

## Dependency
Highly cross-squad task that requires leadership/ownership of tasks to drive completion

## Risk
* Highly cross-squad task that requires leadership/ownership of tasks to drive completion
* Dependencies or configuration that makes the solution unattractive... we've eliminated a few options from many PI3 discussions

# 3. Desktop Editor unification
MVS & USS Explorers in the Zowe Desktop have overlap with the Desktop's Editor but are maintained by same squad.
Build up the Editor so that missing featuers that are found in the MVS/USS Explorers are added to the Editor.
Editor will become a one-stop place for the out-of-the-box editing experience in the Desktop.

## Deliverable
Specific features to be added include:
* Syntax highlighting for REXX (JCL and many other languages done already)
* File abilities: rename, cut, copy, paste, chmod, chown, chtag
* Dataset abilities: Write (requires locking), create, copy
* Adding/reorganizing hotkeys for existing and new features
* Adding any missing refresh abilities where missing
* Adding any missing progress indicators when loading
* hoverhelp (rexx, jcl)

**NOTE:** USS & MVS explorers will still be bundled as they should not be removed during an LTS.

## Dependency
None?

## Risk
Hoverhelp not yet researched. Feature completion will depend upon library capabilities.


# 4. App Du Quarter
Many important and interesting tasks Desktop would be good for are still lacking Apps.
Work towards an MVP of a new App: A USS "process explorer" or "task manager"
Motivation is to make working with USS easier, which is a pain point for Zowe servers today.

## Deliverable
* A new App. All features desired may not be implemented in 1 quarter, but many will.
* New REST APIs that may be useful to others

## Dependency
None

## Risk
Delivery mechanism needs to be determined: Is it bundled? Is it an optional download?

# 5. Package manager UX improvements
Conda proven to work for App Framework, and unified package management ideas should allow 2 directions
1. Other types of plugins can easily be delivered via conda
2. Package structure should work well with other package managers, too.

To drive adoption & feedback, apps not currently bundled into zowe release (and upcoming apps) can have a public conda server as a delivery option
Rocket can provide public & free download for conda on z/OS, already public & free elsewhere.
miniconda includes all its prereqs, and it may be possible to bundle it into a Zowe deliverable such as Docker.

## Deliverable
* Set up a public conda server for extended (non-bundled) apps download
    * Test if artifactory can be used for this purpose, as conda servers can be simple webservers.
* Automate upload of apps onto the conda server
    * Sample Node API
    * Sample Trial App - iFrame app based on create react app
    * App generator
    * The app du quarter
    * Long term: move sample angular, react, and iframe apps out of release and into here?
    * Long term: If USS & MVS Explorers consolidated into Editor, move them here too?

## Dependency
Will continue to engage in community to improve package management technology and resolve shortcomings

## Risks
* If artifactory cannot be used as a conda server, need to find alternative (thankfully low footprint)
