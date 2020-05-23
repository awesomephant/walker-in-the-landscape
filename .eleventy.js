const pluginSass = require("eleventy-plugin-sass");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {

    let options = {
        html: true,
        breaks: false,
        linkify: true
    };


    eleventyConfig.addPairedShortcode("header", function (content) {
        return `<header class='section-header'>${content}</header>`
    });
    eleventyConfig.addPairedShortcode("footer", function (content) {
        return `<footer class='play-footer'>${content}</footer>`
    });

    eleventyConfig.addPairedShortcode("image", function (content, url) {
        return `<p data-image="${url}">${content}</p>`
    });

    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("/*.png");
    eleventyConfig.addPassthroughCopy("/*.png");
    eleventyConfig.addPassthroughCopy("/*.xml");
    eleventyConfig.addPassthroughCopy("favicon.ico");
    eleventyConfig.addPassthroughCopy("site.webmanifest");

    eleventyConfig.addPlugin(pluginSass, {});
    eleventyConfig.setLibrary("md", markdownIt(options));

    eleventyConfig.addTransform("swapImagePaths", function (content, outputPath) {
        if (outputPath.endsWith(".html")) {
            const processed = content.replace(/(.jpg)|(.jpeg)/gi, '@1200w.webp')
            return processed;
        }

        return content;
    })

    return {}
};