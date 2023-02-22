function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumberEl = document.querySelector('input[type=number]');
const btnCreateEl = document.querySelector('button[data-create]');
const btnDestroyEl = document.querySelector('button[data-destroy]');
const containerBoxes = document.querySelector('#boxes');
containerBoxes.setAttribute('style', 'display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 10px;')

btnCreateEl.addEventListener('click', () => addBox());

btnDestroyEl.addEventListener('click', () => {
  destroyBoxes();
  btnCreateEl.removeEventListener('click', addBox);
});

function addBox() {

  if (inputNumberEl.value <= 0 || inputNumberEl > 100) {
    alert('Помилка! Введіть число від 1 до 100')

  } else {
    let heightWidth = 30;
    let fontSize = 6;
    const boxes = [];
    for (let i = 0; i < inputNumberEl.value; i += 1) {
      const box = document.createElement('div');
      box.setAttribute('style', `background-color: ${getRandomHexColor()}; height: ${heightWidth}px; width: ${heightWidth}px; font-size: ${fontSize}px; border-radius: 25% 10%; text-align: center;`);
      box.textContent = `${getRandomHexColor()}`;
      heightWidth += 10;
      fontSize += 1;
      boxes.push(box);
    }
    containerBoxes.append(...boxes);
  }
  inputNumberEl.value = '0';
}

function destroyBoxes() {
  containerBoxes.innerHTML = '';
}

