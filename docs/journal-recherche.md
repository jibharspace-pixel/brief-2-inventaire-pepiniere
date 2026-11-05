# Journal de recherche


> Chaque recherche utile : ce que vous cherchiez, où (cours, [MDN](https://developer.mozilla.org/fr/docs/Web/JavaScript), [Node.js](https://nodejs.org/api/), un camarade, une IA…), ce que vous avez compris. Ce que vous gardez, vous devez pouvoir l'expliquer.

| Ce que je cherchais     | Où                | Ce que j'ai compris                                                                                                                                                  | Utilisé dans |
| ----------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| `for...of` (JavaScript) | MDN (for...of)    | `for (const x of liste)` : x prend chaque **valeur** d'un itérable (tableau, chaîne, Set). `for...in` donne les clés. Pas pour un objet simple.                      | à compléter  |
| `utf8` (encodage)       | Doc Node.js (fs)  | Encodage de caractères. Sans lui, `readFile` renvoie un `Buffer` (octets) ; avec `'utf8'`, une chaîne lisible (accents corrects).                                    | à compléter  |
| `Symbol.asyncIterator`  | MDN + doc Node.js | Rend un objet itérable en asynchrone (`for await...of`) : `next()` renvoie une promesse de `{ value, done }`. Avec `readline`, `await` lit la ligne saisie suivante. | `saisie.js`  |
| plant                   | google       | Jeune végétal élevé en pépinière (graine ou bouture), prêt à être repiqué. L'inventaire compte des plants (`nombrePlants`) pour chaque espèce.                       | `plant.json` |
| espèces                 |google       | Unité de base de la classification : plantes très semblables qui se reproduisent entre elles. Nom scientifique = genre + espèce (*Theobroma cacao*).                 | `plant.json` |
| groupe botanique        | google        | Grand ensemble de plantes aux caractères communs. Ici : **angiosperme** (graines dans un fruit : cacao) ou **gymnosperme** (graines nues : pin). Champ `groupe`.     | `plant.json` |