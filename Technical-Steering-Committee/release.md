# Zowe Release Process

## Short Summary

1. Code Freeze date is hit
2. Every squad provides a version of the code to integrate into the Release Candidate (RC)
3. RC is built and tested with automatic test suite
4. RC is deployed and tested by squads. 
5. RC is approved by the TSC vote
6. Release is published
7. Documentation is published
8. Release retrospective is held. 


## Milestones and Release Candidates

Zowe Milestones are time-based releases with a schedule published on: [https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence](https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence). The schedule also contains dates for Code Freeze, RC builds, System demo and the expected publishing. 

Each Squad will decide if there will be a deliverable depending on the content that went into the Release. Squads are self-governing and are free to have their own schedules as long as they meet the requirements of the release as defined by the community.


## Release Approval Procedure


### Process when potential stop-ship was found

The TSC via zowe-tsc channel is informed that the potential stop-ship bug was found. The TSC then based on the recommendation from the affected squad/s vote on whether the found bug is a stop ship. The available options are: wait for the fix, return to the previous version of the component, agree it’s not a stop ship. The TSC votes in the channel and the process follows based on the found decision. 

We expect the squads to be able to revert back to the previous version in case it isn’t possible to fix the issue in a time frame to be able to produce release on time. 


### Approval of release passing the tests

The TSC is informed by the Release manager that a new release is ready for public distribution. The appointed member of TSC will review the release and ensure that all requirements that are needed for legal and technical release are met. These include, but are not limited to, updated Documentation, correct LICENSE files and code scans showing no known vulnerabilities.

The vote is going to happen in the zowe-tsc channel as explained in the TSC Structure and TSC Charter. The option is to vote for releasing or for stopping the release. When the votes approves the release a TSC member, or the chair, will notify the release manager. The Release manager will then make the artifacts available and notify the OMP Director of the new release to track the LLC release of a new set of binaries.


## Release Numbering

Each release will be identified by a version number. These numbers are used according to a specific scheme that will give you additional information about the release.  The version numbers are of the form x.y.z-[GA | beta | yyyymmdd] (Semantic Versioning) or major.minor.micro. The final designation indicates whether this is the official Generally Available (GA) version, a beta version or an interim build. Only releases that end with **-GA** are considered official releases.

* Following semantic versioning the following sequences can be assumed MAJOR.MINOR.PATCH
  * MAJOR version when you make incompatible API changes
  * MINOR version when you add functionality in a backwards-compatible manner, and 
  * PATCH version when you make backwards-compatible bug fixes.

* **GA** indicates that this release is an official, supported version of the Zowe project and is suitable for regular use.

* **beta** means that this build is a candidate build that is complete but is under active development and should not be considered for regular use.

* **yyyymmdd** indicates this is an interim build suitable for experimentation or development. It is not intended for general usage and may contain defects that are known and being worked or unknown.
The code can be found[here](https://zowe.org/download/).


## Release Content

There are two significant and different release artifacts for Zowe. The source release and the "convenience build."

The project officially release source code which can be built into an executable version of Zowe. This is the core deliverable of Zowe and is intended for downstream consumers that may use Zowe in their projects or products as well as other developers.

The "Convenience Build" is composed of courtesy release artifacts:

* An installer and all available artifacts to run and use Zowe on z/OS including sample applications.
* An offline installable version of the Zowe CLI. The CLI is split between two archives: a "core" archive containing the CLI base and Secure Credential Store, and a "plugins" archive containing community CLI plugins.

The convenience build is intended for consumers that simply want to use Zowe and its APIs. This is built from the source code release above. Code from other projects that have compatible open source licenses may be included to support overall Zowe capability. Like bash, git, python as well as zOS-Workflows or other related projects to facilitate a complete software stack for Zowe. Zowe may release its convenience build artifacts at the same time or independently of one another per project discretion and vote in accordance with the normal[ release process](https://github.com/zowe/zlc/blob/master/process/release.md#release-approval-procedure).


## System demo

At the release time every Squad presents their work during the System demo. The System demo is open to all and the squads present the new functionality introduced in the release. The date is available in the [https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence](https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence) document. The meeting is recorded and the recording will be published. 


## Post Release Activities

Once it has been decided to ship a release, the Zowe Build team publishes the deliverable along with all documentation. 

After the release is concluded there will be a retrospective on the release held, where the issues will be identified and from which will come the recommendations on the update to the release process and this document. The retrospective is prepared by the Zowe Build team and the TSC is responsible for it. 
