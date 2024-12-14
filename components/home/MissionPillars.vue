<template>
  <section class="py-20">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-16">Our Mission Pillars</h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(pillar, id) in pillars" 
          :key="id" 
          class="text-center p-6 rounded-lg hover:shadow-lg transition-shadow"
          >
          <div class="w-16 h-16 mx-auto mb-4 text-primary">
            <Icon :name="t(`mission.items.${id}.icon`)" />
          </div>
          <h3 class="text-xl font-bold mb-3">{{ t(`mission.items.${id}.title`) }}</h3>
          <p class="text-gray-600">{{ t(`mission.items.${id}.description`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import IconAscending from '~/components/icons/IconAscending.vue'
import IconAuthenticity from '~/components/icons/IconAuthenticity.vue'
import IconNewUnity from '~/components/icons/IconNewUnity.vue'

const { t } = useI18n();

// Compute pillars based on the localization data
const pillars = computed(() => {
  const items = t('mission.items')
  return {
    "ascending-consciousness": {},
    "restoring-authenticity": {},
    "instilling-unity": {}
  }
});

</script>