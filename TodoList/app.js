const input = document.querySelector('#input');
const addButton = document.querySelector('#addButton');
const deleteButton = document.querySelector('#deleteButton');
const allCheckbox = document.querySelector('#allCheck');
const output = document.querySelector('#output');

createTodo = (value) => {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');
  const span = document.createElement('span');
  span.innerText = new Date().toLocaleString();
  span.classList.add('float-end');

  li.classList.add('list-group-item');
  label.innerText = value;
  label.classList.add('form-check-label');

  input.setAttribute('type', 'checkbox');
  input.classList.add('form-check-input');
  input.classList.add('me-2');
  input.addEventListener('change', function () {
    if (this.checked) {
      label.classList.add('text-decoration-line-through');
      li.classList.add('list-group-item-success');
    } else {
      label.classList.remove('text-decoration-line-through');
      li.classList.remove('list-group-item-success');
    }
  });

  li.appendChild(input);
  li.appendChild(label);
  li.appendChild(span);

  return li;
};

addTodo = () => {
  if (input.value !== undefined && input.value !== '') {
    const todo = createTodo(input.value);
    output.appendChild(todo);
  }
};

deleteMarkedTodos = () => {
  const todosToDelete = document.querySelectorAll(
    '#output .list-group-item-success'
  );
  if (todosToDelete.length > 0) {
    todosToDelete.forEach((t) => t.remove());
    allCheckbox.checked = false;
  }
};

markAll = (e) => {
  const listItems = document.querySelectorAll('#output li');
  const checkboxes = document.querySelectorAll('#output .form-check-input');
  const labels = document.querySelectorAll('#output .form-check-label');

  if (e.target.checked) {
    listItems.forEach((li) => li.classList.add('list-group-item-success'));
    checkboxes.forEach((c) => (c.checked = true));
    labels.forEach((l) => l.classList.add('text-decoration-line-through'));
  } else {
    listItems.forEach((li) => li.classList.remove('list-group-item-success'));
    checkboxes.forEach((c) => (c.checked = false));
    labels.forEach((l) => l.classList.remove('text-decoration-line-through'));
  }
};

addButton.addEventListener('click', addTodo);
deleteButton.addEventListener('click', deleteMarkedTodos);
allCheckbox.addEventListener('change', markAll);
