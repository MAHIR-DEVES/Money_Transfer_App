function getInputValueById(id) {
  const value = document.getElementById(id).value;
  const convartedValue = parseFloat(value);
  return convartedValue;
}

function getInerTextById(id) {
  const value = document.getElementById(id).innerText;
  const copnvartedValue = parseFloat(value);
  return copnvartedValue;
}

function setInnerTextByIdAndValue(id, value) {
  document.getElementById(id).innerText = value;
}
function hsndileToggle(id, status) {
  document.getElementById(id).style.display = status;
}
