
import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";

type SupportedLanguage = "en" | "ar" | "ru";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    currentLanguage: "en" as SupportedLanguage,
    isRTL: false,
  }),

  getters: {
    getCurrentLanguage: (state) => state.currentLanguage,
    getIsRTL: (state) => state.isRTL,
  },

  actions: {
    async initializeLanguage() {
      if (process.server) return;
      
      const savedLang = localStorage?.getItem("language");
      const browserLang = navigator?.language?.split("-")[0];
      const defaultLang = "en";
      const supportedLanguages = ["en", "ar", "ru"];

      const initialLang = (
        (supportedLanguages.includes(savedLang) && savedLang) ||
        (supportedLanguages.includes(browserLang) && browserLang) ||
        defaultLang
      ) as SupportedLanguage;

      return this.setLanguage(initialLang, true);
    },

    async setLanguage(language: SupportedLanguage, updateStorage: boolean = true) {
      if (!["en", "ar", "ru"].includes(language)) {
        language = "en";
      }

      this.currentLanguage = language;
      this.isRTL = language === "ar";

      const i18n = useNuxtApp().$i18n;
      await i18n.setLocale(language);
      const router = useRouter();
      
      if (process.client && updateStorage) {
        localStorage.setItem("language", language);
        document.documentElement.dir = this.isRTL ? "rtl" : "ltr";
        document.documentElement.lang = language;
        
        // Update route with language prefix
        const currentRoute = router.currentRoute.value;
        const pathWithoutLang = currentRoute.path.replace(/^\/(en|ar|ru)/, '');
        const newPath = '/' + language + (pathWithoutLang || '/');
        
        if (newPath !== currentRoute.path) {
          router.push(newPath);
        }
      }

      return language;
    }
  }
});
