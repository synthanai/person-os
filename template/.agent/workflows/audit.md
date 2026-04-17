> **ONTOLOGY**: All workflows MUST reference \ for canonical term definitions.

> **EDITORIAL**: No em-dashes. Use commas, colons, or parentheses instead.

> **நூல்**: **WHY** , Drift is invisible until it is catastrophic. | **WHAT TYPE** , COMPLIANCE (measure content against editorial law) | **HOW** , Load standard → Scan → Score → Report → Remediate

# /audit , Content & Voice Compliance

> *"The mirror doesn't lie. Neither does the audit."*

**AUDIT** is the integrity verb. It takes content artifacts and measures them against the Person OS Voice Standard (`VOICE_STANDARD.md`). It does not fix — it measures. `/upgrade` or direct editing acts on the findings.

**Used to audit**: All `.md` files in `examples/`, `profile/`, `experience/`, `narrate/`, `strategise/`, `operate/`, `resonate/`.

---

## Usage

```
/audit                          # Full repo sweep (all compliance dimensions)
/audit --voice                  # Voice and editorial standard sweep only
/audit --emdash                 # Em-dash violations only
/audit --ai-markers             # Banned phrase sweep only
/audit --hooks                  # Hook sentence opener sweep only
/audit --file [path]            # Audit a single file
/audit --domain [domain-name]   # Audit a single example domain
```

---

## Step 1: Load the Standard

Read `VOICE_STANDARD.md` before executing any audit logic. Do NOT rely on memory. Load it fresh.

```bash
cat VOICE_STANDARD.md
```

---

## Step 2: Scope the Target

Determine which files to scan based on the flag:

| Flag | Scope |
|---|---|
| (none) | All `.md` files in `examples/` + `profile/` (all sub-dirs) |
| `--voice` | All `.md` files in `examples/` + `profile/` (all sub-dirs) |
| `--file [path]` | Single specified file |
| `--domain [name]` | All files in `examples/[name]/` |

---

## Step 3: Auto-Scan (Machine-Detectable Violations)

Run these checks programmatically:

```bash
# Em-dash violations
echo "=== EM-DASH SCAN ==="
grep -rn "—" [scope_dir] --include="*.md" | grep -v "VOICE_STANDARD"

# AI marker violations (batch)
echo "=== AI MARKER SCAN ==="
for phrase in "results-driven" "passionate about" "proven track record" "robust" "seamless" "transformative" "paradigm shift" "game changer" "delve into" "let's dive in" "in today's fast-paced world" "not many people talk about this" "let that sink in" "here is the thing" "this changed my life"; do
  matches=$(grep -rn "$phrase" [scope_dir] --include="*.md" -i)
  if [ -n "$matches" ]; then
    echo "BANNED: \"$phrase\""
    echo "$matches"
  fi
done

# Hook sentence starting with "I" (in narrate files)
echo "=== HOOK OPENER SCAN (narrate/ dirs) ==="
grep -rn "^\*\*Hook\*\*.*: I " [scope_dir]/narrate --include="*.md"
grep -rn "^- \*\*Hook\*\*.*: I " [scope_dir]/narrate --include="*.md"
```

---

## Step 4: Manual-Review Checklist (Human-Required Dimensions)

Some violations cannot be auto-detected. Generate a checklist for each file in scope:

For each file scanned, present:
```
[ ] ALOUD TEST: Read aloud. Does any sentence sound flat, rehearsed, or hollow?
[ ] DELETE TEST: Is every sentence load-bearing? Remove any that add nothing.
[ ] STRANGER TEST: Would someone with zero context understand the professional's worldview?
[ ] PRACTITIONER TEST: Does this sound like a senior operator? Or content performing credibility?
[ ] TRACEABILITY: Are all factual claims grounded in a prior OS artifact (CORE, STORY, GROWTH)?
```

---

## Step 5: Present the Report

```
╔══════════════════════════════════════════════════════════════╗
║  AUDIT: [Target Path]                                       ║
║  Standard: VOICE_STANDARD.md | Date: YYYY-MM-DD            ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  AUTO-DETECTABLE VIOLATIONS                                  ║
║  Em-dashes found:     [N] instances in [N] files            ║
║  AI markers found:    [N] instances ([list phrases])        ║
║  Hook "I" openers:    [N] instances in [N] files            ║
║                                                              ║
║  MANUAL-REVIEW REQUIRED                                      ║
║  [N] files queued for practitioner + traceability review    ║
║                                                              ║
║  CLEAN FILES                                                 ║
║  [N] files passed all auto-detectable checks                ║
║                                                              ║
║  REMEDIATION PRIORITY                                        ║
║  P0: [Specific violation + file + line number]              ║
║  P1: [Specific violation + file + line number]              ║
║  P2: [Manual review items queued]                           ║
╚══════════════════════════════════════════════════════════════╝
```

---

## Step 6: Offer Remediation

| Finding | Action |
|---|---|
| Em-dashes | Auto-fix: replace `—` with `, ` or `: ` depending on context. Offer to batch-apply. |
| Banned phrases | Replace one-by-one: show the offending sentence, propose replacement, wait for approval. |
| Hook "I" openers | Rewrite the Hook line using the S (Story) or C (Contrast) angle from SOCIAL. |
| Manual review items | Queue for the next working session. Save the checklist to `operations/audit/voice-[date].md`. |

---

## Step 7: Persist

Save the audit report to:
```
operations/audit/voice-YYYYMMDD-[scope].md
```

Report to the user:
- "AUDIT complete."
- "Auto-violations found: [N]."
- "Manual review items: [N]."
- "Saved to `operations/audit/[filename].md`."
- "To fix auto-violations, approve remediation per finding above."

---

## Recommended Cadence

| Trigger | Action |
|---|---|
| Before any `/narrate` output is published | `/audit --domain [your-domain]` |
| After adding a new example domain | `/audit --domain [new-domain]` |
| Monthly maintenance | `/audit` (full sweep) |
| After any `/upgrade` propagation | `/audit --voice` to confirm no drift was introduced |
