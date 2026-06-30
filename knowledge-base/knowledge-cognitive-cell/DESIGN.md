# NSEAP 知识认知细胞产品设计方案

本文档是第 6 组 Knowledge Team 的主设计方案，用于说明本模块最终应该被设计成什么产品、如何服务 NSEAP、后端应该如何承接、以及当前 MVP 如何验证这套方案。

当前提交的静态 Demo 只是 v0.1 的最小验证形态，不代表最终产品形态。正式设计目标是一个可维护、可检索、可协作、可被 Agent 调用的 Knowledge Repository。

## 1. 产品定位

第 6 组负责建设 NSEAP 的知识层。

本模块不只是资料库，也不只是文档目录，而是一个 **知识认知细胞（Knowledge Cognitive Cell）**。它负责把课程、挑战、提示词、FAQ、最佳实践、项目案例、评价标准和 Agent 上下文沉淀成结构化知识资产。

在完整产品中，它应成为未来 FDE Workbench 的 Knowledge Repository 与 Prompt Studio 的基础能力。

```text
Knowledge Cognitive Cell
= Knowledge Repository
+ Prompt Studio Seed
+ Metadata Search
+ Relationship Management
+ Agent Retrieval Context
+ Knowledge Growth Loop
```

## 2. 设计依据

本设计综合参考以下项目文件和方向：

| 文件 / 方向 | 对设计的影响 |
| --- | --- |
| `Elite20-Vibe-Coding-Course.docx` | 明确 Builder Program 的协作、GitHub 提交、评审、文档化和发布流程。 |
| `CognitiveCell.docx` | 将知识库设计为有身份、能力、接口和演化路径的认知细胞。 |
| `[Clean]P2807.8...docx` | 为教育知识图谱、学习路径、本体和语义关系预留结构。 |
| `P3394-D1.0.0-IEEE-Draft-shorter.docx` | 为未来 Agent 接口、manifest、消息和互操作能力预留方向。 |
| `3428 draft.docx` | 用能力等级和评估维度衡量模块成熟度，而不是只看文档数量。 |
| `Tech-discussions.docx` | 对齐 FDE、OKF、Knowledge Repository、Prompt Studio、KSTAR 和 FDE Workbench 路线。 |

这些文件共同说明：第 6 组要做的是知识系统的产品雏形，而不是简单资料整理。

## 3. 要解决的问题

当前课程和项目产出容易出现以下问题：

1. 资料分散：课程说明、挑战任务、提示词、FAQ 和项目案例分布在不同位置。
2. 复用困难：好的提示词、案例和经验很难被后续学习者、教师、Builder 或 Agent 找到。
3. 结构不足：普通文档适合阅读，但不一定适合筛选、搜索、关联和系统调用。
4. 关系缺失：课程、挑战、技能、概念、提示词、项目之间的关系没有被显式表达。
5. 难以增长：项目产出如果没有沉淀机制，很难变成后续可复用知识。
6. Agent 难调用：如果没有稳定 ID、metadata 和关系结构，Agent 很难可靠检索上下文。

## 4. 目标角色

| 角色 | 核心需求 |
| --- | --- |
| 学习者 | 查找课程说明、挑战任务、提示词模板、FAQ 和项目案例。 |
| 教师 / 课程组织者 | 维护课程知识，沉淀常见问题、优秀案例和教学经验。 |
| Builder / 项目成员 | 按标准模板提交新知识条目，通过协作流程完成评审和更新。 |
| Agent | 根据问题、角色、课程、任务和上下文检索可用知识。 |
| 后端 / 平台开发者 | 按统一模型实现数据库、API、搜索、关系和未来 Agent 接口。 |

## 5. 产品目标

完整产品应实现以下目标：

1. 将分散资料变成结构化知识条目。
2. 支持按类型、关键词、标签、概念、技能、适用对象检索。
3. 显式表达知识之间的关系。
4. 支持知识新增、修改、评审、发布和版本管理。
5. 支持 Markdown 与数据库之间的导入、导出和同步。
6. 为未来 Agent 检索和 FDE Workbench 集成提供稳定接口。
7. 通过知识增长流程，把课程和项目产出持续沉淀为可复用资产。

