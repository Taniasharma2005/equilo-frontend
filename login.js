// login.js - Frontend-only login simulation
function login() {
const email = document.getElementById('email').value;
const pass = document.getElementById('password').value;

if (email && pass) {
    localStorage.setItem('user', JSON.stringify({ email }));
    alert('Login successful!');
    window.location.href = 'index.html';
} else {
    alert('Please enter email and password.');
}
}
