<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-6">{{ t('solutions.frameworks.title') }}</h2>
      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        {{ t('solutions.frameworks.subtitle') }}
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div 
          v-for="id in ['conscienceos', 'communityos', 'governanceos', 'natureos']" 
          :key="id"
          class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
        >
          <div :class="`w-12 h-12 rounded-lg 
            bg-${t(`solutions.frameworks.items.${id}.color`) } flex items-center justify-center mb-4`">
            <Icon :name="t(`solutions.frameworks.items.${id}.icon`)" class="w-6 h-6 text-white"/>
          </div>
          <h3 class="text-xl font-bold mb-2">{{ t(`solutions.frameworks.items.${id}.name`) }}</h3>
          <p class="text-gray-600">{{ t(`solutions.frameworks.items.${id}.description`) }}</p>
          <NuxtLink 
            :to="`/solutions/${id}`"
            class="inline-flex items-center mt-4 text-primary hover:text-primary-light transition-colors"
          >
            {{ t('solutions.frameworks.learn_more') }}
            <div class="i-heroicons-arrow-right ml-1 w-4 h-4" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();
const frameworks = computed(() => t('solutions.frameworks.items'));
</script>