## 6. 产品信息架构

完整产品的信息架构如下：

```text
Knowledge Repository
├─ Overview        系统说明与使用指南
├─ Course          课程知识
├─ Challenge       挑战与任务
├─ Prompt          提示词
├─ FAQ             常见问题
├─ Best Practice   最佳实践
├─ Project         项目案例
├─ Agent Context   Agent 上下文
├─ Rubric          评价标准
└─ Concept / Skill 概念与技能节点
```

当前 MVP 已经实现其中的主要类别，后续后端版本应继续沿用这套分类，不应另起一套不兼容结构。

## 7. 核心产品流程

### 7.1 查找知识

```text
用户输入问题或关键词
-> 系统识别搜索意图
-> 优先匹配 keywords / title / tags / concepts / skills
-> 返回相关知识条目
-> 用户进入详情页查看使用场景、流程、评价方式和相关条目
```

示例：

用户搜索“挑战”，系统应优先返回 `type = challenge` 或 `keywords` 包含“挑战”的条目，而不是因为某个课程正文里提到“挑战”就把课程排在前面。

### 7.2 沉淀知识

```text
课程或项目产生新内容
-> Builder 选择知识类型
-> 填写标题、摘要、关键词、概念、技能、关系和正文
-> 系统校验 metadata
-> 进入 review 状态
-> 评审通过后发布为 stable 条目
```

示例：

学生完成“AI 学习助手”项目后，可以沉淀为项目案例。该案例应关联对应挑战、提示词和技能，后续其他人搜索“AI 助手”或“学习计划”时可以找到。

### 7.3 Agent 检索

```text
Agent 接收用户问题
-> 判断用户角色和任务场景
-> 调用 Knowledge Repository API
-> 按 metadata 和 relationships 检索上下文
-> 使用知识条目生成带引用的回答
```

示例：

当用户问“第一个 AI Assistant 挑战怎么做”时，Agent 应检索挑战说明、相关提示词、评价标准和常见错误，而不是只做全文搜索。

### 7.4 知识增长

```text
真实场景
-> 产生经验
-> 提炼概念 / 技能 / 流程
-> 形成知识条目
-> 关联已有知识
-> 评估有效性
-> 更新知识仓库
```

## 8. 核心数据模型

### 8.1 KnowledgeItem

知识条目是系统核心实体。数据库、API、前端和 Agent 检索都应围绕它设计。

```text
id                  稳定唯一 ID，例如 kb-challenge-001
title               标题
type                course / challenge / prompt / faq / best-practice / project / agent / overview / rubric
status              draft / review / stable / deprecated
summary             摘要
content             Markdown 正文
source              原始文件路径或内容来源
audience            适用对象
tags                标签
keywords            搜索关键词，包含同义词和常用说法
concepts            概念
skills              技能
related             相关条目 ID
relationships       显式关系
situation           场景
ontology            本体说明
workflow            使用流程
skill               技能说明
evaluation          评估方式
knowledgeGrowth     知识增长说明
agentNotes          Agent 使用说明
createdAt           创建时间
updatedAt           更新时间
createdBy           创建者
updatedBy           更新者
```

### 8.2 Relationship

```text
id
sourceId
predicate
targetId
targetLabel
confidence
note
createdAt
```

常用关系：

```text
includes      包含
requires      需要
supports      支持
usesPrompt    使用提示词
relatedTo     相关
assessedBy    被某评价标准评估
```

关系必须是显式字段，不能只藏在正文里。这样未来才能支持知识图谱、推荐和 Agent 检索。

### 8.3 SearchIndex

搜索索引应以 metadata 为主，全文为辅。

```text
itemId
title
type
audience
tags
keywords
concepts
skills
headings
summary
contentPreview
updatedAt
```

默认搜索优先级：

```text
keywords
> title
> tags
> concepts
> skills
> type
> audience
> headings
> summary
> content
```

## 9. 后端设计方案

后端目标不是简单给当前静态页面套接口，而是实现 Knowledge Repository 的正式服务层。

### 9.1 后端第一阶段能力

后端第一阶段应提供：

