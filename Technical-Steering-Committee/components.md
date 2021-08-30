# Components

The code within the Zowe is structured into components. There are components that belong to the Core of the Zowe and components that are extensions of Zowe. Components together with their dedication and lifecycle status are described in the [list of components](list-of-components.md). 

Every component follows semantic versioning. The component states for the relevant versions their status. Unless the status is defined, the status is archived. Therefore for every component it is possible to be in multiple stages based on the version.

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

Component in this stage isn't yet ready to be deployed in production. The squad is working on it and preparing it for the deployment. In general this means that the component is in version 0.x.x 

### Technical Preview

v1 for the component

### Generally Available 

Guarantees support for all the versions within the Active releases and Maintenance releases since it came out. 

### Deprecated

There will be no more support after this major version release enter the maintenance stage. The next active major release will have the component removed. 

### Archived

Component in this stage doesn't receive any support. The code is still part of the Zowe and you can use it but ther is no guarantee nor support for such components. 

## Dedication

The components within Zowe are either part of the Zowe core or part of the Zowe extensions or Vendor based extensinos and components. 

### Core

The Core components together form the main parts of Zowe. Every system should have these components installed in order to have a full usage of the Zowe. There are server side and client side components that together orchestrate the whole Zowe functionality. The squads are responsible. 

### Extension

The extensions created by Zowe contains relevant functionalities that we believe that everyone should benefit from. 
