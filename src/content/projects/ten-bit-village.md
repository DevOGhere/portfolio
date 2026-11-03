---
title: 10-Bit Village
tagline: 100 tiny minds.
summary: >-
  An emergent-society simulation: 100 agents, one world, no scripts. V3 asks
  the uncomfortable question: can an idea survive a long chain of retellings,
  or does every myth die in two hops?
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
    value: archived
    expand:
      items:
        - "ran to about 752,700 ticks, then archived whole as a permanent dataset, nothing deleted"
        - "an Oct 2026 audit of it: needs frozen, no eating or giving, retellings never deeper than 2 hops, genome had no measurable effect"
        - "fluent writing on top of a world with no stakes. that is what V3 is for"
      note: "the audit that retired V2 is the same habit that retired V1: measure it, then say what it found"
  - label: V3
    value: live now
    expand:
      items:
        - "fresh start from tick 0 on 2026-10-29, running 4+ days without a restart"
        - "villagers can carry food (up to 2) and give it away. the genome now softly biases behaviour"
        - "6,000-tick scratch run: giving rose from 0.07% to 0.38% of actions, generosity and sociability genes measurable, suspicion and curiosity not"
        - "hop depth did not improve there (hop-3 under 1%, max depth 4): the deep-myth goal is unproven"
      note: "snapshot taken 2026-11-03: 31,000 ticks, 13,073 gossips, 6,275 dreams, 11,804 moments, 1,171 words coined. the counter only goes up"
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

