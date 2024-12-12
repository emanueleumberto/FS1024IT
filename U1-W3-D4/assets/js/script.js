function createMainBoard(num) {
    let mainBoard = document.querySelector('#main-board')
    for(let i=0; i<num; i++) {
        let div = document.createElement('div')
        div.classList.add('cell');
        div.innerText = i + 1;
        mainBoard.appendChild(div)
    }
}

function genearateRandomNumber(num) {
    let numRand = Math.round(Math.random() * num)
    if(mainBoardNum.length === num) {
        alert('Estrazione completa')
        return
    }

    if(!mainBoardNum.includes(numRand) && numRand !== 0 ){
        mainBoardNum.push(numRand)
        let cells = document.querySelectorAll('#main-board div.cell')
        cells[numRand-1].classList.add('estratto')
    } else {
        genearateRandomNumber(num)
    }
}

const numeriTombola = 76;
const mainBoardNum = [];

createMainBoard(numeriTombola)
let btnRand = document.querySelector('#randBtn')
btnRand.addEventListener('click', () => setInterval(() => genearateRandomNumber(numeriTombola), 500))