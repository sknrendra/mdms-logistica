module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css", {overwrite: true, expand: true});
    eleventyConfig.addPassthroughCopy("img", {overwrite: true, expand: true});
    eleventyConfig.addPassthroughCopy("js", {overwrite: true, expand: true});
    eleventyConfig.addPassthroughCopy("lib", {overwrite: true, expand: true});
};