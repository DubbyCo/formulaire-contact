<template>
  <div class="marquee-band" aria-hidden="true">
    <div class="marquee-text" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
      <div
        ref="trackRef"
        class="marquee-text-track"
        :style="{ animationPlayState: isPaused || prefersReducedMotion ? 'paused' : 'running' }"
      >
        <span v-for="(item, index) in items" :key="`a-${index}`" :class="{ dot: item === '·' }">{{ item }}</span>
      </div>
      <div
        class="marquee-text-track"
        aria-hidden="true"
        :style="{ animationPlayState: isPaused || prefersReducedMotion ? 'paused' : 'running' }"
      >
        <span v-for="(item, index) in items" :key="`b-${index}`" :class="{ dot: item === '·' }">{{ item }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = [
  'Vue.js', '·', 'Nuxt.js', '·', 'Hebergement', '·',
  'Green IT', '·', 'Souveraineté', '·', 'RGPD', '·', 'Cybersécurité', '·', 
  'Vue.js', '·', 'Nuxt.js', '·', 'Hebergement', '·',
  'Green IT', '·', 'Souveraineté', '·', 'RGPD', '·', 'Cybersécurité', '·', 
]

const isPaused = ref(false)
const prefersReducedMotion = ref(
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
)

const trackRef = ref(null)
const trackWidth = ref(0)

onMounted(() => {
  if (trackRef.value) {
    trackWidth.value = trackRef.value.offsetWidth
  }
})
</script>

<style scoped>
.marquee-band {
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
  padding: 14px 0;
}

.marquee-text {
  overflow: clip;
  display: flex;
}

.marquee-text-track {
  display: flex;
  gap: 32px;
  flex-shrink: 0;
  min-width: 100%;
  animation: marquee 40s linear infinite;
}

.marquee-text-track span {
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 700;
  color: var(--muted);
  white-space: nowrap;
}

.marquee-text-track span.dot {
  color: var(--green);
}

.marquee-text-track span:last-child {
  padding-right: 32px;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
}
</style>