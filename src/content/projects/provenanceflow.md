---
title: ProvenanceFlow
tagline: where data comes from.
summary: >-
  FAIR-compliant data lineage tracker built on W3C PROV: tracing what
  touched your data, when, and why.
order: 4
receipts:
  - label: STATUS
    value: work in progress
  - label: STANDARD
    value: W3C PROV
wip: true
link: https://github.com/DevOGhere/ProvenanceFlow
learned:
  - "read the W3C PROV spec twice, understood it the third time"
  - "learned the difference between a demo and a tool by building the wrong one first"
---

**Why this project.** I spent 18 months watching production data change shape
between Bronze and Gold, and learned the hard way (see: the silent data loss
incident) that lineage you can't query is lineage you don't have. FAIR data
principles say provenance should be machine-actionable; almost nobody's
pipelines actually deliver that.

**Why this stack.** W3C PROV as the data model because standards outlive
side projects. Lineage recorded in PROV today can become a Fair Digital
Object tomorrow without rework.

**Honest status.** The PROV core works; the ambitions around it are still
being built. It stays labeled work-in-progress until it isn't; this site
doesn't do vaporware.
