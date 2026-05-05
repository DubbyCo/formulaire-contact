<template>
  <section id="services" class="section-services">
    <h2 class="section-titre">Services</h2>
    <div class="grille-services" ref="grille">
      <div v-for="service in services" :key="service.titre" class="card-service">
        <div class="card-header">
          <component :is="icones[service.icone]" :size="24" :stroke-width="1.5" color="var(--green)" />
          <h3 class="card-titre">{{ service.titre }}</h3>
        </div>
        <p class="card-description">{{ service.description }}</p>
        <ul class="card-inclus">
          <li v-for="point in service.inclus" :key="point">{{ point }}</li>
        </ul>
        <ul class="card-non-inclus">
          <li v-for="point in service.nonInclus" :key="point">{{ point }}</li>
        </ul>
        <div v-if="service.options && service.options.length" class="card-options-wrapper">
  <button class="card-options-btn" @click="toggleOptions(service.titre)">
    <SlidersHorizontal :size="14" :stroke-width="1.5" color="var(--green)" />
    Options
  </button>
  <ul class="card-options-bulle">
    <li v-for="point in service.options" :key="point">{{ point }}</li>
  </ul>
  <ul v-if="optionsOuvertes === service.titre" class="card-options-mobile">
    <li v-for="point in service.options" :key="point">{{ point }}</li>
  </ul>
</div>
        <div class="card-footer">
          <span class="card-prix">{{ service.prix }}</span>
          <button class="card-btn" @click="scrollVersContact">
            Devis sur mesure
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { Zap, Monitor, HardDriveDownload, Wrench, RefreshCw, MonitorCog, SlidersHorizontal, SlidersHorizontalIcon } from 'lucide-vue-next'
import { services } from '../data/services.js'

const icones = { Zap, Monitor, HardDriveDownload, Wrench, RefreshCw, MonitorCog, SlidersHorizontal }

const grille = ref(null)
let observer = null

onMounted(async () => {
  await nextTick()

  const cartes = grille.value?.querySelectorAll('.card-service')
  if (!cartes) return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  const largeur = window.innerWidth

  cartes.forEach((carte) => {
    const rect = carte.getBoundingClientRect()
    const centreEcran = largeur / 2

    if (largeur < 768) {
      carte.classList.add('fade-in')
    } else if (rect.left + rect.width / 2 < largeur / 3) {
      carte.classList.add('fade-left')
    } else if (rect.left + rect.width / 2 > (largeur * 2) / 3) {
      carte.classList.add('fade-right')
    } else {
      carte.classList.add('fade-in')
    }

    observer.observe(carte)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

function scrollVersContact() {
  const section = document.getElementById('contact')
  if (section) {
    const top = section.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

const optionsOuvertes = ref(null)

const toggleOptions = (titre) => {
  optionsOuvertes.value = optionsOuvertes.value === titre ? null : titre
}

</script>

<style scoped>
.section-services {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-titre {
  font-size: 2rem;
  margin-bottom: 2.5rem;
  text-align: center;
  color: var(--text);
  font-weight: 700;
}

.grille-services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
}

.card-service {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.75rem;
  background: var(--faint);
  border: 1px solid var(--border);
  border-radius: 12px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card-service:hover {
  transform: translateY(-4px);
  border-color: var(--green);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 12px;
}

.card-titre {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0;
}

.card-titre {
  font-size: 1.2rem;
  font-weight: 700;
}

.card-description {
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.75;
}

.card-inclus {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  flex: 1;
}

.card-inclus li {
  font-size: 0.85rem;
  padding-left: 1.2rem;
  position: relative;
  opacity: 0.85;
}

.card-inclus li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--green);
  font-weight: 700;
}

.card-non-inclus {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.card-non-inclus li {
  font-size: 0.85rem;
  padding-left: 1.2rem;
  position: relative;
  opacity: 0.6;
}

.card-non-inclus li::before {
  content: '✕';
  position: absolute;
  left: 0;
  color: #c0392b;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.card-prix {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
}

.card-btn {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  background: var(--grad-btn);
  color: #000000;
  font-size: 0.8rem;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.card-btn:hover {
  opacity: 0.75;
}


.card-options-wrapper {
  position: relative;
}

.card-options-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: transparent;
  border: none;
  color: var(--muted);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  font-family: inherit;
  padding: 0;
  position: relative;
}

.card-options-btn:hover {
  color: var(--green);
}

.card-options-bulle {
  display: none;
  position: absolute;
  bottom: 100%;
  left: 0;
  background: var(--bg);
  border: 1px solid var(--border);
  padding: 12px 16px;
  list-style: none;
  width: 240px;
  z-index: 10;
  gap: 8px;
  flex-direction: column;
}

.card-options-bulle li {
  font-size: 12px;
  color: var(--text);
  padding-left: 1.2rem;
  position: relative;
}

.card-options-bulle li::before {
  content: '⚙';
  position: absolute;
  left: 0;
  color: var(--green);
  font-size: 10px;
}

@media (min-width: 769px) {
  .card-options-btn:hover + .card-options-bulle {
    display: flex;
  }

  .card-options-mobile {
    display: none !important;
  }
}

.card-options-mobile {
  list-style: none;
  padding: 8px 0 0 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.card-options-mobile li {
  font-size: 12px;
  color: var(--text);
  padding-left: 1.2rem;
  position: relative;
  opacity: 0.8;
}

.card-options-mobile li::before {
  content: '⚙';
  position: absolute;
  left: 0;
  color: var(--green);
  font-size: 10px;
}
</style>