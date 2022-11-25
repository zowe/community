# Zowe Courses and Certification 

## Context

As Zowe grows in popularity and is being adopted by ever larger groups of companies, we need to help them upskill their current workforce as well as simplify for them the route towards new employees able to work with Zowe. 

We also want to grow awareness of Zowe as the go to project for modernizing the mainframe Environments and integrating it in the hybrid cloud. On top of that, a larger group of people used to working with Zowe can help grow the community as well as alleviate some of the support pain felt by the core team. 

The request to think about this project is coming from Linux Foundation and Open Mainframe Project. Part of the reason is the fact that most of the popular projects provide such courses. 

## Courses (Tracks)

The primary goal here is to outline the tasks that the specific user will be able to achieve after going through the course. For each of the persona, the involved squads are identified together with the tasks and the requirements on the environment. 

### Administration related

#### Zowe Server Side Installation and Operation

If I finish this course, I will be able to install and operate Zowe on the zOS side. I will understand what server side components exist, what configurations exist and which one I should use for specific scenarios. I will also be able to debug problems with the server side instances during the installation and operation. Security and the checklists need to be part of it to some extent. I expect to cover High Availability. 

**Involved squads:** Systems Squad, Docs Squad, Web UI Squad, API ML Squad, zOS Squad, Web UI Squad

**Personas:** Senior System Programmer, Junior System Programmer, Junior zOS SRE

**Environments:** zOS system available for installation of the Zowe

#### Zowe Client Side Installation and Operation

If I finish this course, I will be able to install, manage and configure client side components of Zowe. I will be able to install CLI and VS Code extensions on Mac OS, Linux and Windows machines and I will be able to support users who have problems due to configuration. 

**Involved squads:** Docs squad, CLI Squad, Explorers Squad

**Personas:** Windows/Mac OS X Administrator

**Environments:** Windows/Mac OS X/Linux Virtual Machine in Cloud

#### Zowe Containers Installation and Operation

If I finish this course, I will be able to install and operate Zowe using the containers and Kubernetes. I will understand what server side components exist, what configurations exist and which one I should use for specific scenarios. I will also be able to debug problems with the server side instances during the installation and operation. I will also understand what security requirements Zowe has and how to configure it for secure operations. The course contains the setup necessary for High Availability of Zowe itself.

**Involved squads:** Systems Squad, Docs squad, Web UI Squad, API ML Squad, zOS Squad

**Personas:** Hybrid SRE, Junior System Programmer, Senior System Programmer, Junior zOS SRE

**Environments:** zOs system available for installation of the Zowe and Kubernetes cluster for installation of Containers

### Usage related

#### Zowe 101 client side for users

If I finish this course I will be able to use the Zowe tools to perform typical mainframe operations without using tools such as TN3270, development of MF specific applications. I will be able to use the tools to e.g. automate the DevOps pipelines, carry IT Ops tasks and I will be aware of all the Zowe projects and their potential.

**Involved squads:** CLI Squad, Explorers squad, Web UI Squad, Intellij Squad

**Personas:** Junior zOS Application Developer, Senior zOS Application Developer, Hybrid Developer

**Environments:** zOS system with Zowe installed. 

#### Zowe 101 for API users

If I finish this course, I will be aware of the APIs and services within Zowe. I will be able to exploit them to build infrastructure applications simplifying self service in the infrastructure area. I will also be aware of other services that can be part of Zowe and are provided by extenders and I will know how and where I find more information about them. 

**Involved squads:** API ML Squad, Web UI Squad, Systems Squad, Zebra Squad

**Personas:** Junior zOS Application Developer, Senior zOS Application Developer, Hybrid Developer, Junior SRE

**Environments:** zOS System with Zowe installed, It’s probably possible to find a solution in the cloud. 

### Extension related

#### Build API ML Extension

If I finish this course I will be able to create a new API service that will be onboarded to the API ML and will be conformant. I will also understand the difference between services managed by Zowe and standalone services and understand that it’s possible to extend API Mediation Layer directly. I will know where I can ask for help and how I can get involved in the Zowe.

