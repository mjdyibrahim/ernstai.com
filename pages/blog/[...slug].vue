<template>
  <main class="pt-20">
    <article class="container mx-auto px-4 py-16 max-w-3xl">
      <img v-if="post.image" 
           :src="post.image" 
           :alt="post.title" 
           class="w-full h-64 object-cover rounded-xl mb-8">
      
      <h1 class="text-4xl font-bold mb-4">{{ post.title }}</h1>
      <div class="text-gray-600 mb-8">{{ formatDate(post.date) }}</div>
      
      <ContentDoc class="prose prose-lg max-w-none" />
    </article>
  </main>
</template>

<script setup>
const { path } = useRoute()
const { data: post } = await useAsyncData(`content-${path}`, () => 
  queryContent(path).findOne()
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
