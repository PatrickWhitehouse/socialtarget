import AOS from "aos";

// Random Console Fun
const emojis = ["❤️‍🔥", "🧜‍♀️", "🛼", "👩🏼‍❤️‍💋‍👨🏻", "🌺"];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
console.log(
  `%cHere's a random emoji my guy. ${randomEmoji}`,
  "color:salmon;font-size:40px"
);
console.log(`%cSite built by @patrickdoesweb`, "color:lavendar;font-size:40px");

// AOS Lib
AOS.init({
  disable: false,
  mirror: false,
  once: true,
  offset: 0,
  duration: 850,
});

// Hamburger
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".main-nav-el");
hamburger.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
