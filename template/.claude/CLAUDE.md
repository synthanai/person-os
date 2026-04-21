# Person OS — Claude Code Configuration

This file configures Claude Code (claude.ai/code) to operate the Person OS pipeline natively via slash commands.

## What is Person OS?

Person OS is a 16-verb professional intelligence system. Each verb extracts, synthesizes, or broadcasts a different layer of your professional architecture.

**Complete pipeline:**
```
/person → /profile → /experience → /resonate → /strategise → /operate → /narrate
```
**Meta verbs (run at any stage):**
```
/steal "[topic]"
/spar "[decision]"
/recall "[topic]"
/distill "[source]"
/forge "[artifact type]"
/frame "[concept] --as [audience]"
/audit "[target]"
/prune "[domain]"
/upgrade "[change specification]"
/intent "[goal]"
```

## Project Structure

```
[your-name]/
├── profile/
│   └── CORE.md              ← /profile output. The OS identity anchor.
├── experience/
│   └── [milestone].md       ← /experience outputs. Capability evidence.
├── resonate/
│   └── [node].md            ← /resonate outputs. Network leverage maps.
├── strategise/
│   └── [vector].md          ← /strategise output. Attack vector + sacrifice.
├── operate/
│   └── [rhythm].md          ← /operate outputs. Daily execution rhythms.
├── narrate/
│   └── [broadcast].md       ← /narrate outputs. External content drafts.
├── steal/                   ← /steal outputs (on demand)
├── spar/                    ← /spar outputs (on demand)
└── operations/              ← Systemic meta-verb outputs (on demand)
```

## Framework Skills

The OS uses 6 canonical frameworks. Each is documented in `.claude/skills/frameworks/`:

| Framework | Workflow | Output |
|-----------|----------|--------|
| CORE | /profile | profile/CORE.md |
| STORY | /experience | experience/*.md |
| NETWORK | /resonate | resonate/*.md |
| GROWTH | /strategise | strategise/*.md |
| RHYTHM | /operate | operate/*.md |
| SOCIAL + H.S.P. | /narrate | narrate/*.md |

## Voice & Quality Standards

**Canonical standard**: `../../VOICE_STANDARD.md` — read this before generating any content artifact.

Key rules (see the full list in `VOICE_STANDARD.md`):
- Write like a senior practitioner explaining something to peers: direct, grounded, experiential
- No em-dashes (`—`). Use commas, colons, or parentheses
- No AI markers (full list in `VOICE_STANDARD.md` Rule 2)
- Never start a Hook with "I"
- Every factual claim must trace to a prior OS artifact
- Apply the Three Tests before finalizing: ALOUD, DELETE, STRANGER

**Audit**: Run `/audit --voice` at any time to sweep for violations.

## Examples

See `../../examples/INDEX.md` for 11 domain-specific example profiles demonstrating real OS outputs.
