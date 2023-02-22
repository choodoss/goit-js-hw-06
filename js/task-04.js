const btnDecrementEl = document.querySelector('button[data-action="decrement"]');
const btnIncrementEl = document.querySelector('button[data-action="increment"]');
const counterValue = document.querySelector("#value");

counterValue.innerHTML = 0;// виправив, додав 0, тепере все буде працювати))

btnDecrementEl.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
})

btnIncrementEl.addEventListener("click", () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
})

// Згідно заувежень ментора (код перевірив, все працює):
// let number = 0
// btnDecrementEl.addEventListener("click", () => {
    
//     counterValue.textContent = number -=1;
// })

// btnIncrementEl.addEventListener("click", () => {
//     counterValue.textContent = number +=1;
// })
