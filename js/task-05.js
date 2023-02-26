const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

const handlerInputName = event => {
  const inputValue = event.currentTarget.value;

  inputValue === ''
    ? (nameOutput.textContent = 'Anonymous')
    : (nameOutput.textContent = inputValue);
};

nameInput.addEventListener('input', handlerInputName);
