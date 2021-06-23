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

  displayIngredients(ingredients) {
    ingredients = sortSet(ingredients);

    let html = "";

    ingredients.forEach((ingr) => {
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
        this.ingredientsAvailable = this.listAvailableIngredients();
        this.ingredientsAvailable = sortSet(this.ingredientsAvailable);
        this.displayIngredients(this.ingredientsAvailable);
        this.listenForFilteringIng();
        document.getElementById(tagId).innerText = `(${tagName})`;
        document.getElementById(tagId).style.pointerEvents = "none";
        this.closeTags();
        closeAll();
      });
    });
  }
  filterByIng() {
    this.filtered = this.filtered.filter((recipe) => {
      let count = 0;

      this.ingredientsSelected.forEach((objIngredient) => {
        if (recipe.hasIngredient(objIngredient.name)) {
          count++;
        }
      });
      if (count == this.ingredientsSelected.length) {
        return true;
      }
      return false;
    });

    console.log(this.filtered);
  }

  listAvailableIngredients() {
    let list = new Set();
    this.filtered.forEach((recipe) => {
      recipe.ingredients.forEach((item) => {
        list.add(item.ingredient);
      });
    });
    return list;
  }

  diplayIngredientTag() {
    let html = "";
    for (let i = 0; i < this.ingredientsSelected.length; i++) {
      let ingSelected = this.ingredientsSelected[i];
      html += `<span class="tagIngr tagsSelection">${ingSelected.name}  <i class="far fa-times-circle"></i></span>`;
    }
    document.querySelector(".tagsIngr").innerHTML = html;
  }

  //appliance
  collectAppliances() {
    this.filtered.forEach((recipe) => {
      this.appliances.push(recipe.appliance);
    });
  }
  displayAppliances(appliances) {
    appliances = sortSet(appliances);
    let html = "";

    appliances.forEach((appl) => {
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
        this.appliancesAvailable = this.listAvailableAppliances();
        this.appliancesAvailable = sortSet(this.appliancesAvailable);
        this.displayAppliances(this.appliancesAvailable);
        this.listenForFilteringAppl();
        document.getElementById(tagId).innerText = `(${tagName})`;
        document.getElementById(tagId).style.pointerEvents = "none";
        this.closeTags();
        closeAll();
      });
    });
  }
  filterByAppl() {
    this.filtered = this.filtered.filter((recipe) => {
      let count = 0;
      this.applianceSelected.forEach((objAppliance) => {
        if (recipe.hasAppliance(objAppliance.name)) {
          count++;
        }
      });
      if (count == this.applianceSelected.length) {
        return true;
      }
      return false;
    });

    console.log(this.filtered);
  }

  listAvailableAppliances() {
    let list = new Set();
    this.filtered.forEach((recipe) => {
      list.add(recipe.appliance);
    });
    return list;
  }

  diplayApplianceTag() {
    let html = "";
    for (let i = 0; i < this.applianceSelected.length; i++) {
      let appSelected = this.applianceSelected[i];
      html += `<span class="tagAppl tagsSelection"> ${appSelected.name} <i class="far fa-times-circle"></i></span>`;
    }
    document.querySelector(".tagsAppl").innerHTML = html;
  }

  //ustensils
  collectUstensils() {
    this.filtered.forEach((recipe) => {
      recipe.ustensils.forEach((ust) => {
        this.ustensils.push(ust);
      });
    });
  }

  displayUstensils(ustensils) {
    ustensils = sortSet(ustensils);
    let html = "";

    ustensils.forEach((ust) => {
      html += `<a href="#" class="ustensile-tag" id="${normaliseName(
        ust
      )}b" data-name="${ust}">${ust}</a>`;
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
        this.ustensilsAvailable = this.listAvailableUstensils();
        this.ustensilsAvailable = sortSet(this.ustensilsAvailable);

        this.displayUstensils(this.ustensilsAvailable);

        this.listenForFilteringUst();
        document.getElementById(tagId).innerText = `(${tagName})`;
        document.getElementById(tagId).style.pointerEvents = "none";
        this.closeTags();
        closeAll();
      });
    });
  }
  filterByUst() {
    this.filtered = this.filtered.filter((recipe) => {
      let count = 0;
      this.ustensilsSelected.forEach((objUstensils) => {
        if (recipe.hasUstensil(objUstensils.name)) {
          count++;
        }
      });
      if (count == this.ustensilsSelected.length) {
        return true;
      }
      return false;
    });

    console.log(this.filtered);
  }

  listAvailableUstensils() {
    let list = new Set();
    this.filtered.forEach((recipe) => {
      recipe.ustensils.forEach((ust) => {
        list.add(ust);
      });
    });
    return list;
  }

  displayUstensilsTag() {
    let html = "";
    for (let i = 0; i < this.ustensilsSelected.length; i++) {
      let ustSelected = this.ustensilsSelected[i];
      html += `<a class="tagUst tagsSelection" data-id="${ustSelected.name}">${ustSelected.name} <i class="far fa-times-circle"></i></a>`;
    }
    document.querySelector(".tagsUst").innerHTML = html;
  }
  closeTags() {
    document.querySelectorAll(".fa-times-circle").forEach((cross) => {
      cross.addEventListener("click", (e) => {
        e.target.parentNode.style.display = "none";

        console.log(e.target.parentNode);
      });
    });
  }
}
