<template>
  <header class="fixed w-full bg-white/90 backdrop-blur-sm z-50">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="h-14 flex items-center gap-2">
          <img src="/images/ernst_vector.png" alt="Ernst AI" class="h-full">
          <span class="font-montserrat font-medium text-primary text-2xl">Ernst AI</span>
        </NuxtLink>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink 
            to="/"
            class="font-montserrat text-gray-700 hover:text-primary transition-colors"
          >
            {{ $t('menu.home') }}
          </NuxtLink>

          <!-- About Dropdown -->
          <div class="relative group">
            <button class="flex items-center font-montserrat text-gray-700 hover:text-primary transition-colors">
              {{ $t('menu.about') }}
              <Icon name="heroicons:chevron-down" class="w-4 h-4 ml-1" />
            </button>
            <div class="absolute w-full h-2 bottom-0 translate-y-full"></div>
            <div class="absolute left-0 top-full pt-2 w-48 hidden group-hover:block">
              <div class="bg-white rounded-lg shadow-lg py-2">
                <NuxtLink 
                  :to="localePath('/about')"
                  class="block px-4 py-2 font-montserrat text-gray-700 hover:bg-gray-100"
                >
                  {{ $t('menu.about') }}
                </NuxtLink>
                <NuxtLink 
                  :to="localePath('/community')"
                  class="block px-4 py-2 font-montserrat text-gray-700 hover:bg-gray-100"
                >
                  {{ $t('menu.community') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <!-- Solutions Dropdown -->
          <div class="relative group">
            <button class="flex items-center font-montserrat text-gray-700 hover:text-primary transition-colors">
              {{ $t('menu.solutions') }}
              <Icon name="heroicons:chevron-down" class="w-4 h-4 ml-1" />
            </button>
            <div class="absolute w-full h-2 bottom-0 translate-y-full"></div>
            <div class="absolute left-0 top-full pt-2 w-48 hidden group-hover:block">
              <div class="bg-white rounded-lg shadow-lg py-2">
                <NuxtLink 
                  :to="localePath('/solutions')"
                  class="block px-4 py-2 font-montserrat text-gray-700 hover:bg-gray-100"
                >
                  {{ $t('menu.solutions') }}
                </NuxtLink>
                <NuxtLink 
                  :to="localePath('/technology')"
                  class="block px-4 py-2 font-montserrat text-gray-700 hover:bg-gray-100"
                >
                  {{ $t('menu.technology') }}
                </NuxtLink>
              </div>
            </div>
          </div>

          <NuxtLink 
            :to="localePath('/blog')"
            class="font-montserrat text-gray-700 hover:text-primary transition-colors"
          >
            {{ $t('menu.blog') }}
          </NuxtLink>

          <LanguageSwitcher />
          
          <NuxtLink 
            :to="localePath('/contact')"
            class="bg-primary text-white px-6 py-2 rounded-full hover:bg-primary-light transition-colors"
          >
            {{ $t('contact_us') }}
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>