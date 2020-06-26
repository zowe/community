# Zowe Systems Squad - 20PI3 Objectives (June 2020 to September 2020)

## Zowe Performance Testing Infrastructure and Pipelines

* [https://github.com/zowe/zowe-install-packaging/issues/617] Performance Test Infrastructure and Pipelines. The Zowe community is able to generate release to release performance reports and make them available in the open community. 
  - Risk: Performance testing on z/VM in a shared environment may yield inconsistent results
    - Mitigation: Planning test periods to mitigate risk on shared systems; Test infrastructure can be run internally w/ reports published.

* [https://github.com/zowe/zowe-install-packaging/issues/1465] Performence Reports - End User Tooling. Zowe End Users will be able to run a client application which helps them estimate their cost of running and Zowe, and fine-tune their Zowe performance based on estimated workload.
    - Risk: None Identified

## High Availability
(in support of RELIABILITY theme)

* [https://github.com/zowe/zowe-install-packaging/issues/1467] High Availability Research and POCs. We will formulate a definition of what High Availability means for Zowe, propose a design to reach High Availability, and begin a proof of concept effort for HA.
  - Risk: There is missing runway; research for HA is being undertaken during the start of the PI. The design and implementation in the second half of the PI will be volatile as a result.
    - Mitigation: Reduced deliverable scope - research/design/POC
  - Risk: HA affects all squads which may have different opinions on design choices
    - Mitigation: Plans to engage squads as we pick up the research work, and bring HA to Zowe Architecture call to review progress.

## Expand Component System Testing

## Continue Zowe Release activities & improvements

* Zowe Systems team will continue with release activities. 
* A second "stable" nightly build will be created
  * Risks: none