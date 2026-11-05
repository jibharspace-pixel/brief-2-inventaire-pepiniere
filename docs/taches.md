# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche                                                       | Prévu      | Fait le    | Preuve                                                           |
| ----------------------------------------------------------- | ---------- | ---------- | ---------------------------------------------------------------- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | 02/11/2026 | 03/11/2026 |                                                                  |
| Fiche 2 : lire et écrire le JSON                            | 03/11/2026 | 03/11/2026 | `905ba63`                                                        |
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs        | 03/11/2026 | 04/11/2026 | `e0e9792`, `2bdff6a`, `d140f24`, `c46ec2e`, `46541f4`, `41f766d` |
| Fiche 4 : rechercher et trier ; choix 3 et 4                | 03/11/2026 | 04/11/2026 | `05b271c`, `b873c1a`, `41f766d`                                  |
| Fiche 5 : synthèse ; choix 5                                | 03/11/2026 | 04/11/2026 | `aea351f`, `96b601b`, `d427b48`, `41f766d`                       |
| Tests par un camarade ; mes propres tests                   | 03/11/2026 |            |                                                                  |
| Fiche agronomique ; README ; documents                      | 03/11/2026 |            |                                                                  |
| Dépôt cloné et lancé ailleurs ; démonstration répétée       | 03/11/2026 |            |                                                                  |
| Bonus                                                       | 03/11/2026 |            |                                                                  |

**Détail des commits**

| Fiche   | Commit    | Date               | Message                                                                    |
| ------- | --------- | ------------------ | -------------------------------------------------------------------------- |
| 2       | `905ba63` | 03/11/2026 à 05:33 | Fonction de chargement et enreistrerment du fichier JSON                   |
| 3       | `e0e9792` | 03/11/2026 à 10:26 | FormaterPlant : renvoie un texte avec un plant par ligne                   |
| 3       | `2bdff6a` | 03/11/2026 à 11:25 | Update de la fonction formaterPlant & listerPlants                         |
| 3       | `d140f24` | 03/11/2026 à 17:20 | Rechercher par l'identifiant le plant                                      |
| 3       | `c46ec2e` | 03/11/2026 à 22:42 | Verfification du plant                                                     |
| 3       | `46541f4` | 03/11/2026 à 22:50 | Fabrication du plant à partir d'une saisie valide                          |
| 4       | `05b271c` | 03/11/2026 à 23:22 | Fonctionnalité de recherche par le nom et le filtrage par groupe botanique |
| 4       | `b873c1a` | 03/11/2026 à 23:29 | Trier par nombre de plants                                                 |
| 5       | `aea351f` | 04/11/2026 à 01:26 | Nombre total de plants                                                     |
| 5       | `96b601b` | 04/11/2026 à 01:37 | Synthèse par groupe                                                        |
| 5       | `d427b48` | 04/11/2026 à 02:12 | Correction et code à jour syntheseJS                                       |
| 3, 4, 5 | `41f766d` | 04/11/2026 à 20:48 | Implémentation du menu (fichier app.js)                                    |

**Blocages** (le message exact, ce que j'ai essayé, la solution) : ✏️

- j'ai tenté la création d'une variable enregistrements dans la fonction chargerJSON dû à un amalgame à cause de la fonction enregistrerJSON avec pour paramètres enregistrements ; j'ai après recherche et inspection de mon code constaté que cela n'avait pas de lien avec le paramètre de la fonction suivante (enregistrerJSON) que j'ai par la suite supprimé
- Point d'incompréhension dans certaines fonctions et caractères de saisie.js, la solution était de me servir de la documentation en ligne de JavaScript ainsi que de l'outil d'IA DeepSeek afin de comprendre quelques expressions régulières concernant les caractères et consorts.
