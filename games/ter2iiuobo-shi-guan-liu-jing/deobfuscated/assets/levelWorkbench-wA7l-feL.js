import "./modulepreload-polyfill-B5Qt9EMX.js";
const e = document.getElementById("level-grid");
const t = document.getElementById("theme-grid");
const a = document.getElementById("toast");
const n = document.getElementById("api-state");
const s = document.getElementById("api-note");
const l = document.getElementById("concurrency-select");
let i;
let o;
let r = false;
let d = "none";
function c(_0x2a9006, _0x2b1783 = false) {
  a.textContent = _0x2a9006;
  a.style.borderColor = _0x2b1783 ? "#ef4444" : "#67e8f9";
  a.hidden = false;
  clearTimeout(c.timer);
  c.timer = setTimeout(() => {
    a.hidden = true;
  }, 4200);
}
async function p(_0x2547ec, _0x4c2701 = {}) {
  const _0x78a7be = await fetch("/api/level-workbench/" + _0x2547ec, _0x4c2701.body ? {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(_0x4c2701.body)
  } : undefined);
  const _0x41373b = await _0x78a7be.json();
  if (!_0x78a7be.ok) {
    const _0x56ce8d = new Error(_0x41373b.error || "操作失败");
    _0x56ce8d.report = _0x41373b.report;
    throw _0x56ce8d;
  }
  return _0x41373b;
}
function m(_0x2ee027) {
  return o.themes.find(_0x4acb6b => _0x4acb6b.id === _0x2ee027) || {
    id: _0x2ee027,
    name: _0x2ee027,
    setting: "现有关卡主题",
    palette: {
      ground: "#172230",
      road: "#64748b",
      glow: "#94a3b8"
    }
  };
}
function u(_0x2dbd71) {
  if (_0x2dbd71) {
    return "./" + _0x2dbd71.replaceAll("\\", "/");
  } else {
    return "";
  }
}
function y(_0x32580f, _0x21ff6f, _0x5c9878) {
  return "<span class=\"stage " + (_0x21ff6f ? "done" : "") + "\"><small>0" + _0x5c9878 + "</small><b>" + _0x32580f + "</b></span>";
}
async function $() {
  const _0x4513df = await p("specs");
  i = _0x4513df.specs;
  o = _0x4513df.themes;
  r = _0x4513df.apiReady;
  d = _0x4513df.provider || "none";
  const _0x23de46 = d === "origin-game" ? "OriginGame" : d === "openai" ? "OpenAI 兼容模式" : "";
  n.textContent = r ? _0x23de46 + " 生图已就绪" : "工作台在线 · 生图密钥未就绪";
  s.textContent = r ? "可并行生成；" + _0x23de46 + " 密钥仅存在于服务器进程" : "编辑、识别、发布可用；生图请在启动环境设置 OG_API_KEY（推荐）或 OPENAI_API_KEY";
  (function () {
    const _0xe47785 = {
      1: {
        ground: "#201a25",
        road: "#9a7652",
        glow: "#f6c453"
      },
      2: {
        ground: "#172c46",
        road: "#8fb9dd",
        glow: "#67e8f9"
      }
    };
    t.innerHTML = i.levels.map(_0xd3e0cf => {
      const _0x251d41 = m(_0xd3e0cf.theme);
      const _0x272b71 = _0xe47785[_0xd3e0cf.id] || _0x251d41.palette;
      const _0x8de4c9 = _0xd3e0cf.assets.libraryOriginal || _0xd3e0cf.assets.source || _0xd3e0cf.assets.final;
      return "<article class=\"theme-card\" style=\"--theme-ground:" + _0x272b71.ground + ";--theme-road:" + _0x272b71.road + ";--theme-glow:" + _0x272b71.glow + "\">\n    <div class=\"theme-image\"><img src=\"" + u(_0x8de4c9) + "?v=" + Date.now() + "\" alt=\"第 " + _0xd3e0cf.id + " 关 " + _0xd3e0cf.name + " 地图\" /></div><div class=\"theme-copy\"><span class=\"campaign-level\">LEVEL " + String(_0xd3e0cf.id).padStart(2, "0") + "</span><div class=\"theme-swatch\"></div><h3>" + _0xd3e0cf.name + "</h3><p>" + _0xd3e0cf.setting + "</p></div>\n  </article>";
    }).join("");
  })();
  (function () {
    const _0x328f18 = o.themes.map(_0x36c614 => "<option value=\"" + _0x36c614.id + "\">" + _0x36c614.name + "</option>").join("");
    e.innerHTML = i.levels.map(_0x2cc9ff => {
      const _0x1aaa0d = m(_0x2cc9ff.theme);
      const _0x21cf19 = _0x1aaa0d.palette.glow || "#67e8f9";
      const _0xc8588d = _0x2cc9ff.pipeline || {};
      const _0x2a686a = _0x2cc9ff.assets.libraryOriginal || (_0x2cc9ff.sourceHasGameplayArt ? _0x2cc9ff.assets.source : _0x2cc9ff.assets.final || _0x2cc9ff.assets.source);
      const _0x340fb8 = _0x2cc9ff.assets.libraryMask || _0x2cc9ff.assets.semanticMask || _0x2cc9ff.assets.aiMask;
      const _0x24cd8e = _0x2cc9ff.readOnly;
      const _0x59ad00 = JSON.stringify({
        paths: _0x2cc9ff.paths,
        pads: _0x2cc9ff.pads,
        crown: _0x2cc9ff.crown,
        roadWidth: _0x2cc9ff.roadWidth
      }, null, 2);
      const _0x41b93d = _0x2cc9ff.recognition || {};
      return "<article class=\"level-block " + (_0x24cd8e ? "readonly" : "") + "\" data-level-id=\"" + _0x2cc9ff.id + "\" style=\"--accent:" + _0x21cf19 + "\">\n      <div class=\"map-preview\"><img class=\"source-layer\" src=\"" + u(_0x2a686a) + "?v=" + Date.now() + "\" alt=\"第 " + _0x2cc9ff.id + " 关原始地图\" />" + (_0x340fb8 ? "<img class=\"mask-layer\" src=\"" + u(_0x340fb8) + "?v=" + Date.now() + "\" alt=\"第 " + _0x2cc9ff.id + " 关颜色蒙版\" />" : "") + function (_0x4c2df7, _0x1342a3) {
        const _0x43ab80 = (_0x4c2df7.paths || []).map(_0x2f8de8 => "<path d=\"" + function (_0x5cb668) {
          if (_0x5cb668 == null || !_0x5cb668.length) {
            return "";
          }
          const [_0x5dbcb7, ..._0x2e6838] = _0x5cb668;
          return "M " + _0x5dbcb7[0] + " " + _0x5dbcb7[1] + " " + _0x2e6838.map(_0x323655 => "L " + _0x323655[0] + " " + _0x323655[1]).join(" ");
        }(_0x2f8de8) + "\" fill=\"none\" stroke=\"" + _0x1342a3 + "\" stroke-width=\"5\" stroke-dasharray=\"10 10\" opacity=\".74\" />").join("");
        return "<svg viewBox=\"0 0 1280 720\" preserveAspectRatio=\"none\" aria-hidden=\"true\">" + _0x43ab80 + (_0x4c2df7.pads || []).map(_0x2c5395 => "<circle cx=\"" + (_0x2c5395.x ?? _0x2c5395[0]) + "\" cy=\"" + (_0x2c5395.y ?? _0x2c5395[1]) + "\" r=\"36\" fill=\"none\" stroke=\"" + _0x1342a3 + "\" stroke-width=\"4\" opacity=\".82\" />").join("") + "<circle cx=\"" + _0x4c2df7.crown.x + "\" cy=\"" + _0x4c2df7.crown.y + "\" r=\"47\" fill=\"none\" stroke=\"#facc15\" stroke-width=\"5\" /></svg>";
      }(_0x2cc9ff, _0x21cf19) + "<span class=\"preview-label\">" + (_0x24cd8e ? "只读现有关卡" : "原图 / 蒙版 / JSON 对齐") + "</span>" + (_0x24cd8e ? "" : "<label class=\"select-level\"><input type=\"checkbox\" class=\"batch-check\" />加入并行队列</label>") + "<i class=\"preview-shade\"></i></div>\n      <div class=\"level-panel\">\n        <div class=\"level-title-row\"><div><span class=\"level-index\">LEVEL " + String(_0x2cc9ff.id).padStart(2, "0") + "</span><h3>" + _0x2cc9ff.name + "</h3></div><span class=\"lock-badge\">" + (_0x24cd8e ? "锁定 · 不改动" : "可编辑 · 已接入") + "</span></div>\n        <div class=\"pipeline\">" + y("原图导入", _0xc8588d.generated, 1) + y("API 蒙版", _0xc8588d.annotated, 2) + y("颜色识别", _0xc8588d.recognized, 3) + y("游戏替换", _0xc8588d.published, 4) + "</div>\n        " + (_0x340fb8 ? "<label class=\"mask-control\">蒙版对比 <input type=\"range\" class=\"mask-opacity\" min=\"0\" max=\"100\" value=\"48\" /><span>48%</span></label>" : "") + "\n        " + (_0x24cd8e || !_0xc8588d.recognized ? "" : "<div class=\"recognition-chips\"><span>" + (_0x41b93d.entryCount ?? _0x2cc9ff.paths.length) + " 入口</span><span>" + (_0x41b93d.padCount ?? _0x2cc9ff.pads.length) + " 塔位</span><span>1 唯一终点</span></div>") + "\n        <div class=\"form-grid\">\n          <label class=\"field\">关卡名称<input data-field=\"name\" value=\"" + _0x2cc9ff.name + "\" " + (_0x24cd8e ? "disabled" : "") + " /></label>\n          <label class=\"field\">主题<select data-field=\"theme\" " + (_0x24cd8e ? "disabled" : "") + ">" + (_0x24cd8e ? "<option>" + _0x1aaa0d.name + "</option>" : _0x328f18) + "</select></label>\n        </div>\n        <details class=\"settings-editor\"><summary>编辑关卡主题与设定</summary><div class=\"detail-fields\"><label class=\"field\">主题设定<textarea data-field=\"setting\" " + (_0x24cd8e ? "disabled" : "") + ">" + _0x2cc9ff.setting + "</textarea></label><label class=\"field\">地图生成提示词<textarea class=\"prompt\" data-field=\"prompt\" " + (_0x24cd8e ? "disabled" : "") + ">" + (_0x2cc9ff.prompt || "现有地图只读，不重新生成。") + "</textarea></label></div></details>\n        <div class=\"block-actions\">\n          <button data-action=\"mask\" " + (_0x24cd8e ? "disabled" : "") + ">① API 蒙版</button>\n          <button data-action=\"recognize-mask\" class=\"quiet\" " + (_0x24cd8e ? "disabled" : "") + ">② 颜色识别</button>\n          <button data-action=\"publish\" class=\"publish\" " + (_0x24cd8e ? "disabled" : "") + ">③ 替换游戏地图</button>\n          <button data-action=\"play\" class=\"quiet\">④ 游戏验证</button>\n          <button data-action=\"save\" class=\"quiet\" " + (_0x24cd8e ? "disabled" : "") + ">保存 JSON</button>\n        </div>\n        <details><summary>高级：编辑路线、塔位与唯一终点 JSON</summary><textarea class=\"json-editor\" " + (_0x24cd8e ? "disabled" : "") + ">" + _0x59ad00 + "</textarea></details>\n        <p class=\"report\">" + (_0xc8588d.recognized ? "已识别：" + _0x2cc9ff.paths.length + " 个入口全部连接唯一终点，" + _0x2cc9ff.pads.length + " 个合法塔位。" : "等待颜色识别：洋红道路、青色塔位、黄色终点、红色入口。") + "</p>\n      </div>\n    </article>";
    }).join("");
    i.levels.forEach(_0x1ba60c => {
      const _0x2dedb3 = e.querySelector("[data-level-id=\"" + _0x1ba60c.id + "\"]").querySelector("[data-field=\"theme\"]");
      if (!_0x1ba60c.readOnly) {
        _0x2dedb3.value = _0x1ba60c.theme;
      }
    });
  })();
}
async function v(_0x2c63e6, _0x3e9cce) {
  var _0x3e57b2;
  var _0x20400d;
  const _0x24a71c = Number(_0x2c63e6.dataset.levelId);
  const _0x4aa487 = _0x2c63e6.querySelector(".report");
  if (_0x3e9cce !== "play") {
    _0x2c63e6.classList.add("busy");
    try {
      if (_0x3e9cce === "save") {
        const _0x239829 = function (_0x3fecb6) {
          const _0x7ca369 = Number(_0x3fecb6.dataset.levelId);
          const _0x48cf87 = i.levels.find(_0xb3b28a => _0xb3b28a.id === _0x7ca369);
          const _0x23c313 = JSON.parse(_0x3fecb6.querySelector(".json-editor").value);
          return {
            ..._0x48cf87,
            name: _0x3fecb6.querySelector("[data-field=\"name\"]").value.trim(),
            theme: _0x3fecb6.querySelector("[data-field=\"theme\"]").value,
            setting: _0x3fecb6.querySelector("[data-field=\"setting\"]").value.trim(),
            prompt: _0x3fecb6.querySelector("[data-field=\"prompt\"]").value.trim(),
            paths: _0x23c313.paths,
            pads: _0x23c313.pads,
            crown: _0x23c313.crown,
            roadWidth: Number(_0x23c313.roadWidth || _0x48cf87.roadWidth)
          };
        }(_0x2c63e6);
        await p("save", {
          body: {
            level: _0x239829
          }
        });
        c("第 " + _0x24a71c + " 关设定与标注已保存。");
      } else if (_0x3e9cce === "generate") {
        if (!r) {
          throw new Error("生图密钥未就绪。请在启动开发服务器前设置 OG_API_KEY（推荐）或 OPENAI_API_KEY。");
        }
        const _0x487a27 = _0x2c63e6.querySelector("[data-field=\"prompt\"]").value.trim();
        _0x4aa487.textContent = "正在生成高质量底图…";
        await p("generate", {
          body: {
            id: _0x24a71c,
            prompt: _0x487a27
          }
        });
        c("第 " + _0x24a71c + " 关底图生成完成。");
      } else if (_0x3e9cce === "mask") {
        if (!r) {
          throw new Error("蒙版生图密钥未就绪。请在启动环境设置 OG_API_KEY（推荐）或 OPENAI_API_KEY。");
        }
        _0x4aa487.textContent = "正在根据原图生成四色语义蒙版…";
        await p("generate-mask", {
          body: {
            id: _0x24a71c
          }
        });
        c("第 " + _0x24a71c + " 关 API 蒙版生成完成。");
      } else if (_0x3e9cce === "recognize-mask") {
        _0x4aa487.textContent = "正在按颜色提取道路骨架、入口、塔位与唯一终点…";
        const _0x34e782 = await p("recognize-mask", {
          body: {
            id: _0x24a71c
          }
        });
        _0x4aa487.className = "report ok";
        _0x4aa487.textContent = "颜色识别通过：" + _0x34e782.report.entryCount + " 个入口、" + _0x34e782.report.padCount + " 个塔位、1 个唯一终点。";
        c("第 " + _0x24a71c + " 关颜色识别完成。");
      } else if (_0x3e9cce === "validate") {
        _0x4aa487.textContent = "正在识别路线拓扑、终点与塔位合法性…";
        const _0x1d4d41 = await p("validate", {
          body: {
            id: _0x24a71c
          }
        });
        _0x4aa487.className = "report ok";
        _0x4aa487.textContent = "识别通过：" + _0x1d4d41.report.checks.entryCount + " 个入口全部连接唯一终点；路线连续；塔位合法；画面与 JSON 同源。";
        c("第 " + _0x24a71c + " 关识别通过。");
      } else if (_0x3e9cce === "publish") {
        _0x4aa487.textContent = "正在合成最终地图并同步游戏 JSON…";
        const _0x418fb3 = await p("publish", {
          body: {
            id: _0x24a71c
          }
        });
        _0x4aa487.className = "report ok";
        _0x4aa487.textContent = "发布成功：" + _0x418fb3.report.checks.entryCount + " 条路线和全部塔位已写入游戏。";
        c("第 " + _0x24a71c + " 关已发布到游戏。");
      }
      await $();
    } catch (_0xea318f) {
      _0x4aa487.className = "report bad";
      _0x4aa487.textContent = ((_0x20400d = (_0x3e57b2 = _0xea318f.report) == null ? undefined : _0x3e57b2.errors) == null ? undefined : _0x20400d.join("；")) || _0xea318f.message;
      c(_0xea318f.message, true);
    } finally {
      _0x2c63e6.classList.remove("busy");
    }
  } else {
    window.open("./?level=" + _0x24a71c, "_blank", "noopener");
  }
}
e.addEventListener("click", _0x156b8f => {
  const _0x50d070 = _0x156b8f.target.closest("button[data-action]");
  if (_0x50d070) {
    v(_0x50d070.closest(".level-block"), _0x50d070.dataset.action);
  }
});
document.getElementById("batch-generate").addEventListener("click", async () => {
  if (!r) {
    return c("生图密钥未就绪，无法启动并行生成。", true);
  }
  const _0x145fe8 = [...e.querySelectorAll(".level-block")].filter(_0x58255f => {
    var _0x547f0f;
    if ((_0x547f0f = _0x58255f.querySelector(".batch-check")) == null) {
      return undefined;
    } else {
      return _0x547f0f.checked;
    }
  });
  if (!_0x145fe8.length) {
    return c("请先勾选至少一个可编辑关卡。", true);
  }
  const _0x321418 = Number(l.value);
  let _0x41ae54 = 0;
  await Promise.all(Array.from({
    length: Math.min(_0x321418, _0x145fe8.length)
  }, async function () {
    while (_0x41ae54 < _0x145fe8.length) {
      const _0x406440 = _0x145fe8[_0x41ae54];
      _0x41ae54 += 1;
      await v(_0x406440, "mask");
    }
  }));
  c(_0x145fe8.length + " 个关卡的并行生成队列已完成。");
});
document.getElementById("import-map-library").addEventListener("click", async () => {
  try {
    await p("import-library", {
      body: {}
    });
    c("六关原图与六张蒙版已从地图合集同步；第 1、2 关游戏数据未改动。");
    await $();
  } catch (_0x36f9ca) {
    c(_0x36f9ca.message, true);
  }
});
e.addEventListener("input", _0x2eccd2 => {
  var _0x3564bc;
  if (!_0x2eccd2.target.classList.contains("mask-opacity")) {
    return;
  }
  const _0x4d31f1 = _0x2eccd2.target.closest(".level-block");
  const _0x361e72 = Number(_0x2eccd2.target.value) / 100;
  if ((_0x3564bc = _0x4d31f1.querySelector(".mask-layer")) != null) {
    _0x3564bc.style.setProperty("opacity", _0x361e72);
  }
  _0x2eccd2.target.nextElementSibling.textContent = _0x2eccd2.target.value + "%";
});
document.getElementById("refresh-workbench").addEventListener("click", $);
$().catch(_0x804660 => {
  n.textContent = "工作台连接失败";
  s.textContent = "请通过开发服务器打开 level-workbench.html";
  c(_0x804660.message, true);
});