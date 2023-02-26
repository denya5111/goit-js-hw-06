function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)

    .toString(16)

    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('.change-color');

const bgdColor = document.querySelector('.color');

const handlerClickChangeColorBtn = event => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;

  bgdColor.textContent = color;
};

changeColorBtn.addEventListener('click', handlerClickChangeColorBtn);
