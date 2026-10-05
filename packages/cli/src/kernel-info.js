/**
 * 内嵌内核（ds-core）的身份：**提交 SHA**（短 SHA 对外展示，长 SHA 供排障对照）。
 *
 * 注意：内核 package.json 里的 version 已废弃，仅有形式作用（包必须有个版本号），
 * 不得在任何面向最终用户的地方展示 —— 它的历史来源是抄历史 monorepo 的应用版本号，
 * 与内核实际内容无关，展示出来只会误导。
 *
 * SEA 单文件里没有子模块目录可读，因此构建期由 scripts/build.js 通过 esbuild 的 define 注入
 * __DS_KERNEL_VERSION__ / __DS_KERNEL_SHA__；从源码直接运行时没有注入，回落到读本地子模块。
 */
const path = require('node:path')
const fs = require('node:fs')
const { execFileSync } = require('node:child_process')

/** 构建期注入的值（esbuild define 会把标识符替换成字面量，未注入时 typeof 为 undefined） */
function injected () {
  if (typeof __DS_KERNEL_VERSION__ === 'string' || typeof __DS_KERNEL_SHA__ === 'string') {
    return {
      version: typeof __DS_KERNEL_VERSION__ === 'string' ? __DS_KERNEL_VERSION__ : null,
      sha: typeof __DS_KERNEL_SHA__ === 'string' ? __DS_KERNEL_SHA__ : null,
    }
  }
  return null
}

/** 源码运行时的回落：packages/core 是指向 vendor/ds-core/core 的软链 */
function fromSubmodule () {
  const coreDir = path.resolve(__dirname, '../../core')
  let version = null
  let sha = null
  try {
    version = JSON.parse(fs.readFileSync(path.join(coreDir, 'package.json'), 'utf8')).version
  } catch {}
  try {
    sha = execFileSync('git', ['rev-parse', '--short', 'HEAD'], { cwd: coreDir, encoding: 'utf8' }).trim()
  } catch {}
  return { version, sha }
}

/** @returns {{ version: string|null, sha: string|null }} */
function getKernelInfo () {
  const info = injected() || fromSubmodule()
  return {
    version: info.version && info.version.length ? info.version : null,
    sha: info.sha && info.sha.length ? info.sha : null,
  }
}

module.exports = { getKernelInfo }
