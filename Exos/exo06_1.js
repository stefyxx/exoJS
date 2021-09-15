let today = new Date();
today= today.getDay(); // da n da 0 a 6

switch (today) {
    case 0:
        alert('Bonjour, nous somme dimanche');
        break;
    case 1:
        alert('Bonjour, nous somme lundi');
        break;
    case 2:
        alert('Bonjour, nous somme a mardi');
        break;
    case 3:
        alert('Bonjour, nous somme mercredi');
        break;
    case 4:
        alert('Bonjour, nous somme jeudi');
        break;   
    case 5:
        alert('Bonjour, nous somme vendredi');
        break;    
    case 6:
        alert('Bonjour, nous somme samedi');
        break;
    
    default:
        break;
}

let days =['dimanche','lundi','mardi','mercredi','jeudi','vendredi','samedi'];

for(let i=0; i<days.length; i++){
    if(i==today){
        alert(`Bonjour, nous somme ${days[i]}`);
    }
}

alert(`Bonjour, nous somme ${days[today]}`);

