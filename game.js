
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

    const body = document.querySelector("#body")
    const result = document.createElement("div");
    body.appendChild(result);



function playRound(choice) {
    const humanChoice = choice;
    const computerChoice = getComputerChoice();

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("Win, rock beats scissors");
            result.textContent = "Win, rock beats scissors";
            return humanScore += 1;
        } else if (computerChoice == "paper"){
            console.log("Lose, paper beats rock");
            result.textContent = "Lose, paper beats rock";
            return computerScore += 1;
        } else { console.log("tie");
            result.textContent = "tie";
        }
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Win, paper beats rock");
            result.textContent = "Win, paper beats rock";
            return humanScore += 1;
        } else if (computerChoice == "scissors"){
            console.log("Lose, Scissors beats paper");
            result.textContent = "Lose, Scissors beats paper";
            return computerScore += 1;
        } else { console.log("tie");
            result.textContent = "tie";
        }
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("Win, Scissors beats paper");
            result.textContent = "Win, Scissors beats paper";
            return humanScore += 1;
        } else if (computerChoice == "rock"){
            console.log("Lose. rock beats scissors");
            result.textContent = "Lose. rock beats scissors";
            return computerScore += 1;
        } else { console.log("tie");
            result.textContent = "Tie";
        }
    }
}









