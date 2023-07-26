# What does the Zowe Disclosure process look like?

There are two main processes to obtain information about security vulnerabilities. One process is used by
external stakeholders, and the other process is used by internal stakeholders. 

## Step 1: New issue reported

An external stakeholder reports issues via the zowe-security@openmainframeproject.org mailing list. 
This issue is then discussed by the Security Workgroup latest at the weekly Security Workgroup call. At this time, issues within
the security-reports (private) Repository are created to track related information. 

Alternatively, external stakeholders can report their findings through a CVE Numbering Authorities (CNA).
In this case, the Zowe organization will be notified, as members of the Federated CVE program, and subsequently can discuss
and agree on what to do with the vulnerability. If needed, the Zowe organization will engage the author in discussions around
coordinated vulnerability disclosure. 

The internal stakeholders report the issue to the security workgroup through a security 
workgroup member. The issue in the security-reports (private) repository is created to track related 
information. 

## Step 2: Impact assessment

The first step after the security workgroup is informed about the vulnerability is to verify the assessment
already done by the party bringing the vulnerability forward. A Security workgroup member will
be assigned to the issue for further investigation and will track the issue until closure. 
During the closure, the disclosure process will be initiated.

The closure means that the fix is available and published. 

## Step 3: Limited Public Disclosure

This step is proposed to coordinate with the vendors using and supporting Zowe. At this stage we
will notify all Vendors participating in the Zowe conformance program as either (a) a Zowe Conformant Support Provider or (b) a Zowe Conformant extension.

## Step 4: Full public disclosure

This is the final stage during which the CVE is published and information about the 
vulnerability is shared across other relevant channels along with the fix and recommendation of 
what to do if someone is impacted. 

# When can vendors get the notification?

Vendors participating in the Zowe conformance program as either (a) a Zowe Conformant Support Provider or (b) a Zowe Conformant extension will receive notification as part of the limited public disclosure. 

The other vendors will be notified during the full vulnerability disclosure. The full vulnerability disclosure will be shared across other relevant channels such as #zowe-user channel in the OMP slack or zowe-user@openmainframeproject.org mailing list.
