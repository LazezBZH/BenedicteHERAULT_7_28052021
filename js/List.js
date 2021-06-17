class List {
  constructor() {
    this.all = [];
    this.ingredients = [];
    this.ingredientsSelected = [];
    this.appliances = [];
    this.applianceSelected = [];
    this.ustensils = [];
    this.ustensilsSelected = [];
  }
  add(recipe) {
    list.all.push(recipe);
  }
  displayRecipes() {
    let html = "";

    for (let i = 0; i < this.filtered.length; i++) {
      let recipe = new Recipe(this.filtered[i]);
      html += recipe.render();
    }
    document.querySelector("main").innerHTML = html;
  }

  collectIngredients() {
    this.filtered.forEach((recipe) => {
      recipe.ingredients.forEach((ingr) => {
        this.ingredients.push(ingr.ingredient);
      });
    });
  }

  displayIngredients() {
    this.ingredients = this.ingredients.sort();
    this.ingredientsSet = new Set(this.ingredients);
    let html = "";

    this.ingredientsSet.forEach((ingr) => {
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

        this.filterByIng();
        this.displayRecipes();
        this.diplayIngredientTag();

        closeAll();
      });
    });
  }
  filterByIng() {
    this.filtered = this.filtered.filter((recipe) => {
      let toKeep = false;
      this.ingredientsSelected.forEach((objIngredient) => {
        if (recipe.hasIngredient(objIngredient.name)) {
          toKeep = true;
        }
      });

      return toKeep;
    });

    console.log(this.filtered);
  }

  diplayIngredientTag() {
    let html = "";
    for (let i = 0; i < this.ingredientsSelected.length; i++) {
      let ingSelected = this.ingredientsSelected[i];
      html += `<span class="tagIngr">${ingSelected.name}  <i class="far fa-times-circle"></i></span>`;
    }
    document.querySelector(".tagsIngr").innerHTML = html;
  }

  //appliance
  collectAppliances() {
    this.all.forEach((recipe) => {
      this.appliances.push(recipe.appliance);
    });
  }
  displayAppliances() {
    let html = "";
    this.appliances = this.appliances.sort();
    this.appliancesSet = new Set(this.appliances);
    this.appliancesSet.forEach((appl) => {
      html += `<a href="#" class="appareil-tag" id="${normaliseName(
        appl
      )}"  data-name="${appl}">${appl}</a>`;
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

        this.filterByAppl();
        this.displayRecipes();
        this.diplayApplianceTag();
        closeAll();
      });
    });
  }
  filterByAppl() {
    this.filtered = this.filtered.filter((recipe) => {
      let toKeep = false;
      this.applianceSelected.forEach((objAppliance) => {
        if (recipe.hasAppliance(objAppliance.name)) {
          toKeep = true;
        }
      });
      return toKeep;
    });

    console.log(this.filtered);
  }
  diplayApplianceTag() {
    let html = "";
    for (let i = 0; i < this.applianceSelected.length; i++) {
      let appSelected = this.applianceSelected[i];
      html += `<span class="tagAppl"> ${appSelected.name} <i class="far fa-times-circle"></i></span>`;
    }
    document.querySelector(".tagsAppl").innerHTML = html;
  }

  //ustensils
  collectUstensils() {
    this.all.forEach((recipe) => {
      recipe.ustensils.forEach((ust) => {
        this.ustensils.push(ust);
      });
    });
  }

  displayUstensils() {
    let html = "";
    this.ustensils = this.ustensils.sort();
    this.ustensilsSet = new Set(this.ustensils);
    this.ustensilsSet.forEach((ust) => {
      html += `<a href="#" class="ustensile-tag" id="${normaliseName(
        ust
      )}" data-name="${ust}">${ust}</a>`;
    });
    document.getElementById("drop-ustensiles_open").innerHTML = html;
  }
  listenForFilteringUst() {
    document.querySelectorAll(".ustensile-tag").forEach((tag) => {
      tag.addEventListener("click", (e) => {
        console.log("on a cliqué sur " + e.target.getAttribute("data-name"));
        let tagId = e.target.getAttribute("id");
        let tagName = e.target.getAttribute("data-name");
        this.ustensilsSelected.push({
          id: tagId,
          name: tagName,
        });

        console.log(this.ustensilsSelected);

        this.filterByUst();
        this.displayRecipes();
        this.displayUstensilsTag();
        closeAll();
      });
    });
  }
  filterByUst() {
    this.filtered = this.filtered.filter((recipe) => {
      let toKeep = false;
      this.ustensilsSelected.forEach((objUstensils) => {
        if (recipe.hasUstensil(objUstensils.name)) {
          toKeep = true;
        }
      });
      return toKeep;
    });

    console.log(this.filtered);
  }
  displayUstensilsTag() {
    let html = "";
    for (let i = 0; i < this.ustensilsSelected.length; i++) {
      let ustSelected = this.ustensilsSelected[i];
      html += `<span class="tagUst">${ustSelected.name} <i class="far fa-times-circle"></i></span>`;
    }
    document.querySelector(".tagsUst").innerHTML = html;
  }
}
