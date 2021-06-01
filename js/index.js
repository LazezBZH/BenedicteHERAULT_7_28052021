console.log(recipes);

let list = new List();
for (let i = 0; i < recipes.length; i++) {
  let recipe = new Recipe(recipes[i]);
  list.add(recipe);
}

list.displayRecipes(list.all);
displayIngredients();
displayAppliances();
displayUstensils();
