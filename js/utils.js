function normaliseName(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\ -\']/g, "-")
    .toLowerCase()
    .replace(/[\(-\)]/g, "");
}

function normaliseForSearch(str) {
  return str

    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[\(-\)]/g, "")
    .replace(/[^a-zA-Z ]/g, " ");
}

function sortSet(setList) {
  let list = Array.from(setList).sort();
  return new Set(list);
}
