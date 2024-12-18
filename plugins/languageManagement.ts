
import { defineNuxtPlugin } from '#app';
import { useLanguageStore } from '@/stores/languageStore';

export default defineNuxtPlugin((nuxtApp) => {
  const languageStore = useLanguageStore();

  const updateDocumentDirection = (lang: string) => {
    if (process.client) {
      document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = lang;
    }
  };

  nuxtApp.hook('page:finish', () => {
    const route = useRoute();
    const urlLang = route.path.split("/")[1];
    if (["en", "ar", "ru"].includes(urlLang)) {
      languageStore.setLanguage(urlLang, false);
      updateDocumentDirection(urlLang);
    }
  });

  return {
    provide: {
      updateDocumentDirection
    }
  };
});
