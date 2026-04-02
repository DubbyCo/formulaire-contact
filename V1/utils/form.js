import { ErreurAPI, gererErreur } from "./erreurs.js";
const valider = ({ nom, email, message }) => {
  const erreurs = {}
  if (!nom.trim()) erreurs.nom = "Nom requis"
  if (!email.match(/^[^@]+@[^@]+\.[^@]+$/)) erreurs.email = "Email invalide"
  if (message.trim().length < 10) erreurs.message = "Message trop court (10 caractères minimum)"
  return erreurs
}

export function initForm() {
  const btnEnvoyer = document.getElementById("btnEnvoyer");

  const sendForm = async () => {
    document.getElementById("msgSucces").setAttribute("hidden", "");
    document.getElementById("msgErreur").setAttribute("hidden", "");
    btnEnvoyer.textContent = "Envoi en cours..."

    try {
      const response = await fetch("https://formspree.io/f/xvzwyglr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: document.getElementById("nom").value,
          email: document.getElementById('email').value,
          message: document.getElementById("message").value,
        }),
      });

      if (!response.ok)
        throw new ErreurAPI("Erreur envoi formulaire", response.status);

      document.getElementById("msgSucces").removeAttribute("hidden");
      form.reset()
      btnEnvoyer.textContent = "ENVOYER"
      btnEnvoyer.disabled = false;

    } catch (e) {
      gererErreur(e);
      document.getElementById("msgErreur").removeAttribute("hidden");
      btnEnvoyer.textContent = "ENVOYER"
      btnEnvoyer.disabled = false;
    }
  };

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    document.getElementById("erreur-nom").textContent =""
    document.getElementById("erreur-email").textContent =""
    document.getElementById("erreur-message").textContent =""

    const erreurs = valider ({
      nom: document.getElementById("nom").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    })

    if (erreurs.nom) document.getElementById("erreur-nom").textContent = erreurs.nom
    if (erreurs.email) document.getElementById("erreur-email").textContent = erreurs.email
    if (erreurs.message) document.getElementById("erreur-message").textContent = erreurs.message

    if (Object.keys(erreurs).length > 0) {
      console.log("Erreurs de validation :", erreurs)
      return
    }
    
    btnEnvoyer.disabled = true;
    sendForm();
  });
}
