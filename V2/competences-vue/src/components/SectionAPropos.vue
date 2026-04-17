<template>
  <div class="apropos-grid">
    <div class="apropos-texte">
      <p class="apropos-label">À PROPOS</p>
      <h2 class="apropos-titre">
        Je construis du web léger, souverain et sécurisé.
      </h2>
      <p class="apropos-bio">
        Je m'appelle Victor, je suis développeur web full stack, fondateur
        de Dubby Code.
      </p>
      <p class="apropos-bio">
        Un bon site web, c'est un site qui respecte autant celui qui le
        visite que la planète qui l'héberge.
      </p>
      <p class="apropos-bio">
        Dubby Code a des valeurs fortes : Green IT, performance,
        souveraineté et sécurité qui se trouvent sur le même chemin. Pas
        de dépendances inutiles, pas de ressources chargées depuis des
        serveurs à l'autre bout du monde. Du code réfléchi ligne par ligne
        pour être performant et sécurisé.
      </p>
      <p class="apropos-bio">
        Un site léger charge vite, consomme moins, dépend de moins de
        tiers, et expose moins de surface d'attaque.
      </p>
      <p class="apropos-bio">
        Je construis des sites mobile-first sur mesure, performants,
        sécurisés, qui protègent autant vos données que celles de vos
        visiteurs.
      </p>
      <p class="apropos-bio">
        Ma pratique est orientée vers le renforcement de la sécurité
        applicative et des audits, pour que vos projets ne soient pas
        laissés avec des vulnérabilités.
      </p>
      <p class="apropos-bio">
        Si vous cherchez quelqu'un qui s'investit autant dans votre projet
        que vous même, je suis à votre écoute.
      </p>
    </div>

    <div class="apropos-side">
      <div class="apropos-card">
        <p class="apropos-bloc-label">VALEURS</p>
        <div class="tag-list">
          <span class="tag">🌱 Green IT</span>
          <span class="tag">🇫🇷 Souveraineté</span>
          <span class="tag">🔐 Sécurité</span>
          <span class="tag">⚡ Performance</span>
          <span class="tag">♿ Accessibilité</span>
          <span class="tag">🔍 RGPD</span>
        </div>
      </div>

      <div class="apropos-card">
        <p class="apropos-bloc-label">STACK</p>
        <div class="tag-list">
          <span class="tag tag--tech">HTML / CSS</span>
          <span class="tag tag--tech">JavaScript</span>
          <span class="tag tag--tech">Vue.js</span>
          <span class="tag tag--tech">Nuxt.js</span>
          <span class="tag tag--tech">Node.js</span>
          <span class="tag tag--tech">Hébergement VPS</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>

.apropos-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  padding: 64px 0;
}

.apropos-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--green);
  margin-bottom: 20px;
}

.apropos-titre {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: 0.5px;
  margin-bottom: 28px;
}

.apropos-bio {
  font-size: 14px;
  color: var(--muted);
  line-height: 1.9;
  margin-bottom: 18px;
}

.apropos-side {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
}

/* Card — même style que .contact-card */
.apropos-card {
  background: var(--faint);
  border: 1px solid var(--border);
  padding: 32px;
}

.apropos-bloc-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--muted);
  margin-bottom: 18px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: var(--text);
  border: 1px solid var(--tag-border);
  padding: 10px 20px;
}

.tag--tech {
  color: var(--green);
  border-color: rgba(125, 211, 33, 0.25);
}

/* ── RESPONSIVE À PROPOS ──────────────────────────────────── */
@media (max-width: 768px) {
  .apropos-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 40px 0;
  }
  .site-header {
    padding: 0 20px;
    height: 56px;
  }
}
</style>