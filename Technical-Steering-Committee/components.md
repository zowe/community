# Components

The code within the Zowe is structured into components. There are components that belong to the Core of the Zowe and components that are extensions of Zowe. Components together with their dedication and lifecycle status are described in the [list of components](list-of-components.md). 

Every component follows semantic versioning. The component states for the relevant versions their status. Unless the status is defined, the status is archived. Therefore for every component it is possible to be in multiple stages based on the version. This information will be available in every repository for the components available within the repository. 

E.g. API Mediation Layer:
- v0.x.x - Archived
- v1.x.x - GA
- v2.x.x - Under development

## Lifecycle

The components are going through the four stages of their lifecycle. Under development -> Technical Preview -> Generally Avaliable -> Deprecated -> Archived. All the components as we understand them within Zowe are versioned and use semantic versioning. 

- Under Development 
- Technical Preview
- Generally Available (GA)
- Deprecated
- Archived

### Under Development

Component in this stage isn't yet ready to be deployed in production. The squad is working on it and preparing it for the deployment. 

### Technical Preview

Component is ready to be used and deployed in production. The component is going to be supported for the version it came originally in. It's possible that the component will be changed or removed in later versions. 

### Generally Available 

Component is available for the general usage. The component is supported by the community. This means that it will receive updates and won't get any breaking changes within the current Active major release cycle and it will be supported in the maintenance cycle. In order to remove this component, the component needs to be moved to the deprecated status and then removed earliest on the border of next major release. 

### Deprecated

There will be no more support for the component within the next Active major release. The component will get the patches within the Maintenance window for the releases it was in either in GA or Deprecated state. After the major release version where it was deprecated the next one won't contain the component anymore. 

### Archived

Component in this stage doesn't receive any support. The code is still part of the Zowe and you can use it but ther is no guarantee nor support for such components. 

## Dedication

The components within Zowe are either part of the Zowe core or part of the Zowe extensions. Apart from that there are components provided by vendors and extenders. There is no guarantee from the Community for these components. 

### Core

The Core components together form the main parts of Zowe. Every system should have these components installed in order to have a full usage of the Zowe. There are server side and client side components that together orchestrate the whole Zowe functionality.

Each squad is responsible for maintaining the list of the components under their guidance. The components list also outlines for component whether it's Core or Extension.  

### Extension

Zowe contains extensions supported by the community that aren't necessary for the usage of the Zowe on every system and as such they are dedicated as the extensions. Every user can decide to use these extensions and the community does support them in the same way as other components. 

## Distribution

The Zowe community is at least responsible for delivery of the components outlined as core. 

### Core

The distribution of the core components is outlined in the [release guidelines](https://github.com/zowe/community/blob/master/Technical-Steering-Committee/release.md#release-content). 

### Extensions

The distribution for extensions depends on whethre the extensions are client side or server side. 

#### Server side

// TODO: Figure out the server side extensions delivery. 

#### Client side

VS Code extensions will be delievered via the standard methods for the VS Code delivery

Node extensions will be delivered via NPM. 
