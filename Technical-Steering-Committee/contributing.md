# Contributing and roles

This document explains roles within Zowe and the ways and requirements for contribution.  

The goal of the document is to outline key roles within Zowe with the guidance for the squads around the privileges associated with the roles. Each squad can update the privileges as needed. Apart from the privileges the document also outlines general expectations for the roles if there are any. The exact structure and rules if changed will be in the CONTRIBUTING.md in the repositories belonging to the squad. 

The main source of the truth for who is committer and administrator for the project will be Teams on the Zowe GitHub ([Github Teams](https://github.com/orgs/zowe/teams)). Each Squad will have a Committers, Contributors and Administrators teams. 

This document focuses on code related privileges. Some squads may have different requirements and rights for different members. From the perspective of the project the key distinction is between the committers and contributors as if there is a vote on any topic the committers have vote while contributors don't.

## Roles

- Guest
- Contributor
- Committer
- Administrator

### Guest

Anyone, no privileges required. 

- Can read code
- Can file issues
- Can create PRs
- Can comment on issues

### Contributor

Accepted as a Contributor upon request in the squads channel. Automatically approved after filing an issue and/or creating PR. 

Everything Guest can do and on top of that:

- Can review PRs
- Edit issues and PRs (labels, closing)

General expectations:

- Behavior in line with the Code of Conduct
- Communication around the created issues/PRs with the squad

### Committer

Contributors can become Committers via being voted into the role by Committers

Everything Contributor can do and on top of that:

- Can create releases
- Can merge code
- Can delete unprotected branches
- Can make branches

General expectations on top of the Contributor's one:

- Regular attendance on squad meetings
- Regular contributions
- Active communication with the rest of the squad and TSC when needed

### Administrator

Committers can become Administrators of a squad by being voted into the role by Committers

Everything Committer can do and on top of that:

- Every action not already listed, such as but not limited to
- Adding and removing users to the roles
- Changing branch permissions
- Changing github hooks
- Changing repo status
- Can merge into the protected branch

General expectations on top of the Committers one:

- Regular attendance in the architecture calls

### Zowe administrators

Selected by TSC. Needs to be voted to the position. The zowe wide administrator will have the Administrator privileges for all Zowe repositories. 

We intend to keep this role limited to as few as possible people. Anyone voted to the role will be voted for the year term. The term can be shortened by either the person stepping down or by the TSC voting to shorten the term. 

Any TSC member can nominate a person to be added to this group via announcing the information on the #zowe-tsc Slack channel. The person nominating needs to explain why the specific person should have the access. The TSC then votes either via Slack or during the standard call on whether the person will become Zowe administrator.

The Open Mainframe Project and Linux Foundation may also appoint people to these roles. Procedures that will allow them to do so are under their governance. 

## Processes

There are two key processes relating to the contributors. First is becoming a member of specific role, and the second is removal from such role. 

### Accepting into role

The acceptance to committer and administrator roles is done via voting process. Voting process can be specified by a squad in governance.md document if there is a change compared to the one presented here. 

The default requires to vote either via a public channel on Slack, where all squad committers have access or as a part of captured squad meeting that is publicly accessible. A simple majority is required for the vote to succeed.

### Removing from role

What should the Squad do when someone becomes inactive?

Example reasons for inactivity:

- Changes in life removing the possibility for the person to continue in the current role
- Changing company to another in which the person won't have the possibility to contribute
- Changing project within a company to another where the person won't be able to contribute
- Any other reason for stopping the contribution

We expect the person in any of the situations that will limit their ability to contribute in the roles Committer and Administrator to let the members of the squad know either via the Slack channel or on the next squad meeting that such a situation is arising.

The TSC will prepare general expectations towards the roles, and the squads will adapt and complete the template provided by TSC with the specific squad-related requirements.

In case any person stops fulfilling the roles of the specific role without any reason such as mid-term illness, it is the right and requirement on the squad to remove the person from such position. The removal happens automatically without a vote, and the squad is just acknowledging the situation. In case there is a conflict about the situation it is possible to escalate the matter to the TSC.
