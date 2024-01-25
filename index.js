

let nome = prompt("Inserire Nome");
let cognome = prompt("Inserire Cognome");
let colore = prompt("Inserire Colore preferito");
let password = nome+cognome+colore+"23";

document.getElementById("name").innerHTML = " <strong>Il tuo Nome è</strong> : "+nome;
document.getElementById("surname").innerHTML = "<strong>Il tuo Cognome è</strong> : "+ cognome;
document.getElementById("color").innerHTML = "<strong>Il tuo Colore Preferito è</strong> : "+ colore;
document.getElementById("pswrd").innerHTML = "<strong>la tua password quindi risulta essere</strong> : "+ password;
