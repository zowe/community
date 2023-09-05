## Message Management

### Message ID Components (message prefixes)

OMP
ZWE

### Zowe Projects

A - API Mediation Layer
C - Zowe CLI
D - Zowe Desktop
E - Zowe Explorer
S - Zowe System Services

### Message Formats

TODO: This doesn't represent the current state. 
TODO: How do we reflect the WTO vs. the System.out. 

ZWEcnnnnt where:

**ZWE** - static for Zowe messages.

**c** - one of the registered Components ... (see above).  Components need the ZLC to approve the use of the component to ensure consistency across all of the projects.

**nnnn** - is a linear sequence starting from 0001 to 9999.  Projects may choose to use the first digit to divide the number space.  **

**t** - is a Type.  One of (I, E, A, W)  General conventions by IBM are **I**nform, **E**ventual Action (often construed as error), **A**ction, **W**arning or **S**evere error

Messages should be sent to the doc-team and follow the general IBM format as described in Messages and Codes.