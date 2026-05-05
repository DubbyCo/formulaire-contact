<template>
  <div id="contact" class="contact-card">
    <div class="contact-accroche">
      <h2>Travaillons ensemble</h2>
      <p>Un projet web éco-responsable, une refonte, une question ?<br />
        Je vous réponds sous 24h.</p>
    </div>

    <div class="contact-form">

      <div class="form-group">
        <label>NOM</label>
        <input v-model="champs.nom" type="text" placeholder="Votre nom" />
        <p v-if="soumis && erreurs.nom" class="form-erreur">{{ erreurs.nom }}</p>
      </div>

      <div class="form-group">
        <label>EMAIL</label>
        <input v-model="champs.email" type="email" placeholder="votre@email.fr" />
        <p v-if="soumis && erreurs.email" class="form-erreur">{{ erreurs.email }}</p>
      </div>

      <div class="form-group">
        <label for="service">SERVICE SOUHAITÉ <span class="optionnel">(optionnel)</span></label>
        <select id="service" v-model="champs.service">
          <option value="">— Je ne sais pas encore —</option>
          <option>Landing Page</option>
          <option>Site vitrine 3–5 pages</option>
          <option>Migration souveraine</option>
          <option>Refonte</option>
          <option>Maintenance · Niveau 1</option>
          <option>Maintenance · Niveau 2</option>
          <option>Autre / Question</option>
        </select>
      </div>

      <div class="form-group">
        <label>MESSAGE</label>
        <textarea v-model="champs.message" placeholder="Votre message..."></textarea>
        <p v-if="soumis && erreurs.message" class="form-erreur">{{ erreurs.message }}</p>
      </div>

      <button class="form-submit" @click="soumettre" :disabled="envoi">
        {{ envoi ? 'Envoi en cours...' : 'ENVOYER →' }}
      </button>

      <p v-if="succes" class="form-msg succes">
        ✓ Message envoyé ! Je reviens vers vous rapidement.
      </p>

      <p v-if="erreurEnvoi" class="form-msg erreur">
        Une erreur est survenue. Réessayez ou écrivez-moi directement : victor@dubby-code.com
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useFormulaire } from '../composables/useFormulaire'

const soumis = ref(false)
const envoi = ref(false)
const succes = ref(false)
const erreurEnvoi = ref(false)

const { champs, erreurs, valider, reset } = useFormulaire(
  { nom: '', email: '', service:'', message: '' },
  {
    nom: (v) => v.trim().length >= 2 || 'Le nom doit faire au moins 2 caractères',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Email invalide',
    message: (v) => v.trim().length >= 10 || 'Le message doit faire au moins 10 caractères'
  }
)

const soumettre = async () => {
  soumis.value = true
  if (!valider()) return

  envoi.value = true
  erreurEnvoi.value = false
  succes.value = false

  try {
    const response = await fetch('https://formspree.io/f/xvzwyglr', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        userName: champs.nom,
        email: champs.email,
        service: champs.service,
        message: champs.message
      })
    })

    if (!response.ok) throw new Error('Erreur envoi')

    succes.value = true
    reset()
    soumis.value = false

  } catch (e) {
    erreurEnvoi.value = true
  } finally {
    envoi.value = false
  }
}

</script>

<style scoped>
#contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contact-card {
  background: var(--faint);
  border: 1px solid var(--border);
  padding: 48px;
  max-width: 640px;
  margin: 0 auto;
}

.contact-accroche {
  margin-bottom: 40px;
}

.contact-accroche h2 {
  font-size: 24px;
  font-weight: 800;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.contact-accroche p {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.7;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: var(--muted);
  text-transform: uppercase;
}

.form-group input,
.form-group textarea {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--tag-border);
  color: var(--text);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
  outline: none;
  transition: border-color 0.2s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-bottom-color: var(--green);
}

.form-group textarea {
  resize: none;
  min-height: 100px;
}

.form-submit {
  background: transparent;
  color: var(--green);
  border: 1px solid rgba(125, 211, 33, 0.45);
  padding: 12px 32px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  cursor: pointer;
  font-family: inherit;
  align-self: flex-start;
  transition: background 0.2s;
}

.form-submit:hover {
  background: rgba(125, 211, 33, 0.08);
}

.form-submit:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.form-msg {
  font-size: 12px;
  letter-spacing: 0.5px;
  margin-top: 16px;
}

.form-msg.succes {
  color: var(--green);
}

.form-msg.erreur {
  color: #e05a5a;
}

.form-erreur {
  font-size: 11px;
  color: #e05a5a;
  letter-spacing: 0.5px;
  min-height: 16px;
  margin-top: 4px;
}

.form-group select {
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--tag-border);
  color: var(--text);
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 0;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s;
  width: 100%;
}

.form-group select option {
  background: var(--bg);
  color: var(--text);
}

.form-group select:focus {
  border-bottom-color: var(--green);
}

.optionnel {
  font-size: 9px;
  opacity: 0.5;
  font-weight: 400;
  letter-spacing: 1px;
}
</style>