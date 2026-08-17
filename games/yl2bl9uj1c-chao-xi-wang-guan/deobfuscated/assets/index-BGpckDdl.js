(function () {
  const _0x8aaa90 = document.createElement("link").relList;
  if (!_0x8aaa90 || !_0x8aaa90.supports || !_0x8aaa90.supports("modulepreload")) {
    for (const _0x53e787 of document.querySelectorAll("link[rel=\"modulepreload\"]")) {
      _0x52d056(_0x53e787);
    }
    new MutationObserver(_0x4b83bf => {
      for (const _0x3d6b99 of _0x4b83bf) {
        if (_0x3d6b99.type === "childList") {
          for (const _0x357c97 of _0x3d6b99.addedNodes) {
            if (_0x357c97.tagName === "LINK" && _0x357c97.rel === "modulepreload") {
              _0x52d056(_0x357c97);
            }
          }
        }
      }
    }).observe(document, {
      childList: true,
      subtree: true
    });
  }
  function _0x52d056(_0x492111) {
    if (_0x492111.ep) {
      return;
    }
    _0x492111.ep = true;
    const _0x507343 = function (_0xf3ef4d) {
      const _0x12f818 = {};
      if (_0xf3ef4d.integrity) {
        _0x12f818.integrity = _0xf3ef4d.integrity;
      }
      if (_0xf3ef4d.referrerPolicy) {
        _0x12f818.referrerPolicy = _0xf3ef4d.referrerPolicy;
      }
      if (_0xf3ef4d.crossOrigin === "use-credentials") {
        _0x12f818.credentials = "include";
      } else if (_0xf3ef4d.crossOrigin === "anonymous") {
        _0x12f818.credentials = "omit";
      } else {
        _0x12f818.credentials = "same-origin";
      }
      return _0x12f818;
    }(_0x492111);
    fetch(_0x492111.href, _0x507343);
  }
})();
const Sn = (_0x4c0070, _0x3f2e68, _0x273f95 = []) => {
  const _0x3c4ef5 = document.createElementNS("http://www.w3.org/2000/svg", _0x4c0070);
  Object.keys(_0x3f2e68).forEach(_0xbe61f0 => {
    _0x3c4ef5.setAttribute(_0xbe61f0, String(_0x3f2e68[_0xbe61f0]));
  });
  if (_0x273f95.length) {
    _0x273f95.forEach(_0x3453b4 => {
      const _0x223ae9 = Sn(..._0x3453b4);
      _0x3c4ef5.appendChild(_0x223ae9);
    });
  }
  return _0x3c4ef5;
};
var Jc = ([_0x5d4461, _0x36fb44, _0x50a954]) => Sn(_0x5d4461, _0x36fb44, _0x50a954);
const jc = _0x5fbc83 => Array.from(_0x5fbc83.attributes).reduce((_0x18a2db, _0x149535) => {
  _0x18a2db[_0x149535.name] = _0x149535.value;
  return _0x18a2db;
}, {});
const to = _0x5dd5da => typeof _0x5dd5da == "string" ? _0x5dd5da : _0x5dd5da && _0x5dd5da.class ? _0x5dd5da.class && typeof _0x5dd5da.class == "string" ? _0x5dd5da.class.split(" ") : _0x5dd5da.class && Array.isArray(_0x5dd5da.class) ? _0x5dd5da.class : "" : "";
const ao = _0xc4f06c => _0xc4f06c.flatMap(to).map(_0x54c97e => _0x54c97e.trim()).filter(Boolean).filter((_0x2797a0, _0x40cdad, _0x2a7179) => _0x2a7179.indexOf(_0x2797a0) === _0x40cdad).join(" ");
const eo = _0x14065f => _0x14065f.replace(/(\w)(\w*)(_|-|\s*)/g, (_0x4cb94f, _0xba5074, _0x4295c4) => _0xba5074.toUpperCase() + _0x4295c4.toLowerCase());
const E0 = (_0x2a3ead, {
  nameAttr: _0x594821,
  icons: _0x2b3236,
  attrs: _0x1d4b63
}) => {
  var _0x460fb9;
  const _0x591d40 = _0x2a3ead.getAttribute(_0x594821);
  if (_0x591d40 == null) {
    return;
  }
  const _0x4fb93a = _0x2b3236[eo(_0x591d40)];
  if (!_0x4fb93a) {
    return console.warn(_0x2a3ead.outerHTML + " icon name was not found in the provided icons object.");
  }
  const _0x33a4ae = jc(_0x2a3ead);
  const [_0xd95bc7, _0x372b9e, _0x3482d7] = _0x4fb93a;
  const _0x5db409 = {
    ..._0x372b9e,
    "data-lucide": _0x591d40,
    ..._0x1d4b63,
    ..._0x33a4ae
  };
  const _0x664730 = ao(["lucide", "lucide-" + _0x591d40, _0x33a4ae, _0x1d4b63]);
  if (_0x664730) {
    Object.assign(_0x5db409, {
      class: _0x664730
    });
  }
  const _0x2db5c3 = Jc([_0xd95bc7, _0x5db409, _0x3482d7]);
  if ((_0x460fb9 = _0x2a3ead.parentNode) == null) {
    return undefined;
  } else {
    return _0x460fb9.replaceChild(_0x2db5c3, _0x2a3ead);
  }
};
const t = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
const ho = ["svg", t, [["path", {
  d: "M3.5 13h6"
}], ["path", {
  d: "m2 16 4.5-9 4.5 9"
}], ["path", {
  d: "M18 7v9"
}], ["path", {
  d: "m14 12 4 4 4-4"
}]]];
const so = ["svg", t, [["path", {
  d: "M3.5 13h6"
}], ["path", {
  d: "m2 16 4.5-9 4.5 9"
}], ["path", {
  d: "M18 16V7"
}], ["path", {
  d: "m14 11 4-4 4 4"
}]]];
const no = ["svg", t, [["path", {
  d: "M21 14h-5"
}], ["path", {
  d: "M16 16v-3.5a2.5 2.5 0 0 1 5 0V16"
}], ["path", {
  d: "M4.5 13h6"
}], ["path", {
  d: "m3 16 4.5-9 4.5 9"
}]]];
const co = ["svg", t, [["circle", {
  cx: "16",
  cy: "4",
  r: "1"
}], ["path", {
  d: "m18 19 1-7-6 1"
}], ["path", {
  d: "m5 8 3-3 5.5 3-2.36 3.5"
}], ["path", {
  d: "M4.24 14.5a5 5 0 0 0 6.88 6"
}], ["path", {
  d: "M13.76 17.5a5 5 0 0 0-6.88-6"
}]]];
const oo = ["svg", t, [["path", {
  d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
}]]];
const ro = ["svg", t, [["path", {
  d: "M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M6 8h12"
}], ["path", {
  d: "M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12"
}], ["path", {
  d: "M6.6 15.6A2 2 0 1 0 10 17v-5"
}]]];
const io = ["svg", t, [["path", {
  d: "M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"
}], ["path", {
  d: "m12 15 5 6H7Z"
}]]];
const I0 = ["svg", t, [["circle", {
  cx: "12",
  cy: "13",
  r: "8"
}], ["path", {
  d: "M5 3 2 6"
}], ["path", {
  d: "m22 6-3-3"
}], ["path", {
  d: "M6.38 18.7 4 21"
}], ["path", {
  d: "M17.64 18.67 20 21"
}], ["path", {
  d: "m9 13 2 2 4-4"
}]]];
const D0 = ["svg", t, [["circle", {
  cx: "12",
  cy: "13",
  r: "8"
}], ["path", {
  d: "M5 3 2 6"
}], ["path", {
  d: "m22 6-3-3"
}], ["path", {
  d: "M6.38 18.7 4 21"
}], ["path", {
  d: "M17.64 18.67 20 21"
}], ["path", {
  d: "M9 13h6"
}]]];
const po = ["svg", t, [["path", {
  d: "M6.87 6.87a8 8 0 1 0 11.26 11.26"
}], ["path", {
  d: "M19.9 14.25a8 8 0 0 0-9.15-9.15"
}], ["path", {
  d: "m22 6-3-3"
}], ["path", {
  d: "M6.26 18.67 4 21"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M4 4 2 6"
}]]];
const z0 = ["svg", t, [["circle", {
  cx: "12",
  cy: "13",
  r: "8"
}], ["path", {
  d: "M5 3 2 6"
}], ["path", {
  d: "m22 6-3-3"
}], ["path", {
  d: "M6.38 18.7 4 21"
}], ["path", {
  d: "M17.64 18.67 20 21"
}], ["path", {
  d: "M12 10v6"
}], ["path", {
  d: "M9 13h6"
}]]];
const lo = ["svg", t, [["circle", {
  cx: "12",
  cy: "13",
  r: "8"
}], ["path", {
  d: "M12 9v4l2 2"
}], ["path", {
  d: "M5 3 2 6"
}], ["path", {
  d: "m22 6-3-3"
}], ["path", {
  d: "M6.38 18.7 4 21"
}], ["path", {
  d: "M17.64 18.67 20 21"
}]]];
const Mo = ["svg", t, [["path", {
  d: "M11 21c0-2.5 2-2.5 2-5"
}], ["path", {
  d: "M16 21c0-2.5 2-2.5 2-5"
}], ["path", {
  d: "m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"
}], ["path", {
  d: "M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"
}], ["path", {
  d: "M6 21c0-2.5 2-2.5 2-5"
}]]];
const vo = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["polyline", {
  points: "11 3 11 11 14 8 17 11 17 3"
}]]];
const go = ["svg", t, [["path", {
  d: "M2 12h20"
}], ["path", {
  d: "M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"
}], ["path", {
  d: "M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"
}], ["path", {
  d: "M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"
}]]];
const mo = ["svg", t, [["path", {
  d: "M12 2v20"
}], ["path", {
  d: "M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"
}], ["path", {
  d: "M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"
}], ["path", {
  d: "M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"
}], ["path", {
  d: "M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"
}]]];
const yo = ["svg", t, [["path", {
  d: "M17 12H7"
}], ["path", {
  d: "M19 18H5"
}], ["path", {
  d: "M21 6H3"
}]]];
const uo = ["svg", t, [["rect", {
  width: "6",
  height: "16",
  x: "4",
  y: "2",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "9",
  x: "14",
  y: "9",
  rx: "2"
}], ["path", {
  d: "M22 22H2"
}]]];
const xo = ["svg", t, [["rect", {
  width: "16",
  height: "6",
  x: "2",
  y: "4",
  rx: "2"
}], ["rect", {
  width: "9",
  height: "6",
  x: "9",
  y: "14",
  rx: "2"
}], ["path", {
  d: "M22 22V2"
}]]];
const fo = ["svg", t, [["rect", {
  width: "6",
  height: "14",
  x: "4",
  y: "5",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "10",
  x: "14",
  y: "7",
  rx: "2"
}], ["path", {
  d: "M17 22v-5"
}], ["path", {
  d: "M17 7V2"
}], ["path", {
  d: "M7 22v-3"
}], ["path", {
  d: "M7 5V2"
}]]];
const bo = ["svg", t, [["rect", {
  width: "6",
  height: "14",
  x: "4",
  y: "5",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "10",
  x: "14",
  y: "7",
  rx: "2"
}], ["path", {
  d: "M10 2v20"
}], ["path", {
  d: "M20 2v20"
}]]];
const wo = ["svg", t, [["rect", {
  width: "6",
  height: "14",
  x: "4",
  y: "5",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "10",
  x: "14",
  y: "7",
  rx: "2"
}], ["path", {
  d: "M4 2v20"
}], ["path", {
  d: "M14 2v20"
}]]];
const Ao = ["svg", t, [["rect", {
  width: "6",
  height: "14",
  x: "2",
  y: "5",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "10",
  x: "16",
  y: "7",
  rx: "2"
}], ["path", {
  d: "M12 2v20"
}]]];
const ko = ["svg", t, [["rect", {
  width: "6",
  height: "14",
  x: "2",
  y: "5",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "10",
  x: "12",
  y: "7",
  rx: "2"
}], ["path", {
  d: "M22 2v20"
}]]];
const Ho = ["svg", t, [["rect", {
  width: "6",
  height: "14",
  x: "6",
  y: "5",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "10",
  x: "16",
  y: "7",
  rx: "2"
}], ["path", {
  d: "M2 2v20"
}]]];
const So = ["svg", t, [["rect", {
  width: "6",
  height: "10",
  x: "9",
  y: "7",
  rx: "2"
}], ["path", {
  d: "M4 22V2"
}], ["path", {
  d: "M20 22V2"
}]]];
const Co = ["svg", t, [["rect", {
  width: "6",
  height: "14",
  x: "3",
  y: "5",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "10",
  x: "15",
  y: "7",
  rx: "2"
}], ["path", {
  d: "M3 2v20"
}], ["path", {
  d: "M21 2v20"
}]]];
const Vo = ["svg", t, [["path", {
  d: "M3 12h18"
}], ["path", {
  d: "M3 18h18"
}], ["path", {
  d: "M3 6h18"
}]]];
const Lo = ["svg", t, [["path", {
  d: "M15 12H3"
}], ["path", {
  d: "M17 18H3"
}], ["path", {
  d: "M21 6H3"
}]]];
const Po = ["svg", t, [["path", {
  d: "M21 12H9"
}], ["path", {
  d: "M21 18H7"
}], ["path", {
  d: "M21 6H3"
}]]];
const To = ["svg", t, [["rect", {
  width: "6",
  height: "16",
  x: "4",
  y: "6",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "9",
  x: "14",
  y: "6",
  rx: "2"
}], ["path", {
  d: "M22 2H2"
}]]];
const Ro = ["svg", t, [["rect", {
  width: "9",
  height: "6",
  x: "6",
  y: "14",
  rx: "2"
}], ["rect", {
  width: "16",
  height: "6",
  x: "6",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M2 2v20"
}]]];
const Bo = ["svg", t, [["path", {
  d: "M22 17h-3"
}], ["path", {
  d: "M22 7h-5"
}], ["path", {
  d: "M5 17H2"
}], ["path", {
  d: "M7 7H2"
}], ["rect", {
  x: "5",
  y: "14",
  width: "14",
  height: "6",
  rx: "2"
}], ["rect", {
  x: "7",
  y: "4",
  width: "10",
  height: "6",
  rx: "2"
}]]];
const Eo = ["svg", t, [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "14",
  rx: "2"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M2 20h20"
}], ["path", {
  d: "M2 10h20"
}]]];
const Io = ["svg", t, [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "14",
  rx: "2"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M2 14h20"
}], ["path", {
  d: "M2 4h20"
}]]];
const Do = ["svg", t, [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "16",
  rx: "2"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "2",
  rx: "2"
}], ["path", {
  d: "M2 12h20"
}]]];
const zo = ["svg", t, [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "12",
  rx: "2"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "2",
  rx: "2"
}], ["path", {
  d: "M2 22h20"
}]]];
const Zo = ["svg", t, [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "16",
  rx: "2"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "6",
  rx: "2"
}], ["path", {
  d: "M2 2h20"
}]]];
const Fo = ["svg", t, [["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "9",
  rx: "2"
}], ["path", {
  d: "M22 20H2"
}], ["path", {
  d: "M22 4H2"
}]]];
const Uo = ["svg", t, [["rect", {
  width: "14",
  height: "6",
  x: "5",
  y: "15",
  rx: "2"
}], ["rect", {
  width: "10",
  height: "6",
  x: "7",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M2 21h20"
}], ["path", {
  d: "M2 3h20"
}]]];
const Wo = ["svg", t, [["path", {
  d: "M10 10H6"
}], ["path", {
  d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
}], ["path", {
  d: "M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"
}], ["path", {
  d: "M8 8v4"
}], ["path", {
  d: "M9 18h6"
}], ["circle", {
  cx: "17",
  cy: "18",
  r: "2"
}], ["circle", {
  cx: "7",
  cy: "18",
  r: "2"
}]]];
const Oo = ["svg", t, [["path", {
  d: "M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"
}], ["path", {
  d: "M16 12h3"
}]]];
const qo = ["svg", t, [["path", {
  d: "M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
}], ["path", {
  d: "M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5"
}]]];
const _o = ["svg", t, [["path", {
  d: "M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8"
}], ["path", {
  d: "M10 5H8a2 2 0 0 0 0 4h.68"
}], ["path", {
  d: "M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8"
}], ["path", {
  d: "M14 5h2a2 2 0 0 1 0 4h-.68"
}], ["path", {
  d: "M18 22H6"
}], ["path", {
  d: "M9 2h6"
}]]];
const Go = ["svg", t, [["path", {
  d: "M12 22V8"
}], ["path", {
  d: "M5 12H2a10 10 0 0 0 20 0h-3"
}], ["circle", {
  cx: "12",
  cy: "5",
  r: "3"
}]]];
const No = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M16 16s-1.5-2-4-2-4 2-4 2"
}], ["path", {
  d: "M7.5 8 10 9"
}], ["path", {
  d: "m14 9 2.5-1"
}], ["path", {
  d: "M9 10h.01"
}], ["path", {
  d: "M15 10h.01"
}]]];
const $o = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M8 15h8"
}], ["path", {
  d: "M8 9h2"
}], ["path", {
  d: "M14 9h2"
}]]];
const Xo = ["svg", t, [["path", {
  d: "M2 12 7 2"
}], ["path", {
  d: "m7 12 5-10"
}], ["path", {
  d: "m12 12 5-10"
}], ["path", {
  d: "m17 12 5-10"
}], ["path", {
  d: "M4.5 7h15"
}], ["path", {
  d: "M12 16v6"
}]]];
const Yo = ["svg", t, [["path", {
  d: "M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4"
}], ["path", {
  d: "M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z"
}], ["path", {
  d: "M9 12v5"
}], ["path", {
  d: "M15 12v5"
}], ["path", {
  d: "M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1"
}]]];
const Ko = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m14.31 8 5.74 9.94"
}], ["path", {
  d: "M9.69 8h11.48"
}], ["path", {
  d: "m7.38 12 5.74-9.94"
}], ["path", {
  d: "M9.69 16 3.95 6.06"
}], ["path", {
  d: "M14.31 16H2.83"
}], ["path", {
  d: "m16.62 12-5.74 9.94"
}]]];
const Qo = ["svg", t, [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M6 8h.01"
}], ["path", {
  d: "M10 8h.01"
}], ["path", {
  d: "M14 8h.01"
}]]];
const Jo = ["svg", t, [["rect", {
  x: "2",
  y: "4",
  width: "20",
  height: "16",
  rx: "2"
}], ["path", {
  d: "M10 4v4"
}], ["path", {
  d: "M2 8h20"
}], ["path", {
  d: "M6 4v4"
}]]];
const jo = ["svg", t, [["path", {
  d: "M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"
}], ["path", {
  d: "M10 2c1 .5 2 2 2 5"
}]]];
const td = ["svg", t, [["rect", {
  width: "20",
  height: "5",
  x: "2",
  y: "3",
  rx: "1"
}], ["path", {
  d: "M4 8v11a2 2 0 0 0 2 2h2"
}], ["path", {
  d: "M20 8v11a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "m9 15 3-3 3 3"
}], ["path", {
  d: "M12 12v9"
}]]];
const ad = ["svg", t, [["rect", {
  width: "20",
  height: "5",
  x: "2",
  y: "3",
  rx: "1"
}], ["path", {
  d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
}], ["path", {
  d: "m9.5 17 5-5"
}], ["path", {
  d: "m9.5 12 5 5"
}]]];
const ed = ["svg", t, [["rect", {
  width: "20",
  height: "5",
  x: "2",
  y: "3",
  rx: "1"
}], ["path", {
  d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"
}], ["path", {
  d: "M10 12h4"
}]]];
const hd = ["svg", t, [["path", {
  d: "M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
}], ["path", {
  d: "M5 18v2"
}], ["path", {
  d: "M19 18v2"
}]]];
const sd = ["svg", t, [["path", {
  d: "M15 5H9"
}], ["path", {
  d: "M15 9v3h4l-7 7-7-7h4V9z"
}]]];
const nd = ["svg", t, [["path", {
  d: "M15 6v6h4l-7 7-7-7h4V6h6z"
}]]];
const cd = ["svg", t, [["path", {
  d: "M19 15V9"
}], ["path", {
  d: "M15 15h-3v4l-7-7 7-7v4h3v6z"
}]]];
const od = ["svg", t, [["path", {
  d: "M18 15h-6v4l-7-7 7-7v4h6v6z"
}]]];
const dd = ["svg", t, [["path", {
  d: "M5 9v6"
}], ["path", {
  d: "M9 9h3V5l7 7-7 7v-4H9V9z"
}]]];
const rd = ["svg", t, [["path", {
  d: "M6 9h6V5l7 7-7 7v-4H6V9z"
}]]];
const id = ["svg", t, [["path", {
  d: "M9 19h6"
}], ["path", {
  d: "M9 15v-3H5l7-7 7 7h-4v3H9z"
}]]];
const pd = ["svg", t, [["path", {
  d: "M9 18v-6H5l7-7 7 7h-4v6H9z"
}]]];
const ld = ["svg", t, [["path", {
  d: "m3 16 4 4 4-4"
}], ["path", {
  d: "M7 20V4"
}], ["rect", {
  x: "15",
  y: "4",
  width: "4",
  height: "6",
  ry: "2"
}], ["path", {
  d: "M17 20v-6h-2"
}], ["path", {
  d: "M15 20h4"
}]]];
const Md = ["svg", t, [["path", {
  d: "m3 16 4 4 4-4"
}], ["path", {
  d: "M7 20V4"
}], ["path", {
  d: "M17 10V4h-2"
}], ["path", {
  d: "M15 10h4"
}], ["rect", {
  x: "15",
  y: "14",
  width: "4",
  height: "6",
  ry: "2"
}]]];
const Z0 = ["svg", t, [["path", {
  d: "m3 16 4 4 4-4"
}], ["path", {
  d: "M7 20V4"
}], ["path", {
  d: "M20 8h-5"
}], ["path", {
  d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
}], ["path", {
  d: "M15 14h5l-5 6h5"
}]]];
const vd = ["svg", t, [["path", {
  d: "M19 3H5"
}], ["path", {
  d: "M12 21V7"
}], ["path", {
  d: "m6 15 6 6 6-6"
}]]];
const gd = ["svg", t, [["path", {
  d: "M17 7 7 17"
}], ["path", {
  d: "M17 17H7V7"
}]]];
const md = ["svg", t, [["path", {
  d: "m3 16 4 4 4-4"
}], ["path", {
  d: "M7 20V4"
}], ["path", {
  d: "M11 4h4"
}], ["path", {
  d: "M11 8h7"
}], ["path", {
  d: "M11 12h10"
}]]];
const yd = ["svg", t, [["path", {
  d: "m7 7 10 10"
}], ["path", {
  d: "M17 7v10H7"
}]]];
const ud = ["svg", t, [["path", {
  d: "M12 2v14"
}], ["path", {
  d: "m19 9-7 7-7-7"
}], ["circle", {
  cx: "12",
  cy: "21",
  r: "1"
}]]];
const xd = ["svg", t, [["path", {
  d: "M12 17V3"
}], ["path", {
  d: "m6 11 6 6 6-6"
}], ["path", {
  d: "M19 21H5"
}]]];
const fd = ["svg", t, [["path", {
  d: "m3 16 4 4 4-4"
}], ["path", {
  d: "M7 20V4"
}], ["path", {
  d: "m21 8-4-4-4 4"
}], ["path", {
  d: "M17 4v16"
}]]];
const F0 = ["svg", t, [["path", {
  d: "m3 16 4 4 4-4"
}], ["path", {
  d: "M7 20V4"
}], ["path", {
  d: "M11 4h10"
}], ["path", {
  d: "M11 8h7"
}], ["path", {
  d: "M11 12h4"
}]]];
const U0 = ["svg", t, [["path", {
  d: "m3 16 4 4 4-4"
}], ["path", {
  d: "M7 4v16"
}], ["path", {
  d: "M15 4h5l-5 6h5"
}], ["path", {
  d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"
}], ["path", {
  d: "M20 18h-5"
}]]];
const bd = ["svg", t, [["path", {
  d: "M12 5v14"
}], ["path", {
  d: "m19 12-7 7-7-7"
}]]];
const wd = ["svg", t, [["path", {
  d: "m9 6-6 6 6 6"
}], ["path", {
  d: "M3 12h14"
}], ["path", {
  d: "M21 19V5"
}]]];
const Ad = ["svg", t, [["path", {
  d: "M8 3 4 7l4 4"
}], ["path", {
  d: "M4 7h16"
}], ["path", {
  d: "m16 21 4-4-4-4"
}], ["path", {
  d: "M20 17H4"
}]]];
const kd = ["svg", t, [["path", {
  d: "M3 19V5"
}], ["path", {
  d: "m13 6-6 6 6 6"
}], ["path", {
  d: "M7 12h14"
}]]];
const Hd = ["svg", t, [["path", {
  d: "m12 19-7-7 7-7"
}], ["path", {
  d: "M19 12H5"
}]]];
const Sd = ["svg", t, [["path", {
  d: "M3 5v14"
}], ["path", {
  d: "M21 12H7"
}], ["path", {
  d: "m15 18 6-6-6-6"
}]]];
const Cd = ["svg", t, [["path", {
  d: "m16 3 4 4-4 4"
}], ["path", {
  d: "M20 7H4"
}], ["path", {
  d: "m8 21-4-4 4-4"
}], ["path", {
  d: "M4 17h16"
}]]];
const Vd = ["svg", t, [["path", {
  d: "M17 12H3"
}], ["path", {
  d: "m11 18 6-6-6-6"
}], ["path", {
  d: "M21 5v14"
}]]];
const Ld = ["svg", t, [["path", {
  d: "M5 12h14"
}], ["path", {
  d: "m12 5 7 7-7 7"
}]]];
const Pd = ["svg", t, [["path", {
  d: "m3 8 4-4 4 4"
}], ["path", {
  d: "M7 4v16"
}], ["rect", {
  x: "15",
  y: "4",
  width: "4",
  height: "6",
  ry: "2"
}], ["path", {
  d: "M17 20v-6h-2"
}], ["path", {
  d: "M15 20h4"
}]]];
const Td = ["svg", t, [["path", {
  d: "m3 8 4-4 4 4"
}], ["path", {
  d: "M7 4v16"
}], ["path", {
  d: "M17 10V4h-2"
}], ["path", {
  d: "M15 10h4"
}], ["rect", {
  x: "15",
  y: "14",
  width: "4",
  height: "6",
  ry: "2"
}]]];
const W0 = ["svg", t, [["path", {
  d: "m3 8 4-4 4 4"
}], ["path", {
  d: "M7 4v16"
}], ["path", {
  d: "M20 8h-5"
}], ["path", {
  d: "M15 10V6.5a2.5 2.5 0 0 1 5 0V10"
}], ["path", {
  d: "M15 14h5l-5 6h5"
}]]];
const Rd = ["svg", t, [["path", {
  d: "m21 16-4 4-4-4"
}], ["path", {
  d: "M17 20V4"
}], ["path", {
  d: "m3 8 4-4 4 4"
}], ["path", {
  d: "M7 4v16"
}]]];
const Bd = ["svg", t, [["path", {
  d: "m5 9 7-7 7 7"
}], ["path", {
  d: "M12 16V2"
}], ["circle", {
  cx: "12",
  cy: "21",
  r: "1"
}]]];
const Ed = ["svg", t, [["path", {
  d: "m18 9-6-6-6 6"
}], ["path", {
  d: "M12 3v14"
}], ["path", {
  d: "M5 21h14"
}]]];
const Id = ["svg", t, [["path", {
  d: "M7 17V7h10"
}], ["path", {
  d: "M17 17 7 7"
}]]];
const O0 = ["svg", t, [["path", {
  d: "m3 8 4-4 4 4"
}], ["path", {
  d: "M7 4v16"
}], ["path", {
  d: "M11 12h4"
}], ["path", {
  d: "M11 16h7"
}], ["path", {
  d: "M11 20h10"
}]]];
const Dd = ["svg", t, [["path", {
  d: "M7 7h10v10"
}], ["path", {
  d: "M7 17 17 7"
}]]];
const zd = ["svg", t, [["path", {
  d: "M5 3h14"
}], ["path", {
  d: "m18 13-6-6-6 6"
}], ["path", {
  d: "M12 7v14"
}]]];
const Zd = ["svg", t, [["path", {
  d: "m3 8 4-4 4 4"
}], ["path", {
  d: "M7 4v16"
}], ["path", {
  d: "M11 12h10"
}], ["path", {
  d: "M11 16h7"
}], ["path", {
  d: "M11 20h4"
}]]];
const q0 = ["svg", t, [["path", {
  d: "m3 8 4-4 4 4"
}], ["path", {
  d: "M7 4v16"
}], ["path", {
  d: "M15 4h5l-5 6h5"
}], ["path", {
  d: "M15 20v-3.5a2.5 2.5 0 0 1 5 0V20"
}], ["path", {
  d: "M20 18h-5"
}]]];
const Fd = ["svg", t, [["path", {
  d: "m5 12 7-7 7 7"
}], ["path", {
  d: "M12 19V5"
}]]];
const Ud = ["svg", t, [["path", {
  d: "m4 6 3-3 3 3"
}], ["path", {
  d: "M7 17V3"
}], ["path", {
  d: "m14 6 3-3 3 3"
}], ["path", {
  d: "M17 17V3"
}], ["path", {
  d: "M4 21h16"
}]]];
const Wd = ["svg", t, [["path", {
  d: "M12 6v12"
}], ["path", {
  d: "M17.196 9 6.804 15"
}], ["path", {
  d: "m6.804 9 10.392 6"
}]]];
const Od = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}], ["path", {
  d: "M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"
}]]];
const qd = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}], ["path", {
  d: "M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"
}], ["path", {
  d: "M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"
}]]];
const _d = ["svg", t, [["path", {
  d: "M2 10v3"
}], ["path", {
  d: "M6 6v11"
}], ["path", {
  d: "M10 3v18"
}], ["path", {
  d: "M14 8v7"
}], ["path", {
  d: "M18 5v13"
}], ["path", {
  d: "M22 10v3"
}]]];
const Gd = ["svg", t, [["path", {
  d: "M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2"
}]]];
const Nd = ["svg", t, [["path", {
  d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "6"
}]]];
const $d = ["svg", t, [["path", {
  d: "m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9"
}], ["path", {
  d: "M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z"
}]]];
const _0 = ["svg", t, [["path", {
  d: "M4 4v16h16"
}], ["path", {
  d: "m4 20 7-7"
}]]];
const Xd = ["svg", t, [["path", {
  d: "M9 12h.01"
}], ["path", {
  d: "M15 12h.01"
}], ["path", {
  d: "M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"
}], ["path", {
  d: "M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"
}]]];
const Yd = ["svg", t, [["path", {
  d: "M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
}], ["path", {
  d: "M8 10h8"
}], ["path", {
  d: "M8 18h8"
}], ["path", {
  d: "M8 22v-6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6"
}], ["path", {
  d: "M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"
}]]];
const Kd = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "16",
  y2: "16"
}]]];
const Qd = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "M12 7v10"
}], ["path", {
  d: "M15.4 10a4 4 0 1 0 0 4"
}]]];
const G0 = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "m9 12 2 2 4-4"
}]]];
const Jd = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
}], ["path", {
  d: "M12 18V6"
}]]];
const jd = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "M7 12h5"
}], ["path", {
  d: "M15 9.4a4 4 0 1 0 0 5.2"
}]]];
const tr = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "17",
  y2: "17"
}]]];
const ar = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "M8 8h8"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "m13 17-5-1h1a4 4 0 0 0 0-8"
}]]];
const er = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "16",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "8",
  y2: "8"
}]]];
const hr = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "m9 8 3 3v7"
}], ["path", {
  d: "m12 11 3-3"
}], ["path", {
  d: "M9 12h6"
}], ["path", {
  d: "M9 16h6"
}]]];
const sr = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12"
}]]];
const nr = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "m15 9-6 6"
}], ["path", {
  d: "M9 9h.01"
}], ["path", {
  d: "M15 15h.01"
}]]];
const cr = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "16"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12"
}]]];
const or = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "M8 12h4"
}], ["path", {
  d: "M10 16V9.5a2.5 2.5 0 0 1 5 0"
}], ["path", {
  d: "M8 16h7"
}]]];
const dr = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "M9 16h5"
}], ["path", {
  d: "M9 12h5a2 2 0 1 0 0-4h-3v9"
}]]];
const rr = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["path", {
  d: "M11 17V8h4"
}], ["path", {
  d: "M11 12h3"
}], ["path", {
  d: "M9 16h4"
}]]];
const ir = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "9",
  y2: "15"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "9",
  y2: "15"
}]]];
const pr = ["svg", t, [["path", {
  d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
}]]];
const lr = ["svg", t, [["path", {
  d: "M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2"
}], ["path", {
  d: "M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10"
}], ["rect", {
  width: "13",
  height: "8",
  x: "8",
  y: "6",
  rx: "1"
}], ["circle", {
  cx: "18",
  cy: "20",
  r: "2"
}], ["circle", {
  cx: "9",
  cy: "20",
  r: "2"
}]]];
const Mr = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m4.9 4.9 14.2 14.2"
}]]];
const vr = ["svg", t, [["path", {
  d: "M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5"
}], ["path", {
  d: "M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z"
}]]];
const gr = ["svg", t, [["path", {
  d: "M10 10.01h.01"
}], ["path", {
  d: "M10 14.01h.01"
}], ["path", {
  d: "M14 10.01h.01"
}], ["path", {
  d: "M14 14.01h.01"
}], ["path", {
  d: "M18 6v11.5"
}], ["path", {
  d: "M6 6v12"
}], ["rect", {
  x: "2",
  y: "6",
  width: "20",
  height: "12",
  rx: "2"
}]]];
const mr = ["svg", t, [["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}], ["path", {
  d: "M6 12h.01M18 12h.01"
}]]];
const yr = ["svg", t, [["path", {
  d: "M3 5v14"
}], ["path", {
  d: "M8 5v14"
}], ["path", {
  d: "M12 5v14"
}], ["path", {
  d: "M17 5v14"
}], ["path", {
  d: "M21 5v14"
}]]];
const ur = ["svg", t, [["path", {
  d: "M4 20h16"
}], ["path", {
  d: "m6 16 6-12 6 12"
}], ["path", {
  d: "M8 12h8"
}]]];
const xr = ["svg", t, [["path", {
  d: "M10 4 8 6"
}], ["path", {
  d: "M17 19v2"
}], ["path", {
  d: "M2 12h20"
}], ["path", {
  d: "M7 19v2"
}], ["path", {
  d: "M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"
}]]];
const fr = ["svg", t, [["path", {
  d: "M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1"
}], ["path", {
  d: "m11 7-3 5h4l-3 5"
}], ["line", {
  x1: "22",
  x2: "22",
  y1: "11",
  y2: "13"
}]]];
const br = ["svg", t, [["rect", {
  width: "16",
  height: "10",
  x: "2",
  y: "7",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "22",
  x2: "22",
  y1: "11",
  y2: "13"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "11",
  y2: "13"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "11",
  y2: "13"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "11",
  y2: "13"
}]]];
const wr = ["svg", t, [["rect", {
  width: "16",
  height: "10",
  x: "2",
  y: "7",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "22",
  x2: "22",
  y1: "11",
  y2: "13"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "11",
  y2: "13"
}]]];
const Ar = ["svg", t, [["rect", {
  width: "16",
  height: "10",
  x: "2",
  y: "7",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "22",
  x2: "22",
  y1: "11",
  y2: "13"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "11",
  y2: "13"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "11",
  y2: "13"
}]]];
const kr = ["svg", t, [["path", {
  d: "M10 17h.01"
}], ["path", {
  d: "M10 7v6"
}], ["path", {
  d: "M14 7h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M22 11v2"
}], ["path", {
  d: "M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
}]]];
const Hr = ["svg", t, [["rect", {
  width: "16",
  height: "10",
  x: "2",
  y: "7",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "22",
  x2: "22",
  y1: "11",
  y2: "13"
}]]];
const Sr = ["svg", t, [["path", {
  d: "M4.5 3h15"
}], ["path", {
  d: "M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"
}], ["path", {
  d: "M6 14h12"
}]]];
const Cr = ["svg", t, [["path", {
  d: "M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1"
}], ["path", {
  d: "M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66"
}], ["path", {
  d: "M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const Vr = ["svg", t, [["path", {
  d: "M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z"
}], ["path", {
  d: "M5.341 10.62a4 4 0 1 0 5.279-5.28"
}]]];
const Lr = ["svg", t, [["path", {
  d: "M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8"
}], ["path", {
  d: "M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
}], ["path", {
  d: "M12 4v6"
}], ["path", {
  d: "M2 18h20"
}]]];
const Pr = ["svg", t, [["path", {
  d: "M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8"
}], ["path", {
  d: "M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4"
}], ["path", {
  d: "M3 18h18"
}]]];
const Tr = ["svg", t, [["path", {
  d: "M2 4v16"
}], ["path", {
  d: "M2 8h18a2 2 0 0 1 2 2v10"
}], ["path", {
  d: "M2 17h20"
}], ["path", {
  d: "M6 8v9"
}]]];
const Rr = ["svg", t, [["circle", {
  cx: "12.5",
  cy: "8.5",
  r: "2.5"
}], ["path", {
  d: "M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z"
}], ["path", {
  d: "m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5"
}]]];
const Br = ["svg", t, [["path", {
  d: "M13 13v5"
}], ["path", {
  d: "M17 11.47V8"
}], ["path", {
  d: "M17 11h1a3 3 0 0 1 2.745 4.211"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3"
}], ["path", {
  d: "M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268"
}], ["path", {
  d: "M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12"
}], ["path", {
  d: "M9 14.6V18"
}]]];
const Er = ["svg", t, [["path", {
  d: "M17 11h1a3 3 0 0 1 0 6h-1"
}], ["path", {
  d: "M9 12v6"
}], ["path", {
  d: "M13 12v6"
}], ["path", {
  d: "M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z"
}], ["path", {
  d: "M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"
}]]];
const Ir = ["svg", t, [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0"
}], ["path", {
  d: "M13.916 2.314A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.74 7.327A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673 9 9 0 0 1-.585-.665"
}], ["circle", {
  cx: "18",
  cy: "8",
  r: "3"
}]]];
const Dr = ["svg", t, [["path", {
  d: "M18.8 4A6.3 8.7 0 0 1 20 9"
}], ["path", {
  d: "M9 9h.01"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "7"
}], ["rect", {
  width: "10",
  height: "6",
  x: "4",
  y: "16",
  rx: "2"
}], ["path", {
  d: "M14 19c3 0 4.6-1.6 4.6-1.6"
}], ["circle", {
  cx: "20",
  cy: "16",
  r: "2"
}]]];
const zr = ["svg", t, [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0"
}], ["path", {
  d: "M15 8h6"
}], ["path", {
  d: "M16.243 3.757A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673A9.4 9.4 0 0 1 18.667 12"
}]]];
const Zr = ["svg", t, [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0"
}], ["path", {
  d: "M17 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 .258-1.742"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M8.668 3.01A6 6 0 0 1 18 8c0 2.687.77 4.653 1.707 6.05"
}]]];
const Fr = ["svg", t, [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0"
}], ["path", {
  d: "M15 8h6"
}], ["path", {
  d: "M18 5v6"
}], ["path", {
  d: "M20.002 14.464a9 9 0 0 0 .738.863A1 1 0 0 1 20 17H4a1 1 0 0 1-.74-1.673C4.59 13.956 6 12.499 6 8a6 6 0 0 1 8.75-5.332"
}]]];
const Ur = ["svg", t, [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0"
}], ["path", {
  d: "M22 8c0-2.3-.8-4.3-2-6"
}], ["path", {
  d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
}], ["path", {
  d: "M4 2C2.8 3.7 2 5.7 2 8"
}]]];
const Wr = ["svg", t, [["path", {
  d: "M10.268 21a2 2 0 0 0 3.464 0"
}], ["path", {
  d: "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
}]]];
const N0 = ["svg", t, [["rect", {
  width: "13",
  height: "7",
  x: "3",
  y: "3",
  rx: "1"
}], ["path", {
  d: "m22 15-3-3 3-3"
}], ["rect", {
  width: "13",
  height: "7",
  x: "3",
  y: "14",
  rx: "1"
}]]];
const $0 = ["svg", t, [["rect", {
  width: "13",
  height: "7",
  x: "8",
  y: "3",
  rx: "1"
}], ["path", {
  d: "m2 9 3 3-3 3"
}], ["rect", {
  width: "13",
  height: "7",
  x: "8",
  y: "14",
  rx: "1"
}]]];
const Or = ["svg", t, [["rect", {
  width: "7",
  height: "13",
  x: "3",
  y: "3",
  rx: "1"
}], ["path", {
  d: "m9 22 3-3 3 3"
}], ["rect", {
  width: "7",
  height: "13",
  x: "14",
  y: "3",
  rx: "1"
}]]];
const qr = ["svg", t, [["rect", {
  width: "7",
  height: "13",
  x: "3",
  y: "8",
  rx: "1"
}], ["path", {
  d: "m15 2-3 3-3-3"
}], ["rect", {
  width: "7",
  height: "13",
  x: "14",
  y: "8",
  rx: "1"
}]]];
const _r = ["svg", t, [["path", {
  d: "M12.409 13.017A5 5 0 0 1 22 15c0 3.866-4 7-9 7-4.077 0-8.153-.82-10.371-2.462-.426-.316-.631-.832-.62-1.362C2.118 12.723 2.627 2 10 2a3 3 0 0 1 3 3 2 2 0 0 1-2 2c-1.105 0-1.64-.444-2-1"
}], ["path", {
  d: "M15 14a5 5 0 0 0-7.584 2"
}], ["path", {
  d: "M9.964 6.825C8.019 7.977 9.5 13 8 15"
}]]];
const Gr = ["svg", t, [["circle", {
  cx: "18.5",
  cy: "17.5",
  r: "3.5"
}], ["circle", {
  cx: "5.5",
  cy: "17.5",
  r: "3.5"
}], ["circle", {
  cx: "15",
  cy: "5",
  r: "1"
}], ["path", {
  d: "M12 17.5V14l-3-3 4-3 2 3h2"
}]]];
const Nr = ["svg", t, [["rect", {
  x: "14",
  y: "14",
  width: "4",
  height: "6",
  rx: "2"
}], ["rect", {
  x: "6",
  y: "4",
  width: "4",
  height: "6",
  rx: "2"
}], ["path", {
  d: "M6 20h4"
}], ["path", {
  d: "M14 10h4"
}], ["path", {
  d: "M6 14h2v6"
}], ["path", {
  d: "M14 4h2v6"
}]]];
const $r = ["svg", t, [["path", {
  d: "M10 10h4"
}], ["path", {
  d: "M19 7V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3"
}], ["path", {
  d: "M20 21a2 2 0 0 0 2-2v-3.851c0-1.39-2-2.962-2-4.829V8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2z"
}], ["path", {
  d: "M 22 16 L 2 16"
}], ["path", {
  d: "M4 21a2 2 0 0 1-2-2v-3.851c0-1.39 2-2.962 2-4.829V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2z"
}], ["path", {
  d: "M9 7V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v3"
}]]];
const Xr = ["svg", t, [["circle", {
  cx: "12",
  cy: "11.9",
  r: "2"
}], ["path", {
  d: "M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6"
}], ["path", {
  d: "m8.9 10.1 1.4.8"
}], ["path", {
  d: "M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5"
}], ["path", {
  d: "m15.1 10.1-1.4.8"
}], ["path", {
  d: "M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2"
}], ["path", {
  d: "M12 13.9v1.6"
}], ["path", {
  d: "M13.5 5.4c-1-.2-2-.2-3 0"
}], ["path", {
  d: "M17 16.4c.7-.7 1.2-1.6 1.5-2.5"
}], ["path", {
  d: "M5.5 13.9c.3.9.8 1.8 1.5 2.5"
}]]];
const Yr = ["svg", t, [["path", {
  d: "M16 7h.01"
}], ["path", {
  d: "M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"
}], ["path", {
  d: "m20 7 2 .5-2 .5"
}], ["path", {
  d: "M10 18v3"
}], ["path", {
  d: "M14 17.75V21"
}], ["path", {
  d: "M7 18a6 6 0 0 0 3.84-10.61"
}]]];
const Kr = ["svg", t, [["path", {
  d: "M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727"
}]]];
const Qr = ["svg", t, [["circle", {
  cx: "9",
  cy: "9",
  r: "7"
}], ["circle", {
  cx: "15",
  cy: "15",
  r: "7"
}]]];
const Jr = ["svg", t, [["path", {
  d: "M3 3h18"
}], ["path", {
  d: "M20 7H8"
}], ["path", {
  d: "M20 11H8"
}], ["path", {
  d: "M10 19h10"
}], ["path", {
  d: "M8 15h12"
}], ["path", {
  d: "M4 3v14"
}], ["circle", {
  cx: "4",
  cy: "19",
  r: "2"
}]]];
const jr = ["svg", t, [["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "3",
  rx: "1"
}], ["path", {
  d: "M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"
}]]];
const ti = ["svg", t, [["path", {
  d: "m7 7 10 10-5 5V2l5 5L7 17"
}], ["line", {
  x1: "18",
  x2: "21",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "3",
  x2: "6",
  y1: "12",
  y2: "12"
}]]];
const ai = ["svg", t, [["path", {
  d: "m17 17-5 5V12l-5 5"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M14.5 9.5 17 7l-5-5v4.5"
}]]];
const ei = ["svg", t, [["path", {
  d: "m7 7 10 10-5 5V2l5 5L7 17"
}], ["path", {
  d: "M20.83 14.83a4 4 0 0 0 0-5.66"
}], ["path", {
  d: "M18 12h.01"
}]]];
const hi = ["svg", t, [["path", {
  d: "m7 7 10 10-5 5V2l5 5L7 17"
}]]];
const si = ["svg", t, [["path", {
  d: "M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8"
}]]];
const ni = ["svg", t, [["path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}]]];
const ci = ["svg", t, [["circle", {
  cx: "11",
  cy: "13",
  r: "9"
}], ["path", {
  d: "M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95"
}], ["path", {
  d: "m22 2-1.5 1.5"
}]]];
const oi = ["svg", t, [["path", {
  d: "M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z"
}]]];
const di = ["svg", t, [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "m8 13 4-7 4 7"
}], ["path", {
  d: "M9.1 11h5.7"
}]]];
const ri = ["svg", t, [["path", {
  d: "M12 6v7"
}], ["path", {
  d: "M16 8v3"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "M8 8v3"
}]]];
const ii = ["svg", t, [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "m9 9.5 2 2 4-4"
}]]];
const pi = ["svg", t, [["path", {
  d: "M2 16V4a2 2 0 0 1 2-2h11"
}], ["path", {
  d: "M22 18H11a2 2 0 1 0 0 4h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2v12"
}], ["path", {
  d: "M5 14H4a2 2 0 1 0 0 4h1"
}]]];
const X0 = ["svg", t, [["path", {
  d: "M12 17h1.5"
}], ["path", {
  d: "M12 22h1.5"
}], ["path", {
  d: "M12 2h1.5"
}], ["path", {
  d: "M17.5 22H19a1 1 0 0 0 1-1"
}], ["path", {
  d: "M17.5 2H19a1 1 0 0 1 1 1v1.5"
}], ["path", {
  d: "M20 14v3h-2.5"
}], ["path", {
  d: "M20 8.5V10"
}], ["path", {
  d: "M4 10V8.5"
}], ["path", {
  d: "M4 19.5V14"
}], ["path", {
  d: "M4 4.5A2.5 2.5 0 0 1 6.5 2H8"
}], ["path", {
  d: "M8 22H6.5a1 1 0 0 1 0-5H8"
}]]];
const li = ["svg", t, [["path", {
  d: "M12 13V7"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "m9 10 3 3 3-3"
}]]];
const Mi = ["svg", t, [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "M8 12v-2a4 4 0 0 1 8 0v2"
}], ["circle", {
  cx: "15",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "9",
  cy: "12",
  r: "1"
}]]];
const vi = ["svg", t, [["path", {
  d: "M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}]]];
const gi = ["svg", t, [["path", {
  d: "m20 13.7-2.1-2.1a2 2 0 0 0-2.8 0L9.7 17"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "2"
}]]];
const mi = ["svg", t, [["path", {
  d: "m19 3 1 1"
}], ["path", {
  d: "m20 2-4.5 4.5"
}], ["path", {
  d: "M20 8v13a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14"
}], ["circle", {
  cx: "14",
  cy: "8",
  r: "2"
}]]];
const yi = ["svg", t, [["path", {
  d: "M18 6V4a2 2 0 1 0-4 0v2"
}], ["path", {
  d: "M20 15v6a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10"
}], ["rect", {
  x: "12",
  y: "6",
  width: "8",
  height: "5",
  rx: "1"
}]]];
const ui = ["svg", t, [["path", {
  d: "M10 2v8l3-3 3 3V2"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}]]];
const xi = ["svg", t, [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "M9 10h6"
}]]];
const fi = ["svg", t, [["path", {
  d: "M12 21V7"
}], ["path", {
  d: "m16 12 2 2 4-4"
}], ["path", {
  d: "M22 6V4a1 1 0 0 0-1-1h-5a4 4 0 0 0-4 4 4 4 0 0 0-4-4H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6a3 3 0 0 1 3 3 3 3 0 0 1 3-3h6a1 1 0 0 0 1-1v-1.3"
}]]];
const bi = ["svg", t, [["path", {
  d: "M12 7v14"
}], ["path", {
  d: "M16 12h2"
}], ["path", {
  d: "M16 8h2"
}], ["path", {
  d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
}], ["path", {
  d: "M6 12h2"
}], ["path", {
  d: "M6 8h2"
}]]];
const wi = ["svg", t, [["path", {
  d: "M12 7v14"
}], ["path", {
  d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"
}]]];
const Ai = ["svg", t, [["path", {
  d: "M12 7v6"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "M9 10h6"
}]]];
const ki = ["svg", t, [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "M8 11h8"
}], ["path", {
  d: "M8 7h6"
}]]];
const Hi = ["svg", t, [["path", {
  d: "M10 13h4"
}], ["path", {
  d: "M12 6v7"
}], ["path", {
  d: "M16 8V6H8v2"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}]]];
const Si = ["svg", t, [["path", {
  d: "M12 13V7"
}], ["path", {
  d: "M18 2h1a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2"
}], ["path", {
  d: "m9 10 3-3 3 3"
}], ["path", {
  d: "m9 5 3-3 3 3"
}]]];
const Ci = ["svg", t, [["path", {
  d: "M12 13V7"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "m9 10 3-3 3 3"
}]]];
const Vi = ["svg", t, [["path", {
  d: "M15 13a3 3 0 1 0-6 0"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "2"
}]]];
const Li = ["svg", t, [["path", {
  d: "m14.5 7-5 5"
}], ["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}], ["path", {
  d: "m9.5 7 5 5"
}]]];
const Pi = ["svg", t, [["path", {
  d: "M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"
}]]];
const Ti = ["svg", t, [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
}], ["path", {
  d: "m9 10 2 2 4-4"
}]]];
const Ri = ["svg", t, [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "10",
  y2: "10"
}]]];
const Bi = ["svg", t, [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "7",
  y2: "13"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "10",
  y2: "10"
}]]];
const Ei = ["svg", t, [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"
}], ["path", {
  d: "m14.5 7.5-5 5"
}], ["path", {
  d: "m9.5 7.5 5 5"
}]]];
const Ii = ["svg", t, [["path", {
  d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"
}]]];
const Di = ["svg", t, [["path", {
  d: "M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4"
}], ["path", {
  d: "M8 8v1"
}], ["path", {
  d: "M12 8v1"
}], ["path", {
  d: "M16 8v1"
}], ["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "9",
  rx: "2"
}], ["circle", {
  cx: "8",
  cy: "15",
  r: "2"
}], ["circle", {
  cx: "16",
  cy: "15",
  r: "2"
}]]];
const zi = ["svg", t, [["path", {
  d: "M12 6V2H8"
}], ["path", {
  d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
}], ["path", {
  d: "M2 12h2"
}], ["path", {
  d: "M9 11v2"
}], ["path", {
  d: "M15 11v2"
}], ["path", {
  d: "M20 12h2"
}]]];
const Zi = ["svg", t, [["path", {
  d: "M13.67 8H18a2 2 0 0 1 2 2v4.33"
}], ["path", {
  d: "M2 14h2"
}], ["path", {
  d: "M20 14h2"
}], ["path", {
  d: "M22 22 2 2"
}], ["path", {
  d: "M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586"
}], ["path", {
  d: "M9 13v2"
}], ["path", {
  d: "M9.67 4H12v2.33"
}]]];
const Fi = ["svg", t, [["path", {
  d: "M12 8V4H8"
}], ["rect", {
  width: "16",
  height: "12",
  x: "4",
  y: "8",
  rx: "2"
}], ["path", {
  d: "M2 14h2"
}], ["path", {
  d: "M20 14h2"
}], ["path", {
  d: "M15 13v2"
}], ["path", {
  d: "M9 13v2"
}]]];
const Ui = ["svg", t, [["path", {
  d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
}], ["path", {
  d: "m3.3 7 8.7 5 8.7-5"
}], ["path", {
  d: "M12 22V12"
}]]];
const Wi = ["svg", t, [["path", {
  d: "M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"
}], ["path", {
  d: "m7 16.5-4.74-2.85"
}], ["path", {
  d: "m7 16.5 5-3"
}], ["path", {
  d: "M7 16.5v5.17"
}], ["path", {
  d: "M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"
}], ["path", {
  d: "m17 16.5-5-3"
}], ["path", {
  d: "m17 16.5 4.74-2.85"
}], ["path", {
  d: "M17 16.5v5.17"
}], ["path", {
  d: "M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"
}], ["path", {
  d: "M12 8 7.26 5.15"
}], ["path", {
  d: "m12 8 4.74-2.85"
}], ["path", {
  d: "M12 13.5V8"
}]]];
const Y0 = ["svg", t, [["path", {
  d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"
}], ["path", {
  d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"
}]]];
const Oi = ["svg", t, [["path", {
  d: "M16 3h3v18h-3"
}], ["path", {
  d: "M8 21H5V3h3"
}]]];
const qi = ["svg", t, [["path", {
  d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
}], ["path", {
  d: "M9 13a4.5 4.5 0 0 0 3-4"
}], ["path", {
  d: "M6.003 5.125A3 3 0 0 0 6.401 6.5"
}], ["path", {
  d: "M3.477 10.896a4 4 0 0 1 .585-.396"
}], ["path", {
  d: "M6 18a4 4 0 0 1-1.967-.516"
}], ["path", {
  d: "M12 13h4"
}], ["path", {
  d: "M12 18h6a2 2 0 0 1 2 2v1"
}], ["path", {
  d: "M12 8h8"
}], ["path", {
  d: "M16 8V5a2 2 0 0 1 2-2"
}], ["circle", {
  cx: "16",
  cy: "13",
  r: ".5"
}], ["circle", {
  cx: "18",
  cy: "3",
  r: ".5"
}], ["circle", {
  cx: "20",
  cy: "21",
  r: ".5"
}], ["circle", {
  cx: "20",
  cy: "8",
  r: ".5"
}]]];
const _i = ["svg", t, [["path", {
  d: "M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5"
}], ["path", {
  d: "M17.599 6.5a3 3 0 0 0 .399-1.375"
}], ["path", {
  d: "M6.003 5.125A3 3 0 0 0 6.401 6.5"
}], ["path", {
  d: "M3.477 10.896a4 4 0 0 1 .585-.396"
}], ["path", {
  d: "M19.938 10.5a4 4 0 0 1 .585.396"
}], ["path", {
  d: "M6 18a4 4 0 0 1-1.967-.516"
}], ["path", {
  d: "M19.967 17.484A4 4 0 0 1 18 18"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["path", {
  d: "m15.7 10.4-.9.4"
}], ["path", {
  d: "m9.2 13.2-.9.4"
}], ["path", {
  d: "m13.6 15.7-.4-.9"
}], ["path", {
  d: "m10.8 9.2-.4-.9"
}], ["path", {
  d: "m15.7 13.5-.9-.4"
}], ["path", {
  d: "m9.2 10.9-.9-.4"
}], ["path", {
  d: "m10.5 15.7.4-.9"
}], ["path", {
  d: "m13.1 9.2.4-.9"
}]]];
const Gi = ["svg", t, [["path", {
  d: "M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"
}], ["path", {
  d: "M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"
}], ["path", {
  d: "M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"
}], ["path", {
  d: "M17.599 6.5a3 3 0 0 0 .399-1.375"
}], ["path", {
  d: "M6.003 5.125A3 3 0 0 0 6.401 6.5"
}], ["path", {
  d: "M3.477 10.896a4 4 0 0 1 .585-.396"
}], ["path", {
  d: "M19.938 10.5a4 4 0 0 1 .585.396"
}], ["path", {
  d: "M6 18a4 4 0 0 1-1.967-.516"
}], ["path", {
  d: "M19.967 17.484A4 4 0 0 1 18 18"
}]]];
const Ni = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 9v6"
}], ["path", {
  d: "M16 15v6"
}], ["path", {
  d: "M16 3v6"
}], ["path", {
  d: "M3 15h18"
}], ["path", {
  d: "M3 9h18"
}], ["path", {
  d: "M8 15v6"
}], ["path", {
  d: "M8 3v6"
}]]];
const $i = ["svg", t, [["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
}], ["path", {
  d: "M22 13a18.15 18.15 0 0 1-20 0"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "6",
  rx: "2"
}]]];
const Xi = ["svg", t, [["path", {
  d: "M10 20v2"
}], ["path", {
  d: "M14 20v2"
}], ["path", {
  d: "M18 20v2"
}], ["path", {
  d: "M21 20H3"
}], ["path", {
  d: "M6 20v2"
}], ["path", {
  d: "M8 16V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v12"
}], ["rect", {
  x: "4",
  y: "6",
  width: "16",
  height: "10",
  rx: "2"
}]]];
const Yi = ["svg", t, [["path", {
  d: "M12 11v4"
}], ["path", {
  d: "M14 13h-4"
}], ["path", {
  d: "M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"
}], ["path", {
  d: "M18 6v14"
}], ["path", {
  d: "M6 6v14"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "6",
  rx: "2"
}]]];
const Ki = ["svg", t, [["path", {
  d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "6",
  rx: "2"
}]]];
const Qi = ["svg", t, [["rect", {
  x: "8",
  y: "8",
  width: "8",
  height: "8",
  rx: "2"
}], ["path", {
  d: "M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2"
}], ["path", {
  d: "M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2"
}]]];
const Ji = ["svg", t, [["path", {
  d: "m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08"
}], ["path", {
  d: "M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z"
}]]];
const ji = ["svg", t, [["path", {
  d: "M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2"
}], ["path", {
  d: "M14.12 3.88 16 2"
}], ["path", {
  d: "M22 13h-4v-2a4 4 0 0 0-4-4h-1.3"
}], ["path", {
  d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13"
}], ["path", {
  d: "M12 20v-8"
}], ["path", {
  d: "M6 13H2"
}], ["path", {
  d: "M3 21c0-2.1 1.7-3.9 3.8-4"
}]]];
const t4 = ["svg", t, [["path", {
  d: "M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
}], ["path", {
  d: "M14.12 3.88 16 2"
}], ["path", {
  d: "M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5"
}], ["path", {
  d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
}], ["path", {
  d: "M3 21c0-2.1 1.7-3.9 3.8-4"
}], ["path", {
  d: "M6 13H2"
}], ["path", {
  d: "M6.53 9C4.6 8.8 3 7.1 3 5"
}], ["path", {
  d: "m8 2 1.88 1.88"
}], ["path", {
  d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
}]]];
const a4 = ["svg", t, [["path", {
  d: "m8 2 1.88 1.88"
}], ["path", {
  d: "M14.12 3.88 16 2"
}], ["path", {
  d: "M9 7.13v-1a3.003 3.003 0 1 1 6 0v1"
}], ["path", {
  d: "M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"
}], ["path", {
  d: "M12 20v-9"
}], ["path", {
  d: "M6.53 9C4.6 8.8 3 7.1 3 5"
}], ["path", {
  d: "M6 13H2"
}], ["path", {
  d: "M3 21c0-2.1 1.7-3.9 3.8-4"
}], ["path", {
  d: "M20.97 5c0 2.1-1.6 3.8-3.5 4"
}], ["path", {
  d: "M22 13h-4"
}], ["path", {
  d: "M17.2 17c2.1.1 3.8 1.9 3.8 4"
}]]];
const e4 = ["svg", t, [["path", {
  d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"
}], ["path", {
  d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"
}], ["path", {
  d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M10 6h4"
}], ["path", {
  d: "M10 10h4"
}], ["path", {
  d: "M10 14h4"
}], ["path", {
  d: "M10 18h4"
}]]];
const h4 = ["svg", t, [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M9 22v-4h6v4"
}], ["path", {
  d: "M8 6h.01"
}], ["path", {
  d: "M16 6h.01"
}], ["path", {
  d: "M12 6h.01"
}], ["path", {
  d: "M12 10h.01"
}], ["path", {
  d: "M12 14h.01"
}], ["path", {
  d: "M16 10h.01"
}], ["path", {
  d: "M16 14h.01"
}], ["path", {
  d: "M8 10h.01"
}], ["path", {
  d: "M8 14h.01"
}]]];
const s4 = ["svg", t, [["path", {
  d: "M4 6 2 7"
}], ["path", {
  d: "M10 6h4"
}], ["path", {
  d: "m22 7-2-1"
}], ["rect", {
  width: "16",
  height: "16",
  x: "4",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M4 11h16"
}], ["path", {
  d: "M8 15h.01"
}], ["path", {
  d: "M16 15h.01"
}], ["path", {
  d: "M6 19v2"
}], ["path", {
  d: "M18 21v-2"
}]]];
const n4 = ["svg", t, [["path", {
  d: "M8 6v6"
}], ["path", {
  d: "M15 6v6"
}], ["path", {
  d: "M2 12h19.6"
}], ["path", {
  d: "M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3"
}], ["circle", {
  cx: "7",
  cy: "18",
  r: "2"
}], ["path", {
  d: "M9 18h5"
}], ["circle", {
  cx: "16",
  cy: "18",
  r: "2"
}]]];
const c4 = ["svg", t, [["path", {
  d: "M10 3h.01"
}], ["path", {
  d: "M14 2h.01"
}], ["path", {
  d: "m2 9 20-5"
}], ["path", {
  d: "M12 12V6.5"
}], ["rect", {
  width: "16",
  height: "10",
  x: "4",
  y: "12",
  rx: "3"
}], ["path", {
  d: "M9 12v5"
}], ["path", {
  d: "M15 12v5"
}], ["path", {
  d: "M4 17h16"
}]]];
const o4 = ["svg", t, [["path", {
  d: "M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1"
}], ["path", {
  d: "M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9"
}], ["path", {
  d: "M21 21v-2h-4"
}], ["path", {
  d: "M3 5h4V3"
}], ["path", {
  d: "M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3"
}]]];
const d4 = ["svg", t, [["circle", {
  cx: "9",
  cy: "7",
  r: "2"
}], ["path", {
  d: "M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"
}], ["path", {
  d: "M16 13H3"
}], ["path", {
  d: "M16 17H3"
}]]];
const r4 = ["svg", t, [["path", {
  d: "M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"
}], ["path", {
  d: "M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1"
}], ["path", {
  d: "M2 21h20"
}], ["path", {
  d: "M7 8v3"
}], ["path", {
  d: "M12 8v3"
}], ["path", {
  d: "M17 8v3"
}], ["path", {
  d: "M7 4h.01"
}], ["path", {
  d: "M12 4h.01"
}], ["path", {
  d: "M17 4h.01"
}]]];
const i4 = ["svg", t, [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "6",
  y2: "6"
}], ["line", {
  x1: "16",
  x2: "16",
  y1: "14",
  y2: "18"
}], ["path", {
  d: "M16 10h.01"
}], ["path", {
  d: "M12 10h.01"
}], ["path", {
  d: "M8 10h.01"
}], ["path", {
  d: "M12 14h.01"
}], ["path", {
  d: "M8 14h.01"
}], ["path", {
  d: "M12 18h.01"
}], ["path", {
  d: "M8 18h.01"
}]]];
const p4 = ["svg", t, [["path", {
  d: "M11 14h1v4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M8 2v4"
}], ["rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}]]];
const l4 = ["svg", t, [["path", {
  d: "m14 18 4 4 4-4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M18 14v8"
}], ["path", {
  d: "M21 11.354V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.343"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M8 2v4"
}]]];
const M4 = ["svg", t, [["path", {
  d: "m14 18 4-4 4 4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M18 22v-8"
}], ["path", {
  d: "M21 11.343V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h9"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M8 2v4"
}]]];
const v4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "m16 20 2 2 4-4"
}]]];
const g4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "m9 16 2 2 4-4"
}]]];
const m4 = ["svg", t, [["path", {
  d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M3 10h5"
}], ["path", {
  d: "M17.5 17.5 16 16.3V14"
}], ["circle", {
  cx: "16",
  cy: "16",
  r: "6"
}]]];
const y4 = ["svg", t, [["path", {
  d: "m15.2 16.9-.9-.4"
}], ["path", {
  d: "m15.2 19.1-.9.4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "m16.9 15.2-.4-.9"
}], ["path", {
  d: "m16.9 20.8-.4.9"
}], ["path", {
  d: "m19.5 14.3-.4.9"
}], ["path", {
  d: "m19.5 21.7-.4-.9"
}], ["path", {
  d: "M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
}], ["path", {
  d: "m21.7 16.5-.9.4"
}], ["path", {
  d: "m21.7 19.5-.9-.4"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M8 2v4"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}]]];
const u4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M8 14h.01"
}], ["path", {
  d: "M12 14h.01"
}], ["path", {
  d: "M16 14h.01"
}], ["path", {
  d: "M8 18h.01"
}], ["path", {
  d: "M12 18h.01"
}], ["path", {
  d: "M16 18h.01"
}]]];
const x4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M15 22v-4a2 2 0 0 1 2-2h4"
}]]];
const f4 = ["svg", t, [["path", {
  d: "M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7"
}], ["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
}]]];
const b4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M10 16h4"
}]]];
const w4 = ["svg", t, [["path", {
  d: "M16 19h6"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M21 15V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M8 2v4"
}]]];
const A4 = ["svg", t, [["path", {
  d: "M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18"
}], ["path", {
  d: "M21 15.5V6a2 2 0 0 0-2-2H9.5"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M3 10h7"
}], ["path", {
  d: "M21 10h-5.5"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const k4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M10 16h4"
}], ["path", {
  d: "M12 14v4"
}]]];
const H4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M16 19h6"
}], ["path", {
  d: "M19 16v6"
}]]];
const S4 = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M17 14h-6"
}], ["path", {
  d: "M13 18H7"
}], ["path", {
  d: "M7 14h.01"
}], ["path", {
  d: "M17 18h.01"
}]]];
const C4 = ["svg", t, [["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M21 11.75V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.25"
}], ["path", {
  d: "m22 22-1.875-1.875"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "M8 2v4"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}]]];
const V4 = ["svg", t, [["path", {
  d: "M11 10v4h4"
}], ["path", {
  d: "m11 14 1.535-1.605a5 5 0 0 1 8 1.5"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "m21 18-1.535 1.605a5 5 0 0 1-8-1.5"
}], ["path", {
  d: "M21 22v-4h-4"
}], ["path", {
  d: "M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h4.3"
}], ["path", {
  d: "M3 10h4"
}], ["path", {
  d: "M8 2v4"
}]]];
const L4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "m17 22 5-5"
}], ["path", {
  d: "m17 17 5 5"
}]]];
const P4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M3 10h18"
}], ["path", {
  d: "m14 14-4 4"
}], ["path", {
  d: "m10 14 4 4"
}]]];
const T4 = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M3 10h18"
}]]];
const R4 = ["svg", t, [["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}], ["path", {
  d: "M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5"
}], ["path", {
  d: "M14.121 15.121A3 3 0 1 1 9.88 10.88"
}]]];
const B4 = ["svg", t, [["path", {
  d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "3"
}]]];
const E4 = ["svg", t, [["path", {
  d: "M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z"
}], ["path", {
  d: "M17.75 7 15 2.1"
}], ["path", {
  d: "M10.9 4.8 13 9"
}], ["path", {
  d: "m7.9 9.7 2 4.4"
}], ["path", {
  d: "M4.9 14.7 7 18.9"
}]]];
const I4 = ["svg", t, [["path", {
  d: "m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1"
}], ["path", {
  d: "M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657"
}], ["path", {
  d: "M14 16.5V14"
}], ["path", {
  d: "M14 6.5v1.843"
}], ["path", {
  d: "M10 10v7.5"
}], ["path", {
  d: "m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1"
}], ["path", {
  d: "m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const D4 = ["svg", t, [["path", {
  d: "m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z"
}], ["path", {
  d: "M14 6.5v10"
}], ["path", {
  d: "M10 7.5v10"
}], ["path", {
  d: "m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1"
}], ["path", {
  d: "m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1"
}]]];
const z4 = ["svg", t, [["path", {
  d: "M12 22v-4"
}], ["path", {
  d: "M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6"
}]]];
const Z4 = ["svg", t, [["path", {
  d: "M10.5 5H19a2 2 0 0 1 2 2v8.5"
}], ["path", {
  d: "M17 11h-.5"
}], ["path", {
  d: "M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M7 11h4"
}], ["path", {
  d: "M7 15h2.5"
}]]];
const K0 = ["svg", t, [["rect", {
  width: "18",
  height: "14",
  x: "3",
  y: "5",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M7 15h4M15 15h2M7 11h2M13 11h4"
}]]];
const F4 = ["svg", t, [["path", {
  d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
}], ["path", {
  d: "M7 14h.01"
}], ["path", {
  d: "M17 14h.01"
}], ["rect", {
  width: "18",
  height: "8",
  x: "3",
  y: "10",
  rx: "2"
}], ["path", {
  d: "M5 18v2"
}], ["path", {
  d: "M19 18v2"
}]]];
const U4 = ["svg", t, [["path", {
  d: "M10 2h4"
}], ["path", {
  d: "m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8"
}], ["path", {
  d: "M7 14h.01"
}], ["path", {
  d: "M17 14h.01"
}], ["rect", {
  width: "18",
  height: "8",
  x: "3",
  y: "10",
  rx: "2"
}], ["path", {
  d: "M5 18v2"
}], ["path", {
  d: "M19 18v2"
}]]];
const W4 = ["svg", t, [["path", {
  d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"
}], ["circle", {
  cx: "7",
  cy: "17",
  r: "2"
}], ["path", {
  d: "M9 17h6"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "2"
}]]];
const O4 = ["svg", t, [["path", {
  d: "M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2"
}], ["path", {
  d: "M2 9h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2"
}], ["path", {
  d: "M22 17v1a1 1 0 0 1-1 1H10v-9a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v9"
}], ["circle", {
  cx: "8",
  cy: "19",
  r: "2"
}]]];
const q4 = ["svg", t, [["path", {
  d: "M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"
}], ["path", {
  d: "M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z"
}], ["path", {
  d: "M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z"
}]]];
const _4 = ["svg", t, [["circle", {
  cx: "7",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M10 9v6"
}], ["circle", {
  cx: "17",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M14 7v8"
}]]];
const G4 = ["svg", t, [["path", {
  d: "m3 15 4-8 4 8"
}], ["path", {
  d: "M4 13h6"
}], ["circle", {
  cx: "18",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M21 9v6"
}]]];
const N4 = ["svg", t, [["path", {
  d: "m3 15 4-8 4 8"
}], ["path", {
  d: "M4 13h6"
}], ["path", {
  d: "M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4"
}]]];
const $4 = ["svg", t, [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}], ["circle", {
  cx: "8",
  cy: "10",
  r: "2"
}], ["path", {
  d: "M8 12h8"
}], ["circle", {
  cx: "16",
  cy: "10",
  r: "2"
}], ["path", {
  d: "m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3"
}]]];
const X4 = ["svg", t, [["path", {
  d: "M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"
}], ["path", {
  d: "M2 12a9 9 0 0 1 8 8"
}], ["path", {
  d: "M2 16a5 5 0 0 1 4 4"
}], ["line", {
  x1: "2",
  x2: "2.01",
  y1: "20",
  y2: "20"
}]]];
const Y4 = ["svg", t, [["path", {
  d: "M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"
}], ["path", {
  d: "M18 11V4H6v7"
}], ["path", {
  d: "M15 22v-4a3 3 0 0 0-3-3a3 3 0 0 0-3 3v4"
}], ["path", {
  d: "M22 11V9"
}], ["path", {
  d: "M2 11V9"
}], ["path", {
  d: "M6 4V2"
}], ["path", {
  d: "M18 4V2"
}], ["path", {
  d: "M10 4V2"
}], ["path", {
  d: "M14 4V2"
}]]];
const K4 = ["svg", t, [["path", {
  d: "M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"
}], ["path", {
  d: "M8 14v.5"
}], ["path", {
  d: "M16 14v.5"
}], ["path", {
  d: "M11.25 16.25h1.5L12 17l-.75-.75Z"
}]]];
const Q4 = ["svg", t, [["path", {
  d: "M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97"
}], ["path", {
  d: "M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z"
}], ["path", {
  d: "M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15"
}], ["path", {
  d: "M2 21v-4"
}], ["path", {
  d: "M7 9h.01"
}]]];
const Q0 = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M7 11.207a.5.5 0 0 1 .146-.353l2-2a.5.5 0 0 1 .708 0l3.292 3.292a.5.5 0 0 0 .708 0l4.292-4.292a.5.5 0 0 1 .854.353V16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"
}]]];
const J0 = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["rect", {
  x: "7",
  y: "13",
  width: "9",
  height: "4",
  rx: "1"
}], ["rect", {
  x: "7",
  y: "5",
  width: "12",
  height: "4",
  rx: "1"
}]]];
const J4 = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M7 11h8"
}], ["path", {
  d: "M7 16h3"
}], ["path", {
  d: "M7 6h12"
}]]];
const j4 = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M7 11h8"
}], ["path", {
  d: "M7 16h12"
}], ["path", {
  d: "M7 6h3"
}]]];
const tp = ["svg", t, [["path", {
  d: "M11 13v4"
}], ["path", {
  d: "M15 5v4"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["rect", {
  x: "7",
  y: "13",
  width: "9",
  height: "4",
  rx: "1"
}], ["rect", {
  x: "7",
  y: "5",
  width: "12",
  height: "4",
  rx: "1"
}]]];
const j0 = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M7 16h8"
}], ["path", {
  d: "M7 11h12"
}], ["path", {
  d: "M7 6h3"
}]]];
const te = ["svg", t, [["path", {
  d: "M9 5v4"
}], ["rect", {
  width: "4",
  height: "6",
  x: "7",
  y: "9",
  rx: "1"
}], ["path", {
  d: "M9 15v2"
}], ["path", {
  d: "M17 3v2"
}], ["rect", {
  width: "4",
  height: "8",
  x: "15",
  y: "5",
  rx: "1"
}], ["path", {
  d: "M17 13v3"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}]]];
const ae = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["rect", {
  x: "15",
  y: "5",
  width: "4",
  height: "12",
  rx: "1"
}], ["rect", {
  x: "7",
  y: "8",
  width: "4",
  height: "9",
  rx: "1"
}]]];
const ap = ["svg", t, [["path", {
  d: "M13 17V9"
}], ["path", {
  d: "M18 17v-3"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M8 17V5"
}]]];
const ee = ["svg", t, [["path", {
  d: "M13 17V9"
}], ["path", {
  d: "M18 17V5"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M8 17v-3"
}]]];
const ep = ["svg", t, [["path", {
  d: "M11 13H7"
}], ["path", {
  d: "M19 9h-4"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["rect", {
  x: "15",
  y: "5",
  width: "4",
  height: "12",
  rx: "1"
}], ["rect", {
  x: "7",
  y: "8",
  width: "4",
  height: "9",
  rx: "1"
}]]];
const he = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M18 17V9"
}], ["path", {
  d: "M13 17V5"
}], ["path", {
  d: "M8 17v-3"
}]]];
const hp = ["svg", t, [["path", {
  d: "M10 6h8"
}], ["path", {
  d: "M12 16h6"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M8 11h7"
}]]];
const se = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "m19 9-5 5-4-4-3 3"
}]]];
const sp = ["svg", t, [["path", {
  d: "m13.11 7.664 1.78 2.672"
}], ["path", {
  d: "m14.162 12.788-3.324 1.424"
}], ["path", {
  d: "m20 4-6.06 1.515"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["circle", {
  cx: "12",
  cy: "6",
  r: "2"
}], ["circle", {
  cx: "16",
  cy: "12",
  r: "2"
}], ["circle", {
  cx: "9",
  cy: "15",
  r: "2"
}]]];
const np = ["svg", t, [["path", {
  d: "M12 20V10"
}], ["path", {
  d: "M18 20v-4"
}], ["path", {
  d: "M6 20V4"
}]]];
const ne = ["svg", t, [["line", {
  x1: "12",
  x2: "12",
  y1: "20",
  y2: "10"
}], ["line", {
  x1: "18",
  x2: "18",
  y1: "20",
  y2: "4"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "20",
  y2: "16"
}]]];
const ce = ["svg", t, [["line", {
  x1: "18",
  x2: "18",
  y1: "20",
  y2: "10"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "20",
  y2: "4"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "20",
  y2: "14"
}]]];
const cp = ["svg", t, [["path", {
  d: "M12 16v5"
}], ["path", {
  d: "M16 14v7"
}], ["path", {
  d: "M20 10v11"
}], ["path", {
  d: "m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"
}], ["path", {
  d: "M4 18v3"
}], ["path", {
  d: "M8 14v7"
}]]];
const oe = ["svg", t, [["path", {
  d: "M8 6h10"
}], ["path", {
  d: "M6 12h9"
}], ["path", {
  d: "M11 18h7"
}]]];
const de = ["svg", t, [["path", {
  d: "M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"
}], ["path", {
  d: "M21.21 15.89A10 10 0 1 1 8 2.83"
}]]];
const re = ["svg", t, [["circle", {
  cx: "7.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor"
}], ["circle", {
  cx: "18.5",
  cy: "5.5",
  r: ".5",
  fill: "currentColor"
}], ["circle", {
  cx: "11.5",
  cy: "11.5",
  r: ".5",
  fill: "currentColor"
}], ["circle", {
  cx: "7.5",
  cy: "16.5",
  r: ".5",
  fill: "currentColor"
}], ["circle", {
  cx: "17.5",
  cy: "14.5",
  r: ".5",
  fill: "currentColor"
}], ["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}]]];
const op = ["svg", t, [["path", {
  d: "M3 3v16a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"
}]]];
const dp = ["svg", t, [["path", {
  d: "M18 6 7 17l-5-5"
}], ["path", {
  d: "m22 10-7.5 7.5L13 16"
}]]];
const rp = ["svg", t, [["path", {
  d: "M20 6 9 17l-5-5"
}]]];
const ip = ["svg", t, [["path", {
  d: "M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z"
}], ["path", {
  d: "M6 17h12"
}]]];
const pp = ["svg", t, [["path", {
  d: "M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
}], ["path", {
  d: "M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z"
}], ["path", {
  d: "M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12"
}], ["path", {
  d: "M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z"
}]]];
const lp = ["svg", t, [["path", {
  d: "m6 9 6 6 6-6"
}]]];
const Mp = ["svg", t, [["path", {
  d: "m17 18-6-6 6-6"
}], ["path", {
  d: "M7 6v12"
}]]];
const vp = ["svg", t, [["path", {
  d: "m7 18 6-6-6-6"
}], ["path", {
  d: "M17 6v12"
}]]];
const gp = ["svg", t, [["path", {
  d: "m15 18-6-6 6-6"
}]]];
const mp = ["svg", t, [["path", {
  d: "m9 18 6-6-6-6"
}]]];
const yp = ["svg", t, [["path", {
  d: "m18 15-6-6-6 6"
}]]];
const up = ["svg", t, [["path", {
  d: "m7 20 5-5 5 5"
}], ["path", {
  d: "m7 4 5 5 5-5"
}]]];
const xp = ["svg", t, [["path", {
  d: "m7 6 5 5 5-5"
}], ["path", {
  d: "m7 13 5 5 5-5"
}]]];
const fp = ["svg", t, [["path", {
  d: "m18 8 4 4-4 4"
}], ["path", {
  d: "m6 8-4 4 4 4"
}], ["path", {
  d: "M8 12h.01"
}], ["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M16 12h.01"
}]]];
const bp = ["svg", t, [["path", {
  d: "m9 7-5 5 5 5"
}], ["path", {
  d: "m15 7 5 5-5 5"
}]]];
const wp = ["svg", t, [["path", {
  d: "m11 17-5-5 5-5"
}], ["path", {
  d: "m18 17-5-5 5-5"
}]]];
const Ap = ["svg", t, [["path", {
  d: "m20 17-5-5 5-5"
}], ["path", {
  d: "m4 17 5-5-5-5"
}]]];
const kp = ["svg", t, [["path", {
  d: "m6 17 5-5-5-5"
}], ["path", {
  d: "m13 17 5-5-5-5"
}]]];
const Hp = ["svg", t, [["path", {
  d: "m7 15 5 5 5-5"
}], ["path", {
  d: "m7 9 5-5 5 5"
}]]];
const Sp = ["svg", t, [["path", {
  d: "m17 11-5-5-5 5"
}], ["path", {
  d: "m17 18-5-5-5 5"
}]]];
const Cp = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}], ["line", {
  x1: "21.17",
  x2: "12",
  y1: "8",
  y2: "8"
}], ["line", {
  x1: "3.95",
  x2: "8.54",
  y1: "6.06",
  y2: "14"
}], ["line", {
  x1: "10.88",
  x2: "15.46",
  y1: "21.94",
  y2: "14"
}]]];
const Vp = ["svg", t, [["path", {
  d: "M10 9h4"
}], ["path", {
  d: "M12 7v5"
}], ["path", {
  d: "M14 22v-4a2 2 0 0 0-4 0v4"
}], ["path", {
  d: "M18 22V5.618a1 1 0 0 0-.553-.894l-4.553-2.277a2 2 0 0 0-1.788 0L6.553 4.724A1 1 0 0 0 6 5.618V22"
}], ["path", {
  d: "m18 7 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.618a1 1 0 0 1 .553-.894L6 7"
}]]];
const Lp = ["svg", t, [["path", {
  d: "M12 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h13"
}], ["path", {
  d: "M18 8c0-2.5-2-2.5-2-5"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M21 12a1 1 0 0 1 1 1v2a1 1 0 0 1-.5.866"
}], ["path", {
  d: "M22 8c0-2.5-2-2.5-2-5"
}], ["path", {
  d: "M7 12v4"
}]]];
const Pp = ["svg", t, [["path", {
  d: "M17 12H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14"
}], ["path", {
  d: "M18 8c0-2.5-2-2.5-2-5"
}], ["path", {
  d: "M21 16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
}], ["path", {
  d: "M22 8c0-2.5-2-2.5-2-5"
}], ["path", {
  d: "M7 12v4"
}]]];
const ie = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "16",
  y2: "16"
}]]];
const pe = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M12 8v8"
}], ["path", {
  d: "m8 12 4 4 4-4"
}]]];
const le = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M16 12H8"
}], ["path", {
  d: "m12 8-4 4 4 4"
}]]];
const Me = ["svg", t, [["path", {
  d: "M2 12a10 10 0 1 1 10 10"
}], ["path", {
  d: "m2 22 10-10"
}], ["path", {
  d: "M8 22H2v-6"
}]]];
const ve = ["svg", t, [["path", {
  d: "M12 22a10 10 0 1 1 10-10"
}], ["path", {
  d: "M22 22 12 12"
}], ["path", {
  d: "M22 16v6h-6"
}]]];
const ge = ["svg", t, [["path", {
  d: "M2 8V2h6"
}], ["path", {
  d: "m2 2 10 10"
}], ["path", {
  d: "M12 2A10 10 0 1 1 2 12"
}]]];
const me = ["svg", t, [["path", {
  d: "M22 12A10 10 0 1 1 12 2"
}], ["path", {
  d: "M22 2 12 12"
}], ["path", {
  d: "M16 2h6v6"
}]]];
const ye = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "m12 16 4-4-4-4"
}]]];
const ue = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m16 12-4-4-4 4"
}], ["path", {
  d: "M12 16V8"
}]]];
const xe = ["svg", t, [["path", {
  d: "M21.801 10A10 10 0 1 1 17 3.335"
}], ["path", {
  d: "m9 11 3 3L22 4"
}]]];
const fe = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m9 12 2 2 4-4"
}]]];
const be = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m16 10-4 4-4-4"
}]]];
const we = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m14 16-4-4 4-4"
}]]];
const Ae = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m10 8 4 4-4 4"
}]]];
const ke = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m8 14 4-4 4 4"
}]]];
const Tp = ["svg", t, [["path", {
  d: "M10.1 2.182a10 10 0 0 1 3.8 0"
}], ["path", {
  d: "M13.9 21.818a10 10 0 0 1-3.8 0"
}], ["path", {
  d: "M17.609 3.721a10 10 0 0 1 2.69 2.7"
}], ["path", {
  d: "M2.182 13.9a10 10 0 0 1 0-3.8"
}], ["path", {
  d: "M20.279 17.609a10 10 0 0 1-2.7 2.69"
}], ["path", {
  d: "M21.818 10.1a10 10 0 0 1 0 3.8"
}], ["path", {
  d: "M3.721 6.391a10 10 0 0 1 2.7-2.69"
}], ["path", {
  d: "M6.391 20.279a10 10 0 0 1-2.69-2.7"
}]]];
const He = ["svg", t, [["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "16",
  y2: "16"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "8"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const Rp = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
}], ["path", {
  d: "M12 18V6"
}]]];
const Bp = ["svg", t, [["path", {
  d: "M10.1 2.18a9.93 9.93 0 0 1 3.8 0"
}], ["path", {
  d: "M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7"
}], ["path", {
  d: "M21.82 10.1a9.93 9.93 0 0 1 0 3.8"
}], ["path", {
  d: "M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69"
}], ["path", {
  d: "M13.9 21.82a9.94 9.94 0 0 1-3.8 0"
}], ["path", {
  d: "M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7"
}], ["path", {
  d: "M2.18 13.9a9.93 9.93 0 0 1 0-3.8"
}], ["path", {
  d: "M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}]]];
const Ep = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}]]];
const Ip = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M17 12h.01"
}], ["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M7 12h.01"
}]]];
const Dp = ["svg", t, [["path", {
  d: "M7 10h10"
}], ["path", {
  d: "M7 14h10"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const zp = ["svg", t, [["path", {
  d: "M12 2a10 10 0 0 1 7.38 16.75"
}], ["path", {
  d: "m16 12-4-4-4 4"
}], ["path", {
  d: "M12 16V8"
}], ["path", {
  d: "M2.5 8.875a10 10 0 0 0-.5 3"
}], ["path", {
  d: "M2.83 16a10 10 0 0 0 2.43 3.4"
}], ["path", {
  d: "M4.636 5.235a10 10 0 0 1 .891-.857"
}], ["path", {
  d: "M8.644 21.42a10 10 0 0 0 7.631-.38"
}]]];
const Zp = ["svg", t, [["path", {
  d: "M12 2a10 10 0 0 1 7.38 16.75"
}], ["path", {
  d: "M12 8v8"
}], ["path", {
  d: "M16 12H8"
}], ["path", {
  d: "M2.5 8.875a10 10 0 0 0-.5 3"
}], ["path", {
  d: "M2.83 16a10 10 0 0 0 2.43 3.4"
}], ["path", {
  d: "M4.636 5.235a10 10 0 0 1 .891-.857"
}], ["path", {
  d: "M8.644 21.42a10 10 0 0 0 7.631-.38"
}]]];
const Se = ["svg", t, [["path", {
  d: "M15.6 2.7a10 10 0 1 0 5.7 5.7"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}], ["path", {
  d: "M13.4 10.6 19 5"
}]]];
const Ce = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
}], ["path", {
  d: "M12 17h.01"
}]]];
const Ve = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M8 12h8"
}]]];
const Fp = ["svg", t, [["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M8.35 2.69A10 10 0 0 1 21.3 15.65"
}], ["path", {
  d: "M19.08 19.08A10 10 0 1 1 4.92 4.92"
}]]];
const Le = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m5 5 14 14"
}], ["path", {
  d: "M13 13a3 3 0 1 0 0-6H9v2"
}], ["path", {
  d: "M9 17v-2.34"
}]]];
const Pe = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M9 17V7h4a3 3 0 0 1 0 6H9"
}]]];
const Te = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "15",
  y2: "9"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "15",
  y2: "9"
}]]];
const Re = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m15 9-6 6"
}], ["path", {
  d: "M9 9h.01"
}], ["path", {
  d: "M15 15h.01"
}]]];
const Be = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polygon", {
  points: "10 8 16 12 10 16 10 8"
}]]];
const Ee = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "M12 8v8"
}]]];
const Ie = ["svg", t, [["path", {
  d: "M12 7v4"
}], ["path", {
  d: "M7.998 9.003a5 5 0 1 0 8-.005"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const De = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M22 2 2 22"
}]]];
const Up = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "15",
  y2: "9"
}]]];
const ze = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["rect", {
  x: "9",
  y: "9",
  width: "6",
  height: "6",
  rx: "1"
}]]];
const Ze = ["svg", t, [["path", {
  d: "M18 20a6 6 0 0 0-12 0"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "4"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const Fe = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}], ["path", {
  d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"
}]]];
const Ue = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m15 9-6 6"
}], ["path", {
  d: "m9 9 6 6"
}]]];
const Wp = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const Op = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M11 9h4a2 2 0 0 0 2-2V3"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2"
}], ["path", {
  d: "M7 21v-4a2 2 0 0 1 2-2h4"
}], ["circle", {
  cx: "15",
  cy: "15",
  r: "2"
}]]];
const qp = ["svg", t, [["path", {
  d: "M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z"
}], ["path", {
  d: "M19.65 15.66A8 8 0 0 1 8.35 4.34"
}], ["path", {
  d: "m14 10-5.5 5.5"
}], ["path", {
  d: "M14 17.85V10H6.15"
}]]];
const _p = ["svg", t, [["path", {
  d: "M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z"
}], ["path", {
  d: "m6.2 5.3 3.1 3.9"
}], ["path", {
  d: "m12.4 3.4 3.1 4"
}], ["path", {
  d: "M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
}]]];
const Gp = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "m9 14 2 2 4-4"
}]]];
const Np = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1"
}], ["path", {
  d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v4"
}], ["path", {
  d: "M21 14H11"
}], ["path", {
  d: "m15 10-4 4 4 4"
}]]];
const $p = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M12 11h4"
}], ["path", {
  d: "M12 16h4"
}], ["path", {
  d: "M8 11h.01"
}], ["path", {
  d: "M8 16h.01"
}]]];
const Xp = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M9 14h6"
}]]];
const Yp = ["svg", t, [["path", {
  d: "M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z"
}], ["path", {
  d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10"
}], ["path", {
  d: "m17 10 4 4-4 4"
}]]];
const We = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1"
}], ["path", {
  d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 1.73 1"
}], ["path", {
  d: "M8 18h1"
}], ["path", {
  d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
}]]];
const Oe = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5"
}], ["path", {
  d: "M4 13.5V6a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
}]]];
const Kp = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M9 14h6"
}], ["path", {
  d: "M12 17v-6"
}]]];
const Qp = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M9 12v-1h6v1"
}], ["path", {
  d: "M11 17h2"
}], ["path", {
  d: "M12 11v6"
}]]];
const Jp = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "m15 11-6 6"
}], ["path", {
  d: "m9 11 6 6"
}]]];
const jp = ["svg", t, [["rect", {
  width: "8",
  height: "4",
  x: "8",
  y: "2",
  rx: "1",
  ry: "1"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"
}]]];
const t5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 14.5 8"
}]]];
const a5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 8 10"
}]]];
const e5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 9.5 8"
}]]];
const h5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12"
}]]];
const s5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 16 10"
}]]];
const n5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 16.5 12"
}]]];
const c5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 16 14"
}]]];
const o5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 14.5 16"
}]]];
const d5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 12 16.5"
}]]];
const r5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 9.5 16"
}]]];
const i5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 8 14"
}]]];
const p5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 7.5 12"
}]]];
const l5 = ["svg", t, [["path", {
  d: "M12 6v6l4 2"
}], ["path", {
  d: "M16 21.16a10 10 0 1 1 5-13.516"
}], ["path", {
  d: "M20 11.5v6"
}], ["path", {
  d: "M20 21.5h.01"
}]]];
const M5 = ["svg", t, [["path", {
  d: "M12.338 21.994A10 10 0 1 1 21.925 13.227"
}], ["path", {
  d: "M12 6v6l2 1"
}], ["path", {
  d: "m14 18 4 4 4-4"
}], ["path", {
  d: "M18 14v8"
}]]];
const v5 = ["svg", t, [["path", {
  d: "M13.228 21.925A10 10 0 1 1 21.994 12.338"
}], ["path", {
  d: "M12 6v6l1.562.781"
}], ["path", {
  d: "m14 18 4-4 4 4"
}], ["path", {
  d: "M18 22v-8"
}]]];
const g5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["polyline", {
  points: "12 6 12 12 16 14"
}]]];
const m5 = ["svg", t, [["path", {
  d: "M12 12v4"
}], ["path", {
  d: "M12 20h.01"
}], ["path", {
  d: "M17 18h.5a1 1 0 0 0 0-9h-1.79A7 7 0 1 0 7 17.708"
}]]];
const y5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "17",
  r: "3"
}], ["path", {
  d: "M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2"
}], ["path", {
  d: "m15.7 18.4-.9-.3"
}], ["path", {
  d: "m9.2 15.9-.9-.3"
}], ["path", {
  d: "m10.6 20.7.3-.9"
}], ["path", {
  d: "m13.1 14.2.3-.9"
}], ["path", {
  d: "m13.6 20.7-.4-1"
}], ["path", {
  d: "m10.8 14.3-.4-1"
}], ["path", {
  d: "m8.3 18.6 1-.4"
}], ["path", {
  d: "m14.7 15.8 1-.4"
}]]];
const qe = ["svg", t, [["path", {
  d: "M12 13v8l-4-4"
}], ["path", {
  d: "m12 21 4-4"
}], ["path", {
  d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"
}]]];
const u5 = ["svg", t, [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
}], ["path", {
  d: "M8 19v1"
}], ["path", {
  d: "M8 14v1"
}], ["path", {
  d: "M16 19v1"
}], ["path", {
  d: "M16 14v1"
}], ["path", {
  d: "M12 21v1"
}], ["path", {
  d: "M12 16v1"
}]]];
const x5 = ["svg", t, [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
}], ["path", {
  d: "M16 17H7"
}], ["path", {
  d: "M17 21H9"
}]]];
const f5 = ["svg", t, [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
}], ["path", {
  d: "M16 14v2"
}], ["path", {
  d: "M8 14v2"
}], ["path", {
  d: "M16 20h.01"
}], ["path", {
  d: "M8 20h.01"
}], ["path", {
  d: "M12 16v2"
}], ["path", {
  d: "M12 22h.01"
}]]];
const b5 = ["svg", t, [["path", {
  d: "M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973"
}], ["path", {
  d: "m13 12-3 5h4l-3 5"
}]]];
const w5 = ["svg", t, [["path", {
  d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"
}], ["path", {
  d: "M11 20v2"
}], ["path", {
  d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
}], ["path", {
  d: "M7 19v2"
}]]];
const A5 = ["svg", t, [["path", {
  d: "M10.188 8.5A6 6 0 0 1 16 4a1 1 0 0 0 6 6 6 6 0 0 1-3 5.197"
}], ["path", {
  d: "M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z"
}]]];
const k5 = ["svg", t, [["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193"
}], ["path", {
  d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07"
}]]];
const H5 = ["svg", t, [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
}], ["path", {
  d: "m9.2 22 3-7"
}], ["path", {
  d: "m9 13-3 7"
}], ["path", {
  d: "m17 13-3 7"
}]]];
const S5 = ["svg", t, [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
}], ["path", {
  d: "M16 14v6"
}], ["path", {
  d: "M8 14v6"
}], ["path", {
  d: "M12 16v6"
}]]];
const C5 = ["svg", t, [["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
}], ["path", {
  d: "M8 15h.01"
}], ["path", {
  d: "M8 19h.01"
}], ["path", {
  d: "M12 17h.01"
}], ["path", {
  d: "M12 21h.01"
}], ["path", {
  d: "M16 15h.01"
}], ["path", {
  d: "M16 19h.01"
}]]];
const V5 = ["svg", t, [["path", {
  d: "M12 2v2"
}], ["path", {
  d: "m4.93 4.93 1.41 1.41"
}], ["path", {
  d: "M20 12h2"
}], ["path", {
  d: "m19.07 4.93-1.41 1.41"
}], ["path", {
  d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
}], ["path", {
  d: "M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24"
}], ["path", {
  d: "M11 20v2"
}], ["path", {
  d: "M7 19v2"
}]]];
const L5 = ["svg", t, [["path", {
  d: "M12 2v2"
}], ["path", {
  d: "m4.93 4.93 1.41 1.41"
}], ["path", {
  d: "M20 12h2"
}], ["path", {
  d: "m19.07 4.93-1.41 1.41"
}], ["path", {
  d: "M15.947 12.65a4 4 0 0 0-5.925-4.128"
}], ["path", {
  d: "M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"
}]]];
const _e = ["svg", t, [["path", {
  d: "M12 13v8"
}], ["path", {
  d: "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
}], ["path", {
  d: "m8 17 4-4 4 4"
}]]];
const P5 = ["svg", t, [["path", {
  d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
}]]];
const T5 = ["svg", t, [["path", {
  d: "M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"
}], ["path", {
  d: "M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5"
}]]];
const R5 = ["svg", t, [["path", {
  d: "M16.17 7.83 2 22"
}], ["path", {
  d: "M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12"
}], ["path", {
  d: "m7.83 7.83 8.34 8.34"
}]]];
const B5 = ["svg", t, [["path", {
  d: "M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z"
}], ["path", {
  d: "M12 17.66L12 22"
}]]];
const Ge = ["svg", t, [["path", {
  d: "m18 16 4-4-4-4"
}], ["path", {
  d: "m6 8-4 4 4 4"
}], ["path", {
  d: "m14.5 4-5 16"
}]]];
const E5 = ["svg", t, [["polyline", {
  points: "16 18 22 12 16 6"
}], ["polyline", {
  points: "8 6 2 12 8 18"
}]]];
const I5 = ["svg", t, [["polygon", {
  points: "12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "15.5"
}], ["polyline", {
  points: "22 8.5 12 15.5 2 8.5"
}], ["polyline", {
  points: "2 15.5 12 8.5 22 15.5"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "8.5"
}]]];
const D5 = ["svg", t, [["path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}], ["polyline", {
  points: "7.5 4.21 12 6.81 16.5 4.21"
}], ["polyline", {
  points: "7.5 19.79 7.5 14.6 3 12"
}], ["polyline", {
  points: "21 12 16.5 14.6 16.5 19.79"
}], ["polyline", {
  points: "3.27 6.96 12 12.01 20.73 6.96"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22.08",
  y2: "12"
}]]];
const z5 = ["svg", t, [["path", {
  d: "M10 2v2"
}], ["path", {
  d: "M14 2v2"
}], ["path", {
  d: "M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"
}], ["path", {
  d: "M6 2v2"
}]]];
const Z5 = ["svg", t, [["path", {
  d: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"
}], ["path", {
  d: "M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
}], ["path", {
  d: "M12 2v2"
}], ["path", {
  d: "M12 22v-2"
}], ["path", {
  d: "m17 20.66-1-1.73"
}], ["path", {
  d: "M11 10.27 7 3.34"
}], ["path", {
  d: "m20.66 17-1.73-1"
}], ["path", {
  d: "m3.34 7 1.73 1"
}], ["path", {
  d: "M14 12h8"
}], ["path", {
  d: "M2 12h2"
}], ["path", {
  d: "m20.66 7-1.73 1"
}], ["path", {
  d: "m3.34 17 1.73-1"
}], ["path", {
  d: "m17 3.34-1 1.73"
}], ["path", {
  d: "m11 13.73-4 6.93"
}]]];
const F5 = ["svg", t, [["circle", {
  cx: "8",
  cy: "8",
  r: "6"
}], ["path", {
  d: "M18.09 10.37A6 6 0 1 1 10.34 18"
}], ["path", {
  d: "M7 6h1v4"
}], ["path", {
  d: "m16.71 13.88.7.71-2.82 2.82"
}]]];
const Ne = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 3v18"
}]]];
const $e = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M9 3v18"
}], ["path", {
  d: "M15 3v18"
}]]];
const U5 = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M7.5 3v18"
}], ["path", {
  d: "M12 3v18"
}], ["path", {
  d: "M16.5 3v18"
}]]];
const W5 = ["svg", t, [["path", {
  d: "M10 18H5a3 3 0 0 1-3-3v-1"
}], ["path", {
  d: "M14 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"
}], ["path", {
  d: "M20 2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"
}], ["path", {
  d: "m7 21 3-3-3-3"
}], ["rect", {
  x: "14",
  y: "14",
  width: "8",
  height: "8",
  rx: "2"
}], ["rect", {
  x: "2",
  y: "2",
  width: "8",
  height: "8",
  rx: "2"
}]]];
const O5 = ["svg", t, [["path", {
  d: "M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"
}]]];
const q5 = ["svg", t, [["path", {
  d: "m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const _5 = ["svg", t, [["path", {
  d: "M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
}], ["path", {
  d: "M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"
}], ["path", {
  d: "M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"
}], ["path", {
  d: "M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"
}]]];
const G5 = ["svg", t, [["rect", {
  width: "14",
  height: "8",
  x: "5",
  y: "2",
  rx: "2"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2"
}], ["path", {
  d: "M6 18h2"
}], ["path", {
  d: "M12 18h6"
}]]];
const N5 = ["svg", t, [["path", {
  d: "M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z"
}], ["path", {
  d: "M20 16a8 8 0 1 0-16 0"
}], ["path", {
  d: "M12 4v4"
}], ["path", {
  d: "M10 4h4"
}]]];
const $5 = ["svg", t, [["path", {
  d: "m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98"
}], ["ellipse", {
  cx: "12",
  cy: "19",
  rx: "9",
  ry: "3"
}]]];
const X5 = ["svg", t, [["rect", {
  x: "2",
  y: "6",
  width: "20",
  height: "8",
  rx: "1"
}], ["path", {
  d: "M17 14v7"
}], ["path", {
  d: "M7 14v7"
}], ["path", {
  d: "M17 3v3"
}], ["path", {
  d: "M7 3v3"
}], ["path", {
  d: "M10 14 2.3 6.3"
}], ["path", {
  d: "m14 6 7.7 7.7"
}], ["path", {
  d: "m8 6 8 8"
}]]];
const Xe = ["svg", t, [["path", {
  d: "M16 2v2"
}], ["path", {
  d: "M17.915 22a6 6 0 0 0-12 0"
}], ["path", {
  d: "M8 2v2"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}], ["rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}]]];
const Y5 = ["svg", t, [["path", {
  d: "M16 2v2"
}], ["path", {
  d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M8 2v2"
}], ["circle", {
  cx: "12",
  cy: "11",
  r: "3"
}], ["rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "18",
  rx: "2"
}]]];
const K5 = ["svg", t, [["path", {
  d: "M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"
}], ["path", {
  d: "M10 21.9V14L2.1 9.1"
}], ["path", {
  d: "m10 14 11.9-6.9"
}], ["path", {
  d: "M14 19.8v-8.1"
}], ["path", {
  d: "M18 17.5V9.4"
}]]];
const Q5 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M12 18a6 6 0 0 0 0-12v12z"
}]]];
const J5 = ["svg", t, [["path", {
  d: "M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"
}], ["path", {
  d: "M8.5 8.5v.01"
}], ["path", {
  d: "M16 15.5v.01"
}], ["path", {
  d: "M12 12v.01"
}], ["path", {
  d: "M11 17v.01"
}], ["path", {
  d: "M7 14v.01"
}]]];
const j5 = ["svg", t, [["path", {
  d: "M2 12h20"
}], ["path", {
  d: "M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"
}], ["path", {
  d: "m4 8 16-4"
}], ["path", {
  d: "m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"
}]]];
const tl = ["svg", t, [["path", {
  d: "m12 15 2 2 4-4"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
}]]];
const al = ["svg", t, [["line", {
  x1: "12",
  x2: "18",
  y1: "15",
  y2: "15"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
}]]];
const el = ["svg", t, [["line", {
  x1: "15",
  x2: "15",
  y1: "12",
  y2: "18"
}], ["line", {
  x1: "12",
  x2: "18",
  y1: "15",
  y2: "15"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
}]]];
const hl = ["svg", t, [["line", {
  x1: "12",
  x2: "18",
  y1: "18",
  y2: "12"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
}]]];
const sl = ["svg", t, [["line", {
  x1: "12",
  x2: "18",
  y1: "12",
  y2: "18"
}], ["line", {
  x1: "12",
  x2: "18",
  y1: "18",
  y2: "12"
}], ["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
}]]];
const nl = ["svg", t, [["rect", {
  width: "14",
  height: "14",
  x: "8",
  y: "8",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
}]]];
const cl = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M9.17 14.83a4 4 0 1 0 0-5.66"
}]]];
const ol = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M14.83 14.83a4 4 0 1 1 0-5.66"
}]]];
const dl = ["svg", t, [["polyline", {
  points: "9 10 4 15 9 20"
}], ["path", {
  d: "M20 4v7a4 4 0 0 1-4 4H4"
}]]];
const rl = ["svg", t, [["polyline", {
  points: "15 10 20 15 15 20"
}], ["path", {
  d: "M4 4v7a4 4 0 0 0 4 4h12"
}]]];
const il = ["svg", t, [["polyline", {
  points: "14 15 9 20 4 15"
}], ["path", {
  d: "M20 4h-7a4 4 0 0 0-4 4v12"
}]]];
const pl = ["svg", t, [["polyline", {
  points: "14 9 9 4 4 9"
}], ["path", {
  d: "M20 20h-7a4 4 0 0 1-4-4V4"
}]]];
const ll = ["svg", t, [["polyline", {
  points: "10 15 15 20 20 15"
}], ["path", {
  d: "M4 4h7a4 4 0 0 1 4 4v12"
}]]];
const Ml = ["svg", t, [["polyline", {
  points: "10 9 15 4 20 9"
}], ["path", {
  d: "M4 20h7a4 4 0 0 0 4-4V4"
}]]];
const vl = ["svg", t, [["polyline", {
  points: "9 14 4 9 9 4"
}], ["path", {
  d: "M20 20v-7a4 4 0 0 0-4-4H4"
}]]];
const gl = ["svg", t, [["polyline", {
  points: "15 14 20 9 15 4"
}], ["path", {
  d: "M4 20v-7a4 4 0 0 1 4-4h12"
}]]];
const ml = ["svg", t, [["rect", {
  width: "16",
  height: "16",
  x: "4",
  y: "4",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "6",
  x: "9",
  y: "9",
  rx: "1"
}], ["path", {
  d: "M15 2v2"
}], ["path", {
  d: "M15 20v2"
}], ["path", {
  d: "M2 15h2"
}], ["path", {
  d: "M2 9h2"
}], ["path", {
  d: "M20 15h2"
}], ["path", {
  d: "M20 9h2"
}], ["path", {
  d: "M9 2v2"
}], ["path", {
  d: "M9 20v2"
}]]];
const yl = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
}], ["path", {
  d: "M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1"
}]]];
const ul = ["svg", t, [["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "5",
  rx: "2"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "10",
  y2: "10"
}]]];
const xl = ["svg", t, [["path", {
  d: "m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z"
}], ["path", {
  d: "m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83"
}], ["path", {
  d: "M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4"
}], ["path", {
  d: "m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2"
}], ["path", {
  d: "M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5"
}]]];
const fl = ["svg", t, [["path", {
  d: "M6 2v14a2 2 0 0 0 2 2h14"
}], ["path", {
  d: "M18 22V8a2 2 0 0 0-2-2H2"
}]]];
const bl = ["svg", t, [["path", {
  d: "M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z"
}]]];
const wl = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["line", {
  x1: "22",
  x2: "18",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "6",
  x2: "2",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "6",
  y2: "2"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "18"
}]]];
const Al = ["svg", t, [["path", {
  d: "M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"
}], ["path", {
  d: "M5 21h14"
}]]];
const kl = ["svg", t, [["path", {
  d: "m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z"
}], ["path", {
  d: "M10 22v-8L2.25 9.15"
}], ["path", {
  d: "m10 14 11.77-6.87"
}]]];
const Hl = ["svg", t, [["path", {
  d: "m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8"
}], ["path", {
  d: "M5 8h14"
}], ["path", {
  d: "M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
}], ["path", {
  d: "m12 8 1-6h2"
}]]];
const Sl = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "8"
}], ["line", {
  x1: "3",
  x2: "6",
  y1: "3",
  y2: "6"
}], ["line", {
  x1: "21",
  x2: "18",
  y1: "3",
  y2: "6"
}], ["line", {
  x1: "3",
  x2: "6",
  y1: "21",
  y2: "18"
}], ["line", {
  x1: "21",
  x2: "18",
  y1: "21",
  y2: "18"
}]]];
const Cl = ["svg", t, [["ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3"
}], ["path", {
  d: "M3 5v14a9 3 0 0 0 18 0V5"
}]]];
const Vl = ["svg", t, [["path", {
  d: "M11 11.31c1.17.56 1.54 1.69 3.5 1.69 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
}], ["path", {
  d: "M11.75 18c.35.5 1.45 1 2.75 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
}], ["path", {
  d: "M2 10h4"
}], ["path", {
  d: "M2 14h4"
}], ["path", {
  d: "M2 18h4"
}], ["path", {
  d: "M2 6h4"
}], ["path", {
  d: "M7 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1L10 4a1 1 0 0 0-1-1z"
}]]];
const Ll = ["svg", t, [["ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3"
}], ["path", {
  d: "M3 12a9 3 0 0 0 5 2.69"
}], ["path", {
  d: "M21 9.3V5"
}], ["path", {
  d: "M3 5v14a9 3 0 0 0 6.47 2.88"
}], ["path", {
  d: "M12 12v4h4"
}], ["path", {
  d: "M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16"
}]]];
const Pl = ["svg", t, [["ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3"
}], ["path", {
  d: "M3 5V19A9 3 0 0 0 15 21.84"
}], ["path", {
  d: "M21 5V8"
}], ["path", {
  d: "M21 12L18 17H22L19 22"
}], ["path", {
  d: "M3 12A9 3 0 0 0 14.59 14.87"
}]]];
const Tl = ["svg", t, [["ellipse", {
  cx: "12",
  cy: "5",
  rx: "9",
  ry: "3"
}], ["path", {
  d: "M3 5V19A9 3 0 0 0 21 19V5"
}], ["path", {
  d: "M3 12A9 3 0 0 0 21 12"
}]]];
const Rl = ["svg", t, [["path", {
  d: "M10 5a2 2 0 0 0-1.344.519l-6.328 5.74a1 1 0 0 0 0 1.481l6.328 5.741A2 2 0 0 0 10 19h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2z"
}], ["path", {
  d: "m12 9 6 6"
}], ["path", {
  d: "m18 9-6 6"
}]]];
const Bl = ["svg", t, [["circle", {
  cx: "12",
  cy: "4",
  r: "2"
}], ["path", {
  d: "M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8"
}], ["path", {
  d: "M3.2 14.8a9 9 0 0 0 17.6 0"
}]]];
const El = ["svg", t, [["circle", {
  cx: "19",
  cy: "19",
  r: "2"
}], ["circle", {
  cx: "5",
  cy: "5",
  r: "2"
}], ["path", {
  d: "M6.48 3.66a10 10 0 0 1 13.86 13.86"
}], ["path", {
  d: "m6.41 6.41 11.18 11.18"
}], ["path", {
  d: "M3.66 6.48a10 10 0 0 0 13.86 13.86"
}]]];
const Il = ["svg", t, [["path", {
  d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
}], ["path", {
  d: "M8 12h8"
}]]];
const Ye = ["svg", t, [["path", {
  d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z"
}], ["path", {
  d: "M9.2 9.2h.01"
}], ["path", {
  d: "m14.5 9.5-5 5"
}], ["path", {
  d: "M14.7 14.8h.01"
}]]];
const Dl = ["svg", t, [["path", {
  d: "M12 8v8"
}], ["path", {
  d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z"
}], ["path", {
  d: "M8 12h8"
}]]];
const zl = ["svg", t, [["path", {
  d: "M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"
}]]];
const Zl = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M12 12h.01"
}]]];
const Fl = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M15 9h.01"
}], ["path", {
  d: "M9 15h.01"
}]]];
const Ul = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M16 8h.01"
}], ["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M8 16h.01"
}]]];
const Wl = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M16 8h.01"
}], ["path", {
  d: "M8 8h.01"
}], ["path", {
  d: "M8 16h.01"
}], ["path", {
  d: "M16 16h.01"
}]]];
const Ol = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M16 8h.01"
}], ["path", {
  d: "M8 8h.01"
}], ["path", {
  d: "M8 16h.01"
}], ["path", {
  d: "M16 16h.01"
}], ["path", {
  d: "M12 12h.01"
}]]];
const ql = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M16 8h.01"
}], ["path", {
  d: "M16 12h.01"
}], ["path", {
  d: "M16 16h.01"
}], ["path", {
  d: "M8 8h.01"
}], ["path", {
  d: "M8 12h.01"
}], ["path", {
  d: "M8 16h.01"
}]]];
const _l = ["svg", t, [["rect", {
  width: "12",
  height: "12",
  x: "2",
  y: "10",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"
}], ["path", {
  d: "M6 18h.01"
}], ["path", {
  d: "M10 14h.01"
}], ["path", {
  d: "M15 6h.01"
}], ["path", {
  d: "M18 9h.01"
}]]];
const Gl = ["svg", t, [["path", {
  d: "M12 3v14"
}], ["path", {
  d: "M5 10h14"
}], ["path", {
  d: "M5 21h14"
}]]];
const Nl = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}], ["path", {
  d: "M12 12h.01"
}]]];
const $l = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M6 12c0-1.7.7-3.2 1.8-4.2"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}], ["path", {
  d: "M18 12c0 1.7-.7 3.2-1.8 4.2"
}]]];
const Xl = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "5"
}], ["path", {
  d: "M12 12h.01"
}]]];
const Yl = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}]]];
const Kl = ["svg", t, [["circle", {
  cx: "12",
  cy: "6",
  r: "1"
}], ["line", {
  x1: "5",
  x2: "19",
  y1: "12",
  y2: "12"
}], ["circle", {
  cx: "12",
  cy: "18",
  r: "1"
}]]];
const Ql = ["svg", t, [["path", {
  d: "M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8"
}], ["path", {
  d: "m17 6-2.891-2.891"
}], ["path", {
  d: "M2 15c3.333-3 6.667-3 10-3"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "m20 9 .891.891"
}], ["path", {
  d: "M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1"
}], ["path", {
  d: "M3.109 14.109 4 15"
}], ["path", {
  d: "m6.5 12.5 1 1"
}], ["path", {
  d: "m7 18 2.891 2.891"
}], ["path", {
  d: "M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16"
}]]];
const Jl = ["svg", t, [["path", {
  d: "m10 16 1.5 1.5"
}], ["path", {
  d: "m14 8-1.5-1.5"
}], ["path", {
  d: "M15 2c-1.798 1.998-2.518 3.995-2.807 5.993"
}], ["path", {
  d: "m16.5 10.5 1 1"
}], ["path", {
  d: "m17 6-2.891-2.891"
}], ["path", {
  d: "M2 15c6.667-6 13.333 0 20-6"
}], ["path", {
  d: "m20 9 .891.891"
}], ["path", {
  d: "M3.109 14.109 4 15"
}], ["path", {
  d: "m6.5 12.5 1 1"
}], ["path", {
  d: "m7 18 2.891 2.891"
}], ["path", {
  d: "M9 22c1.798-1.998 2.518-3.995 2.807-5.993"
}]]];
const jl = ["svg", t, [["path", {
  d: "M2 8h20"
}], ["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M6 16h12"
}]]];
const t3 = ["svg", t, [["path", {
  d: "M11.25 16.25h1.5L12 17z"
}], ["path", {
  d: "M16 14v.5"
}], ["path", {
  d: "M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444a11.702 11.702 0 0 0-.493-3.309"
}], ["path", {
  d: "M8 14v.5"
}], ["path", {
  d: "M8.5 8.5c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.497 7.497 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5"
}]]];
const a3 = ["svg", t, [["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "22"
}], ["path", {
  d: "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
}]]];
const e3 = ["svg", t, [["path", {
  d: "M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}]]];
const h3 = ["svg", t, [["path", {
  d: "M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14"
}], ["path", {
  d: "M2 20h20"
}], ["path", {
  d: "M14 12v.01"
}]]];
const s3 = ["svg", t, [["path", {
  d: "M13 4h3a2 2 0 0 1 2 2v14"
}], ["path", {
  d: "M2 20h3"
}], ["path", {
  d: "M13 20h9"
}], ["path", {
  d: "M10 12v.01"
}], ["path", {
  d: "M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"
}]]];
const n3 = ["svg", t, [["circle", {
  cx: "12.1",
  cy: "12.1",
  r: "1"
}]]];
const c3 = ["svg", t, [["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}], ["polyline", {
  points: "7 10 12 15 17 10"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "15",
  y2: "3"
}]]];
const o3 = ["svg", t, [["path", {
  d: "m12.99 6.74 1.93 3.44"
}], ["path", {
  d: "M19.136 12a10 10 0 0 1-14.271 0"
}], ["path", {
  d: "m21 21-2.16-3.84"
}], ["path", {
  d: "m3 21 8.02-14.26"
}], ["circle", {
  cx: "12",
  cy: "5",
  r: "2"
}]]];
const d3 = ["svg", t, [["path", {
  d: "M10 11h.01"
}], ["path", {
  d: "M14 6h.01"
}], ["path", {
  d: "M18 6h.01"
}], ["path", {
  d: "M6.5 13.1h.01"
}], ["path", {
  d: "M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3"
}], ["path", {
  d: "M17.4 9.9c-.8.8-2 .8-2.8 0"
}], ["path", {
  d: "M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7"
}], ["path", {
  d: "M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4"
}]]];
const r3 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"
}], ["path", {
  d: "M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"
}], ["path", {
  d: "M8.56 2.75c4.37 6 6 9.42 8 17.72"
}]]];
const i3 = ["svg", t, [["path", {
  d: "M10 18a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1z"
}], ["path", {
  d: "M13 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1l-.81 3.242a1 1 0 0 1-.97.758H8"
}], ["path", {
  d: "M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3"
}], ["path", {
  d: "M18 6h4"
}], ["path", {
  d: "m5 10-2 8"
}], ["path", {
  d: "m7 18 2-8"
}]]];
const p3 = ["svg", t, [["path", {
  d: "M18.715 13.186C18.29 11.858 17.384 10.607 16 9.5c-2-1.6-3.5-4-4-6.5a10.7 10.7 0 0 1-.884 2.586"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M8.795 8.797A11 11 0 0 1 8 9.5C6 11.1 5 13 5 15a7 7 0 0 0 13.222 3.208"
}]]];
const l3 = ["svg", t, [["path", {
  d: "M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"
}]]];
const M3 = ["svg", t, [["path", {
  d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"
}], ["path", {
  d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"
}]]];
const v3 = ["svg", t, [["path", {
  d: "m2 2 8 8"
}], ["path", {
  d: "m22 2-8 8"
}], ["ellipse", {
  cx: "12",
  cy: "9",
  rx: "10",
  ry: "5"
}], ["path", {
  d: "M7 13.4v7.9"
}], ["path", {
  d: "M12 14v8"
}], ["path", {
  d: "M17 13.4v7.9"
}], ["path", {
  d: "M2 9v8a10 5 0 0 0 20 0V9"
}]]];
const g3 = ["svg", t, [["path", {
  d: "M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23"
}], ["path", {
  d: "m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59"
}]]];
const m3 = ["svg", t, [["path", {
  d: "M14.4 14.4 9.6 9.6"
}], ["path", {
  d: "M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"
}], ["path", {
  d: "m21.5 21.5-1.4-1.4"
}], ["path", {
  d: "M3.9 3.9 2.5 2.5"
}], ["path", {
  d: "M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"
}]]];
const y3 = ["svg", t, [["path", {
  d: "M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46"
}], ["path", {
  d: "M6 8.5c0-.75.13-1.47.36-2.14"
}], ["path", {
  d: "M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76"
}], ["path", {
  d: "M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const u3 = ["svg", t, [["path", {
  d: "M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0"
}], ["path", {
  d: "M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4"
}]]];
const x3 = ["svg", t, [["path", {
  d: "M7 3.34V5a3 3 0 0 0 3 3"
}], ["path", {
  d: "M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
}], ["path", {
  d: "M21.54 15H17a2 2 0 0 0-2 2v4.54"
}], ["path", {
  d: "M12 2a10 10 0 1 0 9.54 13"
}], ["path", {
  d: "M20 6V4a2 2 0 1 0-4 0v2"
}], ["rect", {
  width: "8",
  height: "5",
  x: "14",
  y: "6",
  rx: "1"
}]]];
const Ke = ["svg", t, [["path", {
  d: "M21.54 15H17a2 2 0 0 0-2 2v4.54"
}], ["path", {
  d: "M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"
}], ["path", {
  d: "M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const f3 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M12 2a7 7 0 1 0 10 10"
}]]];
const b3 = ["svg", t, [["circle", {
  cx: "11.5",
  cy: "12.5",
  r: "3.5"
}], ["path", {
  d: "M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z"
}]]];
const w3 = ["svg", t, [["path", {
  d: "M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625"
}], ["path", {
  d: "M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const A3 = ["svg", t, [["path", {
  d: "M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"
}]]];
const Qe = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "12",
  cy: "5",
  r: "1"
}], ["circle", {
  cx: "12",
  cy: "19",
  r: "1"
}]]];
const Je = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "19",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "5",
  cy: "12",
  r: "1"
}]]];
const k3 = ["svg", t, [["path", {
  d: "M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"
}], ["path", {
  d: "M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0"
}]]];
const H3 = ["svg", t, [["line", {
  x1: "5",
  x2: "19",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "5",
  x2: "19",
  y1: "15",
  y2: "15"
}], ["line", {
  x1: "19",
  x2: "5",
  y1: "5",
  y2: "19"
}]]];
const S3 = ["svg", t, [["line", {
  x1: "5",
  x2: "19",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "5",
  x2: "19",
  y1: "15",
  y2: "15"
}]]];
const C3 = ["svg", t, [["path", {
  d: "m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"
}], ["path", {
  d: "M22 21H7"
}], ["path", {
  d: "m5 11 9 9"
}]]];
const V3 = ["svg", t, [["path", {
  d: "m15 20 3-3h2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2l3 3z"
}], ["path", {
  d: "M6 8v1"
}], ["path", {
  d: "M10 8v1"
}], ["path", {
  d: "M14 8v1"
}], ["path", {
  d: "M18 8v1"
}]]];
const L3 = ["svg", t, [["path", {
  d: "M4 10h12"
}], ["path", {
  d: "M4 14h9"
}], ["path", {
  d: "M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2"
}]]];
const P3 = ["svg", t, [["path", {
  d: "m21 21-6-6m6 6v-4.8m0 4.8h-4.8"
}], ["path", {
  d: "M3 16.2V21m0 0h4.8M3 21l6-6"
}], ["path", {
  d: "M21 7.8V3m0 0h-4.8M21 3l-6 6"
}], ["path", {
  d: "M3 7.8V3m0 0h4.8M3 3l6 6"
}]]];
const T3 = ["svg", t, [["path", {
  d: "M15 3h6v6"
}], ["path", {
  d: "M10 14 21 3"
}], ["path", {
  d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
}]]];
const R3 = ["svg", t, [["path", {
  d: "m15 18-.722-3.25"
}], ["path", {
  d: "M2 8a10.645 10.645 0 0 0 20 0"
}], ["path", {
  d: "m20 15-1.726-2.05"
}], ["path", {
  d: "m4 15 1.726-2.05"
}], ["path", {
  d: "m9 18 .722-3.25"
}]]];
const B3 = ["svg", t, [["path", {
  d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"
}], ["path", {
  d: "M14.084 14.158a3 3 0 0 1-4.242-4.242"
}], ["path", {
  d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const E3 = ["svg", t, [["path", {
  d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}]]];
const I3 = ["svg", t, [["path", {
  d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
}]]];
const D3 = ["svg", t, [["path", {
  d: "M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
}], ["path", {
  d: "M17 18h1"
}], ["path", {
  d: "M12 18h1"
}], ["path", {
  d: "M7 18h1"
}]]];
const z3 = ["svg", t, [["path", {
  d: "M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z"
}], ["path", {
  d: "M12 12v.01"
}]]];
const Z3 = ["svg", t, [["polygon", {
  points: "13 19 22 12 13 5 13 19"
}], ["polygon", {
  points: "2 19 11 12 2 5 2 19"
}]]];
const F3 = ["svg", t, [["path", {
  d: "M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"
}], ["path", {
  d: "M16 8 2 22"
}], ["path", {
  d: "M17.5 15H9"
}]]];
const U3 = ["svg", t, [["path", {
  d: "M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
}], ["path", {
  d: "M6 8h4"
}], ["path", {
  d: "M6 18h4"
}], ["path", {
  d: "m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
}], ["path", {
  d: "M14 8h4"
}], ["path", {
  d: "M14 18h4"
}], ["path", {
  d: "m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z"
}]]];
const W3 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}], ["path", {
  d: "M12 2v4"
}], ["path", {
  d: "m6.8 15-3.5 2"
}], ["path", {
  d: "m20.7 7-3.5 2"
}], ["path", {
  d: "M6.8 9 3.3 7"
}], ["path", {
  d: "m20.7 17-3.5-2"
}], ["path", {
  d: "m9 22 3-8 3 8"
}], ["path", {
  d: "M8 22h8"
}], ["path", {
  d: "M18 18.7a9 9 0 1 0-12 0"
}]]];
const O3 = ["svg", t, [["path", {
  d: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
}], ["path", {
  d: "M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
}], ["path", {
  d: "M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
}], ["path", {
  d: "M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
}], ["path", {
  d: "M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
}]]];
const q3 = ["svg", t, [["path", {
  d: "M10 12v-1"
}], ["path", {
  d: "M10 18v-2"
}], ["path", {
  d: "M10 7V6"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M15.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 .274 1.01"
}], ["circle", {
  cx: "10",
  cy: "20",
  r: "2"
}]]];
const _3 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["circle", {
  cx: "3",
  cy: "17",
  r: "1"
}], ["path", {
  d: "M2 17v-3a4 4 0 0 1 8 0v3"
}], ["circle", {
  cx: "9",
  cy: "17",
  r: "1"
}]]];
const G3 = ["svg", t, [["path", {
  d: "M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0"
}]]];
const je = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m8 18 4-4"
}], ["path", {
  d: "M8 10v8h8"
}]]];
const N3 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m14 12.5 1 5.5-3-1-3 1 1-5.5"
}]]];
const $3 = ["svg", t, [["path", {
  d: "M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
}], ["path", {
  d: "M7 16.5 8 22l-3-1-3 1 1-5.5"
}]]];
const X3 = ["svg", t, [["path", {
  d: "M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z"
}], ["path", {
  d: "M7 17v5"
}], ["path", {
  d: "M11.7 14.2 7 17l-4.7-2.8"
}]]];
const th = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M8 18v-2"
}], ["path", {
  d: "M12 18v-4"
}], ["path", {
  d: "M16 18v-6"
}]]];
const ah = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M8 18v-1"
}], ["path", {
  d: "M12 18v-6"
}], ["path", {
  d: "M16 18v-3"
}]]];
const eh = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m16 13-3.5 3.5-2-2L8 17"
}]]];
const hh = ["svg", t, [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5"
}], ["path", {
  d: "M4.017 11.512a6 6 0 1 0 8.466 8.475"
}], ["path", {
  d: "M9 16a1 1 0 0 1-1-1v-4c0-.552.45-1.008.995-.917a6 6 0 0 1 4.922 4.922c.091.544-.365.995-.917.995z"
}]]];
const Y3 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m3 15 2 2 4-4"
}]]];
const K3 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m9 15 2 2 4-4"
}]]];
const Q3 = ["svg", t, [["path", {
  d: "M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["circle", {
  cx: "8",
  cy: "16",
  r: "6"
}], ["path", {
  d: "M9.5 17.5 8 16.25V14"
}]]];
const J3 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m5 12-3 3 3 3"
}], ["path", {
  d: "m9 18 3-3-3-3"
}]]];
const j3 = ["svg", t, [["path", {
  d: "M10 12.5 8 15l2 2.5"
}], ["path", {
  d: "m14 12.5 2 2.5-2 2.5"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
}]]];
const sh = ["svg", t, [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m3.2 12.9-.9-.4"
}], ["path", {
  d: "m3.2 15.1-.9.4"
}], ["path", {
  d: "M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"
}], ["path", {
  d: "m4.9 11.2-.4-.9"
}], ["path", {
  d: "m4.9 16.8-.4.9"
}], ["path", {
  d: "m7.5 10.3-.4.9"
}], ["path", {
  d: "m7.5 17.7-.4-.9"
}], ["path", {
  d: "m9.7 12.5-.9.4"
}], ["path", {
  d: "m9.7 15.5-.9-.4"
}], ["circle", {
  cx: "6",
  cy: "14",
  r: "3"
}]]];
const t6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M9 10h6"
}], ["path", {
  d: "M12 13V7"
}], ["path", {
  d: "M9 17h6"
}]]];
const a6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["rect", {
  width: "4",
  height: "6",
  x: "2",
  y: "12",
  rx: "2"
}], ["path", {
  d: "M10 12h2v6"
}], ["path", {
  d: "M10 18h4"
}]]];
const e6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M12 18v-6"
}], ["path", {
  d: "m9 15 3 3 3-3"
}]]];
const h6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z"
}]]];
const s6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["circle", {
  cx: "10",
  cy: "12",
  r: "2"
}], ["path", {
  d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"
}]]];
const n6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M2 15h10"
}], ["path", {
  d: "m9 18 3-3-3-3"
}]]];
const c6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
}], ["path", {
  d: "M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
}]]];
const o6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1"
}], ["path", {
  d: "M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1"
}]]];
const d6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["circle", {
  cx: "4",
  cy: "16",
  r: "2"
}], ["path", {
  d: "m10 10-4.5 4.5"
}], ["path", {
  d: "m9 11 1 1"
}]]];
const r6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["circle", {
  cx: "10",
  cy: "16",
  r: "2"
}], ["path", {
  d: "m16 10-4.5 4.5"
}], ["path", {
  d: "m15 11 1 1"
}]]];
const i6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["rect", {
  width: "8",
  height: "5",
  x: "2",
  y: "13",
  rx: "1"
}], ["path", {
  d: "M8 13v-2a2 2 0 1 0-4 0v2"
}]]];
const p6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["rect", {
  width: "8",
  height: "6",
  x: "8",
  y: "12",
  rx: "1"
}], ["path", {
  d: "M10 12v-2a2 2 0 1 1 4 0v2"
}]]];
const l6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M3 15h6"
}]]];
const M6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M9 15h6"
}]]];
const v6 = ["svg", t, [["path", {
  d: "M10.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v8.4"
}], ["path", {
  d: "M8 18v-7.7L16 9v7"
}], ["circle", {
  cx: "14",
  cy: "16",
  r: "2"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "2"
}]]];
const g6 = ["svg", t, [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2"
}], ["path", {
  d: "M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6"
}], ["path", {
  d: "m5 11-3 3"
}], ["path", {
  d: "m5 17-3-3h10"
}]]];
const nh = ["svg", t, [["path", {
  d: "m18 5-2.414-2.414A2 2 0 0 0 14.172 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2"
}], ["path", {
  d: "M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
}], ["path", {
  d: "M8 18h1"
}]]];
const ch = ["svg", t, [["path", {
  d: "M12.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v9.5"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M13.378 15.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
}]]];
const m6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M3 15h6"
}], ["path", {
  d: "M6 12v6"
}]]];
const y6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M9 15h6"
}], ["path", {
  d: "M12 18v-6"
}]]];
const u6 = ["svg", t, [["path", {
  d: "M12 17h.01"
}], ["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
}], ["path", {
  d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
}]]];
const x6 = ["svg", t, [["path", {
  d: "M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M16 14a2 2 0 0 0-2 2"
}], ["path", {
  d: "M20 14a2 2 0 0 1 2 2"
}], ["path", {
  d: "M20 22a2 2 0 0 0 2-2"
}], ["path", {
  d: "M16 22a2 2 0 0 1-2-2"
}]]];
const f6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["circle", {
  cx: "11.5",
  cy: "14.5",
  r: "2.5"
}], ["path", {
  d: "M13.3 16.3 15 18"
}]]];
const b6 = ["svg", t, [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "m9 18-1.5-1.5"
}], ["circle", {
  cx: "5",
  cy: "14",
  r: "3"
}]]];
const w6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "M10 11v2"
}], ["path", {
  d: "M8 17h8"
}], ["path", {
  d: "M14 16v2"
}]]];
const A6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M8 13h2"
}], ["path", {
  d: "M14 13h2"
}], ["path", {
  d: "M8 17h2"
}], ["path", {
  d: "M14 17h2"
}]]];
const k6 = ["svg", t, [["path", {
  d: "M21 7h-3a2 2 0 0 1-2-2V2"
}], ["path", {
  d: "M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z"
}], ["path", {
  d: "M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15"
}], ["path", {
  d: "M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11"
}]]];
const H6 = ["svg", t, [["path", {
  d: "m10 18 3-3-3-3"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
}]]];
const S6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m8 16 2-2-2-2"
}], ["path", {
  d: "M12 18h4"
}]]];
const C6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M10 9H8"
}], ["path", {
  d: "M16 13H8"
}], ["path", {
  d: "M16 17H8"
}]]];
const V6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M2 13v-1h6v1"
}], ["path", {
  d: "M5 12v6"
}], ["path", {
  d: "M4 18h2"
}]]];
const L6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M9 13v-1h6v1"
}], ["path", {
  d: "M12 12v6"
}], ["path", {
  d: "M11 18h2"
}]]];
const P6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M12 12v6"
}], ["path", {
  d: "m15 15-3-3-3 3"
}]]];
const T6 = ["svg", t, [["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M15 18a3 3 0 1 0-6 0"
}], ["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "2"
}]]];
const R6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["rect", {
  width: "8",
  height: "6",
  x: "2",
  y: "12",
  rx: "1"
}], ["path", {
  d: "m10 15.5 4 2.5v-6l-4 2.5"
}]]];
const B6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m10 11 5 3-5 3v-6Z"
}]]];
const E6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M8 15h.01"
}], ["path", {
  d: "M11.5 13.5a2.5 2.5 0 0 1 0 3"
}], ["path", {
  d: "M15 12a5 5 0 0 1 0 6"
}]]];
const I6 = ["svg", t, [["path", {
  d: "M11 11a5 5 0 0 1 0 6"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M4 6.765V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-.93-.23"
}], ["path", {
  d: "M7 10.51a.5.5 0 0 0-.826-.38l-1.893 1.628A1 1 0 0 1 3.63 12H2.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1.129a1 1 0 0 1 .652.242l1.893 1.63a.5.5 0 0 0 .826-.38z"
}]]];
const D6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M12 9v4"
}], ["path", {
  d: "M12 17h.01"
}]]];
const z6 = ["svg", t, [["path", {
  d: "M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m8 12.5-5 5"
}], ["path", {
  d: "m3 12.5 5 5"
}]]];
const Z6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "m14.5 12.5-5 5"
}], ["path", {
  d: "m9.5 12.5 5 5"
}]]];
const F6 = ["svg", t, [["path", {
  d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
}], ["path", {
  d: "M14 2v4a2 2 0 0 0 2 2h4"
}]]];
const U6 = ["svg", t, [["path", {
  d: "M20 7h-3a2 2 0 0 1-2-2V2"
}], ["path", {
  d: "M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"
}], ["path", {
  d: "M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"
}]]];
const W6 = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M7 3v18"
}], ["path", {
  d: "M3 7.5h4"
}], ["path", {
  d: "M3 12h18"
}], ["path", {
  d: "M3 16.5h4"
}], ["path", {
  d: "M17 3v18"
}], ["path", {
  d: "M17 7.5h4"
}], ["path", {
  d: "M17 16.5h4"
}]]];
const O6 = ["svg", t, [["path", {
  d: "M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055"
}], ["path", {
  d: "m22 3-5 5"
}], ["path", {
  d: "m17 3 5 5"
}]]];
const q6 = ["svg", t, [["polygon", {
  points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
}]]];
const _6 = ["svg", t, [["path", {
  d: "M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"
}], ["path", {
  d: "M14 13.12c0 2.38 0 6.38-1 8.88"
}], ["path", {
  d: "M17.29 21.02c.12-.6.43-2.3.5-3.02"
}], ["path", {
  d: "M2 12a10 10 0 0 1 18-6"
}], ["path", {
  d: "M2 16h.01"
}], ["path", {
  d: "M21.8 16c.2-2 .131-5.354 0-6"
}], ["path", {
  d: "M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"
}], ["path", {
  d: "M8.65 22c.21-.66.45-1.32.57-2"
}], ["path", {
  d: "M9 6.8a6 6 0 0 1 9 5.2v2"
}]]];
const G6 = ["svg", t, [["path", {
  d: "M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5"
}], ["path", {
  d: "M9 18h8"
}], ["path", {
  d: "M18 3h-3"
}], ["path", {
  d: "M11 3a6 6 0 0 0-6 6v11"
}], ["path", {
  d: "M5 13h4"
}], ["path", {
  d: "M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z"
}]]];
const N6 = ["svg", t, [["path", {
  d: "M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058"
}], ["path", {
  d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618"
}], ["path", {
  d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20"
}]]];
const $6 = ["svg", t, [["path", {
  d: "M2 16s9-15 20-4C11 23 2 8 2 8"
}]]];
const X6 = ["svg", t, [["path", {
  d: "M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"
}], ["path", {
  d: "M18 12v.5"
}], ["path", {
  d: "M16 17.93a9.77 9.77 0 0 1 0-11.86"
}], ["path", {
  d: "M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"
}], ["path", {
  d: "M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4"
}], ["path", {
  d: "m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"
}]]];
const Y6 = ["svg", t, [["path", {
  d: "M8 2c3 0 5 2 8 2s4-1 4-1v11"
}], ["path", {
  d: "M4 22V4"
}], ["path", {
  d: "M4 15s1-1 4-1 5 2 8 2"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const K6 = ["svg", t, [["path", {
  d: "M17 22V2L7 7l10 5"
}]]];
const Q6 = ["svg", t, [["path", {
  d: "M7 22V2l10 5-10 5"
}]]];
const J6 = ["svg", t, [["path", {
  d: "M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"
}], ["line", {
  x1: "4",
  x2: "4",
  y1: "22",
  y2: "15"
}]]];
const j6 = ["svg", t, [["path", {
  d: "M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z"
}], ["path", {
  d: "m5 22 14-4"
}], ["path", {
  d: "m5 18 14 4"
}]]];
const t8 = ["svg", t, [["path", {
  d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
}]]];
const a8 = ["svg", t, [["path", {
  d: "M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4"
}], ["path", {
  d: "M7 2h11v4c0 2-2 2-2 4v1"
}], ["line", {
  x1: "11",
  x2: "18",
  y1: "6",
  y2: "6"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const e8 = ["svg", t, [["path", {
  d: "M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"
}], ["line", {
  x1: "6",
  x2: "18",
  y1: "6",
  y2: "6"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "12",
  y2: "12"
}]]];
const h8 = ["svg", t, [["path", {
  d: "M10 2v2.343"
}], ["path", {
  d: "M14 2v6.343"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M20 20a2 2 0 0 1-2 2H6a2 2 0 0 1-1.755-2.96l5.227-9.563"
}], ["path", {
  d: "M6.453 15H15"
}], ["path", {
  d: "M8.5 2h7"
}]]];
const s8 = ["svg", t, [["path", {
  d: "M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"
}], ["path", {
  d: "M6.453 15h11.094"
}], ["path", {
  d: "M8.5 2h7"
}]]];
const n8 = ["svg", t, [["path", {
  d: "M10 2v6.292a7 7 0 1 0 4 0V2"
}], ["path", {
  d: "M5 15h14"
}], ["path", {
  d: "M8.5 2h7"
}]]];
const c8 = ["svg", t, [["path", {
  d: "m3 7 5 5-5 5V7"
}], ["path", {
  d: "m21 7-5 5 5 5V7"
}], ["path", {
  d: "M12 20v2"
}], ["path", {
  d: "M12 14v2"
}], ["path", {
  d: "M12 8v2"
}], ["path", {
  d: "M12 2v2"
}]]];
const o8 = ["svg", t, [["path", {
  d: "M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3"
}], ["path", {
  d: "M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3"
}], ["path", {
  d: "M12 20v2"
}], ["path", {
  d: "M12 14v2"
}], ["path", {
  d: "M12 8v2"
}], ["path", {
  d: "M12 2v2"
}]]];
const d8 = ["svg", t, [["path", {
  d: "m17 3-5 5-5-5h10"
}], ["path", {
  d: "m17 21-5-5-5 5h10"
}], ["path", {
  d: "M4 12H2"
}], ["path", {
  d: "M10 12H8"
}], ["path", {
  d: "M16 12h-2"
}], ["path", {
  d: "M22 12h-2"
}]]];
const r8 = ["svg", t, [["path", {
  d: "M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3"
}], ["path", {
  d: "M4 12H2"
}], ["path", {
  d: "M10 12H8"
}], ["path", {
  d: "M16 12h-2"
}], ["path", {
  d: "M22 12h-2"
}]]];
const i8 = ["svg", t, [["path", {
  d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "2"
}], ["path", {
  d: "M12 10v12"
}], ["path", {
  d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"
}], ["path", {
  d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"
}]]];
const p8 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"
}], ["path", {
  d: "M12 7.5V9"
}], ["path", {
  d: "M7.5 12H9"
}], ["path", {
  d: "M16.5 12H15"
}], ["path", {
  d: "M12 16.5V15"
}], ["path", {
  d: "m8 8 1.88 1.88"
}], ["path", {
  d: "M14.12 9.88 16 8"
}], ["path", {
  d: "m8 16 1.88-1.88"
}], ["path", {
  d: "M14.12 14.12 16 16"
}]]];
const l8 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}]]];
const M8 = ["svg", t, [["path", {
  d: "M2 12h6"
}], ["path", {
  d: "M22 12h-6"
}], ["path", {
  d: "M12 2v2"
}], ["path", {
  d: "M12 8v2"
}], ["path", {
  d: "M12 14v2"
}], ["path", {
  d: "M12 20v2"
}], ["path", {
  d: "m19 9-3 3 3 3"
}], ["path", {
  d: "m5 15 3-3-3-3"
}]]];
const v8 = ["svg", t, [["path", {
  d: "M12 22v-6"
}], ["path", {
  d: "M12 8V2"
}], ["path", {
  d: "M4 12H2"
}], ["path", {
  d: "M10 12H8"
}], ["path", {
  d: "M16 12h-2"
}], ["path", {
  d: "M22 12h-2"
}], ["path", {
  d: "m15 19-3-3-3 3"
}], ["path", {
  d: "m15 5-3 3-3-3"
}]]];
const g8 = ["svg", t, [["circle", {
  cx: "15",
  cy: "19",
  r: "2"
}], ["path", {
  d: "M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1"
}], ["path", {
  d: "M15 11v-1"
}], ["path", {
  d: "M15 17v-2"
}]]];
const m8 = ["svg", t, [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}], ["path", {
  d: "m9 13 2 2 4-4"
}]]];
const y8 = ["svg", t, [["circle", {
  cx: "16",
  cy: "16",
  r: "6"
}], ["path", {
  d: "M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2"
}], ["path", {
  d: "M16 14v2l1 1"
}]]];
const u8 = ["svg", t, [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}], ["path", {
  d: "M2 10h20"
}]]];
const x8 = ["svg", t, [["path", {
  d: "M10 10.5 8 13l2 2.5"
}], ["path", {
  d: "m14 10.5 2 2.5-2 2.5"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2z"
}]]];
const oh = ["svg", t, [["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}], ["path", {
  d: "M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3"
}], ["path", {
  d: "m21.7 19.4-.9-.3"
}], ["path", {
  d: "m15.2 16.9-.9-.3"
}], ["path", {
  d: "m16.6 21.7.3-.9"
}], ["path", {
  d: "m19.1 15.2.3-.9"
}], ["path", {
  d: "m19.6 21.7-.4-1"
}], ["path", {
  d: "m16.8 15.3-.4-1"
}], ["path", {
  d: "m14.3 19.6 1-.4"
}], ["path", {
  d: "m20.7 16.8 1-.4"
}]]];
const f8 = ["svg", t, [["path", {
  d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "1"
}]]];
const b8 = ["svg", t, [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}], ["path", {
  d: "M12 10v6"
}], ["path", {
  d: "m15 13-3 3-3-3"
}]]];
const w8 = ["svg", t, [["path", {
  d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5"
}], ["circle", {
  cx: "13",
  cy: "12",
  r: "2"
}], ["path", {
  d: "M18 19c-2.8 0-5-2.2-5-5v8"
}], ["circle", {
  cx: "20",
  cy: "19",
  r: "2"
}]]];
const A8 = ["svg", t, [["circle", {
  cx: "12",
  cy: "13",
  r: "2"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}], ["path", {
  d: "M14 13h3"
}], ["path", {
  d: "M7 13h3"
}]]];
const k8 = ["svg", t, [["path", {
  d: "M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5"
}], ["path", {
  d: "M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01c.95.95 1 2.53-.2 3.74L17.5 21Z"
}]]];
const H8 = ["svg", t, [["path", {
  d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1"
}], ["path", {
  d: "M2 13h10"
}], ["path", {
  d: "m9 16 3-3-3-3"
}]]];
const S8 = ["svg", t, [["path", {
  d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
}], ["path", {
  d: "M8 10v4"
}], ["path", {
  d: "M12 10v2"
}], ["path", {
  d: "M16 10v6"
}]]];
const C8 = ["svg", t, [["circle", {
  cx: "16",
  cy: "20",
  r: "2"
}], ["path", {
  d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "m22 14-4.5 4.5"
}], ["path", {
  d: "m21 15 1 1"
}]]];
const V8 = ["svg", t, [["rect", {
  width: "8",
  height: "5",
  x: "14",
  y: "17",
  rx: "1"
}], ["path", {
  d: "M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5"
}], ["path", {
  d: "M20 17v-2a2 2 0 1 0-4 0v2"
}]]];
const L8 = ["svg", t, [["path", {
  d: "M9 13h6"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}]]];
const P8 = ["svg", t, [["path", {
  d: "m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2"
}], ["circle", {
  cx: "14",
  cy: "15",
  r: "1"
}]]];
const T8 = ["svg", t, [["path", {
  d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"
}]]];
const R8 = ["svg", t, [["path", {
  d: "M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5"
}], ["path", {
  d: "M2 13h10"
}], ["path", {
  d: "m5 10-3 3 3 3"
}]]];
const dh = ["svg", t, [["path", {
  d: "M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5"
}], ["path", {
  d: "M11.378 13.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
}]]];
const B8 = ["svg", t, [["path", {
  d: "M12 10v6"
}], ["path", {
  d: "M9 13h6"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}]]];
const E8 = ["svg", t, [["path", {
  d: "M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "2"
}], ["path", {
  d: "M12 15v5"
}]]];
const I8 = ["svg", t, [["circle", {
  cx: "11.5",
  cy: "12.5",
  r: "2.5"
}], ["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}], ["path", {
  d: "M13.3 14.3 15 16"
}]]];
const D8 = ["svg", t, [["path", {
  d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1"
}], ["path", {
  d: "m21 21-1.9-1.9"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "3"
}]]];
const z8 = ["svg", t, [["path", {
  d: "M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7"
}], ["path", {
  d: "m8 16 3-3-3-3"
}]]];
const Z8 = ["svg", t, [["path", {
  d: "M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5"
}], ["path", {
  d: "M12 10v4h4"
}], ["path", {
  d: "m12 14 1.535-1.605a5 5 0 0 1 8 1.5"
}], ["path", {
  d: "M22 22v-4h-4"
}], ["path", {
  d: "m22 18-1.535 1.605a5 5 0 0 1-8-1.5"
}]]];
const F8 = ["svg", t, [["path", {
  d: "M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
}], ["path", {
  d: "M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z"
}], ["path", {
  d: "M3 5a2 2 0 0 0 2 2h3"
}], ["path", {
  d: "M3 3v13a2 2 0 0 0 2 2h3"
}]]];
const U8 = ["svg", t, [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}], ["path", {
  d: "M12 10v6"
}], ["path", {
  d: "m9 13 3-3 3 3"
}]]];
const W8 = ["svg", t, [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}], ["path", {
  d: "m9.5 10.5 5 5"
}], ["path", {
  d: "m14.5 10.5-5 5"
}]]];
const O8 = ["svg", t, [["path", {
  d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"
}]]];
const q8 = ["svg", t, [["path", {
  d: "M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z"
}], ["path", {
  d: "M2 8v11a2 2 0 0 0 2 2h14"
}]]];
const _8 = ["svg", t, [["path", {
  d: "M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z"
}], ["path", {
  d: "M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z"
}], ["path", {
  d: "M16 17h4"
}], ["path", {
  d: "M4 13h4"
}]]];
const G8 = ["svg", t, [["path", {
  d: "M12 12H5a2 2 0 0 0-2 2v5"
}], ["circle", {
  cx: "13",
  cy: "19",
  r: "2"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "2"
}], ["path", {
  d: "M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5"
}]]];
const N8 = ["svg", t, [["polyline", {
  points: "15 17 20 12 15 7"
}], ["path", {
  d: "M4 18v-2a4 4 0 0 1 4-4h12"
}]]];
const $8 = ["svg", t, [["line", {
  x1: "22",
  x2: "2",
  y1: "6",
  y2: "6"
}], ["line", {
  x1: "22",
  x2: "2",
  y1: "18",
  y2: "18"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "2",
  y2: "22"
}], ["line", {
  x1: "18",
  x2: "18",
  y1: "2",
  y2: "22"
}]]];
const X8 = ["svg", t, [["path", {
  d: "M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7"
}]]];
const Y8 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M16 16s-1.5-2-4-2-4 2-4 2"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9"
}]]];
const K8 = ["svg", t, [["line", {
  x1: "3",
  x2: "15",
  y1: "22",
  y2: "22"
}], ["line", {
  x1: "4",
  x2: "14",
  y1: "9",
  y2: "9"
}], ["path", {
  d: "M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"
}], ["path", {
  d: "M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"
}]]];
const Q8 = ["svg", t, [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}], ["rect", {
  width: "10",
  height: "8",
  x: "7",
  y: "8",
  rx: "1"
}]]];
const J8 = ["svg", t, [["path", {
  d: "M2 7v10"
}], ["path", {
  d: "M6 5v14"
}], ["rect", {
  width: "12",
  height: "18",
  x: "10",
  y: "3",
  rx: "2"
}]]];
const j8 = ["svg", t, [["path", {
  d: "M2 3v18"
}], ["rect", {
  width: "12",
  height: "18",
  x: "6",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M22 3v18"
}]]];
const t7 = ["svg", t, [["rect", {
  width: "18",
  height: "14",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M4 21h1"
}], ["path", {
  d: "M9 21h1"
}], ["path", {
  d: "M14 21h1"
}], ["path", {
  d: "M19 21h1"
}]]];
const a7 = ["svg", t, [["path", {
  d: "M7 2h10"
}], ["path", {
  d: "M5 6h14"
}], ["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "10",
  rx: "2"
}]]];
const e7 = ["svg", t, [["path", {
  d: "M3 2h18"
}], ["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "6",
  rx: "2"
}], ["path", {
  d: "M3 22h18"
}]]];
const h7 = ["svg", t, [["line", {
  x1: "6",
  x2: "10",
  y1: "11",
  y2: "11"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "9",
  y2: "13"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "18",
  x2: "18.01",
  y1: "10",
  y2: "10"
}], ["path", {
  d: "M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"
}]]];
const s7 = ["svg", t, [["line", {
  x1: "6",
  x2: "10",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "10",
  y2: "14"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "13",
  y2: "13"
}], ["line", {
  x1: "18",
  x2: "18.01",
  y1: "11",
  y2: "11"
}], ["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2"
}]]];
const n7 = ["svg", t, [["path", {
  d: "m12 14 4-4"
}], ["path", {
  d: "M3.34 19a10 10 0 1 1 17.32 0"
}]]];
const c7 = ["svg", t, [["path", {
  d: "m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8"
}], ["path", {
  d: "m16 16 6-6"
}], ["path", {
  d: "m8 8 6-6"
}], ["path", {
  d: "m9 7 8 8"
}], ["path", {
  d: "m21 11-8-8"
}]]];
const o7 = ["svg", t, [["path", {
  d: "M6 3h12l4 6-10 13L2 9Z"
}], ["path", {
  d: "M11 3 8 9l4 13 4-13-3-6"
}], ["path", {
  d: "M2 9h20"
}]]];
const d7 = ["svg", t, [["path", {
  d: "M9 10h.01"
}], ["path", {
  d: "M15 10h.01"
}], ["path", {
  d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z"
}]]];
const r7 = ["svg", t, [["rect", {
  x: "3",
  y: "8",
  width: "18",
  height: "4",
  rx: "1"
}], ["path", {
  d: "M12 8v13"
}], ["path", {
  d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"
}], ["path", {
  d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"
}]]];
const i7 = ["svg", t, [["path", {
  d: "M6 3v12"
}], ["path", {
  d: "M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
}], ["path", {
  d: "M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
}], ["path", {
  d: "M15 6a9 9 0 0 0-9 9"
}], ["path", {
  d: "M18 15v6"
}], ["path", {
  d: "M21 18h-6"
}]]];
const p7 = ["svg", t, [["line", {
  x1: "6",
  x2: "6",
  y1: "3",
  y2: "15"
}], ["circle", {
  cx: "18",
  cy: "6",
  r: "3"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3"
}], ["path", {
  d: "M18 9a9 9 0 0 1-9 9"
}]]];
const rh = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["line", {
  x1: "3",
  x2: "9",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "15",
  x2: "21",
  y1: "12",
  y2: "12"
}]]];
const l7 = ["svg", t, [["path", {
  d: "M12 3v6"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M12 15v6"
}]]];
const M7 = ["svg", t, [["circle", {
  cx: "5",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M12 6h5a2 2 0 0 1 2 2v7"
}], ["path", {
  d: "m15 9-3-3 3-3"
}], ["circle", {
  cx: "19",
  cy: "18",
  r: "3"
}], ["path", {
  d: "M12 18H7a2 2 0 0 1-2-2V9"
}], ["path", {
  d: "m9 15 3 3-3 3"
}]]];
const v7 = ["svg", t, [["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M13 6h3a2 2 0 0 1 2 2v7"
}], ["path", {
  d: "M11 18H8a2 2 0 0 1-2-2V9"
}]]];
const g7 = ["svg", t, [["circle", {
  cx: "12",
  cy: "18",
  r: "3"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3"
}], ["circle", {
  cx: "18",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"
}], ["path", {
  d: "M12 12v3"
}]]];
const m7 = ["svg", t, [["circle", {
  cx: "5",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M5 9v6"
}], ["circle", {
  cx: "5",
  cy: "18",
  r: "3"
}], ["path", {
  d: "M12 3v18"
}], ["circle", {
  cx: "19",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M16 15.7A9 9 0 0 0 19 9"
}]]];
const y7 = ["svg", t, [["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M6 21V9a9 9 0 0 0 9 9"
}]]];
const u7 = ["svg", t, [["circle", {
  cx: "5",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M5 9v12"
}], ["circle", {
  cx: "19",
  cy: "18",
  r: "3"
}], ["path", {
  d: "m15 9-3-3 3-3"
}], ["path", {
  d: "M12 6h5a2 2 0 0 1 2 2v7"
}]]];
const x7 = ["svg", t, [["circle", {
  cx: "6",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M6 9v12"
}], ["path", {
  d: "m21 3-6 6"
}], ["path", {
  d: "m21 9-6-6"
}], ["path", {
  d: "M18 11.5V15"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}]]];
const f7 = ["svg", t, [["circle", {
  cx: "5",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M5 9v12"
}], ["path", {
  d: "m15 9-3-3 3-3"
}], ["path", {
  d: "M12 6h5a2 2 0 0 1 2 2v3"
}], ["path", {
  d: "M19 15v6"
}], ["path", {
  d: "M22 18h-6"
}]]];
const b7 = ["svg", t, [["circle", {
  cx: "6",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M6 9v12"
}], ["path", {
  d: "M13 6h3a2 2 0 0 1 2 2v3"
}], ["path", {
  d: "M18 15v6"
}], ["path", {
  d: "M21 18h-6"
}]]];
const w7 = ["svg", t, [["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M18 6V5"
}], ["path", {
  d: "M18 11v-1"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "9",
  y2: "21"
}]]];
const A7 = ["svg", t, [["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}], ["circle", {
  cx: "6",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M13 6h3a2 2 0 0 1 2 2v7"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "9",
  y2: "21"
}]]];
const k7 = ["svg", t, [["path", {
  d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
}], ["path", {
  d: "M9 18c-4.51 2-5-2-7-2"
}]]];
const H7 = ["svg", t, [["path", {
  d: "m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z"
}]]];
const S7 = ["svg", t, [["path", {
  d: "M5.116 4.104A1 1 0 0 1 6.11 3h11.78a1 1 0 0 1 .994 1.105L17.19 20.21A2 2 0 0 1 15.2 22H8.8a2 2 0 0 1-2-1.79z"
}], ["path", {
  d: "M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"
}]]];
const C7 = ["svg", t, [["circle", {
  cx: "6",
  cy: "15",
  r: "4"
}], ["circle", {
  cx: "18",
  cy: "15",
  r: "4"
}], ["path", {
  d: "M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2"
}], ["path", {
  d: "M2.5 13 5 7c.7-1.3 1.4-2 3-2"
}], ["path", {
  d: "M21.5 13 19 7c-.7-1.3-1.5-2-3-2"
}]]];
const V7 = ["svg", t, [["path", {
  d: "M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13"
}], ["path", {
  d: "M2 12h8.5"
}], ["path", {
  d: "M20 6V4a2 2 0 1 0-4 0v2"
}], ["rect", {
  width: "8",
  height: "5",
  x: "14",
  y: "6",
  rx: "1"
}]]];
const L7 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"
}], ["path", {
  d: "M2 12h20"
}]]];
const P7 = ["svg", t, [["path", {
  d: "M12 13V2l8 4-8 4"
}], ["path", {
  d: "M20.561 10.222a9 9 0 1 1-12.55-5.29"
}], ["path", {
  d: "M8.002 9.997a5 5 0 1 0 8.9 2.02"
}]]];
const T7 = ["svg", t, [["path", {
  d: "M18 11.5V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"
}], ["path", {
  d: "M14 10V8a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"
}], ["path", {
  d: "M10 9.9V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"
}], ["path", {
  d: "M6 14a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
}], ["path", {
  d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0"
}]]];
const R7 = ["svg", t, [["path", {
  d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"
}], ["path", {
  d: "M22 10v6"
}], ["path", {
  d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5"
}]]];
const B7 = ["svg", t, [["path", {
  d: "M22 5V2l-5.89 5.89"
}], ["circle", {
  cx: "16.6",
  cy: "15.89",
  r: "3"
}], ["circle", {
  cx: "8.11",
  cy: "7.4",
  r: "3"
}], ["circle", {
  cx: "12.35",
  cy: "11.65",
  r: "3"
}], ["circle", {
  cx: "13.91",
  cy: "5.85",
  r: "3"
}], ["circle", {
  cx: "18.15",
  cy: "10.09",
  r: "3"
}], ["circle", {
  cx: "6.56",
  cy: "13.2",
  r: "3"
}], ["circle", {
  cx: "10.8",
  cy: "17.44",
  r: "3"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "3"
}]]];
const E7 = ["svg", t, [["path", {
  d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
}], ["path", {
  d: "m16 19 2 2 4-4"
}]]];
const ih = ["svg", t, [["path", {
  d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
}], ["path", {
  d: "M16 19h6"
}], ["path", {
  d: "M19 22v-6"
}]]];
const I7 = ["svg", t, [["path", {
  d: "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
}], ["path", {
  d: "m16 16 5 5"
}], ["path", {
  d: "m16 21 5-5"
}]]];
const ph = ["svg", t, [["path", {
  d: "M12 3v18"
}], ["path", {
  d: "M3 12h18"
}], ["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}]]];
const Xt = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 9h18"
}], ["path", {
  d: "M3 15h18"
}], ["path", {
  d: "M9 3v18"
}], ["path", {
  d: "M15 3v18"
}]]];
const D7 = ["svg", t, [["circle", {
  cx: "12",
  cy: "9",
  r: "1"
}], ["circle", {
  cx: "19",
  cy: "9",
  r: "1"
}], ["circle", {
  cx: "5",
  cy: "9",
  r: "1"
}], ["circle", {
  cx: "12",
  cy: "15",
  r: "1"
}], ["circle", {
  cx: "19",
  cy: "15",
  r: "1"
}], ["circle", {
  cx: "5",
  cy: "15",
  r: "1"
}]]];
const z7 = ["svg", t, [["circle", {
  cx: "9",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "9",
  cy: "5",
  r: "1"
}], ["circle", {
  cx: "9",
  cy: "19",
  r: "1"
}], ["circle", {
  cx: "15",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "15",
  cy: "5",
  r: "1"
}], ["circle", {
  cx: "15",
  cy: "19",
  r: "1"
}]]];
const Z7 = ["svg", t, [["circle", {
  cx: "12",
  cy: "5",
  r: "1"
}], ["circle", {
  cx: "19",
  cy: "5",
  r: "1"
}], ["circle", {
  cx: "5",
  cy: "5",
  r: "1"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "19",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "5",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "12",
  cy: "19",
  r: "1"
}], ["circle", {
  cx: "19",
  cy: "19",
  r: "1"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "1"
}]]];
const F7 = ["svg", t, [["path", {
  d: "M3 7V5c0-1.1.9-2 2-2h2"
}], ["path", {
  d: "M17 3h2c1.1 0 2 .9 2 2v2"
}], ["path", {
  d: "M21 17v2c0 1.1-.9 2-2 2h-2"
}], ["path", {
  d: "M7 21H5c-1.1 0-2-.9-2-2v-2"
}], ["rect", {
  width: "7",
  height: "5",
  x: "7",
  y: "7",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "5",
  x: "10",
  y: "12",
  rx: "1"
}]]];
const U7 = ["svg", t, [["path", {
  d: "m11.9 12.1 4.514-4.514"
}], ["path", {
  d: "M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
}], ["path", {
  d: "m6 16 2 2"
}], ["path", {
  d: "M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"
}], ["circle", {
  cx: "11.5",
  cy: "12.5",
  r: ".5",
  fill: "currentColor"
}]]];
const W7 = ["svg", t, [["path", {
  d: "M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856"
}], ["path", {
  d: "M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288"
}], ["path", {
  d: "M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025"
}], ["path", {
  d: "m8.5 16.5-1-1"
}]]];
const O7 = ["svg", t, [["path", {
  d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"
}], ["path", {
  d: "m18 15 4-4"
}], ["path", {
  d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"
}]]];
const q7 = ["svg", t, [["path", {
  d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"
}], ["path", {
  d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
}], ["path", {
  d: "m2 16 6 6"
}], ["circle", {
  cx: "16",
  cy: "9",
  r: "2.9"
}], ["circle", {
  cx: "6",
  cy: "5",
  r: "3"
}]]];
const _7 = ["svg", t, [["path", {
  d: "M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16"
}], ["path", {
  d: "m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
}], ["path", {
  d: "m2 15 6 6"
}], ["path", {
  d: "M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z"
}]]];
const lh = ["svg", t, [["path", {
  d: "M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14"
}], ["path", {
  d: "m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9"
}], ["path", {
  d: "m2 13 6 6"
}]]];
const G7 = ["svg", t, [["path", {
  d: "M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"
}], ["path", {
  d: "M14 11V9a2 2 0 1 0-4 0v2"
}], ["path", {
  d: "M10 10.5V5a2 2 0 1 0-4 0v9"
}], ["path", {
  d: "m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"
}]]];
const N7 = ["svg", t, [["path", {
  d: "M12 3V2"
}], ["path", {
  d: "m15.4 17.4 3.2-2.8a2 2 0 1 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2l-1.302-1.464A1 1 0 0 0 6.151 19H5"
}], ["path", {
  d: "M2 14h12a2 2 0 0 1 0 4h-2"
}], ["path", {
  d: "M4 10h16"
}], ["path", {
  d: "M5 10a7 7 0 0 1 14 0"
}], ["path", {
  d: "M5 14v6a1 1 0 0 1-1 1H2"
}]]];
const $7 = ["svg", t, [["path", {
  d: "M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
}], ["path", {
  d: "M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"
}], ["path", {
  d: "M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"
}], ["path", {
  d: "M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
}]]];
const X7 = ["svg", t, [["path", {
  d: "m11 17 2 2a1 1 0 1 0 3-3"
}], ["path", {
  d: "m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
}], ["path", {
  d: "m21 3 1 11h-2"
}], ["path", {
  d: "M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
}], ["path", {
  d: "M3 4h8"
}]]];
const Y7 = ["svg", t, [["path", {
  d: "M12 2v8"
}], ["path", {
  d: "m16 6-4 4-4-4"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2"
}], ["path", {
  d: "M6 18h.01"
}], ["path", {
  d: "M10 18h.01"
}]]];
const K7 = ["svg", t, [["path", {
  d: "m16 6-4-4-4 4"
}], ["path", {
  d: "M12 2v8"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2"
}], ["path", {
  d: "M6 18h.01"
}], ["path", {
  d: "M10 18h.01"
}]]];
const Q7 = ["svg", t, [["line", {
  x1: "22",
  x2: "2",
  y1: "12",
  y2: "12"
}], ["path", {
  d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
}], ["line", {
  x1: "6",
  x2: "6.01",
  y1: "16",
  y2: "16"
}], ["line", {
  x1: "10",
  x2: "10.01",
  y1: "16",
  y2: "16"
}]]];
const J7 = ["svg", t, [["path", {
  d: "M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"
}], ["path", {
  d: "M14 6a6 6 0 0 1 6 6v3"
}], ["path", {
  d: "M4 15v-3a6 6 0 0 1 6-6"
}], ["rect", {
  x: "2",
  y: "15",
  width: "20",
  height: "4",
  rx: "1"
}]]];
const j7 = ["svg", t, [["line", {
  x1: "4",
  x2: "20",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "15",
  y2: "15"
}], ["line", {
  x1: "10",
  x2: "8",
  y1: "3",
  y2: "21"
}], ["line", {
  x1: "16",
  x2: "14",
  y1: "3",
  y2: "21"
}]]];
const tM = ["svg", t, [["path", {
  d: "m5.2 6.2 1.4 1.4"
}], ["path", {
  d: "M2 13h2"
}], ["path", {
  d: "M20 13h2"
}], ["path", {
  d: "m17.4 7.6 1.4-1.4"
}], ["path", {
  d: "M22 17H2"
}], ["path", {
  d: "M22 21H2"
}], ["path", {
  d: "M16 13a4 4 0 0 0-8 0"
}], ["path", {
  d: "M12 5V2.5"
}]]];
const aM = ["svg", t, [["path", {
  d: "M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z"
}], ["path", {
  d: "M7.5 12h9"
}]]];
const eM = ["svg", t, [["path", {
  d: "M4 12h8"
}], ["path", {
  d: "M4 18V6"
}], ["path", {
  d: "M12 18V6"
}], ["path", {
  d: "m17 12 3-2v8"
}]]];
const hM = ["svg", t, [["path", {
  d: "M4 12h8"
}], ["path", {
  d: "M4 18V6"
}], ["path", {
  d: "M12 18V6"
}], ["path", {
  d: "M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1"
}]]];
const sM = ["svg", t, [["path", {
  d: "M4 12h8"
}], ["path", {
  d: "M4 18V6"
}], ["path", {
  d: "M12 18V6"
}], ["path", {
  d: "M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2"
}], ["path", {
  d: "M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2"
}]]];
const nM = ["svg", t, [["path", {
  d: "M12 18V6"
}], ["path", {
  d: "M17 10v3a1 1 0 0 0 1 1h3"
}], ["path", {
  d: "M21 10v8"
}], ["path", {
  d: "M4 12h8"
}], ["path", {
  d: "M4 18V6"
}]]];
const cM = ["svg", t, [["path", {
  d: "M4 12h8"
}], ["path", {
  d: "M4 18V6"
}], ["path", {
  d: "M12 18V6"
}], ["path", {
  d: "M17 13v-3h4"
}], ["path", {
  d: "M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17"
}]]];
const oM = ["svg", t, [["path", {
  d: "M4 12h8"
}], ["path", {
  d: "M4 18V6"
}], ["path", {
  d: "M12 18V6"
}], ["circle", {
  cx: "19",
  cy: "16",
  r: "2"
}], ["path", {
  d: "M20 10c-2 2-3 3.5-3 6"
}]]];
const dM = ["svg", t, [["path", {
  d: "M6 12h12"
}], ["path", {
  d: "M6 20V4"
}], ["path", {
  d: "M18 20V4"
}]]];
const rM = ["svg", t, [["path", {
  d: "M21 14h-1.343"
}], ["path", {
  d: "M9.128 3.47A9 9 0 0 1 21 12v3.343"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M20.414 20.414A2 2 0 0 1 19 21h-1a2 2 0 0 1-2-2v-3"
}], ["path", {
  d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 2.636-6.364"
}]]];
const iM = ["svg", t, [["path", {
  d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"
}]]];
const pM = ["svg", t, [["path", {
  d: "M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"
}], ["path", {
  d: "M21 16v2a4 4 0 0 1-4 4h-5"
}]]];
const lM = ["svg", t, [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
}], ["path", {
  d: "m12 13-1-1 2-2-3-3 2-2"
}]]];
const MM = ["svg", t, [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
}], ["path", {
  d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"
}], ["path", {
  d: "m18 15-2-2"
}], ["path", {
  d: "m15 18-2-2"
}]]];
const vM = ["svg", t, [["line", {
  x1: "2",
  y1: "2",
  x2: "22",
  y2: "22"
}], ["path", {
  d: "M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35"
}], ["path", {
  d: "M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17"
}]]];
const gM = ["svg", t, [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
}], ["path", {
  d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"
}]]];
const mM = ["svg", t, [["path", {
  d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
}]]];
const yM = ["svg", t, [["path", {
  d: "M11 8c2-3-2-3 0-6"
}], ["path", {
  d: "M15.5 8c2-3-2-3 0-6"
}], ["path", {
  d: "M6 10h.01"
}], ["path", {
  d: "M6 14h.01"
}], ["path", {
  d: "M10 16v-4"
}], ["path", {
  d: "M14 16v-4"
}], ["path", {
  d: "M18 16v-4"
}], ["path", {
  d: "M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3"
}], ["path", {
  d: "M5 20v2"
}], ["path", {
  d: "M19 20v2"
}]]];
const uM = ["svg", t, [["path", {
  d: "M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"
}]]];
const xM = ["svg", t, [["path", {
  d: "m9 11-6 6v3h9l3-3"
}], ["path", {
  d: "m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"
}]]];
const fM = ["svg", t, [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
}], ["path", {
  d: "M3 3v5h5"
}], ["path", {
  d: "M12 7v5l4 2"
}]]];
const bM = ["svg", t, [["path", {
  d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27"
}], ["path", {
  d: "M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28"
}], ["path", {
  d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26"
}], ["path", {
  d: "M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25"
}], ["path", {
  d: "M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75"
}], ["path", {
  d: "M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24"
}], ["path", {
  d: "M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28"
}], ["path", {
  d: "M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const wM = ["svg", t, [["path", {
  d: "M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18"
}], ["path", {
  d: "M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88"
}], ["path", {
  d: "M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36"
}], ["path", {
  d: "M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87"
}], ["path", {
  d: "M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08"
}], ["path", {
  d: "M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57"
}], ["path", {
  d: "M4.93 4.93 3 3a.7.7 0 0 1 0-1"
}], ["path", {
  d: "M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15"
}]]];
const AM = ["svg", t, [["path", {
  d: "M12 6v4"
}], ["path", {
  d: "M14 14h-4"
}], ["path", {
  d: "M14 18h-4"
}], ["path", {
  d: "M14 8h-4"
}], ["path", {
  d: "M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18"
}]]];
const kM = ["svg", t, [["path", {
  d: "M10 22v-6.57"
}], ["path", {
  d: "M12 11h.01"
}], ["path", {
  d: "M12 7h.01"
}], ["path", {
  d: "M14 15.43V22"
}], ["path", {
  d: "M15 16a5 5 0 0 0-6 0"
}], ["path", {
  d: "M16 11h.01"
}], ["path", {
  d: "M16 7h.01"
}], ["path", {
  d: "M8 11h.01"
}], ["path", {
  d: "M8 7h.01"
}], ["rect", {
  x: "4",
  y: "2",
  width: "16",
  height: "20",
  rx: "2"
}]]];
const HM = ["svg", t, [["path", {
  d: "M5 22h14"
}], ["path", {
  d: "M5 2h14"
}], ["path", {
  d: "M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"
}], ["path", {
  d: "M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"
}]]];
const SM = ["svg", t, [["path", {
  d: "M10 12V8.964"
}], ["path", {
  d: "M14 12V8.964"
}], ["path", {
  d: "M15 12a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2a1 1 0 0 1 1-1z"
}], ["path", {
  d: "M8.5 21H5a2 2 0 0 1-2-2v-9a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-2"
}]]];
const CM = ["svg", t, [["path", {
  d: "M13.22 2.416a2 2 0 0 0-2.511.057l-7 5.999A2 2 0 0 0 3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7.354"
}], ["path", {
  d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
}], ["path", {
  d: "M15 6h6"
}], ["path", {
  d: "M18 3v6"
}]]];
const Mh = ["svg", t, [["path", {
  d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"
}], ["path", {
  d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
}]]];
const vh = ["svg", t, [["path", {
  d: "M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0"
}], ["path", {
  d: "M12.14 11a3.5 3.5 0 1 1 6.71 0"
}], ["path", {
  d: "M15.5 6.5a3.5 3.5 0 1 0-7 0"
}]]];
const gh = ["svg", t, [["path", {
  d: "m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"
}], ["path", {
  d: "M17 7A5 5 0 0 0 7 7"
}], ["path", {
  d: "M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"
}]]];
const VM = ["svg", t, [["path", {
  d: "M16 10h2"
}], ["path", {
  d: "M16 14h2"
}], ["path", {
  d: "M6.17 15a3 3 0 0 1 5.66 0"
}], ["circle", {
  cx: "9",
  cy: "11",
  r: "2"
}], ["rect", {
  x: "2",
  y: "5",
  width: "20",
  height: "14",
  rx: "2"
}]]];
const LM = ["svg", t, [["path", {
  d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
}], ["path", {
  d: "m14 19 3 3v-5.5"
}], ["path", {
  d: "m17 22 3-3"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2"
}]]];
const PM = ["svg", t, [["path", {
  d: "M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
}], ["line", {
  x1: "16",
  x2: "22",
  y1: "5",
  y2: "5"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2"
}], ["path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
}]]];
const TM = ["svg", t, [["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}], ["path", {
  d: "M10.41 10.41a2 2 0 1 1-2.83-2.83"
}], ["line", {
  x1: "13.5",
  x2: "6",
  y1: "13.5",
  y2: "21"
}], ["line", {
  x1: "18",
  x2: "21",
  y1: "12",
  y2: "15"
}], ["path", {
  d: "M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59"
}], ["path", {
  d: "M21 15V5a2 2 0 0 0-2-2H9"
}]]];
const RM = ["svg", t, [["path", {
  d: "m11 16-5 5"
}], ["path", {
  d: "M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5"
}], ["path", {
  d: "M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2"
}]]];
const BM = ["svg", t, [["path", {
  d: "M16 5h6"
}], ["path", {
  d: "M19 2v6"
}], ["path", {
  d: "M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"
}], ["path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2"
}]]];
const EM = ["svg", t, [["path", {
  d: "M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"
}], ["path", {
  d: "m14 19.5 3-3 3 3"
}], ["path", {
  d: "M17 22v-5.5"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2"
}]]];
const IM = ["svg", t, [["path", {
  d: "M16 3h5v5"
}], ["path", {
  d: "M17 21h2a2 2 0 0 0 2-2"
}], ["path", {
  d: "M21 12v3"
}], ["path", {
  d: "m21 3-5 5"
}], ["path", {
  d: "M3 7V5a2 2 0 0 1 2-2"
}], ["path", {
  d: "m5 21 4.144-4.144a1.21 1.21 0 0 1 1.712 0L13 19"
}], ["path", {
  d: "M9 3h3"
}], ["rect", {
  x: "3",
  y: "11",
  width: "10",
  height: "10",
  rx: "1"
}]]];
const DM = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["circle", {
  cx: "9",
  cy: "9",
  r: "2"
}], ["path", {
  d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"
}]]];
const zM = ["svg", t, [["path", {
  d: "M18 22H4a2 2 0 0 1-2-2V6"
}], ["path", {
  d: "m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "2"
}], ["rect", {
  width: "16",
  height: "16",
  x: "6",
  y: "2",
  rx: "2"
}]]];
const ZM = ["svg", t, [["path", {
  d: "M12 3v12"
}], ["path", {
  d: "m8 11 4 4 4-4"
}], ["path", {
  d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4"
}]]];
const FM = ["svg", t, [["polyline", {
  points: "22 12 16 12 14 15 10 15 8 12 2 12"
}], ["path", {
  d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
}]]];
const mh = ["svg", t, [["path", {
  d: "M21 12H11"
}], ["path", {
  d: "M21 18H11"
}], ["path", {
  d: "M21 6H11"
}], ["path", {
  d: "m7 8-4 4 4 4"
}]]];
const yh = ["svg", t, [["path", {
  d: "M21 12H11"
}], ["path", {
  d: "M21 18H11"
}], ["path", {
  d: "M21 6H11"
}], ["path", {
  d: "m3 8 4 4-4 4"
}]]];
const UM = ["svg", t, [["path", {
  d: "M6 3h12"
}], ["path", {
  d: "M6 8h12"
}], ["path", {
  d: "m6 13 8.5 8"
}], ["path", {
  d: "M6 13h3"
}], ["path", {
  d: "M9 13c6.667 0 6.667-10 0-10"
}]]];
const WM = ["svg", t, [["path", {
  d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"
}]]];
const OM = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M12 16v-4"
}], ["path", {
  d: "M12 8h.01"
}]]];
const qM = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M7 7h.01"
}], ["path", {
  d: "M17 7h.01"
}], ["path", {
  d: "M7 17h.01"
}], ["path", {
  d: "M17 17h.01"
}]]];
const _M = ["svg", t, [["rect", {
  width: "20",
  height: "20",
  x: "2",
  y: "2",
  rx: "5",
  ry: "5"
}], ["path", {
  d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
}], ["line", {
  x1: "17.5",
  x2: "17.51",
  y1: "6.5",
  y2: "6.5"
}]]];
const GM = ["svg", t, [["line", {
  x1: "19",
  x2: "10",
  y1: "4",
  y2: "4"
}], ["line", {
  x1: "14",
  x2: "5",
  y1: "20",
  y2: "20"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "4",
  y2: "20"
}]]];
const NM = ["svg", t, [["path", {
  d: "M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8"
}], ["polyline", {
  points: "16 14 20 18 16 22"
}]]];
const $M = ["svg", t, [["path", {
  d: "M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4"
}], ["polyline", {
  points: "8 22 4 18 8 14"
}]]];
const XM = ["svg", t, [["path", {
  d: "M12 9.5V21m0-11.5L6 3m6 6.5L18 3"
}], ["path", {
  d: "M6 15h12"
}], ["path", {
  d: "M6 11h12"
}]]];
const YM = ["svg", t, [["path", {
  d: "M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"
}], ["path", {
  d: "M6 15v-2"
}], ["path", {
  d: "M12 15V9"
}], ["circle", {
  cx: "12",
  cy: "6",
  r: "3"
}]]];
const KM = ["svg", t, [["path", {
  d: "M6 5v11"
}], ["path", {
  d: "M12 5v6"
}], ["path", {
  d: "M18 5v14"
}]]];
const QM = ["svg", t, [["path", {
  d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"
}], ["circle", {
  cx: "16.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor"
}]]];
const JM = ["svg", t, [["path", {
  d: "M12.4 2.7a2.5 2.5 0 0 1 3.4 0l5.5 5.5a2.5 2.5 0 0 1 0 3.4l-3.7 3.7a2.5 2.5 0 0 1-3.4 0L8.7 9.8a2.5 2.5 0 0 1 0-3.4z"
}], ["path", {
  d: "m14 7 3 3"
}], ["path", {
  d: "m9.4 10.6-6.814 6.814A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814"
}]]];
const jM = ["svg", t, [["path", {
  d: "m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"
}], ["path", {
  d: "m21 2-9.6 9.6"
}], ["circle", {
  cx: "7.5",
  cy: "15.5",
  r: "5.5"
}]]];
const tv = ["svg", t, [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M6 8h4"
}], ["path", {
  d: "M14 8h.01"
}], ["path", {
  d: "M18 8h.01"
}], ["path", {
  d: "M2 12h20"
}], ["path", {
  d: "M6 12v4"
}], ["path", {
  d: "M10 12v4"
}], ["path", {
  d: "M14 12v4"
}], ["path", {
  d: "M18 12v4"
}]]];
const av = ["svg", t, [["path", {
  d: "M 20 4 A2 2 0 0 1 22 6"
}], ["path", {
  d: "M 22 6 L 22 16.41"
}], ["path", {
  d: "M 7 16 L 16 16"
}], ["path", {
  d: "M 9.69 4 L 20 4"
}], ["path", {
  d: "M14 8h.01"
}], ["path", {
  d: "M18 8h.01"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2"
}], ["path", {
  d: "M6 8h.01"
}], ["path", {
  d: "M8 12h.01"
}]]];
const ev = ["svg", t, [["path", {
  d: "M10 8h.01"
}], ["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M14 8h.01"
}], ["path", {
  d: "M16 12h.01"
}], ["path", {
  d: "M18 8h.01"
}], ["path", {
  d: "M6 8h.01"
}], ["path", {
  d: "M7 16h10"
}], ["path", {
  d: "M8 12h.01"
}], ["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}]]];
const hv = ["svg", t, [["path", {
  d: "M12 2v5"
}], ["path", {
  d: "M6 7h12l4 9H2l4-9Z"
}], ["path", {
  d: "M9.17 16a3 3 0 1 0 5.66 0"
}]]];
const sv = ["svg", t, [["path", {
  d: "m14 5-3 3 2 7 8-8-7-2Z"
}], ["path", {
  d: "m14 5-3 3-3-3 3-3 3 3Z"
}], ["path", {
  d: "M9.5 6.5 4 12l3 6"
}], ["path", {
  d: "M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z"
}]]];
const nv = ["svg", t, [["path", {
  d: "M9 2h6l3 7H6l3-7Z"
}], ["path", {
  d: "M12 9v13"
}], ["path", {
  d: "M9 22h6"
}]]];
const cv = ["svg", t, [["path", {
  d: "M11 13h6l3 7H8l3-7Z"
}], ["path", {
  d: "M14 13V8a2 2 0 0 0-2-2H8"
}], ["path", {
  d: "M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z"
}]]];
const ov = ["svg", t, [["path", {
  d: "M11 4h6l3 7H8l3-7Z"
}], ["path", {
  d: "M14 11v5a2 2 0 0 1-2 2H8"
}], ["path", {
  d: "M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z"
}]]];
const dv = ["svg", t, [["path", {
  d: "M8 2h8l4 10H4L8 2Z"
}], ["path", {
  d: "M12 12v6"
}], ["path", {
  d: "M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z"
}]]];
const rv = ["svg", t, [["path", {
  d: "m12 8 6-3-6-3v10"
}], ["path", {
  d: "m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12"
}], ["path", {
  d: "m6.49 12.85 11.02 6.3"
}], ["path", {
  d: "M17.51 12.85 6.5 19.15"
}]]];
const iv = ["svg", t, [["line", {
  x1: "3",
  x2: "21",
  y1: "22",
  y2: "22"
}], ["line", {
  x1: "6",
  x2: "6",
  y1: "18",
  y2: "11"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "18",
  y2: "11"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "18",
  y2: "11"
}], ["line", {
  x1: "18",
  x2: "18",
  y1: "18",
  y2: "11"
}], ["polygon", {
  points: "12 2 20 7 4 7"
}]]];
const pv = ["svg", t, [["path", {
  d: "m5 8 6 6"
}], ["path", {
  d: "m4 14 6-6 2-3"
}], ["path", {
  d: "M2 5h12"
}], ["path", {
  d: "M7 2h1"
}], ["path", {
  d: "m22 22-5-10-5 10"
}], ["path", {
  d: "M14 18h6"
}]]];
const lv = ["svg", t, [["path", {
  d: "M2 20h20"
}], ["path", {
  d: "m9 10 2 2 4-4"
}], ["rect", {
  x: "3",
  y: "4",
  width: "18",
  height: "12",
  rx: "2"
}]]];
const uh = ["svg", t, [["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "4",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "20",
  y2: "20"
}]]];
const Mv = ["svg", t, [["path", {
  d: "M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"
}]]];
const vv = ["svg", t, [["path", {
  d: "M7 22a5 5 0 0 1-2-4"
}], ["path", {
  d: "M7 16.93c.96.43 1.96.74 2.99.91"
}], ["path", {
  d: "M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2"
}], ["path", {
  d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
}], ["path", {
  d: "M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14z"
}]]];
const gv = ["svg", t, [["path", {
  d: "M7 22a5 5 0 0 1-2-4"
}], ["path", {
  d: "M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1"
}], ["path", {
  d: "M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
}]]];
const mv = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9"
}]]];
const yv = ["svg", t, [["path", {
  d: "m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12"
}], ["path", {
  d: "M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z"
}]]];
const xh = ["svg", t, [["path", {
  d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
}], ["path", {
  d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
}], ["path", {
  d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
}]]];
const uv = ["svg", t, [["rect", {
  width: "7",
  height: "9",
  x: "3",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "5",
  x: "14",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "9",
  x: "14",
  y: "12",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "5",
  x: "3",
  y: "16",
  rx: "1"
}]]];
const xv = ["svg", t, [["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "14",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "14",
  rx: "1"
}]]];
const fv = ["svg", t, [["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "14",
  rx: "1"
}], ["path", {
  d: "M14 4h7"
}], ["path", {
  d: "M14 9h7"
}], ["path", {
  d: "M14 15h7"
}], ["path", {
  d: "M14 20h7"
}]]];
const bv = ["svg", t, [["rect", {
  width: "7",
  height: "18",
  x: "3",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "14",
  rx: "1"
}]]];
const wv = ["svg", t, [["rect", {
  width: "18",
  height: "7",
  x: "3",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "7",
  x: "3",
  y: "14",
  rx: "1"
}], ["rect", {
  width: "7",
  height: "7",
  x: "14",
  y: "14",
  rx: "1"
}]]];
const Av = ["svg", t, [["rect", {
  width: "18",
  height: "7",
  x: "3",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "9",
  height: "7",
  x: "3",
  y: "14",
  rx: "1"
}], ["rect", {
  width: "5",
  height: "7",
  x: "16",
  y: "14",
  rx: "1"
}]]];
const kv = ["svg", t, [["path", {
  d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"
}], ["path", {
  d: "M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"
}]]];
const Hv = ["svg", t, [["path", {
  d: "M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"
}], ["path", {
  d: "M2 22 17 7"
}]]];
const Sv = ["svg", t, [["path", {
  d: "M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3"
}], ["path", {
  d: "M18 6V3a1 1 0 0 0-1-1h-3"
}], ["rect", {
  width: "8",
  height: "12",
  x: "8",
  y: "10",
  rx: "1"
}]]];
const Cv = ["svg", t, [["path", {
  d: "M15 12h6"
}], ["path", {
  d: "M15 6h6"
}], ["path", {
  d: "m3 13 3.553-7.724a.5.5 0 0 1 .894 0L11 13"
}], ["path", {
  d: "M3 18h18"
}], ["path", {
  d: "M4 11h6"
}]]];
const Vv = ["svg", t, [["rect", {
  width: "8",
  height: "18",
  x: "3",
  y: "3",
  rx: "1"
}], ["path", {
  d: "M7 3v18"
}], ["path", {
  d: "M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z"
}]]];
const Lv = ["svg", t, [["path", {
  d: "m16 6 4 14"
}], ["path", {
  d: "M12 6v14"
}], ["path", {
  d: "M8 8v12"
}], ["path", {
  d: "M4 4v16"
}]]];
const Pv = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "m4.93 4.93 4.24 4.24"
}], ["path", {
  d: "m14.83 9.17 4.24-4.24"
}], ["path", {
  d: "m14.83 14.83 4.24 4.24"
}], ["path", {
  d: "m9.17 14.83-4.24 4.24"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}]]];
const Tv = ["svg", t, [["path", {
  d: "M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2"
}], ["path", {
  d: "M6 12h4"
}], ["path", {
  d: "M14 12h2v8"
}], ["path", {
  d: "M6 20h4"
}], ["path", {
  d: "M14 20h4"
}]]];
const Rv = ["svg", t, [["path", {
  d: "M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5"
}], ["path", {
  d: "M9 18h6"
}], ["path", {
  d: "M10 22h4"
}]]];
const Bv = ["svg", t, [["path", {
  d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"
}], ["path", {
  d: "M9 18h6"
}], ["path", {
  d: "M10 22h4"
}]]];
const Ev = ["svg", t, [["path", {
  d: "M9 17H7A5 5 0 0 1 7 7"
}], ["path", {
  d: "M15 7h2a5 5 0 0 1 4 8"
}], ["line", {
  x1: "8",
  x2: "12",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const Iv = ["svg", t, [["path", {
  d: "M9 17H7A5 5 0 0 1 7 7h2"
}], ["path", {
  d: "M15 7h2a5 5 0 1 1 0 10h-2"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12"
}]]];
const Dv = ["svg", t, [["path", {
  d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
}], ["path", {
  d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
}]]];
const zv = ["svg", t, [["path", {
  d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
}], ["rect", {
  width: "4",
  height: "12",
  x: "2",
  y: "9"
}], ["circle", {
  cx: "4",
  cy: "4",
  r: "2"
}]]];
const Zv = ["svg", t, [["path", {
  d: "M11 18H3"
}], ["path", {
  d: "m15 18 2 2 4-4"
}], ["path", {
  d: "M16 12H3"
}], ["path", {
  d: "M16 6H3"
}]]];
const Fv = ["svg", t, [["path", {
  d: "m3 17 2 2 4-4"
}], ["path", {
  d: "m3 7 2 2 4-4"
}], ["path", {
  d: "M13 6h8"
}], ["path", {
  d: "M13 12h8"
}], ["path", {
  d: "M13 18h8"
}]]];
const Uv = ["svg", t, [["path", {
  d: "m3 10 2.5-2.5L3 5"
}], ["path", {
  d: "m3 19 2.5-2.5L3 14"
}], ["path", {
  d: "M10 6h11"
}], ["path", {
  d: "M10 12h11"
}], ["path", {
  d: "M10 18h11"
}]]];
const Wv = ["svg", t, [["path", {
  d: "M16 12H3"
}], ["path", {
  d: "M16 6H3"
}], ["path", {
  d: "M10 18H3"
}], ["path", {
  d: "M21 6v10a2 2 0 0 1-2 2h-5"
}], ["path", {
  d: "m16 16-2 2 2 2"
}]]];
const Ov = ["svg", t, [["path", {
  d: "M10 18h4"
}], ["path", {
  d: "M11 6H3"
}], ["path", {
  d: "M15 6h6"
}], ["path", {
  d: "M18 9V3"
}], ["path", {
  d: "M7 12h8"
}]]];
const qv = ["svg", t, [["path", {
  d: "M3 6h18"
}], ["path", {
  d: "M7 12h10"
}], ["path", {
  d: "M10 18h4"
}]]];
const _v = ["svg", t, [["path", {
  d: "M11 12H3"
}], ["path", {
  d: "M16 6H3"
}], ["path", {
  d: "M16 18H3"
}], ["path", {
  d: "M21 12h-6"
}]]];
const Gv = ["svg", t, [["path", {
  d: "M21 15V6"
}], ["path", {
  d: "M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
}], ["path", {
  d: "M12 12H3"
}], ["path", {
  d: "M16 6H3"
}], ["path", {
  d: "M12 18H3"
}]]];
const Nv = ["svg", t, [["path", {
  d: "M10 12h11"
}], ["path", {
  d: "M10 18h11"
}], ["path", {
  d: "M10 6h11"
}], ["path", {
  d: "M4 10h2"
}], ["path", {
  d: "M4 6h1v4"
}], ["path", {
  d: "M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"
}]]];
const $v = ["svg", t, [["path", {
  d: "M11 12H3"
}], ["path", {
  d: "M16 6H3"
}], ["path", {
  d: "M16 18H3"
}], ["path", {
  d: "M18 9v6"
}], ["path", {
  d: "M21 12h-6"
}]]];
const Xv = ["svg", t, [["path", {
  d: "M21 6H3"
}], ["path", {
  d: "M7 12H3"
}], ["path", {
  d: "M7 18H3"
}], ["path", {
  d: "M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14"
}], ["path", {
  d: "M11 10v4h4"
}]]];
const Yv = ["svg", t, [["path", {
  d: "M16 12H3"
}], ["path", {
  d: "M16 18H3"
}], ["path", {
  d: "M10 6H3"
}], ["path", {
  d: "M21 18V8a2 2 0 0 0-2-2h-5"
}], ["path", {
  d: "m16 8-2-2 2-2"
}]]];
const Kv = ["svg", t, [["rect", {
  x: "3",
  y: "5",
  width: "6",
  height: "6",
  rx: "1"
}], ["path", {
  d: "m3 17 2 2 4-4"
}], ["path", {
  d: "M13 6h8"
}], ["path", {
  d: "M13 12h8"
}], ["path", {
  d: "M13 18h8"
}]]];
const Qv = ["svg", t, [["path", {
  d: "M21 12h-8"
}], ["path", {
  d: "M21 6H8"
}], ["path", {
  d: "M21 18h-8"
}], ["path", {
  d: "M3 6v4c0 1.1.9 2 2 2h3"
}], ["path", {
  d: "M3 10v6c0 1.1.9 2 2 2h3"
}]]];
const Jv = ["svg", t, [["path", {
  d: "M12 12H3"
}], ["path", {
  d: "M16 6H3"
}], ["path", {
  d: "M12 18H3"
}], ["path", {
  d: "m16 12 5 3-5 3v-6Z"
}]]];
const jv = ["svg", t, [["path", {
  d: "M11 12H3"
}], ["path", {
  d: "M16 6H3"
}], ["path", {
  d: "M16 18H3"
}], ["path", {
  d: "m19 10-4 4"
}], ["path", {
  d: "m15 10 4 4"
}]]];
const t9 = ["svg", t, [["path", {
  d: "M3 12h.01"
}], ["path", {
  d: "M3 18h.01"
}], ["path", {
  d: "M3 6h.01"
}], ["path", {
  d: "M8 12h13"
}], ["path", {
  d: "M8 18h13"
}], ["path", {
  d: "M8 6h13"
}]]];
const fh = ["svg", t, [["path", {
  d: "M21 12a9 9 0 1 1-6.219-8.56"
}]]];
const a9 = ["svg", t, [["path", {
  d: "M22 12a1 1 0 0 1-10 0 1 1 0 0 0-10 0"
}], ["path", {
  d: "M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6"
}], ["path", {
  d: "M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const e9 = ["svg", t, [["path", {
  d: "M12 2v4"
}], ["path", {
  d: "m16.2 7.8 2.9-2.9"
}], ["path", {
  d: "M18 12h4"
}], ["path", {
  d: "m16.2 16.2 2.9 2.9"
}], ["path", {
  d: "M12 18v4"
}], ["path", {
  d: "m4.9 19.1 2.9-2.9"
}], ["path", {
  d: "M2 12h4"
}], ["path", {
  d: "m4.9 4.9 2.9 2.9"
}]]];
const h9 = ["svg", t, [["line", {
  x1: "2",
  x2: "5",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "19",
  x2: "22",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "5"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "7"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}]]];
const s9 = ["svg", t, [["line", {
  x1: "2",
  x2: "5",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "19",
  x2: "22",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "5"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22"
}], ["path", {
  d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11"
}], ["path", {
  d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const n9 = ["svg", t, [["line", {
  x1: "2",
  x2: "5",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "19",
  x2: "22",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "5"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "7"
}]]];
const bh = ["svg", t, [["circle", {
  cx: "12",
  cy: "16",
  r: "1"
}], ["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "10",
  rx: "2"
}], ["path", {
  d: "M7 10V7a5 5 0 0 1 9.33-2.5"
}]]];
const c9 = ["svg", t, [["circle", {
  cx: "12",
  cy: "16",
  r: "1"
}], ["rect", {
  x: "3",
  y: "10",
  width: "18",
  height: "12",
  rx: "2"
}], ["path", {
  d: "M7 10V7a5 5 0 0 1 10 0v3"
}]]];
const wh = ["svg", t, [["rect", {
  width: "18",
  height: "11",
  x: "3",
  y: "11",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M7 11V7a5 5 0 0 1 9.9-1"
}]]];
const o9 = ["svg", t, [["rect", {
  width: "18",
  height: "11",
  x: "3",
  y: "11",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M7 11V7a5 5 0 0 1 10 0v4"
}]]];
const d9 = ["svg", t, [["path", {
  d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"
}], ["polyline", {
  points: "10 17 15 12 10 7"
}], ["line", {
  x1: "15",
  x2: "3",
  y1: "12",
  y2: "12"
}]]];
const r9 = ["svg", t, [["path", {
  d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"
}], ["polyline", {
  points: "16 17 21 12 16 7"
}], ["line", {
  x1: "21",
  x2: "9",
  y1: "12",
  y2: "12"
}]]];
const i9 = ["svg", t, [["path", {
  d: "M13 12h8"
}], ["path", {
  d: "M13 18h8"
}], ["path", {
  d: "M13 6h8"
}], ["path", {
  d: "M3 12h1"
}], ["path", {
  d: "M3 18h1"
}], ["path", {
  d: "M3 6h1"
}], ["path", {
  d: "M8 12h1"
}], ["path", {
  d: "M8 18h1"
}], ["path", {
  d: "M8 6h1"
}]]];
const p9 = ["svg", t, [["circle", {
  cx: "11",
  cy: "11",
  r: "8"
}], ["path", {
  d: "m21 21-4.3-4.3"
}], ["path", {
  d: "M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0"
}]]];
const l9 = ["svg", t, [["path", {
  d: "M6 20a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
}], ["path", {
  d: "M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"
}], ["path", {
  d: "M10 20h4"
}], ["circle", {
  cx: "16",
  cy: "20",
  r: "2"
}], ["circle", {
  cx: "8",
  cy: "20",
  r: "2"
}]]];
const M9 = ["svg", t, [["path", {
  d: "m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15"
}], ["path", {
  d: "m5 8 4 4"
}], ["path", {
  d: "m12 15 4 4"
}]]];
const v9 = ["svg", t, [["path", {
  d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}], ["path", {
  d: "m16 19 2 2 4-4"
}]]];
const g9 = ["svg", t, [["path", {
  d: "M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}], ["path", {
  d: "M16 19h6"
}]]];
const m9 = ["svg", t, [["path", {
  d: "M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"
}], ["path", {
  d: "m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"
}]]];
const y9 = ["svg", t, [["path", {
  d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}], ["path", {
  d: "M19 16v6"
}], ["path", {
  d: "M16 19h6"
}]]];
const u9 = ["svg", t, [["path", {
  d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}], ["path", {
  d: "M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"
}], ["path", {
  d: "M20 22v.01"
}]]];
const x9 = ["svg", t, [["path", {
  d: "M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}], ["path", {
  d: "M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}], ["path", {
  d: "m22 22-1.5-1.5"
}]]];
const f9 = ["svg", t, [["path", {
  d: "M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}], ["path", {
  d: "M20 14v4"
}], ["path", {
  d: "M20 22v.01"
}]]];
const b9 = ["svg", t, [["path", {
  d: "M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}], ["path", {
  d: "m17 17 4 4"
}], ["path", {
  d: "m21 17-4 4"
}]]];
const w9 = ["svg", t, [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}], ["path", {
  d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"
}]]];
const A9 = ["svg", t, [["path", {
  d: "M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z"
}], ["polyline", {
  points: "15,9 18,9 18,11"
}], ["path", {
  d: "M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2"
}], ["line", {
  x1: "6",
  x2: "7",
  y1: "10",
  y2: "10"
}]]];
const k9 = ["svg", t, [["rect", {
  width: "16",
  height: "13",
  x: "6",
  y: "4",
  rx: "2"
}], ["path", {
  d: "m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7"
}], ["path", {
  d: "M2 8v11c0 1.1.9 2 2 2h14"
}]]];
const H9 = ["svg", t, [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}], ["path", {
  d: "m9 10 2 2 4-4"
}]]];
const S9 = ["svg", t, [["path", {
  d: "M19.43 12.935c.357-.967.57-1.955.57-2.935a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32.197 32.197 0 0 0 .813-.728"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}], ["path", {
  d: "m16 18 2 2 4-4"
}]]];
const C9 = ["svg", t, [["path", {
  d: "M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z"
}], ["path", {
  d: "M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2"
}], ["path", {
  d: "M18 22v-3"
}], ["circle", {
  cx: "10",
  cy: "10",
  r: "3"
}]]];
const V9 = ["svg", t, [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}], ["path", {
  d: "M9 10h6"
}]]];
const L9 = ["svg", t, [["path", {
  d: "M18.977 14C19.6 12.701 20 11.343 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}], ["path", {
  d: "M16 18h6"
}]]];
const P9 = ["svg", t, [["path", {
  d: "M12.75 7.09a3 3 0 0 1 2.16 2.16"
}], ["path", {
  d: "M17.072 17.072c-1.634 2.17-3.527 3.912-4.471 4.727a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 1.432-4.568"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M8.475 2.818A8 8 0 0 1 20 10c0 1.183-.31 2.377-.81 3.533"
}], ["path", {
  d: "M9.13 9.13a3 3 0 0 0 3.74 3.74"
}]]];
const T9 = ["svg", t, [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}], ["path", {
  d: "M12 7v6"
}], ["path", {
  d: "M9 10h6"
}]]];
const R9 = ["svg", t, [["path", {
  d: "M19.914 11.105A7.298 7.298 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 32 32 0 0 0 .824-.738"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}], ["path", {
  d: "M16 18h6"
}], ["path", {
  d: "M19 15v6"
}]]];
const B9 = ["svg", t, [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}], ["path", {
  d: "m14.5 7.5-5 5"
}], ["path", {
  d: "m9.5 7.5 5 5"
}]]];
const E9 = ["svg", t, [["path", {
  d: "M19.752 11.901A7.78 7.78 0 0 0 20 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 1.202 0 19 19 0 0 0 .09-.077"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}], ["path", {
  d: "m21.5 15.5-5 5"
}], ["path", {
  d: "m21.5 20.5-5-5"
}]]];
const I9 = ["svg", t, [["path", {
  d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}]]];
const D9 = ["svg", t, [["path", {
  d: "M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 0 1-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0 1 12 0"
}], ["circle", {
  cx: "12",
  cy: "8",
  r: "2"
}], ["path", {
  d: "M8.714 14h-3.71a1 1 0 0 0-.948.683l-2.004 6A1 1 0 0 0 3 22h18a1 1 0 0 0 .948-1.316l-2-6a1 1 0 0 0-.949-.684h-3.712"
}]]];
const z9 = ["svg", t, [["path", {
  d: "M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"
}], ["path", {
  d: "M15 5.764v15"
}], ["path", {
  d: "M9 3.236v15"
}]]];
const Z9 = ["svg", t, [["path", {
  d: "M8 22h8"
}], ["path", {
  d: "M12 11v11"
}], ["path", {
  d: "m19 3-7 8-7-8Z"
}]]];
const F9 = ["svg", t, [["polyline", {
  points: "15 3 21 3 21 9"
}], ["polyline", {
  points: "9 21 3 21 3 15"
}], ["line", {
  x1: "21",
  x2: "14",
  y1: "3",
  y2: "10"
}], ["line", {
  x1: "3",
  x2: "10",
  y1: "21",
  y2: "14"
}]]];
const U9 = ["svg", t, [["path", {
  d: "M8 3H5a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "M21 8V5a2 2 0 0 0-2-2h-3"
}], ["path", {
  d: "M3 16v3a2 2 0 0 0 2 2h3"
}], ["path", {
  d: "M16 21h3a2 2 0 0 0 2-2v-3"
}]]];
const W9 = ["svg", t, [["path", {
  d: "M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"
}], ["path", {
  d: "M11 12 5.12 2.2"
}], ["path", {
  d: "m13 12 5.88-9.8"
}], ["path", {
  d: "M8 7h8"
}], ["circle", {
  cx: "12",
  cy: "17",
  r: "5"
}], ["path", {
  d: "M12 18v-2h-.5"
}]]];
const O9 = ["svg", t, [["path", {
  d: "M9.26 9.26 3 11v3l14.14 3.14"
}], ["path", {
  d: "M21 15.34V6l-7.31 2.03"
}], ["path", {
  d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const q9 = ["svg", t, [["path", {
  d: "m3 11 18-5v12L3 14v-3z"
}], ["path", {
  d: "M11.6 16.8a3 3 0 1 1-5.8-1.6"
}]]];
const _9 = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "15",
  y2: "15"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9"
}]]];
const G9 = ["svg", t, [["path", {
  d: "M6 19v-3"
}], ["path", {
  d: "M10 19v-3"
}], ["path", {
  d: "M14 19v-3"
}], ["path", {
  d: "M18 19v-3"
}], ["path", {
  d: "M8 11V9"
}], ["path", {
  d: "M16 11V9"
}], ["path", {
  d: "M12 11V9"
}], ["path", {
  d: "M2 15h20"
}], ["path", {
  d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z"
}]]];
const N9 = ["svg", t, [["line", {
  x1: "4",
  x2: "20",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "6",
  y2: "6"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "18",
  y2: "18"
}]]];
const $9 = ["svg", t, [["path", {
  d: "m8 6 4-4 4 4"
}], ["path", {
  d: "M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22"
}], ["path", {
  d: "m20 22-5-5"
}]]];
const X9 = ["svg", t, [["path", {
  d: "M10 9.5 8 12l2 2.5"
}], ["path", {
  d: "m14 9.5 2 2.5-2 2.5"
}], ["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22z"
}]]];
const Y9 = ["svg", t, [["path", {
  d: "M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1"
}], ["path", {
  d: "M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1"
}], ["path", {
  d: "M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5"
}], ["path", {
  d: "M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1"
}], ["path", {
  d: "M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1"
}], ["path", {
  d: "M3.5 17.5 2 22l4.5-1.5"
}], ["path", {
  d: "M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5"
}], ["path", {
  d: "M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1"
}]]];
const K9 = ["svg", t, [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}], ["path", {
  d: "M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7"
}]]];
const Q9 = ["svg", t, [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}], ["path", {
  d: "M8 12h.01"
}], ["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M16 12h.01"
}]]];
const J9 = ["svg", t, [["path", {
  d: "M20.5 14.9A9 9 0 0 0 9.1 3.5"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7"
}]]];
const j9 = ["svg", t, [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "M12 8v8"
}]]];
const tg = ["svg", t, [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}], ["path", {
  d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
}], ["path", {
  d: "M12 17h.01"
}]]];
const ag = ["svg", t, [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}], ["path", {
  d: "m10 15-3-3 3-3"
}], ["path", {
  d: "M7 12h7a2 2 0 0 1 2 2v1"
}]]];
const eg = ["svg", t, [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}], ["path", {
  d: "M12 8v4"
}], ["path", {
  d: "M12 16h.01"
}]]];
const hg = ["svg", t, [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}], ["path", {
  d: "m15 9-6 6"
}], ["path", {
  d: "m9 9 6 6"
}]]];
const sg = ["svg", t, [["path", {
  d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"
}]]];
const ng = ["svg", t, [["path", {
  d: "M10 7.5 8 10l2 2.5"
}], ["path", {
  d: "m14 7.5 2 2.5-2 2.5"
}], ["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}]]];
const cg = ["svg", t, [["path", {
  d: "M10 17H7l-4 4v-7"
}], ["path", {
  d: "M14 17h1"
}], ["path", {
  d: "M14 3h1"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2"
}], ["path", {
  d: "M21 14v1a2 2 0 0 1-2 2"
}], ["path", {
  d: "M21 9v1"
}], ["path", {
  d: "M3 9v1"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2"
}], ["path", {
  d: "M9 3h1"
}]]];
const og = ["svg", t, [["path", {
  d: "m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2"
}], ["path", {
  d: "M9 10h6"
}], ["path", {
  d: "M12 7v6"
}], ["path", {
  d: "M9 17h6"
}]]];
const dg = ["svg", t, [["path", {
  d: "M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7"
}], ["circle", {
  cx: "18",
  cy: "6",
  r: "3"
}]]];
const rg = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}], ["path", {
  d: "M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8"
}]]];
const ig = ["svg", t, [["path", {
  d: "M19 15v-2a2 2 0 1 0-4 0v2"
}], ["path", {
  d: "M9 17H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3.5"
}], ["rect", {
  x: "13",
  y: "15",
  width: "8",
  height: "5",
  rx: "1"
}]]];
const pg = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}], ["path", {
  d: "M8 10h.01"
}], ["path", {
  d: "M12 10h.01"
}], ["path", {
  d: "M16 10h.01"
}]]];
const lg = ["svg", t, [["path", {
  d: "M21 15V5a2 2 0 0 0-2-2H9"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10"
}]]];
const Mg = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}], ["path", {
  d: "M12 7v6"
}], ["path", {
  d: "M9 10h6"
}]]];
const vg = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}], ["path", {
  d: "M8 12a2 2 0 0 0 2-2V8H8"
}], ["path", {
  d: "M14 12a2 2 0 0 0 2-2V8h-2"
}]]];
const gg = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}], ["path", {
  d: "m10 7-3 3 3 3"
}], ["path", {
  d: "M17 13v-1a2 2 0 0 0-2-2H7"
}]]];
const mg = ["svg", t, [["path", {
  d: "M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7"
}], ["path", {
  d: "M16 3h5v5"
}], ["path", {
  d: "m16 8 5-5"
}]]];
const yg = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}], ["path", {
  d: "M13 8H7"
}], ["path", {
  d: "M17 12H7"
}]]];
const ug = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}], ["path", {
  d: "M12 7v2"
}], ["path", {
  d: "M12 13h.01"
}]]];
const xg = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}], ["path", {
  d: "m14.5 7.5-5 5"
}], ["path", {
  d: "m9.5 7.5 5 5"
}]]];
const fg = ["svg", t, [["path", {
  d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
}]]];
const bg = ["svg", t, [["path", {
  d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
}], ["path", {
  d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
}]]];
const wg = ["svg", t, [["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}], ["path", {
  d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2"
}], ["path", {
  d: "M5 10v2a7 7 0 0 0 12 5"
}], ["path", {
  d: "M15 9.34V5a3 3 0 0 0-5.68-1.33"
}], ["path", {
  d: "M9 9v3a3 3 0 0 0 5.12 2.12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22"
}]]];
const Ah = ["svg", t, [["path", {
  d: "m11 7.601-5.994 8.19a1 1 0 0 0 .1 1.298l.817.818a1 1 0 0 0 1.314.087L15.09 12"
}], ["path", {
  d: "M16.5 21.174C15.5 20.5 14.372 20 13 20c-2.058 0-3.928 2.356-6 2-2.072-.356-2.775-3.369-1.5-4.5"
}], ["circle", {
  cx: "16",
  cy: "7",
  r: "5"
}]]];
const Ag = ["svg", t, [["path", {
  d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"
}], ["path", {
  d: "M19 10v2a7 7 0 0 1-14 0v-2"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "19",
  y2: "22"
}]]];
const kg = ["svg", t, [["path", {
  d: "M18 12h2"
}], ["path", {
  d: "M18 16h2"
}], ["path", {
  d: "M18 20h2"
}], ["path", {
  d: "M18 4h2"
}], ["path", {
  d: "M18 8h2"
}], ["path", {
  d: "M4 12h2"
}], ["path", {
  d: "M4 16h2"
}], ["path", {
  d: "M4 20h2"
}], ["path", {
  d: "M4 4h2"
}], ["path", {
  d: "M4 8h2"
}], ["path", {
  d: "M8 2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-1.5c-.276 0-.494.227-.562.495a2 2 0 0 1-3.876 0C9.994 2.227 9.776 2 9.5 2z"
}]]];
const Hg = ["svg", t, [["path", {
  d: "M6 18h8"
}], ["path", {
  d: "M3 22h18"
}], ["path", {
  d: "M14 22a7 7 0 1 0 0-14h-1"
}], ["path", {
  d: "M9 14h2"
}], ["path", {
  d: "M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"
}], ["path", {
  d: "M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
}]]];
const Sg = ["svg", t, [["rect", {
  width: "20",
  height: "15",
  x: "2",
  y: "4",
  rx: "2"
}], ["rect", {
  width: "8",
  height: "7",
  x: "6",
  y: "8",
  rx: "1"
}], ["path", {
  d: "M18 8v7"
}], ["path", {
  d: "M6 19v2"
}], ["path", {
  d: "M18 19v2"
}]]];
const Cg = ["svg", t, [["path", {
  d: "M12 13v8"
}], ["path", {
  d: "M12 3v3"
}], ["path", {
  d: "M4 6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h13a2 2 0 0 0 1.152-.365l3.424-2.317a1 1 0 0 0 0-1.635l-3.424-2.318A2 2 0 0 0 17 6z"
}]]];
const Vg = ["svg", t, [["path", {
  d: "M8 2h8"
}], ["path", {
  d: "M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3"
}], ["path", {
  d: "M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const Lg = ["svg", t, [["path", {
  d: "M8 2h8"
}], ["path", {
  d: "M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2"
}], ["path", {
  d: "M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0"
}]]];
const Pg = ["svg", t, [["polyline", {
  points: "4 14 10 14 10 20"
}], ["polyline", {
  points: "20 10 14 10 14 4"
}], ["line", {
  x1: "14",
  x2: "21",
  y1: "10",
  y2: "3"
}], ["line", {
  x1: "3",
  x2: "10",
  y1: "21",
  y2: "14"
}]]];
const Tg = ["svg", t, [["path", {
  d: "M8 3v3a2 2 0 0 1-2 2H3"
}], ["path", {
  d: "M21 8h-3a2 2 0 0 1-2-2V3"
}], ["path", {
  d: "M3 16h3a2 2 0 0 1 2 2v3"
}], ["path", {
  d: "M16 21v-3a2 2 0 0 1 2-2h3"
}]]];
const Rg = ["svg", t, [["path", {
  d: "M5 12h14"
}]]];
const Bg = ["svg", t, [["path", {
  d: "m9 10 2 2 4-4"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "M8 21h8"
}]]];
const Eg = ["svg", t, [["path", {
  d: "M12 17v4"
}], ["path", {
  d: "m15.2 4.9-.9-.4"
}], ["path", {
  d: "m15.2 7.1-.9.4"
}], ["path", {
  d: "m16.9 3.2-.4-.9"
}], ["path", {
  d: "m16.9 8.8-.4.9"
}], ["path", {
  d: "m19.5 2.3-.4.9"
}], ["path", {
  d: "m19.5 9.7-.4-.9"
}], ["path", {
  d: "m21.7 4.5-.9.4"
}], ["path", {
  d: "m21.7 7.5-.9-.4"
}], ["path", {
  d: "M22 13v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7"
}], ["path", {
  d: "M8 21h8"
}], ["circle", {
  cx: "18",
  cy: "6",
  r: "3"
}]]];
const Ig = ["svg", t, [["circle", {
  cx: "19",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "M8 21h8"
}]]];
const Dg = ["svg", t, [["path", {
  d: "M12 13V7"
}], ["path", {
  d: "m15 10-3 3-3-3"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "M8 21h8"
}]]];
const zg = ["svg", t, [["path", {
  d: "M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2"
}], ["path", {
  d: "M22 15V5a2 2 0 0 0-2-2H9"
}], ["path", {
  d: "M8 21h8"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const Zg = ["svg", t, [["path", {
  d: "M10 13V7"
}], ["path", {
  d: "M14 13V7"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "M8 21h8"
}]]];
const Fg = ["svg", t, [["path", {
  d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "M8 21h8"
}], ["rect", {
  x: "2",
  y: "3",
  width: "20",
  height: "14",
  rx: "2"
}]]];
const Ug = ["svg", t, [["path", {
  d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"
}], ["path", {
  d: "M10 19v-3.96 3.15"
}], ["path", {
  d: "M7 19h5"
}], ["rect", {
  width: "6",
  height: "10",
  x: "16",
  y: "12",
  rx: "2"
}]]];
const Wg = ["svg", t, [["path", {
  d: "M5.5 20H8"
}], ["path", {
  d: "M17 9h.01"
}], ["rect", {
  width: "10",
  height: "16",
  x: "12",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4"
}], ["circle", {
  cx: "17",
  cy: "15",
  r: "1"
}]]];
const Og = ["svg", t, [["path", {
  d: "M12 17v4"
}], ["path", {
  d: "M8 21h8"
}], ["rect", {
  x: "2",
  y: "3",
  width: "20",
  height: "14",
  rx: "2"
}], ["rect", {
  x: "9",
  y: "7",
  width: "6",
  height: "6",
  rx: "1"
}]]];
const qg = ["svg", t, [["path", {
  d: "m9 10 3-3 3 3"
}], ["path", {
  d: "M12 13V7"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "M8 21h8"
}]]];
const _g = ["svg", t, [["path", {
  d: "m14.5 12.5-5-5"
}], ["path", {
  d: "m9.5 12.5 5-5"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "M8 21h8"
}]]];
const Gg = ["svg", t, [["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "21",
  y2: "21"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "17",
  y2: "21"
}]]];
const Ng = ["svg", t, [["path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9"
}], ["path", {
  d: "M20 3v4"
}], ["path", {
  d: "M22 5h-4"
}]]];
const $g = ["svg", t, [["path", {
  d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"
}]]];
const Xg = ["svg", t, [["path", {
  d: "m8 3 4 8 5-5 5 15H2L8 3z"
}], ["path", {
  d: "M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19"
}]]];
const Yg = ["svg", t, [["path", {
  d: "m8 3 4 8 5-5 5 15H2L8 3z"
}]]];
const Kg = ["svg", t, [["path", {
  d: "M12 6v.343"
}], ["path", {
  d: "M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218"
}], ["path", {
  d: "M19 13.343V9A7 7 0 0 0 8.56 2.902"
}], ["path", {
  d: "M22 22 2 2"
}]]];
const Qg = ["svg", t, [["path", {
  d: "M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"
}]]];
const Jg = ["svg", t, [["path", {
  d: "M2.034 2.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.944L8.204 7.545a1 1 0 0 0-.66.66l-1.066 3.443a.5.5 0 0 1-.944.033z"
}], ["circle", {
  cx: "16",
  cy: "16",
  r: "6"
}], ["path", {
  d: "m11.8 11.8 8.4 8.4"
}]]];
const jg = ["svg", t, [["path", {
  d: "M14 4.1 12 6"
}], ["path", {
  d: "m5.1 8-2.9-.8"
}], ["path", {
  d: "m6 12-1.9 2"
}], ["path", {
  d: "M7.2 2.2 8 5.1"
}], ["path", {
  d: "M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"
}]]];
const tm = ["svg", t, [["path", {
  d: "M12.586 12.586 19 19"
}], ["path", {
  d: "M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"
}]]];
const am = ["svg", t, [["rect", {
  x: "5",
  y: "2",
  width: "14",
  height: "20",
  rx: "7"
}], ["path", {
  d: "M12 6v4"
}]]];
const kh = ["svg", t, [["path", {
  d: "M5 3v16h16"
}], ["path", {
  d: "m5 19 6-6"
}], ["path", {
  d: "m2 6 3-3 3 3"
}], ["path", {
  d: "m18 16 3 3-3 3"
}]]];
const em = ["svg", t, [["path", {
  d: "M19 13v6h-6"
}], ["path", {
  d: "M5 11V5h6"
}], ["path", {
  d: "m5 5 14 14"
}]]];
const hm = ["svg", t, [["path", {
  d: "M11 19H5v-6"
}], ["path", {
  d: "M13 5h6v6"
}], ["path", {
  d: "M19 5 5 19"
}]]];
const sm = ["svg", t, [["path", {
  d: "M11 19H5V13"
}], ["path", {
  d: "M19 5L5 19"
}]]];
const nm = ["svg", t, [["path", {
  d: "M19 13V19H13"
}], ["path", {
  d: "M5 5L19 19"
}]]];
const cm = ["svg", t, [["path", {
  d: "M8 18L12 22L16 18"
}], ["path", {
  d: "M12 2V22"
}]]];
const om = ["svg", t, [["path", {
  d: "m18 8 4 4-4 4"
}], ["path", {
  d: "M2 12h20"
}], ["path", {
  d: "m6 8-4 4 4 4"
}]]];
const dm = ["svg", t, [["path", {
  d: "M6 8L2 12L6 16"
}], ["path", {
  d: "M2 12H22"
}]]];
const rm = ["svg", t, [["path", {
  d: "M18 8L22 12L18 16"
}], ["path", {
  d: "M2 12H22"
}]]];
const im = ["svg", t, [["path", {
  d: "M5 11V5H11"
}], ["path", {
  d: "M5 5L19 19"
}]]];
const pm = ["svg", t, [["path", {
  d: "M13 5H19V11"
}], ["path", {
  d: "M19 5L5 19"
}]]];
const lm = ["svg", t, [["path", {
  d: "M8 6L12 2L16 6"
}], ["path", {
  d: "M12 2V22"
}]]];
const Mm = ["svg", t, [["path", {
  d: "M12 2v20"
}], ["path", {
  d: "m8 18 4 4 4-4"
}], ["path", {
  d: "m8 6 4-4 4 4"
}]]];
const vm = ["svg", t, [["path", {
  d: "M12 2v20"
}], ["path", {
  d: "m15 19-3 3-3-3"
}], ["path", {
  d: "m19 9 3 3-3 3"
}], ["path", {
  d: "M2 12h20"
}], ["path", {
  d: "m5 9-3 3 3 3"
}], ["path", {
  d: "m9 5 3-3 3 3"
}]]];
const gm = ["svg", t, [["circle", {
  cx: "8",
  cy: "18",
  r: "4"
}], ["path", {
  d: "M12 18V2l7 4"
}]]];
const mm = ["svg", t, [["circle", {
  cx: "12",
  cy: "18",
  r: "4"
}], ["path", {
  d: "M16 18V2"
}]]];
const ym = ["svg", t, [["path", {
  d: "M9 18V5l12-2v13"
}], ["path", {
  d: "m9 9 12-2"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3"
}], ["circle", {
  cx: "18",
  cy: "16",
  r: "3"
}]]];
const um = ["svg", t, [["path", {
  d: "M9 18V5l12-2v13"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3"
}], ["circle", {
  cx: "18",
  cy: "16",
  r: "3"
}]]];
const xm = ["svg", t, [["path", {
  d: "M9.31 9.31 5 21l7-4 7 4-1.17-3.17"
}], ["path", {
  d: "M14.53 8.88 12 2l-1.17 3.17"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const fm = ["svg", t, [["polygon", {
  points: "12 2 19 21 12 17 5 21 12 2"
}]]];
const bm = ["svg", t, [["path", {
  d: "M8.43 8.43 3 11l8 2 2 8 2.57-5.43"
}], ["path", {
  d: "M17.39 11.73 22 2l-9.73 4.61"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const wm = ["svg", t, [["polygon", {
  points: "3 11 22 2 13 21 11 13 3 11"
}]]];
const Am = ["svg", t, [["rect", {
  x: "16",
  y: "16",
  width: "6",
  height: "6",
  rx: "1"
}], ["rect", {
  x: "2",
  y: "16",
  width: "6",
  height: "6",
  rx: "1"
}], ["rect", {
  x: "9",
  y: "2",
  width: "6",
  height: "6",
  rx: "1"
}], ["path", {
  d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"
}], ["path", {
  d: "M12 12V8"
}]]];
const km = ["svg", t, [["path", {
  d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"
}], ["path", {
  d: "M18 14h-8"
}], ["path", {
  d: "M15 18h-5"
}], ["path", {
  d: "M10 6h8v4h-8V6Z"
}]]];
const Hm = ["svg", t, [["path", {
  d: "M6 8.32a7.43 7.43 0 0 1 0 7.36"
}], ["path", {
  d: "M9.46 6.21a11.76 11.76 0 0 1 0 11.58"
}], ["path", {
  d: "M12.91 4.1a15.91 15.91 0 0 1 .01 15.8"
}], ["path", {
  d: "M16.37 2a20.16 20.16 0 0 1 0 20"
}]]];
const Sm = ["svg", t, [["path", {
  d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"
}], ["path", {
  d: "M2 6h4"
}], ["path", {
  d: "M2 10h4"
}], ["path", {
  d: "M2 14h4"
}], ["path", {
  d: "M2 18h4"
}], ["path", {
  d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
}]]];
const Cm = ["svg", t, [["path", {
  d: "M2 6h4"
}], ["path", {
  d: "M2 10h4"
}], ["path", {
  d: "M2 14h4"
}], ["path", {
  d: "M2 18h4"
}], ["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2"
}], ["path", {
  d: "M15 2v20"
}], ["path", {
  d: "M15 7h5"
}], ["path", {
  d: "M15 12h5"
}], ["path", {
  d: "M15 17h5"
}]]];
const Vm = ["svg", t, [["path", {
  d: "M2 6h4"
}], ["path", {
  d: "M2 10h4"
}], ["path", {
  d: "M2 14h4"
}], ["path", {
  d: "M2 18h4"
}], ["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2"
}], ["path", {
  d: "M9.5 8h5"
}], ["path", {
  d: "M9.5 12H16"
}], ["path", {
  d: "M9.5 16H14"
}]]];
const Lm = ["svg", t, [["path", {
  d: "M2 6h4"
}], ["path", {
  d: "M2 10h4"
}], ["path", {
  d: "M2 14h4"
}], ["path", {
  d: "M2 18h4"
}], ["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2"
}], ["path", {
  d: "M16 2v20"
}]]];
const Pm = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M12 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["path", {
  d: "M16 4h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M20 12v2"
}], ["path", {
  d: "M20 18v2a2 2 0 0 1-2 2h-1"
}], ["path", {
  d: "M13 22h-2"
}], ["path", {
  d: "M7 22H6a2 2 0 0 1-2-2v-2"
}], ["path", {
  d: "M4 14v-2"
}], ["path", {
  d: "M4 8V6a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M8 10h6"
}], ["path", {
  d: "M8 14h8"
}], ["path", {
  d: "M8 18h5"
}]]];
const Tm = ["svg", t, [["path", {
  d: "M8 2v4"
}], ["path", {
  d: "M12 2v4"
}], ["path", {
  d: "M16 2v4"
}], ["rect", {
  width: "16",
  height: "18",
  x: "4",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M8 10h6"
}], ["path", {
  d: "M8 14h8"
}], ["path", {
  d: "M8 18h5"
}]]];
const Rm = ["svg", t, [["path", {
  d: "M12 4V2"
}], ["path", {
  d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939"
}], ["path", {
  d: "M19 10v3.343"
}], ["path", {
  d: "M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const Bm = ["svg", t, [["path", {
  d: "M12 4V2"
}], ["path", {
  d: "M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4"
}], ["path", {
  d: "M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z"
}]]];
const Hh = ["svg", t, [["path", {
  d: "M12 16h.01"
}], ["path", {
  d: "M12 8v4"
}], ["path", {
  d: "M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z"
}]]];
const Em = ["svg", t, [["path", {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
}], ["path", {
  d: "M8 12h8"
}]]];
const Sh = ["svg", t, [["path", {
  d: "M10 15V9"
}], ["path", {
  d: "M14 15V9"
}], ["path", {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
}]]];
const Ch = ["svg", t, [["path", {
  d: "m15 9-6 6"
}], ["path", {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
}], ["path", {
  d: "m9 9 6 6"
}]]];
const Im = ["svg", t, [["path", {
  d: "M2.586 16.726A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2h6.624a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586z"
}]]];
const Dm = ["svg", t, [["path", {
  d: "M3 20h4.5a.5.5 0 0 0 .5-.5v-.282a.52.52 0 0 0-.247-.437 8 8 0 1 1 8.494-.001.52.52 0 0 0-.247.438v.282a.5.5 0 0 0 .5.5H21"
}]]];
const zm = ["svg", t, [["path", {
  d: "M3 3h6l6 18h6"
}], ["path", {
  d: "M14 3h7"
}]]];
const Zm = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["circle", {
  cx: "19",
  cy: "5",
  r: "2"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "2"
}], ["path", {
  d: "M10.4 21.9a10 10 0 0 0 9.941-15.416"
}], ["path", {
  d: "M13.5 2.1a10 10 0 0 0-9.841 15.416"
}]]];
const Fm = ["svg", t, [["path", {
  d: "M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025"
}], ["path", {
  d: "m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009"
}], ["path", {
  d: "m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027"
}]]];
const Um = ["svg", t, [["path", {
  d: "M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"
}], ["path", {
  d: "m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"
}], ["path", {
  d: "M12 3v6"
}]]];
const Wm = ["svg", t, [["path", {
  d: "m16 16 2 2 4-4"
}], ["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
}], ["path", {
  d: "m7.5 4.27 9 5.15"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12"
}]]];
const Om = ["svg", t, [["path", {
  d: "M16 16h6"
}], ["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
}], ["path", {
  d: "m7.5 4.27 9 5.15"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12"
}]]];
const qm = ["svg", t, [["path", {
  d: "M12 22v-9"
}], ["path", {
  d: "M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z"
}], ["path", {
  d: "M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13"
}], ["path", {
  d: "M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z"
}]]];
const _m = ["svg", t, [["path", {
  d: "M16 16h6"
}], ["path", {
  d: "M19 13v6"
}], ["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
}], ["path", {
  d: "m7.5 4.27 9 5.15"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12"
}]]];
const Gm = ["svg", t, [["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
}], ["path", {
  d: "m7.5 4.27 9 5.15"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12"
}], ["circle", {
  cx: "18.5",
  cy: "15.5",
  r: "2.5"
}], ["path", {
  d: "M20.27 17.27 22 19"
}]]];
const Nm = ["svg", t, [["path", {
  d: "M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"
}], ["path", {
  d: "m7.5 4.27 9 5.15"
}], ["polyline", {
  points: "3.29 7 12 12 20.71 7"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "22",
  y2: "12"
}], ["path", {
  d: "m17 13 5 5m-5 0 5-5"
}]]];
const $m = ["svg", t, [["path", {
  d: "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
}], ["path", {
  d: "M12 22V12"
}], ["path", {
  d: "m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"
}], ["path", {
  d: "m7.5 4.27 9 5.15"
}]]];
const Xm = ["svg", t, [["path", {
  d: "m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"
}], ["path", {
  d: "m5 2 5 5"
}], ["path", {
  d: "M2 13h15"
}], ["path", {
  d: "M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"
}]]];
const Ym = ["svg", t, [["rect", {
  width: "16",
  height: "6",
  x: "2",
  y: "2",
  rx: "2"
}], ["path", {
  d: "M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
}], ["rect", {
  width: "4",
  height: "6",
  x: "8",
  y: "16",
  rx: "1"
}]]];
const Vh = ["svg", t, [["path", {
  d: "M10 2v2"
}], ["path", {
  d: "M14 2v4"
}], ["path", {
  d: "M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z"
}], ["path", {
  d: "M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1"
}]]];
const Km = ["svg", t, [["path", {
  d: "m14.622 17.897-10.68-2.913"
}], ["path", {
  d: "M18.376 2.622a1 1 0 1 1 3.002 3.002L17.36 9.643a.5.5 0 0 0 0 .707l.944.944a2.41 2.41 0 0 1 0 3.408l-.944.944a.5.5 0 0 1-.707 0L8.354 7.348a.5.5 0 0 1 0-.707l.944-.944a2.41 2.41 0 0 1 3.408 0l.944.944a.5.5 0 0 0 .707 0z"
}], ["path", {
  d: "M9 8c-1.804 2.71-3.97 3.46-6.583 3.948a.507.507 0 0 0-.302.819l7.32 8.883a1 1 0 0 0 1.185.204C12.735 20.405 16 16.792 16 15"
}]]];
const Qm = ["svg", t, [["circle", {
  cx: "13.5",
  cy: "6.5",
  r: ".5",
  fill: "currentColor"
}], ["circle", {
  cx: "17.5",
  cy: "10.5",
  r: ".5",
  fill: "currentColor"
}], ["circle", {
  cx: "8.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor"
}], ["circle", {
  cx: "6.5",
  cy: "12.5",
  r: ".5",
  fill: "currentColor"
}], ["path", {
  d: "M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"
}]]];
const Jm = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 15h18"
}], ["path", {
  d: "m15 8-3 3-3-3"
}]]];
const Lh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M14 15h1"
}], ["path", {
  d: "M19 15h2"
}], ["path", {
  d: "M3 15h2"
}], ["path", {
  d: "M9 15h1"
}]]];
const jm = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 15h18"
}], ["path", {
  d: "m9 10 3-3 3 3"
}]]];
const ty = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 15h18"
}]]];
const Ph = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M9 3v18"
}], ["path", {
  d: "m16 15-3-3 3-3"
}]]];
const Th = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M9 14v1"
}], ["path", {
  d: "M9 19v2"
}], ["path", {
  d: "M9 3v2"
}], ["path", {
  d: "M9 9v1"
}]]];
const Rh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M9 3v18"
}], ["path", {
  d: "m14 9 3 3-3 3"
}]]];
const Bh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M9 3v18"
}]]];
const ay = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M15 3v18"
}], ["path", {
  d: "m8 9 3 3-3 3"
}]]];
const Eh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M15 14v1"
}], ["path", {
  d: "M15 19v2"
}], ["path", {
  d: "M15 3v2"
}], ["path", {
  d: "M15 9v1"
}]]];
const ey = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M15 3v18"
}], ["path", {
  d: "m10 15-3-3 3-3"
}]]];
const hy = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M15 3v18"
}]]];
const sy = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 9h18"
}], ["path", {
  d: "m9 16 3-3 3 3"
}]]];
const Ih = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M14 9h1"
}], ["path", {
  d: "M19 9h2"
}], ["path", {
  d: "M3 9h2"
}], ["path", {
  d: "M9 9h1"
}]]];
const ny = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 9h18"
}], ["path", {
  d: "m15 14-3 3-3-3"
}]]];
const cy = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 9h18"
}]]];
const oy = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M9 3v18"
}], ["path", {
  d: "M9 15h12"
}]]];
const dy = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 15h12"
}], ["path", {
  d: "M15 3v18"
}]]];
const Dh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 9h18"
}], ["path", {
  d: "M9 21V9"
}]]];
const ry = ["svg", t, [["path", {
  d: "M13.234 20.252 21 12.3"
}], ["path", {
  d: "m16 6-8.414 8.586a2 2 0 0 0 0 2.828 2 2 0 0 0 2.828 0l8.414-8.586a4 4 0 0 0 0-5.656 4 4 0 0 0-5.656 0l-8.415 8.585a6 6 0 1 0 8.486 8.486"
}]]];
const iy = ["svg", t, [["path", {
  d: "M8 21s-4-3-4-9 4-9 4-9"
}], ["path", {
  d: "M16 3s4 3 4 9-4 9-4 9"
}]]];
const py = ["svg", t, [["path", {
  d: "M11 15h2"
}], ["path", {
  d: "M12 12v3"
}], ["path", {
  d: "M12 19v3"
}], ["path", {
  d: "M15.282 19a1 1 0 0 0 .948-.68l2.37-6.988a7 7 0 1 0-13.2 0l2.37 6.988a1 1 0 0 0 .948.68z"
}], ["path", {
  d: "M9 9a3 3 0 1 1 6 0"
}]]];
const ly = ["svg", t, [["path", {
  d: "M5.8 11.3 2 22l10.7-3.79"
}], ["path", {
  d: "M4 3h.01"
}], ["path", {
  d: "M22 8h.01"
}], ["path", {
  d: "M15 2h.01"
}], ["path", {
  d: "M22 20h.01"
}], ["path", {
  d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"
}], ["path", {
  d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"
}], ["path", {
  d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"
}], ["path", {
  d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"
}]]];
const My = ["svg", t, [["rect", {
  x: "14",
  y: "4",
  width: "4",
  height: "16",
  rx: "1"
}], ["rect", {
  x: "6",
  y: "4",
  width: "4",
  height: "16",
  rx: "1"
}]]];
const vy = ["svg", t, [["circle", {
  cx: "11",
  cy: "4",
  r: "2"
}], ["circle", {
  cx: "18",
  cy: "8",
  r: "2"
}], ["circle", {
  cx: "20",
  cy: "16",
  r: "2"
}], ["path", {
  d: "M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"
}]]];
const gy = ["svg", t, [["rect", {
  width: "14",
  height: "20",
  x: "5",
  y: "2",
  rx: "2"
}], ["path", {
  d: "M15 14h.01"
}], ["path", {
  d: "M9 6h6"
}], ["path", {
  d: "M9 10h6"
}]]];
const zh = ["svg", t, [["path", {
  d: "M12 20h9"
}], ["path", {
  d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
}]]];
const my = ["svg", t, [["path", {
  d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
}], ["path", {
  d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const yy = ["svg", t, [["path", {
  d: "M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"
}], ["path", {
  d: "m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"
}], ["path", {
  d: "m2.3 2.3 7.286 7.286"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "2"
}]]];
const Zh = ["svg", t, [["path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
}]]];
const uy = ["svg", t, [["path", {
  d: "M12 20h9"
}], ["path", {
  d: "M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"
}], ["path", {
  d: "m15 5 3 3"
}]]];
const xy = ["svg", t, [["path", {
  d: "m10 10-6.157 6.162a2 2 0 0 0-.5.833l-1.322 4.36a.5.5 0 0 0 .622.624l4.358-1.323a2 2 0 0 0 .83-.5L14 13.982"
}], ["path", {
  d: "m12.829 7.172 4.359-4.346a1 1 0 1 1 3.986 3.986l-4.353 4.353"
}], ["path", {
  d: "m15 5 4 4"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const fy = ["svg", t, [["path", {
  d: "M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"
}], ["path", {
  d: "m8 6 2-2"
}], ["path", {
  d: "m18 16 2-2"
}], ["path", {
  d: "m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"
}], ["path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
}], ["path", {
  d: "m15 5 4 4"
}]]];
const by = ["svg", t, [["path", {
  d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"
}], ["path", {
  d: "m15 5 4 4"
}]]];
const wy = ["svg", t, [["path", {
  d: "M10.83 2.38a2 2 0 0 1 2.34 0l8 5.74a2 2 0 0 1 .73 2.25l-3.04 9.26a2 2 0 0 1-1.9 1.37H7.04a2 2 0 0 1-1.9-1.37L2.1 10.37a2 2 0 0 1 .73-2.25z"
}]]];
const Ay = ["svg", t, [["line", {
  x1: "19",
  x2: "5",
  y1: "5",
  y2: "19"
}], ["circle", {
  cx: "6.5",
  cy: "6.5",
  r: "2.5"
}], ["circle", {
  cx: "17.5",
  cy: "17.5",
  r: "2.5"
}]]];
const ky = ["svg", t, [["circle", {
  cx: "12",
  cy: "5",
  r: "1"
}], ["path", {
  d: "m9 20 3-6 3 6"
}], ["path", {
  d: "m6 8 6 2 6-2"
}], ["path", {
  d: "M12 10v4"
}]]];
const Hy = ["svg", t, [["path", {
  d: "M20 11H4"
}], ["path", {
  d: "M20 7H4"
}], ["path", {
  d: "M7 21V4a1 1 0 0 1 1-1h4a1 1 0 0 1 0 12H7"
}]]];
const Sy = ["svg", t, [["path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}], ["path", {
  d: "M14.05 2a9 9 0 0 1 8 7.94"
}], ["path", {
  d: "M14.05 6A5 5 0 0 1 18 10"
}]]];
const Cy = ["svg", t, [["polyline", {
  points: "18 2 22 6 18 10"
}], ["line", {
  x1: "14",
  x2: "22",
  y1: "6",
  y2: "6"
}], ["path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}]]];
const Vy = ["svg", t, [["polyline", {
  points: "16 2 16 8 22 8"
}], ["line", {
  x1: "22",
  x2: "16",
  y1: "2",
  y2: "8"
}], ["path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}]]];
const Ly = ["svg", t, [["line", {
  x1: "22",
  x2: "16",
  y1: "2",
  y2: "8"
}], ["line", {
  x1: "16",
  x2: "22",
  y1: "2",
  y2: "8"
}], ["path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}]]];
const Py = ["svg", t, [["path", {
  d: "M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"
}], ["line", {
  x1: "22",
  x2: "2",
  y1: "2",
  y2: "22"
}]]];
const Ty = ["svg", t, [["polyline", {
  points: "22 8 22 2 16 2"
}], ["line", {
  x1: "16",
  x2: "22",
  y1: "8",
  y2: "2"
}], ["path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}]]];
const Ry = ["svg", t, [["path", {
  d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
}]]];
const By = ["svg", t, [["line", {
  x1: "9",
  x2: "9",
  y1: "4",
  y2: "20"
}], ["path", {
  d: "M4 7c0-1.7 1.3-3 3-3h13"
}], ["path", {
  d: "M18 20c-1.7 0-3-1.3-3-3V4"
}]]];
const Ey = ["svg", t, [["path", {
  d: "M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8"
}], ["path", {
  d: "M2 14h20"
}], ["path", {
  d: "M6 14v4"
}], ["path", {
  d: "M10 14v4"
}], ["path", {
  d: "M14 14v4"
}], ["path", {
  d: "M18 14v4"
}]]];
const Iy = ["svg", t, [["path", {
  d: "M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"
}], ["path", {
  d: "M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"
}], ["path", {
  d: "M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"
}], ["path", {
  d: "M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"
}]]];
const Dy = ["svg", t, [["path", {
  d: "M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4"
}], ["rect", {
  width: "10",
  height: "7",
  x: "12",
  y: "13",
  rx: "2"
}]]];
const zy = ["svg", t, [["path", {
  d: "M2 10h6V4"
}], ["path", {
  d: "m2 4 6 6"
}], ["path", {
  d: "M21 10V7a2 2 0 0 0-2-2h-7"
}], ["path", {
  d: "M3 14v2a2 2 0 0 0 2 2h3"
}], ["rect", {
  x: "12",
  y: "14",
  width: "10",
  height: "7",
  rx: "1"
}]]];
const Zy = ["svg", t, [["path", {
  d: "M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z"
}], ["path", {
  d: "M2 9v1c0 1.1.9 2 2 2h1"
}], ["path", {
  d: "M16 11h.01"
}]]];
const Fy = ["svg", t, [["path", {
  d: "M14 3v11"
}], ["path", {
  d: "M14 9h-3a3 3 0 0 1 0-6h9"
}], ["path", {
  d: "M18 3v11"
}], ["path", {
  d: "M22 18H2l4-4"
}], ["path", {
  d: "m6 22-4-4"
}]]];
const Uy = ["svg", t, [["path", {
  d: "M10 3v11"
}], ["path", {
  d: "M10 9H7a1 1 0 0 1 0-6h8"
}], ["path", {
  d: "M14 3v11"
}], ["path", {
  d: "m18 14 4 4H2"
}], ["path", {
  d: "m22 18-4 4"
}]]];
const Wy = ["svg", t, [["path", {
  d: "M13 4v16"
}], ["path", {
  d: "M17 4v16"
}], ["path", {
  d: "M19 4H9.5a4.5 4.5 0 0 0 0 9H13"
}]]];
const Oy = ["svg", t, [["path", {
  d: "M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4"
}], ["path", {
  d: "M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7"
}], ["rect", {
  width: "16",
  height: "5",
  x: "4",
  y: "2",
  rx: "1"
}]]];
const qy = ["svg", t, [["path", {
  d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"
}], ["path", {
  d: "m8.5 8.5 7 7"
}]]];
const _y = ["svg", t, [["path", {
  d: "M12 17v5"
}], ["path", {
  d: "M15 9.34V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H7.89"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h11"
}]]];
const Gy = ["svg", t, [["path", {
  d: "M12 17v5"
}], ["path", {
  d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z"
}]]];
const Ny = ["svg", t, [["path", {
  d: "m2 22 1-1h3l9-9"
}], ["path", {
  d: "M3 21v-3l9-9"
}], ["path", {
  d: "m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"
}]]];
const $y = ["svg", t, [["path", {
  d: "m12 14-1 1"
}], ["path", {
  d: "m13.75 18.25-1.25 1.42"
}], ["path", {
  d: "M17.775 5.654a15.68 15.68 0 0 0-12.121 12.12"
}], ["path", {
  d: "M18.8 9.3a1 1 0 0 0 2.1 7.7"
}], ["path", {
  d: "M21.964 20.732a1 1 0 0 1-1.232 1.232l-18-5a1 1 0 0 1-.695-1.232A19.68 19.68 0 0 1 15.732 2.037a1 1 0 0 1 1.232.695z"
}]]];
const Xy = ["svg", t, [["path", {
  d: "M2 22h20"
}], ["path", {
  d: "M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"
}]]];
const Yy = ["svg", t, [["path", {
  d: "M2 22h20"
}], ["path", {
  d: "M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"
}]]];
const Ky = ["svg", t, [["path", {
  d: "M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"
}]]];
const Qy = ["svg", t, [["polygon", {
  points: "6 3 20 12 6 21 6 3"
}]]];
const Jy = ["svg", t, [["path", {
  d: "M9 2v6"
}], ["path", {
  d: "M15 2v6"
}], ["path", {
  d: "M12 17v5"
}], ["path", {
  d: "M5 8h14"
}], ["path", {
  d: "M6 11V8h12v3a6 6 0 1 1-12 0Z"
}]]];
const Fh = ["svg", t, [["path", {
  d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
}], ["path", {
  d: "m2 22 3-3"
}], ["path", {
  d: "M7.5 13.5 10 11"
}], ["path", {
  d: "M10.5 16.5 13 14"
}], ["path", {
  d: "m18 3-4 4h6l-4 4"
}]]];
const jy = ["svg", t, [["path", {
  d: "M12 22v-5"
}], ["path", {
  d: "M9 8V2"
}], ["path", {
  d: "M15 8V2"
}], ["path", {
  d: "M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"
}]]];
const tu = ["svg", t, [["path", {
  d: "M5 12h14"
}], ["path", {
  d: "M12 5v14"
}]]];
const au = ["svg", t, [["path", {
  d: "M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2"
}], ["path", {
  d: "M18 6h.01"
}], ["path", {
  d: "M6 18h.01"
}], ["path", {
  d: "M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z"
}], ["path", {
  d: "M18 11.66V22a4 4 0 0 0 4-4V6"
}]]];
const eu = ["svg", t, [["path", {
  d: "M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"
}], ["polyline", {
  points: "8 10 12 14 16 10"
}]]];
const hu = ["svg", t, [["path", {
  d: "M16.85 18.58a9 9 0 1 0-9.7 0"
}], ["path", {
  d: "M8 14a5 5 0 1 1 8 0"
}], ["circle", {
  cx: "12",
  cy: "11",
  r: "1"
}], ["path", {
  d: "M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z"
}]]];
const su = ["svg", t, [["path", {
  d: "M10 4.5V4a2 2 0 0 0-2.41-1.957"
}], ["path", {
  d: "M13.9 8.4a2 2 0 0 0-1.26-1.295"
}], ["path", {
  d: "M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158"
}], ["path", {
  d: "m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343"
}], ["path", {
  d: "M6 6v8"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const nu = ["svg", t, [["path", {
  d: "M22 14a8 8 0 0 1-8 8"
}], ["path", {
  d: "M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"
}], ["path", {
  d: "M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"
}], ["path", {
  d: "M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"
}], ["path", {
  d: "M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"
}]]];
const cu = ["svg", t, [["path", {
  d: "M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4"
}], ["path", {
  d: "M10 22 9 8"
}], ["path", {
  d: "m14 22 1-14"
}], ["path", {
  d: "M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z"
}]]];
const ou = ["svg", t, [["path", {
  d: "M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z"
}], ["path", {
  d: "m22 22-5.5-5.5"
}]]];
const du = ["svg", t, [["path", {
  d: "M18 7c0-5.333-8-5.333-8 0"
}], ["path", {
  d: "M10 7v14"
}], ["path", {
  d: "M6 21h12"
}], ["path", {
  d: "M6 13h10"
}]]];
const ru = ["svg", t, [["path", {
  d: "M18.36 6.64A9 9 0 0 1 20.77 15"
}], ["path", {
  d: "M6.16 6.16a9 9 0 1 0 12.68 12.68"
}], ["path", {
  d: "M12 2v4"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const iu = ["svg", t, [["path", {
  d: "M12 2v10"
}], ["path", {
  d: "M18.4 6.6a9 9 0 1 1-12.77.04"
}]]];
const pu = ["svg", t, [["path", {
  d: "M2 3h20"
}], ["path", {
  d: "M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"
}], ["path", {
  d: "m7 21 5-5 5 5"
}]]];
const lu = ["svg", t, [["path", {
  d: "M13.5 22H7a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v.5"
}], ["path", {
  d: "m16 19 2 2 4-4"
}], ["path", {
  d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"
}]]];
const Mu = ["svg", t, [["path", {
  d: "M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"
}], ["rect", {
  x: "6",
  y: "14",
  width: "12",
  height: "8",
  rx: "1"
}]]];
const vu = ["svg", t, [["path", {
  d: "M5 7 3 5"
}], ["path", {
  d: "M9 6V3"
}], ["path", {
  d: "m13 7 2-2"
}], ["circle", {
  cx: "9",
  cy: "13",
  r: "3"
}], ["path", {
  d: "M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17"
}], ["path", {
  d: "M16 16h2"
}]]];
const gu = ["svg", t, [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M12 9v11"
}], ["path", {
  d: "M2 9h13a2 2 0 0 1 2 2v9"
}]]];
const mu = ["svg", t, [["path", {
  d: "M15.39 4.39a1 1 0 0 0 1.68-.474 2.5 2.5 0 1 1 3.014 3.015 1 1 0 0 0-.474 1.68l1.683 1.682a2.414 2.414 0 0 1 0 3.414L19.61 15.39a1 1 0 0 1-1.68-.474 2.5 2.5 0 1 0-3.014 3.015 1 1 0 0 1 .474 1.68l-1.683 1.682a2.414 2.414 0 0 1-3.414 0L8.61 19.61a1 1 0 0 0-1.68.474 2.5 2.5 0 1 1-3.014-3.015 1 1 0 0 0 .474-1.68l-1.683-1.682a2.414 2.414 0 0 1 0-3.414L4.39 8.61a1 1 0 0 1 1.68.474 2.5 2.5 0 1 0 3.014-3.015 1 1 0 0 1-.474-1.68l1.683-1.682a2.414 2.414 0 0 1 3.414 0z"
}]]];
const yu = ["svg", t, [["path", {
  d: "M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z"
}], ["path", {
  d: "M12 2v20"
}]]];
const uu = ["svg", t, [["rect", {
  width: "5",
  height: "5",
  x: "3",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "5",
  height: "5",
  x: "16",
  y: "3",
  rx: "1"
}], ["rect", {
  width: "5",
  height: "5",
  x: "3",
  y: "16",
  rx: "1"
}], ["path", {
  d: "M21 16h-3a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "M21 21v.01"
}], ["path", {
  d: "M12 7v3a2 2 0 0 1-2 2H7"
}], ["path", {
  d: "M3 12h.01"
}], ["path", {
  d: "M12 3h.01"
}], ["path", {
  d: "M12 16v.01"
}], ["path", {
  d: "M16 12h1"
}], ["path", {
  d: "M21 12v.01"
}], ["path", {
  d: "M12 21v-1"
}]]];
const xu = ["svg", t, [["path", {
  d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"
}]]];
const fu = ["svg", t, [["path", {
  d: "M13 16a3 3 0 0 1 2.24 5"
}], ["path", {
  d: "M18 12h.01"
}], ["path", {
  d: "M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3"
}], ["path", {
  d: "M20 8.54V4a2 2 0 1 0-4 0v3"
}], ["path", {
  d: "M7.612 12.524a3 3 0 1 0-1.6 4.3"
}]]];
const bu = ["svg", t, [["path", {
  d: "M19.07 4.93A10 10 0 0 0 6.99 3.34"
}], ["path", {
  d: "M4 6h.01"
}], ["path", {
  d: "M2.29 9.62A10 10 0 1 0 21.31 8.35"
}], ["path", {
  d: "M16.24 7.76A6 6 0 1 0 8.23 16.67"
}], ["path", {
  d: "M12 18h.01"
}], ["path", {
  d: "M17.99 11.66A6 6 0 0 1 15.77 16.67"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}], ["path", {
  d: "m13.41 10.59 5.66-5.66"
}]]];
const wu = ["svg", t, [["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"
}], ["path", {
  d: "M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"
}], ["path", {
  d: "M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"
}]]];
const Au = ["svg", t, [["path", {
  d: "M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21"
}]]];
const ku = ["svg", t, [["path", {
  d: "M5 16v2"
}], ["path", {
  d: "M19 16v2"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "8",
  rx: "2"
}], ["path", {
  d: "M18 12h.01"
}]]];
const Hu = ["svg", t, [["path", {
  d: "M4.9 16.1C1 12.2 1 5.8 4.9 1.9"
}], ["path", {
  d: "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5"
}], ["circle", {
  cx: "12",
  cy: "9",
  r: "2"
}], ["path", {
  d: "M16.2 4.8c2 2 2.26 5.11.8 7.47"
}], ["path", {
  d: "M19.1 1.9a9.96 9.96 0 0 1 0 14.1"
}], ["path", {
  d: "M9.5 18h5"
}], ["path", {
  d: "m8 22 4-11 4 11"
}]]];
const Su = ["svg", t, [["path", {
  d: "M4.9 19.1C1 15.2 1 8.8 4.9 4.9"
}], ["path", {
  d: "M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}], ["path", {
  d: "M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"
}], ["path", {
  d: "M19.1 4.9C23 8.8 23 15.1 19.1 19"
}]]];
const Cu = ["svg", t, [["path", {
  d: "M20.34 17.52a10 10 0 1 0-2.82 2.82"
}], ["circle", {
  cx: "19",
  cy: "19",
  r: "2"
}], ["path", {
  d: "m13.41 13.41 4.18 4.18"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}]]];
const Vu = ["svg", t, [["path", {
  d: "M5 15h14"
}], ["path", {
  d: "M5 9h14"
}], ["path", {
  d: "m14 20-5-5 6-6-5-5"
}]]];
const Lu = ["svg", t, [["path", {
  d: "M22 17a10 10 0 0 0-20 0"
}], ["path", {
  d: "M6 17a6 6 0 0 1 12 0"
}], ["path", {
  d: "M10 17a2 2 0 0 1 4 0"
}]]];
const Pu = ["svg", t, [["path", {
  d: "M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7c0 2.2 1.8 4 4 4"
}], ["path", {
  d: "M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3"
}], ["path", {
  d: "M13.2 18a3 3 0 0 0-2.2-5"
}], ["path", {
  d: "M13 22H4a2 2 0 0 1 0-4h12"
}], ["path", {
  d: "M16 9h.01"
}]]];
const Tu = ["svg", t, [["rect", {
  width: "12",
  height: "20",
  x: "6",
  y: "2",
  rx: "2"
}], ["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2"
}]]];
const Ru = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "M12 6.5v11"
}], ["path", {
  d: "M15 9.4a4 4 0 1 0 0 5.2"
}]]];
const Bu = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "M8 12h5"
}], ["path", {
  d: "M16 9.5a4 4 0 1 0 0 5.2"
}]]];
const Eu = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "M8 7h8"
}], ["path", {
  d: "M12 17.5 8 15h1a4 4 0 0 0 0-8"
}], ["path", {
  d: "M8 11h8"
}]]];
const Iu = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "m12 10 3-3"
}], ["path", {
  d: "m9 7 3 3v7.5"
}], ["path", {
  d: "M9 11h6"
}], ["path", {
  d: "M9 15h6"
}]]];
const Du = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "M8 13h5"
}], ["path", {
  d: "M10 17V9.5a2.5 2.5 0 0 1 5 0"
}], ["path", {
  d: "M8 17h7"
}]]];
const zu = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "M8 15h5"
}], ["path", {
  d: "M8 11h5a2 2 0 1 0 0-4h-3v10"
}]]];
const Zu = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "M10 17V7h5"
}], ["path", {
  d: "M10 11h4"
}], ["path", {
  d: "M8 15h5"
}]]];
const Fu = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "M14 8H8"
}], ["path", {
  d: "M16 12H8"
}], ["path", {
  d: "M13 16H8"
}]]];
const Uu = ["svg", t, [["path", {
  d: "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
}], ["path", {
  d: "M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"
}], ["path", {
  d: "M12 17.5v-11"
}]]];
const Uh = ["svg", t, [["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2"
}], ["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M17 12h.01"
}], ["path", {
  d: "M7 12h.01"
}]]];
const Wu = ["svg", t, [["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "2"
}]]];
const Ou = ["svg", t, [["rect", {
  width: "12",
  height: "20",
  x: "6",
  y: "2",
  rx: "2"
}]]];
const qu = ["svg", t, [["path", {
  d: "M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"
}], ["path", {
  d: "M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"
}], ["path", {
  d: "m14 16-3 3 3 3"
}], ["path", {
  d: "M8.293 13.596 7.196 9.5 3.1 10.598"
}], ["path", {
  d: "m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"
}], ["path", {
  d: "m13.378 9.633 4.096 1.098 1.097-4.096"
}]]];
const _u = ["svg", t, [["path", {
  d: "m15 14 5-5-5-5"
}], ["path", {
  d: "M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"
}]]];
const Gu = ["svg", t, [["circle", {
  cx: "12",
  cy: "17",
  r: "1"
}], ["path", {
  d: "M21 7v6h-6"
}], ["path", {
  d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
}]]];
const Nu = ["svg", t, [["path", {
  d: "M21 7v6h-6"
}], ["path", {
  d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"
}]]];
const $u = ["svg", t, [["path", {
  d: "M3 2v6h6"
}], ["path", {
  d: "M21 12A9 9 0 0 0 6 5.3L3 8"
}], ["path", {
  d: "M21 22v-6h-6"
}], ["path", {
  d: "M3 12a9 9 0 0 0 15 6.7l3-2.7"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}]]];
const Xu = ["svg", t, [["path", {
  d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
}], ["path", {
  d: "M3 3v5h5"
}], ["path", {
  d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"
}], ["path", {
  d: "M16 16h5v5"
}]]];
const Yu = ["svg", t, [["path", {
  d: "M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47"
}], ["path", {
  d: "M8 16H3v5"
}], ["path", {
  d: "M3 12C3 9.51 4 7.26 5.64 5.64"
}], ["path", {
  d: "m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64"
}], ["path", {
  d: "M21 12c0 1-.16 1.97-.47 2.87"
}], ["path", {
  d: "M21 3v5h-5"
}], ["path", {
  d: "M22 22 2 2"
}]]];
const Ku = ["svg", t, [["path", {
  d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
}], ["path", {
  d: "M21 3v5h-5"
}], ["path", {
  d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
}], ["path", {
  d: "M8 16H3v5"
}]]];
const Qu = ["svg", t, [["path", {
  d: "M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z"
}], ["path", {
  d: "M5 10h14"
}], ["path", {
  d: "M15 7v6"
}]]];
const Ju = ["svg", t, [["path", {
  d: "M17 3v10"
}], ["path", {
  d: "m12.67 5.5 8.66 5"
}], ["path", {
  d: "m12.67 10.5 8.66-5"
}], ["path", {
  d: "M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"
}]]];
const ju = ["svg", t, [["path", {
  d: "M4 7V4h16v3"
}], ["path", {
  d: "M5 20h6"
}], ["path", {
  d: "M13 4 8 20"
}], ["path", {
  d: "m15 15 5 5"
}], ["path", {
  d: "m20 15-5 5"
}]]];
const tx = ["svg", t, [["path", {
  d: "m17 2 4 4-4 4"
}], ["path", {
  d: "M3 11v-1a4 4 0 0 1 4-4h14"
}], ["path", {
  d: "m7 22-4-4 4-4"
}], ["path", {
  d: "M21 13v1a4 4 0 0 1-4 4H3"
}], ["path", {
  d: "M11 10h1v4"
}]]];
const ax = ["svg", t, [["path", {
  d: "m2 9 3-3 3 3"
}], ["path", {
  d: "M13 18H7a2 2 0 0 1-2-2V6"
}], ["path", {
  d: "m22 15-3 3-3-3"
}], ["path", {
  d: "M11 6h6a2 2 0 0 1 2 2v10"
}]]];
const ex = ["svg", t, [["path", {
  d: "m17 2 4 4-4 4"
}], ["path", {
  d: "M3 11v-1a4 4 0 0 1 4-4h14"
}], ["path", {
  d: "m7 22-4-4 4-4"
}], ["path", {
  d: "M21 13v1a4 4 0 0 1-4 4H3"
}]]];
const hx = ["svg", t, [["path", {
  d: "M14 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"
}], ["path", {
  d: "M14 4a2 2 0 0 1 2-2"
}], ["path", {
  d: "M16 10a2 2 0 0 1-2-2"
}], ["path", {
  d: "M20 14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"
}], ["path", {
  d: "M20 2a2 2 0 0 1 2 2"
}], ["path", {
  d: "M22 8a2 2 0 0 1-2 2"
}], ["path", {
  d: "m3 7 3 3 3-3"
}], ["path", {
  d: "M6 10V5a 3 3 0 0 1 3-3h1"
}], ["rect", {
  x: "2",
  y: "14",
  width: "8",
  height: "8",
  rx: "2"
}]]];
const sx = ["svg", t, [["path", {
  d: "M14 4a2 2 0 0 1 2-2"
}], ["path", {
  d: "M16 10a2 2 0 0 1-2-2"
}], ["path", {
  d: "M20 2a2 2 0 0 1 2 2"
}], ["path", {
  d: "M22 8a2 2 0 0 1-2 2"
}], ["path", {
  d: "m3 7 3 3 3-3"
}], ["path", {
  d: "M6 10V5a3 3 0 0 1 3-3h1"
}], ["rect", {
  x: "2",
  y: "14",
  width: "8",
  height: "8",
  rx: "2"
}]]];
const nx = ["svg", t, [["polyline", {
  points: "7 17 2 12 7 7"
}], ["polyline", {
  points: "12 17 7 12 12 7"
}], ["path", {
  d: "M22 18v-2a4 4 0 0 0-4-4H7"
}]]];
const cx = ["svg", t, [["polyline", {
  points: "9 17 4 12 9 7"
}], ["path", {
  d: "M20 18v-2a4 4 0 0 0-4-4H4"
}]]];
const ox = ["svg", t, [["polygon", {
  points: "11 19 2 12 11 5 11 19"
}], ["polygon", {
  points: "22 19 13 12 22 5 22 19"
}]]];
const dx = ["svg", t, [["path", {
  d: "M12 11.22C11 9.997 10 9 10 8a2 2 0 0 1 4 0c0 1-.998 2.002-2.01 3.22"
}], ["path", {
  d: "m12 18 2.57-3.5"
}], ["path", {
  d: "M6.243 9.016a7 7 0 0 1 11.507-.009"
}], ["path", {
  d: "M9.35 14.53 12 11.22"
}], ["path", {
  d: "M9.35 14.53C7.728 12.246 6 10.221 6 7a6 5 0 0 1 12 0c-.005 3.22-1.778 5.235-3.43 7.5l3.557 4.527a1 1 0 0 1-.203 1.43l-1.894 1.36a1 1 0 0 1-1.384-.215L12 18l-2.679 3.593a1 1 0 0 1-1.39.213l-1.865-1.353a1 1 0 0 1-.203-1.422z"
}]]];
const rx = ["svg", t, [["path", {
  d: "M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"
}], ["path", {
  d: "m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"
}], ["path", {
  d: "M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"
}], ["path", {
  d: "M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"
}]]];
const ix = ["svg", t, [["polyline", {
  points: "3.5 2 6.5 12.5 18 12.5"
}], ["line", {
  x1: "9.5",
  x2: "5.5",
  y1: "12.5",
  y2: "20"
}], ["line", {
  x1: "15",
  x2: "18.5",
  y1: "12.5",
  y2: "20"
}], ["path", {
  d: "M2.75 18a13 13 0 0 0 18.5 0"
}]]];
const px = ["svg", t, [["path", {
  d: "M6 19V5"
}], ["path", {
  d: "M10 19V6.8"
}], ["path", {
  d: "M14 19v-7.8"
}], ["path", {
  d: "M18 5v4"
}], ["path", {
  d: "M18 19v-6"
}], ["path", {
  d: "M22 19V9"
}], ["path", {
  d: "M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65"
}]]];
const Wh = ["svg", t, [["path", {
  d: "M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2"
}], ["path", {
  d: "m15.194 13.707 3.814 1.86-1.86 3.814"
}], ["path", {
  d: "M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4"
}]]];
const lx = ["svg", t, [["path", {
  d: "M20 9V7a2 2 0 0 0-2-2h-6"
}], ["path", {
  d: "m15 2-3 3 3 3"
}], ["path", {
  d: "M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2"
}]]];
const Mx = ["svg", t, [["path", {
  d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"
}], ["path", {
  d: "M3 3v5h5"
}]]];
const vx = ["svg", t, [["path", {
  d: "M12 5H6a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "m9 8 3-3-3-3"
}], ["path", {
  d: "M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"
}]]];
const gx = ["svg", t, [["path", {
  d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"
}], ["path", {
  d: "M21 3v5h-5"
}]]];
const mx = ["svg", t, [["circle", {
  cx: "6",
  cy: "19",
  r: "3"
}], ["path", {
  d: "M9 19h8.5c.4 0 .9-.1 1.3-.2"
}], ["path", {
  d: "M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M21 15.3a3.5 3.5 0 0 0-3.3-3.3"
}], ["path", {
  d: "M15 5h-4.3"
}], ["circle", {
  cx: "18",
  cy: "5",
  r: "3"
}]]];
const yx = ["svg", t, [["circle", {
  cx: "6",
  cy: "19",
  r: "3"
}], ["path", {
  d: "M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"
}], ["circle", {
  cx: "18",
  cy: "5",
  r: "3"
}]]];
const ux = ["svg", t, [["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2"
}], ["path", {
  d: "M6.01 18H6"
}], ["path", {
  d: "M10.01 18H10"
}], ["path", {
  d: "M15 10v4"
}], ["path", {
  d: "M17.84 7.17a4 4 0 0 0-5.66 0"
}], ["path", {
  d: "M20.66 4.34a8 8 0 0 0-11.31 0"
}]]];
const Oh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 12h18"
}]]];
const qh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M21 9H3"
}], ["path", {
  d: "M21 15H3"
}]]];
const xx = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M21 7.5H3"
}], ["path", {
  d: "M21 12H3"
}], ["path", {
  d: "M21 16.5H3"
}]]];
const fx = ["svg", t, [["path", {
  d: "M4 11a9 9 0 0 1 9 9"
}], ["path", {
  d: "M4 4a16 16 0 0 1 16 16"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "1"
}]]];
const bx = ["svg", t, [["path", {
  d: "M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"
}], ["path", {
  d: "m14.5 12.5 2-2"
}], ["path", {
  d: "m11.5 9.5 2-2"
}], ["path", {
  d: "m8.5 6.5 2-2"
}], ["path", {
  d: "m17.5 15.5 2-2"
}]]];
const wx = ["svg", t, [["path", {
  d: "M6 11h8a4 4 0 0 0 0-8H9v18"
}], ["path", {
  d: "M6 15h8"
}]]];
const Ax = ["svg", t, [["path", {
  d: "M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z"
}], ["path", {
  d: "M21 14 10 2 3 14h18Z"
}], ["path", {
  d: "M10 2v16"
}]]];
const kx = ["svg", t, [["path", {
  d: "M7 21h10"
}], ["path", {
  d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
}], ["path", {
  d: "M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1"
}], ["path", {
  d: "m13 12 4-4"
}], ["path", {
  d: "M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2"
}]]];
const Hx = ["svg", t, [["path", {
  d: "m2.37 11.223 8.372-6.777a2 2 0 0 1 2.516 0l8.371 6.777"
}], ["path", {
  d: "M21 15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5.25"
}], ["path", {
  d: "M3 15a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h9"
}], ["path", {
  d: "m6.67 15 6.13 4.6a2 2 0 0 0 2.8-.4l3.15-4.2"
}], ["rect", {
  width: "20",
  height: "4",
  x: "2",
  y: "11",
  rx: "1"
}]]];
const Sx = ["svg", t, [["path", {
  d: "M4 10a7.31 7.31 0 0 0 10 10Z"
}], ["path", {
  d: "m9 15 3-3"
}], ["path", {
  d: "M17 13a6 6 0 0 0-6-6"
}], ["path", {
  d: "M21 13A10 10 0 0 0 11 3"
}]]];
const Cx = ["svg", t, [["path", {
  d: "M13 7 9 3 5 7l4 4"
}], ["path", {
  d: "m17 11 4 4-4 4-4-4"
}], ["path", {
  d: "m8 12 4 4 6-6-4-4Z"
}], ["path", {
  d: "m16 8 3-3"
}], ["path", {
  d: "M9 21a6 6 0 0 0-6-6"
}]]];
const Vx = ["svg", t, [["path", {
  d: "M10 2v3a1 1 0 0 0 1 1h5"
}], ["path", {
  d: "M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6"
}], ["path", {
  d: "M18 22H4a2 2 0 0 1-2-2V6"
}], ["path", {
  d: "M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z"
}]]];
const Lx = ["svg", t, [["path", {
  d: "M13 13H8a1 1 0 0 0-1 1v7"
}], ["path", {
  d: "M14 8h1"
}], ["path", {
  d: "M17 21v-4"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41"
}], ["path", {
  d: "M29.5 11.5s5 5 4 5"
}], ["path", {
  d: "M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15"
}]]];
const Px = ["svg", t, [["path", {
  d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"
}], ["path", {
  d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7"
}], ["path", {
  d: "M7 3v4a1 1 0 0 0 1 1h7"
}]]];
const _h = ["svg", t, [["path", {
  d: "M5 7v11a1 1 0 0 0 1 1h11"
}], ["path", {
  d: "M5.293 18.707 11 13"
}], ["circle", {
  cx: "19",
  cy: "19",
  r: "2"
}], ["circle", {
  cx: "5",
  cy: "5",
  r: "2"
}]]];
const Tx = ["svg", t, [["path", {
  d: "m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
}], ["path", {
  d: "m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"
}], ["path", {
  d: "M7 21h10"
}], ["path", {
  d: "M12 3v18"
}], ["path", {
  d: "M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"
}]]];
const Rx = ["svg", t, [["path", {
  d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
}], ["path", {
  d: "M14 15H9v-5"
}], ["path", {
  d: "M16 3h5v5"
}], ["path", {
  d: "M21 3 9 15"
}]]];
const Bx = ["svg", t, [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}], ["path", {
  d: "M8 7v10"
}], ["path", {
  d: "M12 7v10"
}], ["path", {
  d: "M17 7v10"
}]]];
const Ex = ["svg", t, [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}], ["path", {
  d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
}]]];
const Ix = ["svg", t, [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}], ["path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2"
}], ["path", {
  d: "M9 9h.01"
}], ["path", {
  d: "M15 9h.01"
}]]];
const Dx = ["svg", t, [["path", {
  d: "M11.246 16.657a1 1 0 0 0 1.508 0l3.57-4.101A2.75 2.75 0 1 0 12 9.168a2.75 2.75 0 1 0-4.324 3.388z"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}]]];
const zx = ["svg", t, [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}], ["path", {
  d: "M7 12h10"
}]]];
const Zx = ["svg", t, [["path", {
  d: "M17 12v4a1 1 0 0 1-1 1h-4"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M17 8V7"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M7 17h.01"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}], ["rect", {
  x: "7",
  y: "7",
  width: "5",
  height: "5",
  rx: "1"
}]]];
const Fx = ["svg", t, [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["path", {
  d: "m16 16-1.9-1.9"
}]]];
const Ux = ["svg", t, [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}], ["path", {
  d: "M7 8h8"
}], ["path", {
  d: "M7 12h10"
}], ["path", {
  d: "M7 16h6"
}]]];
const Wx = ["svg", t, [["path", {
  d: "M3 7V5a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "M17 3h2a2 2 0 0 1 2 2v2"
}], ["path", {
  d: "M21 17v2a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M7 21H5a2 2 0 0 1-2-2v-2"
}]]];
const Ox = ["svg", t, [["path", {
  d: "M14 22v-4a2 2 0 1 0-4 0v4"
}], ["path", {
  d: "m18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10"
}], ["path", {
  d: "M18 5v17"
}], ["path", {
  d: "m4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6"
}], ["path", {
  d: "M6 5v17"
}], ["circle", {
  cx: "12",
  cy: "9",
  r: "2"
}]]];
const qx = ["svg", t, [["path", {
  d: "M5.42 9.42 8 12"
}], ["circle", {
  cx: "4",
  cy: "8",
  r: "2"
}], ["path", {
  d: "m14 6-8.58 8.58"
}], ["circle", {
  cx: "4",
  cy: "16",
  r: "2"
}], ["path", {
  d: "M10.8 14.8 14 18"
}], ["path", {
  d: "M16 12h-2"
}], ["path", {
  d: "M22 12h-2"
}]]];
const _x = ["svg", t, [["circle", {
  cx: "6",
  cy: "6",
  r: "3"
}], ["path", {
  d: "M8.12 8.12 12 12"
}], ["path", {
  d: "M20 4 8.12 15.88"
}], ["circle", {
  cx: "6",
  cy: "18",
  r: "3"
}], ["path", {
  d: "M14.8 14.8 20 20"
}]]];
const Gx = ["svg", t, [["path", {
  d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
}], ["path", {
  d: "M8 21h8"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "m22 3-5 5"
}], ["path", {
  d: "m17 3 5 5"
}]]];
const Nx = ["svg", t, [["path", {
  d: "M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3"
}], ["path", {
  d: "M8 21h8"
}], ["path", {
  d: "M12 17v4"
}], ["path", {
  d: "m17 8 5-5"
}], ["path", {
  d: "M17 3h5v5"
}]]];
const $x = ["svg", t, [["path", {
  d: "M15 12h-5"
}], ["path", {
  d: "M15 8h-5"
}], ["path", {
  d: "M19 17V5a2 2 0 0 0-2-2H4"
}], ["path", {
  d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
}]]];
const Xx = ["svg", t, [["path", {
  d: "M19 17V5a2 2 0 0 0-2-2H4"
}], ["path", {
  d: "M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3"
}]]];
const Yx = ["svg", t, [["path", {
  d: "m8 11 2 2 4-4"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8"
}], ["path", {
  d: "m21 21-4.3-4.3"
}]]];
const Kx = ["svg", t, [["path", {
  d: "m13 13.5 2-2.5-2-2.5"
}], ["path", {
  d: "m21 21-4.3-4.3"
}], ["path", {
  d: "M9 8.5 7 11l2 2.5"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8"
}]]];
const Qx = ["svg", t, [["path", {
  d: "m13.5 8.5-5 5"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8"
}], ["path", {
  d: "m21 21-4.3-4.3"
}]]];
const Jx = ["svg", t, [["path", {
  d: "m13.5 8.5-5 5"
}], ["path", {
  d: "m8.5 8.5 5 5"
}], ["circle", {
  cx: "11",
  cy: "11",
  r: "8"
}], ["path", {
  d: "m21 21-4.3-4.3"
}]]];
const jx = ["svg", t, [["circle", {
  cx: "11",
  cy: "11",
  r: "8"
}], ["path", {
  d: "m21 21-4.3-4.3"
}]]];
const tf = ["svg", t, [["path", {
  d: "M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0"
}], ["path", {
  d: "M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0"
}]]];
const Gh = ["svg", t, [["path", {
  d: "M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"
}], ["path", {
  d: "M6 12h16"
}]]];
const af = ["svg", t, [["rect", {
  x: "14",
  y: "14",
  width: "8",
  height: "8",
  rx: "2"
}], ["rect", {
  x: "2",
  y: "2",
  width: "8",
  height: "8",
  rx: "2"
}], ["path", {
  d: "M7 14v1a2 2 0 0 0 2 2h1"
}], ["path", {
  d: "M14 7h1a2 2 0 0 1 2 2v1"
}]]];
const ef = ["svg", t, [["path", {
  d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
}], ["path", {
  d: "m21.854 2.147-10.94 10.939"
}]]];
const hf = ["svg", t, [["line", {
  x1: "3",
  x2: "21",
  y1: "12",
  y2: "12"
}], ["polyline", {
  points: "8 8 12 4 16 8"
}], ["polyline", {
  points: "16 16 12 20 8 16"
}]]];
const sf = ["svg", t, [["line", {
  x1: "12",
  x2: "12",
  y1: "3",
  y2: "21"
}], ["polyline", {
  points: "8 8 4 12 8 16"
}], ["polyline", {
  points: "16 16 20 12 16 8"
}]]];
const nf = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"
}], ["path", {
  d: "M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"
}], ["path", {
  d: "M6 6h.01"
}], ["path", {
  d: "M6 18h.01"
}], ["path", {
  d: "m15.7 13.4-.9-.3"
}], ["path", {
  d: "m9.2 10.9-.9-.3"
}], ["path", {
  d: "m10.6 15.7.3-.9"
}], ["path", {
  d: "m13.6 15.7-.4-1"
}], ["path", {
  d: "m10.8 9.3-.4-1"
}], ["path", {
  d: "m8.3 13.6 1-.4"
}], ["path", {
  d: "m14.7 10.8 1-.4"
}], ["path", {
  d: "m13.4 8.3-.3.9"
}]]];
const cf = ["svg", t, [["path", {
  d: "M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"
}], ["path", {
  d: "M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"
}], ["path", {
  d: "M6 6h.01"
}], ["path", {
  d: "M6 18h.01"
}], ["path", {
  d: "m13 6-4 6h6l-4 6"
}]]];
const of = ["svg", t, [["path", {
  d: "M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5"
}], ["path", {
  d: "M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z"
}], ["path", {
  d: "M22 17v-1a2 2 0 0 0-2-2h-1"
}], ["path", {
  d: "M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z"
}], ["path", {
  d: "M6 18h.01"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const df = ["svg", t, [["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "2",
  rx: "2",
  ry: "2"
}], ["rect", {
  width: "20",
  height: "8",
  x: "2",
  y: "14",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "6",
  x2: "6.01",
  y1: "6",
  y2: "6"
}], ["line", {
  x1: "6",
  x2: "6.01",
  y1: "18",
  y2: "18"
}]]];
const rf = ["svg", t, [["path", {
  d: "M20 7h-9"
}], ["path", {
  d: "M14 17H5"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "3"
}], ["circle", {
  cx: "7",
  cy: "7",
  r: "3"
}]]];
const pf = ["svg", t, [["path", {
  d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}]]];
const lf = ["svg", t, [["path", {
  d: "M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"
}], ["rect", {
  x: "3",
  y: "14",
  width: "7",
  height: "7",
  rx: "1"
}], ["circle", {
  cx: "17.5",
  cy: "17.5",
  r: "3.5"
}]]];
const Mf = ["svg", t, [["circle", {
  cx: "18",
  cy: "5",
  r: "3"
}], ["circle", {
  cx: "6",
  cy: "12",
  r: "3"
}], ["circle", {
  cx: "18",
  cy: "19",
  r: "3"
}], ["line", {
  x1: "8.59",
  x2: "15.42",
  y1: "13.51",
  y2: "17.49"
}], ["line", {
  x1: "15.41",
  x2: "8.59",
  y1: "6.51",
  y2: "10.49"
}]]];
const vf = ["svg", t, [["path", {
  d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
}], ["polyline", {
  points: "16 6 12 2 8 6"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "15"
}]]];
const gf = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "3",
  x2: "21",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "3",
  x2: "21",
  y1: "15",
  y2: "15"
}], ["line", {
  x1: "9",
  x2: "9",
  y1: "9",
  y2: "21"
}], ["line", {
  x1: "15",
  x2: "15",
  y1: "9",
  y2: "21"
}]]];
const mf = ["svg", t, [["path", {
  d: "M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
}]]];
const yf = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "M12 8v4"
}], ["path", {
  d: "M12 16h.01"
}]]];
const uf = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "m4.243 5.21 14.39 12.472"
}]]];
const xf = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "m9 12 2 2 4-4"
}]]];
const ff = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "M8 12h.01"
}], ["path", {
  d: "M12 12h.01"
}], ["path", {
  d: "M16 12h.01"
}]]];
const bf = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "M12 22V2"
}]]];
const wf = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "M9 12h6"
}]]];
const Af = ["svg", t, [["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
}], ["path", {
  d: "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
}]]];
const kf = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "M9 12h6"
}], ["path", {
  d: "M12 9v6"
}]]];
const Hf = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3"
}], ["path", {
  d: "M12 17h.01"
}]]];
const Nh = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}], ["path", {
  d: "m14.5 9.5-5 5"
}], ["path", {
  d: "m9.5 9.5 5 5"
}]]];
const Sf = ["svg", t, [["path", {
  d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
}]]];
const Cf = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "8"
}], ["path", {
  d: "M12 2v7.5"
}], ["path", {
  d: "m19 5-5.23 5.23"
}], ["path", {
  d: "M22 12h-7.5"
}], ["path", {
  d: "m19 19-5.23-5.23"
}], ["path", {
  d: "M12 14.5V22"
}], ["path", {
  d: "M10.23 13.77 5 19"
}], ["path", {
  d: "M9.5 12H2"
}], ["path", {
  d: "M10.23 10.23 5 5"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2.5"
}]]];
const Vf = ["svg", t, [["path", {
  d: "M12 10.189V14"
}], ["path", {
  d: "M12 2v3"
}], ["path", {
  d: "M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"
}], ["path", {
  d: "M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"
}], ["path", {
  d: "M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
}]]];
const Lf = ["svg", t, [["path", {
  d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z"
}]]];
const Pf = ["svg", t, [["path", {
  d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
}], ["path", {
  d: "M3 6h18"
}], ["path", {
  d: "M16 10a4 4 0 0 1-8 0"
}]]];
const Tf = ["svg", t, [["path", {
  d: "m15 11-1 9"
}], ["path", {
  d: "m19 11-4-7"
}], ["path", {
  d: "M2 11h20"
}], ["path", {
  d: "m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"
}], ["path", {
  d: "M4.5 15.5h15"
}], ["path", {
  d: "m5 11 4-7"
}], ["path", {
  d: "m9 11 1 9"
}]]];
const Rf = ["svg", t, [["circle", {
  cx: "8",
  cy: "21",
  r: "1"
}], ["circle", {
  cx: "19",
  cy: "21",
  r: "1"
}], ["path", {
  d: "M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"
}]]];
const Bf = ["svg", t, [["path", {
  d: "M2 22v-5l5-5 5 5-5 5z"
}], ["path", {
  d: "M9.5 14.5 16 8"
}], ["path", {
  d: "m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2"
}]]];
const Ef = ["svg", t, [["path", {
  d: "m4 4 2.5 2.5"
}], ["path", {
  d: "M13.5 6.5a4.95 4.95 0 0 0-7 7"
}], ["path", {
  d: "M15 5 5 15"
}], ["path", {
  d: "M14 17v.01"
}], ["path", {
  d: "M10 16v.01"
}], ["path", {
  d: "M13 13v.01"
}], ["path", {
  d: "M16 10v.01"
}], ["path", {
  d: "M11 20v.01"
}], ["path", {
  d: "M17 14v.01"
}], ["path", {
  d: "M20 11v.01"
}]]];
const If = ["svg", t, [["path", {
  d: "m15 15 6 6m-6-6v4.8m0-4.8h4.8"
}], ["path", {
  d: "M9 19.8V15m0 0H4.2M9 15l-6 6"
}], ["path", {
  d: "M15 4.2V9m0 0h4.8M15 9l6-6"
}], ["path", {
  d: "M9 4.2V9m0 0H4.2M9 9 3 3"
}]]];
const Df = ["svg", t, [["path", {
  d: "M12 22v-7l-2-2"
}], ["path", {
  d: "M17 8v.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0Z"
}], ["path", {
  d: "m14 14-2 2"
}]]];
const zf = ["svg", t, [["path", {
  d: "m18 14 4 4-4 4"
}], ["path", {
  d: "m18 2 4 4-4 4"
}], ["path", {
  d: "M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22"
}], ["path", {
  d: "M2 6h1.972a4 4 0 0 1 3.6 2.2"
}], ["path", {
  d: "M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45"
}]]];
const Zf = ["svg", t, [["path", {
  d: "M18 7V5a1 1 0 0 0-1-1H6.5a.5.5 0 0 0-.4.8l4.5 6a2 2 0 0 1 0 2.4l-4.5 6a.5.5 0 0 0 .4.8H17a1 1 0 0 0 1-1v-2"
}]]];
const Ff = ["svg", t, [["path", {
  d: "M2 20h.01"
}], ["path", {
  d: "M7 20v-4"
}], ["path", {
  d: "M12 20v-8"
}], ["path", {
  d: "M17 20V8"
}]]];
const Uf = ["svg", t, [["path", {
  d: "M2 20h.01"
}], ["path", {
  d: "M7 20v-4"
}]]];
const Wf = ["svg", t, [["path", {
  d: "M2 20h.01"
}], ["path", {
  d: "M7 20v-4"
}], ["path", {
  d: "M12 20v-8"
}]]];
const Of = ["svg", t, [["path", {
  d: "M2 20h.01"
}]]];
const qf = ["svg", t, [["path", {
  d: "M2 20h.01"
}], ["path", {
  d: "M7 20v-4"
}], ["path", {
  d: "M12 20v-8"
}], ["path", {
  d: "M17 20V8"
}], ["path", {
  d: "M22 4v16"
}]]];
const _f = ["svg", t, [["path", {
  d: "m21 17-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284"
}], ["path", {
  d: "M3 21h18"
}]]];
const Gf = ["svg", t, [["path", {
  d: "M10 9H4L2 7l2-2h6"
}], ["path", {
  d: "M14 5h6l2 2-2 2h-6"
}], ["path", {
  d: "M10 22V4a2 2 0 1 1 4 0v18"
}], ["path", {
  d: "M8 22h8"
}]]];
const Nf = ["svg", t, [["path", {
  d: "M12 13v8"
}], ["path", {
  d: "M12 3v3"
}], ["path", {
  d: "M18 6a2 2 0 0 1 1.387.56l2.307 2.22a1 1 0 0 1 0 1.44l-2.307 2.22A2 2 0 0 1 18 13H6a2 2 0 0 1-1.387-.56l-2.306-2.22a1 1 0 0 1 0-1.44l2.306-2.22A2 2 0 0 1 6 6z"
}]]];
const $f = ["svg", t, [["path", {
  d: "M7 18v-6a5 5 0 1 1 10 0v6"
}], ["path", {
  d: "M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"
}], ["path", {
  d: "M21 12h1"
}], ["path", {
  d: "M18.5 4.5 18 5"
}], ["path", {
  d: "M2 12h1"
}], ["path", {
  d: "M12 2v1"
}], ["path", {
  d: "m4.929 4.929.707.707"
}], ["path", {
  d: "M12 12v6"
}]]];
const Xf = ["svg", t, [["polygon", {
  points: "19 20 9 12 19 4 19 20"
}], ["line", {
  x1: "5",
  x2: "5",
  y1: "19",
  y2: "5"
}]]];
const Yf = ["svg", t, [["polygon", {
  points: "5 4 15 12 5 20 5 4"
}], ["line", {
  x1: "19",
  x2: "19",
  y1: "5",
  y2: "19"
}]]];
const Kf = ["svg", t, [["path", {
  d: "m12.5 17-.5-1-.5 1h1z"
}], ["path", {
  d: "M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z"
}], ["circle", {
  cx: "15",
  cy: "12",
  r: "1"
}], ["circle", {
  cx: "9",
  cy: "12",
  r: "1"
}]]];
const Qf = ["svg", t, [["rect", {
  width: "3",
  height: "8",
  x: "13",
  y: "2",
  rx: "1.5"
}], ["path", {
  d: "M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5"
}], ["rect", {
  width: "3",
  height: "8",
  x: "8",
  y: "14",
  rx: "1.5"
}], ["path", {
  d: "M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5"
}], ["rect", {
  width: "8",
  height: "3",
  x: "14",
  y: "13",
  rx: "1.5"
}], ["path", {
  d: "M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5"
}], ["rect", {
  width: "8",
  height: "3",
  x: "2",
  y: "8",
  rx: "1.5"
}], ["path", {
  d: "M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5"
}]]];
const Jf = ["svg", t, [["path", {
  d: "M22 2 2 22"
}]]];
const jf = ["svg", t, [["path", {
  d: "M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"
}]]];
const tb = ["svg", t, [["line", {
  x1: "21",
  x2: "14",
  y1: "4",
  y2: "4"
}], ["line", {
  x1: "10",
  x2: "3",
  y1: "4",
  y2: "4"
}], ["line", {
  x1: "21",
  x2: "12",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "8",
  x2: "3",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "21",
  x2: "16",
  y1: "20",
  y2: "20"
}], ["line", {
  x1: "12",
  x2: "3",
  y1: "20",
  y2: "20"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "2",
  y2: "6"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "10",
  y2: "14"
}], ["line", {
  x1: "16",
  x2: "16",
  y1: "18",
  y2: "22"
}]]];
const $h = ["svg", t, [["line", {
  x1: "4",
  x2: "4",
  y1: "21",
  y2: "14"
}], ["line", {
  x1: "4",
  x2: "4",
  y1: "10",
  y2: "3"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "21",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "3"
}], ["line", {
  x1: "20",
  x2: "20",
  y1: "21",
  y2: "16"
}], ["line", {
  x1: "20",
  x2: "20",
  y1: "12",
  y2: "3"
}], ["line", {
  x1: "2",
  x2: "6",
  y1: "14",
  y2: "14"
}], ["line", {
  x1: "10",
  x2: "14",
  y1: "8",
  y2: "8"
}], ["line", {
  x1: "18",
  x2: "22",
  y1: "16",
  y2: "16"
}]]];
const ab = ["svg", t, [["rect", {
  width: "14",
  height: "20",
  x: "5",
  y: "2",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M12.667 8 10 12h4l-2.667 4"
}]]];
const eb = ["svg", t, [["rect", {
  width: "7",
  height: "12",
  x: "2",
  y: "6",
  rx: "1"
}], ["path", {
  d: "M13 8.32a7.43 7.43 0 0 1 0 7.36"
}], ["path", {
  d: "M16.46 6.21a11.76 11.76 0 0 1 0 11.58"
}], ["path", {
  d: "M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"
}]]];
const hb = ["svg", t, [["rect", {
  width: "14",
  height: "20",
  x: "5",
  y: "2",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M12 18h.01"
}]]];
const sb = ["svg", t, [["path", {
  d: "M22 11v1a10 10 0 1 1-9-10"
}], ["path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9"
}], ["path", {
  d: "M16 5h6"
}], ["path", {
  d: "M19 2v6"
}]]];
const nb = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["path", {
  d: "M8 14s1.5 2 4 2 4-2 4-2"
}], ["line", {
  x1: "9",
  x2: "9.01",
  y1: "9",
  y2: "9"
}], ["line", {
  x1: "15",
  x2: "15.01",
  y1: "9",
  y2: "9"
}]]];
const cb = ["svg", t, [["path", {
  d: "M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0"
}], ["circle", {
  cx: "10",
  cy: "13",
  r: "8"
}], ["path", {
  d: "M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6"
}], ["path", {
  d: "M18 3 19.1 5.2"
}], ["path", {
  d: "M22 3 20.9 5.2"
}]]];
const ob = ["svg", t, [["line", {
  x1: "2",
  x2: "22",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "2",
  y2: "22"
}], ["path", {
  d: "m20 16-4-4 4-4"
}], ["path", {
  d: "m4 8 4 4-4 4"
}], ["path", {
  d: "m16 4-4 4-4-4"
}], ["path", {
  d: "m8 20 4-4 4 4"
}]]];
const db = ["svg", t, [["path", {
  d: "M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3"
}], ["path", {
  d: "M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"
}], ["path", {
  d: "M4 18v2"
}], ["path", {
  d: "M20 18v2"
}], ["path", {
  d: "M12 4v9"
}]]];
const rb = ["svg", t, [["path", {
  d: "M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"
}], ["path", {
  d: "M7 21h10"
}], ["path", {
  d: "M19.5 12 22 6"
}], ["path", {
  d: "M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62"
}], ["path", {
  d: "M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62"
}], ["path", {
  d: "M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62"
}]]];
const ib = ["svg", t, [["path", {
  d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
}]]];
const pb = ["svg", t, [["path", {
  d: "M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z"
}], ["path", {
  d: "M12 18v4"
}]]];
const lb = ["svg", t, [["path", {
  d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
}]]];
const Xh = ["svg", t, [["path", {
  d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
}], ["path", {
  d: "M20 3v4"
}], ["path", {
  d: "M22 5h-4"
}], ["path", {
  d: "M4 17v2"
}], ["path", {
  d: "M5 18H3"
}]]];
const Mb = ["svg", t, [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2"
}], ["path", {
  d: "M12 6h.01"
}], ["circle", {
  cx: "12",
  cy: "14",
  r: "4"
}], ["path", {
  d: "M12 14h.01"
}]]];
const vb = ["svg", t, [["path", {
  d: "M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20"
}], ["path", {
  d: "M19.8 17.8a7.5 7.5 0 0 0 .003-10.603"
}], ["path", {
  d: "M17 15a3.5 3.5 0 0 0-.025-4.975"
}]]];
const gb = ["svg", t, [["path", {
  d: "m6 16 6-12 6 12"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1"
}]]];
const mb = ["svg", t, [["path", {
  d: "m6 16 6-12 6 12"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "m16 20 2 2 4-4"
}]]];
const yb = ["svg", t, [["circle", {
  cx: "19",
  cy: "5",
  r: "2"
}], ["circle", {
  cx: "5",
  cy: "19",
  r: "2"
}], ["path", {
  d: "M5 17A12 12 0 0 1 17 5"
}]]];
const ub = ["svg", t, [["path", {
  d: "M16 3h5v5"
}], ["path", {
  d: "M8 3H3v5"
}], ["path", {
  d: "M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"
}], ["path", {
  d: "m15 9 6-6"
}]]];
const xb = ["svg", t, [["path", {
  d: "M3 3h.01"
}], ["path", {
  d: "M7 5h.01"
}], ["path", {
  d: "M11 7h.01"
}], ["path", {
  d: "M3 7h.01"
}], ["path", {
  d: "M7 9h.01"
}], ["path", {
  d: "M3 11h.01"
}], ["rect", {
  width: "4",
  height: "4",
  x: "15",
  y: "5"
}], ["path", {
  d: "m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2"
}], ["path", {
  d: "m13 14 8-2"
}], ["path", {
  d: "m13 19 8-2"
}]]];
const fb = ["svg", t, [["path", {
  d: "M7 20h10"
}], ["path", {
  d: "M10 20c5.5-2.5.8-6.4 3-10"
}], ["path", {
  d: "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z"
}], ["path", {
  d: "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z"
}]]];
const Yh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M17 12h-2l-2 5-2-10-2 5H7"
}]]];
const Kh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m16 8-8 8"
}], ["path", {
  d: "M16 16H8V8"
}]]];
const Qh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m8 8 8 8"
}], ["path", {
  d: "M16 8v8H8"
}]]];
const Jh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 8v8"
}], ["path", {
  d: "m8 12 4 4 4-4"
}]]];
const jh = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m12 8-4 4 4 4"
}], ["path", {
  d: "M16 12H8"
}]]];
const ts = ["svg", t, [["path", {
  d: "M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6"
}], ["path", {
  d: "m3 21 9-9"
}], ["path", {
  d: "M9 21H3v-6"
}]]];
const as = ["svg", t, [["path", {
  d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
}], ["path", {
  d: "m21 21-9-9"
}], ["path", {
  d: "M21 15v6h-6"
}]]];
const es = ["svg", t, [["path", {
  d: "M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6"
}], ["path", {
  d: "m3 3 9 9"
}], ["path", {
  d: "M3 9V3h6"
}]]];
const hs = ["svg", t, [["path", {
  d: "M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
}], ["path", {
  d: "m21 3-9 9"
}], ["path", {
  d: "M15 3h6v6"
}]]];
const ss = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "m12 16 4-4-4-4"
}]]];
const ns = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M8 16V8h8"
}], ["path", {
  d: "M16 16 8 8"
}]]];
const cs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M8 8h8v8"
}], ["path", {
  d: "m8 16 8-8"
}]]];
const os = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m16 12-4-4-4 4"
}], ["path", {
  d: "M12 16V8"
}]]];
const ds = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 8v8"
}], ["path", {
  d: "m8.5 14 7-4"
}], ["path", {
  d: "m8.5 10 7 4"
}]]];
const rs = ["svg", t, [["path", {
  d: "M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2"
}], ["path", {
  d: "M10 22H8"
}], ["path", {
  d: "M16 22h-2"
}], ["circle", {
  cx: "8",
  cy: "8",
  r: "2"
}], ["path", {
  d: "M9.414 9.414 12 12"
}], ["path", {
  d: "M14.8 14.8 18 18"
}], ["circle", {
  cx: "8",
  cy: "16",
  r: "2"
}], ["path", {
  d: "m18 6-8.586 8.586"
}]]];
const Yt = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M9 8h7"
}], ["path", {
  d: "M8 12h6"
}], ["path", {
  d: "M11 16h5"
}]]];
const is = ["svg", t, [["path", {
  d: "M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5"
}], ["path", {
  d: "m9 11 3 3L22 4"
}]]];
const ps = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m9 12 2 2 4-4"
}]]];
const ls = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m16 10-4 4-4-4"
}]]];
const Ms = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m14 16-4-4 4-4"
}]]];
const vs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m10 8 4 4-4 4"
}]]];
const gs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m8 14 4-4 4 4"
}]]];
const ms = ["svg", t, [["path", {
  d: "M10 9.5 8 12l2 2.5"
}], ["path", {
  d: "m14 9.5 2 2.5-2 2.5"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}]]];
const bb = ["svg", t, [["path", {
  d: "M10 9.5 8 12l2 2.5"
}], ["path", {
  d: "M14 21h1"
}], ["path", {
  d: "m14 9.5 2 2.5-2 2.5"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
}], ["path", {
  d: "M9 21h1"
}]]];
const wb = ["svg", t, [["path", {
  d: "M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2"
}], ["path", {
  d: "M9 21h1"
}], ["path", {
  d: "M14 21h1"
}]]];
const ys = ["svg", t, [["path", {
  d: "M8 7v7"
}], ["path", {
  d: "M12 7v4"
}], ["path", {
  d: "M16 7v9"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2"
}], ["path", {
  d: "M9 3h1"
}], ["path", {
  d: "M14 3h1"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2"
}], ["path", {
  d: "M21 9v1"
}], ["path", {
  d: "M21 14v1"
}], ["path", {
  d: "M21 19a2 2 0 0 1-2 2"
}], ["path", {
  d: "M14 21h1"
}], ["path", {
  d: "M9 21h1"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2"
}], ["path", {
  d: "M3 14v1"
}], ["path", {
  d: "M3 9v1"
}]]];
const us = ["svg", t, [["path", {
  d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
}], ["path", {
  d: "M5 3a2 2 0 0 0-2 2"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2"
}], ["path", {
  d: "M9 3h1"
}], ["path", {
  d: "M9 21h2"
}], ["path", {
  d: "M14 3h1"
}], ["path", {
  d: "M3 9v1"
}], ["path", {
  d: "M21 9v2"
}], ["path", {
  d: "M3 14v1"
}]]];
const xs = ["svg", t, [["path", {
  d: "M5 3a2 2 0 0 0-2 2"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2"
}], ["path", {
  d: "M21 19a2 2 0 0 1-2 2"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2"
}], ["path", {
  d: "M9 3h1"
}], ["path", {
  d: "M9 21h1"
}], ["path", {
  d: "M14 3h1"
}], ["path", {
  d: "M14 21h1"
}], ["path", {
  d: "M3 9v1"
}], ["path", {
  d: "M21 9v1"
}], ["path", {
  d: "M3 14v1"
}], ["path", {
  d: "M21 14v1"
}]]];
const fs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "8",
  x2: "16",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "16",
  y2: "16"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "8"
}]]];
const bs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}]]];
const ws = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M7 10h10"
}], ["path", {
  d: "M7 14h10"
}]]];
const As = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3"
}], ["path", {
  d: "M9 11.2h5.7"
}]]];
const ks = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M8 7v7"
}], ["path", {
  d: "M12 7v4"
}], ["path", {
  d: "M16 7v9"
}]]];
const Hs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M7 7v10"
}], ["path", {
  d: "M11 7v10"
}], ["path", {
  d: "m15 7 2 10"
}]]];
const Ss = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M8 16V8l4 4 4-4v8"
}]]];
const Cs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M7 8h10"
}], ["path", {
  d: "M7 12h10"
}], ["path", {
  d: "M7 16h10"
}]]];
const Vs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M8 12h8"
}]]];
const Ls = ["svg", t, [["path", {
  d: "M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"
}], ["path", {
  d: "M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6"
}]]];
const Ps = ["svg", t, [["path", {
  d: "M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41"
}], ["path", {
  d: "M3 8.7V19a2 2 0 0 0 2 2h10.3"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M13 13a3 3 0 1 0 0-6H9v2"
}], ["path", {
  d: "M9 17v-2.3"
}]]];
const Ts = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M9 17V7h4a3 3 0 0 1 0 6H9"
}]]];
const nt = ["svg", t, [["path", {
  d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"
}], ["path", {
  d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"
}]]];
const Rs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m15 9-6 6"
}], ["path", {
  d: "M9 9h.01"
}], ["path", {
  d: "M15 15h.01"
}]]];
const Bs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M7 7h10"
}], ["path", {
  d: "M10 7v10"
}], ["path", {
  d: "M16 17a2 2 0 0 1-2-2V7"
}]]];
const Es = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M12 12H9.5a2.5 2.5 0 0 1 0-5H17"
}], ["path", {
  d: "M12 7v10"
}], ["path", {
  d: "M16 7v10"
}]]];
const Is = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "m9 8 6 4-6 4Z"
}]]];
const Ds = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M8 12h8"
}], ["path", {
  d: "M12 8v8"
}]]];
const zs = ["svg", t, [["path", {
  d: "M12 7v4"
}], ["path", {
  d: "M7.998 9.003a5 5 0 1 0 8-.005"
}], ["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}]]];
const Ab = ["svg", t, [["path", {
  d: "M7 12h2l2 5 2-10h4"
}], ["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}]]];
const Zs = ["svg", t, [["rect", {
  width: "20",
  height: "20",
  x: "2",
  y: "2",
  rx: "2"
}], ["circle", {
  cx: "8",
  cy: "8",
  r: "2"
}], ["path", {
  d: "M9.414 9.414 12 12"
}], ["path", {
  d: "M14.8 14.8 18 18"
}], ["circle", {
  cx: "8",
  cy: "16",
  r: "2"
}], ["path", {
  d: "m18 6-8.586 8.586"
}]]];
const Fs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M16 8.9V7H8l4 5-4 5h8v-1.9"
}]]];
const Us = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "15",
  y2: "9"
}]]];
const Ws = ["svg", t, [["path", {
  d: "M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3"
}], ["path", {
  d: "M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "4",
  y2: "20"
}]]];
const Os = ["svg", t, [["path", {
  d: "M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3"
}], ["path", {
  d: "M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "12",
  y2: "12"
}]]];
const kb = ["svg", t, [["rect", {
  x: "3",
  y: "3",
  width: "18",
  height: "18",
  rx: "2"
}], ["rect", {
  x: "8",
  y: "8",
  width: "8",
  height: "8",
  rx: "1"
}]]];
const Hb = ["svg", t, [["path", {
  d: "M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
}], ["path", {
  d: "M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
}], ["rect", {
  width: "8",
  height: "8",
  x: "14",
  y: "14",
  rx: "2"
}]]];
const qs = ["svg", t, [["path", {
  d: "m7 11 2-2-2-2"
}], ["path", {
  d: "M11 13h4"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}]]];
const _s = ["svg", t, [["path", {
  d: "M18 21a6 6 0 0 0-12 0"
}], ["circle", {
  cx: "12",
  cy: "11",
  r: "4"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}]]];
const Gs = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}], ["path", {
  d: "M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"
}]]];
const Ns = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["path", {
  d: "m15 9-6 6"
}], ["path", {
  d: "m9 9 6 6"
}]]];
const Sb = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}]]];
const Cb = ["svg", t, [["path", {
  d: "M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"
}]]];
const Vb = ["svg", t, [["path", {
  d: "M15.236 22a3 3 0 0 0-2.2-5"
}], ["path", {
  d: "M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4"
}], ["path", {
  d: "M18 13h.01"
}], ["path", {
  d: "M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10"
}]]];
const Lb = ["svg", t, [["path", {
  d: "M5 22h14"
}], ["path", {
  d: "M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z"
}], ["path", {
  d: "M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13"
}]]];
const Pb = ["svg", t, [["path", {
  d: "M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"
}]]];
const Tb = ["svg", t, [["path", {
  d: "M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43"
}], ["path", {
  d: "M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const Rb = ["svg", t, [["path", {
  d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"
}]]];
const Bb = ["svg", t, [["line", {
  x1: "18",
  x2: "18",
  y1: "20",
  y2: "4"
}], ["polygon", {
  points: "14,20 4,12 14,4"
}]]];
const Eb = ["svg", t, [["line", {
  x1: "6",
  x2: "6",
  y1: "4",
  y2: "20"
}], ["polygon", {
  points: "10,4 20,12 10,20"
}]]];
const Ib = ["svg", t, [["path", {
  d: "M11 2v2"
}], ["path", {
  d: "M5 2v2"
}], ["path", {
  d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"
}], ["path", {
  d: "M8 15a6 6 0 0 0 12 0v-3"
}], ["circle", {
  cx: "20",
  cy: "10",
  r: "2"
}]]];
const Db = ["svg", t, [["path", {
  d: "M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z"
}], ["path", {
  d: "M14 3v4a2 2 0 0 0 2 2h4"
}], ["path", {
  d: "M8 13h.01"
}], ["path", {
  d: "M16 13h.01"
}], ["path", {
  d: "M10 16s.8 1 2 1c1.3 0 2-1 2-1"
}]]];
const zb = ["svg", t, [["path", {
  d: "M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"
}], ["path", {
  d: "M15 3v4a2 2 0 0 0 2 2h4"
}]]];
const Zb = ["svg", t, [["path", {
  d: "m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"
}], ["path", {
  d: "M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"
}], ["path", {
  d: "M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"
}], ["path", {
  d: "M2 7h20"
}], ["path", {
  d: "M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"
}]]];
const Fb = ["svg", t, [["rect", {
  width: "20",
  height: "6",
  x: "2",
  y: "4",
  rx: "2"
}], ["rect", {
  width: "20",
  height: "6",
  x: "2",
  y: "14",
  rx: "2"
}]]];
const Ub = ["svg", t, [["rect", {
  width: "6",
  height: "20",
  x: "4",
  y: "2",
  rx: "2"
}], ["rect", {
  width: "6",
  height: "20",
  x: "14",
  y: "2",
  rx: "2"
}]]];
const Wb = ["svg", t, [["path", {
  d: "M16 4H9a3 3 0 0 0-2.83 4"
}], ["path", {
  d: "M14 12a4 4 0 0 1 0 8H6"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "12",
  y2: "12"
}]]];
const Ob = ["svg", t, [["path", {
  d: "m4 5 8 8"
}], ["path", {
  d: "m12 5-8 8"
}], ["path", {
  d: "M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07"
}]]];
const qb = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}], ["path", {
  d: "M12 4h.01"
}], ["path", {
  d: "M20 12h.01"
}], ["path", {
  d: "M12 20h.01"
}], ["path", {
  d: "M4 12h.01"
}], ["path", {
  d: "M17.657 6.343h.01"
}], ["path", {
  d: "M17.657 17.657h.01"
}], ["path", {
  d: "M6.343 17.657h.01"
}], ["path", {
  d: "M6.343 6.343h.01"
}]]];
const _b = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}], ["path", {
  d: "M12 3v1"
}], ["path", {
  d: "M12 20v1"
}], ["path", {
  d: "M3 12h1"
}], ["path", {
  d: "M20 12h1"
}], ["path", {
  d: "m18.364 5.636-.707.707"
}], ["path", {
  d: "m6.343 17.657-.707.707"
}], ["path", {
  d: "m5.636 5.636.707.707"
}], ["path", {
  d: "m17.657 17.657.707.707"
}]]];
const Gb = ["svg", t, [["path", {
  d: "M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"
}], ["path", {
  d: "M12 2v2"
}], ["path", {
  d: "M12 20v2"
}], ["path", {
  d: "m4.9 4.9 1.4 1.4"
}], ["path", {
  d: "m17.7 17.7 1.4 1.4"
}], ["path", {
  d: "M2 12h2"
}], ["path", {
  d: "M20 12h2"
}], ["path", {
  d: "m6.3 17.7-1.4 1.4"
}], ["path", {
  d: "m19.1 4.9-1.4 1.4"
}]]];
const Nb = ["svg", t, [["path", {
  d: "M10 9a3 3 0 1 0 0 6"
}], ["path", {
  d: "M2 12h1"
}], ["path", {
  d: "M14 21V3"
}], ["path", {
  d: "M10 4V3"
}], ["path", {
  d: "M10 21v-1"
}], ["path", {
  d: "m3.64 18.36.7-.7"
}], ["path", {
  d: "m4.34 6.34-.7-.7"
}], ["path", {
  d: "M14 12h8"
}], ["path", {
  d: "m17 4-3 3"
}], ["path", {
  d: "m14 17 3 3"
}], ["path", {
  d: "m21 15-3-3 3-3"
}]]];
const $b = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "4"
}], ["path", {
  d: "M12 2v2"
}], ["path", {
  d: "M12 20v2"
}], ["path", {
  d: "m4.93 4.93 1.41 1.41"
}], ["path", {
  d: "m17.66 17.66 1.41 1.41"
}], ["path", {
  d: "M2 12h2"
}], ["path", {
  d: "M20 12h2"
}], ["path", {
  d: "m6.34 17.66-1.41 1.41"
}], ["path", {
  d: "m19.07 4.93-1.41 1.41"
}]]];
const Xb = ["svg", t, [["path", {
  d: "M12 2v8"
}], ["path", {
  d: "m4.93 10.93 1.41 1.41"
}], ["path", {
  d: "M2 18h2"
}], ["path", {
  d: "M20 18h2"
}], ["path", {
  d: "m19.07 10.93-1.41 1.41"
}], ["path", {
  d: "M22 22H2"
}], ["path", {
  d: "m8 6 4-4 4 4"
}], ["path", {
  d: "M16 18a4 4 0 0 0-8 0"
}]]];
const Yb = ["svg", t, [["path", {
  d: "M12 10V2"
}], ["path", {
  d: "m4.93 10.93 1.41 1.41"
}], ["path", {
  d: "M2 18h2"
}], ["path", {
  d: "M20 18h2"
}], ["path", {
  d: "m19.07 10.93-1.41 1.41"
}], ["path", {
  d: "M22 22H2"
}], ["path", {
  d: "m16 6-4 4-4-4"
}], ["path", {
  d: "M16 18a4 4 0 0 0-8 0"
}]]];
const Kb = ["svg", t, [["path", {
  d: "m4 19 8-8"
}], ["path", {
  d: "m12 19-8-8"
}], ["path", {
  d: "M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06"
}]]];
const Qb = ["svg", t, [["path", {
  d: "M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z"
}], ["path", {
  d: "M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7"
}], ["path", {
  d: "M 7 17h.01"
}], ["path", {
  d: "m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8"
}]]];
const Jb = ["svg", t, [["path", {
  d: "M10 21V3h8"
}], ["path", {
  d: "M6 16h9"
}], ["path", {
  d: "M10 9.5h7"
}]]];
const jb = ["svg", t, [["path", {
  d: "M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5"
}], ["path", {
  d: "M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "3"
}], ["path", {
  d: "m18 22-3-3 3-3"
}], ["path", {
  d: "m6 2 3 3-3 3"
}]]];
const tw = ["svg", t, [["polyline", {
  points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
}], ["line", {
  x1: "13",
  x2: "19",
  y1: "19",
  y2: "13"
}], ["line", {
  x1: "16",
  x2: "20",
  y1: "16",
  y2: "20"
}], ["line", {
  x1: "19",
  x2: "21",
  y1: "21",
  y2: "19"
}]]];
const aw = ["svg", t, [["polyline", {
  points: "14.5 17.5 3 6 3 3 6 3 17.5 14.5"
}], ["line", {
  x1: "13",
  x2: "19",
  y1: "19",
  y2: "13"
}], ["line", {
  x1: "16",
  x2: "20",
  y1: "16",
  y2: "20"
}], ["line", {
  x1: "19",
  x2: "21",
  y1: "21",
  y2: "19"
}], ["polyline", {
  points: "14.5 6.5 18 3 21 3 21 6 17.5 9.5"
}], ["line", {
  x1: "5",
  x2: "9",
  y1: "14",
  y2: "18"
}], ["line", {
  x1: "7",
  x2: "4",
  y1: "17",
  y2: "20"
}], ["line", {
  x1: "3",
  x2: "5",
  y1: "19",
  y2: "21"
}]]];
const ew = ["svg", t, [["path", {
  d: "m18 2 4 4"
}], ["path", {
  d: "m17 7 3-3"
}], ["path", {
  d: "M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"
}], ["path", {
  d: "m9 11 4 4"
}], ["path", {
  d: "m5 19-3 3"
}], ["path", {
  d: "m14 4 6 6"
}]]];
const hw = ["svg", t, [["path", {
  d: "M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"
}]]];
const sw = ["svg", t, [["path", {
  d: "M12 21v-6"
}], ["path", {
  d: "M12 9V3"
}], ["path", {
  d: "M3 15h18"
}], ["path", {
  d: "M3 9h18"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}]]];
const nw = ["svg", t, [["path", {
  d: "M12 15V9"
}], ["path", {
  d: "M3 15h18"
}], ["path", {
  d: "M3 9h18"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}]]];
const cw = ["svg", t, [["path", {
  d: "M14 14v2"
}], ["path", {
  d: "M14 20v2"
}], ["path", {
  d: "M14 2v2"
}], ["path", {
  d: "M14 8v2"
}], ["path", {
  d: "M2 15h8"
}], ["path", {
  d: "M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2"
}], ["path", {
  d: "M2 9h8"
}], ["path", {
  d: "M22 15h-4"
}], ["path", {
  d: "M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2"
}], ["path", {
  d: "M22 9h-4"
}], ["path", {
  d: "M5 3v18"
}]]];
const ow = ["svg", t, [["path", {
  d: "M16 12H3"
}], ["path", {
  d: "M16 18H3"
}], ["path", {
  d: "M16 6H3"
}], ["path", {
  d: "M21 12h.01"
}], ["path", {
  d: "M21 18h.01"
}], ["path", {
  d: "M21 6h.01"
}]]];
const dw = ["svg", t, [["path", {
  d: "M15 3v18"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M21 9H3"
}], ["path", {
  d: "M21 15H3"
}]]];
const rw = ["svg", t, [["path", {
  d: "M14 10h2"
}], ["path", {
  d: "M15 22v-8"
}], ["path", {
  d: "M15 2v4"
}], ["path", {
  d: "M2 10h2"
}], ["path", {
  d: "M20 10h2"
}], ["path", {
  d: "M3 19h18"
}], ["path", {
  d: "M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6"
}], ["path", {
  d: "M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2"
}], ["path", {
  d: "M8 10h2"
}], ["path", {
  d: "M9 22v-8"
}], ["path", {
  d: "M9 2v4"
}]]];
const iw = ["svg", t, [["path", {
  d: "M12 3v18"
}], ["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 9h18"
}], ["path", {
  d: "M3 15h18"
}]]];
const pw = ["svg", t, [["rect", {
  width: "10",
  height: "14",
  x: "3",
  y: "8",
  rx: "2"
}], ["path", {
  d: "M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4"
}], ["path", {
  d: "M8 18h.01"
}]]];
const lw = ["svg", t, [["rect", {
  width: "16",
  height: "20",
  x: "4",
  y: "2",
  rx: "2",
  ry: "2"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "18",
  y2: "18"
}]]];
const Mw = ["svg", t, [["circle", {
  cx: "7",
  cy: "7",
  r: "5"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "5"
}], ["path", {
  d: "M12 17h10"
}], ["path", {
  d: "m3.46 10.54 7.08-7.08"
}]]];
const vw = ["svg", t, [["path", {
  d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"
}], ["circle", {
  cx: "7.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor"
}]]];
const gw = ["svg", t, [["path", {
  d: "m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19"
}], ["path", {
  d: "M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z"
}], ["circle", {
  cx: "6.5",
  cy: "9.5",
  r: ".5",
  fill: "currentColor"
}]]];
const mw = ["svg", t, [["path", {
  d: "M4 4v16"
}]]];
const yw = ["svg", t, [["path", {
  d: "M4 4v16"
}], ["path", {
  d: "M9 4v16"
}]]];
const uw = ["svg", t, [["path", {
  d: "M4 4v16"
}], ["path", {
  d: "M9 4v16"
}], ["path", {
  d: "M14 4v16"
}]]];
const xw = ["svg", t, [["path", {
  d: "M4 4v16"
}], ["path", {
  d: "M9 4v16"
}], ["path", {
  d: "M14 4v16"
}], ["path", {
  d: "M19 4v16"
}]]];
const fw = ["svg", t, [["path", {
  d: "M4 4v16"
}], ["path", {
  d: "M9 4v16"
}], ["path", {
  d: "M14 4v16"
}], ["path", {
  d: "M19 4v16"
}], ["path", {
  d: "M22 6 2 18"
}]]];
const bw = ["svg", t, [["circle", {
  cx: "17",
  cy: "4",
  r: "2"
}], ["path", {
  d: "M15.59 5.41 5.41 15.59"
}], ["circle", {
  cx: "4",
  cy: "17",
  r: "2"
}], ["path", {
  d: "M12 22s-4-9-1.5-11.5S22 12 22 12"
}]]];
const ww = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "6"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}]]];
const Aw = ["svg", t, [["path", {
  d: "m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44"
}], ["path", {
  d: "m13.56 11.747 4.332-.924"
}], ["path", {
  d: "m16 21-3.105-6.21"
}], ["path", {
  d: "M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z"
}], ["path", {
  d: "m6.158 8.633 1.114 4.456"
}], ["path", {
  d: "m8 21 3.105-6.21"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "2"
}]]];
const kw = ["svg", t, [["circle", {
  cx: "4",
  cy: "4",
  r: "2"
}], ["path", {
  d: "m14 5 3-3 3 3"
}], ["path", {
  d: "m14 10 3-3 3 3"
}], ["path", {
  d: "M17 14V2"
}], ["path", {
  d: "M17 14H7l-5 8h20Z"
}], ["path", {
  d: "M8 14v8"
}], ["path", {
  d: "m9 14 5 8"
}]]];
const Hw = ["svg", t, [["path", {
  d: "M3.5 21 14 3"
}], ["path", {
  d: "M20.5 21 10 3"
}], ["path", {
  d: "M15.5 21 12 15l-3.5 6"
}], ["path", {
  d: "M2 21h20"
}]]];
const Sw = ["svg", t, [["polyline", {
  points: "4 17 10 11 4 5"
}], ["line", {
  x1: "12",
  x2: "20",
  y1: "19",
  y2: "19"
}]]];
const $s = ["svg", t, [["path", {
  d: "M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3"
}], ["path", {
  d: "m16 2 6 6"
}], ["path", {
  d: "M12 16H4"
}]]];
const Cw = ["svg", t, [["path", {
  d: "M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"
}], ["path", {
  d: "M8.5 2h7"
}], ["path", {
  d: "M14.5 16h-5"
}]]];
const Vw = ["svg", t, [["path", {
  d: "M9 2v17.5A2.5 2.5 0 0 1 6.5 22A2.5 2.5 0 0 1 4 19.5V2"
}], ["path", {
  d: "M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5a2.5 2.5 0 0 1-2.5-2.5V2"
}], ["path", {
  d: "M3 2h7"
}], ["path", {
  d: "M14 2h7"
}], ["path", {
  d: "M9 16H4"
}], ["path", {
  d: "M20 16h-5"
}]]];
const Lw = ["svg", t, [["path", {
  d: "M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"
}], ["path", {
  d: "M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"
}], ["path", {
  d: "M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"
}], ["path", {
  d: "M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"
}], ["path", {
  d: "M9 7v10"
}]]];
const Pw = ["svg", t, [["path", {
  d: "M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"
}], ["path", {
  d: "M7 22h1a4 4 0 0 0 4-4v-1"
}], ["path", {
  d: "M7 2h1a4 4 0 0 1 4 4v1"
}]]];
const Tw = ["svg", t, [["path", {
  d: "M17 6H3"
}], ["path", {
  d: "M21 12H8"
}], ["path", {
  d: "M21 18H8"
}], ["path", {
  d: "M3 12v6"
}]]];
const Rw = ["svg", t, [["path", {
  d: "M21 6H3"
}], ["path", {
  d: "M10 12H3"
}], ["path", {
  d: "M10 18H3"
}], ["circle", {
  cx: "17",
  cy: "15",
  r: "3"
}], ["path", {
  d: "m21 19-1.9-1.9"
}]]];
const Xs = ["svg", t, [["path", {
  d: "M5 3a2 2 0 0 0-2 2"
}], ["path", {
  d: "M19 3a2 2 0 0 1 2 2"
}], ["path", {
  d: "M21 19a2 2 0 0 1-2 2"
}], ["path", {
  d: "M5 21a2 2 0 0 1-2-2"
}], ["path", {
  d: "M9 3h1"
}], ["path", {
  d: "M9 21h1"
}], ["path", {
  d: "M14 3h1"
}], ["path", {
  d: "M14 21h1"
}], ["path", {
  d: "M3 9v1"
}], ["path", {
  d: "M21 9v1"
}], ["path", {
  d: "M3 14v1"
}], ["path", {
  d: "M21 14v1"
}], ["line", {
  x1: "7",
  x2: "15",
  y1: "8",
  y2: "8"
}], ["line", {
  x1: "7",
  x2: "17",
  y1: "12",
  y2: "12"
}], ["line", {
  x1: "7",
  x2: "13",
  y1: "16",
  y2: "16"
}]]];
const Bw = ["svg", t, [["path", {
  d: "M17 6.1H3"
}], ["path", {
  d: "M21 12.1H3"
}], ["path", {
  d: "M15.1 18H3"
}]]];
const Ew = ["svg", t, [["path", {
  d: "M2 10s3-3 3-8"
}], ["path", {
  d: "M22 10s-3-3-3-8"
}], ["path", {
  d: "M10 2c0 4.4-3.6 8-8 8"
}], ["path", {
  d: "M14 2c0 4.4 3.6 8 8 8"
}], ["path", {
  d: "M2 10s2 2 2 5"
}], ["path", {
  d: "M22 10s-2 2-2 5"
}], ["path", {
  d: "M8 15h8"
}], ["path", {
  d: "M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
}], ["path", {
  d: "M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"
}]]];
const Iw = ["svg", t, [["path", {
  d: "M2 12h10"
}], ["path", {
  d: "M9 4v16"
}], ["path", {
  d: "m3 9 3 3-3 3"
}], ["path", {
  d: "M12 6 9 9 6 6"
}], ["path", {
  d: "m6 18 3-3 1.5 1.5"
}], ["path", {
  d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
}]]];
const Dw = ["svg", t, [["path", {
  d: "M12 9a4 4 0 0 0-2 7.5"
}], ["path", {
  d: "M12 3v2"
}], ["path", {
  d: "m6.6 18.4-1.4 1.4"
}], ["path", {
  d: "M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
}], ["path", {
  d: "M4 13H2"
}], ["path", {
  d: "M6.34 7.34 4.93 5.93"
}]]];
const zw = ["svg", t, [["path", {
  d: "M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"
}]]];
const Zw = ["svg", t, [["path", {
  d: "M17 14V2"
}], ["path", {
  d: "M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z"
}]]];
const Fw = ["svg", t, [["path", {
  d: "M7 10v12"
}], ["path", {
  d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"
}]]];
const Uw = ["svg", t, [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
}], ["path", {
  d: "m9 12 2 2 4-4"
}]]];
const Ww = ["svg", t, [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
}], ["path", {
  d: "M9 12h6"
}]]];
const Ow = ["svg", t, [["path", {
  d: "M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
}], ["path", {
  d: "M9 9h.01"
}], ["path", {
  d: "m15 9-6 6"
}], ["path", {
  d: "M15 15h.01"
}]]];
const qw = ["svg", t, [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
}], ["path", {
  d: "M9 12h6"
}], ["path", {
  d: "M12 9v6"
}]]];
const _w = ["svg", t, [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
}], ["path", {
  d: "m9.5 14.5 5-5"
}]]];
const Gw = ["svg", t, [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
}], ["path", {
  d: "m9.5 14.5 5-5"
}], ["path", {
  d: "m9.5 9.5 5 5"
}]]];
const Nw = ["svg", t, [["path", {
  d: "M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"
}], ["path", {
  d: "M13 5v2"
}], ["path", {
  d: "M13 17v2"
}], ["path", {
  d: "M13 11v2"
}]]];
const $w = ["svg", t, [["path", {
  d: "M10.5 17h1.227a2 2 0 0 0 1.345-.52L18 12"
}], ["path", {
  d: "m12 13.5 3.75.5"
}], ["path", {
  d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"
}], ["path", {
  d: "M6 10V8"
}], ["path", {
  d: "M6 14v1"
}], ["path", {
  d: "M6 19v2"
}], ["rect", {
  x: "2",
  y: "8",
  width: "20",
  height: "13",
  rx: "2"
}]]];
const Xw = ["svg", t, [["path", {
  d: "m4.5 8 10.58-5.06a1 1 0 0 1 1.342.488L18.5 8"
}], ["path", {
  d: "M6 10V8"
}], ["path", {
  d: "M6 14v1"
}], ["path", {
  d: "M6 19v2"
}], ["rect", {
  x: "2",
  y: "8",
  width: "20",
  height: "13",
  rx: "2"
}]]];
const Yw = ["svg", t, [["path", {
  d: "M10 2h4"
}], ["path", {
  d: "M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7"
}], ["path", {
  d: "M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M12 12v-2"
}]]];
const Kw = ["svg", t, [["path", {
  d: "M10 2h4"
}], ["path", {
  d: "M12 14v-4"
}], ["path", {
  d: "M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6"
}], ["path", {
  d: "M9 17H4v5"
}]]];
const Qw = ["svg", t, [["line", {
  x1: "10",
  x2: "14",
  y1: "2",
  y2: "2"
}], ["line", {
  x1: "12",
  x2: "15",
  y1: "14",
  y2: "11"
}], ["circle", {
  cx: "12",
  cy: "14",
  r: "8"
}]]];
const Jw = ["svg", t, [["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "6",
  ry: "6"
}], ["circle", {
  cx: "8",
  cy: "12",
  r: "2"
}]]];
const jw = ["svg", t, [["rect", {
  width: "20",
  height: "12",
  x: "2",
  y: "6",
  rx: "6",
  ry: "6"
}], ["circle", {
  cx: "16",
  cy: "12",
  r: "2"
}]]];
const tA = ["svg", t, [["path", {
  d: "M7 12h13a1 1 0 0 1 1 1 5 5 0 0 1-5 5h-.598a.5.5 0 0 0-.424.765l1.544 2.47a.5.5 0 0 1-.424.765H5.402a.5.5 0 0 1-.424-.765L7 18"
}], ["path", {
  d: "M8 18a5 5 0 0 1-5-5V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8"
}]]];
const aA = ["svg", t, [["path", {
  d: "M21 4H3"
}], ["path", {
  d: "M18 8H6"
}], ["path", {
  d: "M19 12H9"
}], ["path", {
  d: "M16 16h-6"
}], ["path", {
  d: "M11 20H9"
}]]];
const eA = ["svg", t, [["ellipse", {
  cx: "12",
  cy: "11",
  rx: "3",
  ry: "2"
}], ["ellipse", {
  cx: "12",
  cy: "12.5",
  rx: "10",
  ry: "8.5"
}]]];
const hA = ["svg", t, [["path", {
  d: "M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16"
}], ["path", {
  d: "M2 14h12"
}], ["path", {
  d: "M22 14h-2"
}], ["path", {
  d: "M12 20v-6"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "M22 16V6a2 2 0 0 0-2-2H10"
}]]];
const sA = ["svg", t, [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M2 14h20"
}], ["path", {
  d: "M12 20v-6"
}]]];
const nA = ["svg", t, [["path", {
  d: "M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z"
}], ["path", {
  d: "M8 13v9"
}], ["path", {
  d: "M16 22v-9"
}], ["path", {
  d: "m9 6 1 7"
}], ["path", {
  d: "m15 6-1 7"
}], ["path", {
  d: "M12 6V2"
}], ["path", {
  d: "M13 2h-2"
}]]];
const cA = ["svg", t, [["rect", {
  width: "18",
  height: "12",
  x: "3",
  y: "8",
  rx: "1"
}], ["path", {
  d: "M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3"
}], ["path", {
  d: "M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3"
}]]];
const oA = ["svg", t, [["path", {
  d: "m10 11 11 .9a1 1 0 0 1 .8 1.1l-.665 4.158a1 1 0 0 1-.988.842H20"
}], ["path", {
  d: "M16 18h-5"
}], ["path", {
  d: "M18 5a1 1 0 0 0-1 1v5.573"
}], ["path", {
  d: "M3 4h8.129a1 1 0 0 1 .99.863L13 11.246"
}], ["path", {
  d: "M4 11V4"
}], ["path", {
  d: "M7 15h.01"
}], ["path", {
  d: "M8 10.1V4"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "2"
}], ["circle", {
  cx: "7",
  cy: "15",
  r: "5"
}]]];
const dA = ["svg", t, [["path", {
  d: "M9.3 6.2a4.55 4.55 0 0 0 5.4 0"
}], ["path", {
  d: "M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"
}], ["path", {
  d: "M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z"
}], ["path", {
  d: "m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8"
}]]];
const rA = ["svg", t, [["path", {
  d: "M2 22V12a10 10 0 1 1 20 0v10"
}], ["path", {
  d: "M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8"
}], ["path", {
  d: "M10 15h.01"
}], ["path", {
  d: "M14 15h.01"
}], ["path", {
  d: "M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z"
}], ["path", {
  d: "m9 19-2 3"
}], ["path", {
  d: "m15 19 2 3"
}]]];
const iA = ["svg", t, [["path", {
  d: "M8 3.1V7a4 4 0 0 0 8 0V3.1"
}], ["path", {
  d: "m9 15-1-1"
}], ["path", {
  d: "m15 15 1-1"
}], ["path", {
  d: "M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z"
}], ["path", {
  d: "m8 19-2 3"
}], ["path", {
  d: "m16 19 2 3"
}]]];
const pA = ["svg", t, [["path", {
  d: "M2 17 17 2"
}], ["path", {
  d: "m2 14 8 8"
}], ["path", {
  d: "m5 11 8 8"
}], ["path", {
  d: "m8 8 8 8"
}], ["path", {
  d: "m11 5 8 8"
}], ["path", {
  d: "m14 2 8 8"
}], ["path", {
  d: "M7 22 22 7"
}]]];
const Ys = ["svg", t, [["rect", {
  width: "16",
  height: "16",
  x: "4",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M4 11h16"
}], ["path", {
  d: "M12 3v8"
}], ["path", {
  d: "m8 19-2 3"
}], ["path", {
  d: "m18 22-2-3"
}], ["path", {
  d: "M8 15h.01"
}], ["path", {
  d: "M16 15h.01"
}]]];
const lA = ["svg", t, [["path", {
  d: "M3 6h18"
}], ["path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
}], ["path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
}], ["line", {
  x1: "10",
  x2: "10",
  y1: "11",
  y2: "17"
}], ["line", {
  x1: "14",
  x2: "14",
  y1: "11",
  y2: "17"
}]]];
const MA = ["svg", t, [["path", {
  d: "M3 6h18"
}], ["path", {
  d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"
}], ["path", {
  d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"
}]]];
const vA = ["svg", t, [["path", {
  d: "M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z"
}], ["path", {
  d: "M12 19v3"
}]]];
const Ks = ["svg", t, [["path", {
  d: "M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"
}], ["path", {
  d: "M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"
}], ["path", {
  d: "M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"
}], ["path", {
  d: "M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"
}]]];
const gA = ["svg", t, [["path", {
  d: "m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"
}], ["path", {
  d: "M12 22v-3"
}]]];
const mA = ["svg", t, [["path", {
  d: "M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"
}], ["path", {
  d: "M7 16v6"
}], ["path", {
  d: "M13 19v3"
}], ["path", {
  d: "M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"
}]]];
const yA = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2",
  ry: "2"
}], ["rect", {
  width: "3",
  height: "9",
  x: "7",
  y: "7"
}], ["rect", {
  width: "3",
  height: "5",
  x: "14",
  y: "7"
}]]];
const uA = ["svg", t, [["polyline", {
  points: "22 17 13.5 8.5 8.5 13.5 2 7"
}], ["polyline", {
  points: "16 17 22 17 22 11"
}]]];
const xA = ["svg", t, [["path", {
  d: "M14.828 14.828 21 21"
}], ["path", {
  d: "M21 16v5h-5"
}], ["path", {
  d: "m21 3-9 9-4-4-6 6"
}], ["path", {
  d: "M21 8V3h-5"
}]]];
const fA = ["svg", t, [["polyline", {
  points: "22 7 13.5 15.5 8.5 10.5 2 17"
}], ["polyline", {
  points: "16 7 22 7 22 13"
}]]];
const Qs = ["svg", t, [["path", {
  d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
}], ["path", {
  d: "M12 9v4"
}], ["path", {
  d: "M12 17h.01"
}]]];
const bA = ["svg", t, [["path", {
  d: "M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z"
}]]];
const wA = ["svg", t, [["path", {
  d: "M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"
}]]];
const AA = ["svg", t, [["path", {
  d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6"
}], ["path", {
  d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18"
}], ["path", {
  d: "M4 22h16"
}], ["path", {
  d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"
}], ["path", {
  d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"
}], ["path", {
  d: "M18 2H6v7a6 6 0 0 0 12 0V2Z"
}]]];
const kA = ["svg", t, [["path", {
  d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"
}], ["path", {
  d: "M15 18H9"
}], ["path", {
  d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"
}], ["circle", {
  cx: "17",
  cy: "18",
  r: "2"
}], ["circle", {
  cx: "7",
  cy: "18",
  r: "2"
}]]];
const HA = ["svg", t, [["path", {
  d: "m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z"
}], ["path", {
  d: "M4.82 7.9 8 10"
}], ["path", {
  d: "M15.18 7.9 12 10"
}], ["path", {
  d: "M16.93 10H20a2 2 0 0 1 0 4H2"
}]]];
const SA = ["svg", t, [["path", {
  d: "M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z"
}], ["path", {
  d: "M7 21h10"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2"
}]]];
const Js = ["svg", t, [["path", {
  d: "M7 21h10"
}], ["rect", {
  width: "20",
  height: "14",
  x: "2",
  y: "3",
  rx: "2"
}]]];
const CA = ["svg", t, [["rect", {
  width: "20",
  height: "15",
  x: "2",
  y: "7",
  rx: "2",
  ry: "2"
}], ["polyline", {
  points: "17 2 12 7 7 2"
}]]];
const VA = ["svg", t, [["path", {
  d: "M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"
}]]];
const LA = ["svg", t, [["path", {
  d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
}]]];
const PA = ["svg", t, [["path", {
  d: "M14 16.5a.5.5 0 0 0 .5.5h.5a2 2 0 0 1 0 4H9a2 2 0 0 1 0-4h.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V8a2 2 0 0 1-4 0V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v3a2 2 0 0 1-4 0v-.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5Z"
}]]];
const TA = ["svg", t, [["polyline", {
  points: "4 7 4 4 20 4 20 7"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "20",
  y2: "20"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "4",
  y2: "20"
}]]];
const RA = ["svg", t, [["path", {
  d: "M12 2v1"
}], ["path", {
  d: "M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575"
}], ["path", {
  d: "M17.5 12H22A10 10 0 0 0 9.004 3.455"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const BA = ["svg", t, [["path", {
  d: "M22 12a10.06 10.06 1 0 0-20 0Z"
}], ["path", {
  d: "M12 12v8a2 2 0 0 0 4 0"
}], ["path", {
  d: "M12 2v1"
}]]];
const EA = ["svg", t, [["path", {
  d: "M6 4v6a6 6 0 0 0 12 0V4"
}], ["line", {
  x1: "4",
  x2: "20",
  y1: "20",
  y2: "20"
}]]];
const IA = ["svg", t, [["path", {
  d: "M9 14 4 9l5-5"
}], ["path", {
  d: "M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"
}]]];
const DA = ["svg", t, [["path", {
  d: "M21 17a9 9 0 0 0-15-6.7L3 13"
}], ["path", {
  d: "M3 7v6h6"
}], ["circle", {
  cx: "12",
  cy: "17",
  r: "1"
}]]];
const zA = ["svg", t, [["path", {
  d: "M3 7v6h6"
}], ["path", {
  d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"
}]]];
const ZA = ["svg", t, [["path", {
  d: "M16 12h6"
}], ["path", {
  d: "M8 12H2"
}], ["path", {
  d: "M12 2v2"
}], ["path", {
  d: "M12 8v2"
}], ["path", {
  d: "M12 14v2"
}], ["path", {
  d: "M12 20v2"
}], ["path", {
  d: "m19 15 3-3-3-3"
}], ["path", {
  d: "m5 9-3 3 3 3"
}]]];
const FA = ["svg", t, [["path", {
  d: "M12 22v-6"
}], ["path", {
  d: "M12 8V2"
}], ["path", {
  d: "M4 12H2"
}], ["path", {
  d: "M10 12H8"
}], ["path", {
  d: "M16 12h-2"
}], ["path", {
  d: "M22 12h-2"
}], ["path", {
  d: "m15 19-3 3-3-3"
}], ["path", {
  d: "m15 5-3-3-3 3"
}]]];
const UA = ["svg", t, [["rect", {
  width: "8",
  height: "6",
  x: "5",
  y: "4",
  rx: "1"
}], ["rect", {
  width: "8",
  height: "6",
  x: "11",
  y: "14",
  rx: "1"
}]]];
const js = ["svg", t, [["circle", {
  cx: "12",
  cy: "10",
  r: "1"
}], ["path", {
  d: "M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
}], ["path", {
  d: "M6 17v.01"
}], ["path", {
  d: "M6 13v.01"
}], ["path", {
  d: "M18 17v.01"
}], ["path", {
  d: "M18 13v.01"
}], ["path", {
  d: "M14 22v-5a2 2 0 0 0-2-2a2 2 0 0 0-2 2v5"
}]]];
const WA = ["svg", t, [["path", {
  d: "M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2"
}]]];
const OA = ["svg", t, [["path", {
  d: "m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"
}], ["path", {
  d: "m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"
}], ["line", {
  x1: "8",
  x2: "8",
  y1: "2",
  y2: "5"
}], ["line", {
  x1: "2",
  x2: "5",
  y1: "8",
  y2: "8"
}], ["line", {
  x1: "16",
  x2: "16",
  y1: "19",
  y2: "22"
}], ["line", {
  x1: "19",
  x2: "22",
  y1: "16",
  y2: "16"
}]]];
const qA = ["svg", t, [["path", {
  d: "m19 5 3-3"
}], ["path", {
  d: "m2 22 3-3"
}], ["path", {
  d: "M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z"
}], ["path", {
  d: "M7.5 13.5 10 11"
}], ["path", {
  d: "M10.5 16.5 13 14"
}], ["path", {
  d: "m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z"
}]]];
const _A = ["svg", t, [["path", {
  d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
}], ["polyline", {
  points: "17 8 12 3 7 8"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "3",
  y2: "15"
}]]];
const GA = ["svg", t, [["circle", {
  cx: "10",
  cy: "7",
  r: "1"
}], ["circle", {
  cx: "4",
  cy: "20",
  r: "1"
}], ["path", {
  d: "M4.7 19.3 19 5"
}], ["path", {
  d: "m21 3-3 1 2 2Z"
}], ["path", {
  d: "M9.26 7.68 5 12l2 5"
}], ["path", {
  d: "m10 14 5 2 3.5-3.5"
}], ["path", {
  d: "m18 12 1-1 1 1-1 1Z"
}]]];
const NA = ["svg", t, [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4"
}], ["polyline", {
  points: "16 11 18 13 22 9"
}]]];
const $A = ["svg", t, [["circle", {
  cx: "18",
  cy: "15",
  r: "3"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4"
}], ["path", {
  d: "M10 15H6a4 4 0 0 0-4 4v2"
}], ["path", {
  d: "m21.7 16.4-.9-.3"
}], ["path", {
  d: "m15.2 13.9-.9-.3"
}], ["path", {
  d: "m16.6 18.7.3-.9"
}], ["path", {
  d: "m19.1 12.2.3-.9"
}], ["path", {
  d: "m19.6 18.7-.4-1"
}], ["path", {
  d: "m16.8 12.3-.4-1"
}], ["path", {
  d: "m14.3 16.6 1-.4"
}], ["path", {
  d: "m20.7 13.8 1-.4"
}]]];
const XA = ["svg", t, [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4"
}], ["line", {
  x1: "22",
  x2: "16",
  y1: "11",
  y2: "11"
}]]];
const YA = ["svg", t, [["path", {
  d: "M11.5 15H7a4 4 0 0 0-4 4v2"
}], ["path", {
  d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
}], ["circle", {
  cx: "10",
  cy: "7",
  r: "4"
}]]];
const KA = ["svg", t, [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4"
}], ["line", {
  x1: "19",
  x2: "19",
  y1: "8",
  y2: "14"
}], ["line", {
  x1: "22",
  x2: "16",
  y1: "11",
  y2: "11"
}]]];
const tn = ["svg", t, [["path", {
  d: "M2 21a8 8 0 0 1 13.292-6"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5"
}], ["path", {
  d: "m16 19 2 2 4-4"
}]]];
const an = ["svg", t, [["path", {
  d: "M2 21a8 8 0 0 1 10.434-7.62"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}], ["path", {
  d: "m19.5 14.3-.4.9"
}], ["path", {
  d: "m16.9 20.8-.4.9"
}], ["path", {
  d: "m21.7 19.5-.9-.4"
}], ["path", {
  d: "m15.2 16.9-.9-.4"
}], ["path", {
  d: "m21.7 16.5-.9.4"
}], ["path", {
  d: "m15.2 19.1-.9.4"
}], ["path", {
  d: "m19.5 21.7-.4-.9"
}], ["path", {
  d: "m16.9 15.2-.4-.9"
}]]];
const en = ["svg", t, [["path", {
  d: "M2 21a8 8 0 0 1 13.292-6"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5"
}], ["path", {
  d: "M22 19h-6"
}]]];
const QA = ["svg", t, [["path", {
  d: "M2 21a8 8 0 0 1 10.821-7.487"
}], ["path", {
  d: "M21.378 16.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5"
}]]];
const hn = ["svg", t, [["path", {
  d: "M2 21a8 8 0 0 1 13.292-6"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5"
}], ["path", {
  d: "M19 16v6"
}], ["path", {
  d: "M22 19h-6"
}]]];
const JA = ["svg", t, [["circle", {
  cx: "10",
  cy: "8",
  r: "5"
}], ["path", {
  d: "M2 21a8 8 0 0 1 10.434-7.62"
}], ["circle", {
  cx: "18",
  cy: "18",
  r: "3"
}], ["path", {
  d: "m22 22-1.9-1.9"
}]]];
const sn = ["svg", t, [["path", {
  d: "M2 21a8 8 0 0 1 11.873-7"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5"
}], ["path", {
  d: "m17 17 5 5"
}], ["path", {
  d: "m22 17-5 5"
}]]];
const nn = ["svg", t, [["circle", {
  cx: "12",
  cy: "8",
  r: "5"
}], ["path", {
  d: "M20 21a8 8 0 0 0-16 0"
}]]];
const jA = ["svg", t, [["circle", {
  cx: "10",
  cy: "7",
  r: "4"
}], ["path", {
  d: "M10.3 15H7a4 4 0 0 0-4 4v2"
}], ["circle", {
  cx: "17",
  cy: "17",
  r: "3"
}], ["path", {
  d: "m21 21-1.9-1.9"
}]]];
const tk = ["svg", t, [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4"
}], ["line", {
  x1: "17",
  x2: "22",
  y1: "8",
  y2: "13"
}], ["line", {
  x1: "22",
  x2: "17",
  y1: "8",
  y2: "13"
}]]];
const ak = ["svg", t, [["path", {
  d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
}], ["circle", {
  cx: "12",
  cy: "7",
  r: "4"
}]]];
const cn = ["svg", t, [["path", {
  d: "M18 21a8 8 0 0 0-16 0"
}], ["circle", {
  cx: "10",
  cy: "8",
  r: "5"
}], ["path", {
  d: "M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"
}]]];
const ek = ["svg", t, [["path", {
  d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
}], ["circle", {
  cx: "9",
  cy: "7",
  r: "4"
}], ["path", {
  d: "M22 21v-2a4 4 0 0 0-3-3.87"
}], ["path", {
  d: "M16 3.13a4 4 0 0 1 0 7.75"
}]]];
const on = ["svg", t, [["path", {
  d: "m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8"
}], ["path", {
  d: "M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"
}], ["path", {
  d: "m2.1 21.8 6.4-6.3"
}], ["path", {
  d: "m19 5-7 7"
}]]];
const dn = ["svg", t, [["path", {
  d: "M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"
}], ["path", {
  d: "M7 2v20"
}], ["path", {
  d: "M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
}]]];
const hk = ["svg", t, [["path", {
  d: "M12 2v20"
}], ["path", {
  d: "M2 5h20"
}], ["path", {
  d: "M3 3v2"
}], ["path", {
  d: "M7 3v2"
}], ["path", {
  d: "M17 3v2"
}], ["path", {
  d: "M21 3v2"
}], ["path", {
  d: "m19 5-7 7-7-7"
}]]];
const sk = ["svg", t, [["path", {
  d: "M8 21s-4-3-4-9 4-9 4-9"
}], ["path", {
  d: "M16 3s4 3 4 9-4 9-4 9"
}], ["line", {
  x1: "15",
  x2: "9",
  y1: "9",
  y2: "15"
}], ["line", {
  x1: "9",
  x2: "15",
  y1: "9",
  y2: "15"
}]]];
const nk = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["circle", {
  cx: "7.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor"
}], ["path", {
  d: "m7.9 7.9 2.7 2.7"
}], ["circle", {
  cx: "16.5",
  cy: "7.5",
  r: ".5",
  fill: "currentColor"
}], ["path", {
  d: "m13.4 10.6 2.7-2.7"
}], ["circle", {
  cx: "7.5",
  cy: "16.5",
  r: ".5",
  fill: "currentColor"
}], ["path", {
  d: "m7.9 16.1 2.7-2.7"
}], ["circle", {
  cx: "16.5",
  cy: "16.5",
  r: ".5",
  fill: "currentColor"
}], ["path", {
  d: "m13.4 13.4 2.7 2.7"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "2"
}]]];
const ck = ["svg", t, [["path", {
  d: "M16 8q6 0 6-6-6 0-6 6"
}], ["path", {
  d: "M17.41 3.59a10 10 0 1 0 3 3"
}], ["path", {
  d: "M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14"
}]]];
const ok = ["svg", t, [["path", {
  d: "M18 11c-1.5 0-2.5.5-3 2"
}], ["path", {
  d: "M4 6a2 2 0 0 0-2 2v4a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V8a2 2 0 0 0-2-2h-3a8 8 0 0 0-5 2 8 8 0 0 0-5-2z"
}], ["path", {
  d: "M6 11c1.5 0 2.5.5 3 2"
}]]];
const dk = ["svg", t, [["path", {
  d: "m2 8 2 2-2 2 2 2-2 2"
}], ["path", {
  d: "m22 8-2 2 2 2-2 2 2 2"
}], ["path", {
  d: "M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2"
}], ["path", {
  d: "M16 10.34V6c0-.55-.45-1-1-1h-4.34"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const rk = ["svg", t, [["path", {
  d: "m2 8 2 2-2 2 2 2-2 2"
}], ["path", {
  d: "m22 8-2 2 2 2-2 2 2 2"
}], ["rect", {
  width: "8",
  height: "14",
  x: "8",
  y: "5",
  rx: "1"
}]]];
const ik = ["svg", t, [["path", {
  d: "M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196"
}], ["path", {
  d: "M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const pk = ["svg", t, [["path", {
  d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"
}], ["rect", {
  x: "2",
  y: "6",
  width: "14",
  height: "12",
  rx: "2"
}]]];
const lk = ["svg", t, [["rect", {
  width: "20",
  height: "16",
  x: "2",
  y: "4",
  rx: "2"
}], ["path", {
  d: "M2 8h20"
}], ["circle", {
  cx: "8",
  cy: "14",
  r: "2"
}], ["path", {
  d: "M8 12h8"
}], ["circle", {
  cx: "16",
  cy: "14",
  r: "2"
}]]];
const Mk = ["svg", t, [["path", {
  d: "M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2"
}], ["path", {
  d: "M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "1"
}], ["path", {
  d: "M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"
}]]];
const vk = ["svg", t, [["circle", {
  cx: "6",
  cy: "12",
  r: "4"
}], ["circle", {
  cx: "18",
  cy: "12",
  r: "4"
}], ["line", {
  x1: "6",
  x2: "18",
  y1: "16",
  y2: "16"
}]]];
const gk = ["svg", t, [["path", {
  d: "M11.1 7.1a16.55 16.55 0 0 1 10.9 4"
}], ["path", {
  d: "M12 12a12.6 12.6 0 0 1-8.7 5"
}], ["path", {
  d: "M16.8 13.6a16.55 16.55 0 0 1-9 7.5"
}], ["path", {
  d: "M20.7 17a12.8 12.8 0 0 0-8.7-5 13.3 13.3 0 0 1 0-10"
}], ["path", {
  d: "M6.3 3.8a16.55 16.55 0 0 0 1.9 11.5"
}], ["circle", {
  cx: "12",
  cy: "12",
  r: "10"
}]]];
const mk = ["svg", t, [["path", {
  d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
}], ["path", {
  d: "M16 9a5 5 0 0 1 0 6"
}]]];
const yk = ["svg", t, [["path", {
  d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
}], ["path", {
  d: "M16 9a5 5 0 0 1 0 6"
}], ["path", {
  d: "M19.364 18.364a9 9 0 0 0 0-12.728"
}]]];
const uk = ["svg", t, [["path", {
  d: "M16 9a5 5 0 0 1 .95 2.293"
}], ["path", {
  d: "M19.364 5.636a9 9 0 0 1 1.889 9.96"
}], ["path", {
  d: "m2 2 20 20"
}], ["path", {
  d: "m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11"
}], ["path", {
  d: "M9.828 4.172A.686.686 0 0 1 11 4.657v.686"
}]]];
const xk = ["svg", t, [["path", {
  d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
}], ["line", {
  x1: "22",
  x2: "16",
  y1: "9",
  y2: "15"
}], ["line", {
  x1: "16",
  x2: "22",
  y1: "9",
  y2: "15"
}]]];
const fk = ["svg", t, [["path", {
  d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"
}]]];
const bk = ["svg", t, [["path", {
  d: "m9 12 2 2 4-4"
}], ["path", {
  d: "M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z"
}], ["path", {
  d: "M22 19H2"
}]]];
const wk = ["svg", t, [["rect", {
  width: "18",
  height: "18",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2"
}], ["path", {
  d: "M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21"
}]]];
const rn = ["svg", t, [["path", {
  d: "M17 14h.01"
}], ["path", {
  d: "M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14"
}]]];
const Ak = ["svg", t, [["path", {
  d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
}], ["path", {
  d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"
}]]];
const kk = ["svg", t, [["circle", {
  cx: "8",
  cy: "9",
  r: "2"
}], ["path", {
  d: "m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"
}], ["path", {
  d: "M8 21h8"
}], ["path", {
  d: "M12 17v4"
}]]];
const pn = ["svg", t, [["path", {
  d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72"
}], ["path", {
  d: "m14 7 3 3"
}], ["path", {
  d: "M5 6v4"
}], ["path", {
  d: "M19 14v4"
}], ["path", {
  d: "M10 2v2"
}], ["path", {
  d: "M7 8H3"
}], ["path", {
  d: "M21 16h-4"
}], ["path", {
  d: "M11 3H9"
}]]];
const Hk = ["svg", t, [["path", {
  d: "M15 4V2"
}], ["path", {
  d: "M15 16v-2"
}], ["path", {
  d: "M8 9h2"
}], ["path", {
  d: "M20 9h2"
}], ["path", {
  d: "M17.8 11.8 19 13"
}], ["path", {
  d: "M15 9h.01"
}], ["path", {
  d: "M17.8 6.2 19 5"
}], ["path", {
  d: "m3 21 9-9"
}], ["path", {
  d: "M12.2 6.2 11 5"
}]]];
const Sk = ["svg", t, [["path", {
  d: "M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"
}], ["path", {
  d: "M6 18h12"
}], ["path", {
  d: "M6 14h12"
}], ["rect", {
  width: "12",
  height: "12",
  x: "6",
  y: "10"
}]]];
const Ck = ["svg", t, [["path", {
  d: "M3 6h3"
}], ["path", {
  d: "M17 6h.01"
}], ["rect", {
  width: "18",
  height: "20",
  x: "3",
  y: "2",
  rx: "2"
}], ["circle", {
  cx: "12",
  cy: "13",
  r: "5"
}], ["path", {
  d: "M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5"
}]]];
const Vk = ["svg", t, [["circle", {
  cx: "12",
  cy: "12",
  r: "6"
}], ["polyline", {
  points: "12 10 12 12 13 13"
}], ["path", {
  d: "m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05"
}], ["path", {
  d: "m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05"
}]]];
const Lk = ["svg", t, [["path", {
  d: "M19 5a2 2 0 0 0-2 2v11"
}], ["path", {
  d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
}], ["path", {
  d: "M7 13h10"
}], ["path", {
  d: "M7 9h10"
}], ["path", {
  d: "M9 5a2 2 0 0 0-2 2v11"
}]]];
const Pk = ["svg", t, [["path", {
  d: "M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
}], ["path", {
  d: "M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
}], ["path", {
  d: "M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"
}]]];
const Tk = ["svg", t, [["circle", {
  cx: "12",
  cy: "4.5",
  r: "2.5"
}], ["path", {
  d: "m10.2 6.3-3.9 3.9"
}], ["circle", {
  cx: "4.5",
  cy: "12",
  r: "2.5"
}], ["path", {
  d: "M7 12h10"
}], ["circle", {
  cx: "19.5",
  cy: "12",
  r: "2.5"
}], ["path", {
  d: "m13.8 17.7 3.9-3.9"
}], ["circle", {
  cx: "12",
  cy: "19.5",
  r: "2.5"
}]]];
const Rk = ["svg", t, [["circle", {
  cx: "12",
  cy: "10",
  r: "8"
}], ["circle", {
  cx: "12",
  cy: "10",
  r: "3"
}], ["path", {
  d: "M7 22h10"
}], ["path", {
  d: "M12 22v-4"
}]]];
const Bk = ["svg", t, [["path", {
  d: "M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15"
}], ["path", {
  d: "M9 3.4a4 4 0 0 1 6.52.66"
}], ["path", {
  d: "m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05"
}], ["path", {
  d: "M20.3 20.3a4 4 0 0 1-2.3.7"
}], ["path", {
  d: "M18.6 13a4 4 0 0 1 3.357 3.414"
}], ["path", {
  d: "m12 6 .6 1"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const Ek = ["svg", t, [["path", {
  d: "M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"
}], ["path", {
  d: "m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06"
}], ["path", {
  d: "m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8"
}]]];
const Ik = ["svg", t, [["circle", {
  cx: "12",
  cy: "5",
  r: "3"
}], ["path", {
  d: "M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"
}]]];
const Dk = ["svg", t, [["path", {
  d: "m2 22 10-10"
}], ["path", {
  d: "m16 8-1.17 1.17"
}], ["path", {
  d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
}], ["path", {
  d: "m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97"
}], ["path", {
  d: "M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62"
}], ["path", {
  d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
}], ["path", {
  d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
}], ["path", {
  d: "m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98"
}], ["path", {
  d: "M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const zk = ["svg", t, [["path", {
  d: "M2 22 16 8"
}], ["path", {
  d: "M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
}], ["path", {
  d: "M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
}], ["path", {
  d: "M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z"
}], ["path", {
  d: "M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z"
}], ["path", {
  d: "M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
}], ["path", {
  d: "M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
}], ["path", {
  d: "M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z"
}]]];
const Zk = ["svg", t, [["circle", {
  cx: "7",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M10 9v6"
}], ["circle", {
  cx: "17",
  cy: "12",
  r: "3"
}], ["path", {
  d: "M14 7v8"
}], ["path", {
  d: "M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
}]]];
const Fk = ["svg", t, [["path", {
  d: "M12 20h.01"
}], ["path", {
  d: "M5 12.859a10 10 0 0 1 14 0"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 7 0"
}]]];
const Uk = ["svg", t, [["path", {
  d: "M12 20h.01"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 7 0"
}]]];
const Wk = ["svg", t, [["path", {
  d: "M12 20h.01"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 7 0"
}], ["path", {
  d: "M5 12.859a10 10 0 0 1 5.17-2.69"
}], ["path", {
  d: "M19 12.859a10 10 0 0 0-2.007-1.523"
}], ["path", {
  d: "M2 8.82a15 15 0 0 1 4.177-2.643"
}], ["path", {
  d: "M22 8.82a15 15 0 0 0-11.288-3.764"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const Ok = ["svg", t, [["path", {
  d: "M12 20h.01"
}]]];
const qk = ["svg", t, [["path", {
  d: "M12 20h.01"
}], ["path", {
  d: "M2 8.82a15 15 0 0 1 20 0"
}], ["path", {
  d: "M5 12.859a10 10 0 0 1 14 0"
}], ["path", {
  d: "M8.5 16.429a5 5 0 0 1 7 0"
}]]];
const _k = ["svg", t, [["path", {
  d: "M10 2v8"
}], ["path", {
  d: "M12.8 21.6A2 2 0 1 0 14 18H2"
}], ["path", {
  d: "M17.5 10a2.5 2.5 0 1 1 2 4H2"
}], ["path", {
  d: "m6 6 4 4 4-4"
}]]];
const Gk = ["svg", t, [["path", {
  d: "M12.8 19.6A2 2 0 1 0 14 16H2"
}], ["path", {
  d: "M17.5 8a2.5 2.5 0 1 1 2 4H2"
}], ["path", {
  d: "M9.8 4.4A2 2 0 1 1 11 8H2"
}]]];
const Nk = ["svg", t, [["path", {
  d: "M8 22h8"
}], ["path", {
  d: "M7 10h3m7 0h-1.343"
}], ["path", {
  d: "M12 15v7"
}], ["path", {
  d: "M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198"
}], ["line", {
  x1: "2",
  x2: "22",
  y1: "2",
  y2: "22"
}]]];
const $k = ["svg", t, [["path", {
  d: "M8 22h8"
}], ["path", {
  d: "M7 10h10"
}], ["path", {
  d: "M12 15v7"
}], ["path", {
  d: "M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z"
}]]];
const Xk = ["svg", t, [["rect", {
  width: "8",
  height: "8",
  x: "3",
  y: "3",
  rx: "2"
}], ["path", {
  d: "M7 11v4a2 2 0 0 0 2 2h4"
}], ["rect", {
  width: "8",
  height: "8",
  x: "13",
  y: "13",
  rx: "2"
}]]];
const Yk = ["svg", t, [["path", {
  d: "m19 12-1.5 3"
}], ["path", {
  d: "M19.63 18.81 22 20"
}], ["path", {
  d: "M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z"
}]]];
const Kk = ["svg", t, [["line", {
  x1: "3",
  x2: "21",
  y1: "6",
  y2: "6"
}], ["path", {
  d: "M3 12h15a3 3 0 1 1 0 6h-4"
}], ["polyline", {
  points: "16 16 14 18 16 20"
}], ["line", {
  x1: "3",
  x2: "10",
  y1: "18",
  y2: "18"
}]]];
const Qk = ["svg", t, [["path", {
  d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
}]]];
const Jk = ["svg", t, [["path", {
  d: "M18 6 6 18"
}], ["path", {
  d: "m6 6 12 12"
}]]];
const jk = ["svg", t, [["path", {
  d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
}], ["path", {
  d: "m10 15 5-3-5-3z"
}]]];
const tH = ["svg", t, [["path", {
  d: "M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317"
}], ["path", {
  d: "M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773"
}], ["path", {
  d: "M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643"
}], ["path", {
  d: "m2 2 20 20"
}]]];
const aH = ["svg", t, [["path", {
  d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
}]]];
const eH = ["svg", t, [["circle", {
  cx: "11",
  cy: "11",
  r: "8"
}], ["line", {
  x1: "21",
  x2: "16.65",
  y1: "21",
  y2: "16.65"
}], ["line", {
  x1: "11",
  x2: "11",
  y1: "8",
  y2: "14"
}], ["line", {
  x1: "8",
  x2: "14",
  y1: "11",
  y2: "11"
}]]];
const hH = ["svg", t, [["circle", {
  cx: "11",
  cy: "11",
  r: "8"
}], ["line", {
  x1: "21",
  x2: "16.65",
  y1: "21",
  y2: "16.65"
}], ["line", {
  x1: "8",
  x2: "14",
  y1: "11",
  y2: "11"
}]]];
const sH = Object.freeze(Object.defineProperty({
  "__proto__": null,
  AArrowDown: ho,
  AArrowUp: so,
  ALargeSmall: no,
  Accessibility: co,
  Activity: oo,
  ActivitySquare: Yh,
  AirVent: ro,
  Airplay: io,
  AlarmCheck: I0,
  AlarmClock: lo,
  AlarmClockCheck: I0,
  AlarmClockMinus: D0,
  AlarmClockOff: po,
  AlarmClockPlus: z0,
  AlarmMinus: D0,
  AlarmPlus: z0,
  AlarmSmoke: Mo,
  Album: vo,
  AlertCircle: ie,
  AlertOctagon: Hh,
  AlertTriangle: Qs,
  AlignCenter: yo,
  AlignCenterHorizontal: go,
  AlignCenterVertical: mo,
  AlignEndHorizontal: uo,
  AlignEndVertical: xo,
  AlignHorizontalDistributeCenter: fo,
  AlignHorizontalDistributeEnd: bo,
  AlignHorizontalDistributeStart: wo,
  AlignHorizontalJustifyCenter: Ao,
  AlignHorizontalJustifyEnd: ko,
  AlignHorizontalJustifyStart: Ho,
  AlignHorizontalSpaceAround: So,
  AlignHorizontalSpaceBetween: Co,
  AlignJustify: Vo,
  AlignLeft: Lo,
  AlignRight: Po,
  AlignStartHorizontal: To,
  AlignStartVertical: Ro,
  AlignVerticalDistributeCenter: Bo,
  AlignVerticalDistributeEnd: Eo,
  AlignVerticalDistributeStart: Io,
  AlignVerticalJustifyCenter: Do,
  AlignVerticalJustifyEnd: zo,
  AlignVerticalJustifyStart: Zo,
  AlignVerticalSpaceAround: Fo,
  AlignVerticalSpaceBetween: Uo,
  Ambulance: Wo,
  Ampersand: Oo,
  Ampersands: qo,
  Amphora: _o,
  Anchor: Go,
  Angry: No,
  Annoyed: $o,
  Antenna: Xo,
  Anvil: Yo,
  Aperture: Ko,
  AppWindow: Jo,
  AppWindowMac: Qo,
  Apple: jo,
  Archive: ed,
  ArchiveRestore: td,
  ArchiveX: ad,
  AreaChart: Q0,
  Armchair: hd,
  ArrowBigDown: nd,
  ArrowBigDownDash: sd,
  ArrowBigLeft: od,
  ArrowBigLeftDash: cd,
  ArrowBigRight: rd,
  ArrowBigRightDash: dd,
  ArrowBigUp: pd,
  ArrowBigUpDash: id,
  ArrowDown: bd,
  ArrowDown01: ld,
  ArrowDown10: Md,
  ArrowDownAZ: Z0,
  ArrowDownAz: Z0,
  ArrowDownCircle: pe,
  ArrowDownFromLine: vd,
  ArrowDownLeft: gd,
  ArrowDownLeftFromCircle: Me,
  ArrowDownLeftFromSquare: ts,
  ArrowDownLeftSquare: Kh,
  ArrowDownNarrowWide: md,
  ArrowDownRight: yd,
  ArrowDownRightFromCircle: ve,
  ArrowDownRightFromSquare: as,
  ArrowDownRightSquare: Qh,
  ArrowDownSquare: Jh,
  ArrowDownToDot: ud,
  ArrowDownToLine: xd,
  ArrowDownUp: fd,
  ArrowDownWideNarrow: F0,
  ArrowDownZA: U0,
  ArrowDownZa: U0,
  ArrowLeft: Hd,
  ArrowLeftCircle: le,
  ArrowLeftFromLine: wd,
  ArrowLeftRight: Ad,
  ArrowLeftSquare: jh,
  ArrowLeftToLine: kd,
  ArrowRight: Ld,
  ArrowRightCircle: ye,
  ArrowRightFromLine: Sd,
  ArrowRightLeft: Cd,
  ArrowRightSquare: ss,
  ArrowRightToLine: Vd,
  ArrowUp: Fd,
  ArrowUp01: Pd,
  ArrowUp10: Td,
  ArrowUpAZ: W0,
  ArrowUpAz: W0,
  ArrowUpCircle: ue,
  ArrowUpDown: Rd,
  ArrowUpFromDot: Bd,
  ArrowUpFromLine: Ed,
  ArrowUpLeft: Id,
  ArrowUpLeftFromCircle: ge,
  ArrowUpLeftFromSquare: es,
  ArrowUpLeftSquare: ns,
  ArrowUpNarrowWide: O0,
  ArrowUpRight: Dd,
  ArrowUpRightFromCircle: me,
  ArrowUpRightFromSquare: hs,
  ArrowUpRightSquare: cs,
  ArrowUpSquare: os,
  ArrowUpToLine: zd,
  ArrowUpWideNarrow: Zd,
  ArrowUpZA: q0,
  ArrowUpZa: q0,
  ArrowsUpFromLine: Ud,
  Asterisk: Wd,
  AsteriskSquare: ds,
  AtSign: Od,
  Atom: qd,
  AudioLines: _d,
  AudioWaveform: Gd,
  Award: Nd,
  Axe: $d,
  Axis3D: _0,
  Axis3d: _0,
  Baby: Xd,
  Backpack: Yd,
  Badge: pr,
  BadgeAlert: Kd,
  BadgeCent: Qd,
  BadgeCheck: G0,
  BadgeDollarSign: Jd,
  BadgeEuro: jd,
  BadgeHelp: tr,
  BadgeIndianRupee: ar,
  BadgeInfo: er,
  BadgeJapaneseYen: hr,
  BadgeMinus: sr,
  BadgePercent: nr,
  BadgePlus: cr,
  BadgePoundSterling: or,
  BadgeRussianRuble: dr,
  BadgeSwissFranc: rr,
  BadgeX: ir,
  BaggageClaim: lr,
  Ban: Mr,
  Banana: vr,
  Bandage: gr,
  Banknote: mr,
  BarChart: ne,
  BarChart2: ce,
  BarChart3: he,
  BarChart4: ee,
  BarChartBig: ae,
  BarChartHorizontal: j0,
  BarChartHorizontalBig: J0,
  Barcode: yr,
  Baseline: ur,
  Bath: xr,
  Battery: Hr,
  BatteryCharging: fr,
  BatteryFull: br,
  BatteryLow: wr,
  BatteryMedium: Ar,
  BatteryWarning: kr,
  Beaker: Sr,
  Bean: Vr,
  BeanOff: Cr,
  Bed: Tr,
  BedDouble: Lr,
  BedSingle: Pr,
  Beef: Rr,
  Beer: Er,
  BeerOff: Br,
  Bell: Wr,
  BellDot: Ir,
  BellElectric: Dr,
  BellMinus: zr,
  BellOff: Zr,
  BellPlus: Fr,
  BellRing: Ur,
  BetweenHorizonalEnd: N0,
  BetweenHorizonalStart: $0,
  BetweenHorizontalEnd: N0,
  BetweenHorizontalStart: $0,
  BetweenVerticalEnd: Or,
  BetweenVerticalStart: qr,
  BicepsFlexed: _r,
  Bike: Gr,
  Binary: Nr,
  Binoculars: $r,
  Biohazard: Xr,
  Bird: Yr,
  Bitcoin: Kr,
  Blend: Qr,
  Blinds: Jr,
  Blocks: jr,
  Bluetooth: hi,
  BluetoothConnected: ti,
  BluetoothOff: ai,
  BluetoothSearching: ei,
  Bold: si,
  Bolt: ni,
  Bomb: ci,
  Bone: oi,
  Book: Pi,
  BookA: di,
  BookAudio: ri,
  BookCheck: ii,
  BookCopy: pi,
  BookDashed: X0,
  BookDown: li,
  BookHeadphones: Mi,
  BookHeart: vi,
  BookImage: gi,
  BookKey: mi,
  BookLock: yi,
  BookMarked: ui,
  BookMinus: xi,
  BookOpen: wi,
  BookOpenCheck: fi,
  BookOpenText: bi,
  BookPlus: Ai,
  BookTemplate: X0,
  BookText: ki,
  BookType: Hi,
  BookUp: Ci,
  BookUp2: Si,
  BookUser: Vi,
  BookX: Li,
  Bookmark: Ii,
  BookmarkCheck: Ti,
  BookmarkMinus: Ri,
  BookmarkPlus: Bi,
  BookmarkX: Ei,
  BoomBox: Di,
  Bot: Fi,
  BotMessageSquare: zi,
  BotOff: Zi,
  Box: Ui,
  BoxSelect: xs,
  Boxes: Wi,
  Braces: Y0,
  Brackets: Oi,
  Brain: Gi,
  BrainCircuit: qi,
  BrainCog: _i,
  BrickWall: Ni,
  Briefcase: Ki,
  BriefcaseBusiness: $i,
  BriefcaseConveyorBelt: Xi,
  BriefcaseMedical: Yi,
  BringToFront: Qi,
  Brush: Ji,
  Bug: a4,
  BugOff: ji,
  BugPlay: t4,
  Building: h4,
  Building2: e4,
  Bus: n4,
  BusFront: s4,
  Cable: o4,
  CableCar: c4,
  Cake: r4,
  CakeSlice: d4,
  Calculator: i4,
  Calendar: T4,
  Calendar1: p4,
  CalendarArrowDown: l4,
  CalendarArrowUp: M4,
  CalendarCheck: g4,
  CalendarCheck2: v4,
  CalendarClock: m4,
  CalendarCog: y4,
  CalendarDays: u4,
  CalendarFold: x4,
  CalendarHeart: f4,
  CalendarMinus: w4,
  CalendarMinus2: b4,
  CalendarOff: A4,
  CalendarPlus: H4,
  CalendarPlus2: k4,
  CalendarRange: S4,
  CalendarSearch: C4,
  CalendarSync: V4,
  CalendarX: P4,
  CalendarX2: L4,
  Camera: B4,
  CameraOff: R4,
  CandlestickChart: te,
  Candy: D4,
  CandyCane: E4,
  CandyOff: I4,
  Cannabis: z4,
  Captions: K0,
  CaptionsOff: Z4,
  Car: W4,
  CarFront: F4,
  CarTaxiFront: U4,
  Caravan: O4,
  Carrot: q4,
  CaseLower: _4,
  CaseSensitive: G4,
  CaseUpper: N4,
  CassetteTape: $4,
  Cast: X4,
  Castle: Y4,
  Cat: K4,
  Cctv: Q4,
  ChartArea: Q0,
  ChartBar: j0,
  ChartBarBig: J0,
  ChartBarDecreasing: J4,
  ChartBarIncreasing: j4,
  ChartBarStacked: tp,
  ChartCandlestick: te,
  ChartColumn: he,
  ChartColumnBig: ae,
  ChartColumnDecreasing: ap,
  ChartColumnIncreasing: ee,
  ChartColumnStacked: ep,
  ChartGantt: hp,
  ChartLine: se,
  ChartNetwork: sp,
  ChartNoAxesColumn: ce,
  ChartNoAxesColumnDecreasing: np,
  ChartNoAxesColumnIncreasing: ne,
  ChartNoAxesCombined: cp,
  ChartNoAxesGantt: oe,
  ChartPie: de,
  ChartScatter: re,
  ChartSpline: op,
  Check: rp,
  CheckCheck: dp,
  CheckCircle: xe,
  CheckCircle2: fe,
  CheckSquare: is,
  CheckSquare2: ps,
  ChefHat: ip,
  Cherry: pp,
  ChevronDown: lp,
  ChevronDownCircle: be,
  ChevronDownSquare: ls,
  ChevronFirst: Mp,
  ChevronLast: vp,
  ChevronLeft: gp,
  ChevronLeftCircle: we,
  ChevronLeftSquare: Ms,
  ChevronRight: mp,
  ChevronRightCircle: Ae,
  ChevronRightSquare: vs,
  ChevronUp: yp,
  ChevronUpCircle: ke,
  ChevronUpSquare: gs,
  ChevronsDown: xp,
  ChevronsDownUp: up,
  ChevronsLeft: wp,
  ChevronsLeftRight: bp,
  ChevronsLeftRightEllipsis: fp,
  ChevronsRight: kp,
  ChevronsRightLeft: Ap,
  ChevronsUp: Sp,
  ChevronsUpDown: Hp,
  Chrome: Cp,
  Church: Vp,
  Cigarette: Pp,
  CigaretteOff: Lp,
  Circle: Wp,
  CircleAlert: ie,
  CircleArrowDown: pe,
  CircleArrowLeft: le,
  CircleArrowOutDownLeft: Me,
  CircleArrowOutDownRight: ve,
  CircleArrowOutUpLeft: ge,
  CircleArrowOutUpRight: me,
  CircleArrowRight: ye,
  CircleArrowUp: ue,
  CircleCheck: fe,
  CircleCheckBig: xe,
  CircleChevronDown: be,
  CircleChevronLeft: we,
  CircleChevronRight: Ae,
  CircleChevronUp: ke,
  CircleDashed: Tp,
  CircleDivide: He,
  CircleDollarSign: Rp,
  CircleDot: Ep,
  CircleDotDashed: Bp,
  CircleEllipsis: Ip,
  CircleEqual: Dp,
  CircleFadingArrowUp: zp,
  CircleFadingPlus: Zp,
  CircleGauge: Se,
  CircleHelp: Ce,
  CircleMinus: Ve,
  CircleOff: Fp,
  CircleParking: Pe,
  CircleParkingOff: Le,
  CirclePause: Te,
  CirclePercent: Re,
  CirclePlay: Be,
  CirclePlus: Ee,
  CirclePower: Ie,
  CircleSlash: Up,
  CircleSlash2: De,
  CircleSlashed: De,
  CircleStop: ze,
  CircleUser: Fe,
  CircleUserRound: Ze,
  CircleX: Ue,
  CircuitBoard: Op,
  Citrus: qp,
  Clapperboard: _p,
  Clipboard: jp,
  ClipboardCheck: Gp,
  ClipboardCopy: Np,
  ClipboardEdit: Oe,
  ClipboardList: $p,
  ClipboardMinus: Xp,
  ClipboardPaste: Yp,
  ClipboardPen: Oe,
  ClipboardPenLine: We,
  ClipboardPlus: Kp,
  ClipboardSignature: We,
  ClipboardType: Qp,
  ClipboardX: Jp,
  Clock: g5,
  Clock1: t5,
  Clock10: a5,
  Clock11: e5,
  Clock12: h5,
  Clock2: s5,
  Clock3: n5,
  Clock4: c5,
  Clock5: o5,
  Clock6: d5,
  Clock7: r5,
  Clock8: i5,
  Clock9: p5,
  ClockAlert: l5,
  ClockArrowDown: M5,
  ClockArrowUp: v5,
  Cloud: P5,
  CloudAlert: m5,
  CloudCog: y5,
  CloudDownload: qe,
  CloudDrizzle: u5,
  CloudFog: x5,
  CloudHail: f5,
  CloudLightning: b5,
  CloudMoon: A5,
  CloudMoonRain: w5,
  CloudOff: k5,
  CloudRain: S5,
  CloudRainWind: H5,
  CloudSnow: C5,
  CloudSun: L5,
  CloudSunRain: V5,
  CloudUpload: _e,
  Cloudy: T5,
  Clover: R5,
  Club: B5,
  Code: E5,
  Code2: Ge,
  CodeSquare: ms,
  CodeXml: Ge,
  Codepen: I5,
  Codesandbox: D5,
  Coffee: z5,
  Cog: Z5,
  Coins: F5,
  Columns: Ne,
  Columns2: Ne,
  Columns3: $e,
  Columns4: U5,
  Combine: W5,
  Command: O5,
  Compass: q5,
  Component: _5,
  Computer: G5,
  ConciergeBell: N5,
  Cone: $5,
  Construction: X5,
  Contact: Y5,
  Contact2: Xe,
  ContactRound: Xe,
  Container: K5,
  Contrast: Q5,
  Cookie: J5,
  CookingPot: j5,
  Copy: nl,
  CopyCheck: tl,
  CopyMinus: al,
  CopyPlus: el,
  CopySlash: hl,
  CopyX: sl,
  Copyleft: cl,
  Copyright: ol,
  CornerDownLeft: dl,
  CornerDownRight: rl,
  CornerLeftDown: il,
  CornerLeftUp: pl,
  CornerRightDown: ll,
  CornerRightUp: Ml,
  CornerUpLeft: vl,
  CornerUpRight: gl,
  Cpu: ml,
  CreativeCommons: yl,
  CreditCard: ul,
  Croissant: xl,
  Crop: fl,
  Cross: bl,
  Crosshair: wl,
  Crown: Al,
  Cuboid: kl,
  CupSoda: Hl,
  CurlyBraces: Y0,
  Currency: Sl,
  Cylinder: Cl,
  Dam: Vl,
  Database: Tl,
  DatabaseBackup: Ll,
  DatabaseZap: Pl,
  Delete: Rl,
  Dessert: Bl,
  Diameter: El,
  Diamond: zl,
  DiamondMinus: Il,
  DiamondPercent: Ye,
  DiamondPlus: Dl,
  Dice1: Zl,
  Dice2: Fl,
  Dice3: Ul,
  Dice4: Wl,
  Dice5: Ol,
  Dice6: ql,
  Dices: _l,
  Diff: Gl,
  Disc: Yl,
  Disc2: Nl,
  Disc3: $l,
  DiscAlbum: Xl,
  Divide: Kl,
  DivideCircle: He,
  DivideSquare: fs,
  Dna: Jl,
  DnaOff: Ql,
  Dock: jl,
  Dog: t3,
  DollarSign: a3,
  Donut: e3,
  DoorClosed: h3,
  DoorOpen: s3,
  Dot: n3,
  DotSquare: bs,
  Download: c3,
  DownloadCloud: qe,
  DraftingCompass: o3,
  Drama: d3,
  Dribbble: r3,
  Drill: i3,
  Droplet: l3,
  DropletOff: p3,
  Droplets: M3,
  Drum: v3,
  Drumstick: g3,
  Dumbbell: m3,
  Ear: u3,
  EarOff: y3,
  Earth: Ke,
  EarthLock: x3,
  Eclipse: f3,
  Edit: nt,
  Edit2: Zh,
  Edit3: zh,
  Egg: A3,
  EggFried: b3,
  EggOff: w3,
  Ellipsis: Je,
  EllipsisVertical: Qe,
  Equal: S3,
  EqualApproximately: k3,
  EqualNot: H3,
  EqualSquare: ws,
  Eraser: C3,
  EthernetPort: V3,
  Euro: L3,
  Expand: P3,
  ExternalLink: T3,
  Eye: E3,
  EyeClosed: R3,
  EyeOff: B3,
  Facebook: I3,
  Factory: D3,
  Fan: z3,
  FastForward: Z3,
  Feather: F3,
  Fence: U3,
  FerrisWheel: W3,
  Figma: O3,
  File: F6,
  FileArchive: q3,
  FileAudio: G3,
  FileAudio2: _3,
  FileAxis3D: je,
  FileAxis3d: je,
  FileBadge: $3,
  FileBadge2: N3,
  FileBarChart: th,
  FileBarChart2: ah,
  FileBox: X3,
  FileChartColumn: ah,
  FileChartColumnIncreasing: th,
  FileChartLine: eh,
  FileChartPie: hh,
  FileCheck: K3,
  FileCheck2: Y3,
  FileClock: Q3,
  FileCode: j3,
  FileCode2: J3,
  FileCog: sh,
  FileCog2: sh,
  FileDiff: t6,
  FileDigit: a6,
  FileDown: e6,
  FileEdit: ch,
  FileHeart: h6,
  FileImage: s6,
  FileInput: n6,
  FileJson: o6,
  FileJson2: c6,
  FileKey: r6,
  FileKey2: d6,
  FileLineChart: eh,
  FileLock: p6,
  FileLock2: i6,
  FileMinus: M6,
  FileMinus2: l6,
  FileMusic: v6,
  FileOutput: g6,
  FilePen: ch,
  FilePenLine: nh,
  FilePieChart: hh,
  FilePlus: y6,
  FilePlus2: m6,
  FileQuestion: u6,
  FileScan: x6,
  FileSearch: b6,
  FileSearch2: f6,
  FileSignature: nh,
  FileSliders: w6,
  FileSpreadsheet: A6,
  FileStack: k6,
  FileSymlink: H6,
  FileTerminal: S6,
  FileText: C6,
  FileType: L6,
  FileType2: V6,
  FileUp: P6,
  FileUser: T6,
  FileVideo: B6,
  FileVideo2: R6,
  FileVolume: I6,
  FileVolume2: E6,
  FileWarning: D6,
  FileX: Z6,
  FileX2: z6,
  Files: U6,
  Film: W6,
  Filter: q6,
  FilterX: O6,
  Fingerprint: _6,
  FireExtinguisher: G6,
  Fish: X6,
  FishOff: N6,
  FishSymbol: $6,
  Flag: J6,
  FlagOff: Y6,
  FlagTriangleLeft: K6,
  FlagTriangleRight: Q6,
  Flame: t8,
  FlameKindling: j6,
  Flashlight: e8,
  FlashlightOff: a8,
  FlaskConical: s8,
  FlaskConicalOff: h8,
  FlaskRound: n8,
  FlipHorizontal: o8,
  FlipHorizontal2: c8,
  FlipVertical: r8,
  FlipVertical2: d8,
  Flower: p8,
  Flower2: i8,
  Focus: l8,
  FoldHorizontal: M8,
  FoldVertical: v8,
  Folder: O8,
  FolderArchive: g8,
  FolderCheck: m8,
  FolderClock: y8,
  FolderClosed: u8,
  FolderCode: x8,
  FolderCog: oh,
  FolderCog2: oh,
  FolderDot: f8,
  FolderDown: b8,
  FolderEdit: dh,
  FolderGit: A8,
  FolderGit2: w8,
  FolderHeart: k8,
  FolderInput: H8,
  FolderKanban: S8,
  FolderKey: C8,
  FolderLock: V8,
  FolderMinus: L8,
  FolderOpen: T8,
  FolderOpenDot: P8,
  FolderOutput: R8,
  FolderPen: dh,
  FolderPlus: B8,
  FolderRoot: E8,
  FolderSearch: D8,
  FolderSearch2: I8,
  FolderSymlink: z8,
  FolderSync: Z8,
  FolderTree: F8,
  FolderUp: U8,
  FolderX: W8,
  Folders: q8,
  Footprints: _8,
  ForkKnife: dn,
  ForkKnifeCrossed: on,
  Forklift: G8,
  FormInput: Uh,
  Forward: N8,
  Frame: $8,
  Framer: X8,
  Frown: Y8,
  Fuel: K8,
  Fullscreen: Q8,
  FunctionSquare: As,
  GalleryHorizontal: j8,
  GalleryHorizontalEnd: J8,
  GalleryThumbnails: t7,
  GalleryVertical: e7,
  GalleryVerticalEnd: a7,
  Gamepad: s7,
  Gamepad2: h7,
  GanttChart: oe,
  GanttChartSquare: Yt,
  Gauge: n7,
  GaugeCircle: Se,
  Gavel: c7,
  Gem: o7,
  Ghost: d7,
  Gift: r7,
  GitBranch: p7,
  GitBranchPlus: i7,
  GitCommit: rh,
  GitCommitHorizontal: rh,
  GitCommitVertical: l7,
  GitCompare: v7,
  GitCompareArrows: M7,
  GitFork: g7,
  GitGraph: m7,
  GitMerge: y7,
  GitPullRequest: A7,
  GitPullRequestArrow: u7,
  GitPullRequestClosed: x7,
  GitPullRequestCreate: b7,
  GitPullRequestCreateArrow: f7,
  GitPullRequestDraft: w7,
  Github: k7,
  Gitlab: H7,
  GlassWater: S7,
  Glasses: C7,
  Globe: L7,
  Globe2: Ke,
  GlobeLock: V7,
  Goal: P7,
  Grab: T7,
  GraduationCap: R7,
  Grape: B7,
  Grid: Xt,
  Grid2X2: ph,
  Grid2X2Plus: ih,
  Grid2x2: ph,
  Grid2x2Check: E7,
  Grid2x2Plus: ih,
  Grid2x2X: I7,
  Grid3X3: Xt,
  Grid3x3: Xt,
  Grip: Z7,
  GripHorizontal: D7,
  GripVertical: z7,
  Group: F7,
  Guitar: U7,
  Ham: W7,
  Hammer: O7,
  Hand: $7,
  HandCoins: q7,
  HandHeart: _7,
  HandHelping: lh,
  HandMetal: G7,
  HandPlatter: N7,
  Handshake: X7,
  HardDrive: Q7,
  HardDriveDownload: Y7,
  HardDriveUpload: K7,
  HardHat: J7,
  Hash: j7,
  Haze: tM,
  HdmiPort: aM,
  Heading: dM,
  Heading1: eM,
  Heading2: hM,
  Heading3: sM,
  Heading4: nM,
  Heading5: cM,
  Heading6: oM,
  HeadphoneOff: rM,
  Headphones: iM,
  Headset: pM,
  Heart: mM,
  HeartCrack: lM,
  HeartHandshake: MM,
  HeartOff: vM,
  HeartPulse: gM,
  Heater: yM,
  HelpCircle: Ce,
  HelpingHand: lh,
  Hexagon: uM,
  Highlighter: xM,
  History: fM,
  Home: Mh,
  Hop: wM,
  HopOff: bM,
  Hospital: AM,
  Hotel: kM,
  Hourglass: HM,
  House: Mh,
  HousePlug: SM,
  HousePlus: CM,
  IceCream: gh,
  IceCream2: vh,
  IceCreamBowl: vh,
  IceCreamCone: gh,
  IdCard: VM,
  Image: DM,
  ImageDown: LM,
  ImageMinus: PM,
  ImageOff: TM,
  ImagePlay: RM,
  ImagePlus: BM,
  ImageUp: EM,
  ImageUpscale: IM,
  Images: zM,
  Import: ZM,
  Inbox: FM,
  Indent: yh,
  IndentDecrease: mh,
  IndentIncrease: yh,
  IndianRupee: UM,
  Infinity: WM,
  Info: OM,
  Inspect: Ls,
  InspectionPanel: qM,
  Instagram: _M,
  Italic: GM,
  IterationCcw: NM,
  IterationCw: $M,
  JapaneseYen: XM,
  Joystick: YM,
  Kanban: KM,
  KanbanSquare: ks,
  KanbanSquareDashed: ys,
  Key: jM,
  KeyRound: QM,
  KeySquare: JM,
  Keyboard: ev,
  KeyboardMusic: tv,
  KeyboardOff: av,
  Lamp: dv,
  LampCeiling: hv,
  LampDesk: sv,
  LampFloor: nv,
  LampWallDown: cv,
  LampWallUp: ov,
  LandPlot: rv,
  Landmark: iv,
  Languages: pv,
  Laptop: Mv,
  Laptop2: uh,
  LaptopMinimal: uh,
  LaptopMinimalCheck: lv,
  Lasso: gv,
  LassoSelect: vv,
  Laugh: mv,
  Layers: xh,
  Layers2: yv,
  Layers3: xh,
  Layout: Dh,
  LayoutDashboard: uv,
  LayoutGrid: xv,
  LayoutList: fv,
  LayoutPanelLeft: bv,
  LayoutPanelTop: wv,
  LayoutTemplate: Av,
  Leaf: kv,
  LeafyGreen: Hv,
  Lectern: Sv,
  LetterText: Cv,
  Library: Lv,
  LibraryBig: Vv,
  LibrarySquare: Hs,
  LifeBuoy: Pv,
  Ligature: Tv,
  Lightbulb: Bv,
  LightbulbOff: Rv,
  LineChart: se,
  Link: Dv,
  Link2: Iv,
  Link2Off: Ev,
  Linkedin: zv,
  List: t9,
  ListCheck: Zv,
  ListChecks: Fv,
  ListCollapse: Uv,
  ListEnd: Wv,
  ListFilter: qv,
  ListFilterPlus: Ov,
  ListMinus: _v,
  ListMusic: Gv,
  ListOrdered: Nv,
  ListPlus: $v,
  ListRestart: Xv,
  ListStart: Yv,
  ListTodo: Kv,
  ListTree: Qv,
  ListVideo: Jv,
  ListX: jv,
  Loader: e9,
  Loader2: fh,
  LoaderCircle: fh,
  LoaderPinwheel: a9,
  Locate: n9,
  LocateFixed: h9,
  LocateOff: s9,
  Lock: o9,
  LockKeyhole: c9,
  LockKeyholeOpen: bh,
  LockOpen: wh,
  LogIn: d9,
  LogOut: r9,
  Logs: i9,
  Lollipop: p9,
  Luggage: l9,
  MSquare: Ss,
  Magnet: M9,
  Mail: w9,
  MailCheck: v9,
  MailMinus: g9,
  MailOpen: m9,
  MailPlus: y9,
  MailQuestion: u9,
  MailSearch: x9,
  MailWarning: f9,
  MailX: b9,
  Mailbox: A9,
  Mails: k9,
  Map: z9,
  MapPin: I9,
  MapPinCheck: S9,
  MapPinCheckInside: H9,
  MapPinHouse: C9,
  MapPinMinus: L9,
  MapPinMinusInside: V9,
  MapPinOff: P9,
  MapPinPlus: R9,
  MapPinPlusInside: T9,
  MapPinX: E9,
  MapPinXInside: B9,
  MapPinned: D9,
  Martini: Z9,
  Maximize: U9,
  Maximize2: F9,
  Medal: W9,
  Megaphone: q9,
  MegaphoneOff: O9,
  Meh: _9,
  MemoryStick: G9,
  Menu: N9,
  MenuSquare: Cs,
  Merge: $9,
  MessageCircle: sg,
  MessageCircleCode: X9,
  MessageCircleDashed: Y9,
  MessageCircleHeart: K9,
  MessageCircleMore: Q9,
  MessageCircleOff: J9,
  MessageCirclePlus: j9,
  MessageCircleQuestion: tg,
  MessageCircleReply: ag,
  MessageCircleWarning: eg,
  MessageCircleX: hg,
  MessageSquare: fg,
  MessageSquareCode: ng,
  MessageSquareDashed: cg,
  MessageSquareDiff: og,
  MessageSquareDot: dg,
  MessageSquareHeart: rg,
  MessageSquareLock: ig,
  MessageSquareMore: pg,
  MessageSquareOff: lg,
  MessageSquarePlus: Mg,
  MessageSquareQuote: vg,
  MessageSquareReply: gg,
  MessageSquareShare: mg,
  MessageSquareText: yg,
  MessageSquareWarning: ug,
  MessageSquareX: xg,
  MessagesSquare: bg,
  Mic: Ag,
  Mic2: Ah,
  MicOff: wg,
  MicVocal: Ah,
  Microchip: kg,
  Microscope: Hg,
  Microwave: Sg,
  Milestone: Cg,
  Milk: Lg,
  MilkOff: Vg,
  Minimize: Tg,
  Minimize2: Pg,
  Minus: Rg,
  MinusCircle: Ve,
  MinusSquare: Vs,
  Monitor: Gg,
  MonitorCheck: Bg,
  MonitorCog: Eg,
  MonitorDot: Ig,
  MonitorDown: Dg,
  MonitorOff: zg,
  MonitorPause: Zg,
  MonitorPlay: Fg,
  MonitorSmartphone: Ug,
  MonitorSpeaker: Wg,
  MonitorStop: Og,
  MonitorUp: qg,
  MonitorX: _g,
  Moon: $g,
  MoonStar: Ng,
  MoreHorizontal: Je,
  MoreVertical: Qe,
  Mountain: Yg,
  MountainSnow: Xg,
  Mouse: am,
  MouseOff: Kg,
  MousePointer: tm,
  MousePointer2: Qg,
  MousePointerBan: Jg,
  MousePointerClick: jg,
  MousePointerSquareDashed: us,
  Move: vm,
  Move3D: kh,
  Move3d: kh,
  MoveDiagonal: hm,
  MoveDiagonal2: em,
  MoveDown: cm,
  MoveDownLeft: sm,
  MoveDownRight: nm,
  MoveHorizontal: om,
  MoveLeft: dm,
  MoveRight: rm,
  MoveUp: lm,
  MoveUpLeft: im,
  MoveUpRight: pm,
  MoveVertical: Mm,
  Music: um,
  Music2: gm,
  Music3: mm,
  Music4: ym,
  Navigation: wm,
  Navigation2: fm,
  Navigation2Off: xm,
  NavigationOff: bm,
  Network: Am,
  Newspaper: km,
  Nfc: Hm,
  Notebook: Lm,
  NotebookPen: Sm,
  NotebookTabs: Cm,
  NotebookText: Vm,
  NotepadText: Tm,
  NotepadTextDashed: Pm,
  Nut: Bm,
  NutOff: Rm,
  Octagon: Im,
  OctagonAlert: Hh,
  OctagonMinus: Em,
  OctagonPause: Sh,
  OctagonX: Ch,
  Omega: Dm,
  Option: zm,
  Orbit: Zm,
  Origami: Fm,
  Outdent: mh,
  Package: $m,
  Package2: Um,
  PackageCheck: Wm,
  PackageMinus: Om,
  PackageOpen: qm,
  PackagePlus: _m,
  PackageSearch: Gm,
  PackageX: Nm,
  PaintBucket: Xm,
  PaintRoller: Ym,
  Paintbrush: Km,
  Paintbrush2: Vh,
  PaintbrushVertical: Vh,
  Palette: Qm,
  Palmtree: Ks,
  PanelBottom: ty,
  PanelBottomClose: Jm,
  PanelBottomDashed: Lh,
  PanelBottomInactive: Lh,
  PanelBottomOpen: jm,
  PanelLeft: Bh,
  PanelLeftClose: Ph,
  PanelLeftDashed: Th,
  PanelLeftInactive: Th,
  PanelLeftOpen: Rh,
  PanelRight: hy,
  PanelRightClose: ay,
  PanelRightDashed: Eh,
  PanelRightInactive: Eh,
  PanelRightOpen: ey,
  PanelTop: cy,
  PanelTopClose: sy,
  PanelTopDashed: Ih,
  PanelTopInactive: Ih,
  PanelTopOpen: ny,
  PanelsLeftBottom: oy,
  PanelsLeftRight: $e,
  PanelsRightBottom: dy,
  PanelsTopBottom: qh,
  PanelsTopLeft: Dh,
  Paperclip: ry,
  Parentheses: iy,
  ParkingCircle: Pe,
  ParkingCircleOff: Le,
  ParkingMeter: py,
  ParkingSquare: Ts,
  ParkingSquareOff: Ps,
  PartyPopper: ly,
  Pause: My,
  PauseCircle: Te,
  PauseOctagon: Sh,
  PawPrint: vy,
  PcCase: gy,
  Pen: Zh,
  PenBox: nt,
  PenLine: zh,
  PenOff: my,
  PenSquare: nt,
  PenTool: yy,
  Pencil: by,
  PencilLine: uy,
  PencilOff: xy,
  PencilRuler: fy,
  Pentagon: wy,
  Percent: Ay,
  PercentCircle: Re,
  PercentDiamond: Ye,
  PercentSquare: Rs,
  PersonStanding: ky,
  PhilippinePeso: Hy,
  Phone: Ry,
  PhoneCall: Sy,
  PhoneForwarded: Cy,
  PhoneIncoming: Vy,
  PhoneMissed: Ly,
  PhoneOff: Py,
  PhoneOutgoing: Ty,
  Pi: By,
  PiSquare: Bs,
  Piano: Ey,
  Pickaxe: Iy,
  PictureInPicture: zy,
  PictureInPicture2: Dy,
  PieChart: de,
  PiggyBank: Zy,
  Pilcrow: Wy,
  PilcrowLeft: Fy,
  PilcrowRight: Uy,
  PilcrowSquare: Es,
  Pill: qy,
  PillBottle: Oy,
  Pin: Gy,
  PinOff: _y,
  Pipette: Ny,
  Pizza: $y,
  Plane: Ky,
  PlaneLanding: Xy,
  PlaneTakeoff: Yy,
  Play: Qy,
  PlayCircle: Be,
  PlaySquare: Is,
  Plug: jy,
  Plug2: Jy,
  PlugZap: Fh,
  PlugZap2: Fh,
  Plus: tu,
  PlusCircle: Ee,
  PlusSquare: Ds,
  Pocket: eu,
  PocketKnife: au,
  Podcast: hu,
  Pointer: nu,
  PointerOff: su,
  Popcorn: cu,
  Popsicle: ou,
  PoundSterling: du,
  Power: iu,
  PowerCircle: Ie,
  PowerOff: ru,
  PowerSquare: zs,
  Presentation: pu,
  Printer: Mu,
  PrinterCheck: lu,
  Projector: vu,
  Proportions: gu,
  Puzzle: mu,
  Pyramid: yu,
  QrCode: uu,
  Quote: xu,
  Rabbit: fu,
  Radar: bu,
  Radiation: wu,
  Radical: Au,
  Radio: Su,
  RadioReceiver: ku,
  RadioTower: Hu,
  Radius: Cu,
  RailSymbol: Vu,
  Rainbow: Lu,
  Rat: Pu,
  Ratio: Tu,
  Receipt: Uu,
  ReceiptCent: Ru,
  ReceiptEuro: Bu,
  ReceiptIndianRupee: Eu,
  ReceiptJapaneseYen: Iu,
  ReceiptPoundSterling: Du,
  ReceiptRussianRuble: zu,
  ReceiptSwissFranc: Zu,
  ReceiptText: Fu,
  RectangleEllipsis: Uh,
  RectangleHorizontal: Wu,
  RectangleVertical: Ou,
  Recycle: qu,
  Redo: Nu,
  Redo2: _u,
  RedoDot: Gu,
  RefreshCcw: Xu,
  RefreshCcwDot: $u,
  RefreshCw: Ku,
  RefreshCwOff: Yu,
  Refrigerator: Qu,
  Regex: Ju,
  RemoveFormatting: ju,
  Repeat: ex,
  Repeat1: tx,
  Repeat2: ax,
  Replace: sx,
  ReplaceAll: hx,
  Reply: cx,
  ReplyAll: nx,
  Rewind: ox,
  Ribbon: dx,
  Rocket: rx,
  RockingChair: ix,
  RollerCoaster: px,
  Rotate3D: Wh,
  Rotate3d: Wh,
  RotateCcw: Mx,
  RotateCcwSquare: lx,
  RotateCw: gx,
  RotateCwSquare: vx,
  Route: yx,
  RouteOff: mx,
  Router: ux,
  Rows: Oh,
  Rows2: Oh,
  Rows3: qh,
  Rows4: xx,
  Rss: fx,
  Ruler: bx,
  RussianRuble: wx,
  Sailboat: Ax,
  Salad: kx,
  Sandwich: Hx,
  Satellite: Cx,
  SatelliteDish: Sx,
  Save: Px,
  SaveAll: Vx,
  SaveOff: Lx,
  Scale: Tx,
  Scale3D: _h,
  Scale3d: _h,
  Scaling: Rx,
  Scan: Wx,
  ScanBarcode: Bx,
  ScanEye: Ex,
  ScanFace: Ix,
  ScanHeart: Dx,
  ScanLine: zx,
  ScanQrCode: Zx,
  ScanSearch: Fx,
  ScanText: Ux,
  ScatterChart: re,
  School: Ox,
  School2: js,
  Scissors: _x,
  ScissorsLineDashed: qx,
  ScissorsSquare: Zs,
  ScissorsSquareDashedBottom: rs,
  ScreenShare: Nx,
  ScreenShareOff: Gx,
  Scroll: Xx,
  ScrollText: $x,
  Search: jx,
  SearchCheck: Yx,
  SearchCode: Kx,
  SearchSlash: Qx,
  SearchX: Jx,
  Section: tf,
  Send: ef,
  SendHorizonal: Gh,
  SendHorizontal: Gh,
  SendToBack: af,
  SeparatorHorizontal: hf,
  SeparatorVertical: sf,
  Server: df,
  ServerCog: nf,
  ServerCrash: cf,
  ServerOff: of,
  Settings: pf,
  Settings2: rf,
  Shapes: lf,
  Share: vf,
  Share2: Mf,
  Sheet: gf,
  Shell: mf,
  Shield: Sf,
  ShieldAlert: yf,
  ShieldBan: uf,
  ShieldCheck: xf,
  ShieldClose: Nh,
  ShieldEllipsis: ff,
  ShieldHalf: bf,
  ShieldMinus: wf,
  ShieldOff: Af,
  ShieldPlus: kf,
  ShieldQuestion: Hf,
  ShieldX: Nh,
  Ship: Vf,
  ShipWheel: Cf,
  Shirt: Lf,
  ShoppingBag: Pf,
  ShoppingBasket: Tf,
  ShoppingCart: Rf,
  Shovel: Bf,
  ShowerHead: Ef,
  Shrink: If,
  Shrub: Df,
  Shuffle: zf,
  Sidebar: Bh,
  SidebarClose: Ph,
  SidebarOpen: Rh,
  Sigma: Zf,
  SigmaSquare: Fs,
  Signal: qf,
  SignalHigh: Ff,
  SignalLow: Uf,
  SignalMedium: Wf,
  SignalZero: Of,
  Signature: _f,
  Signpost: Nf,
  SignpostBig: Gf,
  Siren: $f,
  SkipBack: Xf,
  SkipForward: Yf,
  Skull: Kf,
  Slack: Qf,
  Slash: Jf,
  SlashSquare: Us,
  Slice: jf,
  Sliders: $h,
  SlidersHorizontal: tb,
  SlidersVertical: $h,
  Smartphone: hb,
  SmartphoneCharging: ab,
  SmartphoneNfc: eb,
  Smile: nb,
  SmilePlus: sb,
  Snail: cb,
  Snowflake: ob,
  Sofa: db,
  SortAsc: O0,
  SortDesc: F0,
  Soup: rb,
  Space: ib,
  Spade: pb,
  Sparkle: lb,
  Sparkles: Xh,
  Speaker: Mb,
  Speech: vb,
  SpellCheck: mb,
  SpellCheck2: gb,
  Spline: yb,
  Split: ub,
  SplitSquareHorizontal: Ws,
  SplitSquareVertical: Os,
  SprayCan: xb,
  Sprout: fb,
  Square: Sb,
  SquareActivity: Yh,
  SquareArrowDown: Jh,
  SquareArrowDownLeft: Kh,
  SquareArrowDownRight: Qh,
  SquareArrowLeft: jh,
  SquareArrowOutDownLeft: ts,
  SquareArrowOutDownRight: as,
  SquareArrowOutUpLeft: es,
  SquareArrowOutUpRight: hs,
  SquareArrowRight: ss,
  SquareArrowUp: os,
  SquareArrowUpLeft: ns,
  SquareArrowUpRight: cs,
  SquareAsterisk: ds,
  SquareBottomDashedScissors: rs,
  SquareChartGantt: Yt,
  SquareCheck: ps,
  SquareCheckBig: is,
  SquareChevronDown: ls,
  SquareChevronLeft: Ms,
  SquareChevronRight: vs,
  SquareChevronUp: gs,
  SquareCode: ms,
  SquareDashed: xs,
  SquareDashedBottom: wb,
  SquareDashedBottomCode: bb,
  SquareDashedKanban: ys,
  SquareDashedMousePointer: us,
  SquareDivide: fs,
  SquareDot: bs,
  SquareEqual: ws,
  SquareFunction: As,
  SquareGanttChart: Yt,
  SquareKanban: ks,
  SquareLibrary: Hs,
  SquareM: Ss,
  SquareMenu: Cs,
  SquareMinus: Vs,
  SquareMousePointer: Ls,
  SquareParking: Ts,
  SquareParkingOff: Ps,
  SquarePen: nt,
  SquarePercent: Rs,
  SquarePi: Bs,
  SquarePilcrow: Es,
  SquarePlay: Is,
  SquarePlus: Ds,
  SquarePower: zs,
  SquareRadical: Ab,
  SquareScissors: Zs,
  SquareSigma: Fs,
  SquareSlash: Us,
  SquareSplitHorizontal: Ws,
  SquareSplitVertical: Os,
  SquareSquare: kb,
  SquareStack: Hb,
  SquareTerminal: qs,
  SquareUser: Gs,
  SquareUserRound: _s,
  SquareX: Ns,
  Squircle: Cb,
  Squirrel: Vb,
  Stamp: Lb,
  Star: Rb,
  StarHalf: Pb,
  StarOff: Tb,
  Stars: Xh,
  StepBack: Bb,
  StepForward: Eb,
  Stethoscope: Ib,
  Sticker: Db,
  StickyNote: zb,
  StopCircle: ze,
  Store: Zb,
  StretchHorizontal: Fb,
  StretchVertical: Ub,
  Strikethrough: Wb,
  Subscript: Ob,
  Subtitles: K0,
  Sun: $b,
  SunDim: qb,
  SunMedium: _b,
  SunMoon: Gb,
  SunSnow: Nb,
  Sunrise: Xb,
  Sunset: Yb,
  Superscript: Kb,
  SwatchBook: Qb,
  SwissFranc: Jb,
  SwitchCamera: jb,
  Sword: tw,
  Swords: aw,
  Syringe: ew,
  Table: iw,
  Table2: hw,
  TableCellsMerge: sw,
  TableCellsSplit: nw,
  TableColumnsSplit: cw,
  TableOfContents: ow,
  TableProperties: dw,
  TableRowsSplit: rw,
  Tablet: lw,
  TabletSmartphone: pw,
  Tablets: Mw,
  Tag: vw,
  Tags: gw,
  Tally1: mw,
  Tally2: yw,
  Tally3: uw,
  Tally4: xw,
  Tally5: fw,
  Tangent: bw,
  Target: ww,
  Telescope: Aw,
  Tent: Hw,
  TentTree: kw,
  Terminal: Sw,
  TerminalSquare: qs,
  TestTube: Cw,
  TestTube2: $s,
  TestTubeDiagonal: $s,
  TestTubes: Vw,
  Text: Bw,
  TextCursor: Pw,
  TextCursorInput: Lw,
  TextQuote: Tw,
  TextSearch: Rw,
  TextSelect: Xs,
  TextSelection: Xs,
  Theater: Ew,
  Thermometer: zw,
  ThermometerSnowflake: Iw,
  ThermometerSun: Dw,
  ThumbsDown: Zw,
  ThumbsUp: Fw,
  Ticket: Nw,
  TicketCheck: Uw,
  TicketMinus: Ww,
  TicketPercent: Ow,
  TicketPlus: qw,
  TicketSlash: _w,
  TicketX: Gw,
  Tickets: Xw,
  TicketsPlane: $w,
  Timer: Qw,
  TimerOff: Yw,
  TimerReset: Kw,
  ToggleLeft: Jw,
  ToggleRight: jw,
  Toilet: tA,
  Tornado: aA,
  Torus: eA,
  Touchpad: sA,
  TouchpadOff: hA,
  TowerControl: nA,
  ToyBrick: cA,
  Tractor: oA,
  TrafficCone: dA,
  Train: Ys,
  TrainFront: iA,
  TrainFrontTunnel: rA,
  TrainTrack: pA,
  TramFront: Ys,
  Trash: MA,
  Trash2: lA,
  TreeDeciduous: vA,
  TreePalm: Ks,
  TreePine: gA,
  Trees: mA,
  Trello: yA,
  TrendingDown: uA,
  TrendingUp: fA,
  TrendingUpDown: xA,
  Triangle: wA,
  TriangleAlert: Qs,
  TriangleRight: bA,
  Trophy: AA,
  Truck: kA,
  Turtle: HA,
  Tv: CA,
  Tv2: Js,
  TvMinimal: Js,
  TvMinimalPlay: SA,
  Twitch: VA,
  Twitter: LA,
  Type: TA,
  TypeOutline: PA,
  Umbrella: BA,
  UmbrellaOff: RA,
  Underline: EA,
  Undo: zA,
  Undo2: IA,
  UndoDot: DA,
  UnfoldHorizontal: ZA,
  UnfoldVertical: FA,
  Ungroup: UA,
  University: js,
  Unlink: OA,
  Unlink2: WA,
  Unlock: wh,
  UnlockKeyhole: bh,
  Unplug: qA,
  Upload: _A,
  UploadCloud: _e,
  Usb: GA,
  User: ak,
  User2: nn,
  UserCheck: NA,
  UserCheck2: tn,
  UserCircle: Fe,
  UserCircle2: Ze,
  UserCog: $A,
  UserCog2: an,
  UserMinus: XA,
  UserMinus2: en,
  UserPen: YA,
  UserPlus: KA,
  UserPlus2: hn,
  UserRound: nn,
  UserRoundCheck: tn,
  UserRoundCog: an,
  UserRoundMinus: en,
  UserRoundPen: QA,
  UserRoundPlus: hn,
  UserRoundSearch: JA,
  UserRoundX: sn,
  UserSearch: jA,
  UserSquare: Gs,
  UserSquare2: _s,
  UserX: tk,
  UserX2: sn,
  Users: ek,
  Users2: cn,
  UsersRound: cn,
  Utensils: dn,
  UtensilsCrossed: on,
  UtilityPole: hk,
  Variable: sk,
  Vault: nk,
  Vegan: ck,
  VenetianMask: ok,
  Verified: G0,
  Vibrate: rk,
  VibrateOff: dk,
  Video: pk,
  VideoOff: ik,
  Videotape: lk,
  View: Mk,
  Voicemail: vk,
  Volleyball: gk,
  Volume: fk,
  Volume1: mk,
  Volume2: yk,
  VolumeOff: uk,
  VolumeX: xk,
  Vote: bk,
  Wallet: Ak,
  Wallet2: rn,
  WalletCards: wk,
  WalletMinimal: rn,
  Wallpaper: kk,
  Wand: Hk,
  Wand2: pn,
  WandSparkles: pn,
  Warehouse: Sk,
  WashingMachine: Ck,
  Watch: Vk,
  Waves: Pk,
  WavesLadder: Lk,
  Waypoints: Tk,
  Webcam: Rk,
  Webhook: Ek,
  WebhookOff: Bk,
  Weight: Ik,
  Wheat: zk,
  WheatOff: Dk,
  WholeWord: Zk,
  Wifi: qk,
  WifiHigh: Fk,
  WifiLow: Uk,
  WifiOff: Wk,
  WifiZero: Ok,
  Wind: Gk,
  WindArrowDown: _k,
  Wine: $k,
  WineOff: Nk,
  Workflow: Xk,
  Worm: Yk,
  WrapText: Kk,
  Wrench: Qk,
  X: Jk,
  XCircle: Ue,
  XOctagon: Ch,
  XSquare: Ns,
  Youtube: jk,
  Zap: aH,
  ZapOff: tH,
  ZoomIn: eH,
  ZoomOut: hH
}, Symbol.toStringTag, {
  value: "Module"
}));
const nH = ({
  icons: _0x493526 = {},
  nameAttr: _0x5b9ae1 = "data-lucide",
  attrs: _0x543b53 = {}
} = {}) => {
  if (!Object.values(_0x493526).length) {
    throw new Error("Please provide an icons object.\nIf you want to use all the icons you can import it like:\n `import { createIcons, icons } from 'lucide';\nlucide.createIcons({icons});`");
  }
  if (typeof document === "undefined") {
    throw new Error("`createIcons()` only works in a browser environment.");
  }
  const _0x56a405 = document.querySelectorAll("[" + _0x5b9ae1 + "]");
  Array.from(_0x56a405).forEach(_0x50906d => E0(_0x50906d, {
    nameAttr: _0x5b9ae1,
    icons: _0x493526,
    attrs: _0x543b53
  }));
  if (_0x5b9ae1 === "data-lucide") {
    const _0x4dc08b = document.querySelectorAll("[icon-name]");
    if (_0x4dc08b.length > 0) {
      console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide");
      Array.from(_0x4dc08b).forEach(_0x456b60 => E0(_0x456b60, {
        nameAttr: "icon-name",
        icons: _0x493526,
        attrs: _0x543b53
      }));
    }
  }
};
const cH = "broken_crown";
const oH = "codex-clipboard-fb52aaa5-4245-4da6-a695-ec481567b9c6.webp";
const dH = "quadratic";
const rH = {
  west: [{
    x: -50,
    y: 486
  }, {
    x: 85,
    y: 478
  }, {
    x: 235,
    y: 410
  }, {
    x: 365,
    y: 332
  }, {
    x: 500,
    y: 285
  }, {
    x: 635,
    y: 310
  }, {
    x: 785,
    y: 337
  }, {
    x: 925,
    y: 350
  }, {
    x: 1118,
    y: 387
  }, {
    x: 1250,
    y: 387
  }],
  north: [{
    x: 216,
    y: -50
  }, {
    x: 220,
    y: 62
  }, {
    x: 292,
    y: 133
  }, {
    x: 420,
    y: 190
  }, {
    x: 500,
    y: 285
  }, {
    x: 635,
    y: 310
  }, {
    x: 785,
    y: 337
  }, {
    x: 925,
    y: 350
  }, {
    x: 1118,
    y: 387
  }, {
    x: 1250,
    y: 387
  }],
  westDetour: [{
    x: -50,
    y: 486
  }, {
    x: 90,
    y: 478
  }, {
    x: 235,
    y: 430
  }, {
    x: 350,
    y: 525
  }, {
    x: 520,
    y: 590
  }, {
    x: 710,
    y: 580
  }, {
    x: 875,
    y: 515
  }, {
    x: 1015,
    y: 435
  }, {
    x: 1118,
    y: 387
  }, {
    x: 1250,
    y: 387
  }],
  northDetour: [{
    x: 216,
    y: -50
  }, {
    x: 220,
    y: 62
  }, {
    x: 292,
    y: 133
  }, {
    x: 420,
    y: 190
  }, {
    x: 535,
    y: 92
  }, {
    x: 710,
    y: 64
  }, {
    x: 845,
    y: 122
  }, {
    x: 925,
    y: 258
  }, {
    x: 1010,
    y: 350
  }, {
    x: 1118,
    y: 387
  }, {
    x: 1250,
    y: 387
  }]
};
const iH = ["west", "north", "westDetour", "northDetour"];
const pH = ["west", "north"];
const lH = ["westDetour", "northDetour"];
const MH = [{
  x: 427,
  y: 78
}, {
  x: 848,
  y: 79
}, {
  x: 219,
  y: 190
}, {
  x: 372,
  y: 260
}, {
  x: 216,
  y: 324
}, {
  x: 956,
  y: 241
}, {
  x: 816,
  y: 381
}, {
  x: 639,
  y: 428
}, {
  x: 437,
  y: 454
}, {
  x: 1009,
  y: 481
}, {
  x: 483,
  y: 650
}, {
  x: 698,
  y: 652
}];
const vH = [{
  x: 0,
  y: 486
}, {
  x: 216,
  y: 0
}];
const gH = {
  x: 1118,
  y: 387
};
const mH = {
  x: 628,
  y: 282
};
const Cn = {
  mapId: cH,
  reference: oH,
  curve: dH,
  paths: rH,
  drawRoutes: iH,
  routes: pH,
  activeRoutes: lH,
  pads: MH,
  entrances: vH,
  destination: gH,
  interaction: mH
};
const yH = "storm_air_dock";
const uH = "用户附件 (3).webp";
const xH = "quadratic";
const fH = {
  spiral: [{
    x: -50,
    y: 145
  }, {
    x: 195,
    y: 145
  }, {
    x: 315,
    y: 255
  }, {
    x: 255,
    y: 450
  }, {
    x: 390,
    y: 585
  }, {
    x: 650,
    y: 575
  }, {
    x: 800,
    y: 455
  }, {
    x: 820,
    y: 270
  }, {
    x: 680,
    y: 160
  }, {
    x: 855,
    y: 75
  }, {
    x: 1040,
    y: 170
  }, {
    x: 1015,
    y: 335
  }, {
    x: 1250,
    y: 335
  }],
  airlane: [{
    x: -50,
    y: 145
  }, {
    x: 230,
    y: 145
  }, {
    x: 405,
    y: 265
  }, {
    x: 610,
    y: 220
  }, {
    x: 790,
    y: 315
  }, {
    x: 1015,
    y: 335
  }, {
    x: 1250,
    y: 335
  }],
  cloudloop: [{
    x: -50,
    y: 145
  }, {
    x: 190,
    y: 145
  }, {
    x: 335,
    y: 65
  }, {
    x: 545,
    y: 95
  }, {
    x: 650,
    y: 220
  }, {
    x: 790,
    y: 315
  }, {
    x: 905,
    y: 485
  }, {
    x: 1080,
    y: 475
  }, {
    x: 1015,
    y: 335
  }, {
    x: 1250,
    y: 335
  }]
};
const bH = ["spiral", "airlane", "cloudloop"];
const wH = [{
  x: 1133,
  y: 261
}, {
  x: 1029,
  y: 80
}, {
  x: 993,
  y: 570
}, {
  x: 825,
  y: 178
}, {
  x: 722,
  y: 418
}, {
  x: 621,
  y: 666
}, {
  x: 587,
  y: 308
}, {
  x: 511,
  y: 506
}, {
  x: 479,
  y: 176
}, {
  x: 363,
  y: 386
}, {
  x: 273,
  y: 592
}, {
  x: 191,
  y: 387
}, {
  x: 97,
  y: 235
}];
const AH = [{
  x: 0,
  y: 145
}];
const kH = {
  x: 1200,
  y: 335
};
const HH = {
  x: 610,
  y: 110
};
const Vn = {
  mapId: yH,
  reference: uH,
  curve: xH,
  paths: fH,
  routes: bH,
  pads: wH,
  entrances: AH,
  destination: kH,
  interaction: HH
};
const SH = "sunken_foundry";
const CH = "用户附件 (4).webp";
const VH = "quadratic";
const LH = {
  main: [{
    x: -50,
    y: 535
  }, {
    x: 165,
    y: 535
  }, {
    x: 275,
    y: 395
  }, {
    x: 225,
    y: 220
  }, {
    x: 390,
    y: 105
  }, {
    x: 560,
    y: 210
  }, {
    x: 665,
    y: 350
  }, {
    x: 830,
    y: 315
  }, {
    x: 955,
    y: 415
  }, {
    x: 1090,
    y: 285
  }, {
    x: 1250,
    y: 285
  }],
  coolant: [{
    x: -50,
    y: 535
  }, {
    x: 165,
    y: 535
  }, {
    x: 275,
    y: 395
  }, {
    x: 430,
    y: 505
  }, {
    x: 650,
    y: 535
  }, {
    x: 830,
    y: 315
  }, {
    x: 955,
    y: 415
  }, {
    x: 1090,
    y: 285
  }, {
    x: 1250,
    y: 285
  }],
  furnace: [{
    x: -50,
    y: 535
  }, {
    x: 165,
    y: 535
  }, {
    x: 275,
    y: 395
  }, {
    x: 420,
    y: 280
  }, {
    x: 610,
    y: 300
  }, {
    x: 830,
    y: 315
  }, {
    x: 955,
    y: 415
  }, {
    x: 1090,
    y: 285
  }, {
    x: 1250,
    y: 285
  }]
};
const PH = ["main", "coolant"];
const TH = ["main", "furnace"];
const RH = [{
  x: 1130,
  y: 211
}, {
  x: 1026,
  y: 469
}, {
  x: 965,
  y: 299
}, {
  x: 838,
  y: 434
}, {
  x: 773,
  y: 237
}, {
  x: 725,
  y: 581
}, {
  x: 473,
  y: 68
}, {
  x: 451,
  y: 599
}, {
  x: 448,
  y: 373
}, {
  x: 284,
  y: 524
}, {
  x: 254,
  y: 108
}, {
  x: 149,
  y: 262
}, {
  x: 97,
  y: 625
}];
const BH = [{
  x: 0,
  y: 535
}];
const EH = {
  x: 1200,
  y: 285
};
const IH = {
  x: 575,
  y: 350
};
const Ln = {
  mapId: SH,
  reference: CH,
  curve: VH,
  paths: LH,
  routes: PH,
  activeRoutes: TH,
  pads: RH,
  entrances: BH,
  destination: EH,
  interaction: IH
};
const DH = "leviathan_bone_sea";
const zH = "用户附件 (5).webp";
const ZH = "quadratic";
const FH = {
  main: [{
    x: -50,
    y: 390
  }, {
    x: 190,
    y: 390
  }, {
    x: 320,
    y: 285
  }, {
    x: 500,
    y: 330
  }, {
    x: 650,
    y: 255
  }, {
    x: 810,
    y: 350
  }, {
    x: 960,
    y: 300
  }, {
    x: 1080,
    y: 410
  }, {
    x: 1250,
    y: 410
  }],
  elite: [{
    x: -50,
    y: 390
  }, {
    x: 190,
    y: 390
  }, {
    x: 320,
    y: 285
  }, {
    x: 455,
    y: 105
  }, {
    x: 665,
    y: 105
  }, {
    x: 810,
    y: 350
  }, {
    x: 960,
    y: 300
  }, {
    x: 1080,
    y: 410
  }, {
    x: 1250,
    y: 410
  }],
  boneTunnel: [{
    x: -50,
    y: 390
  }, {
    x: 190,
    y: 390
  }, {
    x: 320,
    y: 285
  }, {
    x: 430,
    y: 510
  }, {
    x: 650,
    y: 550
  }, {
    x: 810,
    y: 350
  }, {
    x: 960,
    y: 300
  }, {
    x: 1080,
    y: 410
  }, {
    x: 1250,
    y: 410
  }]
};
const UH = ["main", "elite", "boneTunnel"];
const WH = [{
  x: 1131,
  y: 336
}, {
  x: 1024,
  y: 478
}, {
  x: 930,
  y: 232
}, {
  x: 844,
  y: 433
}, {
  x: 752,
  y: 100
}, {
  x: 629,
  y: 638
}, {
  x: 594,
  y: 195
}, {
  x: 557,
  y: 401
}, {
  x: 379,
  y: 77
}, {
  x: 338,
  y: 516
}, {
  x: 286,
  y: 202
}, {
  x: 97,
  y: 480
}];
const OH = [{
  x: 0,
  y: 390
}];
const qH = {
  x: 1200,
  y: 410
};
const _H = {
  x: 790,
  y: 650
};
const Pn = {
  mapId: DH,
  reference: zH,
  curve: ZH,
  paths: FH,
  routes: UH,
  pads: WH,
  entrances: OH,
  destination: qH,
  interaction: _H
};
const GH = "mist_boiler_city";
const NH = "mist-boiler-city-final.webp";
const $H = "quadratic";
const XH = {
  left: [{
    x: -50,
    y: 165
  }, {
    x: 165,
    y: 165
  }, {
    x: 260,
    y: 195
  }, {
    x: 360,
    y: 235
  }, {
    x: 470,
    y: 220
  }, {
    x: 600,
    y: 210
  }, {
    x: 720,
    y: 225
  }, {
    x: 820,
    y: 295
  }, {
    x: 915,
    y: 280
  }, {
    x: 1010,
    y: 320
  }, {
    x: 1125,
    y: 340
  }, {
    x: 1250,
    y: 340
  }],
  right: [{
    x: -50,
    y: 410
  }, {
    x: 205,
    y: 410
  }, {
    x: 275,
    y: 455
  }, {
    x: 390,
    y: 480
  }, {
    x: 520,
    y: 465
  }, {
    x: 650,
    y: 440
  }, {
    x: 720,
    y: 390
  }, {
    x: 820,
    y: 295
  }, {
    x: 915,
    y: 280
  }, {
    x: 1010,
    y: 320
  }, {
    x: 1125,
    y: 340
  }, {
    x: 1250,
    y: 340
  }],
  pressure: [{
    x: -50,
    y: 165
  }, {
    x: 165,
    y: 165
  }, {
    x: 260,
    y: 195
  }, {
    x: 360,
    y: 280
  }, {
    x: 520,
    y: 315
  }, {
    x: 690,
    y: 315
  }, {
    x: 820,
    y: 295
  }, {
    x: 915,
    y: 280
  }, {
    x: 1010,
    y: 320
  }, {
    x: 1125,
    y: 340
  }, {
    x: 1250,
    y: 340
  }]
};
const YH = ["left", "right"];
const KH = [{
  x: 1115,
  y: 470
}, {
  x: 946,
  y: 460
}, {
  x: 946,
  y: 246
}, {
  x: 893,
  y: 386
}, {
  x: 739,
  y: 197
}, {
  x: 612,
  y: 524
}, {
  x: 408,
  y: 572
}, {
  x: 431,
  y: 133
}, {
  x: 397,
  y: 355
}, {
  x: 251,
  y: 613
}, {
  x: 275,
  y: 111
}, {
  x: 98,
  y: 222
}];
const QH = [{
  x: 165,
  y: 165
}, {
  x: 205,
  y: 410
}];
const JH = {
  x: 1125,
  y: 340
};
const jH = {
  x: 571,
  y: 55
};
const Tn = {
  mapId: GH,
  reference: NH,
  curve: $H,
  paths: XH,
  routes: YH,
  pads: KH,
  entrances: QH,
  destination: JH,
  interaction: jH
};
const Rn = "tide-crown-audio-muted";
const Bn = "tide-crown-audio-settings";
const Kt = {
  opening: "./audio/tide-crown-main-theme.mp3",
  double_tide_harbor: "./audio/tide-crown/maps/double-tide-harbor.mp3",
  broken_crown: "./audio/tide-crown/maps/broken-crown.mp3",
  storm_air_dock: "./audio/tide-crown/maps/storm-air-dock.mp3",
  sunken_foundry: "./audio/tide-crown/maps/sunken-foundry.mp3",
  leviathan_bone_sea: "./audio/tide-crown/maps/leviathan-bone-sea.mp3",
  mist_boiler_city: "./audio/tide-crown/maps/mist-boiler-city.mp3",
  boss: "./audio/tide-crown/maps/dagon-boss.mp3"
};
const ln = {
  build: {
    src: "./audio/tower-defense/tower-build.mp3",
    gain: 0.82,
    playbackRate: [0.97, 1.03]
  },
  crossbow: {
    src: "./audio/tower-defense/crossbow-shot.mp3",
    gain: 0.48,
    playbackRate: [0.96, 1.05]
  },
  cannon: {
    src: "./audio/tower-defense/cannon-shot.mp3",
    gain: 0.62,
    playbackRate: [0.97, 1.02]
  },
  barracks: {
    src: "./audio/tower-defense/barracks-strike.mp3",
    gain: 0.44,
    playbackRate: [0.94, 1.06]
  },
  storm: {
    src: "./audio/tower-defense/storm-zap.mp3",
    gain: 0.48,
    playbackRate: [0.97, 1.04]
  },
  time: {
    src: "./audio/tower-defense/time-tide-cast.mp3",
    gain: 0.5,
    playbackRate: [0.96, 1.03]
  },
  "map-event-tide": {
    src: "./audio/map-events/tide-surge.mp3",
    gain: 0.62,
    playbackRate: [0.98, 1.02]
  },
  "map-event-bridge": {
    src: "./audio/map-events/bridge-break.mp3",
    gain: 0.62,
    playbackRate: [0.98, 1.02]
  },
  "map-event-storm": {
    src: "./audio/map-events/storm-strike.mp3",
    gain: 0.58,
    playbackRate: [0.98, 1.02]
  },
  "map-event-foundry": {
    src: "./audio/map-events/foundry-shift.mp3",
    gain: 0.58,
    playbackRate: [0.98, 1.02]
  },
  "map-event-crystal": {
    src: "./audio/map-events/crystal-resonance.mp3",
    gain: 0.58,
    playbackRate: [0.98, 1.02]
  },
  "map-event-boiler": {
    src: "./audio/map-events/boiler-pressure.mp3",
    gain: 0.6,
    playbackRate: [0.98, 1.02]
  },
  "interaction-tide": {
    src: "./audio/map-interactions/tide-gate.mp3",
    gain: 0.7,
    playbackRate: [0.98, 1.02]
  },
  "interaction-bridge": {
    src: "./audio/map-interactions/bridge-brake.mp3",
    gain: 0.7,
    playbackRate: [0.98, 1.02]
  },
  "interaction-storm": {
    src: "./audio/map-interactions/lightning-rod.mp3",
    gain: 0.66,
    playbackRate: [0.98, 1.02]
  },
  "interaction-foundry": {
    src: "./audio/map-interactions/coolant-valve.mp3",
    gain: 0.68,
    playbackRate: [0.98, 1.02]
  },
  "interaction-crystal": {
    src: "./audio/map-interactions/tide-crystal.mp3",
    gain: 0.66,
    playbackRate: [0.98, 1.02]
  },
  "interaction-boiler": {
    src: "./audio/map-interactions/pressure-release.mp3",
    gain: 0.7,
    playbackRate: [0.98, 1.02]
  },
  "enemy-down": {
    src: "./audio/battle-feedback/enemy-down.mp3",
    gain: 0.38,
    playbackRate: [0.92, 1.08]
  },
  "boss-down": {
    src: "./audio/battle-feedback/boss-down.mp3",
    gain: 0.72,
    playbackRate: [0.98, 1.01]
  },
  wave: {
    src: "./audio/battle-feedback/wave-start.mp3",
    gain: 0.6,
    playbackRate: [0.99, 1.01]
  },
  "elite-wave": {
    src: "./audio/battle-feedback/elite-wave.mp3",
    gain: 0.64,
    playbackRate: [0.99, 1.01]
  },
  "boss-prelude": {
    src: "./audio/battle-feedback/boss-prelude.mp3",
    gain: 0.7,
    playbackRate: [0.99, 1.01]
  },
  "early-wave": {
    src: "./audio/tide-crown/sfx/early-wave.mp3",
    gain: 0.58,
    playbackRate: [0.98, 1.03]
  },
  hit: {
    src: "./audio/tide-crown/sfx/enemy-hit.mp3",
    gain: 0.34,
    playbackRate: [0.96, 1.04]
  },
  "core-hit": {
    src: "./audio/tide-crown/sfx/core-hit.mp3",
    gain: 0.72,
    playbackRate: [0.98, 1.01]
  },
  coin: {
    src: "./audio/tide-crown/sfx/coin.mp3",
    gain: 0.46,
    playbackRate: [0.98, 1.04]
  },
  upgrade: {
    src: "./audio/tide-crown/sfx/upgrade.mp3",
    gain: 0.62,
    playbackRate: [1, 1]
  },
  wave: {
    src: "./audio/tide-crown/sfx/wave-start.mp3",
    gain: 0.64,
    playbackRate: [1, 1]
  },
  "elite-wave": {
    src: "./audio/tide-crown/sfx/elite-wave.mp3",
    gain: 0.72,
    playbackRate: [1, 1]
  },
  "boss-prelude": {
    src: "./audio/tide-crown/sfx/boss-prelude.mp3",
    gain: 0.8,
    playbackRate: [1, 1]
  },
  boss: {
    src: "./audio/tide-crown/sfx/boss-roar.mp3",
    gain: 0.78,
    playbackRate: [1, 1]
  },
  "dagon-entry": {
    src: "./audio/tide-crown/sfx/dagon-entry.mp3",
    gain: 0.86,
    playbackRate: [1, 1]
  },
  "dagon-step": {
    src: "./audio/tide-crown/sfx/dagon-step.mp3",
    gain: 0.58,
    playbackRate: [0.96, 1.03]
  },
  "dagon-attack": {
    src: "./audio/tide-crown/sfx/dagon-attack.mp3",
    gain: 0.76,
    playbackRate: [0.98, 1.02]
  },
  victory: {
    src: "./audio/tide-crown/sfx/victory.mp3",
    gain: 0.7,
    playbackRate: [1, 1]
  },
  defeat: {
    src: "./audio/tide-crown/sfx/castle-fall.mp3",
    gain: 0.82,
    playbackRate: [1, 1]
  },
  priest: {
    src: "./audio/tide-crown/sfx/priest-cast.mp3",
    gain: 0.55,
    playbackRate: [0.98, 1.03]
  },
  shield: {
    src: "./audio/tide-crown/sfx/shield-hit.mp3",
    gain: 0.5,
    playbackRate: [0.98, 1.03]
  },
  "shield-break": {
    src: "./audio/tide-crown/sfx/shield-break.mp3",
    gain: 0.66,
    playbackRate: [1, 1]
  },
  phase: {
    src: "./audio/tide-crown/sfx/phase.mp3",
    gain: 0.5,
    playbackRate: [0.97, 1.03]
  },
  "weakpoint-break": {
    src: "./audio/tide-crown/sfx/weakpoint-break.mp3",
    gain: 0.78,
    playbackRate: [1, 1]
  },
  "boss-skill": {
    src: "./audio/tide-crown/sfx/boss-skill.mp3",
    gain: 0.72,
    playbackRate: [0.98, 1.02]
  },
  "enemy-down": {
    src: "./audio/tide-crown/sfx/enemy-down.mp3",
    gain: 0.34,
    playbackRate: [0.94, 1.06]
  },
  "boss-down": {
    src: "./audio/tide-crown/sfx/boss-down.mp3",
    gain: 0.86,
    playbackRate: [1, 1]
  },
  interaction: {
    src: "./audio/tide-crown/sfx/interaction.mp3",
    gain: 0.64,
    playbackRate: [1, 1]
  },
  rally: {
    src: "./audio/tide-crown/sfx/rally.mp3",
    gain: 0.5,
    playbackRate: [0.98, 1.02]
  },
  pierce: {
    src: "./audio/tide-crown/sfx/pierce.mp3",
    gain: 0.54,
    playbackRate: [0.97, 1.03]
  },
  pull: {
    src: "./audio/tide-crown/sfx/pull.mp3",
    gain: 0.54,
    playbackRate: [0.98, 1.02]
  },
  resonance: {
    src: "./audio/tide-crown/sfx/resonance.mp3",
    gain: 0.58,
    playbackRate: [1, 1]
  }
};
function tS() {
  try {
    const _0x2993c8 = JSON.parse(window.localStorage.getItem(Bn) || "{}");
    return {
      musicVolume: Number.isFinite(_0x2993c8.musicVolume) ? _0x2993c8.musicVolume : 0.42,
      sfxVolume: Number.isFinite(_0x2993c8.sfxVolume) ? _0x2993c8.sfxVolume : 0.72
    };
  } catch {
    return {
      musicVolume: 0.42,
      sfxVolume: 0.72
    };
  }
}
function aS() {
  try {
    return window.localStorage.getItem(Rn) === "1";
  } catch {
    return false;
  }
}
function eS(_0x98f301 = "double_tide_harbor") {
  const _0x3fc5c0 = window.AudioContext || window.webkitAudioContext;
  const _0x2b5ef4 = new Audio(Kt.opening);
  _0x2b5ef4.loop = true;
  _0x2b5ef4.preload = "auto";
  const _0x965f3c = tS();
  _0x2b5ef4.volume = _0x965f3c.musicVolume;
  let _0x4b9d71 = null;
  let _0x16fdbc = null;
  let _0x1248a9 = null;
  let _0x2a4662 = aS();
  let _0x366f74 = false;
  let _0x2222c7 = "opening";
  const _0x2c24e3 = new Map();
  const _0x3d124f = new Map();
  const _0x20be66 = new Map();
  function _0x340f0d() {
    if (!_0x3fc5c0) {
      return null;
    }
    if (!_0x4b9d71) {
      _0x4b9d71 = new _0x3fc5c0();
      _0x16fdbc = _0x4b9d71.createGain();
      _0x16fdbc.gain.value = 0.52;
      _0x16fdbc.connect(_0x4b9d71.destination);
      _0x1248a9 = _0x4b9d71.createBuffer(1, _0x4b9d71.sampleRate, _0x4b9d71.sampleRate);
      const _0x3733c8 = _0x1248a9.getChannelData(0);
      for (let _0x245d7e = 0; _0x245d7e < _0x3733c8.length; _0x245d7e += 1) {
        _0x3733c8[_0x245d7e] = Math.random() * 2 - 1;
      }
    }
    return _0x4b9d71;
  }
  function _0x3e853e() {
    Object.entries(ln).forEach(([_0x4d2e56, _0x56ad56]) => function (_0x35338a, _0x5ed5dd) {
      if (!_0x4b9d71 || _0x20be66.has(_0x35338a)) {
        return _0x20be66.get(_0x35338a);
      }
      const _0x3f43a5 = fetch(_0x5ed5dd.src).then(_0x40f740 => {
        if (!_0x40f740.ok) {
          throw new Error("Unable to load audio sample: " + _0x5ed5dd.src);
        }
        return _0x40f740.arrayBuffer();
      }).then(_0x11e68e => _0x4b9d71.decodeAudioData(_0x11e68e)).then(_0x1b17fa => {
        _0x3d124f.set(_0x35338a, _0x1b17fa);
        return _0x1b17fa;
      }).catch(() => null);
      _0x20be66.set(_0x35338a, _0x3f43a5);
      return _0x3f43a5;
    }(_0x4d2e56, _0x56ad56));
  }
  async function _0x50066a() {
    const _0xe86b23 = _0x340f0d();
    if ((_0xe86b23 == null ? undefined : _0xe86b23.state) === "suspended") {
      await _0xe86b23.resume().catch(() => {});
    }
    _0x366f74 = true;
    _0x3e853e();
    if (!_0x2a4662 && _0x2b5ef4.paused) {
      await _0x2b5ef4.play().catch(() => {});
    }
  }
  async function _0x3eaddb(_0x4f2fde) {
    const _0xd86c0e = Kt[_0x4f2fde] ? _0x4f2fde : _0x98f301;
    if (_0x2222c7 === _0xd86c0e) {
      return;
    }
    _0x2222c7 = _0xd86c0e;
    const _0x3332f1 = _0x366f74 && !_0x2a4662 && !_0x2b5ef4.paused;
    _0x2b5ef4.pause();
    _0x2b5ef4.src = Kt[_0xd86c0e];
    _0x2b5ef4.load();
    if (_0x3332f1) {
      await _0x2b5ef4.play().catch(() => {});
    }
  }
  function _0x1ba4d6(_0x26e169, _0x12f80d, _0x56d311, _0x58e2aa, _0x26c9e5, _0x315d3d = "sine") {
    if (!_0x4b9d71 || !_0x16fdbc) {
      return;
    }
    const _0x33166c = _0x4b9d71.currentTime + _0x26e169;
    const _0x1f671f = _0x4b9d71.createOscillator();
    const _0x38b912 = _0x4b9d71.createGain();
    _0x1f671f.type = _0x315d3d;
    _0x1f671f.frequency.setValueAtTime(Math.max(20, _0x56d311), _0x33166c);
    _0x1f671f.frequency.exponentialRampToValueAtTime(Math.max(20, _0x58e2aa), _0x33166c + _0x12f80d);
    _0x38b912.gain.setValueAtTime(0.0001, _0x33166c);
    _0x38b912.gain.exponentialRampToValueAtTime(Math.max(0.001, _0x26c9e5), _0x33166c + Math.min(0.025, _0x12f80d * 0.18));
    _0x38b912.gain.exponentialRampToValueAtTime(0.0001, _0x33166c + _0x12f80d);
    _0x1f671f.connect(_0x38b912);
    _0x38b912.connect(_0x16fdbc);
    _0x1f671f.start(_0x33166c);
    _0x1f671f.stop(_0x33166c + _0x12f80d + 0.02);
  }
  function _0x5464ff(_0x316723, _0x3aa038, _0x273130, _0x3abafa = 1200, _0xc91a5e = "lowpass") {
    if (!_0x4b9d71 || !_0x16fdbc || !_0x1248a9) {
      return;
    }
    const _0x50ee43 = _0x4b9d71.currentTime + _0x316723;
    const _0x35355e = _0x4b9d71.createBufferSource();
    const _0x413086 = _0x4b9d71.createBiquadFilter();
    const _0x249a0a = _0x4b9d71.createGain();
    _0x35355e.buffer = _0x1248a9;
    _0x413086.type = _0xc91a5e;
    _0x413086.frequency.value = _0x3abafa;
    _0x249a0a.gain.setValueAtTime(Math.max(0.001, _0x273130), _0x50ee43);
    _0x249a0a.gain.exponentialRampToValueAtTime(0.0001, _0x50ee43 + _0x3aa038);
    _0x35355e.connect(_0x413086);
    _0x413086.connect(_0x249a0a);
    _0x249a0a.connect(_0x16fdbc);
    _0x35355e.start(_0x50ee43, Math.random() * Math.max(0, 1 - _0x3aa038), _0x3aa038);
  }
  function _0x344226() {
    try {
      window.localStorage.setItem(Bn, JSON.stringify(_0x965f3c));
    } catch {}
  }
  return {
    dispose: function () {
      _0x2b5ef4.pause();
      _0x3d124f.clear();
      _0x20be66.clear();
      if (_0x4b9d71 != null) {
        _0x4b9d71.close().catch(() => {});
      }
    },
    getSettings: () => ({
      ..._0x965f3c
    }),
    isMusicPlaying: () => !_0x2b5ef4.paused,
    isMuted: () => _0x2a4662,
    play: function (_0xa502df) {
      if (_0xa502df === "boss-prelude" || _0xa502df === "boss" || _0xa502df === "dagon-entry") {
        _0x3eaddb("boss");
      }
      if (_0xa502df === "boss-down" || _0xa502df === "victory" || _0xa502df === "defeat") {
        _0x3eaddb(_0x98f301);
      }
      if (!_0x2a4662 && _0x366f74 && _0x340f0d() && function (_0xc0ea5a, _0x141a4b) {
        const _0xbc1237 = performance.now();
        return !(_0xbc1237 - (_0x2c24e3.get(_0xc0ea5a) || 0) < _0x141a4b) && !(_0x2c24e3.set(_0xc0ea5a, _0xbc1237), 0);
      }(_0xa502df, {
        crossbow: 80,
        cannon: 180,
        barracks: 120,
        storm: 130,
        time: 180,
        hit: 140,
        coin: 100,
        shield: 420,
        phase: 420,
        priest: 500,
        "boss-skill": 900,
        "dagon-entry": 5000,
        "dagon-step": 460,
        "dagon-attack": 850,
        "weakpoint-break": 700,
        pierce: 240,
        pull: 320,
        resonance: 500,
        "elite-wave": 1200,
        "boss-prelude": 2200,
        "enemy-down": 100,
        "boss-down": 1200,
        "early-wave": 700,
        "map-event-tide": 1000,
        "map-event-bridge": 1000,
        "map-event-storm": 900,
        "map-event-foundry": 1000,
        "map-event-crystal": 1000,
        "map-event-boiler": 1000,
        "interaction-tide": 500,
        "interaction-bridge": 500,
        "interaction-storm": 500,
        "interaction-foundry": 500,
        "interaction-crystal": 500,
        "interaction-boiler": 500,
        tactic: 120,
        rally: 280
      }[_0xa502df] || 40)) {
        document.documentElement.dataset.lastGameSound = _0xa502df;
        if (!function (_0x4e66f7) {
          const _0x3a321f = ln[_0x4e66f7];
          const _0x26cd1f = _0x3d124f.get(_0x4e66f7);
          if (!_0x3a321f || !_0x26cd1f || !_0x4b9d71 || !_0x16fdbc) {
            return false;
          }
          const _0x10badd = _0x4b9d71.createBufferSource();
          const _0x464d02 = _0x4b9d71.createGain();
          const [_0x2e5b02, _0x4a2afb] = _0x3a321f.playbackRate;
          _0x10badd.buffer = _0x26cd1f;
          _0x10badd.playbackRate.value = _0x2e5b02 + Math.random() * (_0x4a2afb - _0x2e5b02);
          _0x464d02.gain.value = _0x3a321f.gain * _0x965f3c.sfxVolume;
          _0x10badd.connect(_0x464d02);
          _0x464d02.connect(_0x16fdbc);
          _0x10badd.start();
          return true;
        }(_0xa502df)) {
          if (_0xa502df === "crossbow") {
            _0x5464ff(0, 0.07, 0.15, 3200, "highpass");
            _0x1ba4d6(0, 0.22, 980, 210, 0.2);
            _0x1ba4d6(0.06, 0.18, 1160, 260, 0.12);
          } else if (_0xa502df === "cannon") {
            _0x5464ff(0, 0.62, 0.5, 720);
            _0x1ba4d6(0, 0.58, 115, 38, 0.6);
            _0x1ba4d6(0.04, 0.36, 410, 76, 0.16, "sawtooth");
          } else if (_0xa502df === "barracks") {
            _0x5464ff(0, 0.14, 0.2, 2400, "bandpass");
            [240, 390, 680].forEach((_0x15ddd0, _0x8baf51) => _0x1ba4d6(_0x8baf51 * 0.008, 0.34, _0x15ddd0, _0x15ddd0 * 0.76, 0.12 / (_0x8baf51 + 0.7)));
          } else if (_0xa502df === "storm") {
            _0x5464ff(0, 0.42, 0.23, 2800, "bandpass");
            [0, 0.07, 0.14].forEach((_0x552be3, _0x17b4c4) => _0x1ba4d6(_0x552be3, 0.16, 1120 + _0x17b4c4 * 180, 290, 0.12, "square"));
          } else if (_0xa502df === "time" || _0xa502df === "interaction" || _0xa502df.startsWith("interaction-")) {
            _0x5464ff(0, 0.55, 0.09, 3800, "highpass");
            _0x1ba4d6(0, 0.62, 150, 720, 0.16);
            _0x1ba4d6(0.1, 0.52, 760, 420, 0.1);
          } else if (_0xa502df.startsWith("map-event-")) {
            _0x5464ff(0, 0.72, 0.2, 820, "lowpass");
            _0x1ba4d6(0, 0.74, 122, 54, 0.24, "sawtooth");
            _0x1ba4d6(0.12, 0.58, 360, 116, 0.1);
          } else if (_0xa502df === "hit" || _0xa502df === "core-hit") {
            _0x5464ff(0, _0xa502df === "core-hit" ? 0.34 : 0.09, _0xa502df === "core-hit" ? 0.42 : 0.055, 1150);
            _0x1ba4d6(0, _0xa502df === "core-hit" ? 0.42 : 0.11, _0xa502df === "core-hit" ? 92 : 210, 48, _0xa502df === "core-hit" ? 0.42 : 0.035);
          } else if (_0xa502df === "build") {
            _0x5464ff(0, 0.13, 0.22, 1900, "bandpass");
            _0x1ba4d6(0, 0.28, 145, 72, 0.28);
            _0x1ba4d6(0.12, 0.34, 650, 990, 0.17);
          } else if (_0xa502df === "upgrade") {
            [330, 440, 587, 784].forEach((_0x4c5658, _0x4a8580) => _0x1ba4d6(_0x4a8580 * 0.14, 0.44, _0x4c5658, _0x4c5658 * 1.08, 0.15));
          } else if (_0xa502df === "coin") {
            _0x1ba4d6(0, 0.24, 880, 1260, 0.12);
            _0x1ba4d6(0.08, 0.22, 1180, 1580, 0.09);
          } else if (_0xa502df === "wave" || _0xa502df === "opening-wave") {
            [0, 0.58].forEach((_0x53cf2, _0x46b6c2) => {
              _0x1ba4d6(_0x53cf2, 0.62, _0x46b6c2 ? 165 : 138, _0x46b6c2 ? 108 : 90, 0.34, "sawtooth");
              _0x1ba4d6(_0x53cf2, 0.68, _0x46b6c2 ? 247 : 207, _0x46b6c2 ? 186 : 154, 0.15);
            });
          } else if (_0xa502df === "dagon-entry") {
            _0x5464ff(0, 2.1, 0.2, 420, "lowpass");
            _0x1ba4d6(0, 2.4, 68, 31, 0.46, "sawtooth");
            _0x1ba4d6(0.18, 1.8, 112, 42, 0.23);
          } else if (_0xa502df === "dagon-step") {
            _0x5464ff(0, 0.42, 0.24, 360, "lowpass");
            _0x1ba4d6(0, 0.48, 74, 36, 0.34);
          } else if (_0xa502df === "dagon-attack") {
            _0x5464ff(0, 0.58, 0.32, 720, "lowpass");
            _0x1ba4d6(0, 0.7, 108, 43, 0.38, "sawtooth");
            _0x1ba4d6(0.06, 0.42, 380, 92, 0.12);
          } else if (_0xa502df === "boss" || _0xa502df === "defeat") {
            _0x1ba4d6(0, 1.7, _0xa502df === "boss" ? 76 : 70, 38, 0.42, "sawtooth");
            _0x1ba4d6(0.08, 1.45, 112, 52, 0.22);
            _0x5464ff(0, 1.55, 0.16, 480);
          } else if (_0xa502df === "victory") {
            [262, 330, 392, 523].forEach((_0x5e24e7, _0x57a3be) => _0x1ba4d6(_0x57a3be * 0.2, 1.35, _0x5e24e7, _0x5e24e7 * 1.01, 0.17));
            _0x1ba4d6(0.82, 1.05, 784, 590, 0.08);
          } else if (_0xa502df === "priest") {
            [310, 465, 620].forEach((_0x332716, _0xbc4e93) => _0x1ba4d6(_0xbc4e93 * 0.09, 0.72, _0x332716, _0x332716 * 1.42, 0.11));
            _0x5464ff(0, 0.58, 0.06, 2600, "highpass");
          } else if (_0xa502df === "shield") {
            _0x1ba4d6(0, 0.28, 210, 118, 0.18, "square");
            _0x1ba4d6(0.04, 0.38, 780, 390, 0.1);
          } else if (_0xa502df === "shield-break") {
            _0x5464ff(0, 0.42, 0.3, 1850, "bandpass");
            [720, 510, 280].forEach((_0x36fc47, _0xbf43bf) => _0x1ba4d6(_0xbf43bf * 0.045, 0.35, _0x36fc47, _0x36fc47 * 0.55, 0.12));
          } else if (_0xa502df === "phase") {
            _0x1ba4d6(0, 0.48, 520, 180, 0.11);
            _0x1ba4d6(0.02, 0.52, 740, 260, 0.08);
          } else if (_0xa502df === "weakpoint-break") {
            _0x5464ff(0, 0.7, 0.34, 1550, "bandpass");
            [920, 620, 360, 180].forEach((_0x464359, _0x47a9b4) => _0x1ba4d6(_0x47a9b4 * 0.055, 0.54, _0x464359, _0x464359 * 0.48, 0.13, _0x47a9b4 % 2 ? "square" : "sine"));
          } else if (_0xa502df === "boss-skill") {
            _0x1ba4d6(0, 0.92, 96, 42, 0.32, "sawtooth");
            _0x1ba4d6(0.08, 0.74, 280, 92, 0.14);
            _0x5464ff(0, 0.65, 0.12, 720, "lowpass");
          } else if (_0xa502df === "pierce") {
            _0x5464ff(0, 0.24, 0.12, 4200, "highpass");
            _0x1ba4d6(0, 0.38, 1450, 410, 0.13);
          } else if (_0xa502df === "pull") {
            _0x1ba4d6(0, 0.5, 180, 62, 0.18, "sawtooth");
            _0x1ba4d6(0.04, 0.4, 620, 210, 0.08);
          } else if (_0xa502df === "resonance") {
            [392, 523, 659, 784].forEach((_0x411f9e, _0x9f3eb6) => _0x1ba4d6(_0x9f3eb6 * 0.055, 0.58, _0x411f9e, _0x411f9e * 1.04, 0.08));
          } else if (_0xa502df === "elite-wave") {
            [0, 0.44, 0.88].forEach((_0x4967ca, _0x2dfa3e) => {
              _0x1ba4d6(_0x4967ca, 0.52, 154 + _0x2dfa3e * 18, 88, 0.28, "sawtooth");
              _0x1ba4d6(_0x4967ca, 0.58, 231 + _0x2dfa3e * 27, 166, 0.11);
            });
          } else if (_0xa502df === "boss-prelude") {
            _0x1ba4d6(0, 2.1, 68, 31, 0.38, "sawtooth");
            _0x1ba4d6(0.22, 1.8, 102, 44, 0.2);
            _0x5464ff(0, 1.9, 0.14, 420, "lowpass");
          } else if (_0xa502df === "enemy-down") {
            _0x5464ff(0, 0.22, 0.09, 1800, "bandpass");
            _0x1ba4d6(0, 0.2, 190, 72, 0.055);
          } else if (_0xa502df === "boss-down") {
            _0x5464ff(0, 1.2, 0.35, 780, "lowpass");
            [180, 128, 84, 48].forEach((_0x2e43ad, _0x358ccf) => _0x1ba4d6(_0x358ccf * 0.09, 0.88, _0x2e43ad, _0x2e43ad * 0.45, 0.16, "sawtooth"));
          } else if (_0xa502df === "early-wave") {
            [392, 523, 659].forEach((_0x131e48, _0x30e77e) => _0x1ba4d6(_0x30e77e * 0.07, 0.42, _0x131e48, _0x131e48 * 1.18, 0.11));
            _0x5464ff(0, 0.28, 0.06, 2600, "highpass");
          } else if (_0xa502df === "tactic") {
            _0x1ba4d6(0, 0.16, 520, 680, 0.075);
            _0x1ba4d6(0.06, 0.2, 760, 610, 0.05);
          } else if (_0xa502df === "rally") {
            _0x1ba4d6(0, 0.32, 196, 294, 0.11, "square");
            _0x1ba4d6(0.16, 0.38, 294, 440, 0.09);
            _0x5464ff(0, 0.2, 0.045, 1800, "bandpass");
          }
        }
      }
    },
    setMusicTrack: _0x3eaddb,
    setMusicVolume: function (_0x4a2fec) {
      _0x965f3c.musicVolume = Math.max(0, Math.min(1, Number(_0x4a2fec) || 0));
      _0x2b5ef4.volume = _0x965f3c.musicVolume;
      _0x344226();
    },
    setSfxVolume: function (_0x2c51b4) {
      _0x965f3c.sfxVolume = Math.max(0, Math.min(1, Number(_0x2c51b4) || 0));
      _0x344226();
    },
    toggleMuted: async function () {
      _0x2a4662 = !_0x2a4662;
      try {
        window.localStorage.setItem(Rn, _0x2a4662 ? "1" : "0");
      } catch {}
      if (_0x2a4662) {
        _0x2b5ef4.pause();
      } else {
        await _0x50066a();
      }
      return _0x2a4662;
    },
    unlock: _0x50066a
  };
}
const Mn = [["spiral", "盘旋栈桥"], ["airlane", "飞艇捷径"], ["cloudloop", "雷云外环"]];
const vn = [["main", "脊骨主路"], ["elite", "精英骨桥"], ["boneTunnel", "肋骨隧道"]];
function hS(_0x164533) {
  let _0x332c25 = 2166136261;
  for (let _0x532933 = 0; _0x532933 < _0x164533.length; _0x532933 += 1) {
    _0x332c25 ^= _0x164533.charCodeAt(_0x532933);
    _0x332c25 = Math.imul(_0x332c25, 16777619);
  }
  return _0x332c25 >>> 0;
}
function sS(_0x40299e, _0x42f495 = "") {
  if (_0x40299e == null || _0x40299e === "") {
    return Math.random;
  }
  let _0x230436 = hS(_0x40299e + ":" + _0x42f495) || 1831565813;
  return () => {
    _0x230436 += 1831565813;
    let _0x350de5 = _0x230436;
    _0x350de5 = Math.imul(_0x350de5 ^ _0x350de5 >>> 15, _0x350de5 | 1);
    _0x350de5 ^= _0x350de5 + Math.imul(_0x350de5 ^ _0x350de5 >>> 7, _0x350de5 | 61);
    return ((_0x350de5 ^ _0x350de5 >>> 14) >>> 0) / 4294967296;
  };
}
function e2(_0x468802, _0x36764d = {}) {
  return {
    mechanicActive: false,
    mechanicTimer: null,
    routeSpeedModifiers: {},
    announcement: null,
    playCue: false,
    ..._0x36764d,
    label: _0x468802
  };
}
function nS(_0x40bab7, _0x5f0954, _0x402186 = Math.random, _0x37a61a = {}) {
  const _0x3fba93 = !!_0x37a61a.forceRandom;
  if (_0x40bab7 === "tide") {
    const _0x3f4055 = _0x5f0954 % 3 == 0;
    const _0x52bc59 = !_0x3f4055 && _0x5f0954 > 1 && (_0x3fba93 || _0x402186() < 0.18);
    const _0x4ba82a = _0x3f4055 || _0x52bc59;
    return e2(_0x4ba82a ? _0x52bc59 ? "突发涨潮 · 下路关闭" : "周期涨潮 · 下路关闭" : "低潮 · 双路开放", {
      mechanicActive: _0x4ba82a,
      playCue: _0x4ba82a,
      announcement: _0x4ba82a ? {
        title: _0x52bc59 ? "突发涨潮" : "周期涨潮",
        detail: "港区下路暂时关闭，敌军将集中涌入上路",
        tone: "hazard"
      } : null
    });
  }
  if (_0x40bab7 === "bridge") {
    const _0x5e0e61 = _0x5f0954 % 4 == 0;
    const _0x2902d = !_0x5e0e61 && _0x5f0954 > 1 && (_0x3fba93 || _0x402186() < 0.17);
    const _0x2151f4 = _0x5e0e61 || _0x2902d;
    return e2(_0x2151f4 ? _0x2902d ? "齿轮打滑 · 敌军绕行" : "周期断桥 · 敌军绕行" : "蒸汽桥开放", {
      mechanicActive: _0x2151f4,
      playCue: _0x2151f4,
      announcement: _0x2151f4 ? {
        title: _0x2902d ? "齿轮打滑" : "蒸汽桥断开",
        detail: "主桥停止运转，敌军正在转向南北外墙",
        tone: "hazard"
      } : null
    });
  }
  if (_0x40bab7 === "storm") {
    const [_0x569f8f, _0x45ed79] = Mn[Math.floor(_0x402186() * Mn.length)];
    const _0x19a617 = _0x402186() < 0.55;
    const _0x5e46fd = _0x19a617 ? 0.78 : 1.14;
    return e2((_0x19a617 ? "逆风航道" : "风暴顺流") + " · " + _0x45ed79 + (_0x19a617 ? "减速22%" : "加速14%"), {
      routeSpeedModifiers: {
        [_0x569f8f]: _0x5e46fd
      },
      playCue: true,
      announcement: {
        title: _0x19a617 ? "逆风航道" : "风暴顺流",
        detail: _0x45ed79 + "上的敌军" + (_0x19a617 ? "移动速度降低22%" : "移动速度提高14%"),
        tone: _0x19a617 ? "boon" : "hazard"
      }
    });
  }
  if (_0x40bab7 === "foundry") {
    const _0x13014c = Math.floor((_0x5f0954 - 1) / 2) % 2 == 1;
    const _0x4fd1a5 = _0x5f0954 > 1 && (_0x3fba93 || _0x402186() < 0.475);
    const _0x24bc6b = _0x4fd1a5 ? !_0x13014c : _0x13014c;
    return e2(_0x24bc6b ? _0x4fd1a5 ? "阀门波动 · 高温捷径开放" : "高温周期 · 鲸炮强化" : _0x4fd1a5 ? "阀门波动 · 冷却渠开放" : "冷却周期 · 魔法强化", {
      mechanicActive: _0x24bc6b,
      playCue: true,
      announcement: {
        title: _0x4fd1a5 ? "阀门异常波动" : _0x24bc6b ? "高温周期" : "冷却周期",
        detail: _0x24bc6b ? "高温捷径开放，熔火鲸炮伤害提高25%" : "冷却渠开放，风暴与时潮塔伤害提高20%",
        tone: _0x4fd1a5 ? "hazard" : "neutral"
      }
    });
  }
  if (_0x40bab7 === "crystal") {
    const [_0x556af7, _0x4dace1] = vn[Math.floor(_0x402186() * vn.length)];
    const _0xaecfb0 = _0x402186() < 0.45;
    const _0xf8b715 = _0xaecfb0 ? 1.16 : 0.76;
    return e2((_0xaecfb0 ? "骨潮躁动" : "潮晶凝滞") + " · " + _0x4dace1 + (_0xaecfb0 ? "加速16%" : "减速24%"), {
      routeSpeedModifiers: {
        [_0x556af7]: _0xf8b715
      },
      playCue: true,
      announcement: {
        title: _0xaecfb0 ? "骨潮躁动" : "潮晶凝滞",
        detail: _0x4dace1 + "上的敌军" + (_0xaecfb0 ? "移动速度提高16%" : "移动速度降低24%"),
        tone: _0xaecfb0 ? "hazard" : "boon"
      }
    });
  }
  if (_0x40bab7 === "boiler") {
    const _0x168d83 = _0x3fba93 || _0x402186() < 0.35;
    return e2(_0x168d83 ? "随机增压 · 机械单位加速" : "锅炉常压", {
      mechanicActive: _0x168d83,
      mechanicTimer: (_0x168d83 ? 6 : 8) + _0x402186() * 2,
      playCue: _0x168d83,
      announcement: _0x168d83 ? {
        title: "锅炉随机增压",
        detail: "快速敌军与机械防御塔同时加速，泄压阀可锁停增压",
        tone: "hazard"
      } : null
    });
  }
  return e2("地图状态稳定");
}
const cS = [{
  id: "clear",
  label: "守住防线",
  detail: "完成当前关卡全部进攻波次"
}, {
  id: "steady",
  label: "城防稳固",
  detail: "通关时王城耐久不低于 10"
}, {
  id: "flawless",
  label: "潮冠荣光",
  detail: "通关时王城耐久不低于 18"
}];
function oS(_0x181059, _0x36cec5) {
  const _0x2278e2 = Math.max(0, Number(_0x36cec5) || 0);
  const _0x5b8c96 = [!!_0x181059, !!_0x181059 && _0x2278e2 >= 10, !!_0x181059 && _0x2278e2 >= 18];
  const _0x5ba555 = _0x5b8c96.filter(Boolean).length;
  return {
    stars: _0x5ba555,
    title: ["皇城失守", "险守成功", "稳固防线", "潮冠荣光"][_0x5ba555],
    rules: cS.map((_0x59b987, _0x294018) => ({
      ..._0x59b987,
      earned: _0x5b8c96[_0x294018]
    }))
  };
}
const Z = {
  width: 1200,
  height: 720
};
const y2 = {
  double_tide_harbor: {
    number: "01",
    name: "双潮港",
    subtitle: "第一防线",
    mission: "守住潮晶闸门",
    difficulty: "简单",
    gold: 650,
    waves: 10,
    healthMultiplier: 1.5,
    speedMultiplier: 1.03,
    attackMultiplier: 1.08,
    goldMultiplier: 1,
    mechanic: "tide",
    description: "港口主路绕潮汐环岛分成高台与船坞两线，并在终点前二次汇合；每三波涨潮封闭船坞线。玩家可两次开启泄潮闸，使全场敌人减速5秒。",
    statusOpen: "双路开放",
    statusActive: "涨潮 · 下路关闭",
    palette: ["#78c4c4", "#377f87", "#507f6d"],
    curve: "quadratic",
    paths: {
      upper: [{
        x: -50,
        y: 209
      }, {
        x: 55,
        y: 213
      }, {
        x: 135,
        y: 220
      }, {
        x: 210,
        y: 229
      }, {
        x: 250,
        y: 246
      }, {
        x: 288,
        y: 205
      }, {
        x: 350,
        y: 160
      }, {
        x: 455,
        y: 134
      }, {
        x: 585,
        y: 130
      }, {
        x: 705,
        y: 142
      }, {
        x: 805,
        y: 172
      }, {
        x: 875,
        y: 190
      }, {
        x: 930,
        y: 225
      }, {
        x: 982,
        y: 276
      }, {
        x: 1015,
        y: 313
      }, {
        x: 1068,
        y: 322
      }],
      lower: [{
        x: -50,
        y: 209
      }, {
        x: 55,
        y: 213
      }, {
        x: 135,
        y: 220
      }, {
        x: 210,
        y: 229
      }, {
        x: 250,
        y: 246
      }, {
        x: 267,
        y: 300
      }, {
        x: 285,
        y: 360
      }, {
        x: 315,
        y: 415
      }, {
        x: 370,
        y: 450
      }, {
        x: 460,
        y: 468
      }, {
        x: 560,
        y: 462
      }, {
        x: 650,
        y: 430
      }, {
        x: 740,
        y: 390
      }, {
        x: 820,
        y: 370
      }, {
        x: 900,
        y: 375
      }, {
        x: 965,
        y: 350
      }, {
        x: 1015,
        y: 313
      }, {
        x: 1068,
        y: 322
      }]
    },
    routes: ["upper", "lower"],
    activeRoutes: ["upper"],
    destination: {
      x: 1068,
      y: 322
    },
    pads: [{
      x: 102,
      y: 263
    }, {
      x: 221,
      y: 125
    }, {
      x: 653,
      y: 81
    }, {
      x: 915,
      y: 142
    }, {
      x: 856,
      y: 322
    }, {
      x: 1068,
      y: 416
    }, {
      x: 756,
      y: 485
    }, {
      x: 446,
      y: 558
    }, {
      x: 260,
      y: 462
    }, {
      x: 407,
      y: 398
    }, {
      x: 558,
      y: 385
    }, {
      x: 406,
      y: 216
    }, {
      x: 565,
      y: 216
    }]
  },
  broken_crown: {
    number: "02",
    name: "破碎王冠",
    subtitle: "断桥防区",
    mission: "守住中央蒸汽桥",
    difficulty: "普通",
    gold: 680,
    waves: 11,
    healthMultiplier: 1.1,
    speedMultiplier: 1.0202,
    attackMultiplier: 1.12,
    goldMultiplier: 1.05,
    mechanic: "bridge",
    description: "西侧与北侧入口穿过破碎城垛，在中央交叉桥汇合；每四波断桥后分别绕行南北外墙。玩家可两次制动蒸汽桥，使桥上敌人短暂定身。",
    statusOpen: "蒸汽桥开放",
    statusActive: "断桥 · 敌军绕行",
    palette: ["#71aaa8", "#376e78", "#536b62"],
    ...Cn
  },
  storm_air_dock: {
    number: "03",
    name: "风暴浮航坞",
    subtitle: "雷云航线",
    mission: "保住浮航坞核心",
    difficulty: "普通",
    gold: 700,
    waves: 12,
    healthMultiplier: 1.87,
    speedMultiplier: 1.04,
    attackMultiplier: 1.16,
    goldMultiplier: 1.1,
    mechanic: "storm",
    description: "重装敌军沿盘旋栈桥，飞鳍走飞艇捷径，幽魂穿越雷云外环；雷击自动强化附近防御塔。玩家可两次引导避雷针，使全部已建塔增压7秒。",
    statusOpen: "雷云蓄能",
    statusActive: "雷击增压",
    palette: ["#7697b1", "#3d687c", "#496c67"],
    ...Vn
  },
  sunken_foundry: {
    number: "04",
    name: "沉没铸造城",
    subtitle: "熔炉遗址",
    mission: "穿过淹没铸造区",
    difficulty: "中等",
    gold: 720,
    waves: 12,
    healthMultiplier: 1.38,
    speedMultiplier: 1.038,
    attackMultiplier: 1.2,
    goldMultiplier: 1.15,
    mechanic: "foundry",
    description: "铸造主线在炉心处分流为冷却渠与高温捷径；每两波环境切换并改变敌军选路。玩家可两次释放冷却液，使敌人潮湿并减速5秒。",
    statusOpen: "冷却 · 魔法强化",
    statusActive: "高温 · 鲸炮强化",
    palette: ["#729c98", "#315f69", "#5e6658"],
    ...Ln
  },
  leviathan_bone_sea: {
    number: "05",
    name: "巨鲸骨海",
    subtitle: "遗骸航道",
    mission: "启动巨兽潮晶",
    difficulty: "较难",
    gold: 750,
    waves: 13,
    healthMultiplier: 2.007,
    speedMultiplier: 1.07,
    attackMultiplier: 1.25,
    goldMultiplier: 1.2,
    mechanic: "crystal",
    description: "敌军可走脊骨主路、肋骨隧道或精英骨桥；玩家每局可启动一次巨兽潮晶，使全场敌人大幅减速8秒。",
    statusOpen: "潮晶待命",
    statusActive: "潮晶减速生效",
    action: "启动巨兽潮晶",
    palette: ["#7ea9a5", "#3c7378", "#627568"],
    ...Pn
  },
  mist_boiler_city: {
    number: "06",
    name: "雾海锅炉城",
    subtitle: "最终防线",
    mission: "阻止达贡苏醒",
    difficulty: "最终挑战",
    gold: 780,
    waves: 14,
    healthMultiplier: 1.68,
    speedMultiplier: 1.03,
    attackMultiplier: 1.3,
    goldMultiplier: 1.25,
    mechanic: "boiler",
    description: "上下入口进入换热环道，快速敌军会钻入增压管捷径；锅炉增压时双方机械单位同时加速。玩家可两次紧急泄压，锁停增压7秒并减速敌人。",
    statusOpen: "锅炉常压",
    statusActive: "锅炉增压 · 全体加速",
    palette: ["#839b99", "#465e69", "#52645f"],
    ...Tn
  }
};
const dS = {
  double_tide_harbor: {
    name: "开启泄潮闸",
    device: "泄潮闸",
    icon: "Waves",
    charges: 2,
    cooldown: 16,
    hitRadius: 62,
    position: {
      x: 520,
      y: 650
    },
    description: "释放潮流，使全场敌人减速5秒"
  },
  broken_crown: {
    name: "制动蒸汽桥",
    device: "桥面制动器",
    icon: "Wrench",
    charges: 2,
    cooldown: 18,
    hitRadius: 82,
    position: Cn.interaction,
    description: "锁死桥面齿轮，使敌人短暂定身"
  },
  storm_air_dock: {
    name: "引导避雷针",
    device: "避雷针",
    icon: "Zap",
    charges: 2,
    cooldown: 18,
    hitRadius: 64,
    position: Vn.interaction,
    description: "为所有已建防御塔增压7秒"
  },
  sunken_foundry: {
    name: "释放冷却液",
    device: "冷却阀",
    icon: "Snowflake",
    charges: 2,
    cooldown: 18,
    hitRadius: 68,
    position: Ln.interaction,
    description: "冷却熔炉并使敌人进入潮湿减速状态"
  },
  leviathan_bone_sea: {
    name: "启动巨兽潮晶",
    device: "巨兽潮晶",
    icon: "Gem",
    charges: 1,
    cooldown: 20,
    hitRadius: 66,
    position: Pn.interaction,
    description: "潮晶共鸣，使全场敌人大幅减速8秒"
  },
  mist_boiler_city: {
    name: "紧急泄压",
    device: "泄压阀",
    icon: "Gauge",
    charges: 2,
    cooldown: 20,
    hitRadius: 68,
    position: Tn.interaction,
    description: "压制锅炉增压并降低敌人速度"
  }
};
const ct = {
  double_tide_harbor: {
    road: {
      shadow: "#234a4b",
      edge: "#668f87",
      surface: "#d5caa1",
      highlight: "rgba(255, 247, 202, .46)",
      detail: "rgba(36, 113, 119, .52)"
    },
    pad: {
      shadow: "rgba(18, 68, 68, .3)",
      fill: "#6b8877",
      rim: "#d8c57b",
      inset: "#2e7775",
      mark: "#b9f2e5"
    },
    device: {
      metal: "#2b6262",
      trim: "#d8b967",
      energy: "#9ff5e9",
      base: "#476e67"
    },
    motif: "wave"
  },
  broken_crown: {
    road: {
      shadow: "#303e42",
      edge: "#776f69",
      surface: "#bdb6a2",
      highlight: "rgba(255, 239, 199, .34)",
      detail: "rgba(89, 68, 59, .5)"
    },
    pad: {
      shadow: "rgba(44, 35, 35, .32)",
      fill: "#776f64",
      rim: "#d0a95b",
      inset: "#584b4a",
      mark: "#f1d894"
    },
    device: {
      metal: "#564d4b",
      trim: "#d2a756",
      energy: "#f1d187",
      base: "#69615c"
    },
    motif: "crack"
  },
  storm_air_dock: {
    road: {
      shadow: "#253e4c",
      edge: "#607b88",
      surface: "#aabcc2",
      highlight: "rgba(229, 252, 255, .4)",
      detail: "rgba(38, 84, 99, .52)"
    },
    pad: {
      shadow: "rgba(20, 51, 68, .34)",
      fill: "#607d88",
      rim: "#b4cbd0",
      inset: "#315b6c",
      mark: "#96eff8"
    },
    device: {
      metal: "#315b6c",
      trim: "#b9cbd0",
      energy: "#8cefff",
      base: "#4f7280"
    },
    motif: "rivets"
  },
  sunken_foundry: {
    road: {
      shadow: "#252f30",
      edge: "#5d625c",
      surface: "#85867a",
      highlight: "rgba(225, 231, 209, .28)",
      detail: "rgba(42, 43, 40, .62)"
    },
    pad: {
      shadow: "rgba(24, 28, 27, .4)",
      fill: "#565d59",
      rim: "#b77848",
      inset: "#343f3f",
      mark: "#7cdce0"
    },
    device: {
      metal: "#35494a",
      trim: "#b87548",
      energy: "#78dde2",
      base: "#4c5752"
    },
    motif: "forge"
  },
  leviathan_bone_sea: {
    road: {
      shadow: "#294b49",
      edge: "#8a8e75",
      surface: "#d7cfaa",
      highlight: "rgba(255, 250, 216, .5)",
      detail: "rgba(91, 88, 65, .46)"
    },
    pad: {
      shadow: "rgba(31, 68, 64, .3)",
      fill: "#9a987d",
      rim: "#e5d9aa",
      inset: "#4d7f78",
      mark: "#92eee2"
    },
    device: {
      metal: "#47776f",
      trim: "#dfd09e",
      energy: "#8df3e6",
      base: "#748779"
    },
    motif: "bone"
  },
  mist_boiler_city: {
    road: {
      shadow: "#23383d",
      edge: "#58696b",
      surface: "#929c95",
      highlight: "rgba(230, 248, 242, .34)",
      detail: "rgba(42, 58, 59, .58)"
    },
    pad: {
      shadow: "rgba(20, 42, 46, .38)",
      fill: "#5c6c69",
      rim: "#bd854f",
      inset: "#354f51",
      mark: "#8edfd7"
    },
    device: {
      metal: "#3b5659",
      trim: "#c18a51",
      energy: "#8edfd7",
      base: "#526463"
    },
    motif: "boiler"
  }
};
const rS = {
  double_tide_harbor: {
    energy: "#8ff3e8",
    steam: "#d8fffb",
    rim: "#c9a863",
    sites: [{
      id: "harbor-gate",
      routes: ["upper", "lower"],
      x: 0,
      y: 209,
      radius: 34
    }]
  },
  broken_crown: {
    energy: "#d6b56d",
    steam: "#e9e0cf",
    rim: "#8e7451",
    sites: [{
      id: "west-breach",
      routes: ["west", "westDetour"],
      x: 0,
      y: 486,
      radius: 36
    }, {
      id: "north-breach",
      routes: ["north", "northDetour"],
      x: 216,
      y: 0,
      radius: 36
    }]
  },
  storm_air_dock: {
    energy: "#91efff",
    steam: "#d9f7ff",
    rim: "#8faab7",
    sites: [{
      id: "storm-dock",
      routes: ["spiral", "airlane", "cloudloop"],
      x: 0,
      y: 145,
      radius: 36
    }]
  },
  sunken_foundry: {
    energy: "#ff9a53",
    steam: "#d9ece7",
    rim: "#bd7546",
    sites: [{
      id: "foundry-gate",
      routes: ["main", "coolant", "furnace"],
      x: 0,
      y: 535,
      radius: 38
    }]
  },
  leviathan_bone_sea: {
    energy: "#8de9dc",
    steam: "#d8f2ed",
    rim: "#d8cea3",
    sites: [{
      id: "bone-gate",
      routes: ["main", "elite", "boneTunnel"],
      x: 0,
      y: 390,
      radius: 38
    }]
  },
  mist_boiler_city: {
    energy: "#b38aff",
    steam: "#d8f2ef",
    rim: "#bd854f",
    sites: [{
      id: "upper-boiler-gate",
      routes: ["left", "pressure"],
      x: 165,
      y: 165,
      radius: 42
    }, {
      id: "lower-boiler-gate",
      routes: ["right"],
      x: 205,
      y: 410,
      radius: 42
    }]
  }
};
const P2 = new URLSearchParams(window.location.search);
const F = y2[P2.get("map")] ? P2.get("map") : "double_tide_harbor";
const p1 = P2.get("route_reference") === "1";
const K = P2.get("showcase") || "";
const iS = P2.get("event_seed") || "";
const S = y2[F];
const j = dS[F];
const S1 = S.paths;
const C1 = Object.keys(y2);
const En = "tide-crown-unlocked-level";
const In = "tide-crown-level-records";
const Dn = "tide-crown-game-settings";
function pS() {
  try {
    const _0x376587 = JSON.parse(window.localStorage.getItem(Dn) || "{}");
    return {
      effects: _0x376587.effects === "reduced" ? "reduced" : "full",
      reducedMotion: !!_0x376587.reducedMotion
    };
  } catch {
    return {
      effects: "full",
      reducedMotion: false
    };
  }
}
function zn() {
  try {
    const _0x4943d1 = Number.parseInt(window.localStorage.getItem(En) || "0", 10);
    return Math.max(0, Math.min(C1.length - 1, Number.isFinite(_0x4943d1) ? _0x4943d1 : 0));
  } catch {
    return 0;
  }
}
function lS() {
  const _0x136a4c = C1.indexOf(F);
  const _0x39907c = Math.min(C1.length - 1, _0x136a4c + 1);
  try {
    window.localStorage.setItem(En, String(Math.max(zn(), _0x39907c)));
  } catch {}
  return _0x39907c > _0x136a4c;
}
function jt() {
  try {
    const _0x556ae4 = JSON.parse(window.localStorage.getItem(In) || "{}");
    if (_0x556ae4 && typeof _0x556ae4 == "object") {
      return _0x556ae4;
    } else {
      return {};
    }
  } catch {
    return {};
  }
}
function MS(_0x13d3b0, _0x2f7255) {
  const _0x40cefa = jt();
  const _0x322767 = _0x40cefa[_0x13d3b0] || {};
  _0x40cefa[_0x13d3b0] = {
    stars: Math.max(_0x322767.stars || 0, _0x2f7255.stars),
    bestLives: Math.max(_0x322767.bestLives || 0, _0x2f7255.lives),
    bestTime: _0x322767.bestTime ? Math.min(_0x322767.bestTime, _0x2f7255.time) : _0x2f7255.time,
    completed: true
  };
  try {
    window.localStorage.setItem(In, JSON.stringify(_0x40cefa));
  } catch {}
  return _0x40cefa[_0x13d3b0];
}
const M1 = {
  salt: {
    name: "盐壳拾荒者",
    health: 90,
    armor: 0,
    magicResist: 0,
    speed: 53,
    coreDamage: 1,
    reward: 4,
    attack: 12,
    attackInterval: 1.1,
    asset: "./generated/enemy-cutouts-transparent/salt.webp",
    animations: {
      move: "./generated/animation-workshop/salt-shell-scavenger--enemy-move/spritesheet.webp",
      attack: "./generated/animation-workshop/salt-shell-scavenger--enemy-attack/spritesheet.webp",
      death: "./generated/all-unit-animations-v1/salt-death/spritesheet.webp"
    }
  },
  jet: {
    name: "喷气飞鳍",
    health: 65,
    armor: 0,
    magicResist: 0.1,
    speed: 85,
    coreDamage: 1,
    reward: 5,
    attack: 10,
    attackInterval: 0.8,
    asset: "./generated/enemy-cutouts-transparent/jet.webp",
    animations: {
      move: "./generated/animation-workshop/jet-fin-raider--enemy-move/spritesheet.webp",
      attack: "./generated/all-unit-animations-v1/jet-attack/spritesheet.webp"
    }
  },
  crab: {
    name: "深潜蟹卫",
    health: 260,
    armor: 0.4,
    magicResist: 0.1,
    speed: 34,
    coreDamage: 2,
    reward: 10,
    attack: 28,
    attackInterval: 1.35,
    asset: "./generated/enemy-cutouts-transparent/crab.webp",
    animations: {
      move: "./generated/animation-workshop/deep-diving-crab-guard--enemy-move/spritesheet.webp",
      attack: "./generated/all-unit-animations-v1/crab-attack/spritesheet.webp"
    }
  },
  priest: {
    name: "雾炉祭司",
    health: 180,
    armor: 0.1,
    magicResist: 0.35,
    speed: 40,
    coreDamage: 2,
    reward: 14,
    attack: 18,
    attackInterval: 1.25,
    asset: "./generated/enemy-cutouts-transparent/priest.webp",
    animations: {
      move: "./generated/all-unit-animations-v1/priest-move/spritesheet.webp",
      attack: "./generated/enemy-cutouts-transparent/animations/priest-attack.webp"
    }
  },
  beast: {
    name: "深渊驮城机兽",
    health: 900,
    armor: 0.35,
    magicResist: 0.2,
    speed: 22,
    coreDamage: 4,
    reward: 35,
    attack: 55,
    attackInterval: 1.6,
    asset: "./generated/enemy-cutouts-transparent/beast.webp",
    animations: {
      move: "./generated/all-unit-animations-v1/beast-move/spritesheet.webp",
      attack: "./generated/all-unit-animations-v1/beast-attack/spritesheet.webp"
    }
  },
  ghost: {
    name: "虚潮幽魂",
    health: 220,
    armor: 0,
    magicResist: 0.1,
    speed: 48,
    coreDamage: 2,
    reward: 16,
    attack: 20,
    attackInterval: 1,
    asset: "./generated/enemy-cutouts-transparent/ghost.webp",
    animations: {
      move: "./generated/all-unit-animations-v1/ghost-move/spritesheet.webp",
      attack: "./generated/all-unit-animations-v1/ghost-attack/spritesheet.webp"
    }
  },
  navigator: {
    name: "深渊穿航者",
    health: 340,
    armor: 0.2,
    magicResist: 0.2,
    speed: 74,
    coreDamage: 3,
    reward: 18,
    attack: 34,
    attackInterval: 0.95,
    asset: "./generated/enemy-cutouts-transparent/navigator.webp",
    animations: {
      move: "./generated/all-unit-animations-v1/navigator-move/spritesheet.webp",
      attack: "./generated/all-unit-animations-v1/navigator-attack/spritesheet.webp"
    }
  }
};
const L2 = {
  priest: {
    name: "雾炉祷疗",
    detail: "周期治疗附近深海单位",
    color: "#83dfbd"
  },
  ghost: {
    name: "虚相核心",
    detail: "非风暴伤害无法完成击杀",
    color: "#b49aff"
  },
  navigator: {
    name: "锚链护盾",
    detail: "必须由卫兵拦截后破盾",
    color: "#72d8e8"
  }
};
const ot = [{
  id: "eye",
  name: "额头潮晶眼",
  counter: "风暴 / 时潮",
  sources: ["storm", "time"],
  color: "#79ebff"
}, {
  id: "boiler",
  name: "失控锅炉",
  counter: "熔火鲸炮",
  sources: ["cannon"],
  color: "#ff9a4f"
}, {
  id: "anchor",
  name: "船锚关节",
  counter: "连弩 / 兵营",
  sources: ["crossbow", "barracks"],
  color: "#e7cf87"
}];
const gn = {
  salt: {
    towers: ["crossbow", "cannon"],
    threat: "均衡步兵",
    advice: "连弩持续点杀，鲸炮可顺带清理成群单位。"
  },
  jet: {
    towers: ["time", "crossbow"],
    threat: "高速突进",
    advice: "先用时潮减速，再用连弩快速补刀。"
  },
  crab: {
    towers: ["storm", "cannon"],
    threat: "高物理护甲",
    advice: "风暴魔法绕过厚甲，鲸炮配合破甲连携。"
  },
  priest: {
    towers: ["crossbow", "barracks"],
    threat: "治疗支援",
    advice: "设为强敌优先集中击杀，兵营阻截让其脱离队伍。"
  },
  ghost: {
    towers: ["storm", "time"],
    threat: "虚相核心",
    advice: "必须由风暴伤害完成击杀，时潮负责延长输出窗口。"
  },
  navigator: {
    towers: ["barracks", "storm"],
    threat: "锚链护盾",
    advice: "先由卫兵拦截破盾，再交给风暴塔集中处理。"
  },
  beast: {
    towers: ["time", "storm", "cannon"],
    threat: "超高生命",
    advice: "持续减速并叠加魔法与范围重火力，避免其接近皇城。"
  }
};
const vS = {
  double_tide_harbor: ["salt", "jet", "crab"],
  broken_crown: ["priest"],
  storm_air_dock: ["ghost"],
  sunken_foundry: ["navigator"],
  leviathan_bone_sea: ["beast"],
  mist_boiler_city: ["dagon"]
};
function P(_0x5c9601, _0x112d23, _0x2e2be8 = {}) {
  return {
    name: _0x5c9601,
    units: _0x112d23.trim().split(/\s+/).filter(Boolean).flatMap(_0x2a7e65 => {
      const [_0x267be1, _0x5c6a59] = _0x2a7e65.split(":");
      return Array.from({
        length: Number(_0x5c6a59) || 1
      }, () => _0x267be1);
    }),
    interval: _0x2e2be8.interval || 0.82,
    elite: !!_0x2e2be8.elite,
    boss: !!_0x2e2be8.boss
  };
}
const dt = {
  double_tide_harbor: [P("盐滩斥候", "salt:6"), P("飞鳍试航", "salt:5 jet:3"), P("第一次涨潮", "jet:6 salt:3", {
    interval: 0.72
  }), P("甲壳登陆", "crab:2 salt:7"), P("双线穿插", "crab:3 jet:5 salt:4"), P("港口强袭", "salt:8 crab:3 jet:3", {
    elite: true,
    interval: 0.68
  }), P("飞鳍编队", "crab:5 jet:6"), P("重甲潮头", "crab:7 salt:6"), P("双潮合围", "jet:8 crab:6 salt:4", {
    interval: 0.62
  }), P("闸门决战", "crab:8 jet:8 salt:6", {
    elite: true,
    interval: 0.58
  })],
  broken_crown: [P("断桥侦察", "salt:7 crab:1"), P("甲壳纵队", "crab:4 salt:5"), P("雾炉现身", "priest:2 salt:7 crab:2"), P("第一次断桥", "crab:5 priest:2 salt:5"), P("城垛夹击", "salt:8 crab:5 priest:2"), P("雾疗战团", "priest:4 crab:6", {
    elite: true
  }), P("外墙绕袭", "salt:10 crab:6 priest:2", {
    interval: 0.68
  }), P("重甲过桥", "crab:9 priest:3"), P("祭司护阵", "priest:5 crab:8 salt:4", {
    elite: true
  }), P("王冠裂口", "crab:10 priest:4 salt:7", {
    interval: 0.62
  }), P("蒸汽桥死守", "crab:12 priest:5 salt:8", {
    elite: true,
    interval: 0.56
  })],
  storm_air_dock: [P("雷云试飞", "jet:7 salt:3"), P("外环幽影", "ghost:3 jet:6"), P("三线航路", "jet:6 ghost:4 salt:5"), P("逆风突进", "jet:10 salt:4", {
    interval: 0.66
  }), P("虚潮编队", "ghost:7 jet:6"), P("雷云封锁", "ghost:8 jet:8 salt:4", {
    elite: true
  }), P("喷气蜂群", "jet:14 ghost:4", {
    interval: 0.54
  }), P("幽影外环", "ghost:10 salt:7"), P("航坞俯冲", "jet:14 ghost:8", {
    elite: true,
    interval: 0.52
  }), P("雷暴前线", "ghost:12 jet:10 salt:6"), P("三路失守", "jet:16 ghost:10 salt:8", {
    interval: 0.48
  }), P("浮航坞保卫战", "ghost:14 jet:16 salt:8", {
    elite: true,
    interval: 0.44
  })],
  sunken_foundry: [P("冷却渠异响", "crab:5 priest:1"), P("穿航试探", "navigator:3 crab:4"), P("雾炉冷却队", "priest:3 crab:5 navigator:2"), P("高温捷径", "navigator:6 crab:5", {
    interval: 0.66
  }), P("锚盾推进", "navigator:7 priest:3 crab:4"), P("炉心守卫", "crab:9 navigator:6 priest:3", {
    elite: true
  }), P("换热逆流", "navigator:10 priest:4", {
    interval: 0.58
  }), P("重甲淬火", "crab:12 priest:4"), P("穿航突击", "navigator:13 crab:7 priest:3", {
    elite: true,
    interval: 0.54
  }), P("雾炉过载", "priest:7 crab:10 navigator:8"), P("铸造城沉降", "crab:14 navigator:10 priest:5", {
    interval: 0.5
  }), P("熔炉遗址决战", "navigator:14 crab:14 priest:6", {
    elite: true,
    interval: 0.46
  })],
  leviathan_bone_sea: [P("脊骨拾荒者", "salt:8 jet:3"), P("肋骨伏兵", "crab:5 salt:6"), P("骨桥祭司", "priest:3 crab:5 jet:4"), P("虚潮入骨", "ghost:4 jet:6 salt:5"), P("穿航登桥", "navigator:5 crab:6 priest:2"), P("骨海精英潮", "beast:1 crab:7 priest:3", {
    elite: true,
    interval: 0.72
  }), P("三路共鸣", "ghost:6 navigator:6 jet:7"), P("驮城踏浪", "beast:2 crab:8 salt:6"), P("幽魂骨隧", "ghost:10 jet:8 priest:3", {
    interval: 0.56
  }), P("锚盾骨桥", "navigator:10 crab:9 beast:1", {
    elite: true
  }), P("巨兽迁徙", "beast:3 priest:5 crab:10"), P("遗骸苏醒", "ghost:12 navigator:10 beast:2 jet:8", {
    interval: 0.5
  }), P("巨鲸骨海终潮", "beast:4 ghost:12 navigator:12 priest:6", {
    elite: true,
    interval: 0.46
  })],
  mist_boiler_city: [P("锅炉城巡逻", "crab:6 priest:2"), P("增压管潜入", "navigator:5 ghost:3"), P("雾炉布道", "priest:5 crab:6"), P("虚潮换热", "ghost:7 navigator:6 jet:4"), P("驮城入城", "beast:1 crab:8 priest:3"), P("第一次超压", "navigator:9 jet:8 ghost:5", {
    elite: true,
    interval: 0.58
  }), P("深海合流", "crab:9 priest:5 ghost:7"), P("机械兽列阵", "beast:2 crab:10 navigator:7"), P("祭司护航", "priest:7 beast:2 ghost:8", {
    elite: true
  }), P("增压管暴走", "navigator:14 jet:12 ghost:6", {
    interval: 0.46
  }), P("古神先遣", "beast:3 priest:7 crab:12"), P("锅炉城沦陷", "ghost:12 navigator:12 beast:3", {
    elite: true,
    interval: 0.48
  }), P("达贡苏醒前兆", "priest:8 beast:4 ghost:12 crab:10", {
    elite: true,
    interval: 0.44
  }), P("深渊机神·达贡", "dagon:1", {
    boss: true,
    interval: 1
  })]
};
Object.entries(y2).forEach(([_0x314d81, _0x31e131]) => {
  const _0x1b02ae = dt[_0x314d81] || [];
  if (_0x1b02ae.length !== _0x31e131.waves) {
    throw new Error(_0x314d81 + " wave plan mismatch: expected " + _0x31e131.waves + ", received " + _0x1b02ae.length);
  }
  _0x1b02ae.forEach((_0x1a2d10, _0x2de12c) => {
    _0x1a2d10.units.forEach(_0x48ca12 => {
      if (_0x48ca12 !== "dagon" && !M1[_0x48ca12]) {
        throw new Error(_0x314d81 + " wave " + (_0x2de12c + 1) + " references unknown enemy: " + _0x48ca12);
      }
    });
  });
});
const $ = {
  fire: {
    direct: [18, 26, 38, 58],
    dot: [6, 8, 11, 16],
    duration: 3,
    maxStacks: 3
  },
  frost: {
    direct: [20, 28, 40, 60],
    slow: [0.25, 0.3, 0.35, 0.4],
    duration: [2, 2.4, 2.8, 3.2],
    maxStacks: 2
  },
  lightning: {
    chainRatio: 0.5,
    conductiveDuration: 4,
    maxStacks: 2,
    chains: [3, 4, 5, 6]
  },
  wet: {
    duration: 4,
    lightningMultiplier: 1.2,
    fireMultiplier: 0.9
  },
  starlight: {
    direct: [26, 38, 56, 90],
    magicResistIgnore: 0.25
  }
};
const r1 = {
  wetLightning: {
    name: "导电爆发",
    damage: [36, 58, 90, 150],
    color: "#88eaff"
  },
  fireWet: {
    name: "蒸汽爆裂",
    damage: [70, 100, 145, 230],
    slow: 0.25,
    slowDuration: 1.5,
    color: "#f4d7bd"
  },
  frostFire: {
    name: "霜火破碎",
    damage: [60, 90, 130, 210],
    armorReduction: 0.2,
    duration: 3,
    color: "#d6a6f2"
  },
  starlightTime: {
    name: "时间回响",
    repeatRatio: [0.45, 0.5, 0.55, 0.65],
    delay: 1.2,
    color: "#d9c5ff"
  },
  cooldown: 2
};
const H1 = {
  crossbow: {
    name: "星潮连弩塔",
    icon: "Crosshair",
    cost: 110,
    upgradeCosts: [75, 110, 180],
    levels: [{
      damage: 24,
      cooldown: 0.9,
      range: 155
    }, {
      damage: 38,
      cooldown: 0.82,
      range: 165
    }, {
      damage: 58,
      cooldown: 0.72,
      range: 175
    }],
    projectile: "#9ff3f0",
    assets: ["./generated/star-crossbow-l1/live-2026-07-28-cutout.webp", "./generated/star-crossbow-l2/live-2026-07-28-cutout.webp", "./generated/star-crossbow-l3/live-2026-07-28-cutout.webp"],
    animationAssets: ["./generated/star-crossbow-animations-v4/level-1/spritesheet.webp", "./generated/star-crossbow-animations-v4/level-2/spritesheet.webp", "./generated/star-crossbow-animations-v4/level-3/spritesheet.webp"],
    branches: {
      moonmark: {
        name: "月痕狙击塔",
        asset: "./generated/moonmark-sniper/live-2026-07-28-cutout.webp",
        animationAsset: "./generated/star-crossbow-animations-v4/moonmark/spritesheet.webp",
        stats: {
          damage: 92,
          cooldown: 0.65,
          range: 225
        },
        description: "超远距精准射击"
      },
      phantom: {
        name: "幻影弩阵",
        asset: "./generated/phantom-crossbow-array/live-2026-07-28-cutout.webp",
        animationAsset: "./generated/star-crossbow-animations-v4/phantom/spritesheet.webp",
        stats: {
          damage: 70,
          cooldown: 0.42,
          range: 180
        },
        description: "幻影连弩极速齐射"
      }
    },
    description: "射速快，适合持续压制"
  },
  cannon: {
    name: "熔火鲸炮",
    icon: "Bomb",
    cost: 150,
    upgradeCosts: [100, 150, 240],
    levels: [{
      damage: 72,
      cooldown: 2.8,
      range: 175,
      splash: 54
    }, {
      damage: 110,
      cooldown: 2.6,
      range: 185,
      splash: 60
    }, {
      damage: 165,
      cooldown: 2.4,
      range: 195,
      splash: 66
    }],
    projectile: "#ff9d43",
    assets: ["./generated/molten-whale-l1/live-2026-07-28-cutout.webp", "./generated/molten-whale-l2/live-2026-07-28-cutout.webp", "./generated/molten-whale-l3/live-2026-07-28-cutout.webp"],
    animationAssets: ["./generated/molten-whale-animations-v1/level-1/spritesheet.webp", "./generated/molten-whale-animations-v1/level-2/spritesheet.webp", "./generated/molten-whale-animations-v1/level-3/spritesheet.webp"],
    branches: {
      dragon: {
        name: "龙炉攻城炮",
        asset: "./generated/dragon-furnace-cannon/live-2026-07-28-cutout.webp",
        animationAsset: "./generated/molten-whale-animations-v1/dragon/spritesheet.webp",
        stats: {
          damage: 260,
          cooldown: 2.2,
          range: 215,
          splash: 78
        },
        description: "高伤攻城炮击"
      },
      meteor: {
        name: "陨星锅炉",
        asset: "./generated/meteor-boiler/live-2026-07-28-cutout.webp",
        animationAsset: "./generated/molten-whale-animations-v1/meteor/spritesheet.webp",
        stats: {
          damage: 190,
          cooldown: 1.35,
          range: 195,
          splash: 88
        },
        description: "快速范围轰炸"
      }
    },
    description: "慢速炮击，造成范围伤害"
  },
  barracks: {
    name: "符文铆钉兵营",
    icon: "Shield",
    cost: 130,
    upgradeCosts: [90, 140, 220],
    levels: [{
      damage: 18,
      health: 180,
      cooldown: 1.2,
      range: 105
    }, {
      damage: 28,
      health: 250,
      cooldown: 1.1,
      range: 115
    }, {
      damage: 40,
      health: 340,
      cooldown: 0.95,
      range: 125
    }],
    projectile: "#c8a96b",
    assets: ["./generated/rune-barracks-l1/live-2026-07-28-cutout.webp", "./generated/rune-barracks-l2/live-2026-07-28-cutout.webp", "./generated/rune-barracks-l3/live-2026-07-28-cutout.webp"],
    animationAssets: ["./generated/all-tower-animations-v1/barracks-level-1/spritesheet.webp", "./generated/all-tower-animations-v1/barracks-level-2/spritesheet.webp", "./generated/all-tower-animations-v1/barracks-level-3/spritesheet.webp"],
    branches: {
      anchor: {
        name: "圣锚禁卫",
        asset: "./generated/sacred-anchor-guard/live-2026-07-28-cutout.webp",
        animationAsset: "./generated/all-tower-animations-v1/barracks-anchor/spritesheet.webp",
        stats: {
          damage: 58,
          health: 500,
          cooldown: 0.85,
          range: 140
        },
        description: "重甲禁卫坚守"
      },
      harpoon: {
        name: "幻潮鱼叉队",
        asset: "./generated/phantom-harpoon-team/live-2026-07-28-cutout.webp",
        animationAsset: "./generated/all-tower-animations-v1/barracks-harpoon/spritesheet.webp",
        stats: {
          damage: 48,
          health: 400,
          cooldown: 0.75,
          range: 155
        },
        description: "远距鱼叉压制"
      }
    },
    description: "禁卫阻挡，使敌人减速"
  },
  storm: {
    name: "风暴潮晶塔",
    icon: "Zap",
    cost: 170,
    upgradeCosts: [110, 170, 260],
    levels: [{
      damage: 30,
      cooldown: 1.55,
      range: 165,
      splash: 48
    }, {
      damage: 48,
      cooldown: 1.4,
      range: 175,
      splash: 56
    }, {
      damage: 75,
      cooldown: 1.25,
      range: 185,
      splash: 64
    }],
    projectile: "#74dfff",
    assets: ["./generated/tower-cutouts-transparent/storm-crystal-l1.webp", "./generated/tower-cutouts-transparent/storm-crystal-l2.webp", "./generated/tower-cutouts-transparent/storm-crystal-l3.webp"],
    animationAssets: ["./generated/all-tower-animations-v1/storm-level-1/spritesheet.webp", "./generated/all-tower-animations-v1/storm-level-2/spritesheet.webp", "./generated/all-tower-animations-v1/storm-level-3/spritesheet.webp"],
    branches: {
      thunder: {
        name: "雷神风暴尖塔",
        asset: "./generated/tower-cutouts-transparent/thunder-god-spire.webp",
        animationAsset: "./generated/all-tower-animations-v1/storm-thunder/spritesheet.webp",
        stats: {
          damage: 125,
          cooldown: 1.1,
          range: 205,
          splash: 82
        },
        description: "六段高伤雷链"
      },
      magnetic: {
        name: "磁潮涡流塔",
        asset: "./generated/tower-cutouts-transparent/magnetic-tide-vortex.webp",
        animationAsset: "./generated/all-tower-animations-v1/storm-magnetic/spritesheet.webp",
        stats: {
          damage: 100,
          cooldown: 1.2,
          range: 195,
          splash: 74,
          slow: 0.22
        },
        description: "磁潮牵引与减速"
      }
    },
    description: "连锁魔法，克制重甲"
  },
  time: {
    name: "时潮魔导枢纽",
    icon: "TimerReset",
    cost: 160,
    upgradeCosts: [100, 160, 240],
    levels: [{
      damage: 0,
      cooldown: 1.8,
      range: 170,
      slow: 0.15
    }, {
      damage: 0,
      cooldown: 1.65,
      range: 180,
      slow: 0.22
    }, {
      damage: 0,
      cooldown: 1.5,
      range: 190,
      slow: 0.3
    }],
    projectile: "#b69cff",
    assets: ["./generated/tower-cutouts-transparent/time-tide-nexus-l1.webp", "./generated/tower-cutouts-transparent/time-tide-nexus-l2.webp", "./generated/tower-cutouts-transparent/time-tide-nexus-l3.webp"],
    animationAssets: ["./generated/all-tower-animations-v1/time-level-1/spritesheet.webp", "./generated/all-tower-animations-v1/time-level-2/spritesheet.webp", "./generated/all-tower-animations-v1/time-level-3/spritesheet.webp"],
    branches: {
      reverse: {
        name: "逆流时钟塔",
        asset: "./generated/tower-cutouts-transparent/reverse-current-clock.webp",
        animationAsset: "./generated/all-tower-animations-v1/time-reverse/spritesheet.webp",
        stats: {
          damage: 0,
          cooldown: 1.35,
          range: 215,
          slow: 0.4
        },
        description: "大范围逆流强控"
      },
      resonance: {
        name: "符文共鸣枢纽",
        asset: "./generated/tower-cutouts-transparent/rune-resonance-nexus.webp",
        animationAsset: "./generated/all-tower-animations-v1/time-resonance/spritesheet.webp",
        stats: {
          damage: 0,
          cooldown: 1.05,
          range: 225,
          slow: 0.28
        },
        description: "快速符文脉冲"
      }
    },
    description: "霜潮脉冲，持续减速"
  }
};
const gS = "./generated/rune-rivet-guard/live-2026-07-28-cutout.webp";
const Qt = "./generated/enemy-cutouts-transparent/dagon.webp";
const mn = "./generated/castle-fall/spritesheet.webp?v=hd-20260801";
const mS = {
  move: "./generated/all-unit-animations-v1/guard-move/spritesheet.webp",
  attack: "./generated/all-unit-animations-v1/guard-attack/spritesheet.webp",
  death: "./generated/all-unit-animations-v1/guard-death/spritesheet.webp"
};
const yS = {
  move: "./generated/enemy-cutouts-transparent/animations/dagon-move.webp",
  attack: "./generated/animation-workshop/dagon-abyssal-machine-god--enemy-attack/spritesheet.webp",
  death: "./generated/all-unit-animations-v1/dagon-death/spritesheet.webp"
};
const yn = "./generated/tide-crystal-coin/tide-crystal-coin-cutout.webp";
const uS = {
  "crossbow-bolt": "./generated/tower-projectile-realistic-alpha/crossbow-bolt.webp",
  "crossbow-starlight": "./generated/tower-projectile-realistic-alpha/crossbow-bolt.webp",
  "crossbow-moonmark": "./generated/tower-projectile-realistic-alpha/crossbow-moonmark.webp",
  "crossbow-phantom": "./generated/tower-projectile-realistic-alpha/crossbow-phantom.webp",
  "cannon-shell": "./generated/tower-projectile-realistic-alpha/cannon-shell.webp",
  "cannon-dragon": "./generated/tower-projectile-realistic-alpha/cannon-dragon-shell.webp",
  "cannon-meteor": "./generated/tower-projectile-realistic-alpha/cannon-meteor.webp",
  "barracks-harpoon": "./generated/tower-projectile-realistic-alpha/barracks-harpoon.webp",
  "storm-spear": "./generated/tower-projectile-realistic-alpha/storm-spear.webp",
  "storm-magnetic": "./generated/tower-projectile-realistic-alpha/storm-magnetic-core.webp",
  "time-frost": "./generated/tower-projectile-realistic-alpha/time-frost-orb.webp",
  "time-reverse": "./generated/tower-projectile-realistic-alpha/time-reverse-hourglass.webp",
  "time-resonance": "./generated/tower-projectile-realistic-alpha/time-resonance-rune.webp"
};
const xS = {
  "bolt-impact": "./generated/tower-attack-effects-realistic/star-volley-impact.webp",
  "moonmark-impact": "./generated/tower-attack-effects-realistic/moon-pierce-impact.webp",
  "phantom-impact": "./generated/tower-attack-effects-realistic/star-volley-impact.webp",
  "cannon-impact": "./generated/tower-attack-effects-realistic/whale-bombard-impact.webp",
  "dragon-impact": "./generated/tower-attack-effects-realistic/whale-bombard-impact.webp",
  "meteor-impact": "./generated/tower-attack-effects-realistic/meteor-fall-impact.webp",
  "storm-impact": "./generated/tower-attack-effects-realistic/chain-storm-impact.webp",
  "magnetic-impact": "./generated/tower-attack-effects-realistic/magnetic-vortex-impact.webp",
  "frost-impact": "./generated/tower-attack-effects-realistic/frozen-time-impact.webp",
  "reverse-impact": "./generated/tower-attack-effects-realistic/frozen-time-impact.webp",
  "resonance-impact": "./generated/tower-attack-effects-realistic/rune-resonance-impact.webp",
  "anchor-impact": "./generated/tower-attack-effects-realistic/anchor-guard-impact.webp",
  "guard-impact": "./generated/tower-attack-effects-realistic/anchor-guard-impact.webp",
  "harpoon-impact": "./generated/tower-attack-effects-realistic/harpoon-rush-impact.webp"
};
const fS = {
  crossbow: "./generated/tower-attack-trails-realistic/crossbow-crystal-streak.webp",
  cannon: "./generated/tower-attack-trails-realistic/cannon-burning-flame.webp",
  barracks: "./generated/tower-attack-trails-realistic/harpoon-phantom-wake.webp",
  storm: "./generated/tower-attack-trails-realistic/storm-electric-arc.webp",
  time: "./generated/tower-attack-trails-realistic/time-frost-wake.webp"
};
const F1 = {
  double_tide_harbor: "./generated/map-backgrounds/double-tide-harbor-origin-v5-final.webp",
  broken_crown: "./generated/map-backgrounds/broken-crown-gates-v2.webp",
  storm_air_dock: "./generated/map-backgrounds/storm-air-dock-gates-v2.webp",
  sunken_foundry: "./generated/map-backgrounds/sunken-foundry.webp",
  leviathan_bone_sea: "./generated/map-backgrounds/leviathan-bone-sea.webp",
  mist_boiler_city: "./generated/map-backgrounds/mist-boiler-city-final.webp"
};
const un = {
  damageMultiplier: 0.98,
  cooldownMultiplier: 1.02
};
const bS = {
  first: {
    label: "最前",
    detail: "最接近终点"
  },
  last: {
    label: "最后",
    detail: "最远离终点"
  },
  strong: {
    label: "强敌",
    detail: "最大生命最高"
  },
  weak: {
    label: "残血",
    detail: "当前生命最低"
  }
};
function o(_0xc671ab, _0x20a6a4, _0x520105) {
  const _0xcf1531 = document.createElement(_0xc671ab);
  if (_0x20a6a4) {
    _0xcf1531.className = _0x20a6a4;
  }
  if (_0x520105 !== undefined) {
    _0xcf1531.textContent = _0x520105;
  }
  return _0xcf1531;
}
function u1(_0x32f850) {
  _0x32f850.classList.add("gear-framed-panel");
  if (_0x32f850.querySelector(":scope > .gear-panel-frame")) {
    return;
  }
  const _0x3070ea = o("span", "gear-panel-frame");
  _0x3070ea.setAttribute("aria-hidden", "true");
  ["top", "right", "bottom", "left"].forEach(_0x32d386 => {
    _0x3070ea.append(o("i", "gear-panel-gem gear-panel-gem--" + _0x32d386));
  });
  _0x32f850.append(_0x3070ea);
}
function T(_0xfce7d2) {
  const _0x38fcbf = o("i");
  _0x38fcbf.dataset.lucide = _0xfce7d2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
  _0x38fcbf.setAttribute("aria-hidden", "true");
  return _0x38fcbf;
}
function x1(_0x257825) {
  const _0x50a302 = new Image();
  _0x50a302.src = _0x257825;
  return _0x50a302;
}
function U1(_0x54be41, _0x48325e, _0x3f5472) {
  const _0x37a676 = H1[_0x54be41];
  const _0x50d17e = _0x48325e === 4 && _0x3f5472 ? {
    ..._0x37a676,
    ..._0x37a676.branches[_0x3f5472].stats
  } : {
    ..._0x37a676,
    ..._0x37a676.levels[(_0x48325e || 1) - 1]
  };
  return {
    ..._0x50d17e,
    damage: _0x50d17e.damage * un.damageMultiplier,
    cooldown: _0x50d17e.cooldown * un.cooldownMultiplier
  };
}
function xn(_0x2afc37, _0x215e4c) {
  if (_0x215e4c.level === 4 && _0x215e4c.branch) {
    return _0x2afc37.branches[_0x215e4c.branch].asset;
  } else {
    return _0x2afc37.assets[_0x215e4c.level - 1];
  }
}
function wS(_0x5e5e19, _0x39aa7a) {
  var _0x1bb1b9;
  if (_0x39aa7a.level === 4 && _0x39aa7a.branch) {
    return _0x5e5e19.branches[_0x39aa7a.branch].animationAsset;
  } else if ((_0x1bb1b9 = _0x5e5e19.animationAssets) == null) {
    return undefined;
  } else {
    return _0x1bb1b9[_0x39aa7a.level - 1];
  }
}
function fn(_0x41434e, _0x258d31) {
  if (_0x258d31.level === 4 && _0x258d31.branch) {
    return _0x41434e.branches[_0x258d31.branch].name;
  } else {
    return _0x41434e.name;
  }
}
function ta(_0x13d676) {
  return Math.max(1, Math.min(4, _0x13d676.level || 1));
}
function bn(_0x3c954f) {
  const _0x741138 = ta(_0x3c954f) - 1;
  if (_0x3c954f.type === "crossbow") {
    return "每6箭 · 星辉 " + $.starlight.direct[_0x741138] + " · 时潮回响";
  }
  if (_0x3c954f.type === "cannon") {
    return "火焰 " + $.fire.direct[_0x741138] + " · 灼烧 " + $.fire.dot[_0x741138] + "/秒 · 3层";
  }
  if (_0x3c954f.type === "storm") {
    const _0xbb478a = _0x3c954f.level === 4 && _0x3c954f.branch === "magnetic" ? 4 : $.lightning.chains[_0x741138];
    return "雷电 " + U1(_0x3c954f.type, _0x3c954f.level, _0x3c954f.branch).damage + " · 导电4秒 · " + _0xbb478a + "目标";
  }
  if (_0x3c954f.type === "time") {
    return "霜潮 " + $.frost.direct[_0x741138] + " · 减速 " + Math.round($.frost.slow[_0x741138] * 100) + "% · 潮湿4秒";
  } else {
    return "物理阻挡 · 单体近战";
  }
}
function AS(_0x488e6e, _0x5c9e34 = false) {
  if (_0x488e6e.type === "crossbow") {
    if (_0x488e6e.branch === "moonmark") {
      return "crossbow-moonmark";
    } else if (_0x488e6e.branch === "phantom") {
      return "crossbow-phantom";
    } else if (_0x5c9e34) {
      return "crossbow-starlight";
    } else {
      return "crossbow-bolt";
    }
  } else if (_0x488e6e.type === "cannon") {
    if (_0x488e6e.branch === "dragon") {
      return "cannon-dragon";
    } else if (_0x488e6e.branch === "meteor") {
      return "cannon-meteor";
    } else {
      return "cannon-shell";
    }
  } else if (_0x488e6e.type === "storm") {
    if (_0x488e6e.branch === "magnetic") {
      return "storm-magnetic";
    } else {
      return "storm-spear";
    }
  } else if (_0x488e6e.type === "time") {
    if (_0x488e6e.branch === "reverse") {
      return "time-reverse";
    } else if (_0x488e6e.branch === "resonance") {
      return "time-resonance";
    } else {
      return "time-frost";
    }
  } else if (_0x488e6e.type === "barracks" && _0x488e6e.branch === "harpoon") {
    return "barracks-harpoon";
  } else {
    return "";
  }
}
function kS(_0x3359ff) {
  const _0x3cb93e = [];
  let _0x2d8e51 = 0;
  for (let _0x524781 = 1; _0x524781 < _0x3359ff.length; _0x524781 += 1) {
    const _0x1c72d0 = _0x3359ff[_0x524781 - 1];
    const _0x227eab = _0x3359ff[_0x524781];
    const _0x709f88 = Math.hypot(_0x227eab.x - _0x1c72d0.x, _0x227eab.y - _0x1c72d0.y);
    _0x3cb93e.push({
      from: _0x1c72d0,
      to: _0x227eab,
      length: _0x709f88,
      start: _0x2d8e51
    });
    _0x2d8e51 += _0x709f88;
  }
  return {
    segments: _0x3cb93e,
    total: _0x2d8e51
  };
}
function HS(_0x2f6767, _0xbde4ff = 14) {
  const _0x99e6a1 = [_0x2f6767[0]];
  for (let _0x132915 = 0; _0x132915 < _0x2f6767.length - 1; _0x132915 += 1) {
    const _0x20574e = _0x2f6767[Math.max(0, _0x132915 - 1)];
    const _0x22dbe3 = _0x2f6767[_0x132915];
    const _0x1d9d92 = _0x2f6767[_0x132915 + 1];
    const _0x3a188b = _0x2f6767[Math.min(_0x2f6767.length - 1, _0x132915 + 2)];
    for (let _0x361113 = 1; _0x361113 <= _0xbde4ff; _0x361113 += 1) {
      const _0x31a4e9 = _0x361113 / _0xbde4ff;
      const _0x36466c = _0x31a4e9 * _0x31a4e9;
      const _0xc5db04 = _0x36466c * _0x31a4e9;
      _0x99e6a1.push({
        x: (_0x22dbe3.x * 2 + (-_0x20574e.x + _0x1d9d92.x) * _0x31a4e9 + (_0x20574e.x * 2 - _0x22dbe3.x * 5 + _0x1d9d92.x * 4 - _0x3a188b.x) * _0x36466c + (-_0x20574e.x + _0x22dbe3.x * 3 - _0x1d9d92.x * 3 + _0x3a188b.x) * _0xc5db04) * 0.5,
        y: (_0x22dbe3.y * 2 + (-_0x20574e.y + _0x1d9d92.y) * _0x31a4e9 + (_0x20574e.y * 2 - _0x22dbe3.y * 5 + _0x1d9d92.y * 4 - _0x3a188b.y) * _0x36466c + (-_0x20574e.y + _0x22dbe3.y * 3 - _0x1d9d92.y * 3 + _0x3a188b.y) * _0xc5db04) * 0.5
      });
    }
  }
  return _0x99e6a1;
}
function SS(_0x4bce17, _0x280aac = 18) {
  if (_0x4bce17.length < 2) {
    return _0x4bce17.slice();
  }
  const _0x4614e3 = [_0x4bce17[0]];
  let _0x1a28c7 = _0x4bce17[0];
  for (let _0x5f1d3c = 1; _0x5f1d3c < _0x4bce17.length - 1; _0x5f1d3c += 1) {
    const _0x3deca7 = _0x4bce17[_0x5f1d3c];
    const _0x3eed98 = _0x4bce17[_0x5f1d3c + 1];
    const _0x18ba86 = {
      x: (_0x3deca7.x + _0x3eed98.x) / 2,
      y: (_0x3deca7.y + _0x3eed98.y) / 2
    };
    for (let _0x1622df = 1; _0x1622df <= _0x280aac; _0x1622df += 1) {
      const _0x1f58a6 = _0x1622df / _0x280aac;
      const _0x59dd33 = 1 - _0x1f58a6;
      _0x4614e3.push({
        x: _0x59dd33 * _0x59dd33 * _0x1a28c7.x + _0x59dd33 * 2 * _0x1f58a6 * _0x3deca7.x + _0x1f58a6 * _0x1f58a6 * _0x18ba86.x,
        y: _0x59dd33 * _0x59dd33 * _0x1a28c7.y + _0x59dd33 * 2 * _0x1f58a6 * _0x3deca7.y + _0x1f58a6 * _0x1f58a6 * _0x18ba86.y
      });
    }
    _0x1a28c7 = _0x18ba86;
  }
  const _0x2819ff = _0x4bce17.at(-1);
  for (let _0xf50e9e = 1; _0xf50e9e <= _0x280aac; _0xf50e9e += 1) {
    const _0x42343e = _0xf50e9e / _0x280aac;
    _0x4614e3.push({
      x: _0x1a28c7.x + (_0x2819ff.x - _0x1a28c7.x) * _0x42343e,
      y: _0x1a28c7.y + (_0x2819ff.y - _0x1a28c7.y) * _0x42343e
    });
  }
  return _0x4614e3;
}
const s1 = Object.fromEntries(Object.entries(S1).map(([_0x2471b6, _0x461200]) => [_0x2471b6, kS(S.curve === "quadratic" ? SS(_0x461200) : S.smoothPaths ? HS(_0x461200) : _0x461200)]));
function Zn(_0x22632b, _0x16cc47) {
  return _0x22632b.segments.reduce((_0xba3e0b, _0x33ccd9) => {
    const _0x517ac4 = _0x33ccd9.to.x - _0x33ccd9.from.x;
    const _0x235c1f = _0x33ccd9.to.y - _0x33ccd9.from.y;
    const _0x12b637 = _0x517ac4 * _0x517ac4 + _0x235c1f * _0x235c1f;
    const _0x554999 = _0x12b637 ? Math.max(0, Math.min(1, ((_0x16cc47.x - _0x33ccd9.from.x) * _0x517ac4 + (_0x16cc47.y - _0x33ccd9.from.y) * _0x235c1f) / _0x12b637)) : 0;
    const _0x329593 = _0x33ccd9.from.x + _0x517ac4 * _0x554999;
    const _0x1f43f4 = _0x33ccd9.from.y + _0x235c1f * _0x554999;
    const _0x1f9c10 = Math.hypot(_0x16cc47.x - _0x329593, _0x16cc47.y - _0x1f43f4);
    const _0x30ae13 = _0x33ccd9.start + _0x33ccd9.length * _0x554999;
    if (_0x1f9c10 < _0xba3e0b.separation) {
      return {
        separation: _0x1f9c10,
        distance: _0x30ae13
      };
    } else {
      return _0xba3e0b;
    }
  }, {
    separation: Infinity,
    distance: 0
  }).distance;
}
const W1 = rS[F];
const it = ((W1 == null ? undefined : W1.sites) || []).map(_0x29042b => {
  const _0x8300d7 = Object.fromEntries(_0x29042b.routes.filter(_0x481ace => s1[_0x481ace]).map(_0xb67545 => [_0xb67545, Zn(s1[_0xb67545], _0x29042b)]));
  return {
    ..._0x29042b,
    distances: _0x8300d7
  };
});
const CS = new Map(it.map(_0x120855 => [_0x120855.id, _0x120855]));
function VS(_0x55a5d4) {
  return it.find(_0x58fe37 => _0x58fe37.routes.includes(_0x55a5d4)) || null;
}
function Fn(_0x4d11a7, _0x4ba77e, _0x2f11a8) {
  const _0x1ca190 = _0x2f11a8.x - _0x4ba77e.x;
  const _0xdb2cb9 = _0x2f11a8.y - _0x4ba77e.y;
  const _0x1b3f2d = _0x1ca190 * _0x1ca190 + _0xdb2cb9 * _0xdb2cb9;
  const _0x133ef5 = _0x1b3f2d ? Math.max(0, Math.min(1, ((_0x4d11a7.x - _0x4ba77e.x) * _0x1ca190 + (_0x4d11a7.y - _0x4ba77e.y) * _0xdb2cb9) / _0x1b3f2d)) : 0;
  return Math.hypot(_0x4d11a7.x - (_0x4ba77e.x + _0x1ca190 * _0x133ef5), _0x4d11a7.y - (_0x4ba77e.y + _0xdb2cb9 * _0x133ef5));
}
function m2(_0x414ca2, _0x8cdcb1) {
  const _0x204420 = Math.max(0, Math.min(_0x8cdcb1, _0x414ca2.total));
  const _0x281e42 = _0x414ca2.segments.find(_0x35cccf => _0x204420 <= _0x35cccf.start + _0x35cccf.length) || _0x414ca2.segments.at(-1);
  const _0x57b4b3 = Math.max(0, Math.min(1, (_0x204420 - _0x281e42.start) / _0x281e42.length));
  return {
    x: _0x281e42.from.x + (_0x281e42.to.x - _0x281e42.from.x) * _0x57b4b3,
    y: _0x281e42.from.y + (_0x281e42.to.y - _0x281e42.from.y) * _0x57b4b3,
    dx: (_0x281e42.to.x - _0x281e42.from.x) / _0x281e42.length,
    dy: (_0x281e42.to.y - _0x281e42.from.y) / _0x281e42.length
  };
}
const wn = Object.fromEntries(Object.entries(s1).map(([_0x4f3e75, _0x103975]) => {
  const _0x3d9c11 = S.destination || _0x103975.segments.at(-1).to;
  const _0x7a29a3 = Zn(_0x103975, _0x3d9c11);
  return [_0x4f3e75, {
    distance: _0x7a29a3,
    point: m2(_0x103975, _0x7a29a3)
  }];
}));
function rt(_0x2bfa43) {
  return wn[_0x2bfa43] || wn[S.routes[0]];
}
function LS() {
  if (F1[F]) {
    return S.pads.map(({
      x: _0x2629fa,
      y: _0x4fd221
    }) => ({
      x: _0x2629fa,
      y: _0x4fd221
    }));
  }
  const _0x2503f2 = S.drawRoutes || Object.keys(S1);
  const _0x2c1ab4 = S.pads.length;
  const _0x132a04 = [];
  _0x2503f2.forEach((_0xbee5ba, _0x48e8d2) => {
    const _0x3e17ab = s1[_0xbee5ba];
    for (let _0xc65bb3 = 95; _0xc65bb3 <= _0x3e17ab.total - 100; _0xc65bb3 += 52) {
      const _0x441e32 = m2(_0x3e17ab, _0xc65bb3);
      [-1, 1].forEach(_0x288002 => {
        const _0x1c7e47 = {
          x: Math.round(_0x441e32.x - _0x441e32.dy * 82 * _0x288002),
          y: Math.round(_0x441e32.y + _0x441e32.dx * 82 * _0x288002),
          routeIndex: _0x48e8d2,
          distance: _0xc65bb3
        };
        if (_0x1c7e47.x < 62 || _0x1c7e47.x > Z.width - 62 || _0x1c7e47.y < 58 || _0x1c7e47.y > Z.height - 58 || _0x1c7e47.x < 185 && _0x1c7e47.y < 92 || Math.hypot(_0x1c7e47.x - j.position.x, _0x1c7e47.y - j.position.y) < (j.hitRadius || 52) + 58 || Math.hypot(_0x1c7e47.x - 1175, _0x1c7e47.y - 415) < 90) {
          return;
        }
        const _0x2be09c = Object.values(S1).reduce((_0x4f4b25, _0x1b0137) => {
          for (let _0x5d3492 = 1; _0x5d3492 < _0x1b0137.length; _0x5d3492 += 1) {
            _0x4f4b25 = Math.min(_0x4f4b25, Fn(_0x1c7e47, _0x1b0137[_0x5d3492 - 1], _0x1b0137[_0x5d3492]));
          }
          return _0x4f4b25;
        }, Infinity);
        if (!(_0x2be09c < 70) && !(_0x2be09c > 96)) {
          _0x132a04.push(_0x1c7e47);
        }
      });
    }
  });
  const _0x4de535 = [];
  while (_0x4de535.length < _0x2c1ab4 && _0x132a04.length) {
    let _0x2a78b8 = 0;
    let _0x8689ca = -Infinity;
    _0x132a04.forEach((_0x81611c, _0x208a80) => {
      const _0xdb9012 = (_0x4de535.length ? Math.min(..._0x4de535.map(_0x3ebcab => Math.hypot(_0x81611c.x - _0x3ebcab.x, _0x81611c.y - _0x3ebcab.y))) : 0) + (_0x4de535.length ? 0 : Math.abs(_0x81611c.x - Z.width / 2) * 0.1);
      if (_0xdb9012 > _0x8689ca) {
        _0x8689ca = _0xdb9012;
        _0x2a78b8 = _0x208a80;
      }
    });
    const [_0x44a166] = _0x132a04.splice(_0x2a78b8, 1);
    _0x4de535.push(_0x44a166);
    for (let _0x32772d = _0x132a04.length - 1; _0x32772d >= 0; _0x32772d -= 1) {
      if (Math.hypot(_0x132a04[_0x32772d].x - _0x44a166.x, _0x132a04[_0x32772d].y - _0x44a166.y) < 92) {
        _0x132a04.splice(_0x32772d, 1);
      }
    }
  }
  return (_0x4de535.length === _0x2c1ab4 ? _0x4de535 : S.pads).slice(0, _0x2c1ab4).map(({
    x: _0x56c6de,
    y: _0x5333c3
  }) => ({
    x: _0x56c6de,
    y: _0x5333c3
  })).sort((_0x5fdee6, _0x5b04ea) => _0x5fdee6.x - _0x5b04ea.x || _0x5fdee6.y - _0x5b04ea.y);
}
const Q = LS();
const PS = {
  crossbow: 0.79,
  cannon: 0.77,
  barracks: 0.79,
  storm: 0.79,
  time: 0.81
};
const An = {
  crossbow: {
    x: 4.5,
    y: 1.2,
    rotation: 0.012
  },
  cannon: {
    x: 6.5,
    y: 1.8,
    rotation: 0.016
  },
  barracks: {
    x: 2.5,
    y: 0.8,
    rotation: 0.008
  },
  storm: {
    x: 0,
    y: 2.8,
    rotation: 0
  },
  time: {
    x: 0,
    y: 2.2,
    rotation: 0
  }
};
function TS(_0x37d405, _0x20063f, _0x4a0442) {
  if (_0x20063f < 0 || _0x20063f >= _0x4a0442) {
    return {
      x: 0,
      y: 0,
      rotation: 0
    };
  }
  const _0x514a66 = [0, -0.18, -0.34, -0.08, 1, 0.42, -0.14, 0];
  const _0x37c379 = Math.min(_0x514a66.length - 1, _0x20063f / _0x4a0442 * _0x514a66.length);
  const _0x5ab723 = Math.min(_0x514a66.length - 2, Math.floor(_0x37c379));
  const _0x2599ed = _0x514a66[_0x5ab723] + (_0x514a66[_0x5ab723 + 1] - _0x514a66[_0x5ab723]) * (_0x37c379 - _0x5ab723);
  const _0x32d6f1 = An[_0x37d405] || An.crossbow;
  return {
    x: _0x32d6f1.x * _0x2599ed,
    y: _0x32d6f1.y * Math.abs(_0x2599ed),
    rotation: _0x32d6f1.rotation * _0x2599ed
  };
}
function W(_0x44a71e, _0x3c65d7) {
  const _0xe44343 = s1[_0x3c65d7 || S.routes[0]];
  const _0x2fcf60 = Math.max(0, Math.min(_0x44a71e, _0xe44343.total));
  const _0x4cca53 = _0xe44343.segments.find(_0x5e94e3 => _0x2fcf60 <= _0x5e94e3.start + _0x5e94e3.length) || _0xe44343.segments.at(-1);
  const _0x42c6dc = Math.max(0, Math.min(1, (_0x2fcf60 - _0x4cca53.start) / _0x4cca53.length));
  return {
    x: _0x4cca53.from.x + (_0x4cca53.to.x - _0x4cca53.from.x) * _0x42c6dc,
    y: _0x4cca53.from.y + (_0x4cca53.to.y - _0x4cca53.from.y) * _0x42c6dc
  };
}
function N1(_0x1b0b95) {
  var _0x5dfc82;
  return _0x1b0b95.distance / Math.max(1, ((_0x5dfc82 = rt(_0x1b0b95.route)) == null ? undefined : _0x5dfc82.distance) || 1);
}
function RS(_0x4d2258, _0x40c34a = "first") {
  if (_0x40c34a === "last") {
    return _0x4d2258.sort((_0x25016b, _0x484d1f) => N1(_0x25016b) - N1(_0x484d1f))[0];
  } else if (_0x40c34a === "strong") {
    return _0x4d2258.sort((_0x2f6990, _0x3664a0) => _0x3664a0.maxHealth - _0x2f6990.maxHealth || N1(_0x3664a0) - N1(_0x2f6990))[0];
  } else if (_0x40c34a === "weak") {
    return _0x4d2258.sort((_0xb530f6, _0x16ddd0) => _0xb530f6.health - _0x16ddd0.health || N1(_0x16ddd0) - N1(_0xb530f6))[0];
  } else {
    return _0x4d2258.sort((_0x1ea8ce, _0x1f168a) => N1(_0x1f168a) - N1(_0x1ea8ce))[0];
  }
}
function Jt(_0x171d30) {
  let _0x1b4f68 = null;
  S.routes.forEach(_0x43ed13 => {
    const _0x117248 = s1[_0x43ed13];
    for (let _0x429c57 = 45; _0x429c57 < _0x117248.total - 80; _0x429c57 += 12) {
      const _0x136419 = W(_0x429c57, _0x43ed13);
      const _0x46a7b0 = Math.hypot(_0x136419.x - _0x171d30.x, _0x136419.y - _0x171d30.y);
      if (!_0x1b4f68 || _0x46a7b0 < _0x1b4f68.separation) {
        _0x1b4f68 = {
          route: _0x43ed13,
          distance: _0x429c57,
          point: _0x136419,
          separation: _0x46a7b0
        };
      }
    }
  });
  return _0x1b4f68;
}
function kn(_0x1ddbac, _0x59228b, _0x2b1ee4, _0x26ea4d) {
  const _0x1d1da0 = o("div", "battle-stat");
  const _0x294094 = o("span");
  _0x294094.append(T(_0x1ddbac));
  const _0x5e9ee7 = o("div");
  _0x5e9ee7.append(o("small", "", _0x59228b));
  const _0x306d4c = o("strong", "", _0x2b1ee4);
  if (_0x26ea4d) {
    _0x306d4c.id = _0x26ea4d;
  }
  _0x5e9ee7.append(_0x306d4c);
  _0x1d1da0.append(_0x294094, _0x5e9ee7);
  return _0x1d1da0;
}
function J(_0x4aba52, _0x26691a, _0x3a0b64, _0x3384b2 = "") {
  _0x4aba52.dataset.previewTitle = _0x26691a;
  _0x4aba52.dataset.previewDetail = _0x3a0b64;
  if (_0x3384b2) {
    _0x4aba52.dataset.previewMeta = _0x3384b2;
  } else {
    delete _0x4aba52.dataset.previewMeta;
  }
  _0x4aba52.removeAttribute("title");
  _0x4aba52.setAttribute("aria-describedby", "battle-hover-preview");
  return _0x4aba52;
}
function BS(_0x16a42a, _0x277dcd) {
  const _0x799dc4 = K ? C1.length - 1 : zn();
  const _0x204be4 = C1.indexOf(F);
  const _0x559169 = jt();
  const _0x2455fb = pS();
  const _0x18e0e8 = {
    gold: S.gold,
    lives: 20,
    wave: 0,
    maxWaves: S.waves,
    waveActive: false,
    status: "ready",
    selectedPad: null,
    rallyTower: null,
    rallyPreview: null,
    hoveredPad: null,
    hoveredInteraction: false,
    speed: 1,
    paused: false,
    effectsQuality: _0x2455fb.effects,
    reducedMotion: _0x2455fb.reducedMotion,
    towers: [],
    guards: [],
    enemies: [],
    defeatedUnits: [],
    projectiles: [],
    enemyProjectiles: [],
    echoes: [],
    effects: [],
    spawnQueue: [],
    spawnTimer: 0,
    mechanicActive: false,
    mechanicTimer: 0,
    mechanicUsed: false,
    mapStateLabel: S.statusOpen,
    routeSpeedModifiers: {},
    interactionCharges: j.charges,
    interactionCooldown: 0,
    boilerLockTimer: 0,
    stormTimer: 7,
    animationId: 0,
    showcaseStarted: false,
    waveCalloutTimer: 0,
    mapEventCalloutTimer: 0,
    mapEventCalloutDelay: 0,
    earlyWaves: 0,
    kills: 0,
    goldEarned: 0,
    startedAt: 0,
    pausedAt: 0,
    pausedDuration: 0,
    resultShown: false,
    defeatSequenceStarted: false,
    lastTime: performance.now()
  };
  const _0x169792 = sS(iS, F);
  const _0x5d4f79 = eS(F);
  _0x16a42a.classList.toggle("game-reduced-motion", _0x18e0e8.reducedMotion);
  const _0xef88c5 = Object.values(H1).flatMap(_0x309091 => [..._0x309091.assets, ...Object.values(_0x309091.branches).map(_0x804f6 => _0x804f6.asset)]);
  const _0x15b97d = Object.values(H1).flatMap(_0x100863 => [...(_0x100863.animationAssets || []).filter(Boolean), ...Object.values(_0x100863.branches).map(_0x5209a4 => _0x5209a4.animationAsset).filter(Boolean)]);
  const _0x3697c9 = Object.entries(M1).flatMap(([_0x4dcc7d, _0x14a6be]) => [...Object.values(_0x14a6be.animations || {}), "./generated/all-unit-animations-v1/" + _0x4dcc7d + "-death/spritesheet.webp"]);
  const _0x54dc86 = {
    background: F1[F] ? x1(F1[F]) : null,
    castleFall: x1(mn),
    enemies: new Map(Object.entries(M1).map(([_0x22e293, _0x145f46]) => [_0x22e293, x1(_0x145f46.asset)])),
    dagon: x1(Qt),
    guard: x1(gS),
    enemyAnimations: new Map(_0x3697c9.map(_0x48da23 => [_0x48da23, x1(_0x48da23)])),
    dagonAnimations: new Map(Object.entries(yS).map(([_0xc9dc34, _0xf4607c]) => [_0xc9dc34, x1(_0xf4607c)])),
    guardAnimations: new Map(Object.entries(mS).map(([_0x5ecb1b, _0x2a043a]) => [_0x5ecb1b, x1(_0x2a043a)])),
    towers: new Map(_0xef88c5.map(_0x1faeae => [_0x1faeae, x1(_0x1faeae)])),
    towerAnimations: new Map(_0x15b97d.map(_0x39e65b => [_0x39e65b, x1(_0x39e65b)])),
    projectiles: new Map(Object.entries(uS).map(([_0x5f3a64, _0x4089ea]) => [_0x5f3a64, x1(_0x4089ea)])),
    impacts: new Map(Object.entries(xS).map(([_0x4ad29d, _0x151b6e]) => [_0x4ad29d, x1(_0x151b6e)])),
    trails: new Map(Object.entries(fS).map(([_0x1cbdb5, _0x4c939c]) => [_0x1cbdb5, x1(_0x4c939c)]))
  };
  const _0x236820 = o("section", "game-opening");
  _0x236820.style.setProperty("--opening-map", "url(\"" + F1[F] + "\")");
  _0x236820.setAttribute("aria-labelledby", "game-opening-title");
  const _0x3d757f = o("div", "game-opening-shade");
  const _0x2b9f2e = o("header", "game-opening-topbar");
  const _0x296a6c = o("div", "game-opening-brand");
  const _0x5cca10 = o("span");
  _0x5cca10.append(T("Waves"));
  const _0x5dc877 = o("span");
  _0x5dc877.append(o("strong", "", "潮汐王冠"), o("small", "", "TIDE CROWN"));
  _0x296a6c.append(_0x5cca10, _0x5dc877);
  const _0x338d35 = o("a", "game-opening-tool-link");
  _0x338d35.href = "./?view=assets";
  _0x338d35.append(T("Images"), o("span", "", "素材铸造台"));
  J(_0x338d35, "素材铸造台", "查看、生成并管理游戏美术资源");
  const _0x5835bc = o("button", "game-opening-tool-link game-audio-button");
  _0x5835bc.type = "button";
  const _0x59c4ad = o("div", "game-opening-tools");
  _0x59c4ad.append(_0x5835bc);
  _0x2b9f2e.append(_0x296a6c, _0x59c4ad);
  const _0x59e808 = o("div", "game-opening-content");
  const _0x386a9b = o("div", "game-opening-eyebrow");
  _0x386a9b.append(o("span", "", S.number), o("small", "", S.subtitle + " · " + S.difficulty));
  const _0xeb45d8 = o("h1", "game-opening-title", "潮汐王冠");
  _0xeb45d8.id = "game-opening-title";
  _0xeb45d8.dataset.title = "潮汐王冠";
  const _0x53fde0 = o("div", "game-opening-title-flourish");
  _0x53fde0.setAttribute("aria-hidden", "true");
  _0x53fde0.append(o("span"), T("Waves"), o("span"), T("Cog"));
  const _0x41f4d2 = o("p", "game-opening-subtitle", "蒸汽与深海交界处，最后的深海巨兽正在苏醒。");
  const _0x2fd142 = o("div", "game-opening-mission");
  _0x2fd142.append(T("Shield"), o("span", "", S.mission));
  const _0x3f05e5 = o("div", "game-opening-actions");
  const _0x163dc0 = o("button", "game-opening-enter");
  _0x163dc0.type = "button";
  _0x163dc0.disabled = _0x204be4 > _0x799dc4;
  _0x163dc0.append(T("Play"), o("span", "", "进入战场"));
  J(_0x163dc0, "进入战场", S.mission, S.name + " · " + S.difficulty);
  const _0x2adf84 = o("button", "game-opening-tutorial");
  _0x2adf84.type = "button";
  _0x2adf84.append(T("Lightbulb"), o("span", "", "游戏提示"));
  J(_0x2adf84, "游戏提示", "查看防御塔与深海敌军的克制关系");
  const _0x20ed05 = o("div", "game-opening-progress-copy");
  _0x20ed05.append(o("small", "", "关卡进度"), o("strong", "", String(_0x799dc4 + 1).padStart(2, "0") + " / " + String(C1.length).padStart(2, "0")));
  _0x3f05e5.append(_0x163dc0, _0x2adf84, _0x20ed05);
  _0x59e808.append(_0x386a9b, _0xeb45d8, _0x53fde0, _0x41f4d2, _0x2fd142, _0x3f05e5);
  const _0x2c5e59 = o("div", "game-opening-side-emblem");
  _0x2c5e59.setAttribute("aria-hidden", "true");
  const _0x221511 = o("img", "game-opening-emblem-art");
  _0x221511.src = "./generated/homepage-decor/tide-gear-emblem.webp";
  _0x221511.alt = "";
  _0x2c5e59.append(_0x221511);
  const _0x2d3b29 = o("div", "game-opening-body");
  _0x2d3b29.append(_0x59e808, _0x2c5e59);
  const _0x3e3ac7 = o("img", "game-opening-lower-wave");
  _0x3e3ac7.src = "./generated/homepage-decor/tide-wave-flourish.webp";
  _0x3e3ac7.alt = "";
  _0x3e3ac7.setAttribute("aria-hidden", "true");
  const _0x275690 = o("div", "game-tutorial-overlay");
  _0x275690.hidden = true;
  const _0x3c16ca = o("section", "game-tutorial-panel");
  _0x3c16ca.setAttribute("role", "dialog");
  _0x3c16ca.setAttribute("aria-modal", "true");
  _0x3c16ca.setAttribute("aria-labelledby", "game-tutorial-title");
  _0x3c16ca.tabIndex = -1;
  const _0x2dd611 = o("header", "game-tutorial-header");
  const _0x5d3674 = o("div", "game-tutorial-heading");
  const _0x44ede6 = o("span", "game-tutorial-heading-icon");
  _0x44ede6.append(T("ShieldQuestion"));
  const _0x4a618c = o("div");
  const _0x4eca18 = o("h2", "", "战场克制提示");
  _0x4eca18.id = "game-tutorial-title";
  _0x4a618c.append(o("small", "", "皇家工程敌情手册"), _0x4eca18);
  _0x5d3674.append(_0x44ede6, _0x4a618c);
  const _0x2a89b9 = o("button", "game-tutorial-close");
  _0x2a89b9.type = "button";
  _0x2a89b9.setAttribute("aria-label", "关闭游戏提示");
  _0x2a89b9.append(T("X"));
  _0x2dd611.append(_0x5d3674, _0x2a89b9);
  const _0x266924 = o("div", "game-tutorial-tabs");
  _0x266924.setAttribute("role", "tablist");
  _0x266924.setAttribute("aria-label", "游戏提示章节");
  const _0x322f65 = [{
    id: "counters",
    label: "克制关系",
    icon: "Swords"
  }, {
    id: "elements",
    label: "元素连携",
    icon: "Sparkles"
  }, {
    id: "boss",
    label: "首领弱点",
    icon: "Target"
  }];
  const _0x47e5e0 = _0x322f65.map((_0x5d6029, _0x3f365b) => {
    const _0x500014 = o("button", "game-tutorial-tab" + (_0x3f365b === 0 ? " is-active" : ""));
    _0x500014.type = "button";
    _0x500014.dataset.section = _0x5d6029.id;
    _0x500014.id = "game-tutorial-tab-" + _0x5d6029.id;
    _0x500014.setAttribute("role", "tab");
    _0x500014.setAttribute("aria-selected", _0x3f365b === 0 ? "true" : "false");
    _0x500014.setAttribute("aria-controls", "game-tutorial-content");
    _0x500014.append(T(_0x5d6029.icon), o("span", "", _0x5d6029.label));
    _0x266924.append(_0x500014);
    return _0x500014;
  });
  const _0x57786c = o("div", "game-tutorial-content");
  _0x57786c.id = "game-tutorial-content";
  _0x57786c.setAttribute("role", "tabpanel");
  _0x57786c.setAttribute("aria-labelledby", _0x47e5e0[0].id);
  _0x57786c.tabIndex = 0;
  const _0xb0de78 = o("footer", "game-tutorial-footer");
  const _0x57ca84 = o("span", "game-tutorial-progress");
  const _0x556fe3 = o("div", "game-tutorial-navigation");
  const _0x417845 = o("button", "game-tutorial-nav");
  _0x417845.type = "button";
  _0x417845.setAttribute("aria-label", "上一章");
  _0x417845.append(T("ChevronLeft"));
  const _0x4e34fc = o("button", "game-tutorial-nav");
  _0x4e34fc.type = "button";
  _0x4e34fc.setAttribute("aria-label", "下一章");
  _0x4e34fc.append(T("ChevronRight"));
  const _0x3699b3 = o("button", "game-tutorial-enter");
  _0x3699b3.type = "button";
  _0x3699b3.append(T("Check"), o("span", "", "知道了"));
  _0x556fe3.append(_0x417845, _0x4e34fc, _0x3699b3);
  _0xb0de78.append(_0x57ca84, _0x556fe3);
  _0x3c16ca.append(_0x2dd611, _0x266924, _0x57786c, _0xb0de78);
  u1(_0x3c16ca);
  _0x275690.append(_0x3c16ca);
  let _0xc47275 = 0;
  let _0x54b1ef = _0x2adf84;
  function _0x32a51e(_0x2a4be9, _0x2cf9fd, _0x321eed, _0x3a6e46) {
    const _0x3525cc = o("div", "game-tutorial-intro");
    const _0x5577c6 = o("span");
    _0x5577c6.append(T(_0x2a4be9));
    const _0x183aad = o("div");
    _0x183aad.append(o("small", "", _0x2cf9fd), o("h3", "", _0x321eed), o("p", "", _0x3a6e46));
    _0x3525cc.append(_0x5577c6, _0x183aad);
    return _0x3525cc;
  }
  function _0x21f92a(_0x2bb190, _0x2b37cd = false) {
    _0xc47275 = Math.max(0, Math.min(_0x322f65.length - 1, _0x2bb190));
    const _0x4756ea = _0x322f65[_0xc47275];
    _0x47e5e0.forEach((_0x33e2bb, _0x5a68d9) => {
      const _0x592954 = _0x5a68d9 === _0xc47275;
      _0x33e2bb.classList.toggle("is-active", _0x592954);
      _0x33e2bb.setAttribute("aria-selected", _0x592954 ? "true" : "false");
      _0x33e2bb.tabIndex = _0x592954 ? 0 : -1;
    });
    _0x57786c.setAttribute("aria-labelledby", _0x47e5e0[_0xc47275].id);
    const _0xec7063 = _0x4756ea.id === "counters" ? function () {
      const _0x46bf5d = document.createDocumentFragment();
      _0x46bf5d.append(_0x32a51e("Swords", "核心克制", "先看敌军特征，再决定塔位投资", "每种防御塔都有明确职责。把正确的火力部署在对应路线，通常比单纯堆叠等级更有效。"));
      const _0x3bf5f2 = o("div", "game-counter-grid");
      Object.entries(gn).forEach(([_0x784788, _0x310c1c]) => {
        const _0x4f17cb = M1[_0x784788];
        const _0x5d8124 = o("article", "game-counter-card");
        const _0x12b5de = o("div", "game-counter-enemy");
        const _0x259ae8 = new Image();
        _0x259ae8.src = _0x4f17cb.asset;
        _0x259ae8.alt = _0x4f17cb.name;
        _0x12b5de.append(_0x259ae8, o("small", "", _0x310c1c.threat), o("strong", "", _0x4f17cb.name));
        const _0xea5424 = o("span", "game-counter-arrow");
        _0xea5424.append(T("ChevronsLeft"));
        const _0x53a214 = o("div", "game-counter-solution");
        const _0xf337e2 = o("div", "game-counter-towers");
        _0x310c1c.towers.forEach(_0x429fd5 => {
          const _0x7109ec = H1[_0x429fd5];
          const _0x3b9085 = o("span");
          const _0x118a8d = new Image();
          _0x118a8d.src = _0x7109ec.assets[0];
          _0x118a8d.alt = "";
          _0x3b9085.append(_0x118a8d, o("b", "", _0x7109ec.name));
          _0xf337e2.append(_0x3b9085);
        });
        _0x53a214.append(o("small", "", "推荐克制"), _0xf337e2, o("p", "", _0x310c1c.advice));
        _0x5d8124.append(_0x12b5de, _0xea5424, _0x53a214);
        _0x3bf5f2.append(_0x5d8124);
      });
      _0x46bf5d.append(_0x3bf5f2);
      return _0x46bf5d;
    }() : _0x4756ea.id === "elements" ? function () {
      const _0xef24e7 = document.createDocumentFragment();
      _0xef24e7.append(_0x32a51e("Sparkles", "组合增益", "用元素连携放大克制效果", "相邻塔种可以连续施加状态。观察敌军身上的状态标记，在关键路口组合部署。"));
      const _0x481587 = o("div", "game-element-hints");
      [["CloudRain", "潮湿 + 雷电", "风暴过载", "风暴伤害扩散并强化对重甲单位的压制。"], ["Flame", "火焰 + 潮湿", "蒸汽爆发", "造成额外范围伤害，适合处理密集敌群。"], ["Snowflake", "霜冻 + 火焰", "脆甲裂解", "降低物理护甲，让鲸炮与连弩更容易击穿厚甲。"], ["Stars", "星辉 + 时潮", "回响穿刺", "触发额外魔法伤害，补足连弩对高护甲目标的输出。"]].forEach(([_0x5b78ef, _0x3d205a, _0x4f2fd7, _0x1abf1b]) => {
        const _0x41cd11 = o("article", "game-element-hint");
        const _0x375d66 = o("span");
        _0x375d66.append(T(_0x5b78ef));
        const _0x2a7f6e = o("div");
        _0x2a7f6e.append(o("small", "", _0x3d205a), o("h4", "", _0x4f2fd7), o("p", "", _0x1abf1b));
        _0x41cd11.append(_0x375d66, _0x2a7f6e);
        _0x481587.append(_0x41cd11);
      });
      _0xef24e7.append(_0x481587);
      return _0xef24e7;
    }() : function () {
      const _0x47af9a = document.createDocumentFragment();
      _0x47af9a.append(_0x32a51e("Target", "最终战提示", "达贡的弱点必须按对应塔种击破", "不匹配的攻击只能造成少量弱点伤害。弱点破坏后，达贡才会进入下一阶段。"));
      const _0x59fd5d = o("article", "game-tutorial-boss game-counter-boss");
      const _0x2fbb8f = new Image();
      _0x2fbb8f.src = Qt;
      _0x2fbb8f.alt = "深渊机神达贡";
      const _0xc87756 = o("div");
      _0xc87756.append(o("small", "", "深渊机神"), o("h4", "", "达贡 · 三重弱点"));
      const _0xf5d2ce = o("div", "game-boss-counter-list");
      ot.forEach((_0x53c4c4, _0x19b108) => {
        const _0x425151 = o("div");
        _0x425151.append(o("b", "", String(_0x19b108 + 1).padStart(2, "0")), o("span", "", _0x53c4c4.name), o("strong", "", _0x53c4c4.counter));
        _0xf5d2ce.append(_0x425151);
      });
      _0xc87756.append(_0xf5d2ce);
      _0x59fd5d.append(_0x2fbb8f, _0xc87756);
      _0x47af9a.append(_0x59fd5d);
      return _0x47af9a;
    }();
    _0x57786c.replaceChildren(_0xec7063);
    _0x57786c.scrollTop = 0;
    _0x57ca84.textContent = String(_0xc47275 + 1).padStart(2, "0") + " / " + String(_0x322f65.length).padStart(2, "0") + " · " + _0x4756ea.label;
    _0x417845.disabled = _0xc47275 === 0;
    _0x4e34fc.disabled = _0xc47275 === _0x322f65.length - 1;
    _0x277dcd.createIcons();
    if (_0x2b37cd) {
      _0x47e5e0[_0xc47275].focus({
        preventScroll: true
      });
    }
  }
  function _0x5c2e99() {
    var _0x50e632;
    if (!_0x275690.hidden) {
      _0x275690.hidden = true;
      _0x236820.classList.remove("is-tutorial-open");
      if ((_0x50e632 = _0x54b1ef == null ? undefined : _0x54b1ef.focus) != null) {
        _0x50e632.call(_0x54b1ef, {
          preventScroll: true
        });
      }
    }
  }
  const _0x31ea47 = o("nav", "game-level-rail");
  _0x31ea47.setAttribute("aria-label", "关卡选择");
  Object.entries(y2).forEach(([_0xb99fd9, _0x39a398], _0x26206c) => {
    const _0x33b90e = _0x26206c <= _0x799dc4;
    const _0x2cdf12 = o("button", "game-level" + (_0xb99fd9 === F ? " is-current" : "") + (_0x33b90e ? " is-unlocked" : " is-locked"));
    _0x2cdf12.type = "button";
    _0x2cdf12.disabled = !_0x33b90e;
    _0x2cdf12.dataset.map = _0xb99fd9;
    _0x2cdf12.style.setProperty("--level-map", "url(\"" + F1[_0xb99fd9] + "\")");
    _0x2cdf12.setAttribute("aria-label", _0x33b90e ? "第 " + _0x39a398.number + " 关 " + _0x39a398.name : "第 " + _0x39a398.number + " 关 未解锁");
    J(_0x2cdf12, _0x33b90e ? _0x39a398.name : "关卡未解锁", _0x33b90e ? _0x39a398.description : "完成前置关卡后开放", _0x39a398.subtitle + " · " + _0x39a398.difficulty);
    const _0x249ed2 = o("span", "game-level-index", _0x39a398.number);
    const _0x1a07a7 = o("span", "game-level-copy");
    const _0x225d8f = _0x559169[_0xb99fd9];
    const _0x5e78bc = o("span", "game-level-stars");
    _0x5e78bc.setAttribute("aria-label", _0x225d8f ? _0x225d8f.stars + " 星成绩" : "尚未完成");
    for (let _0xb1b4f2 = 1; _0xb1b4f2 <= 3; _0xb1b4f2 += 1) {
      _0x5e78bc.append(o("i", _0xb1b4f2 <= ((_0x225d8f == null ? undefined : _0x225d8f.stars) || 0) ? "is-earned" : "", "★"));
    }
    _0x1a07a7.append(o("small", "", _0x33b90e ? _0x39a398.difficulty : "未解锁"), o("strong", "", _0x39a398.name), _0x5e78bc);
    const _0xa28791 = o("span", "game-level-state");
    _0xa28791.append(T(_0x33b90e ? _0xb99fd9 === F ? "MapPin" : "Check" : "LockKeyhole"));
    _0x2cdf12.append(_0x249ed2, _0x1a07a7, _0xa28791);
    _0x31ea47.append(_0x2cdf12);
  });
  _0x236820.append(_0x3d757f, _0x2b9f2e, _0x2d3b29, _0x3e3ac7, _0x31ea47, _0x275690);
  const _0x30c24c = o("div", "battle-shell");
  _0x30c24c.hidden = true;
  if (p1) {
    _0x30c24c.classList.add("route-reference-shell");
  }
  const _0x47ab3b = o("header", "battle-topbar");
  const _0x13f663 = o("div", "battle-identity");
  const _0x5c65ae = o("span", "battle-brand");
  _0x5c65ae.append(T("Waves"));
  const _0xdb2852 = o("div");
  _0xdb2852.append(o("small", "", "潮汐王冠 · " + S.subtitle), o("h1", "", S.name));
  _0x13f663.append(_0x5c65ae, _0xdb2852);
  const _0x4c55a9 = o("select", "map-select");
  _0x4c55a9.setAttribute("aria-label", "选择关卡地图");
  Object.entries(y2).forEach(([_0x55759f, _0x5ad780], _0x5152be) => {
    const _0x3752dc = o("option", "", _0x5ad780.number + " · " + _0x5ad780.name);
    _0x3752dc.value = _0x55759f;
    _0x3752dc.selected = _0x55759f === F;
    _0x3752dc.disabled = _0x5152be > _0x799dc4;
    _0x4c55a9.append(_0x3752dc);
  });
  _0x13f663.append(_0x4c55a9);
  const _0xd2d8b = o("div", "battle-stats");
  _0xd2d8b.append(kn("Flag", "进攻波次", "0 / " + _0x18e0e8.maxWaves, "battle-wave"), kn("Radar", "波次战术", "等待部署", "battle-wave-name"));
  const _0x316e72 = o("div", "battle-navigation");
  const _0x3d16c4 = o("a", "battle-icon-button battle-assets-link");
  _0x3d16c4.href = "./?view=assets";
  _0x3d16c4.title = "返回素材铸造台";
  _0x3d16c4.setAttribute("aria-label", "返回素材铸造台");
  _0x3d16c4.append(T("Images"));
  J(_0x3d16c4, "素材铸造台", "离开战场并返回素材管理页面");
  const _0x535d55 = o("button", "battle-icon-button battle-reset-button");
  _0x535d55.type = "button";
  _0x535d55.title = "重置关卡";
  _0x535d55.setAttribute("aria-label", "重置关卡");
  _0x535d55.append(T("RotateCcw"));
  J(_0x535d55, "重置关卡", "重新载入当前地图并清除本局进度");
  const _0x158fda = o("button", "battle-icon-button game-audio-button");
  _0x158fda.type = "button";
  const _0x4b9f40 = o("button", "battle-icon-button");
  _0x4b9f40.type = "button";
  _0x4b9f40.title = "暂停战斗";
  _0x4b9f40.setAttribute("aria-label", "暂停战斗");
  _0x4b9f40.append(T("Pause"));
  J(_0x4b9f40, "暂停战斗", "冻结敌军、投射物和波次计时");
  const _0x46790d = o("button", "battle-icon-button");
  _0x46790d.type = "button";
  _0x46790d.title = "战斗设置";
  _0x46790d.setAttribute("aria-label", "战斗设置");
  _0x46790d.append(T("Settings"));
  J(_0x46790d, "战斗设置", "调整音乐、音效和战场动态效果");
  const _0x967bf7 = o("button", "battle-icon-button battle-guide-toggle");
  _0x967bf7.type = "button";
  _0x967bf7.title = "战场情报";
  _0x967bf7.setAttribute("aria-label", "打开战场情报");
  _0x967bf7.setAttribute("aria-expanded", "false");
  _0x967bf7.append(T("PanelRightOpen"));
  J(_0x967bf7, "战场情报", "查看任务、敌情、防御塔与战场规则");
  _0x316e72.append(_0x158fda, _0x4b9f40, _0x46790d, _0x967bf7);
  _0x316e72.append(_0x535d55);
  _0x47ab3b.append(_0x13f663, _0xd2d8b, _0x316e72);
  const _0x470d70 = o("main", "battle-main");
  const _0x373b5d = o("section", "battle-stage");
  const _0x47bace = o("div", "battle-map-hud");
  _0x47bace.setAttribute("aria-label", "战场资源");
  const _0x1dc627 = o("div", "map-resource map-resource--gold");
  const _0x475818 = new Image();
  _0x475818.src = yn;
  _0x475818.alt = "";
  _0x1dc627.title = "潮晶金币";
  const _0x3c0a57 = o("span", "map-resource-copy");
  _0x3c0a57.append(o("small", "", "潮晶金币"), o("strong", "", String(_0x18e0e8.gold)));
  _0x3c0a57.querySelector("strong").id = "battle-gold";
  _0x1dc627.append(_0x475818, _0x3c0a57);
  const _0x266be0 = o("div", "map-resource map-resource--lives");
  const _0x378403 = o("span", "map-resource-icon");
  _0x378403.append(T("Heart"));
  _0x266be0.title = "王城耐久";
  const _0x5b584e = o("span", "map-resource-copy");
  _0x5b584e.append(o("small", "", "王城耐久"), o("strong", "", String(_0x18e0e8.lives)));
  _0x5b584e.querySelector("strong").id = "battle-lives";
  _0x266be0.append(_0x378403, _0x5b584e);
  _0x47bace.append(_0x1dc627, _0x266be0);
  const _0x12d858 = o("div", "battle-canvas-wrap");
  const _0x1b5fa8 = o("canvas", "battle-canvas");
  _0x1b5fa8.width = Z.width;
  _0x1b5fa8.height = Z.height;
  _0x1b5fa8.setAttribute("aria-label", S.name + "塔防战场");
  const _0x15c0c9 = o("div", "battle-hover-preview");
  _0x15c0c9.id = "battle-hover-preview";
  _0x15c0c9.hidden = true;
  _0x15c0c9.setAttribute("role", "tooltip");
  const _0x5b7f91 = o("small", "battle-hover-preview-kicker");
  const _0x1710f0 = o("strong", "battle-hover-preview-title");
  const _0x3228a7 = o("p", "battle-hover-preview-detail");
  const _0x4646f3 = o("span", "battle-hover-preview-meta");
  _0x15c0c9.append(_0x5b7f91, _0x1710f0, _0x3228a7, _0x4646f3);
  u1(_0x15c0c9);
  const _0x503e3c = _0x1b5fa8.getContext("2d");
  const _0xf60a1b = o("div", "battle-banner");
  _0xf60a1b.hidden = true;
  const _0x414dc6 = o("section", "boss-hud");
  _0x414dc6.hidden = true;
  _0x414dc6.setAttribute("aria-label", "达贡弱点状态");
  const _0x5f471c = o("div", "boss-hud-title");
  _0x5f471c.append(T("Skull"), o("span", "", "深渊机神 · 阶段 1"));
  const _0x16cf3d = o("div", "boss-weakpoint-list");
  ot.forEach((_0x58137d, _0x5d25d1) => {
    const _0x2988d0 = o("div", "boss-weakpoint");
    _0x2988d0.dataset.weakpoint = _0x58137d.id;
    _0x2988d0.style.setProperty("--weakpoint-color", _0x58137d.color);
    _0x2988d0.append(o("b", "", String(_0x5d25d1 + 1)), o("span", "", _0x58137d.name), o("small", "", _0x58137d.counter), o("i"));
    _0x16cf3d.append(_0x2988d0);
  });
  _0x414dc6.append(_0x5f471c, _0x16cf3d);
  u1(_0x414dc6);
  const _0xe42f49 = o("section", "branch-showcase-hud");
  _0xe42f49.hidden = K !== "towers";
  _0xe42f49.setAttribute("aria-label", "终极塔机制演示");
  [["月痕贯穿", "直线穿透 3 个目标"], ["幻影弩阵", "三台弩机同步齐射"], ["圣锚禁卫", "近战攻击持续破甲"], ["幻潮鱼叉", "命中拖回并减速"], ["磁潮涡流", "范围回拉敌军"], ["符文共鸣", "附近塔攻速 +35%"]].forEach(([_0x66c969, _0x472682], _0x2b278f) => {
    const _0x360483 = o("div", "branch-showcase-item");
    _0x360483.append(o("b", "", String(_0x2b278f + 1).padStart(2, "0")), o("span", "", _0x66c969), o("small", "", _0x472682));
    _0xe42f49.append(_0x360483);
  });
  const _0x5d03e6 = o("div", "wave-callout");
  _0x5d03e6.hidden = true;
  const _0x46b6cb = o("section", "map-event-callout");
  _0x46b6cb.hidden = true;
  _0x46b6cb.setAttribute("role", "status");
  _0x46b6cb.setAttribute("aria-live", "polite");
  const _0xe52578 = o("span", "map-event-callout-mark");
  _0xe52578.append(T(j.icon));
  const _0x5ca634 = o("span", "map-event-callout-copy");
  _0x46b6cb.append(_0xe52578, _0x5ca634);
  u1(_0x46b6cb);
  const _0x2545a2 = o("div", "build-menu");
  _0x2545a2.hidden = true;
  const _0x15da99 = o("div", "battle-result-backdrop");
  _0x15da99.hidden = true;
  const _0x5371f3 = o("section", "battle-result");
  _0x5371f3.hidden = true;
  _0x5371f3.setAttribute("role", "dialog");
  _0x5371f3.setAttribute("aria-modal", "true");
  _0x5371f3.setAttribute("aria-labelledby", "battle-result-title");
  const _0x2e3a66 = o("div", "battle-result-header");
  const _0x50d6e7 = o("span", "battle-result-mark");
  const _0x224b3b = o("div");
  const _0xc9f521 = o("strong", "", "防线守住");
  _0xc9f521.id = "battle-result-title";
  const _0x308a26 = o("small", "", S.name);
  _0x224b3b.append(_0xc9f521, _0x308a26);
  _0x2e3a66.append(_0x50d6e7, _0x224b3b);
  const _0x8feed4 = o("section", "battle-result-rating");
  const _0x17f37d = o("div", "battle-result-rating-heading");
  const _0x4f4873 = o("div", "battle-result-stars");
  for (let _0x4f7ddb = 0; _0x4f7ddb < 3; _0x4f7ddb += 1) {
    const _0x50a11f = o("span");
    _0x50a11f.style.setProperty("--star-index", String(_0x4f7ddb));
    _0x50a11f.append(T("Star"));
    _0x4f4873.append(_0x50a11f);
  }
  const _0x6591ad = o("div", "battle-result-rating-copy");
  const _0xd4d9b3 = o("strong", "", "本次 0 / 3 星");
  const _0x334af1 = o("small", "", "等待结算");
  _0x6591ad.append(_0xd4d9b3, _0x334af1);
  _0x17f37d.append(_0x4f4873, _0x6591ad);
  const _0x5415a7 = o("div", "battle-result-criteria");
  _0x8feed4.append(_0x17f37d, _0x5415a7);
  const _0x659481 = o("div", "battle-result-stats");
  const _0x5be2e9 = o("div", "battle-result-actions");
  const _0x580843 = o("button", "battle-result-button battle-result-button--secondary");
  _0x580843.type = "button";
  _0x580843.append(T("RotateCcw"), o("span", "", "重新挑战"));
  const _0x1324be = o("button", "battle-result-button battle-result-button--primary");
  _0x1324be.type = "button";
  _0x1324be.append(T("ArrowRight"), o("span", "", _0x204be4 < C1.length - 1 ? "进入下一关" : "返回关卡选择"));
  _0x5be2e9.append(_0x580843, _0x1324be);
  _0x5371f3.append(_0x2e3a66, _0x8feed4, _0x659481, _0x5be2e9);
  u1(_0x5371f3);
  const _0x43e7a8 = o("section", "castle-fall-sequence");
  _0x43e7a8.hidden = true;
  _0x43e7a8.setAttribute("aria-hidden", "true");
  const _0x54512a = o("div", "castle-fall-shade");
  const _0x561634 = o("div", "castle-fall-flash");
  const _0x1177e3 = o("div", "castle-fall-sprite");
  _0x1177e3.style.backgroundImage = "url(\"" + mn + "\")";
  const _0x8bfaac = o("div", "castle-fall-wave");
  const _0x4d302a = o("div", "castle-fall-debris");
  for (let _0x45748a = 0; _0x45748a < 18; _0x45748a += 1) {
    const _0x270d6f = o("i");
    _0x270d6f.style.setProperty("--debris-index", String(_0x45748a));
    _0x270d6f.style.setProperty("--debris-x", String(_0x45748a * 37 % 100));
    _0x270d6f.style.setProperty("--debris-delay", String(_0x45748a % 6 * 0.055) + "s");
    _0x270d6f.style.setProperty("--debris-w", String(4 + _0x45748a % 4 * 2) + "px");
    _0x270d6f.style.setProperty("--debris-h", String(7 + _0x45748a % 3 * 3) + "px");
    _0x4d302a.append(_0x270d6f);
  }
  const _0x1887e3 = o("div", "castle-fall-copy");
  _0x1887e3.append(o("small", "", "潮晶皇城 · 核心防线崩解"), o("strong", "", "皇城失守"), o("span", "", "海潮已越过最后一道闸门"));
  _0x43e7a8.append(_0x54512a, _0x561634, _0x1177e3, _0x8bfaac, _0x4d302a, _0x1887e3);
  const _0xa99cd8 = o("section", "battle-pause-overlay");
  _0xa99cd8.hidden = true;
  _0xa99cd8.setAttribute("aria-modal", "true");
  _0xa99cd8.setAttribute("role", "dialog");
  _0xa99cd8.setAttribute("aria-labelledby", "battle-pause-title");
  const _0x1cfa54 = o("div", "battle-pause-panel");
  const _0x277fdc = o("span", "battle-pause-mark");
  _0x277fdc.append(T("Pause"));
  const _0x19a32e = o("h2", "", "战斗已暂停");
  _0x19a32e.id = "battle-pause-title";
  const _0x376707 = o("p", "", S.name + "的潮汐与敌军已经冻结");
  const _0x3b7bbb = o("button", "battle-dialog-button battle-dialog-button--primary");
  _0x3b7bbb.type = "button";
  _0x3b7bbb.append(T("Play"), o("span", "", "继续战斗"));
  const _0x24daf3 = o("button", "battle-dialog-button battle-dialog-button--secondary");
  _0x24daf3.type = "button";
  _0x24daf3.append(T("Settings"), o("span", "", "打开设置"));
  const _0x304537 = o("div", "battle-pause-actions");
  _0x304537.append(_0x3b7bbb, _0x24daf3);
  _0x1cfa54.append(_0x277fdc, _0x19a32e, _0x376707, _0x304537);
  u1(_0x1cfa54);
  _0xa99cd8.append(_0x1cfa54);
  const _0x221236 = o("section", "battle-settings-overlay");
  _0x221236.hidden = true;
  _0x221236.setAttribute("aria-modal", "true");
  _0x221236.setAttribute("role", "dialog");
  _0x221236.setAttribute("aria-labelledby", "battle-settings-title");
  const _0x45d1e1 = o("div", "battle-settings-panel");
  const _0xae6144 = o("header", "battle-settings-header");
  const _0x59b354 = o("div");
  const _0x273fd3 = o("span");
  _0x273fd3.append(T("Settings"));
  const _0x42feb8 = o("div");
  const _0x5b4ace = o("h2", "", "战斗设置");
  _0x5b4ace.id = "battle-settings-title";
  _0x42feb8.append(_0x5b4ace, o("small", "", "声音与战场反馈"));
  _0x59b354.append(_0x273fd3, _0x42feb8);
  const _0xf11efe = o("button", "battle-settings-close");
  _0xf11efe.type = "button";
  _0xf11efe.title = "关闭设置";
  _0xf11efe.setAttribute("aria-label", "关闭设置");
  _0xf11efe.append(T("X"));
  _0xae6144.append(_0x59b354, _0xf11efe);
  const _0x714bd0 = o("div", "battle-settings-body");
  const _0x423007 = _0x5d4f79.getSettings();
  function _0xa984da(_0x21ba57, _0x39974a, _0x38f9fc, _0x4f751a, _0x447e0f) {
    const _0x5e2dc5 = o("label", "battle-setting-row");
    const _0x500968 = o("span", "battle-setting-icon");
    _0x500968.append(T(_0x21ba57));
    const _0x59fa5b = o("span", "battle-setting-copy");
    _0x59fa5b.append(o("strong", "", _0x39974a), o("small", "", _0x38f9fc));
    const _0x49cec0 = o("input", "battle-setting-range");
    _0x49cec0.type = "range";
    _0x49cec0.min = "0";
    _0x49cec0.max = "100";
    _0x49cec0.step = "1";
    _0x49cec0.value = String(Math.round(_0x4f751a * 100));
    _0x49cec0.dataset.setting = _0x447e0f;
    const _0x2d3492 = o("output", "", _0x49cec0.value + "%");
    _0x5e2dc5.append(_0x500968, _0x59fa5b, _0x49cec0, _0x2d3492);
    return _0x5e2dc5;
  }
  const _0x509312 = _0xa984da("Music2", "战场音乐", "地图主题与首领战音乐", _0x423007.musicVolume, "music");
  const _0x597162 = _0xa984da("AudioLines", "战斗音效", "攻击、敌人与系统反馈", _0x423007.sfxVolume, "sfx");
  const _0x1aac95 = o("div", "battle-setting-row");
  const _0x3e0d49 = o("span", "battle-setting-icon");
  _0x3e0d49.append(T("Sparkles"));
  const _0x5d9b74 = o("span", "battle-setting-copy");
  _0x5d9b74.append(o("strong", "", "特效强度"), o("small", "", "控制战场粒子与命中反馈密度"));
  const _0x42a2c2 = o("div", "battle-setting-segments");
  ["full", "reduced"].forEach(_0x583ac4 => {
    const _0x3b19b8 = o("button", _0x583ac4 === _0x18e0e8.effectsQuality ? "is-active" : "", _0x583ac4 === "full" ? "完整" : "精简");
    _0x3b19b8.type = "button";
    _0x3b19b8.dataset.effects = _0x583ac4;
    _0x42a2c2.append(_0x3b19b8);
  });
  _0x1aac95.append(_0x3e0d49, _0x5d9b74, _0x42a2c2);
  const _0x47ce57 = o("label", "battle-setting-row");
  const _0x13f3b3 = o("span", "battle-setting-icon");
  _0x13f3b3.append(T("Waves"));
  const _0x33b2ae = o("span", "battle-setting-copy");
  _0x33b2ae.append(o("strong", "", "减少动态效果"), o("small", "", "减弱界面转场、闪烁与漂浮动画"));
  const _0x38e5ba = o("input", "battle-setting-toggle");
  _0x38e5ba.type = "checkbox";
  _0x38e5ba.checked = _0x18e0e8.reducedMotion;
  _0x47ce57.append(_0x13f3b3, _0x33b2ae, _0x38e5ba);
  const _0x4fbfd1 = o("div", "battle-setting-master");
  const _0x4d7809 = o("button", "battle-dialog-button battle-dialog-button--secondary");
  _0x4d7809.type = "button";
  _0x4fbfd1.append(_0x4d7809);
  _0x714bd0.append(_0x509312, _0x597162, _0x1aac95, _0x47ce57, _0x4fbfd1);
  _0x45d1e1.append(_0xae6144, _0x714bd0);
  u1(_0x45d1e1);
  _0x221236.append(_0x45d1e1);
  _0x12d858.append(_0x1b5fa8, _0x47bace, _0x414dc6, _0xe42f49, _0x5d03e6, _0x46b6cb, _0xf60a1b, _0x2545a2, _0x43e7a8, _0x15da99, _0x5371f3, _0xa99cd8, _0x221236);
  const _0x2ccbdb = o("div", "battle-stage-footer");
  const _0x9e1a25 = o("div", "route-key");
  _0x9e1a25.append(o("span", "route-key-road", ""), o("small", "", "怪物路径 · 禁止建造"), o("span", "route-key-pad", ""), o("small", "", "工程基座 · 点击建塔"));
  const _0x65a001 = o("span", "tide-route-status");
  _0x65a001.append(T("GitBranch"), o("small", "", S.statusOpen));
  _0x9e1a25.append(_0x65a001);
  const _0x34cb4c = o("div", "battle-controls");
  const _0x3fbad3 = o("button", "speed-button");
  _0x3fbad3.type = "button";
  _0x3fbad3.append(T("Gauge"), o("span", "", "1×"));
  J(_0x3fbad3, "战斗速度", "在 1×、2× 与 3× 战斗速度之间切换", "当前速度 · 1×");
  const _0x5481ba = o("button", "wave-button");
  _0x5481ba.type = "button";
  _0x5481ba.append(T("Play"), o("span", "", "开始第 1 波"));
  J(_0x5481ba, "开始下一波", "派出下一批敌军；提前出兵可获得额外潮晶", "下一波 · 01");
  _0x34cb4c.append(_0x3fbad3, _0x5481ba);
  _0x2ccbdb.append(_0x9e1a25, _0x34cb4c);
  _0x373b5d.append(_0x12d858, _0x2ccbdb);
  const _0x2fb29a = o("aside", "battle-guide");
  const _0x5df731 = o("div", "guide-header");
  const _0x329e69 = o("div", "guide-heading");
  _0x329e69.append(o("span", "", "防线部署"), o("strong", "", S.number));
  const _0x14e0cc = o("button", "battle-guide-close");
  _0x14e0cc.type = "button";
  _0x14e0cc.title = "关闭战场情报";
  _0x14e0cc.setAttribute("aria-label", "关闭战场情报");
  _0x14e0cc.append(T("X"));
  _0x5df731.append(_0x329e69, _0x14e0cc);
  const _0x17e3ab = o("section", "mission-brief");
  _0x17e3ab.append(o("small", "", "当前任务"), o("h2", "", S.mission), o("p", "", S.description + " 工程基座紧邻道路关键点。"));
  const _0x172c80 = o("section", "wave-intel");
  const _0x4ee0b8 = o("div", "wave-intel-header");
  const _0x11c0e1 = o("span", "wave-intel-index", "01");
  _0x4ee0b8.append(o("h3", "", "下一波情报"), _0x11c0e1);
  const _0x4e142f = o("div", "wave-intel-title");
  const _0x5bcd28 = o("div", "wave-intel-reward");
  _0x172c80.append(_0x4ee0b8, _0x4e142f, _0x5bcd28);
  const _0x49cb86 = o("section", "tower-reference");
  _0x49cb86.append(o("h3", "", "可建造防御塔"));
  Object.entries(H1).forEach(([_0x28babb, _0x2c913f]) => {
    const _0x32fa7b = o("div", "tower-reference-row");
    const _0x2e7316 = o("span", "tower-reference-image");
    const _0x32ffe4 = new Image();
    _0x32ffe4.src = _0x2c913f.assets[0];
    _0x32ffe4.alt = "";
    _0x2e7316.append(_0x32ffe4);
    const _0x5867a0 = o("div");
    _0x5867a0.append(o("strong", "", _0x2c913f.name), o("small", "", _0x2c913f.description));
    const _0x1a1734 = o("b");
    _0x1a1734.append(T("Coins"), document.createTextNode(String(_0x2c913f.cost)));
    _0x32fa7b.append(_0x2e7316, _0x5867a0, _0x1a1734);
    _0x49cb86.append(_0x32fa7b);
  });
  const _0xb7f545 = o("section", "battle-tips");
  _0xb7f545.append(o("h3", "", "战场规则"));
  [["MousePointer2", "点击空基座选择并建造防御塔"], ["CircleOff", "道路、水域和已占用位置不可建造"], ["Swords", "兵营部署3名卫兵，在道路上各自拦截1名敌人"], ["ArrowUpCircle", "点击已建塔可升级，出售返还总投入的 70%"]].forEach(([_0x1ea1b2, _0x1c3af7]) => {
    const _0x3c8b53 = o("p");
    _0x3c8b53.append(T(_0x1ea1b2), document.createTextNode(_0x1c3af7));
    _0xb7f545.append(_0x3c8b53);
  });
  const _0x19528d = o("section", "enemy-intel");
  _0x19528d.append(o("h3", "", "特殊敌情"));
  Object.entries(L2).forEach(([_0x39a0a8, _0x47b49b]) => {
    const _0x5bc1c7 = o("div", "enemy-intel-row");
    _0x5bc1c7.style.setProperty("--intel-color", _0x47b49b.color);
    const _0x5bf117 = new Image();
    _0x5bf117.src = M1[_0x39a0a8].asset;
    _0x5bf117.alt = "";
    const _0x416426 = o("div");
    _0x416426.append(o("strong", "", M1[_0x39a0a8].name + " · " + _0x47b49b.name), o("small", "", _0x47b49b.detail));
    _0x5bc1c7.append(_0x5bf117, _0x416426);
    _0x19528d.append(_0x5bc1c7);
  });
  _0x2fb29a.append(_0x5df731, _0x17e3ab, _0x172c80, _0x19528d, _0x49cb86, _0xb7f545);
  const _0x34d543 = o("section", "enemy-briefing-overlay");
  _0x34d543.hidden = true;
  _0x34d543.setAttribute("role", "dialog");
  _0x34d543.setAttribute("aria-modal", "true");
  _0x34d543.setAttribute("aria-labelledby", "enemy-briefing-title");
  const _0x2e539b = o("div", "enemy-briefing-panel");
  const _0xcab3ae = o("header", "enemy-briefing-header");
  const _0x200be9 = o("span");
  _0x200be9.append(T("ScanEye"));
  const _0x4448a7 = o("div");
  _0x4448a7.append(o("small", "", S.number + " · " + S.name));
  const _0x207810 = o("h2", "", "本关新增敌情");
  _0x207810.id = "enemy-briefing-title";
  _0x4448a7.append(_0x207810);
  _0xcab3ae.append(_0x200be9, _0x4448a7);
  const _0xcc3ab2 = o("div", "enemy-briefing-body");
  const _0x102e68 = o("button", "enemy-briefing-action");
  _0x102e68.type = "button";
  _0x102e68.append(T("ShieldCheck"), o("span", "", "开始部署"));
  _0x2e539b.append(_0xcab3ae, _0xcc3ab2, _0x102e68);
  u1(_0x2e539b);
  _0x34d543.append(_0x2e539b);
  const _0x538c9e = o("section", "battle-coach-overlay");
  _0x538c9e.hidden = true;
  _0x538c9e.setAttribute("aria-live", "polite");
  const _0x29a94c = o("div", "battle-coach-spotlight");
  const _0x2361bb = o("div", "battle-coach-panel");
  const _0x4d6b19 = o("small", "battle-coach-progress");
  const _0x2ca11f = o("h2", "battle-coach-title");
  const _0x8c1401 = o("p", "battle-coach-detail");
  const _0x3da714 = o("strong", "battle-coach-instruction");
  const _0x182852 = o("button", "battle-coach-skip");
  function _0x125b3a(_0x316304, _0x44a456, _0x3e437f = null) {
    var _0x32db42;
    const _0x2bfce4 = _0x15c0c9.offsetWidth;
    const _0x5c2536 = _0x15c0c9.offsetHeight;
    const _0x37d849 = (_0x32db42 = _0x3e437f == null ? undefined : _0x3e437f.getBoundingClientRect) == null ? undefined : _0x32db42.call(_0x3e437f);
    const _0x35978a = _0x37d849 && _0x37d849.width && _0x37d849.height ? _0x37d849 : {
      left: _0x316304,
      right: _0x316304,
      top: _0x44a456,
      bottom: _0x44a456,
      width: 0,
      height: 0
    };
    const _0x249187 = [_0x37d849, ...[".battle-topbar", ".battle-stage-footer", ".battle-guide", ".build-menu:not([hidden])"].map(_0x3076d2 => document.querySelector(_0x3076d2)).filter(_0x575c9d => _0x575c9d && _0x575c9d.getClientRects().length).map(_0x28d1f2 => _0x28d1f2.getBoundingClientRect())].filter(Boolean);
    const _0x30629d = (_0x35411f, _0x1e7388, _0x58d66b) => Math.max(_0x1e7388, Math.min(_0x58d66b, _0x35411f));
    const _0x1c23a6 = [_0x35978a.right + 14, _0x35978a.left - _0x2bfce4 - 14, _0x35978a.left + _0x35978a.width / 2 - _0x2bfce4 / 2, _0x35978a.left, _0x35978a.right - _0x2bfce4, 10, window.innerWidth - _0x2bfce4 - 10, ..._0x249187.flatMap(_0x23761f => [_0x23761f.left - _0x2bfce4 - 14, _0x23761f.right + 14])];
    const _0x46739e = [_0x35978a.top + _0x35978a.height / 2 - _0x5c2536 / 2, _0x35978a.bottom + 14, _0x35978a.top - _0x5c2536 - 14, _0x35978a.top, _0x35978a.bottom - _0x5c2536, 10, window.innerHeight - _0x5c2536 - 10, ..._0x249187.flatMap(_0x175359 => [_0x175359.top - _0x5c2536 - 14, _0x175359.bottom + 14])];
    const _0x56ac9b = _0x1c23a6.flatMap(_0x53392a => _0x46739e.map(_0x11fd85 => ({
      left: _0x53392a,
      top: _0x11fd85
    })));
    const _0x15a64a = _0x35978a.left + _0x35978a.width / 2;
    const _0x14c122 = _0x35978a.top + _0x35978a.height / 2;
    const _0x4c6203 = _0x56ac9b.map((_0x423213, _0x47a7b7) => {
      const _0x3e5992 = _0x30629d(_0x423213.left, 10, window.innerWidth - _0x2bfce4 - 10);
      const _0xaf565b = _0x30629d(_0x423213.top, 10, window.innerHeight - _0x5c2536 - 10);
      const _0x52a273 = {
        left: _0x3e5992,
        top: _0xaf565b,
        right: _0x3e5992 + _0x2bfce4,
        bottom: _0xaf565b + _0x5c2536
      };
      const _0x1294b6 = _0x249187.reduce((_0x26cfbc, _0x4bf448) => _0x26cfbc + ((_0x5d4af5, _0x1b6fb3) => Math.max(0, Math.min(_0x5d4af5.right, _0x1b6fb3.right) - Math.max(_0x5d4af5.left, _0x1b6fb3.left)) * Math.max(0, Math.min(_0x5d4af5.bottom, _0x1b6fb3.bottom) - Math.max(_0x5d4af5.top, _0x1b6fb3.top)))(_0x52a273, _0x4bf448), 0);
      const _0x128b75 = Math.abs(_0x3e5992 - _0x423213.left) + Math.abs(_0xaf565b - _0x423213.top);
      return {
        left: _0x3e5992,
        top: _0xaf565b,
        score: _0x1294b6 * 1000 + (Math.abs(_0x3e5992 + _0x2bfce4 / 2 - _0x15a64a) + Math.abs(_0xaf565b + _0x5c2536 / 2 - _0x14c122)) + _0x128b75 * 2 + _0x47a7b7 / 1000
      };
    }).sort((_0x35a7b3, _0x1105c6) => _0x35a7b3.score - _0x1105c6.score)[0];
    _0x15c0c9.style.left = _0x4c6203.left + "px";
    _0x15c0c9.style.top = _0x4c6203.top + "px";
  }
  function _0x14f1e5({
    kicker: _0x1534cc = "操作预览",
    title: _0xc08004,
    detail: _0x176a56,
    meta: _0x2087e2 = ""
  }, _0x331cfe, _0x255d7b, _0x333e14 = null) {
    if (window.matchMedia("(max-width: 700px)").matches) {
      _0x5204b5();
    } else {
      _0x5b7f91.textContent = _0x1534cc;
      _0x1710f0.textContent = _0xc08004;
      _0x3228a7.textContent = _0x176a56;
      _0x4646f3.textContent = _0x2087e2;
      _0x4646f3.hidden = !_0x2087e2;
      _0x15c0c9.hidden = false;
      _0x125b3a(_0x331cfe, _0x255d7b, _0x333e14);
    }
  }
  function _0x5204b5() {
    _0x15c0c9.hidden = true;
  }
  _0x182852.type = "button";
  _0x182852.append(T("SkipForward"), o("span", "", "跳过基础引导"));
  _0x2361bb.append(_0x4d6b19, _0x2ca11f, _0x8c1401, _0x3da714, _0x182852);
  u1(_0x2361bb);
  _0x538c9e.append(_0x29a94c, _0x2361bb);
  _0x470d70.append(_0x373b5d, _0x2fb29a);
  _0x30c24c.append(_0x47ab3b, _0x470d70, _0x34d543, _0x538c9e);
  _0x16a42a.append(_0x236820, _0x30c24c, _0x15c0c9);
  _0x277dcd.createIcons();
  let _0x19d387 = -1;
  const _0x5d87f3 = Q.length > 1 ? 1 : 0;
  const _0x52be3a = [{
    title: "选择工程基座",
    detail: "防御塔只能部署在道路旁的圆形黄铜基座上。先点击高亮的基座打开建造菜单。",
    instruction: "点击高亮工程基座",
    shape: "circle"
  }, {
    title: "放置第一座防御塔",
    detail: "每种塔的价格和职责不同。选择任意一座当前可建造的防御塔完成部署。",
    instruction: "在高亮菜单中选择防御塔",
    shape: "menu"
  }, {
    title: "开始第一波进攻",
    detail: "防线准备完成。点击开始波次，敌军将沿道路向皇城推进。",
    instruction: "点击“开始第 1 波”",
    shape: "control"
  }];
  function _0x178c6f(_0x13d0c7) {
    if (_0x13d0c7 === "dagon") {
      const _0x3f8e9c = o("article", "enemy-briefing-card is-boss");
      const _0x3a43f3 = new Image();
      _0x3a43f3.src = Qt;
      _0x3a43f3.alt = "深渊机神达贡";
      const _0x724f40 = o("div");
      _0x724f40.append(o("small", "", "最终首领"), o("h3", "", "深渊机神 · 达贡"), o("p", "", "必须依次击破潮晶眼、失控锅炉与船锚关节，之后才能伤害核心。"));
      const _0x48c016 = o("div", "enemy-briefing-counters");
      ot.forEach(_0x35bcac => _0x48c016.append(o("span", "", _0x35bcac.name + " · " + _0x35bcac.counter)));
      _0x724f40.append(_0x48c016);
      _0x3f8e9c.append(_0x3a43f3, _0x724f40);
      return _0x3f8e9c;
    }
    const _0x5b655f = M1[_0x13d0c7];
    const _0x81e4cb = gn[_0x13d0c7];
    const _0xcd8d84 = o("article", "enemy-briefing-card");
    const _0x15e435 = new Image();
    _0x15e435.src = _0x5b655f.asset;
    _0x15e435.alt = _0x5b655f.name;
    const _0x12e81c = o("div");
    _0x12e81c.append(o("small", "", _0x81e4cb.threat), o("h3", "", _0x5b655f.name), o("p", "", _0x81e4cb.advice));
    const _0x20ea33 = o("div", "enemy-briefing-counters");
    _0x81e4cb.towers.forEach(_0x3ed799 => _0x20ea33.append(o("span", "", H1[_0x3ed799].name)));
    _0x12e81c.append(_0x20ea33);
    _0xcd8d84.append(_0x15e435, _0x12e81c);
    return _0xcd8d84;
  }
  function _0x518207() {
    if (_0x538c9e.hidden || _0x19d387 < 0) {
      return;
    }
    const _0x44fbbc = function (_0x6ff699) {
      if (_0x6ff699 === 0) {
        const _0x205e35 = _0x1b5fa8.getBoundingClientRect();
        const _0x480ea1 = Q[_0x5d87f3];
        const _0x5e4a88 = _0x205e35.width / Z.width;
        const _0x25e885 = _0x205e35.height / Z.height;
        const _0x2b3b34 = Math.max(25, Math.min(_0x5e4a88, _0x25e885) * 52);
        return {
          left: _0x205e35.left + _0x480ea1.x * _0x5e4a88 - _0x2b3b34,
          top: _0x205e35.top + _0x480ea1.y * _0x25e885 - _0x2b3b34,
          width: _0x2b3b34 * 2,
          height: _0x2b3b34 * 2
        };
      }
      const _0x3563c5 = (_0x6ff699 === 1 ? _0x2545a2 : _0x5481ba).getBoundingClientRect();
      const _0x42cf88 = _0x6ff699 === 1 ? 8 : 6;
      return {
        left: _0x3563c5.left - _0x42cf88,
        top: _0x3563c5.top - _0x42cf88,
        width: _0x3563c5.width + _0x42cf88 * 2,
        height: _0x3563c5.height + _0x42cf88 * 2
      };
    }(_0x19d387);
    _0x29a94c.style.left = Math.max(4, _0x44fbbc.left) + "px";
    _0x29a94c.style.top = Math.max(4, _0x44fbbc.top) + "px";
    _0x29a94c.style.width = Math.min(_0x44fbbc.width, window.innerWidth - 8) + "px";
    _0x29a94c.style.height = Math.min(_0x44fbbc.height, window.innerHeight - 8) + "px";
  }
  function _0x53a726(_0xbf8105) {
    if (F !== C1[0] || K || p1) {
      return;
    }
    _0x19d387 = Math.max(0, Math.min(_0x52be3a.length - 1, _0xbf8105));
    const _0x55fe35 = _0x52be3a[_0x19d387];
    _0x30c24c.classList.add("is-coach-active");
    _0x538c9e.hidden = false;
    _0x538c9e.className = "battle-coach-overlay is-step-" + _0x19d387;
    _0x29a94c.className = "battle-coach-spotlight is-" + _0x55fe35.shape;
    _0x4d6b19.textContent = "基础部署 · " + String(_0x19d387 + 1).padStart(2, "0") + " / " + String(_0x52be3a.length).padStart(2, "0");
    _0x2ca11f.textContent = _0x55fe35.title;
    _0x8c1401.textContent = _0x55fe35.detail;
    _0x3da714.textContent = _0x55fe35.instruction;
    requestAnimationFrame(_0x518207);
  }
  function _0x2c1cb5() {
    _0x19d387 = -1;
    _0x30c24c.classList.remove("is-coach-active");
    _0x538c9e.hidden = true;
    _0x538c9e.className = "battle-coach-overlay";
    _0x5481ba.focus({
      preventScroll: true
    });
  }
  function _0x5bd746() {
    _0x34d543.hidden = true;
    if (F === C1[0]) {
      _0x53a726(0);
    } else {
      _0x5481ba.focus({
        preventScroll: true
      });
    }
  }
  function _0x4c3ac6(_0x3ba671, _0x251cb4, _0x43c000) {
    _0x14f1e5({
      kicker: _0x3ba671.dataset.previewKicker || "操作预览",
      title: _0x3ba671.dataset.previewTitle,
      detail: _0x3ba671.dataset.previewDetail,
      meta: _0x3ba671.dataset.previewMeta || ""
    }, _0x251cb4, _0x43c000, _0x3ba671);
  }
  _0x16a42a.addEventListener("pointermove", _0x494768 => {
    var _0x35f61e;
    var _0x1dec50;
    if (_0x494768.pointerType === "touch" || _0x494768.target === _0x1b5fa8) {
      return;
    }
    const _0x133586 = (_0x1dec50 = (_0x35f61e = _0x494768.target).closest) == null ? undefined : _0x1dec50.call(_0x35f61e, "[data-preview-title]");
    if (_0x133586 && _0x16a42a.contains(_0x133586)) {
      _0x4c3ac6(_0x133586, _0x494768.clientX, _0x494768.clientY);
    } else {
      _0x5204b5();
    }
  });
  _0x16a42a.addEventListener("pointerleave", _0x5204b5);
  _0x16a42a.addEventListener("focusin", _0x139813 => {
    var _0x54b9d0;
    var _0x19c8d6;
    const _0x4e9223 = (_0x19c8d6 = (_0x54b9d0 = _0x139813.target).closest) == null ? undefined : _0x19c8d6.call(_0x54b9d0, "[data-preview-title]");
    if (!_0x4e9223) {
      return;
    }
    const _0x2c1703 = _0x4e9223.getBoundingClientRect();
    _0x4c3ac6(_0x4e9223, _0x2c1703.left + _0x2c1703.width / 2, _0x2c1703.bottom);
  });
  _0x16a42a.addEventListener("focusout", _0x5204b5);
  const _0xfafa8 = [_0x5835bc, _0x158fda];
  function _0x262916() {
    const _0x281061 = _0x5d4f79.isMuted();
    _0xfafa8.forEach(_0x5cafb9 => {
      const _0x23440e = _0x281061 ? "开启声音" : "关闭声音";
      _0x5cafb9.title = _0x23440e;
      _0x5cafb9.setAttribute("aria-label", _0x23440e);
      _0x5cafb9.dataset.audioState = _0x281061 ? "muted" : "playing";
      _0x5cafb9.dataset.musicState = _0x5d4f79.isMusicPlaying() ? "playing" : "paused";
      _0x5cafb9.replaceChildren(T(_0x281061 ? "VolumeX" : "Volume2"));
      if (_0x5cafb9 === _0x5835bc) {
        _0x5cafb9.append(o("span", "", _0x281061 ? "开启声音" : "游戏声音"));
      }
      J(_0x5cafb9, _0x23440e, _0x281061 ? "恢复背景音乐与战斗音效" : "将背景音乐与战斗音效全部静音");
    });
    _0x4d7809.replaceChildren(T(_0x281061 ? "VolumeX" : "Volume2"), o("span", "", _0x281061 ? "恢复全部声音" : "将全部声音静音"));
    _0x277dcd.createIcons();
  }
  function _0x190dad() {
    try {
      window.localStorage.setItem(Dn, JSON.stringify({
        effects: _0x18e0e8.effectsQuality,
        reducedMotion: _0x18e0e8.reducedMotion
      }));
    } catch {}
  }
  function _0x3cad0c(_0x6bed00) {
    if (_0x18e0e8.status === "ready" || !_0x6bed00) {
      if (_0x6bed00 !== _0x18e0e8.paused) {
        if (_0x6bed00) {
          _0x18e0e8.pausedAt = performance.now();
        } else if (_0x18e0e8.pausedAt) {
          _0x18e0e8.pausedDuration += performance.now() - _0x18e0e8.pausedAt;
          _0x18e0e8.pausedAt = 0;
        }
        _0x18e0e8.paused = _0x6bed00;
        _0x18e0e8.lastTime = performance.now();
        _0xa99cd8.hidden = !_0x6bed00 || !_0x221236.hidden;
        _0x4b9f40.classList.toggle("is-active", _0x6bed00);
        _0x4b9f40.title = _0x6bed00 ? "继续战斗" : "暂停战斗";
        _0x4b9f40.setAttribute("aria-label", _0x4b9f40.title);
        _0x4b9f40.replaceChildren(T(_0x6bed00 ? "Play" : "Pause"));
        J(_0x4b9f40, _0x6bed00 ? "继续战斗" : "暂停战斗", _0x6bed00 ? "恢复敌军、投射物和波次计时" : "冻结敌军、投射物和波次计时");
        if (_0x6bed00) {
          _0x4f6051();
          _0x4dd103(false);
        }
        _0x277dcd.createIcons();
        if (_0x6bed00 && _0x221236.hidden) {
          _0x3b7bbb.focus({
            preventScroll: true
          });
        }
      }
    }
  }
  function _0x2c5f2e() {
    _0x4dd103(false);
    _0x3cad0c(true);
    _0xa99cd8.hidden = true;
    _0x221236.hidden = false;
    _0xf11efe.focus({
      preventScroll: true
    });
  }
  function _0x5d1db4() {
    _0x221236.hidden = true;
    _0xa99cd8.hidden = !_0x18e0e8.paused;
    if (_0x18e0e8.paused) {
      _0x3b7bbb.focus({
        preventScroll: true
      });
    }
  }
  function _0x4dd103(_0x4e9c09) {
    _0x30c24c.classList.toggle("is-guide-open", _0x4e9c09);
    _0x967bf7.setAttribute("aria-expanded", String(_0x4e9c09));
    _0x967bf7.setAttribute("aria-label", _0x4e9c09 ? "关闭战场情报" : "打开战场情报");
    _0x967bf7.classList.toggle("is-active", _0x4e9c09);
  }
  _0xfafa8.forEach(_0x1bf179 => {
    _0x1bf179.addEventListener("click", async () => {
      await _0x5d4f79.toggleMuted();
      _0x262916();
    });
  });
  _0x262916();
  [_0x509312, _0x597162].forEach(_0x25fac1 => {
    const _0x1363f0 = _0x25fac1.querySelector("input");
    const _0x4ecd4c = _0x25fac1.querySelector("output");
    _0x1363f0.addEventListener("input", () => {
      const _0x4cb74b = Number(_0x1363f0.value) / 100;
      _0x4ecd4c.value = _0x1363f0.value + "%";
      _0x4ecd4c.textContent = _0x4ecd4c.value;
      if (_0x1363f0.dataset.setting === "music") {
        _0x5d4f79.setMusicVolume(_0x4cb74b);
      } else {
        _0x5d4f79.setSfxVolume(_0x4cb74b);
      }
    });
  });
  _0x42a2c2.addEventListener("click", _0x49b1b2 => {
    const _0x4c19d1 = _0x49b1b2.target.closest("button[data-effects]");
    if (_0x4c19d1) {
      _0x18e0e8.effectsQuality = _0x4c19d1.dataset.effects;
      _0x42a2c2.querySelectorAll("button").forEach(_0x5317c3 => _0x5317c3.classList.toggle("is-active", _0x5317c3 === _0x4c19d1));
      _0x190dad();
    }
  });
  _0x38e5ba.addEventListener("change", () => {
    _0x18e0e8.reducedMotion = _0x38e5ba.checked;
    _0x16a42a.classList.toggle("game-reduced-motion", _0x18e0e8.reducedMotion);
    _0x190dad();
  });
  _0x4d7809.addEventListener("click", async () => {
    await _0x5d4f79.toggleMuted();
    _0x262916();
  });
  const _0x1b1ed1 = _0x30c24c.querySelector("#battle-gold");
  const _0x14a3fa = _0x30c24c.querySelector("#battle-lives");
  const _0x5cb06c = _0x30c24c.querySelector("#battle-wave");
  const _0x4f1d44 = _0x30c24c.querySelector("#battle-wave-name");
  let _0x155980 = null;
  function _0x5a998f() {
    if (_0x2545a2.hidden) {
      _0x155980 = null;
    } else if (_0x155980 !== _0x18e0e8.gold) {
      _0x155980 = _0x18e0e8.gold;
      _0x2545a2.querySelectorAll("[data-purchase-cost]").forEach(_0x4c887d => {
        const _0x115499 = Number(_0x4c887d.dataset.purchaseCost);
        const _0x1dd377 = _0x18e0e8.gold < _0x115499;
        _0x4c887d.disabled = _0x1dd377;
        _0x4c887d.dataset.previewMeta = _0x115499 + " 潮晶 · " + (_0x1dd377 ? "资源不足" : _0x4c887d.dataset.purchaseReady);
      });
    }
  }
  function _0x352d1d() {
    if (!_0x18e0e8.waveActive || _0x18e0e8.spawnQueue.length || !_0x18e0e8.enemies.length || _0x18e0e8.wave >= _0x18e0e8.maxWaves) {
      return 0;
    } else {
      return Math.min(64, 8 + _0x18e0e8.enemies.length * 2 + (_0x18e0e8.wave + 1) * 2);
    }
  }
  function _0x395a8e() {
    var _0x466df0;
    _0x1b1ed1.textContent = String(_0x18e0e8.gold);
    _0x5a998f();
    _0x14a3fa.textContent = String(_0x18e0e8.lives);
    _0x5cb06c.textContent = _0x18e0e8.wave + " / " + _0x18e0e8.maxWaves;
    const _0x5e1264 = _0x18e0e8.wave > 0 ? (_0x466df0 = dt[F]) == null ? undefined : _0x466df0[_0x18e0e8.wave - 1] : null;
    _0x4f1d44.textContent = _0x5e1264 ? _0x5e1264.boss ? "首领攻势" : _0x5e1264.elite ? "精英攻势" : "常规攻势" : "等待部署";
    _0x3fbad3.querySelector("span").textContent = _0x18e0e8.speed + "×";
    J(_0x3fbad3, "战斗速度", "在 1×、2× 与 3× 战斗速度之间切换", "当前速度 · " + _0x18e0e8.speed + "×");
    const _0x486059 = Math.min(_0x18e0e8.wave + 1, _0x18e0e8.maxWaves);
    const _0x1ee780 = _0x352d1d();
    _0x5481ba.classList.toggle("is-early-ready", _0x1ee780 > 0);
    _0x5481ba.querySelector("span").textContent = _0x1ee780 > 0 ? "提前开始第 " + _0x486059 + " 波 · +" + _0x1ee780 : _0x18e0e8.waveActive ? "第 " + _0x18e0e8.wave + " 波进攻中" : _0x18e0e8.wave >= _0x18e0e8.maxWaves ? "全部波次完成" : "开始第 " + _0x486059 + " 波";
    _0x5481ba.disabled = _0x18e0e8.status !== "ready" || _0x18e0e8.wave >= _0x18e0e8.maxWaves || _0x18e0e8.waveActive && _0x1ee780 <= 0;
    J(_0x5481ba, _0x1ee780 > 0 ? "提前开始下一波" : _0x18e0e8.waveActive ? "当前波次进行中" : "开始下一波", _0x1ee780 > 0 ? "立即派出下一批敌军，并获得提前部署奖励" : "派出下一批敌军进入当前地图", _0x1ee780 > 0 ? "奖励 +" + _0x1ee780 + " 潮晶" : "下一波 · " + String(_0x486059).padStart(2, "0"));
    _0x65a001.classList.toggle("is-closed", _0x18e0e8.mechanicActive);
    _0x65a001.querySelector("small").textContent = _0x18e0e8.mapStateLabel;
    (function () {
      var _0xce48bc;
      const _0x2b426c = (_0xce48bc = dt[F]) == null ? undefined : _0xce48bc[_0x18e0e8.wave];
      if (!_0x2b426c) {
        _0x11c0e1.textContent = "--";
        _0x4e142f.replaceChildren(o("strong", "", "所有敌情已确认"), o("small", "", "守住剩余进攻即可完成关卡"));
        _0x5bcd28.hidden = true;
        return;
      }
      _0x11c0e1.textContent = String(_0x18e0e8.wave + 1).padStart(2, "0");
      _0x4e142f.replaceChildren(o("strong", "", "第 " + String(_0x18e0e8.wave + 1).padStart(2, "0") + " 波待命"), o("small", "", _0x2b426c.boss ? "首领攻势" : _0x2b426c.elite ? "精英攻势" : "常规攻势"));
      const _0x14a2e2 = _0x352d1d();
      _0x5bcd28.hidden = _0x14a2e2 <= 0;
      if (_0x14a2e2 > 0) {
        _0x5bcd28.replaceChildren(T("TimerReset"), o("span", "", "提前出兵奖励"), o("b", "", "+" + _0x14a2e2));
      }
    })();
    _0x54d21c();
  }
  function _0x54d21c() {
    const _0xce5189 = _0x18e0e8.enemies.find(_0x263dfd => _0x263dfd.isBoss && !_0x263dfd.dead);
    _0x414dc6.hidden = !_0xce5189;
    if (_0xce5189) {
      _0x5f471c.querySelector("span").textContent = "深渊机神 · 阶段 " + Math.min(4, _0xce5189.bossPhase);
      _0x16cf3d.querySelectorAll(".boss-weakpoint").forEach((_0x512335, _0x387e4b) => {
        const _0x402858 = _0xce5189.weakpoints[_0x387e4b];
        _0x512335.classList.toggle("is-active", _0x387e4b === _0xce5189.activeWeakpoint && !_0x402858.broken);
        _0x512335.classList.toggle("is-broken", _0x402858.broken);
        _0x512335.querySelector("i").style.setProperty("--weakpoint-progress", String(Math.max(0, _0x402858.health / _0x402858.maxHealth)));
      });
    }
  }
  function _0x492720(_0xea4d6d, _0x39d90d, _0x4240d9) {
    const _0x58d07f = _0x373b5d.getBoundingClientRect();
    const _0x24393a = _0x1b5fa8.getBoundingClientRect();
    const _0x3d0260 = _0x1dc627.getBoundingClientRect();
    const _0x2e9e12 = Math.max(0, Math.min(Z.width, _0xea4d6d));
    const _0x33616e = Math.max(0, Math.min(Z.height, _0x39d90d));
    const _0x327552 = _0x24393a.left - _0x58d07f.left + _0x2e9e12 / Z.width * _0x24393a.width;
    const _0x3d871d = _0x24393a.top - _0x58d07f.top + _0x33616e / Z.height * _0x24393a.height;
    const _0x160a93 = _0x3d0260.left - _0x58d07f.left + _0x3d0260.width / 2;
    const _0x5cf023 = _0x3d0260.top - _0x58d07f.top + _0x3d0260.height / 2;
    const _0x24d85f = o("div", "coin-flight");
    const _0x2a4822 = new Image();
    _0x2a4822.src = yn;
    _0x2a4822.alt = "";
    _0x24d85f.append(_0x2a4822, o("span", "", "+" + _0x4240d9));
    _0x24d85f.style.left = _0x327552 + "px";
    _0x24d85f.style.top = _0x3d871d + "px";
    _0x373b5d.append(_0x24d85f);
    _0x24d85f.animate([{
      transform: "translate(-50%, -50%) scale(.65)",
      opacity: 0
    }, {
      transform: "translate(-50%, -85%) scale(1.08)",
      opacity: 1,
      offset: 0.22
    }, {
      transform: "translate(calc(-50% + " + (_0x160a93 - _0x327552) + "px), calc(-50% + " + (_0x5cf023 - _0x3d871d) + "px)) scale(.7)",
      opacity: 1
    }], {
      duration: 680,
      easing: "cubic-bezier(.2,.72,.22,1)",
      fill: "forwards"
    }).finished.catch(() => {}).finally(() => {
      _0x24d85f.remove();
      _0x1dc627.classList.remove("is-receiving");
      _0x1dc627.offsetWidth;
      _0x1dc627.classList.add("is-receiving");
    });
  }
  function _0x16294f(_0x15359d) {
    const _0x1c0a91 = Math.floor(_0x15359d / 60);
    return String(_0x1c0a91).padStart(2, "0") + ":" + String(_0x15359d % 60).padStart(2, "0");
  }
  function _0x3a8789(_0x3d44f8, _0x328df3 = false, _0x51d458 = false) {
    if (_0x18e0e8.resultShown) {
      return;
    }
    _0x18e0e8.resultShown = true;
    const _0x124680 = _0x51d458 ? 268 : Math.max(1, Math.round((performance.now() - (_0x18e0e8.startedAt || performance.now()) - _0x18e0e8.pausedDuration) / 1000));
    const _0x5889d6 = oS(_0x3d44f8, _0x18e0e8.lives);
    const _0x2246a0 = _0x5889d6.stars;
    const _0x18566f = jt()[F] || null;
    const _0x43d18d = _0x3d44f8 && !K ? MS(F, {
      stars: _0x2246a0,
      lives: _0x18e0e8.lives,
      time: _0x124680
    }) : {
      stars: _0x2246a0
    };
    _0x5371f3.className = "battle-result " + (_0x3d44f8 ? "is-won" : "is-lost");
    u1(_0x5371f3);
    _0x50d6e7.replaceChildren(T(_0x3d44f8 ? "Crown" : "ShieldOff"));
    _0xc9f521.textContent = _0x3d44f8 ? "防线守住" : "皇城失守";
    _0x308a26.textContent = _0x3d44f8 ? _0x328df3 ? S.name + " · 新关卡已解锁" : S.name + " · 完成防守" : S.name + " · 坚守至第 " + _0x18e0e8.wave + " 波";
    _0x4f4873.setAttribute("aria-label", "本次获得 " + _0x2246a0 + " 星，共 3 星");
    _0x4f4873.querySelectorAll("span").forEach((_0x4ab3f8, _0x5cc604) => {
      _0x4ab3f8.classList.toggle("is-earned", _0x5cc604 < _0x2246a0);
      _0x4ab3f8.setAttribute("aria-hidden", "true");
    });
    _0xd4d9b3.textContent = "本次 " + _0x2246a0 + " / 3 星";
    _0x334af1.textContent = _0x5889d6.title + (_0x3d44f8 && _0x18566f && _0x2246a0 > (_0x18566f.stars || 0) ? " · 新纪录" : "");
    _0x5415a7.replaceChildren();
    _0x5889d6.rules.forEach((_0x3fc5a3, _0x10330b) => {
      const _0x303a29 = o("div", "battle-result-criterion " + (_0x3fc5a3.earned ? "is-earned" : "is-missed"));
      const _0x4e6aa1 = o("span", "battle-result-criterion-mark");
      _0x4e6aa1.append(T(_0x3fc5a3.earned ? "Check" : "LockKeyhole"));
      const _0x23287c = o("span", "battle-result-criterion-copy");
      _0x23287c.append(o("strong", "", _0x10330b + 1 + " 星 · " + _0x3fc5a3.label), o("small", "", _0x3fc5a3.detail));
      _0x303a29.append(_0x4e6aa1, _0x23287c);
      _0x5415a7.append(_0x303a29);
    });
    _0x659481.replaceChildren();
    [["Swords", "击退敌军", String(_0x18e0e8.kills)], ["Heart", "剩余耐久", String(Math.max(0, _0x18e0e8.lives))], ["Clock3", "防守用时", _0x16294f(_0x124680)], ["Coins", "战斗收益", String(_0x18e0e8.goldEarned)], ["TimerReset", "提前出兵", String(_0x18e0e8.earlyWaves)], ["Trophy", "最佳成绩", (_0x43d18d.stars || 0) + " 星"]].forEach(([_0x54deac, _0x310dee, _0x183eb9]) => {
      const _0x404340 = o("div", "battle-result-stat");
      _0x404340.append(T(_0x54deac), o("small", "", _0x310dee), o("strong", "", _0x183eb9));
      _0x659481.append(_0x404340);
    });
    _0xf60a1b.hidden = true;
    _0x15da99.hidden = false;
    _0x5371f3.hidden = false;
    requestAnimationFrame(() => {
      _0x15da99.classList.add("is-visible");
      _0x5371f3.classList.add("is-visible");
    });
    _0x277dcd.createIcons();
  }
  function _0x12f9ed(_0x3a75e9 = false) {
    if (_0x18e0e8.defeatSequenceStarted) {
      return;
    }
    _0x18e0e8.defeatSequenceStarted = true;
    _0x18e0e8.status = "lost";
    _0x4f6051();
    _0x5204b5();
    _0xf60a1b.hidden = true;
    _0x395a8e();
    _0x43e7a8.hidden = false;
    _0x12d858.classList.add("is-castle-falling");
    _0x5d4f79.play("defeat");
    requestAnimationFrame(() => _0x43e7a8.classList.add("is-active"));
    const _0x46850f = _0x18e0e8.reducedMotion ? 700 : 2400;
    window.setTimeout(() => {
      _0x43e7a8.classList.add("is-complete");
      _0x12d858.classList.remove("is-castle-falling");
      _0x3a8789(false, false, _0x3a75e9);
    }, _0x46850f);
  }
  function _0x4f6051() {
    _0x18e0e8.selectedPad = null;
    _0x18e0e8.rallyTower = null;
    _0x18e0e8.rallyPreview = null;
    _0x2545a2.hidden = true;
    _0x155980 = null;
  }
  function _0x43e7c9(_0x150b93) {
    const _0x330d37 = Math.max(160, Math.min(Z.width - 160, _0x150b93.x));
    _0x2545a2.style.left = _0x330d37 / Z.width * 100 + "%";
    _0x2545a2.style.top = _0x150b93.y / Z.height * 100 + "%";
    _0x2545a2.classList.toggle("is-below", _0x150b93.y < 220);
  }
  function _0xd47016(_0x24a391) {
    const _0x5860eb = Q[_0x24a391];
    if (_0x18e0e8.towers.some(_0x211675 => _0x211675.padIndex === _0x24a391) || _0x18e0e8.status !== "ready") {
      return;
    }
    _0x5204b5();
    _0x18e0e8.selectedPad = _0x24a391;
    _0x2545a2.className = "build-menu build-menu--build";
    _0x2545a2.replaceChildren();
    _0x43e7c9(_0x5860eb);
    const _0x17cfa2 = o("div", "build-options-grid");
    Object.entries(H1).forEach(([_0x1bf94f, _0x1a60dc]) => {
      const _0x3e2ad3 = o("button", "build-option");
      _0x3e2ad3.type = "button";
      _0x3e2ad3.disabled = _0x18e0e8.gold < _0x1a60dc.cost;
      _0x3e2ad3.dataset.tower = _0x1bf94f;
      _0x3e2ad3.dataset.purchaseCost = String(_0x1a60dc.cost);
      _0x3e2ad3.dataset.purchaseReady = "可以建造";
      _0x3e2ad3.title = _0x1a60dc.name + " · " + _0x1a60dc.cost + " 金币";
      J(_0x3e2ad3, _0x1a60dc.name, _0x1a60dc.description, _0x1a60dc.cost + " 潮晶" + (_0x18e0e8.gold < _0x1a60dc.cost ? " · 资源不足" : " · 可以建造"));
      const _0x3ae9a5 = new Image();
      _0x3ae9a5.src = _0x1a60dc.assets[0];
      _0x3ae9a5.alt = "";
      const _0x43c3c6 = o("span");
      _0x43c3c6.append(o("strong", "", _0x1a60dc.name));
      const _0x439c5c = o("b");
      _0x439c5c.append(T("Coins"), document.createTextNode(String(_0x1a60dc.cost)));
      _0x3e2ad3.append(_0x3ae9a5, _0x43c3c6, _0x439c5c);
      _0x3e2ad3.addEventListener("click", () => function (_0x2b1960) {
        const _0x22c3ad = H1[_0x2b1960];
        if (_0x18e0e8.selectedPad === null || _0x18e0e8.gold < _0x22c3ad.cost) {
          return;
        }
        _0x18e0e8.gold -= _0x22c3ad.cost;
        const _0x3373f8 = {
          type: _0x2b1960,
          padIndex: _0x18e0e8.selectedPad,
          invested: _0x22c3ad.cost,
          level: 1,
          cooldown: 0,
          aim: 0,
          shotCount: 0,
          targetMode: "first"
        };
        _0x18e0e8.towers.push(_0x3373f8);
        _0x5d4f79.play("build");
        if (_0x2b1960 === "barracks") {
          _0x28814e(_0x3373f8);
        }
        _0x4f6051();
        _0x395a8e();
        if (_0x19d387 === 1) {
          _0x53a726(2);
        }
      }(_0x1bf94f));
      _0x17cfa2.append(_0x3e2ad3);
    });
    _0x2545a2.append(_0x17cfa2);
    _0x2545a2.hidden = false;
    _0x155980 = null;
    _0x5a998f();
    _0x277dcd.createIcons();
    if (_0x19d387 === 0) {
      _0x53a726(1);
    }
  }
  function _0x1c1e2b(_0xac8fb8) {
    const _0x533724 = _0x18e0e8.towers.find(_0x20dcfb => _0x20dcfb.padIndex === _0xac8fb8);
    if (!_0x533724 || _0x18e0e8.status !== "ready") {
      return;
    }
    _0x5204b5();
    const _0xd92e58 = H1[_0x533724.type];
    const _0x216524 = U1(_0x533724.type, _0x533724.level, _0x533724.branch);
    const _0x3693ee = _0x533724.level === 3;
    const _0x3245e3 = _0x533724.level === 4;
    const _0x29b773 = _0x533724.level < 3 ? U1(_0x533724.type, _0x533724.level + 1) : null;
    const _0x19ff56 = _0x3245e3 ? 0 : _0xd92e58.upgradeCosts[_0x533724.level - 1];
    const _0x3765f4 = Math.floor(_0x533724.invested * 0.7);
    _0x18e0e8.selectedPad = _0xac8fb8;
    _0x2545a2.className = "build-menu build-menu--tower";
    _0x2545a2.replaceChildren();
    _0x43e7c9(Q[_0xac8fb8]);
    const _0x30612d = o("div", "build-menu-heading");
    _0x30612d.append(o("strong", "", fn(_0xd92e58, _0x533724)), o("small", "", _0x533724.level + " / 4 级"));
    const _0x4995b7 = o("div", "tower-menu-summary");
    const _0x5cc24c = new Image();
    _0x5cc24c.src = xn(_0xd92e58, _0x533724);
    _0x5cc24c.alt = "";
    const _0x27c1ee = o("div");
    if (_0x533724.type === "barracks") {
      _0x27c1ee.append(o("span", "", "卫兵 3 名 · 单名伤害 " + Math.round(_0x216524.damage) + (_0x29b773 ? " → " + Math.round(_0x29b773.damage) : _0x3245e3 ? " · 终极" : "")), o("span", "", "单名生命 " + _0x216524.health + (_0x29b773 ? " → " + _0x29b773.health : "")), o("span", "", _0x3693ee ? "选择一项终极分支" : "攻击间隔 " + _0x216524.cooldown.toFixed(2) + " 秒"));
    } else {
      _0x27c1ee.append(o("span", "", "伤害 " + Math.round(_0x216524.damage) + (_0x29b773 ? " → " + Math.round(_0x29b773.damage) : _0x3245e3 ? " · 终极" : "")), o("span", "", "射程 " + _0x216524.range + (_0x29b773 ? " → " + _0x29b773.range : "")), o("span", "", _0x3693ee ? "选择一项终极分支" : "间隔 " + _0x216524.cooldown.toFixed(2) + " 秒"));
    }
    _0x27c1ee.append(o("span", "tower-element-stat", bn(_0x533724)));
    _0x4995b7.append(_0x5cc24c, _0x27c1ee);
    const _0x3f44e3 = o("div", "tower-targeting");
    if (_0x533724.type !== "barracks") {
      _0x3f44e3.append(o("small", "", "目标优先级"));
      const _0x373bba = o("div", "tower-target-modes");
      Object.entries(bS).forEach(([_0x29f36a, _0x2f8a5c]) => {
        const _0x47ae22 = o("button", "tower-target-mode" + ((_0x533724.targetMode || "first") === _0x29f36a ? " is-active" : ""));
        _0x47ae22.type = "button";
        _0x47ae22.title = _0x2f8a5c.detail;
        J(_0x47ae22, _0x2f8a5c.label + "优先", _0x2f8a5c.detail, "目标选择策略");
        _0x47ae22.append(o("span", "", _0x2f8a5c.label));
        _0x47ae22.addEventListener("click", () => {
          _0x533724.targetMode = _0x29f36a;
          _0x5d4f79.play("tactic");
          _0x1c1e2b(_0x533724.padIndex);
        });
        _0x373bba.append(_0x47ae22);
      });
      _0x3f44e3.append(_0x373bba);
    }
    const _0x855cac = o("button", "tower-rally-action");
    if (_0x533724.type === "barracks") {
      _0x855cac.type = "button";
      _0x855cac.append(T("Flag"), o("span", "", "调整集结点"), o("small", "", "射程内道路"));
      J(_0x855cac, "调整集结点", "让三名卫兵移动到射程内指定道路位置", "兵营战术控制");
      _0x855cac.addEventListener("click", () => {
        _0x18e0e8.rallyTower = _0x533724;
        _0x18e0e8.rallyPreview = _0x533724.rally || Jt(Q[_0x533724.padIndex]);
        _0x18e0e8.selectedPad = _0x533724.padIndex;
        _0x2545a2.hidden = true;
        _0x5d4f79.play("rally");
      });
    }
    const _0x1d89cd = o("div", "tower-menu-actions");
    if (_0x3693ee) {
      const _0x2784ba = o("div", "tower-branch-grid");
      Object.entries(_0xd92e58.branches).forEach(([_0x2d1daa, _0x36e90b]) => {
        const _0x302745 = o("button", "tower-branch-choice");
        _0x302745.type = "button";
        _0x302745.disabled = _0x18e0e8.gold < _0x19ff56;
        _0x302745.dataset.purchaseCost = String(_0x19ff56);
        _0x302745.dataset.purchaseReady = "终极分支";
        _0x302745.title = _0x36e90b.name + " · " + _0x36e90b.description;
        J(_0x302745, _0x36e90b.name, _0x36e90b.description, _0x19ff56 + " 潮晶" + (_0x18e0e8.gold < _0x19ff56 ? " · 资源不足" : " · 终极分支"));
        const _0x1e4760 = new Image();
        _0x1e4760.src = _0x36e90b.asset;
        _0x1e4760.alt = "";
        _0x302745.append(_0x1e4760, o("span", "", _0x36e90b.name), o("small", "", _0x36e90b.description), o("b", "", String(_0x19ff56)));
        _0x302745.addEventListener("click", () => _0xfe685e(_0x533724, _0x2d1daa));
        _0x2784ba.append(_0x302745);
      });
      _0x2545a2.append(_0x30612d, _0x4995b7);
      if (_0x533724.type !== "barracks") {
        _0x2545a2.append(_0x3f44e3);
      } else {
        _0x2545a2.append(_0x855cac);
      }
      _0x2545a2.append(_0x2784ba);
    } else {
      const _0xba679e = o("button", "tower-action tower-action--upgrade");
      _0xba679e.type = "button";
      _0xba679e.disabled = _0x3245e3 || _0x18e0e8.gold < _0x19ff56;
      if (!_0x3245e3) {
        _0xba679e.dataset.purchaseCost = String(_0x19ff56);
        _0xba679e.dataset.purchaseReady = "可以升级";
      }
      _0xba679e.title = _0x3245e3 ? "已达到终极等级" : "升级至 " + (_0x533724.level + 1) + " 级";
      J(_0xba679e, _0x3245e3 ? "终极防御塔" : "升级防御塔", _0x3245e3 ? "该防御塔已经达到最高等级" : "提升伤害、射程或单位战斗属性", _0x3245e3 ? "MAX" : _0x19ff56 + " 潮晶" + (_0x18e0e8.gold < _0x19ff56 ? " · 资源不足" : ""));
      _0xba679e.append(T(_0x3245e3 ? "BadgeCheck" : "ArrowUp"), o("span", "", _0x3245e3 ? "终极" : "升级"), o("b", "", _0x3245e3 ? "MAX" : String(_0x19ff56)));
      if (!_0x3245e3) {
        _0xba679e.addEventListener("click", () => _0xfe685e(_0x533724));
      }
      _0x1d89cd.append(_0xba679e);
    }
    const _0x4b5642 = o("button", "sell-tower-button");
    _0x4b5642.type = "button";
    _0x4b5642.title = "出售并返还 " + _0x3765f4 + " 金币";
    J(_0x4b5642, "出售防御塔", "移除该防御塔并返还总投入的 70%", "返还 +" + _0x3765f4 + " 潮晶");
    _0x4b5642.append(T("Trash2"), o("span", "", "出售"), o("b", "", "+" + _0x3765f4));
    _0x4b5642.addEventListener("click", () => function (_0x54cb80) {
      const _0x4b619a = Math.floor(_0x54cb80.invested * 0.7);
      const _0x528234 = Q[_0x54cb80.padIndex];
      _0x18e0e8.gold += _0x4b619a;
      _0x5d4f79.play("coin");
      _0x492720(_0x528234.x, _0x528234.y - 28, _0x4b619a);
      if (_0x54cb80.type === "barracks") {
        if (_0x18e0e8.rallyTower === _0x54cb80) {
          _0x18e0e8.rallyTower = null;
        }
        _0x18e0e8.guards.filter(_0x5307f3 => _0x5307f3.tower === _0x54cb80).forEach(_0x33c6ae);
        _0x18e0e8.guards = _0x18e0e8.guards.filter(_0x34e12f => _0x34e12f.tower !== _0x54cb80);
      }
      _0x18e0e8.towers = _0x18e0e8.towers.filter(_0x53d11a => _0x53d11a !== _0x54cb80);
      _0x4f6051();
      _0x395a8e();
    }(_0x533724));
    _0x1d89cd.append(_0x4b5642);
    if (!_0x3693ee) {
      _0x2545a2.append(_0x30612d, _0x4995b7);
      if (_0x533724.type !== "barracks") {
        _0x2545a2.append(_0x3f44e3);
      } else {
        _0x2545a2.append(_0x855cac);
      }
    }
    _0x2545a2.append(_0x1d89cd);
    u1(_0x2545a2);
    _0x2545a2.hidden = false;
    _0x155980 = null;
    _0x5a998f();
    _0x277dcd.createIcons();
  }
  function _0xfe685e(_0x689fb3, _0x317bf9) {
    const _0x54ef2a = H1[_0x689fb3.type];
    if (_0x689fb3.level >= 4 || _0x689fb3.level === 3 && !_0x317bf9) {
      return;
    }
    const _0x13ebca = _0x54ef2a.upgradeCosts[_0x689fb3.level - 1];
    if (!(_0x18e0e8.gold < _0x13ebca)) {
      _0x18e0e8.gold -= _0x13ebca;
      _0x689fb3.invested += _0x13ebca;
      _0x689fb3.level += 1;
      if (_0x689fb3.level === 4) {
        _0x689fb3.branch = _0x317bf9;
      }
      _0x689fb3.cooldown = 0;
      _0x5d4f79.play("upgrade");
      if (_0x689fb3.type === "barracks") {
        (function (_0x1b7031) {
          const _0x9a602e = U1("barracks", _0x1b7031.level, _0x1b7031.branch);
          _0x18e0e8.guards.filter(_0x352354 => _0x352354.tower === _0x1b7031).forEach(_0x2edf7e => {
            _0x2edf7e.maxHealth;
            _0x2edf7e.health;
            _0x2edf7e.maxHealth = _0x9a602e.health;
            _0x2edf7e.health = _0x9a602e.health;
            _0x2edf7e.damage = _0x9a602e.damage;
            _0x2edf7e.attackInterval = _0x9a602e.cooldown;
          });
        })(_0x689fb3);
      }
      _0x395a8e();
      _0x1c1e2b(_0x689fb3.padIndex);
    }
  }
  function _0x28814e(_0x232ac9) {
    const _0x4283b8 = Q[_0x232ac9.padIndex];
    const _0x27ee2b = _0x232ac9.rally || Jt(_0x4283b8);
    const _0x4f2e8a = U1("barracks", _0x232ac9.level, _0x232ac9.branch);
    [-28, 0, 28].forEach((_0x3f7eb3, _0x14933a) => {
      const _0x12f8af = Math.max(20, Math.min(s1[_0x27ee2b.route].total - 60, _0x27ee2b.distance + _0x3f7eb3));
      _0x18e0e8.guards.push({
        tower: _0x232ac9,
        index: _0x14933a,
        route: _0x27ee2b.route,
        postDistance: _0x12f8af,
        x: _0x4283b8.x,
        y: _0x4283b8.y - 12,
        health: _0x4f2e8a.health,
        maxHealth: _0x4f2e8a.health,
        damage: _0x4f2e8a.damage,
        attackInterval: _0x4f2e8a.cooldown,
        attackCooldown: _0x14933a * 0.12,
        target: null,
        state: "deploying",
        respawn: 0,
        flash: 0,
        animationStartedAt: 0
      });
    });
  }
  function _0x33c6ae(_0x28bc40) {
    if (_0x28bc40.target && _0x28bc40.target.blockedBy === _0x28bc40) {
      _0x28bc40.target.blockedBy = null;
    }
    _0x28bc40.target = null;
  }
  function _0x3b2026(_0x59652c, _0x38c94) {
    const _0x57bc5d = Q[_0x38c94.padIndex];
    const _0x58b1d7 = U1("barracks", _0x38c94.level, _0x38c94.branch).range;
    let _0x25037d = null;
    S.routes.forEach(_0x3b5b7b => {
      const _0x2532d6 = s1[_0x3b5b7b];
      for (let _0x2808a5 = 28; _0x2808a5 <= _0x2532d6.total - 48; _0x2808a5 += 8) {
        const _0x480f95 = W(_0x2808a5, _0x3b5b7b);
        if (Math.hypot(_0x480f95.x - _0x57bc5d.x, _0x480f95.y - _0x57bc5d.y) > _0x58b1d7) {
          continue;
        }
        const _0x327a1e = Math.hypot(_0x480f95.x - _0x59652c.x, _0x480f95.y - _0x59652c.y);
        if (!_0x25037d || _0x327a1e < _0x25037d.separation) {
          _0x25037d = {
            route: _0x3b5b7b,
            distance: _0x2808a5,
            point: _0x480f95,
            separation: _0x327a1e
          };
        }
      }
    });
    if (_0x25037d && _0x25037d.separation <= 46) {
      return _0x25037d;
    } else {
      return null;
    }
  }
  function _0x180815(_0x41f379, _0x537efa = 520) {
    if (_0x41f379) {
      window.clearTimeout(_0x18e0e8.mapEventCalloutDelay);
      window.clearTimeout(_0x18e0e8.mapEventCalloutTimer);
      _0x18e0e8.mapEventCalloutDelay = window.setTimeout(() => {
        _0x46b6cb.className = "map-event-callout is-" + (_0x41f379.tone || "neutral");
        u1(_0x46b6cb);
        _0x5ca634.replaceChildren(o("small", "", "地图事件 · " + S.name), o("strong", "", _0x41f379.title), o("span", "", _0x41f379.detail));
        _0x46b6cb.hidden = false;
        _0x1b5fa8.dataset.mapEvent = _0x41f379.title;
        requestAnimationFrame(() => _0x46b6cb.classList.add("is-visible"));
        if (K !== "events") {
          _0x18e0e8.mapEventCalloutTimer = window.setTimeout(() => {
            _0x46b6cb.classList.remove("is-visible");
            window.setTimeout(() => {
              _0x46b6cb.hidden = true;
            }, 240);
          }, 3000);
        }
      }, _0x537efa);
    }
  }
  function _0x196f1a(_0x2dab69 = 0) {
    const _0x23ef19 = "map-event-" + S.mechanic;
    if (_0x2dab69 <= 0) {
      _0x5d4f79.play(_0x23ef19);
    } else {
      window.setTimeout(() => {
        if (_0x18e0e8.status === "ready") {
          _0x5d4f79.play(_0x23ef19);
        }
      }, _0x2dab69);
    }
  }
  function _0x29d416() {
    var _0x3bd9b6;
    const _0x526c6b = _0x352d1d();
    if (_0x18e0e8.wave >= _0x18e0e8.maxWaves || _0x18e0e8.status !== "ready" || _0x18e0e8.waveActive && _0x526c6b <= 0) {
      return;
    }
    if (_0x526c6b > 0) {
      _0x18e0e8.gold += _0x526c6b;
      _0x18e0e8.goldEarned += _0x526c6b;
      _0x18e0e8.earlyWaves += 1;
      _0x5d4f79.play("early-wave");
      _0x492720(Z.width * 0.52, 72, _0x526c6b);
      _0x18e0e8.effects.push({
        type: "early-wave",
        x: Z.width * 0.52,
        y: 88,
        life: 0.85,
        maxLife: 0.85,
        color: "#f2c263",
        label: "抢先部署 +" + _0x526c6b
      });
    }
    _0x18e0e8.wave += 1;
    _0x18e0e8.startedAt ||= performance.now();
    const _0x16d623 = (_0x3bd9b6 = dt[F]) == null ? undefined : _0x3bd9b6[_0x18e0e8.wave - 1];
    if (!_0x16d623) {
      _0x18e0e8.wave -= 1;
      return;
    }
    _0x5d4f79.play(_0x16d623.boss ? "boss-prelude" : _0x16d623.elite ? "elite-wave" : "wave");
    (function (_0x5ad4fd, _0x5aa0c2 = 0) {
      window.clearTimeout(_0x18e0e8.waveCalloutTimer);
      _0x5d03e6.className = "wave-callout" + (_0x5ad4fd.boss ? " is-boss" : _0x5ad4fd.elite ? " is-elite" : "");
      _0x5d03e6.replaceChildren(o("small", "", _0x5ad4fd.boss ? "首领攻势" : _0x5ad4fd.elite ? "精英攻势" : "潮汐攻势"), o("strong", "", "第 " + String(_0x18e0e8.wave).padStart(2, "0") + " 波"), o("span", "", _0x5aa0c2 > 0 ? "提前出兵奖励 +" + _0x5aa0c2 : _0x5ad4fd.boss ? "三处弱点即将依次暴露" : _0x5ad4fd.elite ? "提高警戒" : "防线进入交战状态"));
      u1(_0x5d03e6);
      _0x5d03e6.hidden = false;
      requestAnimationFrame(() => _0x5d03e6.classList.add("is-visible"));
      _0x18e0e8.waveCalloutTimer = window.setTimeout(() => {
        _0x5d03e6.classList.remove("is-visible");
        window.setTimeout(() => {
          _0x5d03e6.hidden = true;
        }, 260);
      }, _0x5ad4fd.boss ? 3200 : 2100);
    })(_0x16d623, _0x526c6b);
    const _0x479fbe = nS(S.mechanic, _0x18e0e8.wave, _0x169792, {
      forceRandom: K === "events"
    });
    _0x18e0e8.mechanicActive = _0x479fbe.mechanicActive;
    if (_0x479fbe.mechanicTimer !== null) {
      _0x18e0e8.mechanicTimer = _0x479fbe.mechanicTimer;
    }
    _0x18e0e8.routeSpeedModifiers = _0x479fbe.routeSpeedModifiers;
    _0x18e0e8.mapStateLabel = _0x479fbe.label;
    _0x180815(_0x479fbe.announcement);
    if (_0x479fbe.playCue) {
      _0x196f1a(520);
    }
    if (S.mechanic === "storm") {
      _0x18e0e8.stormTimer = 4 + _0x169792() * 3;
    }
    const _0x283286 = _0x18e0e8.mechanicActive && S.activeRoutes ? S.activeRoutes : S.routes;
    if (_0x16d623.boss) {
      _0x18e0e8.spawnQueue = [{
        delay: 0,
        type: "dagon",
        name: "深渊机神·达贡",
        health: Math.round(18810),
        armor: 0.45,
        magicResist: 0.3,
        speed: S.speedMultiplier * 18,
        reward: 0,
        coreDamage: 20,
        attack: S.attackMultiplier * 85,
        attackInterval: 1.4,
        route: "left",
        isBoss: true
      }];
    } else {
      _0x18e0e8.spawnQueue = _0x16d623.units.map((_0x32e44b, _0x4c8aad) => {
        const _0x529d69 = M1[_0x32e44b];
        let _0x520779 = _0x283286[_0x4c8aad % _0x283286.length];
        if (S.mechanic === "storm") {
          _0x520779 = _0x32e44b === "jet" ? "airlane" : _0x32e44b === "ghost" ? "cloudloop" : "spiral";
        }
        if (S.mechanic === "crystal") {
          _0x520779 = ["beast", "navigator", "crab"].includes(_0x32e44b) ? "elite" : ["ghost", "jet"].includes(_0x32e44b) ? "boneTunnel" : "main";
        }
        if (S.mechanic === "boiler" && ["jet", "navigator", "ghost"].includes(_0x32e44b)) {
          _0x520779 = "pressure";
        }
        return {
          delay: _0x4c8aad === 0 ? 0 : _0x16d623.interval,
          type: _0x32e44b,
          name: _0x529d69.name,
          health: Math.round(_0x529d69.health * S.healthMultiplier),
          armor: _0x529d69.armor,
          magicResist: _0x529d69.magicResist,
          speed: _0x529d69.speed * S.speedMultiplier,
          reward: Math.max(1, Math.round(_0x529d69.reward * S.goldMultiplier)),
          coreDamage: _0x529d69.coreDamage,
          attack: _0x529d69.attack * S.attackMultiplier,
          attackInterval: _0x529d69.attackInterval,
          route: _0x520779
        };
      });
    }
    _0x18e0e8.spawnTimer = 0;
    _0x18e0e8.waveActive = true;
    _0x395a8e();
  }
  function _0x1a86be(_0x4ccc24) {
    if (_0x4ccc24.isBoss) {
      _0x5d4f79.play("dagon-entry");
    }
    const _0x3880ad = VS(_0x4ccc24.route);
    const _0x4216b8 = (_0x3880ad == null ? undefined : _0x3880ad.distances[_0x4ccc24.route]) || 0;
    const _0x54f2ea = Math.max(0, _0x4216b8 - 24);
    _0x18e0e8.enemies.push({
      type: _0x4ccc24.type,
      name: _0x4ccc24.name,
      distance: _0x54f2ea,
      spawnSiteId: (_0x3880ad == null ? undefined : _0x3880ad.id) || null,
      spawnGateDistance: _0x4216b8,
      spawnedAt: performance.now() / 1000,
      health: _0x4ccc24.health,
      maxHealth: _0x4ccc24.health,
      armor: _0x4ccc24.armor || 0,
      magicResist: _0x4ccc24.magicResist || 0,
      speed: _0x4ccc24.speed,
      reward: _0x4ccc24.reward,
      coreDamage: _0x4ccc24.coreDamage,
      attack: _0x4ccc24.attack,
      attackInterval: _0x4ccc24.attackInterval,
      attackCooldown: 0,
      animationStartedAt: 0,
      route: _0x4ccc24.route,
      blockedBy: null,
      isBoss: !!_0x4ccc24.isBoss,
      bossPhase: _0x4ccc24.isBoss ? 1 : 0,
      activeWeakpoint: _0x4ccc24.isBoss ? 0 : -1,
      weakpoints: _0x4ccc24.isBoss ? ot.map(_0x4c15a3 => ({
        ..._0x4c15a3,
        health: _0x4ccc24.health * 0.19,
        maxHealth: _0x4ccc24.health * 0.19,
        broken: false
      })) : [],
      bossAbilityCooldown: _0x4ccc24.isBoss ? 4.5 : 0,
      bossHasteUntil: 0,
      nextStepDistance: _0x4ccc24.isBoss ? _0x54f2ea + 42 : 0,
      healCooldown: _0x4ccc24.type === "priest" ? 2.8 : 0,
      healFlash: 0,
      abilityFlash: 0,
      shielded: _0x4ccc24.type === "navigator",
      shieldBroken: _0x4ccc24.type !== "navigator",
      immunityFeedbackAt: 0,
      slowUntil: 0,
      slowAmount: 0,
      freezeUntil: 0,
      fireStacks: 0,
      fireUntil: 0,
      fireDps: 0,
      fireTick: 0,
      frostStacks: 0,
      frostUntil: 0,
      conductiveStacks: 0,
      conductiveUntil: 0,
      wetUntil: 0,
      timeUntil: 0,
      armorBreakUntil: 0,
      lastFireCombo: "",
      comboCooldowns: {},
      flash: 0,
      dead: false
    });
  }
  function _0x529794(_0x108ed1, _0x10a016, _0xa6ba54, _0x2ef2b0, _0x3066d4 = "true", _0x1766ee = 0, _0x49bc57 = "environment") {
    if (_0x108ed1.dead || _0x10a016 <= 0) {
      return 0;
    }
    let _0x46e7c2 = 0;
    if (_0x3066d4 === "physical") {
      _0x46e7c2 = Math.max(0, _0x108ed1.armor - (_0xa6ba54 < _0x108ed1.armorBreakUntil ? r1.frostFire.armorReduction : 0));
    } else if (_0x3066d4 === "magic") {
      _0x46e7c2 = _0x108ed1.magicResist * (1 - _0x1766ee);
    }
    let _0x30662c = _0x10a016 * (1 - Math.max(0, Math.min(0.9, _0x46e7c2)));
    const _0x5a9dec = _0x108ed1.type === "navigator" && _0x108ed1.shielded;
    const _0x1beaae = _0x108ed1.type === "ghost" && _0x49bc57 !== "storm";
    if (_0x5a9dec) {
      _0x30662c *= 0.18;
    }
    if (_0x1beaae) {
      _0x30662c *= 0.28;
    }
    _0x30662c = function (_0x633958, _0x19768d, _0x16e919, _0xdb4984) {
      if (!_0x633958.isBoss || _0x633958.activeWeakpoint < 0) {
        return _0x19768d;
      }
      const _0x133c5d = _0x633958.weakpoints[_0x633958.activeWeakpoint];
      if (!_0x133c5d || _0x133c5d.broken) {
        return _0x19768d;
      }
      const _0x235621 = _0x133c5d.sources.includes(_0xdb4984);
      const _0x512320 = _0x19768d * (_0x235621 ? 1.3 : 0.34);
      _0x133c5d.health = Math.max(0, _0x133c5d.health - _0x512320);
      if (!_0x235621 && _0x16e919 >= _0x633958.immunityFeedbackAt) {
        _0x633958.immunityFeedbackAt = _0x16e919 + 1.2;
        _0x2c9bda(_0x633958, {
          name: _0x133c5d.counter + " 更有效",
          color: _0x133c5d.color
        }, 0);
      }
      if (_0x133c5d.health <= 0) {
        _0x133c5d.broken = true;
        const _0x5039ef = W(_0x633958.distance, _0x633958.route);
        _0x18e0e8.effects.push({
          type: "weakpoint-break",
          x: _0x5039ef.x,
          y: _0x5039ef.y - 38,
          life: 1.05,
          maxLife: 1.05,
          color: _0x133c5d.color,
          label: _0x133c5d.name + " 已破坏"
        });
        _0x5d4f79.play("weakpoint-break");
        _0x633958.activeWeakpoint += 1;
        _0x633958.bossPhase = Math.min(4, _0x633958.activeWeakpoint + 1);
        _0x633958.bossAbilityCooldown = 2.5;
        _0x18e0e8.mapStateLabel = _0x633958.activeWeakpoint < _0x633958.weakpoints.length ? "达贡阶段 " + _0x633958.bossPhase + " · " + _0x633958.weakpoints[_0x633958.activeWeakpoint].name + " 暴露" : "达贡终末阶段 · 全弱点崩解";
        _0x54d21c();
      }
      return _0x512320;
    }(_0x108ed1, _0x30662c, _0xa6ba54, _0x49bc57);
    if (_0x3066d4 !== "true") {
      _0x5d4f79.play("hit");
    }
    const _0x5e2880 = _0x108ed1.isBoss && _0x108ed1.activeWeakpoint >= 0 && _0x108ed1.activeWeakpoint < 3 ? _0x108ed1.maxHealth * [0.72, 0.46, 0.2][_0x108ed1.activeWeakpoint] : 0;
    const _0x16d21a = _0x5a9dec || _0x1beaae ? 1 : _0x5e2880;
    _0x108ed1.health = Math.max(_0x16d21a, _0x108ed1.health - _0x30662c);
    _0x108ed1.flash = 0.1;
    if ((_0x5a9dec || _0x1beaae) && _0xa6ba54 >= _0x108ed1.immunityFeedbackAt) {
      _0x108ed1.immunityFeedbackAt = _0xa6ba54 + 1.1;
      _0x108ed1.abilityFlash = 0.5;
      _0x5d4f79.play(_0x5a9dec ? "shield" : "phase");
      _0x2c9bda(_0x108ed1, _0x5a9dec ? {
        name: "锚链护盾",
        color: L2.navigator.color
      } : {
        name: "虚相免疫",
        color: L2.ghost.color
      }, 0);
    }
    if (_0x2ef2b0) {
      _0x108ed1.slowUntil = Math.max(_0x108ed1.slowUntil, _0xa6ba54 + 1.2);
      _0x108ed1.slowAmount = Math.max(_0x108ed1.slowAmount, _0x2ef2b0);
    }
    if (_0x108ed1.health <= 0) {
      _0x108ed1.dead = true;
      _0x18e0e8.defeatedUnits.push({
        type: _0x108ed1.type,
        route: _0x108ed1.route,
        distance: _0x108ed1.distance,
        isBoss: _0x108ed1.isBoss,
        startedAt: performance.now(),
        life: _0x108ed1.isBoss ? 0.92 : 0.72
      });
      _0x18e0e8.kills += 1;
      _0x5d4f79.play(_0x108ed1.isBoss ? "boss-down" : "enemy-down");
      _0x18e0e8.gold += _0x108ed1.reward;
      _0x18e0e8.goldEarned += _0x108ed1.reward;
      const _0x4bddd9 = W(_0x108ed1.distance, _0x108ed1.route);
      _0x492720(_0x4bddd9.x, _0x4bddd9.y - 24, _0x108ed1.reward);
      _0x18e0e8.effects.push({
        type: "death-burst",
        x: _0x4bddd9.x,
        y: _0x4bddd9.y,
        life: _0x108ed1.isBoss ? 1.4 : 0.55,
        maxLife: _0x108ed1.isBoss ? 1.4 : 0.55,
        color: _0x108ed1.isBoss ? "#e79aa5" : "#8ce3db"
      });
    }
    return _0x30662c;
  }
  function _0x3af1d0(_0x53ab2a, _0xc2ee34, _0x49bc6b) {
    return !((_0x53ab2a.comboCooldowns[_0xc2ee34] || 0) > _0x49bc6b) && (_0x53ab2a.comboCooldowns[_0xc2ee34] = _0x49bc6b + r1.cooldown, true);
  }
  function _0x2c9bda(_0x5b8c4a, _0x3c4d9f, _0x4abdd4) {
    const _0xd9e1c0 = W(_0x5b8c4a.distance, _0x5b8c4a.route);
    _0x18e0e8.effects.push({
      x: _0xd9e1c0.x,
      y: _0xd9e1c0.y,
      life: 0.72,
      color: _0x3c4d9f.color,
      label: _0x3c4d9f.name + (_0x4abdd4 ? " " + Math.round(_0x4abdd4) : "")
    });
  }
  function _0x2ebfbb(_0x460989, _0x4f9b2d, _0x340028, _0x169f9d) {
    const _0xd44ec2 = r1[_0x4f9b2d];
    const _0x3d2bf4 = _0x340028 * function (_0x418a7b, _0x30e08b) {
      let _0x76804f = _0x418a7b.isBoss ? 0.75 : 1;
      if (_0x418a7b.type === "navigator" && _0x418a7b.blockedBy) {
        _0x76804f *= 1.15;
      }
      if (_0x30e08b === "wetLightning" && _0x418a7b.type === "ghost") {
        _0x76804f *= 1.25;
      }
      if (_0x30e08b === "frostFire" && (_0x418a7b.type === "beast" || _0x418a7b.isBoss)) {
        _0x76804f *= 0.75;
      }
      return _0x76804f;
    }(_0x460989, _0x4f9b2d);
    const _0x1a4574 = _0x529794(_0x460989, _0x3d2bf4, _0x169f9d, 0, "magic", 0, _0x4f9b2d === "wetLightning" ? "storm" : _0x4f9b2d === "starlightTime" ? "crossbow" : "combo");
    _0x2c9bda(_0x460989, _0xd44ec2, _0x1a4574);
    return _0x1a4574;
  }
  function _0x3ca4c3(_0x11aa8e, _0x3513b7, _0x297aeb, _0x3df2b1 = 1) {
    if (_0x11aa8e.dead) {
      return;
    }
    const _0xfbc838 = _0x3513b7 - 1;
    const _0x22da35 = _0x297aeb < _0x11aa8e.wetUntil ? $.wet.fireMultiplier : 1;
    _0x529794(_0x11aa8e, $.fire.direct[_0xfbc838] * _0x3df2b1 * _0x22da35, _0x297aeb, 0, "magic", 0, "cannon");
    if (_0x11aa8e.dead) {
      return;
    }
    _0x11aa8e.fireStacks = Math.min($.fire.maxStacks, _0x11aa8e.fireStacks + 1);
    _0x11aa8e.fireUntil = _0x297aeb + $.fire.duration;
    _0x11aa8e.fireDps = $.fire.dot[_0xfbc838] * _0x3df2b1;
    const _0x53cdd6 = _0x11aa8e.frostStacks > 0;
    const _0x5560b7 = _0x297aeb < _0x11aa8e.wetUntil;
    if (_0x53cdd6 && (!_0x5560b7 || _0x11aa8e.lastFireCombo === "fireWet") && _0x3af1d0(_0x11aa8e, "frostFire", _0x297aeb)) {
      _0x11aa8e.fireStacks = Math.max(0, _0x11aa8e.fireStacks - 1);
      _0x11aa8e.frostStacks = 0;
      _0x11aa8e.frostUntil = 0;
      _0x11aa8e.armorBreakUntil = _0x297aeb + r1.frostFire.duration;
      _0x11aa8e.lastFireCombo = "frostFire";
      _0x2ebfbb(_0x11aa8e, "frostFire", r1.frostFire.damage[_0xfbc838], _0x297aeb);
      return;
    }
    if (_0x5560b7 && _0x3af1d0(_0x11aa8e, "fireWet", _0x297aeb)) {
      _0x11aa8e.wetUntil = 0;
      _0x11aa8e.fireStacks = Math.max(0, _0x11aa8e.fireStacks - 1);
      _0x11aa8e.lastFireCombo = "fireWet";
      const _0x137ce4 = W(_0x11aa8e.distance, _0x11aa8e.route);
      _0x18e0e8.enemies.forEach(_0x56da83 => {
        if (_0x56da83.dead) {
          return;
        }
        const _0x11ff98 = W(_0x56da83.distance, _0x56da83.route);
        if (!(Math.hypot(_0x11ff98.x - _0x137ce4.x, _0x11ff98.y - _0x137ce4.y) > 82)) {
          _0x2ebfbb(_0x56da83, "fireWet", r1.fireWet.damage[_0xfbc838], _0x297aeb);
          _0x56da83.slowUntil = Math.max(_0x56da83.slowUntil, _0x297aeb + r1.fireWet.slowDuration);
          _0x56da83.slowAmount = Math.max(_0x56da83.slowAmount, r1.fireWet.slow);
        }
      });
    }
  }
  function _0x5951ce(_0x4794a9, _0x253cf6, _0x55368f, _0x4741f6, _0x5b9cda) {
    if (_0x4794a9.dead) {
      return;
    }
    const _0x4d61cb = _0x4741f6 < _0x4794a9.wetUntil;
    let _0x2f7859 = _0x4d61cb ? $.wet.lightningMultiplier : 1;
    if (_0x4794a9.type === "crab") {
      _0x2f7859 *= 1.25;
    }
    _0x529794(_0x4794a9, _0x253cf6 * _0x2f7859, _0x4741f6, 0, "magic", 0, "storm");
    if (_0x4794a9.dead || (_0x4794a9.conductiveStacks = Math.min($.lightning.maxStacks, _0x4794a9.conductiveStacks + 1), _0x4794a9.conductiveUntil = _0x4741f6 + $.lightning.conductiveDuration, !_0x5b9cda || !_0x4d61cb || !_0x3af1d0(_0x4794a9, "wetLightning", _0x4741f6))) {
      return;
    }
    _0x4794a9.wetUntil = 0;
    _0x4794a9.conductiveStacks = Math.max(0, _0x4794a9.conductiveStacks - 1);
    const _0x4f9830 = _0x55368f - 1;
    _0x2ebfbb(_0x4794a9, "wetLightning", r1.wetLightning.damage[_0x4f9830], _0x4741f6);
    const _0xe43bbc = W(_0x4794a9.distance, _0x4794a9.route);
    _0x18e0e8.enemies.filter(_0x571357 => _0x571357 !== _0x4794a9 && !_0x571357.dead).map(_0x551b54 => {
      const _0x4dd4c1 = W(_0x551b54.distance, _0x551b54.route);
      return {
        candidate: _0x551b54,
        distance: Math.hypot(_0x4dd4c1.x - _0xe43bbc.x, _0x4dd4c1.y - _0xe43bbc.y)
      };
    }).filter(_0x408fcf => _0x408fcf.distance <= 150).sort((_0x3a876e, _0x581bff) => _0x3a876e.distance - _0x581bff.distance).slice(0, _0x55368f).forEach(_0x7cf3b9 => _0x2ebfbb(_0x7cf3b9.candidate, "wetLightning", r1.wetLightning.damage[_0x4f9830], _0x4741f6));
  }
  function _0x498daa(_0x3b70ac, _0x53bbed) {
    const _0x4790df = _0x3b70ac.target;
    const _0x5bb6c0 = W(_0x4790df.distance, _0x4790df.route);
    if (_0x3b70ac.towerType !== "crossbow") {
      if (_0x3b70ac.towerType === "barracks") {
        _0x529794(_0x4790df, _0x3b70ac.damage, _0x53bbed, _0x3b70ac.slow, "physical", 0, "barracks");
        if (!_0x4790df.isBoss) {
          _0x4790df.distance = Math.max(0, _0x4790df.distance - 62);
        }
        _0x4790df.slowUntil = Math.max(_0x4790df.slowUntil, _0x53bbed + 1.8);
        _0x4790df.slowAmount = Math.max(_0x4790df.slowAmount, 0.3);
        _0x5d4f79.play("pull");
        _0x18e0e8.effects.push({
          type: "harpoon-impact",
          x: _0x5bb6c0.x,
          y: _0x5bb6c0.y,
          angle: _0x3b70ac.angle,
          life: 0.42,
          maxLife: 0.42,
          color: "#b69cff"
        });
        return;
      }
      if (_0x3b70ac.towerType === "storm") {
        _0x5951ce(_0x4790df, _0x3b70ac.damage, _0x3b70ac.elementLevel, _0x53bbed, true);
        const _0x157660 = _0x3b70ac.chainCount - 1;
        const _0x4e3bf3 = _0x18e0e8.enemies.filter(_0x210d5b => _0x210d5b !== _0x4790df && !_0x210d5b.dead).map(_0x317b59 => {
          const _0x569923 = W(_0x317b59.distance, _0x317b59.route);
          return {
            enemy: _0x317b59,
            distance: Math.hypot(_0x569923.x - _0x5bb6c0.x, _0x569923.y - _0x5bb6c0.y)
          };
        }).filter(_0x30f710 => _0x30f710.distance <= 155).sort((_0x3864e1, _0x4ffe2b) => _0x3864e1.distance - _0x4ffe2b.distance).slice(0, _0x157660);
        let _0x22ff19 = {
          x: _0x5bb6c0.x,
          y: _0x5bb6c0.y - 24
        };
        _0x4e3bf3.forEach((_0xe8d73e, _0x1de934) => {
          const _0x2958b7 = W(_0xe8d73e.enemy.distance, _0xe8d73e.enemy.route);
          _0x5951ce(_0xe8d73e.enemy, _0x3b70ac.damage * $.lightning.chainRatio, _0x3b70ac.elementLevel, _0x53bbed, false);
          _0x18e0e8.effects.push({
            type: _0x3b70ac.branch === "magnetic" ? "magnetic-chain" : "lightning-chain",
            x: _0x22ff19.x,
            y: _0x22ff19.y + 22,
            x2: _0x2958b7.x,
            y2: _0x2958b7.y - 24,
            seed: _0x1de934 + _0x3b70ac.elementLevel * 7,
            life: 0.34,
            maxLife: 0.34,
            color: _0x3b70ac.branch === "magnetic" ? "#a78cf0" : "#8ceaff"
          });
          _0x22ff19 = {
            x: _0x2958b7.x,
            y: _0x2958b7.y - 24
          };
        });
        _0x18e0e8.effects.push({
          type: _0x3b70ac.branch === "magnetic" ? "magnetic-impact" : "storm-impact",
          x: _0x5bb6c0.x,
          y: _0x5bb6c0.y,
          life: 0.48,
          maxLife: 0.48,
          color: _0x3b70ac.branch === "magnetic" ? "#a78cf0" : "#74dfff"
        });
        if (_0x3b70ac.branch === "magnetic") {
          _0x18e0e8.enemies.forEach(_0x469c43 => {
            if (_0x469c43.dead || _0x469c43.isBoss) {
              return;
            }
            const _0x8e3979 = W(_0x469c43.distance, _0x469c43.route);
            if (!(Math.hypot(_0x8e3979.x - _0x5bb6c0.x, _0x8e3979.y - _0x5bb6c0.y) > 135)) {
              _0x469c43.distance = Math.max(0, _0x469c43.distance - 48);
              _0x469c43.slowUntil = Math.max(_0x469c43.slowUntil, _0x53bbed + 2.2);
              _0x469c43.slowAmount = Math.max(_0x469c43.slowAmount, 0.32);
            }
          });
          _0x5d4f79.play("pull");
        }
        return;
      }
      if (_0x3b70ac.towerType === "time") {
        _0x18e0e8.enemies.forEach(_0xdcf662 => {
          if (_0xdcf662.dead) {
            return;
          }
          const _0x862427 = W(_0xdcf662.distance, _0xdcf662.route);
          if (Math.hypot(_0x862427.x - _0x5bb6c0.x, _0x862427.y - _0x5bb6c0.y) <= 82) {
            (function (_0x481f2d, _0xd89e1, _0x2e737b, _0x16d8ee = 1) {
              if (_0x481f2d.dead) {
                return;
              }
              const _0x35e890 = _0xd89e1 - 1;
              _0x529794(_0x481f2d, $.frost.direct[_0x35e890] * _0x16d8ee, _0x2e737b, 0, "magic", 0, "time");
              if (!_0x481f2d.dead) {
                _0x481f2d.frostStacks = Math.min($.frost.maxStacks, _0x481f2d.frostStacks + 1);
                _0x481f2d.frostUntil = _0x2e737b + $.frost.duration[_0x35e890];
                _0x481f2d.slowUntil = Math.max(_0x481f2d.slowUntil, _0x481f2d.frostUntil);
                _0x481f2d.slowAmount = Math.max(_0x481f2d.slowAmount, $.frost.slow[_0x35e890]);
                if (_0x481f2d.frostStacks >= 2 && !_0x481f2d.isBoss && _0x481f2d.type !== "beast") {
                  _0x481f2d.freezeUntil = Math.max(_0x481f2d.freezeUntil, _0x2e737b + 0.8);
                }
                if (_0x481f2d.fireStacks > 0 && _0x3af1d0(_0x481f2d, "frostFire", _0x2e737b)) {
                  _0x481f2d.fireStacks = Math.max(0, _0x481f2d.fireStacks - 1);
                  _0x481f2d.frostStacks = 0;
                  _0x481f2d.frostUntil = 0;
                  _0x481f2d.armorBreakUntil = _0x2e737b + r1.frostFire.duration;
                  _0x2ebfbb(_0x481f2d, "frostFire", r1.frostFire.damage[_0x35e890], _0x2e737b);
                }
                _0x481f2d.wetUntil = _0x2e737b + $.wet.duration;
                _0x481f2d.timeUntil = _0x2e737b + $.wet.duration;
              }
            })(_0xdcf662, _0x3b70ac.elementLevel, _0x53bbed, _0x3b70ac.elementPower);
          }
        });
        _0x18e0e8.effects.push({
          type: _0x3b70ac.branch === "reverse" ? "reverse-impact" : _0x3b70ac.branch === "resonance" ? "resonance-impact" : "frost-impact",
          x: _0x5bb6c0.x,
          y: _0x5bb6c0.y,
          life: _0x3b70ac.branch === "reverse" ? 0.72 : 0.56,
          maxLife: _0x3b70ac.branch === "reverse" ? 0.72 : 0.56,
          color: _0x3b70ac.branch === "resonance" ? "#d6a6f2" : "#b69cff"
        });
        if (_0x3b70ac.branch === "resonance") {
          _0x18e0e8.towers.forEach(_0x502f9f => {
            if (_0x502f9f === _0x3b70ac.sourceTower) {
              return;
            }
            const _0x24bdc2 = Q[_0x502f9f.padIndex];
            if (!(Math.hypot(_0x24bdc2.x - _0x3b70ac.startX, _0x24bdc2.y - _0x3b70ac.startY) > 235)) {
              _0x502f9f.resonanceUntil = Math.max(_0x502f9f.resonanceUntil || 0, _0x53bbed + 6);
              _0x502f9f.cooldown = Math.min(_0x502f9f.cooldown, 0.12);
              _0x18e0e8.effects.push({
                type: "tower-resonance",
                x: _0x24bdc2.x,
                y: _0x24bdc2.y,
                life: 0.8,
                maxLife: 0.8,
                color: "#d6a6f2"
              });
            }
          });
          _0x5d4f79.play("resonance");
        }
        return;
      }
      _0x529794(_0x4790df, _0x3b70ac.damage, _0x53bbed, _0x3b70ac.slow, "physical", 0, "cannon");
      _0x3ca4c3(_0x4790df, _0x3b70ac.elementLevel, _0x53bbed, _0x3b70ac.elementPower);
      if (_0x3b70ac.splash) {
        _0x18e0e8.enemies.forEach(_0x57b6ea => {
          if (_0x57b6ea === _0x4790df || _0x57b6ea.dead) {
            return;
          }
          const _0x3827fe = W(_0x57b6ea.distance, _0x57b6ea.route);
          if (!(Math.hypot(_0x3827fe.x - _0x5bb6c0.x, _0x3827fe.y - _0x5bb6c0.y) > _0x3b70ac.splash)) {
            _0x529794(_0x57b6ea, _0x3b70ac.damage * 0.55, _0x53bbed, 0, "physical", 0, "cannon");
            _0x3ca4c3(_0x57b6ea, _0x3b70ac.elementLevel, _0x53bbed, _0x3b70ac.elementPower);
          }
        });
        _0x18e0e8.effects.push({
          type: _0x3b70ac.branch === "dragon" ? "dragon-impact" : _0x3b70ac.branch === "meteor" ? "meteor-impact" : "cannon-impact",
          x: _0x5bb6c0.x,
          y: _0x5bb6c0.y,
          life: _0x3b70ac.branch === "meteor" ? 0.72 : 0.58,
          maxLife: _0x3b70ac.branch === "meteor" ? 0.72 : 0.58,
          color: _0x3b70ac.branch === "dragon" ? "#ff6c32" : "#ff9d43",
          radius: _0x3b70ac.splash
        });
      }
    } else {
      _0x529794(_0x4790df, _0x3b70ac.damage, _0x53bbed, _0x3b70ac.slow, "physical", 0, "crossbow");
      if (_0x3b70ac.isStarlight) {
        (function (_0x4dc328, _0x44c299, _0x273b77) {
          if (_0x4dc328.dead) {
            return;
          }
          const _0x1c935e = _0x44c299 - 1;
          _0x529794(_0x4dc328, $.starlight.direct[_0x1c935e], _0x273b77, 0, "magic", $.starlight.magicResistIgnore, "crossbow");
          if (!_0x4dc328.dead && !(_0x273b77 >= _0x4dc328.timeUntil) && _0x3af1d0(_0x4dc328, "starlightTime", _0x273b77)) {
            _0x4dc328.timeUntil = 0;
            _0x18e0e8.echoes.push({
              target: _0x4dc328,
              delay: r1.starlightTime.delay,
              damage: $.starlight.direct[_0x1c935e] * r1.starlightTime.repeatRatio[_0x1c935e],
              alive: true
            });
            _0x2c9bda(_0x4dc328, r1.starlightTime, 0);
          }
        })(_0x4790df, _0x3b70ac.elementLevel, _0x53bbed);
      }
      if (_0x3b70ac.branch === "moonmark") {
        const _0x2c1c94 = _0x5bb6c0.x - _0x3b70ac.startX;
        const _0x51d9fc = _0x5bb6c0.y - 28 - _0x3b70ac.startY;
        const _0x3fe572 = Math.max(1, Math.hypot(_0x2c1c94, _0x51d9fc));
        const _0x5af91c = {
          x: _0x3b70ac.startX + _0x2c1c94 / _0x3fe572 * 340,
          y: _0x3b70ac.startY + _0x51d9fc / _0x3fe572 * 340
        };
        _0x18e0e8.enemies.filter(_0x19680a => _0x19680a !== _0x4790df && !_0x19680a.dead).map(_0x3be2fd => ({
          enemy: _0x3be2fd,
          point: W(_0x3be2fd.distance, _0x3be2fd.route)
        })).filter(_0x1270bc => Fn(_0x1270bc.point, {
          x: _0x3b70ac.startX,
          y: _0x3b70ac.startY
        }, _0x5af91c) <= 34).sort((_0xcdb319, _0x32c1c9) => _0x32c1c9.enemy.distance - _0xcdb319.enemy.distance).slice(0, 3).forEach(_0x3d5bdf => _0x529794(_0x3d5bdf.enemy, _0x3b70ac.damage * 0.68, _0x53bbed, 0, "physical", 0, "crossbow"));
        _0x18e0e8.effects.push({
          type: "moonmark-pierce",
          x: _0x3b70ac.startX,
          y: _0x3b70ac.startY + 22,
          x2: _0x5af91c.x,
          y2: _0x5af91c.y,
          life: 0.42,
          maxLife: 0.42,
          color: "#d7fcff"
        });
        _0x5d4f79.play("pierce");
      }
      _0x18e0e8.effects.push({
        type: _0x3b70ac.branch === "moonmark" ? "moonmark-impact" : _0x3b70ac.branch === "phantom" ? "phantom-impact" : "bolt-impact",
        x: _0x5bb6c0.x,
        y: _0x5bb6c0.y,
        angle: _0x3b70ac.angle,
        life: _0x3b70ac.isStarlight ? 0.48 : 0.3,
        maxLife: _0x3b70ac.isStarlight ? 0.48 : 0.3,
        color: _0x3b70ac.color,
        starlight: _0x3b70ac.isStarlight
      });
    }
  }
  function _0xc642c3(_0x566cdd, _0x41270f) {
    _0x18e0e8.guards.forEach(_0x233e64 => {
      var _0x507f38;
      _0x233e64.flash = Math.max(0, _0x233e64.flash - _0x566cdd);
      if (_0x233e64.state === "dead") {
        _0x233e64.respawn -= _0x566cdd;
        if (_0x233e64.respawn <= 0) {
          const _0x2899da = Q[_0x233e64.tower.padIndex];
          _0x233e64.x = _0x2899da.x;
          _0x233e64.y = _0x2899da.y - 12;
          _0x233e64.health = _0x233e64.maxHealth;
          _0x233e64.state = "deploying";
        }
        return;
      }
      const _0x5c5b8f = W(_0x233e64.postDistance, _0x233e64.route);
      if (_0x233e64.state === "deploying") {
        const _0x414fd6 = _0x5c5b8f.x - _0x233e64.x;
        const _0x208ff8 = _0x5c5b8f.y - _0x233e64.y;
        const _0x198bee = Math.hypot(_0x414fd6, _0x208ff8);
        const _0x3793bf = _0x566cdd * 115;
        if (_0x198bee <= _0x3793bf + 2) {
          _0x233e64.x = _0x5c5b8f.x;
          _0x233e64.y = _0x5c5b8f.y;
          _0x233e64.state = "stationed";
        } else {
          _0x233e64.x += _0x414fd6 / _0x198bee * _0x3793bf;
          _0x233e64.y += _0x208ff8 / _0x198bee * _0x3793bf;
        }
        return;
      }
      _0x233e64.x = _0x5c5b8f.x;
      _0x233e64.y = _0x5c5b8f.y;
      const _0x3883b6 = _0x233e64.tower.level === 4 && _0x233e64.tower.branch === "harpoon";
      if (_0x233e64.target && _0x3883b6) {
        const _0x3c82e3 = W(_0x233e64.target.distance, _0x233e64.target.route);
        if (_0x233e64.target.dead || Math.hypot(_0x3c82e3.x - _0x233e64.x, _0x3c82e3.y - _0x233e64.y) > 145) {
          _0x33c6ae(_0x233e64);
        }
      } else if (_0x233e64.target && (_0x233e64.target.dead || _0x233e64.target.blockedBy !== _0x233e64)) {
        _0x33c6ae(_0x233e64);
      }
      if (!_0x233e64.target) {
        const _0xb8c7c1 = (_0x507f38 = _0x18e0e8.enemies.filter(_0x2e7721 => !_0x2e7721.dead && (_0x3883b6 || !_0x2e7721.blockedBy)).map(_0x3a768f => ({
          enemy: _0x3a768f,
          separation: Math.hypot(W(_0x3a768f.distance, _0x3a768f.route).x - _0x233e64.x, W(_0x3a768f.distance, _0x3a768f.route).y - _0x233e64.y)
        })).filter(_0x15a682 => _0x15a682.separation <= (_0x3883b6 ? 112 : 38)).sort((_0x12300f, _0x52cdd9) => _0x12300f.separation - _0x52cdd9.separation)[0]) == null ? undefined : _0x507f38.enemy;
        if (_0xb8c7c1) {
          _0x233e64.target = _0xb8c7c1;
          if (!_0x3883b6) {
            _0xb8c7c1.blockedBy = _0x233e64;
            (function (_0x4f8a80, _0x5387bf) {
              if (_0x4f8a80.type === "navigator" && !!_0x4f8a80.shielded) {
                _0x4f8a80.shielded = false;
                _0x4f8a80.shieldBroken = true;
                _0x4f8a80.abilityFlash = 0.8;
                _0x4f8a80.armorBreakUntil = Math.max(_0x4f8a80.armorBreakUntil, _0x5387bf + 4);
                _0x5d4f79.play("shield-break");
                _0x2c9bda(_0x4f8a80, {
                  name: "护盾破除",
                  color: "#f1d37f"
                }, 0);
              }
            })(_0xb8c7c1, _0x41270f);
          }
          _0x233e64.engageDistance = _0xb8c7c1.distance;
          _0x233e64.attackCooldown = 0;
        }
      }
      if (_0x233e64.target && (_0x233e64.attackCooldown -= _0x566cdd, _0x233e64.attackCooldown <= 0)) {
        if (_0x3883b6) {
          _0x5d4f79.play("barracks");
          const _0x38aa03 = W(_0x233e64.target.distance, _0x233e64.target.route);
          const _0x183edf = Math.atan2(_0x38aa03.y - 24 - _0x233e64.y, _0x38aa03.x - _0x233e64.x);
          _0x18e0e8.projectiles.push({
            x: _0x233e64.x,
            y: _0x233e64.y - 20,
            startX: _0x233e64.x,
            startY: _0x233e64.y - 20,
            target: _0x233e64.target,
            speed: 520,
            damage: _0x233e64.damage,
            splash: 0,
            slow: 0.12,
            towerType: "barracks",
            variant: "barracks-harpoon",
            branch: "harpoon",
            color: "#a68af0",
            angle: _0x183edf,
            totalDistance: Math.max(1, Math.hypot(_0x38aa03.x - _0x233e64.x, _0x38aa03.y - 24 - _0x233e64.y)),
            age: 0,
            alive: true,
            now: _0x41270f
          });
          _0x18e0e8.effects.push({
            type: "harpoon-muzzle",
            x: _0x233e64.x,
            y: _0x233e64.y,
            angle: _0x183edf,
            life: 0.2,
            maxLife: 0.2,
            color: "#b69cff"
          });
        } else {
          _0x5d4f79.play("barracks");
          _0x529794(_0x233e64.target, _0x233e64.damage, _0x41270f, 0, "physical", 0, "barracks");
          if (_0x233e64.tower.branch === "anchor") {
            _0x233e64.target.armorBreakUntil = Math.max(_0x233e64.target.armorBreakUntil, _0x41270f + 3.5);
          }
          const _0x319bc4 = W(_0x233e64.target.distance, _0x233e64.target.route);
          _0x18e0e8.effects.push({
            type: _0x233e64.tower.branch === "anchor" ? "anchor-impact" : "guard-impact",
            x: _0x319bc4.x,
            y: _0x319bc4.y,
            angle: Math.atan2(_0x319bc4.y - _0x233e64.y, _0x319bc4.x - _0x233e64.x),
            life: 0.3,
            maxLife: 0.3,
            color: _0x233e64.tower.branch === "anchor" ? "#9edfe5" : "#e4c778"
          });
        }
        _0x233e64.attackCooldown = _0x233e64.attackInterval;
        _0x233e64.flash = 0.12;
        _0x233e64.animationStartedAt = performance.now();
        _0x233e64.tower.animationStartedAt = _0x233e64.animationStartedAt;
      }
    });
  }
  function _0x46191c(_0x6b1ef, _0x30aa8c) {
    if (_0x18e0e8.status !== "ready") {
      return;
    }
    const _0x2609dd = _0x6b1ef * _0x18e0e8.speed;
    (function (_0x2acd4e, _0xd94eea) {
      _0x18e0e8.interactionCooldown = Math.max(0, _0x18e0e8.interactionCooldown - _0x2acd4e);
      _0x18e0e8.boilerLockTimer = Math.max(0, _0x18e0e8.boilerLockTimer - _0x2acd4e);
      if (S.mechanic === "boiler" && _0x18e0e8.waveActive) {
        if (_0x18e0e8.boilerLockTimer > 0) {
          _0x18e0e8.mechanicActive = false;
        } else {
          _0x18e0e8.mechanicTimer -= _0x2acd4e;
          if (_0x18e0e8.mechanicTimer <= 0) {
            _0x18e0e8.mechanicActive = !_0x18e0e8.mechanicActive;
            _0x18e0e8.mechanicTimer = _0x18e0e8.mechanicActive ? 6 + _0x169792() * 2 : 8 + _0x169792() * 2;
            _0x18e0e8.mapStateLabel = _0x18e0e8.mechanicActive ? "锅炉增压 · 机械单位加速" : "锅炉常压";
            _0x18e0e8.effects.push({
              x: 575,
              y: 100,
              life: 0.6,
              color: _0x18e0e8.mechanicActive ? "#ffb15e" : "#8ce3db"
            });
            if (_0x18e0e8.mechanicActive) {
              _0x180815({
                title: "锅炉再次增压",
                detail: "快速敌军与机械防御塔同时进入加速状态",
                tone: "hazard"
              }, 0);
              _0x196f1a();
            }
          }
        }
      }
      if (S.mechanic === "storm" && _0x18e0e8.waveActive) {
        _0x18e0e8.stormTimer -= _0x2acd4e;
        if (_0x18e0e8.stormTimer <= 0) {
          const _0x3ad8b9 = _0x18e0e8.towers[Math.floor(_0x169792() * Math.max(1, _0x18e0e8.towers.length))];
          if (_0x3ad8b9) {
            _0x3ad8b9.cooldown = 0;
            _0x3ad8b9.boostUntil = _0xd94eea + 5;
            const _0x125a8e = Q[_0x3ad8b9.padIndex];
            _0x18e0e8.effects.push({
              x: _0x125a8e.x,
              y: _0x125a8e.y + 20,
              life: 0.65,
              color: "#c8edff"
            });
            _0x18e0e8.mechanicActive = true;
            _0x18e0e8.mechanicTimer = 1.2;
            _0x196f1a();
          }
          _0x18e0e8.stormTimer = 5 + _0x169792() * 3;
        }
        if (_0x18e0e8.mechanicActive) {
          _0x18e0e8.mechanicTimer -= _0x2acd4e;
          if (_0x18e0e8.mechanicTimer <= 0) {
            _0x18e0e8.mechanicActive = false;
          }
        }
      }
      if (S.mechanic === "crystal" && _0x18e0e8.mechanicActive) {
        _0x18e0e8.mechanicTimer -= _0x2acd4e;
        if (_0x18e0e8.mechanicTimer <= 0) {
          _0x18e0e8.mechanicActive = false;
        }
      }
    })(_0x2609dd, _0x30aa8c);
    (function (_0x87ea42, _0x367654) {
      const _0x5220fd = _0x18e0e8.enemies.find(_0x96ed91 => _0x96ed91.isBoss && !_0x96ed91.dead);
      if (!_0x5220fd || (_0x5220fd.bossAbilityCooldown -= _0x87ea42, _0x5220fd.bossAbilityCooldown > 0)) {
        return;
      }
      const _0x1cf35f = W(_0x5220fd.distance, _0x5220fd.route);
      _0x5d4f79.play("boss-skill");
      _0x5220fd.animationStartedAt = performance.now();
      _0x18e0e8.effects.push({
        type: "enemy-dagon-slam",
        x: _0x1cf35f.x,
        y: _0x1cf35f.y + 4,
        angle: 0,
        life: 0.62,
        maxLife: 0.62,
        color: "#77e7ff"
      });
      if (_0x5220fd.bossPhase === 1) {
        _0x18e0e8.towers.forEach(_0x3908e3 => {
          _0x3908e3.cooldown += 0.75;
        });
        _0x18e0e8.effects.push({
          type: "boss-pulse",
          x: _0x1cf35f.x,
          y: _0x1cf35f.y,
          life: 1,
          maxLife: 1,
          color: "#83e7ff",
          label: "深渊脉冲"
        });
        _0x5220fd.bossAbilityCooldown = 7.5;
      } else if (_0x5220fd.bossPhase === 2) {
        _0x5220fd.bossHasteUntil = _0x367654 + 4.2;
        _0x18e0e8.effects.push({
          type: "boss-steam",
          x: _0x1cf35f.x,
          y: _0x1cf35f.y,
          life: 1.15,
          maxLife: 1.15,
          color: "#ff9a4f",
          label: "锅炉超压"
        });
        _0x5220fd.bossAbilityCooldown = 6.5;
      } else if (_0x5220fd.bossPhase === 3) {
        _0x18e0e8.guards.forEach(_0x663569 => {
          if (_0x663569.state !== "dead") {
            _0x663569.health = Math.max(0, _0x663569.health - _0x663569.maxHealth * 0.34);
            _0x663569.flash = 0.35;
            if (_0x663569.health <= 0) {
              _0x663569.state = "dead";
              _0x663569.respawn = 8;
              _0x663569.deathStartedAt = performance.now();
              _0x33c6ae(_0x663569);
            }
          }
        });
        _0x18e0e8.effects.push({
          type: "boss-anchor",
          x: _0x1cf35f.x,
          y: _0x1cf35f.y,
          life: 1.05,
          maxLife: 1.05,
          color: "#e7cf87",
          label: "船锚震击"
        });
        _0x5220fd.bossAbilityCooldown = 5.8;
      } else {
        _0x5220fd.bossHasteUntil = _0x367654 + 3.2;
        _0x18e0e8.towers.forEach(_0x216bce => {
          _0x216bce.cooldown += 0.35;
        });
        _0x18e0e8.effects.push({
          type: "boss-rage",
          x: _0x1cf35f.x,
          y: _0x1cf35f.y,
          life: 1.2,
          maxLife: 1.2,
          color: "#df6d78",
          label: "古神狂潮"
        });
        _0x5220fd.bossAbilityCooldown = 4.6;
      }
    })(_0x2609dd, _0x30aa8c);
    if (_0x18e0e8.waveActive && _0x18e0e8.spawnQueue.length && (_0x18e0e8.spawnTimer -= _0x2609dd, _0x18e0e8.spawnTimer <= 0)) {
      const _0x21dcb0 = _0x18e0e8.spawnQueue.shift();
      _0x1a86be(_0x21dcb0);
      _0x18e0e8.spawnTimer = _0x21dcb0.delay;
    }
    (function (_0x486d95, _0x43927d) {
      _0x18e0e8.enemies.forEach(_0x41c74b => {
        if (!_0x41c74b.dead) {
          _0x41c74b.healFlash = Math.max(0, _0x41c74b.healFlash - _0x486d95);
          _0x41c74b.abilityFlash = Math.max(0, _0x41c74b.abilityFlash - _0x486d95);
          if (_0x41c74b.type === "priest" && (_0x41c74b.healCooldown -= _0x486d95, _0x41c74b.healCooldown <= 0)) {
            const _0x2f39ed = W(_0x41c74b.distance, _0x41c74b.route);
            let _0x1e3c95 = 0;
            _0x18e0e8.enemies.forEach(_0x47d3eb => {
              if (_0x47d3eb.dead || _0x47d3eb.isBoss || _0x47d3eb.health >= _0x47d3eb.maxHealth) {
                return;
              }
              const _0x519941 = W(_0x47d3eb.distance, _0x47d3eb.route);
              if (Math.hypot(_0x519941.x - _0x2f39ed.x, _0x519941.y - _0x2f39ed.y) > 145) {
                return;
              }
              const _0x1d5bea = _0x47d3eb.maxHealth * (_0x47d3eb === _0x41c74b ? 0.14 : 0.09);
              _0x47d3eb.health = Math.min(_0x47d3eb.maxHealth, _0x47d3eb.health + _0x1d5bea);
              _0x47d3eb.healFlash = 0.9;
              _0x1e3c95 += _0x1d5bea;
              _0x18e0e8.effects.push({
                type: "priest-heal",
                x: _0x519941.x,
                y: _0x519941.y,
                life: 0.72,
                maxLife: 0.72,
                color: L2.priest.color
              });
            });
            if (_0x1e3c95 > 0) {
              _0x5d4f79.play("priest");
              _0x41c74b.animationStartedAt = performance.now();
              _0x2c9bda(_0x41c74b, {
                name: "雾炉祷疗",
                color: L2.priest.color
              }, _0x1e3c95);
            }
            _0x41c74b.healCooldown = 6.5;
          }
          if (_0x43927d >= _0x41c74b.fireUntil) {
            _0x41c74b.fireStacks = 0;
            _0x41c74b.fireTick = 0;
          } else if (_0x41c74b.fireStacks > 0) {
            _0x41c74b.fireTick += _0x486d95;
            if (_0x41c74b.fireTick >= 0.5) {
              _0x529794(_0x41c74b, _0x41c74b.fireDps * _0x41c74b.fireStacks * _0x41c74b.fireTick, _0x43927d, 0, "magic", 0, "cannon");
              _0x41c74b.fireTick = 0;
            }
          }
          if (_0x43927d >= _0x41c74b.frostUntil) {
            _0x41c74b.frostStacks = 0;
          }
          if (_0x43927d >= _0x41c74b.conductiveUntil) {
            _0x41c74b.conductiveStacks = 0;
          }
          if (_0x43927d >= _0x41c74b.slowUntil) {
            _0x41c74b.slowAmount = 0;
          }
        }
      });
      _0x18e0e8.echoes.forEach(_0x336b07 => {
        if (!_0x336b07.alive || _0x336b07.target.dead) {
          _0x336b07.alive = false;
          return;
        }
        _0x336b07.delay -= _0x486d95;
        if (_0x336b07.delay > 0) {
          return;
        }
        _0x336b07.alive = false;
        const _0x209e54 = _0x529794(_0x336b07.target, _0x336b07.damage, _0x43927d, 0, "magic", $.starlight.magicResistIgnore, "crossbow");
        _0x2c9bda(_0x336b07.target, r1.starlightTime, _0x209e54);
      });
      _0x18e0e8.echoes = _0x18e0e8.echoes.filter(_0x1cce95 => _0x1cce95.alive);
    })(_0x2609dd, _0x30aa8c);
    _0xc642c3(_0x2609dd, _0x30aa8c);
    _0x18e0e8.enemies.forEach(_0x378ac5 => {
      if (_0x378ac5.dead) {
        return;
      }
      if (_0x378ac5.blockedBy && _0x378ac5.blockedBy.state !== "dead") {
        const _0x55018f = _0x378ac5.blockedBy;
        _0x378ac5.distance = Math.min(_0x378ac5.distance, _0x55018f.engageDistance);
        _0x378ac5.attackCooldown -= _0x2609dd;
        if (_0x378ac5.attackCooldown <= 0) {
          _0x378ac5.animationStartedAt = performance.now();
          const _0x3db242 = W(_0x378ac5.distance, _0x378ac5.route);
          if (_0x378ac5.type === "priest") {
            _0x5d4f79.play("priest");
            _0x18e0e8.enemyProjectiles.push({
              x: _0x3db242.x + 8,
              y: _0x3db242.y - 52,
              startX: _0x3db242.x + 8,
              startY: _0x3db242.y - 52,
              target: _0x55018f,
              damage: _0x378ac5.attack,
              speed: 340,
              angle: 0,
              towerType: "time",
              variant: "time-resonance",
              branch: "resonance",
              color: "#a988ff",
              splash: 0,
              totalDistance: Math.max(1, Math.hypot(_0x55018f.x - _0x3db242.x, _0x55018f.y - 22 - (_0x3db242.y - 52))),
              alive: true
            });
            _0x18e0e8.effects.push({
              type: "enemy-priest-cast",
              x: _0x3db242.x + 8,
              y: _0x3db242.y - 30,
              life: 0.48,
              maxLife: 0.48,
              color: "#a988ff"
            });
          } else {
            _0x5d4f79.play(_0x378ac5.isBoss ? "dagon-attack" : "hit");
            _0x55018f.health -= _0x378ac5.attack;
            _0x55018f.flash = 0.16;
            _0x18e0e8.effects.push({
              type: _0x378ac5.isBoss ? "enemy-dagon-slam" : "enemy-strike",
              x: _0x55018f.x,
              y: _0x55018f.y,
              angle: Math.atan2(_0x55018f.y - _0x3db242.y, _0x55018f.x - _0x3db242.x),
              life: _0x378ac5.isBoss ? 0.62 : 0.28,
              maxLife: _0x378ac5.isBoss ? 0.62 : 0.28,
              color: _0x378ac5.isBoss ? "#77e7ff" : "#ed8a72"
            });
          }
          _0x378ac5.attackCooldown = _0x378ac5.attackInterval;
          if (_0x55018f.health <= 0) {
            _0x55018f.health = 0;
            _0x55018f.state = "dead";
            _0x55018f.respawn = 8;
            _0x55018f.deathStartedAt = performance.now();
            _0x33c6ae(_0x55018f);
          }
        }
        _0x378ac5.flash = Math.max(0, _0x378ac5.flash - _0x2609dd);
        return;
      }
      const _0x456a7b = _0x30aa8c < _0x378ac5.slowUntil ? 1 - _0x378ac5.slowAmount : 1;
      const _0x1796ae = _0x30aa8c < _0x378ac5.freezeUntil ? 0 : 1;
      const _0x139467 = S.mechanic === "crystal" && _0x18e0e8.mechanicActive ? 0.55 : 1;
      const _0x295a94 = S.mechanic === "boiler" && _0x18e0e8.mechanicActive ? 1.2 : 1;
      const _0x11f048 = _0x378ac5.isBoss && _0x30aa8c < _0x378ac5.bossHasteUntil ? 1.38 : 1;
      const _0x76edd3 = _0x18e0e8.routeSpeedModifiers[_0x378ac5.route] || 1;
      _0x378ac5.distance += _0x378ac5.speed * _0x456a7b * _0x1796ae * _0x139467 * _0x295a94 * _0x11f048 * _0x76edd3 * _0x2609dd;
      if (_0x378ac5.isBoss && _0x378ac5.distance >= _0x378ac5.nextStepDistance) {
        _0x5d4f79.play("dagon-step");
        _0x378ac5.nextStepDistance = _0x378ac5.distance + 24;
      }
      _0x378ac5.flash = Math.max(0, _0x378ac5.flash - _0x2609dd);
      const _0x4e734c = rt(_0x378ac5.route);
      if (_0x378ac5.distance >= _0x4e734c.distance) {
        _0x378ac5.dead = true;
        _0x18e0e8.lives -= _0x378ac5.coreDamage;
        _0x5d4f79.play("core-hit");
        _0x18e0e8.effects.push({
          type: "castle-breach",
          x: _0x4e734c.point.x,
          y: _0x4e734c.point.y,
          life: 0.72,
          maxLife: 0.72,
          color: "#ef8a72",
          label: "王城耐久 -" + _0x378ac5.coreDamage
        });
        _0x266be0.classList.remove("is-hit");
        _0x266be0.offsetWidth;
        _0x266be0.classList.add("is-hit");
      }
    });
    _0x18e0e8.enemyProjectiles.forEach(_0x3f5565 => {
      if (!_0x3f5565.alive || _0x3f5565.target.state === "dead") {
        _0x3f5565.alive = false;
        return;
      }
      const _0x1ebe27 = _0x3f5565.target.x;
      const _0x592f56 = _0x3f5565.target.y - 22;
      const _0x49603c = _0x1ebe27 - _0x3f5565.x;
      const _0x212fbd = _0x592f56 - _0x3f5565.y;
      const _0x374a69 = Math.hypot(_0x49603c, _0x212fbd);
      const _0x58ef82 = _0x3f5565.speed * _0x2609dd;
      _0x3f5565.angle = Math.atan2(_0x212fbd, _0x49603c);
      if (_0x374a69 <= _0x58ef82 + 5) {
        _0x3f5565.alive = false;
        const _0xc38237 = _0x3f5565.target;
        _0xc38237.health -= _0x3f5565.damage;
        _0xc38237.flash = 0.2;
        _0x5d4f79.play("hit");
        _0x18e0e8.effects.push({
          type: "enemy-priest-impact",
          x: _0xc38237.x,
          y: _0xc38237.y,
          life: 0.52,
          maxLife: 0.52,
          color: "#b798ff"
        });
        if (_0xc38237.health <= 0) {
          _0xc38237.health = 0;
          _0xc38237.state = "dead";
          _0xc38237.respawn = 8;
          _0xc38237.deathStartedAt = performance.now();
          _0x33c6ae(_0xc38237);
        }
        return;
      }
      _0x3f5565.x += _0x49603c / _0x374a69 * _0x58ef82;
      _0x3f5565.y += _0x212fbd / _0x374a69 * _0x58ef82;
    });
    _0x18e0e8.towers.forEach(_0x453f12 => {
      if (_0x453f12.type === "barracks") {
        return;
      }
      const _0x445541 = (_0x453f12.boostUntil || 0) > _0x30aa8c;
      const _0x1e29c5 = (_0x453f12.resonanceUntil || 0) > _0x30aa8c;
      const _0x57b0bd = S.mechanic === "boiler" && _0x18e0e8.mechanicActive && ["crossbow", "cannon"].includes(_0x453f12.type);
      _0x453f12.cooldown -= _0x2609dd * (_0x445541 ? 1.25 : 1) * (_0x1e29c5 ? 1.35 : 1) * (_0x57b0bd ? 1.2 : 1);
      if (_0x453f12.cooldown > 0) {
        return;
      }
      const _0x534fc4 = Q[_0x453f12.padIndex];
      const _0x3e99b6 = U1(_0x453f12.type, _0x453f12.level, _0x453f12.branch);
      const _0x3a42df = RS(_0x18e0e8.enemies.filter(_0xcf72b2 => !_0xcf72b2.dead).filter(_0x4089c8 => {
        const _0x52ef3e = W(_0x4089c8.distance, _0x4089c8.route);
        return Math.hypot(_0x52ef3e.x - _0x534fc4.x, _0x52ef3e.y - _0x534fc4.y) <= _0x3e99b6.range;
      }), _0x453f12.targetMode);
      if (_0x3a42df) {
        (function (_0x2b3b35, _0x23b0fd, _0x5329e4) {
          const _0x1d79a6 = U1(_0x2b3b35.type, _0x2b3b35.level, _0x2b3b35.branch);
          _0x5d4f79.play(_0x2b3b35.type);
          const _0x15d319 = Q[_0x2b3b35.padIndex];
          const _0x1c07f8 = W(_0x23b0fd.distance, _0x23b0fd.route);
          _0x2b3b35.aim = Math.atan2(_0x1c07f8.y - _0x15d319.y, _0x1c07f8.x - _0x15d319.x);
          _0x2b3b35.cooldown = _0x1d79a6.cooldown;
          _0x2b3b35.animationStartedAt = performance.now();
          const _0x161cad = S.mechanic === "foundry" ? _0x2b3b35.type === "cannon" && _0x18e0e8.mechanicActive ? 1.25 : ["storm", "time"].includes(_0x2b3b35.type) && !_0x18e0e8.mechanicActive ? 1.2 : 1 : 1;
          _0x2b3b35.shotCount = (_0x2b3b35.shotCount || 0) + 1;
          const _0x4959fa = _0x2b3b35.type === "crossbow" && _0x2b3b35.shotCount % 6 == 0;
          const _0x1aab75 = _0x15d319.x + Math.cos(_0x2b3b35.aim) * 22;
          const _0x10b4b0 = _0x15d319.y - 32 + Math.sin(_0x2b3b35.aim) * 10;
          const _0x1a4670 = AS(_0x2b3b35, _0x4959fa);
          const _0x2ac922 = {
            crossbow: _0x4959fa ? "#f4e48a" : "#9ff3f0",
            cannon: "#ff9d43",
            storm: "#74dfff",
            time: "#b69cff"
          };
          _0x18e0e8.effects.push({
            type: _0x2b3b35.type + "-muzzle",
            x: _0x1aab75,
            y: _0x10b4b0 + 22,
            angle: _0x2b3b35.aim,
            life: 0.24,
            maxLife: 0.24,
            color: _0x2ac922[_0x2b3b35.type],
            branch: _0x2b3b35.branch || ""
          });
          _0x18e0e8.projectiles.push({
            x: _0x1aab75,
            y: _0x10b4b0,
            startX: _0x1aab75,
            startY: _0x10b4b0,
            target: _0x23b0fd,
            sourceTower: _0x2b3b35,
            speed: _0x2b3b35.type === "cannon" ? 420 : 600,
            damage: _0x1d79a6.damage * _0x161cad,
            splash: _0x1d79a6.splash || 0,
            slow: _0x1d79a6.slow || 0,
            towerType: _0x2b3b35.type,
            elementLevel: ta(_0x2b3b35),
            chainCount: _0x2b3b35.type === "storm" && _0x2b3b35.level === 4 && _0x2b3b35.branch === "magnetic" ? 4 : $.lightning.chains[ta(_0x2b3b35) - 1],
            isStarlight: _0x4959fa,
            elementPower: _0x161cad,
            color: _0x4959fa ? "#f4e48a" : _0x1d79a6.projectile,
            angle: _0x2b3b35.aim,
            variant: _0x1a4670,
            branch: _0x2b3b35.branch || "",
            totalDistance: Math.max(1, Math.hypot(_0x1c07f8.x - _0x1aab75, _0x1c07f8.y - 28 - _0x10b4b0)),
            age: 0,
            alive: true,
            now: _0x5329e4
          });
          if (_0x2b3b35.type === "crossbow" && _0x2b3b35.branch === "phantom") {
            const _0x5a6889 = _0x18e0e8.projectiles.at(-1);
            const _0x277f37 = _0x18e0e8.enemies.filter(_0x5e879f => _0x5e879f !== _0x23b0fd && !_0x5e879f.dead).filter(_0x8097bd => {
              const _0x210e14 = W(_0x8097bd.distance, _0x8097bd.route);
              return Math.hypot(_0x210e14.x - _0x15d319.x, _0x210e14.y - _0x15d319.y) <= _0x1d79a6.range;
            }).sort((_0x1dc1d4, _0x1a1294) => _0x1a1294.distance - _0x1dc1d4.distance).slice(0, 2);
            while (_0x277f37.length < 2) {
              _0x277f37.push(_0x23b0fd);
            }
            _0x277f37.forEach((_0x4da27b, _0x5ef42d) => {
              const _0x22c483 = W(_0x4da27b.distance, _0x4da27b.route);
              _0x18e0e8.projectiles.push({
                ..._0x5a6889,
                x: _0x1aab75 + (_0x5ef42d ? 7 : -7),
                y: _0x10b4b0 + 5 + _0x5ef42d * 5,
                startX: _0x1aab75 + (_0x5ef42d ? 7 : -7),
                startY: _0x10b4b0 + 5 + _0x5ef42d * 5,
                target: _0x4da27b,
                damage: _0x5a6889.damage * 0.58,
                totalDistance: Math.max(1, Math.hypot(_0x22c483.x - _0x1aab75, _0x22c483.y - 28 - _0x10b4b0)),
                age: (_0x5ef42d + 1) * -0.04
              });
            });
          }
        })(_0x453f12, _0x3a42df, _0x30aa8c);
      }
    });
    _0x18e0e8.projectiles.forEach(_0x31bf23 => {
      if (!_0x31bf23.alive || _0x31bf23.target.dead) {
        _0x31bf23.alive = false;
        return;
      }
      const _0x18d47c = W(_0x31bf23.target.distance, _0x31bf23.target.route);
      const _0x25cc52 = _0x18d47c.x - _0x31bf23.x;
      const _0x1f07db = _0x18d47c.y - 28 - _0x31bf23.y;
      const _0x3d5207 = Math.hypot(_0x25cc52, _0x1f07db);
      const _0x93c974 = _0x31bf23.speed * _0x2609dd;
      _0x31bf23.age = (_0x31bf23.age || 0) + _0x2609dd;
      _0x31bf23.angle = Math.atan2(_0x1f07db, _0x25cc52);
      if (_0x3d5207 <= _0x93c974 + 6) {
        _0x31bf23.alive = false;
        _0x498daa(_0x31bf23, _0x30aa8c);
        return;
      }
      _0x31bf23.x += _0x25cc52 / _0x3d5207 * _0x93c974;
      _0x31bf23.y += _0x1f07db / _0x3d5207 * _0x93c974;
    });
    _0x18e0e8.effects.forEach(_0x5e8f4e => {
      _0x5e8f4e.life -= _0x2609dd;
    });
    _0x18e0e8.defeatedUnits.forEach(_0x3fe049 => {
      _0x3fe049.life -= _0x2609dd;
    });
    _0x18e0e8.enemies = _0x18e0e8.enemies.filter(_0x125efa => !_0x125efa.dead);
    _0x18e0e8.defeatedUnits = _0x18e0e8.defeatedUnits.filter(_0x2a0b51 => _0x2a0b51.life > 0);
    _0x18e0e8.projectiles = _0x18e0e8.projectiles.filter(_0x2ecf28 => _0x2ecf28.alive);
    _0x18e0e8.enemyProjectiles = _0x18e0e8.enemyProjectiles.filter(_0x41aca7 => _0x41aca7.alive);
    _0x18e0e8.effects = _0x18e0e8.effects.filter(_0x54e6aa => _0x54e6aa.life > 0);
    if (_0x18e0e8.lives <= 0) {
      _0x12f9ed();
    } else if (_0x18e0e8.waveActive && !_0x18e0e8.spawnQueue.length && !_0x18e0e8.enemies.length && (_0x18e0e8.waveActive = false, ["tide", "bridge", "storm", "boiler"].includes(S.mechanic) && (_0x18e0e8.mechanicActive = false), _0x18e0e8.mapStateLabel = "波次结束 · 等待地图变化", _0x18e0e8.wave >= _0x18e0e8.maxWaves)) {
      _0x18e0e8.status = "won";
      _0x5d4f79.play("victory");
      _0x3a8789(true, lS());
    }
    _0x395a8e();
  }
  function _0x2a7979() {
    var _0x11ca63;
    _0x503e3c.clearRect(0, 0, Z.width, Z.height);
    if (!p1 && (_0x11ca63 = _0x54dc86.background) != null && _0x11ca63.complete && _0x54dc86.background.naturalWidth > 0) {
      _0x503e3c.drawImage(_0x54dc86.background, 0, 0, Z.width, Z.height);
      return;
    }
    _0x503e3c.lineCap = "round";
    _0x503e3c.lineJoin = "round";
    const _0x4bb3dc = p1 ? S.routes : S.drawRoutes || Object.keys(S1);
    function _0x11a793(_0x527efc) {
      if (_0x527efc != null && _0x527efc.length && (_0x503e3c.moveTo(_0x527efc[0].x, _0x527efc[0].y), _0x527efc.length !== 1)) {
        for (let _0x3dd64c = 1; _0x3dd64c < _0x527efc.length - 1; _0x3dd64c += 1) {
          const _0x3e0ad5 = _0x527efc[_0x3dd64c];
          const _0x34965a = _0x527efc[_0x3dd64c + 1];
          _0x503e3c.quadraticCurveTo(_0x3e0ad5.x, _0x3e0ad5.y, (_0x3e0ad5.x + _0x34965a.x) / 2, (_0x3e0ad5.y + _0x34965a.y) / 2);
        }
        _0x503e3c.lineTo(_0x527efc.at(-1).x, _0x527efc.at(-1).y);
      }
    }
    function _0x34fd2e(_0x280b22, _0x533c16, _0xf47982) {
      _0x503e3c.strokeStyle = _0x280b22;
      _0x503e3c.lineWidth = _0x533c16;
      _0x503e3c.setLineDash(_0xf47982 || []);
      _0x4bb3dc.map(_0x4fc7f0 => S1[_0x4fc7f0]).forEach(_0x1e5a97 => {
        _0x503e3c.beginPath();
        _0x11a793(_0x1e5a97);
        _0x503e3c.stroke();
      });
    }
    const _0x514eb8 = ct[F];
    const _0x26187c = _0x514eb8.road;
    _0x34fd2e(_0x26187c.shadow, 92);
    _0x34fd2e(_0x26187c.edge, 76);
    _0x34fd2e(_0x26187c.surface, 58);
    _0x34fd2e(_0x26187c.highlight, 3);
    _0x34fd2e(_0x26187c.detail, 3, [18, 13]);
    _0x503e3c.setLineDash([]);
    const _0x1bcfe2 = [];
    function _0x368c09(_0x37e921) {
      return S.routes.map(_0x1c9a7e => function (_0x346d42, _0x282da7) {
        const _0x3ae628 = _0x282da7 ? _0x346d42[0] : _0x346d42.at(-1);
        const _0x316d3a = _0x282da7 ? _0x346d42[1] : _0x346d42.at(-2);
        if (_0x3ae628.x < 0 || _0x3ae628.x > Z.width) {
          const _0x17e176 = ((_0x3ae628.x < 0 ? 0 : Z.width) - _0x3ae628.x) / (_0x316d3a.x - _0x3ae628.x);
          return {
            x: _0x3ae628.x < 0 ? 22 : Z.width - 30,
            y: _0x3ae628.y + (_0x316d3a.y - _0x3ae628.y) * _0x17e176,
            edge: _0x3ae628.x < 0 ? "left" : "right"
          };
        }
        const _0x4bacd1 = ((_0x3ae628.y < 0 ? 0 : Z.height) - _0x3ae628.y) / (_0x316d3a.y - _0x3ae628.y);
        return {
          x: _0x3ae628.x + (_0x316d3a.x - _0x3ae628.x) * _0x4bacd1,
          y: _0x3ae628.y < 0 ? 22 : Z.height - 22,
          edge: _0x3ae628.y < 0 ? "top" : "bottom"
        };
      }(S1[_0x1c9a7e], _0x37e921)).filter((_0x1d6401, _0x184f77, _0x3fa51f) => _0x3fa51f.findIndex(_0x1c2171 => Math.hypot(_0x1c2171.x - _0x1d6401.x, _0x1c2171.y - _0x1d6401.y) < 42) === _0x184f77);
    }
    _0x4bb3dc.forEach((_0x441c2e, _0x34dd06) => {
      const _0x3f653a = s1[_0x441c2e];
      if (_0x3f653a) {
        for (let _0x5703d4 = 72 + _0x34dd06 * 19; _0x5703d4 < _0x3f653a.total - 52; _0x5703d4 += 112) {
          const _0x6f5d84 = m2(_0x3f653a, _0x5703d4);
          if (!(_0x6f5d84.x < 22) && !(_0x6f5d84.x > Z.width - 22) && !(_0x6f5d84.y < 22) && !(_0x6f5d84.y > Z.height - 22) && !_0x1bcfe2.some(_0x1e5ab4 => Math.hypot(_0x1e5ab4.x - _0x6f5d84.x, _0x1e5ab4.y - _0x6f5d84.y) < 45)) {
            _0x1bcfe2.push(_0x6f5d84);
          }
        }
      }
    });
    _0x1bcfe2.forEach((_0x28596a, _0x1e96ba) => {
      const _0x223771 = Math.atan2(_0x28596a.dy, _0x28596a.dx);
      _0x503e3c.save();
      _0x503e3c.translate(_0x28596a.x, _0x28596a.y);
      _0x503e3c.rotate(_0x223771);
      _0x503e3c.lineCap = "round";
      if (_0x514eb8.motif === "wave") {
        _0x503e3c.strokeStyle = _0x1e96ba % 2 ? "rgba(49, 134, 139, .52)" : "rgba(236, 221, 154, .58)";
        _0x503e3c.lineWidth = 3;
        _0x503e3c.beginPath();
        _0x503e3c.arc(-8, 2, 9, Math.PI, Math.PI * 1.86);
        _0x503e3c.arc(8, 2, 9, Math.PI, Math.PI * 1.86);
        _0x503e3c.stroke();
      } else if (_0x514eb8.motif === "crack") {
        _0x503e3c.strokeStyle = "rgba(83, 61, 54, .58)";
        _0x503e3c.lineWidth = 2;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(-13, -5);
        _0x503e3c.lineTo(-3, 1);
        _0x503e3c.lineTo(4, -4);
        _0x503e3c.lineTo(13, 5);
        _0x503e3c.moveTo(-3, 1);
        _0x503e3c.lineTo(-6, 9);
        _0x503e3c.stroke();
        _0x503e3c.fillStyle = "#d2a756";
        _0x503e3c.beginPath();
        _0x503e3c.arc(18, -8, 2.5, 0, Math.PI * 2);
        _0x503e3c.fill();
      } else if (_0x514eb8.motif === "rivets") {
        _0x503e3c.strokeStyle = "rgba(48, 76, 88, .54)";
        _0x503e3c.lineWidth = 2;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(0, -22);
        _0x503e3c.lineTo(0, 22);
        _0x503e3c.stroke();
        _0x503e3c.fillStyle = _0x1e96ba % 3 == 0 ? "#83e7f2" : "#d1dadd";
        [-18, 18].forEach(_0x470449 => {
          _0x503e3c.beginPath();
          _0x503e3c.arc(0, _0x470449, 3, 0, Math.PI * 2);
          _0x503e3c.fill();
        });
      } else if (_0x514eb8.motif === "forge") {
        _0x503e3c.strokeStyle = "rgba(38, 42, 40, .66)";
        _0x503e3c.lineWidth = 3;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(0, -24);
        _0x503e3c.lineTo(0, 24);
        _0x503e3c.stroke();
        _0x503e3c.fillStyle = _0x1e96ba % 2 ? "#e98a49" : "#6ed2d7";
        [-18, 18].forEach(_0x10fec4 => {
          _0x503e3c.beginPath();
          _0x503e3c.arc(0, _0x10fec4, 3.2, 0, Math.PI * 2);
          _0x503e3c.fill();
        });
      } else if (_0x514eb8.motif === "bone") {
        _0x503e3c.strokeStyle = _0x1e96ba % 3 == 0 ? "rgba(84, 156, 145, .7)" : "rgba(241, 225, 180, .68)";
        _0x503e3c.lineWidth = 4;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(-4, -24);
        _0x503e3c.quadraticCurveTo(5, -12, 2, 0);
        _0x503e3c.quadraticCurveTo(-2, 12, 5, 24);
        _0x503e3c.stroke();
      } else {
        _0x503e3c.strokeStyle = "#a87345";
        _0x503e3c.lineWidth = 4;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(0, -24);
        _0x503e3c.lineTo(0, 24);
        _0x503e3c.stroke();
        _0x503e3c.fillStyle = "#d4a66c";
        [-19, 19].forEach(_0x37a935 => {
          _0x503e3c.beginPath();
          _0x503e3c.arc(0, _0x37a935, 3, 0, Math.PI * 2);
          _0x503e3c.fill();
        });
        _0x503e3c.strokeStyle = "rgba(220, 244, 237, .5)";
        _0x503e3c.lineWidth = 2;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(-14, -9);
        _0x503e3c.lineTo(16, -9);
        _0x503e3c.stroke();
      }
      _0x503e3c.restore();
    });
    Object.entries({
      westDetour: "#c78873",
      northDetour: "#c78873",
      airlane: "#a6ecf3",
      cloudloop: "#c8bdf2",
      coolant: "#82dfe2",
      furnace: "#ee9b58",
      elite: "#e1bd61",
      boneTunnel: "#78b9a6",
      pressure: "#e58b5d"
    }).forEach(([_0x2c81fd, _0x58fe5e]) => {
      if (!!S1[_0x2c81fd] && !!_0x4bb3dc.includes(_0x2c81fd)) {
        _0x503e3c.strokeStyle = _0x58fe5e;
        _0x503e3c.lineWidth = 5;
        _0x503e3c.setLineDash([10, 12]);
        _0x503e3c.beginPath();
        _0x11a793(S1[_0x2c81fd]);
        _0x503e3c.stroke();
      }
    });
    _0x503e3c.setLineDash([]);
    Object.keys(_0x18e0e8.routeSpeedModifiers).forEach(_0x718eb9 => {
      if (S1[_0x718eb9]) {
        _0x503e3c.save();
        _0x503e3c.globalAlpha = 0.68 + Math.sin(performance.now() * 0.005) * 0.16;
        _0x503e3c.strokeStyle = "#b9fff6";
        _0x503e3c.lineWidth = 9;
        _0x503e3c.setLineDash([15, 11]);
        _0x503e3c.beginPath();
        _0x11a793(S1[_0x718eb9]);
        _0x503e3c.stroke();
        _0x503e3c.restore();
      }
    });
    _0x503e3c.setLineDash([]);
    if (!p1) {
      _0x368c09(true).forEach(function (_0x2b70f9) {
        const _0x45714e = _0x2b70f9.edge === "top" ? Math.PI / 2 : _0x2b70f9.edge === "bottom" ? -Math.PI / 2 : _0x2b70f9.edge === "right" ? Math.PI : 0;
        _0x503e3c.save();
        _0x503e3c.translate(_0x2b70f9.x, _0x2b70f9.y);
        _0x503e3c.rotate(_0x45714e);
        _0x503e3c.shadowColor = "#8c6ed7";
        _0x503e3c.shadowBlur = 18;
        _0x503e3c.fillStyle = "#192b35";
        _0x503e3c.strokeStyle = "#b69762";
        _0x503e3c.lineWidth = 6;
        _0x503e3c.beginPath();
        _0x503e3c.ellipse(0, 0, 29, 45, 0, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.stroke();
        _0x503e3c.strokeStyle = "#8b75d8";
        _0x503e3c.lineWidth = 5;
        _0x503e3c.beginPath();
        _0x503e3c.ellipse(2, 0, 16, 31, 0, 0, Math.PI * 2);
        _0x503e3c.stroke();
        _0x503e3c.fillStyle = "#b6a1ff";
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(29, 0);
        _0x503e3c.lineTo(47, -10);
        _0x503e3c.lineTo(47, 10);
        _0x503e3c.closePath();
        _0x503e3c.fill();
        _0x503e3c.restore();
      });
      _0x4f6489 = _0x368c09(false)[0];
      _0x503e3c.save();
      _0x503e3c.translate(_0x4f6489.x, _0x4f6489.y);
      _0x503e3c.shadowColor = "#6ff6ed";
      _0x503e3c.shadowBlur = 20;
      _0x503e3c.fillStyle = "#263f48";
      _0x503e3c.strokeStyle = "#d0ad63";
      _0x503e3c.lineWidth = 6;
      _0x503e3c.beginPath();
      _0x503e3c.roundRect(-28, -48, 56, 96, 13);
      _0x503e3c.fill();
      _0x503e3c.stroke();
      _0x503e3c.fillStyle = "#65e3db";
      _0x503e3c.beginPath();
      _0x503e3c.moveTo(0, -37);
      _0x503e3c.lineTo(16, -12);
      _0x503e3c.lineTo(10, 24);
      _0x503e3c.lineTo(-10, 24);
      _0x503e3c.lineTo(-16, -12);
      _0x503e3c.closePath();
      _0x503e3c.fill();
      _0x503e3c.strokeStyle = "#d8ffff";
      _0x503e3c.lineWidth = 3;
      _0x503e3c.stroke();
      _0x503e3c.shadowBlur = 0;
      _0x503e3c.fillStyle = "#d0ad63";
      _0x503e3c.fillRect(-37, 34, 74, 10);
      _0x503e3c.restore();
    }
    if (!p1 && S.mechanic === "tide" && _0x18e0e8.mechanicActive) {
      _0x503e3c.strokeStyle = "rgba(55, 143, 151, .78)";
      _0x503e3c.lineWidth = 58;
      _0x503e3c.setLineDash([22, 14]);
      _0x503e3c.beginPath();
      _0x11a793(S1.lower.slice(2, 6));
      _0x503e3c.stroke();
      _0x503e3c.setLineDash([]);
    }
    if (!p1 && S.mechanic === "bridge") {
      const _0x5b4343 = Math.atan2(65, 145);
      _0x503e3c.save();
      _0x503e3c.translate(648, 297);
      _0x503e3c.rotate(_0x5b4343);
      _0x503e3c.fillStyle = _0x18e0e8.mechanicActive ? "#b45443" : "#c29b56";
      _0x503e3c.fillRect(-66, -28, 132, 56);
      _0x503e3c.strokeStyle = "#273e42";
      _0x503e3c.lineWidth = 7;
      _0x503e3c.strokeRect(-66, -28, 132, 56);
      _0x503e3c.strokeStyle = "rgba(245, 224, 169, .62)";
      _0x503e3c.lineWidth = 3;
      for (let _0x2778ed = -48; _0x2778ed <= 48; _0x2778ed += 24) {
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(_0x2778ed, -24);
        _0x503e3c.lineTo(_0x2778ed, 24);
        _0x503e3c.stroke();
      }
      if (_0x18e0e8.mechanicActive) {
        _0x503e3c.strokeStyle = "#f0d0a2";
        _0x503e3c.lineWidth = 6;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(-25, -18);
        _0x503e3c.lineTo(25, 18);
        _0x503e3c.moveTo(25, -18);
        _0x503e3c.lineTo(-25, 18);
        _0x503e3c.stroke();
      }
      _0x503e3c.restore();
    }
    var _0x4f6489;
    if (!p1 && S.mechanic === "foundry") {
      _0x503e3c.fillStyle = _0x18e0e8.mechanicActive ? "rgba(255, 126, 56, .2)" : "rgba(135, 229, 238, .16)";
      _0x503e3c.fillRect(0, 0, Z.width, Z.height);
    }
    if (!p1 && S.mechanic === "crystal") {
      _0x503e3c.save();
      _0x503e3c.translate(790, 650);
      _0x503e3c.fillStyle = _0x18e0e8.mechanicUsed ? "#536b70" : "#85f2e8";
      _0x503e3c.shadowColor = "#85f2e8";
      _0x503e3c.shadowBlur = _0x18e0e8.mechanicUsed ? 0 : 22;
      _0x503e3c.beginPath();
      _0x503e3c.moveTo(0, -48);
      _0x503e3c.lineTo(28, -8);
      _0x503e3c.lineTo(15, 35);
      _0x503e3c.lineTo(-18, 35);
      _0x503e3c.lineTo(-30, -8);
      _0x503e3c.closePath();
      _0x503e3c.fill();
      _0x503e3c.restore();
    }
    if (!p1 && S.mechanic === "boiler") {
      _0x503e3c.save();
      _0x503e3c.translate(575, 72);
      _0x503e3c.fillStyle = _0x18e0e8.mechanicActive ? "#de7f42" : "#53696d";
      _0x503e3c.beginPath();
      _0x503e3c.arc(0, 0, 38, 0, Math.PI * 2);
      _0x503e3c.fill();
      _0x503e3c.strokeStyle = "#d7b36a";
      _0x503e3c.lineWidth = 7;
      _0x503e3c.stroke();
      _0x503e3c.fillStyle = "#243c42";
      _0x503e3c.beginPath();
      _0x503e3c.arc(0, -4, 13, 0, Math.PI * 2);
      _0x503e3c.fill();
      _0x503e3c.strokeStyle = _0x18e0e8.mechanicActive ? "#ffd07b" : "#8eddd6";
      _0x503e3c.lineWidth = 3;
      _0x503e3c.beginPath();
      _0x503e3c.moveTo(0, -4);
      _0x503e3c.lineTo(_0x18e0e8.mechanicActive ? 9 : -6, -10);
      _0x503e3c.stroke();
      _0x503e3c.strokeStyle = "#d7b36a";
      _0x503e3c.lineWidth = 6;
      _0x503e3c.beginPath();
      _0x503e3c.moveTo(-38, 10);
      _0x503e3c.lineTo(-54, 10);
      _0x503e3c.lineTo(-54, 32);
      _0x503e3c.moveTo(38, 10);
      _0x503e3c.lineTo(54, 10);
      _0x503e3c.lineTo(54, 32);
      _0x503e3c.stroke();
      _0x503e3c.restore();
      _0x503e3c.fillStyle = _0x18e0e8.mechanicActive ? "rgba(255, 217, 153, .28)" : "rgba(223, 240, 238, .12)";
      for (let _0x3d9025 = 80; _0x3d9025 < Z.width; _0x3d9025 += 185) {
        _0x503e3c.beginPath();
        _0x503e3c.arc(_0x3d9025, 90 + _0x3d9025 % 3 * 120, 70, 0, Math.PI * 2);
        _0x503e3c.fill();
      }
    }
  }
  function _0x147a57() {
    if (F1[F] || p1) {
      return;
    }
    const _0x127377 = _0x5f5187 => S.routes.map(_0x2d26e1 => function (_0x5bdbd8, _0x297de6) {
      const _0x2a0249 = _0x297de6 ? _0x5bdbd8[0] : _0x5bdbd8.at(-1);
      const _0x48e8f6 = _0x297de6 ? _0x5bdbd8[1] : _0x5bdbd8.at(-2);
      if (_0x2a0249.x < 0 || _0x2a0249.x > Z.width) {
        const _0x10d672 = ((_0x2a0249.x < 0 ? 0 : Z.width) - _0x2a0249.x) / (_0x48e8f6.x - _0x2a0249.x);
        return {
          x: _0x2a0249.x < 0 ? 22 : Z.width - 30,
          y: _0x2a0249.y + (_0x48e8f6.y - _0x2a0249.y) * _0x10d672,
          edge: _0x2a0249.x < 0 ? "left" : "right"
        };
      }
      const _0x3532fa = ((_0x2a0249.y < 0 ? 0 : Z.height) - _0x2a0249.y) / (_0x48e8f6.y - _0x2a0249.y);
      return {
        x: _0x2a0249.x + (_0x48e8f6.x - _0x2a0249.x) * _0x3532fa,
        y: _0x2a0249.y < 0 ? 22 : Z.height - 22,
        edge: _0x2a0249.y < 0 ? "top" : "bottom"
      };
    }(S1[_0x2d26e1], _0x5f5187)).filter((_0x366673, _0x5e6400, _0x468efe) => _0x468efe.findIndex(_0x48b63b => Math.hypot(_0x48b63b.x - _0x366673.x, _0x48b63b.y - _0x366673.y) < 42) === _0x5e6400);
    _0x127377(true).forEach(_0x39609f => {
      const _0x4edd28 = _0x39609f.edge === "top" ? Math.PI / 2 : _0x39609f.edge === "bottom" ? -Math.PI / 2 : _0x39609f.edge === "right" ? Math.PI : 0;
      _0x503e3c.save();
      _0x503e3c.translate(_0x39609f.x, _0x39609f.y);
      _0x503e3c.rotate(_0x4edd28);
      _0x503e3c.shadowColor = "#8c6ed7";
      _0x503e3c.shadowBlur = 18;
      _0x503e3c.fillStyle = "#192b35";
      _0x503e3c.strokeStyle = "#b69762";
      _0x503e3c.lineWidth = 6;
      _0x503e3c.beginPath();
      _0x503e3c.ellipse(0, 0, 29, 45, 0, 0, Math.PI * 2);
      _0x503e3c.fill();
      _0x503e3c.stroke();
      _0x503e3c.strokeStyle = "#8b75d8";
      _0x503e3c.lineWidth = 5;
      _0x503e3c.beginPath();
      _0x503e3c.ellipse(2, 0, 16, 31, 0, 0, Math.PI * 2);
      _0x503e3c.stroke();
      _0x503e3c.fillStyle = "#b6a1ff";
      _0x503e3c.beginPath();
      _0x503e3c.moveTo(29, 0);
      _0x503e3c.lineTo(47, -10);
      _0x503e3c.lineTo(47, 10);
      _0x503e3c.closePath();
      _0x503e3c.fill();
      _0x503e3c.restore();
    });
    const _0x3c76fa = _0x127377(false)[0];
    if (_0x3c76fa) {
      _0x503e3c.save();
      _0x503e3c.translate(_0x3c76fa.x, _0x3c76fa.y);
      _0x503e3c.shadowColor = "#6ff6ed";
      _0x503e3c.shadowBlur = 20;
      _0x503e3c.fillStyle = "#263f48";
      _0x503e3c.strokeStyle = "#d0ad63";
      _0x503e3c.lineWidth = 6;
      _0x503e3c.beginPath();
      _0x503e3c.roundRect(-28, -48, 56, 96, 13);
      _0x503e3c.fill();
      _0x503e3c.stroke();
      _0x503e3c.fillStyle = "#65e3db";
      _0x503e3c.beginPath();
      _0x503e3c.moveTo(0, -37);
      _0x503e3c.lineTo(16, -12);
      _0x503e3c.lineTo(10, 24);
      _0x503e3c.lineTo(-10, 24);
      _0x503e3c.lineTo(-16, -12);
      _0x503e3c.closePath();
      _0x503e3c.fill();
      _0x503e3c.strokeStyle = "#d8ffff";
      _0x503e3c.lineWidth = 3;
      _0x503e3c.stroke();
      _0x503e3c.shadowBlur = 0;
      _0x503e3c.fillStyle = "#d0ad63";
      _0x503e3c.fillRect(-37, 34, 74, 10);
      _0x503e3c.restore();
    }
  }
  function _0x5e3d1d(_0x109cee, _0x34917a) {
    const _0x23adf8 = _0x18e0e8.towers.some(_0x956903 => _0x956903.padIndex === _0x34917a);
    const _0x368497 = _0x18e0e8.selectedPad === _0x34917a || _0x18e0e8.hoveredPad === _0x34917a;
    const _0x2633af = ct[F].pad;
    if (F1[F]) {
      if (!_0x368497) {
        return;
      }
      _0x503e3c.save();
      _0x503e3c.translate(_0x109cee.x, _0x109cee.y);
      _0x503e3c.fillStyle = _0x23adf8 ? "rgba(67, 53, 29, .32)" : "rgba(225, 185, 94, .18)";
      _0x503e3c.strokeStyle = "#e1b95e";
      _0x503e3c.lineWidth = 4;
      _0x503e3c.beginPath();
      _0x503e3c.arc(0, 0, 42, 0, Math.PI * 2);
      _0x503e3c.fill();
      _0x503e3c.stroke();
      _0x503e3c.restore();
      return;
    }
    _0x503e3c.save();
    _0x503e3c.translate(_0x109cee.x, _0x109cee.y);
    _0x503e3c.fillStyle = _0x368497 && !_0x23adf8 ? "rgba(225, 185, 94, .26)" : _0x2633af.shadow;
    _0x503e3c.beginPath();
    _0x503e3c.arc(0, 0, _0x368497 ? 48 : 43, 0, Math.PI * 2);
    _0x503e3c.fill();
    _0x503e3c.fillStyle = _0x23adf8 ? "#46524f" : _0x2633af.fill;
    _0x503e3c.strokeStyle = _0x368497 && !_0x23adf8 ? "#e1b95e" : _0x2633af.rim;
    _0x503e3c.lineWidth = _0x368497 ? 5 : 4;
    _0x503e3c.beginPath();
    _0x503e3c.ellipse(0, 8, 36, 24, 0, 0, Math.PI * 2);
    _0x503e3c.fill();
    _0x503e3c.stroke();
    _0x503e3c.strokeStyle = _0x2633af.inset;
    _0x503e3c.lineWidth = 2;
    _0x503e3c.beginPath();
    _0x503e3c.ellipse(0, 8, 25, 16, 0, 0, Math.PI * 2);
    _0x503e3c.stroke();
    if (!_0x23adf8) {
      _0x503e3c.save();
      _0x503e3c.translate(0, 8);
      _0x503e3c.strokeStyle = _0x2633af.mark;
      _0x503e3c.fillStyle = _0x2633af.mark;
      _0x503e3c.globalAlpha = 0.7;
      _0x503e3c.lineWidth = 2;
      if (F === "double_tide_harbor") {
        _0x503e3c.beginPath();
        _0x503e3c.arc(-7, 2, 7, Math.PI, Math.PI * 1.85);
        _0x503e3c.arc(7, 2, 7, Math.PI, Math.PI * 1.85);
        _0x503e3c.stroke();
      } else if (F === "broken_crown") {
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(-12, 5);
        _0x503e3c.lineTo(-8, -6);
        _0x503e3c.lineTo(0, 0);
        _0x503e3c.lineTo(8, -6);
        _0x503e3c.lineTo(12, 5);
        _0x503e3c.stroke();
      } else if (F === "storm_air_dock") {
        [-17, 17].forEach(_0x5b5491 => [-9, 9].forEach(_0x7fe48f => {
          _0x503e3c.beginPath();
          _0x503e3c.arc(_0x5b5491, _0x7fe48f, 2.2, 0, Math.PI * 2);
          _0x503e3c.fill();
        }));
      } else if (F === "sunken_foundry") {
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(-24, 0);
        _0x503e3c.lineTo(24, 0);
        _0x503e3c.moveTo(0, -14);
        _0x503e3c.lineTo(0, 14);
        _0x503e3c.stroke();
      } else if (F === "leviathan_bone_sea") {
        for (let _0x251c9f = 0; _0x251c9f < Math.PI * 2; _0x251c9f += Math.PI / 3) {
          _0x503e3c.beginPath();
          _0x503e3c.moveTo(Math.cos(_0x251c9f) * 14, Math.sin(_0x251c9f) * 8);
          _0x503e3c.lineTo(Math.cos(_0x251c9f) * 23, Math.sin(_0x251c9f) * 13);
          _0x503e3c.stroke();
        }
      } else {
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 19, 0, Math.PI * 2);
        _0x503e3c.stroke();
        [-1, 1].forEach(_0x53a6fc => {
          _0x503e3c.beginPath();
          _0x503e3c.arc(_0x53a6fc * 18, 0, 2.5, 0, Math.PI * 2);
          _0x503e3c.fill();
        });
      }
      _0x503e3c.restore();
    }
    if (!_0x23adf8) {
      _0x503e3c.strokeStyle = _0x368497 ? "#effffb" : _0x2633af.rim;
      _0x503e3c.lineWidth = 4;
      _0x503e3c.beginPath();
      _0x503e3c.moveTo(-8, 8);
      _0x503e3c.lineTo(8, 8);
      _0x503e3c.moveTo(0, 0);
      _0x503e3c.lineTo(0, 16);
      _0x503e3c.stroke();
    }
    _0x503e3c.restore();
  }
  function _0x3b2800(_0x8478dc) {
    const _0x427289 = Q[_0x8478dc.padIndex];
    const _0x318f2b = H1[_0x8478dc.type];
    const _0xdf4267 = U1(_0x8478dc.type, _0x8478dc.level, _0x8478dc.branch);
    const _0xdef8f0 = _0x54dc86.towers.get(xn(_0x318f2b, _0x8478dc));
    const _0x4450d0 = wS(_0x318f2b, _0x8478dc);
    const _0x3b88a8 = _0x4450d0 ? _0x54dc86.towerAnimations.get(_0x4450d0) : null;
    const _0x2c418 = PS[_0x8478dc.type] || 0.79;
    const _0x29baf6 = performance.now() - (_0x8478dc.animationStartedAt || 0);
    const _0xe77065 = _0x8478dc.type === "cannon" ? 85 : 70;
    const _0x1ef77f = _0xe77065 * 8;
    const _0x3bf259 = _0x3b88a8 != null && !!_0x3b88a8.complete && !!_0x3b88a8.naturalWidth;
    const _0x388df4 = _0x3bf259 ? {
      x: 0,
      y: 0,
      rotation: 0
    } : TS(_0x8478dc.type, _0x29baf6, _0x1ef77f);
    if (_0x18e0e8.selectedPad === _0x8478dc.padIndex || _0x18e0e8.hoveredPad === _0x8478dc.padIndex) {
      _0x503e3c.strokeStyle = "rgba(231, 195, 105, .72)";
      _0x503e3c.lineWidth = 3;
      _0x503e3c.beginPath();
      _0x503e3c.arc(_0x427289.x, _0x427289.y, _0xdf4267.range, 0, Math.PI * 2);
      _0x503e3c.stroke();
      _0x503e3c.fillStyle = "rgba(219, 175, 77, .07)";
      _0x503e3c.fill();
    }
    const _0x32b098 = performance.now() / 1000;
    if ((_0x8478dc.resonanceUntil || 0) > _0x32b098) {
      _0x503e3c.save();
      _0x503e3c.translate(_0x427289.x, _0x427289.y + 5);
      _0x503e3c.strokeStyle = "rgba(214, 166, 242, .78)";
      _0x503e3c.lineWidth = 3;
      for (let _0x58f682 = 0; _0x58f682 < 3; _0x58f682 += 1) {
        const _0x183324 = (_0x32b098 * 1.8 + _0x58f682 / 3) % 1;
        _0x503e3c.globalAlpha = 1 - _0x183324;
        _0x503e3c.beginPath();
        _0x503e3c.ellipse(0, 0, 34 + _0x183324 * 45, 15 + _0x183324 * 18, 0, 0, Math.PI * 2);
        _0x503e3c.stroke();
      }
      _0x503e3c.restore();
    }
    _0x503e3c.save();
    _0x503e3c.translate(_0x427289.x + _0x388df4.x, _0x427289.y + _0x388df4.y);
    _0x503e3c.rotate(_0x388df4.rotation);
    if (_0x3bf259) {
      const _0x35746d = _0x29baf6 >= 0 && _0x29baf6 < _0xe77065 * 8 ? Math.min(7, Math.floor(_0x29baf6 / _0xe77065)) : 0;
      const _0x584a92 = 112;
      _0x503e3c.drawImage(_0x3b88a8, _0x35746d * 384, 0, 384, 384, -_0x584a92 / 2, -_0x584a92 * _0x2c418, _0x584a92, _0x584a92);
    } else if (_0xdef8f0.complete && _0xdef8f0.naturalWidth) {
      const _0xecf721 = _0x8478dc.type === "barracks" ? 104 : 112;
      _0x503e3c.drawImage(_0xdef8f0, -_0xecf721 / 2, -_0xecf721 * _0x2c418, _0xecf721, _0xecf721);
    } else {
      _0x503e3c.fillStyle = _0xdf4267.projectile;
      _0x503e3c.fillRect(-18, -42, 36, 42);
    }
    _0x503e3c.restore();
  }
  function _0x31d454(_0x4f5b38) {
    const _0x9e0d6c = _0x4f5b38.state === "dead";
    const _0x227fad = performance.now() - (_0x4f5b38.deathStartedAt || 0);
    if (_0x9e0d6c && _0x227fad >= 704) {
      return;
    }
    _0x503e3c.save();
    if (_0x4f5b38.flash > 0) {
      _0x503e3c.globalAlpha = 0.55;
    }
    _0x503e3c.fillStyle = "rgba(15, 28, 29, .32)";
    _0x503e3c.beginPath();
    _0x503e3c.ellipse(_0x4f5b38.x, _0x4f5b38.y + 8, 15, 6, 0, 0, Math.PI * 2);
    _0x503e3c.fill();
    const _0x1306c3 = performance.now() - (_0x4f5b38.animationStartedAt || 0);
    const _0x208e37 = _0x9e0d6c ? "death" : _0x1306c3 >= 0 && _0x1306c3 < 624 ? "attack" : "move";
    const _0x43e2cb = _0x54dc86.guardAnimations.get(_0x208e37);
    if (_0x43e2cb != null && _0x43e2cb.complete && _0x43e2cb.naturalWidth) {
      const _0x541c26 = _0x208e37 === "death" ? Math.min(7, Math.floor(_0x227fad / 88)) : _0x208e37 === "attack" ? Math.min(7, Math.floor(_0x1306c3 / 78)) : Math.floor((performance.now() + _0x4f5b38.index * 137) / 105) % 8;
      _0x503e3c.drawImage(_0x43e2cb, _0x541c26 * 384, 0, 384, 384, _0x4f5b38.x - 27, _0x4f5b38.y - 48, 54, 54);
    } else if (_0x54dc86.guard.complete && _0x54dc86.guard.naturalWidth) {
      _0x503e3c.drawImage(_0x54dc86.guard, _0x4f5b38.x - 22, _0x4f5b38.y - 44, 44, 54);
    }
    if (!_0x9e0d6c) {
      _0x503e3c.globalAlpha = 1;
      _0x503e3c.fillStyle = "#17252a";
      _0x503e3c.fillRect(_0x4f5b38.x - 18, _0x4f5b38.y - 50, 36, 6);
      _0x503e3c.fillStyle = _0x4f5b38.health / _0x4f5b38.maxHealth > 0.4 ? "#69d7a0" : "#ed795e";
      _0x503e3c.fillRect(_0x4f5b38.x - 16, _0x4f5b38.y - 48, Math.max(0, _0x4f5b38.health / _0x4f5b38.maxHealth) * 32, 2);
      if (_0x4f5b38.target) {
        _0x503e3c.strokeStyle = "#eacb77";
        _0x503e3c.lineWidth = 2;
        _0x503e3c.beginPath();
        _0x503e3c.arc(_0x4f5b38.x, _0x4f5b38.y - 18, 24, 0, Math.PI * 2);
        _0x503e3c.stroke();
      }
    }
    _0x503e3c.restore();
  }
  function _0x72c26c(_0xa87fcd) {
    var _0x11fad9;
    const _0x2dc6f0 = W(_0xa87fcd.distance, _0xa87fcd.route);
    _0x503e3c.save();
    const _0x41e9ba = _0xa87fcd.isBoss ? null : M1[_0xa87fcd.type];
    const _0x32864e = performance.now() - (_0xa87fcd.animationStartedAt || 0);
    const _0x24ddeb = _0x32864e >= 0 && _0x32864e < 624 ? "attack" : "move";
    const _0x50096c = _0xa87fcd.isBoss ? _0x54dc86.dagonAnimations.get(_0x24ddeb) : _0x54dc86.enemyAnimations.get((_0x11fad9 = _0x41e9ba == null ? undefined : _0x41e9ba.animations) == null ? undefined : _0x11fad9[_0x24ddeb]);
    const _0x5e7b9a = _0x50096c != null && _0x50096c.complete && _0x50096c.naturalWidth ? _0x50096c : _0xa87fcd.isBoss ? _0x54dc86.dagon : _0x54dc86.enemies.get(_0xa87fcd.type);
    const _0x5959b2 = _0xa87fcd.isBoss ? 150 : _0xa87fcd.type === "beast" ? 86 : 62;
    const _0x2a1832 = CS.get(_0xa87fcd.spawnSiteId);
    if (_0x2a1832 && _0xa87fcd.distance < _0xa87fcd.spawnGateDistance + _0x5959b2 * 0.9) {
      const _0x5b6433 = m2(s1[_0xa87fcd.route], Math.min(s1[_0xa87fcd.route].total, _0xa87fcd.spawnGateDistance + 8));
      const _0x1c5359 = Math.atan2(_0x5b6433.dy, _0x5b6433.dx);
      _0x503e3c.translate(_0x2a1832.x, _0x2a1832.y);
      _0x503e3c.rotate(_0x1c5359);
      _0x503e3c.beginPath();
      _0x503e3c.rect(-3, -_0x5959b2 * 2.2, _0x5959b2 * 4.4, _0x5959b2 * 4.4);
      _0x503e3c.clip();
      _0x503e3c.rotate(-_0x1c5359);
      _0x503e3c.translate(-_0x2a1832.x, -_0x2a1832.y);
    }
    const _0x58ce5f = rt(_0xa87fcd.route);
    if (_0xa87fcd.distance > _0x58ce5f.distance - _0x5959b2 * 0.95) {
      const _0x3f6f6c = m2(s1[_0xa87fcd.route], _0x58ce5f.distance);
      const _0xfe37e4 = Math.atan2(_0x3f6f6c.dy, _0x3f6f6c.dx);
      _0x503e3c.translate(_0x58ce5f.point.x, _0x58ce5f.point.y);
      _0x503e3c.rotate(_0xfe37e4);
      _0x503e3c.beginPath();
      _0x503e3c.rect(-_0x5959b2 * 2.2, -_0x5959b2 * 2.2, _0x5959b2 * 2.2 + 3, _0x5959b2 * 4.4);
      _0x503e3c.clip();
      _0x503e3c.rotate(-_0xfe37e4);
      _0x503e3c.translate(-_0x58ce5f.point.x, -_0x58ce5f.point.y);
    }
    if (_0xa87fcd.flash > 0) {
      _0x503e3c.globalAlpha = 0.55;
    }
    if (_0x5e7b9a && _0x5e7b9a.complete && _0x5e7b9a.naturalWidth) {
      const _0x4baff5 = performance.now() / 1000;
      const _0xa542fd = _0xa87fcd.type === "ghost" || _0xa87fcd.type === "jet" ? Math.sin(_0x4baff5 * 4.2 + _0xa87fcd.distance * 0.025) * 5 : Math.sin(_0x4baff5 * 2.8 + _0xa87fcd.distance * 0.02) * 1.6;
      const _0x4fd55e = Math.sin(_0x4baff5 * 3.1 + _0xa87fcd.distance * 0.018) * (_0xa87fcd.type === "priest" ? 0.045 : 0.018);
      const _0x3dcfe5 = Math.max(0, Math.min(1, (_0x4baff5 - _0xa87fcd.spawnedAt) / 0.42));
      const _0x196888 = 0.45 + (1 - Math.pow(1 - _0x3dcfe5, 3)) * 0.55;
      _0x503e3c.save();
      _0x503e3c.translate(_0x2dc6f0.x, _0x2dc6f0.y - _0x5959b2 / 2 + 4 + _0xa542fd);
      _0x503e3c.rotate(_0x4fd55e);
      _0x503e3c.globalAlpha *= _0x3dcfe5;
      _0x503e3c.scale(_0x196888, _0x196888);
      if (_0x50096c != null && _0x50096c.complete && _0x50096c.naturalWidth) {
        const _0x19bdb3 = _0x24ddeb === "attack" ? Math.min(7, Math.floor(_0x32864e / 78)) : Math.floor((performance.now() + _0xa87fcd.spawnedAt * 173 + _0xa87fcd.distance * 5) / 105) % 8;
        _0x503e3c.drawImage(_0x50096c, _0x19bdb3 * 384, 0, 384, 384, -_0x5959b2 / 2, -_0x5959b2 / 2, _0x5959b2, _0x5959b2);
      } else {
        _0x503e3c.drawImage(_0x5e7b9a, -_0x5959b2 / 2, -_0x5959b2 / 2, _0x5959b2, _0x5959b2);
      }
      _0x503e3c.restore();
    } else {
      _0x503e3c.fillStyle = "#704d5c";
      _0x503e3c.beginPath();
      _0x503e3c.arc(_0x2dc6f0.x, _0x2dc6f0.y - 22, 22, 0, Math.PI * 2);
      _0x503e3c.fill();
    }
    _0x503e3c.globalAlpha = 1;
    const _0x10e14e = performance.now() / 1000;
    (function (_0xf957d, _0x2091a3, _0x254003, _0x1d4796) {
      const _0x3ed4e8 = _0x2091a3.y - _0x254003 * 0.46;
      const _0x148943 = _0xf957d.isBoss ? 1.35 : _0xf957d.type === "beast" ? 1.12 : 1;
      function _0x543648(_0x1da1cf, _0x1f9c22, _0x1b93d1, _0x2ba701, _0x46b213 = 0) {
        if (_0x1da1cf != null && !!_0x1da1cf.complete && !!_0x1da1cf.naturalWidth) {
          _0x503e3c.save();
          _0x503e3c.translate(_0x2091a3.x, _0x3ed4e8 + _0x46b213);
          _0x503e3c.rotate(_0x1b93d1);
          _0x503e3c.globalAlpha = _0x2ba701;
          _0x503e3c.drawImage(_0x1da1cf, -_0x1f9c22 / 2, -_0x1f9c22 / 2, _0x1f9c22, _0x1f9c22);
          _0x503e3c.restore();
        }
      }
      function _0x4047f4(_0x26d024, _0xa59844, _0x45b2b7, _0x472092, _0x4c3af8 = 0, _0x247aeb = 0) {
        if (_0x26d024 == null || !_0x26d024.complete || !_0x26d024.naturalWidth) {
          return;
        }
        const _0x564f20 = _0xa59844 * _0x26d024.naturalHeight / _0x26d024.naturalWidth;
        _0x503e3c.save();
        _0x503e3c.translate(_0x2091a3.x + _0x4c3af8, _0x3ed4e8 + _0x247aeb);
        _0x503e3c.rotate(_0x45b2b7);
        _0x503e3c.globalAlpha = _0x472092;
        _0x503e3c.drawImage(_0x26d024, 5 - _0xa59844, -_0x564f20 / 2, _0xa59844, _0x564f20);
        _0x503e3c.restore();
      }
      const _0x2019f5 = 0.86 + Math.sin(_0x1d4796 * 8 + _0xf957d.distance * 0.04) * 0.14;
      if (_0xf957d.isBoss && _0xf957d.activeWeakpoint >= 0 && _0xf957d.activeWeakpoint < _0xf957d.weakpoints.length) {
        const _0x1ba305 = _0xf957d.weakpoints[_0xf957d.activeWeakpoint];
        const _0x4e8371 = [{
          x: 0,
          y: -38
        }, {
          x: 34,
          y: -4
        }, {
          x: -36,
          y: 28
        }];
        const _0x3e77ca = _0x4e8371[_0xf957d.activeWeakpoint] || _0x4e8371[0];
        _0x503e3c.save();
        _0x503e3c.translate(_0x2091a3.x + _0x3e77ca.x, _0x3ed4e8 + _0x3e77ca.y);
        _0x503e3c.strokeStyle = _0x1ba305.color;
        _0x503e3c.fillStyle = "rgba(12, 29, 34, .72)";
        _0x503e3c.lineWidth = 3;
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 13 + _0x2019f5 * 3, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.stroke();
        _0x503e3c.rotate(_0x1d4796 * 1.4);
        for (let _0x4e7335 = 0; _0x4e7335 < 4; _0x4e7335 += 1) {
          _0x503e3c.rotate(Math.PI / 2);
          _0x503e3c.beginPath();
          _0x503e3c.moveTo(19, 0);
          _0x503e3c.lineTo(27, 0);
          _0x503e3c.stroke();
        }
        _0x503e3c.restore();
      }
      if (_0xf957d.type === "ghost") {
        _0x503e3c.save();
        _0x503e3c.translate(_0x2091a3.x, _0x3ed4e8 + 5);
        _0x503e3c.strokeStyle = "rgba(180, 154, 255, " + (0.42 + _0x2019f5 * 0.18) + ")";
        _0x503e3c.lineWidth = 2.5;
        _0x503e3c.setLineDash([7, 7]);
        _0x503e3c.beginPath();
        _0x503e3c.ellipse(0, 7, _0x2019f5 * 30, _0x2019f5 * 21, _0x1d4796 * 0.24, 0, Math.PI * 2);
        _0x503e3c.stroke();
        _0x503e3c.restore();
      }
      if (_0xf957d.type === "navigator" && _0xf957d.shielded) {
        _0x503e3c.save();
        _0x503e3c.translate(_0x2091a3.x, _0x3ed4e8 + 4);
        const _0x602282 = _0x503e3c.createRadialGradient(-8, -8, 2, 0, 0, 38);
        _0x602282.addColorStop(0, "rgba(183, 248, 255, .1)");
        _0x602282.addColorStop(0.72, "rgba(74, 193, 219, .16)");
        _0x602282.addColorStop(1, "rgba(74, 193, 219, .58)");
        _0x503e3c.fillStyle = _0x602282;
        _0x503e3c.strokeStyle = _0xf957d.abilityFlash > 0 ? "#fff2b0" : "#72d8e8";
        _0x503e3c.lineWidth = _0xf957d.abilityFlash > 0 ? 4 : 2;
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, _0x2019f5 * 35, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.stroke();
        _0x503e3c.restore();
      }
      if (_0xf957d.healFlash > 0) {
        _0x503e3c.save();
        _0x503e3c.translate(_0x2091a3.x, _0x3ed4e8 + 8);
        _0x503e3c.strokeStyle = "rgba(131, 223, 189, " + Math.min(0.9, _0xf957d.healFlash) + ")";
        _0x503e3c.lineWidth = 3;
        _0x503e3c.beginPath();
        _0x503e3c.ellipse(0, 18, 34 + (1 - _0xf957d.healFlash) * 18, 13, 0, 0, Math.PI * 2);
        _0x503e3c.stroke();
        _0x503e3c.restore();
      }
      if (_0x1d4796 < _0xf957d.fireUntil) {
        const _0x3389b5 = Math.min(1, (_0xf957d.fireUntil - _0x1d4796) * 3);
        const _0x4ff888 = _0x54dc86.trails.get("cannon");
        const _0x37c699 = Math.min(3, Math.max(1, _0xf957d.fireStacks));
        for (let _0x5bfb38 = 0; _0x5bfb38 < _0x37c699; _0x5bfb38 += 1) {
          _0x4047f4(_0x4ff888, _0x148943 * 42, Math.PI / 2 + (_0x5bfb38 - 1) * 0.18, _0x3389b5 * 0.54, (_0x5bfb38 - (_0x37c699 - 1) / 2) * 10, 12);
        }
      }
      if (_0x1d4796 < _0xf957d.conductiveUntil) {
        const _0x1a9ced = Math.min(1, (_0xf957d.conductiveUntil - _0x1d4796) * 4);
        _0x543648(_0x54dc86.impacts.get("storm-impact"), _0x148943 * 50 * _0x2019f5, _0x1d4796 * 0.7, _0x1a9ced * 0.48, 2);
      }
      if (_0x1d4796 < _0xf957d.frostUntil) {
        const _0x2b747c = Math.min(1, (_0xf957d.frostUntil - _0x1d4796) * 3);
        _0x543648(_0x54dc86.impacts.get("frost-impact"), _0x148943 * 58 * _0x2019f5, -_0x1d4796 * 0.24, _0x2b747c * 0.42, 12);
      }
      if (_0x1d4796 < _0xf957d.wetUntil) {
        const _0x4ee89f = Math.min(1, (_0xf957d.wetUntil - _0x1d4796) * 3);
        _0x4047f4(_0x54dc86.trails.get("time"), _0x148943 * 54, _0x1d4796 * 0.35, _0x4ee89f * 0.32, 0, 15);
      }
      if (_0x1d4796 < _0xf957d.timeUntil) {
        const _0x55a2c6 = Math.min(1, (_0xf957d.timeUntil - _0x1d4796) * 3);
        _0x543648(_0x54dc86.impacts.get("resonance-impact"), _0x148943 * 66 * _0x2019f5, _0x1d4796 * 0.28, _0x55a2c6 * 0.36, 10);
      }
      if (_0x1d4796 < _0xf957d.armorBreakUntil) {
        const _0x27bac6 = Math.min(1, (_0xf957d.armorBreakUntil - _0x1d4796) * 4);
        _0x543648(_0x54dc86.impacts.get("anchor-impact"), _0x148943 * 48 * _0x2019f5, -_0x1d4796 * 0.4, _0x27bac6 * 0.4, 0);
      }
    })(_0xa87fcd, _0x2dc6f0, _0x5959b2, _0x10e14e);
    _0x503e3c.fillStyle = "#17252a";
    const _0x57c047 = _0xa87fcd.isBoss ? 110 : 50;
    _0x503e3c.fillRect(_0x2dc6f0.x - _0x57c047 / 2, _0x2dc6f0.y - _0x5959b2 - 5, _0x57c047, 7);
    _0x503e3c.fillStyle = _0xa87fcd.health / _0xa87fcd.maxHealth > 0.45 ? "#70d492" : "#e46d5f";
    _0x503e3c.fillRect(_0x2dc6f0.x - _0x57c047 / 2 + 2, _0x2dc6f0.y - _0x5959b2 - 3, (_0x57c047 - 4) * Math.max(0, _0xa87fcd.health / _0xa87fcd.maxHealth), 3);
    if (_0x10e14e < _0xa87fcd.slowUntil) {
      _0x503e3c.strokeStyle = "#a9eee7";
      _0x503e3c.lineWidth = 2;
      _0x503e3c.beginPath();
      _0x503e3c.arc(_0x2dc6f0.x, _0x2dc6f0.y - 24, 28, 0, Math.PI * 2);
      _0x503e3c.stroke();
    }
    const _0x5dd754 = [];
    if (_0x10e14e < _0xa87fcd.fireUntil) {
      for (let _0x438e17 = 0; _0x438e17 < _0xa87fcd.fireStacks; _0x438e17 += 1) {
        _0x5dd754.push("#ff8b45");
      }
    }
    if (_0x10e14e < _0xa87fcd.frostUntil) {
      for (let _0x1fe2f5 = 0; _0x1fe2f5 < _0xa87fcd.frostStacks; _0x1fe2f5 += 1) {
        _0x5dd754.push("#9cebf0");
      }
    }
    if (_0x10e14e < _0xa87fcd.conductiveUntil) {
      for (let _0x125420 = 0; _0x125420 < _0xa87fcd.conductiveStacks; _0x125420 += 1) {
        _0x5dd754.push("#ffe26d");
      }
    }
    if (_0x10e14e < _0xa87fcd.wetUntil) {
      _0x5dd754.push("#4fc7e8");
    }
    if (_0x10e14e < _0xa87fcd.timeUntil) {
      _0x5dd754.push("#c2a4ff");
    }
    if (_0x10e14e < _0xa87fcd.armorBreakUntil) {
      _0x5dd754.push("#e89ac7");
    }
    const _0x593933 = _0x2dc6f0.x - (_0x5dd754.length - 1) * 8 / 2;
    _0x5dd754.forEach((_0x110104, _0x4e3e5a) => {
      _0x503e3c.fillStyle = _0x110104;
      _0x503e3c.strokeStyle = "#193036";
      _0x503e3c.lineWidth = 2;
      _0x503e3c.beginPath();
      _0x503e3c.arc(_0x593933 + _0x4e3e5a * 8, _0x2dc6f0.y + 9, 4, 0, Math.PI * 2);
      _0x503e3c.fill();
      _0x503e3c.stroke();
    });
    _0x503e3c.restore();
  }
  function _0x1b8c11(_0x2f44bd) {
    const _0x44a3a7 = W(_0x2f44bd.distance, _0x2f44bd.route);
    const _0x110a62 = _0x2f44bd.isBoss ? _0x54dc86.dagonAnimations.get("death") : _0x54dc86.enemyAnimations.get("./generated/all-unit-animations-v1/" + _0x2f44bd.type + "-death/spritesheet.webp");
    if (_0x110a62 == null || !_0x110a62.complete || !_0x110a62.naturalWidth) {
      return;
    }
    const _0x36b428 = performance.now() - _0x2f44bd.startedAt;
    const _0x1de269 = Math.min(7, Math.floor(_0x36b428 / 88));
    const _0x758237 = _0x2f44bd.isBoss ? 150 : _0x2f44bd.type === "beast" ? 86 : 62;
    _0x503e3c.drawImage(_0x110a62, _0x1de269 * 384, 0, 384, 384, _0x44a3a7.x - _0x758237 / 2, _0x44a3a7.y - _0x758237 + 4, _0x758237, _0x758237);
  }
  function _0x2d7236(_0x4952f0) {
    const _0x35dc6f = Math.hypot(_0x4952f0.x - _0x4952f0.startX, _0x4952f0.y - _0x4952f0.startY);
    const _0x483f56 = Math.max(0, Math.min(1, _0x35dc6f / (_0x4952f0.totalDistance || 1)));
    const _0x3c0fa0 = _0x4952f0.towerType === "cannon" ? Math.sin(_0x483f56 * Math.PI) * (_0x4952f0.branch === "meteor" ? 68 : _0x4952f0.branch === "dragon" ? 26 : 42) : 0;
    const _0x34a6e1 = _0x4952f0.y - _0x3c0fa0;
    const _0x48b3bd = _0x4952f0.angle || 0;
    _0x503e3c.save();
    if (_0x4952f0.towerType === "barracks") {
      const _0x211b03 = _0x54dc86.trails.get("barracks");
      const _0x40f15e = _0x4952f0.x - _0x4952f0.startX;
      const _0x32d56 = _0x34a6e1 - _0x4952f0.startY;
      const _0x10114a = Math.hypot(_0x40f15e, _0x32d56);
      if (_0x211b03 != null && _0x211b03.complete && _0x211b03.naturalWidth && _0x10114a > 2) {
        _0x503e3c.save();
        _0x503e3c.translate(_0x4952f0.startX, _0x4952f0.startY);
        _0x503e3c.rotate(Math.atan2(_0x32d56, _0x40f15e));
        _0x503e3c.globalAlpha = 0.28;
        _0x503e3c.drawImage(_0x211b03, 0, -8, _0x10114a, 16);
        _0x503e3c.restore();
      }
    }
    _0x503e3c.translate(_0x4952f0.x, _0x34a6e1);
    _0x503e3c.rotate(_0x48b3bd);
    _0x503e3c.lineCap = "round";
    const _0x31396e = _0x54dc86.trails.get(_0x4952f0.towerType);
    if ((_0x31396e == null ? undefined : _0x31396e.complete) && _0x31396e.naturalWidth) {
      const _0x90c9d = {
        crossbow: 84,
        cannon: 102,
        barracks: 92,
        storm: 96,
        time: 88
      }[_0x4952f0.towerType] || 84;
      const _0x251d73 = _0x90c9d * _0x31396e.naturalHeight / _0x31396e.naturalWidth;
      _0x503e3c.save();
      _0x503e3c.globalAlpha = _0x4952f0.towerType === "cannon" ? 0.95 : 0.86;
      _0x503e3c.shadowColor = _0x4952f0.color;
      _0x503e3c.shadowBlur = _0x4952f0.towerType === "storm" ? 14 : 10;
      _0x503e3c.drawImage(_0x31396e, 8 - _0x90c9d, -_0x251d73 / 2, _0x90c9d, _0x251d73);
      _0x503e3c.restore();
    } else if (_0x4952f0.towerType === "crossbow") {
      _0x503e3c.fillStyle = _0x4952f0.isStarlight ? "rgba(255, 235, 135, .72)" : _0x4952f0.branch === "phantom" ? "rgba(185, 147, 255, .62)" : "rgba(119, 239, 234, .58)";
      for (let _0x3f3cd1 = 0; _0x3f3cd1 < 7; _0x3f3cd1 += 1) {
        _0x503e3c.globalAlpha = 0.18 + _0x3f3cd1 * 0.1;
        _0x503e3c.beginPath();
        _0x503e3c.arc(_0x3f3cd1 * 5.5 - 46, Math.sin(_0x3f3cd1 * 2.1) * 3, 1.5 + _0x3f3cd1 * 0.28, 0, Math.PI * 2);
        _0x503e3c.fill();
      }
    } else if (_0x4952f0.towerType === "cannon") {
      const _0x3c0fe4 = _0x503e3c.createLinearGradient(-52, 0, -8, 0);
      _0x3c0fe4.addColorStop(0, "rgba(255, 71, 19, 0)");
      _0x3c0fe4.addColorStop(0.55, "rgba(255, 89, 20, .5)");
      _0x3c0fe4.addColorStop(1, "rgba(255, 224, 112, .92)");
      _0x503e3c.fillStyle = _0x3c0fe4;
      _0x503e3c.beginPath();
      _0x503e3c.moveTo(-56, 0);
      _0x503e3c.quadraticCurveTo(-34, -10, -8, -4);
      _0x503e3c.lineTo(-8, 5);
      _0x503e3c.quadraticCurveTo(-35, 10, -56, 0);
      _0x503e3c.fill();
    } else if (_0x4952f0.towerType === "storm") {
      _0x503e3c.fillStyle = _0x4952f0.branch === "magnetic" ? "rgba(184, 146, 255, .72)" : "rgba(192, 250, 255, .82)";
      for (let _0x3c38b0 = 0; _0x3c38b0 < 8; _0x3c38b0 += 1) {
        _0x503e3c.beginPath();
        _0x503e3c.arc(_0x3c38b0 * 5 - 43, Math.sin(_0x3c38b0 * 2.7) * 5, 2 + _0x3c38b0 % 2, 0, Math.PI * 2);
        _0x503e3c.fill();
      }
    } else if (_0x4952f0.towerType === "time") {
      _0x503e3c.fillStyle = _0x4952f0.branch === "resonance" ? "rgba(224, 177, 255, .58)" : "rgba(183, 236, 248, .6)";
      for (let _0x5c6ae9 = 0; _0x5c6ae9 < 12; _0x5c6ae9 += 1) {
        const _0x2a2cd4 = _0x5c6ae9 / 12 * Math.PI * 2;
        _0x503e3c.beginPath();
        _0x503e3c.arc(Math.cos(_0x2a2cd4) * 24 - 18, Math.sin(_0x2a2cd4) * 8, 1.8 + _0x5c6ae9 % 3 * 0.4, 0, Math.PI * 2);
        _0x503e3c.fill();
      }
    }
    _0x503e3c.globalAlpha = 1;
    const _0x3772ef = _0x54dc86.projectiles.get(_0x4952f0.variant);
    if (_0x3772ef != null && _0x3772ef.complete && _0x3772ef.naturalWidth) {
      const _0x5077f0 = {
        crossbow: _0x4952f0.isStarlight ? 60 : 56,
        cannon: _0x4952f0.branch === "meteor" ? 70 : 64,
        barracks: 66,
        storm: _0x4952f0.branch === "magnetic" ? 62 : 58,
        time: 54
      }[_0x4952f0.towerType] || 52;
      const _0x50017b = _0x5077f0 / 2;
      _0x503e3c.shadowColor = _0x4952f0.color;
      _0x503e3c.shadowBlur = _0x4952f0.towerType === "cannon" ? 16 : _0x4952f0.towerType === "storm" ? 13 : 10;
      _0x503e3c.drawImage(_0x3772ef, -_0x5077f0 / 2, -_0x50017b / 2, _0x5077f0, _0x50017b);
    } else {
      _0x503e3c.fillStyle = _0x4952f0.color;
      _0x503e3c.shadowColor = _0x4952f0.color;
      _0x503e3c.shadowBlur = 12;
      _0x503e3c.beginPath();
      _0x503e3c.arc(0, 0, _0x4952f0.splash ? 7 : 4, 0, Math.PI * 2);
      _0x503e3c.fill();
    }
    _0x503e3c.restore();
  }
  function _0x382387() {
    _0x2a7979();
    _0x147a57();
    (function () {
      if (!F1[F] || p1 || !W1) {
        return;
      }
      const _0x289965 = performance.now() / 1000;
      it.forEach((_0x2a7c7f, _0x12fd35) => {
        const _0x233f19 = _0x2a7c7f.routes.find(_0x1d5537 => s1[_0x1d5537]);
        if (!_0x233f19) {
          return;
        }
        const _0x5163f2 = _0x2a7c7f.distances[_0x233f19] || 0;
        const _0x2be34b = m2(s1[_0x233f19], Math.min(s1[_0x233f19].total, _0x5163f2 + 8));
        const _0x4dac19 = Math.atan2(_0x2be34b.dy, _0x2be34b.dx);
        const _0x3e3ebb = 0.82 + Math.sin(_0x289965 * 3.4 + _0x12fd35 * 1.7) * 0.12;
        const _0x31fa15 = _0x2a7c7f.radius || 36;
        _0x503e3c.save();
        _0x503e3c.translate(_0x2a7c7f.x, _0x2a7c7f.y);
        _0x503e3c.rotate(_0x4dac19);
        _0x503e3c.globalAlpha = 0.34;
        _0x503e3c.shadowColor = W1.energy;
        _0x503e3c.shadowBlur = _0x3e3ebb * 18;
        const _0x2eceb5 = _0x503e3c.createRadialGradient(0, 0, 4, 0, 0, _0x31fa15 * 1.15);
        _0x2eceb5.addColorStop(0, W1.energy);
        _0x2eceb5.addColorStop(0.5, W1.energy + "66");
        _0x2eceb5.addColorStop(1, "rgba(0, 0, 0, 0)");
        _0x503e3c.fillStyle = _0x2eceb5;
        _0x503e3c.beginPath();
        _0x503e3c.ellipse(0, 0, _0x31fa15 * 0.54, _0x31fa15, 0, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.globalAlpha = 0.66;
        _0x503e3c.strokeStyle = W1.rim;
        _0x503e3c.lineWidth = 3;
        _0x503e3c.beginPath();
        _0x503e3c.ellipse(0, 0, _0x31fa15 * 0.48, _0x31fa15 * 0.92, 0, -Math.PI * 0.72, Math.PI * 0.72);
        _0x503e3c.stroke();
        _0x503e3c.shadowBlur = 0;
        for (let _0x11768a = 0; _0x11768a < 3; _0x11768a += 1) {
          const _0xedcfa3 = (_0x289965 * 0.22 + _0x11768a * 0.31 + _0x12fd35 * 0.17) % 1;
          _0x503e3c.globalAlpha = (1 - _0xedcfa3) * 0.2;
          _0x503e3c.fillStyle = W1.steam;
          _0x503e3c.beginPath();
          _0x503e3c.arc(-6 - _0xedcfa3 * 16, (_0x11768a - 1) * _0x31fa15 * 0.62 - _0xedcfa3 * 10, 5 + _0xedcfa3 * 8, 0, Math.PI * 2);
          _0x503e3c.fill();
        }
        _0x503e3c.restore();
      });
    })();
    (function () {
      const {
        x: _0x4b0907,
        y: _0x2cd49c
      } = j.position;
      const _0x2e0d27 = _0x9edd09();
      const _0x4d9610 = 1 + Math.sin(performance.now() * 0.006) * 0.06;
      if (F1[F] && !p1) {
        if (!_0x2e0d27 && !_0x18e0e8.hoveredInteraction) {
          return;
        }
        const _0xf06716 = ct[F].device;
        _0x503e3c.save();
        _0x503e3c.translate(_0x4b0907, _0x2cd49c);
        _0x503e3c.strokeStyle = _0x18e0e8.hoveredInteraction ? _0xf06716.trim : _0xf06716.energy;
        _0x503e3c.globalAlpha = _0x18e0e8.hoveredInteraction ? 1 : 0.62;
        _0x503e3c.lineWidth = _0x18e0e8.hoveredInteraction ? 5 : 3;
        _0x503e3c.setLineDash(_0x18e0e8.hoveredInteraction ? [] : [9, 7]);
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, ((j.hitRadius || 52) - 4) * _0x4d9610, 0, Math.PI * 2);
        _0x503e3c.stroke();
        _0x503e3c.restore();
        return;
      }
      _0x503e3c.save();
      _0x503e3c.translate(_0x4b0907, _0x2cd49c);
      const _0x42f74a = _0x18e0e8.hoveredInteraction && _0x2e0d27 ? 1.08 : _0x2e0d27 ? _0x4d9610 : 1;
      _0x503e3c.scale(_0x42f74a, _0x42f74a);
      const _0x30adfd = ct[F].device;
      _0x503e3c.globalAlpha = _0x2e0d27 ? 1 : 0.68;
      _0x503e3c.shadowColor = _0x2e0d27 ? _0x30adfd.energy : "transparent";
      _0x503e3c.shadowBlur = _0x2e0d27 ? 20 : 0;
      const _0x46e1dc = _0x30adfd.trim;
      const _0x38310f = _0x30adfd.energy;
      const _0x347bbc = _0x30adfd.metal;
      _0x503e3c.fillStyle = _0x30adfd.base;
      _0x503e3c.strokeStyle = _0x46e1dc;
      _0x503e3c.lineWidth = 4;
      _0x503e3c.beginPath();
      _0x503e3c.ellipse(0, 18, Math.min(52, (j.hitRadius || 52) - 9), 24, 0, 0, Math.PI * 2);
      _0x503e3c.fill();
      _0x503e3c.stroke();
      _0x503e3c.fillStyle = _0x347bbc;
      for (let _0x33cf95 = 0; _0x33cf95 < Math.PI * 2; _0x33cf95 += Math.PI / 4) {
        _0x503e3c.beginPath();
        _0x503e3c.arc(Math.cos(_0x33cf95) * 36, 18 + Math.sin(_0x33cf95) * 15, 2.4, 0, Math.PI * 2);
        _0x503e3c.fill();
      }
      _0x503e3c.strokeStyle = _0x46e1dc;
      _0x503e3c.fillStyle = _0x38310f;
      _0x503e3c.lineWidth = 5;
      _0x503e3c.lineCap = "round";
      if (S.mechanic === "tide") {
        _0x503e3c.fillStyle = _0x347bbc;
        _0x503e3c.fillRect(-44, -25, 88, 55);
        _0x503e3c.strokeStyle = _0x46e1dc;
        _0x503e3c.strokeRect(-44, -25, 88, 55);
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 24, 0, Math.PI * 2);
        _0x503e3c.stroke();
        for (let _0x5503e8 = 0; _0x5503e8 < Math.PI * 2; _0x5503e8 += Math.PI / 4) {
          _0x503e3c.beginPath();
          _0x503e3c.moveTo(Math.cos(_0x5503e8) * 8, Math.sin(_0x5503e8) * 8);
          _0x503e3c.lineTo(Math.cos(_0x5503e8) * 22, Math.sin(_0x5503e8) * 22);
          _0x503e3c.stroke();
        }
        _0x503e3c.fillStyle = _0x38310f;
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 7, 0, Math.PI * 2);
        _0x503e3c.fill();
      } else if (S.mechanic === "bridge") {
        _0x503e3c.fillStyle = _0x347bbc;
        _0x503e3c.beginPath();
        _0x503e3c.arc(45, -34, 24, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.strokeStyle = _0x46e1dc;
        _0x503e3c.stroke();
        _0x503e3c.strokeStyle = _0x38310f;
        for (let _0xa932fc = 0; _0xa932fc < Math.PI * 2; _0xa932fc += Math.PI / 3) {
          _0x503e3c.beginPath();
          _0x503e3c.moveTo(45 + Math.cos(_0xa932fc) * 8, Math.sin(_0xa932fc) * 8 - 34);
          _0x503e3c.lineTo(45 + Math.cos(_0xa932fc) * 20, Math.sin(_0xa932fc) * 20 - 34);
          _0x503e3c.stroke();
        }
        _0x503e3c.strokeStyle = _0x46e1dc;
        _0x503e3c.lineWidth = 8;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(45, -34);
        _0x503e3c.lineTo(66, -63);
        _0x503e3c.stroke();
      } else if (S.mechanic === "storm") {
        _0x503e3c.strokeStyle = _0x46e1dc;
        _0x503e3c.lineWidth = 8;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(0, 35);
        _0x503e3c.lineTo(0, -45);
        _0x503e3c.stroke();
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(-28, 35);
        _0x503e3c.lineTo(28, 35);
        _0x503e3c.stroke();
        _0x503e3c.strokeStyle = _0x38310f;
        _0x503e3c.lineWidth = 5;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(7, -44);
        _0x503e3c.lineTo(-9, -19);
        _0x503e3c.lineTo(3, -19);
        _0x503e3c.lineTo(-7, 8);
        _0x503e3c.lineTo(15, -23);
        _0x503e3c.lineTo(3, -23);
        _0x503e3c.closePath();
        _0x503e3c.fill();
      } else if (S.mechanic === "foundry") {
        _0x503e3c.strokeStyle = _0x46e1dc;
        _0x503e3c.lineWidth = 10;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(-58, 0);
        _0x503e3c.lineTo(58, 0);
        _0x503e3c.stroke();
        _0x503e3c.fillStyle = _0x347bbc;
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 31, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.strokeStyle = _0x46e1dc;
        _0x503e3c.lineWidth = 6;
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 27, 0, Math.PI * 2);
        _0x503e3c.stroke();
        _0x503e3c.strokeStyle = _0x38310f;
        _0x503e3c.lineWidth = 5;
        for (let _0x28bf5d = 0; _0x28bf5d < Math.PI * 2; _0x28bf5d += Math.PI / 3) {
          _0x503e3c.beginPath();
          _0x503e3c.moveTo(Math.cos(_0x28bf5d) * 7, Math.sin(_0x28bf5d) * 7);
          _0x503e3c.lineTo(Math.cos(_0x28bf5d) * 25, Math.sin(_0x28bf5d) * 25);
          _0x503e3c.stroke();
        }
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 7, 0, Math.PI * 2);
        _0x503e3c.fill();
      } else if (S.mechanic === "crystal") {
        _0x503e3c.fillStyle = _0x38310f;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(0, -48);
        _0x503e3c.lineTo(28, -8);
        _0x503e3c.lineTo(15, 35);
        _0x503e3c.lineTo(-18, 35);
        _0x503e3c.lineTo(-30, -8);
        _0x503e3c.closePath();
        _0x503e3c.fill();
        _0x503e3c.strokeStyle = _0x46e1dc;
        _0x503e3c.lineWidth = 5;
        _0x503e3c.stroke();
        _0x503e3c.strokeStyle = "#e7ffff";
        _0x503e3c.lineWidth = 3;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(0, -44);
        _0x503e3c.lineTo(-8, 5);
        _0x503e3c.lineTo(15, 31);
        _0x503e3c.moveTo(-27, -7);
        _0x503e3c.lineTo(-8, 5);
        _0x503e3c.lineTo(25, -7);
        _0x503e3c.stroke();
      } else {
        _0x503e3c.fillStyle = _0x347bbc;
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 32, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.strokeStyle = _0x46e1dc;
        _0x503e3c.lineWidth = 6;
        _0x503e3c.stroke();
        _0x503e3c.strokeStyle = _0x38310f;
        _0x503e3c.lineWidth = 4;
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, 19, Math.PI, Math.PI * 2);
        _0x503e3c.stroke();
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(0, 0);
        _0x503e3c.lineTo(_0x18e0e8.mechanicActive ? 13 : -9, -11);
        _0x503e3c.stroke();
      }
      _0x503e3c.shadowBlur = 0;
      _0x503e3c.globalAlpha = 1;
      const _0x58f4a8 = j.charges;
      const _0x26bfba = (_0x58f4a8 - 1) * -15 / 2;
      for (let _0xd21f0c = 0; _0xd21f0c < _0x58f4a8; _0xd21f0c += 1) {
        _0x503e3c.fillStyle = _0xd21f0c < _0x18e0e8.interactionCharges ? _0x30adfd.energy : "#34494c";
        _0x503e3c.strokeStyle = _0x30adfd.trim;
        _0x503e3c.lineWidth = 2;
        _0x503e3c.beginPath();
        _0x503e3c.arc(_0x26bfba + _0xd21f0c * 15, 48, 5, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.stroke();
      }
      if (_0x2e0d27) {
        _0x503e3c.strokeStyle = _0x18e0e8.hoveredInteraction ? _0x30adfd.trim : _0x30adfd.energy;
        _0x503e3c.globalAlpha = _0x18e0e8.hoveredInteraction ? 1 : 0.72;
        _0x503e3c.lineWidth = _0x18e0e8.hoveredInteraction ? 5 : 3;
        _0x503e3c.setLineDash(_0x18e0e8.hoveredInteraction ? [] : [8, 7]);
        _0x503e3c.beginPath();
        _0x503e3c.arc(0, 0, (j.hitRadius || 52) - 4, 0, Math.PI * 2);
        _0x503e3c.stroke();
        _0x503e3c.setLineDash([]);
        _0x503e3c.globalAlpha = 1;
      }
      _0x503e3c.restore();
    })();
    Q.forEach(_0x5e3d1d);
    _0x18e0e8.towers.forEach(_0x3b2800);
    (function () {
      _0x18e0e8.towers.filter(_0x5f36b0 => _0x5f36b0.type === "barracks").forEach(_0x94b906 => {
        const _0x3a0abb = _0x94b906.rally || Jt(Q[_0x94b906.padIndex]);
        if (!_0x3a0abb) {
          return;
        }
        const _0x5ee053 = W(_0x3a0abb.distance, _0x3a0abb.route);
        _0x503e3c.save();
        _0x503e3c.translate(_0x5ee053.x, _0x5ee053.y);
        _0x503e3c.globalAlpha = _0x18e0e8.rallyTower === _0x94b906 ? 1 : 0.72;
        _0x503e3c.strokeStyle = "#e6c874";
        _0x503e3c.fillStyle = "#e6c874";
        _0x503e3c.lineWidth = 3;
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(0, 10);
        _0x503e3c.lineTo(0, -24);
        _0x503e3c.stroke();
        _0x503e3c.beginPath();
        _0x503e3c.moveTo(2, -22);
        _0x503e3c.lineTo(19, -16);
        _0x503e3c.lineTo(2, -9);
        _0x503e3c.closePath();
        _0x503e3c.fill();
        _0x503e3c.beginPath();
        _0x503e3c.ellipse(0, 10, 13, 5, 0, 0, Math.PI * 2);
        _0x503e3c.stroke();
        _0x503e3c.restore();
      });
      if (_0x18e0e8.rallyTower && _0x18e0e8.rallyPreview) {
        const _0xd25b35 = W(_0x18e0e8.rallyPreview.distance, _0x18e0e8.rallyPreview.route);
        _0x503e3c.save();
        _0x503e3c.strokeStyle = "rgba(126, 239, 226, .92)";
        _0x503e3c.fillStyle = "rgba(126, 239, 226, .14)";
        _0x503e3c.lineWidth = 3;
        _0x503e3c.beginPath();
        _0x503e3c.arc(_0xd25b35.x, _0xd25b35.y, 24, 0, Math.PI * 2);
        _0x503e3c.fill();
        _0x503e3c.stroke();
        _0x503e3c.restore();
      }
    })();
    _0x18e0e8.guards.forEach(_0x31d454);
    _0x18e0e8.defeatedUnits.forEach(_0x1b8c11);
    _0x18e0e8.enemies.forEach(_0x72c26c);
    _0x18e0e8.projectiles.forEach(_0x2d7236);
    _0x18e0e8.enemyProjectiles.forEach(_0x2d7236);
    _0x18e0e8.effects.forEach((_0x44e5b6, _0x17ecce) => {
      if (_0x18e0e8.effectsQuality !== "reduced" || !!_0x44e5b6.label || _0x17ecce % 2 != 1) {
        (function (_0x46134c) {
          var _0x4dda44;
          const _0x5f42cf = _0x46134c.maxLife || 0.5;
          const _0x5a6246 = Math.max(0, Math.min(1, 1 - _0x46134c.life / _0x5f42cf));
          const _0x2593cb = Math.max(0, 1 - _0x5a6246);
          const _0x40e2f4 = _0x46134c.x;
          const _0x56ab29 = _0x46134c.y - 22;
          _0x503e3c.save();
          _0x503e3c.globalAlpha = Math.min(1, _0x2593cb * 1.35);
          _0x503e3c.lineCap = "round";
          _0x503e3c.lineJoin = "round";
          if (_0x46134c.type === "death-burst") {
            _0x503e3c.translate(_0x40e2f4, _0x56ab29);
            const _0x8e18ba = 12 + _0x5a6246 * (_0x5f42cf > 1 ? 150 : 54);
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = _0x2593cb * 4 + 1;
            _0x503e3c.beginPath();
            _0x503e3c.arc(0, 0, _0x8e18ba, 0, Math.PI * 2);
            _0x503e3c.stroke();
            for (let _0x11ffab = 0; _0x11ffab < (_0x5f42cf > 1 ? 24 : 10); _0x11ffab += 1) {
              const _0x3dc5e1 = _0x11ffab * 2.399;
              const _0xb3ba88 = _0x5a6246 * (35 + _0x11ffab % 7 * 11);
              _0x503e3c.globalAlpha = _0x2593cb * 0.9;
              _0x503e3c.fillStyle = _0x11ffab % 3 == 0 ? "#fff2bd" : _0x46134c.color;
              _0x503e3c.beginPath();
              _0x503e3c.arc(Math.cos(_0x3dc5e1) * _0xb3ba88, Math.sin(_0x3dc5e1) * _0xb3ba88, 2 + _0x11ffab % 3, 0, Math.PI * 2);
              _0x503e3c.fill();
            }
            _0x503e3c.restore();
            return;
          }
          if (_0x46134c.type === "moonmark-pierce") {
            const _0x184432 = _0x46134c.x2;
            const _0x2c19d1 = _0x46134c.y2;
            const _0x4911f4 = _0x503e3c.createLinearGradient(_0x46134c.x, _0x46134c.y, _0x184432, _0x2c19d1);
            _0x4911f4.addColorStop(0, "rgba(215, 252, 255, 0)");
            _0x4911f4.addColorStop(0.2, _0x46134c.color);
            _0x4911f4.addColorStop(1, "rgba(215, 252, 255, 0)");
            _0x503e3c.strokeStyle = _0x4911f4;
            _0x503e3c.lineWidth = _0x2593cb * 8 + 2;
            _0x503e3c.shadowColor = _0x46134c.color;
            _0x503e3c.shadowBlur = 18;
            _0x503e3c.beginPath();
            _0x503e3c.moveTo(_0x46134c.x, _0x46134c.y - 22);
            _0x503e3c.lineTo(_0x184432, _0x2c19d1);
            _0x503e3c.stroke();
            _0x503e3c.restore();
            return;
          }
          if (_0x46134c.type === "tower-resonance") {
            _0x503e3c.translate(_0x40e2f4, _0x56ab29 + 18);
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = 3;
            for (let _0x4cf73d = 0; _0x4cf73d < 3; _0x4cf73d += 1) {
              const _0x267f5b = 18 + _0x4cf73d * 13 + _0x5a6246 * 36;
              _0x503e3c.globalAlpha = _0x2593cb * (0.95 - _0x4cf73d * 0.2);
              _0x503e3c.beginPath();
              _0x503e3c.ellipse(0, 0, _0x267f5b, _0x267f5b * 0.42, 0, 0, Math.PI * 2);
              _0x503e3c.stroke();
            }
            _0x503e3c.restore();
            return;
          }
          if (["weakpoint-break", "boss-pulse", "boss-steam", "boss-anchor", "boss-rage"].includes(_0x46134c.type)) {
            _0x503e3c.translate(_0x40e2f4, _0x56ab29 + 12);
            const _0x2f72eb = 28 + _0x5a6246 * (_0x46134c.type === "weakpoint-break" ? 115 : 88);
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.fillStyle = _0x46134c.type === "boss-steam" ? "rgba(255, 130, 62, .16)" : "rgba(109, 215, 232, .12)";
            _0x503e3c.lineWidth = _0x2593cb * 5 + 1;
            _0x503e3c.beginPath();
            _0x503e3c.ellipse(0, 0, _0x2f72eb, _0x2f72eb * 0.42, 0, 0, Math.PI * 2);
            _0x503e3c.fill();
            _0x503e3c.stroke();
            const _0x141e7d = _0x46134c.type === "boss-anchor" ? 6 : 10;
            for (let _0x3a163d = 0; _0x3a163d < _0x141e7d; _0x3a163d += 1) {
              const _0x4d7dda = _0x3a163d * Math.PI * 2 / _0x141e7d + _0x5a6246 * 0.7;
              const _0x13dfde = _0x2f72eb * 0.5;
              const _0x3fee13 = _0x2f72eb * (0.9 + _0x3a163d % 2 * 0.22);
              _0x503e3c.globalAlpha = _0x2593cb * 0.8;
              _0x503e3c.beginPath();
              _0x503e3c.moveTo(Math.cos(_0x4d7dda) * _0x13dfde, Math.sin(_0x4d7dda) * _0x13dfde * 0.55);
              _0x503e3c.lineTo(Math.cos(_0x4d7dda) * _0x3fee13, Math.sin(_0x4d7dda) * _0x3fee13 * 0.55);
              _0x503e3c.stroke();
            }
            if (_0x46134c.label) {
              _0x503e3c.globalAlpha = _0x2593cb;
              _0x503e3c.fillStyle = "#e7c979";
              _0x503e3c.font = "900 17px \"Songti SC\", \"STSong\", serif";
              _0x503e3c.textAlign = "center";
              _0x503e3c.fillText(_0x46134c.label, 0, -62 - _0x5a6246 * 30);
            }
            _0x503e3c.restore();
            return;
          }
          if (_0x46134c.type === "priest-heal") {
            _0x503e3c.translate(_0x40e2f4, _0x56ab29 + 18);
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.fillStyle = "rgba(131, 223, 189, .18)";
            _0x503e3c.lineWidth = 3;
            for (let _0x5b24d7 = 0; _0x5b24d7 < 3; _0x5b24d7 += 1) {
              const _0x44c7a4 = 14 + _0x5b24d7 * 13 + _0x5a6246 * 26;
              _0x503e3c.globalAlpha = _0x2593cb * (0.9 - _0x5b24d7 * 0.18);
              _0x503e3c.beginPath();
              _0x503e3c.ellipse(0, 0, _0x44c7a4, _0x44c7a4 * 0.38, 0, 0, Math.PI * 2);
              _0x503e3c.fill();
              _0x503e3c.stroke();
            }
            _0x503e3c.globalAlpha = _0x2593cb;
            _0x503e3c.lineWidth = 5;
            _0x503e3c.beginPath();
            _0x503e3c.moveTo(-7, -30);
            _0x503e3c.lineTo(7, -30);
            _0x503e3c.moveTo(0, -37);
            _0x503e3c.lineTo(0, -23);
            _0x503e3c.stroke();
            _0x503e3c.restore();
            return;
          }
          if (_0x46134c.type === "enemy-priest-cast" || _0x46134c.type === "enemy-priest-impact") {
            _0x503e3c.translate(_0x40e2f4, _0x56ab29 + 10);
            const _0x2e90f3 = Math.sin(_0x5a6246 * Math.PI);
            const _0x47a6bb = _0x54dc86.impacts.get("resonance-impact");
            const _0x3d72b0 = (_0x46134c.type === "enemy-priest-impact" ? 112 : 76) * (0.7 + _0x5a6246 * 0.65);
            if (_0x47a6bb != null && _0x47a6bb.complete && _0x47a6bb.naturalWidth) {
              _0x503e3c.save();
              _0x503e3c.rotate(_0x5a6246 * Math.PI * 1.4);
              _0x503e3c.globalAlpha = _0x2e90f3;
              _0x503e3c.filter = "hue-rotate(18deg) saturate(1.25)";
              _0x503e3c.shadowColor = _0x46134c.color;
              _0x503e3c.shadowBlur = 18;
              _0x503e3c.drawImage(_0x47a6bb, -_0x3d72b0 / 2, -_0x3d72b0 / 2, _0x3d72b0, _0x3d72b0);
              _0x503e3c.restore();
            }
            _0x503e3c.strokeStyle = "#d8c7ff";
            _0x503e3c.lineWidth = 3;
            for (let _0x10e633 = 0; _0x10e633 < 3; _0x10e633 += 1) {
              const _0x101c72 = 9 + _0x10e633 * 9 + _0x5a6246 * 24;
              _0x503e3c.globalAlpha = _0x2593cb * (0.95 - _0x10e633 * 0.2);
              _0x503e3c.beginPath();
              _0x503e3c.arc(0, 0, _0x101c72, 0, Math.PI * 2);
              _0x503e3c.stroke();
            }
            _0x503e3c.restore();
            return;
          }
          if (_0x46134c.type === "enemy-dagon-slam" || _0x46134c.type === "enemy-strike") {
            _0x503e3c.translate(_0x40e2f4, _0x56ab29 + 12);
            _0x503e3c.rotate(_0x46134c.angle || 0);
            const _0x148012 = _0x46134c.type === "enemy-dagon-slam";
            const _0x19e06e = _0x54dc86.impacts.get(_0x148012 ? "anchor-impact" : "guard-impact");
            const _0x7b4a12 = Math.sin(_0x5a6246 * Math.PI);
            const _0x1a523c = (_0x148012 ? 176 : 82) * (0.72 + _0x5a6246 * 0.62);
            if (_0x19e06e != null && _0x19e06e.complete && _0x19e06e.naturalWidth) {
              _0x503e3c.save();
              _0x503e3c.globalAlpha = _0x7b4a12;
              _0x503e3c.filter = _0x148012 ? "hue-rotate(145deg) saturate(1.35)" : "hue-rotate(305deg)";
              _0x503e3c.shadowColor = _0x46134c.color;
              _0x503e3c.shadowBlur = _0x148012 ? 22 : 10;
              _0x503e3c.drawImage(_0x19e06e, -_0x1a523c / 2, -_0x1a523c * 0.54, _0x1a523c, _0x1a523c);
              _0x503e3c.restore();
            }
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = _0x148012 ? 6 : 3;
            if (_0x148012) {
              const _0x5c738a = 34 + _0x5a6246 * 94;
              _0x503e3c.beginPath();
              _0x503e3c.ellipse(0, 4, _0x5c738a, _0x5c738a * 0.3, 0, 0, Math.PI * 2);
              _0x503e3c.stroke();
              for (let _0x38d1ba = 0; _0x38d1ba < 12; _0x38d1ba += 1) {
                const _0x2163f2 = Math.PI * 2 * _0x38d1ba / 12;
                const _0x2a7525 = _0x5c738a * (0.72 + _0x38d1ba % 3 * 0.13);
                _0x503e3c.globalAlpha = _0x2593cb;
                _0x503e3c.fillStyle = _0x38d1ba % 2 ? "#d5f9ff" : "#66d9ee";
                _0x503e3c.beginPath();
                _0x503e3c.arc(Math.cos(_0x2163f2) * _0x2a7525, Math.sin(_0x2163f2) * _0x2a7525 * 0.32, 2.5 + _0x38d1ba % 3, 0, Math.PI * 2);
                _0x503e3c.fill();
              }
            } else {
              const _0x1c82b2 = (0.45 + _0x5a6246) * 38;
              _0x503e3c.beginPath();
              _0x503e3c.moveTo(-8, -18);
              _0x503e3c.quadraticCurveTo(_0x1c82b2 * 0.55, -30, _0x1c82b2, 0);
              _0x503e3c.quadraticCurveTo(_0x1c82b2 * 0.55, 30, -8, 18);
              _0x503e3c.stroke();
            }
            _0x503e3c.restore();
            return;
          }
          if (_0x46134c.type === "lightning-chain" || _0x46134c.type === "magnetic-chain") {
            const _0x3130d4 = [[_0x46134c.x, _0x46134c.y - 22]];
            const _0x5da4f3 = [_0x46134c.x2, _0x46134c.y2];
            for (let _0x31fdec = 1; _0x31fdec < 7; _0x31fdec += 1) {
              const _0x3e3233 = _0x31fdec / 7;
              const _0x38ac62 = Math.sin((_0x31fdec + (_0x46134c.seed || 0)) * 2.47) * 9 * _0x2593cb;
              _0x3130d4.push([_0x46134c.x + (_0x5da4f3[0] - _0x46134c.x) * _0x3e3233 + Math.cos(_0x31fdec * 1.7) * _0x38ac62, _0x46134c.y - 22 + (_0x5da4f3[1] - (_0x46134c.y - 22)) * _0x3e3233 + _0x38ac62]);
            }
            _0x3130d4.push(_0x5da4f3);
            const _0x45deb1 = _0x54dc86.trails.get("storm");
            const _0x399b6b = _0x5da4f3[0] - _0x46134c.x;
            const _0x4789f5 = _0x5da4f3[1] - (_0x46134c.y - 22);
            const _0x5811c9 = Math.hypot(_0x399b6b, _0x4789f5);
            if (_0x45deb1 != null && _0x45deb1.complete && _0x45deb1.naturalWidth && _0x5811c9 > 2) {
              _0x503e3c.save();
              _0x503e3c.translate(_0x46134c.x, _0x46134c.y - 22);
              _0x503e3c.rotate(Math.atan2(_0x4789f5, _0x399b6b));
              _0x503e3c.globalAlpha = Math.min(1, _0x2593cb * 1.5);
              _0x503e3c.shadowColor = _0x46134c.type === "magnetic-chain" ? "#b995ff" : "#78eaff";
              _0x503e3c.shadowBlur = 13;
              _0x503e3c.drawImage(_0x45deb1, 0, -18, _0x5811c9, 36);
              _0x503e3c.restore();
            } else {
              _0x3130d4.forEach((_0x1ec134, _0x559489) => {
                const _0x37b992 = 3 + _0x559489 % 3 * 1.5;
                _0x503e3c.fillStyle = _0x46134c.type === "magnetic-chain" ? "rgba(212, 185, 255, .78)" : "rgba(207, 250, 255, .82)";
                _0x503e3c.beginPath();
                _0x503e3c.arc(_0x1ec134[0], _0x1ec134[1], _0x37b992, 0, Math.PI * 2);
                _0x503e3c.fill();
              });
            }
            const _0x4e5548 = _0x54dc86.impacts.get(_0x46134c.type === "magnetic-chain" ? "magnetic-impact" : "storm-impact");
            if (_0x4e5548 != null && _0x4e5548.complete && _0x4e5548.naturalWidth) {
              const _0x345fb4 = 38 + _0x5a6246 * 18;
              _0x503e3c.globalAlpha = Math.min(0.72, _0x2593cb * 1.2);
              _0x503e3c.drawImage(_0x4e5548, _0x5da4f3[0] - _0x345fb4 / 2, _0x5da4f3[1] - _0x345fb4 / 2, _0x345fb4, _0x345fb4);
            }
            _0x503e3c.restore();
            return;
          }
          _0x503e3c.translate(_0x40e2f4, _0x56ab29);
          if (_0x46134c.angle) {
            _0x503e3c.rotate(_0x46134c.angle);
          }
          const _0x4b0de2 = _0x54dc86.impacts.get(_0x46134c.type);
          if (_0x4b0de2 != null && _0x4b0de2.complete && _0x4b0de2.naturalWidth) {
            const _0x2d0797 = {
              "bolt-impact": 88,
              "moonmark-impact": 108,
              "phantom-impact": 98,
              "cannon-impact": 150,
              "dragon-impact": 168,
              "meteor-impact": 166,
              "storm-impact": 132,
              "magnetic-impact": 150,
              "frost-impact": 148,
              "reverse-impact": 172,
              "resonance-impact": 154,
              "anchor-impact": 126,
              "guard-impact": 98,
              "harpoon-impact": 112
            };
            const _0x5a1cf4 = Math.sin(_0x5a6246 * Math.PI);
            const _0x360f1f = (_0x2d0797[_0x46134c.type] || 112) * 0.85 * (0.82 + _0x5a6246 * 0.42);
            _0x503e3c.save();
            _0x503e3c.globalAlpha *= Math.max(0, _0x5a1cf4) * 1.35;
            _0x503e3c.shadowColor = _0x46134c.color;
            _0x503e3c.shadowBlur = 14;
            _0x503e3c.drawImage(_0x4b0de2, -_0x360f1f / 2, -_0x360f1f / 2, _0x360f1f, _0x360f1f);
            _0x503e3c.restore();
          }
          if (["bolt-impact", "moonmark-impact", "phantom-impact", "cannon-impact", "dragon-impact", "meteor-impact", "storm-impact", "magnetic-impact", "frost-impact", "reverse-impact", "resonance-impact", "anchor-impact", "guard-impact", "harpoon-impact"].includes(_0x46134c.type)) {
            const _0x351587 = ["cannon-impact", "dragon-impact", "meteor-impact"].includes(_0x46134c.type);
            const _0x1b2703 = ["storm-impact", "magnetic-impact"].includes(_0x46134c.type);
            const _0x5c9034 = ["frost-impact", "reverse-impact", "resonance-impact"].includes(_0x46134c.type);
            const _0x756699 = _0x46134c.type === "meteor-impact" ? 22 : _0x351587 ? 17 : _0x1b2703 ? 18 : 14;
            const _0x12bf16 = _0x351587 ? ["#fff1a8", "#ff9a36", "#d76532", "#d8a75c"] : _0x1b2703 ? [_0x46134c.type === "magnetic-impact" ? "#e3cfff" : "#e8feff", _0x46134c.color, "#79dfff", "#b995ff"] : _0x5c9034 ? ["#efffff", "#9cebf0", _0x46134c.color, "#d8b9ff"] : ["#f8ffff", _0x46134c.color, "#8de8e3", "#d8bd78"];
            for (let _0x139784 = 0; _0x139784 < _0x756699; _0x139784 += 1) {
              const _0x15c662 = _0x46134c.x * 0.17 + _0x46134c.y * 0.11 + _0x139784 * 2.399 + (_0x46134c.seed || 0);
              const _0x379eb0 = _0x139784 * 2.399 + Math.sin(_0x15c662) * 0.36;
              const _0x12e18f = 28 + _0x139784 % 7 * 9 + Math.abs(Math.sin(_0x15c662 * 1.7)) * 24;
              const _0x963b1a = _0x5a6246 * _0x12e18f;
              const _0x12c1d4 = _0x351587 ? _0x5a6246 * _0x5a6246 * (18 + _0x139784 % 4 * 5) : 0;
              const _0x29c349 = _0x5c9034 ? _0x5a6246 * 1.8 : _0x1b2703 ? Math.sin(_0x5a6246 * 16 + _0x139784) * 0.22 : 0;
              const _0x73439c = Math.cos(_0x379eb0 + _0x29c349) * _0x963b1a;
              const _0x286423 = Math.sin(_0x379eb0 + _0x29c349) * _0x963b1a * 0.68 + _0x12c1d4;
              const _0x31216d = 1.4 + _0x139784 % 4 * 0.75;
              _0x503e3c.save();
              _0x503e3c.translate(_0x73439c, _0x286423);
              _0x503e3c.rotate(_0x379eb0 + _0x5a6246 * (_0x139784 % 2 ? 7 : -5));
              _0x503e3c.globalAlpha = Math.min(1, _0x2593cb * 1.55) * (0.55 + _0x139784 % 3 * 0.18);
              _0x503e3c.shadowColor = _0x12bf16[_0x139784 % _0x12bf16.length];
              _0x503e3c.shadowBlur = 4 + _0x31216d * 2;
              _0x503e3c.fillStyle = _0x12bf16[_0x139784 % _0x12bf16.length];
              if (_0x139784 % 3 == 0) {
                _0x503e3c.beginPath();
                _0x503e3c.moveTo(0, -_0x31216d * 1.8);
                _0x503e3c.lineTo(_0x31216d, 0);
                _0x503e3c.lineTo(0, _0x31216d * 1.8);
                _0x503e3c.lineTo(-_0x31216d, 0);
                _0x503e3c.closePath();
                _0x503e3c.fill();
              } else {
                _0x503e3c.beginPath();
                _0x503e3c.arc(0, 0, _0x31216d, 0, Math.PI * 2);
                _0x503e3c.fill();
              }
              _0x503e3c.restore();
            }
          }
          if ((_0x4dda44 = _0x46134c.type) != null && _0x4dda44.endsWith("-muzzle")) {
            const _0x34e453 = _0x46134c.type === "harpoon-muzzle" ? "barracks" : _0x46134c.type.replace("-muzzle", "");
            const _0x4067aa = _0x54dc86.trails.get(_0x34e453);
            if (_0x4067aa != null && _0x4067aa.complete && _0x4067aa.naturalWidth) {
              const _0x110114 = 42 + _0x5a6246 * 30;
              const _0x57ebf1 = _0x110114 * _0x4067aa.naturalHeight / _0x4067aa.naturalWidth;
              _0x503e3c.globalAlpha *= 0.9;
              _0x503e3c.drawImage(_0x4067aa, -8, -_0x57ebf1 / 2, _0x110114, _0x57ebf1);
            }
            const _0x37efc8 = 9;
            for (let _0x18b290 = 0; _0x18b290 < _0x37efc8; _0x18b290 += 1) {
              const _0xc6d2c4 = (_0x18b290 / _0x37efc8 - 0.5) * 1.2;
              const _0x5b1c3c = 10 + _0x5a6246 * (20 + _0x18b290 * 2.4);
              const _0x3898e9 = 1.5 + _0x18b290 % 3;
              _0x503e3c.globalAlpha = _0x2593cb * (0.52 + _0x18b290 % 2 * 0.28);
              _0x503e3c.fillStyle = _0x18b290 % 4 == 0 ? "#fff3c5" : _0x46134c.color;
              _0x503e3c.shadowColor = _0x46134c.color;
              _0x503e3c.shadowBlur = 6;
              _0x503e3c.save();
              _0x503e3c.translate(Math.cos(_0xc6d2c4) * _0x5b1c3c, Math.sin(_0xc6d2c4) * _0x5b1c3c);
              _0x503e3c.rotate(_0xc6d2c4 + _0x5a6246 * 5);
              _0x503e3c.beginPath();
              _0x503e3c.moveTo(0, -_0x3898e9 * 1.6);
              _0x503e3c.lineTo(_0x3898e9, 0);
              _0x503e3c.lineTo(0, _0x3898e9 * 1.6);
              _0x503e3c.lineTo(-_0x3898e9, 0);
              _0x503e3c.closePath();
              _0x503e3c.fill();
              _0x503e3c.restore();
            }
          } else if (["bolt-impact", "moonmark-impact", "phantom-impact"].includes(_0x46134c.type)) {
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = 2.5;
            const _0xf43738 = _0x46134c.type === "moonmark-impact" ? 8 : _0x46134c.type === "phantom-impact" ? 6 : 5;
            for (let _0x47091b = 0; _0x47091b < _0xf43738; _0x47091b += 1) {
              const _0x5c2634 = _0x47091b * Math.PI * 2 / _0xf43738;
              const _0x2b64ef = 8 + _0x5a6246 * 10;
              const _0x306bd8 = 20 + _0x5a6246 * 26;
              _0x503e3c.beginPath();
              _0x503e3c.moveTo(Math.cos(_0x5c2634) * _0x2b64ef, Math.sin(_0x5c2634) * _0x2b64ef);
              _0x503e3c.lineTo(Math.cos(_0x5c2634) * _0x306bd8, Math.sin(_0x5c2634) * _0x306bd8);
              _0x503e3c.stroke();
            }
            if (_0x46134c.type === "moonmark-impact") {
              _0x503e3c.strokeStyle = "#fff4ba";
              _0x503e3c.lineWidth = 4;
              _0x503e3c.beginPath();
              _0x503e3c.arc(0, 0, 18 + _0x5a6246 * 12, -1.15, 1.15);
              _0x503e3c.stroke();
            }
            if (_0x46134c.type === "phantom-impact") {
              _0x503e3c.strokeStyle = "#c8aaff";
              [0, Math.PI / 2].forEach(_0x1bc327 => {
                _0x503e3c.beginPath();
                _0x503e3c.ellipse(0, 0, 28 + _0x5a6246 * 18, 9 + _0x5a6246 * 5, _0x1bc327, 0, Math.PI * 2);
                _0x503e3c.stroke();
              });
            }
          } else if (["cannon-impact", "dragon-impact", "meteor-impact"].includes(_0x46134c.type)) {
            const _0x3d79ae = 22 + _0x5a6246 * Math.max(48, _0x46134c.radius || 64);
            const _0x16f04f = _0x503e3c.createRadialGradient(0, 0, 3, 0, 0, _0x3d79ae);
            _0x16f04f.addColorStop(0, "rgba(255, 247, 189, .95)");
            _0x16f04f.addColorStop(0.28, _0x46134c.type === "dragon-impact" ? "rgba(255, 78, 24, .72)" : "rgba(255, 148, 42, .68)");
            _0x16f04f.addColorStop(1, "rgba(99, 30, 22, 0)");
            _0x503e3c.fillStyle = _0x16f04f;
            _0x503e3c.beginPath();
            _0x503e3c.arc(0, 0, _0x3d79ae, 0, Math.PI * 2);
            _0x503e3c.fill();
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = _0x2593cb * 4 + 1;
            _0x503e3c.beginPath();
            _0x503e3c.ellipse(0, 18, _0x3d79ae, _0x3d79ae * 0.38, 0, 0, Math.PI * 2);
            _0x503e3c.stroke();
            const _0x8da93c = _0x46134c.type === "meteor-impact" ? 12 : 8;
            _0x503e3c.fillStyle = "#d8a75c";
            for (let _0x280c46 = 0; _0x280c46 < _0x8da93c; _0x280c46 += 1) {
              const _0x46e6c4 = _0x280c46 * 2.399;
              const _0xf11944 = _0x5a6246 * _0x3d79ae * (0.55 + _0x280c46 % 3 * 0.18);
              _0x503e3c.fillRect(Math.cos(_0x46e6c4) * _0xf11944 - 2, Math.sin(_0x46e6c4) * _0xf11944 * 0.55 - 2, 4, 4);
            }
          } else if (["storm-impact", "magnetic-impact"].includes(_0x46134c.type)) {
            const _0x340d80 = 18 + _0x5a6246 * 55;
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = 3;
            for (let _0x413200 = 0; _0x413200 < 3; _0x413200 += 1) {
              _0x503e3c.beginPath();
              _0x503e3c.arc(0, 0, _0x340d80 + _0x413200 * 7, _0x413200 * 1.4 + _0x5a6246 * 3, _0x413200 * 1.4 + _0x5a6246 * 3 + Math.PI * 1.15);
              _0x503e3c.stroke();
            }
            _0x503e3c.fillStyle = _0x46134c.type === "magnetic-impact" ? "#d7c2ff" : "#e7fdff";
            for (let _0x2b0757 = 0; _0x2b0757 < 7; _0x2b0757 += 1) {
              const _0xbe7901 = _0x2b0757 * Math.PI * 2 / 7 + _0x5a6246;
              _0x503e3c.beginPath();
              _0x503e3c.arc(Math.cos(_0xbe7901) * _0x340d80, Math.sin(_0xbe7901) * _0x340d80 * 0.68, 2.5, 0, Math.PI * 2);
              _0x503e3c.fill();
            }
          } else if (["frost-impact", "reverse-impact", "resonance-impact"].includes(_0x46134c.type)) {
            const _0x4f928b = 20 + _0x5a6246 * (_0x46134c.type === "reverse-impact" ? 78 : 64);
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = 3;
            _0x503e3c.beginPath();
            _0x503e3c.ellipse(0, 18, _0x4f928b, _0x4f928b * 0.42, 0, 0, Math.PI * 2);
            _0x503e3c.stroke();
            _0x503e3c.beginPath();
            _0x503e3c.ellipse(0, 18, _0x4f928b * 0.68, _0x4f928b * 0.27, 0, 0, Math.PI * 2);
            _0x503e3c.stroke();
            if (_0x46134c.type === "reverse-impact") {
              _0x503e3c.strokeStyle = "#e1c98f";
              _0x503e3c.beginPath();
              _0x503e3c.arc(0, 0, _0x4f928b * 0.5, -0.4 - _0x5a6246 * 4, Math.PI * 1.35 - _0x5a6246 * 4);
              _0x503e3c.stroke();
              _0x503e3c.beginPath();
              _0x503e3c.moveTo(0, 0);
              _0x503e3c.lineTo(0, -_0x4f928b * 0.42);
              _0x503e3c.moveTo(0, 0);
              _0x503e3c.lineTo(-_0x4f928b * 0.28, 8);
              _0x503e3c.stroke();
            } else if (_0x46134c.type === "resonance-impact") {
              for (let _0x148705 = 0; _0x148705 < 4; _0x148705 += 1) {
                const _0x1623e2 = _0x148705 * Math.PI / 2 + _0x5a6246;
                _0x503e3c.fillStyle = "#e1c17c";
                _0x503e3c.beginPath();
                _0x503e3c.arc(Math.cos(_0x1623e2) * _0x4f928b, 18 + Math.sin(_0x1623e2) * _0x4f928b * 0.42, 4, 0, Math.PI * 2);
                _0x503e3c.fill();
              }
            } else {
              _0x503e3c.strokeStyle = "#dffcff";
              for (let _0x342c01 = 0; _0x342c01 < 6; _0x342c01 += 1) {
                const _0x1fbd99 = _0x342c01 * Math.PI / 3;
                _0x503e3c.beginPath();
                _0x503e3c.moveTo(0, 0);
                _0x503e3c.lineTo(Math.cos(_0x1fbd99) * _0x4f928b * 0.72, Math.sin(_0x1fbd99) * _0x4f928b * 0.5);
                _0x503e3c.stroke();
              }
            }
          } else if (["anchor-impact", "guard-impact", "harpoon-impact"].includes(_0x46134c.type)) {
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = _0x46134c.type === "anchor-impact" ? 5 : 3;
            _0x503e3c.beginPath();
            _0x503e3c.arc(0, 0, 18 + _0x5a6246 * 28, -1.3, 1.25);
            _0x503e3c.stroke();
            if (_0x46134c.type === "anchor-impact") {
              _0x503e3c.beginPath();
              _0x503e3c.moveTo(0, -24);
              _0x503e3c.lineTo(0, 17);
              _0x503e3c.moveTo(-14, 5);
              _0x503e3c.quadraticCurveTo(0, 25, 14, 5);
              _0x503e3c.stroke();
            }
            if (_0x46134c.type === "harpoon-impact") {
              _0x503e3c.strokeStyle = "#dbc8ff";
              _0x503e3c.beginPath();
              _0x503e3c.arc(0, 0, 10 + _0x5a6246 * 25, 0, Math.PI * 2);
              _0x503e3c.stroke();
            }
          } else {
            _0x503e3c.strokeStyle = _0x46134c.color;
            _0x503e3c.lineWidth = 5;
            _0x503e3c.beginPath();
            _0x503e3c.arc(0, 0, Math.max(2, (0.5 - _0x46134c.life) * 90 + 12), 0, Math.PI * 2);
            _0x503e3c.stroke();
          }
          _0x503e3c.globalAlpha = Math.min(1, _0x2593cb * 1.35);
          if (_0x46134c.label) {
            _0x503e3c.fillStyle = "#e7c979";
            _0x503e3c.font = "900 16px \"Songti SC\", \"STSong\", serif";
            _0x503e3c.textAlign = "center";
            _0x503e3c.textBaseline = "middle";
            _0x503e3c.fillText(_0x46134c.label, 0, -48 - _0x5a6246 * 24);
          }
          _0x503e3c.restore();
        })(_0x44e5b6);
      }
    });
  }
  function _0x529e8b(_0x14705b) {
    const _0x1545b3 = _0x1b5fa8.getBoundingClientRect();
    return {
      x: (_0x14705b.clientX - _0x1545b3.left) * (Z.width / _0x1545b3.width),
      y: (_0x14705b.clientY - _0x1545b3.top) * (Z.height / _0x1545b3.height)
    };
  }
  function _0x88da0b(_0x4c88c5) {
    const {
      x: _0x2fdc0b,
      y: _0x2ed0e7
    } = j.position;
    return Math.hypot(_0x4c88c5.x - _0x2fdc0b, _0x4c88c5.y - _0x2ed0e7) <= (j.hitRadius || 52);
  }
  function _0x9edd09() {
    return _0x18e0e8.interactionCharges > 0 && _0x18e0e8.interactionCooldown <= 0 && _0x18e0e8.waveActive && _0x18e0e8.status === "ready";
  }
  function _0x38e618() {
    const _0x2e9122 = _0x18e0e8.interactionCharges + " / " + j.charges + " 次";
    if (_0x18e0e8.interactionCharges <= 0) {
      return "本局次数已耗尽";
    } else if (_0x18e0e8.interactionCooldown > 0) {
      return "冷却 " + Math.ceil(_0x18e0e8.interactionCooldown) + " 秒 · 剩余 " + _0x2e9122;
    } else if (_0x18e0e8.waveActive) {
      return "可以激活 · 剩余 " + _0x2e9122;
    } else {
      return "波次开始后可用 · 剩余 " + _0x2e9122;
    }
  }
  function _0x18a19e(_0x279bb3, _0x477823 = 54) {
    return {
      getBoundingClientRect() {
        const _0x41b62d = _0x1b5fa8.getBoundingClientRect();
        const _0x479328 = _0x477823 * Math.min(_0x41b62d.width / Z.width, _0x41b62d.height / Z.height);
        const _0xbd86bd = _0x41b62d.left + _0x279bb3.x / Z.width * _0x41b62d.width;
        const _0x34ec92 = _0x41b62d.top + _0x279bb3.y / Z.height * _0x41b62d.height;
        return {
          left: _0xbd86bd - _0x479328,
          right: _0xbd86bd + _0x479328,
          top: _0x34ec92 - _0x479328,
          bottom: _0x34ec92 + _0x479328,
          width: _0x479328 * 2,
          height: _0x479328 * 2
        };
      }
    };
  }
  _0x1b5fa8.addEventListener("pointermove", _0x508a9a => {
    if (_0x18e0e8.paused) {
      _0x5204b5();
      return;
    }
    const _0x33a549 = _0x529e8b(_0x508a9a);
    if (_0x18e0e8.rallyTower) {
      _0x18e0e8.rallyPreview = _0x3b2026(_0x33a549, _0x18e0e8.rallyTower);
      _0x18e0e8.hoveredInteraction = false;
      _0x18e0e8.hoveredPad = null;
      _0x1b5fa8.style.cursor = _0x18e0e8.rallyPreview ? "crosshair" : "not-allowed";
      _0x5204b5();
      return;
    }
    _0x18e0e8.hoveredInteraction = _0x88da0b(_0x33a549);
    _0x18e0e8.hoveredPad = _0x18e0e8.hoveredInteraction ? -1 : Q.findIndex(_0x16c302 => Math.hypot(_0x33a549.x - _0x16c302.x, _0x33a549.y - _0x16c302.y) <= 48);
    if (_0x18e0e8.hoveredPad < 0) {
      _0x18e0e8.hoveredPad = null;
    }
    _0x1b5fa8.style.cursor = _0x18e0e8.hoveredInteraction && _0x9edd09() || _0x18e0e8.hoveredPad !== null ? "pointer" : "default";
    (function (_0x19fa0e) {
      if (!_0x2545a2.hidden) {
        _0x5204b5();
        return;
      }
      if (_0x18e0e8.hoveredInteraction) {
        _0x14f1e5({
          kicker: "地图交互 · " + j.device,
          title: j.name,
          detail: j.description,
          meta: _0x38e618()
        }, _0x19fa0e.clientX, _0x19fa0e.clientY, _0x18a19e(j.position, j.hitRadius || 52));
        return;
      }
      if (_0x18e0e8.hoveredPad === null) {
        _0x5204b5();
        return;
      }
      const _0x22e649 = _0x18e0e8.towers.find(_0x4de2d5 => _0x4de2d5.padIndex === _0x18e0e8.hoveredPad);
      if (_0x22e649) {
        _0x14f1e5({
          kicker: "已部署防御塔",
          title: fn(H1[_0x22e649.type], _0x22e649),
          detail: "点击查看属性、目标优先级、升级与出售操作",
          meta: _0x22e649.level + " / 4 级 · " + bn(_0x22e649)
        }, _0x19fa0e.clientX, _0x19fa0e.clientY, _0x18a19e(Q[_0x18e0e8.hoveredPad], 58));
        return;
      }
      _0x14f1e5({
        kicker: "建造位置",
        title: "工程基座",
        detail: "点击打开建造菜单，选择一种防御塔部署",
        meta: "当前潮晶 · " + _0x18e0e8.gold
      }, _0x19fa0e.clientX, _0x19fa0e.clientY, _0x18a19e(Q[_0x18e0e8.hoveredPad], 50));
    })(_0x508a9a);
  });
  _0x1b5fa8.addEventListener("pointerleave", () => {
    _0x18e0e8.hoveredPad = null;
    _0x18e0e8.hoveredInteraction = false;
    _0x5204b5();
  });
  _0x1b5fa8.addEventListener("pointerdown", _0x30f64a => {
    if (_0x30c24c.classList.contains("is-guide-open")) {
      _0x4dd103(false);
    }
    if (_0x18e0e8.paused) {
      return;
    }
    const _0x5d2d80 = _0x529e8b(_0x30f64a);
    if (_0x18e0e8.rallyTower) {
      (function (_0x5b8191) {
        const _0x39220d = _0x18e0e8.rallyTower;
        if (!_0x39220d) {
          return false;
        }
        const _0x209dc3 = _0x3b2026(_0x5b8191, _0x39220d);
        if (_0x209dc3) {
          _0x39220d.rally = {
            route: _0x209dc3.route,
            distance: _0x209dc3.distance,
            point: _0x209dc3.point,
            separation: 0
          };
          _0x18e0e8.guards.filter(_0x5da0a4 => _0x5da0a4.tower === _0x39220d).forEach((_0x31f017, _0x1aa4c6) => {
            _0x33c6ae(_0x31f017);
            _0x31f017.route = _0x209dc3.route;
            _0x31f017.postDistance = Math.max(20, Math.min(s1[_0x209dc3.route].total - 60, _0x209dc3.distance + (_0x1aa4c6 - 1) * 28));
            if (_0x31f017.state !== "dead") {
              _0x31f017.state = "deploying";
            }
          });
          _0x18e0e8.effects.push({
            type: "rally-set",
            x: _0x209dc3.point.x,
            y: _0x209dc3.point.y,
            life: 0.8,
            maxLife: 0.8,
            color: "#e6c874",
            label: "禁卫调度"
          });
          _0x5d4f79.play("rally");
          _0x18e0e8.rallyTower = null;
          _0x18e0e8.rallyPreview = null;
          _0x18e0e8.selectedPad = null;
          _0x1b5fa8.style.cursor = "default";
        } else {
          _0x5d4f79.play("tactic");
        }
      })(_0x5d2d80);
      return;
    }
    if (_0x88da0b(_0x5d2d80)) {
      _0x4f6051();
      (function () {
        if (_0x18e0e8.interactionCharges <= 0 || _0x18e0e8.interactionCooldown > 0 || !_0x18e0e8.waveActive || _0x18e0e8.status !== "ready") {
          return;
        }
        const _0x1b8692 = performance.now() / 1000;
        _0x18e0e8.interactionCharges -= 1;
        _0x18e0e8.interactionCooldown = j.cooldown;
        _0x18e0e8.mechanicUsed = _0x18e0e8.interactionCharges <= 0;
        _0x5d4f79.play("interaction-" + S.mechanic);
        if (S.mechanic === "tide") {
          _0x18e0e8.mechanicActive = false;
          _0x18e0e8.mapStateLabel = "玩家泄潮 · 双路恢复";
          _0x18e0e8.spawnQueue.forEach((_0x54ce6f, _0x59868a) => {
            _0x54ce6f.route = _0x59868a % 2 == 0 ? "upper" : "lower";
          });
          _0x18e0e8.enemies.forEach(_0x41efb1 => {
            _0x41efb1.slowUntil = Math.max(_0x41efb1.slowUntil, _0x1b8692 + 5);
            _0x41efb1.slowAmount = Math.max(_0x41efb1.slowAmount, 0.45);
          });
        } else if (S.mechanic === "bridge") {
          _0x18e0e8.mechanicActive = false;
          _0x18e0e8.mapStateLabel = "桥面制动 · 主桥恢复";
          _0x18e0e8.spawnQueue.forEach(_0x8257ab => {
            if (_0x8257ab.route === "westDetour") {
              _0x8257ab.route = "west";
            }
            if (_0x8257ab.route === "northDetour") {
              _0x8257ab.route = "north";
            }
          });
          _0x18e0e8.enemies.forEach(_0x3d6f83 => {
            _0x3d6f83.freezeUntil = Math.max(_0x3d6f83.freezeUntil, _0x1b8692 + (_0x3d6f83.isBoss ? 1.2 : 2.5));
          });
        } else if (S.mechanic === "storm") {
          _0x18e0e8.mapStateLabel = "避雷网接管 · 全塔增压";
          _0x18e0e8.towers.forEach(_0x426762 => {
            _0x426762.cooldown = 0;
            _0x426762.boostUntil = Math.max(_0x426762.boostUntil || 0, _0x1b8692 + 7);
          });
        } else if (S.mechanic === "foundry") {
          _0x18e0e8.mechanicActive = false;
          _0x18e0e8.mapStateLabel = "玩家冷却 · 冷却渠开放";
          _0x18e0e8.spawnQueue.forEach(_0x4f617 => {
            if (_0x4f617.route === "furnace") {
              _0x4f617.route = "coolant";
            }
          });
          _0x18e0e8.enemies.forEach(_0x1cb4ed => {
            _0x1cb4ed.wetUntil = Math.max(_0x1cb4ed.wetUntil, _0x1b8692 + 6);
            _0x1cb4ed.slowUntil = Math.max(_0x1cb4ed.slowUntil, _0x1b8692 + 5);
            _0x1cb4ed.slowAmount = Math.max(_0x1cb4ed.slowAmount, 0.3);
          });
        } else if (S.mechanic === "crystal") {
          _0x18e0e8.mechanicActive = true;
          _0x18e0e8.mechanicTimer = 8;
          _0x18e0e8.mapStateLabel = "巨兽潮晶 · 全路共鸣";
          _0x18e0e8.enemies.forEach(_0x5bcf56 => {
            _0x5bcf56.slowUntil = Math.max(_0x5bcf56.slowUntil, _0x1b8692 + 8);
            _0x5bcf56.slowAmount = Math.max(_0x5bcf56.slowAmount, 0.45);
          });
        } else if (S.mechanic === "boiler") {
          _0x18e0e8.mechanicActive = false;
          _0x18e0e8.boilerLockTimer = 7;
          _0x18e0e8.mapStateLabel = "玩家泄压 · 锅炉锁停";
          _0x18e0e8.enemies.forEach(_0x4f3c60 => {
            _0x4f3c60.slowUntil = Math.max(_0x4f3c60.slowUntil, _0x1b8692 + 4);
            _0x4f3c60.slowAmount = Math.max(_0x4f3c60.slowAmount, 0.25);
          });
        }
        const {
          x: _0x1d8947,
          y: _0x1c5502
        } = j.position;
        _0x18e0e8.effects.push({
          x: _0x1d8947,
          y: _0x1c5502,
          life: 0.72,
          color: "#9ff5e9",
          label: j.name
        });
        _0x395a8e();
      })();
      return;
    }
    const _0x7db180 = Q.findIndex(_0x4e8261 => Math.hypot(_0x5d2d80.x - _0x4e8261.x, _0x5d2d80.y - _0x4e8261.y) <= 50);
    if (_0x7db180 < 0) {
      _0x4f6051();
    } else if (_0x18e0e8.towers.some(_0x3057a0 => _0x3057a0.padIndex === _0x7db180)) {
      if (_0x18e0e8.selectedPad !== _0x7db180 || _0x2545a2.hidden) {
        _0x1c1e2b(_0x7db180);
      } else {
        _0x4f6051();
      }
    } else {
      _0xd47016(_0x7db180);
    }
  });
  _0x5481ba.addEventListener("click", () => {
    if ((!(_0x19d387 >= 0) || !(_0x19d387 < 2)) && !_0x18e0e8.paused) {
      if (_0x19d387 === 2) {
        _0x2c1cb5();
      }
      _0x29d416();
    }
  });
  _0x3fbad3.addEventListener("click", () => {
    if (!_0x18e0e8.paused) {
      _0x18e0e8.speed = _0x18e0e8.speed >= 3 ? 1 : _0x18e0e8.speed + 1;
      _0x395a8e();
    }
  });
  _0x4b9f40.addEventListener("click", () => {
    if (!_0x221236.hidden) {
      _0x5d1db4();
    }
    _0x3cad0c(!_0x18e0e8.paused);
  });
  _0x46790d.addEventListener("click", _0x2c5f2e);
  _0x967bf7.addEventListener("click", () => _0x4dd103(!_0x30c24c.classList.contains("is-guide-open")));
  _0x14e0cc.addEventListener("click", () => {
    _0x4dd103(false);
    _0x967bf7.focus({
      preventScroll: true
    });
  });
  _0x24daf3.addEventListener("click", _0x2c5f2e);
  _0x3b7bbb.addEventListener("click", () => _0x3cad0c(false));
  _0xf11efe.addEventListener("click", _0x5d1db4);
  _0x221236.addEventListener("pointerdown", _0x3cb8cb => {
    if (_0x3cb8cb.target === _0x221236) {
      _0x5d1db4();
    }
  });
  _0x102e68.addEventListener("click", _0x5bd746);
  _0x182852.addEventListener("click", _0x2c1cb5);
  window.addEventListener("resize", _0x518207);
  _0x2adf84.addEventListener("click", function () {
    _0x54b1ef = document.activeElement instanceof HTMLElement ? document.activeElement : _0x2adf84;
    _0x275690.hidden = false;
    _0x236820.classList.add("is-tutorial-open");
    _0x21f92a(_0xc47275);
    _0x2a89b9.focus({
      preventScroll: true
    });
  });
  _0x2a89b9.addEventListener("click", _0x5c2e99);
  _0x275690.addEventListener("pointerdown", _0x78bb8 => {
    if (_0x78bb8.target === _0x275690) {
      _0x5c2e99();
    }
  });
  _0x3c16ca.addEventListener("keydown", _0x1031a2 => {
    if (_0x1031a2.key !== "Tab") {
      return;
    }
    const _0x4d7b1b = [..._0x3c16ca.querySelectorAll("button:not(:disabled), [tabindex=\"0\"]")].filter(_0x1ad43b => !_0x1ad43b.hidden && _0x1ad43b.getClientRects().length);
    if (!_0x4d7b1b.length) {
      return;
    }
    const _0x4f9637 = _0x4d7b1b[0];
    const _0x2e5b5b = _0x4d7b1b[_0x4d7b1b.length - 1];
    if (_0x1031a2.shiftKey && document.activeElement === _0x4f9637) {
      _0x1031a2.preventDefault();
      _0x2e5b5b.focus({
        preventScroll: true
      });
    } else if (!_0x1031a2.shiftKey && document.activeElement === _0x2e5b5b) {
      _0x1031a2.preventDefault();
      _0x4f9637.focus({
        preventScroll: true
      });
    }
  });
  _0x47e5e0.forEach((_0x747e1d, _0x4b3f9b) => {
    _0x747e1d.addEventListener("click", () => _0x21f92a(_0x4b3f9b));
    _0x747e1d.addEventListener("keydown", _0x20e9c3 => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(_0x20e9c3.key)) {
        return;
      }
      _0x20e9c3.preventDefault();
      _0x21f92a(_0x20e9c3.key === "Home" ? 0 : _0x20e9c3.key === "End" ? _0x322f65.length - 1 : (_0x4b3f9b + (_0x20e9c3.key === "ArrowRight" ? 1 : -1) + _0x322f65.length) % _0x322f65.length, true);
    });
  });
  _0x417845.addEventListener("click", () => _0x21f92a(_0xc47275 - 1));
  _0x4e34fc.addEventListener("click", () => _0x21f92a(_0xc47275 + 1));
  _0x3699b3.addEventListener("click", () => {
    _0x5c2e99();
  });
  window.addEventListener("keydown", _0x2fa49f => {
    if (_0x2fa49f.key === "Escape") {
      if (_0x275690.hidden) {
        if (_0x34d543.hidden) {
          if (_0x538c9e.hidden) {
            if (_0x221236.hidden) {
              if (_0x30c24c.classList.contains("is-guide-open")) {
                _0x4dd103(false);
              } else {
                _0x3cad0c(!_0x18e0e8.paused);
              }
            } else {
              _0x5d1db4();
            }
          } else {
            _0x2c1cb5();
          }
        } else {
          _0x5bd746();
        }
      } else {
        _0x5c2e99();
      }
    }
  });
  _0x4c55a9.addEventListener("change", () => {
    const _0x23e859 = new URL(window.location.href);
    _0x23e859.searchParams.set("view", "game");
    _0x23e859.searchParams.set("map", _0x4c55a9.value);
    window.location.assign(_0x23e859);
  });
  _0x31ea47.addEventListener("click", _0x2f34f9 => {
    const _0x4c2520 = _0x2f34f9.target.closest(".game-level");
    if (!_0x4c2520 || _0x4c2520.disabled || _0x4c2520.dataset.map === F) {
      return;
    }
    const _0x59571d = new URL(window.location.href);
    _0x59571d.searchParams.set("view", "game");
    _0x59571d.searchParams.set("map", _0x4c2520.dataset.map);
    window.location.assign(_0x59571d);
  });
  _0x163dc0.addEventListener("click", () => {
    _0x5d4f79.unlock().then(() => {
      _0x5d4f79.setMusicTrack(F);
      _0x5d4f79.play("opening-wave");
      _0x262916();
    });
    _0x236820.classList.add("is-leaving");
    _0x30c24c.hidden = false;
    window.setTimeout(() => {
      _0x236820.remove();
      (function () {
        if (K !== "enemies" || _0x18e0e8.showcaseStarted) {
          return;
        }
        _0x18e0e8.showcaseStarted = true;
        _0x18e0e8.wave = 1;
        _0x18e0e8.waveActive = true;
        _0x18e0e8.mapStateLabel = "特殊敌情演示 · 三种能力同时激活";
        const _0x1536f5 = S.routes[0];
        ["salt", "priest", "ghost", "navigator", "crab"].forEach((_0xdf3b92, _0x31adf4) => {
          const _0x5c522d = M1[_0xdf3b92];
          _0x1a86be({
            ..._0x5c522d,
            type: _0xdf3b92,
            route: _0x1536f5,
            health: Math.round(_0x5c522d.health * S.healthMultiplier),
            attack: _0x5c522d.attack * S.attackMultiplier
          });
          const _0x5a0089 = _0x18e0e8.enemies.at(-1);
          _0x5a0089.distance = 210 + _0x31adf4 * 74;
          if (_0xdf3b92 === "salt" || _0xdf3b92 === "crab" || _0xdf3b92 === "priest") {
            _0x5a0089.health *= 0.58;
          }
          if (_0xdf3b92 === "priest") {
            _0x5a0089.healCooldown = 0.45;
          }
        });
        _0x395a8e();
      })();
      (function () {
        if (K !== "boss" || _0x18e0e8.showcaseStarted) {
          return;
        }
        _0x18e0e8.showcaseStarted = true;
        _0x18e0e8.wave = _0x18e0e8.maxWaves;
        _0x18e0e8.waveActive = true;
        _0x18e0e8.mapStateLabel = "达贡阶段 1 · 额头潮晶眼暴露";
        _0x1a86be({
          type: "dagon",
          name: "深渊机神·达贡",
          health: 12000,
          armor: 0.45,
          magicResist: 0.3,
          speed: 8,
          reward: 0,
          coreDamage: 20,
          attack: 85,
          attackInterval: 1.4,
          route: S.routes[0],
          isBoss: true
        });
        const _0x5010c7 = _0x18e0e8.enemies.at(-1);
        _0x5010c7.distance = Math.min(s1[_0x5010c7.route].total * 0.48, 580);
        _0x5010c7.bossAbilityCooldown = 0.55;
        _0x395a8e();
      })();
      (function () {
        if (K !== "enemy-attacks" || _0x18e0e8.showcaseStarted) {
          return;
        }
        _0x18e0e8.showcaseStarted = true;
        _0x18e0e8.wave = _0x18e0e8.maxWaves;
        _0x18e0e8.waveActive = true;
        _0x18e0e8.mapStateLabel = "敌方攻击演示 · 法杖施法与双拳下砸";
        const _0x348f5d = {
          type: "barracks",
          branch: "anchor",
          padIndex: 8,
          invested: 900,
          level: 4,
          cooldown: 0,
          aim: 0,
          shotCount: 0
        };
        _0x18e0e8.towers.push(_0x348f5d);
        _0x28814e(_0x348f5d);
        const _0x51d3bd = [S.routes[0], S.routes[1] || S.routes[0]];
        const _0x190fe3 = [430, 430];
        _0x18e0e8.guards.forEach((_0x55d4f8, _0xddf701) => {
          if (_0xddf701 >= _0x190fe3.length) {
            _0x55d4f8.state = "dead";
            _0x55d4f8.respawn = 999;
            _0x55d4f8.deathStartedAt = 0;
            return;
          }
          _0x55d4f8.route = _0x51d3bd[_0xddf701];
          _0x55d4f8.postDistance = Math.min(s1[_0x55d4f8.route].total - 80, _0x190fe3[_0xddf701]);
          const _0x4995fe = W(_0x55d4f8.postDistance, _0x55d4f8.route);
          _0x55d4f8.x = _0x4995fe.x;
          _0x55d4f8.y = _0x4995fe.y;
          _0x55d4f8.state = "stationed";
          _0x55d4f8.health = _0x55d4f8.maxHealth = 2400;
        });
        _0x1a86be({
          ...M1.priest,
          type: "priest",
          route: _0x51d3bd[0],
          health: 3200,
          attack: 72
        });
        const _0x54f64f = _0x18e0e8.enemies.at(-1);
        _0x54f64f.distance = _0x18e0e8.guards[0].postDistance - 20;
        _0x54f64f.blockedBy = _0x18e0e8.guards[0];
        _0x54f64f.attackCooldown = 0.25;
        _0x18e0e8.guards[0].target = _0x54f64f;
        _0x18e0e8.guards[0].engageDistance = _0x54f64f.distance;
        _0x1a86be({
          type: "dagon",
          name: "深渊机神·达贡",
          health: 16000,
          armor: 0.45,
          magicResist: 0.3,
          speed: 0,
          reward: 0,
          coreDamage: 20,
          attack: 110,
          attackInterval: 1.55,
          route: _0x51d3bd[1],
          isBoss: true
        });
        const _0x3a43af = _0x18e0e8.enemies.at(-1);
        _0x3a43af.distance = _0x18e0e8.guards[1].postDistance - 34;
        _0x3a43af.blockedBy = _0x18e0e8.guards[1];
        _0x3a43af.attackCooldown = 0.45;
        _0x3a43af.bossAbilityCooldown = 0.65;
        _0x18e0e8.guards[1].target = _0x3a43af;
        _0x18e0e8.guards[1].engageDistance = _0x3a43af.distance;
        _0x395a8e();
      })();
      (function () {
        if (!["towers", "targeting", "rally"].includes(K) || _0x18e0e8.showcaseStarted) {
          return;
        }
        _0x18e0e8.showcaseStarted = true;
        _0x18e0e8.wave = 8;
        _0x18e0e8.waveActive = true;
        _0x18e0e8.mapStateLabel = K === "targeting" ? "战术控制演示 · 选择防御塔目标优先级" : K === "rally" ? "兵营调度演示 · 调整禁卫集结点" : "终极塔协同演示 · 六种招牌机制";
        (K === "targeting" ? [["crossbow", "moonmark", 1]] : K === "rally" ? [["barracks", "anchor", 9]] : [["crossbow", "moonmark", 1], ["crossbow", "phantom", 11], ["barracks", "anchor", 9], ["barracks", "harpoon", 10], ["storm", "magnetic", 8], ["time", "resonance", 3]]).forEach(([_0x163329, _0x86a1d, _0x4c0f76]) => {
          const _0x144b5d = {
            type: _0x163329,
            branch: _0x86a1d,
            padIndex: _0x4c0f76,
            invested: 900,
            level: 4,
            cooldown: 0,
            aim: 0,
            shotCount: 0
          };
          _0x18e0e8.towers.push(_0x144b5d);
          if (_0x163329 === "barracks") {
            _0x28814e(_0x144b5d);
          }
        });
        const _0x35b1d1 = S.routes[0];
        ["crab", "salt", "beast", "crab", "salt", "beast", "crab", "salt"].forEach((_0x2cbcd0, _0x93bbac) => {
          const _0x2c3eac = M1[_0x2cbcd0];
          _0x1a86be({
            ..._0x2c3eac,
            type: _0x2cbcd0,
            route: _0x35b1d1,
            health: _0x2c3eac.health * 5,
            attack: _0x2c3eac.attack * 0.65
          });
          _0x18e0e8.enemies.at(-1).distance = 250 + _0x93bbac * 72;
        });
        _0x395a8e();
        if (K === "targeting") {
          _0x1c1e2b(1);
        }
        if (K === "rally") {
          _0x1c1e2b(9);
        }
      })();
      if (K === "waves" && !_0x18e0e8.showcaseStarted) {
        _0x18e0e8.showcaseStarted = true;
        _0x18e0e8.wave = Math.max(0, _0x18e0e8.maxWaves - 3);
        [["crossbow", "phantom", 1], ["cannon", "meteor", 3], ["storm", "thunder", 7], ["time", "resonance", 9]].forEach(([_0x376d7e, _0x53a029, _0x3f5fa5]) => {
          _0x18e0e8.towers.push({
            type: _0x376d7e,
            branch: _0x53a029,
            padIndex: _0x3f5fa5,
            invested: 900,
            level: 4,
            cooldown: 0,
            aim: 0,
            shotCount: 0
          });
        });
        _0x395a8e();
        _0x29d416();
      }
      if (K === "events" && !_0x18e0e8.showcaseStarted) {
        _0x18e0e8.showcaseStarted = true;
        _0x18e0e8.wave = 1;
        [["crossbow", "moonmark", 1], ["cannon", "meteor", Math.min(3, Q.length - 1)], ["storm", "thunder", Math.min(7, Q.length - 1)]].forEach(([_0x1cf4ed, _0x1eda74, _0x2a7f60]) => {
          if (!_0x18e0e8.towers.some(_0x5b4ceb => _0x5b4ceb.padIndex === _0x2a7f60)) {
            _0x18e0e8.towers.push({
              type: _0x1cf4ed,
              branch: _0x1eda74,
              padIndex: _0x2a7f60,
              invested: 900,
              level: 4,
              cooldown: 0,
              aim: 0,
              shotCount: 0
            });
          }
        });
        _0x395a8e();
        _0x29d416();
      }
      if (K === "breach" && !_0x18e0e8.showcaseStarted) {
        _0x18e0e8.showcaseStarted = true;
        _0x18e0e8.wave = 1;
        _0x18e0e8.waveActive = true;
        _0x18e0e8.mapStateLabel = "城门入侵演示 · 敌军进入皇城后扣除耐久";
        S.routes.slice(0, 3).forEach((_0x1860ae, _0x47508a) => {
          const _0x5d8088 = ["salt", "crab", "navigator"][_0x47508a % 3];
          const _0x36538c = M1[_0x5d8088];
          _0x1a86be({
            ..._0x36538c,
            type: _0x5d8088,
            route: _0x1860ae,
            speed: 34 + _0x47508a * 7,
            health: _0x36538c.health * 6,
            attack: _0x36538c.attack
          });
          const _0x211aec = _0x18e0e8.enemies.at(-1);
          _0x211aec.distance = Math.max(0, rt(_0x1860ae).distance - 92 - _0x47508a * 34);
          _0x211aec.spawnSiteId = null;
          _0x211aec.spawnedAt = performance.now() / 1000 - 1;
        });
        _0x395a8e();
      }
      if (K === "spawns" && !_0x18e0e8.showcaseStarted) {
        _0x18e0e8.showcaseStarted = true;
        _0x18e0e8.wave = 1;
        _0x18e0e8.waveActive = false;
        _0x18e0e8.mapStateLabel = "大本营出场协调展示";
        it.forEach((_0x1e382a, _0x1f4a17) => {
          const _0xc32bd1 = _0x1e382a.routes.find(_0x224cce => s1[_0x224cce]);
          if (!_0xc32bd1) {
            return;
          }
          const _0x3f8475 = ["salt", "crab", "navigator"][_0x1f4a17 % 3];
          const _0x1be138 = M1[_0x3f8475];
          _0x1a86be({
            ..._0x1be138,
            type: _0x3f8475,
            route: _0xc32bd1,
            speed: 0,
            health: _0x1be138.health,
            attack: _0x1be138.attack
          });
          const _0x2b41b3 = _0x18e0e8.enemies.at(-1);
          _0x2b41b3.distance = _0x1e382a.distances[_0xc32bd1] + 12;
          _0x2b41b3.spawnedAt = performance.now() / 1000 - 1;
        });
        _0x395a8e();
      }
      (function () {
        if (["result", "defeat"].includes(K) && !_0x18e0e8.showcaseStarted) {
          _0x18e0e8.showcaseStarted = true;
          if (K === "defeat") {
            _0x18e0e8.wave = Math.max(1, _0x18e0e8.maxWaves - 2);
            _0x18e0e8.waveActive = false;
            _0x18e0e8.lives = 0;
            _0x18e0e8.kills = 54;
            _0x18e0e8.goldEarned = 486;
            _0x18e0e8.earlyWaves = 2;
            _0x18e0e8.mapStateLabel = "皇城失守 · 潮晶核心熄灭";
            _0x395a8e();
            _0x12f9ed(true);
            return;
          }
          _0x18e0e8.wave = _0x18e0e8.maxWaves;
          _0x18e0e8.waveActive = false;
          _0x18e0e8.status = "won";
          _0x18e0e8.lives = 18;
          _0x18e0e8.kills = 86;
          _0x18e0e8.goldEarned = 742;
          _0x18e0e8.earlyWaves = 4;
          _0x18e0e8.mapStateLabel = "防线守住 · 战绩已结算";
          _0x395a8e();
          _0x3a8789(true, _0x204be4 < C1.length - 1, true);
        }
      })();
      _0x30c24c.scrollIntoView({
        block: "start"
      });
      (function () {
        if (K || p1) {
          return;
        }
        const _0x53a03e = vS[F];
        _0xcc3ab2.classList.toggle("is-single", _0x53a03e.length === 1 && _0x53a03e[0] !== "dagon");
        _0xcc3ab2.classList.toggle("is-boss-briefing", _0x53a03e.includes("dagon"));
        _0xcc3ab2.replaceChildren(..._0x53a03e.map(_0x178c6f));
        _0x34d543.hidden = false;
        _0x5204b5();
        _0x277dcd.createIcons();
        _0x102e68.focus({
          preventScroll: true
        });
      })();
      if (_0x34d543.hidden) {
        _0x5481ba.focus({
          preventScroll: true
        });
      }
    }, 320);
  });
  _0x535d55.addEventListener("click", () => window.location.reload());
  _0x580843.addEventListener("click", () => window.location.reload());
  _0x1324be.addEventListener("click", () => {
    const _0x57307d = new URL(window.location.href);
    _0x57307d.searchParams.set("view", "game");
    _0x57307d.searchParams.delete("showcase");
    _0x57307d.searchParams.set("map", _0x204be4 < C1.length - 1 ? C1[_0x204be4 + 1] : F);
    window.location.assign(_0x57307d);
  });
  _0x395a8e();
  if (p1) {
    _0x382387();
    _0x1b5fa8.dataset.routeReference = _0x1b5fa8.toDataURL("image/webp", 0.82);
  }
  _0x18e0e8.animationId = requestAnimationFrame(function _0x827e88(_0xe85f00) {
    const _0x5ebcb8 = Math.min(0.05, (_0xe85f00 - _0x18e0e8.lastTime) / 1000);
    _0x18e0e8.lastTime = _0xe85f00;
    if (!_0x18e0e8.paused) {
      _0x46191c(_0x5ebcb8, _0xe85f00 / 1000);
    }
    _0x382387();
    _0x18e0e8.animationId = requestAnimationFrame(_0x827e88);
  });
}
const Hn = document.querySelector("#app");
const ES = document.querySelector("#lightbox-root");
function IS() {
  nH({
    icons: sH
  });
}
function DS() {
  Hn.replaceChildren();
  BS(Hn, {
    createIcons: IS
  });
}
function zS() {
  ES.replaceChildren();
}
async function ZS() {
  DS();
}
document.querySelector("#toast-root");
new URLSearchParams(window.location.search).get("view");
document.addEventListener("keydown", function (_0x37d567) {
  if (_0x37d567.key === "Escape") {
    zS();
  }
});
ZS();