# CLI Squad - 20PI2 Objectives (March to June, 2020)
The overall theme of 20PI2 for the CLI squad:  Drive next-level user experience by focusing on integrations between and deriving value from, the individual components.  Specifically: 
- API-ML:  Leverage the API-ML as the centralized service layer to simplify the configuration and sign-on experience for our users and enable our functionality to be effectively used in an environment where MFA is required  
- Client SDKs:  Develop content focused on using and developing for our client Node and Python SDKs to demonstrate their value to the Zowe ecosystem and its extenders
- Zowe Explorer:  Help to inspire and guide extenders by adding it to the conformance program


## Zowe CLI
### Single sign-on
- Enable a secure and modern developer experience by providing single sign-on via the CLI for services that integrate with the APIML’s SSO capabilities. This effort will also allow the CLI to be effectively used in an MFA environment
    - Enhance the Imperative Framework to manage token-based authentication
    - Leverage these changes in the Zowe CLI to allow SSO for all services that integrate with the APIML's SSO capabilities
    - Create a new APIML profile to simplify profile management for services leveraging APIML's SSO capabilities

### Alternative code page support for data set & USS file content
- Alternative code page support is now available with z/OSMF on V2R4 and V2R3 with APAR PH15263 for the z/OS data set and file REST interface.
- Support will be available for CLI upload/download dataset/USS file commands. Code page setting can be configured as part of the profile.

## Zowe Client SDKs 
### Establish & Promote
- Onboard "Zeepy" - incoming Python SDK contribution from @gcartier94
- Align Node SDK as appropriate
- Showcase as part of Zowe ecosystem (e.g. Zowe Explorer and CLI are built on Node SDK)

## Zowe Explorer 
### Profile management
- Add delete and edit profile management functionality

### Conformance
- Draft and deliver Zowe Explorer Conformance Criteria for Zowe Explorer Extenders

### Community Focus
- Continue to address upvoted and impactful issues and requests opened by the community

### Data set interaction
- Add copy PDS, PDS/E functionality
- Improve data set creation functionality (initial ideas include allocate-like and allowing users to create their own models)

### Process improvements
- Restructure unit tests and integrate into CI/CD pipeline.

### Community Stretch
- Leverage primary CLI deliverable to support SSO for the Zowe Explorer
- Enhance integration test suite - availability of a community hosted Che instance and remote z/OS environment to test against would help in this effort.
- Leverage Zowe CLI enhancement to provide alternative code page support within Zowe Explorer
