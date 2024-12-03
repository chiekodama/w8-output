document.addEventListener('DOMContentLoaded', function() {
    const savedEmail = window.localStorage.getItem('email');
    const savedPassword = window.localStorage.getItem('password');

    if (savedEmail) {
        document.getElementById('email').value = savedEmail;
    }

    if (savedPassword) {
        document.getElementById('password').value = savedPassword;
    }
});

const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const keyEmail = 'email';
    const valEmail = document.getElementById('email').value;
    window.localStorage.setItem(keyEmail, valEmail);

    const keyPass = 'password';
    const valPass = document.getElementById('password').value;
    window.localStorage.setItem(keyPass, valPass);

    alert('Saved to localStorage!');
});
