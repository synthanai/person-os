Run a voice and editorial compliance audit against the Person OS content.

## Instructions

Read `VOICE_STANDARD.md` at the project root before running any checks.

**Step 1: Scope check**
If the user passed a flag, scope accordingly:
- `--voice` or no flag: all `.md` files in `examples/` + profile directories
- `--emdash`: em-dash scan only
- `--ai-markers`: banned phrase scan only
- `--file [path]`: single file
- `--domain [name]`: all files in `examples/[name]/`

**Step 2: Auto-detectable scans — run all three**

Em-dash scan:
```bash
grep -rn "—" examples/ --include="*.md" | grep -v "VOICE_STANDARD"
```

AI markers scan (check each phrase from Rule 2 of VOICE_STANDARD.md):
```bash
for phrase in "results-driven" "passionate about" "proven track record" "robust" "seamless" "transformative" "paradigm shift" "game changer" "delve into" "let's dive in" "in today's fast-paced world" "not many people talk about this" "let that sink in" "here is the thing" "this changed my life" "unlock" "leverage"; do
  grep -rni "$phrase" examples/ --include="*.md"
done
```

Hook opener scan (in narrate/ files):
```bash
grep -rn "^\*\*Hook\*\*" examples/*/narrate --include="*.md"
```

**Step 3: Manual review checklist**
For each file in scope, present:
```
[ ] ALOUD: Flat if spoken aloud?
[ ] DELETE: Any redundant sentences?
[ ] STRANGER: Zero-context comprehension?
[ ] PRACTITIONER: Senior operator voice, not content-creator voice?
[ ] TRACED: All factual claims grounded in a prior OS artifact?
```

**Step 4: Report**
Show all violations with file path + line number. Offer to fix em-dashes and AI markers inline (with approval per replacement).

**Step 5: Save report**
Write findings to `operations/audit/voice-YYYYMMDD.md`.
