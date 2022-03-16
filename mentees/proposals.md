# Proposals

This page collects current proposals for mentee projects across Zowe. Every project at the very least 
has name, mentor, description and owning squad. If you as a potential mentee are interested in any of 
the projects, please reach out to the mentor via [OpenMainframeProject's slack channel](https://join-slack.openmainframeproject.org/). 

## Enable API ML to validate the conformance of extensions

**Mentor:** Jakub Balhar

**Owner squad:** API Mediation Layer Squad

**Description:** It's possible to onboard external services to the API Mediation Layer. By onboarding 
we mean the visibility of the services in the API Catalog together with routing to the services via the 
API Gateway. To guarantee for the Zowe users that some services provide working funtionality and properly 
integrates we created conformance criteria. The criteria also ask for a few other topics such as 
integration with the SSO for Zowe. In this project we want to prepare a tool, which will get the configuration
of the service and the running service and will verify that the claims from conformance are actually 
satisfied.