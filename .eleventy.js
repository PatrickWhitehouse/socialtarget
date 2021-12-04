module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/styles/tailwind.css");
    eleventyConfig.addPassthroughCopy("./src/images/");
    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
