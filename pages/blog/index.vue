<template>
  <main class="pt-20">
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Blog</h1>
        <p class="text-xl text-white/90">Insights into conscious AI development</p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article v-for="post in posts" :key="post._path" 
                   class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img :src="post.image" :alt="post.title" class="w-full h-48 object-cover">
            <div class="p-6">
              <div class="text-sm text-primary mb-2">{{ formatDate(post.date) }}</div>
              <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
              <p class="text-gray-600 mb-4">{{ post.description }}</p>
              <NuxtLink :to="post._path" 
                        class="text-primary hover:text-primary-light transition-colors">
                Read more →
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { data: posts } = await useAsyncData('posts', () => 
  queryContent('blog')
    .sort({ date: -1 })
    .find()
)

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
