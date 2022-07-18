# Projects

The code within the Zowe is structured into projects. Some projects belong to the Core of the Zowe and projects that are Extensions of Zowe. Every project is owned by one of the squads. A squad may own more than one project. A project consists of one or more components. 

See the [versions](versions.md) documentation for information about the highest achieved lifecycle stage, as well as information about versions.

## Versioning

Zowe consists of multiple projects. Each project is versioned and follows semantic versioning. A specific version of Zowe is a collection of projects in concrete versions. Project versions do not have to be the same as the Zowe vresion. 

Every project has an active major version. This version receives updates containing new functionality in minor and patch version updates. Long Term Support (LTS) projects also can have a maintenance major version. The maintenance version is supported and receives security-related fixes as patch versions.

The community supports projects on a best effort basis for the last minor version introduced within the active and maintenance major versions. 

## Lifecycle

Projects develop through six lifecycle stages. The following diagram presents possible transitions. Specific attributes of each stage are described in the stage details. 

- Under Development
- Technical Preview
- Generally Available (GA)
- Long Term Support (LTS)
- Deprecated
- Archived

![Life Cycle Transitions](projects-lifecycle.png "Life Cycle Transitions")

### Under Development

#### Purpose

This stage informs developers that there is a specific task is underway and that the development community can join the effort. This stage indicates to users and extenders that such a project may become available in the future. 

#### Timeline

In the Under Development stage, the timeline is as long as it takes to move the project to at least the Technical Preview stage.

#### Support

The project in the Under Development stage is not ready to be deployed. Therefore, there is no support other than reaching out directly to developers. 

#### Recommended Use

Help with the development of the functionality. 

#### Possible transitions

- A transition from Under Development to Technical Preview indicates that the project is ready for validation by customers.
- A transition from Under Development to Generally Available indicates that the project received the needed feedback already in the Under Development phase, and is ready to be put into production.

### Technical Preview

#### Purpose

The purpose of teh Technical Preview stage is to gather feedback on the project from potential future users and extenders. The further minor releases to the projects in technical preview may contain breaking changes. 

#### Timeline

The timeline for the Technical Preview stage is as long as necessary to move the project to at least the Generally Available stage. A project should not remain in this phase for longer than a year. Projects in the Technical Preview stage for more than a year may be returned to the Under Development stage.  

#### Support

The project is ready for the test and validation environments. Support is still provided on the best effort basis for the last version in which the technical preview has been made available. A project in the Technical Preview stage can still be moved back to Under Development or directly Archived.

#### Recommended Use

Projects in the Technical Preview stage are ready for testing and validation environments and to receive feedback from Zowe to improve the project. 

#### Possible transitions

- A transition from Technical Preview to Generally Available indicates that the project has received the needed feedback and is ready to be put into production
- A transition from Technical Preview to Long Term Support indicates that the project is stable and mature and is ready for production.
- A transition from Technical Preview to Archived indicates that after the feedback from the customers, it has been determined that the project is not a good fit and that development will not continue.

### Generally Available

#### Purpose

Projects in the Generally Available stage are ready to receive additional user feedback and improve the project before stabilizing it for Long Term Support. The project is stable, and major changes are not expected. Unlike projects in the Long Term Support stage, projects in the Generally Available stage may still require somechanges. Projects that have become Generally Available are ready for inclusion in production environments. A project in this stage may need to release major versions with breaking changes more often than the projects in Long Term Support. There should be no breaking changes in the minor releases.

#### Timeline

Projects in the Generally Available stage are to be supported for at least six months with updates. It may become LTS during this time, at which point LTS rules will apply. 

#### Support

The community will support GA projects for at least six months after the initial release. Afterward, with the next major Zowe release version, the project should also enter the stage of LTS, or alternatively placed in the Archived stage if it did was not successful.

#### Recommended Use

A project placed in this stage is available testing, validation, and production environments. In this stage a project recevies feedback from Zowe to improve the project. 

#### Possible transitions

- A transition from Generally Available to Technical Preview indicates that we found out, based on the customer feedback, that the project needs a major rework for a longer life.
- A transition from Generally Available to Long Term Support indicates that the project is stable and mature. The proect belongs to the production. 
- A transition from Generally Available to Archived indicates that the project was not a good fit and, as such, will not be further developed.

