<template>
  <main class="mentions-wrapper">
    <div class="mentions-container">

      <h1 class="mentions-title">Mentions légales</h1>
      <p class="mentions-update">Dernière mise à jour: avril 2026</p>

      <section class="mentions-section">
        <h2>1. Éditeur du site</h2>
        <p>Le site <strong>dubby-code.fr</strong> est édité par :</p>
        <ul>
          <li><strong>Nom :</strong> IVANOFF VICTOR</li>
          <li><strong>Statut :</strong> Micro-entrepreneur</li>
          <li><strong>Activité :</strong> Développement web freelance</li>
          <li><strong>SIRET :</strong>99048979100014</li>
          <li><strong>Adresse :</strong>29 rue Tronchet - 75008 Paris - FRANCE</li>
          <li><strong>Email :</strong>contact@dubby-code.com</li>
          <li><strong>TVA :</strong> Non assujetti à la TVA — Article 293 B du CGI</li>
        </ul>
      </section>

      <section class="mentions-section">
        <h2>2. Hébergement</h2>
        <p>Ce site est hébergé par :</p>
        <ul>
          <li><strong>Société :</strong> Infomaniak Network SA</li>
          <li><strong>Adresse :</strong> Rue Eugène Marziano 25, 1227 Genève, Suisse</li>
          <li><strong>Site :</strong> <a href="https://www.infomaniak.com" target="_blank"
              rel="noopener noreferrer">infomaniak.com</a></li>
        </ul>
      </section>

    </div>
  </main>
</template>

<script setup>

</script>

<style scoped>
.mentions-wrapper {
  min-height: 100vh;
  padding: 80px 24px;
  display: flex;
  justify-content: center;
}

.mentions-container {
  max-width: 760px;
  width: 100%;
}

.mentions-title {
  font-family: var(--font-display);
  font-size: clamp(28px, 5vw, 42px);
  font-weight: 700;
  letter-spacing: -1px;
  margin-bottom: 8px;
  color: var(--text);
}

.mentions-update {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.5px;
  margin-bottom: 48px;
}

.mentions-section {
  margin-bottom: 40px;
  padding-bottom: 40px;
  border-bottom: 1px solid var(--border);
}

.mentions-section:last-child {
  border-bottom: none;
}

.mentions-section h2 {
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--green);
  margin-bottom: 16px;
}

.mentions-section p,
.mentions-section li {
  font-size: 14px;
  line-height: 1.8;
  color: var(--muted);
}

.mentions-section ul {
  list-style: none;
  padding: 0;
  margin: 12px 0 0 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mentions-section a {
  color: var(--green);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s;
}

.mentions-section a:hover {
  opacity: 0.7;
}

@media (max-width: 768px) {
  .mentions-wrapper {
    padding: 48px 20px;
  }
}
</style>