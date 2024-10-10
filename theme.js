import { resetGame } from "./index.js";

let theme = sessionStorage.getItem("theme");
if (theme === null) {
  sessionStorage.setItem("theme", "chad");
  theme = "chad";
}

const themeButton = document.getElementById("theme-button");
const iconSpan = themeButton.querySelector("span");

const heading = document.querySelector("body h1:first-child");

const moveButtonsImages = document.querySelectorAll(".border > img");

const refreshImages = () => {
  moveButtonsImages[0].src = `./assets/${theme}/rock.png`;
  moveButtonsImages[1].src = `./assets/${theme}/paper.png`;
  moveButtonsImages[2].src = `./assets/${theme}/lesbians.png`;
};

refreshImages();

const setChadMode = () => {
  theme = "chad";
  iconSpan.textContent = String.fromCodePoint(0x1f308);
  iconSpan.setAttribute("style", "transition: 0.2s;");
  document.title = "Rock, Paper, Lesbians!";
  heading.textContent = "Rock, Paper, Lesbians!";
  heading.style.backgroundImage =
    "linear-gradient(to right, rgba(213, 45, 0, 1) 0%, rgba(255, 255, 255, 1) 56.99999999999999%, rgba(163, 2, 98, 1) 86%, rgba(163, 2, 98, 1) 100% )";
  refreshImages();
};

const setDedMode = () => {
  theme = "ded";
  iconSpan.textContent = String.fromCodePoint(0x1f922);
  iconSpan.setAttribute(
    "style",
    "transform: translateX(28px); transition: 0.2s;"
  );
  document.title = "Rock, Paper, Scissors.";
  heading.textContent = "Rock, Paper, Scissors.";
  heading.style.backgroundImage =
    "linear-gradient(to right, black, black, white, black, black, white, black, black )";
  refreshImages();
};

theme === "chad" ? setChadMode() : setDedMode();

themeButton.addEventListener("click", () => {
  if (theme === "ded") {
    setChadMode();
    sessionStorage.setItem("theme", "chad");
  } else {
    setDedMode();
    sessionStorage.setItem("theme", "ded");
  }
  resetGame();
});
