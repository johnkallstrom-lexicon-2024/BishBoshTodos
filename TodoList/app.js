const input = document.querySelector('#input');
const button = document.querySelector('#button');
const output = document.querySelector('#output');

addTodo = () => {
  const value = input.value;
  if (value !== undefined && value !== '') {
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerText = value;
    output.appendChild(li);
  } else {
    console.log('enter something');
  }
};

button.addEventListener('click', addTodo);
