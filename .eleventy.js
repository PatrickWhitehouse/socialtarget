module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/styles/tailwind.css");
    eleventyConfig.addPassthroughCopy("./src/styles/styles.css");
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
