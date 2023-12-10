document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.querySelector('#login-btn');
    const popup = document.querySelector('#popup');

    loginButton.addEventListener('click', function () {
        popup.style.display = 'flex';
    });
});

function closePopup() {
    document.querySelector('#popup').style.display = 'none';
}