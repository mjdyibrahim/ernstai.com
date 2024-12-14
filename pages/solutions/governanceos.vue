<template>
  <main class="pt-20">
    <!-- Hero Section -->
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">GovernanceOS</h1>
          <p class="text-xl text-white/90">Ethical AI framework for transparent and responsible governance</p>
        </div>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl">
          <h2 class="text-3xl font-bold mb-6">Overview</h2>
          <p class="text-gray-600 mb-8">
            GovernanceOS is our comprehensive framework for implementing ethical AI governance. 
            It ensures transparency, accountability, and responsible decision-making in AI systems, 
            while maintaining compliance with regulatory standards and ethical guidelines.
          </p>

          <h2 class="text-3xl font-bold mb-6">Key Features</h2>
          <ul class="space-y-4 mb-8">
            <li class="flex items-start">
              <div class="w-6 h-6 text-amber-600 mt-1 mr-2">
                <div class="i-heroicons-scale" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Ethical Decision Framework</h3>
                <p class="text-gray-600">
                  Structured approach to ethical decision-making and policy enforcement
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-amber-600 mt-1 mr-2">
                <div class="i-heroicons-document-check" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Compliance Management</h3>
                <p class="text-gray-600">
                  Automated regulatory compliance and audit trail generation
                </p>
              </div>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-amber-600 mt-1 mr-2">
                <div class="i-heroicons-presentation-chart-bar" />
              </div>
              <div>
                <h3 class="font-bold mb-1">Transparency Tools</h3>
                <p class="text-gray-600">
                  Comprehensive monitoring and reporting capabilities
                </p>
              </div>
            </li>
          </ul>

          <h2 class="text-3xl font-bold mb-6">Applications</h2>
          <div class="grid md:grid-cols-2 gap-6 mb-8">
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold mb-2">Policy Management</h3>
              <p class="text-gray-600">
                Automated policy enforcement and compliance monitoring
              </p>
            </div>
            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="font-bold mb-2">Risk Assessment</h3>
              <p class="text-gray-600">
                Predictive analytics for governance risk management
              </p>
            </div>
          </div>

          <h2 class="text-3xl font-bold mb-6">Technical Specifications</h2>
          <div class="bg-gray-50 p-6 rounded-lg mb-8">
            <ul class="space-y-3 text-gray-600">
              <li class="flex items-center">
                <span class="font-bold w-40">Architecture:</span>
                <span>Policy-Driven Neural Networks</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold w-40">Learning Method:</span>
                <span>Regulated Learning Systems</span>
              </li>
              <li class="flex items-center">
                <span class="font-bold w-40">Optimization:</span>
                <span>Compliance-Aware Processing</span>
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
