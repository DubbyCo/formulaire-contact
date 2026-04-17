<script setup>

import { ref, computed } from "vue";
import CarteCompetence from "./CarteCompetence.vue";
import FiltreCategorie from "./FiltreCategorie.vue";

const filtreActif = ref('tous')

const competences = ref([
  { id: 1, nom: 'HTML / CSS', niveau: 70, categorie: 'dev' },
  { id: 2, nom: 'JavaScript', niveau: 40, categorie: 'dev' },
  { id: 3, nom: 'Vue.js / Nuxt.js', niveau: 15, categorie: 'dev' },
  { id: 4, nom: 'Node.js / Strapi', niveau: 5, categorie: 'dev' },
  { id: 5, nom: 'Green IT', niveau: 50, categorie: 'green' },
  { id: 6, nom: 'Cybersécurité Web', niveau: 5, categorie: 'cyber' },
  { id: 7, nom: 'Hebergement / VPS', niveau: 30, categorie: 'green' },
])

const competencesFiltrees = computed(() => {
  if (filtreActif.value === 'tous') return competences.value
  return competences.value.filter(c => c.categorie === filtreActif.value)
})



</script>

<template>

  <section class="section-competences">
    <h2>Mes compétences</h2>

    <FiltreCategorie :filtreActif="filtreActif" @changerFiltre="filtreActif = $event" />

    <TransitionGroup tag="div" class="grille" name="carte">
      <CarteCompetence v-for="competence in competencesFiltrees" :key="competence.id" :nom="competence.nom"
        :niveau="competence.niveau" :categorie="competence.categorie" />
    </TransitionGroup>

  </section>

</template>

<style scoped>

.section-competences {
  max-width: 960px;
  margin: 0 auto;
  padding: 40px 24px;
}

.section-competences nav {
  padding-bottom: 20px;
}

#competences {
  padding-bottom: 20px;
}

</style>







