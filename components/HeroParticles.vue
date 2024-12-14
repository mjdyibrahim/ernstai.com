<template>
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Background Image -->
      <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" 
           style="background-image: url('/images/pexels-ioannis-ioannidis-1565556-6459797.jpg'); filter: brightness(0.6);">
      </div>
      
      <!-- Glittering particles -->
      <div v-for="n in 20" :key="n" 
           class="particle absolute w-1 h-1 bg-white/30 rounded-full"
           :style="{
             '--delay': `${Math.random() * 5}s`,
             '--duration': `${5 + Math.random() * 5}s`,
             left: `${Math.random() * 100}%`,
             top: `${Math.random() * 100}%`
           }"
      ></div>
  
      <!-- Growing plants -->
      <svg class="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 200">
        <path class="growing-vine" 
              d="M10,200 Q10,150 20,130 Q30,110 10,90 Q-10,70 0,50 Q10,30 10,0"
              fill="none" 
              stroke='green' 
              stroke-width="2"
              style="animation: grow 5s ease-out forwards; animation-delay: 0s;" 
        />
        <path class="growing-vine" 
              d="M50,200 Q50,150 60,130 Q70,110 50,90 Q30,70 40,50 Q50,30 50,0"
              fill="none" 
              stroke="var(--color-green)" 
              stroke-width="2"
              style="animation: grow 5s ease-out forwards; animation-delay: 1s;" 
        />
        <path class="growing-vine" 
              d="M90,200 Q90,150 80,130 Q70,110 90,90 Q110,70 100,50 Q90,30 90,0"
              fill="none" 
              stroke="var(--color-green)" 
              stroke-width="2"
              style="animation: grow 5s ease-out forwards; animation-delay: 2s;" 
        />
        <path class="growing-vine" 
              d="M30,200 Q30,150 20,130 Q10,110 30,90 Q50,70 40,50 Q30,30 30,0"
              fill="none" 
              stroke="var(--color-green)" 
              stroke-width="2"
              style="animation: grow 5s ease-out forwards; animation-delay: 3s;" 
        />
      </svg>
    </div>
  </template>
  
  <style scoped>
  .particle {
    animation: float var(--duration) ease-in-out infinite;
    animation-delay: var(--delay);
    opacity: 0;
  }
  
  @keyframes float {
    0%, 100% {
      transform: translate(0, 0) scale(0);
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    50% {
      transform: translate(100px, -100px) scale(1);
      opacity: 0.5;
    }
    75% {
      opacity: 1;
    }
  }
  
  .growing-vine {
    stroke-dasharray: 300;
    stroke-dashoffset: 300;
    animation: grow 5s ease-out forwards;
  }
  
  @keyframes grow {
    to {
      stroke-dashoffset: 0;
    }
  }
  </style>