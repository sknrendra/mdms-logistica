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

    eleventyConfig.addFilter("toKorean", function(url, page) {
        return `${url.replace('/en/', '/ko/')}`
    });

    eleventyConfig.addFilter("toEnglish", function(url, page) {
        return `${url.replace('/ko/', '/en/')}`
    });

    eleventyConfig.addPlugin(i18n, {
        translations: {
          title: {
            'en': 'Mulia Jasa Indokor - Car Rental Company',
            'ko': '물리아 야사 인도코르(Mulia Jasa Indokor) - 자동차 렌트 회사'
          },
          'home': {
            'en': 'Home',
            'ko': '홈 페이지'
          },
          'how-it-works': {
            'en': 'How It Works',
            'ko': '이용 방법'
          },
          'services': {
            'en': 'Services',
            'ko': '서비스'
          },
          'individual-rental': {
            'en': 'Individual Rental',
            'ko': '기업 렌탈'
          },
          'corporate-rental': {
            'en': 'Corporate Rental',
            'ko': '개인 렌탈'
          },
          'about-us': {
            'en': 'About Us',
            'ko': '회사 소개'
          },
          'corporate-history': {
            'en': 'Corporate History',
            'ko': '기업 역사'
          },
          'contact-us': {
            'en': 'Contact Us',
            'ko': '연락처'
          }
          
        },
        fallbackLocales: {
          'ko': 'en'
        }
      });
};