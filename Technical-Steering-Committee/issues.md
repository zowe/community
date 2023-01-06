# Issues

All Zowe project squads use GitHub to track issues raised against projects that the squad is responsible for. Issues could be questions, bug reports, request for enhancements, and others.
Every squad responds as outlined below. 

Squads can specify issue details that relate to a specific project within the project
repository in the ISSUES.md file located in the root of the repository. 

Every squad is expected to triage new issues at regular squad meetings. The triage process should result 
in issue categorization: bug, enhancement, question, other as well as either clarification or issue prioritization: critical, high, medium, low.

Triaging of an issue is performed by attaching labels to the issue (see the recommended set of labels presented in this topic):

- **new**  
 The issue has not yet been triaged

Types of the issues:

- **enhancement**  
A request to provide a new functionality. See the [recommended template](https://github.com/zowe/api-layer/blob/v2.x.x/.github/ISSUE_TEMPLATE/feature_request.md). 
- **question**  
A question about how something works in the specific projects. See the [recommended template](https://github.com/zowe/api-layer/blob/v2.x.x/.github/ISSUE_TEMPLATE/question.md).
- **bug**  
A defect found in one of the existing project functionalities. See the [recommended template](https://github.com/zowe/api-layer/blob/v2.x.x/.github/ISSUE_TEMPLATE/bug_report.md).

Importance of the issue as perceived by squad organized by importance:

- **priority-critical**  
An issue that needs to be resolved within this PI, ideally within next sprint
- **priority-high**  
The submitter has indicated (or the reviewer has deemed) the issue is critical, causing significant detrimental impact such as production outage, data corruption, security exposure etc. The issue should be pulled in to the current PI if possible. If not, the issue should be planned for the next PI.
- **priority-medium**  
The submitter has indicated or confirmed this issue is not causing significant detrimental impact such as production outage, data corruption, security exposure - however the technology is not functioning properly. The issue should be considered and planned for the next PI provided other higher or equivalent priority issues have not utilized available capacity.
- **priority-low**  
The submitter has indicated or confirmed this issue is either more cosmetic or a nice-to-have improvement. The issue should be prioritized and planned based on popularity (see voting), capacity, and submitter-availability for engagement and participation in the resolution.

For Bugs, it is also possible to reflect the perceived impact of the issue by its severity:

- **severity-critical**  
A bug that has major impact on the organization preventing the usage of Zowe
- **severity-high**  
A bug for which there may be workaround but limits the usage of the Zowe for major use cases
- **severity-medium**  
A bug where workaround exists or that does not prevent the usage of the Zowe or the use case, just makes it more complex
- **severity-low**  
A bug that makes Zowe usage less convenient but does not impact key use cases

When determining the next issue to work on, the squad takes into account the level and type of engagement, as well as the willingness 
of the author to assist with resolving the issue. One way to show interest is to use a thumbs-up emoji. The number of thumbs-ups users assign to a specific issue is visible on the issues tab in Github as shown in figure 1.

![Thumbs-up view](issues-thumbs-up.png "Figure 1: Thumbs-up view")

Issues are organized into larger projects shown as epics on the Zenhub board whenever appropriate. An example of an epic within Zenhub is shown in figure 2. 

![Epic view](issues-epic.png "Figure 2: Epic view")

Every issue is to be triaged within a maximum of 90 days since the creation of the issue. 

The issues that are older than 180 days are to be triaged at least once every PI unless they are associated with an 
existing Epic, Milestone, or other means that the squad uses to organize issues into larger projects. Issues are either kept, linked to an epic or milestone or closed if they are no longer considered relevant by the squad. 

To clarify the state of issues, the TSC, as part of the TSC Update during the PI Planning, shares and comments on the current state of our projects. 
