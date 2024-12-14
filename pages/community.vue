<template>
  <main class="pt-20">
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Community</h1>
        <p class="text-xl text-white/90">Join our growing community of Conscience-driven AI enthusiasts</p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-2xl font-bold mb-4">Upcoming Events</h2>
            <ul class="space-y-4">
              <li v-for="event in events" :key="event.id" class="border-b pb-4 last:border-0">
                <span class="text-sm text-primary">{{ event.date }}</span>
                <h3 class="font-bold">{{ event.title }}</h3>
                <p class="text-gray-600">{{ event.description }}</p>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-2xl font-bold mb-4">Get Involved</h2>
            <ul class="space-y-4">
              <li v-for="opportunity in opportunities" :key="opportunity.id" class="flex items-start">
                <div class="w-6 h-6 text-primary mt-1 mr-2">
                  <div :class="opportunity.icon" />
                </div>
                <div>
                  <h3 class="font-bold">{{ opportunity.title }}</h3>
                  <p class="text-gray-600">{{ opportunity.description }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h2 class="text-2xl font-bold mb-4">Resources</h2>
            <ul class="space-y-4">
              <li v-for="resource in resources" :key="resource.id" class="flex items-start">
                <div class="w-6 h-6 text-primary mt-1 mr-2">
                  <div :class="resource.icon" />
                </div>
                <div>
                  <h3 class="font-bold">{{ resource.title }}</h3>
                  <p class="text-gray-600">{{ resource.description }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const events = [
  {
    id: 1,
    date: 'April 15, 2024',
    title: 'Conscious AI Workshop',
    description: 'Learn about integrating consciousness principles in AI development.'
  },
  {
    id: 2,
    date: 'April 22, 2024',
    title: 'Community Meetup',
    description: 'Connect with fellow AI enthusiasts and share experiences.'
  }
]

const opportunities = [
  {
    id: 1,
    title: 'Open Source Projects',
    description: 'Contribute to our community-driven initiatives.',
    icon: 'i-heroicons-code-bracket'
  },
  {
    id: 2,
    title: 'Research Programs',
    description: 'Participate in our consciousness research studies.',
    icon: 'i-heroicons-academic-cap'
  }
]

const resources = [
  {
    id: 1,
    title: 'Documentation',
    description: 'Comprehensive guides and API documentation.',
    icon: 'i-heroicons-document-text'
  },
  {
    id: 2,
    title: 'Learning Hub',
    description: 'Educational resources and tutorials.',
    icon: 'i-heroicons-book-open'
  }
]
</script>