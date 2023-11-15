# Message Management

## How do we log

### Message ID Components (message prefixes)

ZWE - Zowe, This should be used as default for all Zowe messages. 

### Zowe Projects

There are server and client side components that are logging separately as such we may have duplication of logging for Server side and Client side. 

#### Server Side

A - API Mediation Layer
D - Zowe App Framework
S - Zowe System Services

#### Client Side 

C - Zowe CLI
E - Zowe VSCode Explorer
H - Zowe Chat
I - Zowe Intellij Explorer
J - Client Java SDK
K - Client Kotlin SDK
N - Client Node.js SDK
P - Client Python SDK

### Message Formats

ZWEcnnnnt, ZWEcsnnnt or ZWEcsxnnt {Actual message} where:

**ZWE** - static for Zowe messages.

**c** - one of the registered Components ... (see above).  Components need the TSC to approve the use of the project letter to ensure consistency across all of the projects.

**s** - potentially a sub component within the component space. An example from API Mediation Layer would be G for Gateway. 

**x** - potentially a space for extensions. For the extensions the expectation is that there will be X as sub component. An example would be ZWEDXA11E

**nnn** - is a linear sequence starting from 001 to 999.

**nnnn** - is a linear sequence starting from 0001 to 9999.

**t** - is a Type.  One of (I, E, A, W)  General conventions by IBM are **I**nform, **E**ventual Action (often construed as error), **A**ction, **W**arning or **S**evere error

Messages should be sent to the doc-team and follow the general IBM format as described in Messages and Codes. All the messages needs to have associated explanatory message in the Zowe docs. 

An example of a message is: *ZWEAG123E An error with z/OSMF authentication* 

## What do we log

In the default configuration we should be logging only the errors and warnings. Errors should be problems that prevents usage of either whole Zowe or some part of Zowe. Warnings should represent potential problems that may have an impact on functionality but won't prevent usage. 

Apart from that all the components should log their startup and turndown when it happens as an Information. 
