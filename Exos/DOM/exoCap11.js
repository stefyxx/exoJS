// creare una data che la giorno della settimana in francese, data e h/mi/sec

//let data_intera = new Date(); // legge la data all'inizio e poi basta!!

function dataGiorno() {
    let data_intera = new Date();
    let n_mese = data_intera.getMonth(); // n° da à 0 a 11
    let mesi = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Jullet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let mese = mesi[n_mese];
    
    let giorno = data_intera.getDate();

    let n_settimana = data_intera.getDay(); // n° da à 0 a 6
    let settimana = "";

    switch (n_settimana) {
        case 0:
            settimana = "Dimanche";
            break;
        case 1:
            settimana = "Lundi";
            break;
        case 2:
            settimana = "Mardi";
            break;
        case 3:
            settimana = "Mercredi";
            break;
        case 4:
            settimana = "Jeudi";
            break;
        case 5:
            settimana = "Vendredi";
            break;
        case 6:
            settimana = "Samedi";
            break;
    }

    console.log(`${settimana}  ${giorno}  ${mese}`);

    let jour = document.createElement('h1');
    document.querySelector('body').appendChild(jour);
    //document.body.appendChild(jour);
    let gio = `${settimana}  ${giorno}  ${mese}`;

    let or = visualizzaOra(); // v prof perché e un 'undefined'
    jour.innerHTML = gio + '  '+ or;

}
//dataGiorno(); // per chiamare la mia funzione
let contatore = 0;
if (contatore < 5) {
    setInterval(dataGiorno, 3000);
    contatore++;
}
/*for (let index = 0; index < 10; index++) {
    if (contatore < 5) {
        setInterval(dataGiorno, 3000);
        contatore++;
    }
}*/
//setInterval(dataGiorno,3000);

function visualizzaOra(){
    let data_intera = new Date();
    let ora = data_intera.getHours();
    let minuti = data_intera.getMinutes();
    let secondi = data_intera.getSeconds();

    if (secondi < 10) secondi = '0' + secondi; //per avere i secondi in 2 cifre sempre

    console.log(`${ora}:${(minuti < 10) ? '0' + minuti : minuti}:${secondi}`);

    let orario = document.querySelector('head title'); // questo é un <title></title>
    let or = `${ora}:${(minuti < 10) ? '0' + minuti : minuti}:${secondi}`;
    orario.innerHTML = or;
}

setTimeout(visualizzaOra,3000);

//setTimeout(function() => {visualizzaOra  }, timeout); // questa é un'espessione lamda