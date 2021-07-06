function getIngredientsToConcat(recipe) {
  let ingredientsToConcatArray = [];
  let ingr = recipe.ingredients;
  for (let i = 0; i < ingr.length; i++) {
    let ingredientsToConcat = normalise(ingr[i].ingredient);

    ingredientsToConcatArray.push(ingredientsToConcat);
  }
  return ingredientsToConcatArray;
}

function getUstensilsToConcat(recipe) {
  let ustensilsToConcatArray = [];
  let ust = recipe.ustensils;
  for (let i = 0; i < ust.length; i++) {
    let ustensilsToConcat = normalise(ust[i]);

    ustensilsToConcatArray.push(ustensilsToConcat);
  }

  return ustensilsToConcatArray;
}
