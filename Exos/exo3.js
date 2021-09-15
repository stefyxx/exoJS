/*var anne = prompt("Votre anne de naissance");

console.log(anne);

var anne2 = parseInt(anne); // ora il programma lo converte automativamente

var age = (2021 - anne2); // var age = 2021 - parseInt(anne);
alert(`Tu as ${age}`);*/
var anne = parseInt(prompt("Votre anne de naissance"));
alert(`Vous avez ${2021 - anne} ans `);




let chaine="ma formation javascript";
console.log(chaine.indexOf('ma'));
console.log(chaine.search('ma')); //normalmente si attende una frare regolare /[]/
console.log(chaine.lastIndexOf('ma')); // secondo 'ma'
console.log(chaine.indexOf('p'));

console.log(chaine[21]);
console.log(chaine.charAt(21));
console.log(chaine.substr(21,1));

console.log(chaine.replace('javascript','Java')); // rimpiazare la 1°parola con la 2°

console.log(chaine.split(" ")); //creare una tab con: ogni parola è un valore, c'é uno spazio tra ' '

console.log(chaine.split("")); // separa lettera x lettera e ognuna é un valore in un tab, NON c'é uno spazio tra ''

let chaine2=chaine.split("").reverse();  
/*chaine2=chaine2.toString();
console.log(chaine2);*/
chaine2=chaine2.join('');
console.log(chaine2);

console.log(chaine.split('').reverse().join(''));

