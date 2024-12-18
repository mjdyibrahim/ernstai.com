<template>
  <div>
    <TheHeader />
    <NuxtPage :key="$route.fullPath" />
    <TheFooter />
  </div>
</template>

<script setup>
import { useLanguageStore } from '@/stores/languageStore';

const languageStore = useLanguageStore();

// Initialize language when app starts
onMounted(async () => {
  await languageStore.initializeLanguage();
});
</script>