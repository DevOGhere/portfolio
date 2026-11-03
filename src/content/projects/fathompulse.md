---
title: FathomPulse
tagline: honest glass.
summary: >-
  A live dashboard on Fathom's Kafka stream that measures its own truthfulness,
  not just the market's. Every number carries its age, every update's life is
  split into measured stages, and the system is tested against real faults.
order: 3
receipts:
  - label: STATUS
    value: v1.0 sealed
    expand:
      items:
        - "live: Binance and Coinbase BTC through Fathom's derived topics, one WebSocket frame per 10Hz tick"
        - "replay: the same page and code path from a recorded capture, byte-identical in two cold browsers"
        - "ms-class by design (Python, Kafka, 10Hz). not a microsecond system, and the page says so"
      note: "sealed = every gate below passed on one commit, then closed."
  - label: SEAL GATES
    value: 6 / 6
    expand:
      items:
        - "71 unit and contract tests pass, including the frozen /features field contract"
        - "WebSocket soak: 10.00 Hz, zero sequence gaps"
        - "Prometheus cross-check: per-venue rates within 2% of Fathom's own counters"
        - "calibration: a hidden 80 ms delay found 10 / 10 times, in the right stage"
        - "incident detector: an induced stall opened, was labelled induced, and cleared 3 / 3"
        - "replay determinism: identical render in two cold browsers"
      note: "one script runs all six. the numbers are the output, not a write-up."
  - label: CHAOS TEST
    value: caught 2 lies
    expand:
      items:
        - "a real 8 s processor freeze (SIGSTOP) made my detector blame the exchange while the queue climbed. fixed: the cause is rewritten as evidence arrives"
        - "my own fix then raised 10 false lag alarms in 17 minutes on a healthy system. fixed: a lag alarm now needs a felt effect, not just a number"
      note: "both regressions fail without the fix. a test I wrote to agree with me would have passed."
  - label: INSPECTOR
    value: real Kafka offsets
    expand:
      items:
        - "click any bar to pause on that second"
        - "each record shows partition:offset, bytes, schema id and its raw stamps"
        - "offsets checked against Redpanda's own tooling: consecutive, no gaps"
marginalia: >-
  the chaos test caught my detector lying twice, and the second lie was my own
  fix. the green badge only says what it checked: Pulse's own stages, not the
  exchange.
transmission:
  text: "Records stopped reaching Pulse and the processor's queue is not growing (2 msgs), so nothing is piling up in front of it. The gap looks upstream of the processor (exchange feed, network or producer); Pulse cannot tell which."
  source: "FathomPulse /incidents, 2026-11-02, a real stall"
learned:
  - "the first latency chart was off by 4 to 10 ms because of where I put a timestamp"
  - "a detector that agrees with its own test proves nothing; it took a real frozen process to catch it"
  - "my confident diagnosis of a dead feed was wrong, and a second reviewer found the real cause in code I had not read"
  - "calibrated means calibrated against something. I scoped the badge to what it actually checks"
---

**Why this project.** Fathom proves itself in a P99 number and a Grafana board
nobody but me had seen. Pulse is the part a recruiter can actually watch:
Fathom's internals turned into a screen, held to the same honesty standard as
the pipeline under it. Most dashboards pretend to be real-time. Pulse measures
how late it is, shows that number, and says so when a feed goes quiet: an
outage reads "last update 12 s ago", never an empty chart.

**Why this stack.** It rides Fathom's derived Kafka topics read-only, in its own
consumer group, so it can never disturb the pipeline it watches. FastAPI over
WebSocket sends one self-contained frame per 10Hz tick, so the browser never
stitches deltas and gets it wrong. The front end is static: no build step, no
framework, canvas charts. Timestamps are host-side monotonic stamps, taken per
message, because clocks from different machines are not comparable.

