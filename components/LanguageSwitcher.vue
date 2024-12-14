<template>
  <div class="relative" ref="dropdownRef">
    <button
      @click="toggleDropdown"
      class="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
    >
      <span class="flex items-center gap-2">
        <span class="text-xl">{{ getFlagEmoji(currentLocale.code) }}</span>
        {{ currentLocale.name }}
      </span>
      <Icon name="heroicons:chevron-down" class="w-4 h-4" />
    </button>

    <div
      v-if="isOpen"
      class="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[120px] z-50"
    >
      <button
        v-for="locale in availableLocales"
        :key="locale.code"
        @click="switchLanguage(locale.code)"
        class="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors flex items-center gap-2"
        :class="{ 'text-primary': locale.code === languageStore.currentLanguage }"
      >
        <span class="text-xl">{{ getFlagEmoji(locale.code) }}</span>
        {{ locale.name }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useLanguageStore } from '@/stores/languageStore';
import { useI18n } from 'vue-i18n';
import { onClickOutside } from '@vueuse/core';

type LocaleObject = {
  code: string;
  name: string;
  file: string;
  language: string;
  dir?: 'ltr' | 'rtl';
};

const languageStore = useLanguageStore();
const { locales } = useI18n();
const isOpen = ref(false);
const dropdownRef = ref(null);

const currentLocale = computed((): LocaleObject => {
  const locale = locales.value.find(l => l.code === languageStore.currentLanguage);
  if (!locale) {
    // Provide a default locale if none is found
    return {
      code: 'en',
      name: 'English',
      file: 'en.json',
      language: 'en-US'
    };
  }
  return locale as LocaleObject;
});

const availableLocales = computed(() =>
  locales.value.filter(l => l.code !== languageStore.currentLanguage)
);

const getFlagEmoji = (code: string) => ({
  en: '🇺🇸',
  ru: '🇷🇺',
  ar: '🇪🇬'
}[code] || '🏳️');

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchLanguage = async (code: string) => {
  try {
    isOpen.value = false;
    await languageStore.setLanguage(code as "en" | "ar" | "ru");
  } catch (error) {
    console.error('Error switching language:', error);
  }
};

// Close dropdown when clicking outside
onClickOutside(dropdownRef, () => {
  isOpen.value = false;
});
</script>

<style scoped>
/* You can add any additional styles here if needed */
</style>
