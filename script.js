'use strict';

const messageDOM = document.querySelector(".message")
const numberDOM = document.querySelector(".number")
const scoreDOM = document.querySelector(".score")
const guessInputDOM = document.querySelector(".guess")
const checkDOM = document.querySelector(".check")
let secretNumber = Math.floor(Math.random() * 20) + 1
const bodyDOM = document.querySelector("body")
const highscoreDOM = document.querySelector(".highscore")
const againDOM = document.querySelector(".again")

let maxscore = 20
let highscore = 0;

againDOM.addEventListener("click", () => {
    secretNumber = Math.floor(Math.random() * 20) + 1
    
    messageDOM.textContent = "Start guessing..."
    scoreDOM.textContent = 20
    highscoreDOM.textContent = highscore
    bodyDOM.style.backgroundColor = "#000"
    numberDOM.textContent = "?"
    guessInputDOM.value = ""
    numberDOM.style.width = "15rem"
    numberDOM.style.color = "#000"
    messageDOM.style.color = "#fff"
    numberDOM.style.backgroundColor = "#fff"
})



const func = checkDOM.addEventListener("click", () => {
    const guess =  parseInt(guessInputDOM.value); //Number() da kullanılabilir.
    
    if(!guess || guess <= 0 || guess > 20){
        console.log("Number should be in between 1-20");
    }
    else if (guess === secretNumber){
        numberDOM.textContent = secretNumber;
        numberDOM.style.color = "#60b347"
        messageDOM.textContent = "Answer is correct!"
        bodyDOM.style.backgroundColor = "#60b347"
        messageDOM.style.color = ""
        numberDOM.style.backgroundColor = ""
        numberDOM.style.width = "30rem"
        scoreDOM.textContent--
        highscoreDOM.textContent = 20 - Math.abs(scoreDOM.textContent - maxscore + 1) ;
        highscore = 20 - Math.abs(scoreDOM.textContent - maxscore + 1)
        if(scoreDOM.textContent > highscore){
           highscore = scoreDOM.textContent;
        }
        
    }
    else if(guess > secretNumber){
        if(scoreDOM.textContent > 1){
            scoreDOM.textContent--
            messageDOM.textContent = "Lower!"
            messageDOM.style.color = "red"
            numberDOM.style.backgroundColor = "red"
        } else{
            messageDOM.textContent = "You lost the game!"
            scoreDOM.textContent = 0
            bodyDOM.style.backgroundColor = "red"
        }
        
  }
    else if(guess < secretNumber){
        if(scoreDOM.textContent > 1){
            scoreDOM.textContent--
            messageDOM.textContent = "Higher!" 
            messageDOM.style.color = "red"
            numberDOM.style.backgroundColor = "red"
        }else {
            messageDOM.textContent = "You lost the game!"
            scoreDOM.textContent = 0
            bodyDOM.style.backgroundColor = "red"
        }
    }
    return highscore
})





