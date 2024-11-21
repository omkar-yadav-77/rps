const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const resultMessage = document.getElementById("result-message");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const winner = determineWinner(playerChoice, computerChoice);
    displayResult(winner, playerChoice, computerChoice);
  });
});

function determineWinner(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "player";
  } else {
    return "computer";
  }
}

function displayResult(winner, playerChoice, computerChoice) {
  if (winner === "draw") {
    resultMessage.textContent = `It's a draw! You both chose ${playerChoice}.`;
  } else if (winner === "player") {
    resultMessage.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    resultMessage.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
  }
}
