const state = {
  data: null,
  searchIndex: [],
  category: "all",
  query: "",
  selectedId: null
};

const typeLabels = {
  course: "课程",
  challenge: "挑战",
  prompt: "提示词",
  faq: "FAQ",
  "best-practice": "最佳实践",
  project: "项目案例",
  agent: "Agent",
  overview: "概览"
};

const statusLabels = {
  sample: "示例",
  draft: "草稿",
  review: "待评审",
  stable: "稳定",
  deprecated: "已废弃"
};

const els = {
  level: document.querySelector("#mvp-level"),
  search: document.querySelector("#search"),
  categories: document.querySelector("#category-list"),
  count: document.querySelector("#entry-count"),
  list: document.querySelector("#entry-list"),
  detail: document.querySelector("#entry-detail"),
  detailHeading: document.querySelector("#detail-heading"),
  selectedTitle: document.querySelector("#selected-title"),
  filterState: document.querySelector("#filter-state"),
  submitForm: document.querySelector("#submit-form"),
  newTitle: document.querySelector("#new-title"),
  newType: document.querySelector("#new-type"),
  submitResult: document.querySelector("#submit-result")
};

async function loadData() {
  const [dataResponse, indexResponse] = await Promise.all([
    fetch("./knowledge-data.json"),
    fetch("./search-index.json")
  ]);

  if (!dataResponse.ok) {
    throw new Error("无法加载 knowledge-data.json");
  }

  state.data = await dataResponse.json();
  state.searchIndex = indexResponse.ok ? await indexResponse.json() : [];
  state.data.entries = mergeIndexedEntries(state.data.entries, state.searchIndex);
  state.selectedId = state.data.entries[0]?.id ?? null;
  render();
}

function mergeIndexedEntries(entries, indexItems) {
  const existingIds = new Set(entries.map((entry) => entry.id));
  const generatedEntries = indexItems
    .filter((item) => !existingIds.has(item.id))
    .map((item) => normalizeEntry({
      id: item.id,
      title: item.title,
      type: item.type,
      status: "draft",
      audience: [],
      tags: item.tags,
      keywords: item.keywords,
      concepts: item.concepts,
      skills: item.skills,
      relationships: [],
      summary: "从 Markdown 知识文件自动加入搜索索引的条目。",
      situation: "",
      ontology: item.concepts?.join("、") || "",
      workflow: "",
      skill: item.skills?.join("、") || "",
      evaluation: "",
      knowledgeGrowth: "",
      source: item.source
    }));

  return [...entries.map(normalizeEntry), ...generatedEntries];
}

function normalizeEntry(entry) {
  return {
    audience: [],
    tags: [],
    keywords: [],
    concepts: [],
    skills: [],
    relationships: [],
    related: [],
    summary: "",
    situation: "",
    ontology: "",
    workflow: "",
    skill: "",
    evaluation: "",
    knowledgeGrowth: "",
    source: "",
    ...entry
  };
}

