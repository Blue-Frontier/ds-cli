# ds-cli

DevSidecar 命令行仓库（**三位一体**之 cli）。通过 git submodule 引入内核 [ds-core](https://github.com/Blue-Frontier/ds-core)。

## 三位一体

| 仓库 | 职责 | 地址 |
|------|------|------|
| **ds-core** | 代理内核 core + mitmproxy | https://github.com/Blue-Frontier/ds-core |
| **ds-cli**（本仓） | 命令行 / SEA | https://github.com/Blue-Frontier/ds-cli |
| **ds-gui**（后续） | 桌面 GUI | https://github.com/Blue-Frontier/ds-gui |
| 历史主仓 | 迁移前 monorepo | https://github.com/docmirror/dev-sidecar |

## 包名

| 目录 | 包名 |
|------|------|
| `packages/cli` | `@blue-frontier/ds-cli` |
| 内核（submodule） | `@blue-frontier/dev-sidecar`、`@blue-frontier/mitmproxy` |

## 初始化

```bash
git clone https://github.com/Blue-Frontier/ds-cli.git
cd ds-cli
git submodule update --init --recursive
pnpm install
pnpm --filter @blue-frontier/ds-cli test
```

## Submodule

`vendor/ds-core` → `https://github.com/Blue-Frontier/ds-core.git`

发布/构建时 **钉 tag**，不要让 release 分支跟踪 core 的 branch tip。

```bash
# 升级内核
cd vendor/ds-core
git fetch && git checkout vX.Y.Z
cd ../..
git add vendor/ds-core
```

## 文档

- CLI 使用说明见 `docs/` 与 `packages/cli/README.md`
- 内核行为、拦截/DNS：https://github.com/Blue-Frontier/ds-core  
- 桌面端用户文档：https://github.com/docmirror/dev-sidecar  

## License

MPL-2.0
