<template>

<button class="scroll-top" :class="{ visible: isVisible}" @click="scrollToTop">↑</button>

</template>

<script setup>

import { ref, onMounted, onUnmounted } from "vue"

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > 150
}

const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))

onUnmounted(() => window.removeEventListener('scroll', handleScroll))

</script>

<style scoped>

.scroll-top {
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 200;
  width: 44px;
  height: 44px;
  background: var(--grad-btn);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #0f110e;
  font-weight: 900;
  font-family: inherit;
  opacity: 0;
  transform: translateY(16px);
  transition:
    opacity 0.3s,
    transform 0.3s;
  pointer-events: none;
}

.scroll-top.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

</style>