// script.js
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const errorMessage = document.getElementById("error-message");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = form.username.value.trim();
    const password = form.password.value.trim();

    if (username === "" || password === "") {
      errorMessage.textContent = "Please enter both username and password.";
    } else {
      errorMessage.textContent = "";
      alert("Login successful!");
      // You can add your authentication logic here
    }
  });
});
