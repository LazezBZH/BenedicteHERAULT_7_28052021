console.log(recipes);

let list = new List();
for (let i = 0; i < recipes.length; i++) {
  let recipe = new Recipe(recipes[i]);
  list.add(recipe);
}

list.filtered = list.all;

list.displayRecipes();
list.collectIngredients();
list.displayIngredients(list.ingredients);
list.listenForFilteringIng();
list.collectAppliances();
list.displayAppliances(list.appliances);
list.listenForFilteringAppl();
list.collectUstensils();
list.displayUstensils(list.ustensils);
list.listenForFilteringUst();
list.listenForFilteringAll();
list.listenForFilteringInputIngr();
list.listenForFilteringInputApp();
list.listenForFilteringInputUst();

//changer texte input principal pour responsive

function changePlacholder() {
  var placeholder = document.getElementById("search-all");
  if ("matchMedia" in window) {
    if (window.matchMedia("(max-width:480px)").matches) {
      placeholder.placeholder = "Rechercher dans toute la recette";
    } else {
      placeholder.placeholder =
        "Rechercher un ingrédient, appareil, ustensile ou une recette";
    }
  }
}

window.addEventListener("resize", changePlacholder, true);
