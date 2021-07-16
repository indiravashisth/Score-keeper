const p1Button = document.querySelector("#p1Button");
const p2Button = document.querySelector("#p2Button");
const p1Display = document.querySelector("#player1-score");
const p2Display = document.querySelector("#player2-score");
const reset = document.querySelector("#reset");
const targetScore = document.querySelector("#targetScore");

let winningScore = targetScore;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

targetScore.addEventListener("change", function () {
  winningScore = parseInt(this.value);
  Reset();
});

p1Button.addEventListener("click", function () {
  if (!isGameOver) {
    p1Score += 1;
    p1Display.textContent = p1Score;
    if (p1Score == winningScore) {
      isGameOver = true;
      p1Display.classList.add("winner");
      p2Display.classList.add("loser");
    }
  }
});
p2Button.addEventListener("click", function () {
  if (!isGameOver) {
    p2Score += 1;
    p2Display.textContent = p2Score;
    if (p2Score == winningScore) {
      isGameOver = true;
      p2Display.classList.add("winner");
      p1Display.classList.add("loser");
    }
  }
});

reset.addEventListener("click", Reset);
function Reset() {
  p1Score = 0;
  p2Score = 0;
  isGameOver = false;
  p1Display.textContent = p1Score;
  p2Display.textContent = p1Score;
  p1Display.classList.remove("winner", "loser");
  p2Display.classList.remove("winner", "loser");
}
