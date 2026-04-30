


<template>

<div class="carte">
  <div class="carte-header">
    <span class="nom">{{ nom }}</span>
    <span class="niveau">{{ niveau }}%</span>
  </div>
  <div class="barre-fond">
    <div class="barre-remplissage" :style="{ width: niveauAffiche + '%'}"></div>
  </div>
</div>

</template>

<script setup>

import { ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
  nom: String,
  niveau: Number,
  categorie: String,
})

const niveauAffiche = ref(0)

onMounted (() => {
  setTimeout (() => {
    niveauAffiche.value = props.niveau
  }, 100)
})

</script>

<style scoped>

.carte {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.carte-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.nom {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.5px;
  color: var(--text);
}

.niveau {
  font-size: 12px;
  font-weight: 600;
  color: var(--green);
}

.barre-fond {
  width: 100%;
  background-color: var(--faint);
  height: 6px;
  overflow: hidden;
}

.barre-remplissage {
  height: 100%;
  background: var(--grad-btn);
  transition: width 0.6s ease;
}


</style>