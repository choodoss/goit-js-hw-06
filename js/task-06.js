const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
    validationInput.classList.toggle("valid", validationInput.value.length === Number(validationInput.getAttribute('data-length')));
    validationInput.classList.toggle("invalid", validationInput.value.length !== Number(validationInput.getAttribute('data-length')))
})

//наскільки я розумію другий, не обовязковий параметр - колбек який і вказує методу коли прибрати або навпаки додати метод. http://xn--80adth0aefm3i.xn--j1amh/element.classlist.toggle




