class Recipe {
  constructor(data) {
    this.appliance = data.appliance;
    this.description = data.description;
    this.ingredients = data.ingredients;
    this.ingredient = data.ingredient;
    this.quantity = data.quantity;
    this.name = data.name;
    this.serving = data.serving;
    this.time = data.time;
    this.ustensils = data.ustensils;
    this.id = data.id;
    this.terms = new Set();

    this.collectTerms();
  }

  hasIngredient(ingredient) {
    let exists = false;
    this.ingredients.forEach((ing) => {
      if (ing.ingredient === ingredient) {
        exists = true;
      }
    });
    return exists;
  }

  hasAppliance(appl) {
    let exists = false;

    if (this.appliance === appl) {
      exists = true;
    }
    return exists;
  }

  hasUstensil(ust) {
    let exists = false;
    this.ustensils.forEach((ustensil) => {
      if (ustensil === ust) {
        exists = true;
      }
    });
    return exists;
  }

  render() {
    let ingredientHtml = "";

    this.ingredients.forEach((ingr) => {
      if (ingr.quantity) {
        if (ingr.unit && ingr.quantity) {
          ingredientHtml += `<div><span class="ingredient" data-id="${ingr.ingredient}">${ingr.ingredient}<span> : ${ingr.quantity} ${ingr.unit}</div>`;
        } else {
          ingredientHtml += `<div><span class="ingredient" data-id="${ingr.ingredient}">${ingr.ingredient}<span> : ${ingr.quantity}</div>`;
        }
      } else {
        ingredientHtml += `<div><span class="ingredient" data-id="${ingr.ingredient}">${ingr.ingredient}<span></div>`;
      }
    });

    return `
       <article>
         <div class="photo"><img src="images/${this.id}.jpg"/></div>
         <div class="article-all">
            <div class="title">
                 <div class="title-txt">${this.name}</div>
                <div class="title-time"><i class="far fa-clock"></i> ${this.time}</div>
            </div>
             <div class="details">
                <div class="details-ing">${ingredientHtml}</div>
                <div class="details-txt">${this.description}</div>
            </div>
         </div>
       </article>`;
  }

  //regroupe dans un set tous les termes utiles d'une recette en vue de la recherche barre principale
  collectTerms() {
    let recipe = this;

    let nameToConcat = recipe.name;
    let nameToConcatArray = nameToConcat.split(" ");

    let applianceToConcat = recipe.appliance;

    let descriptionToConcat = recipe.description;
    let descriptionToConcatArray = descriptionToConcat.split(" ");

    let ingredientsToConcatRecipeArray = getIngredientsToConcat(recipe);
    let ingredientsToConcatArrayJoin = ingredientsToConcatRecipeArray.join(" ");
    let ingredientsToConcatArray = ingredientsToConcatArrayJoin.split(" ");

    let ustensilsToConcatRecipeArray = getUstensilsToConcat(recipe);
    let ustensilsToConcatArrayJoin = ustensilsToConcatRecipeArray.join(" ");
    let ustensilsToConcatArray = ustensilsToConcatArrayJoin.split(" ");

    let recipeAllTermsArray = descriptionToConcatArray.concat(
      nameToConcatArray,
      applianceToConcat,
      ingredientsToConcatArray,
      ustensilsToConcatArray
    );
    let recipeAllTermsFilter = recipeAllTermsArray.filter((elt) => {
      if (stopWords.includes(elt)) {
        return false;
      }
      return true;
    });
    let recipeAllTermsJoin = recipeAllTermsFilter.join();
    let recipeAllTermsJoinNorm = normaliseForSearch(recipeAllTermsJoin);
    let recipeAllTermsJoinNormArray = recipeAllTermsJoinNorm.split(" ");

    this.terms = new Set(
      recipeAllTermsJoinNormArray.filter((elt) => {
        if (elt.length <= 2) {
          return false;
        }
        return true;
      })
    );
    this.terms = sortSet(this.terms);
    //console.log("TOUS LES MOTS DE:", recipe.id, recipe.name, this.terms);
  }
}
