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

  //COLLECTER ET AFFICHER LES RECETTES

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

  /*   FILTRES SUR LES LISTES DANS LE DROPDOWN   */

  //INGREDIENTS

  //collecter et afficher
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

  //filtrer sur la liste des ingrédients
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

        this.appliancesAvailable = this.listAvailableAppliances();
        this.appliancesAvailable = sortSet(this.appliancesAvailable);
        this.displayAppliances(this.appliancesAvailable);

        this.ustensilsAvailable = this.listAvailableUstensils();
        this.ustensilsAvailable = sortSet(this.ustensilsAvailable);
        this.displayUstensils(this.ustensilsAvailable);

        this.listenForFilteringIng();
        this.listenForFilteringAppl();
        this.listenForFilteringUst();

        this.closeTags();
        this.disableAllSelectedTag();
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

  //réupérer les ingrédients restants dans les recettes sélectionnées afin de ne plus afficher que ceux-ci dans la liste
  listAvailableIngredients() {
    let list = new Set();
    this.filtered.forEach((recipe) => {
      recipe.ingredients.forEach((item) => {
        list.add(item.ingredient);
      });
    });
    return list;
  }

  //afficher les tags au dessus du drop
  diplayIngredientTag() {
    let html = "";
    for (let i = 0; i < this.ingredientsSelected.length; i++) {
      let ingSelected = this.ingredientsSelected[i];
      html += `<span class="tagIngr tagsSelection">${ingSelected.name}  <i class="far fa-times-circle"></i></span>`;
    }
    document.querySelector(".tagsIngr").innerHTML = html;
  }

  //APPLIANCE

  //collecter et afficher
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

  //filtrer sur la liste des appareils
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

        this.ingredientsAvailable = this.listAvailableIngredients();
        this.ingredientsAvailable = sortSet(this.ingredientsAvailable);
        this.displayIngredients(this.ingredientsAvailable);

        this.ustensilsAvailable = this.listAvailableUstensils();
        this.ustensilsAvailable = sortSet(this.ustensilsAvailable);
        this.displayUstensils(this.ustensilsAvailable);

        this.listenForFilteringAppl();
        this.listenForFilteringIng();
        this.listenForFilteringUst();

        this.closeTags();
        this.disableAllSelectedTag();
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

  //réupérer les appareils restants dans les recettes sélectionnées afin de ne plus afficher que ceux-ci dans la liste
  listAvailableAppliances() {
    let list = new Set();
    this.filtered.forEach((recipe) => {
      list.add(recipe.appliance);
    });
    return list;
  }

  //afficher les tags au dessus du drop
  diplayApplianceTag() {
    let html = "";
    for (let i = 0; i < this.applianceSelected.length; i++) {
      let appSelected = this.applianceSelected[i];
      html += `<span class="tagAppl tagsSelection"> ${appSelected.name} <i class="far fa-times-circle"></i></span>`;
    }
    document.querySelector(".tagsAppl").innerHTML = html;
  }

  //USTENSILS

  //collecter et afficher
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

  //filtrer sur la liste des ustensiles
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

        this.ingredientsAvailable = this.listAvailableIngredients();
        this.ingredientsAvailable = sortSet(this.ingredientsAvailable);
        this.displayIngredients(this.ingredientsAvailable);

        this.appliancesAvailable = this.listAvailableAppliances();
        this.appliancesAvailable = sortSet(this.appliancesAvailable);
        this.displayAppliances(this.appliancesAvailable);

        this.listenForFilteringUst();
        this.listenForFilteringIng();
        this.listenForFilteringAppl();

        this.closeTags();
        this.disableAllSelectedTag();
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

  //réupérer les ustensils restants dans les recettes sélectionnées afin de ne plus afficher que ceux-ci dans la liste
  listAvailableUstensils() {
    let list = new Set();
    this.filtered.forEach((recipe) => {
      recipe.ustensils.forEach((ust) => {
        list.add(ust);
      });
    });
    return list;
  }

  //afficher ou supprimer les tags au dessus du drop
  displayUstensilsTag() {
    let html = "";
    for (let i = 0; i < this.ustensilsSelected.length; i++) {
      let ustSelected = this.ustensilsSelected[i];
      html += `<span class="tagUst tagsSelection" data-id="${ustSelected.name}">${ustSelected.name} <i class="far fa-times-circle"></i></span>`;
    }
    document.querySelector(".tagsUst").innerHTML = html;
  }

  //supprimer tags au dessus des drops
  closeTags() {
    document.querySelectorAll(".fa-times-circle").forEach((cross) => {
      cross.addEventListener("click", (e) => {
        e.target.parentNode.style.display = "none";

        console.log(e.target.parentNode);
      });
    });
  }

  //changer l'affichage des ingrédients sélectionnés
  disableAllSelectedTag() {
    this.alltagsSelected = this.ingredientsSelected.concat(
      this.ustensilsSelected,
      this.applianceSelected
    );
    for (let i = 0; i < this.alltagsSelected.length; i++) {
      let tagIId = this.alltagsSelected[i].id;
      let tagIName = this.alltagsSelected[i].name;
      document.getElementById(tagIId).innerText = `(${tagIName})`;
      document.getElementById(tagIId).style.pointerEvents = "none";
    }
  }

  /*   BARRE DE RECHERCHE PRINCIPALE  */
}
