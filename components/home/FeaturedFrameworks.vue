<template>
  <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-6">{{ t('solutions.frameworks.title') }}</h2>
      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        {{ t('solutions.frameworks.subtitle') }}
      </p>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FrameworkCard 
          v-for="(framework, id) in frameworks" 
          :key="id"
          :framework="{
            id,
            title: t(`solutions.frameworks.items.${id}.name`),
            description: t(`solutions.frameworks.items.${id}.description`),
            icon: t(`solutions.frameworks.items.${id}.icon`),
            color: t(`solutions.frameworks.items.${id}.color`)
          }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import FrameworkCard from '~/components/home/FrameworkCard.vue'
const { t } = useI18n();

const frameworks = computed(() => t('solutions.frameworks.items'));
</script>