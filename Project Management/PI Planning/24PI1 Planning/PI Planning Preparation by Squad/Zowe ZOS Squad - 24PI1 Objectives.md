# Zowe ZOS Squad 24PI1 - (2024/01/23 - 2024/04/22)

## HTTP Authentication Refactoring and Client Cert Support [#631](https://github.com/zowe/zss/issues/631)

Support for new auth type of using client side certificates transmitted thru GSK and approved by SAF (R_usermap) is in progress.  This will allow Zowe configurations for high-security low-user-interaction authentication.  The first phase is partially done and needs review and extensive testing.   Phase 2 is a long-overdue refactoring of zss httpserver authentication into plugins.  There are auth features for HTTP Basic, JWT, Certificates, SSH Tunnels (single user mode), etc.   This code is intertwined in ways that is getting hard to support.   This must be done in Zowe 3.0 to make a long term investment against achieving notoriety in CVE's (!).

## Embedded JavaScript Enhancements [#626](https://github.com/zowe/zss/issues/626)

The embedded javascript feature has allowed almost all ZWE code to be uplifted from shell scripts and frequent calls to start up Node to a running well-structured TypeScript.  A few gaps persist and should be closed.  

### Network API's

TCP Port checks and HTTP(S) support is written.  Needs testing.

### Dataset API's

Dataset listing (catalog access) works, but create, copy, delete would be useful.

### GSK services

Creation and usage of default tests.  Loading certificates to keyrings, creating root CA's and server Certs.  

## Configuration Management Semantic Checks [#627](https://github.com/zowe/zss/issues/627)

Annotation in JSONSchema.  Standard validations including file and dataset existence, network resources, security/resources.  Maybe custom validations using embedded javascript.

## QJS (Embedded JS updates) [#628](https://github.com/zowe/zss/issues/628)

QuickJS overdue for a rebase.   (Sean this might not be true).   Also the tracing and debuggability of QJS errors needs improvement.  Error's in the QJS pcode interpreter are hard to understand.   Ebcdic vs UTF8 issues still persist.   Improvements are needed.  

## Yaml Comments [#3183](https://github.com/zowe/zowe-install-packaging/issues/3183) [#629](https://github.com/zowe/zss/issues/629)

Prototyped. Fork of LibYaml.   It was suggested that we could offer this to upstream to the libyaml github project.   I have little hope that they will entertain the offer, but we
should try, just to be exemplary OSS citizens.  

## JavaScript/TypeScript top-layer in ZSS [#630](https://github.com/zowe/zss/issues/630)

The top level of ZSS which mostly reads configuration data and initializes plugins could probably be done as a JavaScript Script using the new-ish (2022) Embedded JS facility. The relative surplus of JavaScript engineers available could make this code more flexible.  Also, this could allow service plugins to be written in TS/JS.  Considering the bulk of the service code is picking through URL's and a POST method's JSON body, this may speed development.  This would also engender a clearer separation of what is zowe-common-c from zss.   The actual low-level services (for example validating a certificate with R_usermap) can be written as a C API and exposed to Embedded JS.   This can enhance and standardize unit testing, because the service backend as the service can be called from standalone JavaScript programs as well as be in ZSS JavaScript-implemented services.   These tests can be done without having to stand up a full zss installation and driving tests through webservice calls.

## Unit Test Automation

The zowe-common-c repo has a directory full of unit tests, but there little-to-no GitHub CI/CD integration.  A build script that builds all tests is needed and can be derived from the build for the configuration manager's build.   It would be good to get a volunteer to help with automation.  

## Membership Drive (ongoing)

The team lost a core developer in March 2022 and he has not been replaced.  The skill level for C programmers working on the code base is very high due to the subject matter.  This is not application programming.  It's more like working on drivers and kernel extensions aside from the URL and JSON handling in web service plugins.  

## Documentation/Education (ongoing)

A much more extensive guide to C programming on ZOS is started and drafts will be published.  

## Dynamic ZIS Plugin Linkage (Due Q1)

ZIS Plugins (although uncommon) are not well-behaved regarding EPL.  This project addresses that prrblem directly by introducing a dynamic linkage mechanism.  This is complex due to the fact that Metal C and Assembler do not have DLL's, but the work is almost done. 

## JES API's (On hold, resources wait)

Improved job submission and tracking API's are in progess.  The ability to remove a zOSMF, which currently provides API) dependency is helpful for other Zowe components and project.  Need to interface with consumers to validate requirements.

Consumers:  VS Code Explorer, CLI (Fernando, Billie) - JES Explorer in desktop (Adarshdeep), 

## Syslog (Due Q3 or Q4) 

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

