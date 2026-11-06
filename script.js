const welcomeButton = document.getElementById("welcomeButton");
const welcomeMessage = document.getElementById("welcomeMessage");

welcomeButton.addEventListener("click", function () {
  welcomeMessage.textContent = "Hello! Welcome to my personal profile.";
});
