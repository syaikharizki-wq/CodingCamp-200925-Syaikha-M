const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const filterInput = document.getElementById("filter-input");
const todoList = document.getElementById("todo-list");

let todos = [];

// Saat submit form
form.addEventListener("submit", function(e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  const date = dateInput.value;

  if (task === "" || date === "") {
    alert("Please fill out both fields!");
    return;
  }

  const todo = { task, date };
  todos.push(todo);
  renderTodos();

  todoInput.value = "";
  dateInput.value = "";
});

// Fungsi untuk menampilkan todo di layar
function renderTodos() {
  todoList.innerHTML = "";

  const filterText = filterInput.value.toLowerCase();
  const filteredTodos = todos.filter(t => 
    t.task.toLowerCase().includes(filterText)
  );

  filteredTodos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.textContent = `${todo.task} (${todo.date})`;

    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
      todos.splice(index, 1);
      renderTodos();
    };

    li.appendChild(delBtn);
    todoList.appendChild(li);
  });
}

// Filter otomatis
filterInput.addEventListener("input", renderTodos);
