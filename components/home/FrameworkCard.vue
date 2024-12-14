<template>
  <div class="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
    <div :class="`w-12 h-12 rounded-lg ${colorClasses[framework.color]} flex items-center justify-center mb-4`">
      <Icon :name="framework.icon" class="w-6 h-6 text-white" />
    </div>
    <h3 class="text-xl font-bold mb-2">{{ framework.title }}</h3>
    <p class="text-gray-600">{{ framework.description }}</p>
    <NuxtLink 
      :to="`/solutions/${framework.id}`"
      class="inline-flex items-center mt-4 text-primary hover:text-primary-light transition-colors"
    >
      Learn more
      <div class="i-heroicons-arrow-right ml-1 w-4 h-4" />
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  framework: {
    type: Object,
    required: true
  }
})

const colorClasses = {
  green: 'bg-green',
  primary: 'bg-primary',
  blue: 'bg-blue-600',
  purple: 'bg-purple-600'
}
</script>