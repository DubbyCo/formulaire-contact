import { ErreurAPI, gererErreur } from './erreurs.js'

export function initForm() {
  let userName = ""
  let email = ""
  let message = ""
  let btnEnvoyer = document.getElementById("btnEnvoyer")

  const form = document.getElementById("contactForm")
  form.addEventListener("submit", (event) => {
    event.preventDefault()

    userName = document.getElementById("nom").value
    email = document.getElementById("email").value
    message = document.getElementById("message").value

    btnEnvoyer.disabled = true

    sendForm()
  })

  const sendForm = async () => {
    document.getElementById("msgSucces").setAttribute("hidden", "")
    document.getElementById("msgErreur").setAttribute("hidden", "")

    try {
      const response = await fetch("https://formspree.io/f/xvzwyglr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userName, email, message }),
      })

      if (!response.ok) throw new ErreurAPI('Erreur envoi formulaire', response.status)

      document.getElementById("msgSucces").removeAttribute("hidden")
      btnEnvoyer.disabled = false

    } catch (e) {
      gererErreur(e)
      document.getElementById("msgErreur").removeAttribute("hidden")
      btnEnvoyer.disabled = false
    }
  }
}