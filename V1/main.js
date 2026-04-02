import { competences } from "./data/competences.js";
import { initMarquee } from "./utils/marquee.js";
import { initHeader, initScrollTop, initFadeIn, initBurger } from "./utils/ui.js";
import { afficherCompetences, initFiltres } from "./utils/dom.js";
import { initForm } from "./utils/form.js";
import { gererErreur } from "./utils/erreurs.js";

initMarquee()
initHeader ()
initScrollTop ()
initFadeIn ()
initBurger
initFiltres (competences)
afficherCompetences(competences);
initForm ()