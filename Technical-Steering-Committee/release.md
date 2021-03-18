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

Each squad needs to be able to provide older version of the component for release in case stop-ship bug is found, and the fix can't be delivered in time to meet release date. 

## Release Approval Procedure

### Process when potential stop-ship was found

When any of the squads find or is informed about the potential stop-ship, the highest priority for the squad is to analyse the found issue and within a day time come up with proposal about next steps. The other squads can continue testing. 

Potential proposals for resolution:
- Fix the issue and release a new version of component. This contains info on when the fix will be available. 
- Revert to previous version of the component
- Release despite known bug. Accept the bug as known, file it as an issue and release despite the bug.

The TSC via zowe-tsc channel is informed that the potential stop-ship bug was found. The TSC then based on the recommendation from the affected squad/s vote on whether the found bug is a stop ship. The available options are: wait for the fix, return to the previous version of the component, agree it’s not a stop ship. The TSC votes in the channel and the process follows based on the found decision. 

We expect the squads to be able to revert back to the previous version in case it isn’t possible to fix the issue in a time frame to be able to produce release on time. 


### Approval of release passing the tests

The TSC is informed by the Release manager that a new release is ready for public distribution. The appointed member of TSC will review the release and ensure that all requirements that are needed for legal and technical release are met. These include, but are not limited to, updated Documentation, correct LICENSE files and code scans showing no known vulnerabilities.

The vote is going to happen in the zowe-tsc channel as explained in the TSC Structure and TSC Charter. The option is to vote for releasing or for stopping the release. When the votes approves the release a TSC member, or the chair, will notify the release manager. The Release manager will then make the artifacts available and notify the OMP Director of the new release to track the LLC release of a new set of binaries.


## Release Numbering

Each release will be identified by a version number. These numbers are used according to a specific scheme that will give you additional information about the release.  The version numbers are of the form x.y.z (Semantic Versioning) or major.minor.micro. 

* Following semantic versioning the following sequences can be assumed MAJOR.MINOR.PATCH
  * MAJOR version when you make incompatible API changes
  * MINOR version when you add functionality in a backwards-compatible manner, and 
  * PATCH version when you make backwards-compatible bug fixes.
  
The code can be found [here](https://zowe.org/download/).

The Release Candidates add RC to the end of the version and aren't considered official release. The RC build isn't available directly on zowe.org/download, but can be found in Artifactory libs-release-local/org/zowe/. 

Apart from the regular releases and Release candidates we also promote nightly builds in libs-release-local/org/zowe/nightly/. The Zowe night build name will look like zowe-<version>-staging-<build-id>-<timestamp>.pax.

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

At the release time every Squad presents their work during the System demo. The System demo is open to all, and the squads present the new functionality introduced in the release. The date is available in the [https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence](https://github.com/zowe/community/blob/master/Project%20Management/Schedule/Zowe%20PI%20%26%20Sprint%20Cadence.md#sprint-cadence) document. The meeting is recorded, and the recording will be published.

## Post Release Activities

Once it has been decided to ship a release, the Zowe Build team publishes the deliverable along with all documentation. 

After the release is concluded there will be a retrospective on the release held, where the issues will be identified and from which will come the recommendations on the update to the release process and this document. The retrospective is prepared by the Zowe Build team and the TSC is responsible for it. 
