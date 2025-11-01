let userScore = 0;
let computerScore = 0;

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie ";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win!";
    userScore++;
  } else {
    result = "Computer wins ";
    computerScore++;
  }

  document.getElementById('result').innerText =
    `You: ${userChoice} | Computer: ${computerChoice}\n${result}`;
  document.getElementById('score').innerText =
    `You: ${userScore} | Computer: ${computerScore}`;
}