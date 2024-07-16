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
            'en': '1004Sewa - Car Rental Company',
            'id': '1004Sewa - Rental Mobil Terpercaya'
          },
          'home': {
            'en': 'Home',
            'id': 'Beranda'
          },
          'how-it-works': {
            'en': 'Application (User Guide)',
            'id': 'Panduan Pengguna'
          },
          'car-selection': {
            'en': 'Car Selection',
            'id': 'Pilih Kendaraan'
          },
          'car-list': {
            'en': 'Car List',
            'id': 'Pilihan Kendaraan'
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
            'en': 'Rental Car Services',
            'id': 'Layanan Rental'
          },
          'individual-rental': {
            'en': 'Daily Rental',
            'id': 'Sewa Harian'
          },
          'corporate-rental': {
            'en': 'Monthly and Annual Rental',
            'id': 'Sewa Bulanan dan Tahunan'
          },
          'about-us': {
            'en': 'About Us',
            'id': 'Tentang Kami'
          },
          'corporate-history': {
            'en': '1004Sewa',
            'id': '1004Sewa'
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
            'en': 'Choose 1004Sewa for a reliable and convenient car rental experience. Try our app in Google Play Store now.',
            'id': 'Pilih 1004Sewa untuk jasa sewa mobil yang nyaman dan terpercaya. Coba melalui aplikasi kami di Google Play Store sekarang.'
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
          },
          'payment-policy': {
            'en': 'Payment Policy',
            'id': 'Kebijakan Pembayaran'
          },
          'privacy-policy': {
            'en': 'Privacy Policy',
            'id': 'Kebijakan Privasi'
          },
          'delivery-policy': {
            'en': "Delivery Policy",
            'id': "Kebijakan Pengiriman"
          }
        },
        fallbackLocales: {
          'id': 'en'
        }
      });
};