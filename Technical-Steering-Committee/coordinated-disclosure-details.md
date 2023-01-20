# What does the Zowe Disclosure process look like?

There are two main processes to obtain information about security vulnerabilities, one used by
external stakeholders and the other used by internal stakeholders. 

## Step 1: New issue reported

An external stakeholder reports issues via the zowe-security@openmainframeproject.org mailing list. 
This issue is then discussed on the weekly Security Workgroup call. At this time, issues within
the security-reports (private) Repository is created to track the related information. 

Alternatively, the external stakeholders can report their findings through a CVE Numbering Authorities (CNA).
In this case, the Zowe organization will be notified, as members of the Federated CVE program, and we will discuss
and agree on what to do with the vulnerability. If needed, we will engage the author in discussions around
coordinated vulnerability disclosure. 

The internal stakeholders report the issue to the security workgroup through one of the security 
workgroup members. The issue in the security-reports (private) repository is created to track the related 
information. 

## Step 2: Impact assessment

The first step after the security workgroup gets the information is to verify the assessment
already done by the party bringing the vulnerability forward. A Security workgroup member will
be assigned to the issue for further investigation and will track the issue until closure. 
During the closure, the process of disclosure will be started.

## Step 3: Limited Public Disclosure

This step is proposed to coordinate with the vendors using and supporting Zowe. At this stage we
should notify all the vendors with the zowe conformant extension. 

## Step 4: Full public disclosure

This is the final stage during which the CVE is published and the information about the 
vulnerability are shared on other relevant channels together with fix and recommendation on 
what to do if you are impacted. 

# When can vendors get the notification?

The vendors that are either conformant support providers or extend one of the Zowe products will receive notification as part of the limited public disclosure. 

The rest will get the information with the full public disclosure when the CVE is published. 
