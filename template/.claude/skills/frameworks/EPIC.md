---
name: EPIC Framework
description: Extracts operational identity across 4 dimensions. Encapsulates CORE. Used by /profile workflow.
---

# Skill: EPIC Framework

> *"Your Ethos is who you are. Your CORE is why. Your EPIC is how you operate."*

The **EPIC** framework is the canonical extraction engine for operational identity. It is the outer ring of the concentric identity model, encapsulating the CORE (inner ring) and the Ethos (centre). EPIC captures HOW a person operates in the world, while CORE captures WHY they are who they are.

---

## The Concentric Identity Model

```
  ┌──────── EPIC (HOW) ────────┐
  │                              │
  │   ┌──── CORE (WHY) ────┐   │
  │   │  C  Calling          │   │
  │   │  O  Origin           │   │
  │   │  R  Reason           │   │
  │   │  E  Endurance        │   │
  │   │                      │   │
  │   │   ┌── ETHOS ──┐     │   │
  │   │   │  [1 word]  │     │   │
  │   │   └────────────┘     │   │
  │   └──────────────────────┘   │
  │                              │
  │  E  Energy                   │
  │  P  Processing               │
  │  I  Interface                │
  │  C  Compass                  │
  └──────────────────────────────┘
```

---

## Framework Letters

| Letter | Dimension | Question It Answers |
|--------|-----------|---------------------|
| **E** | Energy | What activities give you energy? What drains you? When in the day are you sharpest? |
| **P** | Processing | When you encounter a complex new problem, what happens first in your mind? Do you draw a map, tell a story, build a model, or find an analogy? |
| **I** | Interface | How do you prefer to receive information? What formats fail for you? What are your input/output asymmetries? |
| **C** | Compass | What gap are you working to close right now? When have you made a decision that felt right but turned out wrong? |

---

## Output Specification

Each letter must produce a rich paragraph of 60-100 words. Not a list. Not a summary. A paragraph that passes three quality gates:

1. **ALOUD**: Read it aloud. If it sounds flat or hollow, rewrite it.
2. **DELETE**: Remove any sentence that can be deleted without loss.
3. **STRANGER**: An AI reading this EPIC should immediately adjust its communication style, timing, and complexity level.

---

## Anti-Patterns (Do NOT produce)

| Anti-Pattern | Why It Fails |
|---|---|
| "I'm a morning person" as Energy | Too shallow. Need specific activities, rhythms, depletion triggers. |
| "I'm analytical" as Processing | Category label, not cognitive modality. Need: maps, stories, numbers, analogies? |
| "I like clear communication" as Interface | Platitude. Need: formats, channels, input/output asymmetries. |
| "I want to improve my leadership" as Compass | Generic aspiration. Need: specific gap + decision failure pattern. |

---

## The EPIC Operational Cycle

The four dimensions form a complete cycle:

```
E (Energy)     → Metabolic INPUT:  what recharges, what depletes
P (Processing) → Cognitive ENGINE: how the person thinks and learns
I (Interface)  → Relational EXCHANGE: how information flows in/out
C (Compass)    → Directional OUTPUT: growth vector, decision patterns
```

---

## Extraction Sequence

EPIC is extracted AFTER CORE. The full identity extraction sequence is:

1. Extract CORE (C, O, R, E) via `/profile` interrogation
2. Name the Ethos: "Look at your Calling, Origin, Reason, and Endurance. What one word names the pattern?"
3. Extract EPIC (E, P, I, C) via operational questions
4. Assemble the Profile Card: Ethos + CORE + EPIC

---

## Integration

- **Produced by**: `/profile` workflow (Phase 2, after CORE extraction)
- **Output file**: `profile/EPIC.md`
- **Read by**: `/experience`, `/resonate`, `/strategise`, `/operate`, `/narrate`
- **Depends on**: `profile/CORE.md` (CORE must exist before EPIC is extracted)
