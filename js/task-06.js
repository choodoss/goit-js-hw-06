const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => validationInput.value.length >= 6?validationInput.classList.toggle("valid"):validationInput.classList.toggle("invalid"))
