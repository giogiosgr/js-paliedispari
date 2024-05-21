"use strict";

//definizione variabile per una qualsiasi frase input dell'utente
const phrase = prompt("Inserisci una frase (numeri non saran considerati)");

/* Definizione funzione con logica: trasformiamo la frase in un'altra frase contenente soltanto le lettere, 
non altri caratteri. Confrontiamo questa nuova frase con il suo inverso. Se abbiamo uguaglianza, 
la frase originale è un palindromo 

LIMITE DELLA LOGICA DELLA FUNZIONE: non comprenderà il caso di lettere accentate
*/
function isPalindrome(words) {
    //trasformiamo la frase nel suo corrispettivo lower case, quindi trasformato in array
    words = words.toLowerCase().split("")
    //definizione array vuoto che conterrà soltanto le lettere dell'array di partenza
    //usiamo il metodo filter in maniera che restituisca soltanto lettere, confrontando i valori ascii
    const filteredWords = words.filter(function (letter) {
        return (letter.charCodeAt(0) > 96 && letter.charCodeAt(0) < 123);
    });
    console.log(filteredWords)
    //assegniamo alla variabile originale la versione stringa dell'array filtrato
    words = filteredWords.join("");
    //trasformazione "in place" con inversione dell'array filtrato
    filteredWords.reverse();
    //definizione nuova variabile che conterrà la versione stringa dell'array filtrato E invertito
    const reversedWords = filteredWords.join("");
    //se la frase filtrata e il suo inverso corrispondono, avremo un palindromo
    //inoltre escludiamo il caso limite di parola con meno di due caratteri
    if (words === reversedWords && words.length > 1) {
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
//relod della pagina se l'utente dà conferma
if (confirm("vuoi verificare un'altra frase?")) {
    document.location.reload();
}