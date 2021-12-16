# Message Management

### Message ID Components (message prefixes)
OMP
ZWE

### Zowe Squads
A - API Mediation Layer
C - Zowe CLI
D - Zowe Desktop
E - Zowe Explorer
S - Zowe System Services

### Zowe Incubators
T - Chat 
W - Workflow Wizard
Z - ZEEBRA

### Message Format

ZWEscccct - This is the structure of the message. 

**ZWE** - static for Zowe messages. Represents the space that is assocaited with Zowe.

**s** - one of the registered Squads ... (see above).  Squads need the TSC approval for the use of the letter to ensure consistency across all of the squads.

**cccc** - Combination of letters and numbers that reflects specific message. The exact structure is up to the specific squads. The general recommendation is to either use the whole space as a linear sequence starting from 0001 to 9999 or to use the first character to split the space either by project owned by the squad or by the type of the message. If squad decides to have a specific pattern here, it should be documented.

**t** - is a Type.  One of (I, E, A, W)  General conventions are **I**nform, **E**ventual Action (often construed as error), **A**ction, **W**arning or **S**evere error

Messages should be sent to the doc-team and follow the general format as described in Messages and Codes.
