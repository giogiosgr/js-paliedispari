"use strict";

//definizione variabile per una qualsiasi frase input dell'utente
const phrase = prompt("Inserisci una frase");

/* Definizione funzione con logica: trasformiamo la frase in un'altra frase contenente soltanto le lettere, 
non altri caratteri. Confrontiamo questa nuova frase con il suo inverso. Se abbiamo uguaglianza, 
la frase originale è un palindromo 

LIMITE DELLA LOGICA DELLA FUNZIONE: non comprenderà il caso di lettere accentate
*/

function isPalindrome(words) {
    //trasformiamo la frase nel suo corrispettivo lower case, quindi trasformato in array
    words = words.toLowerCase().split("")
    //definizione array vuoto che conterrà soltanto le lettere dell'array di partenza
    const filteredWords = [];
    //ciclo for per tutta la lunghezza dell'array di partenza
    for (let i = 0; i < words.length; i++) {
        //per ogni lettera della frase di partenza, preleviamo il suo corrispettivo valore decimale Ascii
        const asciiValue = words[i].charCodeAt(0);
        //se il valore Ascii è compreso nel range delle lettere in lower case, allora lo pusheremo nel nuovo array
        if (asciiValue > 96 && asciiValue < 123) {
            filteredWords.push(words[i]);
        }
    }
    //assegniamo alla variabile originale la versione stringa dell'array filtrato
    words = filteredWords.join("");
    //trasformazione "in place" con inversione dell'array filtrato
    filteredWords.reverse();
    //definizione nuova variabile che conterrà la versione stringa dell'array filtrato E invertito
    const reversedWords = filteredWords.join("");
    //se la frase filtrata e il suo inverso corrispondono, avremo un palindromo
    if (words === reversedWords) {
        return true;
    }
    return false;
}

//condizione in cui si richiama la funzione, con la frase di input come parametro, che restituirà true oppure false
if (isPalindrome(phrase)) {
    alert("La frase è un palindromo!");
}
else {
    alert("La frase non è un palindromo");
}