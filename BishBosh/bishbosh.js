// First implementation
// for (number = 1; number <= 100; number++) {
//   if (number % 3 === 0 && number % 4 === 0) {
//     console.log('Bish-Bosh');
//   } else if (number % 3 === 0) {
//     console.log('Bish');
//   } else if (number % 4 === 0) {
//     console.log('Bosh');
//   } else {
//     console.log(number);
//   }
// }

const form = document.querySelector('#form');
const resetBtn = document.querySelector('#reset');
resetBtn.style.display = 'none';

function calculate(bish, bosh, max) {
  const output = document.querySelector('#output');
  const p = document.createElement('p');
  output.appendChild(p);

  for (number = 1; number <= max; number++) {
    if (number % bish === 0 && number % bosh === 0) {
      p.innerHTML += 'Bish-Bosh, ';
    } else if (number % bish === 0) {
      p.innerHTML += 'Bish, ';
    } else if (number % bosh === 0) {
      p.innerHTML += 'Bosh, ';
    } else {
      p.innerHTML += `${number}, `;
    }
  }

  resetBtn.style.display = 'inline-block';
}

function reset() {
  output.innerHTML = '';

  document.querySelector('#bish').value = 0;
  document.querySelector('#bosh').value = 0;
  document.querySelector('#max').value = 0;

  resetBtn.style.display = 'none';
}

function submit(e) {
  e.preventDefault();

  const bish = Number(document.querySelector('#bish').value);
  const bosh = Number(document.querySelector('#bosh').value);
  const max = Number(document.querySelector('#max').value);

  calculate(bish, bosh, max);
}

resetBtn.addEventListener('click', reset);
form.addEventListener('submit', (e) => submit(e));
