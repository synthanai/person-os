> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **EDITORIAL**: No em-dashes. Use commas, colons, or parentheses instead.

> **நூல்**: **WHY** , Strategy dies without rhythm. | **WHAT TYPE** , EXTRACTION (daily operations) | **HOW** , Read Strategy → Interrogate → Synthesize → Persist

# /operate , Embed Tactical Rhythms

> *"The vector is set. Now we encode it into muscle memory."*

**OPERATE** is the fifth verb in the PERSON OS pipeline. It bridges abstract strategy into observable, trackable daily behavior. Where `/strategise` defines the direction, `/operate` defines the engine. Its defining feature is the Kill Criteria: a pre-committed condition under which a rhythm is explicitly abandoned, preventing the professional from clinging to broken habits out of sunk-cost loyalty.

**Pipeline position**: VERB 5 of 6
**Reads**: `strategise/*.md` (REQUIRED), `profile/CORE.md` (recommended)
**Writes to**: `operate/[rhythm-slug].md`
**Previous step**: `/strategise`
**Next step**: `/narrate`

---

## Usage

```
/operate
```

---

## Step 1: Pre-Reasoning Governance (PASS) → HUMAN APPROVAL REQUIRED

Before starting, restate the user's intent back to them using the PASS framework:

- **Purpose**: Operationalize the abstract strategy vector into specific, scheduled, non-negotiable rhythms with clear yield expectations and halt conditions.
- **Anti-Purpose**: Do NOT allow the user to list ambiguous goals without attached frequencies, environments, and metrics. Do NOT allow "I'll try to do X" language. Every rhythm must have a specific time, a specific output, and a specific death clause.
- **Success-Signal**: Each rhythm entry passes the "Calendar Test" (could you paste this into a calendar and know exactly what to do, when, and when to stop?).
- **Synthesis**: Transforms the GROWTH vector into observable state changes (`operate/[rhythm].md`) that dictate daily behavior.

Present PASS table and ask: *"Do you approve this execution intent?"*
**STOP AND WAIT FOR EXPLICIT HUMAN APPROVAL.**

---

## Step 2: Context Injection

*(Execute ONLY after PASS approval)*

Read the overarching strategy:
- **Source**: `strategise/*.md` (Extract the Goal, Waypoint, and Tactics directly)

Surface: *"Your strategy vector targets [Goal] via [Obstacle]. I need to encode the [Tactics] into daily rhythms that compound toward your 3-month Waypoint of [Waypoint]."*

---

## Step 3: Multi-Round Interrogation

**Opening probe:** *"If you could protect only 3 blocks of time per week as non-negotiable work on your strategy, what would happen inside those blocks? Not meetings. Actual productive work on your bottleneck."*

**Depth probes per rhythm:**
1. *"What specific environment does this rhythm require? Where, what tools, what mental state?"*
2. *"What is the single observable output that tells you this rhythm succeeded on any given session?"*
3. *"What leading indicator tells you this rhythm is working after 4 weeks? What lagging indicator tells you it broke?"*
4. *"At what point would you kill this rhythm? What would have to be true for you to formally declare it dead and replace it with something else?"*
5. *"What is the metabolic cost? What are you choosing to NOT do during this time block?"*

---

## Step 4: Synthesis Framework (RHYTHM)

Synthesize each rhythm into an Operations Manual entry using the **RHYTHM** framework. Target: 50-80 words per letter.

- **[R]itual** (The non-negotiable mechanism): Name the exact recurring action with its specific trigger, frequency, duration, and context. Not "I write." But "Every Monday at 7AM for 45 minutes, I write one section of [X] before opening any communication tool."
- **[H]abitat** (The environment and mental state): Describe the physical and cognitive conditions the ritual requires. Name any pre-conditions that must be true for the ritual to work (e.g., device mode, physical location, prior tasks completed).
- **[Y]ield** (The specific expected output): The concrete, observable deliverable produced by each session of this ritual. Not "progress." A named artifact, a count, a completed decision.
- **[T]racking** (The leading and lagging metrics): Name two metrics: one leading (tells you the ritual is being executed correctly before you see results) and one lagging (tells you the ritual produced its intended outcome after 4-8 weeks).
- **[H]ardline Kill Criteria** (When to abandon): Pre-commit to a specific measurable condition under which you formally declare this rhythm dead and replace it. This is not failure. This is governance.
- **[M]omentum** (The loop back into GROWTH): Explicitly describe how the output of this rhythm feeds back into the next execution cycle. How does it compound? How does it feed `/strategise` for the next iteration?

---

## Step 5: Mandatory Persist

**File:** `operate/[rhythm-slug].md`

**Header format:**
```
# [Role/Domain]: Operational Ledger

**Timestamp**: YYYY-MM-DD
**Framework**: OPERATE (R.H.Y.T.H.M.)
**Domain**: [Domain (Specific Role)]
**Ritual**: [Ritual Name]
**Produced by**: /operate
**Reads from**: strategise/*.md
**Feeds into**: /narrate
```

Report to the user:
- "OPERATE rhythm locked."
- "Saved to `operate/[filename].md`."
- "Kill Criteria defined: [YES/NO — flag if missing]"
- **"Next step: Run `/narrate`."**

---

> **Voice compliance**: All synthesized output MUST pass the rules in `../../VOICE_STANDARD.md` before persisting. Run `/audit --voice` if in doubt.
