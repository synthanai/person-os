---
name: STORY Framework
description: Extracts milestone-level capability evidence using a 5-letter narrative structure. Used by /experience workflow.
---

# Skill: STORY Framework

> *"Experience is not a resume. It is a ledger of conquered complexity."*

The **STORY** framework is the canonical extraction engine for capability evidence. It takes a raw career milestone and converts it into a structured capability ledger entry with quantified outcomes and a compounding yield.

---

## Framework Letters

| Letter | Dimension | Question It Answers |
|--------|-----------|---------------------|
| **S** | Situation | What was the specific context, scale, and initial state of dysfunction or opportunity? |
| **T** | Task | What was the mandate, and who assigned it? What did success look like at the outset? |
| **O** | Obstacle | What specific human, technical, political, or resource constraint made this genuinely hard? |
| **R** | Result | What quantified corporate outcome was produced? (revenue, time, retention, risk) |
| **Y** | Yield | What permanent behavioral or cognitive capability did this episode produce? |

---

## Output Specification

Each letter: 50-80 words. The **Yield** letter is the most important and must pass two tests:
1. The capability described did NOT exist before this milestone.
2. It is specific enough to train someone else on.

**Minimum bar for Result**: One number, ratio, or comparative benchmark. "Improved" is not a Result.

---

## Anti-Patterns

| Anti-Pattern | Why It Fails |
|---|---|
| Situation with no scale | "I was working at a company" gives zero context |
| Obstacle as busyness | "It was a challenging time" is not a named antagonist |
| Result without metrics | "We delivered successfully" tells the reader nothing |
| Yield as satisfaction | "I grew a lot" is not a compounding capability |

---

## Integration

- **Produced by**: `/experience` workflow
- **Output file**: `experience/[milestone-slug].md`
- **Read by**: `/strategise`, `/narrate`
- **Example output**: See `examples/strategy-consultant/experience/post-merger-integration.md`
