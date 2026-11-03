# Inventaire de la pépinière

> Projet individuel du SAS DFS, brief 2 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Le responsable de la pépinière pédagogique souhaite centraliser et structurer l’inventaire des plants de différentes espèces en leur appliquant une classification botanique simple, issue d’une fiche de référence. Pour chaque espèce, il doit pouvoir renseigner son code, son nom commun, son groupe botanique, la quantité de plants comptabilisés ainsi que l’origine du relevé (étiquette, photo ou spécimen), l’identité de la personne ayant effectué le comptage et la date du relevé. L’outil doit lui permettre de retrouver facilement une espèce, de consulter son groupe botanique et de visualiser les quantités disponibles par espèce ainsi que le nombre total de plants recensés

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-2-inventaire-pepiniere.git
cd brief-2-inventaire-pepiniere
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [ ] Données lues et enregistrées dans `donnees/plants.json`
- [ ] Ajouter un plant, saisies invalides refusées sans arrêter le programme
- [ ] Lister l'inventaire, message si l'inventaire est vide
- [ ] Rechercher par code ou par nom ; filtrer par groupe botanique
- [ ] Trier par nombre de plants
- [ ] Synthèse : stock total, espèces et plants par groupe, espèce la plus abondante, stocks faibles (≤ 10 plants)
- [ ] Bonus : supprimer et modifier un plant (choix 6 et 7)
- [ ] Bonus : tri décroissant, groupe le plus fourni

## Données

✏️ *Le fichier, le nombre de lignes, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), l'unité. Rappelez qu'elles sont fictives et que les groupes sont fournis par le coach.*

## Limites

✏️ Au moins trois. Par exemple : le seuil de 10 plants est un repère de suivi, pas une recommandation de production.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

✏️ Jibhar Samuel KROMAN , https://github.com/jibharspace-pixel 

 Entraide : avec qui, sur quoi