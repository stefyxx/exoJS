let prix_unitaire = prompt("Que est le prix unitaire, hors taxe, de ton livre");
prix_unitaire = parseFloat(prix_unitaire);

let quantite_livre = parseInt(prompt("Combien des livres voulez-vous?"));

//.toFixed(numeri dopo la virgola) arrotonda + restituisce una stringa
let prix_total = (quantite_livre *(prix_unitaire + (prix_unitaire/100*21)));

console.log(`Le prix total de votre achat est ${prix_total.toFixed(2)}`);
alert(`Le prix total de votre achat est ${prix_total} €`);  

//alert(`Le prix total de votre achat est ${(parseInt(prompt("Combien des livres voulez-vous?")))*(1.21*(parseFloat(prompt("Que est le prix unitaire, hors taxe, de ton livre"))).toFixed(2))} €`);
/*for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */
