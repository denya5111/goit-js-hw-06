const decrementBtn = document.querySelector('button[data-action="decrement"]');

const incrementBtn = document.querySelector('button[data-action="increment"]');

const spanEl = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', handlerClickDecrement);

function handlerClickDecrement() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}

incrementBtn.addEventListener('click', handlerClickIncrement);

function handlerClickIncrement() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}
