<template>

  <header class="site-header" :class="{ scrolled: isScrolled }">

    <RouterLink to="/" class="header-logo">
      DUBBY <span>CODE</span>
    </RouterLink>

    <nav class="header-nav" :class="{ open: menuOuvert }" aria-label="Navigation principale">
      <a href="/#apropos" @click.prevent="navigateTo('#apropos')" :class="{ active: sectionActive === 'apropos' }">À propos</a>
      <a href="/#competences" @click.prevent="navigateTo('#competences')" :class="{ active: sectionActive === 'competences' }" >Compétences</a>
      <a href="#services" @click.prevent="navigateTo('#services')" :class="{ active: sectionActive === 'services' }" >Services</a>
      <a href="/#contact" @click.prevent="navigateTo('#contact')" :class="{ active: sectionActive === 'contact' }" >Contact</a>
      <a href="/#faq" @click.prevent="navigateTo('#faq')" :class="{ active: sectionActive === 'faq' }" >FAQ</a>
    </nav>

    <div class="header-right">
      <a href="/#contact" class="header-cta" @click.prevent="navigateTo('#contact')">CONTACT →</a>

      <button class="dyslexic-toggle" :class="{ active: uiStore.dyslexicMode }" @click="uiStore.toggleDyslexicMode"
        :aria-label="uiStore.dyslexicMode ? 'Désactiver le mode dyslexique' : 'Activer le mode dyslexique'">
        Aa
      </button>

      <button class="theme-toggle" @click="uiStore.toggleDarkMode" aria-label="Changer le thème">
        {{ uiStore.darkMode ? "☀️" : "🌙" }}
      </button>
      <button class="burger" :class="{ open: menuOuvert }" @click="toggleMenu" :aria-expanded="menuOuvert.toString()"
        aria-label="Ouvrir le menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

  </header>

</template>

<script setup>

import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useUiStore } from "../stores/ui.js";

const uiStore = useUiStore()
const router = useRouter()
const isScrolled = ref(false)
const menuOuvert = ref(false)
const sectionActive = ref('apropos')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30

  const sections = ['apropos', 'competences', 'services', 'contact', 'faq']
  const milieu = window.scrollY + window.innerHeight / 3

  let current = ''
  sections.forEach((id) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.offsetTop
    const bottom = top + el.offsetHeight
    if (milieu >= top && milieu <= bottom) {
      current = id
    }
  })
  sectionActive.value = current
}

const toggleMenu = () => {
  menuOuvert.value = !menuOuvert.value
}

const fermerMenu = () => {
  menuOuvert.value = false
}

function navigateTo(hash) {
  fermerMenu()
  if (router.currentRoute.value.path !== '/') {
    router.push({ path: '/', hash }).then(() => {
  setTimeout(() => {
    const el = document.querySelector(hash)
    if (el) {
      window.scrollTo({
        top: el.offsetTop,
        behavior: 'smooth'
      })
    }
  }, 600)
})
  } else {
    const el = document.querySelector(hash)
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 64,
        behavior: 'smooth'
      })
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  if (observer) observer.disconnect()
})


</script>


<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 48px;
  border-bottom: 1px solid var(--border);
  background: var(--bg);
  transition:
    background 0.4s,
    backdrop-filter 0.4s;
}

.site-header.scrolled {
  background: var(--nav-blur);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.header-logo {
  font-weight: 800;
  font-size: 16px;
  letter-spacing: 1.5px;
  color: var(--text);
}

.header-logo {
  background: var(--grad-text);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header-nav {
  display: flex;
  gap: 36px;
}

.header-nav :deep(a) {
  color: var(--muted);
  font-size: 12px;
  letter-spacing: 0.8px;
  font-weight: 600;
  transition: color 0.2s;
}

.header-nav :deep(a.active) {
  color: var(--text);
  text-decoration: underline;
  text-decoration-color: var(--green);
  text-underline-offset: 4px;
}

.header-nav :deep(a:hover) {
  color: var(--text);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.header-cta {
  background: transparent;
  color: var(--green);
  border: 1px solid rgba(125, 211, 33, 0.45);
  padding: 9px 22px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  cursor: pointer;
  font-family: inherit;
  transition:
    background 0.2s,
    color 0.2s;
}

.header-cta:hover {
  background: rgba(125, 211, 33, 0.08);
}


/* ── RESPONSIVE  ──────────────────────────────────── */
@media (max-width: 768px) {

  .site-header {
    padding: 0 20px;
    height: 56px;
  }

  /* Cache le CTA desktop et la nav desktop */
  .header-cta {
    display: none;
  }

  .header-nav {
    display: none;
    position: fixed;
    top: 56px;
    left: 0;
    right: 0;
    background: var(--nav-blur);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    flex-direction: column;
    padding: 24px 20px;
    gap: 0;
    border-bottom: 1px solid var(--border);
  }

  .header-nav.open {
    display: flex;
  }

  .header-nav a {
    padding: 16px 0;
    font-size: 14px;
    border-bottom: 1px solid var(--border);
  }

  .header-nav a:last-child {
    border-bottom: none;
  }

  /* Burger */
  .burger {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    width: 36px;
    height: 36px;
  }

  .burger span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--text);
    transition: transform 0.3s ease, opacity 0.3s ease;
    transform-origin: center;
  }

  /* Animation burger → croix */
  .burger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
  }

  .burger.open span:nth-child(2) {
    opacity: 0;
  }

  .burger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
  }

}

@media (min-width: 769px) {
  .burger {
    display: none;
  }
}

.theme-toggle {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  transition: border-color 0.2s, color 0.2s;
}

.theme-toggle:hover {
  border-color: var(--green);
}

.dyslexic-toggle {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  width: 36px;
  height: 36px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 700;
  font-family: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 0;
  transition: border-color 0.2s, color 0.2s;
}

.dyslexic-toggle:hover {
  border-color: var(--green);
}

.dyslexic-toggle:active {
  border-color: var(--green);
  color: var(--green);
}

.dyslexic-toggle.active {
  border-color: var(--green);
  color: var(--green);
}

</style>
