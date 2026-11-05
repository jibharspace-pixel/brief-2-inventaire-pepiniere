# Fiche individuelle

>  Jibhar Samuel, KROMAN, compte GitHub : https://github.com/jibharspace-pixel  ✏️

1. **Une fonction que j'ai écrite**, et comment elle marche : ✏️
J’ai écrit la fonction ajouter(plants), dans app.js. Elle correspond au choix 1 du menu. Son rôle est de dialoguer avec l’utilisateur pour ajouter un plant à l’inventaire.

Elle pose d’abord les cinq questions dans l’ordre imposé (code, nom commun, groupe, nombre de plants, date du relevé) avec la fonction demander. Le mot await fait attendre le programme jusqu’à ce que l’utilisateur ait répondu. Après chaque question, elle vérifie si la réponse vaut null, ce qui arrive quand l’utilisateur fait Ctrl+C. Dans ce cas, elle s’arrête avec return et on revient au menu sans rien ajouter.

Elle range ensuite les réponses dans un objet saisie, après les avoir mises en forme : le code passe en majuscules, le nom commun et le groupe en minuscules. Ainsi, « Angiosperme » est accepté, et un même code ne peut pas exister en deux versions, comme « n11 » et « N11 ».

Elle ne vérifie pas les règles elle-même. Elle confie ce travail à la fonction ajouterPlant de src/registre.js, qui contrôle les cinq règles et n’ajoute le plant que si tout est correct. ajouterPlant lui renvoie un tableau d’erreurs.

Si ce tableau est vide, l’ajout a réussi : la fonction enregistre l’inventaire dans donnees/plants.json, pour qu’il soit conservé au prochain lancement, puis affiche « Plant N11 ajouté. L’inventaire compte 11 espèce(s). ». Sinon, elle affiche « Ajout refusé : », puis chaque erreur sur sa propre ligne, et rappelle que l’inventaire n’a pas changé.

J’ai choisi de séparer le dialogue et les règles : ajouter parle à l’utilisateur, tandis que ajouterPlant contrôle et ajoute. Les règles restent ainsi dans src/, où les tests automatiques peuvent les vérifier sans clavier. De plus, en créant une fonction par écran du menu, la fonction main reste courte et facile à lire.

2. **Une difficulté, et sa solution** : ✏️

3. **L'entraide** (qui m'a aidé, qui j'ai aidé, sur quoi) : ✏️
- Topka Odilon
- Batiyé Astrid 
- Séné Ella Rodrigue 
- KANGA Jules Christ



Nous nous sommes entraidés tout au long du projet en partageant nos connaissances, en nous apportant mutuellement du soutien et en travaillant ensemble sur la compréhension du code et l'écriture des différentes fonctions, notamment dans les fichiers `stockage.js`, `registre.js` et `app.js` pour certains