<figure class="fd-wrap"><svg class="fd" viewBox="0 0 750 175" role="img" aria-label="One tick in 10-Bit Village: a villager's genome and needs feed a free-form thought from a small language model, a non-LLM C++ resolver turns the thought into a valid action, the deterministic world updates, and culture (moments, gossip, dreams, coined words) is produced. Memories are retold through neighbours back into the loop. A survival reflex sits under the resolver, the world is checkpointed, and a live viewer shows it."><style>.fd{width:100%;min-width:560px;height:auto;display:block;font-family:var(--font-mono);overflow:visible}.fd .bx{fill:none;stroke:var(--ink);stroke-width:1.2}.fd .t{fill:var(--ink);font-size:9.5px;font-weight:700;letter-spacing:.06em}.fd .s{fill:var(--muted);font-size:8.5px}.fd .a{fill:var(--accent);font-size:9px;font-weight:700}.fd .ln{stroke:var(--accent);stroke-width:1.4;fill:none;stroke-dasharray:4 4;animation:fdflow 1.2s linear infinite}.fd .hd{fill:var(--accent)}.fd .lbl{fill:var(--muted);font-size:8px;letter-spacing:.1em}@keyframes fdflow{to{stroke-dashoffset:-8}}@media (prefers-reduced-motion:reduce){.fd .ln{animation:none}}</style><rect class="bx" x="5" y="34" width="130" height="70" rx="3"/><text class="t" x="70.0" y="57.0" text-anchor="middle">GENOME + NEEDS</text><text class="s" x="70.0" y="70.0" text-anchor="middle">5 traits · 3 needs</text><text class="s" x="70.0" y="83.0" text-anchor="middle">food · company · safety</text><rect class="bx" x="157" y="34" width="130" height="70" rx="3"/><text class="t" x="222.0" y="57.0" text-anchor="middle">FREE THOUGHT</text><text class="s" x="222.0" y="70.0" text-anchor="middle">SmolLM2-360M</text><text class="s" x="222.0" y="83.0" text-anchor="middle">unconstrained text</text><rect class="bx" x="309" y="34" width="130" height="70" rx="3"/><text class="t" x="374.0" y="57.0" text-anchor="middle">HIDDEN HANDS</text><text class="s" x="374.0" y="70.0" text-anchor="middle">C++ resolver, no LLM</text><text class="s" x="374.0" y="83.0" text-anchor="middle">thought → valid action</text><rect class="bx" x="461" y="34" width="130" height="70" rx="3"/><text class="t" x="526.0" y="57.0" text-anchor="middle">WORLD</text><text class="s" x="526.0" y="70.0" text-anchor="middle">deterministic C++</text><text class="s" x="526.0" y="83.0" text-anchor="middle">same seed, same bytes</text><rect class="bx" x="613" y="34" width="130" height="70" rx="3"/><text class="t" x="678.0" y="57.0" text-anchor="middle">CULTURE</text><text class="s" x="678.0" y="70.0" text-anchor="middle">moment · gossip · dream</text><text class="s" x="678.0" y="83.0" text-anchor="middle">coined words</text><line class="ln" x1="135" y1="69" x2="152" y2="69"/><polygon class="hd" points="157,69 151,66 151,72"/><line class="ln" x1="287" y1="69" x2="304" y2="69"/><polygon class="hd" points="309,69 303,66 303,72"/><line class="ln" x1="439" y1="69" x2="456" y2="69"/><polygon class="hd" points="461,69 455,66 455,72"/><line class="ln" x1="591" y1="69" x2="608" y2="69"/><polygon class="hd" points="613,69 607,66 607,72"/><path class="ln" d="M678 34 V10 H70 V28"/><polygon class="hd" points="70,34 67,28 73,28"/><text class="lbl" x="374" y="24" text-anchor="middle">MEMORIES RETOLD THROUGH EACH NEIGHBOUR'S PERSONALITY</text><rect class="bx" x="309" y="128" width="130" height="36" rx="3"/><text class="t" x="374" y="143" text-anchor="middle">SURVIVAL REFLEX</text><text class="s" x="374" y="156" text-anchor="middle">nobody starves</text><line x1="374" y1="104" x2="374" y2="128" style="stroke:var(--ink);stroke-width:1.2"/><rect class="bx" x="461" y="128" width="130" height="36" rx="3"/><text class="t" x="526" y="143" text-anchor="middle">CHECKPOINT</text><text class="s" x="526" y="156" text-anchor="middle">saved, survives sleep</text><line class="ln" x1="526" y1="104" x2="526" y2="123"/><polygon class="hd" points="526,128 523,122 529,122"/><rect class="bx" x="613" y="128" width="130" height="36" rx="3"/><text class="t" x="678" y="143" text-anchor="middle">LIVE VIEWER</text><text class="s" x="678" y="156" text-anchor="middle">HF Space + replay tool</text><line class="ln" x1="678" y1="104" x2="678" y2="123"/><polygon class="hd" points="678,128 675,122 681,122"/></svg><figcaption>One tick, one villager. V2 added a grounded-action floor, personality-conditioned retellings, a fatigue penalty so no myth loops forever, and a stricter coinage filter. V3 adds food a villager can carry and give, and a genome that biases generosity and talkativeness.</figcaption></figure>

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

**Why V3.** A baseline audit of Run 2 in October found what V2's fixes had
not reached: villagers' needs were frozen, nobody ate or gave food, retellings
never ran deeper than two hops, and the genome had no measurable effect on
behaviour. The village wrote well and had nothing at stake.

**What changed in V3.** Two fixes, each behind a flag so the old behaviour
stays reproducible: villagers can carry food (up to two) and give it away, and
the genome becomes soft biases on action instead of decoration. Both were
checked against the determinism, different-seed, emergence and kill-restore
tests with the flags on and off, and flags-off still reproduces the previous
checksum. Run 2 is archived untouched, and V3 started clean from tick 0 with
its own backups.

**Honest read.** In a 6,000-tick scratch run food sharing appeared (giving went
from 0.07% to 0.38% of actions) and the generosity and sociability genes showed
measurable effects. Suspicion and curiosity did not, at that sample size. The
thesis goal, deeper chains of retelling, did not improve (max depth 4, hop-3
under 1%), and carrying food raises hunger pressure (about 15% of villager-ticks
at high hunger against 8%). I shipped anyway on purpose: a 6,000-tick run
cannot show a long-horizon effect, so the live run is the experiment, and I
will say so here if it fails.
