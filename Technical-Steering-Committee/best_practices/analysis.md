#Analysis

The following list is based on the [Core Infrastructure Initiative](https://bestpractices.coreinfrastructure.org/en/criteria/0) 

## Static code analysis

* At least one static code analysis tool (beyond compiler warnings and "safe" language modes) MUST be applied to any proposed major production release of the software before its release, if there is at least one FLOSS tool that implements this criterion in the selected language. {N/A justification} {Met justification} [static_analysis](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.static_analysis)
* It is SUGGESTED that at least one of the static analysis tools used for the static_analysis criterion include rules or approaches to look for common vulnerabilities in the analyzed language or environment. {N/A allowed} [static_analysis_common_vulnerabilities](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.static_analysis_common_vulnerabilities)
* All medium and higher severity exploitable vulnerabilities discovered with static code analysis MUST be fixed in a timely way after they are confirmed. {N/A allowed} [static_analysis_fixed](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.static_analysis_fixed)
* It is SUGGESTED that static source code analysis occur on every commit or at least daily. {N/A allowed} [static_analysis_often](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.static_analysis_often)

## Dynamic code analysis

* It is SUGGESTED that at least one dynamic analysis tool be applied to any proposed major production release of the software before its release. [dynamic_analysis](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.dynamic_analysis)
* It is SUGGESTED that if the software produced by the project includes software written using a memory-unsafe language (e.g., C or C++), then at least one dynamic tool (e.g., a fuzzer or web application scanner) be routinely used in combination with a mechanism to detect memory safety problems such as buffer overwrites. If the project does not produce software written in a memory-unsafe language, choose "not applicable" (N/A). {N/A allowed} [dynamic_analysis_unsafe](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.dynamic_analysis_unsafe)
* It is SUGGESTED that the project use a configuration for at least some dynamic analysis (such as testing or fuzzing) which enables many assertions. In many cases these assertions should not be enabled in production builds. [dynamic_analysis_enable_assertions](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.dynamic_analysis_enable_assertions)
* All medium and higher severity exploitable vulnerabilities discovered with dynamic code analysis MUST be fixed in a timely way after they are confirmed. {N/A allowed} [dynamic_analysis_fixed](https://bestpractices.coreinfrastructure.org/en/criteria/0#0.dynamic_analysis_fixed)