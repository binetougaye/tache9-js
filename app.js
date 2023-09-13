// Ecrire un programme qui permet de recopier tous les éléments de tab1 dans tab3
let tab1 = [1, 2, 3, -4, 5, -6];
// Recopier les éléments positifs de tab1 dans tab 3
let tab3 = tab1.splice(0, 3);
document.body.innerText = tab3;
console.log(tab3);
// Remplacer les éléments de tab2 par 0 sans utiliser une boucle
let tab2 = [5, 7, -8, 9];
tab2 = [0, 0, 0, 0];
console.log(tab2);
document.body.innerText = tab2;
