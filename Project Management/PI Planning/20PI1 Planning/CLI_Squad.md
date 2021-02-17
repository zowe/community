# CLI Squad - 20PI1 Objectives (December to February, 2020)

### Zowe Long Term Support Release Alignment
- To ensure enterprise adoption of Zowe and provide requisite stability in production environments, release a version of the CLI as part of the Zowe LTS release 
- As pre-requisites to this release, the Zowe Conformant CA Secure Credential Store Plug-in for Zowe CLI will be donated. In addition, other known vulnerabilities will be corrected. 

### Zowe Explorer Enhancements
- Encourage Zowe Explorer enterprise adoption by storing credentials securely by default
- Improve usability of the Zowe Explorer by delivering on community-requested enhancements/defects scheduled in [milestones](https://github.com/zowe/vscode-extension-for-zowe/milestones) 1.1, 1.2, and 1.3
- Help Zowe Explorer users to avoid lengthy mainframe password reset delays required when they reach the invalid credentials attempt limit (typically 3) by alerting/warning them in advance of the "locked-out" credential situation
- [Stretch] Help make Zowe Explorer Users, that may need to interact with large data sets (up to 50k members), aware of known issues (and able to influence CLI squad in prioritizing resolutions), offer suggestions and provide recommendations to achieve a desirable / acceptable experience

### CLI - API ML Synergy
- Build infrastructure for token authentication so that we can enable SSO and MFA support in the CLI for services going through the API ML in 20PI2.  This will allow the CLI to be usable in an environment that requires MFA.

### Key Process & Code Quality Improvements
- Improve development velocity and ensure Che/Theia compatibility by constructing a continuous integration pipeline to expedite testing the Zowe Explorer against Che/Theia releases.
- Improve maintainability of Zowe Explorer by refactoring/restructuring code
