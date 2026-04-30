<template>
  <section id="services" class="section-services">
    <h2 class="section-titre">Services</h2>
    <div class="grille-services" ref="grille">
      <div v-for="service in services" :key="service.titre" class="card-service">
        <div class="card-icone">{{ service.icon }}</div>
        <h3 class="card-titre">{{ service.titre }}</h3>
        <p class="card-description">{{ service.description }}</p>
        <ul class="card-inclus">
          <li v-for="point in service.inclus" :key="point">{{ point }}</li>
        </ul>
        <ul class="card-non-inclus">
          <li v-for="point in service.nonInclus" :key="point">{{ point }}</li>
        </ul>
        <div v-if="service.options && service.options.length" class="card-options-wrapper">
  <button 
    class="card-options-btn" 
    @click="toggleOptions(service.titre)"
  >
    ⚙ Options
    <ul class="card-options-bulle">
      <li v-for="point in service.options" :key="point">{{ point }}</li>
    </ul>
  </button>
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



const services = [
  {
    icon: '🎯',
    titre: 'Landing Page',
    description: 'Une page unique sur-mesure, rapide et légère. Idéale pour un lancement, une offre ou une présence en ligne simple et efficace.',
    inclus: [
      'Adapté mobile, tablette et ordinateur',
      'Navigation + menu burger mobile',
      'Formulaire de contact',
      'Conforme au RGPD',
      'Code sécurisé',
      'Référencement optimisé',
      'Hébergement européen — 1ère année offerte',
      '2 allers-retours de corrections',
    ],
    options : [
      'Statistiques de visites',
    ],
    nonInclus: [
      'Rédaction des textes',
      'Création du logo',
      'Médias (Photos, vidéos, illustrations, fichiers)',
      'Achat du nom de domaine',
    ],
    prix: '1 200€',
  },
  {
    icon: '🖥️',
    titre: 'Site vitrine 3–5 pages',
    description: 'Un site multi-pages pour présenter votre activité, vos services et vous démarquer.',
    inclus: [
      'Tout le contenu de la Landing Page',
      'Jusqu\'à 5 pages personnalisées',
      'Blog / Vos actualités possible (compte comme une page)',
      'Création d’un email pro : @mondomaine.fr',
      '2 allers-retours de corrections',
    ],
    options : [
      'Page supplémentaire au-delà de 5 : +400€/page',
      'Interface de gestion du contenu et formation option +200€',
      'Statistiques de visites',
    ],
    nonInclus: [
      'Rédaction des textes',
      'Création du logo',
      'Médias (Photos, vidéos, illustrations, fichiers)',
      'Achat du nom de domaine',
    ],
    prix: '2 200€',
  },
  {
    icon: '🚚',
    titre: 'Migration souveraine',
    description: 'Migration de votre site vers une infrastructure souveraine — 100% européenne. Zéro interruption, conforme RGPD. Devis sur mesure selon la configuration de votre site.',
    inclus: [
      'Audit de l\'hébergement actuel',
      'Migration des fichiers et base de données',
      'Configuration DNS + HTTPS',
      'Zéro interruption visible pour vos visiteurs',
      '1 mois d\'hébergement offert',
      'Vérification complète post-migration',
    ],
    options : [
      'Boîte mail pro recréée (+50€ / boîte mail)',
      'Migration des archives emails (sur devis)',
      'Statistiques de visites',
      'Maintenance mensuelle (abonnement séparé)',
    ],
    nonInclus: [
      'Refonte du code ou du design',
      'Création de nouveaux contenus',
    ],
    prix: 'À partir de 150€',
  },
  {
    icon: '🛠️',
    titre: 'Refonte',
    description: 'Votre site repensé selon vos besoins — du simple nettoyage technique à la refonte complète avec des nouvelles fonctionnalités. Devis sur mesure.',
    inclus: [
      'Technique uniquement — code propre, perfs, SEO',
      'Technique + refonte visuelle',
      'Refonte complète avec nouvelles fonctionnalités',
      'Hébergement européen — 1ère année offerte',
      '2 allers-retours de corrections inclus',
    ],
    nonInclus: [
      'Rédaction des textes',
      'Création du logo',
      'Photos et illustrations',
    ],
    prix: 'Dès 1 000€',
  },
  {
    icon: '🔄',
    titre: 'Maintenance mensuelle · Niveau 1',
    description: 'Surveillance du bon fonctionnement du site. Aucune modification de contenu. Idéal pour rester serein sans gérer la technique.',
    inclus: [
      'Maintenance du serveur et des logiciels',
      'Correction de bugs techniques',
      'Mises à jour des dépendances (si nécessaire)',
      'Vérification et ajustement de la sécurité',
      '1 intervention de maintenance par mois',
    ],
    nonInclus: [
      'Modification de textes ou de contenu',
      'Nouvelles fonctionnalités',
    ],
    prix: '100€ / mois',
  },
  {
    icon: '🔄🛠️',
    titre: 'Maintenance mensuelle · Niveau 2',
    description: 'Technique + mises à jour de contenu. Déléguez entièrement la gestion de votre site.',
    inclus: [
      'Tout ce qui est inclus dans la maintenance de Niveau 1',
      'Mises à jour du contenu de votre site · jusqu\'à 2h/mois',
      'Compte-rendu mensuel si besoin',
    ],
    options : [
      'Heures au-delà de 2h (sur devis)',
      'Nouvelles fonctionnalités',
      'Statistiques de visites',
    ],
    nonInclus: [
      'Refonte ou redesign',
    ],
    prix: '200€ / mois',
  },
]

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

.card-icone {
  font-size: 1.5rem;
}

.card-titre {
  font-family: 'Syne', sans-serif;
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
  font-family: 'Syne', sans-serif;
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

/* Bulle desktop */
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
  .card-options-btn:hover .card-options-bulle {
    display: flex;
  }
  .card-options-mobile {
    display: none !important;
  }
}

/* Liste mobile */
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