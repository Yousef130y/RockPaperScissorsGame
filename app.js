// Get elements
const loadingScreen = document.getElementById("loading-screen");
const playerSetup = document.getElementById("player-setup");
const startGameBtn = document.getElementById("start-game");
const playerNameInput = document.getElementById("player-name");
const mainContent = document.getElementById("main-content");
const welcomeText = document.getElementById("welcome-text");
const messageBox = document.getElementById("message-box"); // Message box for errors

// Show player setup after loading
window.addEventListener("load", () => {
  // Make the loading screen disappear after 3 seconds
  setTimeout(() => {
    loadingScreen.style.opacity = "0";  // Fade out
    loadingScreen.style.visibility = "hidden";  // Hide it completely
    playerSetup.classList.remove("hidden");
  }, 3000);  // 3 seconds delay for loading screen
});

// Start button logic
startGameBtn.addEventListener("click", () => {
  const name = playerNameInput.value.trim();
  const selectedAvatar = document.querySelector('input[name="avatar"]:checked');

  if (!name) {
    showMessage("Please enter your name.");
    return;
  }

  playerSetup.classList.add("hidden");
  mainContent.classList.remove("hidden");
  welcomeText.innerHTML = `Welcome <strong>${name}</strong>!`;
});

// Show inline error message
function showMessage(msg) {
  messageBox.innerText = msg;
  messageBox.style.display = "block";  // Display the message box
  setTimeout(() => {
    messageBox.style.display = "none";  // Hide after 3 seconds
  }, 3000);
}
