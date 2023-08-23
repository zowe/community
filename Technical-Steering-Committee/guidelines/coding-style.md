# Coding style guidelines for Zowe sub-projects

Zowe's codebase is split into a few key areas, with both unique and shared guidelines on how new code should be written. For each area of the codebase, there are established and favored languages for the code to be written in. Each repo in Github identifies the primary language used. 

These guidelines are meant to apply to all areas of the Zowe project. Each sub-project may adopt additional coding style guidelines specific to thier sub-project and the language(s) used.

## Whitespaces

Tabs should not be used for whitespace, instead being replaced with 2 spaces per tab.

## Naming Conventions

Function and Method Naming Self-documenting code reduces the need for extended code comments. It is encouraged to use names as long as necessary to describe what is occurring. Generally speaking, methods should be named as verbs (Think: get or set), while Objects/Classes should be nouns. Objects and functions should be CamelCase, while methods on Objects should be dromedaryCase Variable Naming Constants should be CAPITALIZED_AND_UNDERSCORED for clarity, while variables can remain dromedaryCase as methods are. Avoid non-descriptive variable names such as single letters (except for iteration in loops such as i or j) and variable names that have been arbitrarily shortened (Don't strip vowels, long variable names are OK)

## Commenting

Uncertainties, unimplemented but known future action items, and odd/specific constants should all be accompanied with a short comment to make others aware of the reasoning that went into the code.

## Code documentation

It's expected that all new code added comes with documentation. Documentation for component functionality should be included in the Zowe Docs, and documentation for individual classes and functions should be inline with the using the tools specific to that language.

Each of the common languages in Zowe have code-documentation-generation tools, each with their own in-code comment style requirements to adhere to in order to generate nice, readable API references. Objects and functions of interest should be commented in accordance to the language-specific tools to result in output that serves as the first point of documentation for APIs.

- Typescript - [JSDoc](http://usejsdoc.org/)
  - If you are writing in an area of the codebase that does not yet have a definition file for jsdoc, be sure to define a configuration file that can be used for future documentation of that code.
- Java - [Javadoc](https://en.wikipedia.org/wiki/Javadoc)
- C - [Doxygen](www.doxygen.org)

## Quality Assurance

### Testing (Self-audit)

The usage of the automated tools outlined below was proposed among others by OpenSSF (Tools analysis), which is part of the Linux Foundation responsible for proposing the standards to be held in all the Open Source projects. 

There are two key types of tools:

1) Static analysis - Going through the created artifacts such as the code and looking for potential risks
2) Dynamic analysis - Testing against the running applications what is the behavior for certain known and common vulnerabilities. The typical tests written by developers and executed on every run belong to this category. 

#### Static analysis

- Quality scanners (linters)
  - We use Java and JavaScript linters as a part of our daily work
- Security Code Scanners (Static Application Security Testing (SAST) Tools)
  - SonarCloud
  - CodeQL
- Secret Scanning Tools
  - GitHub does some work in the area
- Software Component Analysis (SCA)/Dependency Analysis tools 
  - BlackDuck
  - LFX Security

#### Dynamic analysis
- Traditional testing for security (Unit testing, Integration testing)
  - Unit testing
  - Functional testing 
  - System Testing - Integration and testing of the interaction between components. 
  - Statement and branch coverage - Provided to us by Sonarcloud
- Fuzzers
  - Explore https://github.com/google/oss-fuzz 
- Web Application Scanner - AppScan

### Pen Testing

The current situation is that the companies are pen testing Zowe internally and share the results. This basically means that we are triplicating the effort. I believe we should be able to do this out in the open. 

To make sure that open means that only trusted actors will be involved and notified of the risks, I propose we keep the information within the security-reports repository and within the security workgroup. This should give us enough transparency without risking security for users. 

#### Internal testing

##### Red Team Pen Testing 

This is a more complex issue as there are more ways to approach the topic. In general the name comes from either an internal or external team that acts as the adversary and tries to get access to the systems, steal the data, make the services inaccessible and so on. 

There is also a second team known as Blue team which tries to prevent the success of the red team. 

The GitLab explains how they use the red team in their security operations here: https://about.gitlab.com/handbook/engineering/security/security-operations/red-team/. Among others advocating the approach is the UK government (https://www.gov.uk/government/publications/a-guide-to-red-teaming and https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/1027158/20210625-Red_Teaming_Handbook.pdf). 

Keeping the whole red team would be quite expensive and complex in an open source environment and therefore what I recommend here is an one day exercise as a part of innovation week where Zowe splits to two teams. One trying to gain access to the system via Zowe and second trying to prevent this as well proving that such effort will be shown in the systems. 

If we find this exercise valuable, then we should figure out a way to do it regularly e.g. once a PI or at least once a year. 

#### External guarantees (External Audit)

This section covers the actors without direct stake in the Zowe and that will help the community and the users trust the delivered solution. 

##### Bug Bounties

The Bug Bounty is a concept where the external parties to the project gets money from uncovering vulnerabilities within the software and reporting them via the standard security process to the community. 

The aim is to persuade more white hat hackers to explore the code as there is tangible benefit for them to find and share the bugs. 

It’s used for example by Google. Here: https://bughunters.google.com/ you can learn more about the community that was built by Google for bug hunting. 

##### External Pen Testing Companies

At the moment the major vendors involved within Zowe such as IBM, Rocket and Broadcom each conduct the penetration tests internally. The results are shared with the Security workgroup. 

The possibility here would be to pool the resources used to do the testing by the companies to either hire better companies or to change the scope and look for more potential issues.  

### Auditing

This section covers how we audit that we actually follow the procedures outlined above. 

#### Internal Audit

What can we automate to make us aware of some things not happening?

Security workgroup going over the potentially risky actions across repositories storing the code. 

#### External security audit

What can OMP do for us in this area?
