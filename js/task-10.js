function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputAmount = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const divParrentEl = document.querySelector('#boxes');

createBtn.addEventListener('click', handlerClickCreateBtn);

function handlerClickCreateBtn() {
  createBoxes(inputAmount.value);
}

function createBoxes(amount) {
  let sizeDiv = 30;
  for (let index = 1; index <= amount; index += 1) {
    divParrentEl.insertAdjacentHTML(
      'beforeend',
      `<div style="background-color: ${getRandomHexColor()}; width: ${sizeDiv}px; height: ${sizeDiv}px"></div>`
    );
    sizeDiv += 10;
  }
}
destroyBtn.addEventListener('click', handlerClickdestroyBtn);

function handlerClickdestroyBtn() {
  divParrentEl.innerHTML = '';
}
