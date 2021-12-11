import AOS from "aos";
const emojis = ["❤️‍🔥", "🧜‍♀️", "🛼", "👩🏼‍❤️‍💋‍👨🏻", "🌺"];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
console.log(
  `%cHere's a random emoji my guy. ${randomEmoji}`,
  "color:salmon;font-size:40px"
);
console.log(`%cSite built by @patrickdoesweb`, "color:lavendar;font-size:40px");

AOS.init({
  disable: "phone",
  mirror: false,
  once: true,
  offset: 0,
  duration: 850,
});
