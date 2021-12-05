module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/styles/tailwind.css");
  eleventyConfig.addWatchTarget("./src/scripts/main.js");
  eleventyConfig.addPassthroughCopy("./src/images/");
  eleventyConfig.addPassthroughCopy("./src/scripts/bundle.js");
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
