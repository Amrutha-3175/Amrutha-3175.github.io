const cardInput = document.getElementById("cardNumber");
const pinInput = document.getElementById("pin");
const submitBtn = document.getElementById("submit");
const loginForm = document.getElementById("loginForm");
const welcomeScreen = document.getElementById("welcomeScreen");




const customers = [
  { cardNumber: "1234567890", pin: "1234", name: "John", balance: 0 },
  { car: "1234567891", pin: "2345", name: "Cathy", balance: 0 },
];
function validateInputs() {
  const card = cardInput.value.trim();
  const pin = pinInput.value.trim();
  const user = validUsers[card];

  if (user && user.pin === pin) {
    submit.disabled = false;
  } else {
    submit.disabled = true;
  }
}

cardInput.addEventListener("input", validateInputs);
pinInput.addEventListener("input", validateInputs);

submitBtn.addEventListener("click", () => {
  const card = cardInput.value.trim();
  const user = validUsers[card];

  loginForm.style.display = "none";
  welcomeScreen.style.display = "block";
  welcomeScreen.textContent = `Welcome, ${user.name}!`;
});