
let taskInput = document.querySelector('.taskinput')

let addBtn = document.querySelector('.btn')

addBtn.addEventListener('click', ()=> {
    addBtnClicked()
})

function addBtnClicked() {
    let taskItem = taskInput.value
    let taskList = document.createElement('li')
    let taskItemText = document.createElement('h3')
    taskItemText.innerText = taskItem
    taskList.appendChild(taskItemText)

    let unorderList = document.querySelector('.todo-list')
    unorderList.appendChild(taskList)
    taskInput.value =""

    let deleteBtn = document.createElement('button')
    deleteBtn.innerText = "Done"
    deleteBtn.className ="delbtn"

    taskList.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', ()=> {
        unorderList.removeChild(taskList)
    })
}