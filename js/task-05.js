const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

const handlerInputName = event => {
  event.currentTarget.value === ''
    ? (nameOutput.textContent = 'Anonymous')
    : (nameOutput.textContent = event.currentTarget.value);
};

nameInput.addEventListener('input', handlerInputName);
