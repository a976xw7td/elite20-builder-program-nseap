# Elite20 / NSEAP 二期建设任务与分工说明

## 0. 结论先行

二期要做的不是重新上一遍 Elite20 课程，也不是简单整理课件或提交作业。

二期的核心任务是：

> 把一期 Elite20 / AI+X 实验班探索出来的课程、Challenge、Agent、项目、知识和协作机制，重构成一套可复用、可部署、可持续演化的 NSEAP AI Learning Operating System MVP。

更直白地说，二期要交付的是一套系统，而不是一组零散材料。

这套系统至少包含七类核心模块：

1. Curriculum / Course：课程体系
2. Challenge Library：挑战库
3. Learning Platform：学习平台
4. Agent Library：智能体库
5. Ontology Structure：本体结构
6. Knowledge Base：知识库
7. Demo / Presentation：展示与传播

当前 GitHub 主仓库：

https://github.com/a976xw7td/elite20-builder-program-nseap

主仓库是二期 Builder Program 的统一协作、提交、评审和沉淀入口。

## 1. 二期到底要做什么

根据 Richard 的要求，二期项目的目标可以概括为：

```text
重新构建一门 AI Native 课程
并把它产品化、系统化、可复制化
```

项目结束后，希望任何学校、企业或培训机构只需要部署这套系统，就可以运行类似课程。

因此，二期不是单纯产出：

- PPT
- 作业
- 课堂笔记
- 零散代码

而是要沉淀：

- 课程体系
- Challenge Catalog
- Agent Library
- Ontology
- Knowledge Base
- GitHub 协作流程
- 评审机制
- 部署与演示材料

## 2. 二期包含哪些内容

### 2.1 Course / Curriculum

目标：重构课程本身。

包括：

- Syllabus
- Learning Objectives
- Weekly Plan
- Lecture Notes
- Slides
- Labs
- Assignments

### 2.2 Challenge Library

目标：把一期的挑战式学习机制系统化。

包括：

- Challenge Catalog
- Challenge Template
- Rubrics
- Evaluation
- Builder Edition Challenge

每个 Challenge 不只是“完成作业”，而是要尽量沉淀成：

- Skill
- Task Agent
- Knowledge Base 条目
- Ontology 更新
- 可复用示例

### 2.3 Learning Platform

目标：搭建课程运行和协作平台。

包括：

- GitHub Organization / Repository
- Website
- LMS
- Documentation Portal
- Deployment
- Dashboard

现阶段不急于先做完整 LMS，优先把 GitHub 协作流程跑通。

### 2.4 Agent Library

目标：为课程开发可复用 Agent。

包括：

- Student Companion
- Instructor / Tutor
- Reviewer
- Project Manager
- Evaluation Agent
- Coding Coach
- Knowledge Librarian

第一阶段优先：

- Project Manager Agent
- Coding Coach Agent
- Evaluation Agent

### 2.5 Ontology Structure

目标：建立课程、技能、挑战、项目、评估之间的语义结构。

包括：

- Course Ontology
- Skill Ontology
- Challenge Ontology
- Project Ontology
- Assessment Ontology
- Learning Ontology
- Knowledge Graph

### 2.6 Knowledge Base

目标：把课程资料、优秀代码、最佳实践、Prompt、FAQ、项目案例沉淀为统一知识库。

包括：

- Documentation
- Tutorial
- Prompt Library
- Video
- Best Practice
- FAQ
- Project Cases

### 2.7 Demo / Presentation

目标：让二期成果可以被展示、传播和复用。

包括：

- Demo Website
- Demo Video
- Presentation
- Promotion Materials
- Showcase

## 3. 七个 Builder Team 分工

根据 Richard 的原始设计，二期建议分为七个 Builder Team。

| Team | 负责内容 | 主要输出 | GitHub 目录 |
|---|---|---|---|
| Team 1 Curriculum Team | 重新设计课程 | Syllabus、Lecture、Slides、Labs、Assignments | `teams/curriculum-team/` |
| Team 2 Challenge Team | 设计所有 Challenge | Challenge Catalog、Rubrics、Evaluation | `teams/challenge-team/` |
| Team 3 Agent Team | 开发课程 Agent | Companion、Tutor、Reviewer、Project Manager、Evaluation | `teams/agent-team/` |
| Team 4 Ontology Team | 建立本体和知识图谱 | Skill Ontology、Learning Ontology、Knowledge Graph | `teams/ontology-team/` |
| Team 5 Platform Team | 平台与部署 | GitHub、Website、LMS、Deployment | `teams/platform-team/` |
| Team 6 Knowledge Team | 知识沉淀 | Documentation、Tutorial、Prompt Library、Video、Best Practice | `teams/knowledge-team/` |
| Team 7 Demo Team | 演示与传播 | Website Demo、Demo Video、Presentation、Promotion | `teams/demo-team/` |

## 4. 当前接龙任务归类

根据当前接龙信息，任务可以先按七个 Builder Team 归类如下。

### Team 1 Curriculum Team

| 成员 | 模块 | 时间 |
|---|---|---|
| 张浩 | Team 1 Curriculum | 7/1 |

### Team 2 Challenge Team

| 成员 | 模块 | 时间 |
|---|---|---|
| 刘婷婷 | Challenge Library | 7/1 |
| 史雨萱 | Challenge Library | 7/4 |

### Team 3 Agent Team

| 成员 | 模块 | 时间 |
|---|---|---|
| 冯静雯 | Agent Library | 7/1 |
| 张照航 | Agent Library | 7/3 |
| 陈万康 | Agent Library | 7/1 |

