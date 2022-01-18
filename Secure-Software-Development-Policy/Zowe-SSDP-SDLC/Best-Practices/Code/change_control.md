# Change Control

The following list is based on the [Core Infrastructure Initiative](https://bestpractices.coreinfrastructure.org/en/criteria/0)

## Public version-controlled source repository

* The squad SHOULD use Git repository hosted under [Zowe GitHub](https://github.com/zowe).  

## Unique version numbering

* The squad's results MUST have a unique version identifier for each release intended to be used by users.
* It is SUGGESTED that the [Semantic Versioning (SemVer)](https://semver.org/) or [Calendar Versioning (CalVer)](https://calver.org/) version numbering format be used for releases.

## Release notes

* The squad MUST provide, in each release, release notes that are a human-readable summary of major changes in that release to help users determine if they should upgrade and what the upgrade impact will be. The release notes MUST NOT be the raw output of a version control log (e.g., the "git log" command results are not release notes).
* The release notes MUST identify every publicly known run-time vulnerability fixed in this release that already had a CVE assignment or similar when the release was created. This criterion applies only to the project results, not to its dependencies. 