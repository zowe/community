# Proposals for Google Summer of Code: #

## App Framework/WebUI Squad ##

### 1) App Store UI ###

Using the existing npm app registry, create an app store UI in the App Framework's virtual desktop to download and install apps. Via the new enhancement to zwe which adds new 'zwe components' commands and with configuration manager, we can define an extension registry and pull extensions. The app store UI will invoke zwe which has a pluggable handler API which then talks to a package manager. The package manager receives and downloads requested extension and dependencies. While the package manager can be of any type, current support and a good starting place is npm. This would be a completely new app, from top to bottom, that will exist in the personalization & system widgets area in the Desktop and is an excellent opportunity for both a talented engineer and UX designer to make a huge imprint on the future of the Zowe desktop. The ideal candidate would have experience in Typescript/Javascript, Angular or React, Node.js, and HTML & CSS but having at least working knowledge in one or two areas is alright. 

mentor: Leanid Astrakou
