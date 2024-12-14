<template>
    <main class="pt-20">
      <section class="gradient-bg py-20">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">{{ $t('solutions.title') }}</h1>
          <p class="text-xl text-white/90">{{ $t('solutions.subtitle') }}</p>
        </div>
      </section>
  
      <!-- Frameworks Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-6">{{ $t('solutions.frameworks.title') }}</h2>
          <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            {{ $t('solutions.frameworks.subtitle') }}
          </p>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(framework, id) in frameworks" :key="id" 
                 class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div :class="`w-12 h-12 rounded-lg ${colorClasses[framework.color]} flex items-center justify-center mb-4`">
                <Icon :name="framework.icon" class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-xl font-bold mb-2">{{ framework.name }}</h3>
              <p class="text-gray-600">{{ framework.description }}</p>
              <NuxtLink 
                :to="`/solutions/${id}`"
                class="inline-flex items-center mt-4 text-primary hover:text-primary-light transition-colors"
              >
                {{ $t('solutions.frameworks.learn_more') }}
                <div class="i-heroicons-arrow-right ml-1 w-4 h-4" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Products Section -->
      <section class="py-16">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold mb-8">{{ $t('products.title') }}</h2>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(product, id) in products" :key="id" 
                 class="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
              <div class="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <div :class="product.icon" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-bold mb-2">{{ product.name }}</h3>
              <p class="text-gray-600 mb-4">{{ product.description }}</p>
              <button class="text-primary hover:text-primary-light transition-colors">
                {{ $t('products.learn_more') }} →
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  const { t } = useI18n()
  
  // Get frameworks from i18n
  const frameworks = computed(() => {
    return t('solutions.frameworks.items')
  })
  
  // Get products from i18n
  const products = computed(() => {
    return t('products.items')
  })
  
  const colorClasses = {
    green: 'bg-green',
    primary: 'bg-primary',
    blue: 'bg-blue-600',
    purple: 'bg-purple-600'
  }
  </script>