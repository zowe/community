# Quality

The following list is based on the [Core Infrastructure Initiative](https://bestpractices.coreinfrastructure.org/en/criteria/0)

## Working build system

* If the software produced by the project requires building for use, the project MUST provide a working build system that can automatically rebuild the software from source code. {N/A allowed} [build](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.build)
* It is SUGGESTED that common tools be used for building the software. {N/A allowed} [build_common_tools](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.build_common_tools)
* The project SHOULD be buildable using only FLOSS tools. {N/A allowed} [build_floss_tools](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.build_floss_tools) 

## Automated test suite

* The project MUST use at least one automated test suite that is publicly released as FLOSS (this test suite may be maintained as a separate FLOSS project). The project MUST clearly show or document how to run the test suite(s) (e.g., via a continuous integration (CI) script or via documentation in files such as BUILD.md, README.md, or CONTRIBUTING.md). [test](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.test)
* A test suite SHOULD be invocable in a standard way for that language. [test_invocation](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.test_invocation)
* It is SUGGESTED that the test suite cover most (or ideally all) the code branches, input fields, and functionality. [test_most](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.test_most)
* It is SUGGESTED that the project implement continuous integration (where new or changed code is frequently integrated into a central code repository and automated tests are run on the result). [test_continuous_integration](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.test_continuous_integration) 

## New functionality testing

* The project MUST have a general policy (formal or not) that as major new functionality is added to the software produced by the project, tests of that functionality should be added to an automated test suite. [test_policy](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.test_policy)
* The project MUST have evidence that the [test_policy](https://bestpractices.coreinfrastructure.org/en/criteria/0#test_policy) for adding tests has been adhered to in the most recent major changes to the software produced by the project. [tests_are_added](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.tests_are_added)
* It is SUGGESTED that this policy on adding tests (see [test_policy](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.test_policy)) be documented in the instructions for change proposals. [tests_documented_added](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.tests_documented_added) 

## Warning flags

* The project MUST enable one or more compiler warning flags, a "safe" language mode, or use a separate "linter" tool to look for code quality errors or common simple mistakes, if there is at least one FLOSS tool that can implement this criterion in the selected language. {N/A allowed} [warnings](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.warnings)
* The project MUST address warnings. {N/A allowed} [warnings_fixed](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.warnings_fixed)
* It is SUGGESTED that projects be maximally strict with warnings in the software produced by the project, where practical. {N/A allowed} [warnings_strict](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.warnings_strict) 