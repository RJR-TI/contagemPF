var data = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : {
      todo: [],
    };

renderTodoList();

// User clicked on the add button
// If there is any text inside the item field, add that text to the todo list
document.getElementById("add").addEventListener("click", function () {
  var value = [document.getElementById("item").value];
  if (value) {
    addItem(value);
  }
});

function addItem(value) {
  addItemToDOM(value);
  document.getElementById("item").value = "";
  document.getElementById("typeF").value = "";
  document.getElementById("typeM").value = "";
  ee: document.getElementById("td").value = "";
  document.getElementById("tr").value = "";

  data.todo.push(value);
  dataObjectUpdated();
}

function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return;

  for (var i = 0; i < data.todo.length; i++) {
    var value = data.todo[i];
    addItemToDOM(value);
  }
}

function dataObjectUpdated() {
  localStorage.setItem("todoList", JSON.stringify(data));
}

// Adds a new item to the todo list
function addItemToDOM(text) {
  var list = document.getElementById("todo");
  var item = document.createElement("li");
  var type = document.getElementById("typeF").value;
  var TD = document.getElementById("td").value;
  var TR = document.getElementById("tr").value;

  // //ALI
  if (
    (type == "ali" && TD <= 50) ||
    (type == "ali" && TD <= 20 && TR == NULL)
  ) {
    let PF = " ALI => complexidade: Baixa PF = 7";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (type == "ali" && TR >= 6 && TD >= 20) {
    let PF = "ALI => complexidade: Média PF = 10";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (type == "ali" && TR >= 2 && TD >= 51) {
    let PF = "ALI => complexidade: Alta PF = 15";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  //AIE
  if (
    (type == "aie" && TD <= 50) ||
    (type == "aie" && TD <= 20 && TR == undefined)
  ) {
    let PF = "AIE => complexidade: Baixa PF = 5";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (type == "aie" && TR >= 6 && TD >= 20) {
    let PF = "AIE => complexidade: Média PF = 7";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (type == "aie" && TR >= 2 && TD >= 51) {
    let PF = "AIE => complexidade: Alta PF = 10";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  //SE
  if (
    (type == "se" && TR <= 3 && TD <= 5) ||
    (type == "se" && TD >= 0 && TR <= 3)
  ) {
    let PF = "SE => complexidade: Baixa PF = 4";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (type == "se" && TR <= 3 && TD <= 19) {
    let PF = "SE => complexidade: Média PF = 5";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (type == "se" && TR >= 2 && TD >= 20) {
    let PF = "SE => complexidade: Alta PF = 7";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  //   CE
  if (type == "ce" && TR <= 3 && TD <= 19) {
    let PF = "CE => complexidade: Média PF = 4";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  } else if (
    (type == "ce" && TR <= 3 && TD <= 5) ||
    (type == "ce" && TD >= 0 && TR <= 3)
  ) {
    let PF = "CE => complexidade: Baixa PF = 3";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  } else if (type == "ce" && TR >= 2 && TD >= 20) {
    let PF = "CE => complexidade: Alta PF = 6";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  //EE
  if (type == "ee" && TR <= 2 && TD <= 4) {
    let PF = "EE => complexidade: Baixa PF = 3";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (type == "ee" && TR >= 3 && TD <= 4) {
    let PF = "EE => complexidade: Média PF = 4";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (type == "ee" && TR >= 2 && TD >= 16) {
    let PF = "EE => complexidade: Alta PF = 6";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  var buttons = document.createElement("div");
  buttons.classList.add("buttons");

  list.insertBefore(item, list.childNodes[0]);
}
