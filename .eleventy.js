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

    eleventyConfig.addFilter("toIndonesian", function(url, page) {
        return `${url.replace('/en/', '/id/')}`
    });

    eleventyConfig.addFilter("toEnglish", function(url, page) {
        return `${url.replace('/id/', '/en/')}`
    });

    eleventyConfig.addPlugin(i18n, {
        translations: {
          title: {
            'en': 'Mulia Jasa Indokor - Car Rental Company',
            'id': 'Mulia Jasa Indokor - Rental Mobil Terpercaya'
          },
          'home': {
            'en': 'Home',
            'id': 'Beranda'
          },
          'how-it-works': {
            'en': 'How It Works',
            'id': 'Cara Kerja'
          },
          'car-selection': {
            'en': 'Car Selection',
            'id': 'Pilih Kendaraan'
          },
          'car-inspection': {
            'en': 'Car Inspection',
            'id': 'Inspeksi Kendaraan'
          },
          'car-delivery': {
            'en': 'Car Delivery',
            'id': 'Serah Terima'
          },
          'services': {
            'en': 'Services',
            'id': 'Layanan'
          },
          'individual-rental': {
            'en': 'Individual Rental',
            'id': 'Sewa Individu'
          },
          'corporate-rental': {
            'en': 'Corporate Rental',
            'id': 'Sewa Korporasi'
          },
          'about-us': {
            'en': 'About Us',
            'id': 'Tentang Kami'
          },
          'corporate-history': {
            'en': 'Corporate History',
            'id': 'Sejarah Perusahaan'
          },
          'contact-us': {
            'en': 'Contact Us',
            'id': 'Hubungi Kami'
          },
          'cta tag': {
            'en': 'Download App',
            'id': 'Unduh Aplikasi'
          },
          'cta title': {
            'en': 'Try Our App Now',
            'id': 'Coba Aplikasi Kami Sekarang'
          },
          'cta subheading': {
            'en': 'Choose Mulia Jasa Indokor for a reliable and convenient car rental experience. Try our app in Google Play Store now.',
            'id': 'Pilih Mulia Jasa Indokor untuk jasa sewa mobil yang nyaman dan terpercaya. Coba melalui aplikasi kami di Google Play Store sekarang.'
          },
          'address': {
            'en': 'Address',
            'id': 'Alamat'
          },
          'about': {
            'en': 'About',
            'id': 'Tentang kami'
          },
          'read-more': {
            'en': 'Read More',
            'id': 'Baca Lebih Lanjut'
          },
          'refund-policy': {
            'en': 'Refund Policy',
            'id': 'Kebijakan Pengembalian'
          },
          'tnc': {
            'en': 'Terms and Conditions',
            'id': 'Ketentuan dan Kebijakan Layanan'
          }
          
        },
        fallbackLocales: {
          'id': 'en'
        }
      });
};