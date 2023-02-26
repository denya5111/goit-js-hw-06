function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const changeColorBtn = document.querySelector('.change-color');

const bgdColor = document.querySelector('.color');

const handlerClickChangeColorBtn = event => {
  document.body.style.backgroundColor = getRandomHexColor();
  bgdColor.textContent = getRandomHexColor();
};

changeColorBtn.addEventListener('click', handlerClickChangeColorBtn);
