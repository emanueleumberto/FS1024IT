// Variabili
// var - let - const

// DataTypes
// String - Number - Boolean - Object - Array - Undefined - Null

// Oggetti

let name = "Mario";
let lastname = "Rossi";
let age = 25;

const student = {
    name: "Mario",
    lastname: "Rossi",
    age: 25,
    address: {
        street: "abc",
        city: "abc"
    }
}

console.log(name);
console.log(student.name);
console.log(student["name"]);
console.log(student)
console.log(student.address.city);
console.log(typeof student)

student.name = "Giuseppe"; // modifica del valore di una proprietà esistente
student.fiscalCode = "ABC12DEF23A58P"; // aggiunta di una nuova proprietà dell'oggetto
student.email = "example@example.it";
delete student.age; // elimino la proprietà di un oggetto
console.log(student)

// let student2 = student; // Errore!!! Assegno alla variabile student2 il riferimento alla stessa zone di memoria di student
// const student2 = Object.assign({}, student); // Copio i valori e non il riferimento alla zona di memoria
const student2 = {...student}; // Copio i valori e non il riferimento alla zona di memoria
student2.age = 44;

console.log("*************")
console.log(student2);
student2.name = "Antonio";
student.lastname = "Verdi";
console.log(student2);
console.log(student);

let x = 25;
let y = x;
y++;
console.log(x, y)


// Array
// const myArr2 = new Array();
// console.log(myArr2, typeof myArr2)
const myArr = [25, 7, 78, 12, 61, 34];
console.log(myArr, typeof myArr)
console.log(myArr[0])
console.log(myArr[1])

myArr[5] = 49;

myArr.sort(); // Ordina un array
myArr.length; // Restituisce la lunghezza di  un array
myArr.push(33); // Aggiunge in coda un nuovo elemento
myArr.unshift(22); // Aggiunge un elemento ad inizio array
myArr.pop(); // Elimina un elemento dalla fine dei un array
myArr.shift(); // Elimina un elemento ad inizio array
myArr.splice(2, 2); // Elimina n elementi partendo da uno specifico indice Array.splice(start, deleteCount)
myArr.splice(1, 1, 99, 8, 88, 66); // // Elimina n elementi partendo da uno specifico indice ed aggiunge un nuovo valore Array.splice(start, deleteCount, ...items)
console.log(myArr)


// Strutture condizonali
// IF
// if(condizione){...istruzioni} else if(condizione) {...istruzioni} else {...istruzioni}

let num = -20;
let myname = "";
if(num > 18 || myname.length > 5 && myArr.length === 3) {
    console.log("sono dentro un IF")
} else if(num > 10) {
    console.log("sono dentro un ELSE IF")
} else {
    console.log("sono dentro un ELSE")
}

if(num > 10) {
    console.log("sono dentro il secondo if")
}

// 0 -> false - !0 -> true
// "" -> false - !"" -> true
// undefined || null -> false
// [] -> false - ![] -> true
// {} -> false - !{} -> true
if(num) {
    console.log("sono dentro un IF num")
}


