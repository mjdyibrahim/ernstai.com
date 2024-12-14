<template>
  <main class="pt-20">
    <section class="gradient-bg py-20">
      <div class="container mx-auto px-4">
        <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Our Technology</h1>
        <p class="text-xl text-white/90">Cutting-edge tools and platforms powering conscious AI</p>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Our Approach</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="text-2xl font-semibold">Compound AI Systems</h3>
            <p class="text-gray-600">Other than relying on a single provider, we design advanced data pipelines to make the optimal use of each LLM in what it is best at.</p>
          </div>
          <div class="bg-white rounded-xl p-6 shadow-sm">
            <h3 class="text-2xl font-semibold">Objective-Driven AI</h3>
            <p class="text-gray-600">Other than designing open-ended systems, we excel at building systems that take into consideration the final objective needed to be achieved.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Our Integrations</h2>
        <p class="text-center text-gray-600 mb-8">We integrate with 1000+ technology platforms including:</p>
        <div class="flex overflow-hidden">
          <div class="flex animate-marquee">
            <img v-for="(logo, index) in logos" :key="index" :src="`/images/logos_integration/${logo}`" :alt="logo.split('.')[0]" class="marquee-logo" />
          </div>
          <div class="flex animate-marquee">
            <img v-for="(logo, index) in logos" :key="index" :src="`/images/logos_integration/${logo}`" :alt="logo.split('.')[0]" class="marquee-logo" />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-4">Technologies</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <div v-for="(category, index) in techStack" :key="index">
            <h3 class="text-2xl font-bold mb-4">{{ category.title }}</h3>
            <ul class="space-y-4">
              <li v-for="(item, itemIndex) in category.items" :key="itemIndex" class="flex items-start">
                <div class="w-12 h-12 text-primary mt-1 mr-2">
                  <img :src="`/images/logos/${item.logo}`" :alt="item.name" class="w-full h-full object-contain" />
                </div>
                <div>
                  <h4 class="font-bold">{{ item.name }}</h4>
                  <p class="text-gray-600">{{ item.description }}</p>
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
const techStack = [
  {
    title: 'Core LLM Providers',
    items: [
      {
        name: 'OpenAI',
        description: 'Leading provider of AI models, known for its powerful language models and autonomous AI capabilities.',
        logo: 'openai-logo.png'
      },
      {
        name: 'Anthropic',
        description: 'Focuses on building safe and reliable AI systems, emphasizing ethical AI development.',
        logo: 'anthropic-logo.png'
      },
      {
        name: 'Cohere',
        description: 'Offers natural language processing models that enable businesses to integrate AI into their applications.',
        logo: 'cohere-logo.png'
      },
      {
        name: 'HuggingFace',
        description: 'A community-driven platform providing a wide range of pre-trained models for natural language processing and machine learning.',
        logo: 'huggingface-logo.png'
      }
    ]
  },
  {
    title: 'LLM Frameworks',
    items: [
      {
        name: 'LangChain',
        description: 'A framework for developing applications powered by language models, facilitating complex workflows.',
        logo: 'langchain-logo.png'
      },
      {
        name: 'LlamaIndex',
        description: 'A framework that simplifies the integration of language models into various applications and services.',
        logo: 'llamaindex-logo.png'
      },
      {
        name: 'AutoGPT',
        description: 'An autonomous AI agent framework that allows for the development of self-sufficient AI applications.',
        logo: 'autogpt-logo.png'
      },
      {
        name: 'BabyAGI',
        description: 'A framework designed for building AI systems that can learn and adapt over time.',
        logo: 'babyagi-logo.png'
      },
      {
        name: 'CrewAI',
        description: 'A collaborative AI framework that enhances teamwork and productivity through intelligent assistance.',
        logo: 'crewai-logo.png'
      }
    ]
  },
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'Python',
        description: 'A versatile programming language widely used in AI, data science, and web development.',
        logo: 'python-logo.png'
      },
      {
        name: 'JavaScript',
        description: 'The primary language for web development, enabling interactive and dynamic web applications.',
        logo: 'javascript-logo.png'
      },
      {
        name: 'TypeScript',
        description: 'A superset of JavaScript that adds static typing, enhancing code quality and maintainability.',
        logo: 'typescript-logo.png'
      }
    ]
  },
  {
    title: 'FrontEnd Platforms',
    items: [
      {
        name: 'Nuxt',
        description: 'A powerful framework for building server-rendered Vue.js applications with ease.',
        logo: 'nuxt-logo.png'
      },
      {
        name: 'Vue',
        description: 'A progressive JavaScript framework for building user interfaces and single-page applications.',
        logo: 'vue-logo.png'
      },
      {
        name: 'Next',
        description: 'A React framework that enables server-side rendering and static site generation for optimal performance.',
        logo: 'next-logo.png'
      },
      {
        name: 'Flask',
        description: 'A lightweight web framework for Python, ideal for building small to medium-sized web applications.',
        logo: 'flask-logo.png'
      }
    ]
  },
  {
    title: 'Backend Platforms',
    items: [
      {
        name: 'FastAPI',
        description: 'A modern, fast (high-performance) web framework for building APIs with Python 3.6+.',
        logo: 'fastapi-logo.png'
      }
    ]
  },
  {
    title: 'Vector Data Platforms',
    items: [
      {
        name: 'Pinecone',
        description: 'A fully managed vector database that makes it easy to build and scale AI applications.',
        logo: 'pinecone-logo.png'
      },
      {
        name: 'Weaviate',
        description: 'An open-source vector search engine that enables efficient and scalable data retrieval.',
        logo: 'weaviate-logo.png'
      },
      {
        name: 'SingleStore',
        description: 'A real-time database that combines transactional and analytical workloads for fast data processing.',
        logo: 'singlestore-logo.svg'
      }
    ]
  },
  {
    title: 'Additional Technologies',
    items: [
      {
        name: 'AI71',
        description: 'An AI development platform that provides tools and resources for building intelligent applications.',
        logo: 'ai71-logo.png'
      },
      {
        name: 'VectorShift.AI',
        description: 'A platform for advanced vector database management and processing, enhancing data accessibility.',
        logo: 'vectorshift-logo.png'
      },
      {
        name: 'Perplexity Search',
        description: 'An intelligent search engine that leverages AI to provide relevant and contextual search results.',
        logo: 'perplexity-logo.png'
      },
      {
        name: 'Pydantic',
        description: 'A data validation and settings management library for Python, ensuring data integrity and type safety.',
        logo: 'pydantic-logo.png'
      },
      {
        name: 'Webflow',
        description: 'A web design tool and CMS that allows users to create responsive websites visually.',
        logo: 'webflow-logo.png'
      },
      {
        name: 'Lablab',
        description: 'A platform offering AI and machine learning tools for developers and researchers.',
        logo: 'lablab-logo.png'
      }
    ]
  },
  {
    title: 'LLM Optimization and Tracking',
    items: [
      {
        name: 'Phoenix',
        description: 'A web framework for Elixir that provides high performance and productivity for building scalable applications.',
        logo: 'phoenix-logo.png'
      },
      {
        name: 'Dspy',
        description: 'A suite of data science and AI tools designed to streamline the development of machine learning models.',
        logo: 'dspy-logo.png'
      }
    ]
  }
];

const logos = [
  'airtable.svg', 'freshbooks.svg', 'hubSpot.svg', 'miro.svg', 'sap.svg',
  'square.svg', 'webflow.svg', 'zoom.svg', 'buffer.svg', 'google-workspace.svg',
  'mailchimp.svg', 'notion.svg', 'shopify.svg', 'stripe.svg', 'workday.svg',
  'dropbox.svg', 'gusto.svg', 'microsoft.svg', 'salesforce.svg', 'slack.svg',
  'twilio.svg', 'zapier.svg'
];

</script>

<style scoped>
.animate-marquee {
  animation: marquee 20s linear infinite;
  white-space: nowrap; /* Prevent line breaks */
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
}

.marquee-logo {
  width: 100px; /* Adjust width as needed */
  height: auto; /* Maintain aspect ratio */
  margin: 0 20px; /* Adjust margin for spacing */
}
</style>