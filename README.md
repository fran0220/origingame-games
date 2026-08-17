# OriginGame recovered clients

从生产环境 `play.origingame.dev` 拉回的已发布客户端，用来在丢失制作工程后重新开发。

平台只保存部署产物，不保存原始 zip。`protected` 模式还会对 JS 做 terser + javascript-obfuscator。因此这里不是完整 TypeScript/Vite 工程，而是：

- 可运行的最新客户端（图片、音频、HTML、CSS 原样）
- `deobfuscated/` 里用 webcrack 还原字符串后的 JS（变量名仍是压缩短名）
- 部分早期游戏上传时带了 `src/`，目录结构还在，只是文件内容被就地混淆了

## 收录的 12 款

| 目录 | 游戏 | 线上版本 | 恢复形态 |
|---|---|---|---|
| `games/ter2iiuobo-shi-guan-liu-jing` | 蚀冠：六境守望 | v2 | Vite 打包 + 素材 |
| `games/c3x8wl1tqf-skybound-rescue` | Skybound Rescue | v1 | 带 `src/` 的 three.js 工程（已混淆） |
| `games/wvfbhxsl85-mo-fa-ta-fang` | 魔法塔防 | v1 | 带 `src/` 的模块工程（已混淆） |
| `games/qxpp0yf4ac-chao-xi-wang-guo-a` | 潮汐王国防线 | v12 | Vite 打包 + 素材 |
| `games/oj0vp9xtgk-chao-xi-wang-guo-b` | 潮汐王国防线（另一份） | v3 | Vite 打包 + 素材 |
| `games/vbgjfiixhq-ni-hong-fang-xian` | 霓虹防线 | v3 | 多文件客户端 |
| `games/yl2bl9uj1c-chao-xi-wang-guan` | 潮汐王冠 | v3 | Vite 打包 + 素材 |
| `games/ue6p0zkohk-zhou-shu-fang-xian` | 咒术防线 | v2 | Vite 打包 + 素材 |
| `games/i18gfsti7v-zhan-guo-feng-yan` | 战国烽烟·函谷关 | v1 | 单文件 `game.js` |
| `games/fj29v1u14q-hullbreaker` | HULLBREAKER | v2 | 完整 `src/` 树（已混淆） |
| `games/g6soht516k-fu-wen-ka-pai` | 符文卡牌决斗 | v1 | 单 HTML（逻辑在 inline script） |
| `games/wqvj2930dl-sky-switch` | Sky Switch | v1 | 单文件 `game.js` |

完整元数据见 `catalog.json`。

## 没有收录

这些线上游戏已有公开源码仓库，或不是游戏：

- OriginGame Trail → https://github.com/fran0220/origingame-trail
- 太阳系观测台 → https://github.com/fran0220/origingame
- 史前动物博物馆、King's Gambit、REGOLITH → 第三方开源
- AI训练营路演 PPT
- MCP / canary / 已删除的验证用小游戏

## 怎么在这上面重新开发

1. **有 `src/` 的三款**（Skybound Rescue、魔法塔防、HULLBREAKER）：以 `deobfuscated/src/` 为起点，把 `vendor/three*` 换成官方 `three` 包，不要继续用混淆过的引擎。
2. **Vite/Phaser 打包的几款**：素材和 HTML/CSS 可直接用；游戏逻辑在 `deobfuscated/assets/game-*.js`。引擎本体（Phaser 3.90）应重新 `npm install`，只从 bundle 里摘关卡表、数值和场景逻辑。
3. **单文件三款**：反混淆后的 `game.js` / `index.html` 接近可继续改。
4. 每个目录根上的 `sw.js`、`manifest.webmanifest`、`og-icon.svg` 以及 `index.html` 里 `__og-game-config` / `og-sdk.js` 是平台注入，重建工程时删掉。

本地预览某个客户端：

```bash
npx --yes serve games/ter2iiuobo-shi-guan-liu-jing
```
