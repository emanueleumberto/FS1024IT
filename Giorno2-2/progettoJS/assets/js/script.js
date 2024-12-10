let users = []

function addUser() {
    let nodeListInput = document.querySelectorAll('header input')
   
    let obj = {
        firstName: nodeListInput[0].value,
        lastName: nodeListInput[1].value,
        city: nodeListInput[2].value,
        email: nodeListInput[3].value
    }
    users.push(obj)
    resetForm(nodeListInput)
    userListCreated()
}

function resetForm(node) {
    node[0].value = '';
    node[1].value = '';
    node[2].value = '';
    node[3].value = ''
}

function userListCreated() {
    let listNode = document.querySelector('main section')
    listNode.innerHTML = '';
    let lo = document.createElement('ol');
    users.forEach((ele, i) => {
        let li = document.createElement('li');
        //li.innerText = ele.firstName + ' ' + ele.lastName
        //li.innerHTML = ele.firstName + ' ' + ele.lastName + '<span><button onclick="removeUser('+i+')">X</button></span>'
        li.innerHTML = `${ele.firstName} ${ele.lastName} <span><button onclick="removeUser(${i})">X</button></span>`
        lo.appendChild(li)
    })

    listNode.appendChild(lo);
}

function removeUser(index) {
    users.splice(index, 1)
    userListCreated()
}