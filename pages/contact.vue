<template>
  <main class="pt-20">
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p class="text-xl text-white/90">Get in touch with our team</p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4 max-w-3xl">
        <form @submit.prevent="submitForm" class="bg-white rounded-xl p-8 shadow-sm">
          <div class="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">First Name</label>
              <input type="text" v-model="form.firstName" class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
              <input type="text" v-model="form.lastName" class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
          </div>
          
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" v-model="form.email" class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary">
          </div>
          
          <div class="mb-6">
            <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea v-model="form.message" rows="4" class="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary"></textarea>
          </div>
          
          <button type="submit" class="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-light transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
const form = ref({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

const submitForm = () => {
  // Implement form submission logic
  console.log('Form submitted:', form.value)
}
</script>