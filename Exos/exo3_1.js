let nais= prompt('Indicare la vostra data di nascita jj/mm/aaaa');
let nais_array = nais.split('/');
let year = parseInt(nais_array[2]);
let month = parseInt(nais_array[1]);
let day = parseInt(nais_array[0]);

// Creo il mio oggetto Date, della mia data di nascita
let birthday = new Date (year, month-1,day)

console.log(birthday);

// data di oggi
let today=new Date();

//ho fatto la diff dei 2 anni, ma se uno é nato alla fine dell'anno, avrà 1 anno in meno, da cui l 'if'
let anno = today.getFullYear() - birthday.getFullYear();

if ((today.getMonth()- birthday.getMonth())<0){
    console.log(anno-1);
} else {
    console.log(anno);
}

//Altro metodo: differenza in millisecondi a partire dal tempo 0
let n = today.getTime()-birthday.getTime(); 

//new Date(n) := é ancora una data -> di cui prendo l'anno
console.log(new Date(n).getFullYear()- new Date(0).getFullYear());