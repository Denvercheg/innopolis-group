let loginButton = document.querySelector('.btn');
let loginPopUp = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopUp);

function showPopUp(evt) {
evt.preventDefault();

loginPopUp.classList.toggle('show-popup');
};