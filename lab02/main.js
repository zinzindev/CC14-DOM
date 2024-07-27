let h1 = document.querySelector('h1');
let btnRed = document.querySelector('.btnRed');
let btnRemoveRed = document.querySelector('.btnRemoveRed');
let btnToggleRed = document.querySelector('.btnToggleRed');

btnRed.onclick = function () {
	h1.classList.add('red');
};
btnRemoveRed.onclick = function () {
	h1.classList.remove('red');
};
btnToggleRed.onclick = function () {
	h1.classList.toggle('red');
};
