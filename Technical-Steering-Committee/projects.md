# Projects

The code within the Zowe is structured into projects. There are projects that belong to the Core of the Zowe and projects that are Extensions of Zowe. Every project is owned by one of the squads. Squad may own more than one project. Project consists of one or more components. 

The information about the highest achieved lifecycle stage as well as the information about versions are [here](versions.md).

## Versioning

Zowe consists of multiple projects. Each project is versioned and follows semantic versioning. This applies to Zowe as well. Zowe in a specific version is a collection of projects in specific versions. The versions of the project doesn’t have to be the same as for Zowe. 

Every project has an active major version. This version receives updates containing new functionality in the form of minor and patch version updates. Long Term Support projects also can have a maintenance major version. Maintenance version is supported and receives security related fixes as patch versions.

The community supports projects on a best effort basis for the last minor version introduced within the active and maintenance major versions. 

## Lifecycle

The projects are going through the six stages of their lifecycle. The image shows possible transitions. More details for the transitions are in the details of the stage. 

- Under Development
- Technical Preview
- Generally Available (GA)
- Long Term Support (LTS)
- Deprecated
- Archived

![Life Cycle Transitions](projects-lifecycle.png "Life Cycle Transitions")

### Under Development

#### Purpose

To let developer’s know that there is something going on and that they can join the effort. To let the users and extenders know that at some point in future such project may be available. 

#### Timeline

As long as it takes to move the project to at least the Technical Preview stage.

#### Support

The project in this stage isn’t ready to be deployed and as such there is no support other than reaching out directly to the developers. 

#### Recommended Use

Help with the development of the functionality. 

#### Possible transitions

- From Under Development to Technical Preview means that the project is ready for validation by customers
- From Under Development to Generally Available means that the project received the needed feedback already in Under Development phase and is ready to be put to production

### Technical Preview

#### Purpose

To gather feedback on the project from potential future users and extenders. 

#### Timeline

As long as necessary to move the project to at least Generally Available stage. The project shouldn’t stay in this phase longer than year. If this is the case then it’s possible to return the project to Under Development.  

#### Support

The project is ready for the test and validation environments. The support is still provided on the best effort basis for the last version in which the technical preview was available. The project still can be moved back into Under Development or directly Archived

#### Recommended Use

Put the project in testing and validation environments and provide feedback to the Zowe in order to improve the project. 

#### Possible transitions

- From Technical Preview to Generally Available means that the project received the needed feedback and is ready to be put to production
- From Technical Preview to Long Term Support means that the project is stable and mature. It belongs to production
- From Technical Preview to Archived means that after the feedback from the customers the project found that it’s not a good fit and the development won’t continue

### Generally Available

#### Purpose

To gather more feedback and improve the project before stabilizing it for Long Term Support. The project is stable and we don’t expect major changes but unlike for Long Term Support the changes may be needed. We believe that it’s ok for GA products to become part of the production environments. 

#### Timeline

Supported for at least 6 months with updates. It’s possible that it will become LTS during this time and then the LTS rules will apply. 

#### Support

The community will support GA projects at least for 6 months after the initial release. Afterwards with the next major Zowe release version, latest, the project should also become LTS or Archived if it didn’t succeed.

#### Recommended Use

Put the project in the test, validation and production environments. Provide feedback to the Zowe in order to improve the project. 

#### Possible transitions

- From Generally Available to Technical Preview means that we found out based on the customer feedback that the project needs major rework for a longer life 
- From Generally Available to Long Term Support means that the project is stable and mature. It belongs to production 
- From Generally Available to Archived means that the project wasn’t good fit and as such won’t be further developed

### Long Term Support

#### Purpose

The most stable version doesn't necessarily contain the latest and newest functionality but it’s ready to be deployed to the production environments. This is the most stable and longest supported version of any project. There are no breaking changes allowed within the major release. 

#### Timeline

Timeline is based on the Core Zowe release. We expect that the LTS will be linked to the Core Zowe release cycle. So it will live in the same way as the major Zowe release it first became part of. 

#### Support

Much longer window and well defined calendar. The active phase of the project depends on when it joins the Zowe, but the maintenance will be at least 2 and a half years with deprecation in the next major version if it was removed at some point in time. 

![Major releases support schedule](https://www.zowe.org/assets/img/major_releases.png)

#### Recommended Use

Put the project in the Production environments. The project is stable and mature. 

#### Possible transitions

- From Long Term Support to Deprecated means that the project is no longer relevant and as such will be removed in the next major version. 

### Deprecated

#### Purpose

To provide longer support and give the customers time to prepare before sunsetting a specific project. 

#### Timeline

In general it is linked to the Zowe Core release cycle. Therefore it happens on the major version boundary and lasts until the maintenance phase of the version ends.

#### Support

During the deprecated phase no new development is happening. Only critical and security fixes are provide in the same way as for Maintenance phase. 

#### Recommended Use

Remove the project from the Production environment as the project will be removed from Zowe. 

#### Possible transitions

- From Deprecated to Archived means that the project development and support won’t continue

### Archived

#### Purpose

To keep the history of what we tried and what was used at some point. 

#### Timeline

The source code will be kept as long as deemed relevant for archivation purpose. 

#### Support

There is no support and no guarantee for projects in this stage. The build infrastructure isn’t owned and maintained by the community. 

#### Recommended Use

None. Don’t use the projects in this stage. 

#### Possible transitions

- To Under Development in case the product attracts developers and users for creating new version
- To Technical Preview in case the product was inactive and the last released version is seeking for feedback when the project becomes active again

### Example

#### Standard Lifecycle process

Zowe Acme project is proposed by one of the TSC members and is accepted as incubating project. The group of developers behind the project
works on the first version which means the product is Under Development. After half of year of the development the technival preview for 
the first version is prepared and published as Technical Preview to gather more feedback from the users. The developers get feedback
from the users and update the project. Afterwards they publish the first version as the Generally Available. The Generally Available
version of the project gains traction and users and as such the project is moved to the Long Term Support. This way it joins currently Active 
major version of Zowe. After two major versions the programming landscape changes and as such the project isn't used much anymore and 
the group of developers working on the project gets smaller and smaller. The project is therefore Deprecated for the next major version 
and after the maintenance time of this major version passes it gets deprecated. 