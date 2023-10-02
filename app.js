// Recuperer les éléments positifs de tab1 et les mettre dans tab3
let nbrElementTab = Number(
  prompt("Veuillez saisir le nombre d'élément du tab1")
);
let tab1 = [];
let tab3 = [];
while (tab1.length < nbrElementTab) {
  let valeurSaisie = Number(prompt("Valeur dans tab1"));
  console.log(valeurSaisie);
  tab1.push(valeurSaisie);

  if (valeurSaisie > 0) {
    console.log(valeurSaisie);
    tab3.push(valeurSaisie);
    console.log(tab3);
  }
}
// Remplacer les éléments de tab2 par des 0 sans utiliser une boucle
let nbrElementTab2 = Number(
  prompt("Veuillez saisir le nombre d'élément du tab2")
);
console.log(nbrElementTab2);
let tab2 = [];

while (tab2.length < nbrElementTab2) {
  let valeurSaisie2 = Number(prompt("Valeur dans tab2"));
  // console.log(tab2);
  tab2.push(valeurSaisie2);
  console.log(tab2);
}
tab2 = [1, 2, 3];
let newTab = tab2.map((n) => 0);
console.log(newTab);