- 知识条目增删改查。
- 分类、关键词、标签、概念、技能检索。
- Markdown 内容和 metadata 统一存储。
- 搜索索引生成或更新。
- 条目关系维护。
- 审核状态管理。
- Markdown 导入和导出。
- 为 Agent 检索预留 API。

第一阶段不做：

- 完整知识图谱推理。
- 复杂权限系统。
- 自动评分系统。
- 完整 Agent 编排系统。
- 完整 FDE Workbench。

### 9.2 数据库设计建议

第一版可使用关系型数据库，避免过早引入复杂图数据库。

建议表：

```text
knowledge_items
knowledge_item_audiences
knowledge_item_tags
knowledge_item_keywords
knowledge_item_concepts
knowledge_item_skills
knowledge_relationships
knowledge_revisions
```

`knowledge_items` 保存主内容：

```text
id
title
type
status
summary
content_markdown
source
situation
ontology
workflow
skill
evaluation
knowledge_growth
agent_notes
created_at
updated_at
created_by
updated_by
```

多值字段拆成子表：

```text
knowledge_item_keywords(item_id, value)
knowledge_item_tags(item_id, value)
knowledge_item_concepts(item_id, value)
knowledge_item_skills(item_id, value)
knowledge_item_audiences(item_id, value)
```

关系表：

```text
knowledge_relationships
├─ id
├─ source_item_id
├─ predicate
├─ target_item_id
├─ target_label
├─ note
└─ created_at
```

### 9.3 API 设计草案

查询知识条目：

```text
GET /api/knowledge-items
```

参数：

```text
q
type
status
tag
keyword
concept
skill
audience
limit
offset
```

返回示例：

```json
{
  "items": [
    {
      "id": "kb-challenge-001",
      "title": "构建你的第一个 AI Assistant",
      "type": "challenge",
      "status": "stable",
      "summary": "第一个 PBL 挑战...",
      "tags": ["challenge", "ai-assistant"],
      "keywords": ["挑战", "任务", "AI 助手"],
      "concepts": ["AI Assistant", "提示词工程"],
      "skills": ["定义 Agent 角色", "编写指令提示词"],
      "matchedFields": ["keywords", "type"]
    }
  ],
  "total": 1
}
```

其他接口：

```text
GET    /api/knowledge-items/{id}
POST   /api/knowledge-items
PATCH  /api/knowledge-items/{id}
DELETE /api/knowledge-items/{id}
GET    /api/knowledge-items/{id}/relationships
POST   /api/knowledge-items/{id}/relationships
GET    /api/search/suggestions?q=...
POST   /api/import/markdown
GET    /api/export/markdown/{id}
```

### 9.4 搜索策略

搜索必须是 metadata-first search。

```text
用户输入
-> 标准化搜索词
-> 匹配 keywords
-> 匹配 title
-> 匹配 tags / concepts / skills
-> 匹配 type / audience
-> 必要时再匹配 summary / content
-> 返回结果并标注 matchedFields
```

这样做的原因是：用户输入“挑战”时，意图更可能是查找挑战类条目，而不是查找正文里随便出现“挑战”的所有文档。

### 9.5 Markdown 与数据库同步

产品可以分阶段演进。

V0.1-V0.2：

```text
Markdown 为源
-> 解析 frontmatter
-> 生成搜索索引
-> Demo / API 查询
```

V0.3：

```text
Markdown + 数据库双向同步
```

V1.0：

```text
数据库为主
-> Markdown 作为导出、审计和 GitHub review 格式
```

## 10. 前端产品设计

正式前端不应只是静态展示页，而应是 Knowledge Repository 的工作台界面。

核心页面：

```text
知识列表页
知识详情页
知识编辑页
知识提交页
关系管理页
搜索结果页
Prompt Studio 页
Agent Context 页
```

当前 MVP 已实现其中的：

- 知识列表
- 分类筛选
- 关键词搜索
- 知识详情
- 关系展示
- 知识增长流程
- 知识卡片生成模拟

后续正式产品应增加：

- 在线编辑。
- metadata 校验。
- 关系选择器。
- 审核状态切换。
- 搜索命中原因展示。
- Markdown 预览。
- Agent Notes 编辑。
- 导入 / 导出。

