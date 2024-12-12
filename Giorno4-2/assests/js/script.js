// TASK:

// 1) Capire quante celle generare per il mese corrente (dovrà funzionare per OGNI mese, non solo quello attuale)

const now = new Date(); // Leggo il giorno e ora attuale
const monthNames = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"]
const appointments = [];

// Funzione che calcola quanti giorni contiene il mese corrente
function daysInThisMonth() {
    let getYear = now.getFullYear(); // leggo anno corrente
    let getMonth = now.getMonth(); // leggo mese corrente

    let lastDayDate = new Date(getYear, getMonth+1, 0) // calcolo l'ultimo giorno del mese corrente
    let lastDayOfTheMonth = lastDayDate.getDate() // salvo l'ultimo giorno del mese corrente in una variabile

    return lastDayOfTheMonth
}

function crateDays(days) {
    let calendar = document.querySelector('#calendar')
    for(let i=1; i<=days; i++) {
        let dayCellNode = document.createElement('div') // creo la cella per ogni giorno del mese
        dayCellNode.className = 'day' // applico una classe per la formattazione in css

        appointments.push([]) // per ogni giorno del mese creo un array vuoto e lo aggiungo all'array degli appuntamenti

        dayCellNode.addEventListener('click', () => {
            unselectDay()
            dayCellNode.classList.add("selected")
            showAppointments(i-1)
            changeMeetingDay(i-1)
        })
        
        let day = document.createElement('h3') // creo un titolo per il giorno da inserire nella cella
        day.innerText = i; // scrivo il giorno nella cella

        let today = now.getDate() // il giorno attuale
        if(i === today) {
            day.classList.add('color-epic')
        }

        dayCellNode.appendChild(day)
        calendar.appendChild(dayCellNode)
    }
}

function changeMeetingDay(index) {
    let day = document.querySelector('#newMeetingDay');
    day.innerText = (index + 1) + '/' + (now.getMonth()+1)
}

function showAppointments(index) {
    let todayAppointments = appointments[index]

    let lista = document.querySelector('#appointmentsList')
    lista.innerHTML = ''
    todayAppointments.forEach((ele,i) => {
        let li = document.createElement('li')
        li.innerText = ele
        lista.appendChild(li)
    })
}

function saveMeeting(e){
    e.preventDefault()

    let meetingTime = document.querySelector('#newMeetingTime')
    let meetingName = document.querySelector('#newMeetingName')
    let meetingDay = document.querySelector('#newMeetingDay').innerText

    let meetingDayArr = meetingDay.split('/')
    let index = meetingDayArr[0]-1;

    let appointment = meetingTime.value + ' - ' + meetingName.value 
    appointments[index].push(appointment)
    showAppointments(index)
}

function unselectDay() {
    let select = document.querySelector(".selected") // Element || null
    if(select) {
        select.classList.remove("selected")
    }
}

function printCurrentMonth() {
    let h1 = document.querySelector('h1')
    let monthIndex = now.getMonth()
    let monthName = monthNames[monthIndex]
    h1.innerText = monthName
}

let days = daysInThisMonth()
crateDays(days)
printCurrentMonth()

let form = document.querySelector('form')
form.addEventListener('submit', saveMeeting)