### Long Term Support

#### Purpose

The most stable version does not necessarily contain the latest and newest functionality, but the project is ready to be deployed to production environments. Projects in this Long Term Support stage are the most stable and longest supported versions of any specific project. No breaking changes are permitted within the major release. 

#### Timeline

The timeline for LTS is based on the Core Zowe release. We expect the LTS to be linked to the Core Zowe release cycle. As such, the LTS operates in the same way as the major Zowe release which it first became part of. 

#### Support

Support for LTS projects is provided over a much longer window and within a well-defined calendar. The active phase of the project depends on when the project joins Zowe. Maintenance will be provided at least two and a half years with deprecation in the next major version if it was removed at some point in time. 

![Major releases support schedule](https://www.zowe.org/assets/img/major_releases.png)

**Note:** Projects that are part of the Core and reach Long Term Support are required to be supported by the conformant support providers. 

#### Recommended Use

Projects in the LTS stage are in the Production environment. The project is stable and mature. 

#### Possible transitions

- A transition from Long Term Support to Deprecated indicates that the project is no longer relevant and, as such, will be removed in the next major version. 

### Deprecated

#### Purpose

Projects in this stage offer more extended support and give  customers time to prepare before sunsetting of a specific project. There are no breaking changes permitted within the major release boundary.

#### Timeline

In general, the timeline for depreced projects is linked to the Zowe Core release cycle. As such, this is determined on the major version boundary, and lasts until the maintenance phase of the version ends.

#### Support

During the deprecated phase, no new development is happening. Only critical and security fixes are provided in the same way as the Maintenance phase. 

#### Recommended Use

Projects in this stage are removed from the Production environment as the project will be removed from Zowe. 

#### Possible transitions

- A transition from Deprecated to Archived indicates that the project development and support will not continue.

### Archived

#### Purpose

Projects in the Archived stage keep the history of what was tried and what was used at some point. 

#### Timeline

The source code for these projects is kept as long as deemed relevant for archivation purposes. 

#### Support

There is no support and no guarantee for projects at this stage. The build infrastructure is not owned and maintained by the community. 

#### Recommended Use

None. Projects in this stage should not be used. 

#### Possible transitions

- A project may transition to Under Development when the product attracts developers and users for creating a new version.
- A project may transition to Technical Preview when the product was inactive, and the last released version is seeking feedback when the project becomes active again.

### Example

#### Standard Lifecycle process

The Zowe Acme project was proposed by one of the TSC members and is accepted as a new project by one of the active squads or has its own Incubator Squad (Squad lifecycle is explained in [squads.md](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/squads.md)). The group of developers behind the project works on the first version, indicating that the product is Under Development. After a half year of development, the technical preview for the first version is prepared and published as a Technical Preview to gather more feedback from the users. Developers get feedback
from the users and update the project. Afterward, the first version of the project is published as Generally Available. The Generally Available
version of the project gains traction and users, and is moved to Long Term Support. This way, the project joins the currently Active 
major version of Zowe. After two major versions, the programming landscape changes and the project is no longer of use.  
The group of developers working on the project gets smaller and smaller. Therefore, the project is Deprecated for the next major version. Following the maintenance period of this major version, the project is archived. 

## Dedication

Within Zowe we recognize two types of projects: core projects and extension projects. This policy focuses on projects Zowe is responsible for. The projects created by other third parties may follow different policies based on the policies of their creators. Core and extension projects are supported by the community in the way explained previously. 

Each squad is responsible for maintaining the list of the projects under their guidance. The project list available [here](../PROJECTS.md) also outlines whether the project is Core or Extension.  

### Core

Core is defined as Zowe projects that are required and are foundational in order to realize the full value of Zowe for everyone including all the other extensions that may depend on them. Configuration and usage is recommended.  

Zowe is fully responsible for all Core projects. A non-Zowe project cannot be clasified as a Core project. Each active squad is responsible for the core project with co-responsibility of the TSC. 

#### Distribution 

Distribution differs for different parts of Zowe. We guarantee that all core projects will be available from one Zowe controlled repository. Specific projects may introduce other delivery methods for convenience (e.g. VS Code marketplace, NPM, …). Whenever multiple projects constitute core for a specific platform we will provide a package containing all the Core projects (e.g. SMP/E, PAX, PSWI, …). When there are multiple core projects packaged into a single package, all the projects within the package need to be installed on the system (e.g. server side SMP/E packages ZSS, App Framework and API ML and all three need to be installed).  

#### Support

Every core project is a part of the Conformance Support Program. Comprehensive Support Provider provides capable support for the given authenticated binary(s) of the Zowe core component(s) being attested to for the
version(s) of Zowe defined in the version of the Zowe Support Provider Conformance program it conforms to. Capable Support is defined as having necessary hardware, software, and persons to diagnose issues, code solutions, test solutions, and provide fixes for
issues in a reasonable timeframe.

#### Marketing

Every core project is strongly associated with the question “What is Zowe?”. When we talk about what Zowe is and how it helps users, we talk first about Zowe’s “core”. Core is being added to the center of gravity for the project.

Every core project has the right to be visible on the main zowe.org webpage under the Core projects and the packages are visible on the zowe.org download page. 

Every core project is promoted in overall Zowe marketing materials and denoted as such in the Zowe documentation (e.g. shown in the Zowe diagram, …)

#### Process

What are the necessary attributes for a Core project?

- The project needs to be LTS (Supportability)
- Mature Squad and Development process  (Community commitment)
  - CI/CD + Deployment model
  - Zowe policy conformance. This includes CII adherence
  - Active squad with committed members and diverse developer’s base (e.g. developer’s from multiple companies, …)
- User base or strong use case with TSC approval (Why does it belong?)
- Conformance program, if applicable

When do we accept new projects in Core?

- We accept new projects into Core on the major version boundary. The expectation is the availability of the support provider. 
Outside of the boundary they may be introduced without expecting the support from the external support providers. 

How do we accept new projects in Core?

- The TSC is co-responsible for the Projects that are Core and at least LT with the relevant active squad
- The TSC needs to vote for the project to join Core

How do we remove projects from Core?

- The TSC needs to vote for the project to be removed from the Core

When do we remove projects from Core?

- We remove the projects from Core to extensions only on a major version boundary
- In an extreme situation we may agree on the faster paced removal that will require ⅔ agreement within TSC. 
  - An example would be a hostile takeover of one of the active squads by the external party that then changes the code of the core component to do something malicious. 

### Extension

The extensions outlined in this chapter are the extensions provided by Zowe and Zowe is responsible for them. The extensions provided by other third parties do not have to follow what is written in this policy.

#### Distribution

The distribution differs for different parts of Zowe. We guarantee that all extension projects will be available from one Zowe controlled repository and will be marked as such. Specific projects may for convenience introduce other delivery methods (e.g. VS Code marketplace, NPM, …). The extensions are published as separate packages. 

#### Support

Zowe community supports the extensions based on their lifecycle stage. For the LTS extensions we provide the support on a best-effort basis for the last minor version in the active and maintenance release stream. 

For the extensions, the squad can endorse any vendor as a support provider who asks the squad for the endorsement based on the fact, that the vendor intends to provide the support. 

#### Marketing

The extensions are presented among the conformant services when applicable as well as on zowe.org within the dedicated space for Zowe extensions. 

The extensions are presented within the marketing materials as part of See what’s being built with Zowe. 

#### Process

What are the necessary attributes for an extension project?

- The project needs to be GA or LTS (Supportability)
  - Mature Squad and Development process  (Community commitment)
  - CI/CD + Deployment model
- Zowe policy conformance. This includes CII adherence
- Active squad with diverse developer’s community

When do we accept new projects as extensions?

- The projects apply to a specific active squad and the application is discussed at their regular meeting. 

How do we accept new projects as Extension?

- To move the project to at least the GA as an extension, one of the active squads needs to approve it via vote. 

How do we remove projects from extensions?

- The active squad needs to vote on the removal. 

When do we remove projects from extensions?

- Unless there is an active squad that wants to accept the project as an extension it is removed on the next major version boundary.

