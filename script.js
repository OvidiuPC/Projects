const button = document.getElementById("to-do-button");
let input = document.getElementById("to-do-input");

function createList() {
  const list = document.getElementById("list");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const removeBtn = document.createElement("button");
  removeBtn.className = "fas fa-trash-alt";
  list.appendChild(ul);
  ul.appendChild(li);
  li.appendChild(document.createTextNode(input.value));
  li.appendChild(removeBtn);
  input.value = " ";
  removeBtn.addEventListener("click", removeList);
  li.style.backgroundColor =
    "rgba(" +
    randomColor() +
    "," +
    randomColor() +
    ", " +
    randomColor() +
    "," +
    randomAlpha() +
    ")";
}
function randomColor() {
  return Math.floor(Math.random() * 256);
}
function randomAlpha() {
  return Math.random();
}
function addToDo() {
  if (input.value.length > 2) {
    createList();
  } else {
    alert("Please use 3 or more caracter");
  }
}
function removeList(event) {
  event.target.parentNode.remove();
  console.log("Sss");
}

button.addEventListener("click", addToDo);
