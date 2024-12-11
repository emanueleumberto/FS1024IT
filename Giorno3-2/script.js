// Events
let btn = document.querySelectorAll('div button')
console.log(btn)

let btn2Onclick = btn[1];
btn2Onclick.onclick = myClick
/* btnOnclick.onclick = function() {
    console.log("Nodo cliccato!!!")
} 
   btnOnclick.onclick = () => {
    console.log("Nodo cliccato!!!")
}
*/

let btn3Onclick = btn[2];
btn3Onclick.addEventListener('click', myClick)
/* btn3Onclick.addEventListener('click', () => {
    console.log("Nodo cliccato!!!")
})
btn3Onclick.addEventListener('click', function() {
    console.log("Nodo cliccato!!!")
}) */

function myClick() {
    console.log("Nodo cliccato!!!")
}

let forms = document.forms;
// let forms = document.querySelectorAll('div form')
console.dir(forms[0])

let btnSubmit = forms[0].elements[5];
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault()
    //let name = forms[0].elements[0]
    let name = document.querySelector('form input[name = name]')
    let lastname = document.querySelector('form input[name = lastname]')
    let email = document.querySelector('form input[name = email]')
    let password = document.querySelector('form input[name = password]')
    // Regex per il controllo del formato email
    const regexEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    const regexPass = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/gm;
    
    if(name.value.length === 0 || name.value.length <= 2) {
        viewError(name, "Inserisci un valore min 3 caratteri")
    } 
    if(lastname.value.length === 0 || lastname.value.length <= 2) {
        viewError(lastname, "Inserisci un valore min 3 caratteri")
    } 
    // regex.test(email.value) -> restiruisce un valore booleano dopo aver verificato il formato della email inserita
    if(!regexEmail.test(email.value)) { 
        viewError(email, "Inserisci una email corretta")
    } 
    if(!regexPass.test(password.value)) {
        viewError(password, "Inserisci min 8 caratteri")
    } 

    
})

function viewError(nodo, txt) {
    //console.dir(nodo.nextElementSibling)
    //let form = document.querySelector('div form')
    //let p = document.createElement('p')
    let p = nodo.nextElementSibling
    p.style.textAlign = 'center'
    p.style.color = 'red'
    p.innerText = txt
    //form.appendChild(p)
    //nodo.appendChild(p)
}




function func() {
    console.log("Sono il setTimeout!!")
}

function orologio() {
    let now = new Date();
    //console.log(now.getHours(), now.getMinutes(), now.getSeconds())
    let time = document.querySelector('h1');
    time.innerText = `${now.getHours()}.${now.getMinutes()}.${now.getSeconds()}`
}

window.setTimeout(func, 3000)

window.setInterval(orologio, 1000)

