# AGENTS.md — ds-cli

本仓库是 DevSidecar **命令行**（`Blue-Frontier/ds-cli`），不是 monorepo。

## 仓库边界

| 路径 | 说明 |
|------|------|
| `packages/cli` | CLI 入口、命令、SEA |
| `vendor/ds-core` | **git submodule**，指向 `Blue-Frontier/ds-core` 某 tag |

**禁止**在本仓直接改内核逻辑；应先改 ds-core，打 tag，再 bump submodule。

## 初始化

```bash
git submodule update --init --recursive
pnpm install
```

## 常用命令

```bash
pnpm --filter @blue-frontier/ds-cli test
pnpm lint
```

（SEA / 打包脚本见 `packages/cli/scripts`，随发布流程调整。）

## 依赖解析

`vendor/ds-core` 已目录扁平化（`core/`、`mitmproxy/` 位于子模块根下），因此本仓用
`packages/core`、`packages/mitmproxy` 两个**符号链接**指向它们，`pnpm-workspace.yaml` 收录 `packages/*`：

- `@blue-frontier/dev-sidecar` ← `packages/core`
- `@blue-frontier/mitmproxy`   ← `packages/mitmproxy`

符号链接由 git 跟踪（mode 120000），checkout 会自动重建。不要把 CLI 内的 `packages/core/...`
相对引用改成 `vendor/...`，也不要改 `pnpm-workspace.yaml` 的 glob 去直接匹配子模块目录。
依赖一律保持 `workspace:*`。

## 提交

- AI 可 `git add`；**签名提交由人类执行**
- 改内核 → 先在 ds-core 提交并 tag → 本仓只提交 `vendor/ds-core` 指针 + 必要的 CLI 适配

## 与兄弟仓

- 内核：https://github.com/Blue-Frontier/ds-core  
- GUI（后续）：https://github.com/Blue-Frontier/ds-gui  
- 历史 monorepo：https://github.com/docmirror/dev-sidecar  

用户目录与端口与 core 一致：`~/.dev-sidecar/`，31180 / 31181。

<!-- package: ds-cli | org: Blue-Frontier -->
