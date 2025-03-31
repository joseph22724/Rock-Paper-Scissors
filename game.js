
function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
        if (choice == 0) {
            console.log("Computer rock");
            return "rock"
            
        } else if (choice == 1){
            console.log("Computer paper");
            return "paper"
        } else {
            console.log("Computer scissors");
            return "scissors"
        }  
}

    const rockBtn = document.querySelector("#rock");
    rockBtn.addEventListener("click", () => {
        playRound("rock");
      });

    const paperBtn = document.querySelector("#paper");
    paperBtn.addEventListener("click", () => {
          playRound("paper");
        });

    const scissorsBtn = document.querySelector("#scissors");
    scissorsBtn.addEventListener("click", () => {
        playRound("scissors");
      });

    

    const userScore = document.querySelector("#userScore")
    const cpuScore = document.querySelector("#cpuScore")
    let humanScore = 0;
    let computerScore = 0; 

    const body = document.querySelector("#body")
    const divBtns = document.querySelector("#container")
    const result = document.createElement("div")
    const choices = document.createElement("div")
    const gameEnd = document.createElement("h3")
    const reset = document.createElement("button")

    reset.textContent = "Reset";
    reset.setAttribute("id", "resetBtn")
    body.appendChild(choices);
    body.appendChild(result);
    body.appendChild(gameEnd);

function resetGame () {
    humanScore = 0;
    computerScore = 0;
    body.removeChild(reset);
    choices.textContent = "";
    result.textContent = "";
    gameEnd.textContent = "";
    userScore.textContent = (humanScore);
    cpuScore.textContent = (computerScore);
};

reset.addEventListener("click", () => {
    resetGame();
});

function playRound(choice) {
    const humanChoice = choice;
    const computerChoice = getComputerChoice();

    if (humanScore == 5|| computerScore == 5){
        return 0;
    };

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            choices.textContent = "Computer: Scissors";
            result.textContent = "Win, rock beats scissors";
            humanScore += 1;
            userScore.textContent = (humanScore);
        } else if (computerChoice == "paper"){
            choices.textContent = "Computer: Paper";
            result.textContent = "Lose, paper beats rock";
            computerScore += 1;
            cpuScore.textContent = (computerScore);
        } else { 
            choices.textContent = "";
            result.textContent = "Tie";
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            choices.textContent = "Computer: Rock";
            result.textContent = "Win, paper beats rock";
            humanScore += 1;
            userScore.textContent = (humanScore);
        } else if (computerChoice == "scissors"){
            choices.textContent = "Computer: Scissors";
            result.textContent = "Lose, Scissors beats paper";
            computerScore += 1;
            cpuScore.textContent = (computerScore);
        } else { console.log("tie");
            choices.textContent = "";
            result.textContent = "Tie";
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            choices.textContent = "Computer: Paper";
            result.textContent = "Win, Scissors beats paper";
            humanScore += 1;
            userScore.textContent = (humanScore);
        } else if (computerChoice == "rock"){
            choices.textContent = "Computer: Rock";
            result.textContent = "Lose. rock beats scissors";
            computerScore += 1;
            cpuScore.textContent = (computerScore);
        } else { console.log("tie");
            choices.textContent = "";
            result.textContent = "Tie";
        }
    }

    if (humanScore == 5) {
        gameEnd.textContent = "You Won!"
        body.appendChild(reset);
    } else if (computerScore == 5) {
        gameEnd.textContent = "You Lost, Computer Wins!"
        body.appendChild(reset);
    }
}









