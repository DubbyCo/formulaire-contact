import { defineStore } from "pinia";
import { useLocalStorage } from "../composables/useLocalStorage.js";

export const useUiStore = defineStore("ui", () => {
  const darkMode = useLocalStorage("darkMode", true);

  const toggleDarkMode = () => {
    darkMode.value = !darkMode.value;
    if (darkMode.value) {
      document.body.classList.remove('light')
    } else {
      document.body.classList.add('light')
    }
  };

  const dyslexicMode = useLocalStorage("dyslexicMode", false);

  const toggleDyslexicMode = () => {
    dyslexicMode.value = !dyslexicMode.value;
    document.body.classList.toggle("dyslexic");
  };

  return { darkMode, toggleDarkMode, dyslexicMode, toggleDyslexicMode };
});