## 11. 当前 MVP 的角色

当前上传的静态 MVP 是产品方案的 v0.1 验证版本。

它验证的是：

1. KnowledgeItem 模型是否能支撑展示。
2. 分类、关键词、概念、技能是否能支撑检索。
3. 关系字段是否能支撑知识关联。
4. 知识增长流程是否能被用户理解。
5. Markdown + metadata 是否能为后端提供清晰数据基础。

它不代表最终系统不需要后端，也不代表正式产品只能用静态文件。

当前 MVP 与正式后端的对应关系：

| 当前 MVP | 正式产品 / 后端 |
| --- | --- |
| `knowledge-base/*.md` | `knowledge_items.content_markdown` + metadata 表 |
| `app/knowledge-data.json` | `GET /api/knowledge-items` |
| `app/search-index.json` | 搜索索引表或搜索服务 |
| 分类按钮 | `type` 查询参数 |
| 搜索框 | `/api/knowledge-items?q=...` |
| 详情面板 | `GET /api/knowledge-items/{id}` |
| 关系展示 | `knowledge_relationships` |
| 知识卡片模拟 | `POST /api/knowledge-items` |

## 12. 与其他模块的关系

| 其他模块 | Knowledge 模块提供的价值 |
| --- | --- |
| 课程模块 | 保存课程计划、学习目标、教学说明和周计划。 |
| 挑战模块 | 保存任务说明、提交要求、评价标准和常见错误。 |
| 提示词模块 | 保存可复用提示词和使用说明。 |
| 项目模块 | 保存优秀案例、复盘和项目经验。 |
| Agent 模块 | 提供可检索上下文、概念、技能和关系。 |
| 平台模块 | 提供 Knowledge Repository 和 Prompt Studio 的内容基础。 |

## 13. 版本路线

### V0.1 当前 MVP

```text
静态 Demo
+ Markdown 知识源
+ JSON 数据
+ 搜索索引
+ 模板
+ Schema
+ 设计文档
```

目标：验证产品模型、知识结构和演示流程。

### V0.2 可维护知识库

```text
更多知识条目
+ 更完整 metadata
+ 自动索引生成
+ metadata 校验
+ 更清晰提交模板
```

目标：让 Builder 可以持续补充知识。

### V0.3 后端服务雏形

```text
KnowledgeItem API
+ 数据库存储
+ 搜索服务
+ Markdown 导入导出
+ 关系管理
```

目标：从静态 MVP 升级为可维护服务。

### V1.0 Knowledge Repository

```text
正式后端
+ 工作台前端
+ 审核流程
+ Prompt Studio
+ Agent 检索接口
+ FDE Workbench 集成
```

目标：成为 NSEAP 的正式知识仓库能力。

## 14. 后端验收标准

后端第一版完成时，应满足：

1. 可以创建知识条目。
2. 可以按类型筛选。
3. 可以按关键词搜索。
4. 可以查看条目详情。
5. 可以维护 tags、keywords、concepts、skills。
6. 可以维护条目关系。
7. 搜索“挑战”时，优先返回带有 `keywords: 挑战` 或 `type: challenge` 的条目。
8. 可以导入当前 Markdown 知识文件。
9. 可以导出为 Markdown 或 JSON，便于 GitHub review。
10. API 返回结构与当前 MVP 数据模型兼容。

## 15. 执行原则

项目开发过程遵守 Builder Program 的流程：

```text
发现问题
-> 提出方案
-> AI 辅助开发
-> GitHub 提交
-> Peer Review
-> Agent Review
-> Merge
-> Documentation
-> Release
```

这是项目协作和提交规则，不是产品界面中的用户功能。

## 16. 当前结论

本设计方案的目标产品不是静态页面，而是一个正式的 Knowledge Repository。

当前 MVP 只是用最低成本验证：

- 知识条目模型是否成立。
- metadata-first search 是否成立。
- relationships 是否能表达知识连接。
- Markdown 是否能作为早期知识源。
- 后端是否可以按统一模型继续开发。

因此，后续开发应以本设计文档为主线，从当前 MVP 平滑升级到后端服务和正式知识工作台。
