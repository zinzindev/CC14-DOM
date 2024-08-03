const form = document.querySelector('form');
const inpName = document.querySelector('#name');
const inpPassword = document.querySelector('#password');
const inpConfirm = document.querySelector('#confirm');
// const h1 = document.querySelector('h1');

form.onsubmit = function (event) {
	// console.log(event);
	event.preventDefault();
	// Validation (not send empty form)
	if (inpName.value === '' || inpPassword.value === '' || inpConfirm.value === '') {
		alert('Please complete all Input');
	} else {
		// form full fill
		alert('OK to Send Submitted data');
	}
};

inpName.onchange = function (e) {
	// console.log(e.target.value);
	// validation
	// ต้องไม่ตำ่กว่า 4 ตัวอักษร
	if (inpName.value.length <= 4) {
		alert('Name must be more than 4');
		inpName.focus();
	}
};

// form.onclick = function (e) {
// 	console.log(e);
// 	e.target.style.background = 'red';
// };

// h1.onclick = function (event) {
// 	console.log(event.target);
// 	event.target.innerHTML = 'CC14';
// };
