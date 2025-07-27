function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else if (randomNum === 2) {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Enter Your Choice");
  return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  console.log(`You: ${humanChoice}`);
  console.log(`Computer: ${computerChoice}`);
  if (humanChoice === computerChoice) {
    console.log("It is a Tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You Win!");
    humanScore++;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("The Computer Wins!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("The Computer Wins!");
    computerScore++;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You Win!");
    humanScore++;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("The Computer Wins!");
    computerScore++;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You Win!");
    humanScore++;
  }

  console.log(`Your Score: ${humanScore} | Computer Score: ${computerScore}`);
  console.log(``);
}

function playGame() {
  for(let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }
  if(humanScore > computerScore) {
    console.log("You win The Game!!!")
  } else if(humanScore < computerScore) {
    console.log("Computer wins The Game!!!")
  } else {
    console.log("The Game Ended With a Tie!")
  }
}

playGame()