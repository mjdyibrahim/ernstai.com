<template>
  <main>
    <!-- Hero Section -->
    <section class="relative py-40">
      <HeroParticles />
      
      <div class="container mx-auto px-4 pt-20 relative z-10">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            {{ $t('hero.title') }}
          </h1>
          <p class="text-xl text-white/90 mb-8">
            {{ $t('hero.description') }}
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink
              to="/about"
              class="bg-white text-primary px-6 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              {{ $t('hero.explore_mission') }}
            </NuxtLink>
            <NuxtLink
              to="/solutions"
              class="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary-light transition-colors"
            >
              {{ $t('hero.discover_solutions') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <MissionPillars />
    <FeaturedFrameworks />
    <FeaturedVision />
  </main>
</template>

<script setup>
import HeroParticles from '~/components/HeroParticles.vue'
import MissionPillars from '~/components/home/MissionPillars.vue'
import FeaturedFrameworks from '~/components/home/FeaturedFrameworks.vue'
import FeaturedVision from '~/components/home/FeaturedVision.vue'
</script>