# Richard Brief

## What This Repository Is

This repository is the MVP workspace for **Elite20 Builder Program / NSEAP**.

It is not intended to be a complete LMS at this stage.

It is designed to make the Builder workflow executable first, then gradually grow into a reference implementation of an agent-native learning operating system.

## Core Interpretation

Based on the provided materials, the core direction is:

```text
Challenge
-> Situation
-> Ontology
-> Workflow
-> Skill
-> Task Agent
-> Evaluation
-> Knowledge Growth
```

This means every Challenge should eventually produce reusable system assets, not only student homework.

## What Has Been Built

### 1. Builder Workflow Layer

Files:

- `docs/workflow.md`
- `challenges/challenge-template.md`
- `challenges/rubric-template.md`
- `challenges/submission-template.yaml`
- `.github/ISSUE_TEMPLATE/`
- `reviews/evaluation-report-template.md`

Purpose:

Make Challenge publishing, GitHub submission, peer review, agent review, documentation, and release repeatable.

### 2. FDE Methodology Layer

Files:

- `methodology/situation-to-agent.md`
- `methodology/fde-builder-workflow.md`
- `methodology/skill-construction-framework.md`
- `methodology/kstar-learning-loop.md`

Purpose:

Translate the Tech Discussions direction into a Builder method:

```text
Situation -> Context -> Ontology -> Workflow -> Skill -> Task Agent -> Evaluation
```

### 3. Ontology Layer

Files:

- `ontology/course-ontology.md`
- `ontology/skill-ontology.md`
- `ontology/challenge-ontology.md`
- `ontology/project-ontology.md`
- `ontology/assessment-ontology.md`

Purpose:

Start mapping Course, Skill, Challenge, Project, and Assessment into a shared semantic structure.

### 4. Agent Interface Layer

Files:

- `agents/manifests/project-manager-agent.manifest.yaml`
- `agents/manifests/coding-coach-agent.manifest.yaml`
- `agents/manifests/evaluation-agent.manifest.yaml`

Purpose:

Move the first three Agents from prompt-only descriptions toward manifest-based interface definitions.

### 5. End-to-End Example

Files:

- `examples/challenge-to-cognitive-cell-case/`

Purpose:

Show how one Challenge can become a Cognitive Cell with Situation, Context, Ontology, Workflow, Skills, Agent, Evaluation Report, and Knowledge Capture.

## Mapping To Richard Reference Documents

| Richard Material | Repository Response |
|---|---|
| Elite20 Builder Program | Builder workflow, team-oriented Challenge production, GitHub collaboration |
| Cognitive Cell | Challenge-to-Cognitive-Cell example, ontology, agent manifests |
| Tech Discussions | Situation-to-Agent methodology, Skill construction, KSTAR loop |
| Adaptive Agent Model Framework | Agent + ontology + evaluation architecture |
| Educational Knowledge Graph draft | Course / Skill / Challenge / Assessment ontology drafts |
| LLM Agent Interface draft | Agent manifests and future message/session/interface direction |

## Where To Look First

Recommended reading order:

1. `README.md`
2. `standards/standards-mapping.md`
3. `methodology/situation-to-agent.md`
4. `examples/challenge-to-cognitive-cell-case/README.md`
5. `agents/manifests/evaluation-agent.manifest.yaml`

## Current Status

This is an MVP reference workspace.

It has:

- templates
- methodology
- ontology drafts
- agent manifests
- one end-to-end example

It does not yet have:

- automated GitHub Actions
- executable agent runtime
- full knowledge graph schema
- full LMS or dashboard

## Proposed Next Step

Use the `challenge-to-cognitive-cell-case` as the first validation case.

Then build two more cases:

1. Coding Coach Agent case
2. Project Manager Agent case

After three cases, extract stable schemas for:

- Challenge
- Skill
- Cognitive Cell
- Evaluation Report
- Agent Manifest

