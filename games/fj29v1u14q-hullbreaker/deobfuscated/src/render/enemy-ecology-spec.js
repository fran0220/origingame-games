export const ENEMY_ECOLOGY_MANIFEST_SHA256 = "f167990152404c3fa6a5659bf4adb1ca194168b3b463fbafc1fadd79adbd7115";
export const ENEMY_ECOLOGY_COMPONENT_SHA256 = "1b5b78da1ad52d187ddd75e7942e9435c861122538805a544838472937dbc1bf";
export const ENEMY_ECOLOGY_ATLAS = Object.freeze({
  file: "../../assets/generated/enemy-ecology/level1-enemy-ecology-atlas-v1.webp",
  sourceFile: "../../assets/generated/enemy-ecology/level1-enemy-ecology-atlas-v1.png",
  canvas: Object.freeze([3840, 1280]),
  grid: Object.freeze([24, 8]),
  cellPx: 160,
  componentCount: 192,
  visualStateCount: 768,
  estimatedGpuBytes: 26214400
});
const B = Object.freeze([["hound-railfang", "hunter", "hound", 0, 1, [-75.098592, -16.645455, 75.826347, 95.343784]], ["hound-vaultjaw", "hunter", "hound", 2, 3, [-73.207317, -18.362882, 76.842857, 104.139468]], ["hound-rebound", "hunter", "hound", 4, 5, [-74.542955, -4.797638, 72.006369, 96.376339]], ["wasp-crosswind", "aerial", "wasp", 6, 7, [-50.327684, -44.018661, 88.522634, 53.491571]], ["wasp-diveclaw", "aerial", "wasp", 8, 9, [-71.766764, -65.748, 74.02214, 69.982932]], ["wasp-pincer", "aerial", "wasp", 10, 11, [-87.644444, -47.307975, 68.322275, 55.50184]], ["polyp-needle", "connector", "polyp", 12, 13, [-50.681648, -23.97, 96.792453, 129.725815]], ["polyp-sweepfan", "connector", "polyp", 14, 15, [-87.59322, -24.970228, 68.6375, 105.476545]], ["polyp-gateweaver", "connector", "polyp", 16, 17, [-94.186335, -15.949749, 48.05102, 88.347753]], ["mortar-craterpod", "denial", "mortar", 18, 19, [-60.173913, -14.879136, 85.968912, 83.406333]], ["mortar-bracketpod", "denial", "mortar", 20, 21, [-67.741935, -8.940432, 76.242424, 59.932632]], ["mortar-aircomb", "denial", "mortar", 22, 23, [-87.756757, -12.311569, 52.686327, 98.385366]]]);
const A = function () {
  const _0x53ef9e = "*ô*ùèè3Z3ÖSÍq±3V3Êë$1&1¦¸%Ü\0\tJJ2VqQXQ»Ü´ÄO«OíO÷V\bO¢EuaYaÛËþ©pÆpßÌöápÁpÑóøàÀ¯úqxqsÛ6¸SS(²q\b\bqÜ%íÐ¼²\b¼)Iî&>ë>í¦$CAC¾8ï\n7=7®ø¯\n00+ýäì>G>©,ät<W<¸\0Á\t¯``à8AÜV\bÜNiZpC¹¹dè¹4¹Í\0¹,¹>\0¹Y¹3©ºÿ©~&¥k¥eIÈøø\\i\\L/ä/ååö+áqáqO\np\\p11ûÄ++ýøìø(6(\bØ\\Øóós\0\xA0\xA0ö*ö\r\xA0È¿Èþ@8_8<<ßøøc;c5lläE\rg\rxxåTýpýH¦Ì00aûÃ>Ã-F-&,\\p\\8\nXOX:ÿ:×o¯'°'Ûyá\n³ÛKÿ \nÛ8\t8gq\b\tß#|\t#÷\tÛí#y\b¡\bß~~`Ø0\nÿ]K]v9,\n\në(\bëñ±\tÔ/ªÒò\0··?Ð8\0ì××@×M\0\0à¨\bàÕG\0øÌÌ\b×9\0ìò¨ò7Õt\0çÄç:ö2¹\0Ûö«öâ9äû\0®'!'âè×/</+¤Eò&Q&3­&Tû?\b?V°Yì¬O¬£JÛ©d©7îôÁµµI©òOÂÅÅr0W¯WG¼çÉ@@ûº¹éPBPÆÃìgûgK\\Áì\t\t0k¶èºUºú¯ÃÖÃfÃ\rm«ãàÃ\t+üüy29\0]þûþ)|>@\0dö\0ö*|X@\0|ô_ô!q[/\0úú|==\0a\0ÿ\0üy\b9\0;éëy9\0UöÛö¤yC9\088Ùÿ\0a2Á2Ü`\b¥2Æ2úe!¨$Æ\b$<NgÆÆËWó\0I'I»$=wbb/>Eõ\bõÄ6L";
  const _0x1b2869 = new Uint8Array(_0x53ef9e.length);
  for (let _0x20c9ba = 0; _0x20c9ba < _0x53ef9e.length; _0x20c9ba++) {
    _0x1b2869[_0x20c9ba] = _0x53ef9e.charCodeAt(_0x20c9ba);
  }
  const _0x762d7f = new DataView(_0x1b2869.buffer);
  const _0x1c0b5b = [];
  for (let _0x104ff6 = 0; _0x104ff6 < B.length; _0x104ff6++) {
    const _0x2f633d = [];
    for (let _0x495b8a = 0; _0x495b8a < 8; _0x495b8a++) {
      const _0xa01bc7 = (_0x104ff6 * 8 + _0x495b8a) * 8 * 2;
      const _0x3ad527 = _0xcff87 => _0x762d7f.getInt16(_0xa01bc7 + _0xcff87 * 2, true) / 16;
      _0x2f633d.push(Object.freeze({
        bodyRoot: Object.freeze([_0x3ad527(0), _0x3ad527(1)]),
        bodyPivot: Object.freeze([_0x3ad527(2), _0x3ad527(3)]),
        actionPivot: Object.freeze([_0x3ad527(4), _0x3ad527(5)]),
        actionAttack: Object.freeze([_0x3ad527(6), _0x3ad527(7)])
      }));
    }
    _0x1c0b5b.push(Object.freeze(_0x2f633d));
  }
  return _0x1c0b5b;
}();
const e = new Map();
export const ENEMY_ECOLOGY_VARIANTS = Object.freeze(B.map((_0x55e7c7, _0x32383f) => {
  const [_0x4c9809, _0x3ae115, _0x4557e2, _0x29f033, _0x1267df, _0x5b736a] = _0x55e7c7;
  const _0x1290d6 = Object.freeze({
    id: _0x4c9809,
    family: _0x3ae115,
    kind: _0x4557e2,
    bodyColumn: _0x29f033,
    actionColumn: _0x1267df,
    grounded: _0x3ae115 !== "aerial",
    bounds: Object.freeze(_0x5b736a),
    rows: A[_0x32383f]
  });
  e.set(_0x4c9809, _0x1290d6);
  return _0x1290d6;
}));
export function enemyEcologyVariant(_0x4d6eb1, _0x212462 = "") {
  const _0x2e6a1f = e.get(_0x4d6eb1);
  if (!_0x2e6a1f || _0x212462 && _0x2e6a1f.kind !== _0x212462) {
    return null;
  } else {
    return _0x2e6a1f;
  }
}