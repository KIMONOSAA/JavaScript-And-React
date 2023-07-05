let order = []; //电脑随机
let playerOrder = []; //玩家
let flash; //gameTurn函数里的计时器
let turn; //计时器
let good; //判断玩家点击的跟电脑正不正确
let compTurn; //如果为true就可以执行随机那个东西
let intervalId; //定时器ID
let strict = false;
let noise = true; // 是否噪声
let on = false; //是否点击到按钮
let win; //

const turnCounter = document.querySelector("#turn");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");
const strictButton = document.querySelector("#strict"); //严格按钮
const onButton = document.querySelector("#on"); //
const startButton = document.querySelector("#start"); //

strictButton.addEventListener('click',(event) => {
    if(strictButton.checked == true){
        strict = true;
    }else{
        strict = false;
    }
});
onButton.addEventListener('click',(event) => {
    if(onButton.checked == true){
        on = true;
        turnCounter.innerHTML = "-";
    }else{
        on = false;
        turnCounter.textContent = "";
        clearColor();
        clearInterval(intervalId);
    }
});

startButton.addEventListener('click',(event) => {
    if(on || win){ 
        play();
    }
});

function play(){
    win = false;
    order = [];
    playerOrder = [];
    flash = 0;
    intervalId = 0;
    turn = 1;
    turnCounter.innerHTML = 1;
    good = true;
    for(let i = 0;i<20;i++){
        order.push(Math.floor(Math.random() * 4) + 1);
    }

    compTurn = true;
    intervalId = setInterval(gameTurn,800);
}

function gameTurn(){
    on = false; //当执行的时候我们不想让客户点击按钮所以on设置为false
    if(flash == turn){
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }

    if(compTurn){
        clearColor();
        setTimeout(() => {
            if(order[flash] === 1) one();
            if(order[flash] === 2) two();
            if(order[flash] === 3) three();
            if(order[flash] === 4) four();
            flash++;
        },200);
    }
}

function one(){
    if(noise){
        let audio = document.getElementById("clip1");
        audio.play();
    }
    noise = true;
    topLeft.style.backgroundColor = "lightgreen";
}
function two(){
    if(noise){
        let audio = document.getElementById("clip2");
        audio.play();
    }
    noise = true;
    topRight.style.backgroundColor = "tomato";
}

function three(){
    if(noise){
        let audio = document.getElementById("clip3");
        audio.play();
    }
    noise = true;
    bottomLeft.style.backgroundColor = "yellow";
}

function four(){
    if(noise){
        let audio = document.getElementById("clip4");
        audio.play();
    }
    noise = true;
    bottomRight.style.backgroundColor = "lightskyblue";
}

function clearColor(){
    topLeft.style.backgroundColor = "darkgreen";
    topRight.style.backgroundColor = "darkred";
    bottomLeft.style.backgroundColor = "goldenrod";
    bottomRight.style.backgroundColor = "darkblue";
}
function flashColor(){
    topLeft.style.backgroundColor = "lightgreen";
    topRight.style.backgroundColor = "tomato";
    bottomLeft.style.backgroundColor = "yellow";
    bottomRight.style.backgroundColor = "lightskyblue";
}

topLeft.addEventListener('click', (event) =>{
    if(on){
        playerOrder.push(1);
        check();
        one();
        if(!win){
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
topRight.addEventListener('click', (event) =>{
    if(on){
        playerOrder.push(2);
        check();
        two();
        if(!win){
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
bottomLeft.addEventListener('click', (event) =>{
    if(on){
        playerOrder.push(3);
        check();
        three();
        if(!win){
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});
bottomRight.addEventListener('click', (event) =>{
    if(on){
        playerOrder.push(4);
        check();
        four();
        if(!win){
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
});

function check(){
    if(playerOrder[playerOrder.length - 1] !== order[playerOrder.length - 1]){
        good = false;
    }
    if(playerOrder.length == 20 && good){
        winGame();
    }
    if(good == false){
        flashColor();
        turnCounter.innerHTML = "NO!";
        setTimeout(() =>{
            turnCounter.innerHTML = turn;
            clearColor();

            if(strict){
                play();
            }else{
                compTurn = true;
                flash = 0;
                playerOrder = [];
                good = true;
                intervalId = setInterval(gameTurn,800);
            }
        },800);
        noise = false;
    }
    if(turn == playerOrder.length && good && !win){
        turn++;
        playerOrder = [];
        compTurn = true;
        flash = 0;
        turnCounter.innerHTML = turn;
        intervalId = setInterval(gameTurn,800);
    }
}

function winGame(){
    flashColor();
    turnCounter.innerHTML = "WIN!";
    on = false;
    win = true;
}