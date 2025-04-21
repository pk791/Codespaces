const todoBoard = document.getElementById("todo-board");
const addTaskBtn = document.getElementById("add-task-btn");

function attachDragEvents(target) {
  target.addEventListener("dragstart", () => {
    target.classList.add("flying");
  });

  target.addEventListener("dragend", () => {
    target.classList.remove("flying");
  });
}

addTaskBtn.addEventListener("click", () => {
  const input = prompt("What is the task");
  if(!input)return;
  
  const taskCard = document.createElement("p");
  taskCard.classList.add("item");
  taskCard.setAttribute("draggable", true);
  taskCard.innerText = input;
  attachDragEvents(taskCard);
  todoBoard.appendChild(taskCard);
});

const allBoards = document.querySelectorAll(".board");
const allItems = document.querySelectorAll(".items");

allItems.forEach((item) => {
  attachDragEvents(item);
});

allBoards.forEach((board) => {
  board.addEventListener("dragover", () => {
    const flyingItem = document.querySelector(".flying");
    board.appendChild(flyingItem);
  });
});
