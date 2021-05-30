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
  }
  render() {
    let ingredientHtml = "";
    for (let i = 0; i < this.ingredients.length; i++) {
      let ingr = this.ingredients[i];
      if (ingr.quantity) {
        if (ingr.unit && ingr.quantity) {
          ingredientHtml += `<div>${ingr.ingredient} : ${ingr.quantity} ${ingr.unit}</div>`;
        } else {
          ingredientHtml += `<div>${ingr.ingredient} : ${ingr.quantity}</div>`;
        }
      } else {
        ingredientHtml += `<div>${ingr.ingredient}</div>`;
      }
    }
    //affichage dans page d'accueil
    return `
       <article>
         <div class="photo"></div>
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
}