<figure class="fd-wrap"><svg class="fd" viewBox="0 0 750 200" role="img" aria-label="FathomPulse data path: Fathom's derived Kafka topic feeds Pulse's own consumer, which stamps every message, then closed one second bins with four measured stages, then a self-contained 10 Hz WebSocket frame, then the browser in live or replay mode. Dashed boxes are the checks that run on it: a calibration self-test that injects a known delay into Pulse's own stamp sites, and an incident detector for stalls, rate drops, lag and latency drift."><style>.fd{width:100%;min-width:560px;height:auto;display:block;font-family:var(--font-mono);overflow:visible}.fd .bx{fill:none;stroke:var(--ink);stroke-width:1.2}.fd .t{fill:var(--ink);font-size:9.5px;font-weight:700;letter-spacing:.06em}.fd .s{fill:var(--muted);font-size:8.5px}.fd .a{fill:var(--accent);font-size:9px;font-weight:700}.fd .ln{stroke:var(--accent);stroke-width:1.4;fill:none;stroke-dasharray:4 4;animation:fdflow 1.2s linear infinite}.fd .hd{fill:var(--accent)}.fd .wip{stroke:var(--muted);stroke-dasharray:3 3}.fd .lbl{fill:var(--muted);font-size:8px;letter-spacing:.14em}@keyframes fdflow{to{stroke-dashoffset:-8}}@media (prefers-reduced-motion:reduce){.fd .ln{animation:none}}</style><rect class="bx" x="5" y="34" width="130" height="70" rx="3"/><text class="t" x="70" y="57" text-anchor="middle">DERIVED TOPIC</text><text class="s" x="70" y="70" text-anchor="middle">Fathom · Kafka</text><text class="s" x="70" y="83" text-anchor="middle">read-only</text><rect class="bx" x="157" y="34" width="130" height="70" rx="3"/><text class="t" x="222" y="57" text-anchor="middle">PULSE INGEST</text><text class="s" x="222" y="70" text-anchor="middle">own consumer group</text><text class="s" x="222" y="83" text-anchor="middle">stamp per message</text><rect class="bx" x="309" y="34" width="130" height="70" rx="3"/><text class="t" x="374" y="57" text-anchor="middle">1 s BINS</text><text class="s" x="374" y="70" text-anchor="middle">closed bins only</text><text class="a" x="374" y="83" text-anchor="middle">4 measured stages</text><rect class="bx" x="461" y="34" width="130" height="70" rx="3"/><text class="t" x="526" y="57" text-anchor="middle">WS FRAME</text><text class="s" x="526" y="70" text-anchor="middle">10 Hz snapshot</text><text class="s" x="526" y="83" text-anchor="middle">self-contained</text><rect class="bx" x="613" y="34" width="130" height="70" rx="3"/><text class="t" x="678" y="57" text-anchor="middle">BROWSER</text><text class="s" x="678" y="70" text-anchor="middle">live or replay</text><text class="a" x="678" y="83" text-anchor="middle">click a bar: offset</text><line class="ln" x1="135" y1="69" x2="152" y2="69"/><polygon class="hd" points="157,69 151,66 151,72"/><line class="ln" x1="287" y1="69" x2="304" y2="69"/><polygon class="hd" points="309,69 303,66 303,72"/><line class="ln" x1="439" y1="69" x2="456" y2="69"/><polygon class="hd" points="461,69 455,66 455,72"/><line class="ln" x1="591" y1="69" x2="608" y2="69"/><polygon class="hd" points="613,69 607,66 607,72"/><rect class="bx wip" x="157" y="140" width="282" height="40" rx="3"/><text class="t" x="298" y="156" text-anchor="middle" style="fill:var(--muted)">SELF-TEST</text><text class="s" x="298" y="170" text-anchor="middle">injects a known delay into its own stamps</text><rect class="bx wip" x="461" y="140" width="282" height="40" rx="3"/><text class="t" x="602" y="156" text-anchor="middle" style="fill:var(--muted)">INCIDENT DETECTOR</text><text class="s" x="602" y="170" text-anchor="middle">stall · rate drop · lag · drift</text><line class="ln" x1="298" y1="104" x2="298" y2="134" style="stroke:var(--muted)"/><polygon points="298,140 295,134 301,134" style="fill:var(--muted)"/><line class="ln" x1="602" y1="104" x2="602" y2="134" style="stroke:var(--muted)"/><polygon points="602,140 599,134 605,134" style="fill:var(--muted)"/><text class="lbl" x="5" y="22">SUBSCRIBE</text><text class="lbl" x="157" y="22">STAMP</text><text class="lbl" x="309" y="22">MEASURE</text><text class="lbl" x="461" y="22">SHIP</text><text class="lbl" x="613" y="22">SHOW</text></svg><figcaption>FathomPulse, a read-only subscriber of Fathom. Solid = the data path. Dashed = the checks that run on it. Stage 4, to your screen, is a labelled local estimate.</figcaption></figure>

**What it achieves.** One update's life is split into four stages: producer to
derived, derived to Pulse, Pulse to frame, frame to screen. The first three are
measured stamps and the fourth is labelled a local estimate. The wait for the
next 10Hz frame is reported separately, because it is a display choice, not
processing. A calibration self-test hides an 80 ms delay inside Pulse's own
stamping and checks the waterfall finds the right stage and size. An incident
detector watches for stalls, rate collapses, processor lag and latency drift,
and writes a cause that only claims what Pulse can actually see. Fathom's own
counters in Prometheus cross-check Pulse's rates, and a recorded capture
replays through the same code path with a byte-identical render.

**Honest status.** Sealed at v1.0 after six gates passed on one commit. Limits
I would rather say first: it is ms-class by design, not microsecond. The
calibration badge covers Pulse's own stages, not the exchange clocks or the
network. The incident thresholds were tuned on a noisy laptop connection, not
on a production failure. And a hosted version can only be a replay, since the
live stream lives next to Fathom on one machine.
