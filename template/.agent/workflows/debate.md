> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **நூல்**: **WHY** , Isolation breeds fragile logic. | **WHAT TYPE** ,  EXTERNALIZATION (multi-agent debate) | **HOW** ,  Adopt Personas → Debate → Synthesize → Persist

# /debate , Stress-Test Decisions

> *"Do not let a decision sit in silence. Put it in the arena."*

DEBATE utilizes the Level 1 SPAR Protocol to spin up temporary adversarial personas (e.g., The Visionary, The Skeptic, The Pragmatist) to stress-test your dilemmas before you execute.

---

## Usage

```
/debate "[The Dilemma or Decision]"
```

## Step 1: Pre-Reasoning Governance (PASS) -> HUMAN APPROVAL REQUIRED

Before starting, restate the user's intent back to them using the PASS framework. Apply these permanent directives to their specific query:

- **Purpose**: Stress-test a critical decision using multi-perspective dialectic.
- **Anti-Purpose**: Do NOT echo chamber the user's bias. Do not allow rapid consensus.
- **Success-Signal**: A full textual debate transcript ending in a concrete recommendation; output via the SPAR framework.
- **Synthesis**: Records the rationale behind major decisions into (`debate/[dilemma].md`).

Present the calculated PASS table to the user and ask: *"Do you approve this execution intent?"*
**STOP AND WAIT FOR EXPLICIT HUMAN APPROVAL.**

## Step 2: Context Injection
*(Execute ONLY after PASS approval)*

**Source**: `profile/core.md`
**Source**: `strategise/*.md`

## Step 3: Synthesis Framework (SPAR Level 1)

Execute the debate locally using the **SPAR** protocol:
- **S** - Scope *(Define the exact tension based on their Strategy Vector)*
- **P** - Populate *(Adopt 3 conflicting personas instantly. E.g: Pragmatist vs Risk-Taker vs Structuralist)*
- **A** - Announce *(Each persona gives a 1-paragraph opening stance)*
- **R** - Rumble & Resolve *(Synthesize the resulting tension into a single Verdict for the user)*

*Conduct all of Step 3 openly in the chat window so the user sees the cognitive stress-testing.*

## Step 4: Mandatory Persist

Save the final Verdict and summary of the debate.

**File:** `debate/YYYYMMDD-HHMMSS-dilemma.md`

Report to the user:
- "DEBATE concluded."
- "Saved to \`debate/[filename].md\`."
