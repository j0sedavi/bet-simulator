function adicionarValorString(valorString, valorASomar) {
  var numeroOriginal = parseFloat(valorString.replace(".", "."));

  var resultado = numeroOriginal + valorASomar;
  var resultadoFormatado = resultado.toFixed(2).replace(".", ".");
  return resultadoFormatado;
}
function removerValorString(valorString, valorARemover) {
  var numeroOriginal = parseFloat(valorString.replace(".", "."));

  var resultado = numeroOriginal - valorARemover;
  var resultadoFormatado = resultado.toFixed(2).replace(".", ".");
  return resultadoFormatado;
}
function validarStringFormato(str) {
  var regex = /^(\d+|\d+\.\d{1,3})$/;
  return regex.test(str);
}
function getCookie(name) {
  const cookieValue = document.cookie.match(
    "(^|;)\\s*" + name + "\\s*=\\s*([^;]+)"
  );
  return cookieValue ? cookieValue.pop() : "";
}
function setPermanentCookie(name, value) {
  const expirationDate = new Date("2099-12-31"); // Uma data futura distante
  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
if (getCookie("coins") == "") {
  setPermanentCookie("coins", "15.00");
} else {
  console.log("j");
}
function addCoins(value) {
  setPermanentCookie("coins", adicionarValorString(getCookie("coins"), value));
}
function removeCoins(value) {
  setPermanentCookie("coins", removerValorString(getCookie("coins"), value));
}
const coinsGet = document.getElementById("coins");
setInterval(() => {
  coinsGet.textContent = getCookie("coins").replace(".", ",");
}, 10);
