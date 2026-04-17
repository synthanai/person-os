# Person OS: Examples Index

**Last Updated**: 2026-04-17
**Total Domains**: 11
**Control Plane (Profile Meta-Files)**: 5 complete, 6 pending

This index maps all 11 example domains to their constituent artifacts. Use this file to navigate the library or to identify which domains are fully synthesized into the Control Plane.

---

## Pentagon Sequence (Full Control Plane)

The following 5 domains represent the core corporate survival pillars. Each has full `profile/` synthesis (CAPABILITIES + SKILLS + PATTERNS + PERSONALITY).

| Domain | Role | CORE | STORY | SOCIAL | Control Plane | Presentation |
|--------|------|------|-------|--------|---------------|--------------|
| ♟️ Strategy | [strategy-consultant/](strategy-consultant/) | [core.md](strategy-consultant/profile/core.md) | [post-merger-integration.md](strategy-consultant/experience/post-merger-integration.md) | [entropy-in-scale.md](strategy-consultant/narrate/entropy-in-scale.md) | ✅ Complete | Slide 16.5 |
| 🏛️ Culture | [executive-coo/](executive-coo/) | [core.md](executive-coo/profile/core.md) | *(experience files)* | [founder-vision-trap.md](executive-coo/narrate/founder-vision-trap.md) | ✅ Complete | Slide 29.5 Hub |
| ⚙️ Engineering | [staff-engineer/](staff-engineer/) | [core.md](staff-engineer/profile/core.md) | *(experience files)* | [big-bang-rewrite.md](staff-engineer/narrate/big-bang-rewrite.md) | ✅ Complete | Slide 29.5 Matrix |
| 📈 Growth | [enterprise-ae/](enterprise-ae/) | [core.md](enterprise-ae/profile/core.md) | *(experience files)* | *(narrate files)* | ✅ Complete | — |
| 📦 Operations | [supply-chain-director/](supply-chain-director/) | [core.md](supply-chain-director/profile/core.md) | *(experience files)* | *(narrate files)* | ✅ Complete | — |

---

## Extended Library (Control Plane Pending)

| Domain | Role | CORE | STORY | Network | Strategy | Ops | Social |
|--------|------|------|-------|---------|----------|-----|--------|
| 🧪 Testing | [qa-architect/](qa-architect/) | [core.md](qa-architect/profile/core.md) | ✅ | ✅ | ✅ | ✅ | ✅ |
| 🔧 DevOps | [devops-pre/](devops-pre/) | [core.md](devops-pre/profile/core.md) | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📱 Product | [product-gpm/](product-gpm/) | [core.md](product-gpm/profile/core.md) | ✅ | ✅ | ✅ | ✅ | ✅ |
| 🎨 Design | [ux-systems-lead/](ux-systems-lead/) | [core.md](ux-systems-lead/profile/core.md) | ✅ | ✅ | ✅ | ✅ | ✅ |
| 📣 Marketing | [growth-hacker/](growth-hacker/) | [core.md](growth-hacker/profile/core.md) | ✅ | ✅ | ✅ | ✅ | ✅ |
| 💰 Finance | [finops-ma-lead/](finops-ma-lead/) | [core.md](finops-ma-lead/profile/core.md) | ✅ | ✅ | ✅ | ✅ | ✅ |

---

## Artifact Structure (Per Domain)

Each example domain follows this directory structure, produced sequentially by the workflow pipeline:

```
[domain]/
├── profile/
│   ├── core.md                   ← /profile output (C.O.R.E.)
│   ├── CAPABILITIES.md           ← Control Plane synthesis
│   ├── SKILLS.md                 ← Control Plane synthesis
│   ├── PATTERNS.md               ← Control Plane synthesis
│   └── PERSONALITY.md            ← Control Plane synthesis
├── experience/
│   └── [milestone-slug].md       ← /experience output (S.T.O.R.Y.)
├── resonate/
│   └── [node-slug].md            ← /resonate output (N.E.T.W.O.R.K.)
├── strategise/
│   └── [vector-slug].md          ← /strategise output (G.R.O.W.T.H.)
├── operate/
│   └── [rhythm-slug].md          ← /operate output (R.H.Y.T.H.M.)
├── narrate/
│   └── [broadcast-slug].md       ← /narrate output (S.O.C.I.A.L. + H.S.P.)
├── research/                     ← /research outputs (S.T.E.A.L.) — populated on demand
└── debate/                       ← /debate outputs (S.P.A.R.) — populated on demand
```

---

## Contributing a New Domain

To add a new example domain to the library:
1. Copy the `template/` directory structure to `examples/[your-domain]/`
2. Run `/profile` and work through the full pipeline: experience → resonate → strategise → operate → narrate
3. Update this INDEX.md with the new domain entry
4. If the domain represents a significant corporate function not covered, propose addition to the Pentagon Sequence via a pull request with supporting rationale
