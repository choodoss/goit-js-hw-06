const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEL = document.querySelector("#ingredients");

const listItem = ingredients.map(ingredient => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList = "item";
  return item;
});

ingredientsEL.append(...listItem);

console.log(ingredientsEL);
