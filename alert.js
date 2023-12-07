document.body.innerHTML += `<div id="alert"><div class="alert-box"><h2><i class="fas fa-dice"></i> BET SIMULATOR</h2><div class="line"></div><div class="conteudo"><p id="Description">test</p></div><div class="buttons-box"><button id="ok" type="submit">OK</button><button id="cancel" type="submit">CANCELAR</button></div></div></div>`;
function alertShow(mode, description, buttonOk, buttonCancel, fun1, fun2) {
  document.body.style.overflow = "hidden";
  let alert = document.getElementById("alert");
  let ok_alert = document.getElementById("ok");
  let cancel_alert = document.getElementById("cancel");
  let description_alert = document.getElementById("Description");
  if (mode) {
    alert.style.display = "flex";
    description_alert.textContent = description;
    ok_alert.style.display = "";
    cancel_alert.style.display = "";
    ok_alert.addEventListener("click", fun1);
    cancel_alert.addEventListener("click", fun2);
    if (!buttonOk) {
      ok_alert.style.display = "none";
    }
    if (!buttonCancel) {
      cancel_alert.style.display = "none";
    }
  } else {
    alert.style.display = "none";
    document.body.style.overflowY = "auto";
  }
}
const closeAlert = () => {
  alertShow(false, "teste", true, true, null, null);
};
