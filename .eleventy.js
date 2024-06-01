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
          'car-selection': {
            'en': 'Car Selection',
            'ko': '차량 선택'
          },
          'car-inspection': {
            'en': 'Car Inspection',
            'ko': '차량 점검'
          },
          'car-delivery': {
            'en': 'Car Delivery',
            'ko': '차량 인도'
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
          },
          'cta tag': {
            'en': 'Download App',
            'ko': '앱 다운로드'
          },
          'cta title': {
            'en': 'Try Our App Now',
            'ko': '지금 당장 앱을 사용해 보세요'
          },
          'cta subheading': {
            'en': 'Choose Mulia Jasa Indokor for a reliable and convenient car rental experience. Try our app in Google Play Store now.',
            'ko': '신뢰할 수 있고 편리한 차량 렌탈 경험을 위해 Mulia Jasa Indokor를 선택하세요. 지금 Google Play 스토어에서 우리 앱을 사용해 보세요.'
          },
          'address': {
            'en': 'Address',
            'ko': '주소'
          }
          
        },
        fallbackLocales: {
          'ko': 'en'
        }
      });
};