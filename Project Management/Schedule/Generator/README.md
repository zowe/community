# Schedule Generator (historical)

This tool generated the old PI-based release schedule (13-week PIs, fixed offsets
from PI end: Code Freeze 4 weeks before GA, System Demo the Tuesday week after GA).

It no longer produces the current Zowe release schedule:

- Release dates are set per release (client-side and server-side components of a
  Zowe release can ship on separate dates) instead of being derived from a fixed
  PI cadence.
- The authoritative schedule lives on https://www.zowe.org/vnext and is maintained
  in the [zowe/zowe.github.io](https://github.com/zowe/zowe.github.io) repository
  (`vNext.md` for the milestone table, `_data/releases.yml` for the upcoming-release
  banner).
