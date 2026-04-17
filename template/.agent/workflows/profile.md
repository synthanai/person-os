> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **EDITORIAL**: No em-dashes. Use commas, colons, or parentheses instead.

> **நூல்**: **WHY** , Identity precedes execution. | **WHAT TYPE** , EXTRACTION (baseline identity) | **HOW** , Interrogate → Synthesize → Persist

# /profile , Establish Baseline Identity

> *"Before the system can work for you, it must know who you are."*

**PROFILE** is the first verb in the PERSON OS pipeline. It interrogates the foundational architecture of the professional and synthesizes it into a permanent, immutable truth anchor. Every downstream verb (EXPERIENCE, RESONATE, STRATEGISE, OPERATE, NARRATE) reads this file before executing. If this file is wrong or shallow, every downstream output will be contaminated.

**Pipeline position**: ENTRY POINT
**Reads**: Nothing (first verb)
**Writes to**: `profile/CORE.md`
**Next step**: `/experience`

---

## Usage

```
/profile
```

---

## Step 1: Pre-Reasoning Governance (PASS) → HUMAN APPROVAL REQUIRED

Before starting, restate the user's intent back to them using the PASS framework:

- **Purpose**: Establish the foundational baseline identity of the professional.
- **Anti-Purpose**: Do NOT accept generic job titles. Do NOT allow the user to describe their company instead of their personal operating mechanism. Do NOT let them cite their LinkedIn headline as their Calling.
- **Success-Signal**: We mathematically isolate their core identity across 4 orthogonal dimensions. The output passes the "Stranger Test" (a person who has never met them should be able to reconstruct their worldview from reading it).
- **Synthesis**: Acts as the immutable truth anchor (`profile/CORE.md`) that grounds every subsequent verb in the OS.

Present the calculated PASS table and ask: *"Do you approve this execution intent?"*
**STOP AND WAIT FOR EXPLICIT HUMAN APPROVAL.**

---

## Step 2: Multi-Round Interrogation

*(Execute ONLY after PASS approval)*

Do NOT batch all questions. Ask them linearly, one at a time, waiting for each answer before asking the next. If an answer is vague, flat, or generic, push back with a follow-up before moving on.

**Round 1: The Calling**
Ask: *"What is the fundamental problem you get paid to solve? Not your job title. Not your company's mission. What breaks in the world when you are not present?"*

- If answer is generic (e.g., "I help companies grow"), push: *"What specifically breaks? Who suffers? What is the name of the failure mode you prevent?"*

**Round 2: The Origin**
Ask: *"What is the single defining moment that permanently changed how you operate? A specific project, failure, conversation, or realization that you still reference today when making decisions."*

- If answer is vague, push: *"Give me the year and the situation. What did you see that others missed? What did you lose or gain from it?"*

**Round 3: The Reason**
Ask: *"What is the philosophical principle that governs your decisions? If someone asked you to break it, what would you sacrifice rather than violate it?"*

- If answer is platitudinous (e.g., "I believe in integrity"), push: *"That is a value, not a principle. What is the actual rule you apply? What does it make you do differently from someone who doesn't hold it?"*

**Round 4: The Endurance**
Ask: *"What do you have that your closest peers do not? Not a credential. Not tenure. What is the cognitive or operational capability that has compounded over time and cannot be easily replicated?"*

---

## Step 3: Synthesis Framework (CORE)

Take their 4 answers and synthesize using the **CORE** framework. Each letter must be 3-5 rich sentences that pass the Stranger Test. Target: 80-120 words per letter.

- **[C]alling** (The problem they solve): Must name the failure mode, the victim of the failure, and the mechanism of the fix. Specific nouns, not category names.
- **[O]rigin** (The defining moment): Must include a time marker, a concrete situation, a specific realization, and a lasting behavioral change.
- **[R]eason** (The philosophical anchor): Must be actionable and falsifiable. Phrase it as a principle the user can apply to a real decision, not a value.
- **[E]ndurance** (Unique leverage): Must include a comparative claim (what peers lack), a compounding mechanism (how it grows over time), and a domain.

**Quality gate**: Before persisting, run the three tests:
1. **ALOUD**: Would this sound flat if spoken aloud? If yes, rewrite.
2. **DELETE**: Can any sentence be removed without loss? If yes, remove it.
3. **STRANGER**: Would someone with zero context understand the person's worldview? If no, add specificity.

---

## Step 4: Mandatory Persist

Save the artifact directly into the root ledger.

**File:** `profile/CORE.md`

**Header format:**
```
# [Role/Domain]: C.O.R.E. Profile

**Timestamp**: YYYY-MM-DD
**Framework**: PROFILE (C.O.R.E.)
**Domain**: [Domain (Specific Role)]
**Produced by**: /profile
**Feeds into**: /experience, /resonate, /strategise, /narrate
```

Report to the user:
- "PROFILE generated."
- "Saved to `profile/CORE.md`."
- "Audit: Does the CORE pass the Stranger Test?"
- **"Next step: Run `/experience`."**

---

> **Voice compliance**: All synthesized output MUST pass the rules in `../../VOICE_STANDARD.md` before persisting. Run `/audit --voice` if in doubt.
