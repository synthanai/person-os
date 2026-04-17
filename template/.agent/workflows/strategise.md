> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **EDITORIAL**: No em-dashes. Use commas, colons, or parentheses instead.

> **நூல்**: **WHY** , Strategy is sacrifice. | **WHAT TYPE** , EXTRACTION (vector mapping) | **HOW** , Read Priors → Interrogate → Synthesize → Persist

# /strategise , Define Attack Vector

> *"If you don't know what you are sacrificing, you do not have a strategy."*

**STRATEGISE** is the fourth verb in the PERSON OS pipeline. It takes the accumulated memory (Identity, Experience, Network) and forces a singular attack vector. The defining feature of this verb is the sacrifice clause: every real strategy requires explicitly naming what the user is choosing NOT to pursue.

**Pipeline position**: VERB 4 of 6
**Reads**: `profile/core.md`, `experience/*.md`, `resonate/*.md` (ALL REQUIRED)
**Writes to**: `strategise/[vector-slug].md`
**Previous step**: `/resonate`
**Next step**: `/operate`

---

## Usage

```
/strategise
```

---

## Step 1: Pre-Reasoning Governance (PASS) → HUMAN APPROVAL REQUIRED

Before starting, restate the user's intent back to them using the PASS framework:

- **Purpose**: Define a rigorous, singular attack vector that channels the user's identity, experience, and alliances against a specific bottleneck. One vector. Not a portfolio.
- **Anti-Purpose**: Do NOT let the user list multiple disjointed goals and call it a strategy. Do NOT allow vague directional aspirations ("I want to grow"). If there is no explicit sacrifice, there is no strategy.
- **Success-Signal**: The vector passes the "2AM Test" (if the user woke up at 2AM anxious, would this strategy still make sense as the right move?). It must name the bottleneck, the sacrifice, and the 3-month waypoint.
- **Synthesis**: Channels identity + experience + network into a single physical trajectory (`strategise/[vector].md`) that drives `/operate` and `/narrate`.

Present PASS table and ask: *"Do you approve this execution intent?"*
**STOP AND WAIT FOR EXPLICIT HUMAN APPROVAL.**

---

## Step 2: Context Injection

*(Execute ONLY after PASS approval)*

Read ALL priors before interrogating:
- **Source**: `profile/core.md` (Calling, Origin, Reason, Endurance)
- **Source**: `experience/*.md` (Capability evidence and yields)
- **Source**: `resonate/*.md` (Network leverage and gaps)

Surface a synthesis: *"Based on your identity as [Calling], your proven capability in [Yield from experience], and your strongest alliance via [Key node], I see these potential vectors. Let me test which one is real."*

---

## Step 3: Multi-Round Interrogation

**Opening probe:** *"What is the single biggest bottleneck between where you are today and your most important 12-month goal? Not a task. A structural constraint that recurs regardless of how hard you work."*

**Depth probes (run these before accepting any answer as final):**
1. *"If that bottleneck dissolved tomorrow, what would you immediately be able to do that you currently cannot?"*
2. *"What have you already tried that has not dissolved it? What does that tell you about its real nature?"*
3. *"What would you have to permanently stop doing to break through this bottleneck? Can you name the sacrifice?"*
4. *"In 3 months, what is the single metric that would tell you the vector is working? One number, one behavior."*
5. *"Which of your network nodes can be activated to attack this bottleneck from an angle you alone cannot access?"*

---

## Step 4: Synthesis Framework (GROWTH)

Synthesize their answers into a Strategy Vector using the **GROWTH** framework. Target: 60-100 words per letter.

- **[G]oal** (The North Star): The specific, named outcome at the 12-month horizon. Must be falsifiable (you will know if you hit it or missed it). Avoid directional language ("grow," "learn"). Use arrival language ("hold the title of," "generate X from," "be the person who").
- **[R]eality** (The brutal current state): A ruthlessly honest assessment of today's position. Name the gap between current state and Goal without softening it. Include a number, a ratio, or a comparison that quantifies the distance.
- **[O]bstacle** (The singular bottleneck): The one structural constraint that, if dissolved, would collapse the distance between Reality and Goal faster than any other action. Name it precisely. One sentence.
- **[W]aypoint** (The 3-month milestone): The specific milestone that proves the vector is working at the 90-day mark. Must be observable and binary (either hit or not).
- **[T]actics** (The attack mechanisms): The 2-3 specific repeatable actions that directly attack the Obstacle. Not tasks. Mechanisms with a frequency (e.g., "Every Friday, I execute X for 90 minutes, producing Y").
- **[H]orizon** (The long-term capability shift): In 3-5 years, if this vector is sustained, what new capability does the user permanently possess that they do not have today?

**Quality gate**: If the Sacrifice is not explicitly named (what the user is choosing NOT to pursue), the synthesis is incomplete. Add a **[S]acrifice** paragraph before persisting.

---

## Step 5: Mandatory Persist

**File:** `strategise/[vector-slug].md`

**Header format:**
```
# [Role/Domain]: Strategy Vector

**Timestamp**: YYYY-MM-DD
**Framework**: STRATEGISE (G.R.O.W.T.H.)
**Domain**: [Domain (Specific Role)]
**Produced by**: /strategise
**Reads from**: profile/core.md, experience/*.md, resonate/*.md
**Feeds into**: /operate, /narrate
```

Report to the user:
- "STRATEGISE vector locked."
- "Saved to `strategise/[filename].md`."
- "Sacrifice clause present: [YES/NO — flag if missing]"
- **"Next step: Run `/operate`."**
