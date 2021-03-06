document.getElementById("kanbanForm").style.display = "none";

addBtn.addEventListener("click", openForm);
function openForm(){ 
  document.getElementById("kanbanForm").style.display = "block";
}

closeBtn.addEventListener("click", closeForm);
function closeForm(){ 
  document.getElementById("kanbanForm").style.display = "none";
}

const form = document.getElementById("kanbanForm");
const button = document.querySelector("#kanbanForm > button");
var kanbanInput = document.getElementById("kanbanInput");
var kanbanlist = document.getElementById("kanbanlist");
var taskDueInput = document.getElementById("taskDueInput");
var taskDateInput = document.getElementById("taskDateInput");
var timeAmountInput = document.getElementById("timeAmountInput");
var levelRatingInput = document.getElementById("levelInput");
  
form.addEventListener("submit", function(event){
    event.preventDefault();
    let kanban = kanbanInput.value;
    let taskDue = taskDueInput.value;
    let taskDate = taskDateInput.value;
    let timeAmount = timeAmountInput.value;
    let levelRating = levelRatingInput.options[levelInput.selectedIndex].value;
    if (kanban) {
      addKanban(kanban, taskDue, taskDate, timeAmount, levelRating, false);

    }
  })
  
var kanbanListArray = [];
  
function addKanban(kanbanDescription, taskDate, timeAmount,  levelRating, taskDue, taskStatus) {
    let d = new Date();
    let dateCreated = d.getFullYear();
    let kanban = {
      id: Date.now(),
      kanbanDescription,
      taskDate,
      dateCreated,
      timeAmount,
      levelRating,
      taskDue,
      taskStatus
    };
    kanbanListArray.push(kanban);
    renderKanban(kanban);
}

function renderKanban(kanban){
updateEmpty();
//Create HTML elements
let item = document.createElement("li");
item.draggable = "true"
item.innerHTML = "<p>" + kanban.kanbanDescription.bold() + "<br>" + "Due: ".bold() + kanban.taskDue + ", " + kanban.taskDate + "<br>" + "Time: ".bold() + kanban.timeAmount + " min" + "<br>" + "Priority: ".bold() + kanban.levelRating + "</p>";
kanbanTask.appendChild(item);

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
  if (kanbanListArray.length > 0){
    document.getElementById('emptyKanban').style.display = 'none';
  } else {
    document.getElementById('emptyKanban').style.display = 'block';
  }
}



