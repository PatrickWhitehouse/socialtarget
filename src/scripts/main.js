const emojis = ["❤️‍🔥", "🧜‍♀️", "🛼", "👩🏼‍❤️‍💋‍👨🏻", "🌺"];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
console.log(
  `%cHere's a random emoji my guy. ${randomEmoji}`,
  "color:salmon;font-size:40px"
);
