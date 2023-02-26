const inputFontSizeControl = document.querySelector('#font-size-control');

const textEl = document.querySelector('#text');

textEl.style.fontSize = `${inputFontSizeControl.value}px`;

const handelChangeFontSizeControlValue = event => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
};

inputFontSizeControl.addEventListener('change', handelChangeFontSizeControlValue);
