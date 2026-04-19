<template>
  <main class="mentions-wrapper">
    <div class="mentions-container">

      <h1 class="mentions-title">Politique de confidentialité</h1>

      <section class="mentions-section">
        <h2>1. Responsable du traitement</h2>
        <p>
          Le responsable du traitement des données collectées sur <strong>dubby-code.fr</strong> est IVANOFF Victor,
          micro-entrepreneur, joignable à <a href="mailto:contact@dubby-code.com">contact@dubby-code.com</a>
        </p>
      </section>

      <section class="mentions-section">
        <h2>2. Données collectées</h2>
        <p>
          Le seul point de collecte de données personnelles sur ce site est le formulaire de contact.
          Les données suivantes sont collectées :
        </p>
        <ul>
          <li><strong>Nom</strong></li>
          <li><strong>Adresse email</strong></li>
          <li><strong>Message</strong></li>
        </ul>
        <p>Ces données seront utilisées uniquement pour répondre à votre demande de contact.</p>
      </section>

      <section class="mentions-section">
        <h2>3. Durée de conservation</h2>
        <p>
          Les données transmises via le formulaire de contact sont conservées pendant une durée maximale de 3 ans à
          compter de votre prise de contact.
        </p>
      </section>

      <section class="mentions-section">
        <h2>4. Mesure d'audience</h2>
        <p>
          Ce site utilise <strong>Matomo</strong>, un outil d'analyse d'audience open source auto-hébergé sur notre
          propre infrastructure (VPS Infomaniak, Suisse).
          Aucune donnée n'est transmise à un tiers.
        </p>
        <p>
          Les mesures suivantes sont appliquées pour respecter votre vie privée :
        </p>
        <ul>
          <li>Anonymisation des adresses IP</li>
          <li>Aucun cookie de tracking déposé</li>
          <li>Données stockées exclusivement sur nos serveurs</li>
        </ul>
        <p>
          Ces conditions permettent l'utilisation de Matomo sans recueil de votre consentement conformément aux
          recommandations de la CNIL.
        </p>
      </section>

      <section class="mentions-section">
        <h2>5. Cookies</h2>
        <p>
          Ce site n'utilise aucun cookie publicitaire ni cookie de tracking tiers.
          Les seuls cookies éventuellement déposés sont strictement fonctionnels (mémorisation de vos préférences
          d'affichage : thème, mode de lecture).
        </p>
      </section>

      <section class="mentions-section">
        <h2>6. Vos droits</h2>
        <p>
          Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants sur
          vos données :
        </p>
        <ul>
          <li>Droit d'accès</li>
          <li>Droit de rectification</li>
          <li>Droit à l'effacement</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit d'opposition</li>
        </ul>
        <p>
          Pour exercer ces droits, contactez-nous à <a href="mailto:contact@dubby-code.com">contact@dubby-code.com</a>.
          En cas de désaccord, vous pouvez introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">CNIL</a>
        </p>
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
  margin-bottom: 48px;
  color: var(--text);
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

.mentions-section p + p {
  margin-top: 12px;
}

.mentions-section ul {
  list-style: none;
  padding: 0;
  margin: 12px 0;
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