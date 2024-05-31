module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets", {overwrite: true, expand: true});
};