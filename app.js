const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

todoButton.addEventListener('click', addToDo)
todoList.addEventListener('click', deleteToDo)
todoList.addEventListener('click', deleteToDo)
filterOption.addEventListener('click', filterToDo)

function addToDo(event){
    event.preventDefault()
    
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newToDo = document.createElement('li');
    newToDo.innerText = todoInput.value;
    newToDo.classList.add("todo-item")

    todoDiv.appendChild(newToDo);

    const completedButton = document.createElement('button');
    // completedButton.innerText = '<i class = "fas fa-check"></i>'; => this will print the text
    completedButton.innerHTML = '<i class = "fas fa-check"></i>';
    completedButton.classList.add("complt-btn");
    
    todoDiv.appendChild(completedButton);

    const deleteButton = document.createElement('button');
    // completedButton.innerText = '<i class = "fas fa-check"></i>'; => this will print the text
    deleteButton.innerHTML = '<i class = "fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    
    todoDiv.appendChild(deleteButton);
    todoList.appendChild(todoDiv)

    //Clear Value
    todoInput.value = "";
}

function deleteToDo(event){
    const item = event.target;
    if(item.classList[0] === "delete-btn"){
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function(){
            todo.remove();
        });
        // todo.remove();
    }
    else if (item.classList[0] === "complt-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        // todo.addEventListener("transitionend", function(){
        //     todo.remove();
        // });
      }
}

function filterToDo(event){
    const todos = todoList.childNodes;
    // todos.forEach(function(todo){
    //     switch(event.target.value){
    //         case "all":
    //             todo.style.display = "flex";
    //             break;
    //         case "completed":
    //             if(todo.classList.contains("completed")){
    //                 todo.style.display = "flex";
    //             }
    //             else{
    //                 todo.style.display = "none";
    //             }
    //             break;
    //     }
    // });
    todos.forEach(function(todo) {
        switch (event.target.value) {
          case "all":
            todo.style.display = "flex";
            break;
          case "completed":
            if (todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
          case "uncompleted":
            if (!todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
        }
      });
}




