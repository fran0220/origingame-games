const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreEl = document.getElementById("score");
const bestEl = document.getElementById("best");
const overlay = document.getElementById("overlay");
const startButton = document.getElementById("start");
const soundButton = document.getElementById("sound");
const keys = {
  left: false,
  right: false,
  jump: false
};
const img = {};
const assets = {
  player: "./assets/img/player.svg",
  star: "./assets/img/star.svg",
  spark: "./assets/img/spark.svg",
  cloud: "./assets/img/cloud.svg"
};
let clickAudio;
let state = "menu";
let score = 0;
let best = Number(localStorage.getItem("sky-switch-best") || 0);
let cameraX = 0;
let lastTime = performance.now();
let muted = false;
let platforms = [];
let stars = [];
let sparks = [];
const player = {
  x: 120,
  y: 430,
  w: 58,
  h: 74,
  vx: 0,
  vy: 0,
  grounded: false,
  facing: 1
};
bestEl.textContent = best;
for (const [e, t] of Object.entries(assets)) {
  img[e] = new Image();
  img[e].src = t;
}
const og = window.OG ?? null;
function resetGame() {
  state = "playing";
  score = 0;
  cameraX = 0;
  Object.assign(player, {
    x: 120,
    y: 430,
    vx: 0,
    vy: 0,
    grounded: false,
    facing: 1
  });
  platforms = [{
    x: 0,
    y: 620,
    w: 400,
    h: 42,
    hue: 0
  }, {
    x: 470,
    y: 545,
    w: 210,
    h: 36,
    hue: 1
  }, {
    x: 790,
    y: 475,
    w: 230,
    h: 36,
    hue: 2
  }];
  stars = [];
  sparks = [];
  for (let _0x3a055a = 0; _0x3a055a < 28; _0x3a055a++) {
    addSegment(_0x3a055a);
  }
  overlay.classList.add("hidden");
  updateScore();
  playClick();
}
function addSegment(_0x2dbb2b) {
  const _0x23a790 = 1080 + _0x2dbb2b * 270;
  const _0x296b5f = 600 - _0x2dbb2b * 73 % 250;
  const _0x521568 = 170 + _0x2dbb2b * 41 % 90;
  platforms.push({
    x: _0x23a790,
    y: _0x296b5f,
    w: _0x521568,
    h: 34,
    hue: _0x2dbb2b % 4
  });
  stars.push({
    x: _0x23a790 + _0x521568 * 0.5 - 22,
    y: _0x296b5f - 72,
    r: 26,
    taken: false
  });
  if (_0x2dbb2b % 3 == 2) {
    sparks.push({
      x: _0x23a790 + _0x521568 - 58,
      y: _0x296b5f - 48,
      r: 26,
      phase: _0x2dbb2b
    });
  }
}
function updateScore() {
  scoreEl.textContent = score;
  bestEl.textContent = best;
}
function playClick() {
  if (!muted) {
    clickAudio ||= new Audio("./assets/audio/button-click.mp3");
    clickAudio.currentTime = 0;
    clickAudio.play().catch(() => {});
  }
}
function jump() {
  if (state === "playing" && player.grounded) {
    player.vy = -850;
    player.grounded = false;
    playClick();
  }
}
function update(_0x3bcf1d) {
  if (state !== "playing") {
    return;
  }
  const _0xd9a162 = player.grounded ? 0.82 : 0.94;
  if (keys.left) {
    player.vx -= _0x3bcf1d * 2600;
    player.facing = -1;
  }
  if (keys.right) {
    player.vx += _0x3bcf1d * 2600;
    player.facing = 1;
  }
  if (keys.jump) {
    jump();
  }
  player.vx *= _0xd9a162;
  player.vx = Math.max(-430, Math.min(430, player.vx));
  player.vy += _0x3bcf1d * 2100;
  const _0x317c2b = player.y;
  player.x += player.vx * _0x3bcf1d;
  player.y += player.vy * _0x3bcf1d;
  player.grounded = false;
  for (const _0x3afb6b of platforms) {
    const _0x337db8 = player.x + player.w * 0.76 > _0x3afb6b.x && player.x + player.w * 0.24 < _0x3afb6b.x + _0x3afb6b.w;
    const _0x453415 = player.vy >= 0 && _0x317c2b + player.h <= _0x3afb6b.y + 14 && player.y + player.h >= _0x3afb6b.y;
    if (_0x337db8 && _0x453415) {
      player.y = _0x3afb6b.y - player.h;
      player.vy = 0;
      player.grounded = true;
    }
  }
  for (const _0x16ee13 of stars) {
    if (!_0x16ee13.taken && hitCircle(_0x16ee13.x, _0x16ee13.y, _0x16ee13.r, player)) {
      _0x16ee13.taken = true;
      score += 10;
      best = Math.max(best, score);
      localStorage.setItem("sky-switch-best", String(best));
      updateScore();
      playClick();
    }
  }
  for (const _0xe348c of sparks) {
    _0xe348c.phase += _0x3bcf1d * 5;
    const _0x150618 = _0xe348c.r + Math.sin(_0xe348c.phase) * 5;
    if (hitCircle(_0xe348c.x, _0xe348c.y, _0x150618, player)) {
      endGame();
    }
  }
  score = Math.max(score, Math.floor(player.x / 22));
  best = Math.max(best, score);
  updateScore();
  cameraX = Math.max(0, player.x - 360);
  if (player.y > 900) {
    endGame();
  }
}
function endGame() {
  if (state === "playing") {
    state = "done";
    localStorage.setItem("sky-switch-best", String(best));
    og?.leaderboard?.submit?.(score).catch?.(console.warn);
    overlay.classList.remove("hidden");
    overlay.querySelector("h1").textContent = "Run Over";
    overlay.querySelector("p").textContent = "Score " + score + ". Best " + best + ".";
    startButton.textContent = "Retry";
  }
}
function hitCircle(_0x40b044, _0x23c52a, _0xaf7d3e, _0x3d9ddf) {
  const _0x53f1bd = _0x40b044 - Math.max(_0x3d9ddf.x, Math.min(_0x40b044, _0x3d9ddf.x + _0x3d9ddf.w));
  const _0x5c2a03 = _0x23c52a - Math.max(_0x3d9ddf.y, Math.min(_0x23c52a, _0x3d9ddf.y + _0x3d9ddf.h));
  return _0x53f1bd * _0x53f1bd + _0x5c2a03 * _0x5c2a03 < _0xaf7d3e * _0xaf7d3e;
}
function draw() {
  ctx.clearRect(0, 0, 1280, 720);
  drawSky();
  ctx.save();
  ctx.translate(-cameraX, 0);
  drawClouds();
  drawPlatforms();
  drawCollectibles();
  drawPlayer();
  ctx.restore();
}
function drawSky() {
  const _0x3ba15c = ctx.createLinearGradient(0, 0, 0, 720);
  _0x3ba15c.addColorStop(0, "#101a3a");
  _0x3ba15c.addColorStop(0.55, "#1d5c7f");
  _0x3ba15c.addColorStop(1, "#1f8f98");
  ctx.fillStyle = _0x3ba15c;
  ctx.fillRect(0, 0, 1280, 720);
  ctx.fillStyle = "rgba(255,255,255,.8)";
  for (let _0x57ffec = 0; _0x57ffec < 70; _0x57ffec++) {
    const _0x52b7eb = (_0x57ffec * 179 - cameraX * 0.22) % 1360;
    const _0x27e022 = 40 + _0x57ffec * 67 % 260;
    ctx.fillRect(_0x52b7eb, _0x27e022, 2, 2);
  }
}
function drawClouds() {
  for (let _0x432bde = 0; _0x432bde < 18; _0x432bde++) {
    const _0x559830 = _0x432bde * 420 + 80;
    const _0x10d5ca = 90 + _0x432bde * 47 % 190;
    ctx.globalAlpha = 0.5;
    ctx.drawImage(img.cloud, _0x559830, _0x10d5ca, 240, 96);
  }
  ctx.globalAlpha = 1;
}
function drawPlatforms() {
  const _0x2c985c = [["#44c063", "#245c3c"], ["#62d48b", "#315f49"], ["#3eb1b9", "#255b63"], ["#ffd166", "#8d6730"]];
  for (const _0x4a0942 of platforms) {
    const [_0x42a1d4, _0x22dd26] = _0x2c985c[_0x4a0942.hue % _0x2c985c.length];
    roundedRect(_0x4a0942.x, _0x4a0942.y, _0x4a0942.w, _0x4a0942.h, 8, _0x42a1d4);
    roundedRect(_0x4a0942.x + 10, _0x4a0942.y + _0x4a0942.h - 6, _0x4a0942.w - 20, 20, 8, _0x22dd26);
    ctx.fillStyle = "rgba(255,255,255,.18)";
    ctx.fillRect(_0x4a0942.x + 18, _0x4a0942.y + 8, Math.max(18, _0x4a0942.w - 36), 4);
  }
}
function drawCollectibles() {
  for (const _0x488b38 of stars) {
    if (!_0x488b38.taken) {
      const _0x5a8bcc = Math.sin(performance.now() / 220 + _0x488b38.x) * 7;
      ctx.drawImage(img.star, _0x488b38.x - 25, _0x488b38.y - 25 + _0x5a8bcc, 50, 50);
    }
  }
  for (const _0x30911c of sparks) {
    const _0x4b650d = 54 + Math.sin(_0x30911c.phase) * 8;
    ctx.drawImage(img.spark, _0x30911c.x - _0x4b650d / 2, _0x30911c.y - _0x4b650d / 2, _0x4b650d, _0x4b650d);
  }
}
function drawPlayer() {
  ctx.save();
  if (player.facing < 0) {
    ctx.translate(player.x + player.w, player.y);
    ctx.scale(-1, 1);
    ctx.drawImage(img.player, 0, 0, player.w, player.h);
  } else {
    ctx.drawImage(img.player, player.x, player.y, player.w, player.h);
  }
  ctx.restore();
}
function roundedRect(_0x42b1eb, _0x3f18e2, _0x5a7202, _0x813f3a, _0x1b5675, _0x12a646) {
  ctx.fillStyle = _0x12a646;
  ctx.beginPath();
  ctx.roundRect(_0x42b1eb, _0x3f18e2, _0x5a7202, _0x813f3a, _0x1b5675);
  ctx.fill();
}
function loop(_0x19a55b) {
  const _0x4e392d = Math.min(0.033, (_0x19a55b - lastTime) / 1000);
  lastTime = _0x19a55b;
  update(_0x4e392d);
  draw();
  requestAnimationFrame(loop);
}
function resize() {
  const _0x549ffe = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.floor(innerWidth * _0x549ffe);
  canvas.height = Math.floor(innerHeight * _0x549ffe);
  ctx.setTransform(canvas.width / 1280, 0, 0, canvas.height / 720, 0, 0);
}
og?.ready?.().catch?.(console.warn);
addEventListener("resize", resize);
addEventListener("keydown", _0x42dc47 => {
  if (_0x42dc47.code === "ArrowLeft" || _0x42dc47.code === "KeyA") {
    keys.left = true;
  }
  if (_0x42dc47.code === "ArrowRight" || _0x42dc47.code === "KeyD") {
    keys.right = true;
  }
  if (_0x42dc47.code === "Space" || _0x42dc47.code === "ArrowUp" || _0x42dc47.code === "KeyW") {
    keys.jump = true;
    _0x42dc47.preventDefault();
  }
});
addEventListener("keyup", _0x478627 => {
  if (_0x478627.code === "ArrowLeft" || _0x478627.code === "KeyA") {
    keys.left = false;
  }
  if (_0x478627.code === "ArrowRight" || _0x478627.code === "KeyD") {
    keys.right = false;
  }
  if (_0x478627.code === "Space" || _0x478627.code === "ArrowUp" || _0x478627.code === "KeyW") {
    keys.jump = false;
  }
});
document.querySelectorAll("[data-control]").forEach(_0x114cb1 => {
  const _0x24554a = _0x114cb1.dataset.control;
  const _0x212547 = _0x1090d7 => {
    if (_0x24554a === "left") {
      keys.left = _0x1090d7;
    }
    if (_0x24554a === "right") {
      keys.right = _0x1090d7;
    }
    if (_0x24554a === "jump") {
      keys.jump = _0x1090d7;
    }
  };
  _0x114cb1.addEventListener("pointerdown", _0x1d28f0 => {
    _0x1d28f0.preventDefault();
    _0x212547(true);
  });
  _0x114cb1.addEventListener("pointerup", () => _0x212547(false));
  _0x114cb1.addEventListener("pointercancel", () => _0x212547(false));
  _0x114cb1.addEventListener("pointerleave", () => _0x212547(false));
});
startButton.addEventListener("click", resetGame);
soundButton.addEventListener("click", () => {
  muted = !muted;
  soundButton.textContent = muted ? "×" : "♪";
});
resize();
requestAnimationFrame(loop);