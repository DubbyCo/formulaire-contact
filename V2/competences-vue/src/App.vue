<template>
<div class="app-layout">
<TheHeader />
<TheMarquee />
<main>
<RouterView v-slot="{ Component }">
  <Transition name="page" mode="out-in">
    <component :is="Component" />
  </Transition>
</RouterView>
</main>
<TheFooter />
<TheScrollTop />


</div>
</template>

<script setup>

import { onMounted } from "vue";

import { useUiStore } from "./stores/ui.js";

import TheHeader from "./components/TheHeader.vue";
import TheMarquee from "./components/TheMarquee.vue";
import TheFooter from "./components/TheFooter.vue";
import TheScrollTop from "./components/TheScrollTop.vue";

const ui = useUiStore ()

onMounted(() => {
  if (ui.darkMode) {
    document.body.classList.add('dark')
  }
})

</script>




<style scoped>

.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}


@media (prefers-reduced-motion: reduce) {
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
}


</style>







