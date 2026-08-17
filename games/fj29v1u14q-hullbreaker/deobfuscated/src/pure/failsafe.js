export const FAILSAFE = {
  streakWindowMs: 2000,
  recoverAfterMs: 500,
  minFaults: 5,
  maxRecoveries: 2,
  bootWatchdogMs: 10000,
  freezeStallMs: 4000,
  freezeTickMs: 1000,
  frameDtMaxMs: 50
};
export const FAILSAFE_KINDS = ["boot", "crash", "frozen", "slow"];
export const FAILSAFE_KEYS = ["KeyR", "Enter", "Space"];
export function freshFaultState() {
  return {
    faults: 0,
    firstMs: 0,
    lastMs: -Infinity,
    recoveries: 0,
    halted: false
  };
}
export function faultStep(_0x4ce584, _0x4acece, _0x462bde = FAILSAFE) {
  const _0x286bbe = Number.isFinite(_0x4acece) ? _0x4acece : Number.isFinite(_0x4ce584.lastMs) ? _0x4ce584.lastMs : 0;
  if (_0x4ce584.halted) {
    return {
      ..._0x4ce584,
      action: "stop"
    };
  }
  const _0x599b79 = {
    faults: _0x286bbe - _0x4ce584.lastMs <= _0x462bde.streakWindowMs ? _0x4ce584.faults + 1 : 1,
    firstMs: _0x286bbe - _0x4ce584.lastMs <= _0x462bde.streakWindowMs ? _0x4ce584.firstMs : _0x286bbe,
    lastMs: _0x286bbe,
    recoveries: _0x4ce584.recoveries,
    halted: false
  };
  let _0x102902 = "ignore";
  if (_0x599b79.faults >= _0x462bde.minFaults && _0x286bbe - _0x599b79.firstMs >= _0x462bde.recoverAfterMs) {
    if (_0x599b79.recoveries < _0x462bde.maxRecoveries) {
      _0x102902 = "recover";
      _0x599b79.recoveries = _0x4ce584.recoveries + 1;
      _0x599b79.faults = 0;
      _0x599b79.firstMs = _0x286bbe;
    } else {
      _0x102902 = "stop";
      _0x599b79.halted = true;
    }
  }
  return {
    ..._0x599b79,
    action: _0x102902
  };
}
export const PLAIN = {
  maxWordLetters: 11,
  maxSentenceWords: 14,
  techWords: ["error", "errors", "exception", "undefined", "null", "nan", "stack", "syntax", "javascript", "js", "code", "callback", "promise", "fetch", "http", "https", "url", "cache", "uncaught", "runtime", "thread", "buffer", "context", "webgl", "shader", "gpu", "canvas", "dom", "browser", "debug", "log", "trace", "crash", "fatal", "invalid"]
};
export function plainLanguageIssues(_0x3453f5, _0x5cbbf3 = PLAIN) {
  const _0x5598bc = [];
  const _0x58882d = typeof _0x3453f5 == "string" ? _0x3453f5 : String(_0x3453f5 == null ? "" : _0x3453f5);
  const _0x2d5c1e = _0x58882d.toLowerCase();
  for (const _0x271a03 of _0x5cbbf3.techWords) {
    if (new RegExp("\\b" + _0x271a03 + "\\b").test(_0x2d5c1e)) {
      _0x5598bc.push("jargon \"" + _0x271a03 + "\"");
    }
  }
  for (const _0xdd9527 of _0x58882d.split(/[^A-Za-z']+/)) {
    if (_0xdd9527.length > _0x5cbbf3.maxWordLetters) {
      _0x5598bc.push("long word \"" + _0xdd9527 + "\"");
    }
  }
  for (const _0x168919 of _0x58882d.split(/[.!?…]+/)) {
    const _0x198fda = _0x168919.trim().split(/\s+/).filter(Boolean).length;
    if (_0x198fda > _0x5cbbf3.maxSentenceWords) {
      _0x5598bc.push("long sentence (" + _0x198fda + " words)");
    }
  }
  return _0x5598bc;
}