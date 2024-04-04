const input = document.querySelector('#input');
const button = document.querySelector('#button');
const output = document.querySelector('#output');

mark = (e) => {
  console.log(e.target.classList.toggle('text-decoration-line-through'));
};

createTodo = (value) => {
  const anchor = document.createElement('a');
  anchor.setAttribute('href', '#');
  anchor.classList.add('list-group-item');
  anchor.classList.add('list-group-item-action');
  anchor.innerText = value;
  anchor.addEventListener('click', mark);
  return anchor;
};

addTodo = () => {
  if (input.value !== undefined && input.value !== '') {
    const todo = createTodo(input.value);
    output.appendChild(todo);
  } else {
    console.log('Invalid input');
  }
};

button.addEventListener('click', addTodo);
