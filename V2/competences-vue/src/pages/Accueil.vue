<template>
  <div>
    <section id="apropos"><SectionAPropos /></section>
    <section id="competences"><SectionCompetences /></section>
    <section id="services"><SectionServices /></section>
    <section id="portfolio"><SectionPortfolio /></section>
    <section id="contact"><FormulaireContact /></section>
    <section id="faq"><SectionFaq /></section>
  </div>
</template>

<script setup>
import SectionAPropos from '../components/SectionAPropos.vue'
import SectionCompetences from '../components/SectionCompetences.vue'
import SectionServices from '../components/SectionServices.vue'
import SectionPortfolio from '../components/SectionPortfolio.vue'
import FormulaireContact from '../components/FormulaireContact.vue'
import SectionFaq from '../components/SectionFaq.vue'
</script>

<style scoped>

</style>