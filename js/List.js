class List {
  constructor() {
    this.all = [];
    this.activeIng = [];
    this.ingredients = new Set();
    this.ingredientsSelected = [];
    this.appliances = new Set();
    this.applianceSelected = [];
  }
  add(recipe) {
    this.all.push(recipe);
  }
  displayRecipes() {
    let html = "";

    for (let i = 0; i < recipes.length; i++) {
      let recipe = new Recipe(recipes[i]);
      html += recipe.render();
    }
    document.querySelector("main").innerHTML = html;
  }

  collectIngredients() {
    this.all.forEach((recipe) => {
      recipe.ingredients.forEach((ingr) => {
        this.ingredients.add(ingr.ingredient);
      });
    });
  }

  displayIngredients() {
    let html = "";

    this.ingredients.forEach((ingr) => {
      html += `<a href="#" class="ingredient-tag" id="${normaliseName(
        ingr
      )}" data-name="${ingr}">${ingr}</a>`;
    });
    document.getElementById("drop-ingredients_open").innerHTML = html;
  }

  listenForFilteringIng() {
    document.querySelectorAll(".ingredient-tag").forEach((tag) => {
      tag.addEventListener("click", (e) => {
        console.log("on a cliqué sur " + e.target.getAttribute("data-name"));
        let tagId = e.target.getAttribute("id");
        let tagName = e.target.getAttribute("data-name");
        this.ingredientsSelected.push({
          id: tagId,
          name: tagName,
        });

        console.log(this.ingredientsSelected);
        this.filtered = this.all;
        this.filterByTag();
      });
    });
  }
  filterByTag() {
    this.all.forEach((recipe) => {
      let toBeRemove = recipe.ingredients.find(
        (objIngredient) =>
          !this.ingredientsSelected.includes(objIngredient.ingredient)
      );

      if (toBeRemove) {
        let index = recipe.ingredients.findIndex(
          (objIngredient) =>
            !this.ingredientsSelected.includes(objIngredient.ingredient)
        );
        this.filtered.slice(index, 1);
      }
    });

    console.log(this.filtered);
  }

  //appliance
  collectAppliances() {
    this.all.forEach((recipe) => {
      this.appliances.add(recipe.appliance);
    });
  }
  displayAppliances() {
    let html = "";
    this.appliances.forEach((appl) => {
      html += `<a href="#" class="appareil-tag" id="${normaliseName(
        appl
      )}" " data-name="${appl}">${appl}</a>`;
    });
    document.getElementById("drop-appareil_open").innerHTML = html;
  }

  listenForFilteringAppl() {
    document.querySelectorAll(".appareil-tag").forEach((tag) => {
      tag.addEventListener("click", (e) => {
        console.log("on a cliqué sur " + e.target.getAttribute("data-name"));
        let tagId = e.target.getAttribute("id");
        let tagName = e.target.getAttribute("data-name");
        this.applianceSelected.push({
          id: tagId,
          name: tagName,
        });

        console.log(this.applianceSelected);
        this.filtered = this.all;
        this.filterByAppl();
      });
    });
  }
  filterByAppl() {
    this.all.forEach((recipe) => {
      if (this.applianceSelected.includes(recipe.appliance)) {
        this.filtered.push(this.recipe);
      }
    });

    console.log(this.filtered);
  }
}
