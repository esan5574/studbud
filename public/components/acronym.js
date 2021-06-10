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
//Create HTML elements
let item = document.createElement("li");
item.innerHTML = "<p>" + word.wordAcronym.bold() + ": " + word.wordDescription + "</p>";

wordlist.appendChild(item);
//Extra Task DOM elements
let delButton = document.createElement("button");
delButton.classList.add("fa", "fa-trash");
item.appendChild(delButton);
//Event Listeners for DOM addEventListener
delButton.addEventListener("click", function(event){
  event.preventDefault();
  item.remove();
})

//Clear the input form
form.reset();
}