// EcmaScript ES6 ->
// Spread Operator

let obj1 = {
    name: "Mario",
    lastname: "Rossi",
    city: "Roma"
}

let obj2 = obj1; // due puntatori alla stessa zona di memoria
let obj3 = {...obj1} // creo un nuovo oggetto in una nuova zona di memoria e clono al suo interno i valori di Obj1
let obj4 = Object.assign({}, obj1); // Prima del ES6 colono i valori di un oggetto in una nuova zona di memoria

let arr1 = ['uno', 'due', 'tre']

let arr2 = arr1; // due puntatori alla stessa zona di memoria
let arr3 = [...arr1]; // creo un nuovo array in una nuova zona di memoria e clono al suo interno i valori di Arr1
let arr4 = Object.assign([], arr1); // Prima del ES6 colono i valori di un array in una nuova zona di memoria

arr1.push('quattro')

// Default Parameter
function func1(x, y, z=25) {
    console.log("I parametri passati alla funzione sono: ", x, y, z)
}

func1(10,5);

// Rest Parameter
// Con i Rest parameter racchiudo tutti i valori passati ad una funzione in un array chiamato args(nome che decido io)
function func2(...args) {
    console.log("I parametri passati alla funzione sono: ", args)
    for (const element of args) {
        console.log(element)
    }
}

func2(...arr1, 'cinque');

// Prima del ES6 i paramentri variabili di una funzione venivano catturati da un oggetto predefinito chiamato arguments
function func3() {
    console.log("I parametri passati alla funzione sono: ", arguments)
    for (const element of arguments) {
        console.log(element)
    }
}

func3(...arr1, 'cinque');

// Destructuring Operator
obj1 = {
    name: "Mario",
    lastname: "Rossi",
    city: "Roma"
}

// Prima del ES6 Estraggo dei valori contenuti in un oggetto e inizializzo delle variabili
let n = obj1.name;
let l = obj1.lastname;
let c = obj1.city;
console.log(n, l, c)

// Destructuring Object
let { name, city, lastname } = obj1;
console.log(name, city, lastname)

// Destructuring con nomi di variabili differenti rispetto alle proprietàà di un oggetto
let { name:m, city:r, lastname:ro } = obj1;
console.log(m, ro, r)

arr1 = ['uno', 'due', 'tre']

// Prima del ES6 Estraggo dei valori contenuti in un array e inizializzo delle variabili
let u = arr1[0];
let s = arr1[1];
let i = arr1[2];

// Destructuring Array
let [f, g, q] = arr1;


// Template Literal
// Prima del ES6 scrivo del testo concatenandolo (+) con le variabili
let str = "Lorem ipsum, dolor sit amet" + name + " consectetur adipisicing elit. Nisi tempora recusandae " +
          " dolor optio totam nobis laborum, delectus vitae, " + lastname + " quam aut illum itaque cumque impedit" +
          " deleniti labore? Obcaecati" + city +" voluptatem ratione nostrum.";

// Con il template literal posso andare a capo quando voglio e posso aggiungere il contenuto di variabili annidandolo dentro a ${}
let str2 = `Lorem ipsum, dolor sit amet consectetur ${name} adipisicing elit. Nisi tempora recusandae dolor optio 
            totam nobis laborum, delectus vitae, quam aut illum itaque ${lastname} cumque impedit deleniti labore? 
            Obcaecati voluptatem ${city} ratione nostrum.`



let arrA = ['uno', 'due', 'tre']
let arrB = ['quattro', 'cinque']
let arrC = arrA.concat(arrB);
console.log(arrC)
let arrD = [...arrA, 'sette', ...arrB]
console.log(arrD)

for (let index = 0; index < arrD.length; index++) { }
for (const key in arrD) { }
for (const element of arrD) { }

// foreach | map | filter | find | reduce
let arrNum = [25, 6, 7, 9, 11, 6]

arrNum.forEach(num => console.log(num));
let arrMod = arrNum.map(num => num * 2);
let arrFilter = arrNum.filter(num => num > 10);
let result = arrNum.reduce((acc, num) => acc + num ,0)
let everyNumMagg10 = arrNum.every(num => num > 10);
let someNumMagg10 = arrNum.some(num => num > 10);
let numSix = arrNum.find(num => num === 6);
let indexNumSix = arrNum.findIndex(num => num === 6);
console.log(arrMod)
console.log(arrFilter)
console.log(arrNum)
console.log(result)
console.log(everyNumMagg10)
console.log(someNumMagg10)
console.log(numSix)
console.log(indexNumSix)


// Equivalente del reduce
function sum(...args) {
    let r = 0;
    for (const element of args) {
        r += element
    }
    return r;
}

let resultFunc = sum(arrNum)
