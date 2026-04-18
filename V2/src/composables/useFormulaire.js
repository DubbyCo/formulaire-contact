import { reactive, computed } from "vue";

export function useFormulaire(champsInitiaux, regles) {
  const champs = reactive({ ...champsInitiaux });
  const erreurs = reactive({});

  const valider = () => {
    Object.keys(regles).forEach((cle) => {
      const resultat = regles[cle](champs[cle]);
      if (resultat !== true) {
        erreurs[cle] = resultat;
      } else {
        delete erreurs[cle];
      }
    });
    return Object.keys(erreurs).length === 0;
  };

  const estValide = computed(() => Object.keys(erreurs).length === 0);

  const reset = () => {
    Object.keys(champsInitiaux).forEach((cle) => {
      champs[cle] = champsInitiaux[cle];
      delete erreurs[cle];
    });
  };

  const champsRemplis = computed(() =>
    Object.keys(champsInitiaux).every(
      (cle) => String(champs[cle]).trim().length > 0,
    ),
  );

  return { champs, erreurs, valider, estValide, reset, champsRemplis };
}
