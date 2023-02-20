const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

btnDecrementEl.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
})

btnIncrementEl.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
})
