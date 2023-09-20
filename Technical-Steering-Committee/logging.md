# Message Management

## How do we log

### Message ID Components (message prefixes)

OMP - Open Mainframe Project
ZWE - Zowe, This should be used as default for all Zowe messages. 

### Zowe server side Projects

A - API Mediation Layer
C - Zowe CLI
D - Zowe App Framework
E - Zowe VSCode Explorer
H - Zowe Chat
I - Zowe Intellij Explorer
J - Client Java SDK
K - Client Kotlin SDK
N - Client Node.js SDK
P - Client Python SDK
S - Zowe System Services

### Message Formats

ZWEcnnnnt or ZWEcsnnnt {Actual message} where:

**ZWE** - static for Zowe messages.

**c** - one of the registered Components ... (see above).  Components need the TSC to approve the use of the project letter to ensure consistency across all of the projects.

**s** - potentially a sub component within the component space. An example from API Mediation Layer would be G for Gateway

**nnnn** - is a linear sequence starting from 0001 to 9999.

**t** - is a Type.  One of (I, E, A, W)  General conventions by IBM are **I**nform, **E**ventual Action (often construed as error), **A**ction, **W**arning or **S**evere error

Messages should be sent to the doc-team and follow the general IBM format as described in Messages and Codes. All the messages needs to have associated explanatory message in the Zowe docs. 

An example of a message is: *ZWEAG123E An error with z/OSMF authentication* 

## What do we log

In the default configuration we should be logging only the errors and warnings. Errors should be problems that prevents usage of either whole Zowe or some part of Zowe. Warnings should represent potential problems that may have an impact on functionality but won't prevent usage. 

Apart from that all the components should log their startup and turndown when it happens as an Information. 