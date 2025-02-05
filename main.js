const addBtn = document.querySelector("#addBtn")
const taskInpt = document.querySelector("#taskInpt")
const taskList = document.querySelector("#taskList")
let newTask;
let delBtn;
addBtn.addEventListener('click', ()=>{
    //We are going to add a li tag when clicked
    //but first we need the inputed value
    newTask = document.createElement("li")
    newTask.textContent = taskInpt.value;
    taskList.appendChild(newTask)
    //add a delet button to each new task
    delBtn = document.createElement("button")
    delBtn.textContent = "X"
    newTask.appendChild(delBtn)
})


taskList.addEventListener("click", (event)=>{
    //i want to delete its parent if delete btn is clicked
    if (event.target.tagName === "BUTTON"){
        event.target.parentElement.remove()
    } 
})
