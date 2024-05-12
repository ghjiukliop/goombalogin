const togglePassword = document.querySelector(".toggle-password");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", function() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    togglePassword.classList.add("active");
  } else {
    passwordInput.type = "password";
    togglePassword.classList.remove("active");
  }
});