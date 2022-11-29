// options du jeu
const gameOptions = [
  {
    type: "fire",
    losesTo: "water",
  },
  {
    type: "plant",
    losesTo: "fire",
  },
  {
    type: "water",
    losesTo: "plant",
  }
];

// Choix pokemon
let playerOne = document.querySelector('#playerOne'); 
let playerSelection;
let choice = document.querySelector('.youChose')

// Choix starter feu
let pokeFeu = document.querySelector('#poke1'); 
pokeFeu.addEventListener('click', () => playerOne.innerHTML = '<img class="img-fluid pokemon"src="assets/img/Héricendre.png" alt="">')

const starterFeu = document.querySelectorAll(".starterFeu");
for (let i = 0; i < starterFeu.length; i++) {
  let button = starterFeu[i];
  button.addEventListener("click", function () {
    playerSelection = gameOptions[0];
    choice.innerHTML = `<img src="assets/img/fire.png" alt="">`;
  });
}

// Choix starter plante
let pokePlante = document.querySelector('#poke2'); 
pokePlante.addEventListener('click', () => playerOne.innerHTML = '<img class="img-fluid pokemon" src="assets/img/germignon.png" alt="">')

const starterPlante = document.querySelectorAll(".starterPlante");
for (let i = 0; i < starterPlante.length; i++) {
  let button = starterPlante[i];
  button.addEventListener("click", function () {
    playerSelection = gameOptions[1];
    choice.innerHTML = `<img src="assets/img/plant.png" alt="">`;

  });
}

// Choix starter eau
let pokeEau = document.querySelector('#poke3'); 
pokeEau.addEventListener('click', () => playerOne.innerHTML = '<img class="img-fluid pokemon" src="assets/img/kaiminus.png" alt="">')

const starterEau = document.querySelectorAll(".starterEau");
for (let i = 0; i < starterEau.length; i++) {
  let button = starterEau[i];
  button.addEventListener("click", function () {
    playerSelection = gameOptions[2];
    choice.innerHTML = `<img src="assets/img/water.png" alt="">`;
  });
}


//Choix computer
let computerSelection;
const gameButtons = document.querySelectorAll(".fighter");

function getComputerChoice() {
  let computerPokemon = document.querySelector("#computerPokemon");
  let computerChoice = document.querySelector('.computerChose')


  const randomIndex = Math.floor(Math.random() * gameOptions.length);
  computerSelection = gameOptions[randomIndex].type;

  if (computerSelection == gameOptions[0].type) {
    computerPokemon.innerHTML = '<img class="img-fluid pkm" src="assets/img/salamèche.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/fire.png" alt="">'
  
  } else if (computerSelection == gameOptions[1].type) {
    computerPokemon.innerHTML = '<img class="img-fluid pkm" src="assets/img/bulbizarre.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/plant.png" alt="">'

  } else {
    computerPokemon.innerHTML = '<img class="img-fluid pkm" src="assets/img/Carapuce.png" alt="">'
    computerChoice.innerHTML = '<img src="assets/img/water.png" alt="">'

  }
}

function highlight(scoreEl) {
  var orig = scoreEl.style.color;
  scoreEl.style.color = "#f0ac0f";
  setTimeout(function () {
    scoreEl.style.color = orig;
  }, 400);
}

var computerScoreEl = document.getElementById("computerScore");
var userScoreEl = document.getElementById("userScore");

let userScore = 0;
let computerScore = 0;


for (let i = 0; i < gameButtons.length; i++) {
  let button = gameButtons[i];
  let message = document.querySelector('.message');

  button.addEventListener("click", function () {
    getComputerChoice();

    if (playerSelection.type === computerSelection) {
      message.innerHTML = '<p class="bg-light h3 rounded">It s not very effective !</p>'
      highlight(computerScoreEl);
      highlight(userScoreEl);
    } else if (playerSelection.losesTo === computerSelection) {
      message.innerHTML = '<p class="bg-light h3 rounded">YOU LOSE !</p>'
      highlight(computerScoreEl);
      computerScore += 1;
      computerScoreEl.innerText = computerScore;
    } else {
      message.innerHTML = '<p class="bg-light h3 rounded">YOU WIN !</p>'
      highlight(userScoreEl);

      userScore += 1;
      userScoreEl.innerText = userScore;
    }
})}

