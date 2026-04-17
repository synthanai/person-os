# DevOps (Platform Reliability Engineer): Experience Ledger

**Timestamp**: 2026-04-17
**Framework**: EXPERIENCE (S.T.O.R.Y.)
**Domain**: DevOps (Platform Reliability Engineer)
**Milestone**: The Black Friday Outage

---

## 📈 S.T.O.R.Y. Extraction

**[S]ituation (The Baseline Reality)**
The e-commerce platform ran on a brittle, manually scaled EC2 architecture. Every November, the entire engineering team sat in a "war room" for 72 hours straight, manually spinning up servers and tweaking load balancers to survive Black Friday traffic spikes. Burnout was 100%.

**[T]ask (The Directive)**
Design and execute a zero-touch auto-scaling architecture before Q4, ensuring that no engineer has to physically intervene during traffic surges.

**[O]bstacle (The Complexity)**
The legacy application was stateful; it stored user session data directly on the web servers. If a server died or scaled down, the user's shopping cart vanished. The development team refused to refactor the session management because it "didn't generate revenue."

**[R]esult (The Output)**
I circumvented the development team. I implemented a Redis caching layer at the infrastructure level to intercept and centralize session states without requiring the developers to rewrite the core monolith application. I then wrapped the EC2 instances in an Auto-Scaling Group governed by CPU metrics. On Black Friday, the infrastructure scaled from 10 to 40 nodes automatically. Zero dropped carts. The war room was empty. 

**[Y]ield (The Capability Gained)**
I learned that you cannot always wait for product engineers to fix architectural debt. True Platform Reliability Engineering involves building infrastructure that safely encapsulates bad application design, protecting the business while the application catches up.
