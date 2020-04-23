# Overview

This project aims to be governed in a transparent, accessible way for the benefit of the community. All participation in this project is open and not bound to corporate affiliation. Participants are all bound to the Linux Project's [Code of Conduct](https://events.linuxfoundation.org/code-of-conduct/).

# Project Roles

## Contributor

The contributor role is the starting role for anyone participating in the project and wishing to contribute code.  Their interactions are via mailing lists, Slack or other communication venues.  Contributions are tangible elements that are seen generally in the form of contributions through Pull Requests to add to the code, documentation and other elements that make up Zowe.

### Process for Becoming a Contributor

* Review the CONTRIBUTING.md guidelines to ensure your contribution is in line with the project's coding and style guidelines.
* Submit your code as a PR with the appropriate DCO signoff.
* Have your submission approved by the Committer(s) and merged into the codebase.
* Stay current with conversations, reviews and questions about your contribution to aid in the evaluation and acceptance of the code.

## Committer

The committer role enables the participation to commit code directly to a repository in the Zowe Github organization, but also comes with the responsibility of being a responsible leader in the community.  This role is the natural follow on to that of a Contributor.

### Process for Becoming a Committer

* Demonstrate your experience with the codebase through contributions and engagement on the community channels.
* Normally the community is aware of activities by Contributors and ideally a nomination would be made by an existing commiter.  However, self nomination is an acceptable means of identifying your interest.  This interest should be expressed in an approrpriate e-mail channel as that is the only persistent means of communication.  See the section [Get Involved](https://zowe.org/contribute/) on the [community website](https://zowe.org).
* The existing community (project) that is considering your membership would facilitate a vote (see voting).
* Once approved and granted access the new Committer will add their name and email to the [committers.md](https://github.com/zowe/community/committers.md) file in the [Community repository](https://github.com/community/).  

### Committer Responsibilities

* Monitor email aliases.
* Monitor Slack (delayed response is perfectly acceptable).
* Triage GitHub issues and perform pull request reviews for other committers and the community.
* Make sure that ongoing PRs are moving forward at the right pace or closing them.
* In general continue to be willing to spend at least 25% of one's time working on the project (about 1.25 business days per week).

### When Does a Committer Lose Committer Status

If a committer is no longer interested or cannot perform the committer duties listed above, they should volunteer to be moved to emeritus status. In extreme cases this can also occur by a vote of the committers per the voting process.  Commit writes will be suspended while emeritus.  In the future, if the Committer Emeritus wishes to rejoin they can contact the community via e-mail for re-instatement.  Prior contributions will be considered and a vote can ensue quickly to determine restoration of write access.

## Lead

Each sub-project is managed by a project lead. Collectively, Zowe Project leads are responsible for ensuring that their project's committers are following the Development Process, and that the project is engaging in the right sorts of activities to develop vibrant communities of users, contributors and committers. Each project lead is equal in responsibility.  Subsequently, additional project leads must be elected by the project's committers.

# Release Process

Project releases will occur on a scheduled basis as agreed to by the maintainers. Coordination of Zowe releases is led by the [CI/CD squad](https://github.com/zowe/community/tree/master/CI-CD), and all Zowe releases are to be approved by the ZLC.  Approval of the release will be done by vote on the [zowe-zlc@lists.openmainframeproject.org](mailto:zowe-zlc@lists.openmainframeproject.org) alias.  Votes will last 72 hours or until all current members of the ZLC have responded in the affirmative.  

In addition, when a release containing binaries is completed a note will be sent to the current Director of the OpenMainframe Project informing them of the release so that they can log the release as being part of the LLC created as the owner of binary releases.

# Conflict Resolution and Voting

In general, we prefer that technical issues and committer membership are amicably worked out between the persons involved. If a dispute cannot be decided independently, the committers can be called in to decide an issue. If the committers themselves cannot decide an issue, the issue will be resolved by voting. The voting process is a simple majority in which each committer receives one vote.

# Communication

This project, just like all of open source, is a global community. In addition to The Linux Project's [Code of Conduct](https://events.linuxfoundation.org/code-of-conduct/), this project will:

* Keep all communication on open channels (mailing list, forums, chat).
* Be respectful of time and language differences between community members (such as scheduling meetings, email/issue responsiveness, etc).
* Ensure tools are able to be used by community members regardless of their region.

If you have concerns about communication challenges for this project, please contact the committers.

# Voting

Voting is the means of communicating and documenting community agreement in an area.  These areas could include new members, change in policies like build, DCO, or other community related obligations; as well as releases.


## Voting Lists
Votes are conducted on e-mail lists as appropriate.  Slack is not a substitute for voting at this time due to the ephemeral nature of the current contract.  To ensure communication is consistent please use the following e-mail aliases:

For ZLC Issues:  [zowe-zlc@lists.openmainframeproject.org](mailto:zowe-zlc@lists.openmainframeproject.org)   
For Project Issues:  [zowe-dev@lists.openmainframeproject.org](mailto:zowe-dev@lists.openmainframeproject.org)   
As a courtesy please copy: [zowe-user@lists.openmainframeproject.org](zowe-user@lists.openmainframeproject.org)   

In the Subject line please include the prefix **[VOTE] - *repoName* - *description***.  This will enable users to quickly identify calls for action from information as well as easy filtering and awareness.   

## Voting Duration
Due to the geographically distributed nature of the projects, Voting will be held open for 72 hours allowing all members an opportunity to express their vote.  If the voting members of the community ave all responded before the 72 hours have exprired, the vote may be tallied and closed.   

## Binding versus non-Binding Votes
There are two types of votes.  **Binding** and **non-Binding**.  The **Binding** votes are cast by members of the community (comitters with write access to the repository who have made a contribution six [6] months prior to vote).  Only **Binding** votes are tallied.  **non-Binding** votes may be cast by Contributors and other community members and are intended to seek the collective perspective of the community.

## Expressing votes: +1, 0, -1 and fractions
 Votes are represented as numbers between -1 and +1, with '-1' meaning 'no' and '+1' meaning 'yes.'

The in-between values are indicative of how strongly the voting individual feels. Here are some examples of fractional votes and ways in which they might be intended and interpreted:

+0: 'I don't feel strongly about it, but I'm okay with this.'

-0: 'I won't get in the way, but I'd rather we didn't do this.'

-0.5: 'I don't like this idea, but I can't find any rational justification for my feelings.'

++1: 'Wow! I like this! Let's do it!'

-0.9: 'I really don't like this, but I'm not going to stand in the way if everyone else wants to go ahead with it.'

+0.9: 'This is a cool idea and i like it, but I don't have time/the skills necessary to help out.'

## Votes on Package Releases
Votes on whether a package is ready to be released use majority approval -- i.e. at least 51% of the current number of ZLC members must vote affirmatively for release, and there must be more positive than negative votes. **Releases may not be vetoed** Generally the community will cancel the release vote if anyone identifies serious problems, but in most cases the ultimate decision, lies with the individual serving as release manager. The specifics of the process may vary from project to project, but the 'minimum quorum of three +1 votes' rule is universal.
