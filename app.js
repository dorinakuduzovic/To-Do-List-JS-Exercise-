//selectors
const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');

//event listeners
taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteCheck);

//functions
function addTask(event) {
    //prevent form from submitting
    event.preventDefault();

    //task div
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");

    //create LI
    const newTask = document.createElement("li");
    newTask.innerText = taskInput.value;
    newTask.classList.add('task-item');
    taskDiv.appendChild(newTask);

    //check done button
    const doneButton = document.createElement("button");
    doneButton.innerHTML = '<i class="fas fa-check"></i>';
    doneButton.classList.add("done-btn");
    taskDiv.appendChild(doneButton);

    //check delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    taskDiv.appendChild(deleteButton);


//append to list
taskList.appendChild(taskDiv);

//clear inout value
taskInput.value = "";

}


function deleteCheck(e) {
   const item = e.target;
   //delete task
   if(item.classList[0] === 'delete-btn'){
       const task = item.parentElement;
       task.remove();
   }

   //check task
   if(item.classList[0] === 'done-btn'){
    const task = item.parentElement;
    task.classList.toggle("done");
    
}
}


