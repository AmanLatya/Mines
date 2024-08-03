box = document.getElementById('container');
start = document.getElementById('start');
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 1;
let num3 = Math.floor(Math.random() * 25) + 1;
while (num1 == num2 || num2 == num3 || num1 == num3) {
    num1 = Math.floor(Math.random() * 25) + 1;
    num2 = Math.floor(Math.random() * 25) + 1;
    num3 = Math.floor(Math.random() * 25) + 1;
}
console.log(num1);
console.log(num2);
console.log(num3);

start.addEventListener('click', () => {
    for (i = 1; i <= 25; i++) {
        box.innerHTML += `<button class = "btn" onclick = update(this,${i})>*</button>`
    }
})


score = document.getElementById('score');
count = 0;
div = document.createElement('div');
function update(obj, index) {
    if (index == num1 || index == num2 || index == num3) {
        obj.style.backgroundColor = "red"
        obj.innerHTML = "O"
        // setInterval(function () {
        //     alert("lose");
        // }, 1000)
        alert("lose");
    }
    else {
        obj.style.backgroundColor = "yellow"
        obj.innerHTML = "'.'"
        count++;
        box.appendChild(div)
        div.innerHTML = `<span id = 'score' >SCORE : ${count} </span>`
    }
}
restart.addEventListener('click', () => {
    box.innerHTML = ""
    count = 0;
    num1 = Math.floor(Math.random() * 25) + 1;
    num2 = Math.floor(Math.random() * 25) + 1;
    num3 = Math.floor(Math.random() * 25) + 1;
    while (num1 == num2 || num2 == num3 || num1 == num3) {
        num1 = Math.floor(Math.random() * 25) + 1;
        num2 = Math.floor(Math.random() * 25) + 1;
        num3 = Math.floor(Math.random() * 25) + 1;
    }
    console.log(num1);
    console.log(num2);
    console.log(num3);
})