<script setup>


defineProps({
  filtreActif: String
})

defineEmits(['changerFiltre'])

</script>


<template>

  <div class="filtres">
    <button
    v-for="categorie in ['tous', 'dev', 'cyber', 'green']"
    :key="categorie"
    :class="{ actif: filtreActif === categorie }"
    @click="$emit('changerFiltre', categorie)"
    >
      {{ categorie }}
  </button>
  </div>
  
</template>


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