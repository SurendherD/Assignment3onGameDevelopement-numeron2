// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

// Iteration 3: Creating variables required to make the game functional

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

// Iteration 5: Creating a randomise function to make the game functional

// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional

var num1=document.getElementById("number1");
var num2=document.getElementById("number2");
var num3=document.getElementById("number3");
var time=document.getElementById("timer");
var operatorBtns=document.getElementById("buttons");

var number1;
var number2;
var operator;
var result;
var score=0;
var Timer=20;

function randomNumber(){
    return Math.floor(Math.random()*101);
}

function displayNumbers(){
    number1=randomNumber();
    number2=randomNumber();
    num1.innerHTML=number1;
    num2.innerHTML=number2;
    randomise();
    stopTimer();
}

function randomise(){
    var btns=document.querySelectorAll("#buttons > img");
    var randomNum=Math.floor(Math.random()*5);
    operator=btns[randomNum].id;
    switch(operator){
        case "plus":
            result=number1+number2;
            break;
        case "minus":
            result=number1-number2;
            break;
        case "mul":
            result=number1*number2;
            break;
        case "divide":
            result=number1/number2.toFixed(2);
            break;
        case "modulus":
            result=number1%number2;
            break;
    }
    num3.innerHTML=result;
}

function check(e){
    if(operator==e){
        score++;
        displayNumbers();
    }
    else{
        gameOver();
    }
}

function gameOver(){
    window.location.href="./gameOver.html";
    localStorage.setItem("score",score);
}


function startTimer(){
    setInterval(()=>{
        Timer--;
        time.innerText=Timer;
        if(Timer==0){
            gameOver();
        }
    },1000);

}

function stopTimer(){
    Timer=20;
    time.innerHTML=Timer;
}

displayNumbers();
startTimer();
operatorBtns.addEventListener("click",(e)=>{
    check(e.target.id);
});