**Involved squads:** API ML squad

**Personas:**

**Environments:** The Cloud environment is enough for the interactive version. 

#### Build App Server Extension

If I finish this course I will be able to create a conformant extension to the App Server. I will be able to provide backend part running in Node as well as create the UI in either React or Angular. I will know where I can ask for help and how I can get involved in the Zowe. 

**Involved squads:** Web UI squad

**Personas:**

**Environments:** 

#### Build Zowe CLI Extension

If I finish this course, I will be able to create a conformant extension to the CLI. I will be able to properly integrate in TypeScript with the existing APIs. I will know where I can ask for help and how I can get involved in the Zowe.

**Involved squads:** CLI Squad

**Personas:**

**Environments:**

#### Build VS Code Extension

If I finish this course, I will be able to create a conformant extension to the VS Code. I will be able to properly integrate with the other extensions and I will know how to publish the extension properly. I will know where I can ask for help and how I can get involved in the Zowe.

**Involved squads:** Explorers squad

**Personas:** 

**Environments:**

## Personas

### Administrator

#### zOS (System Programmer)

##### Senior

Operates applications on zOS platform for many years or decades. Knows the environment and the application running there inside out. Most of the TN3270 commands could recite in the middle of the sleep. He favorit tool for any work is TN3270 and doesn’t feel any need to change it. Also quite often like the status quo and don't want to change it. 

##### Junior

Is new to the operation of the application on zOS platform. Rarely knows how things work and have to always search for the answers, often unsuccessfully due to lack of available zOS resources. Doesn’t want to bother senior ones too often and prefer ro find the answers self-service. Doesn’t feel happy with TN3270 environments and want to use more modern tooling. Also wants to automate repeating tasks and would like to use modern tools he was hearing about. 

#### Windows / Mac OS X

Is responsible for installing, updating and patching applications available to the people on their machine. This could include the virtual machine. Creates the default installation image and in case of virtual environments, creates the baseline image. 

The person is heavily concerned with security and believes that people should have access limited as much as possible. 

### SRE

#### zOS

Junior. Unless we consider SysProgs in this role, this field is too young in zOS world. 

#### Hybrid

SRE is responsible for helping engineers with the day to day operations of their services. Building the tools to deploy, operate and observer the applications within the environments within which they are deployed. Also helps with setting up standards across the enterprise for the operable applications. In the day to day work SRE depends heavily on APIs and CLI tools to consume them. SRE also uses usually more lightweight IDEs such as VS Code. 

### Application Developer

#### zOS

##### Senior

Has experience mainly with languages such as HLASM, C, Metal C, COBOL and maybe a bit of Java. Has been developing applications for zOS for many years or decades. Feel comfortable within the TN3270. Rarely uses modern IDEs

##### Junior

Has experience mainly with languages like Python, Java, .NET, Go, JavaScript. Doesn’t have any experience with TN3270 and doesn’t want to learn the tool. Depends on modern IDEs such as VS Code and Intellij for daily work. 

##### Hybrid

Has experience with some of the languages available on the market. Is used to the deployment in the distributed environment and is familiar with the DevOps principles and usually adheres to them. Depends on modern IDEs such as VS Code and Intellij for daily work. Usually operates the solutions it built. 

## Environments

We can introduce text and video tutorials. On top of that we should explore where we can use cloud environments (e.g. courses about building extensions). Potentially the best and most complex would be to give limited access to the zOS to the actual persons taking the course. 

### Interactive

The main part of these courses is in interactive projects done in an actual or mocked environment. The users need to have access either to installed Zowe or to zOS environment where Zowe can be installed in case of some of the courses. 

### Non interactive

In this case the course is structured as a set of short texts and videos. The only interactivity is in some kind of tests that are trying to verify whether the person remembers and understands the course material. 

## Platform

- edX - Linux Foundation is using edX for our courses. Primary free offering for LF. It’s more static and not good for changes. For new technologies and getting the people interested
- Interskill - Already has Zowe course created by themselves
- TI (Thought Industries)

