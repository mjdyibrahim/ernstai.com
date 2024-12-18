export default defineNuxtConfig({
  ssr: false,
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/i18n",
    "@nuxt/content",
    "@nuxt/icon",
    "@pinia/nuxt",
  ],

  i18n: {
    langDir: "locales",
    restructureDir: "",
    defaultLocale: "en",
    lazy: true,
    locales: [
      { code: "en", language: "en-US", file: "en.json", name: "English" },
      { code: "ar", language: "ar-SA", file: "ar.json", name: "العربية", dir: "rtl" },
      { code: "ru", language: "ru-RU", file: "ru.json", name: "Русский" },
    ],
    strategy: "prefix_except_default",
    detectBrowserLanguage: false,
  },

  content: {
    highlight: {
      theme: "github-dark",
    },
  },

  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700],
      Merriweather: [300, 400, 700],
    },
    display: "swap",
  },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      title: "Ernst AI - Conscience-Driven AI for Sapiens",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Ernst AI specializes in Conscience-driven AI solutions, combining Eastern spirituality, psychology, and biomimicry to create innovative AI systems.",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  compatibilityDate: "2024-12-08",
});
