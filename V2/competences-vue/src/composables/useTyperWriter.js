// composables/useTypewriter.js
import { ref, onUnmounted } from 'vue'

export function useTypewriter(mots, vitesse = 100, pauseEntreMots = 1500) {
  const texteAffiche = ref('')
  const motActuel = ref(0)
  let timeout = null

  const ecrire = () => {
    const mot = mots[motActuel.value]
    let i = 0

    const frappe = () => {
      if (i <= mot.length) {
        texteAffiche.value = mot.slice(0, i)
        i++
        timeout = setTimeout(frappe, vitesse)
      } else {
        timeout = setTimeout(effacer, pauseEntreMots)
      }
    }

    const effacer = () => {
      if (texteAffiche.value.length > 0) {
        texteAffiche.value = texteAffiche.value.slice(0, -1)
        timeout = setTimeout(effacer, vitesse / 2)
      } else {
        motActuel.value = (motActuel.value + 1) % mots.length
        timeout = setTimeout(ecrire, 300)
      }
    }

    frappe()
  }

  ecrire()

  onUnmounted(() => clearTimeout(timeout))

  return { texteAffiche }
}