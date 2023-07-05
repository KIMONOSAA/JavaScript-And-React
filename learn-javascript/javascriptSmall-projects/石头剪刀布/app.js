let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter === "p") return "paper";
    return "Scissors";
}

function win(computerChoice,userChoice){
    userScore++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.textContent =  userScore;
    computerScore_span.textContent = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function(){userChoice_div.classList.remove('green-glow')},300);
    result_p.textContent = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} .You win!;`
}
function lose(computerChoice,userChoice){
    computerScore++;
    const userChoice_div = document.getElementById(userChoice);
    userScore_span.textContent =  userScore;
    computerScore_span.textContent = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function(){userChoice_div.classList.remove('red-glow')},300);
    result_p.textContent = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} .You lose! ;`

}
function draw(computerChoice,userChoice){
    const userChoice_div = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function(){userChoice_div.classList.remove('gray-glow')},300);
    result_p.textContent = `${convertToWord(userChoice)}${smallUserWord} equal ${convertToWord(computerChoice)}${smallCompWord} .It's a draw! ;`

}

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber =  Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function game(userChoice){
    const computerChoice = getComputerChoice();
    switch(computerChoice + userChoice){
        case "rs":
        case "pr":
        case "sp":
            win(computerChoice,userChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(computerChoice,userChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(computerChoice,userChoice);
            break;
    }
}
function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    });
    paper_div.addEventListener('click',function(){
        game("p");
    });
    scissors_div.addEventListener('click',function(){
        game("s");
    });
}
main();