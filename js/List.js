class List {
  constructor() {
    this.all = [];
  }
  add(recipe) {
    this.all.push(recipe);
  }
  displayRecipes(recipes) {
    let html = "";

    for (let i = 0; i < recipes.length; i++) {
      let recipe = new Recipe(recipes[i]);
      html += recipe.render();
    }
    document.querySelector("main").innerHTML = html;
  }
}
