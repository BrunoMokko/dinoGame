let startBtn = document.getElementById('start');
let pauseBtn = document.getElementById('pause');
let runBtn = document.getElementById('run');
let game = document.querySelector('.game');
let dino = document.getElementById('dino');
let kaktus = document.getElementById('kaktus');
let gameOver = document.getElementById("gameOver");
let counter = 0;

document.addEventListener('keypress', function (e){
    jump();
});

function start() {
    game.style.display = 'block';
    if(startBtn.classList != "startClosed"){
        startBtn.classList.add("startClosed");
    };
    gameOver.style.display = "block";
    const intervalId = setInterval(function () {
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));
        if(cactusLeft < 36 && cactusLeft > 0 && dinoTop >= 0) {
            setTimeout(function(){
                document.getElementById("gameOver").style.height = "200px";
                // document.getElementById("gameOver").style.backgroundColor = "#8d0f0f";
                dinoDisap();
                gameOver.innerHTML = '<br>' + "Jumped over: " + counter + " graves<hr><br><br>Ooops...<br><br>Let's try again";
            }, 100);
            clearInterval(intervalId);
            counter -= 1;
        };
        counter += 1;
        gameOver.innerHTML = "Jumped over: " + counter + " graves";
    }, 2100);
};

function pause() {
    pauseBtn.style.display = 'none';
    runBtn.style.display = 'block';
    if(kaktus.style.animationPlayState != "paused"){
        kaktus.style.animationPlayState = "paused";
        runBtn.style.background = '#49de0f';
        runBtn.innerHTML = '&#5125;';

    };
};

function run() {
    runBtn.style.display = 'block';
    if(kaktus.style.animationPlayState != "running"){
        kaktus.style.animationPlayState = "running";
        pauseBtn.style.display = 'block';
        runBtn.style.display = 'none';
    };
};

function dinoDisap() {
    if (dino.classList != "dinoDisap") {
        dino.classList.add("dinoDisap");
    };
};

function jump() {
    if(dino.classList != "jump"){
        dino.classList.add("jump");
    };

    setTimeout( function(){
        dino.classList.remove("jump");
    }, 300);
};

// function lvlUp(){
//     if(counter < 2) {
//         kaktus.style.animationDuration = '1.8s';
//     } if(counter > 2 && counter <= 4) {
//         kaktus.style.animationDuration = '1.1s'
//     } if(counter > 4) {
//         kaktus.style.animationDuration = '0.5s'
//     }
// }

let isAlive = setInterval( function(){
     // lvlUp();
     let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
     let cactusLeft = parseInt(window.getComputedStyle(kaktus).getPropertyValue("left"));

    if(cactusLeft < 36 && cactusLeft > 0 && dinoTop >= 140 ) {
             kaktus.style.animationPlayState = "paused";
    };
}, 100);


