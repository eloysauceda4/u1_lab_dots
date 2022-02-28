/*
 * DOTS: Level One
 *
 */

let score = 0;


let  ball = document.querySelector('.js-ball')
console.log('ball')
let scoreDisplay = document.querySelector('.js-score')
console.log('scoreDisplay')
let  levelWinner = document.querySelector('.level-winner')
console.log('levelWinner') 



ball.addEventListener('click' , () => {
    score += 10
    console.log('click')
    console.log(score)

    if (score < 110) {
        scoreDisplay.innerText = score
    } else {
        declareWinner ()
    }
})





function declareWinner () {
    document.body.classList.add('game-over')
 }