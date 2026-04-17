# Staff Engineer: Social Content Protocol

**Timestamp**: 2026-04-17
**Framework**: NARRATE (S.O.C.I.A.L.)
**Domain**: Engineering (Staff Engineer - System Architect)
**Format**: LinkedIn Post
**Topic**: Why the big rewrite always fails.
**Produced by**: /narrate
**Reads from**: profile/core.md, experience/*.md, strategise/*.md, operate/*.md
**Status**: Draft (ready for human review before publication)

---

## 📢 H.S.P. Pipeline

**Hook, Suspense, Punch (H.S.P.)** *(alternatively: High-Signal Packaging)*

- **Hook**: We spent 14 months and $2.4M rewriting a system that was already working. Then we rolled it back and did it the boring way I had originally proposed. It took 11 more months. Zero production incidents.
- **Suspense**: The CTO who approved the rewrite was not incompetent. He was responding to a real problem — a 400,000-line monolith with 23% test coverage — with the most emotionally satisfying solution available, which is also consistently the wrong one.
- **Punch**: There is exactly one safe way to replace a production system that is actively serving customers: kill it slowly. The strangler fig pattern is not glamorous engineering. It is the engineering equivalent of removing a load-bearing wall while people are still living in the house.

---

## 📱 Full Draft: LinkedIn Post

Every engineering team has a version of this story.

The system is old. The codebase is archaeology. The two engineers who understood the payment service left 18 months ago. Every sprint, the team ships features into a system they are increasingly afraid of, and the fear compounds.

So someone in leadership says the thing that sounds like the solution:

"We're going to rewrite it."

The engineering team gets excited. The CTO gets a clean narrative for the board. The Product team starts planning the features that will be possible after the rewrite. The timeline is aggressive but technically believable if you squint at it.

Six months later, the timeline has slipped. The new system is 60% complete and not yet handling any production traffic. The team that built it has turned over twice because the deadline pressure is unsustainable. The old system is still serving 100% of your customers and is more fragile than ever because nobody wants to touch it — any change might break something you will have to debug in code you were supposed to have deleted six months ago.

This is not bad luck. This is the predictable physics of attempting to replace a production system with a competing production system while both are running in parallel.

I have watched this failure mode unfold at three different companies. I proposed the same alternative each time. I was overruled twice. The third time, I had the scar tissue from the previous two to make the argument more concretely, and I won.

The alternative is the strangler fig.

You do not replace the system. You incrementally route traffic away from it, service by service, endpoint by endpoint, starting with the lowest-risk components and ending with the highest. At no point is the new system responsible for traffic it has not already proven it can handle. At no point do you have a binary cutover moment. At no point does the entire engineering organization hold its breath while someone types a deployment command.

It is slower. It is significantly less satisfying. The engineers do not get a greenfield project with the newest stack. They get to work inside the constraints of a system they are simultaneously replacing and cannot break.

It is also the only method that has a consistent track record of actually finishing.

The engineering industry has a romance with the clean start. It is a cargo cult. The companies that build durable technical systems are the ones that learn to improve incrementally under load, not the ones that periodically detonate their architecture and rebuild it from first principles.

The most technically impressive thing I have done in my career was not an architectural design I am proud of. It was the decision to roll back a $2.4M rewrite, document exactly why it failed, and spend 11 months doing it the unglamorous way.

The system has had zero customer-facing incidents in three years. The ADR is still the first document I give new engineers who join the team.

Heroic engineering is a symptom of a broken system. Boring engineering is the goal.
