const generateComputerMove = () => {
  let computerMove;
  const randInt = Math.random();
  if (randInt < 1 / 3) {
    computerMove = "rock";
  } else if (randInt >= 1 / 3 && randInt < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "lesbians";
  }
  return computerMove;
};

const playGame = (playerMove) => {
  const theme = sessionStorage.getItem("theme");
  const computerMove = generateComputerMove();
  let result;
  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Ties";
    } else if (computerMove === "paper") {
      result = "Losses";
    } else {
      result = "Wins";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "Wins";
    } else if (computerMove === "paper") {
      result = "Ties";
    } else {
      result = "Losses";
    }
  } else if (playerMove === "lesbians") {
    if (computerMove === "rock") {
      result = "Losses";
    } else if (computerMove === "paper") {
      result = "Wins";
    } else {
      result = theme === "chad" ? "Kisses" : "Ties";
    }
  }
  return { result, computerMove };
};

export { playGame };
