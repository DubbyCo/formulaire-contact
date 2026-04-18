<template>
  <section id="services" class="section-services">
    <h2 class="section-titre">Services</h2>
    <div class="grille-services">
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

const services = [
  {
    icon: '🎯',
    titre: 'Landing Page',
    description: 'Une page unique sur-mesure, rapide et légère. Idéale pour un lancement, une offre ou une présence en ligne simple et efficace.',
    inclus: [
      'Site conçu sur-mesure, sans template',
      'Adapté mobile, tablette et ordinateur',
      'Navigation + menu burger mobile',
      'Formulaire de contact',
      'Conforme au RGPD',
      'Code sécurisé',
      'Référencement optimisé',
      'Hébergement européen — 1ère année offerte',
      'Déploiement et mise en ligne',
      '2 allers-retours de corrections',
    ],
    nonInclus: [
      'Rédaction des textes',
      'Création du logo',
      'Médias (Photos, vidéos, illustrations, fichiers)',
      'Achat du nom de domaine',
      'Statistiques de visites (option disponible)',
    ],
    prix: '1 200€',
  },
  {
    icon: '🖥️',
    titre: 'Site vitrine 3–5 pages',
    description: 'Un site multi-pages pour présenter votre activité, vos services et vous démarquer. Blog inclus si souhaité.',
    inclus: [
      'Tout le contenu de la Landing Page',
      'Jusqu\'à 5 pages personnalisées',
      'Blog / vos actualités possible (compte comme une page)',
      'Formation à la gestion du site',
      'Création d’un email pro : @mondomaine.fr',
      '2 allers-retours de corrections',
      //* manque 2-3 lignes ici
    ],
    nonInclus: [
      'Rédaction des textes',
      'Création du logo',
      'Médias (Photos, vidéos, illustrations, fichiers)',
      'Achat du nom de domaine',
      'Page supplémentaire au-delà de 5 : +400€/page',
      'Statistiques de visites (option disponible)',
    ],
    prix: '2 200€',
  },
  {
    icon: '🚚',
    titre: 'Migration souveraine',
    description: 'Migration de votre site vers une infrastructure souveraine — 100% européenne. Zéro interruption, conforme RGPD.',
    inclus: [
      'Audit de l\'hébergement actuel',
      'Migration des fichiers et base de données',
      'Configuration DNS + HTTPS',
      'Boîte mail pro recréée à l\'identique',
      'Zéro interruption visible pour vos visiteurs',
      '1 aller-retour de correction inclus',
    ],
    nonInclus: [
      'Refonte du code ou du design',
      'Création de nouveaux contenus',
      'Migration des archives emails (option +200€)',
      'Statistiques de visites (option disponible)',
    ],
    prix: '700€',
  },
  {
    icon: '🛠️',
    titre: 'Refonte',
    description: 'Votre site repensé selon vos besoins — du simple nettoyage technique à la refonte complète avec des nouvelles fonctionnalités.',
    inclus: [
      'Technique uniquement — code propre, perfs, SEO',
      'Technique + redesign visuel sur brief',
      'Refonte complète avec nouvelles fonctionnalités',
      'Hébergement européen — 1ère année offerte',
      '2 allers-retours de corrections inclus',
    ],
    nonInclus: [
      'Rédaction des textes',
      'Création du logo',
      'Photos et illustrations',
      'Statistiques de visites (option disponible)',
    ],
    prix: 'dès 1 000€',
  },
  {
    icon: '🔄',
    titre: 'Maintenance · Niveau 1',
    description: 'Surveillance et bon fonctionnement du site. Aucune modification de contenu. Idéal pour rester serein sans gérer la technique.',
    inclus: [
      'Surveillance du bon fonctionnement du site',
      'Correction de bug techniques',
      'Mises à jour des dépendances (si nécessaire)',
      'Vérification et ajustement de la sécurité',
      '1 intervention de maintenance par mois',
    ],
    nonInclus: [
      'Modification de textes ou de contenu',
      'Nouvelles fonctionnalités',
      'Statistiques de visites (option disponible)',
    ],
    prix: '100€ / mois',
  },
  {
    icon: '🔄🛠️',
    titre: 'Maintenance mensuelle · Niveau 2',
    description: 'Technique + mises à jour de contenu. Déléguez entièrement la gestion de votre site.',
    inclus: [
      'Tout ce qui est inclus dans la maintenance technique',
      'Mises à jour de contenu — jusqu\'à 2h/mois',
      'Compte-rendu mensuel si besoin',
    ],
    nonInclus: [
      'Refonte ou redesign',
      'Heures au-delà de 2h',
      'Statistiques de visites (option disponible)',

    ],
    prix: '200€ / mois',
  },
]

function scrollVersContact() {
  const section = document.getElementById('contact')
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' })
  }
}

</script>

<style scoped>
.section-services {
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-titre {
  font-family: 'Syne', sans-serif;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  text-align: center;
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
</style>