import "./modulepreload-polyfill-B5Qt9EMX.js";
const e = document.querySelector("#category-sections");
const t = document.querySelector("#generation-status");
const s = document.querySelector("#summary");
const a = document.querySelector("#queue-count");
const n = document.querySelector("#priority-filter");
const i = document.querySelector("#status-filter");
const r = new Set();
const o = new Map();
let c;
let d;
const l = _0x26c9eb => String(_0x26c9eb).replace(/[&<>'"]/g, _0x3a207e => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  "\"": "&quot;"
})[_0x3a207e]);
function p(_0x20e16f) {
  return o.get(_0x20e16f) || {
    phase: "waiting",
    assets: []
  };
}
function u() {
  const _0x4cf7ae = c.generationBatches || [];
  const _0x2e3522 = new Set(_0x4cf7ae.flatMap(_0x5df422 => _0x5df422.members || []));
  return [...c.items.filter(_0x1b1909 => !_0x2e3522.has(_0x1b1909.id)), ..._0x4cf7ae];
}
function h(_0x1bf25c) {
  if (_0x1bf25c.kind === "animation") {
    return "experimental";
  } else if (p(_0x1bf25c.id).assets.length) {
    return "ready";
  } else {
    return "missing";
  }
}
function g() {
  a.textContent = "已选择 " + r.size + " 项";
}
async function m() {
  const _0x137202 = await fetch("/api/asset-spec", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(c)
  });
  const _0x796d8c = await _0x137202.json();
  if (!_0x137202.ok) {
    throw new Error(_0x796d8c.error || "无法保存素材清单。");
  }
}
function y(_0x113f77) {
  var _0x1f1809;
  const _0x3ba55c = p(_0x113f77.id);
  const _0x30df9a = h(_0x113f77);
  const _0x2264b1 = _0x30df9a === "ready" ? "已有" : _0x30df9a === "experimental" ? "动画实验" : "待生成";
  const _0x94e59 = _0x113f77.outputMode === "opaque" ? "完整画面" : _0x113f77.outputMode === "animation-reference" ? "关键帧参考" : "透明切图";
  const _0x55c343 = (_0x1f1809 = _0x113f77.frames) != null && _0x1f1809.length ? "<div class=\"batch-frame-list\" aria-label=\"图集格子顺序\">" + _0x113f77.frames.map((_0x49511e, _0x53bc76) => "<span><b>" + (_0x53bc76 + 1) + "</b>" + l(_0x49511e) + "</span>").join("") + "</div>" : "";
  const _0x18d31a = _0x113f77.displayContract;
  const _0x4fdc7e = (_0x18d31a == null ? undefined : _0x18d31a.sourceLayout) === "grid-2x2" ? "2×2" : (_0x18d31a == null ? undefined : _0x18d31a.sourceLayout) === "vertical" ? "纵向" : (_0x18d31a == null ? undefined : _0x18d31a.sourceLayout) === "horizontal" && _0x113f77.frameCount ? "横向" : "单图";
  const _0x5486a0 = _0x18d31a ? (_0x113f77.frameCount || 1) + " " + (_0x113f77.frameCount ? "格" : "张") + " · 游戏槽 " + _0x18d31a.targetWidth + "×" + _0x18d31a.targetHeight + " · 源图" + _0x4fdc7e + " · " + (_0x18d31a.fit === "stretch-within-tolerance" ? "≤10% 轻微拉伸，超出等比" : "等比适配") : "未声明游戏显示比例";
  return "<article class=\"asset-card status-" + _0x30df9a + " " + (_0x113f77.frameCount ? "is-batch" : "") + "\" data-id=\"" + l(_0x113f77.id) + "\">\n    <header class=\"card-header\">\n      <label class=\"select-control\"><input class=\"select-input\" type=\"checkbox\" " + (r.has(_0x113f77.id) ? "checked" : "") + " /><span class=\"priority priority-" + _0x113f77.priority + "\">" + _0x113f77.priority + "</span></label>\n      <div class=\"card-title\"><span class=\"asset-meta\">" + l(_0x113f77.size) + " · " + _0x94e59 + "</span><h3>" + l(_0x113f77.name) + "</h3></div>\n      <span class=\"status-chip status-chip-" + _0x30df9a + "\">" + _0x2264b1 + "</span>\n    </header>\n    <div class=\"asset-preview\">" + function (_0xa1a422) {
    const _0x34581f = p(_0xa1a422.id);
    if (_0x34581f.assets.length) {
      return "<div class=\"preview-gallery " + (_0x34581f.assets.length > 1 ? "is-multiple" : "") + "\">" + _0x34581f.assets.map((_0x1933da, _0x5c6d01) => "\n    <a href=\"" + l(_0x1933da.imageUrl) + "\" target=\"_blank\" title=\"打开原图\">\n      <img src=\"" + l(_0x1933da.imageUrl) + "\" alt=\"" + l(_0xa1a422.name) + (_0x34581f.assets.length > 1 ? " " + (_0x5c6d01 + 1) : "") + "\" loading=\"lazy\" />\n    </a>").join("") + "</div>";
    } else {
      return "<div class=\"image-placeholder\"><span>" + (_0x34581f.phase === "generating" ? "正在生成" : _0xa1a422.kind === "animation" ? "动画参考待生成" : "尚无素材") + "</span></div>";
    }
  }(_0x113f77) + "</div>\n    <div class=\"display-contract " + (_0x18d31a ? "" : "is-missing") + "\">" + l(_0x5486a0) + "</div>\n    " + _0x55c343 + "\n    <p class=\"asset-purpose\">" + l(_0x113f77.purpose || "") + "</p>\n    <details class=\"prompt-panel\"><summary>生成提示词</summary><textarea class=\"prompt-editor\" rows=\"6\">" + l(_0x113f77.prompt) + "</textarea></details>\n    <div class=\"card-footer\"><span>" + (_0x3ba55c.assets.length ? _0x3ba55c.assets.length + " 个版本 · 自动发布到游戏" : "无本地文件") + "</span><button class=\"card-generate " + (_0x3ba55c.phase === "generating" ? "is-busy" : "") + "\" type=\"button\" " + (_0x3ba55c.phase === "generating" ? "disabled" : "") + ">" + (_0x3ba55c.phase === "generating" ? "生成中…" : _0x3ba55c.assets.length ? "生成并替换" : "生成素材") + "</button></div>\n  </article>";
}
function f() {
  return u().filter(_0x59f23b => {
    const _0x26f71d = n.value === "all" || _0x59f23b.priority === n.value;
    const _0xcd3a3e = i.value === "all" || h(_0x59f23b) === i.value;
    return _0x26f71d && _0xcd3a3e;
  });
}
function $() {
  const _0x3c62f7 = f();
  e.innerHTML = c.categories.map(_0x1887fa => {
    const _0x2de1ca = _0x3c62f7.filter(_0x533ba6 => _0x533ba6.categoryId === _0x1887fa.id);
    if (!_0x2de1ca.length) {
      return "";
    }
    const _0x55662a = _0x2de1ca.filter(_0x2460af => h(_0x2460af) === "ready").length;
    return "<section class=\"asset-section\"><header class=\"section-header\"><div><p class=\"section-kicker\">" + l(_0x1887fa.labelEn || _0x1887fa.id) + "</p><h2>" + l(_0x1887fa.name) + "</h2><p>" + l(_0x1887fa.description || "") + "</p></div><span>" + _0x55662a + " / " + _0x2de1ca.length + " 已有</span></header><div class=\"asset-grid\">" + _0x2de1ca.map(y).join("") + "</div></section>";
  }).join("") || "<div class=\"empty-state\">当前筛选条件下没有素材。</div>";
  e.querySelectorAll(".asset-card").forEach(_0x263a55 => {
    const _0x470ed5 = u().find(_0x227718 => _0x227718.id === _0x263a55.dataset.id);
    _0x263a55.querySelector(".select-input").addEventListener("change", _0x548944 => {
      if (_0x548944.target.checked) {
        r.add(_0x470ed5.id);
      } else {
        r.delete(_0x470ed5.id);
      }
      g();
    });
    _0x263a55.querySelector(".prompt-editor").addEventListener("input", _0x3f9e56 => {
      _0x470ed5.prompt = _0x3f9e56.target.value;
      window.clearTimeout(d);
      d = window.setTimeout(async () => {
        try {
          await m();
          t.textContent = "提示词已保存到本地素材清单。";
        } catch (_0x569c7a) {
          t.textContent = "保存失败：" + _0x569c7a.message;
        }
      }, 500);
    });
    _0x263a55.querySelector(".prompt-editor").addEventListener("blur", () => {
      window.clearTimeout(d);
      m().then(() => {
        t.textContent = "提示词已保存。";
      }).catch(_0x4abba7 => {
        t.textContent = "保存失败：" + _0x4abba7.message;
      });
    });
    _0x263a55.querySelector(".card-generate").addEventListener("click", () => v(_0x470ed5));
  });
  (function () {
    const _0x39f1be = u();
    const _0x21b8e6 = _0x39f1be.filter(_0x4064e9 => h(_0x4064e9) === "ready").length;
    const _0x1eb925 = _0x39f1be.filter(_0x301dd0 => h(_0x301dd0) === "missing").length;
    const _0x1f436b = _0x39f1be.filter(_0x2b5ade => h(_0x2b5ade) === "experimental").length;
    s.innerHTML = "<span><strong>" + _0x39f1be.length + "</strong> 项生成任务</span><span><strong>" + _0x21b8e6 + "</strong> 已有</span><span><strong>" + _0x1eb925 + "</strong> 待生成</span><span><strong>" + _0x1f436b + "</strong> 动画实验</span>";
  })();
  g();
}
async function v(_0x12fde1) {
  const _0x1a1f16 = p(_0x12fde1.id).assets;
  o.set(_0x12fde1.id, {
    phase: "generating",
    assets: _0x1a1f16
  });
  $();
  try {
    const _0x3a70a2 = await fetch("/api/generate-asset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: _0x12fde1.id,
        size: _0x12fde1.size,
        outputMode: _0x12fde1.outputMode,
        prompt: c.stylePrompt + "\n" + _0x12fde1.prompt
      })
    });
    const _0xb03102 = await _0x3a70a2.json();
    if (!_0x3a70a2.ok) {
      throw new Error(_0xb03102.error || "生成失败。");
    }
    o.set(_0x12fde1.id, {
      phase: "done",
      assets: [_0xb03102, ..._0x1a1f16]
    });
    t.textContent = _0x12fde1.name + " 已生成并保存。";
  } catch (_0x4397f5) {
    o.set(_0x12fde1.id, {
      phase: "error",
      assets: _0x1a1f16
    });
    t.textContent = _0x12fde1.name + "：" + _0x4397f5.message;
  }
  $();
}
document.querySelector("#select-visible").addEventListener("click", () => {
  const _0x1c6f83 = f().filter(_0x414f1a => h(_0x414f1a) !== "ready");
  const _0x1d8942 = _0x1c6f83.length && _0x1c6f83.every(_0x51e3b0 => r.has(_0x51e3b0.id));
  _0x1c6f83.forEach(_0x4e8256 => _0x1d8942 ? r.delete(_0x4e8256.id) : r.add(_0x4e8256.id));
  $();
});
[n, i].forEach(_0x4cf873 => _0x4cf873.addEventListener("change", $));
document.querySelector("#generate-selected").addEventListener("click", async () => {
  const _0x5c06f9 = u().filter(_0x144deb => r.has(_0x144deb.id));
  if (_0x5c06f9.length) {
    document.querySelector("#generate-selected").disabled = true;
    t.textContent = "正在生成 " + _0x5c06f9.length + " 项素材，同时最多处理三项。";
    await async function (_0x7d160a) {
      const _0x222c60 = [..._0x7d160a];
      await Promise.all(Array.from({
        length: Math.min(3, _0x222c60.length)
      }, async () => {
        while (_0x222c60.length) {
          await v(_0x222c60.shift());
        }
      }));
    }(_0x5c06f9);
    document.querySelector("#generate-selected").disabled = false;
  } else {
    t.textContent = "请先选择至少一项素材。";
  }
});
fetch("/api/asset-spec").then(_0x28a703 => _0x28a703.json().then(_0x781466 => ({
  response: _0x28a703,
  payload: _0x781466
}))).then(async ({
  response: _0x57292a,
  payload: _0x1b0d95
}) => {
  if (!_0x57292a.ok) {
    throw new Error(_0x1b0d95.error || "无法读取素材清单。");
  }
  c = _0x1b0d95;
  await async function () {
    const _0x409992 = u();
    _0x409992.forEach(_0x8ca341 => {
      const _0x440414 = (_0x8ca341.existingAssets || []).map(_0x3a3fd6 => ({
        imageUrl: _0x3a3fd6,
        rawUrl: _0x3a3fd6,
        fileName: _0x3a3fd6.split("/").pop()
      }));
      if (_0x440414.length) {
        o.set(_0x8ca341.id, {
          phase: "done",
          assets: _0x440414
        });
      }
    });
    const _0x5a24d2 = await fetch("/api/generated-assets");
    const _0x18388c = await _0x5a24d2.json();
    if (!_0x5a24d2.ok) {
      throw new Error(_0x18388c.error || "无法读取已生成素材。");
    }
    _0x18388c.assets.slice().reverse().forEach(_0x41f764 => {
      const _0x45cb42 = [..._0x409992].sort((_0x240933, _0x13b597) => _0x13b597.id.length - _0x240933.id.length).find(_0x2de8be => _0x41f764.fileName.startsWith(_0x2de8be.id + "-"));
      if (!_0x45cb42) {
        return;
      }
      const _0x4cfd04 = p(_0x45cb42.id);
      if (!_0x4cfd04.assets.some(_0x440bca => _0x440bca.imageUrl === _0x41f764.imageUrl)) {
        o.set(_0x45cb42.id, {
          phase: "done",
          assets: [_0x41f764, ..._0x4cfd04.assets]
        });
      }
    });
  }();
  $();
  t.textContent = "本地素材清单已载入。已有素材会直接显示，缺失项可以独立生成。";
}).catch(_0x6d6d12 => {
  t.textContent = _0x6d6d12.message;
});
const w = document.querySelector("#audio-category-sections");
const S = document.querySelector("#audio-generation-status");
const b = document.querySelector("#audio-summary");
const k = document.querySelector("#audio-queue-count");
const E = document.querySelector("#audio-generate-selected");
const q = document.querySelector("#audio-priority-filter");
const C = document.querySelector("#audio-kind-filter");
const x = document.querySelector("#audio-status-filter");
const L = new Set();
const j = new Map();
let T;
let A;
const P = _0x822964 => String(_0x822964 ?? "").replace(/[&<>'"]/g, _0x1cae4c => ({
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  "'": "&#39;",
  "\"": "&quot;"
})[_0x1cae4c]);
function M(_0x368be0) {
  return j.get(_0x368be0) || {
    phase: "waiting",
    assets: []
  };
}
function N(_0x13236d) {
  const _0x2fbc78 = M(_0x13236d.id);
  if (_0x13236d.selectedAsset || _0x2fbc78.assets.some(_0x9d7a86 => _0x9d7a86.selected)) {
    return "selected";
  } else if (_0x2fbc78.assets.length) {
    return "generated";
  } else {
    return "missing";
  }
}
function U() {
  k.textContent = "已选择 " + L.size + " 项";
}
function O(_0x498a1f) {
  document.querySelectorAll("[data-tab]").forEach(_0x4e15ff => {
    const _0x40d49d = _0x4e15ff.dataset.tab === _0x498a1f;
    _0x4e15ff.classList.toggle("is-active", _0x40d49d);
    _0x4e15ff.setAttribute("aria-selected", String(_0x40d49d));
  });
  document.querySelectorAll("[data-panel]").forEach(_0x4c29d6 => {
    _0x4c29d6.hidden = _0x4c29d6.dataset.panel !== _0x498a1f;
  });
  document.querySelector("[data-image-actions]").hidden = _0x498a1f !== "image";
  document.querySelector("[data-audio-actions]").hidden = _0x498a1f !== "audio";
  history.replaceState(null, "", _0x498a1f === "audio" ? "#audio" : location.pathname + location.search);
}
async function z() {
  const _0x5bdc07 = await fetch("/api/audio-spec", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(T)
  });
  const _0x22af84 = await _0x5bdc07.json();
  if (!_0x5bdc07.ok) {
    throw new Error(_0x22af84.error || "无法保存声音需求清单。");
  }
}
function H(_0x510d79) {
  const _0x67a070 = M(_0x510d79.id);
  if (_0x67a070.assets.length) {
    return "<div class=\"audio-version-list\">" + _0x67a070.assets.map(_0xa5f43a => function (_0xab88b2, _0x1ee6f3) {
      var _0x26dae6;
      const _0xe0d33f = _0x1ee6f3.selected || _0xab88b2.selectedAsset === _0x1ee6f3.fileName;
      return "<div class=\"audio-version " + (_0xe0d33f ? "is-selected" : "") + "\">\n    <div class=\"audio-version-heading\">\n      <span>" + (_0xe0d33f ? "当前采用" : "候选版本") + (_0x1ee6f3.masteringProfile ? " · " + ({
        gentle: "低尖锐源处理",
        soft: "柔和处理",
        standard: "标准处理",
        ambience: "环境处理"
      }[_0x1ee6f3.masteringProfile] || _0x1ee6f3.masteringProfile) : "") + (Number.isFinite((_0x26dae6 = _0x1ee6f3.sharpnessAnalysis) == null ? undefined : _0x26dae6.sharpnessScore) ? " · 尖锐度 " + _0x1ee6f3.sharpnessAnalysis.sharpnessScore + "/100" : "") + "</span>\n      <small>" + P(_0x1ee6f3.fileName) + "</small>\n    </div>\n    <audio controls preload=\"none\" src=\"" + P(_0x1ee6f3.audioUrl) + "\"></audio>\n    <button class=\"secondary-button audio-adopt\" type=\"button\" data-file=\"" + P(_0x1ee6f3.fileName) + "\" " + (_0xe0d33f ? "disabled" : "") + ">" + (_0xe0d33f ? "已采用" : "采用此版") + "</button>\n  </div>";
    }(_0x510d79, _0xa5f43a)).join("") + "</div>";
  } else {
    return "<div class=\"audio-placeholder\"><span>" + (_0x67a070.phase === "generating" ? "正在生成音频…" : "尚无候选音频") + "</span></div>";
  }
}
function I(_0x2f87ee) {
  var _0x5c0767;
  const _0x4e3e49 = M(_0x2f87ee.id);
  const _0xb44b4c = N(_0x2f87ee);
  const _0x5b0d00 = _0xb44b4c === "selected" ? "已采用" : _0xb44b4c === "generated" ? "待挑选" : "待生成";
  const _0x4e4ff7 = _0x2f87ee.kind === "music" ? "音乐" : _0x2f87ee.kind === "voice" ? "登场语音" : _0x2f87ee.loop ? "循环环境声" : "音效";
  const _0x2da234 = ((_0x5c0767 = T.generationCounts) == null ? undefined : _0x5c0767[_0x2f87ee.kind]) || 1;
  const _0x2d25a0 = _0x2da234 > 1 ? "生成 " + _0x2da234 + " 个候选" : "生成新版本";
  const _0x6724d1 = _0x2f87ee.voiceProfile ? "<p class=\"audio-trigger\"><strong>角色音色：</strong>" + P(_0x2f87ee.voiceProfile) + "</p>" : "";
  return "<article class=\"asset-card audio-card status-" + _0xb44b4c + "\" data-id=\"" + P(_0x2f87ee.id) + "\">\n    <header class=\"card-header\">\n      <label class=\"select-control\"><input class=\"select-input\" type=\"checkbox\" " + (L.has(_0x2f87ee.id) ? "checked" : "") + " /><span class=\"priority priority-" + _0x2f87ee.priority + "\">" + _0x2f87ee.priority + "</span></label>\n      <div class=\"card-title\"><span class=\"asset-meta\">" + _0x4e4ff7 + " · " + _0x2f87ee.durationSeconds + "s" + (_0x2f87ee.loop ? " · 循环" : "") + "</span><h3>" + P(_0x2f87ee.name) + "</h3></div>\n      <span class=\"status-chip status-chip-" + _0xb44b4c + "\">" + _0x5b0d00 + "</span>\n    </header>\n    <div class=\"audio-preview\">" + H(_0x2f87ee) + "</div>\n    " + _0x6724d1 + "\n    <p class=\"asset-purpose\">" + P(_0x2f87ee.purpose) + "</p>\n    <p class=\"audio-trigger\"><strong>触发：</strong>" + P(_0x2f87ee.trigger) + "</p>\n    <details class=\"prompt-panel\"><summary>生成提示词</summary><textarea class=\"prompt-editor\" rows=\"6\">" + P(_0x2f87ee.prompt) + "</textarea></details>\n    <div class=\"card-footer\"><span>" + (_0x4e3e49.assets.length ? _0x4e3e49.assets.length + " 个候选版本" : "无本地文件") + "</span><button class=\"card-generate " + (_0x4e3e49.phase === "generating" ? "is-busy" : "") + "\" type=\"button\" " + (_0x4e3e49.phase === "generating" ? "disabled" : "") + ">" + (_0x4e3e49.phase === "generating" ? "正在生成 " + _0x2da234 + " 个…" : _0x2d25a0) + "</button></div>\n  </article>";
}
function J() {
  return T.items.filter(_0x9cd760 => (q.value === "all" || _0x9cd760.priority === q.value) && (C.value === "all" || _0x9cd760.kind === C.value) && (x.value === "all" || N(_0x9cd760) === x.value));
}
function B() {
  const _0x1d65ec = J();
  w.innerHTML = T.categories.map(_0x5de3f6 => {
    const _0x5389f3 = _0x1d65ec.filter(_0x33dfee => _0x33dfee.categoryId === _0x5de3f6.id);
    if (!_0x5389f3.length) {
      return "";
    }
    const _0x5c1ed4 = _0x5389f3.filter(_0x4dce55 => N(_0x4dce55) === "selected").length;
    return "<section class=\"asset-section\"><header class=\"section-header\"><div><p class=\"section-kicker\">" + P(_0x5de3f6.labelEn || _0x5de3f6.id) + "</p><h2>" + P(_0x5de3f6.name) + "</h2><p>" + P(_0x5de3f6.description) + "</p></div><span>" + _0x5c1ed4 + " / " + _0x5389f3.length + " 已采用</span></header><div class=\"asset-grid audio-grid\">" + _0x5389f3.map(I).join("") + "</div></section>";
  }).join("") || "<div class=\"empty-state\">当前筛选条件下没有声音需求。</div>";
  w.querySelectorAll(".audio-card").forEach(_0x19499b => {
    const _0x222c2f = T.items.find(_0xdcc7c1 => _0xdcc7c1.id === _0x19499b.dataset.id);
    _0x19499b.querySelector(".select-input").addEventListener("change", _0x2bc119 => {
      if (_0x2bc119.target.checked) {
        L.add(_0x222c2f.id);
      } else {
        L.delete(_0x222c2f.id);
      }
      U();
    });
    _0x19499b.querySelector(".prompt-editor").addEventListener("input", _0x1117d1 => {
      _0x222c2f.prompt = _0x1117d1.target.value;
      window.clearTimeout(A);
      A = window.setTimeout(async () => {
        try {
          await z();
          S.textContent = "提示词已保存到本地声音需求清单。";
        } catch (_0x3a0cba) {
          S.textContent = "保存失败：" + _0x3a0cba.message;
        }
      }, 500);
    });
    _0x19499b.querySelector(".prompt-editor").addEventListener("blur", async () => {
      window.clearTimeout(A);
      try {
        await z();
        S.textContent = "提示词已保存。";
      } catch (_0x30541b) {
        S.textContent = "保存失败：" + _0x30541b.message;
      }
    });
    _0x19499b.querySelector(".card-generate").addEventListener("click", () => W(_0x222c2f));
    _0x19499b.querySelectorAll(".audio-adopt").forEach(_0x4366f1 => _0x4366f1.addEventListener("click", () => async function (_0x17f969, _0x493092) {
      S.textContent = "正在采用 " + _0x17f969.name + " 的候选版本…";
      try {
        const _0x5ca815 = await fetch("/api/select-audio", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: _0x17f969.id,
            fileName: _0x493092
          })
        });
        const _0x1624b6 = await _0x5ca815.json();
        if (!_0x5ca815.ok) {
          throw new Error(_0x1624b6.error || "无法采用该版本。");
        }
        _0x17f969.selectedAsset = _0x493092;
        const _0x732dc = M(_0x17f969.id);
        j.set(_0x17f969.id, {
          phase: "done",
          assets: _0x732dc.assets.map(_0x383292 => ({
            ..._0x383292,
            selected: _0x383292.fileName === _0x493092
          }))
        });
        S.textContent = _0x17f969.name + " 已采用并发布到 " + _0x1624b6.gameUrl;
        B();
      } catch (_0x25dca2) {
        S.textContent = _0x17f969.name + "：" + _0x25dca2.message;
      }
    }(_0x222c2f, _0x4366f1.dataset.file)));
  });
  (function () {
    const _0x444c7c = T.items;
    const _0x2927de = _0x444c7c.filter(_0x3db83d => _0x3db83d.kind === "music").length;
    const _0x86431 = _0x444c7c.filter(_0x13d90e => _0x13d90e.kind === "voice").length;
    const _0x2741e0 = _0x444c7c.filter(_0x3ae87d => N(_0x3ae87d) === "selected").length;
    const _0x4468f7 = _0x444c7c.filter(_0x52ac25 => N(_0x52ac25) === "generated").length;
    const _0x3a11f1 = _0x444c7c.filter(_0x5363c8 => N(_0x5363c8) === "missing").length;
    b.innerHTML = "<span><strong>" + _0x444c7c.length + "</strong> 项声音需求</span><span><strong>" + _0x2927de + "</strong> 首音乐</span><span><strong>" + _0x86431 + "</strong> 条语音</span><span><strong>" + _0x2741e0 + "</strong> 已采用</span><span><strong>" + _0x4468f7 + "</strong> 待挑选</span><span><strong>" + _0x3a11f1 + "</strong> 待生成</span>";
  })();
  U();
}
async function W(_0x364d00) {
  const _0x329420 = M(_0x364d00.id).assets;
  j.set(_0x364d00.id, {
    phase: "generating",
    assets: _0x329420
  });
  B();
  try {
    const _0x2541fb = await fetch("/api/generate-audio", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: _0x364d00.id,
        kind: _0x364d00.kind,
        model: T.models[_0x364d00.kind],
        prompt: _0x364d00.includeStylePrompt === false ? _0x364d00.prompt : T.stylePrompts[_0x364d00.kind] + "\n" + _0x364d00.prompt,
        durationSeconds: _0x364d00.durationSeconds,
        loop: _0x364d00.loop,
        forceInstrumental: _0x364d00.forceInstrumental
      })
    });
    const _0x3a03a7 = await _0x2541fb.json();
    if (!_0x2541fb.ok) {
      throw new Error(_0x3a03a7.error || "音频生成失败。");
    }
    const _0x45f23e = Array.isArray(_0x3a03a7.assets) ? _0x3a03a7.assets : [_0x3a03a7];
    j.set(_0x364d00.id, {
      phase: "done",
      assets: [..._0x45f23e, ..._0x329420]
    });
    const _0x3686ff = _0x3a03a7.failedCount ? "，另有 " + _0x3a03a7.failedCount + " 个生成失败" : "";
    S.textContent = _0x364d00.name + " 已生成 " + _0x45f23e.length + " 个候选版本" + _0x3686ff + "，请试听后选择。";
  } catch (_0x5c383c) {
    j.set(_0x364d00.id, {
      phase: "error",
      assets: _0x329420
    });
    S.textContent = _0x364d00.name + "：" + _0x5c383c.message;
  }
  B();
}
document.querySelectorAll("[data-tab]").forEach(_0xd4c85c => _0xd4c85c.addEventListener("click", () => O(_0xd4c85c.dataset.tab)));
O(location.hash === "#audio" ? "audio" : "image");
document.querySelector("#audio-select-visible").addEventListener("click", () => {
  const _0xc4af41 = J().filter(_0x2b7e43 => N(_0x2b7e43) === "missing");
  const _0x3ba608 = _0xc4af41.length && _0xc4af41.every(_0x4b9a42 => L.has(_0x4b9a42.id));
  _0xc4af41.forEach(_0xf92a6e => _0x3ba608 ? L.delete(_0xf92a6e.id) : L.add(_0xf92a6e.id));
  B();
});
[q, C, x].forEach(_0x1b8136 => _0x1b8136.addEventListener("change", B));
E.addEventListener("click", async () => {
  const _0x1df53e = T.items.filter(_0x250eab => L.has(_0x250eab.id));
  if (_0x1df53e.length) {
    E.disabled = true;
    S.textContent = "正在生成 " + _0x1df53e.length + " 项声音素材，同时最多处理两项。";
    await async function (_0x19dd55) {
      const _0x21d612 = [..._0x19dd55];
      await Promise.all(Array.from({
        length: Math.min(2, _0x21d612.length)
      }, async () => {
        while (_0x21d612.length) {
          await W(_0x21d612.shift());
        }
      }));
    }(_0x1df53e);
    E.disabled = false;
  } else {
    S.textContent = "请先选择至少一项声音需求。";
  }
});
fetch("/api/audio-spec").then(_0xb87b81 => _0xb87b81.json().then(_0x5e888b => ({
  response: _0xb87b81,
  payload: _0x5e888b
}))).then(async ({
  response: _0x4a85f9,
  payload: _0x2762d2
}) => {
  if (!_0x4a85f9.ok) {
    throw new Error(_0x2762d2.error || "无法读取声音需求清单。");
  }
  T = _0x2762d2;
  await async function () {
    const _0x58b766 = await fetch("/api/generated-audio");
    const _0x5e24ce = await _0x58b766.json();
    if (!_0x58b766.ok) {
      throw new Error(_0x5e24ce.error || "无法读取已生成音频。");
    }
    T.items.forEach(_0x16434b => {
      const _0x15c3b6 = _0x5e24ce.assets.filter(_0x5be1ba => _0x5be1ba.itemId === _0x16434b.id);
      if (_0x15c3b6.length) {
        j.set(_0x16434b.id, {
          phase: "done",
          assets: _0x15c3b6
        });
      }
    });
  }();
  B();
  S.textContent = "声音需求清单已载入。可批量生成候选版本，试听后再选择采用。";
}).catch(_0x122b2f => {
  S.textContent = _0x122b2f.message;
});