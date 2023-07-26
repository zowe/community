# Zowe Web UI - 23PI3 - (2023/07/25 - 2023/10/23)

# New Ideas Under in PI Planning process

## Embedded JavaScript Enhancements [#626](https://github.com/zowe/zss/issues/626)

Network support, especially http(s) client services.  

## Configuration Management Semantic Checks [#627](https://github.com/zowe/zss/issues/627)

Annotation in JSONSchema.  Standard validations including file and dataset existence, network resources, security/resources.  Maybe custom validations using embedded javascript.

## QJS Rebase [#628](https://github.com/zowe/zss/issues/628)

QuickJS overdue for a rebase.   

## Move to Open XLC Latest

## Yaml Comments [#3183](https://github.com/zowe/zowe-install-packaging/issues/3183) [#629](https://github.com/zowe/zss/issues/629)

Prototyped. Fork of LibYaml.   

## HTTP Authentication Refactoring and Client Cert Support [#631](https://github.com/zowe/zss/issues/631)

The Authentication code is powerful but needs to be factored better to support validation.

## JavaScript top-layer in ZSS [#630](https://github.com/zowe/zss/issues/630)

Research-y, but would allow much easier work for ZSS extensions/plugins.


# Existing Topics (needing updates and deletes)

## Membership Drive (ongoing)

The team lost a core developer in March 2022 and he has not been replaced.  The skill level for C programmers working on the code base is very high due to the subject matter.  This is not application programming.  It's more like working on drivers and kernel extensions aside from the URL and JSON handling in web service plugins.  

## Documentation/Education (ongoing)

A much more extensive guide to C programming on ZOS is started and drafts will be published.  

## Certificate Based Auth (Due Q2, in Progress)

Support for new auth type of using client side certificates transmitted thru GSK and approved by SAF (R_usermap) is in progress.  This will allow Zowe configurations for high-security low-user-interaction authentication.

## Additional Dataset API features (Due Q2, in Progress)

Zowe Editors and File Managers needed more extensive REST API's, especially for creating and cloning datasets to achieve par with ISPF and other dev environments.  Size configuration options in particular are really complex on ZOS compared to other OS's and far more detail is needed to make these API's robust.

## Dynamic ZIS Plugin Linkage (Due Q1)

ZIS Plugins (although uncommon) are not well-behaved regarding EPL.  This project addresses that prrblem directly by introducing a dynamic linkage mechanism.  This is complex due to the fact that Metal C and Assembler do not have DLL's, but the work is almost done. 

## JES API's (Due Q2)

Improved job submission and tracking API's are in progess.  The ability to remove a zOSMF, which currently provides API) dependency is helpful for other Zowe components and project.  Need to interface with consumers to validate requirements.

Consumers:  VS Code Explorer, CLI (Fernando, Billie) - JES Explorer in desktop (Adarshdeep), 

## Syslog (On hold, requestor dormant)

The zowe-common-c WTO api's need some improvement (line-length, etc).   Zowe logging routing and filtering needs improvement to support how the Zowe Launcher forwards logs to the "proper" ZOS place, SYSLOG.

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
The Web UI squad has more ideas than listed here, and can be seen at our [github issue page](github.com/zowe/zss/issues). Several issues are listed as *Help Wanted*, as well as *Good First Issue*

### Contact us
Please find us in the #zowe-zos-interface slack if you wish to become involved!

Join us every Wednesday at 11am EST on Zoom at https://zoom.us/j/92871072081 where we give weekly standup, demos, and discussions.

