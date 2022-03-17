# Proposals

This page collects current proposals for mentee projects across Zowe. Every project at the very least 
has name, mentor, description and owning squad. If you as a potential mentee are interested in any of 
the projects, please reach out to the mentor via [OpenMainframeProject's slack channel](https://join-slack.openmainframeproject.org/). 

## Enable API ML to validate the conformance of extensions

**Mentor:** Jakub Balhar

**Owner squad:** API Mediation Layer Squad

**Relevant skills:** Java, Spring, Gradle

**Description:** It's possible to onboard external services to the API Mediation Layer. By onboarding 
we mean the visibility of the services in the API Catalog together with routing to the services via the 
API Gateway. To guarantee for the Zowe users that some services provide working funtionality and properly 
integrates we created conformance criteria. The criteria also ask for a few other topics such as 
integration with the SSO for Zowe. In this project we want to prepare a tool, which will get the configuration
of the service and the running service and will verify that the claims from conformance are actually 
satisfied.

## Display System Metrics for Containerized API ML Services

**Mentor:** Carson Cook

**Owner squad**: API Mediation Layer Squad

**Relevant skills:** Java, Spring, Gradle, Docker, Kubernetes

**Description:** Retrieve information about the pods and containers running the containerized API ML services.
Kubernetes provides a metrics server with APIs to querying for system metrics such as CPU cores and memory usage
used by each pod. These metrics will be retrieved by the API ML Metrics Service and displayed in its existing UI.
The Metrics Service will also transform the metrics as appropriate, for example aggregated metrics between pods running
the same service containers. Ideally metrics could be dis-aggregated into per container metrics within each pod as well.
These system metrics would be displayed in addition to HTTP metrics collected from each service instance.

A further step would be to generize this functionality to fit into generic configuration for the Metrics Service,
allowing these metrics to be displayed alongside metrics from containers not running in Kubernetes, or from services
not running in containers at all.

## Editor

**Mentor:** Leanid (Lenny)

**Owner squad:** Web UI Squad

**Relevant skills:** Javascript, Angular, C

**Description:** Using ZSS mock server, Editor development is possible. We would seek out a mentee 
who's interested in developing a front-end but isn't afraid to also do C coding to enhance ZSS APIs 
to improve Editor (with some hopeful help from IBM Z trial system). Update Editor V1 features into V2

## Angular Zones

**Mentor:** Leanid (Lenny)

**Owner squad:** Web UI Squad

**Relevant skills:** Angular, Javascript

**Description:** Update Zowe Desktop to utilize ngZone, which should help improve desktop performance 
when using apps and when apps load. This should be someone who's interested in web development nearly exclusively

## ZSS Mock Server

**Mentor:** Leanid (Lenny)

**Owner squad:** Web UI Squad

**Relevant skills:** Python

**Description:** Review existing mentee code that is idle and make new features and enhancements to ZSS mock server to make it match up to date current state of ZSS. This will almost exclusively Python experience

## File Transfer App

**Mentor:** Leanid (Lenny)

**Owner squad:** Web UI Squad

**Relevant skills:** Javascript, Angular, C

**Description:** WIP Zowe app could come to life with mentee help. Similar skills as Editor


