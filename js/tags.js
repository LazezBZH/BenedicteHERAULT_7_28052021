/*let allIngredients = new Set();

recipes.forEach((recipe) => {
  recipe.ingredients.forEach((ingr) => {
    allIngredients.add(ingr.ingredient);
  });
});

console.log(allIngredients);

function displayIngredients() {
  let html = "";

  allIngredients.forEach((ingr) => {
    html += `<a href="#" class="ingredient-tag" id="${normaliseName(
      ingr
    )}">${ingr}</a>`;
  });
  document.getElementById("drop-ingredients_open").innerHTML = html;
}

//*/

let allAppliances = new Set();

recipes.forEach((recipe) => {
  allAppliances.add(recipe.appliance);
});

console.log(allAppliances);

function displayAppliances() {
  let html = "";
  allAppliances.forEach((appl) => {
    html += `<a href="#" class="appareil-tag" id="${normaliseName(
      appl
    )}">${appl}</a>`;
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
    html += `<a href="#" class="ustensile-tag" id="${normaliseName(
      ust
    )}">${ust}</a>`;
  });
  document.getElementById("drop-ustensiles_open").innerHTML = html;
}

function normaliseName(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\ -\']/g, "-")
    .toLowerCase()
    .replace(/[\(-\)]/g, "");
}
