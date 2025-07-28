let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");
let div = document.querySelector(".result");
let choice = document.createElement("p");
let scores = document.createElement("p");
let roundWiner = document.createElement("p");
let gameWiner = document.createElement("p");

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(humanChoice, computerChoice) {
  choice.textContent = `You: ${humanChoice} | Computer: ${computerChoice}`;
  div.appendChild(choice);

  if (humanChoice === computerChoice) {
    roundWiner.textContent = "It is a Tie!";
    div.appendChild(roundWiner);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    roundWiner.textContent = "You Win!";
    div.appendChild(roundWiner);
    humanScore++;
  } else {
    roundWiner.textContent = "Computer Wins!";
    div.appendChild(roundWiner);
    computerScore++;
  }
  scores.textContent = `Your Score: ${humanScore} | Computer Score: ${computerScore}`;
  div.appendChild(scores);

  if (humanScore === 5) {
    gameWiner.textContent = "Game Over. You Win!!!";
    div.appendChild(gameWiner);
    buttons.forEach((e) => {
      e.disabled = true;
    });
  } else if (computerScore === 5) {
    gameWiner.textContent = "Game Over. Computer Wins!!!";
    div.appendChild(gameWiner);
    buttons.forEach((e) => {
      e.disabled = true;
    });
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.className, getComputerChoice());
  });
});