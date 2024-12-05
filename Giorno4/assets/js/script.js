// funzioni predefinite
/* window.alert('ok')
console.log('kg')
document.write('ciao a tutti')
let num = prompt('Inserisci un numero')
console.log(num) */

// Funzioni Custom
// function func(?params) { ...istruzioni ?return }

let x = 10;

function sum() {
    let num1 = prompt('Inserisci un numero')
    let num2 = prompt('Inserisci un numero')
    //console.log(+num1 + +num2)
    return (+num1 + +num2 + x)
}


function fullName() {
    let firstname = prompt('Inserisci il tuo nome')
    let lastname = prompt('Inserisci il tuo cognome')
    return (firstname.length > 0 && lastname.length > 0) ? firstname + ' ' + lastname : '---';
}

/* let s = sum()
console.log(s) */

/* let name = fullName();
console.log("Ciao " + name) */

function somma(x, y) {
    if(typeof x === 'number' && typeof y === 'number') {
        let res = x + y
        return res;
    } else {
        return 0
    }  
}

let res1 = somma(5, 9);
console.log(res1)
let res2 = somma(90, 66);
console.log(res2)
let res3 = somma('ciao', ['abc'])
console.log(res3)

function func(x, y=0) {
    return x+y
}

let r = func(10);
console.log(r)

function sumVarArgs(...args) { // ...nome -> rest Parameter che estrae i valori da un oggetto
    console.log('Num parametri:', args)
    console.log('Num parametri:', arguments) // arguments è un oggetto predefinito di javascript che contiene tutti i paramentri che inserisco in una funzione
    let result = 0;
    for (const element of args) {
        result += element
    }
    return result
}

let risultatoSommaArgomentiVariabili = sumVarArgs(8,9,9,7,6,2,3)
console.log("La somma è " + risultatoSommaArgomentiVariabili)


let arr = ['ciao', 'abd', 'uno']
let arr2 = Object.assign([], arr)
let arr3 = [...arr]

let obj = { name: 'Mario', lastname: 'Rossi'}
let obj2 = Object.assign({}, obj)
let obj3 = {...obj}



func();
function func() {
    console.log("Sono la funzione func")
}

//console.log(text) // Errore

let text; // dichiarazione di una variabile
text = 'ciao'; // inizializzazione di una variabile


for(var i=0; i<5; i++){
    console.log(i)
}
console.log(i)


{
    var j = 'Sono var e sono dentro un blocco'
    let y = 'Sono let e sono dentro un blocco'
    console.log(j)
    console.log(y)
}

console.log(j)
// console.log(y) // Errore

let u;
if(x > 5) {
    u = 'Sono var e sono dentro un blocco IF'
}

console.log(u)




// Function Javascript
// function func(?params) { ...istruzioni ?return }
// let func = function(?params) { ...istruzioni ?return }

a()
// b() errore

// per il concetto di hoisting delle funzioni posso richiamare la funzione anche prima di averla dichiarata
function a() { 
    console.log("Sono una dichairazione di funzione")    
}
a()

// Una funzione espressione può essere invocata solo dopo averla dichiarata
let b = function() {
    console.log("Sono una funzione espressione") 
}
b()

let e = () => console.log("Sono una funzione freccia") 
let c = (num1, num2) => num1 + num2
let d = (num1, num2) => {
    return num1 + num2
}
console.log(c(5,10))
console.log(d(5,10))

let globalVar = "Sono una variabile globale";
function funcScope() {
    let localVar = "Sono una variabile locale ad una funzione";
    console.log(globalVar)
    console.log(localVar)
}
funcScope()

console.log(globalVar)
// console.log(localVar) // Errore


// Math
// Classe Math
// random - ceil - floor - round - min - max

let randNum = Math.random() * 100
let ceilNum = Math.ceil(randNum)
let floorNum = Math.floor(randNum)
let roundNum = Math.round(randNum)
console.log(randNum, ceilNum, floorNum, roundNum)

Math.min([4,9,2,7,8])
Math.max([4,9,2,7,8])

// Date

let now = new Date();
let g = new Date(2024, 10, 25)
console.log(now)
console.log(g)
g.setMonth(5)
console.log(g.getFullYear())
console.log(g)
    