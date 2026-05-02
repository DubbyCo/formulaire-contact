<template>
  
  <div class="not-found">
    <h1>404</h1>
    <p class="not-found-titre">Page introuvable</p>
    <p class="not-found-texte">
      Cette page n'existe pas ou a été déplacée.
      <RouterLink to="/#contact">contactez-moi</RouterLink>.
    </p>
    <RouterLink to="/" class="not-found-btn">Retour à l'accueil</RouterLink>
  </div>

</template>

<style scoped>

.not-found {
  text-align: center;
  padding: 80px 24px;
}

h1 {
  font-size: 5rem;
  color: var(--green);
  margin-bottom: 16px;
}

a {
  display: inline-block;
  margin-top: 24px;
  color: var(--green);
  font-weight: bold;
}

.not-found-titre {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 12px;
}

.not-found-texte {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 32px;
  line-height: 1.6;
}

.not-found-btn {
  display: inline-block;
  color: var(--green);
  border: 1px solid rgba(125, 211, 33, 0.45);
  padding: 10px 24px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  transition: background 0.2s;
}

.not-found-btn:hover {
  background: rgba(125, 211, 33, 0.08);
}

</style>