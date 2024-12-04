/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = 10;
let num2 = 20;
if(num1 > num2) {
  console.log("Il numero " + num1 + " è più grande di " + num2)
} else if(num1 < num2) {
  console.log("Il numero " + num1 + " è più piccolo di " + num2)
} else {
  console.log("Il numero " + num1 + " è uguale a " + num2)
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Soluzione 1
let num3 = 5;
if(num3 > 5 || num3 < 5) {
  console.log(num3 + " not equal 5")
}
// Soluzione 2
if(num3 !== 5) {
  console.log(num3 + " not equal 5")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è 
  perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num4 = 25;
if(num4 % 5 === 0) {
  console.log(num4 + " divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 
  oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num5 = 3;
let num6 = 11;

// Soluzione 1
if(num5 === 8 || num6 === 8 || (num5+num6) === 8 || (num5-num6) === 8 || (num6-num5) === 8) {
  console.log("algoritmo verificato")
}

// Soluzione 2
if(num5 === 8 ) {
  console.log("algoritmo verificato")
} else if(num6 === 8) {
  console.log("algoritmo verificato")
} else if((num5+num6) === 8) {
  console.log("algoritmo verificato")
} else if((num5-num6) === 8) {
  console.log("algoritmo verificato")
} else if((num6-num5) === 8) {
  console.log("algoritmo verificato")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente 
  in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto 
  alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cart = 35;
let shippingCost = 10;
let totalShoppingCart;
if(cart > 50) {
  totalShoppingCart = cart;
} else {
  totalShoppingCart = cart + shippingCost;
}
console.log("Total Cart " + totalShoppingCart)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let cart2 = 35;
let shippingCost2 = 10;
let blackFriday = 0.8;
let totalShoppingCart2;
if(cart2 > 50) {
  totalShoppingCart2 = cart2 * blackFriday;
} else {
  totalShoppingCart2 = (cart2 * blackFriday) + shippingCost2;
}
console.log("Total Cart " + totalShoppingCart2)

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num7 = 10;
let num8 = 20;
let num9 = 30;

if(num7 >= num8) {
  if(num9 >= num7) {
    console.log(num9, num7, num8)
  } else {
    if(num9 >= num8) {
      console.log(num7, num9, num8)
    } else {
      console.log(num7, num8, num9)
    }
  }
} else {
  if(num9 >= num8) {
    console.log(num9, num8, num7)
  } else {
    if(num9 >= num7) {
      console.log(num8, num9, num7)
    } else {
      console.log(num8, num7, num9)
    }
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
