---
title: FathomPulse
tagline: honest glass.
summary: >-
  A dashboard on Fathom's live stream that measures its own truthfulness,
  not just the market's. Architecture and design system locked, no working
  pipeline yet.
order: 3
receipts:
  - label: STATUS
    value: work in progress
  - label: LOCKED
    value: "2026-07-03"
    expand:
      items:
        - "thesis: every panel carries a data-age chip, latency decomposed into provable stages, not smoothed away"
        - "frame semantics: one WS frame is a self-contained 10Hz snapshot, no client-side delta-stitching to get wrong"
        - "design tokens shipped and measured: waterfall ΔE 41.3, bid/ask ΔE 66.4, both pass colorblind-safe checks"
      note: "pulse/ingest, pulse/api, pulse/web don't exist yet, this is genesis + design system only"
wip: true
learned:
  - "the honest-glass thesis came before a line of code did, on purpose"
  - "spent longer validating chart contrast math than writing a single line of ingest"
---

**Why this project.** Fathom proves itself in a P99 number and a dashboard
nobody but me has seen. Pulse is the part a recruiter can actually watch:
Fathom's internals turned into a screen, built on the same honesty
standard as the pipeline underneath it. Most dashboards pretend to be
real-time. Pulse would display its own staleness instead of hiding it.

**Why this stack.** It rides Fathom's existing Kafka topics read-only, one
more consumer off the same derived stream. FastAPI over WebSocket, one frame
per 10Hz tick, each frame a complete snapshot of the trailing second so the
client never has to stitch deltas together and get it wrong.

**Honest status.** Architecture and frame semantics locked, and the design
system is more than a mood board: real contrast math run against the actual
dark palette before a single component was built. Past that, there's no
ingest, no API, no web app. It stays labeled work-in-progress until it isn't;
this site doesn't do vaporware.
