document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const correctEmail = "dhruv@gmail.com";
        const correctPassword = "123";

        if (email === correctEmail && password === correctPassword) {
            alert("Login successful!");
            // ya ha main page link ho ga
        } else {
            alert("Invalid email or password. Please try again.");
        }
    });
});