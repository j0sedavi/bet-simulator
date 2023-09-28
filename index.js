var clicked = [
  document.getElementById('mines'),
  document.getElementById('dice'),
  document.getElementById('crash'),
  ];
clicked[0].addEventListener("click", () => {
  window.location = "mines.html";
});
clicked[1].addEventListener("click", () => {
  window.location = "dice.html";
});
clicked[2].addEventListener("click", () => {
  window.location = "crash.html";
});
  