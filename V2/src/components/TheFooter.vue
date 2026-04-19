<template>
  <footer class="site-footer">
    <p class="footer-brand">© 2026 DUBBY-CODE — Micro-entreprise française</p>

    <nav class="footer-nav" aria-label="Navigation secondaire">
      <a href="/#apropos" @click.prevent="navigateTo('#apropos')">À propos</a>
      <a href="/#competences" @click.prevent="navigateTo('#competences')">Compétences</a>
      <a href="/#contact" @click.prevent="navigateTo('#contact')">Contact</a>
    </nav>

    <div class="footer-socials">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://linkedin.com/in/victor-ivanoff-developpeur-web" target="_blank"
        rel="noopener noreferrer">LinkedIn</a>
      <a href="https://www.malt.fr/" target="_blank" rel="noopener noreferrer">Malt</a>
    </div>

    <p class="footer-legal">
      <RouterLink to="/mentions-legales">Mentions légales</RouterLink>
      · <RouterLink to="/politique-de-confidentialite">Politique de confidentialité</RouterLink>
      · Hébergé chez Infomaniak · Zéro tracker · Énergie renouvelable
    </p>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router"

const router = useRouter()

function navigateTo(hash) {
  router.push("/").then(() => {
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  })
}
</script>

<style scoped>
.site-footer {
  border-top: 1px solid var(--border);
  padding: 32px 48px;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 24px;
  margin-top: 20px;
}

.footer-brand {
  font-size: 11px;
  color: var(--footer-col);
  letter-spacing: 0.5px;
}

.footer-nav {
  display: flex;
  gap: 28px;
  justify-content: center;
}

.footer-nav :deep(a) {
  font-size: 11px;
  color: var(--muted);
  letter-spacing: 0.8px;
  font-weight: 600;
  transition: color 0.2s;
}

.footer-nav :deep(a:hover) {
  color: var(--green);
}

.footer-socials {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.footer-socials a {
  font-size: 11px;
  color: var(--muted);
  border: 1px solid var(--border);
  padding: 6px 14px;
  letter-spacing: 0.5px;
  transition:
    color 0.2s,
    border-color 0.2s;
}

.footer-socials a:hover {
  color: var(--green);
  border-color: rgba(125, 211, 33, 0.35);
}

.footer-legal {
  grid-column: 1 / -1;
  text-align: center;
  font-size: 10px;
  color: var(--footer-col);
  letter-spacing: 0.5px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
}

@media (max-width: 768px) {
  .site-footer {
    grid-template-columns: 1fr;
    padding: 24px 20px;
    gap: 16px;
    text-align: center;
  }

  .footer-nav {
    flex-wrap: wrap;
    gap: 16px;
  }

  .footer-socials {
    justify-content: center;
  }

  .footer-legal {
    padding-top: 12px;
  }
}
</style>