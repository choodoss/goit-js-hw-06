const inputName = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

inputName.addEventListener("input", () => nameOutput.innerText = inputName.value? inputName.value:"Anonymous")
