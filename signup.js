function signup() {
const email = document.getElementById("signupEmail").value.trim();
const password = document.getElementById("signupPassword").value.trim();
const disability = document.getElementById("disability").value;

if (!email || !password) {
    alert("Please fill in all fields.");
    return;
}

let users = JSON.parse(localStorage.getItem("users")) || [];

const existingUser = users.find(user => user.email === email);
if (existingUser) {
    alert("User already exists. Try logging in.");
    return;
}

users.push({ email, password, disability });
localStorage.setItem("users", JSON.stringify(users));

alert("Signup successful! Now you can login.");
window.location.href = "login.html";
}
