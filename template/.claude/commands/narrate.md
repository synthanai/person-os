Generate external-facing content using the full OS memory ledger.

## Pre-check

Read these files before generating a single word of output:
- `profile/CORE.md`
- `experience/*.md`
- `strategise/*.md`
- `operate/*.md`

If `profile/CORE.md` does not exist, stop and say: "Run /profile first. /narrate cannot generate credible content without a CORE."

## Instructions

You are running the NARRATE verb. Read `.claude/skills/frameworks/SOCIAL_HSP.md` for the full framework specification.

**Step 1: Ask the format**
"What are we creating? LinkedIn post, LinkedIn bio (About section), executive introduction, investor pitch (90 seconds), or cold outreach message?"

**Step 2: Ask the angle (if LinkedIn post)**
"What is the specific trigger or topic? A recent milestone, a hard lesson, a contrarian view from your profile?"

**Step 3: Generate**
Mine the OS ledger using all 6 SOCIAL angles (even if you only deploy 2-3 in the final output). Then structure the output using H.S.P.:
- Hook: One sentence. No "I" opener. Counterintuitive or emotionally resonant.
- Suspense: Adds a number, named failure, vivid contrast.
- Punch: Resolution traceable to experience/*.md [Yield]. Forward momentum signal.

**Step 4: Quality gates (apply silently before showing output)**
1. Traceability: every factual claim traces to a prior artifact
2. Generic purge: no banned phrases (full list in .claude/skills/frameworks/SOCIAL_HSP.md)
3. Aloud test: read it aloud — rewrite any hollow sentence
4. AI smell check: does this sound like a senior practitioner or a language model? Rewrite if the latter.

## Save

Write to `narrate/[slug].md` with header:
```
Status: Draft (review before publishing)
```

Say: "NARRATE output generated. Saved to narrate/[filename].md. Review before publishing."
