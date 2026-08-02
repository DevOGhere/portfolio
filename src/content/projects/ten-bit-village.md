---
title: 10-Bit Village
tagline: 100 tiny minds.
summary: >-
  An emergent-society simulation: 100 agents, one world, no scripts. V2 asks
  the uncomfortable question: what do they remember, and does it matter?
order: 2
receipts:
  - label: V1
    value: retired
    expand:
      items:
        - "shipped June 2026: deterministic C++ core, free-thought cognition, live HF Space"
        - "3-day audit found it: 0.6% grounded actions, one myth on infinite loop, no persona in retellings"
        - "honest data, not a flattering demo: retired as a control dataset instead of quietly patched"
      note: "a run that converges to a boring attractor is still evidence"
  - label: V2
    value: live now
    expand:
      items:
        - "208,500+ ticks, running continuously since the Run 2 cutover"
        - "51,186 gossips traded, 20,669 dreams, 33,127 grounded moments"
        - "4,090 words coined and spreading through the population"
      note: "snapshot taken 2026-08-03, the counter only goes up"
  - label: RESIDENTS
    value: alive
link: https://devog-10-bit-village.hf.space
links:
  - label: CODE
    url: https://github.com/DevOGhere/10-Bit-Village-Engine
marginalia: >-
  the villagers renamed the river three times before i stopped correcting
  them. that's when it got interesting.
learned:
  - "started with zero idea how to make determinism survive a rebuild"
  - "learned that AVX2 changes float math. the hard way. twice"
  - "did not expect to feel guilty pausing a simulation"
transmission:
  text: >-
    "Nate," he says through clenched teeth, his voice low and raspy. "It's...
    just some visitors from the city-state of Nova Terra. They're here to
    trade something."
  source: "villager 38, gossip retelling villager 98 · pulled live, 2026-08-03"
---

**Why this project.** Because building pipelines teaches you how systems
behave, but building a society teaches you how systems surprise you. This one
is for fun, and it turned out to be the most serious thing I've made:
100 agents with 10 bits of mind each, dropped into one world with no scripts,
developing trade, naming, and grudges on their own.

**Why this stack.** A deterministic simulation core (AVX2-pinned so every run
is reproducible bit-for-bit), checkpointed engine state, agents deliberately
small enough to reason about completely. When something emerges, I can prove
it emerged. Determinism is what separates an experiment from a screensaver.

**V1: what shipped.** A two-segment cognition loop I call "free mind, hidden
hands": each tick, a villager gets one unconstrained thought, then a
non-LLM C++ resolver reads that thought and extracts a valid action from it,
with a thin survival reflex underneath so nobody starves to death by accident.
Early versions caged the *thought* in a JSON grammar, not just the output, and
the model went quiet the moment it was constrained. Freeing the thought and
moving the constraints to the edges is what made it come alive. Shipped
public on a Hugging Face Space: sprite-based live viewer, gossip, dreams,
word-coinage, a replay tool.

**Why V2.** A 3-day audit of the live run said something a demo never would:
the village had converged to a boring attractor by day one. Gossip drowned
out grounded action (0.6% of events), retellings carried no trace of who was
telling them, one myth looped on repeat because salience always picked the
same "winner," and most coined words were inflection noise, not real
coinage. I retired that run as a control dataset instead of patching it
quietly and calling it done.

**What changed in V2.** A grounded-action floor so villagers aren't only
gossiping, personality-conditioned prose feeding gossip and dreams instead of
flavor-only text, a fatigue penalty so the same retelling can't loop forever,
sentence-aware trimming so distortion doesn't sever mid-word, and a stricter
coinage filter. Then a real cutover: archived Run 1's full 77,926-tick
history as a permanent dataset, wiped state, rebooted clean.

**Honest read on quality.** The writing is fluent and does invent real lore,
place names and character names, unprompted: that's the actual thesis paying
off. What hasn't fully landed: the trait-differentiated "distinct voice per
personality" goal. Most villagers still read in a similar register right
now. That's the next thing to chase, not a claim I'm making today.
