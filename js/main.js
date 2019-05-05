
// set scores of both players as an array
let gameOn, scores, roundScore, activePlayer, diceNumber, firstNumber, secondNumber, playerDice, diceImage, currentScore;

init();

// btn-roll
document.querySelector('.btn-roll').addEventListener('click', _ => {
    if (gameOn) {
        // random number
        diceNumber = Math.floor(Math.random() * 6) + 1;

        // correspondent img
        diceImage = `dist/img/Dice-${diceNumber}-b.svg.png`;

        // player's dice img
        playerDice = document.querySelector(`.img-${activePlayer}`);

        // display Number 
        playerDice.src = diceImage;

        // update round score if != 1
        if (diceNumber != 1) {
            // add score to total and display it
            roundScore += diceNumber;

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

    activePlayer === 1 ? activePlayer = 2 : activePlayer = 1;
    roundScore = 0;

    document.getElementById(`current-1`).textContent = 0;
    document.getElementById(`current-2`).textContent = 0;

    document.querySelector(`.player-1`).classList.toggle('active');
    document.querySelector(`.player-2`).classList.toggle('active');

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

