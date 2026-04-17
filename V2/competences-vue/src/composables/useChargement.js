import { ref } from 'vue'

export function useChargement(fn) {
  const chargement = ref(false)
  const erreur = ref(null)
  const donnees = ref(null)

  const executer = async (...args) => {
    chargement.value = true
    erreur.value = null
    try {
      donnees.value = await fn(...args)
    } catch (e) {
      erreur.value = e.message
    } finally {
      chargement.value = false
    }
  }

  return { chargement, erreur, donnees, executer }
}