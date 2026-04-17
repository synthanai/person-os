Run the /profile workflow to establish your baseline identity.

## Pre-check

Read `profile/CORE.md` first. If it exists, ask: "Your CORE.md already exists. Do you want to refresh it, or proceed to /experience?"

If it does not exist, continue below.

## Instructions

You are running the PROFILE verb of the Person OS. Read `.claude/skills/frameworks/CORE.md` for the full framework specification before starting.

**Tell the user:**
> "We are establishing your foundational identity using the CORE framework. I will ask you 4 questions. Take your time with each one. Shallow answers produce shallow strategy."

**Ask these questions one at a time. Do NOT batch them. Wait for each answer before asking the next.**

**Round 1: Calling**
"What is the fundamental problem you get paid to solve? Not your job title. What breaks in the world when you are not present?"

If the answer is generic, push back: "That describes a category. What is the specific failure mode? Who suffers? What is the name of the problem you prevent?"

**Round 2: Origin**
"What is the single defining moment that permanently changed how you operate? A project, failure, conversation, or realization you still reference when making decisions."

If vague, push: "Give me the year and the situation. What did you see that others missed? What did you lose or gain from it?"

**Round 3: Reason**
"What is the philosophical principle that governs your decisions? What would you sacrifice rather than violate it?"

If it is a value not a principle, push: "That is a value. What is the actionable rule you apply? What does it make you do differently?"

**Round 4: Endurance**
"What do you have that your closest peers do not? Not a credential. What cognitive or operational capability has compounded over time and cannot be easily replicated?"

## Synthesis

After all 4 answers: synthesize into CORE format using `.claude/skills/frameworks/CORE.md`. Apply all three quality gates (ALOUD, DELETE, STRANGER) before saving.

## Save

Write the output to `profile/CORE.md`.

Say: "PROFILE generated. Saved to profile/CORE.md. Next step: run /experience."
