// BONUS — Pour aller plus loin. Facultatif : commencez seulement quand le socle est complet.
// Fiche : fiches/7-bonus.md · Vérifier : npm run test:bonus
// Pas de modèle pour ce fichier : à vous de combiner ce que vous avez appris.
import { versNombre } from "./outils.js";
import { trouverParId, verifierPlant } from "./registre.js";
import { syntheseParGroupe } from "./synthese.js";

// Les champs qu'on a le droit de modifier. L'identifiant n'en fait pas partie.
export const CHAMPS_MODIFIABLES = [
  "nomCommun",
  "groupe",
  "nombrePlants",
  "dateReleve",
];

// Supprime de l'inventaire le plant qui a cet identifiant.
// Renvoie le plant supprimé, ou undefined s'il n'existe pas (l'inventaire ne change pas).
export function supprimerPlant(plants, id) {
  const position = plants.findIndex(function (plant) {
    return plant.id === id;
  });
  if (position === -1) {
    return undefined;
  }
  const retires = plants.splice(position, 1);
  return retires[0];
}

// Modifie un champ d'un plant. valeur arrive sous forme de TEXTE, comme dans le menu.
// Renvoie un tableau d'erreurs : [] si la modification est faite.
// Erreurs : identifiant inconnu · champ 'id' (l'identifiant n'est pas modifiable) · champ absent de
// CHAMPS_MODIFIABLES · valeur refusée par les règles de l'ajout. S'il y a une erreur, rien ne change.
// nombrePlants est enregistré comme un nombre.
export function modifierPlant(plants, id, champ, valeur) {
  const plant = trouverParId(plants, id);
  if (plant === undefined) {
    return [`Plant ${id} introuvable`];
  }
  if ((champ === "id")) {
    return [`Le champ ${champ} n'est pas modifiable`];
  }
  
  if (!CHAMPS_MODIFIABLES.includes(champ)) {         
    return [`Le champ ${champ} n'est pas modifiable.`]; 
  }          

  const saisie = {
    id: plant.id,
    nomCommun: plant.nomCommun,
    groupe: plant.groupe,
    nombrePlants: plant.nombrePlants,
    dateReleve: plant.dateReleve,
  };
  saisie[champ] = valeur;

  const autres = [];
  for (const p of plants) {
    if (p.id !== id) {
      autres.push(p);
    }
  }

  const erreurs = verifierPlant(saisie, autres);
  if (erreurs.length > 0) {
    return erreurs;
  }

  if (champ === "nombrePlants") {
    plant[champ] = versNombre(valeur);
  } else {
    plant[champ] = valeur;
  }
  return [];
}

// Renvoie une COPIE triée par nombre de plants décroissant.
// Deux plants de même nombre gardent leur ordre d'origine. Le tableau reçu ne change pas.
export function trierParNombrePlantsDecroissant(plants) {
  const copie = plants.slice();
  copie.sort(function(a,b) {
return b.nombrePlants - a.nombrePlants;
});
return copie;
}

// Renvoie { groupe, plants } pour le groupe botanique qui a le plus de plants au total,
// le premier rencontré en cas d'égalité, ou null si l'inventaire est vide.
// Exemple : groupeLePlusFourni(donnees) → { groupe: 'angiosperme', plants: 222 }
export function groupeLePlusFourni(plants) {
const synthese = syntheseParGroupe(plants);
let meilleur = null;
for (const groupe in synthese){
const total = synthese[groupe].plants;
if (meilleur === null || total > meilleur.plants){meilleur = {groupe : groupe, plants : total};
}
}
return meilleur ;
}


