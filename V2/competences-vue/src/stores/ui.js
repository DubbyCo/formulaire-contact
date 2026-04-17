import { defineStore } from 'pinia'
import { useLocalStorage } from '../composables/useLocalStorage.js';

export const useUiStore = defineStore('ui', () => {

  const darkMode = useLocalStorage('darkMode', true)

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value
    document.body.classList.toggle('light')
  }

  return { darkMode, toggleDarkMode }
})