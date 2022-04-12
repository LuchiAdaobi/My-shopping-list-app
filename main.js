// Dom Selection
const inputEl = document.querySelector('.todo-input');
const buyBtn = document.querySelector('.buy-btn');
const filterOptions = document.querySelector('.filter-todos');
const todoEl = document.querySelector('.todo-list');
const clearEl = document.querySelector('.clear');

// Variables

// Classes
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle';
const LINE = 'line-through';

// Clear

// Local Storage

// Check if Todos in LS

// Add Todos in LS
function addTodos(e, todo, id, done, trash) {
  e.preventDefault();
  const todoValue = inputEl.value;

  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINED = done ? LINE : '';
  //   check if input empty
  if (todoValue === '') {
    alert('Please, add a grocery item');
  } else {
    const divEl = document.createElement('div');
    divEl.classList.add('todo');

    divEl.innerHTML = `
      <i class="far ${DONE} co" job="completed" id='${id}'></i>
      <p class="text ${LINED}">${todoValue}</p>
      
      <button class="edit-btn">
        <i class="fas fa-pencil edit" id ='${id}'></i>
      </button>
      <button class="trash-btn">
        <i class="fas fa-trash de" job="delete" id ='${id}'></i>
      </button>
      `;

    todoEl.appendChild(divEl);
    inputEl.value = '';
  }
}

// Complete Todo
function completeTodo(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE);
}
// Remove Todos from LS

// Add Todo

// Delete Todo

// Edit Todos

// Event Listens
// dynamically created content
todoEl.addEventListener('click', (e) => {
  const element = e.target;
  const elementJob = element.attributes.job.value;

  if (elementJob === 'completed') {
    completeTodo(element);
  }
  console.log(e);
});

buyBtn.addEventListener('click', addTodos);
inputEl.addEventListener('click', (e) => {
  e.preventDefault();
});
