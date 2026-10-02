# Zowe Security Notification List — Confidentiality Acknowledgement

**Form version:** 1.0 (proposed) — submitted for approval to the Zowe Technical Steering Committee.

> **One page, same terms for everyone.** This is a standard community acknowledgement, not a custom NDA. Every member organization signs this same form. Execute it, return it to the SRC, and await out-of-band identity verification.

This acknowledgement is made by the organization named below ("the Member") to the Zowe community, represented by the Zowe Security Response Committee ("SRC"), acting under the [Zowe Security Release Process & Disclosure Policy](community-security-guidelines.md) (the "Policy").

1. **Purpose.** The Member applies to join the Zowe Security Notification List. The List provides pre-announcement briefings and restricted security releases before public disclosure, so the Member can prepare fixes and maintenance windows for its users, products, or services that build on Zowe.

2. **Confidentiality undertaking.** The Member will hold all List material confidential to its security response team, and will not publish, disclose, or redistribute it outside the Member organization before the public release date stated in the relevant briefing, except:
   - to the Member's employees and contractors with a need to know for the purposes above, who are bound by confidentiality obligations at least as protective as this form;
   - as required by law or by a binding order of a competent authority, provided the Member gives the SRC advance notice where legally permitted and otherwise notifies the SRC without delay;
   - with the SRC's prior written consent.

3. **Embargo breach.** Publication of List material in breach of clause 2 results in immediate and permanent removal of the Member from the List under the Policy, and may result in the SRC invoking the leak response.

4. **Optional PGP.** Standard TLS email is the default transport. The Member may additionally register an organizational PGP public key with the SRC for end-to-end delivery.

5. **CRA Coordination.** If the Member is a manufacturer within the meaning of the EU Cyber Resilience Act (CRA), the Member will notify and coordinate with the SRC **before** submitting any statutory report concerning Zowe to national authorities (CSIRTs/ENISA), so that SRC advice can inform the report's timing and content and public disclosure is not forced prematurely. The mechanics are defined in the [CRA Coordination Protocol](#cra-coordination-protocol) annexed below.

6. **Public membership.** The Member consents to the publication of its organization name on the public List membership roster. Message traffic on the List remains confidential under clause 2.

7. **Term and review.** This acknowledgement takes effect on execution, continues until either party ends it in writing, and is subject to the annual membership audit under the Policy. It does not create an agency, partnership, or joint venture, and no fee is payable.

**Agreed and acknowledged:**

| | Member organization | Zowe SRC |
|---|---|---|
| Organization | _____________________________ | Zowe Security Response Committee |
| Name & title | _____________________________ | _____________________________ |
| Signature / date | _____________________________ | _____________________________ |
| Contact alias | _____________________________ | zowe-security@lists.openmainframeproject.org |

<!-- Version note for reviewers: clause text may receive legal review before final lock; the structure (one form, same terms, not an NDA) follows the Security Notification List rules in the Policy. -->

---

## CRA Coordination Protocol

This annex defines the coordination mechanics between Zowe SRC and member organizations acting as CRA manufacturers. It operationalizes clause 5 and resolves the open questions on how EU CRA timelines interact with the Zowe disclosure phases.

**Contact points.**
- **SRC side:** the Incident Commander on duty for the relevant incident. The standing intake channel (`zowe-security@lists.openmainframeproject.org`) is not used for case traffic — case coordination happens on the Security Notification List and direct IC↔member contact channels.
- **Member side:** the same role-based corporate alias registered for List membership.

**Sequence for a statutory report concerning Zowe.**
1. **Trigger.** A member that has determined, or reasonably suspects, that a Zowe vulnerability it learned about through the List may require a statutory report (actively exploited or severe vulnerability affecting products with digital elements it places on the EU market) starts coordination before filing.
2. **Notify the IC.** The member notifies the SRC Incident Commander through the List channel or direct IC contact, including: the incident ID from the briefing, the intended authority (CSIRT/ENISA or other), the statutory deadline driving the report, and the earliest date the member intends to file.
3. **SRC response window.** The IC responds within **24 hours** with the SRC's current assessment, expected Phase timing (including whether the Expedited Release Path applies), and any request to hold, align, or sequence the filing. The SRC may request alignment to the Phase 4 public release date; the member gives the SRC's input serious consideration in deciding its filing date, which remains the member's own statutory call.
4. **Alignment options.** Depending on timing, the parties may align on: filing after Phase 4a public release (normal case); filing within the restricted window with the authority's own handling safeguards (the member remains responsible for the statutory classification of the report as a vulnerability report under CRA or an incident report under NIS2 as applicable); or invoking the Expedited Release Path to compress the Zowe timeline toward the member's statutory deadline.
5. **Record.** The IC logs the coordination in the incident record, which is archived per the Policy's Evidence Retention rules.

**What this protocol is not.** The SRC is not a governmental body and the protocol does not transfer, delay, or dilute any statutory duty of a member. The SRC provides timing and technical input so the member can meet its duty with the most accurate information. Nothing in the protocol authorizes the SRC to prohibit a filing.

**SECINT/HOLDDATA note.** Partnered vendors (Broadcom, IBM) ingesting SRC-generated `++HOLD ... ERROR ... CLASS(SECINT)` definitions into their Enhanced HOLDDATA and CARS feeds confirm their feed ingested definitions as part of their List membership CRA coordination — no separate instrument is required for SECINT feed participation.

<!-- Version note: the CRA Coordination Protocol is proposed for adoption together with the acknowledgement form as the resolution of the policy's open action item (confidentiality instrument authoring); operational ownership sits with the SRC. -->
