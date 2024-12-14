<template>
  <main class="pt-20">
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Our Products</h1>
        <p class="text-xl text-white/90">Innovative AI solutions for a conscious future</p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="product in products" :key="product.id" class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
            <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <div :class="product.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <button class="text-primary hover:text-primary-light transition-colors">Learn more →</button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const products = [
  {
    id: 'lyla',
    name: 'Lyla',
    description: 'AI Travel Assistant enriching your journey with conscious travel experiences.',
    icon: 'i-heroicons-globe-alt'
  },
  {
    id: 'senu',
    name: 'Senu',
    description: 'AI Entrepreneur Copilot supporting conscious business development.',
    icon: 'i-heroicons-briefcase'
  },
  {
    id: 'jarvis',
    name: 'Jarvis',
    description: 'AI Productivity Companion enhancing work-life harmony.',
    icon: 'i-heroicons-cpu-chip'
  },
  {
    id: 'wazir',
    name: 'Wazir',
    description: 'AI Governance Assistant for ethical leadership decisions.',
    icon: 'i-heroicons-building-library'
  },
  {
    id: 'asknature',
    name: 'AskNature',
    description: 'AI Nature-Inspired Decision-making Advisor.',
    icon: 'i-heroicons-tree'
  },
  {
    id: 'healing-officer',
    name: 'Chief Healing Officer',
    description: 'AI Alternative Healing Advisor for holistic wellness.',
    icon: 'i-heroicons-heart'
  }
]
</script>