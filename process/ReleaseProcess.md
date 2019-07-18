# Release Process and Guidelines

## What is a Zowe release

A release of the Zowe project consists of two 'convenience' deliverables - CLI binaries, and a PAX file which contains the Zowe API Mediation Layer, Zowe Desktop, and Zowe Explorer-Server. The CLI binaries are obtainable either through standard npm install commands, or, for users with limited internet access, through a convience zip file which allows for offline installation. The CLI convenience zip and Zowe PAX are both available through the official [Zowe Website](https://www.zowe.org).

Each Zowe release comes with updates to user installation, configuration, and extension documentation. The documentation is developed in the [docs-site repository](https://github.com/zowe/docs-site), is accessible through the [Zowe Website](https://www.zowe.org), and is hosted directly on [Github.io](https://zowe.github.io/docs-site/).

The focus of this document refers to generating stable releases of Zowe. For bleeding edge Zowe builds, see [Zowe Nightly Builds](#zowe-nightly-builds).

Generating any release of Zowe requires gathering artifacts from each of Zowe's subprojects, organizing them into the Zowe deliverables, testing said Zowe deliverables, signing the deliverables, and publishing the deliverables in sync with Release Notes / Documentation Updates.

## How to generate a release

Stable Zowe releases are generated from [zowe-install-packaging](https://github.com/zowe/zowe-install-packaging) repository **master** branch. The versions defined in [zowe-install-packaging](https://github.com/zowe/zowe-install-packaging) are Zowe official stable version.

In order to generate a new release of Zowe, each of the below checklists must be completed. The checklists below are roughly ordered based on prerequisite resolution. 

### Subproject Checklist.
  
* Each subproject **must** confirm the version(s) of their planned deliverable artifacts. **Official Zowe deliverables must not depend on SNAPSHOTS or other imprecise artifact versioning schemas**. For details, see [Subproject Release Cadence](#subproject-release-cadence).
* Each subproject **must** identify if any of their dependencies have changed since the last release.
* Each subproject **must** create release notes for their project. For details, see [Creating Release Notes](#creating-release-notes)

### Zowe CLI Convenience Bundle Checklist

* Confirm @next versions of the core CLI as well as plugins for packaging.

### Zowe Documentation Checklist

* Aggregate release notes from the Zowe subprojects, and place them in the [docs-site repository](https://github.com/zowe/docs-site).
* Merge release notes and any other docs-site feature branches into the [docs-staging branch](https://github.com/zowe/docs-site/tree/docs-staging).

### Zowe PAX Checklist

* Build Release Candidate PAX (Automated)
* Test Release Candidate PAX install + smoke (Automated)
* Test PAX with any manual tests not covered by automation. See [Leftover Manual Tests](##Manual%20Testing)
* IF errors exist within the PAX
* Sign the PAX

### Publish Release Checklist

* Publish signed PAX file to https://projectgiza.org website.
* Publish Zowe CLI bundle to https://projectgiza.org website.
* Update zowe.org website with new version information on both PAX file and CLI bundle.
* Publish new documentation.
* Publish announcements (slack, mailing lists, zowe.org home page, elsewhere?).

## Subproject Release Cadence

Stable Zowe releases **must** contain artifacts which have stable, addressable versions. Therefore, it is **recommended** that Zowe subprojects publish release versions in accordance with [Semantic Versioning](https://semver.org) guidelines. Pre-release or build metadata formats (1.0.0-xyz.date, 1.0.0+xyz.date) are conditionally acceptable as stable versions. Less precise formats such as the Maven 'SNAPSHOT' format are not acceptable as they cannot refer to a static artifact level. 

This guide does not dictate stable release cadence nor how to achieve said cadence, though frequent releases are preferable. For implemented examples on frequent release cadence, see the [Zowe CLI Subproject](https://github.com/Zowe/zowe-cli) or ???.

## Creating Release Notes

Release notes must have a human-readable summary of major changes compared to the prior release. 
Release notes must also identify every publicly known vulnerability with a matching CVE assignment.

## Automated And Manual Testing

### Automated Testing

Each release candidate build will be sanity validated with test cases designed in [zowe-install-test](https://github.com/zowe/zowe-install-test).

The most latest test result can be found from Jenkins server pipeline `zowe-install-test` master branch. Also the nightly build test status will be published to [#zowe-build](https://openmainframeproject.slack.com/messages/CC9QW5NJE/) Slack channel.

### Manual Testing

| subproject | manual test case | remediation |
|---|---|---|
| zowe-cli | validate version matches intended release | present information about bundled CLI versions clearly |
| zowe-cli | validate installation follow doc | automate installation of cli + plugins. Follow user guide doc must remain manual. |
| api-layer | 11 known manual tests | See [Manual Tests](https://github.com/zowe/api-layer/blob/master/docs/manual_tests.md) |

## Zowe Nightly Builds

Zowe Nightly Builds may contain those less specific versions schemas that the stable release bans. Nightly builds are available for public consumption, but may contain bugs or incomplete features. Nightly builds are generated from [zowe-install-packaging](https://github.com/zowe/zowe-install-packaging) repository **staging** branch, or **v?.x/staging** LTS branches.

The nightly build allows subprojects to gain a head start on their current release process, as they can download the nightly build at any time to test their bleeding edge components. If the new feature is too unstable to be included into current release, then they should coordinate with the CI/CD team to create a temporary **staging/\*** branch off of **staging**. This process is introduced in [Branches Guideline](BranchesGuideline.md) section. They can use this temporary staging branch to test their components integration with the Zowe PAX before pushing the latest component to master.
