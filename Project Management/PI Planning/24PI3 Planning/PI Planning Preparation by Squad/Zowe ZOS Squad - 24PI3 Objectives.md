# Zowe ZOS Squad 24PI3 - (2024/07/23 - 2024/10/21)

## Port various zowe-common-c sources to LE 64-bit [#422](https://github.com/zowe/zowe-common-c/issues/422) Due Q2 2024

Currently, there is at least one source file which is not supported by ZSS64, and that makes it impossible for extenders, who rely on that functionality, to port their plug-ins to LE 64-bit.

## Provide plug-ins with a way to check the version of ZSS [#680](https://github.com/zowe/zss/issues/680) Due Q2 2024
 
3rd-party plug-ins need to have a way to check whether the host ZSS version is one they can support. The easiest solution is to expose that via a function which returns the current ZSS version, and which plug-ins can validate against their expected version.

## Support ZIS parameters longer than 128 chars [684](https://github.com/zowe/zss/issues/684) Due Q2 2024

Since ZIS has started to support line breaks recently, it would be useful to support loner parameter values; the current limit is 128 symbols. The related issue is .

## Direct usage of ConfigManager by Launcher [#110](https://github.com/zowe/launcher/issues/110) Due Q2 2024

More processes are made by running shell programs (forking) indirectly rather than by direct call.   The Launcher is one case and direct integration will help with Zowe start-up resource usage.

## Embedded JavaScript Enhancements [#626](https://github.com/zowe/zss/issues/626) (ongoing, partially done)

The embedded javascript feature has allowed almost all ZWE code to be uplifted from shell scripts and frequent calls to start up Node to a running well-structured TypeScript.  A few gaps persist and should be closed.  

### Network API's

TCP Port open checks, HTTP(s) GET support, synchronous first and async later.

### Dataset API's

Dataset listing (catalog access) works, but create, copy, delete would be useful.

### GSK services

Loading certificates to keyrings, creating root CA's and server Certs.  

## Configuration Management Semantic Checks [#627](https://github.com/zowe/zss/issues/627) (ongoing, partially done)

Annotation in JSONSchema.  Standard validations including file and dataset existence, network resources, security/resources.  Maybe custom validations using embedded javascript.

## Yaml Comments [#3183](https://github.com/zowe/zowe-install-packaging/issues/3183) [#629](https://github.com/zowe/zss/issues/629) (needs testing and integration)

Prototyped. Fork of LibYaml.   It was suggested that we could offer this to upstream to the libyaml github project.   I have little hope that they will entertain the offer, but we
should try, just to be exemplary OSS citizens.  

## Unit Test Automation (resource wait)

The zowe-common-c repo has a directory full of unit tests, but there little-to-no GitHub CI/CD integration.  A build script that builds all tests is needed and can be derived from the build for the configuration manager's build.   It would be good to get a volunteer to help with automation.  

## Membership Drive (ongoing)

The team lost a core developer in March 2022 and he has not been replaced.  The skill level for C programmers working on the code base is very high due to the subject matter.  This is not application programming.  It's more like working on drivers and kernel extensions aside from the URL and JSON handling in web service plugins.  

## Documentation/Education (ongoing)

A much more extensive guide to C programming on ZOS is started and drafts will be published.  

## Common Module Registry

Common module registry: the Zowe cross-memory server is intended to be a long running server application shared by multiple products; however, there are several cases when users may want to run multiple servers each of which loads its own copies of the ZIS core and plug-in modules to the LPA potentially wasting a lot of limited resources. A common module registry should solve this by providing ZIS with an API to 1) check whether a module it needs is already in the LPA and 2) load modules if they’re not in the LPA. There is an issue open for this: https://github.com/zowe/zowe-common-c/issues/405.

## JES API's (On hold, resources wait)

Improved job submission and tracking API's are in progess.  The ability to remove a zOSMF, which currently provides API) dependency is helpful for other Zowe components and project.  Need to interface with consumers to validate requirements.

## JavaScript/TypeScript top-layer in ZSS [#630](https://github.com/zowe/zss/issues/630) (future)

