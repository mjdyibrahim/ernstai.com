<template>
  <main class="pt-20">
    <!-- Hero Section -->
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">CommunityOS</h1>
          <p class="text-xl text-white/90">Community-driven AI framework for collective intelligence</p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold mb-6">Overview</h2>
          <p class="text-gray-600 mb-8">
            CommunityOS is designed to harness the power of collective intelligence, enabling communities 
            to participate in and benefit from AI development. This framework emphasizes inclusive, 
            collaborative, and socially responsible AI solutions.
          </p>

          <h2 class="text-3xl font-bold mb-6">Key Features</h2>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <div class="w-6 h-6 text-blue-600 mt-1 mr-2">
                <div class="i-heroicons-users" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Collective Learning Systems</h3>
                <p class="text-gray-600">
                  Aggregates and synthesizes community knowledge and feedback
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-blue-600 mt-1 mr-2">
                <div class="i-heroicons-globe-alt" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Cultural Integration</h3>
                <p class="text-gray-600">
                  Adapts to and respects diverse cultural contexts and values
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-blue-600 mt-1 mr-2">
                <div class="i-heroicons-shield-check" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Social Impact Assessment</h3>
                <p class="text-gray-600">
                  Measures and optimizes community benefits and social outcomes
                </p>
              </div>
            </li>
          </ul>

          <h2 class="text-3xl font-bold mb-6">Applications</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold mb-2">Community Engagement</h3>
              <p class="text-gray-600">
                Platforms for collaborative decision-making and participation
              </p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold mb-2">Social Innovation</h3>
              <p class="text-gray-600">
                Tools for community-driven problem-solving and development
              </p>
            </div>
          </div>

          <h2 class="text-3xl font-bold mb-6">Technical Specifications</h2>
          <div class="bg-gray-50 p-6 rounded-lg mb-8">
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <span class="font-bold w-40">Architecture:</span>
                <span>Distributed Social Networks</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold w-40">Learning Method:</span>
                <span>Collaborative Learning</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold w-40">Optimization:</span>
                <span>Social Impact Metrics</span>
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
