"use strict";

//inizializzazione variabile con la scelta di pari o dispari
const choice = prompt("scegli 'pari' o 'dispari'");
//inizializzazione variabile per la scelta del numero
const digit = parseInt(prompt("scegli un numero da 1 a 5"));
//condizione di controllo che tutti gli input siano accettabili
if (isNaN(digit) || digit < 1 || digit > 5 || (choice.toLowerCase() != "pari" && choice.toLowerCase() != "dispari")) {
    alert("uno o più input non sono corretti");
}
//definizione funzione per la generazione e restituzione di un numero random, con parametri di minimo e massimo
function randomDigit(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
//inizializzazione variabile con la somma delle due cifre, richiamando la funzione che genera un numero random
const sum = digit + randomDigit(1, 5);
//definzione funzione per valutare se la somma è pari, con restituzione true, altrimenti false
function isEven(result) {
    return ((result % 2) == 0);
}
//condizione di controllo in cui usiamo la funzione che restituisce true oppure false, a seconda se la somma sia pari o no
//confrontando quindi il risultato con la scelta dell'utente per valutare se ha vinto o meno
if ((isEven(sum) && choice === "pari") || (!isEven(sum) && choice === "dispari")) {
    alert(`la somma risultante è ${sum}, quindi hai vinto!`);
} else {
    alert(`la somma risultante è ${sum}, quindi ha vinto il computer`);
}
//reload della pagina se l'utente dà conferma
if (confirm("vuoi riprovare?")) {
    document.location.reload();
}