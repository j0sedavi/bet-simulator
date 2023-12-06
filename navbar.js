const options = document.getElementById("options");
const ul = document.getElementById("ul");
ul.innerHTML += "<h5 id='close'>X</h5>";
options.style.height = "0";
const closeX = document.getElementById("close");
const icon = document.getElementById("icon");
const title = document.querySelector(".title-box").querySelector("h2");
var open = false;
title.addEventListener("click", () => {
  window.location.href = "index.html";
});
icon.addEventListener("click", () => {
  if (!open) {
    options.style.height = "100vh";
    icon.style.display = "none";
    open = true;
  }
});
closeX.addEventListener("click", () => {
  if (open) {
    options.style.height = "0";
    icon.style.display = "flex";
    open = false;
  }
});