The top level of ZSS which mostly reads configuration data and initializes plugins could probably be done as a JavaScript Script using the new-ish (2022) Embedded JS facility. The relative surplus of JavaScript engineers available could make this code more flexible.  Also, this could allow service plugins to be written in TS/JS.  Considering the bulk of the service code is picking through URL's and a POST method's JSON body, this may speed development.  This would also engender a clearer separation of what is zowe-common-c from zss.   The actual low-level services (for example validating a certificate with R_usermap) can be written as a C API and exposed to Embedded JS.   This can enhance and standardize unit testing, because the service backend as the service can be called from standalone JavaScript programs as well as be in ZSS JavaScript-implemented services.   These tests can be done without having to stand up a full zss installation and driving tests through webservice calls.

## HTTP Authentication Refactoring and Client Cert Support [#631](https://github.com/zowe/zss/issues/631) (future)

Support for new auth type of using client side certificates transmitted thru GSK and approved by SAF (R_usermap) is in progress.  This will allow Zowe configurations for high-security low-user-interaction authentication.  The first phase is partially done and needs review and extensive testing.   Phase 2 is a long-overdue refactoring of zss httpserver authentication into plugins.  There are auth features for HTTP Basic, JWT, Certificates, SSH Tunnels (single user mode), etc.   This code is intertwined in ways that is getting hard to support.   This must be done in Zowe 3.0 to make a long term investment against achieving notoriety in CVE's (!).

## Syslog (Maybe no longer needed, needs re-eval)

Work is mostly complete:

* we will first add a schema item in zowe.yaml stating which message IDs will be forwarded to the syslog
* we will then collect a list of message IDs which seem like good defaults
* then start by using one of the launcher's own message IDs as a test, to see how the zcc wto command works
* then explore how to intercept child process streams so that we can get their message IDs
  
At this point we are done unless we find limitations with line-length logic of zcc wto

## Comment-preservation in Yaml and JSON. (In progress, due Q2) 

Even though comments are not truly standard in Yaml and JSON and are thrown away in processing, the many uses of comments in Zowe configuration files requires that our processing of Yaml and JSON be enhanced to preserve comments through the many transformations that these documents go through.

Mechanism was built in Q1, but it is not yet integrated to 

## Security (ongoing)

Security assurance will come from using tools that analyze the code to index vulnerability databases and note non-best-practice use of library functions and memory allocation.  To be able to use these tools, the codebase needs to compile off-ZOS.   A stretch goal is to be able to use "sanitizers".  (https://github.com/google/sanitizers) and valgrind in our CICD pipeline.  

## Static Analysis (ongoing)

A number of tools were reviewed, and any that were pattern-based produced far too many false positives.  The Clang/LLVM community provides some of the best static analysis tools.   These tools are far more accurate, and are based on the compiler that we are moving too.  They are also free!

- Clang Static Analyzer: https://clang-analyzer.llvm.org/
- Clang Tidy: https://clang-analyzer.llvm.org/

## Clang Readiness (ongoing)

The IBM Toronto Compilers team has strongly indicated their direction is Clang.  (https://www.ibm.com/docs/en/xl-c-and-cpp-aix/16.1?topic=new-clang-based-front-end).   The hybrid xlclang compiler is in use for some files in Zowe 2.0, and will probably replace xlc completely over 2.x, except for the "Metal C" Compilation.   

## Cross Platform Compilation (ongoing)

The zowe-common-c repo could compile, and in many cases run, on Lunix, AIX, and Windows in 2018.  Over past few years a number of commits were made that broke cross-platform compilation.  

## Automated Testing (ongoing)

There is a growing set of tests under zowe-common-c/tests.

## Community Support

The Configuration Manager supports the system and webui squad with yaml and json-schema services.   Streth goals include general SMF support and Subsystem Interface Support for the Zebra and Explorer projects.

## "Single-user Zowe" (on hold, resourcing)

A demo-ed capablity that allows a zero-config ZSS server run should be completed shortly.  

## Education (ongoing)

These repos are some of the most complex and sophisticated examples of C coding for ZOS.   It would be good to have an office hours or regular set of webinars to teach people how to be effective C programmers for ZOS.

# How to get involved
### Other tasks
The zOS squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zss/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-zos-interface slack if you wish to become involved!

Join us every Wednesday at 11am EST on Zoom at https://zoom.us/j/92871072081 where we give weekly standup, demos, and discussions.

