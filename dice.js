function alertShow(mode,description,buttonOk,buttonCancel,fun1,fun2) {
  let alert = document.getElementById('alert');
  let ok_alert = document.getElementById('ok');
  let cancel_alert = document.getElementById('cancel');
  let description_alert = document.getElementById('Description');
  if(mode) {
  alert.style.display = 'flex';
  description_alert.textContent = description;
  ok_alert.style.display = '';
  cancel_alert.style.display = '';
  ok_alert.addEventListener("click",fun1);
  cancel_alert.addEventListener("click",fun2);
  if(!buttonOk){
  ok_alert.style.display = 'none';
  }
  if(!buttonCancel){
  cancel_alert.style.display = 'none';
  }
  }else{
  alert.style.display = 'none';
  }
}
const closeAlert = () => {
  alertShow(false,"teste alerta",true,true,null,null);
};
function mutiplyNumber(numero1, numero2) {
    let resultado = numero1 * numero2;
    if (resultado % 1 > 100) {
        resultado = Math.floor(resultado) + 100;
    }
    return resultado.toFixed(2); 
}
function getCookie(name) {
  const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
  return cookieValue ? cookieValue.pop() : '';
}
// Função para definir um cookie permanente
function setPermanentCookie(name, value) {
  const expirationDate = new Date('2099-12-31'); // Uma data futura distante
  const expires = "expires=" + expirationDate.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}
if(getCookie('coins') == "") {
setPermanentCookie('coins', '15.00');
}else{
  console.log("j");
}
function addCoins(value) {
  setPermanentCookie('coins',adicionarValorString(getCookie('coins'), value))
}
function removeCoins(value) {
  setPermanentCookie('coins',removerValorString(getCookie('coins'), value))
}
function compararValoresMonetarios(valorString1, valorString2) {
  var numero1 = parseFloat(valorString1.replace('.', '.'));
  var numero2 = parseFloat(valorString2.replace('.', '.'));

  if (numero1 > numero2) {
    return true;
  } else {
    return false;
  }
}
function adicionarValorString(valorString, valorASomar) {
  var numeroOriginal = parseFloat(valorString.replace('.', '.'));

  var resultado = numeroOriginal + valorASomar;
  var resultadoFormatado = resultado.toFixed(2).replace('.', '.');
  return resultadoFormatado;
}
function removerValorString(valorString, valorARemover) {
  var numeroOriginal = parseFloat(valorString.replace('.', '.'));

  var resultado = numeroOriginal - valorARemover;
  var resultadoFormatado = resultado.toFixed(2).replace('.', '.');
  return resultadoFormatado;
}
function validarStringFormato(str) {
  var regex = /^(\d+|\d+\.\d{1,3})$/;
  return regex.test(str);
}
const coinsGet = document.getElementById('coins');
setInterval(() => {
  coinsGet.textContent =  getCookie('coins').replace('.',',')
}, 10);
//code
var diceList = [
  "one",
  "two",
  "six"
  ];
var DiceId = [];
for(i = 1; i < 6;i++) {
  DiceId.push(document.getElementById('slot' + i))
}
function spin() {
  DiceId.style.display = "none";
}