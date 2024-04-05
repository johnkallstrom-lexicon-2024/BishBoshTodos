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
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const bish = document.querySelector('#bish').value;
  const bosh = document.querySelector('#bosh').value;
  const max = document.querySelector('#max').value;

  console.log(bish);
  console.log(bosh);
  console.log(max);
});
