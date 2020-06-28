document.addEventListener("DOMContentLoaded",function(){
    const squares = document.querySelectorAll('.column div div');
    const cover = document.querySelector('#cover');
    const score = document.querySelector('span');
    const winner = document.querySelector('#winner');
    const reset = document.querySelector('button');
    const hs = document.querySelector('#hs');

    hs.innerHTML = localStorage.getItem("highScore") || '-'

    let first = 0;
    let second = 0;

    let counter = 0;
    let currentScore = 0;

    reset.addEventListener('click',function(){
        location.reload();
    })

    for(var square of squares){
        square.addEventListener('click', function(e){
        console.log(e.target.id);
        e.target.style.zIndex = '-2';
        if (first === 0){
            first = e.target;
            first.id
        }
        else{
            second = e.target;
            currentScore ++;
            score.innerHTML = currentScore;
            if(first.id !== second.id){
                cover.style.zIndex = '5';
                setTimeout(() => {
                    cover.style.zIndex = '-5';
                    first.style.zIndex = '1';
                    second.style.zIndex = '1';
                    first = 0;
                    second = 0; 
                }, 1500);    
            }
            else{
                counter ++;
                first = 0;
                second = 0;
                if (counter === 12){
                    if(localStorage.getItem("highScore") > currentScore || localStorage.getItem("highScore") === '-'){
                        localStorage.setItem("highScore", currentScore);
                        hs.innerHTML = currentScore;
                        winner.innerHTML = `High score! You won in only ${currentScore} guesses!`
                    }
                    else {
                        winner.innerHTML = `You Won! It took you ${currentScore} guesses. Try and beat the high score of ${localStorage.getItem("highScore")}.`;
                    }
                }
            }
        }
      })
    }
})