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

Zowe Milestones are time-based releases with a schedule published on: [https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence](https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence). The schedule also contains dates for Code Freeze, RC builds, System Demo, and the expected publishing. 

Each Squad decides if there will be a deliverable depending on the content that went into the Release. Squads are self-governing and are free to have their own schedules as long as they meet the requirements of the release as defined by the community.

Each squad is required to provide an older version of the component for release in case a stop-ship bug is found, and the fix cannot be delivered in time to meet the release date. The decision around the direction is taken by the release group.

For each release a release group is established. The group contains at least one member from each of the server side squads. The goal of this group is to coordinate the release process and keep its members updated on the status of each server squad. The responsibility of this group is also to decide what to do with the found bugs. Once there is an RC which this group believes should be released, the release group passes the relevant release to vote on to the TSC. The daily updates are posted to the apprporiate channel so anyone can follow the curent status. 

## Release Approval Procedure

### Process when potential stop-ship was found

When any of the squads find or are informed about a potential stop-ship, the highest priority for the squad is to analyse the found issue and, within a day's time, come up with proposal about next steps. The other squads can continue testing. This is happening in context of the release group. 

Potential proposals for resolution:
- Fix the issue and release a new version of the component. This contains info on when the fix will be available. 
- Revert to previous version of the component
- Release despite known bug. Accept the bug as known, file it as an issue, and release despite the bug.

The decision what to do with a specific bug is up to the release group. If the group cannot come to a decision, it is possible to escalate to TSC.  

### Approval of release passing the tests

The TSC is informed by the release group that a new release is ready for public distribution. The appointed member of TSC reviews the release and ensures that all requirements that are needed for legal and technical release are met. 

The vote is conducted in the zowe-tsc channel as explained in the TSC Structure and TSC Charter. The option is to vote to release or to stop the release. When the votes approves the release, a TSC member, or the chair, notifies the release group. The release group then makes the artifacts available and notifies the OMP Director of the new release to track the LLC release of a new set of binaries.

If the decision is to stop the release TSC must propose alternative course of action. 


## Release Numbering

Each release is identified by a version number. These numbers are used according to a specific scheme that provides additional information about the release. Version numbers are in the form x.y.z (Semantic Versioning) or major.minor.micro. 

* The following semantic versioning the following sequences can be assumed MAJOR.MINOR.PATCH
  * MAJOR version when you make incompatible API changes
  * MINOR version when you add functionality in a backwards-compatible manner, and 
  * PATCH version when you make backwards-compatible bug fixes.
  
The code can be found [here](https://zowe.org/download/).

The Release Candidates add RC to the end of the version and are not considered to be the official release. The RC build is not available directly on zowe.org/download, but can be found in Artifactory libs-release-local/org/zowe/. 

Apart from the regular releases and Release candidates, we also promote nightly builds in libs-release-local/org/zowe/nightly/. The Zowe night build name will look like zowe-<version>-staging-<build-id>-<timestamp>.pax.

## Release Content

There are following parts build as a part of the release:

- z/OS Component
  * Convenience Build
  * SMP/E Build
- CLI component (Also downloadable from npmjs.org)
  * CLI Core
  * CLI Plugins
- Client SDKs
  * Node.js Client SDK
  * Python Client SDK
- Zowe Explorer (Only downloadable from Visual Studio Code Marketplace)
- Docker build (Tech preview) (Also downloadable from hub.docker.com)
  * amd64
  * x390x
- Source build

## System demo

At release time, each Squad presents its work during the System demo. The System demo is open. Squads present new functionality introduced in the upcoming release. The schedule is presnted in the following document:[https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence](https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence) The meeting is recorded, and the recording is subsequently published.

## Post Release Activities

Once it has been decided to ship a release, the Zowe Build team publishes the deliverable along with all documentation. 

After the release is concluded, there will be a retrospective on the release held, where the issues will be identified and from which will come the recommendations on the update to the release process and this document. The retrospective is prepared by the Zowe Build team and the TSC is responsible for it. 
