const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.querySelector('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true
if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        validateGuess(guess)
    });
}
function validateGuess(guess){
    if(isNaN(guess)){
        alert('please enter a valid number');
    } else if(guess < 1){
        alert('please enter a number greater than 1');
    } else if(guess > 100) {
        alert('please enter a number less than 100');
    } else {
        prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game over, Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if ( guess ===  randomNumber){
        displayMessage(`you guessed it right`);
        endGame();
    } else if ( guess < randomNumber){
        displayMessage(`Number is tooo low`);
    } else if ( guess > randomNumber){
        displayMessage(`Number is tooo high`);
    }

}

function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += `${guess} `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;

}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id= "newGame"> New Game</h2>`
    startOver.appendChled(p)
    playgame = false;
    newGame()
}

function newGame(){
    const newGameButtton = document.querySelector('#newGame')
    newGameButtton.addEventListener('click', function (e){
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
    })
}