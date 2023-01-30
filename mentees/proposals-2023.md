# Proposals for Google Summer of Code: #

## App Framework/WebUI Squad ##

### App Store UI ###

Proposed mentor: Leanid Astrakou

**Description**

Using the existing npm app registry, create an app store UI in the App Framework's virtual desktop to download and install apps. Via the new enhancement to zwe which adds new 'zwe components' commands and with configuration manager, we can define an extension registry and pull extensions. The app store UI will invoke zwe which has a pluggable handler API which then talks to a package manager. The package manager receives and downloads requested extension and dependencies. While the package manager can be of any type, current support and a good starting place is npm. This would be a completely new app, from top to bottom, that will exist in the personalization & system widgets area in the Desktop and is an excellent opportunity for both a talented engineer and UX designer to make a huge imprint on the future of the Zowe desktop. The ideal candidate would have experience in Typescript/Javascript, Angular or React, Node.js, and HTML & CSS but having at least working knowledge in one or two areas is alright. 

## CLI Squad/zOS Squad

### Creating a ZSS backend provider for Zowe CLI

Proposed mentors: Sean Grady, Joe Devlin

**Description:**

The Zowe CLI is a program that runs on PCs for users to interact with a z/OS mainframe remotely. It can be used directly, for automation such as CICD, or to enable popular but otherwise z/OS-unaware programs such as editors and IDEs. The CLI accesses a mainframe via network APIs present on that mainframe, such as webserver REST APIs. Often, such APIs will be from non-Zowe dependencies, but in this project you will be working within the Zowe community to enhance the CLI so that it can use Zowe's own ZSS webserver as a source for z/OS data.

This project will at minimum involve programming to utilize existing HTTP network APIs to fulfill a nodeJS interface for each type of data possible to use in the CLI.

As the project progresses, you may also get the opportunity to add new HTTP APIs to the ZSS server, which is a z/OS native C webserver. You may also get to reuse the code written for the CLI to similarly enhance Zowe's addon to Microsoft's Visual Studio Code, the Zowe Explorer, to enable VSCode to edit files and datasets on z/OS using an all-Zowe codebase.
