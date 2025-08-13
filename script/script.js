const emailInput = document.getElementById("email");
const submitButton = document.getElementById("submit");

function validEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

emailInput.addEventListener("input", () => {
  if (validEmail(emailInput.value.trim())) {
    submitButton.classList.add("active");
    submitButton.classList.remove("no-active");
  } else {
    submitButton.classList.remove("active");
    submitButton.classList.add("no-active");
  }
});