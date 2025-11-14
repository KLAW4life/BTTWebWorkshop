function remove() {
  let list = document.getElementById("somelist");
  let lastelement = list.children[list.children.length - 1];
  list.removeChild(lastelement);
}

function add() {
  let list = document.getElementById("somelist");
  let newitem = document.createElement("li");
  newitem.innerHTML = list.children.length + 1;
  list.appendChild(newitem);
}
