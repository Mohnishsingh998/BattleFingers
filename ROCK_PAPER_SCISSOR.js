let score = JSON.parse(localStorage.getItem('score')) || {
    win: 0,
    losses: 0,
    ties:0
};
    updateScoreElement();

function playGame(playerMove){
    const computerMove = pickComputerMove();
    let result ='';
    if (playerMove === 'ROCK') {
        if (computerMove === 'ROCK') {
            result = 'Tie.';
        } else if (computerMove === 'PAPER') {
            result = 'Loose.';
        } else if (computerMove === 'SCISSORS') {
            result = 'Win.';
        }

    }
     else if (playerMove === 'PAPER') {
            if (computerMove === 'PAPER') {
                result = 'Tie.';
            } else if (computerMove === 'SCISSORS') {
                result = 'Loose.';
            } else if (computerMove === 'ROCK') {
                result = 'Win.';
            }
            
        }
    else if (playerMove === 'SCISSORS') {
        if (computerMove === 'SCISSORS') {
            result = 'Tie.';
        } else if (computerMove === 'PAPER') {
            result = 'Win.';
        } else if (computerMove === 'ROCK') {
            result = 'Loose.';
        }
    }
    if (result === 'Win.') {
        score.win += 1;
    }else if (result === 'Tie.') {
        score.ties += 1;
    }else if (result === 'Loose.') {
        score.losses += 1;
    }

    localStorage.setItem('score', JSON.stringify(score))
    updateScoreElement();

    function pickComputerMove() {
    
        const randomeMove = Math.random();
        let computerMove = '';
        if (randomeMove>= 0 && randomeMove<1/3) {
            computerMove = 'ROCK'
        } else if (randomeMove>= 1/3 && randomeMove< 2/3) {
            computerMove = 'PAPER'
        }else if(randomeMove>= 2/3 && randomeMove<1){
            computerMove = 'SCISSOR'
        }  
    
        return computerMove;
    }
}
function updateScoreElement(){
    document.querySelector('.score').innerHTML = 
`<p class="win-score">WINS : ${score.win}</p>
<p class="losses-score">LOSSES : ${score.losses}</p>
<p class="ties-score">TIES : ${score.ties}</p>`;
}