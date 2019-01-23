# Meeting Minutes for CI/CD Squad

Introduction

Current Goals/Milestones

1. Use new Zowe GitHub as our build source
2. Complete CI/CD pipeline with automated testing along with improved install testing
3. Conversion to OMP as host of build

Squad Waffle Board
https://waffle.io/zowe/zowe-install-packaging

Agenda Items

- Build Status
- Waffle Board Review
  - https://waffle.io/zowe/community?milestone=18-12-18%200.9.5&label=deliverable

- Security Scans as part of CI/CD Issue #42 (https://waffle.io/zowe/zlc/cards/5baa777ca897d30075425314)
- Help Squads automate their testing and document how to add test infrastructure to GitHub/Zowe (work with Onboarding squad)
- Migrate Build Environment to OMP/VCU
- CII Badge Program. Should we expand our coverage to include OWASP Dependency Check
- Artifactory Renewal. Giza expires. When do we need to make the decision to renew ? Will OMP provide Nexus ? It needs to be up in March ? Should we get our own Nexus ? Bandwidth is run out on our current systems. Talk to Matt to extend systems
- Zowe v1.0.0 Exit. CLI stable, API-ML created RC. Not sure about ZLux. Explorers, data-sets, jobs, Tomcat is done and currently working on defects. John working on Verify scripts.
- Playback for Feb 4. We can talk about the updated architecture.
- Waffle Board on Slack
- Issue feature that API-ML team has implemented. We should role this out to the rest of the squads. We should have a regular Waffle meeting (Project management, organization)

Roundtable

Steve
- Working on defects. No stop ships
- Cleaning up Repos and Milestones

Jack
- Docker Swarm testing. Some issues found. Some systems in different data centre.
- Replacing certificates of api-ml
- Automating tests for smoketests for certificates

Mark
- license compliance for binaries. working with doc squads
- working on automation that will print out all dependencies and print out licenses

John
- Currently working on Verify scripts.
- The new ZSS server has been installed/configured. Issues found on first time starting.
- Working on Documenting the certificates.
- Working on https://github.com/zowe/api-layer/issues/199

Meeting Minutes/Recording
N/A
