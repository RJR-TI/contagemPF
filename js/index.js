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
    (type == "ali" && TD <= 50 && TR<=5) ||
    (type == "ali" && TD >=20 && TD<=50 && TR == 1)
  ) {
    let PF = " ALI => complexidade: Baixa PF = 7";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if ( (type == "ali" && TD >= 51 && TR == 1) || 
  (type == "ali" && TD >=20 && TD<=50 && TR >=2 && TR<=5) || 
  (type == "ali" && TD <= 19 && TR >= 6) ) {
    let PF = "ALI => complexidade: Média PF = 10";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if((type == "ali" && TD >=20 && TD<=50 && TR >=6) || 
  (type == "ali" && TD >=51  && TR >=2 && TR<=5) || 
  (type == "ali" && TD >=51 && TR >=6))
   {
    let PF = "ALI => complexidade: Alta PF = 15";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  //AIE
  if (
    (type == "aie" && TD <= 50 && TR<=5) ||
    (type == "aie" && TD >=20 && TD<=50 && TR == 1)
  ) {
    let PF = "AIE => complexidade: Baixa PF = 5";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if ((type == "aie" && TD >= 51 && TR == 1) || 
  (type == "aie" && TD >=20 && TD<=50 && TR >=2 && TR<=5) || 
  (type == "aie" && TD <= 19 && TR >= 6)) {
    let PF = "AIE => complexidade: Média PF = 7";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (((type == "aie" && TD >=20 && TD<=50 && TR >=6) || 
  (type == "aie" && TD >=51  && TR >=2 && TR<=5) || 
  (type == "aie" && TD >=51 && TR >=6))) {
    let PF = "AIE => complexidade: Alta PF = 10";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  //SE
  if (
    (type == "se" && TD <= 19 && TD <= 1) ||
    (type == "se" && TD >= 1 && TD<=5 && TR>=2 && TR <= 3)
  ) {
    let PF = "SE => complexidade: Baixa PF = 4";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if (
    (type == "se" && TD >= 20 && TD <= 1) ||
    (type == "se" && TD >= 6 && TD<=19 && TR>=2 && TR <= 3) ||
    (type == "se" && TD >= 1 && TD<=5 && TR>=4)
  ) {
    let PF = "SE => complexidade: Média PF = 5";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if ((type == "se" && TD >= 20 && TR >=2 && TR<=3) || 
  (type == "se" && TD >= 6 && TD<=19 && TR>=4) ||
  (type == "se" && TD >= 20 && TR>=4)
  ) {
    let PF = "SE => complexidade: Alta PF = 7";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  //   CE
  if (
    (type == "ce" && TD <= 19 && TD <= 1) ||
    (type == "ce" && TD >= 1 && TD<=5 && TR>=2 && TR <= 3)
  ) {
    let PF = "CE => complexidade: Média PF = 4";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  } else if (
    (type == "ce" && TD >= 20 && TD <= 1) ||
    (type == "ce" && TD >= 6 && TD<=19 && TR>=2 && TR <= 3) ||
    (type == "ce" && TD >= 1 && TD<=5 && TR>=4)
  ) {
    let PF = "CE => complexidade: Baixa PF = 3";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  } else if ((type == "ce" && TD >= 20 && TR >=2 && TR<=3) || 
  (type == "ce" && TD >= 6 && TD<=19 && TR>=4) ||
  (type == "ce" && TD >= 20 && TR>=4)
  ) {
    let PF = "CE => complexidade: Alta PF = 6";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  //EE
  if ((type == "ee" && TD <= 15 && TR<=1) || 
  (type == "ee" && TD <= 4 && TR ==2)){
    let PF = "EE => complexidade: Baixa PF = 3";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if ((type == "ee" && TD >= 16 && TD <= 1) ||
  (type == "ee" && TD>=5 && TD <= 15 && TR == 2)||
  (type == "ee" && TD <= 4 && TR>=3)) {
    let PF = "EE => complexidade: Média PF = 4";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  if ((type == "ee" && TR == 2 && TD >= 16) ||
  (type == "ee" &&  TD>=5 && TD <= 15 && TR>=3) || 
  (type == "ee" && TD >= 16 && TR>=3)) {
    let PF = "EE => complexidade: Alta PF = 6";
    item.innerText = `Função: ${text} resultado: ${PF}`;
  }

  var buttons = document.createElement("div");
  buttons.classList.add("buttons");

  list.insertBefore(item, list.childNodes[0]);
}
