# Staff Engineer: Mechanical Skills

**Timestamp**: 2026-04-17
**Synthesized From**: OPERATE (R.H.Y.T.H.M.) + EXPERIENCE (S.T.O.R.Y.)
**Domain**: Engineering (Staff Engineer - System Architect)

---

## 🛠️ Combat Skills

### 1. Architectural Decision Records (ADRs) Enforcement
*Mechanics:* Establishing a Friday structural review where no code is merged that affects cross-system boundaries unless an ADR explicitly records *why* the architectural choice was made, what the trade-offs were, and who accepted the risk.
*Proof of Yield:* Ended the culture of "tribal engineering knowledge" during the monolith migration.

### 2. Dependency Splitting & Risk Isolation
*Mechanics:* The technical skill to draw physical API boundary lines around tangled codebases. Refactoring shared databases into isolated federated domains so that when one squad's code inevitably fails, it does not cascade and physically break the billing system.

### 3. The "No" Matrix (Feature Negotiation)
*Mechanics:* A systematic framework for rejecting the Product Manager's roadmap technically without using emotional resistance. Creating an objective matrix that proves a requested feature will introduce $X in technical debt that outweighs the $Y in projected revenue.
