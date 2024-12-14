<template>
  <main class="pt-20">
    <!-- Hero Section -->
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">ConscienceOS</h1>
          <p class="text-xl text-white/90">Mindful AI framework integrating consciousness principles</p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold mb-6">Overview</h2>
          <p class="text-gray-600 mb-8">
            ConscienceOS represents a groundbreaking approach to AI development that integrates principles 
            of consciousness and mindfulness. This framework bridges the gap between artificial intelligence 
            and conscious awareness, creating systems that are more aligned with human values and ethical principles.
          </p>

          <h2 class="text-3xl font-bold mb-6">Key Features</h2>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <div class="w-6 h-6 text-purple-600 mt-1 mr-2">
                <div class="i-heroicons-brain" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Mindful Processing</h3>
                <p class="text-gray-600">
                  Implements awareness-based decision making and response patterns
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-purple-600 mt-1 mr-2">
                <div class="i-heroicons-heart" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Emotional Intelligence</h3>
                <p class="text-gray-600">
                  Advanced emotional understanding and appropriate response generation
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-purple-600 mt-1 mr-2">
                <div class="i-heroicons-light-bulb" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Ethical Awareness</h3>
                <p class="text-gray-600">
                  Built-in ethical considerations and value alignment
                </p>
              </div>
            </li>
          </ul>

          <h2 class="text-3xl font-bold mb-6">Applications</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold mb-2">Mental Health Support</h3>
              <p class="text-gray-600">
                Mindful AI assistants for psychological well-being
              </p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold mb-2">Ethical Decision Support</h3>
              <p class="text-gray-600">
                Systems for value-aligned decision making
              </p>
            </div>
          </div>

          <h2 class="text-3xl font-bold mb-6">Technical Specifications</h2>
          <div class="bg-gray-50 p-6 rounded-lg mb-8">
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <span class="font-bold w-40">Architecture:</span>
                <span>Consciousness-Integrated Neural Networks</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold w-40">Learning Method:</span>
                <span>Mindful Learning Algorithms</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold w-40">Optimization:</span>
                <span>Value-Aligned Processing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useI18n()
</script>
