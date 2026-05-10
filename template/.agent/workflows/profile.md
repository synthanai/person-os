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

## Step 3.5: Name the Ethos (Centre)

After CORE synthesis, present the CORE to the user and ask:

*"Look at your Calling, Origin, Reason, and Endurance together. What is the one word that names the pattern? The word that, if someone said it to you, you would feel seen?"*

Verify using the **Identity Resonance Check**: the person must feel genuine recognition, not just intellectual agreement. If the word feels forced, try: *"If I described you to a stranger in one word, what word would make you say 'yes, that's me'?"*

The Ethos is included as the header of `profile/CORE.md`.

---

## Step 4: Persist CORE + Ethos

Save the artifact directly into the root ledger.

**File:** `profile/CORE.md`

**Header format:**
```
# [Role/Domain]: C.O.R.E. Profile

**Ethos**: [One word]
**Timestamp**: YYYY-MM-DD
**Framework**: PROFILE (C.O.R.E.)
**Domain**: [Domain (Specific Role)]
**Produced by**: /profile
**Feeds into**: /experience, /resonate, /strategise, /narrate
```

Report to the user:
- "CORE extracted. Ethos named."
- "Saved to `profile/CORE.md`."
- "Audit: Does the CORE pass the Stranger Test?"
- **"Phase 2: Now let's build your EPIC (how you operate)."**

---

## Step 5: EPIC Extraction (Phase 2)

EPIC captures HOW the person operates: their energy, cognitive style, communication preferences, and growth direction. Ask linearly, one at a time.

**Round 5: Energy**
Ask: *"What activities give you energy? What drains you? When in the day are you sharpest, and when do you need to protect yourself from depletion?"*

- If answer is shallow ("I'm a morning person"), push: *"What specific type of work recharges you? What type of meeting leaves you empty? Is your energy pattern daily, weekly, or seasonal?"*

**Round 6: Processing**
Ask: *"When you encounter a complex new problem, what happens first in your mind? Do you draw a diagram, tell yourself a story, build a spreadsheet, find an analogy, or move your body?"*

- If answer is categorical ("I'm analytical"), push: *"That's a label, not a process. Walk me through the last hard problem you solved. What did you literally do first?"*

**Round 7: Interface**
Ask: *"How do you prefer to receive information? What formats fail for you? When you need to communicate something important, how do you send it?"*

- If answer is a platitude ("I like clear communication"), push: *"Voice note or written doc? Bullet points or narrative? Sync meeting or async thread? What makes you tune out?"*

**Round 8: Compass**
Ask: *"What is the gap you are working to close right now? And tell me about a time you made a decision that felt right in the moment but turned out wrong. What did it teach you?"*

- If answer is generic ("I want to improve my leadership"), push: *"What specific capability is the gap? And the failed decision: what pattern did it reveal about how you decide under pressure?"*

---

## Step 6: Synthesize and Persist EPIC

Take their 4 answers and synthesize using the **EPIC** framework. Each letter: 60-100 words. Must pass the STRANGER test (an AI reading this should immediately adjust its style).

- **[E]nergy** (Metabolic signature): Specific activities, rhythms, depletion triggers. Not labels.
- **[P]rocessing** (Cognitive modality): The actual first move when facing complexity. Maps, stories, numbers, analogies, movement.
- **[I]nterface** (Communication architecture): Input/output preferences, channel biases, format requirements.
- **[C]ompass** (Growth vector + failure pattern): The specific gap being closed AND the decision failure pattern that reveals blind spots.

**File:** `profile/EPIC.md`

**Header format:**
```
# [Role/Domain]: E.P.I.C. Profile

**Timestamp**: YYYY-MM-DD
**Framework**: PROFILE (E.P.I.C.)
**Domain**: [Domain (Specific Role)]
**Produced by**: /profile
**Depends on**: profile/CORE.md
**Feeds into**: /experience, /resonate, /strategise, /operate, /narrate
```

Report to the user:
- "EPIC extracted."
- "Saved to `profile/EPIC.md`."
- "Your complete identity: Ethos (centre) + CORE (why) + EPIC (how)."
- **"Next step: Run `/experience`."**

---

> **Voice compliance**: All synthesized output MUST pass the rules in `../../VOICE_STANDARD.md` before persisting. Run `/audit --voice` if in doubt.
