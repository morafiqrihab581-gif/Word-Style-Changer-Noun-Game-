const circle = document.getElementById("circle");
const letterSpan = document.getElementById("letter");

// your words
const words = [
  "Rihab",
  "senorita",
  "Rihab M",
  "Rihab Mor",
  "DIVA",
  "Queen"
];

let currentWord = getRandomWord();
letterSpan.textContent = currentWord;

// 🎲 random word
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// 🎨 random style per word
function applyStyle() {

  const styles = [
    { bg: "pink", font: "bold", transform: "uppercase" },
    { bg: "purple", font: "italic", transform: "capitalize" },
    { bg: "blue", font: "bold", transform: "lowercase" },
    { bg: "gold", font: "normal", transform: "uppercase" },
    { bg: "red", font: "bold", transform: "capitalize" },
    { bg: "green", font: "italic", transform: "uppercase" }
  ];

  const style = styles[Math.floor(Math.random() * styles.length)];

  circle.style.backgroundColor = style.bg;
  circle.style.borderColor = style.bg;

  letterSpan.style.fontWeight = style.font;
  letterSpan.style.fontStyle = style.font === "italic" ? "italic" : "normal";

  letterSpan.style.textTransform = style.transform;
}

// 🔁 change word + style
function changeWord() {
  currentWord = getRandomWord();
  letterSpan.textContent = currentWord;
  applyStyle();
}

// init
applyStyle();

document.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    changeWord();
    return;
  }

  // any key press changes word
  changeWord();

});