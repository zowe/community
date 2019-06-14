# Development Checkpoint

Introduction
------------
To provide overall project status and to have a place to identify all critical issues and identify action, owners and review timelines.

Schedule
--------
Zowe 1.1.x (April 2, 2019 -	April 30, 2019)
- Sprint 1 (April 2, 2019	- April 15, 2019)
  - Playback Preparation/Backlog Grooming/Sprint Goals (April 11, 2019 - April 15, 2019)
  - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective and Update (April 15, 2019)
  - Sprint Planning (n+1) (April 16, 2019 - April 19, 2019)
- Sprint 2 (April 16, 2019 - April 29, 2019)
  - Playback Preparation/Backlog Grooming/Sprint Goals (April 25, 2019 - April 29, 2019)
  - Code Complete/RC Candidate Build/Start Testing (April 26, 2019 - April 30, 2019)
  - Playback/Checkpoint(go-no-go)/End of Sprint Retrospective (April 29, 2019)
  - Sprint Planning (n+1) (April 30, 2019	- May 3, 2019)
- 1.1.x GA (April 30, 2019)


Agenda Items
------------
1. Start Recording
2. ZLC Updates (meeting cancelled)
    - Decision on adding IMS plugin to portfolio: Approved
3. Current Release and Build Status (Jack/Mark)
    - RC2 produced 5/1.  Waiting on confirmation from Broadcom.  If all good, can ship 1.2.0.  
    - Only one issue was found.  Does not occur when run through USS.  Not a stop-ship defect.
4. Plan:
    -
    -
    -
5. Squad Status:
    - Installation
      - Nothing to add
    - Onboarding (JoeW/TimB)
      - Working on conformance criteria proposals.  There was a playback on the thinking around CLI.  
      - Check out the Onboarding channel for the playback and proposals for conformance going forward.
      - Tim will be using the next few meetings to talk about these topics.
      - "What does 'Zowe compliance' really mean?" will be a topic
    - Core/Web/Editor (JPL/Reet/Nolan)
      - Finished TopSecret /groups endpoint administration
      - Back to testing the story to add "mode=base64" option to unixfile API
      - Working on adding internationalization to the Sample App
      - Working on building a menu structure for programming language-specific actions
      - Working on creating a side file for zss version 1.1.0
    - Core/CLI  (Mike B/Kyle)
      - Addressing feedback from CLI conformance Playforward
      - Check out the VS Code Extension
    - API Mediation Layer & Security (Petr G/Radek K/Petr P)
      - Reviewing Move security endpoints from API catalog to API gateway
      - Testing Zowe pax 1.2 - so far so good.
    - Foundation (CI/CD) (Mark/Steve/Mike/Nick)
      - Jack worked to get the RC candidate out and branching strategy for Zowe
      - LPARs from Marist are starting to come into view; waiting for some legal documents to go through
      - There is a meeting with Marist on Monday; likely one more week to get signatures in place
      - Trying to verify prereqs are there
    - Documentation (Brandon/Ashley/Jim/Jason/Alyson)
      - Internal Broadcom meetings, cannot attend today - Brandon/Jim
      - Awaiting 1.2.0 release - doc ready to publish - PR open for docs-staging branch. 
      - Squads, please review release notes to ensure they are comprehensive for each component - https://github.com/zowe/docs-site/blob/docs-staging/docs/getting-started/summaryofchanges.md  


6. Legal Requirements
    - None

7. Community Backlog
    - TBD
8. Roundtable
    - None

Parking Lot:
 - How can we address not archiving release announcements on zowe.org?
   - Who has the authority to change the website?
 - How can we address not archiving information on previous release versions / release dates?  Providing release history
   - Could be a tab in GitHub or a page on zowe.org
   - We currently use Wordpress, which has paging history.  Live version only shows latest.
   - "What's new?" for each release is part of documentation, and is being versioned.
   - 0.9.X will be removed by end of May
 - We are considering Playforwards in addition to Playbacks
   - There is agreement in principle.  Scheduling more calls is hard.  To be discussed with Squad Leads.
 - Common FMID for Zowe builds.  Today it's a PAX file.
   - Proposal: provide SMPE format.
   - There is work going on to provide an SMPE set of build scripts.
   - There is work going on to have a universal FMID so anyone from the Open community could distribute this FMID.
   - Bruce will host a playback once they get a little further along.
   - Question: How would we handle PTFs against that FMID?
 - Migrate zowe.org to an OMP managed infrastructure?
   - Open questions around moving to Linux foundation's infrastructure

Action Items
------------
- None


Recording
-------------------------
