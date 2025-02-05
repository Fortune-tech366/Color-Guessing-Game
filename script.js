const colors = ['red', 'green', 'yellow', 'blue', 'orange', 'purple'];

//Set the DOM
const color = document.querySelector(".targetColor");
const newGameButton = document.querySelector(".newGame");
const colorOptions = document.querySelectorAll(".color");
const statusDisplay = document.querySelector(".status");
const scoreDisplay = document.querySelector(".score");
let targetColor = "";
let score = 0;

function setNewTargetColor() {
  let randomNum = getRandomNum();
  targetColor = colors[randomNum];
  color.style.backgroundColor = targetColor;
  statusDisplay.textContent = "";
}

newGameButton.addEventListener("click", function () {
  setNewTargetColor();
  newGameButton.textContent = "New Game";
});

colorOptions.forEach((option, index) => {
  option.style.backgroundColor = colors[index];
  option.addEventListener("click", function () {
    let selectedColor = this.style.backgroundColor;
    if (selectedColor === targetColor) {
      statusDisplay.textContent = "Congratulations! You guessed correctly!";
      score++;
      setNewTargetColor();
    } else {
      statusDisplay.textContent = "Try again!";
    }
    scoreDisplay.textContent = `Score: ${score}`;
  });
});

function getRandomNum() {
  return Math.floor(Math.random() * colors.length);
}
