let icons = document.querySelectorAll(".fix .fix_icon");
let container2 = document.querySelector(".container2")
let result = document.querySelector(".result h2");

const clickSound = new Audio('onclick.mp3'); // Path to your sound file
const clickSound1 = new Audio('onwin.mp3'); 
const clickSound2 = new Audio('onloss.mp3');
const clickSound3 = new Audio('draw.mp3'); 
let arr = [['rock','fa-solid fa-hand-back-fist'],['paper','fa-solid fa-hand'],['scissor','fa-solid fa-hand-scissors']];

for(let i=0;i<icons.length;i++){
    icons[i].addEventListener("click",function(){
        clickSound.play(); 
        result.innerText = "";//This line clears any previous result text (like "YOU WON", "COMP WON", or "DRAW").
        container2.innerHTML = "";//This clears any previous selections displayed in the "selection-container" (where the user's and computer's choices are shown).
        setTimeout(gameLogic, 1000,i);//setTimeout(function, delay, arg) fn is used to run a function after a certain amount of time has passed.
    })
}
function gameLogic(i){
    let playerChoice = arr[i][0];// The player's choice (Rock, Paper, or Scissors)
        let ran = Math.floor(Math.random()*3);// Random number (0, 1, or 2)
        let compChoice = arr[ran][0];//Computer's random choice (Rock, Paper, or Scissors)
        console.log(playerChoice,compChoice);
      container2.innerHTML = `
        <div class="you"><h2>You</h2><div class="fix_icon"><i class="${arr[i][1]}"></i></div></div>
        <div class="comp"><h2>Comp</h2><div class="fix_icon"><i class="${arr[ran][1]}"></i></div></div> 
        `

        if(playerChoice == compChoice){
            result.innerHTML = "<span style='color:gray;'>DRAW </span>";
            clickSound3.play();
        }else if((playerChoice == "paper" && compChoice == "rock") ||
                ( playerChoice == "scissor" && compChoice == "paper") || 
                (playerChoice == "rock" && compChoice == "scissor")){
                    result.innerHTML = "<span style='color:green;'>YOU WON </span>"
                    clickSound1.play(); 
                }
        else{
            result.innerHTML = "<span style='color:red;'>YOU LOSS </span>"
            clickSound2.play();
        }
}





















/*<div class="you"><h2>you</h2><div class="fix_icon"><i class="fa-solid fa-hand-scissors"></i></div></div>
        <div class="you"><h2>comp</h2><div class="fix_icon"><i class="fa-solid fa-hand-scissors"></i></div></div>*/
        
