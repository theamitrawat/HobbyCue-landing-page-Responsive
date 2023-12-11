const signButton = document.getElementById('sign-in-btn');
let menuIcon = document.querySelector(".menu-icon");
let signLinkBox = document.querySelector(".sign-link-box");
let inputBox = document.querySelector('.p-eye-box');
let password = document.getElementById('j-input-password');
let msg = document.getElementById('strength-msg');
let eye = document.getElementById('eye');
const signButtonF = document.getElementById('s-btn');
const joinButtonF = document.getElementById('j-btn');

signButton.onclick = function () {
    window.location.href = "after_login.html";
}

menuIcon.onclick = function () {
    signLinkBox.classList.toggle("active-box");
}


let signFormBox = document.querySelector('.sign-form-box');
let joinFormBox = document.querySelector('.join-form-box');

signButtonF.addEventListener('click', () => {
    joinFormBox.style.display = "none";
    signFormBox.style.display = "block";
    joinButtonF.classList.remove("active-btn")
    signButtonF.classList.add("active-btn")
});

joinButtonF.addEventListener('click', () => {
    signFormBox.style.display = "none";
    joinFormBox.style.display = "block";
    signButtonF.classList.remove("active-btn")
    joinButtonF.classList.add("active-btn")
});



function checkPasswordStrength() {
    const hasAlphabets = /[a-zA-Z]/.test(password.value);
    const hasNumbers = /[0-9]/.test(password.value);
    const hasSymbols = /[!@#$%^&*()_+]/.test(password.value);

    if (password.value.length === 0) {
        msg.innerHTML = 'Password strength';
        msg.style.color = 'inherit';
        inputBox.style.borderColor = 'inherit';
        return; // Exit the function if the password is empty
    }

    if (password.value.length < 6 || !(hasAlphabets && hasNumbers && hasSymbols)) {
        msg.innerHTML = 'Password is weak';
        msg.style.color = 'red';
        inputBox.style.borderColor = 'red';
    } else if (password.value.length >= 6 && password.value.length < 8) {
        msg.innerHTML = 'Password is less strong';
        msg.style.color = 'orange';
        inputBox.style.borderColor = 'orange';
    } else {
        msg.innerHTML = 'Password is strong';
        msg.style.color = 'green';
        inputBox.style.borderColor = 'green';
    }

    setTimeout(() => {
        msg.style.display = 'none';
    }, 4000);
}

password.addEventListener('input', checkPasswordStrength);

eye.onclick = function () {
    if (password.type === 'password') {
        password.type = 'text';
        eye.src = './Images/open-eye-icon.png';
    } else {
        password.type = 'password';
        eye.src = './Images/close-eye-icon.png';
    }
}