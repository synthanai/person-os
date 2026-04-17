> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **EDITORIAL**: No em-dashes. Use commas, colons, or parentheses instead.

> **நூல்**: **WHY** , Capability is proven over time. | **WHAT TYPE** , EXTRACTION (timeline mapping) | **HOW** , Read Profile → Interrogate → Synthesize → Persist

# /experience , Extract Capability Timeline

> *"Experience is not a resume. It is a ledger of conquered complexity."*

**EXPERIENCE** is the second verb in the PERSON OS pipeline. It takes the baseline identity established by `/profile` and maps it against real historical evidence. Each milestone becomes a ledger entry proving the Calling is not theoretical but physically demonstrated.

**Pipeline position**: VERB 2 of 6
**Reads**: `profile/CORE.md` (REQUIRED)
**Writes to**: `experience/[milestone].md`
**Previous step**: `/profile`
**Next step**: `/resonate`

---

## Usage

```
/experience
```

---

## Step 1: Pre-Reasoning Governance (PASS) → HUMAN APPROVAL REQUIRED

Before starting, restate the user's intent back to them using the PASS framework:

- **Purpose**: Map the user's historical capability against their baseline identity. Every milestone must directly prove a dimension of their CORE.
- **Anti-Purpose**: Do NOT accept chronological resumes or task lists devoid of complexity. Break chronology if needed. We want the 3 moments where the person was genuinely tested and the outcome was genuinely uncertain.
- **Success-Signal**: Each milestone produces a STORY ledger entry with specific quantified outcomes, a named obstacle, and a compounding internal yield that still shapes their behavior today.
- **Synthesis**: Transforms tacit memory into an explicit ledger (`experience/[milestone].md`) that will fuel `/strategise` and `/narrate`.

Present PASS table and ask: *"Do you approve this execution intent?"*
**STOP AND WAIT FOR EXPLICIT HUMAN APPROVAL.**

---

## Step 2: Context Injection

*(Execute ONLY after PASS approval)*

**CRITICAL**: Read `profile/CORE.md` before asking a single question. If this file does not exist, abort and tell the user to run `/profile` first. Surface the CORE's [C]alling explicitly so the interrogation is grounded (e.g., *"Based on your Calling as someone who [X], I want to find the moments where that Calling was most severely tested"*).

---

## Step 3: Multi-Round Interrogation

Ask the user for 3 milestones. For each one, run the following sequence rather than accepting a single answer:

**Opening probe:** *"Tell me about a time when you were genuinely stretched. A project, crisis, or context where the outcome was uncertain and you had to use something beyond your formal job description to survive."*

**Depth probes per milestone** (ask in sequence if the opening answer is shallow):
1. *"What was the specific constraint? What resource, authority, or time were you missing?"*
2. *"What did everyone else think would happen? What did you see differently?"*
3. *"What number tells the story? What metric moved, and by how much?"*
4. *"What is the reusable pattern you extracted from this? Has it appeared again?"*

---

## Step 4: Synthesis Framework (STORY)

Synthesize each milestone into an Experience Ledger entry using the **STORY** framework. Target: 50-80 words per letter.

- **[S]ituation** (Baseline reality before they acted): Name the industry context, company scale, the specific function involved, and the pre-existing state of dysfunction or opportunity. Use specific numbers where possible (e.g., ARR, team size, timeline).
- **[T]ask** (The directive): State the explicit mandate or the self-assigned problem. Name who assigned it and what the success definition was at the outset.
- **[O]bstacle** (The complexity): Name the specific human, technical, political, or resource constraint that made this genuinely hard. This is NOT "it was busy." This is a named antagonist or structural failure.
- **[R]esult** (The output): Lead with the quantified corporate outcome. Revenue saved/earned, time compressed, headcount retained, risk avoided. Do not use vague language ("improved"). Use numbers, ratios, or comparative benchmarks.
- **[Y]ield** (The compounding internal capability): This is the most important letter. What permanent behavioral or cognitive change did this episode produce? Name the reusable pattern, methodology, or mental model the person now carries.

**Quality gate**: The Yield must pass two tests:
1. It must describe a capability that did NOT exist before the milestone.
2. It must be specific enough that you could train someone else on it.

---

## Step 5: Mandatory Persist

**File:** `experience/[milestone-slug].md` (use a human-readable slug, not a timestamp-only name)

**Header format:**
```
# [Role/Domain]: Experience Ledger

**Timestamp**: YYYY-MM-DD
**Framework**: EXPERIENCE (S.T.O.R.Y.)
**Domain**: [Domain (Specific Role)]
**Milestone**: [Milestone Name]
**Produced by**: /experience
**Reads from**: profile/CORE.md
**Feeds into**: /strategise, /narrate
```

Report to the user:
- "EXPERIENCE milestone logged."
- "Saved to `experience/[filename].md`."
- "Milestones logged: [N] of 3."
- **"Next step: Run `/resonate`."**

---

> **Voice compliance**: All synthesized output MUST pass the rules in `../../VOICE_STANDARD.md` before persisting. Run `/audit --voice` if in doubt.
