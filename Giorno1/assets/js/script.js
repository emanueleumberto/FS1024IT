/* alert("Ciao a tutti"); */
console.log("Sto scrivendo nella console")

let nome_Mio;

// Commento a singola riga let ko;
let ok; // commento

/*
    Commento multiriga
    console.log("Sono un commento")
*/

let nomeVariabile; // Dichiarazione di Variabile
nomeVariabile = "Ciao"; // Inizializzazione di una Variabile

let nome = "Mario";
console.log(nome);
nome = 25;
console.log(nome);
nome = "Antonio";
console.log(nome);

var cognome = "Rossi";
console.log(cognome);
cognome = 25;
console.log(cognome);
cognome = "Verdi";
console.log(cognome);

console.log(nome + " " + cognome)

const SESSO = "M";

let x;
console.log(x);


let y = "Ciao";
y = null;
console.log(y)

let num1 = 5;
let num2 = 2;

num2 = num2 + 3;
num2 += 3;
console.log(num2);

// Operatori di assegnamento
// =

// Operatori aritmetici
// + - / * %

// Operatori aritmetici di assegnamento
// += -= *= /= %=

// Operatori codizionali
// > < >= <=

let a = 10;
let b = 5;
let c = a > b;

// Operatori di comparazione
// == != === !==

let d = 5;
let e = '5';
console.log(d !== e)


// Operatori logici
// AND -> && OR -> || NOT -> !

// TypeOF
console.log(typeof a)
console.log(typeof e)
console.log(typeof c)

// Operatore Ternario
// let varname = (condizione) ? valoreTrue : valoreFalse 

// Operatori unari di incremento o decremento
let j = 5;
j = j + 1;
j += 1;
j++;
j--;

let age = 17;
let ingresso = (age >= 18) ? "Ingresso Permesso" : "Ingresso Vietato"
console.log(ingresso)


// Struttura di controllo IF/ELSE
/* 
    if(condizione) {
        // blocco di istruzioni
    } else if(condizione) {
        // blocco di istruzioni
    } else if(condizione) {
        // blocco di istruzioni
    } else {
        // blocco di istruzioni
    } 
*/


if(age < 18) {
    console.log("Hai meno di 18 anni")
} else if (age > 18) {
    console.log("Hai più di 18 anni")
} else if (age === 18) {
    console.log("Hai 18 anni")
} else {
    console.log("Il valore non è corretto")
}



let age2 = age;
let ingresso2;
let count = 1;
if(age >= 18 && age <= 30 ) {
    count++ ;
    ingresso2 = "Ingresso Permesso";
} else {
    count++ ;
    ingresso2 = "Ingresso Vietato"
}
console.log(ingresso2)