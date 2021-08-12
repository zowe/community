# Change Control

The following list is based on the [Core Infrastructure Initiative](https://bestpractices.coreinfrastructure.org/en/criteria/0)

## Public version-controlled source repository

* The project MUST have a version-controlled source repository that is publicly readable and has a URL. [repo_public](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.repo_public)
* The project's source repository MUST track what changes were made, who made the changes, and when the changes were made. [repo_track](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.repo_track)
* To enable collaborative review, the project's source repository MUST include interim versions for review between releases; it MUST NOT include only final releases. [repo_interim](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.repo_interim)
* It is SUGGESTED that common distributed version control software be used (e.g., git) for the project's source repository. [repo_distributed](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.repo_distributed) 

## Unique version numbering

* The project results MUST have a unique version identifier for each release intended to be used by users. [version_unique](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.version_unique)
* It is SUGGESTED that the [Semantic Versioning (SemVer)](https://semver.org/) or [Calendar Versioning (CalVer)](https://calver.org/) version numbering format be used for releases. It is SUGGESTED that those who use CalVer include a micro level value. [version_semver](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.version_semver)
* It is SUGGESTED that projects identify each release within their version control system. For example, it is SUGGESTED that those using git identify each release using git tags. [version_tags](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.version_tags) 

## Release notes

* The project MUST provide, in each release, release notes that are a human-readable summary of major changes in that release to help users determine if they should upgrade and what the upgrade impact will be. The release notes MUST NOT be the raw output of a version control log (e.g., the "git log" command results are not release notes). Projects whose results are not intended for reuse in multiple locations (such as the software for a single website or service) AND employ continuous delivery MAY select "N/A". {N/A justification} {Met URL} [release_notes](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.release_notes)
* The release notes MUST identify every publicly known run-time vulnerability fixed in this release that already had a CVE assignment or similar when the release was created. This criterion may be marked as not applicable (N/A) if users typically cannot practically update the software themselves (e.g., as is often true for kernel updates). This criterion applies only to the project results, not to its dependencies. If there are no release notes or there have been no publicly known vulnerabilities, choose N/A. {N/A justification} [release_notes_vulns](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.release_notes_vulns) 