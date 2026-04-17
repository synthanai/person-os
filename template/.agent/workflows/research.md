> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **EDITORIAL**: No em-dashes. Use commas, colons, or parentheses instead.

> **நூல்**: **WHY** , External signals dictate strategy. | **WHAT TYPE** , INTELLIGENCE CAPTURE | **HOW** , Interrogate → Scan & Abstract → Persist

# /research , Formalize External Intelligence

> *"Read everything, but steal deliberately."*

**RESEARCH** is the meta-intelligence verb. Unlike the 6 core persona-building verbs, RESEARCH operates on external noise and converts it into profile-specific actionable signals. It uses the Level 1 STEAL protocol but filters everything through the user's established CORE identity. Raw research without profile context is generic. Research filtered through a CORE profile is a competitive lever.

**Pipeline position**: META VERB (can be run at any stage, inputs change relevance)
**Reads**: `profile/core.md` (REQUIRED before filtering), `strategise/*.md` (recommended for relevance scoring)
**Writes to**: `research/[topic-slug].md`
**Connects to**: `/strategise` (signals update the GROWTH vector), `/narrate` (signals become content fuel)

---

## Usage

```
/research "[Topic, URL, or question]"
```

---

## Step 1: Pre-Reasoning Governance (PASS) → HUMAN APPROVAL REQUIRED

Before starting, restate the user's intent back to them using the PASS framework:

- **Purpose**: Extract high-leverage intelligence from external noise and translate it into profile-specific signals that alter the user's current strategy or content.
- **Anti-Purpose**: Do NOT output generic encyclopedic summaries. Do NOT produce a list of bullet points that could apply to any professional. We only extract what directly intersects with the user's Calling, current Obstacle, or Horizon.
- **Success-Signal**: Exactly 3 actionable signals are produced. Each signal includes: what the intelligence says, why it matters specifically to this professional, and a concrete action it unlocks in their GROWTH vector.
- **Synthesis**: Transforms external abstraction into an internal intelligence ledger (`research/[topic].md`) that directly links to the strategy or narrate artifacts it should inform.

Present PASS table and ask: *"Do you approve this execution intent?"*
**STOP AND WAIT FOR EXPLICIT HUMAN APPROVAL.**

---

## Step 2: Context Injection

*(Execute ONLY after PASS approval)*

**CRITICAL**: Read the user's foundation before executing the research:
- **Source**: `profile/core.md` (Extract the Calling and Reason to use as the filter lens)
- **Source**: `strategise/*.md` (Extract the current Obstacle and Goal — signals that do not touch these are low priority)

State explicitly: *"I am filtering [Topic/URL] through the lens of [Calling]. I am looking for signals that affect [Obstacle]."*

---

## Step 3: Synthesis Framework (STEAL Level 1)

Execute the intelligence capture using the **STEAL** framework:

- **[S]can** (Read the raw source): Consume the topic or URL completely. Do not filter yet. Capture every data point, claim, and signal present.
- **[T]ranslate** (Filter through the CORE lens): Remove everything that does not intersect with the user's Calling, current Obstacle, or Network leverage. Name the filter you are applying.
- **[E]valuate** (Quality score each signal): For each surviving signal, assess: Evidence strength (anecdotal / case study / systemic research), novelty (new information vs. confirmation of existing belief), and actionability (can the user act on this in the next 30 days?).
- **[A]bstract** (Generate exactly 3 signals): Each signal must be structured as:
  - **Signal**: The compressed intelligence in one sentence.
  - **Why it matters to [Calling]**: The specific relevance to this professional.
  - **Action unlock**: The specific action in their GROWTH vector that this signal enables, accelerates, or invalidates.
- **[L]everage** (Strategy delta): State explicitly whether this research changes anything in `strategise/*.md`. If yes, name the specific GROWTH letter it affects. If the research produced no strategy-relevant signals, flag it as a low-value input.

---

## Step 4: Mandatory Persist

**File:** `research/[topic-slug].md`

**Header format:**
```
# [Role/Domain]: Research Intelligence

**Timestamp**: YYYY-MM-DD
**Framework**: RESEARCH (S.T.E.A.L.)
**Domain**: [Domain (Specific Role)]
**Source**: [URL or Topic Name]
**Filter lens**: [Calling extracted from profile/core.md]
**Produced by**: /research
**Reads from**: profile/core.md, strategise/*.md
**Feeds into**: strategise/*.md (if strategy delta), narrate/*.md (if content fuel)
**Strategy delta**: [YES — affects [GROWTH letter] / NO]
```

Report to the user:
- "RESEARCH intelligence captured."
- "Saved to `research/[filename].md`."
- "Strategy delta: [YES/NO]. [If YES: 'Recommend updating strategise/[file].md at [GROWTH letter]']"
- "Content fuel: [YES/NO]. [If YES: 'Recommend running /narrate using Signal [N] as the [SOCIAL angle] layer']"
