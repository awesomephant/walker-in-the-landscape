const pluginSass = require("eleventy-plugin-sass");

module.exports = function (eleventyConfig) {


    eleventyConfig.addShortcode("fig", function (url, caption) {
        return (
            `<figure><img loading="lazy" src='/assets/${url}'/><figcaption>${caption}</figcaption></figure>
            `
        );
    });
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

    return {}
};