const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    //The Choice made by the user
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1 //or you can use "possiableChoices.length"
    console.log(randomNumber)
// }
//generate the Computer choice in the game

if (randomNumber === 1) {
    computerChoice = 'rock'
}
if (randomNumber === 2) {
    computerChoice = 'scissors'
}
if (randomNumber === 3) {
    computerChoice = 'paper'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Tie, its a draw!!!!!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You Lost!!!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You Lost!!!'
    }
    if (computerChoice === 'rock' && userChoice === "paper") {
        result = 'You Win!!!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You Win!!!'
    }
    if (computerChoice === 'rock' && userChoice === "scissors") {
        result = 'You Lost!!!'
    }
    if (computerChoice === 'paper' && userChoice === "scissors") {
        result = 'You Win!!!'
    }
    if (computerChoice === 'paper' && userChoice === "rock") {
        result = 'You lost!!!'
    }
    if (computerChoice === 'scissors' && userChoice === "rock") {
        result = 'You Win!!!'
    }
    if (computerChoice === 'scissors' && userChoice === "paper") {
        result = 'You lost!!!'
    }
    resultDisplay.innerHTML = result         
}
