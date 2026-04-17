# Finance (FinOps M&A Lead): Experience Ledger

**Timestamp**: 2026-04-17
**Framework**: EXPERIENCE (S.T.O.R.Y.)
**Domain**: Finance (FinOps M&A Lead)
**Milestone**: Discovering Hidden Tech Debt

---

## 📈 S.T.O.R.Y. Extraction

**[S]ituation (The Baseline Reality)**
We were one week away from signing a Letter of Intent (LOI) to acquire a rapidly growing SaaS competitor for $80M. The traditional financial audit came back completely clean. They had 85% gross margins and zero traditional debt.

**[T]ask (The Directive)**
Conduct the final "FinOps" due diligence to verify that the target company's cloud infrastructure costs would scale linearly when we flooded them with our enterprise customer base.

**[O]bstacle (The Complexity)**
The target's CEO blocked my access to their AWS billing dashboard, claiming it was "proprietary competitive intelligence" that couldn't be shared until the deal was signed. Our CEO wanted to just trust them and push the deal through because he was afraid of losing the acquisition to a rival bidder.

**[R]esult (The Output)**
I refused to sign off. Instead of asking for the billing dashboard, I requested 10 minutes with their Lead Backend Engineer to "ask a few technical integration questions." Within 5 minutes, I discovered they hadn't implemented Auto-Scaling; they were physically provisioning massive, permanent server instances every time a new client signed on. I calculated that if we ported our 50,000 users over, their AWS bill would exceed their top-line revenue within six weeks. We walked away from the deal. They went bankrupt 8 months later.

**[Y]ield (The Capability Gained)**
I learned that the most dangerous liabilities on a balance sheet are the ones that haven't been invoiced yet. Traditional accountants cannot value technical debt. Financial Operations must exist at the intersection of capital and code.
