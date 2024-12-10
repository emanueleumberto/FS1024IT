// BOM -> Browser Object Model
console.log(window)

// window.alert("sono un alert!")
// let s = window.confirm("Ti piace Javascript?")

// DOM -> Document Object Model
window.document; // la pagina html
console.log(document)
console.dir(document)

// Per seleziona un nodo della pagina con un id
let t = document.getElementById('titolo')  // #titolo
console.log(t)
console.dir(t)

t.innerText = "Testo modificato tramite JS"
t.style.textAlign = 'center'
t.style.color = '#E566AA'

// Per seleziona un nodo della pagina con una class
let s = document.getElementsByClassName('sottotitolo')[0]
console.dir(s)

s.innerText = "Testo modificato tramite JS"
s.style.color = '#E5E5AA'
s.style.textAlign = 'center'

// Per seleziona un nodo della pagina tramite un tag
let p = document.getElementsByTagName('p');
console.log(p)

p[0].innerText = "Testo modificato tramite JS"
p[0].style.color = '#000000'
p[0].style.textAlign = 'center'

p[1].innerText = "Testo modificato tramite JS"
p[1].style.color = '#FF0000'
p[1].style.textAlign = 'center'

// Da ES6 sono stati introdotti nuovi selettori avanzati
// querySelector e il querySelectorAll
let parag = document.querySelector('div > p')
parag.style.fontWeight = 'bold'
parag.className = "brown"

let allParag = document.querySelectorAll('div > p')
allParag[3].innerText = "Testo modificato tramite JS"
console.log(allParag)

// Creare nuovi nodi html tramite JS
// createElement

let main = document.querySelector('main') // Selezioni un nodo esistente nella pagina html
let box = document.createElement('section') // Creo un nuovo contenitore section tramite JS
let ps = document.createElement('p') // Creo un nuovo paragrafo p tramite JS 
ps.innerText = 'ciao sono  il paragrafo creato tramite javascript'; // Scrivo dentro il nuovo paragrafo
ps.className = "brown"

let a = document.createElement('a');
a.innerText = 'google'
a.href = "http://www.google.com";
a.target = "_blank"

box.appendChild(ps) // appendo il nuovo paragrafo dentro il nuovo contenitore section
box.appendChild(a) // appendo il nuovo link dentro il nuovo contenitore section
main.appendChild(box) // appendo la section appena creata ad il nodo main esistente

// Dom Traversing
let nodH2 = document.querySelector('section h2.sottotitolo')
let section = nodH2.parentNode
section.style.border = '1px solid black'
section.removeChild(nodH2)
let div4 = section.children[4];
div4.style.backgroundColor = 'yellow'
console.dir(section)

// Intro Events

function btnclick() {
    alert('click')
}
