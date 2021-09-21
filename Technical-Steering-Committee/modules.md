# Modules

The code within the Zowe is structured into modules. There are modules that belong to the Core of the Zowe and modules that are Extensions of Zowe. modules together with their dedication and lifecycle status are described in the [list of modules](list-of-modules.md). Every module is woned by one of the squads

Every module follows semantic versioning. The module states for the relevant versions their status. Unless the status is defined, the status is archived. Therefore for every module it is possible to be in multiple stages based on the version. This information will be available in every repository for the modules available within the repository. 

Is this what we want. 

E.g. API Mediation Layer:
- v0.9.x - Archived
- v0.10.x - Deprecated
- v1.x.x - Generally Available
- v2.x.x - Minimum Lovable Product
- v3.x.x - Under development

I kind of feel that we are mixing two things here. One is support and the other is versioning of components and the state for versions, where we have under developments, active and maintenance

The second is actually the components. 

## Lifecycle

The modules are going through the four stages of their lifecycle. Under development -> Technical Preview -> Generally Avaliable -> Deprecated -> Archived. All the modules as we understand them within Zowe are versioned and use semantic versioning. 

- Under Development 
- Technical Preview
- Generally Available (GA)
- Deprecated
- Archived

### Under Development

Module in this stage isn't yet ready to be deployed in production. The squad is working on it and preparing it for the deployment. 

### Technical Preview

Module is ready to be used and deployed in production. The module is going to be supported for the version it came originally in. It's possible that the module will be changed or removed in later versions. 

### Minimum Lovable Product

This is a product that we support to deliver to the party. 

### Generally Available 

module is available for the general usage. The module is supported by the community. This means that it will receive updates and won't get any breaking changes within the current Active major release cycle and it will be supported in the maintenance cycle. In order to remove this module, the module needs to be moved to the deprecated status and then removed earliest on the border of next major release. 

### Deprecated

There will be no more support for the module within the next Active major release. The module will get the patches within the Maintenance window for the releases it was in either in GA or Deprecated state. After the major release version where it was deprecated the next one won't contain the module anymore. 

### Archived

module in this stage doesn't receive any support. The code is still part of the Zowe and you can use it but ther is no guarantee nor support for such modules. 

## Dedication

The modules within Zowe are either part of the Zowe core or part of the Zowe extensions. Apart from that there are modules provided by vendors and extenders. There is no guarantee from the Community for these modules. 

### Core

The Core modules together form the main parts of Zowe. Every system should have these modules installed in order to have a full usage of the Zowe. There are server side and client side modules that together orchestrate the whole Zowe functionality.

Each squad is responsible for maintaining the list of the modules under their guidance. The modules list also outlines for module whether it's Core or Extension.  

#### Distribution

There will be 

Do we need to distinguish the Core/Extension here?

The distribution of the core modules is outlined in the [release guidelines](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/release.md#release-content). 

### Extension

Zowe contains extensions supported by the community that aren't necessary for the usage of the Zowe on every system and as such they are dedicated as the extensions. Every user can decide to use these extensions and the community does support them in the same way as other modules. 

#### Distribution


