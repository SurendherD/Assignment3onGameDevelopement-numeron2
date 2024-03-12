// Iteration 8: Making scoreboard functional
var scoreboard=document.getElementById("score-board");
var playAgain=document.getElementById("play-again-button");

score=localStorage.getItem("score");
scoreboard.innerHTML=score;

playAgain.addEventListener("click",()=>{
    window.location.href="./index.html";
});