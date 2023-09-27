console.log("Examine-5");

const columns = document.querySelectorAll(".section");

document.addEventListener("dragstart", (e) => {
  e.target.classList.add("dragging");
});

document.addEventListener("dragend", (e) => {
  e.target.classList.remove("dragging");
});

columns.forEach((item) => {
  item.addEventListener("dragover", (e) => {
    const dragging = document.querySelector(".dragging");
    const applyAfter = getNewPosition(item, e.clientY);

    if (applyAfter) {
      applyAfter.insertAdjacentElement("afterend", dragging);
    } else {
      item.prepend(dragging);
    }
  });
});

function getNewPosition(column, posY) {
  const cards = column.querySelectorAll(".item:not(.dragging)");
  let result;

  for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.y + box.height / 2;

    if (posY >= boxCenterY) result = refer_card;
  }

  return result;
}

class TodoList {
  constructor() {
    this.todoContainer = document.getElementsByClassName("section")[0];
    this.createButton = document.getElementsByClassName("create")[0];
    this.createButton.onclick = this.addElement.bind(this);
  }

  addElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.setAttribute("draggable", "true");
    const newContent = document.createTextNode("New ToDo");
    newDiv.appendChild(newContent);
    this.todoContainer.appendChild(newDiv);
  }
}

const todoList = new TodoList();

class TodoList2 {
  constructor() {
    this.todoContainer = document.getElementsByClassName("section2")[0];
    this.createButton = document.getElementsByClassName("create2")[0];
    this.createButton.onclick = this.addElement.bind(this);
  }

  addElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.setAttribute("draggable", "true");
    const newContent = document.createTextNode("New ToDo");
    newDiv.appendChild(newContent);
    this.todoContainer.appendChild(newDiv);
  }
}

const todoList2 = new TodoList2();

class TodoList3 {
  constructor() {
    this.todoContainer = document.getElementsByClassName("section3")[0];
    this.createButton = document.getElementsByClassName("create3")[0];
    this.createButton.onclick = this.addElement.bind(this);
  }

  addElement() {
    const newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.setAttribute("draggable", "true");
    const newContent = document.createTextNode("New ToDo");
    newDiv.appendChild(newContent);
    this.todoContainer.appendChild(newDiv);
  }
}

const todoList3 = new TodoList3();
