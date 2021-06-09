//local storage for kanban
document.getElementById("myForm").style.display = "none";

openButton.addEventListener("click", openForm);
function openForm(){ 
  document.getElementById("myForm").style.display = "block";
}

btnCancel.addEventListener("click", closeForm);
function closeForm(){ 
  document.getElementById("myForm").style.display = "none";
}

const form = document.getElementById("taskform");
const button = document.querySelector("#taskform > button");
var taskInput = document.getElementById("taskInput");
var tasklist = document.getElementById("tasklist");
var dueDateInput = document.getElementById("dueDateInput");
var completionTimeInput = document.getElementById("completionTimeInput");
var estimatedTimeInput = document.getElementById("estimatedTimeInput");
var priorityRatingInput = document.getElementById("priorityInput");
  
form.addEventListener("submit", function(event){
    event.preventDefault();
    let task = taskInput.value;
    let dueDate = dueDateInput.value;
    let completionTime = completionTimeInput.value;
    let estimatedTime = estimatedTimeInput.value;
    let priorityRating = priorityRatingInput.options[priorityInput.selectedIndex].value;
    if (task) {
      addTask(task, dueDate, estimatedTime, priorityRating, completionTime, false);

    }
  })
  
var taskListArray = [];
  
function addTask(taskDescription, dueDate, estimatedTime,  priorityRating, completionTime, completionStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let task = {
      id: Date.now(),
      taskDescription,
      dueDate,
      dateCreated,
      estimatedTime,
      priorityRating,
      completionTime,
      completionStatus
    };
    taskListArray.push(task);
    console.log(taskListArray);
    renderTask(task);
}
  
function renderTask(task){
updateEmpty();
//Create HTML elements
let item = document.createElement("li");
item.setAttribute('data-id', task.id);
item.innerHTML = "<p>" + task.taskDescription.bold() + "<br>" + "Due: ".bold() + task.completionTime + ", " + task.dueDate + "<br>" + "Time: ".bold() + task.estimatedTime + " min" + "<br>" + "Priority: ".bold() + task.priorityRating + "</p>";
  
taskscroll.appendChild(item);

//meatball menu that stores edit and delete task (MAY NOT USE)
/*let menuButton = document.createElement("button");
menuButton.classList.add("fa", "fa-ellipsis-h", "fa-6");
item.appendChild(menuButton);*/

//Extra Task DOM elements
let delButton = document.createElement("button");
delButton.classList.add("fa", "fa-trash");
item.appendChild(delButton);
  //Event Listeners for DOM addEventListener
delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = taskListArray.findIndex(task => task.id === Number(id));
    removeItemFromArray(taskListArray, index)
    console.log(taskListArray);
    updateEmpty();
    item.remove();
})

//Clear the input form*/
form.reset();
}

function removeItemFromArray(arr, index) {
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;
}

function updateEmpty() {
  if (taskListArray.length > 0){
    document.getElementById('emptyList').style.display = 'none';
  } else {
    document.getElementById('emptyList').style.display = 'block';
  }
}

