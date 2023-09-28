var mines_cliked = []
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
var aposta_f = 0
var BombIcon = document.getElementById('BombIcon');
// Função para ler um cookie pelo nome
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
var coins = "15.00";
var lucro = 0;
const coinsGet = document.getElementById('coins');
setInterval(() => {
  coinsGet.textContent =  getCookie('coins').replace('.',',')
}, 10);
var lucro = document.getElementById('lucros');
lucro.style.display = 'none';
var lucro_count = 0;
var buttonMode = 1;
const area = document.getElementById('area');
function addMines() {
area.innerHTML = "";
for (var i = 1; i < 6; i++) {
  area.innerHTML += `<div id="line${i}" class="line">`;
}
let minan = 0;
for (var i = 1; i < 6; i++) {
  for (var z = 1; z < 6; z++) {
    let line = document.getElementById(`line${i}`);
    minan++;
    line.innerHTML += `<div id="mine${minan}" class="mine"></div>`
    let idmine = document.getElementById(`mine${minan}`);

    
  }
}
var slots = [];
for (var i = 0; i < 25; i++) {
  let li = { m: Math.floor(Math.random() * 2) + 1, d: false }
  slots.push(li)
}
}
addMines();
function compararValoresMonetarios(valorString1, valorString2) {
  var numero1 = parseFloat(valorString1.replace('.', '.'));
  var numero2 = parseFloat(valorString2.replace('.', '.'));

  if (numero1 > numero2) {
    return true;
  } else {
    return false;
  }
}
const apostar = document.getElementById('apostar');
const input1 = document.getElementById('valorAposta');
const input2 = document.getElementById('Minas');
let apostaCount = 0; // Variável para controlar o número de apostas
apostar.addEventListener("click", () => {
  if (input1.value == "0.00" || input1.value == '0' || input1.value == '0.0' || input1.value == '0.') {
    return alertShow(true,"Insira um valor para Apostar",true,false,closeAlert,null);
  }
  if (validarStringFormato(input1.value)) {
    console.log(input1.value + "  " + input2.value)
    if(buttonMode == 1) {
    if (compararValoresMonetarios(input1.value, getCookie('coins'))) {
     alertShow(true,"Você Não tem coins o suficiente, faça uma recarga assistindo anúncios na aba de recarga",true,false,closeAlert,null);
    }else{
    removeCoins(input1.value);
    apost();
    input1.readOnly = true;
    lucro.style.display = 'block';
    aposta_f = 0;
    lucro_count = 0;
    buttonsShow(false);
    apostar.textContent = "Retirar";
    buttonMode = 2;
    BombIcon.style.display = "none";
    }
    }else{
    addCoins(parseFloat(lucro_count));
    if(lucro_count !== 0) {
      alertShow(true,`Você teve o lucro de ${lucro_count}`,true,false,closeAlert,null);
    }
    for (var z = 1; z < 26; z++) {
          let element = document.getElementById(`mine${z}`)
          element.style.fontSize = "0px"
          element.style.background = "#363636"
          element.style.color = ""
    }
    buttonsShow(true);
    input1.readOnly = false;
    apostar.textContent = "Apostar"
    buttonMode = 1;
    BombIcon.style.display = ""
    lucro.style.display = 'none';
    }
  } else {
    return alertShow(true,"VOCÊ DIGITOU O VALOR DA APOSTA NO FORMATO ERRADO, EXEMPLO DE FORMATO: 15,00",true,false,closeAlert,null);
  }
});

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
var aposta = "0.00";
function addaposta(aposta1) {
  aposta = adicionarValorString(aposta, aposta1);
}

setInterval(() => {
  aposta = input1.value;
}, 10);
var minasp = [];
var apostaRealizada = false; // Variável para controlar se uma aposta foi realizada
function apost() {
addMines();
  minasp = [];
  for (var i = 1; i < 26; i++) {
    let mn = document.getElementById(`mine${i}`);
    mn.textContent = ""
    mn.style.fontSize = "0";
  }
  let ValorAposta = input1.value;
  let minascount = input2.value;
  for (var i = 0; i < minascount; i++) {
    for (;;) {
      let rd = Math.floor(Math.random() * 25) + 1;
      if (!minasp.includes(rd)) {
        minasp.push(rd);
        break;
      }
    }
  }
  for (var i = 1; i < 26; i++) {
    let mn = document.getElementById(`mine${i}`);
    for (var z = 0; z < minascount; z++) {
      if (i == minasp[z]) {
        mn.textContent = "💣";
      } else {
        if (mn.textContent == "") {
          mn.textContent = "💎";
        }
      }
    }
  }

  for (var i = 1; i < 26; i++) {
    let mines = document.getElementById(`mine${i}`);
    let fun = () => {
      if(mines.style.fontSize !== "30px" && buttonMode !== 1) {
        
      if (mines.textContent == "💎") {
        console.log("diamante");
        mines.style.background = "rgba(0,0,0,0)";
        mines.style.fontSize = "30px"
        if(aposta_f == 0) {
        lucro_count = mutiplyNumber(parseFloat(aposta),valorMinas(minascount));
        aposta_f = lucro_count;
        }else{
          lucro_count = mutiplyNumber(parseFloat(aposta_f),valorMinas(minascount));
        aposta_f = lucro_count;
        }
      } else {
        for (var z = 1; z < 26; z++) {
          let element = document.getElementById(`mine${z}`)
          element.style.fontSize = "30px"
          if(element.textContent == "💎") {
            element.style.background = "rgba(0,0,0,0);"
            element.style.color = "rgba(0,0,0,0.755)"
          }
          if(element.textContent == "💣") {
            element.style.background = "red";
          }
        }
        lucro_count = 0;
        alertShow(true,"💣BOMBA!!! VOCÊ PERDEU",true,false,closeAlert,null);
      }
      }
    }
    mines.addEventListener("click", fun);
  }
}
function valorMinas(nbm) {
  let nb = parseFloat(nbm);
  switch (nb) {
    case 3:
      return 1.1;
      break;
    case 5:
      return 1.3;
      break;
    case 8:
      return 1.5;
      break;
    case 11:
      return 1.7;
      break;
    case 14:
      return 2.1;
      break;
    case 19:
      return 2.5;
      break;
    case 23:
      return 5;
      break;
    case 24:
      return 8;
      break;
    
  }
}
setInterval(() => {
  lucro.textContent = "Lucro: " + lucro_count;
}, 10);
function buttonsShow(nbs) {
  if(nbs) {
    input2.style.display = ''
  }else{
    input2.style.display = 'none'
  }
}