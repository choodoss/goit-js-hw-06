const categoriesEl = document.querySelector("#categories");
const itemOfCategoriesEl = categoriesEl.querySelectorAll(".item");

console.log(`Number of categories: ${itemOfCategoriesEl.length}`);// Number of categories: 3

itemOfCategoriesEl.forEach(element => {
    console.log(`Category: ${element.querySelector("h2").textContent}`); 
    console.log(`Elements: ${element.querySelectorAll("li").length}`)
});
// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5








