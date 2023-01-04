# Zowe Doc Squad - 22PI4 - (2022/10/25 - 2023/01/23)

## Add and improve the documentation

Goal: Onboard users efficiently with complete and easy to use content

Work items: 

- Review and refactor the documentation to clarify usuage content and extend content
  - Check and organize the content per category. For example, move the current "Installing server component" topic from Extend to Use.
  - Clarify confusing concept "Zowe component". For example, "Installing Zowe z/OS core components" and "Installing extended z/OS components"
  - Refactor the server-side components installation doc. For example, move "Installing Zowe containers" to "Installing Zowe z/OS components", add introduction topic about the different installation methods to clarify confusion.
- Components related
  - Zowe CLI: Complete part 2 of the installation checklist for V2 - an article named "Day One Checklist". This list will include a list of tasks that users can/should complete after Zowe CLI is installed and deployed. 
  - Zowe Chat: [Administration guide](https://github.com/zowe/zowe-chat/issues/71), [Extending guide](https://github.com/zowe/zowe-chat/issues/73), more troubleshooting topics  
  - webUI: Document app-server and desktop messges [#732](https://github.com/zowe/zlux/issues/732) [#733](https://github.com/zowe/zlux/issues/733)
  - APIML: Refactor security topics
  - [Stretch] Zowe CLI: Recreate install CLI @next only if a CLI @next package is available
- Other enhancement
  - Release notes landing page

> Dependency: Zowe CLI squad, web UI squad, API ML squad

## Usability testing of V2 installation documentation

Goal: Identify and address blocking issues to help users install the Zowe z/OS server component successfully

Work items: 

1. Identify specific installation scenario and approaches for the testing, create an overview topic (use-case based installation methods) - run on CICD pipeline, specific authentication methods, etc. 
2. Find users who are new to the common Zowe installation use case
3. Identify any blocking issues from the user's perspective

> Dependency: Co-ordinate with the installation wizard effort. 

## Videos

Goal: Educate users through engaging content format - videos. 

Work items: 

- Record the new Zowe introduction video on zowe.org. New design was proposed in 22PI3. In this PI, create the video and refresh the website. 
- [Stretch] Zowe Chat: demo videos
- [Stretch] More videos about installation

> Dependency: Onboarding squad (review new videos)

## Framework and process enhancement 

- Explore the landing pages 
- Issue triage and management, backlog management 
- [Strectch] I18N (globalization) 