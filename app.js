// Inventaire de la pépinière — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from "./src/saisie.js";
import { chargerJson, enregistrerJson } from "./src/stockage.js";
import { GROUPES, ajouterPlant, formaterPlant, listerPlants, trouverParId } from "./src/registre.js";
import { filtrerParGroupe, rechercherParNom, trierParNombrePlants } from "./src/recherche.js";
import { SEUIL_STOCK_FAIBLE, especeLaPlusAbondante, stocksFaibles, syntheseParGroupe, totalPlants } from "./src/synthese.js";
const FICHIER_DONNEES = "donnees/plants.json";

async function ajouter(plants) {
  console.log("---AJOUTER UN PLANT---");
  const id = await demander("code du plant (ex.N11):");
  if (id === null) {
    return;
  }

const nomCommun = await demander("Nom commun (ex. Papayer):");
if (nomCommun === null) {
  return;
}

const groupe = await demander(`Groupe botanique (${GROUPES.join(" ou ")}) :`);
if (groupe === null) {
  return;
}

const nombrePlants = await demander("Nombre de plants(entier) : ");
if (nombrePlants === null) {
  return;
}

const dateReleve = await demander("Date du relevé (AAA-MM-JJ):");
if (dateReleve === null) {
  return;
}

const saisie = {
  id: id.toUpperCase(),
  nomCommun: nomCommun.toLowerCase(),
  groupe: groupe.toLowerCase(),
  nombrePlants: nombrePlants,
  dateReleve: dateReleve,
};

const erreurs = ajouterPlant(plants, saisie);

if (erreurs.length === 0) {
  await enregistrerJson(FICHIER_DONNEES, plants);
  console.log( `Plant ${saisie.id} ajouté . L'invenataire compte ${plants.length} espèce(s).`,);
} else {
  console.log("Ajout Refusé :");
  for (const erreur of erreurs) {
    console.log(` -${erreur}`);
  }
  console.log(`L'inventaire compte toujours ${plants.length} espèce(s)`);
}
}
// CHOIX 2 : LISTING DE L'INVENTAIRE
function lister(plants) {
  console.log(`--- Inventaire (${plants.length} espèce(s)) ---`);
  console.log(listerPlants(plants));
}
// choix 3 : RECHERCHER
async function rechercher(plants) {
  console.log("--- Rechercher ---");
  console.log("1. Par code");
  console.log("2. Par nom commun");
  console.log("3. Les espèces d'un groupe botanique");

  const choix = await demander("Votre choix : ");
  if (choix === null) {
    return;
  }

  if (choix === "1") {
    const reponse = await demander("Code : ");
    if (reponse === null) {
      return;
    }
    const code = reponse.toUpperCase();
    const plant = trouverParId(plants, code);
    if (plant === undefined) {
      console.log(`Plant ${code} introuvable.`);
    } else {
      console.log(formaterPlant(plant));
    }
  } else if (choix === "2") {
    const reponse = await demander("Nom ou partie du nom : ");
    if (reponse === null) {
      return;
    }
    const texte = reponse.toLowerCase();
    const trouves = rechercherParNom(plants, texte);
    console.log(
      `${trouves.length} espèce(s) dont le nom contient « ${texte} » :`,
    );
    console.log(listerPlants(trouves));
  } else if (choix === "3") {
    const reponse = await demander(`Groupe (${GROUPES.join(" ou ")}) : `);
    if (reponse === null) {
      return;
    }
    const groupe = reponse.toLowerCase();
    const trouves = filtrerParGroupe(plants, groupe);
    console.log(`${trouves.length} espèce(s) du groupe ${groupe} :`);
    console.log(listerPlants(trouves));
  } else {
    console.log("Choix inconnu : retour au menu.");
  }
}

// CHOIX 4 : LE TRI
async function trier(plants) {
  console.log("--- Trier ---");
  console.log("1. Par nombre de plants croissant");
  const choix = await demander("votre choix : ");
  if (choix === null) {
    return;
  }
  if (choix === "1") {
    console.log(listerPlants(trierParNombrePlants(plants)));
  } else {
    console.log("Choix inconnu : retour au menu ");
  }
}

// CHOIX 5 : Synthèse
function afficherSynthese(plants) {
  console.log(" ---- Synthèse de l'inventaire ---- ");
  console.log(`Nombre d'espèces : ${plants.length}`);
  console.log(`Stock total : ${totalPlants(plants)} plants`);
  const parGroupe = syntheseParGroupe(plants);
  for (const groupe in parGroupe) {
    const infos = parGroupe[groupe];
    console.log(`${groupe}:${infos.especes} espèces:${infos.plants} plants`);
  }

const plusAbondant = especeLaPlusAbondante(plants);
if (plusAbondant === null) {
  console.log("Espèce la plus abondante : aucune donnée");
} else {
  console.log(`La plus abondante: ${formaterPlant(plusAbondant)}`);
}
}
async function main() {
  ouvrirSaisie();

  const plants = await chargerJson(FICHIER_DONNEES);
  console.log("=========================================== ");
  console.log("      INVENTAIRE DE LA PEPINIERE            ");
  console.log("       Pépinière pédagoqique                ");
  console.log("==========================================  ");
  console.log(`${plants.length} espèce(s) chargée(s) depuis ${FICHIER_DONNEES}.`);

  let continuer = true;

  while (continuer) {
    console.log(" ");
    console.log("------------MENU------------");
    console.log("1. Ajouter un plant");
    console.log("2. Lister l'inventaire ");
    console.log("3. Rechercher (code,nom,groupe)");
    console.log("4. Trier (nombre de plants)");
    console.log("5. Synthèse de quantités");
    console.log("0. Quitter");

    const choix = await demander("Votre choix : ");
    switch (choix) {
      case "1":
        await ajouter(plants);
        break;
      case "2":
        lister(plants);
        break;
      case "3":
        await rechercher(plants);
        break;
      case "4":
        await trier(plants);
        break;
      case "5":
        afficherSynthese(plants);
        break;
      case "6":
        await supprimer(plants);
        break;
      case "7":
        await modifier(plants);
        break;
      case "0":
        console.log("Au revoir !");
        continuer = false;
      case null:
        continuer = false;
        break;
      default:
        console("Choix inconnu");
    }
  }
  fermerSaisie();
}
main();
