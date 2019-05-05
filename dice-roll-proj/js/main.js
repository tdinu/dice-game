
// set scores of both players as an array
let gameOn, scores, roundScore, activePlayer, diceNumber, firstNumber, secondNumber, playerDice, diceImage, currentScore;

// scores = [0, 0];  
// roundScore = 0;
// activePlayer = 1;

// playerDice = document.querySelector(`.img-${activePlayer}`);  
// currentScore = document.getElementById(`current-${activePlayer}`);

init();

// btn-roll
document.querySelector('.btn-roll').addEventListener('click', _ => {
    if (gameOn) {
        // random number
        diceNumber = Math.floor(Math.random() * 6) + 1;

        // correspondent img
        diceImage = `img/Dice-${diceNumber}-b.svg.png`;

        // player's dice img
        playerDice = document.querySelector(`.img-${activePlayer}`); 

        // current player's score
        // currentScore = document.getElementById(`current-${activePlayer}`);

        // display Number 
        playerDice.src = diceImage;

        // update round score if != 1
        if (diceNumber != 1) {
            // add score to total and display it
            roundScore += diceNumber;

            // document.getElementById(`score-${activePlayer}`).innerText = roundScore;

            document.getElementById(`current-${activePlayer}`).textContent = roundScore;

        } else {
            // next player
            nextPlayer();
        }
    }
    
})

// btn-hold
document.querySelector('.btn-hold').addEventListener('click', _ => {
    if (gameOn) {
        // add current score to total score
        scores[activePlayer - 1] += roundScore;

        // currentScore = document.getElementById(`current-${activePlayer}`);
        //console.log(scores[activePlayer - 1]);

        // update UI
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer - 1];

        // check if player won the game
        if (scores[activePlayer - 1] >= 100) {
            document.getElementById(`name-${activePlayer}`).textContent = 'WINNER!';

            document.getElementById(`name-${activePlayer}`).classList.add('winner');

            document.getElementById(`name-${activePlayer}`).classList.remove('active');

            gameOn = false;

        } else {
            // next player
            nextPlayer();
        }
        
    }
    
})

// btn-new
document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    // next player; ternary; roundScore 0
    //currentScore = document.getElementById(`current-${activePlayer}`);

    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;
    
    // document.getElementById(`current-${activePlayer}`).textContent = 0;

    document.getElementById(`current-1`).textContent = 0;
    document.getElementById(`current-2`).textContent = 0;

    document.querySelector(`.player-1`).classList.toggle('active');
    document.querySelector(`.player-2`).classList.toggle('active');
    //document.querySelector(`.player-${activePlayer}`).classList.toggle('active');
    // or remove/add
    
    // diceImage = `img/Dice-${diceNumber}-b.svg.png`;
}

function init() {

    scores = [0, 0];  
    roundScore = 0;
    activePlayer = 1;
    gameOn = true;

    document.getElementById(`score-1`).textContent = 0;
    document.getElementById(`score-2`).textContent = 0;

    document.getElementById(`current-1`).textContent = 0;
    document.getElementById(`current-2`).textContent = 0;

    document.getElementById(`name-1`).textContent = "Player 1";
    document.getElementById(`name-2`).textContent = "Player 2";

    document.getElementById(`name-1`).classList.remove('winner');
    document.getElementById(`name-2`).classList.remove('winner');

    document.querySelector(`.player-1`).classList.remove('active');
    document.querySelector(`.player-2`).classList.remove('active');

    document.querySelector(`.player-1`).classList.add('active');
}

/*
// scores = [0, 0];  
// roundScore = 0;
// activePlayer = 1;

document.getElementById(`score-1`).textContent = 0;
document.getElementById(`score-2`).textContent = 0;
document.getElementById(`current-1`).textContent = 0;
document.getElementById(`current-2`).textContent = 0;

 */

//diceNumber = Math.floor(Math.random() * 6) + 1;
//diceImage = `img/Dice-${diceNumber}-b.svg.png`;

//currentScore = document.getElementById(`current-${activePlayer}`);
// document.getElementById(`current-${activePlayer}`).innerText = diceNumber;  // innerHTML  = `<em> ${diceNumber} </em>` 
// x = document.querrySelector('#score-1').textContent;

//document.querySelector('.img-1').setAttribute('src', diceImage);

// document.querySelector('.img-2').style.visibility = 'hidden';

//playerDice.setAttribute('src', diceImage);


/*
// 2 players dice roll
// get the random number from 1 to 6

// let firstNumber = Math.ceil(Math.random() * 6);

let firstNumber = Math.floor(Math.random() * 6) + 1;
// Dice-1-b.svg.png
let secondNumber = Math.floor(Math.random() * 6) + 1;

let scoreOne = `img/Dice-${firstNumber}-b.svg.png`;
document.querySelector('.img-1').setAttribute('src', scoreOne);

let scoreTwo = `img/Dice-${secondNumber}-b.svg.png`;
document.querySelector('.img-2').setAttribute('src', scoreTwo);

if (scoreOne > scoreTwo) {
    document.getElementById("winner").innerHTML = "Player 1 wins!";
} else if (scoreOne < scoreTwo) {
    document.getElementById("winner").innerHTML = "Player 2 wins!";
} else {
    document.getElementById("winner").innerHTML = "Deuce!";
}

let rollDice = prompt("How many times do you want to roll the dice? ", 5);  

for (let i = 1; i <= rollDice; i++) {
    randomNr = Math.ceil(Math.random() * 6);
    console.log(randomNr)
}

*/

/* // btn-roll
document.querySelector('.btn-roll').addEventListener('click', _ => {
    // random number
    diceNumber = Math.floor(Math.random() * 6) + 1;
    // correspondent img
    diceImage = `img/Dice-${diceNumber}-b.svg.png`;
    // player's dice img
    playerDice = document.querySelector(`.img-${activePlayer}`); 
    // current player's score
    currentScore = document.getElementById(`current-${activePlayer}`);

    // display Number 
    playerDice.src = diceImage;

    // update round score if != 1
    if (diceNumber != 1) {
        // add score to total and display it
        roundScore += diceNumber;

        // document.getElementById(`score-${activePlayer}`).innerText = roundScore;

        currentScore.textContent = roundScore;

    } else {
        // next player; ternary; roundScore 0
        currentScore.textContent = 0;
        roundScore = 0;
        activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
        
        document.querySelector(`.player-1`).classList.toggle('active');
        document.querySelector(`.player-2`).classList.toggle('active');
        // document.querySelector(`.player-${activePlayer}`).classList.toggle('active');
        // or remove/add
        
        // diceImage = `img/Dice-${diceNumber}-b.svg.png`;
    }
}) */