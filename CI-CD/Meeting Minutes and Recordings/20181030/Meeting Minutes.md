# Meeting Minutes for CI/CD Squad

Introduction

Current Goals/Milestones

1. Use new Zowe GitHub as our build source
2. Complete CI/CD pipeline with automated testing along with improved install testing
3. Conversion to OMP as host of build

Squads Waffle Board
https://waffle.io/zowe/zowe-install-packaging

Agenda Items

- Build Status
- Waffle Board Review
- Security Scans as part of CI/CD Issue #42 (https://waffle.io/zowe/zlc/cards/5baa777ca897d30075425314)
- CII Best Practices Badge Program (https://bestpractices.coreinfrastructure.org/en)
- Help Squads automate their testing and document how to add test infrastructure to GitHub/Zowe (work with Onboarding squad)
- Migrate Build Environment to OMP/VCU

Roundtable

Jack
- Testing new search for documentation website to be completed this week
- Working with Jason/Jessica on blog website.
- Separate download ability for CLI. Waiting for approval from ZLC and then will work with Jason/Jessica

Mark
- Investigation to be done: All sub-projects need to version on a regular cadence instead of locking down build. PAX build targets latest stable release. Will contact Eamon to see if he can driver this change.
- Will follow up with Petr to include their automation in the pipeline
- ZLC migration plan for repositories. Creating markdown file that describes each repo and what they need.
- Migrated API ML to zowe
- Refactoring build on Jenkins
- fix bug in ML
- Generating CLI bundle for 0.9.3
- Posted on ZLC the build versioning proposal. Work with the Leads
- Working with ZLUX to get build on distributed system. Packaging would still require Z Box

John
- Working on IVT scripts to improve user experience. Couple of scripts to check if they systems is prepared for the Installation of Zowe. Also, after the install is run a second script would be run. Then a third script to verify that everything is running.
- Synchronizing UK Zowe image with zTrial machine. Very slow, only 25%

Meeting Minutes/Recording
N/A
