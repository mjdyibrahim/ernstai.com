<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-6">{{ t('vision.title') }}</h2>
      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
        {{ t('vision.subtitle') }}
      </p>
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(vision, id) in visions" 
          :key="id"
          class="relative group"
        >
          <div class="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 rounded-xl transition-opacity" />
          <div class="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <img 
              :src="t(`vision.items.${id}.image`)" 
              :alt="t(`vision.items.${id}.title`)" 
              class="w-full h-32 object-cover rounded-lg mb-4" 
            />
            <h3 class="text-xl font-bold mb-2">{{ t(`vision.items.${id}.title`) }}</h3>
            <p class="text-gray-600">{{ t(`vision.items.${id}.description`) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n();

// Define the structure of vision items
const visions = computed(() => {
  const items = t('vision.items')
  return {
    "sustainability": {},
    "human-empowerment": {},
    "united-progress": {},
  };
});
</script>
