# Continuous Integration

## Prerequisites
All Zowe repositories containing source code that requires compilation, packaging, testing or other type of verification, should define a continuos integration process that uses FLOSS automation tools, free to acquire and use for any purposes. It is recommended to choose tools already popular within Zowe, such as Gradle, npm, GitHub Actions, etc. For specific needs, it is possible to select alternatives, given they provide unique and necessary advantages.

## Compilation
If a Zowe repository requires source code compilation, this repository should include configurations, scripts and tools that automate the process, handle dependencies and produce project artifacts.

## Packaging
If a Zowe module is intended to be delivered as a deployable installation package, its corresponding repositories should contain scripts and tools that produce automatically the necessary artifacts.

## Testing
Every Zowe module or repository should contain a holistic and automated test suit, which should cover both functional, i.e. validating its functionality, as well as non-functional, i.e. validating performance, reliability, resilience, etc. Ideally the automated test suit should consist of unit tests to cover the modules being developed or modified, as well as integration tests and system tests to cover interactions with the module's dependencies. The functional tests should be executed on every code change or repository build and the non functional tests should be executed at least when the build is run to produce release artifacts, but preferably more often to allow early discovery of non-functional issues. 

## Code Analysis
It is required for each repository to make use of static code analysis and vulnerability scans per tools availability and requirement. The recommended tools are SonarCloud and CodeQL and build pipelines should be configured to run those tools and perform scans for each change. All reported issues should be addressed either by resolving them or by indicating an exception justification.

## Quality Gate
Test coverage for all Zowe code should be no less than 80% branch coverage and no less than 90% statement coverage. Every change made in a Zowe repository should only be introduced together with a suit of corresponding tests. Every change made in a Zowe repository should trigger the execution of any and all relevant regression testing in dependent modules. A change cannot be merged if any of the new or existing tests fail.

## Nightly versus per Commit Builds
In case some of the tests or code analysis require longer execution times that make them impractical to be executed on each code change, regular (nightly) builds should be set to run off hours and produce quality reports for posterior analysis. Issues found during those builds should be reported in GitHub (preferably automatically) with corresponding priority and severity.

