# NSEAP 知识认知细胞 MVP

这是 Elite20 Builder Program 第 6 组 Knowledge Team 的 MVP 交付。

我们的目标不是在第一版收集所有课程资料，而是设计并验证一个可以继续扩展为正式 Knowledge Repository 的 **知识认知细胞（Knowledge Cognitive Cell）产品方案**。

## Demo App

当前 v0.1 MVP 入口是一个静态 Demo：

```text
app/index.html
```

它用于验证未来 FDE Workbench 中两个能力的产品逻辑：

- 知识仓库（Knowledge Repository）
- 提示词工作室（Prompt Studio）

Demo 当前可以：

- 浏览知识条目
- 按课程、挑战、提示词、项目、Agent 等分类筛选
- 搜索标题、关键词、标签、概念、技能、适用对象和 Markdown 文件内容
- 查看每个条目的元数据、关系、概念、技能
- 展示“场景 -> 本体 -> 流程 -> 技能 -> 评估 -> 学习 -> 知识增长”
- 从 Demo 跳转到源 Markdown 文件

更新搜索索引：

```bash
node scripts/build-search-index.js
```

以后新增知识文件时，不需要改前端搜索代码。只要在 Markdown frontmatter 中补充 `keywords`、`tags`、`concepts`、`skills` 等字段，然后重新生成搜索索引即可。

本地运行方式：

```bash
cd nseap-knowledge-base/app
python -m http.server 8000
```

然后打开：

```text
http://localhost:8000
```

## 项目定位

NSEAP Knowledge Base 不是普通文件夹。在 Cognitive Cell 架构里，它是一个面向知识组织、知识检索、知识增长的认知细胞。

详细设计方案见：

```text
DESIGN.md
docs/backend-implementation-baseline.md
```

产品设计目标是一个正式的 Knowledge Repository。当前 v0.1 先通过 Markdown、YAML metadata、JSON Schema、搜索索引和静态 Demo 验证知识模型、检索方式、关系结构和演示流程。

在 NSEAP Technical Series 的路线里，它也是未来 FDE Workbench 中 Knowledge Repository 和 Prompt Studio 的产品雏形。

未来版本中，它可以继续演化成 Knowledge Librarian Agent，具备本体、技能、长期记忆、评估和持续改进能力。

## MVP 交付物

- `app/`：可演示的静态 Demo App
- `DESIGN.md`：详细设计方案
- `docs/backend-implementation-baseline.md`：后续后端实现基线
- `scripts/build-search-index.js`：从 Markdown 知识文件生成搜索索引
- `knowledge-base/`：Markdown 知识源
- `templates/`：知识条目、提示词、FAQ、项目案例等模板
- `schemas/`：面向 Agent-ready / graph-ready metadata 的 JSON Schema
- `CONTRIBUTING.md`：GitHub 提交流程
- `docs/builder-workflow.md`：对齐老师给的 Builder Workflow
- `docs/cognitive-cell-alignment.md`：对齐 Cognitive Cell 架构
- `docs/standards-mapping.md`：对齐 P2807.8、P3394、P3428 等参考方向
- `docs/nseap-technical-series-alignment.md`：对齐 OKF、FDE Workbench、Knowledge Repository、Prompt Studio
- `docs/capability-levels.md`：定义 L0-L5 能力等级
- `PRESENTATION.md`：汇报说明

## 目录结构

```text
nseap-knowledge-base/
  README.md
  MVP.md
  CONTRIBUTING.md
  PRESENTATION.md
  app/
  docs/
  knowledge-base/
  templates/
  schemas/
  examples/
```

## Builder Workflow 对齐

本 MVP 遵守老师给的 Builder Workflow：

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

我们当前对应的是：发现“只有 Markdown 不够支撑知识产品”的问题，提出“Knowledge Repository 产品方案 + v0.1 Demo 验证”的方案，并用 AI 辅助完成第一版实现。

## 知识增长流程

每个重要知识条目都尽量连接到这个流程：

```text
场景
-> 本体
-> 流程
-> 技能
-> 评估
-> 学习
-> 知识增长
```

这让知识库不是简单存资料，而是能把课程、挑战、提示词、项目案例持续沉淀成可复用的认知资产。
