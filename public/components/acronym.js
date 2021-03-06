const form = document.getElementById("acronymform");
const button = document.querySelector("#acronymform > button");
var wordInput = document.getElementById("wordInput");
var wordlist = document.getElementById("wordlist");


form.addEventListener("submit", function(event){
  event.preventDefault();
  let word = wordInput.value; //add acronym code here
  let wordAcronym = word.match(/\b(\w)/g).join('').toUpperCase();
  addWord(wordAcronym, word, false);
})

var wordListArray = [];

function addWord(wordAcronym, wordDescription) {
  
  let word = {
    wordAcronym,
    wordDescription
  };
  wordListArray.push(word);
  renderWord(word);
}

function renderWord(word){
  updateEmpty();

  let item = document.createElement("li");
  item.innerHTML = "<p>" + word.wordAcronym.bold() + ": " + word.wordDescription + "</p>";

  wordlist.appendChild(item);

  let delButton = document.createElement("button");
  delButton.classList.add("fa", "fa-trash");  
  item.appendChild(delButton);
  
  delButton.addEventListener("click", function(event){
    event.preventDefault();
    let id = event.target.parentElement.getAttribute('data-id');
    let index = wordListArray.findIndex(word => word.id === Number(id));
    removeItemFromArray(wordListArray, index)
    updateEmpty();
    item.remove();
  })


form.reset();
}

function removeItemFromArray(arr, index) {
  if (index > -1){
    arr.splice(index, 1)
  }
  return arr;
}

function updateEmpty() {
  if (wordListArray.length > 0){
    document.getElementById('emptyAcronym').style.display = 'none';
  } else {
    document.getElementById('emptyAcronym').style.display = 'block';
  }
}
