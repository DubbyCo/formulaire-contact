<template>

  <div class="filtres">
    <button
    v-for="categorie in [
      { valeur: 'tous', label: 'Tous' },
      { valeur: 'dev', label: 'Dev' },
      { valeur: 'cyber', label: 'Cyber' },
      { valeur: 'green', label: 'Green' },
  ]"
    :key="categorie.valeur"
    :class="{ actif: filtreActif === categorie.valeur }"
    @click="$emit('changerFiltre', categorie.valeur)"
    >
      {{ categorie.label }}
  </button>
  </div>
  
</template>

<script setup>

defineProps({
  filtreActif: String
})

defineEmits(['changerFiltre'])

</script>

<style scoped>

.filtres {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding-bottom: 20px;
}

button {
  background: transparent;
  color: var(--green);
  border: 1px solid rgba(125, 211, 33, 0.45);
  padding: 9px 22px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s, color 0.2s;
}

button:hover {
  background: rgba(125, 211, 33, 0.08);
}

button.actif {
  background: rgba(125, 211, 33, 0.15);
  border-color: var(--green);
}

</style>