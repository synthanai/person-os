---
name: CORE Framework
description: Extracts foundational professional identity across 4 orthogonal dimensions. Used by /profile workflow.
---

# Skill: CORE Framework

> *"Before the system can work for you, it must know who you are."*

The **CORE** framework is the canonical extraction engine for baseline professional identity. It is the primary skill invoked by the `/profile` workflow. It takes interrogation answers and synthesizes them into a permanent, immutable truth anchor.

---

## Framework Letters

| Letter | Dimension | Question It Answers |
|--------|-----------|---------------------|
| **C** | Calling | What failure mode do you prevent? Who suffers when you are absent? |
| **O** | Origin | What single defining moment permanently changed how you operate? |
| **R** | Reason | What philosophical principle governs your decisions? What would you sacrifice rather than violate it? |
| **E** | Endurance | What capability do your closest peers lack that you have compounded over time? |

---

## Output Specification

Each letter must produce a rich paragraph of 80-120 words. Not a list. Not a summary. A paragraph that passes three quality gates:

1. **ALOUD**: Read it aloud. If it sounds flat or hollow, rewrite it.
2. **DELETE**: Remove any sentence that can be deleted without loss.
3. **STRANGER**: A person who has never met the professional reads the CORE and can reconstruct their worldview.

---

## Anti-Patterns (Do NOT produce)

| Anti-Pattern | Why It Fails |
|---|---|
| Generic job titles as Calling | "I help companies grow" names a category, not a mechanism |
| Resume items as Origin | A list of achievements is not a defining moment |
| Values as Reason | "I believe in integrity" is a value, not an actionable principle |
| Credentials as Endurance | Tenure and certifications are not cognitive capabilities |

---

## Integration

- **Produced by**: `/profile` workflow
- **Output file**: `profile/CORE.md`
- **Read by**: `/experience`, `/resonate`, `/strategise`, `/narrate`, `/research`, `/debate`
- **Example output**: See `examples/strategy-consultant/profile/CORE.md`
