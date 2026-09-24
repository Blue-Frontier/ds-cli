# 模板 SSOT 说明

组织级默认社区健康文件应放在：

**https://github.com/Blue-Frontier/.github**

```
ISSUE_TEMPLATE/
  1_BUG_REPORT.md
  2_STYLE_ISSUE.md
  3_CONFIG_ISSUES.md
  4_FEATURE_REQUEST.md
  5_OTHERS.md
  config.yml
PULL_REQUEST_TEMPLATE.md
```

`Blue-Frontier/ds-core`、`Blue-Frontier/ds-cli`（及后续 `ds-gui`）在**未自带同名文件**时会继承 org 模板。

若需要三仓完全一致且可自动更新，可另建 `Blue-Frontier/.github` 下 `templates/` 作为 SSOT，用 workflow 复制到各仓（需 PAT）。页脚建议：

```markdown
<!-- ssot: Blue-Frontier/.github -->
```

## 模板内容要求

- 区分问题归属：内核 / CLI / GUI
- 绝对 URL 链接到三仓，禁止只写 monorepo 相对路径
- PR 模板增加：「是否需要 bump ds-core submodule / 同步版本 tag」
- 不写死 `packages/core` 等 monorepo 时代路径（除非指向本仓内路径）

当前目录下的 `issue_*.md` / `pr_template.md` 为**待同步到 org 的草稿**，尚未 commit。
