const gameForm = document.querySelector(".randomNumberGame");
const generatedRange = gameForm.querySelector(".generate");
const guessValue = gameForm.querySelector(".guess");
const result = gameForm.querySelector(".result");
const matchResult = gameForm.querySelector(".matchResult");
const choice = gameForm.querySelector("#choice");
const randomValue = gameForm.querySelector("#random");

const HIDDEN_CLASSNAME = "hidden";
const RANGE_KEY = "range";

function gameSetting() {
  localStorage.setItem(RANGE_KEY, generatedRange.value);
  const savedRangeValue = localStorage.getItem(RANGE_KEY);
  guessValue.setAttribute("max", savedRangeValue);
  result.classList.add(HIDDEN_CLASSNAME);
  matchResult.classList.add(HIDDEN_CLASSNAME);
}

const MACHINE_KEY = "machine";
const GUESS_KEY = "guess";

function gameStart(event) {
  event.preventDefault();
  const generateNumber = parseInt(generatedRange.value, 10);
  const guessNumber = parseInt(guessValue.value, 10);
  const machineValue = Math.ceil(Math.random() * generateNumber);
  localStorage.setItem(MACHINE_KEY, machineValue);
  localStorage.setItem(GUESS_KEY, guessNumber);
  gameResult();
}

function gameResult() {
  const savedMachineValue = localStorage.getItem(MACHINE_KEY);
  const savedGuessValue = localStorage.getItem(GUESS_KEY);
  result.classList.remove(HIDDEN_CLASSNAME);
  matchResult.classList.remove(HIDDEN_CLASSNAME);
  choice.innerHTML = `${savedGuessValue}`;
  randomValue.innerHTML = `${savedMachineValue}`;
  if (savedGuessValue === savedMachineValue) {
    matchResult.innerHTML = `<b>You won!</b>`;
  } else {
    matchResult.innerHTML = `<b>You lost!</b>`;
  }
}
generatedRange.addEventListener("input", gameSetting);
gameForm.addEventListener("submit", gameStart);
