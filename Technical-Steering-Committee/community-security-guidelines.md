# Zowe Security Release Process & Disclosure Policy

Zowe is an open source community of contributors, users, and commercial vendors providing mainframe software and modern tooling. The Zowe community uses this security disclosure and response policy to make sure we handle vulnerabilities quickly, responsibly, and predictably.

<!-- toc -->
- [Security Response Committee (SRC)](#security-response-committee-src)
  - [SRC Membership](#src-membership)
  - [Roles and Responsibilities](#roles-and-responsibilities)
- [Scope and Boundary Statements](#scope-and-boundary-statements)
  - [What is in Scope](#what-is-in-scope)
  - [What is Out of Scope](#what-is-out-of-scope)
  - [CVE Assignment Policy](#cve-assignment-policy)
- [Phases of the Vulnerability Disclosure Process](#phases-of-the-vulnerability-disclosure-process)
  - [Release Structure: Batched Security Releases vs. Out-of-Band Fixes](#release-structure-batched-security-releases-vs-out-of-band-fixes)
  - [Phase 0: Intake and Triage](#phase-0-intake-and-triage)
  - [Phase 1: Private Development and Build](#phase-1-private-development-and-build)
  - [Phase 2: Pre-Announcement and Partner Briefing](#phase-2-pre-announcement-and-partner-briefing)
  - [Phase 3: Restricted Release](#phase-3-restricted-release)
  - [Phase 4: Full Disclosure and CVE Publication](#phase-4-full-disclosure-and-cve-publication)
    - [Phase 4a: Public Release of Artifacts](#phase-4a-public-release-of-artifacts)
    - [Phase 4b: CVE Publication](#phase-4b-cve-publication)
- [Private Infrastructure and Engineering Rules](#private-infrastructure-and-engineering-rules)
  - [Private Repositories and No-Fork Rule](#private-repositories-and-no-fork-rule)
  - [Private CI and Code Signing](#private-ci-and-code-signing)
  - [Private Registries on zowe.jfrog.io](#private-registries-on-zowejfrogio)
  - [Version Discipline](#version-discipline)
  - [Naming and Attribution Discipline](#naming-and-attribution-discipline)
  - [Evidence Retention](#evidence-retention)
- [The Expedited Release Path](#the-expedited-release-path)
- [Customer-Facing Communication and Transparency](#customer-facing-communication-and-transparency)
  - [Phase 2 Pre-Announcement](#phase-2-pre-announcement)
  - [SMP/E HOLDDATA and Vendor Enhanced HOLDDATA (SECINT)](#smpe-holddata-and-vendor-enhanced-holddata-secint)
- [Security Notification List Rules](#security-notification-list-rules)
  - [No Pay-to-Play: Open Access Criteria](#no-pay-to-play-open-access-criteria)
  - [Security and Contact Requirements](#security-and-contact-requirements)
  - [Confidentiality Instrument](#confidentiality-instrument)
  - [Transparent Membership](#transparent-membership)
  - [Dispute Resolution](#dispute-resolution)
  - [Statutory Duty and CRA Notice](#statutory-duty-and-cra-notice)
- [Server vs. Client Deliverables](#server-vs-client-deliverables)
  - [Server Components (APIML, ZSS, Desktop, SMP/E, PAX)](#server-components-apiml-zss-desktop-smpe-pax)
  - [Client Components (CLI, Plugins, SDKs)](#client-components-cli-plugins-sdks)
- [Server Packaging: Full Distribution](#server-packaging-full-distribution)
- [Handling Release Collisions and Edge Cases](#handling-release-collisions-and-edge-cases)
  - [Guiding Principles](#guiding-principles)
  - [Collision 1: Security Fix in Progress When Scheduled Release Ships](#collision-1-security-fix-in-progress-when-scheduled-release-ships)
  - [Collision 2: Scheduled Release Falls Mid-Window](#collision-2-scheduled-release-falls-mid-window)
  - [Preset Leak Response](#preset-leak-response)
- [Retrospective](#retrospective)
- [Open Action Items to Implement Policy](#open-action-items-to-implement-policy)
<!-- /toc -->

---

## Security Response Committee (SRC)

The **Security Response Committee (SRC)** (also referred to as the Security Workgroup) coordinates the entire lifecycle: initial triage, private patch development, advance notification, restricted release, and public CVE disclosure.

### SRC Membership
- **Nomination and Approval:** SRC members are nominated by current members and confirmed by the Zowe Technical Steering Committee (TSC).
- **Stepping Down:** Members may step down at any time. Members who are unreachable or inactive for more than two months without notice may be removed by a majority vote of the remaining members.

### Roles and Responsibilities
- **Incident Commander (IC):** The on-call SRC member who picks up a new report. The IC coordinates initial triage, confirms reproducibility, assigns an internal incident ID, and makes sure the response moves forward quickly.
- **Fix Lead:** An SRC member assigned to shepherd the specific vulnerability through patch development, builds, partner briefings, release day, and public CVE publication.
- **Fix Team:** Trusted maintainers from the affected component squads (e.g., APIML, ZSS, or CLI). They develop and test fixes in private repositories under embargo.
- **Release Managers:** Named build-and-release engineers per LTS line who hold build permissions and handle promotion to restricted and public channels.

---

## Scope and Boundary Statements

To keep work clear and manageable, the community defines explicit boundaries for what the SRC handles:

### What is in Scope
- Vulnerabilities in Zowe's own code across all `zowe/*` repositories that are classified as **Zowe Core** or **Zowe Extension** and have achieved at least **General Availability (GA)** status.

### What is Out of Scope
- **Public Upstream Dependency CVEs:** Vulnerabilities in third-party libraries (e.g., Spring Boot, Node.js packages) that are already publicly disclosed upstream are handled through normal maintenance and dependency upgrades, not private security embargoes.
- **Embargoed Upstream Dependencies:** If a dependency vulnerability is reported under an active upstream embargo, Zowe will coordinate with the upstream project's timeline and will not extend the disclosure date past the upstream deadline.
- **Technical Preview and non-GA Zowe components:** We will not require embargoed fixes for these components unless specifically requested.

### CVE Assignment Policy
- CVE IDs are reserved when a private advisory is opened, but are assigned and tracked specifically to the fixing commit on supported release branches.
- Zowe does not follow a liberal assignment policy (such as assigning CVEs to every minor bug or unconfirmed crash). A CVE is only assigned once a real security impact on supported release lines is confirmed.
- Public CVE details are published at **Phase 4** (**7 calendar days** after the public release of the binary).

---

## Phases of the Vulnerability Disclosure Process

Zowe follows a structured five-phase disclosure lifecycle:

```
[Phase 0: Intake] ──► [Phase 1: Private Dev] ──► [Phase 2: Pre-Announcement]
   (Triage)            (Build Once, Promote)      (2-4 Weeks Ahead: Signals)
                                                           │
                                                           ▼
[Phase 4: Full Disclosure] ◄─────────────────── [Phase 3: SECINT Release]
   (Public GA + CVE)                               (Restricted Channel)
```

### Release Structure: Batched Security Releases vs. Out-of-Band Fixes

To prevent continuous release churn, overlapping embargoes, and version conflicts—especially when handling high volumes of vulnerabilities (such as security audit findings, pentest results, or multiple squad reports)—we have two approaches to releases:

1. **Batched Security Releases (Default for high volumes and scheduled rollups):**
   - **Fixed Delivery Schedule:** The SRC establishes a fixed target delivery date for Phase 3 (SECINT release). Multiple fixes across squads (APIML, ZSS, Desktop, CLI) are grouped into a single unified release train. 
   - **Fix Cutoff Date:** A firm cutoff date (typically 2 to 3 weeks prior to Phase 3) determines what ships. Fixes that are completed, reviewed, and verified in private CI before the cutoff date board the release. Fixes that are not ready by the cutoff roll over to the next batch.
   - **Unified Artifacts and Signals:** The batch shares a single reserved release version (e.g., `v2.15.1`), a single Phase 2 pre-announcement listing total issue count and maximum severity, and a coordinated set of SECINT definitions for partner Enhanced HOLDDATA feeds.
   - **Single Quiet Period:** Downstream partners and adopters ingest and validate one combined package under a single 30-day quiet period, rather than juggling overlapping embargoes.
2. **Out-of-Band (OOB) Single Fixes:**
   - Reserved exclusively for Critical vulnerabilities that cannot wait for a scheduled batch cutoff, either due to active exploitation or high risk/impact.
   - Can otherwise be used if there is no need for batched security releases.

### Phase 0: Intake and Triage
- **Reporting Channel:** Vulnerabilities are reported to the Zowe Security Response Committee at **zowe-security@lists.openmainframeproject.org** — the same address published on [zowe.org/security](https://zowe.org/security) and in the `SECURITY.md` of every `zowe/*` repository.
- **Turnaround Guidance & EU CRA Timelines:**
  - **Standard Turnaround:** Initial intake and triage should happen as quickly as reasonable given the severity and impact of the reported issue. The committee aims for an initial response and preliminary assessment within a few business days, and ideally no longer than one week turnaround.
  - **Active Exploits (Emergency Timeline):** If an incoming report shows an **actively exploited vulnerability in the wild**, emergency timelines apply. The Linux Foundation acts as an Open Source Software Steward under the EU Cyber Resilience Act (CRA). The SRC immediately alerts Linux Foundation counsel and vendor partners, following strict timelines:
    - **Within 24 Hours (Early Warning):** Acknowledge receipt, confirm triage, alert the Linux Foundation and vendor partners, and confirm whether active exploitation is occurring.
    - **Within 72 Hours (Preliminary Assessment):** Complete the vulnerability assessment, CVSS scoring, and initial mitigation plan.
- **Intake Steps:**
  1. Confirm receipt with the reporter and verify whether the issue is reproducible and in-scope.
  2. Calculate an initial CVSS score.
  3. Assign an **Internal Incident ID** (e.g., `SEC-2026-001`).
  4. Reserve the permanent release version number and PTF numbers if applicable (version discipline) so all subsequent builds use the final version string.
  5. Reserve a CVE ID from the CNA.
  6. If active exploitation is present, immediately notify the Linux Foundation and alert downstream partners so vendors acting as CRA manufacturers can file required reports.
- **Special Exceptions:** When dealing with high volumes of reported vulnerabilities, intake discipline beyond confirming receipt is _best effort_. 

### Phase 1: Private Development and Build
- **Private Fix Creation:** The Fix Team develops the patch in an unlinked private repository within the `zowe` organization. 
- **Testing:** Unit and integration tests must run in private CI and pass completely before any packaging begins.
- **Server:** Artifacts (jar, binary, container images, PAX, SMP/E packages) are built and digitally signed using Github's Sigstore. These artifacts are staged in `zowe.jfrog.io` under private registries.
- **Client:** Artifacts (NPM packages, Zowe Explorer, etc.) are built and digitally signed using Github's Sigstore. These artifacts are staged in `zowe.jfrog.io` under private registries.


### Phase 2: Pre-Announcement and Partner Briefing
- **Timing:** Issued **2 to 4 weeks** before Phase 3 (shortened to **1 to 2 weeks** for Critical vulnerabilities). This notice is sent only after the release date is locked and we have high confidence it will not slip.
- **Restricted Pre-Announcement:** Dispatched through private communication channels (e.g., private squad Slack channels). It alerts operational teams of the upcoming release date, affected LTS lines, total issue count, and maximum severity. Strictly zero technical details, vulnerable component internals, exploit methods, or code diffs are disclosed.
- **Security Notification Briefing:** Sent under embargo to verified members on the notification list. It includes:
  - Draft security notification text.
  - Affected versions and upgrade/remediation guidance.
  - Anticipated customer questions and answers.
  - Explicitly excludes exploit details, proofs of concept (PoCs), or source diffs.

### Phase 3: Restricted Release
- **Release to Restricted Channel:** Release Managers copy the staged artifacts from private JFrog registries to the restricted distribution channel.
- **Partner Access:** Authorized commercial support providers and distributors may pull these artifacts and re-host them on their authenticated customer portals.
- **Restricted Window Duration:** Artifacts remain in restricted distribution for a fixed quiet period of **30 calendar days**.

### Phase 4: Full Disclosure and CVE Publication

#### Phase 4a: Public Release of Artifacts
- **Public GA:** The restricted artifacts are promoted to public download mirrors (`zowe.org/download`) and public package registries.
  - **Server:** Byte-for-bit identical copy from the restricted channel.
  - **Client:** Merged/rebased onto active branch (e.g. `main`, `v3.x/staging`) and published as the next release number.
- **Source Code Public:** Commits and PRs are squashed and cherry-picked into public GitHub branches and tagged.
- **Decommissioning:** Private incident repositories are optionally cleaned up and staging permissions are removed.

#### Phase 4b: CVE Publication
- **CVE Publication:** CVE details are published to MITRE/NVD exactly **7 calendar days** following the public binary availability.
- **Reporter Attribution:** The vulnerability reporter is credited in the public release notes and advisory.

---

## Private Infrastructure and Engineering Rules

To ensure fixes remain confidential during development and identical at delivery, the community enforces the following engineering rules:

### Private Repositories and No-Fork Rule
- **Never Use GitHub Forks:** GitHub forks share an internal object store with the upstream public repository. Pushing sensitive commits or tags to a fork can inadvertently expose objects to public access.
- **No Public Remotes:** Development clones must not configure the public GitHub repository as a remote. Daily base-branch updates from public branches are pulled by an automated mirror script.

### Private CI and Code Signing
- Private repositories run dedicated private CI with access to necessary build secrets.
- **Signing Architecture:** Artifacts are digitally signed prior to restricted release using **GitHub Sigstore**.

### Private Registries on zowe.jfrog.io
- The community will use two sets of private registries: one used during fix development, and one used as the restricted distribution channel with a wider audience.
- SRC and Fix Team will have access to the registries used during fix development.

### Version Discipline

The community enforces linear version progression across restricted and public channels:
- **Server Deliverables:** Standardizes on a locked patch version scheme (e.g., `v2.15.1`). The exact release version string is reserved at Phase 0 and maintained identically across private build staging, the Phase 3 quiet period, and Phase 4 public GA ("Build Once, Promote"). Server artifacts maintain 100% byte-for-byte parity, cryptographic hash consistency, and digital signature validity without rebuilding.
- **Client Deliverables:** Uses standard semver patch numbers (`xx.yy.zz`, e.g., `v8.2.1`) for offline packages during Phase 3. When promoted to public release at Phase 4, security changes are merged into the active development branch (`main` / `staging`) and published on top of recent active enhancements. Bit-for-bit equality between the restricted security fix and the public GA release will not be required. 

### Naming and Attribution Discipline
- **Commit Squashing:** All commits for an issue are squashed into a single commit per release branch, preserving author attribution and Developer Certificate of Origin (DCO) sign-offs. Never include vulnerability keywords, exploit mechanics, or CVE numbers in the final squashed commit.

### Evidence Retention

- Upstream incident records (timelines, review approvals, test results, and communication logs) are archived in a private JFrog registry.

---

## The Expedited Release Path

When a Critical vulnerability (CVSS 9.0+) or an actively exploited zero-day requires emergency remediation, the Incident Commander and Fix Lead invoke the pre-authorized Expedited Release Path to compress delivery timelines. This is an expedited variation of Phases 1-4.

- **Early Notification:** The Incident Commander and Fix Lead immediately notify the Linux Foundation and SRC members.
- **Target Turnaround:** Maximum 1 week from accepted patch to packaged, signed deliverables.
- **Allowed Skips to Accelerate Delivery:**
  - Non-essential documentation updates and blog announcements.
  - Optional convenience repackaging (e.g., non-essential bundle variations).
  - Bundling other in-progress security patches together with the critical vulnerability fix.
  - Skipping the Phase 3 restricted release and promoting the fix directly to the public GA release.
- **Disallowed Skips (Non-Negotiable Quality Gates):**
  - Automated regression testing and security verification suites **cannot be skipped under any circumstances**.
  - If tests fail, or if the patch causes unexpected regressions or instability, Phase 1 must be extended until the issue is fixed.

---

## Customer-Facing Communication and Transparency

Mainframe operations teams rely on automated tooling to detect missing maintenance. Zowe introduces two primary vulnerability communication mechanisms:

### Phase 2 Pre-Announcement
Announced through restricted communication and notification channels 2 to 4 weeks ahead of Phase 3.

This notice is **not a public disclosure**. It is intended to give enterprise teams advance operational runway to plan maintenance windows, and the notice contains:
- The planned restricted release date (Phase 3).
- The affected Zowe release lines (e.g., v2 LTS, v3 LTS).
- The total count of addressed vulnerabilities.
- The maximum CVSS severity rating.
- *Strictly zero technical details, vulnerable API names, or exploit concepts.*

Vendors may share the pre-announcement with their customers over private communication channels.

### SMP/E HOLDDATA and Vendor Enhanced HOLDDATA (SECINT)

In z/OS SMP/E practice, security and integrity exception holddata (`++HOLD ... ERROR ... CLASS(SECINT)`) is not embedded directly within community PTF deliverables, as embedding an error hold would cause SMP/E `APPLY` processing to fail unless explicitly overridden with `BYPASS(HOLDERROR(SECINT))`. Instead, it is delivered externally as **Enhanced HOLDDATA** via vendor maintenance streams so that customer `REPORT ERRSYSMODS` jobs can identify unapplied security maintenance.

To support this workflow without breaking standard packaging conventions:
- **Normal HOLDDATA in Community Deliverables:** The Zowe community generates and packages standard system holds (`DOC`, `ACTION`, prerequisites) directly inside its PTF SYSMOD deliverables.
- **Coordination of SECINT Definitions:** The Zowe SRC generates the corresponding `++HOLD ... ERROR ... CLASS(SECINT)` statements and coordinates them directly with partnered vendors (Broadcom and IBM).
- **Vendor Enhanced HOLDDATA Feeds:** Partnered vendors ingest these definitions into their established, commercial Enhanced HOLDDATA and CARS feeds, ensuring enterprise customer mainframe shops automatically surface missing Zowe security fixes during routine maintenance scans.

---

## Security Notification List Rules

The Zowe community maintains a private **Security Notification List** to provide early briefings to vendors and distributors who maintain downstream distributions.

### No Pay-to-Play: Open Access Criteria
- Membership is **not** tied to commercial sponsorship, Open Mainframe Project (OMP) fee structures, or conformance certification.

### Security and Contact Requirements
To join and remain on the list, organizations must:
1. **Role-Based Corporate Alias:** Provide a monitored role-based contact alias (e.g., `security-team@company.com`) hosted on a verified corporate domain. Personal email addresses and generic freemail providers are not permitted.
2. **Confidentiality Instrument:** Execute the standard community confidentiality instrument.
3. **Identity Verification & Vetting:** Complete out-of-band identity verification with the SRC or TSC (validated against Open Mainframe Project member records, conformant vendor status, or direct corporate confirmation) to prevent impersonation and fraud.
4. **Transport Security (Optional PGP):** Maintain secure mail delivery. Standard Transport Layer Security (TLS) across verified corporate mail systems is the default requirement. Organizations that require end-to-end PGP/GPG encryption may optionally register an organizational public key with the SRC.

### Confidentiality Instrument
- Handled via a **standard, one-page community acknowledgement form** approved by the TSC.
- Form: [`confidentiality-acknowledgement.md`](confidentiality-acknowledgement.md) (v1.0, submitted for TSC approval) with the [CRA Coordination Protocol](confidentiality-acknowledgement.md#cra-coordination-protocol) annex.
- Not an NDA. All parties operate under the same rules.

### Transparent Membership
- While message traffic on the list remains strictly confidential, **the list of participating organizations is public.** The community publishes who has a seat in the room.
- Membership is audited annually. Breaches of embargo result in immediate and permanent removal.

### Dispute Resolution
- The **Technical Steering Committee (TSC)** resolves any disputes regarding Security Notification List membership, eligibility, access decisions, relevance filtering, or removal for embargo breaches.

### Statutory Duty and CRA Notice
- **Mandatory Coordination with Zowe SRC:** Members who act as CRA manufacturers agree to **notify and coordinate with the Zowe SRC before submitting statutory reports to national authorities (CSIRTs/ENISA)**. This coordination prevents premature public disclosures while patches undergo private testing.

---

## Server vs. Client Deliverables

Because Zowe encompasses z/OS systems software and high-velocity developer tooling, the release process respects the nature of both environments:

```
SERVER COMPONENTS (APIML, ZSS, Desktop, PAX, SMP/E)
+-----------------------+                          +-----------------------+
| Phase 3: Restricted   | ═══════════════════════> | Phase 4: Public GA    |
| Build v2.15.1         |  (Byte-Identical Copy)   | Build v2.15.1         |
+-----------------------+                          +-----------------------+
- Hashes match exactly.
- Signatures match exactly.
- Maintains linear history.

CLIENT COMPONENTS (CLI, Plugins, SDKs)

+-----------------------+                         +--------------------------+
| Phase 3: Restricted   | ══════════════════════> | Phase 4: Public GA       |
| e.g. v8.56.1          |                         | Rebased on HEAD; v8.60.0 |
+-----------------------+                         +--------------------------+
- Nightly builds continue.
- Security fix merged into the active development branch.
```

### Server Components (APIML, ZSS, Desktop, SMP/E, PAX)
- **Byte-Identical Promotion:** The server package promoted to `zowe.org` at Phase 4 is a byte-for-byte identical copy of the Phase 3 restricted artifact. SHA-256 hashes and digital signatures remain identical. The version number assigned at Phase 0 is permanent (e.g., `v2.15.1`).

### Client Components (CLI, Plugins, SDKs)
- **Forward-Rolling Releases:** At Phase 3, client releases are available from an access-controlled npm feed or archive as an offline bundle with a version number that is the next minor/patch version (e.g., `v8.56.1`). Unlike Server Components, the Phase 0 version number is not permanent.
- **Promotion to Public:** At Phase 4, the fix is merged/rebased onto the latest active `master` branch and released as the next minor/patch version (e.g., `v8.60.0`), incorporating intervening non-breaking updates.

---

## Server Packaging: Full Distribution 

- **How it works:** Private CI generates a complete Zowe server distribution (PAX archive and SMP/E container) where the only difference from the previous GA build are the remediated artifacts, tracked by `manifest.json.template`. Individual squads are responsible for managing their component lifecycle, version discipline, and properly isolating security fixes.

---

## Handling Release Collisions and Edge Cases

When scheduled community releases intersect an active security fix, the community adheres to these principles:

### Guiding Principles
1. **Actively exploited vulnerabilities are disclosed immediately:** Fixes are never hidden behind a restricted channel or quiet period when evidence of active exploitation exists. In those cases, fixes go directly to public release as an Out-of-Band (OOB) remediation or emergency leak response.
2. **The most recent version of Zowe should always be the most secure version.** This makes Zowe's security posture easy to understand and communicate. It guides our decision making in edge cases, as [seen below](#collision-1-security-fix-in-progress-when-scheduled-release-ships).

---

### Collision 1: Security Fix in Progress When Scheduled Release Ships
*The Situation:* A scheduled community release (e.g., `v2.16.0`) is ready for release and a security fix is still undergoing private testing.

*Default Policy:* **Ship the scheduled release on time without the security fix. Rebase the security fix.**
1. The scheduled release (`v2.16.0`) ships on schedule without the fix.
2. The Fix Team immediately rebases the private patch on top of the newly tagged `v2.16.0` release.
3. The security fix is packaged and published to the restricted channel as `v2.16.1` when ready.

*Alternative Policy by TSC/SRC vote:* **Delay the scheduled release and include security fixes in it. This would skip a restricted distribution and quiet period.**
1. The scheduled release (`v2.16.0`) is delayed until the security fix is ready.
2. The plan to include security fixes in the upcoming community release is shared through the restricted communication channels.
3. The security fix is included within the scheduled release (`v2.16.0`). There is no restricted distribution or quiet period.

---

### Collision 2: Scheduled Release Falls Mid-Window
*The Situation:* A security patch (`v2.15.1`) was delivered to the restricted channel < 30 days ago, so we're currently in a quiet period. The release calendar calls for minor release `v2.16.0` today.

Pick one of the following:

*Default Policy:* **Delay the scheduled release and include the security fixes in it.**

1. The scheduled release (`v2.16.0`) is delayed to protect the 30-day runway.
2. The security fix is included directly in the scheduled public release (`v2.16.0`), and the maintenance release (`v2.15.1`) is promoted to public status simultaneously.

*Alternative Policy by TSC/SRC vote:* **Collapse or reduce the quiet period and include the security fixes in the scheduled release.**
1. The quiet period is collapsed or accelerated; so it will not last the full 30 days.
2. The security fix is included directly in the scheduled public release (`v2.16.0`), and the maintenance release (`v2.15.1`) is promoted to public status simultaneously.

---

### Preset Leak Response
If vulnerability details, working exploits, or patch diffs leak publicly during Phase 1, Phase 2, or Phase 3:
1. **The Timeline Collapses:** Phases 2 and 3 are terminated immediately, go to Phase 4.
2. **Ship What is Ready:** Release Managers immediately promote the current verified build to the public channel.
3. **Publish Mitigations:** If binaries are not ready, the SRC immediately publishes actionable workarounds and mitigations to help users protect their environments.
4. **Notify All Parties:** Brief the reporter, notification list members, and community channels simultaneously.

---

## Retrospective

Within 3 to 5 business days after Phase 4 (public CVE publication), the Fix Lead hosts a retrospective:
- Published to the SRC. TSC members should be invited to attend.
- Documents the timeline, what worked, what caused friction, and updates needed in automated testing, tooling, or cross-squad coordination.

---

## Open Action Items to Implement Policy

To enact this policy across the Zowe community, the Zowe Technical Steering Committee (TSC) has identified the following action item to resolve prior to final policy lock:

1. **Standard Confidentiality Instrument Authoring & CRA Coordination Protocol:** The form text is proposed in [`confidentiality-acknowledgement.md`](confidentiality-acknowledgement.md) with the CRA Coordination Protocol annex. Remaining before final policy lock: TSC approval of the form text, legal review across participating corporate legal teams, and vendor confirmation of the coordination protocol.

---

