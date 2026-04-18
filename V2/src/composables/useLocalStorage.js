import { ref, watch } from "vue";

export function useLocalStorage(cle, valeurDefault) {
  const valeur = ref(
    JSON.parse(localStorage.getItem(cle) ?? JSON.stringify(valeurDefault))
  )

  watch(valeur, (v) => {
    localStorage.setItem(cle, JSON.stringify(v))
  }, {deep: true })
  
  return valeur
}

