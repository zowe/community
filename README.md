# Zowe Community

This guide will help you navigate the Zowe community, and learn more on how to contribute and provide feedback. If you look for more information please take a look at [Zowe.org](https://www.zowe.org/), if you are user looking for help the documentation for the project lives [here](https://docs.zowe.org/)

- [Zowe Community](#zowe-community)
  - [Communication Channels](#communication-channels)
    - [Slack](#slack)
    - [Mailing Lists](#mailing-lists)
    - [Community Forums](#community-forums)
  - [Contribute](#contribute)
    - [Submit an issue](#submit-an-issue)
      - [Pull Request Guidelines](#pull-request-guidelines)
    - [Reporting Security Issues](#reporting-security-issues)


## Communication Channels

All community activities are scheduled on the [Zowe Community calendar](https://lists.openmainframeproject.org/g/zowe-dev/calendar). All meetings are an open invitation for any community member to join.

You can also engage fellow community members through these channels

### Slack

The Zowe community uses Slack as the primary means of interacting to facilitate active collaboration through the following channels.

Register an account with Slack at https://slack.openmainframeproject.org

* \#zowe-user - This channel is for users to ask questions, look for help and interact with each other.
* \#zowe-dev - Zowe development discussions.
* \#zowe-ux - Zowe user experience discussions.
* \#zowe-doc - Discuss or ask questions about the documentation.
* \#zowe-onboarding - Develop the material and supporting activities for onboarding developers and users.
* \#zowe-zlc - Ask questions or discuss topics with the [Zowe Advisory Council](https://github.com/zowe/zac).
* \#zowe-tsc = Ask questions or discuss topics with the [Technical Steering Committee](https://github.com/zowe/community/tree/master/Technical-Steering-Committee)

Sub-project specific channels:

* \#zowe-api - Collaborate with channel members on the API Mediation Layer, propose new ideas, or interact with the squad.
* \#zowe-cli - Collaborate with channel members on  Zowe CLI, propose new ideas, and interact with the Zowe CLI community.
* \#zowe-explorer - Collaborate with channel members on  Zowe Explorer for VS Code, propose new ideas, and interact with the Zowe Explorer community.
* \#zowe-python-client-sdk - Collaborate with channel members on Zowe Python Client SDK (incubation) and get involved.
* \#zowe-mobile - Collaborate with channel members on Zowe Mobile (incubation) and get involved.

Operations channels:

* \#zowe-build - Discuss and review build related Issues.
* \#zowe-cicd - Discuss pipeline related topics.

### Mailing Lists

* Zowe-dev@lists.openmainframeproject.org - Developers and contributors discussion. [Join](https://lists.openmainframeproject.org/g/zowe-dev) this mailing list.
* Zowe-user@lists.openmainframeproject.org - User discussion and to provide feedback and submit inquiries. [Join](https://lists.openmainframeproject.org/g/zowe-user) this mailing list.
* Zowe-tsc@lists.openmainframeproject.org - Discussion on topics related to project governance or anything else for the TSC. [Join](https://lists.openmainframeproject.org/g/zowe-tsc) this mailing list.

### Community Forums

Look for discussion on Zowe topics on the [Open Mainframe Project Community Forums](https://community.openmainframeproject.org/c/zowe).

## Contribute

All code in Zowe aligns with the established [licensing and copyright notice guidelines](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/best-practices/license-copyright.md)

### Submit an issue

You can submit an issue (Bug or Feature) on Zowe in general at https://github.com/zowe/community/issues/new/choose. If you have an issue that is specific to a squad or specific repository, feel free to submit an issue against a specific repo.

#### Pull Request Guidelines

Pull requests cannot be merged without the approval of at least one maintainer, who will be looking for the pull request to meet requirements as follows:

* The code in the pull request must adhere to the [general Code Style Guidelines](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/guidelines/coding-style.md) and those for the squads.
* The code must compile/transpile (where applicable) and pass a smoke test such that the code is not known to break the current state of Zowe.
* The pull request must describe the purpose and implementation to the extent that the maintainer understands what is being accomplished. Some pull requests need less details than others depending on novelty.
* The pull request must state how to test this change, if applicable, such that the maintainer or a QA team can check correctness. The explanation may simply be to run included test code.
* If a pull request depends upon a pull request from the same / another repository that is pending, this must be stated such that maintainers know in which order to merge open pull requests.

### Reporting Security Issues

Please direct all security issues to zowe-security@lists.openmainframeproject.org. A member of the security group will reply to acknowledge receipt of the vulnerability and coordinate remediation with the affected squad.
