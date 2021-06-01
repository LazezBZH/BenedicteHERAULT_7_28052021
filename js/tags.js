let allIngredients = new Set();

recipes.forEach((recipe) => {
  recipe.ingredients.forEach((ingr) => {
    allIngredients.add(ingr.ingredient);
  });
});

console.log(allIngredients);

function displayIngredients() {
  let html = "";
  allIngredients.forEach((ingr) => {
    html += `<div class="ingredient-tag" id="${ingr}">${ingr}</div>`;
  });
  document.getElementById("drop-ingredients_open").innerHTML = html;
}

//

let allAppliances = new Set();

recipes.forEach((recipe) => {
  allAppliances.add(recipe.appliance);
});

console.log(allAppliances);

function displayAppliances() {
  let html = "";
  allAppliances.forEach((appl) => {
    html += `<div class="appareil-tag" id="${appl}">${appl}</div>`;
  });
  document.getElementById("drop-appareil_open").innerHTML = html;
}

//

let allUstensils = new Set();

recipes.forEach((recipe) => {
  recipe.ustensils.forEach((ust) => {
    allUstensils.add(ust);
  });
});

console.log(allUstensils);

function displayUstensils() {
  let html = "";
  allUstensils.forEach((ust) => {
    html += `<div class="ustensile-tag" id="${ust}">${ust}</div>`;
  });
  document.getElementById("drop-ustensiles_open").innerHTML = html;
}
