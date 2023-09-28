const options = document.getElementById('options');
const ul = document.getElementById('ul');
const icon = document.getElementById('icon');
options.style.display = 'none';
ul.style.display = 'none';
icon.addEventListener("click", () => {
  if (options.style.display == 'none') {
    options.style.display = 'block'
    options.style.animation = 'op 1s'
    setTimeout(() => {
      ul.style.display = 'block'
    }, 100);
  } else {
    options.style.animation = 'op2 1s'
    setTimeout(() => {
      options.style.display = 'none'
      ul.style.display = 'none'
    }, 1000);
    setTimeout(() => {
      ul.style.display = 'none'
    }, 650);
  }
});