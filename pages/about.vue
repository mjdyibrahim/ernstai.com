<template>
  <main class="pt-20">
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">About Ernst AI</h1>
        <p class="text-xl text-white/90">Pioneering the future of conscience-driven artificial intelligence</p>
      </div>
    </section>

    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <p class="text-center text-gray-600 max-w-2xl mx-auto text-xl">
          {{ t('about.introduction') }}
        </p>
      </div>
    </section>
    
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center">Message from Our Founder</h2>
          <div class="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div class="w-48 flex-shrink-0">
              <img 
                src="/images/Abdo_Magdy.jpg" 
                alt="Abdo Magdy - Founder & CEO" 
                class="w-full rounded-lg shadow-md"
              >
              <p class="text-center mt-3 font-semibold">Abdo Magdy</p>
              <p class="text-center text-gray-600 text-sm">Founder & CEO</p>
            </div>
            <div class="flex-grow">
              <p class="text-gray-600 mb-4">
                "When I founded Ernst AI, I envisioned a future where artificial intelligence serves not just as a tool, but as a force for conscious evolution for humanity. Our journey began with a simple yet profound question: How can we create AI systems that truly understand and respect the delicate balance between technological advancement and human values?"
              </p>
              <p class="text-gray-600 mb-4">
                "Drawing inspiration from both Eastern wisdom and Western innovation, we've developed frameworks that integrate human principles into AI development. Our approach isn't just about creating smarter systems – it's about creating systems that simulates human conscience-driven decision making."
              </p>
              <p class="text-gray-600">
                "At Ernst AI, we're committed to developing AI solutions that serve humanity while respecting the intricate web of life that connects us all. Join us as we pioneer this new frontier in conscience-driven artificial intelligence."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Core Values Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-6">Our Core Values</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:scale" class="w-8 h-8 text-primary" /> <!-- Justice Icon -->
              <h3 class="text-xl font-bold ml-2">Justice</h3>
            </div>
            <p class="text-gray-600">Promoting fairness and equality in all our actions.</p>
          </div>
          <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:shield-check" class="w-8 h-8 text-primary" /> <!-- Courage Icon -->
              <h3 class="text-xl font-bold ml-2">Courage</h3>
            </div>
            <p class="text-gray-600">Embracing challenges and standing up for what is right.</p>
          </div>
          <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:light-bulb" class="w-8 h-8 text-primary" /> <!-- Wisdom Icon -->
              <h3 class="text-xl font-bold ml-2">Wisdom</h3>
            </div>
            <p class="text-gray-600">Guiding our decisions with knowledge and insight.</p>
          </div>
          <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
            <div class="flex items-center mb-4">
              <Icon name="heroicons:arrow-right-circle" class="w-8 h-8 text-primary" /> <!-- Persistence Icon -->
              <h3 class="text-xl font-bold ml-2">Persistence</h3>
            </div>
            <p class="text-gray-600">Continuing to strive towards our goals despite obstacles.</p>
          </div>
        </div>
      </div>
    </section>


    <section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-6">Our Guiding Principles</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-2">Consciousness Research</h3>
          <p class="text-gray-600">Inspired by Dr. David Hawkins' Map of Consciousness, Ernst AI explores the nature of consciousness and its potential applications in AI.</p>
        </div>
        <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-2">Biomimicry and BioGeometry</h3>
          <p class="text-gray-600">Drawing inspiration from nature, this domain seeks to apply principles of biomimicry and biogeometry to create AI solutions that are efficient, sustainable, and harmonious with their environment.</p>
        </div>
        <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-2">Unity of Being (Sufism)</h3>
          <p class="text-gray-600">Building on the teachings of Islamic mystic and philosopher Ibn Arabi, this domain explores the concept of "Wahdat al-Wujud" (unity of existence) and "Ilm al-Huruf" (science of letters) to integrate spiritual and philosophical insights into AI.</p>
        </div>
        <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-2">Jungian Psychology</h3>
          <p class="text-gray-600">Utilizing the theories of renowned psychologist Carl Jung, this domain delves into the depths of the human psyche and its relationship to AI.</p>
        </div>
        <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-2">Scriptural Storytelling</h3>
          <p class="text-gray-600">Drawing on stories and teachings from sacred texts such as the Qur'an and the Bible, this domain seeks to incorporate timeless wisdom and narratives into AI solutions.</p>
        </div>
        <div class="value-card bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 class="text-xl font-bold mb-2">Energy Healing</h3>
          <p class="text-gray-600">Inspired by practices such as Reiki and chakra healing, this domain explores harnessing and balancing energy within oneself and the environment to enhance the well-being of both humans and AI systems.</p>
        </div>
      </div>
    </div>
  </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-3xl mx-auto">
          
          <h2 class="text-3xl font-bold mb-6">Our Philosophy</h2>
          <p class="text-gray-600 mb-8">
            Ernst AI emerged from a vision to create AI systems that serve humanity while respecting the delicate balance of nature. We believe in integrating Eastern spirituality, psychology, and biomimicry into AI development. Our approach combines ancient wisdom with modern technology, creating solutions that are both innovative and conscientious.
          </p>
          
          <h2 class="text-3xl font-bold mb-6">Our Methodology</h2>
          <ul class="space-y-4 text-gray-600">
            <li class="flex items-start">
              <div class="w-6 h-6 text-primary mt-1 mr-2">
                <Icon name="i-heroicons-check-circle" />
              </div>
              <span>Integration of consciousness principles in AI development</span>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-primary mt-1 mr-2">
                <Icon name="i-heroicons-check-circle" />
              </div>
              <span>Commitment to environmental sustainability</span>
            </li>
            <li class="flex items-start">
              <div class="w-6 h-6 text-primary mt-1 mr-2">
                <Icon name="i-heroicons-check-circle" />
              </div>
              <span>Ethical AI development and deployment</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const {t} = useI18n();

</script>

<style scoped>
.value-card {
  transition: transform 0.2s;
}

.value-card:hover {
  transform: scale(1.05);
}
</style>