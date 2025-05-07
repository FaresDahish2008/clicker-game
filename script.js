let score = 0;

const scoreDisplay = document.getElementById("score");
const clickButton = document.getElementById("clickButton");

clickButton.addEventListener("click", () => {
  score += 1;
  scoreDisplay.textContent = score;

  // Move the button to a random position
  const maxX = window.innerWidth - 100; // Leave space so button doesn't go off screen
  const maxY = window.innerHeight - 100;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  clickButton.style.position = "absolute";
  clickButton.style.left = `${randomX}px`;
  clickButton.style.top = `${randomY}px`;
});