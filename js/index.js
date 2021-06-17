console.log(recipes);

let list = new List();
for (let i = 0; i < recipes.length; i++) {
  let recipe = new Recipe(recipes[i]);
  list.add(recipe);
}

list.filtered = list.all;

list.displayRecipes();
list.collectIngredients();
list.displayIngredients();
list.listenForFilteringIng();
list.collectAppliances();
list.displayAppliances();
list.listenForFilteringAppl();
list.collectUstensils();
list.displayUstensils();
list.listenForFilteringUst();
