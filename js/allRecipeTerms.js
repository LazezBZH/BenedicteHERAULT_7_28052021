//regroupe dans un st tous les termes d'une recette en vue de la recherche barre principale

let RecipeAllTermsSet = new Set();

function concatAllRecipeTerms() {
  recipes.forEach((recipe) => {
    let nameToConcat = normaliseForSearch(recipe.name);
    let nameToConcatArray = nameToConcat.split(" ");

    let applianceToConcat = normaliseForSearch(recipe.appliance);

    let descriptionToConcat = normaliseForSearch(recipe.description);
    let descriptionToConcatArray = descriptionToConcat.split(" ");

    let ingredientsToConcatRecipeArray = getIngredientsToConcat(recipe);
    let ingredientsToConcatArrayJoin = ingredientsToConcatRecipeArray.join(" ");
    let ingredientsToConcatArray = ingredientsToConcatArrayJoin.split(" ");

    let ustensilsToConcatRecipeArray = getUstensilsToConcat(recipe);
    let ustensilsToConcatArrayJoin = ustensilsToConcatRecipeArray.join(" ");
    let ustensilsToConcatArrayJoinNorm = normaliseForSearch(
      ustensilsToConcatArrayJoin
    );
    let ustensilsToConcatRecipeArrayNorm =
      ustensilsToConcatArrayJoinNorm.split(" ");

    let recipeAllTermsArray = descriptionToConcatArray.concat(
      nameToConcatArray,
      applianceToConcat,
      ingredientsToConcatArray,
      ustensilsToConcatRecipeArrayNorm
    );

    let recipeAllLongTermsArray = recipeAllTermsArray.filter(
      (elt) => elt.length > 2
    );
    RecipeAllTermsSet = new Set(recipeAllLongTermsArray);
    RecipeAllTermsSet = sortSet(RecipeAllTermsSet);
    console.log("TOUS LES MOTS DE:", recipe.id, recipe.name, RecipeAllTermsSet);
    return RecipeAllTermsSet;
  });
}
function getIngredientsToConcat(recipe) {
  let ingredientsToConcatArray = [];
  let ingr = recipe.ingredients;
  for (let i = 0; i < ingr.length; i++) {
    let ingredientsToConcat = ingr[i].ingredient;

    ingredientsToConcatArray.push(normaliseForSearch(ingredientsToConcat));
  }
  return ingredientsToConcatArray;
}

function getUstensilsToConcat(recipe) {
  let ustensilsToConcatArray = [];
  let ustensilsToConcat = [];
  const ust = recipe.ustensils;
  for (let i = 0; i < ust.length; i++) {
    let ustensilsToBeConcat = ust[i];
    let ustensilsSplitToConcat = ustensilsToBeConcat.split(" ");
    for (let j = 0; j < ustensilsSplitToConcat.length; j++) {
      ustensilsToConcat = ustensilsToConcat.concat(ustensilsSplitToConcat[j]);
    }
  }
  return ustensilsToConcatArray;
}
