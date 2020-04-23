# Squad Categories

Squads have different categories, that category coincides with the deliver mechanism for the code managed by the squad. Categories are definied and maintained by the TSC in conjuction with the [squad lifecycle](lifecycle.md)

# Categories

## Core

Core is defined as one of...
- Infrastructure to make Zowe work ( App Framework, API Mediation Layer, CLI )
- Tools to access base z/OS Operating System functionality leveraging the above infrastructure of Zowe

Core components that reach the Active Stage will be included in the subsequent Zowe release and future Zowe releases until the sub-project reaches Emeritus Stage. Active Stage projects may be included in a current active LTS release by supermajority vote (2/3rd of the voting members) of the TSC.

Zowe Core sub-projects are listed on zowe.org for the given Zowe release it pertains to, and delivered via GitHub, zowe.org, and technology specific channels as applicable (such as VS Code Marketplace, npm, etc). Archived releases are also made available on GitHub and zowe.org.

## Extended

Zowe Extended sub-projects are defined as open source components within the Zowe project, that isn’t in Zowe Core, and intended for direct end-user usage

Zowe Extended sub-projects should maintain a current Zowe Conformant Application status to attain Active status.

Zowe Extended sub-projects are delivered via GitHub and technology specific channels (such as VS Code Marketplace, npm, etc) and not tied to the Zowe release schedule.

## Development Tooling

Zowe Development Tooling are open source components within the Zowe project, that isn’t in Zowe Core that are intended for developers and products to use to build upon or better leverage Zowe Core. This code would be available under both an Apache 2 and an EPLv2 license.

Zowe Extended sub-projects are delivered via GitHub and technology specific channels (such as VS Code Marketplace, npm, etc) and not tied to the Zowe release schedule.

# General Requirements for all components

- Support for all Zowe working alongside all z/OS enterprise security managers
- New pre-reqs or updated system requirements and deployment configurations must be agreed by TSC supermajority
