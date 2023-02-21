const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
    validationInput.classList.toggle("valid", validationInput.value.length === 6);
    validationInput.classList.toggle("invalid", validationInput.value.length !== 6)
})


