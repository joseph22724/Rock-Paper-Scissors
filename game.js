
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

function getHumanChoice () {
    let input = prompt("Pick a hand (Rock, Paper, Scissors)");
    let choice = input.toLowerCase();
    console.log("Human " + choice);
    return choice; 
}

function playRound() {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    if (humanChoice == "rock") {
        if (computerChoice == "scissors") {
            console.log("Win, rock beats scissors");
            return humanScore += 1;
        } else if (computerChoice == "paper"){
            console.log("Lose, paper beats rock");
            return computerScore += 1;
        } else { console.log("tie");}
    }

    else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("Win, paper beats rock");
            return humanScore += 1;
        } else if (computerChoice == "scissors"){
            console.log("Lose, Scissors beats paper");
            return computerScore += 1;
        } else { console.log("tie");}
    }

    else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("Win, Scissors beats paper");
            return humanScore += 1;
        } else if (computerChoice == "rock"){
            console.log("Lose. rock beats scissors");
            return computerScore += 1;
        } else { console.log(tie);}
    }
}

function playGame () {
    let humanScore = 0;
    let computerScore = 0;
     
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore){
        console.log("You Won the game.");
    } else {
        console.log("The Computer Won, You lose.");
    }

    console.log("Human Score: " + humanScore);
    console.log("CPU Score: " + computerScore);
}

playGame();





