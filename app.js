// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened

var PlayButton=document.getElementById("play-button");
PlayButton.addEventListener("click",()=>{
    document.location.href="./game.html";
});