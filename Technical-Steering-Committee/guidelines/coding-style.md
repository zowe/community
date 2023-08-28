# Coding style guidelines for Zowe projects

Zowe is split into the projects. Each of the projects may have unique guidelines on how the code needs to be writen. This documents outlines the areas that are common across the whole Zowe codebase wherever applicable. 

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

## Message Management

### Message ID Components (message prefixes)

OMP
ZWE

### Zowe Projects

A - API Mediation Layer
C - Zowe CLI
D - Zowe Desktop
E - Zowe Explorer
S - Zowe System Services

### Message Formats

TODO: This doesn't represent the current state. 
TODO: How do we reflect the WTO vs. the System.out. 

ZWEcnnnnt where:

**ZWE** - static for Zowe messages.

**c** - one of the registered Components ... (see above).  Components need the ZLC to approve the use of the component to ensure consistency across all of the projects.

**nnnn** - is a linear sequence starting from 0001 to 9999.  Projects may choose to use the first digit to divide the number space.  **

**t** - is a Type.  One of (I, E, A, W)  General conventions by IBM are **I**nform, **E**ventual Action (often construed as error), **A**ction, **W**arning or **S**evere error

Messages should be sent to the doc-team and follow the general IBM format as described in Messages and Codes.

## Quality Assurance

All new code added to the Zowe and it's projects needs to be of certain quality, at least before reaching GA status or above. The following guidelines explains what is expected from the projects that matured at least to GA.

### Testing (Self-audit)

TODO: Is there any way to showcase how we follow the guidelines?

The first stage of the testing and in general of quality assurance lies with the developers developing the code. They are responsible for the quality of the code. There are tools helping them ensure high quality of the code and preventing unnecessary issues with the code. What are the tools that we expect the developers to work with and integrate to their pipelines. There are two wider categories of the tools:

1) Static analysis - Going through the created artifacts such as the code and looking for potential risks
2) Dynamic analysis - Testing against the running applications what is the behavior for certain known and common vulnerabilities. The typical tests written by developers and executed on every run belong to this category. 

#### Static analysis

The tools in this category goes through the code and/or artifacts as they are written and look for known problems and risks. Some of them are easy to integrate in a local workflow, some of them are better integrated via the workflow in Github Actions. These tools needs to be run at least on a per release basis and the output neds to be either cleansed or approved by either the squad or by security workgroup in case of security issues. 

- Compilers
  - In case the language uses compilers, the first quality control is to fix all the warnings and above unless approved by the squad on the squad meeting. Every squad should keep list of the warnings approved by the squad. 
- Quality scanners (linters)
  - Available for every language used in our code. 
    - Java - [checkstyle](https://checkstyle.org/)
    - Javascript - [ESLint](https://eslint.org/) or JSLint (https://www.jslint.com/)
    - Typescript - [typescript-eslint](https://typescript-eslint.io/)
    - C - lint, gcc
    - Kotlin - [KTLint](https://github.com/pinterest/ktlint)
    - Python - [PyLint](https://pylint.org/)
- Security Code Scanners (Static Application Security Testing (SAST) Tools)
  - [SonarCloud](https://sonarcloud.io/organizations/zowe/projects) - is also a quality tool. 
    TODO: What is the threshold over which we shouldn't release the projects?
  - CodeQL - Tool integrated to the GitHub, the details aren't shown anywhere
    TODO: Security needs to be fixed or agreed upon by Security Workgroup 
    TODO: Where and how the security workgroup keep this information.
- Secret Scanning Tools
  - TODO: GitHub does some work in the area
- Software Component Analysis (SCA)/Dependency Analysis tools 
  - BlackDuck 
    - The information are shared by one of the vendor running the tool. Overall this is imperfect solution. 
  - LFX Security - Work in progress as the current information keeps information from previous branches and as such doesn't represent the current situation. 

TODO: Where and how do I find the results?

#### Dynamic analysis

- Traditional testing for security (Unit testing, Integration testing)
  - Unit testing
  - Functional testing 
  - System Testing - Integration and testing of the interaction between components. 
  - Statement and branch coverage - Provided to us by Sonarcloud
- Fuzzers
  - Explore https://github.com/google/oss-fuzz 
- Web Application Scanner - AppScan

#####

How do we improve our capability to catch the security related issues? 
Is there any decent way to introduce the other companies into this?

It would be great to be able to think more like and adversary. 

### Penetration Testing

Probably another class of tests that focuses on the security

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

