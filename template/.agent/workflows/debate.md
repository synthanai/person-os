> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **EDITORIAL**: No em-dashes. Use commas, colons, or parentheses instead.

> **நூல்**: **WHY** , Isolation breeds fragile logic. | **WHAT TYPE** , EXTERNALIZATION (multi-agent debate) | **HOW** , Adopt Personas → Debate → Synthesize → Persist

# /debate , Stress-Test Decisions

> *"Do not let a decision sit in silence. Put it in the arena."*

**DEBATE** is the meta-stress-testing verb. Where all other verbs extract and synthesize, DEBATE challenges. It spins up temporary adversarial personas rooted in the user's established CORE and Strategy Vector, then forces them into dialectic conflict to expose blind spots, risk vectors, and unconsidered alternatives before a major commitment is executed.

**Pipeline position**: META VERB (run before any major commitment in the GROWTH phase)
**Reads**: `profile/core.md`, `strategise/*.md` (REQUIRED — the debate must be grounded in the user's actual context, not generic logic)
**Writes to**: `debate/[dilemma-slug].md`
**Connects to**: `/strategise` (updates the vector if the verdict changes a key assumption), `/operate` (updates rhythms if the verdict changes tactics)

---

## Usage

```
/debate "[The Dilemma or Decision]"
```

---

## Step 1: Pre-Reasoning Governance (PASS) → HUMAN APPROVAL REQUIRED

Before starting, restate the user's intent back to them using the PASS framework:

- **Purpose**: Stress-test a critical decision using multi-perspective dialectic grounded in the user's actual CORE and Strategy Vector. Expose blind spots and unconsidered second-order effects before execution.
- **Anti-Purpose**: Do NOT echo-chamber the user's existing bias. Do NOT allow rapid consensus. At least one persona must argue a position the user would initially find uncomfortable or counterintuitive.
- **Success-Signal**: The debate produces a concrete Verdict that either confirms the original decision with noted risks or proposes a modified path. The Verdict must be falsifiable (the user can evaluate it in 90 days).
- **Synthesis**: Records the full rationale behind major decisions (`debate/[dilemma].md`) for auditability and retrospective LOON generation.

Present PASS table and ask: *"Do you approve this execution intent?"*
**STOP AND WAIT FOR EXPLICIT HUMAN APPROVAL.**

---

## Step 2: Context Injection

*(Execute ONLY after PASS approval)*

Before populating personas, read:
- **Source**: `profile/core.md` (Extract the Calling and Reason — these are the values the debate must honor or challenge)
- **Source**: `strategise/*.md` (Extract Goal, Obstacle, Waypoint, and Sacrifice — the decision must be evaluated against these constraints, not in a vacuum)

State the exact tension: *"The user is deciding [X]. Their current strategy targets [Goal] via [Obstacle]. The sacrifice committed to is [Y]. I am testing whether [X] is coherent with or contradictory to these commitments."*

---

## Step 3: Synthesis Framework (SPAR Level 1)

Execute the debate using the **SPAR** protocol. All debate steps run openly in the chat so the user can observe the cognitive stress-testing.

**[S]cope** (Define the arena):
Name the exact decision tension. State the decision in one sentence. State the consequence of each path. State which element of the GROWTH vector is most at risk.

**[P]opulate** (Build the arena with 3 opposing personas):
Adopt 3 conflict archetypes, selected based on the nature of the decision. Common sets:

| Tension Type | Persona Set |
|---|---|
| Strategic direction | Visionary vs. Pragmatist vs. Structuralist |
| Resource allocation | Maximizer vs. Optimizer vs. Conservationist |
| Relationship navigation | Advocate vs. Skeptic vs. Neutral Observer |
| Build vs. Buy vs. Partner | Ownership Purist vs. Speed-Prioritist vs. Leverage Mapper |
| Timing decisions | Early Mover vs. Deliberate Timer vs. Market-Reader |

Each persona must be explicitly grounded in the user's CORE. The Pragmatist must argue from the user's Reality (GROWTH-R). The Visionary must argue from the user's Horizon (GROWTH-H). The Structuralist must argue from the Obstacle (GROWTH-O).

**[A]nnounce** (Opening stances):
Each persona delivers a 2-3 sentence opening position. Must be genuinely adversarial, not just varied opinions on speed.

**[R]umble** (2-round dialectic):
- Round 1: Each persona challenges the weakest assumption in another persona's opening stance.
- Round 2: Each persona defends their core position or concedes a specific point.

**[R]esolve** (Synthesis Verdict):
Synthesize all 3 positions into a single Verdict. Format:
- **Decision**: [Proceed / Modify / Abandon]
- **Conditions**: The specific constraints under which the Decision applies.
- **Risk flags**: The 2-3 specific failure modes that the losing personas identified, which the user must actively monitor.
- **90-day check-in**: The specific signal that, if observed, should trigger a re-debate.

---

## Step 4: Mandatory Persist

**File:** `debate/[dilemma-slug].md`

**Header format:**
```
# [Role/Domain]: Decision Debate

**Timestamp**: YYYY-MM-DD
**Framework**: DEBATE (S.P.A.R.)
**Domain**: [Domain (Specific Role)]
**Dilemma**: [One-line description of the decision]
**Verdict**: [Proceed / Modify / Abandon]
**Confidence**: [Low / Medium / High]
**Produced by**: /debate
**Reads from**: profile/core.md, strategise/*.md
**Feeds into**: strategise/*.md (if verdict changes vector), operate/*.md (if verdict changes tactics)
**90-day check**: [Specific signal to monitor]
```

Report to the user:
- "DEBATE concluded."
- "Verdict: [Decision] — [One sentence rationale]."
- "Risk flags logged: [N]."
- "Saved to `debate/[filename].md`."
- "Strategy impact: [YES — recommend updating strategise/[file] at [GROWTH letter] / NO]"
