# Quality

The following list is based on the [Core Infrastructure Initiative](https://bestpractices.coreinfrastructure.org/en/criteria/0)

## Working build system

* The squad uses a working build system that can automatically rebuild the software from source code. 
* It is SUGGESTED that Zowe Jenkins or Github Actions are used for building the software.

## Automated test suite

* The squad MUST use at least one automated test suite that is publicly released as FLOSS (this test suite may be maintained as a separate FLOSS project). The project MUST clearly show or document how to run the test suite(s) (e.g., via a continuous integration (CI) script or via documentation in files such as BUILD.md, README.md, or CONTRIBUTING.md).
* A test suite SHOULD be invocable in a standard way for that language.
* It is SUGGESTED that the test suite cover most (or ideally all) the code branches, input fields, and functionality.
* It is SUGGESTED that the squad uses continuous integration (where new or changed code is frequently integrated into a central code repository and automated tests are run on the result) as used within Zowe. 

## New functionality testing

* As major new functionality is added to the software produced by the squad, tests of that functionality should be added to an automated test suite.
* The squad MUST provide evidence that the automated tests were added in the most recent major changes to the software produced by the squad.
* The squad SHOULD document the instruction on adding the automated tests.  

## Warning flags

* The squad must use a tool to look for code quality errors or common simple mistakes.
* The squad must address warnings from such tool.
diff --git a/Technical-Steering-Committee/best-practices/reporting.md b/Technical-Steering-Committee/best-practices/reporting.md
