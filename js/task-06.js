const symbolsInput = document.querySelector('#validation-input');

const handlerBlurSymbolsInput = event => {
  symbolsInput.classList.add('invalid');

  if (event.currentTarget.value.length === Number(symbolsInput.dataset.length)) {
    symbolsInput.classList.replace('invalid', 'valid');
  }

  if (event.currentTarget.value.length !== Number(symbolsInput.dataset.length)) {
    symbolsInput.classList.replace('valid', 'invalid');
  }
};

symbolsInput.addEventListener('blur', handlerBlurSymbolsInput);
