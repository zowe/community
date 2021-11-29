# Message Management

### Message ID Components (message prefixes)
OMP
ZWE

### Zowe Components
A - API Mediation Layer
C - Zowe CLI
D - Zowe Desktop
E - Zowe Explorer
S - Zowe System Services

### Message Formats

The message is construed from 9 characters. There are two similar structures that are expected within the messages. The shared parts are explained first. Then the specifics of the formats under their headings. 

**ZWE** - static for Zowe messages.

**t** - is a Type.  One of (I, E, A, W)  General conventions are **I**nform, **E**ventual Action (often construed as error), **A**ction, **W**arning or **S**evere error

Messages should be sent to the doc-team and follow the general format as described in Messages and Codes.

#### ZWEcnnnnt

**c** - one of the registered Components ... (see above).  Components need the TSC to approve the use of the component to ensure consistency across all of the projects.

**nnnn** - is a linear sequence starting from 0001 to 9999.  Squads may choose to use the first digit to divide the number space. 


#### ZWEccnnnt

**cc** - one of the registered Components ... (see above).  Components need the TSC to approve the use of the component to ensure consistency across all of the projects. The second c is optional subdivison of the space by the registered Components. The squad handles the subdivision so it doesn't conflict across the Components squad is responsible for. 

**nnn** - is a linear sequence starting from 001 to 999. Squads may choose to use the first digit to divide the number space.  