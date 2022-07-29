# Zowe ZOS Squad 22PI3 Planning

## Security 

Security assurance will come from using tools that analyze the code to index vulnerability databases and note non-best-practice use of library functions and memory allocation.  To be able to use these tools, the codebase needs to compile off-ZOS.   A stretch goal is to be able to use "sanitizers".  (https://github.com/google/sanitizers) and valgrind in our CICD pipeline.  

## Static Analysis

A number of tools were reviewed, and any that were pattern-based produced far too many false positives.  The Clang/LLVM community provides some of the best static analysis tools.   These tools are far more accurate, and are based on the compiler that we are moving too.  They are also free!

- Clang Static Analyzer: https://clang-analyzer.llvm.org/
- Clang Tidy: https://clang-analyzer.llvm.org/

## Dynamic Linkage for ZIS Plugins

ZSS plugins have been DLLs since Zowe's origin.   This helps 3rd parties to release plugins wih Intellectual Property under non-EPL terms.   ZIS Plugins up to Zowe 2.2 are statically linked, which is not good, license-wise.  This is a complex project that was prototyped in fall of 2021, but will be made official in Q3 2022.  

## Cross Platform Compilation

The zowe-common-c repo could compile, and in many cases run, on Lunix, AIX, and Windows in 2018.  Over past few years a number of commits were made that broke cross-platform compilation.  

## Potential to leverage libcurl

The availability of xlclang has started to allow the easier use of open-source on ZOS.  Yaml handling, and embedded JS scripting are provided though OSS tools in 2.0, but libcurl may be next on the list for incorporation.

## Launcher SYSLOG support collaboration

Community interest in adding syslog support to our servers has been discussed here https://github.com/zowe/community/issues/1521 and it seems the solution will involve code that the ZOS squad can assist with, be it knowledge sharing or review or implementation.

## "Single-user Zowe" completion

A demo-ed capablity that allows a zero-config ZSS server run should be completed shortly.  The Zowe ZSS can run in a mode that is only uses the security context of a single SAF userid and only serves queries though an SSH tunnel.  This eliminates all complex configuration.  

## Education

These repos are some of the most complex and sophisticated examples of C coding for ZOS.   It would be good to have an office hours or regular set of webinars to teach people how to be effective C programmers for ZOS.

