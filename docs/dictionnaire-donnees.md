# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ          | Signification                | Type          | Règle de validation            | Unité  | Exemple       |
| -------------- | ---------------------------- | ------------- | ------------------------------ | ------ | ------------- |
| `id`           | Identifiant unique           | texte         | non vide, absent des données   | —      | `N09`         |
| `nomCommun`    | Nom commun de l'espèce       | texte         | non vide                       | —      | `pin`         |
| `groupe`       | Groupe botanique de l'espèce | texte         | `angiosperme` ou `gymnosperme` | —      | `gymnosperme` |
| `nombrePlants` | Nombre de plants disponibles | nombre entier | entier positif ou nul          | plants |   8           |
| `dateReleve`   | Date du comptage             | texte (date)  | format `AAAA-MM-JJ`            | —      | `2026-10-24`  |

**Listes de valeurs autorisées** : `groupe` = `angiosperme` ou `gymnosperme` (aucune autre valeur) ; 
les autres champs n'ont pas de liste fermée

**Sources** : 
`SUJET.md` (section « Les données ») 
 `donnees/plant.json`
 