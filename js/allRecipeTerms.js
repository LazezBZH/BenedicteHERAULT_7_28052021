function getIngredientsToConcat(recipe) {
  let ingredientsToConcatArray = [];
  let ingr = recipe.ingredients;
  for (let i = 0; i < ingr.length; i++) {
    let ingredientsToConcat = ingr[i].ingredient;

    ingredientsToConcatArray.push(ingredientsToConcat);
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
      ustensilsToConcatArray = ustensilsToConcat.concat(
        ustensilsSplitToConcat[j]
      );
    }
  }
  return ustensilsToConcatArray;
}
