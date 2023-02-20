const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector("#ingredients");

ingredients.forEach(ingredient => {
  const listItem = document.createElement("li");
  listItem.textContent = ingredient;
  listItem.classList = "item";
  ingredientsEL.append(listItem);
})
console.log(ingredientsEL);

