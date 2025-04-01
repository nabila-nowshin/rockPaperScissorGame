
let score=JSON.parse(localStorage.getItem('score'))||{
    losses:0,wins:0,ties:0
}
 
updateScore();

let isAutoPlay=false;
let id;

function autoplay() {
    if(isAutoPlay===false){
    // Automatically play the game every second
    id=setInterval(() => {
        playGame(pickComputerMove());
    }, 1000);

    isAutoPlay=true;
    }

    else{
        clearInterval(id);
        isAutoPlay=false;
    }

}

function playGame(myMove){
    const computerMove=pickComputerMove();
    let result='';

    if(myMove==='rock'){
        if(computerMove==='paper'){
        result='You lose';
        }

        else if(computerMove==='rock'){
            result='Tie';
        }

        else if(computerMove==='scissors'){
            result='You win';
        }
    }

    else if(myMove==='paper'){
        if(computerMove==='paper'){
        result='Tie';
        }

        else if(computerMove==='rock'){
            result='You win';
        }

        else if(computerMove==='scissors'){
            result='You lose';
        }
    }
    
    else if(myMove==='scissors'){
        if(computerMove==='paper'){
        result='You win';
        }

        else if(computerMove==='rock'){
            result='You lose';
            }

        else if(computerMove==='scissors'){
            result='Tie';
        }
    }

    if(result==='You win'){
        score.wins++;
    }

    else if(result==='You lose'){
        score.losses++;
    }

    else if(result==='Tie'){
        score.ties ++;
    }

    //store

    localStorage.setItem('score',JSON.stringify(score));
    // console.log(JSON.parse(localStorage.getItem('score')));
    
    document.querySelector('.js-result').innerHTML=`${result}`;

    document.querySelector('.js-moves').innerHTML=`You
<img src="image/${myMove}-emoji.png" alt="">
<img src="image/${computerMove}-emoji.png" alt="">
Computer`;

    updateScore();


}

function updateScore(){
    document.querySelector('.js-score')
    .innerHTML=`Wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`;
}

function pickComputerMove(){
    const randomNum=Math.random();
    console.log(randomNum);
    
    let computerMove='';

    if(randomNum >= 0 && randomNum < 1/3){
        computerMove='rock';}
        
    else if(randomNum >= 1/3 && randomNum < 2/3){
        computerMove='paper';}
        
    else if(randomNum >= 2/3 && randomNum <= 1) {
        computerMove='scissors';
    }
    
    return computerMove;          

}