<template>
  
  <div class="not-found">
    <h1>404</h1>
    <p>Cette page n'existe pas.</p>
    <RouterLink to="/">Retour à l'accueil</RouterLink>
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

</style>