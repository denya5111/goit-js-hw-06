const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

const handlerInputName = event => {
  const inputValue = event.currentTarget.value;

  nameOutput.textContent = inputValue === '' ? 'Anonymous' : inputValue;
};

nameInput.addEventListener('input', handlerInputName);
