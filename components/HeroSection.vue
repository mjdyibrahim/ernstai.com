<template>
  <section class="min-h-screen flex items-center relative overflow-hidden">
    <div class="absolute inset-0">
      <img 
        src="/images/Lavender Field Sunset_1733580362.jpg" 
        alt="Lavender Field" 
        class="w-full h-full object-cover"
      >
      <div class="absolute inset-0 bg-primary/60 backdrop-blur-sm"></div>
    </div>
    <div class="container mx-auto px-4 py-20 relative z-10">
      <div class="max-w-3xl">
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
          {{ $t('hero.title') }}
        </h1>
        <p class="text-xl text-white/90 mb-8">
          {{ $t('hero.description') }}
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
            {{ $t('hero.explore_mission') }}
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors">
            {{ $t('hero.discover_solutions') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
</script>