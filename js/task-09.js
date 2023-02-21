function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const bodyEl = document.querySelector("body");
const btnSetColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color")

btnSetColor.addEventListener('click', () => {
  const colorNow = getRandomHexColor();

  bodyEl.setAttribute("style", `background-color: ${colorNow}`);
  
  textColor.textContent = `${colorNow}`; 

//не звертайте - це експеремент)
const colorName = document.querySelector(".color--en");
const colorNameId = colorNow.split("").slice(1).join("");

fetch(`https://www.thecolorapi.com/id?hex=${colorNameId}`)
.then(response => response.json())
.then(data => {
  colorName.textContent = data.name.value;
})
.catch(error => {
  console.error(error);
  colorName.textContent = "Невідомий колір";
});
})