# Issues

All the squads within the Zowe projects use GitHub to track the issues raised against the projects
they are responsible for. The issues could be questions, bug reports, request for enhancements and others.
Every squad responds as outlined below. 

The squads can specify the details of the issue processing for specific project within the project
repository in the ISSUES.md file in the root of the repository. 

Every squad is expected to triage new issues on the regular squad meeting. The triage process should result 
into issue categorization: bug, enhancement, question, other and either clarification or issue prioritization: critical, high, medium, low.

The triaging of an issue is done by attaching labels to it (see below for the recommended set of labels):

- new - The issue was not triaged yet 

Types of the issues:

- enhancement - Request to provide new functionality. [The recommended template](https://github.com/zowe/api-layer/blob/v2.x.x/.github/ISSUE_TEMPLATE/feature_request.md) 
- question - Question around how something works in the specific projects. [The recommended template](https://github.com/zowe/api-layer/blob/v2.x.x/.github/ISSUE_TEMPLATE/question.md)
- bug - Defect found in one of the existing functionalities within the project. [The recommended template](https://github.com/zowe/api-layer/blob/v2.x.x/.github/ISSUE_TEMPLATE/bug_report.md)

Importance of the issue as perceived by squad organized by importance:

- priority-critical - An issue that needs to be resolved within this PI, ideally within next sprint
- priority-high: The submitter has indicated (or the reviewer has deemed) the issue is critical, causing significant detrimental impact such as production outage, data corruption, security exposure etc. The issue should be pulled in to the current PI if possible. If not, the issue should be planned for the next PI.
- priority-medium: The submitter has indicated or confirmed this issue is not causing significant detrimental impact such as production outage, data corruption, security exposure - however the technology is not functioning properly. The issue should be considered and planned for the next PI provided other higher or equivalent priority issues have not utilized available capacity.
- priority-low: The submitter has indicated or confirmed this issue is either more cosmetic or a nice-to-have improvement. The issue should be prioritized and planned based on popularity (see voting), capacity, and submitter-availability for engagement and participation in the resolution.

For Bugs it is also possible to reflect the perceived impact of the issue by its severity:

- severity-critical - A bug that has major impact on the organization preventing the usage of Zowe
- severity-high - A bug for which there may be workaround but limits the usage of the Zowe for major use cases
- severity-medium - A bug where workaround exists or that does not prevent the usage of the Zowe or the use case, just makes it more complex
- severity-low - A bug that makes the usage of the Zowe less convenient but does not impact key use cases

When figuring out the next issue to work on the squad take into account the amount and type of engagements as well as the willingness 
of the author to help with resolution of the issue. One of the good ways to show interest is to use thumbs-up. The amount of thumbs-ups the users gave
to the specific issue is on the issues tab in the Github as shown on the figure 1.

![Thumbs-up view](issues-thumbs-up.png "Figure 1: Thumbs-up view")

The issues are organized into larger projects shown as epics on the Zenhub board whenever appropriate. The example of 
epic within Zenhub is shown on the figure 2. 

![Epic view](issues-epic.png "Figure 2: Epic view")

Every issue is triaged latest within the 90 days of the creation of the issue. 

The isues that are older than 180 days will be triaged at least once every PI unless they are associated with 
existing Epic, Milestone or other means squad uses to organize the issues into larger projects. The issues are either kept, linked to an epic, milestone or closed if they aren't considered relevant by the squad 
anymore. 

To understand the state of the issues the TSC as part of the TSC Update during the PI Planning will share and 
comment current situation of our projects. 