
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

  nuxtApp.hook('app:mounted', async () => {
    const router = useRouter();
    const route = useRoute();
    const urlLang = route.path.split("/")[1];
    const savedLang = process.client ? localStorage.getItem("language") : null;
    
    if (["en", "ar", "ru"].includes(urlLang)) {
      await languageStore.setLanguage(urlLang, false);
      updateDocumentDirection(urlLang);
    } else if (savedLang && ["en", "ar", "ru"].includes(savedLang)) {
      await languageStore.setLanguage(savedLang, false);
      updateDocumentDirection(savedLang);
      if (!route.path.startsWith('/' + savedLang)) {
        router.push('/' + savedLang + route.path);
      }
    }
  });

  return {
    provide: {
      updateDocumentDirection
    }
  };
});
