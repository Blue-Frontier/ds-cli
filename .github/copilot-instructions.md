# Copilot / AI — ds-cli

仓库：Blue-Frontier/ds-cli。内核在 `vendor/ds-core`（submodule → Blue-Frontier/ds-core）。

- 先 `git submodule update --init --recursive` 再 `pnpm install`
- 包名：`@blue-frontier/ds-cli`；内核 `@blue-frontier/dev-sidecar` / `@blue-frontier/mitmproxy`
- 改内核请在 ds-core 提交 + tag，再 bump submodule，不要在本仓改内核源码
- 提交：AI 可 stage，签名 commit 由人执行

<!-- package: ds-cli | org: Blue-Frontier -->
