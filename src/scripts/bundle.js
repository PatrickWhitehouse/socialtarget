(() => {
  // src/scripts/main.js
  var emojis = ["\u2764\uFE0F\u200D\u{1F525}", "\u{1F9DC}\u200D\u2640\uFE0F", "\u{1F6FC}", "\u{1F469}\u{1F3FC}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}\u{1F3FB}", "\u{1F33A}"];
  var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
  console.log(`%cHere's a random emoji my guy. ${randomEmoji}`, "color:salmon;font-size:40px");
})();
