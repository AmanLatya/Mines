const box = document.getElementById('container');
const start = document.getElementById('start');
const restart = document.getElementById('restart');
let num1, num2, num3;
let gameEnded = false;

function generateRandomNumbers() {
    num1 = Math.floor(Math.random() * 25) + 1;
    num2 = Math.floor(Math.random() * 25) + 1;
    num3 = Math.floor(Math.random() * 25) + 1;
    while (num1 === num2 || num2 === num3 || num1 === num3) {
        num1 = Math.floor(Math.random() * 25) + 1;
        num2 = Math.floor(Math.random() * 25) + 1;
        num3 = Math.floor(Math.random() * 25) + 1;
    }
}

generateRandomNumbers();
console.log(num1);
console.log(num2);
console.log(num3);

start.addEventListener('click', () => {
    box.innerHTML = '';
    gameEnded = false;
    for (let i = 1; i <= 25; i++) {
        box.innerHTML += `<button class="btn" id="btn${i}" onclick="update(this, ${i})">*</button>`;
    }
});

let count = 0;
let div = document.createElement('div');

function revealMines() {
    [num1, num2, num3].forEach(num => {
        let mineButton = document.getElementById(`btn${num}`);
        mineButton.style.backgroundColor = 'red';
        mineButton.innerHTML = 'O';
    });
}

function endGame() {
    gameEnded = true;
    box.classList.add('game-over-animation');
    revealMines();
    setTimeout(() => {
        box.innerHTML = '<div class="game-over-message">Game Over</div>';
    }, 1000);
}

function update(obj, index) {
    if (gameEnded) return;
    
    if (index === num1 || index === num2 || index === num3) {
        obj.style.backgroundColor = "red";
        obj.innerHTML = "O";
        endGame();
    } else {
        obj.style.backgroundColor = "yellow";
        obj.innerHTML = "'.'";
        count++;
        box.appendChild(div);
        div.innerHTML = `<span id='score'>SCORE: ${count}</span>`;
    }
}

restart.addEventListener('click', () => {
    box.innerHTML = "";
    count = 0;
    generateRandomNumbers();
    console.log(num1);
    console.log(num2);
    console.log(num3);
    gameEnded = false;
    box.classList.remove('game-over-animation');
});


