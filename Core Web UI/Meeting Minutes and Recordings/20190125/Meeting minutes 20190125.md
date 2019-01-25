Meeting minutes - January 25th 2019:

Recording: https://zoom.us/recording/share/2PLN__HpTavBOh2PrrNk0WT7QqM-2Z80wNxnaRbYpDCwIumekTziMw 

Status:
Sprint is halfway through

Focus:
	Filte Transfer Applications
	SSO related work
	ZSS installation work
	Researching how to add support for TopSecret in ZSS
	Window focus indicator work completed
	Session expiration detection and handling work is progressing

Next sprint is a HIP sprint, we will be fixing bugs

Conversation topics:
The Zowe conformance program for Virtual Desktop App was dsicussed, we reviewed a proposed list of items. The objective is to foster an ecosystem of well behaved applications that support the emergence of a true desktop experience, intuitive to use for end users,  easy to manage for administrators, and that support methodical troubleshooting by having all applications behave the same way.
Main outcome: iFrame applications need a separate conformance program

Here is the list of items we discussed:
1.	Npm packages and third-party dependencies must be packaged and distributed with the application to avoid web calls at runtime.
2.	Resource strings should be used in accordance with one of the existing internationalization support mechanisms.
3.	Console & Server logs should not be internationalized.
4.	All service calls should be made through the URI broker.
	a.	Alternate: go through API Gateway, example iFrame app
5.	Error reporting should follow a standard format. No custom windowing is allowed.
	a.	Need styling guideline
6.	Service-layer errors should be logged through a standard method call.
7.	Web code must go in a webClient folder.
	a.	See link for reference: https://github.com/zowe/zlux/wiki/ZLUX-App-filesystem-structure
8.	Server js code must go in a nodeServer folder.
	a.	See link for reference: https://github.com/zowe/zlux/wiki/ZLUX-App-filesystem-structure
9.	Source code written in c or java must not be located in any of the following folders: /lib, /web, /doc, /webClient 
10.	Every HTTP API and every Websocket API should be documented in swagger 2.0. The swagger document must be stored in /doc/swagger
	a.	See link for reference: https://github.com/zowe/zlux/wiki/ZLUX-App-filesystem-structure
11.	All logging should be done through an approved method. Console.log is forbidden and must never be used.
	a.	See link for appropriate logging mechanisms: https://github.com/zowe/zlux/wiki/Logging
12.	Passwords must never be logged.
13.	Open source modules must use an ID starting with one of the following:
	a.	org.zowe
	b.	org.zowe.zlux
	c.	org.zowe.zss
14.	Commercial offerings must use an ID starting with com.
15.	User preferences, if applicable to a plugin, should be stored through the configuration data service.
	a.	See link for reference: https://github.com/zowe/zlux/wiki/Configuration-Dataservice
16.	Dev environments must be setup with the team standard webpack and typescript settings
	a.	Webpack Angular: https://github.com/zowe/sample-react-app/blob/master/webClient/webpack.config.js
	b.	Webpack React: https://github.com/zowe/sample-react-app/blob/master/webClient/webpack.config.js
	c.	Typescript Angular: https://github.com/zowe/sample-angular-app/blob/master/webClient/tsconfig.json
	d.	Typescript React: https://github.com/zowe/sample-react-app/blob/master/webClient/tsconfig.json
17.	3rd party libraries referenced in package.json files must use the semver syntax of "~" to allow patch-level changes. The ^ syntax must not be used.
18.	When using a common library, you must use the same version that is already included in the base of Zowe.
	a.	See link for reference: https://github.com/zowe/zlux-app-manager/blob/master/bootstrap/package-lock.json
	b.	See link for reference: https://github.com/zowe/zlux-app-manager/blob/master/virtual-desktop/package.json
	c.	(There is a system/code limitation, future: need to accommodate multiple versions)
19.	Polluting the global & window objects in nodejs and the browser respectively is forbidden. You should need at most 1 global to hang special attributes off of. Changes to window.ZoweZLUX should be discussed with and approved by the core committers.
20.	Style bleed is not allowed. css & styles must be sandboxed.
	a.	Angular protects against style bleed well for CSS and SCSS styles for components.
	b.	React does not. We do not yet have a global React fix. Here are some React suggestions: https://speakerdeck.com/vjeux/react-css-in-js
	c.	Testing should always be performed to ensure no style bleed happens within the virtual desktop.
21.	All versions are to be formatted according to semver. Semver allows for 1.2.3[-alpha/beta][+customstring]. For example: 1.2.3+4
	a.	See link for reference: https://semver.org/
22.	The active language to be used for string selection must be retrieved using ZoweZLUX.globalization.getLanguage(). Using the desktop language setting or operating system language is not appropriate.
