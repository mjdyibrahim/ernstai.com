import { defineStore } from "pinia";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

type SupportedLanguage = "en" | "ar" | "ru";

export const useLanguageStore = defineStore("language", {
  state: () => ({
    currentLanguage: (localStorage.getItem("language") || "en") as SupportedLanguage,
    supportedLanguages: ["en", "ar", "ru"] as const,
  }),

  actions: {
    async setLanguage(language: SupportedLanguage) {
      if (!this.supportedLanguages.includes(language)) {
        language = 'en';
      }

      // Update store state
      this.currentLanguage = language;
      
      // Update localStorage
      localStorage.setItem("language", language);

      // Update i18n locale
      const { locale } = useI18n();
      locale.value = language;

      // Handle RTL
      document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = language;

      // Update route if needed
      const route = useRoute();
      const router = useRouter();
      const currentPath = route.path.replace(/^\/(?:ar|ru|en)/, '');
      const newPath = language === 'en' ? currentPath : `/${language}${currentPath}`;
      
      if (route.path !== newPath) {
        await router.replace(newPath);
      }
    },

    async initializeLanguage() {
      const route = useRoute();
      const urlLang = route.path.split('/')[1] as SupportedLanguage;
      
      if (this.supportedLanguages.includes(urlLang)) {
        await this.setLanguage(urlLang);
      } else {
        const savedLang = localStorage.getItem("language") as SupportedLanguage;
        await this.setLanguage(savedLang || 'en');
      }
    }
  },
});