

let nome = prompt("Inserire Nome");
let cognome = prompt("Inserire Cognome");
let colore = prompt("Inserire Colore preferito");
let password = nome+cognome+colore+"23";

document.getElementById("name").innerHTML = nome;
document.getElementById("surname").innerHTML = cognome;
document.getElementById("color").innerHTML = colore;
document.getElementById("pswrd").innerHTML = password;
