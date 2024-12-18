
export default defineNuxtPlugin(async (nuxtApp) => {
  const languageStore = useLanguageStore();
  const { locale } = useI18n();

  const detectInitialLanguage = () => {
    const route = useRoute();
    const urlLang = route.path.split("/")[1];
    const savedLang = localStorage.getItem("language");
    const browserLang = navigator.language.split("-")[0];
    const defaultLang = "en";

    const supportedLanguages = ["en", "ar", "ru"];

    // Fallback chain: URL > localStorage > Browser > Default
    return (
      (supportedLanguages.includes(urlLang) && urlLang) ||
      (supportedLanguages.includes(savedLang) && savedLang) ||
      (supportedLanguages.includes(browserLang) && browserLang) ||
      defaultLang
    );
  };

  // Initial Language Setup
  const initialLanguage = detectInitialLanguage();
  await languageStore.setLanguage(initialLanguage);

  // Handle RTL/LTR layout
  const updateDocumentDirection = (lang: string) => {
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  // Global Navigation Guard with improved error handling
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
