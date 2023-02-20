const loginFormEl = document.querySelector(".login-form");
console.log(loginFormEl.querySelector('input[name = email]'));


loginFormEl.addEventListener("submit", (event) => {
event.preventDefault();
const inputEmailEl = loginFormEl.querySelector('input[name = email]');
const inputPassEl = loginFormEl.querySelector('input[name = password]');
const inputPassElLength = inputPassEl.value.trim().length;
const inputEmailElLength = inputEmailEl.value.trim().length;

if(inputPassElLength === 0 || inputEmailElLength === 0 ) {
    return alert("Всі поля мають бути заповненими!");
} else {
    const elements = {
        email: inputEmailEl.value,
        password: inputPassEl.value,
    }
    loginFormEl.reset();
    console.log(elements);
}
});
