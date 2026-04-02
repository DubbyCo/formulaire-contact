export class ErreurAPI extends Error {
  constructor(message, statut) {
    super(message)
    this.name = "ErreurAPI"
    this.statut = statut
  }
}

export function gererErreur (e) {
  if (e instanceof ErreurAPI) {
    console.error(`[API ${e.statut}] ${e.message}`)
  } else {
    console.error(`[Erreur inattendue] ${e.message}`)
  }
}