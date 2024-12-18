
export default defineNuxtPlugin((nuxtApp) => {
  const languageStore = useLanguageStore();

  const detectInitialLanguage = () => {
    const route = useRoute();
    const urlLang = route.path.split("/")[1];
    const savedLang = localStorage.getItem("language");
    const browserLang = navigator.language.split("-")[0];
    const defaultLang = "en";

    const supportedLanguages = ["en", "ar", "ru"];

    return (
      (supportedLanguages.includes(urlLang) && urlLang) ||
      (supportedLanguages.includes(savedLang) && savedLang) ||
      (supportedLanguages.includes(browserLang) && browserLang) ||
      defaultLang
    );
  };

  const updateDocumentDirection = (lang: string) => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  // Set initial language
  nuxtApp.hook('app:created', async () => {
    const initialLanguage = detectInitialLanguage();
    await languageStore.setLanguage(initialLanguage);
  });

  // Global Navigation Guard
  nuxtApp.$router.beforeEach(async (to, from, next) => {
    try {
      const urlLang = to.path.split("/")[1];
      if (["en", "ar", "ru"].includes(urlLang)) {
        await languageStore.setLanguage(urlLang);
        updateDocumentDirection(urlLang);
      }
      next();
    } catch (error) {
      console.error('Language switch error:', error);
      next();
    }
  });
});
