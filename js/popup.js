const loginButton = document.querySelector('.btn');
const loginPopUp = document.querySelector('.login-popup');
const closeButton = document.querySelector('.close');

loginButton.addEventListener('click', showPopUp);
closeButton.addEventListener('click', close);

function showPopUp(evt) {
evt.preventDefault();

loginPopUp.classList.toggle('show-popup');
};

function close() {
    loginPopUp.classList.remove('show-popup');
}

loginPopUp.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('show-pop')) {
close();
    }
})