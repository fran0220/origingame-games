const og = window.OG ?? null;
og?.ready?.().catch(console.warn);
const elements = {
  fire: {
    label: "火",
    icon: "♨",
    beats: "leaf",
    cls: "fire"
  },
  water: {
    label: "水",
    icon: "◆",
    beats: "fire",
    cls: "water"
  },
  leaf: {
    label: "叶",
    icon: "✦",
    beats: "water",
    cls: "leaf"
  }
};
const names = {
  fire: ["熔心", "赤焰", "余烬", "炽轮", "火冠"],
  water: ["潮汐", "蓝渊", "冰镜", "雨刃", "雾钟"],
  leaf: ["翠枝", "芽盾", "藤弓", "森语", "绿冠"]
};
const state = {
  deck: [],
  hand: [],
  playerWins: 0,
  enemyWins: 0,
  score: 0,
  streak: 0,
  roundLocked: false,
  gameOver: false
};
const handEl = document.getElementById("hand");
const playerWinsEl = document.getElementById("playerWins");
const enemyWinsEl = document.getElementById("enemyWins");
const scoreEl = document.getElementById("score");
const deckCountEl = document.getElementById("deckCount");
const messageEl = document.getElementById("message");
const playerCardEl = document.getElementById("playerCard");
const enemyCardEl = document.getElementById("enemyCard");
const playerPipsEl = document.getElementById("playerPips");
const enemyPipsEl = document.getElementById("enemyPips");
const nextButton = document.getElementById("nextButton");
const newButton = document.getElementById("newButton");
const leaderboardEl = document.getElementById("leaderboard");
function rand(_0x5b4d36) {
  return Math.floor(Math.random() * _0x5b4d36);
}
function shuffle(_0x1d9e54) {
  for (let _0x5c78f6 = _0x1d9e54.length - 1; _0x5c78f6 > 0; _0x5c78f6 -= 1) {
    const _0x5dac8a = rand(_0x5c78f6 + 1);
    [_0x1d9e54[_0x5c78f6], _0x1d9e54[_0x5dac8a]] = [_0x1d9e54[_0x5dac8a], _0x1d9e54[_0x5c78f6]];
  }
  return _0x1d9e54;
}
function makeDeck() {
  const _0x2246a6 = [];
  Object.keys(elements).forEach(_0x14aa9c => {
    for (let _0x67c028 = 1; _0x67c028 <= 10; _0x67c028 += 1) {
      _0x2246a6.push({
        id: crypto.randomUUID ? crypto.randomUUID() : _0x14aa9c + "-" + _0x67c028 + "-" + Math.random(),
        type: _0x14aa9c,
        power: _0x67c028,
        name: names[_0x14aa9c][_0x67c028 % names[_0x14aa9c].length]
      });
    }
  });
  return shuffle(_0x2246a6);
}
function draw(_0x37fb7f) {
  while (state.hand.length < _0x37fb7f && state.deck.length) {
    state.hand.push(state.deck.pop());
  }
}
function cardHtml(_0xbab161) {
  if (!_0xbab161) {
    return "";
  }
  const _0x5de489 = elements[_0xbab161.type];
  return "\n        <div class=\"head\">\n          <div class=\"name\">" + _0xbab161.name + "<br>" + _0x5de489.label + "符文</div>\n          <div class=\"power\">" + _0xbab161.power + "</div>\n        </div>\n        <div class=\"art\" aria-hidden=\"true\">" + _0x5de489.icon + "</div>\n        <div class=\"tag\">" + _0x5de489.label + "系 · 克制 " + elements[_0x5de489.beats].label + "系</div>\n      ";
}
function renderCard(_0xf78b0f, _0x1bd0bf) {
  _0xf78b0f.className = _0x1bd0bf ? "card " + elements[_0x1bd0bf.type].cls : "card back";
  _0xf78b0f.innerHTML = cardHtml(_0x1bd0bf);
}
function renderPips(_0x216954, _0x28c737) {
  _0x216954.innerHTML = "";
  for (let _0x322257 = 0; _0x322257 < 5; _0x322257 += 1) {
    const _0x286ed7 = document.createElement("span");
    _0x286ed7.className = "pip" + (_0x322257 < _0x28c737 ? " on" : "");
    _0x216954.appendChild(_0x286ed7);
  }
}
function renderHand() {
  handEl.innerHTML = "";
  state.hand.forEach(_0xfa775 => {
    const _0x51dd16 = document.createElement("button");
    _0x51dd16.className = "card " + elements[_0xfa775.type].cls;
    _0x51dd16.type = "button";
    _0x51dd16.disabled = state.roundLocked || state.gameOver;
    _0x51dd16.setAttribute("aria-label", "出牌：" + _0xfa775.name + elements[_0xfa775.type].label + "符文，点数" + _0xfa775.power);
    _0x51dd16.innerHTML = cardHtml(_0xfa775);
    _0x51dd16.addEventListener("click", () => playCard(_0xfa775.id));
    handEl.appendChild(_0x51dd16);
  });
}
function render() {
  playerWinsEl.textContent = state.playerWins;
  enemyWinsEl.textContent = state.enemyWins;
  scoreEl.textContent = state.score;
  deckCountEl.textContent = "牌库 " + state.deck.length;
  renderPips(playerPipsEl, state.playerWins);
  renderPips(enemyPipsEl, state.enemyWins);
  renderHand();
}
function compare(_0x4aa9f6, _0x3dca16) {
  let _0x32eaae = _0x4aa9f6.power;
  let _0x292c56 = _0x3dca16.power;
  if (elements[_0x4aa9f6.type].beats === _0x3dca16.type) {
    _0x32eaae += 2;
  }
  if (elements[_0x3dca16.type].beats === _0x4aa9f6.type) {
    _0x292c56 += 2;
  }
  if (_0x32eaae === _0x292c56) {
    return {
      winner: "draw",
      playerValue: _0x32eaae,
      enemyValue: _0x292c56
    };
  }
  return {
    winner: _0x32eaae > _0x292c56 ? "player" : "enemy",
    playerValue: _0x32eaae,
    enemyValue: _0x292c56
  };
}
async function finishGame(_0x3aa5bc) {
  state.gameOver = true;
  state.roundLocked = true;
  nextButton.disabled = true;
  const _0x2ec10c = _0x3aa5bc ? "你赢下整场决斗" : "对手赢下整场决斗";
  messageEl.textContent = _0x2ec10c + "。最终分数 " + state.score + "。";
  render();
  if (og?.leaderboard && _0x3aa5bc) {
    try {
      const _0x2471ad = await og.leaderboard.submit(state.score);
      const _0x4c4440 = await og.leaderboard.top(5);
      const _0x4f8a93 = _0x2471ad?.rank ? "第 " + _0x2471ad.rank + " 名" : "已提交";
      const _0x3c3488 = (_0x4c4440?.top ?? []).slice(0, 3).map(_0x2e5f1b => (_0x2e5f1b.name ?? "玩家") + " " + _0x2e5f1b.score).join(" · ");
      leaderboardEl.textContent = _0x3c3488 ? "排行榜 " + _0x4f8a93 + ": " + _0x3c3488 : "排行榜 " + _0x4f8a93;
    } catch (_0x273b8d) {
      console.warn(_0x273b8d);
      leaderboardEl.textContent = "排行榜暂时不可用";
    }
  }
}
function playCard(_0x1f06ea) {
  if (state.roundLocked || state.gameOver) {
    return;
  }
  const _0x4a33a9 = state.hand.findIndex(_0x3adf83 => _0x3adf83.id === _0x1f06ea);
  if (_0x4a33a9 < 0) {
    return;
  }
  const [_0x395295] = state.hand.splice(_0x4a33a9, 1);
  const _0x3ae2e0 = state.deck.pop() ?? state.hand[rand(state.hand.length)];
  const _0xc1f327 = compare(_0x395295, _0x3ae2e0);
  renderCard(playerCardEl, _0x395295);
  renderCard(enemyCardEl, _0x3ae2e0);
  if (_0xc1f327.winner === "player") {
    state.playerWins += 1;
    state.streak += 1;
    const _0x1d2525 = 100 + _0x395295.power * 10 + state.streak * 25;
    state.score += _0x1d2525;
    messageEl.textContent = "本回合胜利：" + _0xc1f327.playerValue + " 对 " + _0xc1f327.enemyValue + "，连胜 " + state.streak + "，+" + _0x1d2525 + " 分。";
  } else if (_0xc1f327.winner === "enemy") {
    state.enemyWins += 1;
    state.streak = 0;
    messageEl.textContent = "本回合失利：" + _0xc1f327.playerValue + " 对 " + _0xc1f327.enemyValue + "。";
  } else {
    state.score += 35;
    messageEl.textContent = "平局：" + _0xc1f327.playerValue + " 对 " + _0xc1f327.enemyValue + "，+35 分。";
  }
  state.roundLocked = true;
  nextButton.disabled = false;
  draw(5);
  render();
  if (state.playerWins >= 5 || state.enemyWins >= 5 || !state.deck.length && !state.hand.length) {
    finishGame(state.playerWins >= state.enemyWins);
  }
}
function nextRound() {
  if (state.gameOver) {
    return;
  }
  state.roundLocked = false;
  nextButton.disabled = true;
  renderCard(playerCardEl, null);
  renderCard(enemyCardEl, null);
  messageEl.textContent = "继续选择一张手牌。";
  draw(5);
  render();
}
function newGame() {
  state.deck = makeDeck();
  state.hand = [];
  state.playerWins = 0;
  state.enemyWins = 0;
  state.score = 0;
  state.streak = 0;
  state.roundLocked = false;
  state.gameOver = false;
  leaderboardEl.textContent = og?.leaderboard ? "赢下整场后提交排行榜" : "排行榜将在部署后启用";
  nextButton.disabled = true;
  renderCard(playerCardEl, null);
  renderCard(enemyCardEl, null);
  draw(5);
  messageEl.textContent = "选择一张手牌开始第一回合。";
  render();
}
nextButton.addEventListener("click", nextRound);
newButton.addEventListener("click", newGame);
newGame();