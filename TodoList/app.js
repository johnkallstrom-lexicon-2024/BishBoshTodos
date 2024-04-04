const input = document.querySelector('#input');
const addButton = document.querySelector('#addButton');
const deleteButton = document.querySelector('#deleteButton');
const output = document.querySelector('#output');

deleteButton.style.display = 'none';

createTodo = (value) => {
  const li = document.createElement('li');
  const input = document.createElement('input');
  const label = document.createElement('label');

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

  return li;
};

addTodo = () => {
  if (input.value !== undefined && input.value !== '') {
    const todo = createTodo(input.value);
    output.appendChild(todo);
    deleteButton.style.display = 'inline-block';
  } else {
    console.log('Invalid input');
  }
};

deleteMarkedTodos = () => {
  const todosToDelete = document.querySelectorAll(
    '#output .list-group-item-success'
  );
  if (todosToDelete.length > 0) {
    todosToDelete.forEach((t) => t.remove());
  }
};

addButton.addEventListener('click', addTodo);
deleteButton.addEventListener('click', deleteMarkedTodos);
