import "./modulepreload-polyfill-B5Qt9EMX.js";
const e = document.querySelector("#level-grid");
const t = document.querySelector("#global-status");
const a = document.querySelector("#json-dialog");
const s = document.querySelector("#json-editor");
const n = document.querySelector("#json-status");
const i = new Map();
let o;
let r;
const l = _0x26beda => String(_0x26beda ?? "").replace(/[&<>'"]/g, _0x51a23b => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  "\"": "&quot;"
})[_0x51a23b]);
function d(_0x10ae99) {
  if (!i.has(_0x10ae99)) {
    i.set(_0x10ae99, {
      phase: "idle",
      message: "",
      tab: "map",
      assets: {}
    });
  }
  return i.get(_0x10ae99);
}
function c(_0x16dfd8, _0x3ed036 = false) {
  t.textContent = _0x16dfd8;
  t.classList.toggle("is-error", _0x3ed036);
}
async function u(_0x3e1c55, _0x403b8f) {
  const _0x1e84e4 = await fetch(_0x3e1c55, _0x403b8f);
  const _0x35172b = await _0x1e84e4.json().catch(() => ({}));
  if (!_0x1e84e4.ok) {
    throw new Error(_0x35172b.error || "请求失败 (" + _0x1e84e4.status + ")");
  }
  return _0x35172b;
}
async function p() {
  await u("/api/level-spec", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(o)
  });
}
function m(_0x5b0d4e, _0x6e14bb) {
  if (_0x6e14bb === "base") {
    return [o.sharedBasePrompt, "LEVEL STRUCTURE: " + _0x5b0d4e.routePlan, "ENVIRONMENT: " + _0x5b0d4e.environment, "TOWER PADS: " + _0x5b0d4e.towerPadStyle, _0x5b0d4e.basePrompt, "STRICT EXCLUSIONS: " + _0x5b0d4e.negativeConstraints].join("\n\n");
  } else {
    return [o.sharedOverlayPrompt, "EXPECTED BLUE TOWER PAD COUNT: exactly " + _0x5b0d4e.towerCount + ".", _0x5b0d4e.overlayPrompt].join("\n\n");
  }
}
function v(_0x294984) {
  const _0x16855c = d(_0x294984.id);
  const _0x69d35f = function (_0x1ed923, _0x468c17) {
    const _0x5aa654 = d(_0x1ed923.id);
    const _0x4061c2 = "/assets/levels/" + _0x1ed923.id;
    return {
      map: _0x5aa654.assets.mapUrl || _0x1ed923.existingMap,
      overlay: _0x5aa654.assets.overlayUrl || _0x1ed923.existingOverlay,
      path: _0x5aa654.assets.pathMaskUrl || _0x4061c2 + "/path-mask.png",
      towers: _0x5aa654.assets.towerMaskUrl || _0x4061c2 + "/tower-mask.png"
    }[_0x468c17];
  }(_0x294984, _0x16855c.tab);
  const _0x2b9e09 = _0x16855c.phase === "working";
  const _0x3e3742 = _0x16855c.assets.updatedAt ? "?v=" + encodeURIComponent(_0x16855c.assets.updatedAt) : "";
  const _0xbc0f5d = _0x69d35f ? "<img src=\"" + l(_0x69d35f) + _0x3e3742 + "\" alt=\"" + l(_0x294984.name) + " " + l(_0x16855c.tab) + "\" />" : "<div class=\"preview-empty\">尚未生成</div>";
  return "\n    <article class=\"level-card\" data-id=\"" + l(_0x294984.id) + "\">\n      <header class=\"card-header\">\n        <div class=\"theme-index\">" + String(o.themes.indexOf(_0x294984) + 1).padStart(2, "0") + "</div>\n        <div class=\"theme-title\">\n          <input class=\"name-input\" data-field=\"name\" value=\"" + l(_0x294984.name) + "\" aria-label=\"主题名称\" />\n          <span>" + l(_0x294984.id) + "</span>\n        </div>\n        <div class=\"palette\" aria-label=\"主题配色\">" + function (_0x3dbada) {
    return _0x3dbada.map(_0x327a21 => "<i style=\"--swatch:" + l(_0x327a21) + "\" title=\"" + l(_0x327a21) + "\"></i>").join("");
  }(_0x294984.palette) + "</div>\n      </header>\n\n      <div class=\"preview-tabs\" role=\"tablist\">\n        <button data-tab=\"map\" class=\"" + (_0x16855c.tab === "map" ? "is-active" : "") + "\" type=\"button\">原图</button>\n        <button data-tab=\"overlay\" class=\"" + (_0x16855c.tab === "overlay" ? "is-active" : "") + "\" type=\"button\">标注</button>\n        <button data-tab=\"path\" class=\"" + (_0x16855c.tab === "path" ? "is-active" : "") + "\" type=\"button\">路径</button>\n        <button data-tab=\"towers\" class=\"" + (_0x16855c.tab === "towers" ? "is-active" : "") + "\" type=\"button\">塔位</button>\n      </div>\n      <div class=\"level-preview\">" + _0xbc0f5d + "</div>\n\n      <div class=\"card-fields\">\n        <label>关卡设定<textarea data-field=\"description\" rows=\"2\">" + l(_0x294984.description) + "</textarea></label>\n        <div class=\"field-row\">\n          <label>塔位数量<input data-field=\"towerCount\" type=\"number\" min=\"1\" max=\"30\" value=\"" + _0x294984.towerCount + "\" /></label>\n          <label>生成尺寸<select data-field=\"size\">\n            <option value=\"1536x1024\" " + (_0x294984.size === "1536x1024" ? "selected" : "") + ">1536 × 1024</option>\n            <option value=\"1024x1024\" " + (_0x294984.size === "1024x1024" ? "selected" : "") + ">1024 × 1024</option>\n          </select></label>\n        </div>\n        <details>\n          <summary>原图提示词</summary>\n          <textarea data-field=\"basePrompt\" rows=\"4\">" + l(_0x294984.basePrompt) + "</textarea>\n        </details>\n        <details>\n          <summary>蒙版补充提示词</summary>\n          <textarea data-field=\"overlayPrompt\" rows=\"4\">" + l(_0x294984.overlayPrompt) + "</textarea>\n        </details>\n      </div>\n\n      <p class=\"card-status " + (_0x16855c.phase === "error" ? "is-error" : "") + "\">" + l(function (_0x2a60aa) {
    var _0x29005d;
    var _0x1b6d0e;
    var _0x435045;
    var _0x5c8738;
    var _0x46763b;
    const _0x16e27a = d(_0x2a60aa.id);
    if (_0x16e27a.phase === "working" || _0x16e27a.phase === "error") {
      return _0x16e27a.message;
    }
    if (_0x16e27a.assets.ready) {
      const _0x349914 = (_0x1b6d0e = (_0x29005d = _0x16e27a.assets.analysis) == null ? undefined : _0x29005d.routeLengths) == null ? undefined : _0x1b6d0e.join(" / ");
      const _0x49d413 = (_0x5c8738 = (_0x435045 = _0x16e27a.assets.analysis) == null ? undefined : _0x435045.quality) == null ? undefined : _0x5c8738.minimumTowerRoadClearance;
      return "质量检查通过 · " + (((_0x46763b = _0x16e27a.assets.analysis) == null ? undefined : _0x46763b.grid) || "导航已生成") + (_0x349914 ? " · 路线 " + _0x349914 : "") + (Number.isFinite(_0x49d413) ? " · 塔路间隔 " + _0x49d413 + "px" : "");
    }
    if (_0x16e27a.assets.hasOverlay || _0x2a60aa.existingOverlay) {
      return "蒙版已就绪，等待解析";
    } else if (_0x16e27a.assets.hasMap || _0x2a60aa.existingMap) {
      return "原图已就绪，等待绘制蒙版";
    } else {
      return "等待生成原始关卡";
    }
  }(_0x294984)) + "</p>\n      <div class=\"card-actions\">\n        <button data-action=\"base\" type=\"button\" " + (_0x2b9e09 ? "disabled" : "") + ">生成原图</button>\n        <button data-action=\"overlay\" type=\"button\" " + (_0x2b9e09 || !_0x16855c.assets.hasMap && !_0x294984.existingMap ? "disabled" : "") + ">绘制蒙版</button>\n        <button data-action=\"analyze\" type=\"button\" " + (_0x2b9e09 || !_0x16855c.assets.hasOverlay && !_0x294984.existingOverlay ? "disabled" : "") + ">解析路径</button>\n        <button data-action=\"export\" type=\"button\" " + (_0x2b9e09 || !_0x16855c.assets.ready ? "disabled" : "") + ">检查产出</button>\n      </div>\n    </article>";
}
function y() {
  e.innerHTML = o.themes.map(v).join("");
  e.querySelectorAll(".level-card").forEach(_0x31ea16 => {
    const _0x47e7e3 = o.themes.find(_0x386282 => _0x386282.id === _0x31ea16.dataset.id);
    _0x31ea16.querySelectorAll("[data-tab]").forEach(_0x5a1408 => _0x5a1408.addEventListener("click", () => {
      d(_0x47e7e3.id).tab = _0x5a1408.dataset.tab;
      y();
    }));
    _0x31ea16.querySelectorAll("[data-field]").forEach(_0x3f7738 => _0x3f7738.addEventListener("input", () => {
      _0x47e7e3[_0x3f7738.dataset.field] = _0x3f7738.type === "number" ? Number(_0x3f7738.value) : _0x3f7738.value;
      window.clearTimeout(r);
      r = window.setTimeout(async () => {
        try {
          await p();
          c("关卡 JSON 已保存");
        } catch (_0x12b0e9) {
          c("保存失败：" + _0x12b0e9.message, true);
        }
      }, 500);
    }));
    _0x31ea16.querySelectorAll("[data-action]").forEach(_0x4bffd6 => _0x4bffd6.addEventListener("click", () => {
      (async function (_0x582394, _0x2f3d70) {
        const _0x560729 = d(_0x582394.id);
        const _0x233918 = {
          base: "正在生成干净关卡…",
          overlay: "正在按参考图绘制蒙版…",
          analyze: "正在识别颜色并验证寻路…"
        };
        if (_0x2f3d70 === "export") {
          try {
            const _0x431333 = await u("/api/level-package?id=" + encodeURIComponent(_0x582394.id));
            c(_0x582394.name + " 产出完整：" + _0x431333.files.join("、"));
          } catch (_0x3e2c8b) {
            c(_0x582394.name + "：" + _0x3e2c8b.message, true);
          }
          return;
        }
        _0x560729.phase = "working";
        _0x560729.message = _0x233918[_0x2f3d70];
        y();
        try {
          const _0x587a6b = {
            base: "/api/generate-level-base",
            overlay: "/api/generate-level-overlay",
            analyze: "/api/analyze-level"
          };
          const _0xebc21b = {
            id: _0x582394.id,
            prompt: m(_0x582394, _0x2f3d70 === "base" ? "base" : "overlay")
          };
          const _0x3007c2 = await u(_0x587a6b[_0x2f3d70], {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(_0xebc21b)
          });
          _0x560729.assets = {
            ..._0x560729.assets,
            ..._0x3007c2,
            updatedAt: Date.now()
          };
          _0x560729.phase = "done";
          _0x560729.tab = _0x2f3d70 === "base" ? "map" : _0x2f3d70 === "overlay" ? "overlay" : "path";
          c(_0x582394.name + "：" + (_0x2f3d70 === "analyze" ? "导航数据与塔位已生成" : "图像已保存"));
        } catch (_0x373b6d) {
          _0x560729.phase = "error";
          _0x560729.message = _0x373b6d.message;
          c(_0x582394.name + "：" + _0x373b6d.message, true);
        }
        y();
      })(_0x47e7e3, _0x4bffd6.dataset.action);
    }));
  });
}
document.querySelector("#open-json").addEventListener("click", () => {
  s.value = JSON.stringify(o, null, 2);
  n.textContent = "修改会覆盖当前工作台配置";
  a.showModal();
});
document.querySelector("#apply-json").addEventListener("click", async () => {
  try {
    const _0x3f00dd = JSON.parse(s.value);
    if (!Array.isArray(_0x3f00dd.themes) || !_0x3f00dd.themes.length) {
      throw new Error("themes 必须是非空数组");
    }
    o = _0x3f00dd;
    await p();
    a.close();
    y();
    c("全部关卡 JSON 已应用");
  } catch (_0x2681d5) {
    n.textContent = "无法应用：" + _0x2681d5.message;
  }
});
Promise.all([u("/api/level-spec"), u("/api/level-assets")]).then(([_0x1e243a, _0x4a7811]) => {
  o = _0x1e243a;
  _0x4a7811.levels.forEach(_0x3a519a => i.set(_0x3a519a.id, {
    phase: "idle",
    message: "",
    tab: "map",
    assets: _0x3a519a
  }));
  y();
  c("已载入 " + o.themes.length + " 个关卡主题");
}).catch(_0x2e2f85 => c(_0x2e2f85.message, true));