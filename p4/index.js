const cardInput = document.getElementById("cardNumber");
const pinInput = document.getElementById("pin");
const submitBtn = document.getElementById("submitBtn");
const loginForm = document.getElementById("loginForm");
const welcomeScreen = document.getElementById("welcomeScreen");

// Sample user database
const validUsers = {
  "1234567890": { pin: "1234", name: "Amrutha" },
  "9876543210": { pin: "5678", name: "Vinutha" }
};

function validateInputs() {
  const card = cardInput.value.trim();
  const pin = pinInput.value.trim();
  const user = validUsers[card];

  if (user && user.pin === pin) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
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
