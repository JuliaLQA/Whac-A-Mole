const cells = document.querySelectorAll('.cell');
const timeLeft = document.querySelector('#time');
const result = document.querySelector('#score');
const startbutton = document.querySelector('.start');

let score = 0;
let time = 30;
let currentPos;

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        if (parseInt(cell.getAttribute('data-index')) === currentPos) {
            score++;
            result.innerHTML = score;
        }
    })
});

startbutton.addEventListener('click', start);

function start() {
    let startGame = setInterval(() => {
        cells.forEach(cell => {
            cell.innerHTML = '';
        });

        currentPos = Math.floor(Math.random() * 9);
        cells[currentPos].innerHTML = '<div class="mole"></div>';
        
        time--;
        timeLeft.innerHTML = time;
        if (time === 0) {
            clearInterval(startGame);
            setTimeout(() => {
                alert('Конец игры! Для новой игры обнови страницу.');
            }, 500);
        }
    }, 1000);
}