function matchesQuery(entry) {
  const query = state.query.trim().toLowerCase();
  if (!query) return true;
  const indexItem = state.searchIndex.find((item) => item.id === entry.id);
  const haystack = [
    entry.id,
    entry.title,
    entry.type,
    entry.source,
    ...(entry.tags || []),
    ...(entry.keywords || []),
    ...(entry.concepts || []),
    ...(entry.skills || []),
    ...(entry.audience || []),
    ...(indexItem?.keywords || []),
    ...(indexItem?.tags || []),
    ...(indexItem?.concepts || []),
    ...(indexItem?.skills || []),
    ...(indexItem?.headings || [])
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function filteredEntries() {
  return state.data.entries.filter((entry) => {
    const selectedCategoryMatch = state.category === "all" || entry.type === state.category;
    if (!selectedCategoryMatch) return false;

    return matchesQuery(entry);
  });
}

function renderCategories() {
  els.categories.innerHTML = "";
  state.data.categories.forEach((category) => {
    const count = category.id === "all"
      ? state.data.entries.length
      : state.data.entries.filter((entry) => entry.type === category.id).length;
    const button = document.createElement("button");
    button.className = `category-button${state.category === category.id ? " active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-pressed", String(state.category === category.id));
    button.innerHTML = `<span>${category.label}</span><span>${count}</span>`;
    button.addEventListener("click", () => {
      state.category = category.id;
      const entries = filteredEntries();
      state.selectedId = entries[0]?.id ?? null;
      render();
    });
    els.categories.appendChild(button);
  });
}

function renderList() {
  const entries = filteredEntries();
  els.count.textContent = `${entries.length} 条`;
  els.list.innerHTML = "";

  if (!entries.length) {
    els.list.innerHTML = `<div class="entry-card"><h3>没有找到条目</h3><p>换一个分类或搜索词试试。</p></div>`;
    return;
  }

  if (!entries.some((entry) => entry.id === state.selectedId)) {
    state.selectedId = entries[0].id;
  }

  entries.forEach((entry) => {
    const card = document.createElement("button");
    card.className = `entry-card${entry.id === state.selectedId ? " active" : ""}`;
    card.type = "button";
    card.setAttribute("aria-pressed", String(entry.id === state.selectedId));
    card.innerHTML = `
      <h3>${escapeHtml(entry.title)}</h3>
      <p>${escapeHtml(entry.summary)}</p>
      <div class="meta-row">
        <span class="type-pill">${typeLabels[entry.type] || entry.type}</span>
        <span class="status-pill">${statusLabels[entry.status] || entry.status}</span>
      </div>
    `;
    card.addEventListener("click", () => {
      state.selectedId = entry.id;
      render();
    });
    els.list.appendChild(card);
  });
}

function renderDetail() {
  const entry = state.data.entries.find((item) => item.id === state.selectedId);
  if (!entry) {
    els.detailHeading.textContent = "学习与复用说明";
    els.selectedTitle.textContent = "无匹配条目";
    els.detail.className = "entry-detail empty-state";
    els.detail.innerHTML = `<h2>请选择一个知识条目</h2><p>当前没有选中的匹配条目。</p>`;
    return;
  }

  els.detailHeading.textContent = entry.title;
  els.selectedTitle.textContent = entry.title;
  els.detail.className = "entry-detail";
  els.detail.innerHTML = `
    <div class="detail-title">
      <div>
        <p class="eyebrow">${escapeHtml(entry.id)}</p>
        <h2>${escapeHtml(entry.title)}</h2>
      </div>
      <div class="meta-row">
        <span class="type-pill">${typeLabels[entry.type] || entry.type}</span>
        <span class="status-pill">${statusLabels[entry.status] || entry.status}</span>
      </div>
    </div>
    <p class="detail-summary">${escapeHtml(entry.summary)}</p>

    <div class="meta-row">${renderTags("适用对象", entry.audience)}${renderTags("标签", entry.tags)}</div>
    <div class="meta-row">${renderTags("概念", entry.concepts)}${renderTags("技能", entry.skills)}</div>

    <h3>知识增长流程</h3>
    <div class="flow">${state.data.flow.map((step) => `<div class="flow-step">${escapeHtml(step)}</div>`).join("")}</div>

    <div class="detail-grid">
      ${infoBox("场景 Situation", entry.situation)}
      ${infoBox("本体 Ontology", entry.ontology)}
      ${infoBox("流程 Workflow", entry.workflow)}
      ${infoBox("技能 Skill", entry.skill)}
      ${infoBox("评估 Evaluation", entry.evaluation)}
      ${infoBox("知识增长 Knowledge Growth", entry.knowledgeGrowth)}
    </div>

    <h3>关系 Relationships</h3>
    <ul class="relationship-list">
      ${(entry.relationships || []).map((rel) => `<li><strong>${escapeHtml(formatPredicate(rel.predicate))}</strong> -> ${escapeHtml(rel.target)}</li>`).join("") || "<li>暂无显式关系。</li>"}
    </ul>

    <p style="margin-top: 18px;">
      <a class="source-link" href="${escapeAttribute(entry.source)}">打开源 Markdown</a>
    </p>
  `;
}

function renderTags(label, values = []) {
  if (!values.length) return "";
  return values.map((value) => `<span class="tag" title="${label}">${escapeHtml(value)}</span>`).join("");
}

function infoBox(title, value) {
  return `
    <div class="info-box">
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(value || "暂未填写。")}</p>
    </div>
  `;
}

function render() {
  els.level.textContent = state.data.meta.level;
  renderDemoState();
  renderCategories();
  renderList();
  renderDetail();
}

function renderDemoState() {
  const category = state.data.categories.find((item) => item.id === state.category);
  const query = state.query.trim();
  els.filterState.textContent = query
    ? `${category?.label || "全部"} / 搜索：${query}`
    : category?.label || "全部";
}

function formatPredicate(predicate) {
  const labels = {
    includes: "包含",
    usesPrompt: "使用提示词",
    requires: "需要",
    supports: "支持"
  };
  return labels[predicate] || predicate;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

els.search.addEventListener("input", (event) => {
  state.query = event.target.value;
  const entries = filteredEntries();
  state.selectedId = entries[0]?.id ?? null;
  render();
});

els.submitForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = els.newTitle.value.trim();
  const typeLabel = typeLabels[els.newType.value] || els.newType.value;

  if (!title) {
    els.submitResult.textContent = "请先填写一个待沉淀的内容标题。";
    els.submitResult.className = "submit-result warning";
    return;
  }

  els.submitResult.textContent = `已生成知识卡片：${typeLabel}《${title}》。它可以进入知识仓库，供学习者、教师和 Agent 后续复用。`;
  els.submitResult.className = "submit-result success";
});

loadData().catch((error) => {
  els.detail.className = "entry-detail empty-state";
  els.detail.innerHTML = `<h2>无法加载 Demo</h2><p>${escapeHtml(error.message)}</p>`;
});
