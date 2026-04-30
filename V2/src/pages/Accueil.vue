<template>
  <div>
    <SectionAPropos ref="el1" class="fade-in" />
    <SectionCompetences ref="el2" class="fade-in" />
    <SectionServices ref="el3" class="fade-in" />
    <SectionPortfolio ref="el4" class="fade-in" />
    <FormulaireContact ref="el5" class="fade-in" />
    <SectionFaq ref="el6" class="fade-in" />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionAPropos from '../components/SectionAPropos.vue'
import SectionCompetences from '../components/SectionCompetences.vue'
import SectionServices from '../components/SectionServices.vue'
import SectionPortfolio from '../components/SectionPortfolio.vue'
import FormulaireContact from '../components/FormulaireContact.vue'
import SectionFaq from '../components/SectionFaq.vue'

const el1 = ref(null)
const el2 = ref(null)
const el3 = ref(null)
const el4 = ref(null)
const el5 = ref(null)
const el6 = ref(null)

let observer = null

onMounted(() => {
  const elements = [el1, el2, el3, el4, el5, el6]

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0 }
  )

  elements.forEach((el) => {
    if (el.value?.$el) observer.observe(el.value.$el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})
</script>