# Build Migration

| Repository Name | Blocking Infrastructure | Migration Status | Comments and Notes |
|---|---|---|---|
| imperative | distributed | ready | [Imperative Notes](###Imperative) | 
| zowe-cli | z/OS | blocked | [Zowe-CLI Notes](###Zowe-CLI) |
| docs-site | distributed   | ready | May require additional pay-for tooling? |
| zowe-cli-profile-migration | distributed | blocked | No build exists yet |
| zlc | n/a | n/a | n/a |
| explorer-jes | distributed | ready | [Explorer-JES Notes](###Explorer-jes) |
| zlux | z/OS | pending review | [ZLUX Notes](###zlux) |


### Imperative
The imperative repository has no dependencies on z/OS infrastructure, and should be moved immediately.
**Open Question: Where do we publish the build binary?**

### Zowe-CLI
The zowe-cli project requires z/OS Infrastructure for system tests, and the build currently runs on proprietary machines. 
z/OS Software required: z/OSMF, TSO, USS, PLEX (MONOPLEX may be acceptable). 
z/OS Security requirements: A user with the ability to execute z/OSMF REST APIs, including job submission and console command execution.

### Explorer-jes
Where do we publish the build binary? (Probably Sonatype)
Straightforward migration, move early?

### zlux
The zlux build refers to multiple subprojects and repositories, as the zlux is a git superproject.
The repositories covered by the zlux build are as follows:
| Name |
|---|
| zos-subsystems |





