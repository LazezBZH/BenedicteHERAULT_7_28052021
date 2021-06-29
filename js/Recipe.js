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
    let stopWords = [
      "abord",
      "afin",
      "ainsi",
      "allaient",
      "allo",
      "allô",
      "allons",
      "après",
      "assez",
      "attendu",
      "aucun",
      "aucune",
      "aujourd",
      "aujourd'hui",
      "auquel",
      "aura",
      "auront",
      "aussi",
      "autre",
      "autres",
      "aux",
      "auxquelles",
      "auxquels",
      "avaient",
      "avais",
      "avait",
      "avant",
      "avec",
      "avoir",
      "ayant",
      "bah",
      "beaucoup",
      "bien",
      "bigre",
      "boum",
      "bravo",
      "brrr",
      "ça",
      "car",
      "ceci",
      "cela",
      "celle",
      "celle-ci",
      "celle-là",
      "celles",
      "celles-ci",
      "celles-là",
      "celui",
      "celui-ci",
      "celui-là",
      "cent",
      "cependant",
      "certain",
      "certaine",
      "certaines",
      "certains",
      "certes",
      "ces",
      "cet",
      "cette",
      "ceux",
      "ceux-ci",
      "ceux-là",
      "chacun",
      "chaque",
      "cher",
      "chère",
      "chères",
      "chers",
      "chez",
      "chiche",
      "chut",
      "cinq",
      "cinquantaine",
      "cinquante",
      "cinquantième",
      "cinquième",
      "clac",
      "clic",
      "combien",
      "comme",
      "comment",
      "compris",
      "concernant",
      "contre",
      "couic",
      "crac",
      "dans",
      "debout",
      "dedans",
      "dehors",
      "delà",
      "depuis",
      "derrière",
      "des",
      "dès",
      "désormais",
      "desquelles",
      "desquels",
      "dessous",
      "dessus",
      "deux",
      "deuxième",
      "deuxièmement",
      "devant",
      "devers",
      "devra",
      "différent",
      "différente",
      "différentes",
      "différents",
      "dire",
      "divers",
      "diverse",
      "diverses",
      "dix",
      "dix-huit",
      "dixième",
      "dix-neuf",
      "dix-sept",
      "doit",
      "doivent",
      "donc",
      "dont",
      "douze",
      "douzième",
      "dring",
      "duquel",
      "durant",
      "effet",
      "elle",
      "elle-même",
      "elles",
      "elles-mêmes",
      "encore",
      "entre",
      "envers",
      "environ",
      "est",
      "etant",
      "étaient",
      "étais",
      "était",
      "étant",
      "etc",
      "été",
      "etre",
      "être",
      "euh",
      "eux",
      "eux-mêmes",
      "excepté",
      "façon",
      "fais",
      "faisaient",
      "faisant",
      "fait",
      "feront",
      "flac",
      "floc",
      "font",
      "gens",
      "hein",
      "hélas",
      "hem",
      "hep",
      "holà",
      "hop",
      "hormis",
      "hors",
      "hou",
      "houp",
      "hue",
      "hui",
      "huit",
      "huitième",
      "hum",
      "hurrah",
      "ils",
      "importe",
      "jusqu",
      "jusque",
      "laquelle",
      "las",
      "lequel",
      "les",
      "lès",
      "lesquelles",
      "lesquels",
      "leur",
      "leurs",
      "longtemps",
      "lorsque",
      "lui",
      "lui-même",
      "maint",
      "mais",
      "malgré",
      "même",
      "mêmes",
      "merci",
      "mes",
      "mien",
      "mienne",
      "miennes",
      "miens",
      "mille",
      "mince",
      "moi",
      "moi-même",
      "moins",
      "mon",
      "moyennant",
      "néanmoins",
      "neuf",
      "neuvième",
      "nombreuses",
      "nombreux",
      "non",
      "nos",
      "notre",
      "nôtre",
      "nôtres",
      "nous",
      "nous-mêmes",
      "nul",
      "ohé",
      "olé",
      "ollé",
      "ont",
      "onze",
      "onzième",
      "ore",
      "ouf",
      "ouias",
      "oust",
      "ouste",
      "outre",
      "paf",
      "pan",
      "par",
      "parmi",
      "partant",
      "particulier",
      "particulière",
      "particulièrement",
      "pas",
      "passé",
      "pendant",
      "personne",
      "peu",
      "peut",
      "peuvent",
      "peux",
      "pff",
      "pfft",
      "pfut",
      "pif",
      "plein",
      "plouf",
      "plus",
      "plusieurs",
      "plutôt",
      "pouah",
      "pour",
      "pourquoi",
      "premier",
      "première",
      "premièrement",
      "près",
      "proche",
      "psitt",
      "puisque",
      "quand",
      "quant",
      "quanta",
      "quant-à-soi",
      "quarante",
      "quatorze",
      "quatre",
      "quatre-vingt",
      "quatrième",
      "quatrièmement",
      "que",
      "quel",
      "quelconque",
      "quelle",
      "quelles",
      "quelque",
      "quelques",
      "quelqu'un",
      "quels",
      "qui",
      "quiconque",
      "quinze",
      "quoi",
      "quoique",
      "revoici",
      "revoilà",
      "rien",
      "sacrebleu",
      "sans",
      "sapristi",
      "sauf",
      "seize",
      "selon",
      "sept",
      "septième",
      "sera",
      "seront",
      "ses",
      "sien",
      "sienne",
      "siennes",
      "siens",
      "sinon",
      "six",
      "sixième",
      "soi",
      "soi-même",
      "soit",
      "soixante",
      "son",
      "sont",
      "sous",
      "stop",
      "suis",
      "suivant",
      "sur",
      "surtout",
      "tac",
      "tant",
      "tel",
      "telle",
      "tellement",
      "telles",
      "tels",
      "tenant",
      "tes",
      "tic",
      "tien",
      "tienne",
      "tiennes",
      "tiens",
      "toc",
      "toi",
      "toi-même",
      "ton",
      "touchant",
      "toujours",
      "tous",
      "tout",
      "toute",
      "toutes",
      "treize",
      "trente",
      "très",
      "trois",
      "troisième",
      "troisièmement",
      "trop",
      "tsoin",
      "tsouin",
      "une",
      "unes",
      "uns",
      "vais",
      "vas",
      "vers",
      "via",
      "vif",
      "vifs",
      "vingt",
      "vivat",
      "vive",
      "vives",
      "vlan",
      "voici",
      "voilà",
      "vont",
      "vos",
      "votre",
      "vôtre",
      "vôtres",
      "vous",
      "vous-mêmes",
      "zut",
      "alors",
      "aucuns",
      "bon",
      "devrait",
      "dos",
      "droite",
      "début",
      "essai",
      "faites",
      "fois",
      "force",
      "haut",
      "ici",
      "juste",
      "maintenant",
      "mine",
      "mot",
      "nommés",
      "nouveaux",
      "parce",
      "parole",
      "personnes",
      "pièce",
      "plupart",
      "seulement",
      "soyez",
      "sujet",
      "tandis",
      "valeur",
      "voie",
      "voient",
      "état",
      "étions",
    ];

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
    console.log("TOUS LES MOTS DE:", recipe.id, recipe.name, this.terms);
  }
}
