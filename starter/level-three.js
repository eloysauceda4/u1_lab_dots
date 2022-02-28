/*
 * DOTS: Level Three
 *
 */
let score = 0
let arenaE = document.querySelector('.js-arena')
let scoreE = document.querySelector('.js-score')

arenaE.addEventListener('click', (e) => {
    if ( e.target.classList.contains('js-ball')) {
        score += parseInt(e.target.dataset.increment)
        if (score < 100) {
            scoreE.innerText = score
        } else {
            declareWinner ()
        }
    }
})

function declareWinner () {
    document.body.classList.add('game-over')
}