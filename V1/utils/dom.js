export function afficherCompetences(liste) {
  const container = document.getElementById("competences");
  container.innerHTML = "";

  liste.forEach((comp) => {
    const article = document.createElement("article");
    article.classList.add("competence-carte");

    const titre = document.createElement("h3");
    titre.textContent = comp.nom; // textContent = safe XSS

    const barre = document.createElement("div");
    barre.classList.add("barre");
    barre.setAttribute("role", "progressbar");
    barre.setAttribute("aria-label", `${comp.nom} : ${comp.niveau}%`);
    barre.setAttribute("aria-valuenow", comp.niveau);
    barre.setAttribute("aria-valuemin", "0");
    barre.setAttribute("aria-valuemax", "100");

    const remplissage = document.createElement("div");
    remplissage.classList.add("remplissage");
    remplissage.style.width = "0%";
    requestAnimationFrame(() => {
      remplissage.style.width = comp.niveau + "%";
    });

    barre.appendChild(remplissage);
    article.appendChild(titre); // titre EN PREMIER
    article.appendChild(barre);
    container.appendChild(article);
  });
}

export function initFiltres(competences) {
  const filtresContainer = document.getElementById("filtres");
  const categories = ["Tous", ...new Set(competences.map((c) => c.categorie))];

  categories.forEach((cat) => {
    const bouton = document.createElement("button");
    bouton.textContent = cat;
    bouton.dataset.filtre = cat;
    filtresContainer.appendChild(bouton);
  });

  // Délégation d'événement (pattern Vue : @click sur le parent)
  filtresContainer.addEventListener("click", (e) => {
    const bouton = e.target.closest("button");
    if (!bouton) return;
    const filtre = bouton.dataset.filtre;
    if (filtre === "Tous") {
      afficherCompetences(competences);
    } else if (categories.includes(filtre)) {
      afficherCompetences(competences.filter((c) => c.categorie === filtre));
    }
  });
}
