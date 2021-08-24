Within the components we have two important axis with respect to the state of the components. First is whether they are already mature and the second whether regardless of their maturity components belong to core. 

Steps
- Identify all components Zowe supports. 
- Identify other components
- Identify the state of the components
  - Deprecated


How do I find all components that are delivered and developed within Zowe. 

There are 122 https://github.com/orgs/zowe/repositories within Zowe. Do we consider each of them as a component? We have ownership of som e of the repositories by some of the squads. 

I believe that one of the issues is that there isn't 1:1 match for the components with the repositories. 

# Lifecycle (Maturity)

Can be installed and run via the Zowe technologies. Has the manifest and bin and 0 or more lifecycle scripts. 
It ignores the API ML. 

Units of software that they have. 

Components
- Under development - Not part of Zowe in any capacity. 
- Technical Preview - Supported, the only difference is that there may be some breaking changed when the component reaches the Generally Available status. 
- Generally Available - 
- Deprecated - Remains part of the Zowe, it's going to be removed with next major release. 
- Emeritus - Not part of Zowe in any capacity. Not supported. 

From the support perspective 
- Technical Preview, Generally Available and Deprecated are supported for the versions in which they are part of. 

Features
- In Progress (Under development)
- Preview?
- Generally Available
- Deprecated
- Removed

# Status

The components are either part of the Zowe core or the extensions. Do we have a concept of the component per repository?

## Core

Core components are part of the base installation of the Zowe and as such will be available on every system with Zowe installed. 

## Extension

Extension components aren't part of the base installation. They are delivered separately either via mechanism provided by Zowe or by some mechanism provided by 

### API-Layer example

Core

- Gateway Service
- Discovery Service
- API Catalog Service
- Caching Service
- Onboarding-enabler-java
- Onboarding-enabler-spring
- 

Extensions

- Discoverable Client - Extension
- 
