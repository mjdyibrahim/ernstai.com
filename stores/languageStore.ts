
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
    async setLanguage(language: SupportedLanguage) {
      if (!["en", "ar", "ru"].includes(language)) {
        language = "en";
      }

      this.currentLanguage = language;
      this.isRTL = language === "ar";

      const { setLocale } = useI18n();
      await setLocale(language);

      localStorage.setItem("language", language);
      document.documentElement.dir = this.isRTL ? "rtl" : "ltr";
      document.documentElement.lang = language;

      return language;
    },
  },
});
