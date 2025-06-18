let circle = document.getElementById("circle");
let timeDisplay = document.getElementById("time");
let scoreDisplay = document.getElementById("score");
let score = 0;
let timeLeft = 30;

function moveCircle() {
  let x = Math.random() * (window.innerWidth - 60);
  let y = Math.random() * (window.innerHeight - 160);
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
}

circle.addEventListener("click", () => {
  score++;
  scoreDisplay.textContent = score;
  moveCircle();
});

let gameInterval = setInterval(() => {
  timeLeft--;
  timeDisplay.textContent = timeLeft;
  if (timeLeft === 0) {
    clearInterval(gameInterval);
    circle.style.display = "none";
    alert(`Game Over! Your score: ${score}`);
  }
}, 1000);

moveCircle();
