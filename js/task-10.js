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
const allEllements =[];
  let i = 0;
  let heightWidth = 30;
  let fontSize = 6;

  function addBox() {
  if (i < inputNumberEl.value) {
    const box = document.createElement('div');
    box.setAttribute('style', `background-color: ${getRandomHexColor()}; height: ${heightWidth}px; width: ${heightWidth}px; font-size: ${fontSize}px; border-radius: 25% 10%; text-align: center;`);
    box.textContent = `${getRandomHexColor()}`;
    allEllements.push(box);

    i += 1;
    heightWidth += 10;
    fontSize +=1;
    addBox();
  } else {
    inputNumberEl.value = '';
    containerBoxes.append(...allEllements);
    allEllements.splice(0, allEllements.length);
  }
}

function destroyBoxes() {
  i = 0;
  heightWidth = 30;
  containerBoxes.innerHTML = '';
}
