module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("./src/styles/styles.css");
	return {
		dir: {
			input: "src",
			output: "public",
		},
	};
};
