<template>
  <main class="pt-20">
    <!-- Hero Section -->
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">NatureOS</h1>
          <p class="text-xl text-white/90">Bio-inspired AI framework that learns from nature's wisdom</p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold mb-6">Overview</h2>
          <p class="text-gray-600 mb-8">
            NatureOS is our pioneering AI framework that draws inspiration from natural systems and processes. 
            By studying and implementing nature's time-tested patterns, we create AI solutions that are both 
            efficient and sustainable.
          </p>

          <h2 class="text-3xl font-bold mb-6">Key Features</h2>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <div class="w-6 h-6 text-green-600 mt-1 mr-2">
                <div class="i-heroicons-leaf" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Biomimetic Learning Patterns</h3>
                <p class="text-gray-600">
                  Implements learning algorithms inspired by natural adaptation and evolution processes
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-green-600 mt-1 mr-2">
                <div class="i-heroicons-chart-bar" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Adaptive Resource Management</h3>
                <p class="text-gray-600">
                  Optimizes computational resources using principles observed in natural ecosystems
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-green-600 mt-1 mr-2">
                <div class="i-heroicons-cpu-chip" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Sustainable Computing</h3>
                <p class="text-gray-600">
                  Energy-efficient processing inspired by natural energy cycles
                </p>
              </div>
            </li>
          </ul>

          <h2 class="text-3xl font-bold mb-6">Applications</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold mb-2">Environmental Modeling</h3>
              <p class="text-gray-600">
                Predictive models for ecosystem management and climate adaptation
              </p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold mb-2">Resource Optimization</h3>
              <p class="text-gray-600">
                Smart systems for sustainable resource allocation and management
              </p>
            </div>
          </div>

          <h2 class="text-3xl font-bold mb-6">Technical Specifications</h2>
          <div class="bg-gray-50 p-6 rounded-lg mb-8">
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <span class="font-bold w-40">Architecture:</span>
                <span>Bio-inspired Neural Networks</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold w-40">Learning Method:</span>
                <span>Evolutionary Algorithms</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold w-40">Optimization:</span>
                <span>Nature-inspired Computing</span>
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
