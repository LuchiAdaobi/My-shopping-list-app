// Dom Selection
const inputEl = document.querySelector('.grocery-input');
const buyBtn = document.querySelector('.buy-btn');
const filterOptions = document.querySelector('.filter-groceries');
const groceryEl = document.querySelector('.grocery-list');
const clearEl = document.querySelector('.clear');

// Classes
const CHECK = 'fa-check-circle';
const UNCHECK = 'fa-circle';
const LINE = 'line-through';

// Clear

// Local Storage

// Variables
let LIST = [];
let id = 0;

// Get LS
const data = localStorage.getItem('Grocery');

// Add grocerys to LS
if (data) {
  LIST = JSON.parse(data);
  id = LIST.length;
  loadList(LIST);
} else {
  LIST = [];
  id = 0;
}

// Load list from LS to UI
function loadList(array) {
  array.forEach((item) => {
    addGroceries(item.name, item.id, item.done, item.trash);
  });
}

// Add grocery
function addGroceries(grocery, id, done, trash) {
  //   e.preventDefault();
  //   const groceryValue = inputEl.value;

  if (trash) {
    return;
  }

  const DONE = done ? CHECK : UNCHECK;
  const LINED = done ? LINE : '';

  const divEl = document.createElement('div');
  divEl.classList.add('grocery');

  divEl.innerHTML = `
      <i class="far ${DONE} co" job="completed" id='${id}'></i>
      <p class="text ${LINED}">${grocery}</p>
      
      <button class="edit-btn" job='edit'>
        <i class="fas fa-pencil edit" job='edit' id ='${id}'></i>
      </button>
      <button class="trash-btn" id = '${id}'>
        <i class="fas fa-trash de" job="delete"></i>
      </button>
      `;

  groceryEl.appendChild(divEl);
  // inputEl.value = '';
}

// Complete grocery
function completeGrocery(element) {
  element.classList.toggle(CHECK);
  element.classList.toggle(UNCHECK);
  element.parentNode.querySelector('.text').classList.toggle(LINE);

  LIST[element.id].done = !LIST[element.id].done;
  localStorage.setItem('Grocery', JSON.stringify(LIST));
}

//  grocery
function deleteGrocery(element) {
  element.parentNode.remove(element.parentNode);
  LIST[element.id].trash = true;
}

// Edit grocerys
function editGrocerys(element) {
  const textEl = element.parentNode.parentNode.querySelector('.text');

  textEl.contentEditable = true;
  textEl.classList.toggle('text-border');

  localStorage.setItem('Grocery', JSON.stringify(LIST));
}

// Filter Grocery
// function filterGrocery(e) {}

// Event Listens
// dynamically created content
groceryEl.addEventListener('click', (e) => {
  const element = e.target;
  const elementJob = element.attributes.job.value;

  if (elementJob === 'completed') {
    completeGrocery(element);
  } else if (elementJob === 'delete') {
    deleteGrocery(element.parentNode);
  } else if (elementJob === 'edit') {
    editGrocerys(element);
  }

  // Update LS
  localStorage.setItem('Grocery', JSON.stringify(LIST));
});

// prevent form from auto submitting
document.querySelector('.grocery-input-area').addEventListener('click', (e) => {
  e.preventDefault();
});

// populate grocery container and push to LS
buyBtn.addEventListener('click', () => {
  const grocery = inputEl.value;

  //   check if input is empty
  if (grocery === '') {
    alert('Please, add a grocery item');
  } else {
    addGroceries(grocery, id, false, false);
    LIST.push({
      name: grocery,
      id,
      done: false,
      trash: false,
    });

    // update LS
    localStorage.setItem('Grocery', JSON.stringify(LIST));

    // increment id
    id += 1;
  }
  inputEl.value = '';
});

// filterOptions.addEventListener('input', filterGrocery);
