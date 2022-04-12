// Dom Selection
const inputEl = document.querySelector('.todo-input');
const buyBtn = document.querySelector('.buy-btn');
const filterOptions = document.querySelector('.filter-todos');
const todoEl = document.querySelector('.todo-list');
const clearEl = document.querySelector('.clear');

// Variables
const LIST = [];
const id;

// Classes
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle';
const LINE = 'line-through';

// Clear

// Local Storage

// Check if Todos in LS
const todo = localStorage.getItem('todos')

if(todo){
    LIST = json.parse('todo')
    id = LIST.length;
    
}

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
        <i class="fas fa-pencil edit" job ='edit' id ='${id}'></i>
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
// Delete Todo
function deleteTodo(element) {
  element.parentNode.remove(element.parentNode);
}
// Edit Todos
function editTodos(element) {
  const textEl = element.parentNode.parentNode.querySelector('.text');

  textEl.contentEditable = true;
  textEl.classList.toggle('text-border');

  console.log(textEl);
}
// Remove Todos from LS

// Add Todo

// Event Listens
// dynamically created content
todoEl.addEventListener('click', (e) => {
  const element = e.target;
  const elementJob = element.attributes.job.value;

  if (elementJob === 'completed') {
    completeTodo(element);
  } else if (elementJob === 'delete') {
    deleteTodo(element.parentNode);
  } else if (elementJob === 'edit') {
    editTodos(element);
  }
});

buyBtn.addEventListener('click', addTodos);
inputEl.addEventListener('click', (e) => {
  e.preventDefault();
});
