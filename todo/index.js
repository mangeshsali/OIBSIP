const inputBox = document.querySelector(".inputbox");
const addBtn = document.querySelector(".addBtn");
const todoList = document.querySelector(".todoList");

// let editTodo = null;

const addTodo = () => {
  const inputText = inputBox.value.trim();
  if (inputText.length <= 0) {
    alert("add todo ");
    return false;
  }

  // for edit button
  // if (addBtn.value === "Edit") {
  //   editTodo.target.parentElement.firstChild.innerHTML = inputText;
  //   addBtn.value = "ADD";
  //   inputBox.value = "";
  // } else {
  const li = document.createElement("li");
  const p = document.createElement("p");

  p.innerHTML = inputText;
  li.appendChild(p);

  todoList.appendChild(li);
  inputBox.value = "";

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Remove";
  li.appendChild(deleteBtn);

  // const editBtn = document.createElement("button");
  // editBtn.innerHTML = "Edit";
  // li.appendChild(editBtn);
  // }
  savelocalTodos(inputText);
};

const updateTodo = (event) => {
  if (event.target.innerHTML === "Remove") {
    todoList.removeChild(event.target.parentElement);
    deleteLocalTodos(event.target.parentElement);
  }
  // if (event.target.innerHTML == "Edit") {
  //   inputBox.value = event.target.parentElement.firstChild.innerHTML;
  //   inputBox.focus();
  //   addBtn.innerHTML = "Edit";
  //   editTodo = event;
  // }
};

const savelocalTodos = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
};

const getLocalTodos = () => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
    todos.forEach((todo) => {
      const li = document.createElement("li");
      const p = document.createElement("p");

      p.innerHTML = todo;
      li.appendChild(p);

      todoList.appendChild(li);
      inputBox.value = "";

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Remove";
      li.appendChild(deleteBtn);
    });
  }
};

const deleteLocalTodos = (todo) => {
  let todos = [];
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  let todoText = todo.children[0].innerHTML;
  let todoIndex = todos.indexOf(todoText);
  todos.splice(todoIndex, 1);
  localStorage.setItem("todos", JSON.stringify(todos));
};
document.addEventListener("DOMContentLoaded", getLocalTodos);
addBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);