### Team 4 Ontology Team

| 成员 | 模块 | 时间 |
|---|---|---|
| Richard | Ontology Structure | 6/30 |

### Team 5 Platform Team

| 成员 | 模块 | 时间 |
|---|---|---|
| 吴嘉宇 | Learning Platform | 7/1 |
| 牛保康 | Learning Platform | 7/1 |

### Team 6 Knowledge Team

| 成员 | 模块 | 时间 |
|---|---|---|
| 尹镇宇 | Knowledge Base Building | 7/1 |

### Team 7 Demo Team

| 成员 | 模块 | 时间 |
|---|---|---|
| 暂未明确 | Demo / Presentation | 待定 |

## 5. GitHub 提交方式

当前建议：

```text
一个共享主仓库
+ 七个 Team 工作区
+ 可选个人/小组工作仓库
+ 最终必须登记回主仓库
```

### 5.1 文档、模板、方案类内容

如果模块主要是：

- 文档
- 模板
- 方案
- Prompt
- Ontology
- Rubric
- Agent 说明
- Challenge 设计

建议直接提交到主仓库对应 Team 文件夹。

例如：

```text
teams/challenge-team/challenge-catalog/
teams/ontology-team/skill-ontology/
teams/knowledge-team/prompt-library/
```

### 5.2 独立可运行项目

如果模块是：

- 网站
- Agent 服务
- LMS 原型
- 可运行工具
- 独立代码项目

可以自己建工作仓库。

但必须在主仓库对应 Team 目录下登记：

```text
项目名称
负责人 / 成员
仓库链接
Demo 链接
当前状态
和 NSEAP 的关系
Review 状态
下一步计划
```

### 5.3 推荐统一说法

```text
主仓库作为统一提交和沉淀入口。

文档、模板、方案、Prompt、Ontology、Rubric 等内容，可以直接提交到对应 team 文件夹。

独立可运行项目可以自己建工作仓库，但需要回到主仓库登记链接、说明、状态和下一步。

也就是说：可以自己建仓库干活，但最终要回到主仓库登记和接受 Review。
```

## 6. 每个组本周最小交付建议

### Team 1 Curriculum Team

本周最小交付：

- `syllabus/README.md`
- `weekly-plan/week-01.md`
- `learning-objectives.md`

重点回答：

- 课程要培养什么能力？
- Week 1 如何让老师能直接授课？
- 每周如何连接 Challenge？

### Team 2 Challenge Team

本周最小交付：

- `challenge-catalog/README.md`
- `challenge-catalog/C01.md`
- `rubrics/default-rubric.md`

重点回答：

- 一期 C1-C10 如何整理成二期 Challenge Catalog？
- 每个 Challenge 如何成为 Skill / Agent 的生产单元？
- Rubric 如何统一？

### Team 3 Agent Team

本周最小交付：

- `evaluation-agent/README.md`
- `coding-coach-agent/README.md`
- `project-manager-agent/README.md`

重点回答：

- Agent 服务什么 Situation？
- 输入输出是什么？
- 能力边界是什么？
- 和 Challenge / Rubric / GitHub 如何连接？

### Team 4 Ontology Team

本周最小交付：

- `skill-ontology/README.md`
- `learning-ontology/README.md`
- `knowledge-graph/README.md`

重点回答：

- Course、Skill、Challenge、Project、Assessment 如何关联？
- 哪些字段需要结构化？
- 后续如何形成 JSON Schema / Knowledge Graph？

### Team 5 Platform Team

本周最小交付：

- `github/README.md`
- `website/README.md`
- `deployment/README.md`

重点回答：

- GitHub 如何作为正式提交入口？
- Website / LMS / Docs Portal 的最小版本是什么？
- 可运行项目如何登记和部署？

### Team 6 Knowledge Team

本周最小交付：

- `documentation/README.md`
- `prompt-library/README.md`
- `best-practices/README.md`

重点回答：

- 一期资料如何分类？
- AI 日志、Prompt、踩坑、优秀作业如何沉淀？
- Knowledge Base 如何为 Agent 提供上下文？

### Team 7 Demo Team

本周最小交付：

- `presentation/README.md`
- `demo-video/README.md`
- `promotion/README.md`

重点回答：

- 二期成果如何展示？
- 谁是观众？
- Demo 如何体现 NSEAP 而不只是展示网页？

## 7. 当前仓库对应入口

GitHub 主仓库：

https://github.com/a976xw7td/elite20-builder-program-nseap

七个 Team 目录：

```text
teams/curriculum-team/
teams/challenge-team/
teams/agent-team/
teams/ontology-team/
teams/platform-team/
teams/knowledge-team/
teams/demo-team/
```

团队分工说明：

```text
teams/team-roadmap.md
```

提交方式说明：

```text
teams/github-submission-guide.md
```

一期背景与经验分析：

```text
docs/phase1-background-summary.md
```

## 8. 附录：一期经验为什么重要

一期 `实验班1群` 和 `精英班群` 说明：

- Challenge 驱动学习是有效的
- GitHub 作为正式 artifact 入口是必要的
- AI 日志、AAR、Prompt、Skill、Agent 都应成为交付物
- Peer Review 和 Agent Review 应成为学习机制
- 真实项目是课程后半段的自然延伸
- 班级自治、项目协同、成果传播需要明确团队分工

因此，二期不是另起炉灶，而是把一期已经探索出来的机制系统化、标准化、产品化。

