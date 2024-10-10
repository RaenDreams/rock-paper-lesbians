import { playGame } from "./functions.js";

const scores = JSON.parse(sessionStorage.getItem("scores")) || {
  Wins: 0,
  Losses: 0,
  Ties: 0,
  Kisses: 0,
};

const resetButton = document.getElementById("reset-button");

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const lesbiansButton = document.getElementById("lesbians-button");

const movesDiv = document.getElementById("moves");
const resultDiv = document.getElementById("result");
const scoresDiv = document.getElementById("scores");

const showResult = (playerMove) => {
  const theme = sessionStorage.getItem("theme");

  const { result, computerMove } = playGame(playerMove);
  scores[result] += 1;
  sessionStorage.setItem("scores", JSON.stringify(scores));

  movesDiv.style.display = "flex";
  const playerImage = movesDiv.querySelector("div:first-child img");
  const computerImage = movesDiv.querySelector("div:last-child img");
  playerImage.src = `./assets/${theme}/${playerMove}.png`;
  computerImage.src = `./assets/${theme}/${computerMove}.png`;

  resultDiv.style.display = "flex";
  let resultContentText;
  if (result === "Wins") {
    resultContentText =
      theme === "chad"
        ? "Wohiow! You won!" + String.fromCodePoint(0x1f389)
        : "You won!";
  } else if (result === "Ties") {
    resultContentText =
      theme === "chad"
        ? "This is a Phantom Tiex!" + String.fromCodePoint(0x1f91d)
        : "It's a tie!";
  } else if (result === "Kisses") {
    resultContentText =
      "Zamn, Rizzler! You get a kesbian liss!" + String.fromCodePoint(0x1f48b);
  } else {
    resultContentText =
      theme === "chad"
        ? "Womp, womp. You lost!" + String.fromCodePoint(0x1f4a9)
        : "You lost!";
  }
  resultDiv.children[1].textContent = resultContentText;

  scoresDiv.style.display = "flex";
  const scoreParas = scoresDiv.querySelectorAll("p");
  const scoresArr = Object.keys(scores);
  scoreParas.forEach(
    (el, idx) =>
      (el.textContent = `${scoresArr[idx]}: ${scores[scoresArr[idx]]}`)
  );
};

const resetGame = () => {
  for (const element in scores) {
    scores[element] = 0;
  }
  sessionStorage.setItem("scores", JSON.stringify(scores));
  movesDiv.style.display = "none";
  resultDiv.style.display = "none";
  scoresDiv.style.display = "none";
};

rockButton.addEventListener("click", () => {
  showResult("rock");
});
paperButton.addEventListener("click", () => {
  showResult("paper");
});
lesbiansButton.addEventListener("click", () => {
  showResult("lesbians");
});
resetButton.addEventListener("click", () => {
  resetGame();
});

export { resetGame };
