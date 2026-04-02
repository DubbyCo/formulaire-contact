import { ErreurAPI, gererErreur } from "./erreurs.js";

export function initForm() {
  const btnEnvoyer = document.getElementById("btnEnvoyer");

  const sendForm = async () => {
    document.getElementById("msgSucces").setAttribute("hidden", "");
    document.getElementById("msgErreur").setAttribute("hidden", "");

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
      btnEnvoyer.disabled = false;
    } catch (e) {
      gererErreur(e);
      document.getElementById("msgErreur").removeAttribute("hidden");
      btnEnvoyer.disabled = false;
    }
  };

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    btnEnvoyer.disabled = true;

    sendForm();
  });
}
