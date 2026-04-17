> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **EDITORIAL**: No em-dashes. Use commas, colons, or parentheses instead.

> **நூல்**: **WHY** , To be governed is to control the broadcast. | **WHAT TYPE** , GENERATIVE (external messaging) | **HOW** , Read Everything → Ask Format → Synthesize → Persist

# /narrate , Generate Outbound Broadcasts

> *"You are not your job title. You are the vector of your capability."*

**NARRATE** is the sixth and final verb in the PERSON OS pipeline. It reads the full internal memory ledger and translates it into high-fidelity external messaging. The defining principle: every sentence in the output must be traceable to a specific entry in the user's `profile/`, `experience/`, `strategise/`, or `operate/` files. If it cannot be traced, it is generic hallucination and must be removed.

**Pipeline position**: VERB 6 of 6 (Terminal Output)
**Reads**: `profile/CORE.md`, `experience/*.md`, `strategise/*.md`, `operate/*.md` (ALL REQUIRED)
**Writes to**: `narrate/[broadcast-slug].md`
**Previous step**: `/operate`
**Next step**: Ship externally (LinkedIn, bio, investor pitch, executive introduction)

---

## Usage

```
/narrate
```

---

## Step 1: Pre-Reasoning Governance (PASS) → HUMAN APPROVAL REQUIRED

Before starting, restate the user's intent back to them using the PASS framework:

- **Purpose**: Translate the full internal memory ledger into an outbound, high-fidelity external broadcast. Every claim must be traceable to a prior artifact.
- **Anti-Purpose**: Do NOT generate content that contradicts the foundational identity, relies on generic business jargon, or resorts to vague value statements ("results-driven," "passionate about"). Do NOT start from scratch. Read everything first.
- **Success-Signal**: The finished broadcast passes the "Stranger-in-a-Room" test: a person who has never met the user reads it and can describe, with specificity, what the user does, what they have done, what makes them different, and what they are building toward.
- **Synthesis**: The output artifact (`narrate/[broadcast].md`) is the terminal translation of the entire OS cycle into external expression.

Present PASS table and ask: *"Do you approve this execution intent?"*
**STOP AND WAIT FOR EXPLICIT HUMAN APPROVAL.**

---

## Step 2: Context Injection

*(Execute ONLY after PASS approval)*

**CRITICAL**: Read the full suite before generating a single word of output:
- **Source**: `profile/CORE.md` (Calling, Origin, Voice)
- **Source**: `experience/*.md` (Proof of capability, specific milestones, quantified yields)
- **Source**: `strategise/*.md` (Current vector, sacrifice, horizon)
- **Source**: `operate/*.md` (Daily rhythms, mechanism, kill criteria)

Then ask the user: *"What is the broadcast format? Choose one: LinkedIn post, LinkedIn bio (About section), executive introduction (spoken), investor pitch (90 seconds), speaking bio (third-person), or cold outreach message."*

---

## Step 3: Format-Specific Interrogation

**If LinkedIn Post:**
Ask: *"What is the specific topic or trigger? A recent milestone, a hard lesson, a contrarian view, a behind-the-scenes pattern from your operate rhythms?"*

**If LinkedIn Bio / About Section:**
Ask: *"Who is the target reader of your profile? A recruiter? A potential client? A peer trying to assess you? This changes the emphasis."*

**If Investor Pitch / Executive Introduction:**
Ask: *"What is the specific room you are walking into? What do they already know about your space? What specific credibility gap are you trying to close in 90 seconds?"*

---

## Step 4: Synthesis Framework (SOCIAL + H.S.P.)

Using the full memory ledger, generate the broadcast using the **SOCIAL** protocol, then structure the final output using the **H.S.P. (Hook, Suspense, Punch)** framework.

**SOCIAL Protocol** (use all 6 angles to mine the ledger, even if you only deploy some in the final output):
- **[S]tory** (The capability ledger): Pull from `experience/*.md`. The most concrete, specific, evidence-based narrative.
- **[O]perations** (The mechanical truth): Pull from `operate/*.md`. The specific rhythms, rituals, and mechanisms that make their work distinctive.
- **[C]ontrast** (The reality check): Pull from `profile/CORE.md` [Reason]. The adversarial worldview. What the market gets wrong, and what the user does instead.
- **[I]nstruction** (The value extraction): The specific, replicable tactic the reader can act on. Rooted in `experience/` [Yield].
- **[A]dversarial** (The kill criteria / wedge): Pull from `profile/CORE.md` [Calling]. The specific thing the user is against, the enemy of their philosophy.
- **[L]egacy** (The anchor): Pull from `strategise/` [Horizon]. The long-term bet. The thing they are building whether or not the market validates it immediately.

**H.S.P. Framework** (the final packaging):
- **Hook**: One sentence that names the most counterintuitive or emotionally resonant truth available in the SOCIAL mine. Must create cognitive dissonance or specific curiosity. Do NOT start with "I."
- **Suspense**: The second layer that deepens the tension the Hook created. Adds specificity: a number, a named failure mode, a vivid contrast. Must make the reader lean forward.
- **Punch**: The resolution. The thing the user uniquely does, knows, or has proven. Must be traceable to `experience/` [Yield]. Ends with a forward momentum signal (what they are building, not just what they have done).

**Quality gates (MANDATORY — read `../../VOICE_STANDARD.md` before applying):**

1. **Em-dash check**: No `—` anywhere. Replace with comma, colon, or parenthesis.
2. **AI marker purge**: See `VOICE_STANDARD.md` Rule 2 for the full banned phrase list.
3. **Traceability**: Every factual claim maps to a prior artifact. Flag any untraced claim.
4. **Practitioner test**: Does this sound like a senior operator or a language model? Rewrite if the latter.
5. **Three Tests**: ALOUD (flat if spoken?), DELETE (redundant sentences?), STRANGER (zero-context comprehension?).

---

## Step 5: Mandatory Persist

**File:** `narrate/[broadcast-slug].md`

**Header format:**
```
# [Role/Domain]: Social Content Protocol

**Timestamp**: YYYY-MM-DD
**Framework**: NARRATE (S.O.C.I.A.L.)
**Domain**: [Domain (Specific Role)]
**Format**: [LinkedIn Post / Bio / Pitch / Introduction]
**Topic**: [One-line description of the broadcast's subject]
**Produced by**: /narrate
**Reads from**: profile/CORE.md, experience/*.md, strategise/*.md, operate/*.md
**Status**: Draft (ready for human review before publication)
```

Report to the user:
- "NARRATE broadcast generated."
- "Saved to `narrate/[filename].md`."
- "Traceability check: [PASS / FLAG — list any untraced claims]"
- "Generic purge: [CLEAN / FLAG — list any purged terms]"
- "Status: Draft. Review before publishing."
