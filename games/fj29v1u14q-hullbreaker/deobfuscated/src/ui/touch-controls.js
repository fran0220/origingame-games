const t = Object.freeze({
  left: "ArrowLeft",
  right: "ArrowRight",
  up: "ArrowUp",
  down: "ArrowDown"
});
const e = "Space";
function n(_0x3d4fcf, _0x479ed4, _0x488292) {
  return Math.max(_0x479ed4, Math.min(_0x488292, _0x3d4fcf));
}
export function installTouchControls({
  applyEdge: _0x13105e,
  canControl: _0x4fb970,
  startRun: _0x10b9a3,
  togglePause: _0x2a750b
}) {
  const _0x57b9fd = document.getElementById("touchDeck");
  const _0x2f31cb = document.getElementById("touchStick");
  const _0x4cd3a4 = document.getElementById("touchNub");
  const _0x43ef0e = document.getElementById("touchCue");
  const _0x4689c8 = document.getElementById("touchSwap");
  const _0x8d6ef8 = document.getElementById("touchPause");
  const _0x5e1dec = Boolean(_0x57b9fd && _0x2f31cb && _0x4cd3a4 && function (_0x3895a5 = new URLSearchParams(location.search)) {
    return _0x3895a5.get("touch") === "1" || _0x3895a5.get("touch") !== "0" && (navigator.maxTouchPoints > 0 || matchMedia("(pointer: coarse)").matches);
  }());
  const _0x2c976e = new Set();
  let _0x44dced = null;
  let _0x36d08c = 0;
  let _0xbd5f48 = 0;
  let _0x97f01f = 0;
  let _0x826d7c = 0;
  let _0x1dda9e = 0;
  let _0x40f5a1 = false;
  let _0x118c97 = false;
  let _0x4784c6 = 0;
  let _0x46f32d = 0;
  let _0x1f5325 = false;
  let _0x7e3ee2 = 0;
  let _0x129daa = 0;
  let _0x337e42 = 0;
  let _0x133877 = false;
  function _0x505ec0() {
    return n(Math.min(innerWidth, innerHeight) * 0.105, 48, 68);
  }
  function _0x29b609(_0x75cf8c, _0x45e577) {
    if (_0x45e577 !== _0x2c976e.has(_0x75cf8c)) {
      if (_0x45e577) {
        _0x2c976e.add(_0x75cf8c);
      } else {
        _0x2c976e.delete(_0x75cf8c);
      }
      _0x13105e(_0x75cf8c, _0x45e577 ? "keydown" : "keyup", false);
    }
  }
  function _0x5ec903() {
    for (const _0x183aeb of [..._0x2c976e]) {
      _0x29b609(_0x183aeb, false);
    }
    _0x97f01f = 0;
    _0x826d7c = 0;
    _0x1dda9e = 0;
    _0x40f5a1 = false;
  }
  function _0x293065() {
    if (_0x46f32d) {
      clearTimeout(_0x46f32d);
    }
    _0x46f32d = 0;
    if (_0x1f5325) {
      _0x1f5325 = false;
      _0x13105e(e, "keyup", false);
    }
  }
  function _0x319944() {
    _0x293065();
    _0x13105e(e, "keydown", false);
    _0x1f5325 = true;
    _0x337e42++;
    _0x46f32d = setTimeout(_0x293065, 96);
    _0x57b9fd.classList.remove("jump");
    _0x57b9fd.offsetWidth;
    _0x57b9fd.classList.add("jump");
  }
  function _0x19bf6e() {
    if (_0x4784c6) {
      clearTimeout(_0x4784c6);
    }
    _0x4784c6 = 0;
    _0x118c97 = false;
    _0x57b9fd.classList.remove("clutch");
  }
  function _0x37d473() {
    _0x2f31cb.classList.remove("on", "firing");
    _0x43ef0e.textContent = "DRAG · OUTER RAIL FIRES · TAP JUMPS";
  }
  function _0x1b540d({
    release: _0x53e0bb = true
  } = {}) {
    _0x44dced = null;
    _0x19bf6e();
    if (_0x53e0bb) {
      _0x5ec903();
      _0x293065();
    } else {
      _0x2c976e.clear();
      _0x1f5325 = false;
      if (_0x46f32d) {
        clearTimeout(_0x46f32d);
      }
      _0x46f32d = 0;
    }
    _0x37d473();
  }
  function _0x45c991(_0x204ca4, _0x1320ab) {
    const _0xf7c42 = _0x505ec0();
    const _0x57801a = _0xf7c42 * 1.48;
    const _0x2b66b6 = Math.hypot(_0x204ca4, _0x1320ab);
    const _0x83348c = _0x2b66b6 > _0x57801a ? _0x57801a / _0x2b66b6 : 1;
    _0x97f01f = _0x204ca4 * _0x83348c;
    _0x826d7c = _0x1320ab * _0x83348c;
    _0x1dda9e = _0x2b66b6;
    _0x129daa = Math.max(_0x129daa, _0x2b66b6);
    _0x4cd3a4.style.transform = "translate(" + _0x97f01f + "px, " + _0x826d7c + "px)";
    const _0xce673f = _0xf7c42 * 0.27;
    _0x29b609(t.left, _0x97f01f < -_0xce673f);
    _0x29b609(t.right, _0x97f01f > _0xce673f);
    _0x29b609(t.up, _0x826d7c < -_0xce673f);
    _0x29b609(t.down, _0x826d7c > _0xce673f);
    _0x40f5a1 = _0x2b66b6 >= _0xf7c42 * 1.14;
    _0x29b609("KeyX", _0x40f5a1);
    _0x2f31cb.classList.toggle("firing", _0x40f5a1);
    _0x43ef0e.textContent = _0x40f5a1 ? "FIRE LOCK · LIFT TO CLUTCH" : "AIM / MOVE · PUSH OUT TO FIRE";
  }
  if (_0x5e1dec) {
    document.body.classList.add("touch-controls");
    _0x57b9fd.hidden = false;
    _0x57b9fd.addEventListener("pointerdown", function (_0x2567aa) {
      if (_0x44dced === null && !(_0x2567aa.button > 0)) {
        _0x2567aa.preventDefault();
        _0x2567aa.stopPropagation();
        _0x10b9a3();
        if (_0x4fb970()) {
          _0x44dced = _0x2567aa.pointerId;
          _0x57b9fd.setPointerCapture?.(_0x44dced);
          _0x7e3ee2 = performance.now();
          _0x129daa = 0;
          _0x133877 = false;
          if (_0x118c97) {
            _0x19bf6e();
            _0x319944();
            _0x133877 = true;
            _0x2f31cb.classList.add("on");
            _0x45c991(_0x2567aa.clientX - _0x36d08c, _0x2567aa.clientY - _0xbd5f48);
          } else {
            (function (_0xb6c16b, _0x48f27e) {
              const _0x1bd87a = _0x505ec0();
              const _0x15cc16 = _0x57b9fd.getBoundingClientRect();
              _0x36d08c = n(_0xb6c16b, _0x15cc16.left + _0x1bd87a * 1.76, _0x15cc16.right - _0x1bd87a * 1.76);
              _0xbd5f48 = n(_0x48f27e, _0x15cc16.top + _0x1bd87a * 1.68, _0x15cc16.bottom - _0x1bd87a * 1.68);
              _0x2f31cb.style.setProperty("--stick-x", _0x36d08c + "px");
              _0x2f31cb.style.setProperty("--stick-y", _0xbd5f48 + "px");
              _0x2f31cb.style.setProperty("--stick-r", _0x1bd87a + "px");
              _0x2f31cb.classList.add("on");
            })(_0x2567aa.clientX, _0x2567aa.clientY);
            _0x4cd3a4.style.transform = "translate(0px, 0px)";
            _0x5ec903();
          }
        }
      }
    });
    _0x57b9fd.addEventListener("pointermove", function (_0x3e9f21) {
      if (_0x3e9f21.pointerId === _0x44dced) {
        _0x3e9f21.preventDefault();
        _0x45c991(_0x3e9f21.clientX - _0x36d08c, _0x3e9f21.clientY - _0xbd5f48);
      }
    });
    _0x57b9fd.addEventListener("pointerup", function (_0x240357) {
      if (_0x240357.pointerId !== _0x44dced) {
        return;
      }
      _0x240357.preventDefault();
      _0x240357.stopPropagation();
      _0x44dced = null;
      const _0x5823d7 = performance.now() - _0x7e3ee2 <= 170 && _0x129daa <= 13;
      const _0x5355cb = _0x1dda9e < _0x505ec0() * 0.27;
      if (_0x5823d7 && !_0x133877 || _0x5355cb) {
        _0x5ec903();
        _0x19bf6e();
        _0x37d473();
        if (_0x5823d7 && !_0x133877) {
          _0x319944();
        }
        return;
      }
      _0x118c97 = true;
      _0x57b9fd.classList.add("clutch");
      _0x43ef0e.textContent = "CLUTCH · TAP AGAIN TO JUMP";
      _0x4784c6 = setTimeout(() => {
        _0x4784c6 = 0;
        _0x118c97 = false;
        _0x57b9fd.classList.remove("clutch");
        _0x5ec903();
        _0x37d473();
      }, 380);
    });
    _0x57b9fd.addEventListener("pointercancel", function (_0x1af514) {
      if (!_0x1af514 || _0x44dced === null || _0x1af514.pointerId === _0x44dced) {
        _0x1b540d();
      }
    });
    _0x4689c8.addEventListener("pointerdown", _0x2b3e37 => function (_0x2b1e15, _0x32218d) {
      _0x2b1e15.preventDefault();
      _0x2b1e15.stopPropagation();
      _0x10b9a3();
      if (_0x4fb970()) {
        _0x13105e(_0x32218d, "keydown", false);
        setTimeout(() => _0x13105e(_0x32218d, "keyup", false), 72);
      }
    }(_0x2b3e37, "KeyC"));
    _0x8d6ef8.addEventListener("pointerdown", _0x262fa3 => {
      _0x262fa3.preventDefault();
      _0x262fa3.stopPropagation();
      _0x2a750b();
    });
    addEventListener("blur", () => _0x1b540d());
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        _0x1b540d();
      }
    });
  }
  const _0x409c85 = () => ({
    enabled: _0x5e1dec,
    active: _0x44dced !== null,
    clutch: _0x118c97,
    vector: {
      x: +_0x97f01f.toFixed(2),
      y: +_0x826d7c.toFixed(2),
      magnitude: +_0x1dda9e.toFixed(2)
    },
    fire: _0x40f5a1,
    held: [..._0x2c976e],
    jumps: _0x337e42
  });
  const _0x31d699 = {
    enabled: _0x5e1dec,
    reset: _0x1b540d,
    snapshot: _0x409c85
  };
  if (typeof window != "undefined") {
    window.__HB_TOUCH = _0x409c85;
  }
  return _0x31d699;
}