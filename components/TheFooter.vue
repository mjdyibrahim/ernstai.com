<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Ernst AI</h3>
          <p class="text-gray-400">
            Committed to creating technology that serves humanity and nature.
          </p>
        </div>
        <div>
          <h4 class="font-bold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <NuxtLink :to="link.path" class="text-gray-400 hover:text-white transition-colors">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-4">Connect</h4>
          <IconSocial />
        </div>
        <div>
          <h4 class="font-bold mb-4">Newsletter</h4>
          <form @submit.prevent="subscribeNewsletter" class="space-y-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              class="w-full px-4 py-2 rounded bg-gray-800 text-white"
            >
            <button class="bg-primary px-6 py-2 rounded-full hover:bg-primary-light transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import IconSocial from '~/components/icons/IconSocial.vue'

const quickLinks = [
  { name: 'About', path: '/about' },
  { name: 'Solutions', path: '/solutions' },
  { name: 'Technology', path: '/technology' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const subscribeNewsletter = () => {
  // Implement newsletter subscription logic
}
</script>