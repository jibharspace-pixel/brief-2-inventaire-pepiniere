// Rechercher et trier les plants.
// Fiche : fiches/4-rechercher-trier.md · Vérifier : npm run test:recherche

// Renvoie un NOUVEAU tableau avec les plants dont le nom commun CONTIENT le texte cherché,
// sans tenir compte des majuscules : 'PALM' trouve 'palmier à huile'. Éventuellement vide.
export function rechercherParNom(plants, texte) {
  const resultat = [];
  const cherche = texte.toLowerCase();
  for (const plant of plants) {
    if (plant.nomCommun.toLowerCase().includes(cherche)) {
      resultat.push(plant);
    }
  }
  return resultat;
}

// Renvoie un NOUVEAU tableau avec les plants de ce groupe botanique (éventuellement vide).
export function filtrerParGroupe(plants, groupe) {
  const resultat = [];
  for (const plant of plants) {
    if (plant.groupe === groupe) {
      resultat.push(plant);
    }
  }
  return resultat;
}

// Renvoie une COPIE triée par nombre de plants croissant, avec un comparateur numérique.
// Deux plants de même nombre gardent leur ordre d'origine. Le tableau reçu ne doit pas changer d'ordre.
export function trierParNombrePlants(plants) {
  const copie = plants.slice();
  copie.sort((a, b) => a.nombrePlants - b.nombrePlants);
  return copie;
}
