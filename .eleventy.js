const { EleventyI18nPlugin } = require("@11ty/eleventy");
const i18n = require('eleventy-plugin-i18n');

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets", {overwrite: true, expand: true});
    
    eleventyConfig.addPlugin(EleventyI18nPlugin, {
		defaultLanguage: "en",
	});

    // fallback filter for _includes, since page.lang is not available there.
    eleventyConfig.addFilter("locale_url", function(url, page) {
        return `/${ page.lang || "en" }${url}`
    });

    eleventyConfig.addPlugin(i18n, {
        translations: {
          title: {
            'en': 'Mulia Jasa Indokor - Car Rental Company',
            'ko': '물리아 야사 인도코르(Mulia Jasa Indokor) - 자동차 렌트 회사'
          }
        },
        fallbackLocales: {
          'ko': 'en'
        }
      });
};