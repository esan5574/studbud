document.getElementById("addForm").style.display = "none";

addButton.addEventListener("click", openForm);
function openForm(){ 
  document.getElementById("addForm").style.display = "block";
}

btnClose.addEventListener("click", closeForm);
function closeForm(){ 
  document.getElementById("addForm").style.display = "none";
}

const form = document.getElementById("columnForm");
const button = document.querySelector("#columnForm > button");
var columnInput = document.getElementById("columnInput");
var columnlist = document.getElementById("columnlist");
  
form.addEventListener("submit", function(event){
    event.preventDefault();
    let column = columnInput.value;
  
    if (column) {
      addColumn(column, false);
    }
  })
  
var columnListArray = [];
  
function addColumn(columnDescription) {
    let column = {
      columnDescription
    };
    columnListArray.push(column);
    renderColumn(column);
}
  
function renderColumn(column){
updateEmpty();
//Create HTML elements
let item = document.createElement("li");
item.innerHTML = "<h3>" + column.columnDescription + "</h3>";
newColumn.appendChild(item);

//Extra Task DOM elements REMOVE THIS FOR NOW
let delButton = document.createElement("button");
delButton.classList.add("fa", "fa-trash");
item.appendChild(delButton);
  //Event Listeners for DOM addEventListener
delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = columnListArray.findIndex(column => column.id === Number(id));
    removeItemFromArray(columnListArray, index)
    console.log(columnListArray);
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
  if (columnListArray.length > 0){
    document.getElementById('emptyColumn').style.display = 'none';
  } else {
    document.getElementById('emptyColumn').style.display = 'block';
  }
}
             