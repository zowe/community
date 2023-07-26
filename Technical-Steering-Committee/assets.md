# Approach to the Assets within Zowe

This document is focused on figuring out what assets we as Zowe have and how we protect them.

## Categories of assets

- Source Code
- Release artifacts
- Documents
- Videos
- Webpages

## Current state

In this part of the document the current state with its risks and limitations is outlined. 

### Source Code

The Source Code is the most well understood asset with respect to access rights. We keep teams on GitHub with different rights toward the source code. All the source code needs DCO and at least two people approving the change before the change can reach the users. 

### Release Artifacts

The release artifacts are stored in artifactory. Only a very limited set of users have rights to publish artifacts. Usually squad committers for the squad related artifacts and only Systems squad for the Zowe wide artifacts.

### Documents

There are multiple places for different documents related to the Zowe.  

Document types include:
- MS Word documents 
- Google Docs
- Google Slides
- PPT Presentations
- Google Spreadsheets
- Microsoft Excel Spreadsheets
- General Notes (BOX Notes)

Currently known types:
- Box folder
- Zowe Github repos
  - Some of the repositories - e.g. community, zac

#### Box Folder

Most of the people have access to the box folder and can access all of the files there. 

Advantages:
- Access is owned / managed by email address
- Most (all?) participants have the ability to interact with all types provided they are granted the correct access
- Minimal to no learning curve for usage

Disadvantages:
- Owned by a single company (currently IBM)
- Ownership must be carefully managed and monitored
- Not necessarily backed up
- The access list must be maintained / is outside of the other Community artifacts

#### Repositories

The repositories are in general with public access and anyone can merge new changes. 

Advantages:
- Publicly accessible (by nature) / no general access maintenance required
- Limited users have been granted high-level authority that could wipe out contents  I.e. Only a few people can do actions that would prevent us from recovering the previous state. 

Disadvantages:
- Many (most?) traditional Mainframers struggle with github and github actions
- Many people will start storing documents somewhere else / where they’re more comfortable

### Videos

There are videos that are kept within the OMP YouTube channel and there are others stored in the Zowe Youtube channel.

#### OMP YouTube Channel

Advantage:
- Larger audience
- Propagation by OMP

Disadvantage:
- We need to engage OMP to 

#### Zowe Channel

Advantages:
- Docs squad can upload new videos
- Under our control

Disadvantages:
- The viewership is more limited

### Webpages

#### Zowe.org

The repository lives on URL: https://github.com/zowe/zowe.github.io. The amount of people with the privileges to change things is very limited. 

#### Docs.zowe.org 

The repository lives on URL: https://github.com/zowe/docs-site. Committers from most of the squads has the rights to change the webapge. 

## Proposed state

### nextCloud

@Boris Petkov mentioned possibility of setting nextCloud (Open Source) server on the free tier of the Oracle infrastructure.

Demo: https://try.nextcloud.com/

### Wiki

John Mertic proposes that we use the Wiki to collect and work with the documents. 

### GitHub repositories

We already keep some documents here, it's effective for developers but maybe a bit more complex to use for other types of users.