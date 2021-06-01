let dropIngrBtn = document.querySelector(".drop-ingredients");

dropIngrBtn.addEventListener("click", openDropIngr);

function openDropIngr() {
  document.getElementById("drop-ing_open").style.display = "flex";
  document.getElementById("drop-app_open").style.display = "none";
  document.getElementById("drop-ust_open").style.display = "none";
}

let dropAppBtn = document.querySelector(".drop-appareil");

dropAppBtn.addEventListener("click", openDropApp);

function openDropApp() {
  document.getElementById("drop-app_open").style.display = "flex";
  document.getElementById("drop-ing_open").style.display = "none";
  document.getElementById("drop-ust_open").style.display = "none";
}

let dropUstBtn = document.querySelector(".drop-ustensiles");

dropUstBtn.addEventListener("click", openDropUst);

function openDropUst() {
  document.getElementById("drop-ust_open").style.display = "flex";
  document.getElementById("drop-ing_open").style.display = "none";
  document.getElementById("drop-app_open").style.display = "none";
}
