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

发布/构建时钉**精确提交 SHA**，不需要打 tag。父仓记录的本就是子模块的 gitlink，用 tag 反而会随内核仓的移动而指向别处。内核 `package.json` 里的 version 已废弃，不对外展示。

```bash
# 升级内核
cd vendor/ds-core
git fetch && git checkout <内核提交 SHA>
cd ../..
git add vendor/ds-core
```

## 文档

- CLI 使用说明见 `docs/` 与 `packages/cli/README.md`
- 内核行为、拦截/DNS：https://github.com/Blue-Frontier/ds-core  
- 桌面端用户文档：https://github.com/docmirror/dev-sidecar  

## License

MPL-2.0
