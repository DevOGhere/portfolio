---
title: Fathom
tagline: market data, live.
summary: >-
  Real-time market data pipeline: Kafka streaming, L2 order-book reconstruction,
  sequence-gap detection, and a derived microstructure feed: microprice,
  order-book imbalance, effective spread. Built in four sealed phases, each
  with evidence.
order: 1
receipts:
  - label: P99 TICK-TO-STORE
    value: 63.4 ms
  - label: PHASES SEALED
    value: 4 / 4
    expand:
      items:
        - "01 INGEST · Binance live WS + CME replay, one path, Protobuf on the wire"
        - "02 BOOK · full L2 reconstruction, sequence-gap detection"
        - "03 DERIVE · microprice, imbalance, spread, published as a topic"
        - "04 PROVE · 1h live soak, gap-free, P99 63.4 ms on a dashboard"
      note: >-
        sealed = proven with evidence, then closed. no phase reopened;
        each one shipped something the next one stood on.
  - label: SOAK
    value: 1h live, gap-free
marginalia: >-
  phase 3 nearly broke me: sequence gaps silently corrupting the book for two
  days. the fix is the best code in the repo.
link: https://github.com/DevOGhere/fathom
learned:
  - "day one: did not know what an L2 order book actually was"
  - "learned Protobuf because JSON was embarrassing me on the wire"
  - "found out 'exactly-once delivery' is a bedtime story vendors tell"
---

**Why this project.** Quant data systems live or die on market data
infrastructure, and every tutorial pretends it's easy. I wanted to see market data the way an
exchange does: not in a notebook, but as a living stream with latency budgets,
sequence numbers, and failure modes that only show up at 3am. This is the gap
between "did a Kafka course" and "ran a pipeline through a live soak and can
show you the P99."

**Why this stack.** Kafka (Redpanda) for the backbone, Protobuf on the wire,
TimescaleDB and ClickHouse at rest, Prometheus + Grafana watching everything.
Boring choices, deliberately. The interesting part is what flows through them,
and the discipline was proving each phase with evidence before sealing it.

<figure class="fd-wrap"><svg class="fd" viewBox="0 0 750 190" role="img" aria-label="Fathom pipeline: Binance live websocket and CME replay feed Redpanda over Protobuf, then L2 order book reconstruction with gap detection, then a derived microstructure topic, then TimescaleDB, ClickHouse and Grafana. FathomPulse is a planned read-only subscriber of the derived topic."><style>.fd{width:100%;min-width:560px;height:auto;display:block;font-family:var(--font-mono);overflow:visible}.fd .bx{fill:none;stroke:var(--ink);stroke-width:1.2}.fd .t{fill:var(--ink);font-size:9.5px;font-weight:700;letter-spacing:.06em}.fd .s{fill:var(--muted);font-size:8.5px}.fd .a{fill:var(--accent);font-size:9px;font-weight:700}.fd .ln{stroke:var(--accent);stroke-width:1.4;fill:none;stroke-dasharray:4 4;animation:fdflow 1.2s linear infinite}.fd .hd{fill:var(--accent)}.fd .wip{stroke:var(--muted);stroke-dasharray:3 3}.fd .lbl{fill:var(--muted);font-size:8px;letter-spacing:.14em}@keyframes fdflow{to{stroke-dashoffset:-8}}@media (prefers-reduced-motion:reduce){.fd .ln{animation:none}}</style><rect class="bx" x="5" y="34" width="130" height="30" rx="3"/><text class="t" x="70.0" y="52.5" text-anchor="middle">BINANCE LIVE WS</text><rect class="bx" x="5" y="74" width="130" height="30" rx="3"/><text class="t" x="70.0" y="92.5" text-anchor="middle">CME REPLAY</text><rect class="bx" x="157" y="34" width="130" height="70" rx="3"/><text class="t" x="222.0" y="63.5" text-anchor="middle">REDPANDA</text><text class="s" x="222.0" y="76.5" text-anchor="middle">Kafka · Protobuf</text><rect class="bx" x="309" y="34" width="130" height="70" rx="3"/><text class="t" x="374.0" y="57.0" text-anchor="middle">L2 BOOK</text><text class="s" x="374.0" y="70.0" text-anchor="middle">sequence-gap</text><text class="s" x="374.0" y="83.0" text-anchor="middle">detection</text><rect class="bx" x="461" y="34" width="130" height="70" rx="3"/><text class="t" x="526.0" y="57.0" text-anchor="middle">DERIVED TOPIC</text><text class="s" x="526.0" y="70.0" text-anchor="middle">microprice · imbalance</text><text class="s" x="526.0" y="83.0" text-anchor="middle">effective spread</text><rect class="bx" x="613" y="34" width="130" height="70" rx="3"/><text class="t" x="678.0" y="57.0" text-anchor="middle">STORES + GRAFANA</text><text class="s" x="678.0" y="70.0" text-anchor="middle">Timescale · ClickHouse</text><text class="a" x="678.0" y="83.0" text-anchor="middle">P99 63.4 ms</text><line class="ln" x1="135" y1="49" x2="152" y2="49"/><polygon class="hd" points="157,49 151,46 151,52"/><line class="ln" x1="135" y1="89" x2="152" y2="89"/><polygon class="hd" points="157,89 151,86 151,92"/><line class="ln" x1="287" y1="69" x2="304" y2="69"/><polygon class="hd" points="309,69 303,66 303,72"/><line class="ln" x1="439" y1="69" x2="456" y2="69"/><polygon class="hd" points="461,69 455,66 455,72"/><line class="ln" x1="591" y1="69" x2="608" y2="69"/><polygon class="hd" points="613,69 607,66 607,72"/><rect class="bx wip" x="461" y="140" width="130" height="34" rx="3"/><text class="t" x="526" y="155" text-anchor="middle" style="fill:var(--muted)">FATHOMPULSE</text><text class="s" x="526" y="167" text-anchor="middle">subscriber · WIP</text><line class="ln" x1="526" y1="104" x2="526" y2="134" style="stroke:var(--muted)"/><polygon points="526,140 523,134 529,134" style="fill:var(--muted)"/><text class="lbl" x="5" y="22">INGEST</text><text class="lbl" x="309" y="22">BUILD</text><text class="lbl" x="461" y="22">DERIVE</text><text class="lbl" x="613" y="22">PROVE</text></svg><figcaption>Fathom, one path from tick to dashboard. Dashed = FathomPulse, designed but not built.</figcaption></figure>

**What it achieves.** Binance live WebSocket and Databento CME-futures replay
running through the same path with parity. Full L2 order-book reconstruction
with sequence-gap detection. A derived microstructure topic (microprice,
order-book imbalance, effective spread) that other systems can subscribe to.
FathomPulse is designed as the first subscriber. P99 of 63.4 ms tick-to-store, measured
over a one-hour live soak, gap-free.
