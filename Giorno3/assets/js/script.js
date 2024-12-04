// Struttore di controllo
// IF/ELSE
// if(condizione) {...blocco di istruzioni} else if(codizione){...blocco di istruzioni}.... else {...blocco di istruzioni}
if(true) {
    console.log("Sono dentro IF")
} else if(true) {
    console.log("Sono dentro ELSE IF")
} else if(true) {
    console.log("Sono dentro ELSE IF")
} else if(true) {
    console.log("Sono dentro ELSE IF")
} else {
    console.log("Sono dentro ELSE")
}

// Switch/Case
// switch (var || espressione) { case a: ..istruzioni; break; case b: ..istruzioni; break; case c: ..istruzioni; break; default: ..istruzioni; break; }
let x = 5;

if(x === 5) {
    console.log('...');
} else if (x === 10) {
    console.log('...');
} else if (x === 15) {
    console.log('...');
} else {
    console.log('...');
}

switch (x) {
    case 5:
        console.log('...');
        break;
    case 10:
        console.log('...');
        break;
    case 15:
        console.log('...');
        break;
    default:
        console.log('...');
        break;
}

let mese = 5;

switch (mese) {
    case 12:
    case 1:
    case 2:
        console.log("Inverno");
        break;
    case 3:
    case 4:
    case 5:
        console.log("Primavera");
        break;
    default:
        break;
}

// Strutture iterative
// while - do while - for (for in - for of - foreach)
// while
// while(condizione) { ...istruzioni; incremento}

let num = 0;
while(num < 5) {
    console.log(num)
    num++;
}

let num2 = 5;
while(num2 > 0) {
    console.log(num2)
    num2--;
}

let num3 = 0;
while(true){
    console.log(num3)
    num3++;
    if(num3 === 5) {
        break;
    }
}

// do-while
// do {...istruzioni; incremento }while(condizione)

let num4 = 0;
do {
    console.log(num4)
    num4++
} while(num4 < 10)

while(num4 < 10){
    console.log(num4)
    num4++
}


// for
// for(inizializzazione; condizione; incremento) { ...istruzioni }

for(let i=0; i<10; i++) {
    console.log(i)
}


let arr = ['uno', 'due', 'tre'];
console.log(arr)

arr.push('quattro')
arr.shift()

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    // console.log(i)
}


// for in
// for (const key in object) { ...istruzioni  }
// for-in è specifico per iterare un array 
// scorre tutti i valori dal primo fino all'ultimo e restitusce le chiavi(indici)
// itero un array
for (const key in arr) {
    console.log(key, arr[key])
    //arr[key] += '!!';
}

let obj = {
    name: 'Mario',
    lastname: 'Rossi',
    age: 45
}
// itero un oggetto
for (const key in obj) {
    console.log(key, obj[key])
}

// for of
// for (const element of object) { ...istruzioni  }
// for-of è specifico per iterare un array 
// scorre tutti i valori dal primo fino all'ultimo e restituisce i valori
for (const element of arr) {
    console.log(element)
}


// String

let str = "Ciao a tutti";
console.log(str.length)
console.log(str.indexOf("tutti"))
console.log(str.indexOf("a"))
console.log(str.lastIndexOf("a"))
console.log(str.search("tutti"))
console.log(str.slice(2, 9))
console.log(str.slice(2))
console.log(str.slice(-5, -2))
console.log(str.replace('a', 'X'))
console.log(str.replaceAll('t', 'O'))
console.log(str)
console.log(str.trim())
let arrStr = str.split(" ");
console.log(arrStr)