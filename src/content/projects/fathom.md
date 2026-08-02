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

**What it achieves.** Binance live WebSocket and Databento CME-futures replay
running through the same path with parity. Full L2 order-book reconstruction
with sequence-gap detection. A derived microstructure topic (microprice,
order-book imbalance, effective spread) that other systems can subscribe to.
FathomPulse is designed as the first subscriber. P99 of 63.4 ms tick-to-store, measured
over a one-hour live soak, gap-free.
