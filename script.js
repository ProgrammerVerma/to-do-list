const inputBox = document.querySelector("#typehere");
const todoList = document.querySelector(".todo-list");


function addTask(){
    if(inputBox.value === ''){
        alert("you must type something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        inputBox.value = '';
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        save();
    }
}
function enterpress(){
document.addEventListener("keydown", function(event)
{
    if(event.key === 'Enter'){
        addTask();
        save();
    }
})
}
function checkUnceck(){
     /* directly adding event listner to the todolist variable instead of querry selector */
    todoList.addEventListener("click", function(eve){
        if(eve.target.tagName === "LI"){
            eve.target.classList.toggle("checked");
            save();
        }
        else if(eve.target.tagName === "SPAN"){
            eve.target.parentElement.remove();
            save();
        }
    }, false)
}
function save(){
    localStorage.setItem("data", todoList.innerHTML);
}
function showData(){
    todoList.innerHTML = localStorage.getItem("data");
}



enterpress();
checkUnceck();
showData();


